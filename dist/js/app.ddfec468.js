(function(t){function e(e){for(var i,r,l=e[0],s=e[1],c=e[2],u=0,f=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},o={app:0},a=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d413":"1cf0db26"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=o[t]=[e,i]});e.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=r(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,n[1](c)}o[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r={name:"app"},l=r,s=(n("034f"),n("2877")),c=Object(s["a"])(l,o,a,!1,null,null,null),u=c.exports,d=n("5c96"),f=n.n(d),p=(n("0fae"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"home"},[n("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"70px"}},[n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),n("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.checkPass,callback:function(e){t.$set(t.ruleForm,"checkPass",e)},expression:"ruleForm.checkPass"}})],1),n("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[n("el-input",{model:{value:t.ruleForm.phone_num,callback:function(e){t.$set(t.ruleForm,"phone_num",t._n(e))},expression:"ruleForm.phone_num"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.dologin}},[t._v("登录")]),n("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1)])},m=[],g=(n("c5f6"),n("7cdf"),n("bc3a")),b=n.n(g);b.a.interceptors.request.use(function(t){var e=localStorage.getItem("token");return e&&(t.headers.token=e),t}),b.a.interceptors.response.use(function(t){return 0!==t.data.code?(localStorage.removeItem("token"),window.location.href="login",Promise.reject("")):t});var v=b.a.get,k=b.a.post,y=b.a.delete,_=b.a.patch,w="/",$=function(t){var e=w+"/login";return k(e,t)},x=w+"/api/v1/content",F=function(t){return k(x,t)},S=function(){return v(x)},E=function(t){return y("".concat(x,"?id=").concat(t))},D=function(t){return _(x,t)},C=x+"/getContentById",j=function(t){return v(C+"?id=".concat(t))},O=function(t){return v(x+"/getFilesByContentId?content_id="+t)},P=function(t){return y(x+"/deleteFileByFileName?fileName="+t)},V=function(t,e){return x+"/".concat(t,"/upload_file/").concat(e)},A={data:function(){var t=this,e=function(t,e,n){if(!e)return n(new Error("手机号码不能为空"));Number.isInteger(e)||n(new Error("请输入数字值"));var i=/^1(3|4|5|6|7|8|9)\d{9}$/.test(e);if(console.log(i),!i)return n(new Error("手机号码有误，请重填"));n()},n=function(e,n,i){""===n?i(new Error("请输入密码")):n.length<=4?i(new Error("密码位数不能小于四位")):(""!==t.ruleForm.checkPass&&t.$refs.ruleForm.validateField("checkPass"),i())},i=function(e,n,i){""===n?i(new Error("请再次输入密码")):n!==t.ruleForm.pass?i(new Error("两次输入密码不一致!")):i()};return{ruleForm:{pass:"123123",checkPass:"123123",phone_num:"18601302047"},rules:{pass:[{validator:n,trigger:"blur"}],checkPass:[{validator:i,trigger:"blur"}],phone_num:[{validator:e,trigger:"blur"}]}}},methods:{dologin:function(){var t=this;this.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;$(t.ruleForm).then(function(e){0===e.data.code?(t.$message.success(e.data.msg||"登录成功"),localStorage.setItem("token",e.data.data),t.$router.push({path:"/home"})):t.$message.error(e.data.msg)})})},resetForm:function(t){this.$refs[t].resetFields()}}},T=A,I=(n("f47f"),Object(s["a"])(T,h,m,!1,null,null,null)),U=I.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("el-button",{staticStyle:{"margin-bottom":"20px",float:"left"},attrs:{type:"primary"},on:{click:t.showAddDialog}},[t._v("添加")]),n("add-item-dialog",{ref:"itemDialog",on:{finish:t.getContents}}),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[n("el-table-column",{attrs:{prop:"title",label:"标题"}}),n("el-table-column",{attrs:{prop:"icon",label:"标题图"},scopedSlots:t._u([{key:"default",fn:function(e){return[""!==e.row.icon?n("img",{staticStyle:{width:"80px",height:"100px"},attrs:{src:e.row.icon}}):t._e()]}}])}),n("el-table-column",{attrs:{prop:"content_type",label:"类别"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.row.id)}}},[t._v("删除")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleSkip(e.row)}}},[t._v("跳转")])]}}])})],1)],1)],1)])},N=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"30%"}},[n("el-form",{ref:"form",attrs:{model:t.form,labelWidth:"59px",labelPosition:"left"}},[n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"标题图"}},[n("el-input",{model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}})],1),n("el-form-item",{attrs:{label:"类别"}},[n("el-input",{model:{value:t.form.content_type,callback:function(e){t.$set(t.form,"content_type",e)},expression:"form.content_type"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},J=[],L={name:"itemDialog",data:function(){return{isAdd:!1,dialogVisible:!1,form:{},title:""}},methods:{showAdd:function(){this.dialogVisible=!0,this.isAdd=!0,this.title="添加商品",this.form={icon:"",title:"",content_type:""}},showUpdate:function(t){this.dialogVisible=!0,this.isAdd=!1,this.title="修改商品",this.form=window.deepclone(t)},addFormData:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;F(t.form).then(function(e){0===e.data.code?t.$message.success(e.data.msg||"成功添加"):t.$message.error(e.data.msg),t.dialogVisible=!1,t.form={},t.$emit("finish")})})},updateFormData:function(){var t=this;this.$refs.form.validate(function(e){e&&D(t.form).then(function(e){0===e.data.code?t.$message.success(e.data.msg||"修改成功"):t.$message.error(e.data.msg||"修改失败"),t.dialogVisible=!1,t.form={},t.$emit("finish")})})},handleSubmit:function(){this.isAdd?this.addFormData():this.updateFormData()}}},M=L,q=Object(s["a"])(M,B,J,!1,null,null,null),W=q.exports,G={components:{AddItemDialog:W},name:"home",data:function(){return{dialogVisible:!1,tableData:[]}},mounted:function(){this.getContents()},methods:{handleEdit:function(t){this.$refs.itemDialog.showUpdate(t)},handleDelete:function(t){var e=this;E(t).then(function(t){e.getContents()})},showAddDialog:function(){this.$refs.itemDialog.showAdd()},handleSkip:function(t){var e=t.id;this.$router.push({name:"skip",params:{id:e}})},getContents:function(){var t=this;S().then(function(e){t.tableData=e.data.data})}}},H=G,K=Object(s["a"])(H,z,N,!1,null,null,null),Q=K.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{on:{click:t.addText}},[t._v("添加记录")]),n("el-button",{on:{click:t.addImgFile}},[t._v("添加图片文件")]),n("el-button",{on:{click:t.addAudioFile}},[t._v("添加音频文件")]),n("el-button",{staticStyle:{"background-color":"white"},on:{click:t.baocun}},[t._v("保存")]),n("skip-dialog",{ref:"skipDialog",on:{addDialog:t.addTextarea,addTextare:t.bjTextarea}}),n("upload-dialog",{ref:"uploadDialog"}),n("skip-content",{ref:"skipContent",on:{editContent:t.showEditDialog}})],1)},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-radio-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-radio",{attrs:{label:1}},[t._v("文本")]),n("el-radio",{attrs:{label:2}},[t._v("图片地址")]),n("el-radio",{attrs:{label:3}},[t._v("音频地址")])],1),1!==t.type?n("div",t._l(t.files,function(e){return String(e.file_type)===String(t.type)?n("p",{key:e.id},[n("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:"/niu/img/"+e.file_name}}),t._v("\n      "+t._s(e.file_name)+"\n      "),n("el-button",{attrs:{type:"success",icon:"el-icon-circle-plus-outline",circle:""},on:{click:function(n){return t.addToContent(e)}}}),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){return t.deleteFile(e)}}})],1):t._e()}),0):t._e(),n("el-form",{attrs:{labelWidth:"59px",labelPosition:"left"}},[n("el-form-item",{attrs:{label:"内容"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})],1),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.addTarea}},[t._v("确 定")])],1)],1)},Z=[],tt={data:function(){return{type:2,dialogVisible:!1,title:"",data:"",desc:"",index:"",files:[]}},mounted:function(){this.getFiles()},methods:{getFiles:function(){var t=this;O(this.$route.params.id).then(function(e){t.files=e.data.data})},addToContent:function(t){this.data="/img/"+t.file_name},deleteFile:function(t){var e=this;P(t.file_name).then(function(t){e.getFiles()})},showAdd:function(){this.dialogVisible=!0,this.isAddShow=!0,this.type=2,this.data="",this.desc=""},showEdit:function(t,e){this.index=e,this.dialogVisible=!0,this.isAddShow=!1,this.data=t.data,this.desc=t.desc,this.type=t.type},addTarea:function(){this.isAddShow?(this.$emit("addDialog",this.type,this.data,this.desc),this.data="",this.desc="",this.dialogVisible=!1):(this.$emit("addTextare",this.index,this.type,this.data,this.desc),this.data="",this.desc="",this.dialogVisible=!1)}}},et=tt,nt=Object(s["a"])(et,Y,Z,!1,null,null,null),it=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"上传文件",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{limit:1,action:t.uploadUrl,"auto-upload":!1,headers:t.headerData,"file-list":t.imgList,name:"targetFile"}},[n("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选择文件")]),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:t.submitUpload}},[t._v("上传到服务器")])],1)],1)},at=[],rt={data:function(){return{dialogVisible:!1,uploadUrl:"",headerData:{},imgList:[]}},mounted:function(){var t=localStorage.getItem("token");this.headerData.token=t},methods:{submitUpload:function(){this.$refs.upload.submit()},show:function(t){this.uploadUrl=V(this.$route.params.id,t),this.dialogVisible=!0}}},lt=rt,st=Object(s["a"])(lt,ot,at,!1,null,null,null),ct=st.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.skip,function(e,i){return n("div",{staticStyle:{border:"1px solid red"}},[1===e.type?n("span",[t._v(t._s(e.data))]):t._e(),2===e.type?n("img",{attrs:{src:e.data}}):t._e(),3===e.type?n("audio",{attrs:{src:e.data,controls:"controls"}}):t._e(),n("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(e.desc))]),n("el-button",{on:{click:function(n){return t.btnChange(e,i)}}},[t._v("编辑")]),n("el-button",{on:{click:function(e){return t.deleSkip(i)}}},[t._v("删除")]),0!==i?n("i",{staticClass:"el-icon-upload2",on:{click:function(e){return t.uploadEl(i)}}}):t._e(),i!==t.skip.length-1?n("i",{staticClass:"el-icon-download",on:{click:function(e){return t.downloadEl(i)}}}):t._e()],1)}),0)},dt=[],ft={data:function(){return{skip:[]}},mounted:function(){this.getContent()},methods:{downloadEl:function(){},uploadEl:function(t){var e=this.skip[t-1];this.$set(this.skip,t-1,this.skip[t]),this.$set(this.skip,t,e)},btnChange:function(t,e){this.$emit("editContent",t,e)},deleSkip:function(t){this.skip.splice(t,1)},editSkip:function(t,e){this.$set(this.skip,t,e)},addItemToSkip:function(t){this.skip.push(t)},getContent:function(){var t=this;j(this.$route.params.id).then(function(e){console.log(e.data),t.skip=JSON.parse(e.data.data.content)||[]})},sybmitContent:function(){var t=this,e={id:this.$route.params.id,content:JSON.stringify(this.skip)};D(e).then(function(e){t.$message.success(e.data.msg)})}}},pt=ft,ht=(n("a7b2"),Object(s["a"])(pt,ut,dt,!1,null,null,null)),mt=ht.exports,gt=n("d188"),bt={components:{ElButton:gt["a"],skipDialog:it,skipContent:mt,uploadDialog:ct},methods:{addText:function(){this.$refs.skipDialog.showAdd()},showEditDialog:function(t,e){this.$refs.skipDialog.showEdit(t,e)},bjTextarea:function(t,e,n,i){var o={type:e,data:n,desc:i};this.$refs.skipContent.editSkip(t,o)},addTextarea:function(t,e,n){var i={type:t,data:e,desc:n};this.$refs.skipContent.addItemToSkip(i)},baocun:function(){this.$refs.skipContent.sybmitContent()},addImgFile:function(){this.$refs.uploadDialog.show(2)},addAudioFile:function(){this.$refs.uploadDialog.show(3)}}},vt=bt,kt=Object(s["a"])(vt,R,X,!1,null,null,null),yt=kt.exports;i["default"].use(p["a"]);var _t=[{path:"/",component:function(){return n.e("chunk-2d22d413").then(n.bind(null,"f75a"))},redirect:"/home",children:[{path:"/home",name:"home",component:Q}]},{path:"/skip/:id",name:"skip",component:yt},{path:"/login",name:"login",component:U}],wt=new p["a"]({routes:_t});wt.beforeEach(function(t,e,n){var i=localStorage.getItem("token");"/login"!==t.path&&(i||n("/login")),"/login"===t.path&&i&&n("/"),n()});var $t=wt,xt=(n("456d"),n("7618")),Ft=(n("ac6a"),function t(e){if(null===e)return null;if("number"===typeof e||"string"===typeof e||"boolean"===typeof e)return e;if(Array.isArray(e)){var n=[];return e.forEach(function(e){n.push(t(e))}),n}if("object"===Object(xt["a"])(e)){var i={};return Object.keys(e).forEach(function(n){var o=e[n];i[n]=t(o)}),i}});window.deepclone=Ft,i["default"].use(f.a),i["default"].config.productionTip=!1,new i["default"]({router:$t,render:function(t){return t(u)}}).$mount("#app")},"5ee1":function(t,e,n){},"64a9":function(t,e,n){},"912c":function(t,e,n){},a7b2:function(t,e,n){"use strict";var i=n("5ee1"),o=n.n(i);o.a},f47f:function(t,e,n){"use strict";var i=n("912c"),o=n.n(i);o.a}});
//# sourceMappingURL=app.ddfec468.js.map