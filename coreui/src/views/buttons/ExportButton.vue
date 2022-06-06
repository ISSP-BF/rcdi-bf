<template>
  <CButton color="success" @click="exporter()" :disabled="successModal">Exporter</CButton>
</template>

<script>

var FileSaver = require('file-saver');

export default {
  name: 'ExportButton',
  props: ['items','fields','title'],
  data: () => {
    return {
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
      console.log(this.items)
      var blob = new Blob([this.convertToCSV(this.items)], {type: "text/csv;charset=utf-8"});
      FileSaver.saveAs(blob, this.title);
      this.successModal = false;
    },
    convertToCSV(arr) {
        const array = [Object.keys(arr[0])].concat(arr)

        return array.map(it => {
            return Object.values(it).toString()
        }).join('\n')
    }
  }
}
</script>