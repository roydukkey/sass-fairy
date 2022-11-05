"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[301],{6735:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(575),r=n(9231),i=n(2470);const s=e=>{let{children:t}=e;return r.createElement(a.Z,{spec:i.Z},t)}},2470:(e,t,n)=>{n.d(t,{Z:()=>a});const a={module:"meta",description:JSON.parse('{"WL":"Provides extended functionality for handling Sass\u2019s inner workings"}').WL,basePath:"/api/meta",hiddenNativeFields:["type-of"],functions:{"call-or-reference":{group:"main",description:"Allows a function to return its reference when no parameters are provided, otherwise maintaining its regular behavior.",parameters:{function:{description:"The function to call or reference.",type:["Function"]},args:{description:"The arguments to apply to the invocation of the function.",type:["ArgList<*>"]}},return:{description:"The given function is returned when no arguments are given; otherwise, supplied with the given arguments, the value returned by the invocation of the given function is returned.",type:["Function","*"]}},"get-keyword":{group:"main",description:"Gets the value of the named parameter from the given argument list, otherwise providing a default value.",parameters:{args:{description:"The argument list from which to get the named parameter.",type:["!ArgList"]},name:{description:"The name of the parameter to get.",type:["String"]},default:{description:"The value of the parameter when not contained in the argument list.",type:["*"],defaultValue:"null"}},return:{description:"The value of the named parameter when it exists; otherwise, the given default value.",type:["*"]}},"strip-keywords":{group:"main",description:"Strips all named parameters from the given argument list.",parameters:{args:{description:"The argument list from which to strip all named parameters.",type:["!ArgList"]}},return:{description:"Returns the values of an argument list without named parameters.",type:["List"]}},"type-of":{group:"main",description:"Returns the type of the given value.",parameters:{value:{description:"The value from which to get a type.",type:["*"]}},return:{description:"Returns an unquoted string describing the type of value given.",type:["String"]}}}}},3907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=n(7626),r=(n(9231),n(4852)),i=n(6735),s=n(7577);const o={title:"type-of ()",module:"meta",sidebar_label:"type-of",sidebar_class_name:"function",hide_table_of_contents:!0},p=void 0,d={unversionedId:"api/meta/type-of",id:"api/meta/type-of",title:"type-of ()",description:"In addition to the native Sass types, regex will be returned when the given value is a regular expression.",source:"@site/docs/api/meta/type-of.mdx",sourceDirName:"api/meta",slug:"/api/meta/type-of",permalink:"/next/api/meta/type-of",draft:!1,editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/meta/type-of.mdx",tags:[],version:"current",frontMatter:{title:"type-of ()",module:"meta",sidebar_label:"type-of",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"metaSidebar",previous:{title:"strip-keywords",permalink:"/next/api/meta/strip-keywords"}},u={},l=[],m={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{mdxType:"FieldDetails"},(0,r.kt)("p",null,"In addition to the native ",(0,r.kt)(s.Z,{to:"https://sass-lang.com/documentation/modules/meta#type-of",mdxType:"Link"},"Sass types"),", ",(0,r.kt)("code",null,"regex")," will be returned when the given value is a ",(0,r.kt)(s.Z,{to:"./../../docs/regular-expressions",mdxType:"Link"},"regular expression"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/meta';\n\n@debug meta.type-of(20px);\n  // number\n\n@debug meta.type-of(20px 40px 80px);\n  // list\n\n@debug meta.type-of(REGEX 'ab+c');\n  // regex\n")))}c.isMDXComponent=!0}}]);