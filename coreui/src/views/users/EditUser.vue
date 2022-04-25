<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <CForm>
            <template slot="header">
              Edit User id:  {{ $route.params.id }}
            </template>
            <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
            >
              ({{dismissCountDown}}) {{ message }}
            </CAlert>
            <CInput type="text" label="Nom" placeholder="Nom" v-model="user.name"></CInput>
            <CInput type="text" label="Prénom(s)" placeholder="Prénom(s)" v-model="user.firstname"></CInput>
            <CInput type="text" label="Fonction" placeholder="Fonction" v-model="user.fonction"></CInput>
            <CInput type="text" label="Téléphone" placeholder="Téléphone" v-model="user.tel"></CInput>
            <CInput type="text" label="Lieu" placeholder="Lieu" v-model="user.lieu"></CInput>
            <CInput type="text" label="Email" placeholder="Email" v-model="user.email"></CInput>
             <template>
                <div class="form-group form-row">
                  <CCol tag="label" sm="12" class="col-form-label">
                    Roles
                  </CCol>
                  <CCol sm="9" :class="'form-inline'">
                  <CInputCheckbox
                      v-for="rol in role"
                      :key="rol.name"
                      :label="rol.name"
                      :custom="true"
                      name="selectRoles"
                      @update:checked="selectRadioSelectRole(rol.name)"
                      :checked="fixedmenuroles[rol.name]"
                      :inline="true"
                  />
                  </CCol>
                </div>
                </template>
            <CCol sm="5" class="row">   
              
              <CSelect
                label="Status"
                :options="options"
                :value.sync="user.status"
              />
                </CCol>
            <CButton color="primary" @click="update()">Modifier</CButton>&nbsp;
            <CButton color="default" @click="goBack">Retour</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios' 
export default {
  name: 'EditUser',
  // props: {
  //   caption: {
  //     type: String,
  //     default: 'User id'
  //   },
  // },
  data: () => {
    return {
        role: [],
        resultroles: [],
        fixedmenuroles: [],
        user: { 
          name: '',
          email: '',
          status:'',
       },
       
      options: ['Active','Pending','Inactive','Banned'],
          showMessage: false,
          message: '',
          dismissSecs: 7,
          dismissCountDown: 0,
          showDismissibleAlert: false
    }
  },
  methods: {
    onclick(){
      this.$toasted.show("I'm test",{type:"success"});
    },
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    },
    selectRadioSelectRole(role){
      let temp = this.resultroles.indexOf(role); 
      if (temp > -1) {
        this.resultroles.splice(temp, 1);
      }else{
        this.resultroles.push(role);
      }
    },
    update() {
        let self = this;
        self.user.roles = self.resultroles.toString();
        console.log(self.user)
        axios.put(  this.$apiAdress + '/api/users/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        self.user)
        .then(function (response) {
            self.message = 'Successfully updated user.';
            self.showAlert();
            self.$toasted.show("L'utilisateur a bien été mis à jour.",{type:"success"});
        }).catch(function (error) {
            console.log(error,"dao");
            self.$toasted.show("Impossible de mettre à jour les données de l'utilisateur",{type:"error"});
            // self.$router.push({ path: '/login' });
        });
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
  }, 
  mounted: function(){
     
    let self = this;
    axios.get(  this.$apiAdress + '/api/roles?token=' + localStorage.getItem("api_token"))
      .then(function (response) {

    self.role =  response.data;
    
    // Recuperation de l'initialisation des roles
     axios.get(  self.$apiAdress + '/api/users/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
      
        self.user = response.data;
        if(!self.role||!self.user.roles){return}
        self.resultroles = [];
        for(let i = 0; i<self.role.length; i++){

            if(self.user.roles.includes(self.role[i].name)){
                self.resultroles.push(self.role[i].name);
                self.fixedmenuroles[""+self.role[i].name+""] = true;
            }
          }
      }).catch(function (error) {
          console.log(error);
          self.$router.push({ path: '/login' });
      });


      }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
      });
      
   
  }
}


</script>
