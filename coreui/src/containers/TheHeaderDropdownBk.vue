<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0" v-if="isAdmin">
    <template #toggler style="cursor:pointer">
    <div>
      <CIcon name="cil-bell" style="cursor: pointer;"> </CIcon><CBadge color="danger" shape="pill" style="cursor: pointer;">{{itemsCount}}</CBadge></div>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Mise à jour</strong>
    </CDropdownHeader>
    <CDropdownItem @click="BkDataUpdated()" v-if="itemsCount>0">
      <CIcon name="cil-user" /> Valider
    </CDropdownItem>
    <CDropdownDivider />
    <CDropdownItem>
      <CIcon name="cil-shield-alt" /> Changer les paramètres
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheHeaderDropdownBk',
  data() {
    return {
      itemsCount: null,
      isAdmin:false,
    }
  },
  methods: {
    getBkDataUpdatedNumber() {
      let self = this;
      axios.get(this.$apiAdress + '/api/BkDataUpdatedNumber?token=' + localStorage.getItem("api_token"))
        .then(function (response) {
          // console.log(response)
          self.itemsCount = response.data;
          if(self.itemsCount == 0) self.itemsCount = null;
        }).catch(function (error) {
          console.log(error);
        });
    },
    BkDataUpdated() {
      this.$toasted.show('Veuillez patienter pendant la mise à jour',{type:"warning"});
      self = this;
      axios.get(this.$apiAdress + '/api/BkDataUpdated?token=' + localStorage.getItem("api_token"))
        .then(function (response) {
          self.getBkDataUpdatedNumber();
          self.$toasted.show('La base de donnée à été mis à jour',{type:"success"});
        }).catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted: function(){
    let roles = localStorage.getItem("roles");
    if (roles != null) {
        roles = roles.split(',')
    }
    
    if(roles.indexOf('admin')>=0){
      this.isAdmin = true;
    this.getBkDataUpdatedNumber();
    }
  }
}
</script>
<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
