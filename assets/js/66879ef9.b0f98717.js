"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6238],{4270:(e,t,i)=>{i.d(t,{Z:()=>c,C:()=>l});const r=JSON.parse('{"WL":"Provides Sass functions to standardize exception messages and assist with common validation"}');var s=i(9231);const n={context:{description:"The name of the function or mixin issuing the error.",type:["String"]}},a={message:{description:"The message which describes the issue.",type:["String"]}},o={value:{description:"The value which was received.",type:["*"]}},p={types:{description:"The types which are expected.",type:["ArgList<*>"]}},d={...n,name:{description:"The name of the index parameter which is being validated.",type:["String"]},value:{description:"The value of the index parameter which is being validated. A valid negative value will be transformed to the respective positive index value.",type:["Number"]}},l="Must be passed by name.",c={module:"exception",description:r.WL,basePath:"/api/exception",functions:{"is-separator-invalid":{group:"main",description:"Indicates whether a specified value is invalid for a separator parameter.",parameters:{value:{description:"The value which is being validated.",type:["*"]}},return:{description:s.createElement(s.Fragment,null,s.createElement("code",null,"true")," if the value is a valid; otherwise, ",s.createElement("code",null,"false"),"."),type:["Boolean"]}},parameter:{group:"main",description:"Returns an error message stating an issue with one or more parameters.",parameters:{...a,...n,names:{description:"The names of the parameters for which there is an issue.",type:["ArgList<*>"]}},return:{description:"A string describing the reason one or more parameters are invalid.",type:["String"]}},"parameter-type":{group:"main",description:"Returns an error message stating a parameter received the wrong type.",parameters:{...n,name:{description:"The name of the parameter which has received the wrong type.",type:["String"]},...o,...p},return:{description:"A string describing what types are acceptable for a parameter and the value that is invalid.",type:["String"]}},separator:{group:"main",description:"Returns an error message stating a separator variable received the wrong value.",return:{description:"A string describing what values are acceptable for a separator.",type:["String"]},overloads:[{description:"Returns an error message stating a separator parameter received the wrong value.",parameters:{context:{...n.context}}}]},"validate-index":{group:"main",description:"Returns a valid index for a list of a given length; otherwise, an error message stating the reason the index is invalid.",parameters:{...d,list:{description:"The list value for which the index is validated against.",type:["List"]}},return:{description:"A string when the index is not a number, is zero, or is invalid for the amount of elements in the list; otherwise, a number.",type:["Number","String"]},overloads:[{description:"Returns a valid index for a string of a given length; otherwise, an error message stating the reason the index is invalid.",parameters:{...d,string:{description:"The string value for which the index is validated against.",type:["String"]}},return:{description:"A string when the index is not a number; otherwise, a number."}}]},variable:{group:"main",description:"Returns an error message stating an issue with one or more variables.",parameters:{...a,names:{description:"The names of the variables for which there is an issue.",type:["ArgList<*>"]}},return:{description:"A string describing the reason one or more variables are misconfigured.",type:["String"]}},"variable-type":{group:"main",description:"Returns an error message stating a variable received the wrong type.",parameters:{name:{description:"The name of the variable which has received the wrong type.",type:["String"]},...o,...p,message:{description:["The additional message which describes the issue.",l].join(" "),type:["String"],defaultValue:"null"}},return:{description:"A string describing what types are acceptable for a variable and the value that is misconfigured.",type:["String"]}}}}},4614:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(575),s=i(9231),n=i(9897);const a=e=>{let{children:t}=e;return s.createElement(r.Z,{spec:n.ZP},t)}},9897:(e,t,i)=>{i.d(t,{NP:()=>o,Br:()=>f,Ud:()=>g,ZP:()=>v,BG:()=>a});const r=JSON.parse('{"WL":"Provides extended functionality for accessing and modifying lists in Sass, with interfaces similar to ECMA specifications"}');var s=i(4270),n=i(9231);const a={type:["space","comma","slash","auto"],defaultValue:"auto"},o={type:["Boolean","auto"],defaultValue:"auto"},p={description:"Additional parameters which are provided to predicate function.",type:["ArgList<*>"],defaultValue:"()"},d={parameters:{list:{description:"The list from which items will be tested.",type:["List"]},predicate:{description:"The function that tests each item for a condition. The first parameter is the current item being processed in the list. The second parameter is the index of the current item being processed in the list. The third parameter is the list being processed. The returned value will be compared for truthiness.",type:["Function"]},args:{...p}}},l=["The value to use as the first parameter for the first call to the transformer.",s.C],c={group:"main",description:"Reduces a list to a single value as the product of calling a specified function on every item in a list.",parameters:{list:{description:"The list from which items will be reduced.",type:["List"]},transformer:{description:"The transform function to apply to each item. The first parameter is the accumulated value previously returned in the prior transformation or the initial value. The second parameter is the current item being processed in the list. The third parameter is the index of the current item being processed in the list. The fourth parameter is the list being processed. The returned value will be the product of the prior and current transformation.",type:["Function"]},"initial-value":{description:[l[0],"When not specified, this value is initialized to the first value in the list, and the second parameter of the transformer is initialized to the second value in the list.","When specified, the second parameter of the transformer is initialized to the first value in the list.",l[1]].join(" "),type:["*"],defaultValue:"%derived%"}},return:{description:"The value that results from running the transformer function to completion over the entire list.",type:["*"]}},h={...JSON.parse(JSON.stringify(c)),description:"Reduces a list to a single value as the product of calling a specified function on every item in a list, starting with the last item to the first."};h.parameters&&(h.parameters["initial-value"].description=[l[0],"When not specified, this value is initialized to the last value in the list, and the second parameter of the transformer is initialized to the second-to-last value in the list.","When specified, the second parameter of the transformer is initialized to the last value in the list.",l[1]].join(" "));const u={description:"The index at which to begin the search. A negative index can be used, indicating an offset from the end of the source string.",type:["Number"],defaultValue:1},m={"first-item":{description:"The first item for the comparison.",type:["*"]},"second-item":{description:"The second item for the comparison.",type:["*"]}},f={center:{description:"The value indicating the center (zero) position between positive and negative values.",type:["Number"],defaultValue:0}},g={return:{description:"A positive number when the first given value is greater than the second given value, or a negative number when the second given value is greater than the first given value; otherwise, zero.",type:["Number"]},overloads:[{description:"Returns a function reference to this string comparison method to be used by the sort function.",return:{description:"A reference to this string comparison method.",type:["Function"]}}]},v={module:"list",description:r.WL,basePath:"/api/list",hiddenNativeFields:["index","join","set-nth"],functions:{"box-model":{group:"main",description:"Gets the value of the specified side from the given shorthand box model value.",parameters:{values:{description:"The shorthand value of a box model to analyze for a value.",type:["List{1,4}"]},side:{description:"The side of the box model for which to determine a value.",type:["'top'","'right'","'bottom'","'left'"]}},return:{description:"Returns a single value that corresponds to the requested side of the given box model value.",type:["*"]}},concat:{group:"main",description:"Merges two or more lists into one list.",parameters:{values:{description:"The lists or single values to concatenate.",type:["ArgList<*>"]},separator:{...a,description:["The type of separator to be used by the merged list.",s.C].join(" ")},bracketed:{...o,description:["Whether the merged list has square brackets or no brackets.",s.C].join(" ")}},return:{description:"A list with all the values of the every given list.",type:["List"]}},distinct:{group:"main",description:"Creates a list of all distinct items from a source list.",parameters:{list:{description:"The list from which items distinct items will be selected.",type:["List"]},separator:{...a,description:"The type of separator to be used by the extracted list."}},return:{description:"A list with no repeated values.",type:["List"]}},empty:{group:"main",description:"Creates an empty list with the specified characteristics or the characteristics of the specified list.",parameters:{separator:{...a,description:"The type of separator to be used by the empty list.",defaultValue:"comma"},bracketed:{...o,description:"Whether the empty list has square brackets or no brackets.",defaultValue:!1},list:{description:"The list from which to determine separator and bracket style.",type:["List","ArgList<*>"],defaultValue:"null"}},return:{description:"An empty list with the given or derived characteristics.",type:["List"]}},every:{group:"main",description:"Tests whether all items in a list satisfy the test implemented by the specified function.",...d,return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the predicate function returns a truthy value for every item in the list; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},filter:{group:"main",description:"Creates a list of all the items from a source list that satisfy the test implemented by the specified function.",parameters:{list:d.parameters.list,predicate:d.parameters.predicate,args:d.parameters.args,separator:{...a,description:["The type of separator to be used by the extracted list.",s.C].join(" ")}},return:{description:"A list with the items that pass the test provided by the predicate function; otherwise, an empty list.",type:["List"]}},find:{group:"main",description:"Returns the value of the first item from a list that satisfies the test implemented by the specified function.",...d,return:{description:n.createElement(n.Fragment,null,"The value of the first item in the list that satisfies the test provided by the predicate function; otherwise, ",n.createElement("code",null,"null"),"."),type:["List","Null"]}},"find-nth":{group:"main",description:"Returns the index of the first item from a list that satisfies the test implemented by the specified function; otherwise, 0 is returned, indicating no item satisfies the test.",...d,return:{description:n.createElement(n.Fragment,null,"The index of the first item in the list that passes the test provided by the predicate function; otherwise, ",n.createElement("code",null,"0"),"."),type:["Number"]}},flat:{group:"main",description:"Creates a list with all sub-list items from a source list concatenated into it recursively up to a specified depth.",parameters:{list:{description:"The list to be flattened.",type:["List"]},depth:{description:"The value indicating how deep a nested list structure should be flattened.",type:["Number"],defaultValue:1},separator:{...a,description:"The type of separator to be used by the flattened list."},bracketed:{...o,description:"Whether the flattened list has square brackets or no brackets.",defaultValue:!1}},return:{description:"A list with the sub-list items concatenated into it.",type:["List"]}},includes:{group:"main",description:"Determines whether a list includes a certain value among its items, returning true or false as appropriate.",parameters:{list:{description:"The list to be check.",type:["List"]},value:{description:"The value to search for in the list.",type:["*"]},"start-at":{description:"The index in this list at which to begin searching for value. A negative index can be used, indicating an offset from the end of the list.",type:["Number"],defaultValue:1}},return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the value is found anywhere within the given list; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},index:{group:"main",description:"Returns the first index at which a specified item can be found in a list; otherwise, 0 is returned, indicating the item is not present.",parameters:{list:{description:"The list from which the value is to be located.",type:["List"]},value:{description:"The value to locate in the list.",type:["*"]},"start-at":u},return:{description:n.createElement(n.Fragment,null,"The index of the first occurrence of the value; otherwise, ",n.createElement("code",null,"0"),"."),type:["Number"]}},"insert-nth":{group:"main",description:"Returns a list with the specified value inserted into the list at a given index.",parameters:{list:{description:"The list to which the value is to be inserted.",type:["List"]},index:{description:"The index at which the value is to be inserted. A negative index can be used, indicating an offset from the end of the list.",type:["Number"]},value:{description:"The value which is to be inserted.",type:["*"]},separator:{...a,description:"The type of separator to be used by the copied list."}},return:{description:"A list with the given value inserted at the given index.",type:["List"]}},join:{group:"main",description:"Concatenates all of the items in a list to a string, separated by the list\u2019s separator or a specified glue string. If the list has only one item, then that item will be returned without using the glue.",parameters:{list:{description:"The list to join.",type:["List"]},glue:{description:"The string to separate each pair of adjacent items of the list. The value is converted to a string if necessary.",type:["String"],defaultValue:"%derived%"}},return:{description:"A string with all list items joined.",type:["String"]}},"last-index":{group:"main",description:"Returns the last index at which a specified item can be found in a list; otherwise, 0 is returned, indicating the item is not present. The list is searched backwards, starting at a given index when specified.",parameters:{list:{description:"The list from which the value is to be located.",type:["List"]},value:{description:"The value to locate in the list.",type:["*"]},"start-at":{...u,defaultValue:-1}},return:{description:n.createElement(n.Fragment,null,"The index of the last occurrence of the value; otherwise, ",n.createElement("code",null,"0"),"."),type:["Number"]}},map:{group:"main",description:"Creates a list populated with the results of calling a specified function on every item in a source list.",parameters:{list:{description:"The list from which items will be processed.",type:["List"]},transformer:{description:"The transform function to apply to each item. The first parameter is the current item being processed in the list. The second parameter is the index of the current item being processed in the list. The third parameter is the list being processed. The returned value may be any type.",type:["Function"]},args:{...p,description:"Additional parameters which are provided to transform function."},separator:{...a,description:["The type of separator to be used by the created list.",s.C].join(" ")},bracketed:{...o,description:["Whether the created list has square brackets or no brackets.",s.C].join(" ")}},return:{description:"A list with each item being the result of the transformer function.",type:["List"]}},prepend:{group:"main",description:"Returns a list with the specified value added to the beginning.",parameters:{list:{description:"The list to which the value is to be prepended.",type:["List"]},value:{description:"The value which is to be prepended.",type:["*"]},separator:{...a,description:"The type of separator to be used by the copied list."}},return:{description:"A list with the given value added to the beginning.",type:["List"]}},reduce:{...c},"reduce-right":{...h},remove:{group:"main",description:"Returns a list without the specified value.",parameters:{list:{description:"The list from which the value is to be removed.",type:["List"]},value:{description:"The value to be removed.",type:["*"]},separator:{...a,description:"The type of separator to be used by the copied list."}},return:{description:"A list without the given value.",type:["List"]}},"remove-nth":{group:"main",description:"Returns a list without the value at a specified index.",parameters:{list:{description:"The list to which the value is to be removed.",type:["List"]},index:{description:"The index at which the value is to be removed. A negative index can be used, indicating an offset from the end of the list.",type:["Number"]},separator:{...a,description:"The type of separator to be used by the copied list."}},return:{description:"A list without the value at the given index.",type:["List"]}},replace:{group:"main",description:"Returns a list with all occurrences of the given value replaced by the specified replacement.",parameters:{list:{description:"The list from which the value is to be replaced.",type:["List"]},value:{description:"The value to be replace by the replacement.",type:["*"]},replacement:{description:"The value that replaces the specified value.",type:["*"]},separator:{...a,description:"The type of separator to be used by the copied list."}},return:{description:"A list with all occurrences of the value replaced by a replacement.",type:["List"]}},reverse:{group:"main",description:"Reverses a list in place. The first item becomes the last, and the last item becomes the first.",parameters:{list:{description:"The list to reverse.",type:["List"]},separator:{...a,description:"The type of separator to be used by the reversed list."}},return:{description:"The reversed list.",type:["List"]}},"set-nth":{group:"main",description:"Returns a list with the value at the given index replaced with the specified value.",parameters:{list:{description:"The list from which the value is to be replaced.",type:["List"]},index:{description:"The index at which the value is to be replaced. A negative index can be used, indicating an offset from the end of the list.",type:["Number"]},value:{description:"The value which is to be replaced.",type:["*"]},separator:{...a,description:"The type of separator to be used by the copied list."}},return:{description:"A list with the given value at the given index.",type:["List"]}},slice:{group:"main",description:"Extracts a portion of a list selecting from a starting index through a ending index.",parameters:{list:{description:"The list to be sliced.",type:["List"]},"start-at":{description:"The index at which to begin extraction. A negative index can be used, indicating an offset from the end of the list.",type:["Number"]},"end-at":{description:"The index through which to end extraction. A negative index can be used, indicating an offset from the end of the list.",type:["Number"],defaultValue:-1},separator:{...a,description:"The type of separator to be used by the extracted list."}},return:{description:"A list of selected value.",type:["List"]}},some:{group:"main",description:"Tests whether at least one item in a list satisfies the test implemented by the specified function.",...d,return:{description:n.createElement(n.Fragment,null,n.createElement("code",null,"true")," if the predicate function returns a truthy value for at least one item in the list; otherwise, ",n.createElement("code",null,"false"),"."),type:["Boolean"]}},sort:{group:"main",description:"Sorts the items of a list in place. The default sort order is ascending, built upon converting the items into strings, then comparing their sequences of UTF-16 code units values.",parameters:{list:{description:"The list to sort.",type:["List"]},compare:{description:"The function that defines the sort order. The first parameter is the first item for comparison. The second parameter is the second item for comparison. The third parameter is for centering numeric values. The returned value must be a number.",type:["Function"],defaultValue:"list.compare-string()"},center:{description:"For numeric comparison, the value indicating the center (zero) position between positive and negative values.",type:["Number","auto"],defaultValue:"auto"},separator:{...a,description:"The type of separator to be used by the sorted list."}},return:{description:"The sorted list.",type:["List"]}},"to-string":{group:"main",description:"Returns a string representing the specified list and its items.",parameters:{list:{description:"The list from which to generate a string.",type:["List","Map","ArgList<*>"]}},return:{description:"A string representing the given list.",type:["String"]}},"compare-numeric":{group:"list/reference",description:"Compares two list items as numbers in ascending order. All non-numeric items are shifted right.",parameters:{...m,...f},...g},"compare-numeric-desc":{group:"list/reference",description:"Compares two list items as numbers in descending order. All non-numeric items are shifted left.",parameters:{...m,...f},...g},"compare-string":{group:"list/reference",description:"Compares two list items by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in ascending order. All null items are shifted right.",parameters:{...m},...g},"compare-string-desc":{group:"list/reference",description:"Compares two list items by converting them to strings, then comparing the value\u2019s sequences of UTF-16 code units values in descending order. All null items are shifted left.",parameters:{...m},...g}}}},1703:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=i(7626),s=(i(9231),i(4852)),n=i(4614);const a={title:"to-string ()",module:"list",sidebar_label:"to-string",sidebar_class_name:"function",hide_table_of_contents:!0},o=void 0,p={unversionedId:"api/list/to-string",id:"api/list/to-string",title:"to-string ()",description:"",source:"@site/docs/api/list/to-string.mdx",sourceDirName:"api/list",slug:"/api/list/to-string",permalink:"/next/api/list/to-string",draft:!1,editUrl:"https://github.com/roydukkey/sass-fairy/edit/master/website/docs/api/list/to-string.mdx",tags:[],version:"current",frontMatter:{title:"to-string ()",module:"list",sidebar_label:"to-string",sidebar_class_name:"function",hide_table_of_contents:!0},sidebar:"listSidebar",previous:{title:"sort",permalink:"/next/api/list/sort"},next:{title:"compare-numeric",permalink:"/next/api/list/reference/compare-numeric"}},d={},l=[],c={toc:l};function h(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,{mdxType:"FieldDetails"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@sass-fairy/list';\n\n@debug list.to-string([10px 20px 'a']);\n  // 10px 20px a\n\n@debug list.to-string([10px, 20px, 'a']);\n  // 10px, 20px, a\n\n@debug list.to-string([10px 20px (a: 1, 2: b)])\n  // '10px 20px {a: 1; 2: b}'\n")))}h.isMDXComponent=!0}}]);