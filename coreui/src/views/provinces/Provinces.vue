<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Provinces
            <div class="card-header-actions">
             <CButton color="primary" @click="createProvince()">Ajouter</CButton>
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
              :items-per-page="10"
              pagination
            >
              <template #code="{item}">
                <td>
                  {{item.code}}
                </td>
              </template>
              <template #region="{item}">
                <td>
                  <strong>{{item.region}}</strong>
                </td>
              </template>
              <template #province="{item}">
                <td>
                  <strong>{{item.province}}</strong>
                </td>  
              </template>
              <template #cheflieu="{item}">
                <td>
                  {{item.cheflieu}}
                </td>
              </template>
              <template #lon="{item}">
                <td>
                  {{item.lon}}
                </td>
              </template>
             
              <template #lat="{item}">
                <td>
                  {{item.lat}}
                </td>
              </template>
              
              <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showProvince( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editProvince( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteProvince( item.id )"><CIcon name="cil-x-circle"/></CButton>
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

export default {
  name: 'Provinces',
  data: () => {
    return {
      items: [],
      /*
      fields: [
        {key: 'author'},
        {key: 'title'},
        {key: 'content'},
        {key: 'applies_to_date'},
        {key: 'status'},
        {key: 'province_type'},
        {key: 'show'},
        {key: 'edit'},
        {key: 'delete'}
      ],
      */
      fields: ['code', 'region', 'province', 'cheflieu', 'lon', 'lat', 'actions'],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      you: null,
      message: '',
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  computed: {
  },
  methods: {
    getRowCount (items) {
      return items.length
    },
    provinceLink (id) {
      return `provinces/${id.toString()}`
    },
    editLink (id) {
      return `provinces/${id.toString()}/edit`
    },
    showProvince ( id ) {
      const provinceLink = this.provinceLink( id );
      this.$router.push({path: provinceLink});
    },
    editProvince ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteProvince ( id ) {
      let self = this;
      let provinceId = id;
      axios.post(  this.$apiAdress + '/api/provinces/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted province.';
          self.showAlert();
          self.getProvinces();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createProvince () {
      this.$router.push({path: 'provinces/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getProvinces (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/provinces?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getProvinces();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
