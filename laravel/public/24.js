(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{394:function(t,e,r){"use strict";var o=r(88);r.n(o).a},395:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,"\n.c-chart-brand[data-v-0b67b798] {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n}\n",""])},41:function(t,e,r){"use strict";r.r(e);var o=r(19);var a=()=>{const t={},e=document.styleSheets;let r="";for(let t=e.length-1;t>-1;t--){const o=e[t].cssRules;for(let t=o.length-1;t>-1;t--)if(".ie-custom-properties"===o[t].selectorText){r=o[t].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach(e=>{if(e){const r=e.split(": ")[0],o=e.split(": ")[1];r&&o&&(t[`--${r.trim()}`]=o.trim())}}),t};var n=(t,e=document.body)=>{let r;if((t=>t.match(/^--.*/i))(t)&&(()=>Boolean(document.documentMode)&&document.documentMode>=10)()){r=a()[t]}else r=window.getComputedStyle(e,null).getPropertyValue(t).replace(/^\s/,"");return r};var s=(t,e=document.body)=>{const r=n(`--${t}`,e);return r||t},i=r(721);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={name:"CChartLineSimple",components:{CChartLine:o.CChartLine},props:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},o.CChartLine.props,{borderColor:{type:String,default:"rgba(255,255,255,.55)"},backgroundColor:{type:String,default:"transparent"},dataPoints:{type:Array,default:function(){return[10,22,34,46,58,70,46,23,45,78,34,12]}},label:{type:String,default:"Sales"},pointed:Boolean,pointHoverBackgroundColor:String}),computed:{pointHoverColor:function(){return this.pointHoverBackgroundColor?this.pointHoverBackgroundColor:"transparent"!==this.backgroundColor?this.backgroundColor:this.borderColor},defaultDatasets:function(){return[{data:this.dataPoints,borderColor:s(this.borderColor),backgroundColor:s(this.backgroundColor),pointBackgroundColor:s(this.pointHoverColor),pointHoverBackgroundColor:s(this.pointHoverColor),label:this.label}]},pointedOptions:function(){return{scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,this.dataPoints)-5,max:Math.max.apply(Math,this.dataPoints)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}},straightOptions:function(){return{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}}},defaultOptions:function(){var t=this.pointed?this.pointedOptions:this.straightOptions;return Object.assign({},t,{maintainAspectRatio:!1,legend:{display:!1}})},computedDatasets:function(){return Object(i.a)(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return Object(i.a)(this.defaultOptions,this.options||{})}}},C=r(1),m=Object(C.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.computedDatasets,options:this.computedOptions,labels:this.labels}})}),[],!1,null,null,null).exports;function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"CChartHorizontalBarSimple",components:{CChartHorizontalBar:o.CChartHorizontalBar},props:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},o.CChartHorizontalBar.props,{backgroundColor:{type:String,default:"rgba(0,0,0,.2)"},backgroundColor2:{type:String,default:"rgba(0,0,255,100)"},pointHoverBackgroundColor:String,dataPoints:{type:Array,default:function(){return[10,22,34,46,58,70,46,23,45,78,34,12]}},pointed:Boolean}),computed:{defaultDatasets:function(){return[{data:[10,22,34,46,58,70,46,23,45,78,34,12],backgroundColor:s(this.backgroundColor),label:"OUI"},{data:[10,22,34,46,58,70,46,23,45,78,34,12],backgroundColor:s(this.backgroundColor2),label:"NON"}]},defaultOptions:function(){return{maintainAspectRatio:!1,legend:{display:!0},scales:{xAxes:[{display:!0,stacked:!0}],yAxes:[{display:!0,stacked:!0}]}}},computedDatasets:function(){return Object(i.a)(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return Object(i.a)(this.defaultOptions,this.options||{})}}},u=Object(C.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CChartHorizontalBar",{staticStyle:{"min-height":"50vh"},attrs:{datasets:this.computedDatasets,options:this.computedOptions,labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running","Coding","Cycling","Running","Coding","Cycling","Running"]}})],1)}),[],!1,null,null,null).exports,f={name:"CChartLineExample",components:{CChartLine:o.CChartLine},computed:{defaultDatasets:function(){return[{label:"Data One",backgroundColor:"rgb(228,102,81,0.9)",data:[30,39,10,50,30,70,35]},{label:"Data Two",backgroundColor:"rgb(0,216,255,0.9)",data:[39,80,40,35,40,20,45]}]}}},b=Object(C.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.defaultDatasets,labels:"months"}})}),[],!1,null,null,null).exports,v={name:"CChartBarExample",components:{CChartBar:o.CChartBar},computed:{defaultDatasets:function(){return[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]}}},_=Object(C.a)(v,(function(){var t=this.$createElement;return(this._self._c||t)("CChartBar",{attrs:{datasets:this.defaultDatasets,labels:"months"}})}),[],!1,null,null,null).exports,x={name:"CChartDoughnutExample",components:{CChartDoughnut:o.CChartDoughnut},computed:{defaultDatasets:function(){return[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}}},y=Object(C.a)(x,(function(){var t=this.$createElement;return(this._self._c||t)("CChartDoughnut",{attrs:{datasets:this.defaultDatasets,labels:["VueJs","EmberJs","ReactJs","AngularJs"]}})}),[],!1,null,null,null).exports,I={name:"CChartRadarExample",components:{CChartRadar:o.CChartRadar},computed:{defaultDatasets:function(){return[{label:"2019",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",tooltipLabelColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"2020",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},defaultOptions:function(){return{aspectRatio:1.5}}}},w=Object(C.a)(I,(function(){var t=this.$createElement;return(this._self._c||t)("CChartRadar",{attrs:{datasets:this.defaultDatasets,options:this.defaultOptions,labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"]}})}),[],!1,null,null,null).exports,k={name:"CChartPieExample",components:{CChartPie:o.CChartPie},computed:{defaultDatasets:function(){return[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}}},D=Object(C.a)(k,(function(){var t=this.$createElement;return(this._self._c||t)("CChartPie",{attrs:{datasets:this.defaultDatasets,labels:["VueJs","EmberJs","ReactJs","AngularJs"]}})}),[],!1,null,null,null).exports,S={name:"CChartPolarAreaExample",components:{CChartPolarArea:o.CChartPolarArea},computed:{defaultDatasets:function(){return[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(179,181,198,1)",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(255,99,132,1)",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},defaultOptions:function(){return{aspectRatio:1.5}}}},P=Object(C.a)(S,(function(){var t=this.$createElement;return(this._self._c||t)("CChartPolarArea",{attrs:{datasets:this.defaultDatasets,options:this.defaultOptions,labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"]}})}),[],!1,null,null,null).exports;r.d(e,"CChartLineSimple",(function(){return m})),r.d(e,"CChartBarSimple",(function(){return u})),r.d(e,"CChartLineExample",(function(){return b})),r.d(e,"CChartBarExample",(function(){return _})),r.d(e,"CChartDoughnutExample",(function(){return y})),r.d(e,"CChartRadarExample",(function(){return w})),r.d(e,"CChartPieExample",(function(){return D})),r.d(e,"CChartPolarAreaExample",(function(){return P}))},733:function(t,e,r){"use strict";r.r(e);var o=r(41),a={name:"WidgetsBrand",components:{CChartLineSimple:o.CChartLineSimple},props:{noCharts:Boolean}},n=(r(394),r(1)),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CRow",[t.noCharts?[r("CCol",{attrs:{md:"3",sm:"6"}},[r("CWidgetBrand",{attrs:{color:"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[r("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"56"}})],1)],1),t._v(" "),r("CCol",{attrs:{md:"3",sm:"6"}},[r("CWidgetBrand",{attrs:{color:"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[r("CIcon",{staticClass:"my-4",attrs:{name:"cib-twitter",height:"56"}})],1)],1),t._v(" "),r("CCol",{attrs:{md:"3",sm:"6"}},[r("CWidgetBrand",{attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[r("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"56"}})],1)],1),t._v(" "),r("CCol",{attrs:{md:"3",sm:"6"}},[r("CWidgetBrand",{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings",color:"warning"}},[r("CIcon",{staticClass:"my-4",attrs:{name:"cil-calendar",height:"56"}})],1)],1)]:[r("CCol",{attrs:{md:"3",sm:"6"}},[r("CWidgetBrand",{attrs:{color:"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[r("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"52"}}),t._v(" "),r("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[65,59,84,84,51,55,40],label:"Friends",labels:"months"}})],1)],1),t._v(" "),r("CCol",{attrs:{md:"3",sm:"6"}},[r("CWidgetBrand",{attrs:{color:"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[r("CIcon",{staticClass:"my-4",attrs:{name:"cib-twitter",height:"52"}}),t._v(" "),r("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[1,13,9,17,34,41,38],label:"Followers",labels:"months"}})],1)],1),t._v(" "),r("CCol",{attrs:{md:"3",sm:"6"}},[r("CWidgetBrand",{attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[r("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"52"}}),t._v(" "),r("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[78,81,80,45,34,12,40],label:"Contracts",labels:"months"}})],1)],1),t._v(" "),r("CCol",{attrs:{md:"3",sm:"6"}},[r("CWidgetBrand",{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings",color:"warning"}},[r("CIcon",{staticClass:"my-4",attrs:{name:"cil-calendar",height:"52"}}),t._v(" "),r("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[35,23,56,22,97,23,64],label:"Followers",labels:"months"}})],1)],1)]],2)}),[],!1,null,"0b67b798",null).exports,i={name:"WidgetsDropdown",components:{CChartLineSimple:o.CChartLineSimple,CChartBarSimple:o.CChartBarSimple}},l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CRow",[r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetDropdown",{attrs:{color:"primary",header:"9.823",text:"Members online"},scopedSlots:t._u([{key:"default",fn:function(){return[r("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[t._v(" "),r("CDropdownItem",[t._v("Action")]),t._v(" "),r("CDropdownItem",[t._v("Another action")]),t._v(" "),r("CDropdownItem",[t._v("Something else here...")]),t._v(" "),r("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[r("CChartLineSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{pointed:"","data-points":[65,59,84,84,51,55,40],"point-hover-background-color":"primary",label:"Members",labels:"months"}})]},proxy:!0}])})],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetDropdown",{attrs:{color:"info",header:"9.823",text:"Members online"},scopedSlots:t._u([{key:"default",fn:function(){return[r("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end",caret:!1},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-location-pin"}})]},proxy:!0}])},[t._v(" "),r("CDropdownItem",[t._v("Action")]),t._v(" "),r("CDropdownItem",[t._v("Another action")]),t._v(" "),r("CDropdownItem",[t._v("Something else here...")]),t._v(" "),r("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[r("CChartLineSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{pointed:"","data-points":[1,18,9,17,34,22,11],"point-hover-background-color":"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}})]},proxy:!0}])})],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetDropdown",{attrs:{color:"warning",header:"9.823",text:"Members online"},scopedSlots:t._u([{key:"default",fn:function(){return[r("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[t._v(" "),r("CDropdownItem",[t._v("Action")]),t._v(" "),r("CDropdownItem",[t._v("Another action")]),t._v(" "),r("CDropdownItem",[t._v("Something else here...")]),t._v(" "),r("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[r("CChartLineSimple",{staticClass:"mt-3",staticStyle:{height:"70px"},attrs:{"background-color":"rgba(255,255,255,.2)","data-points":[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},"point-hover-background-color":"warning",label:"Members",labels:"months"}})]},proxy:!0}])})],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetDropdown",{attrs:{color:"danger",header:"9.823",text:"Members online"},scopedSlots:t._u([{key:"default",fn:function(){return[r("CDropdown",{attrs:{color:"transparent p-0",placement:"bottom-end"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[r("CIcon",{attrs:{name:"cil-settings"}})]},proxy:!0}])},[t._v(" "),r("CDropdownItem",[t._v("Action")]),t._v(" "),r("CDropdownItem",[t._v("Another action")]),t._v(" "),r("CDropdownItem",[t._v("Something else here...")]),t._v(" "),r("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"footer",fn:function(){return[r("CChartBarSimple",{staticClass:"mt-3 mx-3",staticStyle:{height:"70px"},attrs:{"background-color":"rgb(250, 152, 152)",label:"Members",labels:"months"}})]},proxy:!0}])})],1)],1)}),[],!1,null,null,null).exports,c={name:"Widgets",components:{CChartLineSimple:o.CChartLineSimple,CChartBarSimple:o.CChartBarSimple,WidgetsBrand:s,WidgetsDropdown:l}},d=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("CRow",[r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetProgress",{attrs:{footer:"Lorem ipsum dolor sit amet enim."}},[r("div",{staticClass:"h4 m-0"},[t._v("89.9%")]),t._v(" "),r("div",{staticClass:"card-header-actions"},[r("a",{staticClass:"card-header-action position-absolute",staticStyle:{right:"5px",top:"5px"},attrs:{href:"https://coreui.io/vue/docs/components/widgets",rel:"noreferrer noopener",target:"_blank"}},[r("small",{staticClass:"text-muted"},[t._v("docs")])])]),t._v(" "),r("div",[t._v("Lorem ipsum...")]),t._v(" "),r("CProgress",{staticClass:"progress-xs my-3 mb-0",attrs:{color:"success",value:25}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetProgress",{attrs:{header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"info",value:25}})],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetProgress",{attrs:{header:"$98.111,00",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"warning",value:25}})],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetProgress",{attrs:{header:"2 TB",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"danger",value:25}})],1)],1),t._v(" "),r("CRow",[r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetProgress",{attrs:{header:"89.9%",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"success",inverse:"",value:25}})],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetProgress",{attrs:{header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"info",inverse:"",value:25}})],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetProgress",{attrs:{header:"$98.111,00",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"warning",inverse:"",value:25}})],1),t._v(" "),r("CCol",{attrs:{sm:"6",lg:"3"}},[r("CWidgetProgress",{attrs:{header:"2 TB",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim.",color:"danger",inverse:"",value:25}})],1)],1),t._v(" "),r("CRow",[r("CCol",{attrs:{col:"12",sm:"6",lg:"3"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"primary"}},[r("CIcon",{attrs:{name:"cil-settings",width:"24"}})],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",sm:"6",lg:"3"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"info"}},[r("CIcon",{attrs:{name:"cil-laptop",width:"24"}})],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",sm:"6",lg:"3"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"warning"}},[r("CIcon",{attrs:{name:"cil-moon",width:"24"}})],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",sm:"6",lg:"3"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"danger"}},[r("CIcon",{attrs:{name:"cil-bell",width:"24"}})],1)],1)],1),t._v(" "),r("CRow",[r("CCol",{attrs:{col:"12",sm:"6",lg:"3"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"primary","icon-padding":!1}},[r("CIcon",{attrs:{name:"cil-settings",width:"24"}})],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",sm:"6",lg:"3"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"info","icon-padding":!1}},[r("CIcon",{attrs:{name:"cil-laptop",width:"24"}})],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",sm:"6",lg:"3"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"warning","icon-padding":!1}},[r("CIcon",{attrs:{name:"cil-moon",width:"24"}})],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",sm:"6",lg:"3"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"danger","icon-padding":!1}},[r("CIcon",{attrs:{name:"cil-bell",width:"24"}})],1)],1)],1),t._v(" "),r("CRow",[r("CCol",{attrs:{col:"12",sm:"6",lg:"4"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"primary","icon-padding":!1}},[r("CIcon",{staticClass:"mx-5 ",attrs:{name:"cil-settings",width:"24"}})],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",sm:"6",lg:"4"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"info","icon-padding":!1}},[r("CIcon",{staticClass:"mx-5 ",attrs:{name:"cil-laptop",width:"24"}})],1)],1),t._v(" "),r("CCol",{attrs:{col:"12",sm:"6",lg:"4"}},[r("CWidgetIcon",{attrs:{header:"$1.999,50",text:"Income",color:"warning","icon-padding":!1},scopedSlots:t._u([{key:"footer",fn:function(){return[r("CCardFooter",{staticClass:"card-footer px-3 py-2"},[r("CLink",{staticClass:"font-weight-bold font-xs btn-block text-muted",attrs:{href:"https://coreui.io/"}},[t._v("\n              View more\n              "),r("CIcon",{staticClass:"float-right",attrs:{name:"cil-arrowRight",width:"16"}})],1)],1)]},proxy:!0}])},[r("CIcon",{staticClass:"mx-5 ",attrs:{name:"cil-moon",width:"24"}})],1)],1)],1),t._v(" "),r("WidgetsBrand",{attrs:{noCharts:""}}),t._v(" "),r("WidgetsBrand"),t._v(" "),r("CCardGroup",{staticClass:"mb-4"},[r("CWidgetProgressIcon",{attrs:{header:"87.500",text:"Visitors",color:"info"}},[r("CIcon",{attrs:{name:"cil-people",height:"36"}})],1),t._v(" "),r("CWidgetProgressIcon",{attrs:{header:"385",text:"New Clients",color:"success"}},[r("CIcon",{attrs:{name:"cil-userFollow",height:"36"}})],1),t._v(" "),r("CWidgetProgressIcon",{attrs:{header:"1238",text:"Products sold",color:"warning"}},[r("CIcon",{attrs:{name:"cil-basket",height:"36"}})],1),t._v(" "),r("CWidgetProgressIcon",{attrs:{header:"28%",text:"Returning Visitors"}},[r("CIcon",{attrs:{name:"cil-chartPie",height:"36"}})],1),t._v(" "),r("CWidgetProgressIcon",{attrs:{header:"5:34:11",text:"Avg. Time",color:"danger"}},[r("CIcon",{attrs:{name:"cil-speedometer",height:"36"}})],1)],1),t._v(" "),r("CCardGroup",{staticClass:"mb-4"},[r("CWidgetProgressIcon",{attrs:{header:"87.500",text:"Visitors",color:"info",inverse:""}},[r("CIcon",{attrs:{name:"cil-people",height:"36"}})],1),t._v(" "),r("CWidgetProgressIcon",{attrs:{header:"385",text:"New Clients",color:"success",inverse:""}},[r("CIcon",{attrs:{name:"cil-userFollow",height:"36"}})],1),t._v(" "),r("CWidgetProgressIcon",{attrs:{header:"1238",text:"Products sold",color:"warning",inverse:""}},[r("CIcon",{attrs:{name:"cil-basket",height:"36"}})],1),t._v(" "),r("CWidgetProgressIcon",{attrs:{header:"28%",text:"Returning Visitors",color:"primary",inverse:""}},[r("CIcon",{attrs:{name:"cil-chartPie",height:"36"}})],1),t._v(" "),r("CWidgetProgressIcon",{attrs:{header:"5:34:11",text:"Avg. Time",color:"danger",inverse:""}},[r("CIcon",{attrs:{name:"cil-speedometer",height:"36"}})],1)],1),t._v(" "),r("CRow",[r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"87.500",text:"Visitors",color:"info"}},[r("CIcon",{attrs:{name:"cil-people",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"385",text:"New Clients",color:"success"}},[r("CIcon",{attrs:{name:"cil-userFollow",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"1238",text:"Products sold",color:"warning"}},[r("CIcon",{attrs:{name:"cil-basket",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"28%",text:"Returning Visitors",color:"primary"}},[r("CIcon",{attrs:{name:"cil-chartPie",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"5:34:11",text:"Avg. Time",color:"danger"}},[r("CIcon",{attrs:{name:"cil-speedometer",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"972",text:"comments",color:"info"}},[r("CIcon",{attrs:{name:"cil-speech",height:"36"}})],1)],1)],1),t._v(" "),r("CRow",[r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"87.500",text:"Visitors",color:"info",inverse:""}},[r("CIcon",{attrs:{name:"cil-people",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"385",text:"New Clients",color:"success",inverse:""}},[r("CIcon",{attrs:{name:"cil-userFollow",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"1238",text:"Products sold",color:"warning",inverse:""}},[r("CIcon",{attrs:{name:"cil-basket",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"28%",text:"Returning Visitors",color:"primary",inverse:""}},[r("CIcon",{attrs:{name:"cil-chartPie",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"5:34:11",text:"Avg. Time",color:"danger",inverse:""}},[r("CIcon",{attrs:{name:"cil-speedometer",height:"36"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"6",md:"2"}},[r("CWidgetProgressIcon",{attrs:{header:"972",text:"comments",color:"info",inverse:""}},[r("CIcon",{attrs:{name:"cil-speech",height:"36"}})],1)],1)],1),t._v(" "),r("WidgetsDropdown"),t._v(" "),r("CRow",[r("CCol",{attrs:{sm:"4",lg:"2"}},[r("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[r("CChartLineSimple",{staticStyle:{height:"40px"},attrs:{"border-color":"danger"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"4",lg:"2"}},[r("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[r("CChartLineSimple",{staticStyle:{height:"40px"},attrs:{"border-color":"primary"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"4",lg:"2"}},[r("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[r("CChartLineSimple",{staticStyle:{height:"40px"},attrs:{"border-color":"success"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"4",lg:"2"}},[r("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[r("CChartBarSimple",{staticStyle:{height:"40px"},attrs:{"background-color":"danger"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"4",lg:"2"}},[r("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[r("CChartBarSimple",{staticStyle:{height:"40px"},attrs:{"background-color":"primary"}})],1)],1),t._v(" "),r("CCol",{attrs:{sm:"4",lg:"2"}},[r("CWidgetSimple",{attrs:{header:"title",text:"1,123"}},[r("CChartBarSimple",{staticStyle:{height:"40px"},attrs:{"background-color":"success"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports},88:function(t,e,r){var o=r(395);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(9)(o,a);o.locals&&(t.exports=o.locals)}}]);