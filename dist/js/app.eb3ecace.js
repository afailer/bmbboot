(function(t){function e(e){for(var o,a,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d413":"1cf0db26"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=i[t]=[e,o]});e.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}i[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={name:"app"},s=a,l=(n("034f"),n("2877")),c=Object(l["a"])(s,i,r,!1,null,null,null),u=c.exports,d=n("5c96"),f=n.n(d),p=(n("0fae"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"home"},[n("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,"status-icon":"",rules:t.rules,"label-width":"70px"}},[n("el-form-item",{attrs:{label:"密码",prop:"pass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}})],1),n("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ruleForm.checkPass,callback:function(e){t.$set(t.ruleForm,"checkPass",e)},expression:"ruleForm.checkPass"}})],1),n("el-form-item",{attrs:{label:"手机号码",prop:"phone"}},[n("el-input",{model:{value:t.ruleForm.phone_num,callback:function(e){t.$set(t.ruleForm,"phone_num",t._n(e))},expression:"ruleForm.phone_num"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.dologin}},[t._v("登录")]),n("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1)])},m=[],b=(n("c5f6"),n("7cdf"),n("bc3a")),g=n.n(b);g.a.interceptors.request.use(function(t){var e=localStorage.getItem("token");return e&&(t.headers.token=e),t}),g.a.interceptors.response.use(function(t){return 0!==t.data.code?(localStorage.removeItem("token"),window.location.href="login",Promise.reject("")):t});var v=g.a.get,k=g.a.post,y=g.a.delete,w=g.a.patch,_="",$=function(t){var e=_+"/login";return k(e,t)},x=_+"/api/v1/content/content",S=function(t){return k(x,t)},E=function(){return v(x)},C=function(t){return y("".concat(x,"?id=").concat(t))},F=function(t){return w(x,t)},j=_+"/api/v1/content/getContentById",D=function(t){return v(j+"?id=".concat(t))},O={data:function(){var t=this,e=function(t,e,n){if(!e)return n(new Error("手机号码不能为空"));Number.isInteger(e)||n(new Error("请输入数字值"));var o=/^1(3|4|5|6|7|8|9)\d{9}$/.test(e);if(console.log(o),!o)return n(new Error("手机号码有误，请重填"));n()},n=function(e,n,o){""===n?o(new Error("请输入密码")):n.length<=4?o(new Error("密码位数不能小于四位")):(""!==t.ruleForm.checkPass&&t.$refs.ruleForm.validateField("checkPass"),o())},o=function(e,n,o){""===n?o(new Error("请再次输入密码")):n!==t.ruleForm.pass?o(new Error("两次输入密码不一致!")):o()};return{ruleForm:{pass:"123123",checkPass:"123123",phone_num:"18601302047"},rules:{pass:[{validator:n,trigger:"blur"}],checkPass:[{validator:o,trigger:"blur"}],phone_num:[{validator:e,trigger:"blur"}]}}},methods:{dologin:function(){var t=this;this.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;$(t.ruleForm).then(function(e){0===e.data.code?(t.$message.success(e.data.msg||"登录成功"),localStorage.setItem("token",e.data.data),t.$router.push({path:"/home"})):t.$message.error(e.data.msg)})})},resetForm:function(t){this.$refs[t].resetFields()}}},P=O,A=(n("f47f"),Object(l["a"])(P,h,m,!1,null,null,null)),T=A.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("el-button",{staticStyle:{"margin-bottom":"20px",float:"left"},attrs:{type:"primary"},on:{click:t.showAddDialog}},[t._v("添加")]),n("add-item-dialog",{ref:"itemDialog",on:{finish:t.getContents}}),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[n("el-table-column",{attrs:{prop:"title",label:"标题"}}),n("el-table-column",{attrs:{prop:"icon",label:"标题图"},scopedSlots:t._u([{key:"default",fn:function(e){return[""!==e.row.icon?n("img",{staticStyle:{width:"80px",height:"100px"},attrs:{src:e.row.icon}}):t._e()]}}])}),n("el-table-column",{attrs:{prop:"content_type",label:"类别"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.row.id)}}},[t._v("删除")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleSkip(e.row)}}},[t._v("跳转")])]}}])})],1)],1)],1)])},I=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"30%"}},[n("el-form",{ref:"form",attrs:{model:t.form,labelWidth:"59px",labelPosition:"left"}},[n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"标题图"}},[n("el-input",{model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}})],1),n("el-form-item",{attrs:{label:"类别"}},[n("el-input",{model:{value:t.form.content_type,callback:function(e){t.$set(t.form,"content_type",e)},expression:"form.content_type"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},M=[],z={name:"itemDialog",data:function(){return{isAdd:!1,dialogVisible:!1,form:{},title:""}},methods:{showAdd:function(){this.dialogVisible=!0,this.isAdd=!0,this.title="添加商品",this.form={icon:"",title:"",content_type:""}},showUpdate:function(t){this.dialogVisible=!0,this.isAdd=!1,this.title="修改商品",this.form=window.deepclone(t)},addFormData:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;S(t.form).then(function(e){0===e.data.code?t.$message.success(e.data.msg||"成功添加"):t.$message.error(e.data.msg),t.dialogVisible=!1,t.form={},t.$emit("finish")})})},updateFormData:function(){var t=this;this.$refs.form.validate(function(e){e&&F(t.form).then(function(e){0===e.data.code?t.$message.success(e.data.msg||"修改成功"):t.$message.error(e.data.msg||"修改失败"),t.dialogVisible=!1,t.form={},t.$emit("finish")})})},handleSubmit:function(){this.isAdd?this.addFormData():this.updateFormData()}}},N=z,q=Object(l["a"])(N,J,M,!1,null,null,null),B=q.exports,L={components:{AddItemDialog:B},name:"home",data:function(){return{dialogVisible:!1,tableData:[]}},mounted:function(){this.getContents()},methods:{handleEdit:function(t){this.$refs.itemDialog.showUpdate(t)},handleDelete:function(t){var e=this;C(t).then(function(t){e.getContents()})},showAddDialog:function(){this.$refs.itemDialog.showAdd()},handleSkip:function(t){var e=t.id;this.$router.push({name:"skip",params:{id:e}})},getContents:function(){var t=this;E().then(function(e){t.tableData=e.data.data})}}},U=L,W=Object(l["a"])(U,V,I,!1,null,null,null),G=W.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{staticStyle:{"background-color":"darkcyan",float:"left"},on:{click:t.addText}},[t._v("添加文本")]),n("el-button",{staticStyle:{"background-color":"white"},on:{click:t.baocun}},[t._v("保存")]),n("skip-dialog",{ref:"skipDialog",on:{addDialog:t.addTextarea,addTextare:t.bjTextarea}}),n("skip-content",{ref:"skipContent",on:{editContent:t.showEditDialog}})],1)},K=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"30%"}},[n("el-radio-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-radio",{attrs:{label:1}},[t._v("文本")]),n("el-radio",{attrs:{label:2}},[t._v("图片地址")]),n("el-radio",{attrs:{label:3}},[t._v("音频地址")])],1),n("el-form",{attrs:{labelWidth:"59px",labelPosition:"left"}},[n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})],1),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.addTarea}},[t._v("确 定")])],1)],1)},R=[],X={data:function(){return{type:2,dialogVisible:!1,title:"",data:"",desc:"",index:""}},methods:{showAdd:function(){this.dialogVisible=!0,this.isAddShow=!0,this.type=2,this.data="",this.desc=""},showEdit:function(t,e){this.index=e,this.dialogVisible=!0,this.isAddShow=!1,this.data=t.data,this.desc=t.desc,this.type=t.type},addTarea:function(){this.isAddShow?(this.$emit("addDialog",this.type,this.data,this.desc),this.data="",this.desc="",this.dialogVisible=!1):(this.$emit("addTextare",this.index,this.type,this.data,this.desc),this.data="",this.desc="",this.dialogVisible=!1)}}},Y=X,Z=Object(l["a"])(Y,Q,R,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.skip,function(e,o){return n("div",{staticStyle:{border:"1px solid red"}},[1===e.type?n("span",[t._v(t._s(e.data))]):t._e(),2===e.type?n("img",{attrs:{src:e.data}}):t._e(),3===e.type?n("audio",{attrs:{src:e.data,controls:"controls"}}):t._e(),n("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(e.desc))]),n("el-button",{on:{click:function(n){return t.btnChange(e,o)}}},[t._v("编辑")]),n("el-button",{on:{click:function(e){return t.deleSkip(o)}}},[t._v("删除")]),0!==o?n("i",{staticClass:"el-icon-upload2",on:{click:function(e){return t.uploadEl(o)}}}):t._e(),o!==t.skip.length-1?n("i",{staticClass:"el-icon-download",on:{click:function(e){return t.downloadEl(o)}}}):t._e()],1)}),0)},nt=[],ot={data:function(){return{skip:[]}},mounted:function(){this.getContent()},methods:{downloadEl:function(){},uploadEl:function(t){var e=this.skip[t-1];this.$set(this.skip,t-1,this.skip[t]),this.$set(this.skip,t,e)},btnChange:function(t,e){this.$emit("editContent",t,e)},deleSkip:function(t){this.skip.splice(t,1)},editSkip:function(t,e){this.$set(this.skip,t,e)},addItemToSkip:function(t){this.skip.push(t)},getContent:function(){var t=this;D(this.$route.params.id).then(function(e){console.log(e.data),t.skip=JSON.parse(e.data.data.content)||[]})},sybmitContent:function(){var t=this,e={id:this.$route.params.id,content:JSON.stringify(this.skip)};F(e).then(function(e){t.$message.success(e.data.msg)})}}},it=ot,rt=(n("a7b2"),Object(l["a"])(it,et,nt,!1,null,null,null)),at=rt.exports,st=n("d188"),lt={components:{ElButton:st["a"],skipDialog:tt,skipContent:at},methods:{addText:function(){this.$refs.skipDialog.showAdd()},showEditDialog:function(t,e){this.$refs.skipDialog.showEdit(t,e)},bjTextarea:function(t,e,n,o){var i={type:e,data:n,desc:o};this.$refs.skipContent.editSkip(t,i)},addTextarea:function(t,e,n){var o={type:t,data:e,desc:n};this.$refs.skipContent.addItemToSkip(o)},baocun:function(){this.$refs.skipContent.sybmitContent()}}},ct=lt,ut=Object(l["a"])(ct,H,K,!1,null,null,null),dt=ut.exports;o["default"].use(p["a"]);var ft=[{path:"/",component:function(){return n.e("chunk-2d22d413").then(n.bind(null,"f75a"))},redirect:"/home",children:[{path:"/home",name:"home",component:G}]},{path:"/skip/:id",name:"skip",component:dt},{path:"/login",name:"login",component:T}],pt=new p["a"]({routes:ft});pt.beforeEach(function(t,e,n){var o=localStorage.getItem("token");"/login"!==t.path&&(o||n("/login")),"/login"===t.path&&o&&n("/"),n()});var ht=pt,mt=(n("456d"),n("7618")),bt=(n("ac6a"),function t(e){if(null===e)return null;if("number"===typeof e||"string"===typeof e||"boolean"===typeof e)return e;if(Array.isArray(e)){var n=[];return e.forEach(function(e){n.push(t(e))}),n}if("object"===Object(mt["a"])(e)){var o={};return Object.keys(e).forEach(function(n){var i=e[n];o[n]=t(i)}),o}});window.deepclone=bt,o["default"].use(f.a),o["default"].config.productionTip=!1,new o["default"]({router:ht,render:function(t){return t(u)}}).$mount("#app")},"5ee1":function(t,e,n){},"64a9":function(t,e,n){},"912c":function(t,e,n){},a7b2:function(t,e,n){"use strict";var o=n("5ee1"),i=n.n(o);i.a},f47f:function(t,e,n){"use strict";var o=n("912c"),i=n.n(o);i.a}});
//# sourceMappingURL=app.eb3ecace.js.map