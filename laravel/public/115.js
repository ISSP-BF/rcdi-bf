(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{885:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o.n(n),l=o(186),r=o.n(l),a=(o(475),o(716)),d=o(717),s=o(887),c=o(718),p={plusIcon:a.a,folderIcon:d.a,fileIcon:s.a,levelUpIcon:c.a,name:"Media",data:function(){return{rightCard:"fileInfo",elementId:null,thisFolder:null,name:null,medias:[],mediaFolders:[],parentFolder:"disable",fields:["name","actions"],items:[],returnFolderId:null,fileInfoHeader:["name","data"],fileInfo:[],selectFolder:null,moveObjectName:"",deleteFolderModal:!1,deleteFileModal:!1,downloadFileName:"",croppModal:!1,cropper:null,croppUrl:"",changePort:"localhost:8000"}},computed:{selectFolderArray:function(){var e=this;return this.mediaFolders.filter((function(t){return t.id!=e.elementId}))}},methods:{croppImage:function(){var e=this,t=this;t.cropper.getCroppedCanvas().toBlob((function(o){var n=new FormData;n.append("file",o),n.append("thisFolder",t.thisFolder),n.append("id",t.elementId),n.append("token",localStorage.getItem("api_token")),i.a.post(e.$apiAdress+"/api/media/file/cropp",n).then((function(e){t.croppModal=!1,t.getFoldersAndFiles(t.thisFolder)})).catch((function(e){console.log(e)}))}))},openCroppFileModal:function(e){var t=this;i.a.get(this.$apiAdress+"/api/media/file?id="+e+"&thisFolder="+t.thisFolder+"&token="+localStorage.getItem("api_token")).then((function(e){t.elementId=e.data.id,t.croppUrl=e.data.url,t.croppUrl=t.croppUrl.replace("localhost",t.changePort),document.getElementById("cropp-img-img").setAttribute("src",t.croppUrl),t.croppModal=!0,t.$nextTick((function(){null!==t.cropper?t.cropper.replace(t.croppUrl):t.cropper=new r.a(document.getElementById("cropp-img-img"),{minContainerWidth:600,minContainerHeight:600})}))})).catch((function(e){console.log(e)}))},downloadFile:function(e,t){var o=this;this.downloadFileName=t,i()({method:"get",url:this.$apiAdress+"/api/media/file/download?thisFolder="+o.thisFolder+"&id="+e+"&token="+localStorage.getItem("api_token"),responseType:"arraybuffer"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download",o.downloadFileName),document.body.appendChild(n),n.click()})).catch((function(e){console.log(e),o.$router.push({path:"/login"})}))},openDeleteDialog:function(e,t,o){this.moveObjectName=o,this.elementId=e,"folder"==t?this.deleteFolderModal=!0:this.deleteFileModal=!0},deleteFolder:function(){var e=this;i.a.post(this.$apiAdress+"/api/media/folder/delete?thisFolder="+e.thisFolder+"&id="+e.elementId+"&token="+localStorage.getItem("api_token")).then((function(t){e.getFoldersAndFiles(e.thisFolder),e.rightCard="fileInfo",e.deleteFolderModal=!1})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},deleteFile:function(){var e=this;i.a.post(this.$apiAdress+"/api/media/file/delete?thisFolder="+e.thisFolder+"&id="+e.elementId+"&token="+localStorage.getItem("api_token")).then((function(t){e.getFoldersAndFiles(e.thisFolder),e.rightCard="fileInfo",e.deleteFileModal=!1})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},selectFolderRadioInput:function(e){this.selectFolder=e},returnFolder:function(){null!=this.returnFolderId&&this.getFoldersAndFiles(this.returnFolderId)},clickOnElement:function(e,t){"folder"==t?(this.returnFolderId=this.thisFolder,this.getFoldersAndFiles(e)):this.getFileInfo(e)},renameOpenForm:function(e,t){this.elementId=e;var o=this;"folder"==t?i.a.get(this.$apiAdress+"/api/media/folder?id="+e+"&token="+localStorage.getItem("api_token")).then((function(e){o.name=e.data.name,o.rightCard="renameFolder"})).catch((function(e){console.log(e),o.$router.push({path:"/login"})})):i.a.get(this.$apiAdress+"/api/media/file?thisFolder="+o.thisFolder+"&id="+e+"&token="+localStorage.getItem("api_token")).then((function(e){o.name=e.data.name,o.rightCard="renameFile"})).catch((function(e){console.log(e),o.$router.push({path:"/login"})}))},moveOpenForm:function(e,t,o){this.elementId=e,this.moveObjectName=o,this.rightCard="folder"==t?"moveFolder":"moveFile"},moveFolder:function(){if(null!=this.selectFolder){var e=this;i.a.post(this.$apiAdress+"/api/media/folder/move",{id:this.elementId,folder:this.selectFolder,token:localStorage.getItem("api_token")}).then((function(t){e.getFoldersAndFiles(e.thisFolder),e.rightCard="fileInfo",e.selectFolder=null})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},moveFile:function(){if(null!=this.selectFolder){var e=this;i.a.post(this.$apiAdress+"/api/media/file/move",{id:this.elementId,folder:this.selectFolder,thisFolder:this.thisFolder,token:localStorage.getItem("api_token")}).then((function(t){e.getFoldersAndFiles(e.thisFolder),e.rightCard="fileInfo",e.selectFolder=null})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))}},copyFile:function(e){var t=this;i.a.get(this.$apiAdress+"/api/media/file/copy?thisFolder="+t.thisFolder+"&id="+e+"&token="+localStorage.getItem("api_token")).then((function(e){t.getFoldersAndFiles(t.thisFolder),t.rightCard="fileInfo"})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))},renameFolder:function(){var e=this;i.a.post(this.$apiAdress+"/api/media/folder/update",{name:this.name,id:this.elementId,token:localStorage.getItem("api_token")}).then((function(t){e.getFoldersAndFiles(e.thisFolder),e.rightCard="fileInfo"})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},renameFile:function(){var e=this;i.a.post(this.$apiAdress+"/api/media/file/update",{name:this.name,id:this.elementId,token:localStorage.getItem("api_token"),thisFolder:this.thisFolder}).then((function(t){e.getFoldersAndFiles(e.thisFolder),e.rightCard="fileInfo"})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},getFileInfo:function(e){var t=this;i.a.get(this.$apiAdress+"/api/media/file?thisFolder="+t.thisFolder+"&id="+e+"&token="+localStorage.getItem("api_token")).then((function(e){t.fileInfo=[],t.fileInfo.push({name:"Name",data:e.data.name}),t.fileInfo.push({name:"Real name",data:e.data.realName}),t.fileInfo.push({name:"URL",data:e.data.url}),t.fileInfo.push({name:"Mime Type",data:e.data.mimeType}),t.fileInfo.push({name:"Size",data:e.data.size}),t.fileInfo.push({name:"Created At",data:e.data.createdAt}),t.fileInfo.push({name:"Updated At",data:e.data.updatedAt})})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))},handleFileUpload:function(e,t){var o=this,n=new FormData;n.append("file",e[0]),i.a.post(this.$apiAdress+"/api/media/file/store?thisFolder="+o.thisFolder+"&token="+localStorage.getItem("api_token"),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){o.getFoldersAndFiles(o.thisFolder)})).catch((function(e){console.log(e),o.$router.push({path:"/login"})}))},addFolder:function(){var e=this;i.a.get(this.$apiAdress+"/api/media/folder/store?thisFolder="+e.thisFolder+"&token="+localStorage.getItem("api_token")).then((function(t){e.getFoldersAndFiles(e.thisFolder)})).catch((function(t){console.log(t),e.$router.push({path:"/login"})}))},buildItems:function(){this.items=[];for(var e=0;e<this.mediaFolders.length;e++)this.items.push({type:"folder",name:this.mediaFolders[e].name,id:this.mediaFolders[e].id});for(e=0;e<this.medias.length;e++)this.items.push({type:"file",name:this.medias[e].name,id:this.medias[e].id,url:this.medias[e].url,mime:this.medias[e].mime_type})},getFoldersAndFiles:function(e){var t=this;i.a.get(this.$apiAdress+"/api/media?id="+e+"&token="+localStorage.getItem("api_token")).then((function(e){t.medias=e.data.medias,t.mediaFolders=e.data.mediaFolders,t.thisFolder=e.data.thisFolder,t.parentFolder=e.data.parentFolder,t.buildItems(),t.rightCard="fileInfo"})).catch((function(e){console.log(e),t.$router.push({path:"/login"})}))}},mounted:function(){this.getFoldersAndFiles(""),document.getElementById("cropp-img-img").addEventListener("load",this.updateCroppImage)}},u=o(0),m=Object(u.a)(p,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("CRow",[o("CCol",{attrs:{col:"12",xl:"6"}},[o("transition",{attrs:{name:"slide"}},[o("CCard",[o("CCardBody",[o("h4",[e._v("Media")]),e._v(" "),"disable"!=e.parentFolder?o("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.returnFolder()}}},[o("CIcon",{attrs:{content:e.$options.levelUpIcon}}),e._v("\n              Return\n          ")],1):e._e(),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.addFolder()}}},[o("CIcon",{attrs:{content:e.$options.plusIcon}}),e._v(" "),o("CIcon",{attrs:{content:e.$options.folderIcon}}),e._v("\n              New folder\n          ")],1),e._v(" "),o("CIcon",{attrs:{content:e.$options.plusIcon}}),e._v(" "),o("CIcon",{attrs:{content:e.$options.fileIcon}}),e._v(" "),o("CInputFile",{attrs:{type:"file",placeholder:"New file"},on:{change:e.handleFileUpload}}),e._v(" "),o("CDataTable",{attrs:{hover:"",items:e.items,fields:e.fields},scopedSlots:e._u([{key:"name",fn:function(t){var n=t.item;return["folder"==n.type?o("td",{staticClass:"click-file",on:{click:function(t){return e.clickOnElement(n.id,n.type)}}},[o("CIcon",{attrs:{content:e.$options.folderIcon}}),e._v("\n                  "+e._s(n.name)+"\n                ")],1):o("td",{staticClass:"click-file",on:{click:function(t){return e.clickOnElement(n.id,n.type)}}},[o("CIcon",{attrs:{content:e.$options.fileIcon}}),e._v("\n                  "+e._s(n.name)+"\n                ")],1)]}},{key:"actions",fn:function(t){var n=t.item;return[o("td",[o("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.renameOpenForm(n.id,n.type)}}},[e._v("\n                      Rename\n                  ")])],1),e._v(" "),o("td",[o("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.moveOpenForm(n.id,n.type,n.name)}}},[e._v("\n                      Move\n                  ")])],1),e._v(" "),"file"==n.type?o("td",[o("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.copyFile(n.id)}}},[e._v("\n                      Copy\n                  ")])],1):o("td"),e._v(" "),"file"==n.type?o("td",[o("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.downloadFile(n.id,n.name)}}},[e._v("\n                      Download\n                  ")])],1):o("td"),e._v(" "),"file"==n.type?o("td",[n.mime.includes("image/")?o("CButton",{attrs:{color:"success"},on:{click:function(t){return e.openCroppFileModal(n.id)}}},[e._v("\n                      Cropp\n                  ")]):e._e()],1):o("td"),e._v(" "),o("td",[o("CButton",{attrs:{color:"danger"},on:{click:function(t){return e.openDeleteDialog(n.id,n.type,n.name)}}},[e._v("\n                      Delete\n                  ")])],1)]}}])})],1)],1)],1)],1),e._v(" "),o("CCol",{attrs:{col:"12",xl:"6"}},[o("transition",{attrs:{name:"slide"}},["fileInfo"==e.rightCard?o("CCard",[o("CCardBody",[o("CDataTable",{attrs:{items:e.fileInfo,fields:e.fileInfoHeader}})],1)],1):e._e(),e._v(" "),"renameFolder"==e.rightCard?o("CCard",[o("CCardBody",[o("CInput",{attrs:{type:"text",label:"New name",placeholder:"Folder name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.renameFolder()}}},[e._v("\n              Save\n          ")]),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:function(t){e.rightCard="fileInfo"}}},[e._v("\n              Cancel\n          ")])],1)],1):e._e(),e._v(" "),"renameFile"==e.rightCard?o("CCard",[o("CCardBody",[o("CInput",{attrs:{type:e.text,label:"New name",placeholder:"Folder name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.renameFile()}}},[e._v("\n              Save\n          ")]),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:function(t){e.rightCard="fileInfo"}}},[e._v("\n              Cancel\n          ")])],1)],1):e._e(),e._v(" "),"moveFolder"==e.rightCard?o("CCard",[o("CCardBody",[o("h4",[e._v('Move folder "'+e._s(e.moveObjectName)+'"')]),e._v(" "),"disable"!=e.parentFolder?o("CInputRadio",{attrs:{label:"Move Up",type:"radio",name:"selectFolderForFolder"},on:{"update:checked":function(t){return e.selectFolderRadioInput("moveUp")}}}):e._e(),e._v(" "),e._l(e.selectFolderArray,(function(t){return o("CInputRadio",{key:t.id,attrs:{label:t.name,type:"radio",name:"selectFolderForFolder"},on:{"update:checked":function(o){return e.selectFolderRadioInput(t.id)}}})})),e._v(" "),o("CButton",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:function(t){return e.moveFolder()}}},[e._v("\n              Save\n          ")]),e._v(" "),o("CButton",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:function(t){e.rightCard="fileInfo"}}},[e._v("\n              Cancel\n          ")])],2)],1):e._e(),e._v(" "),"moveFile"==e.rightCard?o("CCard",[o("CCardBody",[o("h4",[e._v('Move file "'+e._s(e.moveObjectName)+'"')]),e._v(" "),"disable"!=e.parentFolder?o("CInputRadio",{attrs:{label:"Move Up",type:"radio",name:"selectFolderForFolder"},on:{"update:checked":function(t){return e.selectFolderRadioInput("moveUp")}}}):e._e(),e._v(" "),e._l(e.mediaFolders,(function(t){return o("CInputRadio",{key:t.id,attrs:{label:t.name,type:"radio",name:"selectFolderForFolder"},on:{"update:checked":function(o){return e.selectFolderRadioInput(t.id)}}})})),e._v(" "),o("CButton",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:function(t){return e.moveFile()}}},[e._v("\n              Save\n          ")]),e._v(" "),o("CButton",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:function(t){e.rightCard="fileInfo"}}},[e._v("\n              Cancel\n          ")])],2)],1):e._e()],1)],1),e._v(" "),o("CModal",{attrs:{show:e.deleteFolderModal,centered:!0,title:"Delete folder"},on:{"update:show":function(t){e.deleteFolderModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("CButton",{attrs:{color:"primary"},on:{click:function(t){e.deleteFolderModal=!1}}},[e._v("Cancel")]),e._v(" "),o("CButton",{attrs:{color:"danger"},on:{click:e.deleteFolder}},[e._v("Delete")])]},proxy:!0}])},[e._v('\n      Are you sure to delete a folder named "'+e._s(e.moveObjectName)+'"?\n    ')]),e._v(" "),o("CModal",{attrs:{show:e.deleteFileModal,centered:!0,title:"Delete file"},on:{"update:show":function(t){e.deleteFileModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("CButton",{attrs:{color:"primary"},on:{click:function(t){e.deleteFileModal=!1}}},[e._v("Cancel")]),e._v(" "),o("CButton",{attrs:{color:"danger"},on:{click:e.deleteFile}},[e._v("Delete")])]},proxy:!0}])},[e._v('\n      Are you sure to delete a file named "'+e._s(e.moveObjectName)+'"?\n    ')]),e._v(" "),o("CModal",{attrs:{show:e.croppModal,centered:!0,title:"Cropp image",size:"lg"},on:{"update:show":function(t){e.croppModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("CButton",{attrs:{color:"primary"},on:{click:function(t){e.croppModal=!1}}},[e._v("Cancel")]),e._v(" "),o("CButton",{attrs:{color:"primary"},on:{click:e.croppImage}},[e._v("Cropp")])]},proxy:!0}])},[o("img",{attrs:{id:"cropp-img-img"}})])],1)}),[],!1,null,null,null);t.default=m.exports}}]);