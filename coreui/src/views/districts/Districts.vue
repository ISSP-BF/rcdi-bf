<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
         <CCardHeader>
            Districts
            <div class="card-header-actions">
             <CButton color="primary" @click="createDistrict()">Ajouter</CButton>
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
                  <strong>{{item.code}}</strong>
                </td>
              </template>
              <template #region="{item}">
                <td>
                  {{item.region}}
                </td>  
              </template>
              <template #province="{item}">
                <td>
                  {{item.province}}
                </td>  
              </template>
              <template #nom_district="{item}">
                <td>
                  <strong>{{item.nom_district}}</strong>
                </td>
              </template>
              
              <template #nom_majore="{item}">
                <td>
                  <strong>{{item.nom_majore}}</strong>
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
              <template #superficie="{item}">
                <td>
                  {{item.superficie}}
                </td>
              </template>
              <template #actions="{item}">
                <td>
                  <div class="card-header-actions" style="display:flex">
                  <CButton color="secondary"  size="sm" @click="showDistrict( item.id )">Détail</CButton>
                  &nbsp;
                  <CButton  size="sm" color="primary" @click="editDistrict( item.id )"><CIcon name="cil-pencil"/></CButton>
                  &nbsp;
                      <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteDistrict( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
  name: 'Districts',
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
        {key: 'district_type'},
        {key: 'show'},
        {key: 'edit'},
        {key: 'delete'}
      ],
      */
      fields: ['code', 'region', 'province', 'nom_district', 'nom_majore', 'lon', 'lat', 'superficie', 'actions'],
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
    districtLink (id) {
      return `districts/${id.toString()}`
    },
    editLink (id) {
      return `districts/${id.toString()}/edit`
    },
    showDistrict ( id ) {
      const districtLink = this.districtLink( id );
      this.$router.push({path: districtLink});
    },
    editDistrict ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteDistrict ( id ) {
      let self = this;
      let districtId = id;
      axios.post(  this.$apiAdress + '/api/districts/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted district.';
          self.showAlert();
          self.getDistricts();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createDistrict () {
      this.$router.push({path: 'districts/create'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getDistricts (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/districts?token=' + localStorage.getItem("api_token") )
      .then(function (response) {
        self.items = response.data;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getDistricts();
  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
