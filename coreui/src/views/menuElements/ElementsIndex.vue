<template>
  <CRow>
    <CCol col="12" xl="8">
      <transition name="slide">
        <CCard>
          <CCardBody>
            <h4>
              Menus
            </h4>
              <CButton color="primary" @click="addElementToMenu()" class="mb-3">Ajouter un élément au menu</CButton>
              <CDataTable
                hover
                :items="items"
                :fields="fields"
                :items-per-page="30"
                pagination
              >
                <template #menu_deroulant="{item}">
                  <td>
                    <CIcon v-if="item.dropdown" :content="$options.arrowIcon"/>
                  </td>
                </template>
                <template #intitule="{item}">
                  <td>
                    <strong>{{item.name}}</strong>
                  </td>
                </template>
                <template #actions="{item}">
                  <td>
                    <div class="card-header-actions">
                    <CButton size="sm" color="warning" @click="moveUp( item.id )">Haut</CButton> &nbsp;
                  
                    <CButton size="sm" color="warning" @click="moveDown( item.id )">Bas</CButton>&nbsp;
                  
                    <CButton size="sm" color="primary" @click="showMenu( item.id )">Voir</CButton>&nbsp;
                 
                    <CButton size="sm" color="primary" @click="editMenu( item.id )"><CIcon name="cil-pencil" /></CButton>&nbsp;
                  
                    <CButton size="sm" color="danger" @click="deleteMenu( item.id )"><CIcon name="cil-trash" /></CButton>
                    </div>
                  </td>
                </template>
              </CDataTable>
          </CCardBody>  
        </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
import { cilArrowThickToRight } from '@coreui/icons'
export default {
  arrowIcon: cilArrowThickToRight,
  name: 'MenuIndex',
  data () {
    return {
      fields: ['menu_deroulant', 'intitule', 'actions'],
      items: [],
      buffor: [],
    }
  },
  methods: {
    addElementToBuffor(data, icon){
      this.buffor.push(
        {
          dropdown: icon,
          name: data['name'],
          id: data['id'],
          slug: data['slug'],
          assigned: data['assigned'],
        }
      );
    },
    innerBuildArrayData(data, deep){
      for(let i=0; i<data.length; i++){
        switch(data[i]['slug']){
          case 'link':
            if(deep > 1){
              this.addElementToBuffor(data[i], true);
            }else{
              this.addElementToBuffor(data[i], false);
            }
          break
          case 'title':
            this.addElementToBuffor(data[i], false);
          break;
          case 'dropdown':
            this.addElementToBuffor(data[i], false);
            this.innerBuildArrayData(data[i]['elements'], deep+1)
          break;
        }
      }
    },
    buildArrayData(data){
      this.buffor = [];
      this.innerBuildArrayData(data, 1);
      return this.buffor;
    },
    addElementToMenu(){
      this.$router.push({path: 'menuelement/create'});
    },
    showMenu(id){
      this.$router.push({path: `menuelement/${id.toString()}`});
    },
    editMenu(id){//:menu/menuelement/:id/edit
      this.$router.push({path: `menuelement/${id.toString()}/edit`});
    },
    deleteMenu(id){
      this.$router.push({path: `menuelement/${id.toString()}/delete`});
    },
    moveUp(id){
      let self = this;
      axios.get(  this.$apiAdress + '/api/menu/element/move-up?token=' + localStorage.getItem("api_token") + '&id=' + id )
      .then(function (response) {
        self.getElements();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    moveDown(id){
      let self = this;
      axios.get(  this.$apiAdress + '/api/menu/element/move-down?token=' + localStorage.getItem("api_token") + '&id=' + id )
      .then(function (response) {
        self.getElements();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    getElements() {
      let self = this;
      console.log(self.$route.params.menu)
      axios.get(  this.$apiAdress + '/api/menu/element?token=' + localStorage.getItem("api_token") + '&menu=' + self.$route.params.menu )
      .then(function (response) {
        self.items = self.buildArrayData(response.data.menuToEdit);
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted(){
    this.getElements();
  }
}
</script>
