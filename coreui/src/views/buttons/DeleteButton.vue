<template>     
  <CButton size="sm" color="danger" @click="$emit('supprimer')" v-if="show">
    <CIcon name="cil-x-circle" />
  </CButton>
</template>

<script>


export default {
  name: 'DeleteButton',
  emits: ['supprimer'],
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
    console.log(roles)
    if (roles != null && roles.indexOf('supprimer') >= 0){this.show = true;}
  }
}
</script>