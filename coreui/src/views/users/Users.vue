<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
      <CCard>
        <CCardHeader>
            Utilisateurs
            <div class="card-header-actions">
             <CButton color="primary" @click="createUser()">Ajouter</CButton>
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
            striped
            :items="items"
            :fields="fields"
            :items-per-page="10"
            pagination
          >
          <template #status="{item}">
            <td>
              <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
            </td>
          </template>
          <template #name="{item}">
            <td>
              {{ item.name }} {{ item.firstname }}
            </td>
          </template>
          <template #fonction="{item}">
            <td>
              {{ item.fonction }}
            </td>
          </template>
          <template #lieu="{item}">
            <td>
              {{ item.lieu }}
            </td>
          </template>
          <template #tel="{item}">
            <td>
              {{ item.tel }}
            </td>
          </template>
          <template #creation="{item}">
            <td>
              {{ item.created_at| formatDateShort }}
            </td>
          </template>
          <template #actions="{item}">
            <td>
              <CButton color="warning"  size="sm" @click="showUser( item.id )">Détail</CButton>
              &nbsp;
              <CButton  size="sm" color="primary" @click="editUser( item.id )"><CIcon name="cil-pencil"/></CButton>
               &nbsp;
              <CButton v-if="you!=item.id"  size="sm" color="danger" @click="deleteUser( item.id )"><CIcon name="cil-x-circle"/></CButton>
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
import moment from 'moment'


export default {
  name: 'Users',
  data: () => {
    return {
      items: [],
      fields: ['id', 'name','fonction','lieu', 'tel','email','creation', 'roles', 'status', 'actions'],
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
  paginationProps: {
    align: 'center',
    doubleArrows: false,
    previousButtonHtml: 'prev',
    nextButtonHtml: 'next'
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    editLink (id) {
      return `users/${id.toString()}/edit`
    },
    showUser ( id ) {
      const userLink = this.userLink( id );
      this.$router.push({path: userLink});
    },
    editUser ( id ) {
      const editLink = this.editLink( id );
      this.$router.push({path: editLink});
    },
    deleteUser ( id ) {
      let self = this;
      let userId = id;
      axios.post(  this.$apiAdress + '/api/users/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      })
      .then(function (response) {
          self.message = 'Successfully deleted user.';
          self.showAlert();
          self.getUsers();
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    },
    createUser () {
      this.$router.push({path: 'users/create/'});
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    getUsers (){
      let self = this;
      axios.get(  this.$apiAdress + '/api/users?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.items = response.data.users;
        self.you = response.data.you;
      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted: function(){
    this.getUsers();
  }
}

</script>
