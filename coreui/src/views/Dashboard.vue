<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- Ajoutez la classe 'text-center' pour centrer le texte -->
          <p class="text-center h1 h11">
            <label>Bienvenue sur la plateforme de données de la commune de </label>&nbsp;
            <label
              class="bienvenue h1 h11"
              style="text-transform: capitalize"
              >{{ communelabel }}</label
            >
          </p>
        </div>
      </div>
    </div>
    <div></div>

    <CCard>
      <CCardBody>
        <div class="row">
          <div class="col-md-6">
            <img
              class="img-fluid w-100"
              :src="'img/presentation/bg-' + communelabel + '-1.jpg'"
              style="max-height: 400px; min-height: 400px"
            />
          </div>
          <b-carousel
            class="col-md-6"
            v-if="actualites"
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333; height: 400px"
          >
            <b-carousel-slide v-for="n in actualites" v-bind:key="n.id">
              <h2>{{ n.title.rendered }}</h2>
              <p v-html="n.excerpt.rendered"></p>
              <a :href="n.link" target="_blank">Voir plus</a>
              <template #img>
                <img
                  class="img-fluid w-100"
                  :src="n.imageAcceuil"
                  alt="image slot"
                  style="max-height: 400px; min-height: 400px"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </CCardBody>
    </CCard>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
  },
  computed: {
    defaultDatasets() {
      return [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
          data: [40, 20, 80, 10],
        },
      ];
    },
  },
  data() {
    return {
      commune_id: null,
      commune: {},
      communelabel: "",
      refreshing: false,
      refreshing2: false,
      actualites: null,
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    strippedContent(string) {
      string = string.replace(/<\/?[^>]+>/gi, " ");
      string = string.replace("&hellip;", "...");
      string = string.replace(/&nbsp;/g, " ");
      return string;
    },
    visiterLePost(n) {
      window.open(n.link, "_blank");
    },
    async getPost() {
      let self = this;
      this.refreshing = true;
      axios
        .get(this.commune.urlSiteWeb + "?categories=" + this.commune.categorie)
        .then(function (response) {
          let actualites = response.data;
          for (let actualite of actualites) {
            actualite["imageAcceuil"] =
              actualite["yoast_head_json"]["og_image"][0]["url"];
          }
          self.actualites = actualites;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getCommuneDefaut() {
      let self = this;
      this.refreshing = true;
      axios
        .get(this.$apiAdress + "/api/indicateurs-old/getDefaultCommune")
        .then(function (response) {
          localStorage.setItem("communedefaut", JSON.stringify(response.data));
          self.commune = response.data;
          self.commune_id = self.commune.id;
          self.communelabel = self.commune.commune.toLowerCase();
            self.getPost();
        })
        .catch(function (error) {
          console.log(error);
          this.refreshing = false;
          localStorage.removeItem("communedefaut");
          self.commune_id = 0;
          self.commune = 0;
        });
    },
  },
  mounted: function () {
    if (localStorage.getItem("communedefaut")) {
      this.commune = JSON.parse(localStorage.getItem("communedefaut"));
      this.commune_id = this.commune.id;
      this.communelabel = this.commune.commune.toLowerCase();
    } else {
      this.commune_id = null;
    }
    this.getPost();
    this.getCommuneDefaut();
  },
};
</script>
<style>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-40px);
  }
  60% {
    transform: translateY(-10px);
  }
}
.h11 {
  font-family: Arial, sans-serif; /* Police de caractères */
  font-weight: bold; /* Poids de la police (gras) */
  text-align: center; /* Alignement du texte */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ombre du texte */
}

.bienvenue {
  animation: bounce 5s infinite;
  color: #ff5733;
  text-transform: capitalize;
}
</style>
