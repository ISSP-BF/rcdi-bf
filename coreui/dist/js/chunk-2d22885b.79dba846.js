(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22885b"],{da19:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("CRow",[e("CCol",{attrs:{sm:"6"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Credit Card ")]),t._v(" "),e("small",[t._v("Form")]),e("div",{staticClass:"card-header-actions"},[e("a",{staticClass:"card-header-action",attrs:{href:"https://coreui.io/vue/docs/components/form-components",rel:"noreferrer noopener",target:"_blank"}},[e("small",{staticClass:"text-muted"},[t._v("docs")])])])]),e("CCardBody",[e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("CInput",{attrs:{label:"Name",placeholder:"Enter your name"}})],1)],1),e("CRow",[e("CCol",{attrs:{sm:"12"}},[e("CInput",{attrs:{label:"Credit Card Number",placeholder:"0000 0000 0000 0000"}})],1)],1),e("CRow",[e("CCol",{attrs:{sm:"4"}},[e("CSelect",{attrs:{label:"Month",options:[1,2,3,4,5,6,7,8,9,10,11,12]}})],1),e("CCol",{attrs:{sm:"4"}},[e("CSelect",{attrs:{label:"Year",options:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]}})],1),e("CCol",{attrs:{sm:"4"}},[e("CInput",{attrs:{label:"CVV/CVC",placeholder:"123"}})],1)],1)],1)],1)],1),e("CCol",{attrs:{sm:"6"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Company ")]),e("small",[t._v("Form")])]),e("CCardBody",[e("CInput",{attrs:{label:"Company",placeholder:"Enter your company name"}}),e("CInput",{attrs:{label:"VAT",placeholder:"PL1234567890"}}),e("CInput",{attrs:{label:"Street",placeholder:"Enter street name"}}),e("CRow",[e("CCol",{attrs:{sm:"8"}},[e("CInput",{attrs:{label:"City",placeholder:"Enter your city"}})],1),e("CCol",{attrs:{sm:"4"}},[e("CInput",{attrs:{label:"Postal code",placeholder:"Postal code"}})],1)],1),e("CInput",{attrs:{label:"Country",placeholder:"Country name"}})],1)],1)],1)],1),e("CRow",[e("CCol",{attrs:{md:"6"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Basic Form")]),t._v(" Elements ")]),e("CCardBody",[e("CForm",[e("CInput",{attrs:{description:"Let us know your full name.",label:"Enter your name",horizontal:"",autocomplete:"name"}}),e("CInput",{attrs:{label:"Static",value:"Username",horizontal:"",plaintext:""}}),e("CInput",{attrs:{label:"Text input",description:"This is a help text",placeholder:"Text",horizontal:""}}),e("CInput",{attrs:{label:"Date",type:"date",horizontal:""}}),e("CInput",{attrs:{label:"Email input",description:"Please enter your email",placeholder:"Enter your email",type:"email",horizontal:"",autocomplete:"email"}}),e("CInput",{attrs:{label:"Password Input",description:"Please enter a complex password",placeholder:"Enter your password",type:"password",horizontal:"",autocomplete:"current-password"}}),e("CInput",{attrs:{label:"Disabled Input",placeholder:"Disabled",horizontal:"",disabled:""}}),e("CTextarea",{attrs:{label:"Textarea",placeholder:"Content...",horizontal:"",rows:"9"}}),e("CSelect",{attrs:{label:"Select",horizontal:"",options:t.options,placeholder:"Please select"}}),e("CSelect",{attrs:{label:"Large select",size:"lg",horizontal:"",value:t.selectedOption,options:t.selectOptions,placeholder:"Please select"},on:{"update:value":function(e){t.selectedOption=e}}}),e("CSelect",{attrs:{label:"Small select",size:"sm",horizontal:"",options:t.options,placeholder:"Please select"}}),e("CSelect",{attrs:{label:"Select",horizontal:"",options:t.options,placeholder:"Please select",disabled:""}}),t._l(t.checkboxNames,(function(o,a){return[e("div",{key:o,staticClass:"form-group form-row"},[e("CCol",{staticClass:"col-form-label",attrs:{tag:"label",sm:"3"}},[t._v(" "+t._s(o)+" ")]),e("CCol",{class:a%2===1?"form-inline":"",attrs:{sm:"9"}},t._l(t.options,(function(t,o){return e("CInputCheckbox",{key:a+t,attrs:{label:t,value:t,custom:a>1,name:"Option 1".concat(a),checked:o===a,inline:a%2===1}})})),1)],1)]})),t._l(t.radioNames,(function(o,a){return[e("div",{key:o,staticClass:"form-row form-group"},[e("CCol",{attrs:{sm:"3"}},[t._v(" "+t._s(o)+" ")]),e("CCol",{class:a%2===1?"form-inline":"",attrs:{sm:"9"}},t._l(t.options,(function(t,o){return e("CInputRadio",{key:a+t,attrs:{label:t,type:"radio",value:t,custom:a>1,name:"Option 1".concat(a),checked:o===a,inline:a%2===1}})})),1)],1)]})),e("CInputFile",{attrs:{label:"File input",horizontal:""}}),e("CInputFile",{attrs:{label:"Multiple file input",horizontal:"",multiple:""}}),e("CInputFile",{attrs:{label:"File custom input",horizontal:"",custom:""}}),e("CInputFile",{attrs:{label:"Multiple file custom input",horizontal:"",multiple:"",custom:""}})],2)],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[e("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1),e("CCard",[e("CCardHeader",[e("strong",[t._v("Inline")]),t._v(" Form ")]),e("CCardBody",[e("CForm",{attrs:{inline:""}},[e("CInput",{staticClass:"mr-2",attrs:{placeholder:"Jane Doe"},scopedSlots:t._u([{key:"label",fn:function(){return[e("small",[t._v("Name: ")])]},proxy:!0}])}),e("CInput",{attrs:{placeholder:"jane.doe@example.com",autocomplete:"email"},scopedSlots:t._u([{key:"label",fn:function(){return[e("small",[t._v("Email: ")])]},proxy:!0}])})],1)],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[e("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1),e("CCol",{attrs:{md:"6"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Horizontal")]),t._v(" Form ")]),e("CCardBody",[e("CForm",[e("CInput",{attrs:{type:"email",description:"Please enter your email.",autocomplete:"email",label:"Email",horizontal:"",placeholder:"Enter Email..."}}),e("CInput",{attrs:{type:"password",description:"Please enter your password.",autocomplete:"current-password",label:"Password",horizontal:"",placeholder:"Enter Password..."}})],1)],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[e("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1),e("CCard",[e("CCardHeader",[e("strong",[t._v("Normal")]),t._v(" Form ")]),e("CForm",{attrs:{novalidate:""}},[e("CCardBody",[e("CInput",{attrs:{type:"email",description:"Please enter your email.",autocomplete:"email",label:"Email",placeholder:"Enter Email...",required:"","was-validated":""}}),e("CInput",{attrs:{type:"password",description:"Please enter your password.",autocomplete:"current-password",label:"Password",placeholder:"Enter Password...",required:"","was-validated":""}})],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[e("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1),e("CCard",[e("CCardHeader",[t._v(" Input "),e("strong",[t._v("Grid")])]),e("CCardBody",[e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"3"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-3"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"4"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-4"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"5"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-5"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"6"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-6"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"7"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-7"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"8"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-8"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"9"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-9"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"10"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-10"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"11"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-11"}})],1)],1),e("CRow",{staticClass:"form-group"},[e("CCol",{attrs:{sm:"12"}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-sm-12"}})],1)],1)],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[e("CIcon",{attrs:{name:"cil-user"}}),t._v(" Login")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1),e("CCard",[e("CCardHeader",[t._v(" Input "),e("strong",[t._v("Sizes")])]),e("CCardBody",[e("CInput",{attrs:{label:"Small input",size:"sm",horizontal:"",placeholder:"size='sm'"}}),e("CInput",{attrs:{label:"Default input",horizontal:"",placeholder:"normal"}}),e("CInput",{attrs:{label:"Large input",size:"lg",horizontal:"",placeholder:"size='lg'"}})],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[e("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1)],1),e("CRow",[e("CCol",{attrs:{sm:"12",md:"6"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Basic Validation")]),t._v(" Form ")]),e("CCardBody",[e("CForm",{attrs:{validated:"",novalidate:""}},[e("CInput",{attrs:{label:"Input is valid","valid-feedback":"Input is not required."}}),e("CInput",{attrs:{label:"Input is invalid",required:"","valid-feedback":"Thank you :)","invalid-feedback":"Please provide a required input."}})],1)],1)],1)],1),e("CCol",{attrs:{sm:"12",md:"6"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Custom Validation")]),t._v(" Form ")]),e("CCardBody",[e("CForm",[e("CInput",{attrs:{label:"Input is valid","valid-feedback":"Input is valid.","invalid-feedback":"Please provide at least 4 characters.",value:"Valid value","is-valid":t.validator}}),e("CInput",{attrs:{label:"Input is invalid","valid-feedback":"Thank you :)","invalid-feedback":"Please provide at least 4 characters.","is-valid":t.validator}})],1)],1)],1)],1)],1),e("CRow",[e("CCol",{attrs:{sm:"4"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Icon/Text")]),t._v(" Groups ")]),e("CCardBody",[e("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}])}),e("CInput",{attrs:{type:"email",placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"append-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-envelope-open"}})]},proxy:!0}])}),e("CInput",{attrs:{placeholder:"ex. $1.000.000",append:".00"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-euro"}})]},proxy:!0}])})],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"success"}},[e("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1),e("CCol",{attrs:{sm:"4"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Buttons")]),t._v(" Groups ")]),e("CCardBody",[e("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("CButton",{attrs:{color:"primary"}},[e("CIcon",{attrs:{name:"cil-magnifying-glass"}}),t._v(" Search ")],1)]},proxy:!0}])}),e("CInput",{attrs:{type:"email",placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"append",fn:function(){return[e("CButton",{attrs:{type:"submit",color:"primary"}},[t._v("Submit")])]},proxy:!0}])}),e("CInput",{attrs:{type:"email",placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("CButton",{attrs:{color:"primary"}},[e("CIcon",{attrs:{name:"cib-facebook",height:"14"}})],1)]},proxy:!0},{key:"append",fn:function(){return[e("CButton",{attrs:{color:"primary"}},[e("CIcon",{attrs:{name:"cib-twitter",height:"14"}})],1)]},proxy:!0}])})],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"success"}},[e("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1),e("CCol",{attrs:{sm:"4"}},[e("CCard",[e("CCardHeader",[e("strong",[t._v("Dropdowns")]),t._v(" Groups ")]),e("CCardBody",[e("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("CDropdown",{attrs:{togglerText:"Action",color:"primary"}},[e("CDropdownItem",[t._v("Action")]),e("CDropdownItem",[t._v("Another action")]),e("CDropdownItem",[t._v("Something else here...")]),e("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0}])}),e("CInput",{attrs:{type:"email",placeholder:"Email",autocomplete:"email"},scopedSlots:t._u([{key:"append",fn:function(){return[e("CDropdown",{attrs:{togglerText:"Action",color:"primary",right:""}},[e("CDropdownItem",[t._v("Action")]),e("CDropdownItem",[t._v("Another action")]),e("CDropdownItem",[t._v("Something else here...")]),e("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0}])}),e("CInput",{attrs:{placeholder:"..."},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("CDropdown",{attrs:{togglerText:"Split",color:"primary",split:""}},[e("CDropdownItem",{attrs:{href:"#"}},[t._v("Action")]),e("CDropdownItem",{attrs:{href:"#"}},[t._v("Another action")]),e("CDropdownItem",{attrs:{href:"#"}},[t._v("Something else here...")]),e("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0},{key:"append",fn:function(){return[e("CDropdown",{attrs:{togglerText:"Action",color:"primary",right:""}},[e("CDropdownItem",[t._v("Action")]),e("CDropdownItem",[t._v("Another action")]),e("CDropdownItem",[t._v("Something else here...")]),e("CDropdownItem",{attrs:{disabled:""}},[t._v("Disabled action")])],1)]},proxy:!0}])})],1),e("CCardFooter",[e("CButton",{attrs:{type:"submit",size:"sm",color:"success"}},[e("CIcon",{attrs:{name:"cil-check-circle"}}),t._v(" Submit")],1),e("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[e("CIcon",{attrs:{name:"cil-ban"}}),t._v(" Reset")],1)],1)],1)],1)],1),e("CRow",[e("CCol",{attrs:{md:"6"}},[e("CCard",[e("CCardHeader",[t._v(" Use the grid for big devices! "),e("small",[e("code",[t._v(".col-lg-*")]),t._v(" "),e("code",[t._v(".col-md-*")]),t._v(" "),e("code",[t._v(".col-sm-*")])])]),e("CCardBody",t._l([4,5,6,7,8],(function(t,o){return e("CRow",{key:o,staticClass:"form-group"},[e("CCol",{attrs:{col:12-t}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-md-".concat(12-t)}})],1),e("CCol",{attrs:{col:t}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-md-".concat(t)}})],1)],1)})),1),e("CCardFooter",[e("CButton",{attrs:{size:"sm",color:"primary"}},[t._v("Action")]),e("CButton",{attrs:{size:"sm",color:"danger"}},[t._v("Action")]),e("CButton",{attrs:{size:"sm",color:"warning"}},[t._v("Action")]),e("CButton",{attrs:{size:"sm",color:"info"}},[t._v("Action")]),e("CButton",{attrs:{size:"sm",color:"success"}},[t._v("Action")])],1)],1)],1),e("CCol",{attrs:{md:"6"}},[e("CCard",[e("CCardHeader",[t._v(" Input Grid for small devices! "),e("small",[e("code",[t._v(".col-*")])])]),e("CCardBody",t._l([4,5,6,7,8],(function(t,o){return e("CRow",{key:o,staticClass:"form-group"},[e("CCol",{attrs:{col:t}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-".concat(t)}})],1),e("CCol",{attrs:{col:12-t}},[e("CInput",{staticClass:"mb-0",attrs:{placeholder:".col-".concat(12-t)}})],1)],1)})),1),e("CCardFooter",[e("CButton",{attrs:{size:"sm",color:"primary"}},[t._v("Action")]),e("CButton",{attrs:{size:"sm",color:"danger"}},[t._v("Action")]),e("CButton",{attrs:{size:"sm",color:"warning"}},[t._v("Action")]),e("CButton",{attrs:{size:"sm",color:"info"}},[t._v("Action")]),e("CButton",{attrs:{size:"sm",color:"success"}},[t._v("Action")])],1)],1)],1)],1),e("CRow",[e("CCol",{attrs:{sm:"4"}},[e("CCard",[e("CCardHeader",[t._v(" Example Form ")]),e("CCardBody",[e("CForm",[e("CInput",{attrs:{prepend:"Username"},scopedSlots:t._u([{key:"append-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}])}),e("CInput",{attrs:{type:"email",autocomplete:"email",prepend:"Email"},scopedSlots:t._u([{key:"append-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-envelope-closed"}})]},proxy:!0}])}),e("CInput",{attrs:{type:"password",autocomplete:"current-password",prepend:"Password"},scopedSlots:t._u([{key:"append-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-shield-alt"}})]},proxy:!0}])}),e("div",{staticClass:"form-group form-actions"},[e("CButton",{attrs:{type:"submit",size:"sm",color:"primary"}},[t._v(" Submit ")])],1)],1)],1)],1)],1),e("CCol",{attrs:{sm:"4"}},[e("CCard",[e("CCardHeader",[t._v(" Example Form ")]),e("CCardBody",[e("CForm",[e("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"append-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}])}),e("CInput",{attrs:{placeholder:"Email",type:"email",autocomplete:"email"},scopedSlots:t._u([{key:"append-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-envelope-closed"}})]},proxy:!0}])}),e("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"current-password"},scopedSlots:t._u([{key:"append-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-shield-alt"}})]},proxy:!0}])}),e("div",{staticClass:"form-group form-actions"},[e("CButton",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"submit"}},[t._v(" Submit ")])],1)],1)],1)],1)],1),e("CCol",{attrs:{sm:"4"}},[e("CCard",[e("CCardHeader",[t._v(" Example Form ")]),e("CCardBody",[e("CForm",[e("CInput",{attrs:{placeholder:"Username"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}])}),e("CInput",{attrs:{placeholder:"Email",type:"email",autocomplete:"email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-envelope-closed"}})]},proxy:!0}])}),e("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"current-password"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-shield-alt"}})]},proxy:!0}])}),e("div",{staticClass:"form-group form-actions"},[e("CButton",{attrs:{type:"submit",size:"sm",color:"success"}},[t._v(" Submit ")])],1)],1)],1)],1)],1)],1),e("CRow",[e("CCol",{attrs:{lg:"12"}},[e("transition",{attrs:{name:"fade"}},[t.show?e("CCard",[e("CCardHeader",[e("CIcon",{attrs:{name:"cil-pencil"}}),t._v(" Form Elements "),e("div",{staticClass:"card-header-actions"},[e("CLink",{staticClass:"card-header-action btn-setting",attrs:{href:"#"}},[e("CIcon",{attrs:{name:"cil-settings"}})],1),e("CLink",{staticClass:"card-header-action btn-minimize",on:{click:function(e){t.formCollapsed=!t.formCollapsed}}},[e("CIcon",{attrs:{name:"cil-chevron-".concat(t.formCollapsed?"bottom":"top")}})],1),e("CLink",{staticClass:"card-header-action btn-close",attrs:{href:"#"},on:{click:function(e){t.show=!t.show}}},[e("CIcon",{attrs:{name:"cil-x-circle"}})],1)],1)],1),e("CCollapse",{attrs:{show:t.formCollapsed}},[e("CCardBody",[e("CInput",{attrs:{label:"Prepended text",description:"Here's some help text",type:"email",autocomplete:"email",prepend:"@"}}),e("CInput",{attrs:{label:"Appended text",append:".00",description:"Here's some help text"}}),e("CInput",{attrs:{label:"Appended and prepended text",append:".00",description:"Here's some help text",prepend:"$"}}),e("CInput",{attrs:{label:"Append with button",description:"Here's some help text"},scopedSlots:t._u([{key:"append",fn:function(){return[e("CButton",{attrs:{color:"primary"}},[t._v("Go!")])]},proxy:!0}],null,!1,542345765)}),e("CInput",{attrs:{label:"Two-buttons append"},scopedSlots:t._u([{key:"append",fn:function(){return[e("CButton",{attrs:{color:"primary"}},[t._v("Search")]),e("CButton",{attrs:{color:"danger"}},[t._v("Options")])]},proxy:!0}],null,!1,3446918590)}),e("div",{staticClass:"form-actions"},[e("CButton",{attrs:{type:"submit",color:"primary"}},[t._v("Save changes")]),e("CButton",{attrs:{color:"secondary"}},[t._v("Cancel")])],1)],1)],1)],1):t._e()],1)],1)],1)],1)},r=[],s={name:"Forms",data:function(){return{selected:[],show:!0,horizontal:{label:"col-3",input:"col-9"},options:["Option 1","Option 2","Option 3"],selectOptions:["Option 1","Option 2","Option 3",{value:["some value","another value"],label:"Selected option"}],selectedOption:["some value","another value"],formCollapsed:!0,checkboxNames:["Checkboxes","Inline Checkboxes","Checkboxes - custom","Inline Checkboxes - custom"],radioNames:["Radios","Inline Radios","Radios - custom","Inline Radios - custom"]}},methods:{validator:function(t){return!!t&&t.length>=4}}},l=s,n=o("2877"),c=Object(n["a"])(l,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22885b.79dba846.js.map