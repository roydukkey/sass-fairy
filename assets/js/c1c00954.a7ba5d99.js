"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7177],{2823:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(575),r=i(9231),n=i(7731);const s=e=>{let{children:t}=e;return r.createElement(a.Z,{spec:n.Z},t)}},7731:(e,t,i)=>{i.d(t,{Z:()=>l,C:()=>c});const a=JSON.parse('{"WL":"Provides Sass functions to standardize exception messages and assist with common validation"}');var r=i(9231);const n={context:{description:"The name of the function or mixin issuing the error.",type:["String"]}},s={message:{description:"The message which describes the issue.",type:["String"]}},o={value:{description:"The value which was received.",type:["*"]}},p={types:{description:"The types which are expected.",type:["ArgList<*>"]}},d={...n,name:{description:"The name of the index parameter which is being validated.",type:["String"]},value:{description:"The value of the index parameter which is being validated. A valid negative value will be transformed to the respective positive index value.",type:["Number"]}},c="Must be passed by name.",l={module:"exception",description:a.WL,basePath:"/api/exception",functions:{"is-separator-invalid":{group:"main",description:"Indicates whether a specified value is invalid for a separator parameter.",parameters:{value:{description:"The value which is being validated.",type:["*"]}},return:{description:r.createElement(r.Fragment,null,r.createElement("code",null,"true")," if the value is a valid; otherwise, ",r.createElement("code",null,"false"),"."),type:["Boolean"]}},parameter:{group:"main",description:"Returns an error message stating an issue with one or more parameters.",parameters:{...s,...n,names:{description:"The names of the parameters for which there is an issue.",type:["ArgList<*>"]}},return:{description:"A string describing the reason one or more parameters are invalid.",type:["String"]}},"parameter-type":{group:"main",description:"Returns an error message stating a parameter received the wrong type.",parameters:{...n,name:{description:"The name of the parameter which has received the wrong type.",type:["String"]},...o,...p},return:{description:"A string describing what types are acceptable for a parameter and the value that is invalid.",type:["String"]}},separator:{group:"main",description:"Returns an error message stating a separator variable received the wrong value.",return:{description:"A string describing what values are acceptable for a separator.",type:["String"]},overloads:[{description:"Returns an error message stating a separator parameter received the wrong value.",parameters:{context:{...n.context}}}]},"validate-index":{group:"main",description:"Returns a valid index for a list of a given length; otherwise, an error message stating the reason the index is invalid.",parameters:{...d,list:{description:"The list value for which the index is validated against.",type:["List"]}},return:{description:"A string when the index is not a number, is zero, or is invalid for the amount of elements in the list; otherwise, a number.",type:["Number","String"]},overloads:[{description:"Returns a valid index for a string of a given length; otherwise, an error message stating the reason the index is invalid.",parameters:{...d,string:{description:"The string value for which the index is validated against.",type:["String"]}},return:{description:"A string when the index is not a number; otherwise, a number."}}]},variable:{group:"main",description:"Returns an error message stating an issue with one or more variables.",parameters:{...s,names:{description:"The names of the variables for which there is an issue.",type:["ArgList<*>"]}},return:{description:"A string describing the reason one or more variables are misconfigured.",type:["String"]}},"variable-type":{group:"main",description:"Returns an error message stating a variable received the wrong type.",parameters:{name:{description:"The name of the variable which has received the wrong type.",type:["String"]},...o,...p,message:{description:["The additional message which describes the issue.",c].join(" "),type:["String"],defaultValue:"null"}},return:{description:"A string describing what types are acceptable for a variable and the value that is misconfigured.",type:["String"]}}}}},5804:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var a=i(7626),r=(i(9231),i(4852)),n=i(3614),s=i(3218),o=i(2823);const p={title:"variable-type ()",module:"exception",sidebar_label:"variable-type",sidebar_class_name:"function",hide_table_of_contents:!0},d=void 0,c={unversionedId:"api/exception/variable-type",id:"version-1/api/exception/variable-type",title:"variable-type ()",description:"",source:"@site/versioned_docs/version-1/api/exception/variable-type.mdx",sourceDirName:"api/exception",slug:"/api/exception/variable-type",permalink:"/api/exception/variable-type",draft:!1,editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/versioned_docs/version-1/api/exception/variable-type.mdx",tags:[],version:"1",frontMatter:{title:"variable-type ()",module:"exception",sidebar_label:"variable-type",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"exceptionSidebar",previous:{title:"variable",permalink:"/api/exception/variable"}},l={},h=[],m={toc:h};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"FieldDetails"}),(0,r.kt)(n.Z,{className:"language-scss",highlightLines:"{5-7}",mdxType:"CodeBlock"},s.Z))}u.isMDXComponent=!0},3218:(e,t,i)=>{i.d(t,{Z:()=>a});const a="@use '@sass-fairy/exception';\n\n$height: 20rem !default;\n\n@if meta.type-of($height) != 'number' {\n  @error exception.variable-type('height', $height, 'number');\n}\n\n@if $height < 0 {\n  @error exception.variable('Value must not be less than zero, but is `#{$height}`', 'height');\n}\n"}}]);