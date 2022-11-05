"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[384],{166:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(575),s=i(9231),r=i(1488);const u=e=>{let{children:t}=e;return s.createElement(n.Z,{spec:r.Z},t)}},1488:(e,t,i)=>{i.d(t,{Z:()=>n});const n={module:"math",description:JSON.parse('{"WL":"Provides extended functionality for working with numbers in Sass"}').WL,basePath:"/api/math",functions:{gcd:{group:"math/bounding",description:"Returns the Greatest Common Divisor (GCD) of a set of numbers.",parameters:{numbers:{description:"The numbers for which to calculate the greatest common divisor.",type:["ArgList<Number>"]}},return:{description:"The number that is the GCD of the given set of numbers.",type:["Number"]}},lcm:{group:"math/bounding",description:"Returns the Least Common Multiple (LCM) of a set of numbers.",parameters:{numbers:{description:"The numbers for which to calculate the least common multiple.",type:["ArgList<Number>"]}},return:{description:"The number that is the LCM of the given set of numbers.",type:["Number"]}},exp:{group:"math/exponential",description:"Returns Euler\u2019s number raised to the specified power.",parameters:{numbers:{description:"The power to which Euler\u2019s number will be raise.",type:["Number"]}},return:{description:"The number representing Euler\u2019s number raised to the given power.",type:["Number"]}},fact:{group:"math/exponential",description:"Returns the factorial of the specified integer.",parameters:{numbers:{description:"The integer to factorialize.",type:["Number"]}},return:{description:"The number that is the product of the factorialization of the given integer.",type:["Number"]}},change:{group:"math/unit",description:"Returns the given number with the same units as another specified number.",parameters:{number:{description:"The number whose units will be changed.",type:["Number"]},units:{description:"The number whose units will be inherited.",type:["Number"]}},return:{description:"The given number with the given units.",type:["Number"]}},unitless:{group:"math/unit",description:"Returns the unitless value of the specified number.",parameters:{number:{description:"The number from which to strip units.",type:["Number"]}},return:{description:"The given number without units.",type:["Number"]}}}}},8947:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>c,frontMatter:()=>u,metadata:()=>o,toc:()=>p});var n=i(7626),s=(i(9231),i(4852)),r=i(166);const u={title:"unitless ()",module:"math",sidebar_label:"unitless",sidebar_class_name:"function",hide_table_of_contents:!0},a=void 0,o={unversionedId:"api/math/unit/unitless",id:"api/math/unit/unitless",title:"unitless ()",description:"",source:"@site/docs/api/math/unit/unitless.mdx",sourceDirName:"api/math/unit",slug:"/api/math/unit/unitless",permalink:"/next/api/math/unit/unitless",draft:!1,editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/math/unit/unitless.mdx",tags:[],version:"current",frontMatter:{title:"unitless ()",module:"math",sidebar_label:"unitless",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"mathSidebar",previous:{title:"change",permalink:"/next/api/math/unit/change"}},m={},p=[],h={toc:p};function c(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{mdxType:"FieldDetails"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/math';\n\n@debug math.unitless(10px);\n  // 10\n\n@debug math.unitless(-30rem);\n  // -30\n\n@debug math.unitless(5s * 8in);\n  // 40\n")))}c.isMDXComponent=!0}}]);