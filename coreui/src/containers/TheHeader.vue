<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <!-- <CIcon name="logo" height="48" alt="Logo"/> -->
      <img src="img/avatars/logo-full-no-logo.png" size="custom-size" 
        class="d-block" 
        :height="50" 
        :viewBox="`0 0 ${minimize ? 110 : 556} 134`"/>
    </CHeaderBrand>
    <CMenu/>
    <CHeaderNav class="mr-3">
      <TheHeaderDropdownBk/>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import CMenu from './Menu'
import TheHeaderDropdownBk from './TheHeaderDropdownBk'
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt,TheHeaderDropdownBk,
    CMenu
  },
  data: () => {
    return {
      minimize:''
    }
  }
}
</script>