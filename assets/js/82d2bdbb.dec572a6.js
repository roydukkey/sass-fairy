"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7290],{4030:(e,t,r)=>{r.d(t,{ZP:()=>i});var o=r(7626),n=(r(9231),r(4852));const a={toc:[]};function i(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Don\u2019t see the function you\u2019re looking for? Request a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/roydukkey/sass-fairy/issues/new"},"new feature")," describing a use case."))}i.isMDXComponent=!0},7302:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(7626),n=r(9231),a=r(4852);const i={toc:[]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"Since ",r.hiddenNativeFields.length>1?"their":"its"," functionality is enhanced by this library, the combined API hides the native ",r.hiddenNativeFields.map(((e,t,o)=>{let{length:i}=o;return(0,a.kt)(n.Fragment,{key:t,mdxType:"Fragment"},t>0&&t<i-1&&",",i>1&&t===i-1&&" and"," ",(0,a.kt)("code",null,r.module,".",e,"()"))}))," ",r.hiddenNativeFields.length>1?"functions":"function",".")))}l.isMDXComponent=!0;var s=r(3614);function c(e){let{spec:{module:t,hiddenNativeFields:r}}=e;return n.createElement(n.Fragment,null,n.createElement("p",null,"In order to avoid constantly declaring both the native ",n.createElement("code",null,"sass:",t)," module and this library, the combined API has been added which merges the two."),n.createElement(s.Z,{className:"language-scss"},["// Rather than using both modules separately...",`@use '@sass-fairy/${t}';`,`@use 'sass:${t}';`,"","// ...this statement will accomplish the same thing.",`@use '@sass-fairy/${t}/${t}';`].join("\n")),r&&n.createElement(l,{module:t,hiddenNativeFields:r}))}},5541:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(7577),n=r(8455),a=r(1879),i=r(9231);function l(e){let{spec:{basePath:t,functions:r},group:l}=e;const s=(0,a.Z)(),c=null==l?void 0:l.split("/")[1];return c&&(t+=`/${c}`),i.createElement(i.Fragment,null,i.createElement("dl",null,r&&Object.entries(r).filter((e=>{let[,{group:t}]=e;return t===(l??"main")})).map(((e,r)=>{let[a,{description:l,parameters:c,overloads:d}]=e;return i.createElement(i.Fragment,{key:r},i.createElement("dt",null,i.createElement(o.Z,{to:`${s}${t}/${a}`},i.createElement("code",null,i.createElement(n.Z,{fieldName:a,parameters:c})))," ",d&&d.length>0&&i.createElement("small",{className:"spec-overload-count"},"[+",d.length,"\xa0overload",d.length>1&&"s","]")),i.createElement("dd",null,i.createElement("p",null,l)))}))),(null==l?void 0:l.endsWith("/reference"))&&i.createElement(i.Fragment,null,"More information on ",i.createElement(o.Z,{to:`${s}/docs/compare-logic`},"comparison logic")," and ",i.createElement(o.Z,{to:`${s}/docs/reference-functions`},"reference functions"),"."))}},3484:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(7577),n=r(1879),a=r(9231);function i(e){let{spec:{basePath:t,variables:r},group:i}=e;const l=(0,n.Z)(),s=null==i?void 0:i.split("/")[1];return s&&(t+=`/${s}`),a.createElement("dl",null,r&&Object.entries(r).filter((e=>{let[,{group:t}]=e;return t===(i??"main")})).map(((e,r)=>{let[n,{fileName:i,description:s,configurable:c}]=e;return a.createElement(a.Fragment,{key:r},a.createElement("dt",null,a.createElement(o.Z,{to:`${l}${t}/${i??n}`},a.createElement("code",null,"$",n,c&&" !default"))),a.createElement("dd",null,a.createElement("p",null,s)))})))}},1879:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(980);function n(){const{activeVersion:e}=(0,o.Iw)(void 0);return e&&!e.isLast?e.path:""}},3886:(e,t,r)=>{r.d(t,{Z:()=>a});const o=JSON.parse('{"WL":"Provides extended functionality for generating new colors from existing colors and building color themes in Sass"}');var n=r(9231);const a={module:"color",description:o.WL,basePath:"/api/color",variables:{"contrast-ratios":{group:"main",description:n.createElement(n.Fragment,null,"A map defining the ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG standard contrast ratios"),"."),defaultValue:"(AA: (normal: 4.5, large: 3), AAA: (normal: 7, large: 4.5))"}},functions:{a11y:{group:"main",description:n.createElement(n.Fragment,null,"Finds the nearest accessible color for the given color against another given color according to the specified ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG standard contrast ratio"),"."),parameters:{"a11y-color":{description:"The color that should change when the contrast does not meet the expected contrast ratio.",type:["Color"]},"other-color":{description:"The color that is compare against.",type:["Color"]},size:{description:"The size category of the WCAG standard which should be used to determine compliance.",type:["'normal'","'large'"],defaultValue:"'normal'"},level:{description:"The color that should change when the contrast does not meet the expected contrast ratio.",type:["'AA'","'AAA'"],defaultValue:"'AA'"}},return:{description:"A color that meets the given standards for size and level in contrast to the other color.",type:["Color"]}},contrast:{group:"main",description:n.createElement(n.Fragment,null,"The ",n.createElement("a",{href:"http://www.w3.org/TR/WCAG20/#contrast-ratiodef",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG contrast ratio")," between two colors, from 1 to 21 (commonly written 1:1 to 21:1)."),parameters:{"first-color":{description:"The first color, often the background color.",type:["Color"]},"second-color":{description:"The second color, often the foreground color.",type:["Color"]}},return:{description:"A number representing the contrast ratio between two colors.",type:["Number"]}},"is-dark":{group:"main",description:"Indicates whether a given color is considered dark.",parameters:{color:{description:"The color which may be dark.",type:["Color"]}},return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the given color is considered dark; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},"is-light":{group:"main",description:"Indicates whether a given color is considered light.",parameters:{color:{description:"The color which may be light.",type:["Color"]}},return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the given color is considered light; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},luminance:{group:"main",description:n.createElement(n.Fragment,null,"Returns a number indicating the ",n.createElement("a",{href:"https://www.w3.org/TR/WCAG20/#relativeluminancedef",target:"_blank",rel:"nofollow noreferrer noopener"},"WCAG relative luminance")," of the given color."),parameters:{color:{description:"The color for which to calculate the relative luminance.",type:["Color"]}},return:{description:"A number representing the relative luminance of the given color.",type:["Number"]}}}}},8314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var o=r(7626),n=(r(9231),r(4852)),a=r(7302),i=r(4030),l=r(5541),s=r(3886),c=r(3484);const d={title:"Color API Overview",module:"color",slug:"./",hide_title:!0},u="API Overview",m={unversionedId:"api/color/overview",id:"version-1/api/color/overview",title:"Color API Overview",description:"Variables",source:"@site/versioned_docs/version-1/api/color/overview.mdx",sourceDirName:"api/color",slug:"/api/color/",permalink:"/api/color/",draft:!1,editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/versioned_docs/version-1/api/color/overview.mdx",tags:[],version:"1",frontMatter:{title:"Color API Overview",module:"color",slug:"./",hide_title:!0},sidebar:"colorSidebar",next:{title:"contrast-ratios",permalink:"/api/color/contrast-ratios"}},p={},h=[{value:"Variables",id:"variables",level:2},{value:"Functions",id:"functions",level:2},{value:"Combined API",id:"combined-api",level:2}],g={toc:h};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-overview"},"API Overview"),(0,n.kt)("h2",{id:"variables"},"Variables"),(0,n.kt)(c.Z,{spec:s.Z,mdxType:"VariableList"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)(l.Z,{spec:s.Z,mdxType:"SignatureList"}),(0,n.kt)(i.ZP,{mdxType:"FeatureRequest"}),(0,n.kt)("h2",{id:"combined-api"},"Combined API"),(0,n.kt)(a.Z,{spec:s.Z,mdxType:"CombinedApi"}))}v.isMDXComponent=!0}}]);