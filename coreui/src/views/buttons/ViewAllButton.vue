<template>
  <CButton color="primary" @click="$emit('afficherTout')" v-if="show">Afficher tout</CButton>
</template>

<script>


export default {
  name: 'ViewAllButton',
  emits: ['afficherTout'],
  data: () => {
    return {
      show:false,
      successModal: false,
    }
  },
  mounted: function(){
    this.show = true;
    let roles = localStorage.getItem("roles");
    if (roles != null) {
        roles = roles.split(',')
    }
    // console.log(roles)
    if (roles != null && roles.indexOf('ajouter') >= 0){this.show = true;}
  }
}
</script>