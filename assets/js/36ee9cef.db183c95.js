"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6900],{5432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(7626),r=(n(9231),n(4852));const o={hide_table_of_contents:!0},a="Reference Functions",i={unversionedId:"docs/reference-functions",id:"version-1/docs/reference-functions",title:"Reference Functions",description:"Some of the functions provided by Sass Fairy return a reference to a function so they may be used as parameters in other function calls. Examples of this are the compare methods from @sass-fairy/list.",source:"@site/versioned_docs/version-1/docs/reference-functions.mdx",sourceDirName:"docs",slug:"/docs/reference-functions",permalink:"/docs/reference-functions",draft:!1,editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/versioned_docs/version-1/docs/reference-functions.mdx",tags:[],version:"1",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Install",permalink:"/docs/install"},next:{title:"Comparison Logic",permalink:"/docs/compare-logic"}},c={},l=[{value:"Implementing in Custom Modules",id:"implementing-in-custom-modules",level:2}],m={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reference-functions"},"Reference Functions"),(0,r.kt)("p",null,"Some of the functions provided by Sass Fairy return a reference to a function so they may be used as parameters in other function calls. Examples of this are the compare methods from ",(0,r.kt)("a",{parentName:"p",href:"/api/list/"},(0,r.kt)("inlineCode",{parentName:"a"},"@sass-fairy/list")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$sorted: list.sort($unsorted, list.compare-numeric())\n")),(0,r.kt)("p",null,"However, these methods will function normally when provided with parameters. This allows other libraries to use these functions directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$first-item: 5\n$second-item: 3\n$result: list.compare-numeric($first-item, $second-item)\n")),(0,r.kt)("h2",{id:"implementing-in-custom-modules"},"Implementing in Custom Modules"),(0,r.kt)("p",null,"Creating these functions in you own modules is very easy using the ",(0,r.kt)("a",{parentName:"p",href:"/api/meta/call-or-reference"},(0,r.kt)("inlineCode",{parentName:"a"},"meta.call-or-reference()"))," from the ",(0,r.kt)("a",{parentName:"p",href:"/api/meta/"},(0,r.kt)("inlineCode",{parentName:"a"},"@sass-fairy/meta"))," package. ",(0,r.kt)("a",{parentName:"p",href:"/api/meta/call-or-reference"},"Read the API")," for more details."))}d.isMDXComponent=!0}}]);