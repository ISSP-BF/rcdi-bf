<template>
  <CRow>
    <CCol col="12" xl="12">
       
        <div class=" col-lg-12" > 
          <h3>  <b>Foire aux Questions</b></h3>
            
        </div>
       
<br>
      <div>
        <CCard class="mb-0" v-for="item in items" v-bind:key="item.id">
          <CButton
            block
            color="link"
            class="text-left shadow-none card-header"
            @click="accordion = accordion === item.id ? false : item.id"
          >
            <h5 class="m-0">Q: {{ item.question }}</h5>
          </CButton>
          <CCollapse :show="accordion === item.id">
            <CCardBody>
              <p><b>Réponse :</b></p>
               <p v-html="item.reponse"></p>
            </CCardBody>
          <div class="col-lg-12">
            <EditButton  @modifier="editFoireQuestion(item.id)"/>
                    &nbsp;
                    <DeleteButton  @modifier="deleteFoireQuestion(item.id)"/>
          </div>
          </CCollapse>
          
          
        </CCard>
      </div>
      <br>
      <br>
      <AddButton @ajouter="createFoireQuestion()" />&nbsp;
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
import AddButton from "../buttons/AddButton.vue";
import EditButton from '../buttons/EditButton.vue'
import DeleteButton from '../buttons/DeleteButton.vue'

export default {
  name: "FoireQuestions",
  components: {
    AddButton,EditButton,DeleteButton
  },
  data: () => {
    return {
      items: [],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      you: null,
      message: "",
      accordion: 0,
    };
  },
  computed: {},
  methods: {
    getRowCount(items) {
      return items.length;
    },
    showFoireQuestion(id) {
      this.$router.push({ path: `foire-questions/${id.toString()}` });
    },
    editFoireQuestion(id) {
      this.$router.push({ path: `foire-questions/${id.toString()}/edit` });
    },
    deleteFoireQuestion(id) {
      let self = this;
      axios
        .post(
          this.$apiAdress +
            "/api/foire-questions/" +
            id +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            _method: "DELETE",
          }
        )
        .then(function (response) {
          self.$toasted.show("Foire au question a été supprimée avec succès", {
            type: "success",
          });
          self.getFoireQuestions();
        })
        .catch(function (error) {
          console.log(error);
          // self.$router.push({ path: '/login' });
        });
    },
    createFoireQuestion() {
      this.$router.push({ path: "/foire-questions/create" });
    },
    getFoireQuestions() {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/foire-questions?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.items = response.data;
        })
        .catch(function (error) {
          console.log(error);
          // self.$router.push({ path: '/login' });
        });
    },
  },
  mounted: function () {
    this.getFoireQuestions();
  },
};
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
