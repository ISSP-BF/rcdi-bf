<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
        <CCardHeader>
            {{formName}}
            <div class="card-header-actions">
             <CButton color="primary" @click="createResource()">Ajouter</CButton>
            </div>
        </CCardHeader>
        <CCardBody>
            
            <CAlert
              :show.sync="dismissCountDown"
              color="primary"
              fade
            >
              ({{dismissCountDown}}) {{ message }}
            </CAlert>
            <CDataTable
              hover
              :items="items"
              :fields="fields"
            >
              <template #show="{item}">
                <td>
                  <div class="card-header-actions" style="display:inline-flex"> 
                      <CButton color="secondary" @click="showResource( item.id )">Détail</CButton>
                      &nbsp;
                      <CButton color="primary" @click="editResource( item.id )"><CIcon name="cil-pencil"/></CButton>
                      &nbsp;
                      <CButton v-if="you!=item.id" color="danger" @click="deleteResource( item.id )"><CIcon name="cil-x-circle"/></CButton>
                  </div>
                </td>
              </template> 
               
            </CDataTable>
            <CPagination
                :pages="maxPages"
                :active-page.sync="activePage"
            />
        </CCardBody>  
      </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Resources',
  data: () => {
    return {
      items: [],
      formName:'',
      fields: ['show'],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      you: null,
      message: '',
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      activePage: 1,
      maxPages: 1,
    }
  },
  watch: {
    activePage(){
      this.getResources();
    },
  },
  computed: {
  },
  methods: {
    getRowCount (items) {
      return items.length
    },
    resourceLink (id) {
      return `resource/${id.toString()}`
    },
    editLink (id) {
      return `resource/${id.toString()}/edit`
    },
    showResource ( id ) {
      const noteLink = this.resourceLink( id )
      this.$router.push({path: noteLink})
    },
    editResource ( id ) {
      const editLink = this.editLink( id )
      this.$router.push({path: editLink})
    },
    deleteResource ( id ) {
      const deleteLink = `resource/${id.toString()}/delete`
      this.$router.push({path: deleteLink})
    },
    createResource () {
      this.$router.push({path: '/resource/' + this.$route.params.bread + '/resource/create'})
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getResources (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/resource/' + self.$route.params.bread + '/resource?token=' + localStorage.getItem("api_token") + '&page=' + self.activePage )
      .then(function (response) {
        console.log(response)
        self.items = response.data.datas
        self.formName = response.data.formName
        self.fields = [];
        for(let i=0;i<response.data.header.length;i++){
          if(response.data.header[i].relation_table !== null){
            self.fields.push({
                key: 'relation_' + response.data.header[i].column_name,
                label: response.data.header[i].name
            })
          }else{
            self.fields.push({
                key: response.data.header[i].column_name,
                label: response.data.header[i].name
            })
          }
        }
        self.fields.push({
                key: 'show',
                label: ''
        })
         
        self.maxPages = response.data.pagination


      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' })
      });
    }
  },
  mounted: function(){
    this.getResources();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
