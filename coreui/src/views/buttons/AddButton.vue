<template>
  <CButton color="primary" @click="$emit('ajouter')" v-if="show">Ajouter</CButton>
</template>

<script>


export default {
  name: 'AddButton',
  emits: ['ajouter'],
  data: () => {
    return {
      show:false,
      successModal: false,
    }
  },
  mounted: function(){
    let roles = localStorage.getItem("roles");
    if (roles != null) {
        roles = roles.split(',')
    }
    // console.log(roles)
    if (roles != null && roles.indexOf('ajouter') >= 0){this.show = true;}
  }
}
</script>