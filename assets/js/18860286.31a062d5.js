"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6138],{6735:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(575),a=n(9231),i=n(2470);const s=e=>{let{children:t}=e;return a.createElement(r.Z,{spec:i.Z},t)}},2470:(e,t,n)=>{n.d(t,{Z:()=>r});const r={module:"meta",description:JSON.parse('{"WL":"Provides extended functionality for handling Sass\u2019s inner workings"}').WL,basePath:"/api/meta",hiddenNativeFields:["type-of"],functions:{"call-or-reference":{group:"main",description:"Allows a function to return its reference when no parameters are provided, otherwise maintaining its regular behavior.",parameters:{function:{description:"The function to call or reference.",type:["Function"]},args:{description:"The arguments to apply to the invocation of the function.",type:["ArgList<*>"]}},return:{description:"The given function is returned when no arguments are given; otherwise, supplied with the given arguments, the value returned by the invocation of the given function is returned.",type:["Function","*"]}},"get-keyword":{group:"main",description:"Gets the value of the named parameter from the given argument list, otherwise providing a default value.",parameters:{args:{description:"The argument list from which to get the named parameter.",type:["!ArgList"]},name:{description:"The name of the parameter to get.",type:["String"]},default:{description:"The value of the parameter when not contained in the argument list.",type:["*"],defaultValue:"null"}},return:{description:"The value of the named parameter when it exists; otherwise, the given default value.",type:["*"]}},"strip-keywords":{group:"main",description:"Strips all named parameters from the given argument list.",parameters:{args:{description:"The argument list from which to strip all named parameters.",type:["!ArgList"]}},return:{description:"Returns the values of an argument list without named parameters.",type:["List"]}},"type-of":{group:"main",description:"Returns the type of the given value.",parameters:{value:{description:"The value from which to get a type.",type:["*"]}},return:{description:"Returns an unquoted string describing the type of value given.",type:["String"]}}}}},2107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(7626),a=(n(9231),n(4852)),i=n(6735);const s={title:"call-or-reference ()",module:"meta",sidebar_label:"call-or-reference",sidebar_class_name:"function",hide_table_of_contents:!0},o=void 0,l={unversionedId:"api/meta/call-or-reference",id:"api/meta/call-or-reference",title:"call-or-reference ()",description:"",source:"@site/docs/api/meta/call-or-reference.mdx",sourceDirName:"api/meta",slug:"/api/meta/call-or-reference",permalink:"/next/api/meta/call-or-reference",draft:!1,editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/meta/call-or-reference.mdx",tags:[],version:"current",frontMatter:{title:"call-or-reference ()",module:"meta",sidebar_label:"call-or-reference",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"metaSidebar",previous:{title:"Meta API Overview",permalink:"/next/api/meta/"},next:{title:"get-keyword",permalink:"/next/api/meta/get-keyword"}},u={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{mdxType:"FieldDetails"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="my-custom/module.scss"',title:'"my-custom/module.scss"'},"@use 'sass:math';\n@use '@sass-fairy/meta/meta';\n\n@function _predicate($value, $args...) {\n  @return meta.type-of($value) == 'number' and not math.is-unitless($value);\n}\n\n@function is-number-and-not-unitless($args...) {\n  $ref: meta.get-function('_predicate');\n  // highlight-next-line\n  @return meta.call-or-reference($ref, $args...);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="my-custom/site.scss"',title:'"my-custom/site.scss"'},"@use '@sass-fairy/list';\n@use 'module';\n\n// 1. As a call\n@debug module.is-number-and-not-unitless(10);\n  // false\n\n// 2. As a reference\n$list: a 1 5 b 20px 10 30px;\n\n// highlight-next-line\n@debug list.find($list, module.is-number-and-not-unitless());\n  // 20px\n")))}p.isMDXComponent=!0}}]);