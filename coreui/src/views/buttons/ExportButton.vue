<template>
  <CButton color="success" @click="exporter()" :disabled="successModal" v-if="show">Exporter</CButton>
</template>

<script>

var FileSaver = require('file-saver');

export default {
  name: 'ExportButton',
  props: ['items','fields','title','showDefault'],
  data: () => {
    return {
      show:false,
      successModal: false,
    }
  },
  
  methods: {
    exporter(){
      this.successModal = true;
      if(!this.items||this.items.length==0){
      this.$toasted.show("Pas de données",{type:"warning"});
      return;
      }

      var blob = new Blob([this.convertToCSV(this.items)], {type: "text/csv;charset=utf-8"});
      FileSaver.saveAs(blob, this.title+".csv");
      this.successModal = false;
    },
    convertToCSV(arr) {
      arr.forEach(item=>{
          Object.keys(arr[0]).forEach(champ => {
              item[champ]=item[champ]?item[champ].toString().trim():item[champ]
            });
        })
        const array = [Object.keys(arr[0])].concat(arr)
        return array.map(it => {
            return Object.values(it).join(';').toString()
        }).join('\n')
    }
  },
  mounted: function(){
    let roles = localStorage.getItem("roles");
    if (roles != null) {
        roles = roles.split(',')
    }
   
    if (roles != null && roles.indexOf('exporter') >= 0){this.show = true;}
    if(this.showDefault) {this.show = true;}
  }
}
</script>