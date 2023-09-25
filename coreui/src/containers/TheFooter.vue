<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://www.issp.bf" target="_blank">ISSP</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} </span>  <a href="https://rcdi.bf" target="_blank">RCDI-BF</a>
    </div>
    <div class="ml-auto">
      <a href="#"  @click="successModal = true" >Politique de confidentialité</a>
    </div>
    <div class="ml-auto">
      <span class="mr-1"> </span>
      <CButton block color="link" class="px-0" @click="goFoireQuestion()">FAQ</CButton>

    </div>
    
    <CModal
      size="xl"
      :show.sync="successModal"
      style="display: contents"
      :title="'Politique de Confidentialité'"
    >
      <CRow>
        <CCol col="12" xl="12"> 
            <PrivacyPolicy></PrivacyPolicy>
        </CCol>
      </CRow>
      <template #footer>
        <div></div>
      </template>
    </CModal>
  </CFooter>
</template>

<script>
import PrivacyPolicy from "./PrivacyPolicy.vue";

export default {
  name: 'TheFooter',
  components: {
    PrivacyPolicy,
  },
  data: () => {
    return {
      successModal: false,
    };
  },
    methods: {
      goFoireQuestion(){
        this.$router.push({ path: '/foire-questions' });
      },
    }
}
</script>
