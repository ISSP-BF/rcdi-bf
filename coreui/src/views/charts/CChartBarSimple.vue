<template>
  <div>
    <CChartHorizontalBar
      :datasets="computedDatasets"
      :options="computedOptions"
      :labels="[
        'Eating', 'Drinking', 'Sleeping', 'Designing',
        'Coding', 'Cycling', 'Running',
        'Coding', 'Cycling', 'Running',
        'Coding', 'Cycling', 'Running'
      ]"
      style="min-height: 50vh"
    />
  </div>
</template>

<script>
import { CChartHorizontalBar } from '@coreui/vue-chartjs'
import { getColor, deepObjectsMerge } from '@coreui/utils/src'

export default {
  name: 'CChartHorizontalBarSimple',
  components: { CChartHorizontalBar },
  props: {
    ...CChartHorizontalBar.props,
    backgroundColor: {
      type: String,
      default: 'rgba(0,0,0,.2)'
    },
    backgroundColor2: {
      type: String,
      default: 'rgba(0,0,255,100)'
    },
    pointHoverBackgroundColor: String,
    dataPoints: {
      type: Array,
      default: () => [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]
    },
    pointed: Boolean
  },
  computed: {
    defaultDatasets () {
      return [
        {
          data: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
          backgroundColor: getColor(this.backgroundColor),
          label: "OUI"
        },
        
        {
          data: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
          backgroundColor: getColor(this.backgroundColor2),
          label: "NON"
        }
      ]
    },
    defaultOptions () {
      return {
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true,
            stacked: true
          }],
          yAxes: [{
            display: true,
            stacked: true
          }],
        }
      }
    },
    computedDatasets () {
      return deepObjectsMerge(this.defaultDatasets, this.datasets || {})
    },
    computedOptions () {
      return deepObjectsMerge(this.defaultOptions, this.options || {})
    }
  }
}
</script>
