webpackJsonp([5],{Ntyz:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"layout"},[t("Layout",[t("Content",{staticClass:"login"},[t("h2",[e._v("悠鲜盒约管理平台")]),e._v(" "),t("Form",{ref:"formInline",attrs:{model:e.formInline}},[t("FormItem",{attrs:{prop:"user"}},[t("Input",{attrs:{type:"text",placeholder:"请输入管理员账号"},model:{value:e.formInline.user,callback:function(r){e.$set(e.formInline,"user",r)},expression:"formInline.user"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.formInline.password,callback:function(r){e.$set(e.formInline,"password",r)},expression:"formInline.password"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),e._v(" "),t("FormItem",[t("Button",{staticClass:"bgC-53d192",attrs:{type:"primary",long:""},on:{click:function(r){e.handleSubmit("formInline")}}},[e._v("登录")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=t("C7Lr")({data:function(){return{formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"请输入管理员账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码.",trigger:"blur"},{type:"string",min:6,message:"密码长度小于6位",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var r=this;this.$refs[e].validate(function(e){e?(r.$Message.success("Success!"),r.$router.push({path:"/"})):r.$Message.error("Fail!")})}}},s,!1,function(e){t("joH/")},"data-v-12ef4a04",null);r.default=n.exports},"joH/":function(e,r){}});
//# sourceMappingURL=5.59c373fce0dd73f7c18d.js.map