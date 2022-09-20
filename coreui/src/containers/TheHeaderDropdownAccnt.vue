<template>
  <CDropdown inNav class="c-header-nav-items" placement="bottom-end" add-menu-classes="pt-0">
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img src="img/avatars/logo.png" class="c-avatar-img " />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Utilisateur</strong>
    </CDropdownHeader>
    <CDropdownItem @click="profilUser()">
      <CIcon name="cil-user" /> Mon Profil
    </CDropdownItem>
    <CDropdownDivider />

    <CDropdownItem>
      <CIcon name="cil-shield-alt" /> Verrouillé
    </CDropdownItem>
    <CDropdownItem @click="logout()">
      <CIcon name="cil-lock-locked" /> Deconnexion
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheHeaderDropdownAccnt',
  data() {
    return {
      itemsCount: 42,
    }
  },
  methods: {
    profilUser () {
      this.$router.push({path: '/users/profil'});
    },
    logout() {
      let self = this;
      axios.post(this.$apiAdress + '/api/logout?token=' + localStorage.getItem("api_token"), {})
        .then(function (response) {
          localStorage.setItem('roles', '');
          self.$router.push({ path: '/login' });
        }).catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>
<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
