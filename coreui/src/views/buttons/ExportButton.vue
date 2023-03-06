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
      // const array = [Object.keys(this.items[0])].concat(this.items);
      // const csvContent = array.map(it => Object.values(it).join(';').toString()).join('\n');
      // const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      // saveAs(blob, this.title+".csv");
      var blob = new Blob([this.convertToCSV(this.items)], {type: "text/csv;charset=utf-8"});
      FileSaver.saveAs(blob, this.title+".csv");
      this.successModal = false;
    },
    convertToCSV(arr) {
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