<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        <CCardBody>
          <h3>
            Modifier le dashboard
          </h3>
          <CCol col="12" lg="6">
            <CInput label="Libelle" type="text" placeholder="Libelle" v-model="dashboard.libelle"></CInput>
          </CCol>
          <CCol col="12" lg="12">
            <quill-editor :content="dashboard.description" v-model="dashboard.description" />
          </CCol>
          <CCol col="12" lg="12">
            <p>Roles</p>
            <div class="m-3">
              <CInputCheckbox
                  v-for="rol in role"
                  :key="rol"
                  :label="rol"
                  name="selectRoles"
                  @update:checked="selectRadioSelectRole(rol)"
                  :checked="fixedmenuroles[rol]"
              />
            </div>
          </CCol>
          <BR></BR>
          <CButton color="primary" @click="update()">Modifier</CButton> &nbsp;
          <CButton color="secondary" @click="goBack">Retour</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditUser',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  data: () => {
    return {
        dashboard: {
          libelle: '',
          decription: '',
          role:[],
          
        },
        fixedmenuroles: [],
        message: '',
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
          },
    selectRadioSelectRole(role){
      if(!this.dashboard.role) this.dashboard.role = [];
      let temp = this.dashboard.role?.indexOf(role); 
      if (temp > -1) {
        this.dashboard.role.splice(temp, 1);
      }else{
        this.dashboard.role.push(role);
      }
      console.log(this.dashboard.role);
    },
    update() {
        let self = this;
        this.dashboard.role = this.dashboard?.role?.toString();
        axios.post(  this.$apiAdress + '/api/dashboards/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"),
        {
            _method: 'PUT',
            libelle:            self.dashboard.libelle,
            description:          self.dashboard.description,
            role:          self.dashboard.role,
          
        })
        .then(function (response) {
          self.$router.go(-1)
            self.$toasted.show(response.data.message,{type:"success"}); 
        }).catch(function (error) {
            if(error.response.data.message == 'The given data was invalid.'){
              self.message = '';
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + '  ';
                }
              }
            self.$toasted.show(self.message,{type:"danger"}); 
            }else{
              console.log(error); 
              self.$router.push({ path: '/login' }); 
            }
        });
    },
    getRoles() {
      let self = this;
      axios.get(  this.$apiAdress + '/api/dashboards/create?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.role = response.data.roles;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
  },
  mounted: function(){
    let self = this;
        self.getRoles();
    axios.get(  this.$apiAdress + '/api/dashboards/' + self.$route.params.id + '/edit?token=' + localStorage.getItem("api_token"))
    .then(function (response) {
        self.dashboard = response.data;
        self.dashboard.role = self.dashboard.role?.split(",");
        for(let rol of self.dashboard.role){
          self.fixedmenuroles[rol] = true;
        }
        self.fixedmenuroles = self.dashboard.role?.split(",");
    }).catch(function (error) {
        console.log(error);
        // self.$router.push({ path: '/login' });
    });
    
  }
}

</script>
