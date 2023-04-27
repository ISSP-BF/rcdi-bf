<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://www.issp.bf" target="_blank">ISSP</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} RCDI-BF.</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Propulsé par </span>
      <a href="https://rcdi.bf" target="_blank">ISSP pour RCDI-BF</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
