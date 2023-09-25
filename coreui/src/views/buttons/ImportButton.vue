<template style="display: contents">
  <div style="display: contents">
    <CModal
      :title="title"
      color="success"
      size="xl"
      :show.sync="successModal"
      style="display: contents"
    >
      <CRow>
        <CCol col="12" xl="12">
          <xls-csv-parser
            :columns="columns"
            @on-validate="onValidate"
            :help="help"
            lang="fr"
          ></xls-csv-parser>
        </CCol>
        <CCol col="12" xl="12" v-if="items.length > 0">
          <transition name="slide">
            <CDataTable
              hover
              sorter
              :items="items"
              :items-per-page="20"
              :fields="fields2"
              pagination
            >
              <template #actions="{ item }">
                <td>
                  <div class="card-header-actions" style="display: flex">
                    &nbsp;
                    <CButton
                      size="sm"
                      color="danger"
                      @click="deleteData(item.id)"
                    />
                  </div>
                </td>
              </template>
            </CDataTable>
          </transition>
        </CCol>
      </CRow>
      <template #footer>
        <CButton @click="successModal = false" color="danger">Annuler</CButton>
        <CButton
          size="sm"
          color="success"
          @click="storeMany()"
          v-if="items.length > 0"
          :disabled="importloading > 0"
          ><CIcon name="cil-x-circle" />
          <div
            class="sk-flow"
            style="height: calc(var(--sk-size) * 0.3)"
            v-if="importloading > 0"
          >
            <div class="sk-flow-dot"></div>
            <div class="sk-flow-dot"></div>
            <div class="sk-flow-dot"></div>
          </div>
          Importer</CButton
        >
      </template>
    </CModal>

    <CButton color="warning" @click="successModal = true" v-if="show">
      Importer </CButton
    >&nbsp;
  </div>
</template>

<script>
import axios from "axios";
import { XlsCsvParser } from "vue-xls-csv-parser";

export default {
  name: "ImportButton",
  components: {
    XlsCsvParser,
  },
  props: ["fields", "title", "apiUrl"],

  data: () => {
    return {
      importloading: false,
      successModal: false,
      show: false,
      items: [],
      fields2: [],
      columns: [
        { name: "region", value: "region" },
        { name: "province", value: "province" },
        { name: "commune", value: "commune" },
        { name: "district", value: "district" },
        { name: "annee", value: "annee" },
        { name: "mois", value: "mois" },
        { name: "formation_sanitaire", value: "formation_sanitaire" },
        { name: "NbFemmeVueCPN", value: "NbFemmeVueCPN" },
        { name: "NbFemmeInscriteCPN1", value: "NbFemmeInscriteCPN1" },
        {
          name: "NbFemmeInscriteCPN1_Trim1",
          value: "NbFemmeInscriteCPN1_Trim1",
        },
        { name: "NbFemmeVueCPN4", value: "NbFemmeVueCPN4" },
        {
          name: "NbFemmeInscriteVueCPN_2Td",
          value: "NbFemmeInscriteVueCPN_2Td",
        },
        { name: "NbFemmeFer_Acide_Folique", value: "NbFemmeFer_Acide_Folique" },
        {
          name: "NbFemmeFer_Acide_Folique_CPN3",
          value: "NbFemmeFer_Acide_Folique_CPN3",
        },
        { name: "NbGrossesse_Refere", value: "NbGrossesse_Refere" },
        { name: "NbFemmeVueCPN_TPI3", value: "NbFemmeVueCPN_TPI3" },
        { name: "NbFemmeVueCPN_TPI3_MILDA", value: "NbFemmeVueCPN_TPI3_MILDA" },
      ],
      help: `Les colonnes necessaires sont : region, province, commune, district, formation_sanitaire, mois, annee,
                NbFemmeVueCPN, NbFemmeInscriteCPN1, NbFemmeInscriteCPN1_Trim1, NbFemmeVueCPN4, 
                NbFemmeInscriteVueCPN_2Td, NbFemmeFer_Acide_Folique, NbFemmeFer_Acide_Folique_CPN3, 
                NbGrossesse_Refere, NbFemmeVueCPN_TPI3 et NbFemmeVueCPN_TPI3_MILDA `,
      currentPage: 1,

      totalRows: 0,
      you: null,
      message: "",
      showMessage: false,
      timeoutD: 2000,
    };
  },
  methods: {
    onValidate(results) {
      this.results = results;
      this.items = [];
      for (let i = 0; i < this.results[0].data.length; i++) {
        this.items.push({});
      }

      this.results.map((localColumn) => {
        let i = 0;
        for (let it of this.items) {
          if (
            localColumn.data[i] == "NA" ||
            localColumn.data[i] == "NULL" ||
            localColumn.data[i] == undefined ||
            localColumn.data[i] == null
          ) {
            it[localColumn.column] = null;
          } else {
            it[localColumn.column] = localColumn.data[i];
          }
          i++;
        }
      });
    },
    deleteData(dataToDelete) {
      this.items = this.items.filter(function (f) {
        return f.id !== dataToDelete;
      });
    },

    storeMany() {
      let self = this;
      console.log({ items: self.items });
      self.importloading = 0;
      for (let i = 0; i < parseInt(this.items.length / 2000) + 1; i++) {
        let dataItemTrunc = [];
        self.importloading = self.importloading + 1;
        for (let ii = i * 2000; ii < 2000 * (i + 1); ii++) {
          if (ii >= this.items.length) break;
          dataItemTrunc.push(this.items[ii]);
        }
        console.log(dataItemTrunc);
        axios
          .post(
            this.$apiAdress +
              "/api/" +
              self.apiUrl +
              "/storeMany?token=" +
              localStorage.getItem("api_token"),
            { items: dataItemTrunc }
          )
          .then(function (response) {
            self.importloading = self.importloading - 1;
            self.$toasted.show(
              "Les données ont été importées " +
                (i + 1) +
                "/" +
                (parseInt(self.items.length / 2000) + 1),
              { type: "success" }
            );
          })
          .catch(function (error) {
            self.importloading = self.importloading - 1;
            if (error.response.data.message == "The given data was invalid.") {
              self.message = "";
              for (let key in error.response.data.errors) {
                if (error.response.data.errors.hasOwnProperty(key)) {
                  self.message += error.response.data.errors[key][0] + "  ";
                }
              }
              self.$toasted.show(self.message, { type: "error" });
            } else {
              console.log(error);
              self.$router.push({ path: "login" });
            }
          });

        setTimeout(() => {}, 1000);
      }
    },

    storeManyOld() {
      axios
        .post(
          this.$apiAdress +
            "/api/" +
            self.apiUrl +
            "/storeMany?token=" +
            localStorage.getItem("api_token"),
          { items: self.items }
        )
        .then(function (response) {
          self.items = {};
          self.$toasted.show("Les données ont été importées", {
            type: "success",
          });
        })
        .catch(function (error) {
          if (error.response.data.message == "The given data was invalid.") {
            self.message = "";
            for (let key in error.response.data.errors) {
              if (error.response.data.errors.hasOwnProperty(key)) {
                self.message += error.response.data.errors[key][0] + "  ";
              }
            }
            self.$toasted.show(self.message, { type: "error" });
          } else {
            console.log(error);
            self.$router.push({ path: "login" });
          }
        });
    },
  },
  mounted: function () {
    this.columns = [];
    this.fields2 = [];
    this.help = "Les colonnes necessaires sont :";
    for (const item of this.fields) {
      this.columns.push({ name: item, value: item });
      this.fields2.push(item);
      this.help = this.help + " " + item + ",";
    }
    this.help = this.help + "\t  ( " + this.fields.length + " colonnes )";
    this.fields2.push("actions");
    let roles = localStorage.getItem("roles");
    if (roles != null) {
      roles = roles.split(",");
    }
    if (roles != null && roles.indexOf("importer") >= 0) {
      this.show = true;
    }
  },
};
</script>

<style src="spinkit/spinkit.min.css"></style>
