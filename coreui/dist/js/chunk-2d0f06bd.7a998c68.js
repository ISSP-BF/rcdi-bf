(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f06bd"],{"9bfd":function(s,a,r){"use strict";r.r(a);var e=function(){var s=this,a=s._self._c;return a("div",[a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[s._v(" Bootstrap Progress")]),a("div",{staticClass:"card-header-actions"},[a("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/progress",rel:"noreferrer noopener",target:"_blank"}},[a("small",{staticClass:"text-muted"},[s._v("docs")])])])],1),a("CCardBody",[a("CProgress",{attrs:{value:s.counter,max:s.max,"show-percentage":"",animated:""}}),a("CProgress",{staticClass:"mt-1",attrs:{max:s.max,"show-value":""}},[a("CProgressBar",{attrs:{value:.6*s.counter,color:"success"}}),a("CProgressBar",{attrs:{value:.25*s.counter,color:"warning"}}),a("CProgressBar",{attrs:{value:.15*s.counter,color:"danger"}})],1),a("CButton",{staticClass:"mt-4",attrs:{color:"secondary"},on:{click:s.clicked}},[s._v(" Click me to animate progress bars ")])],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),s._v(" "),a("strong",[s._v(" Progress ")]),a("small",[s._v("labels")])],1),a("CCardBody",[a("h6",[s._v("No label")]),a("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2}}),a("h6",[s._v("Value label")]),a("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2,"show-value":""}}),a("h6",[s._v("Progress label")]),a("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2,"show-percentage":""}}),a("h6",[s._v("Value label with precision")]),a("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2,precision:2,"show-value":""}}),a("h6",[s._v("Progress label with precision")]),a("CProgress",{staticClass:"mb-3",attrs:{value:s.value,max:s.max2,precision:2,"show-percentage":""}})],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[s._v(" Progress ")]),a("small",[s._v("width")])],1),a("CCardBody",[a("h6",[s._v("Default width")]),a("CProgress",{staticClass:"mb-3",attrs:{value:s.value3}}),a("h6",[s._v("Custom widths")]),a("CProgress",{staticClass:"w-75 mb-2",attrs:{value:s.value3}}),a("CProgress",{staticClass:"w-50 mb-2",attrs:{value:s.value3}}),a("CProgress",{staticClass:"w-25",attrs:{value:s.value3}})],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[s._v(" Progress ")]),a("small",[s._v("height")])],1),a("CCardBody",[a("h6",[s._v("Default height")]),a("CProgress",{staticClass:"mb-3",attrs:{value:s.value3,"show-percentage":""}}),a("h6",[s._v("Custom heights")]),a("CProgress",{staticClass:"mb-2",attrs:{height:"2rem",value:s.value3,"show-percentage":""}}),a("CProgress",{staticClass:"mb-2",attrs:{height:"20px",value:s.value3,"show-percentage":""}}),a("CProgress",{attrs:{height:"2px",value:s.value3}})],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[s._v(" Progress ")]),a("small",[s._v("colors")])],1),a("CCardBody",s._l(s.bars,(function(r,e){return a("div",{key:e,staticClass:"row mb-1"},[a("div",{staticClass:"col-sm-2"},[s._v(s._s(r.color)+":")]),a("div",{staticClass:"col-sm-10 pt-1"},[a("CProgress",{key:r.color,attrs:{value:r.value,color:r.color}})],1)])})),0)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[s._v(" Progress ")]),a("small",[s._v("striped")])],1),a("CCardBody",[a("CProgress",{staticClass:"mb-2",attrs:{value:25,color:"success",striped:s.striped}}),a("CProgress",{staticClass:"mb-2",attrs:{value:50,color:"info",striped:s.striped}}),a("CProgress",{staticClass:"mb-2",attrs:{value:75,color:"warning",striped:s.striped}}),a("CProgress",{staticClass:"mb-2",attrs:{value:100,color:"danger",striped:s.striped}}),a("CButton",{attrs:{color:"secondary"},on:{click:function(a){s.striped=!s.striped}}},[s._v(" "+s._s(s.striped?"Remove":"Add")+" Striped ")])],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[s._v(" Progress ")]),a("small",[s._v("animated")])],1),a("CCardBody",[a("CProgress",{staticClass:"mb-2",attrs:{value:25,color:"success",striped:"",animated:s.animate}}),a("CProgress",{staticClass:"mb-2",attrs:{value:50,color:"info",striped:"",animated:s.animate}}),a("CProgress",{staticClass:"mb-2",attrs:{value:75,color:"warning",striped:"",animated:s.animate}}),a("CProgress",{staticClass:"mb-3",attrs:{value:100,color:"danger",animated:s.animate}}),a("CButton",{attrs:{color:"secondary"},on:{click:function(a){s.animate=!s.animate}}},[s._v(" "+s._s(s.animate?"Stop":"Start")+" Animation ")])],1)],1),a("CCard",[a("CCardHeader",[a("CIcon",{attrs:{name:"cil-justify-center"}}),a("strong",[s._v(" Progress ")]),a("small",[s._v("multiple bars")])],1),a("CCardBody",[a("CProgress",{staticClass:"mb-3",attrs:{max:s.max3}},[a("CProgressBar",{attrs:{color:"primary",value:s.values[0]}}),a("CProgressBar",{attrs:{color:"success",value:s.values[1]}}),a("CProgressBar",{attrs:{color:"info",value:s.values[2]}})],1),a("CProgress",{staticClass:"mb-3",attrs:{"show-percentage":"",max:s.max3}},[a("CProgressBar",{attrs:{color:"primary",value:s.values[0]}}),a("CProgressBar",{attrs:{color:"success",value:s.values[1]}}),a("CProgressBar",{attrs:{color:"info",value:s.values[2]}})],1),a("CProgress",{staticClass:"mb-3",attrs:{"show-value":"",striped:"",max:s.max3}},[a("CProgressBar",{attrs:{color:"primary",value:s.values[0]}}),a("CProgressBar",{attrs:{color:"success",value:s.values[1]}}),a("CProgressBar",{attrs:{color:"info",value:s.values[2]}})],1),a("CProgress",{staticClass:"mb-3",attrs:{max:s.max3}},[a("CProgressBar",{attrs:{color:"primary",value:s.values[0],"show-percentage":""}}),a("CProgressBar",{attrs:{color:"success",value:s.values[1],animated:"","show-percentage":""}}),a("CProgressBar",{attrs:{color:"info",value:s.values[2],striped:"","show-percentage":""}})],1)],1)],1)],1)},t=[],o={name:"ProgressBars",data:function(){return{counter:73,max:100,max2:50,value:33.333333333,value3:75,bars:[{color:"success",value:75},{color:"info",value:75},{color:"warning",value:75},{color:"danger",value:75},{color:"primary",value:75},{color:"secondary",value:75},{color:"dark",value:75}],timer:null,striped:!0,animate:!0,max3:100,values:[15,30,20]}},methods:{clicked:function(){this.counter=Math.random()*this.max}},mounted:function(){var s=this;this.timer=setInterval((function(){s.bars.forEach((function(s){s.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},l=o,c=r("2877"),i=Object(c["a"])(l,e,t,!1,null,null,null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0f06bd.7a998c68.js.map