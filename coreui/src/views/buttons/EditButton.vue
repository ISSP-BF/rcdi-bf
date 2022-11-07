<template>
  <CButton size="sm" color="primary" @click="$emit('modifier')" v-if="show">
                      <CIcon name="cil-pencil" />
                    </CButton>
</template>

<script>


export default {
  name: 'EditButton',
  emits: ['modifier'],
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
    if (roles != null && roles.indexOf('modifier') >= 0){this.show = true;}
  }
}
</script>