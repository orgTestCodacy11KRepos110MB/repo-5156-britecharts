"use strict";(self.webpackChunk_britecharts_docs=self.webpackChunk_britecharts_docs||[]).push([[2885],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,b=d["".concat(o,".").concat(c)]||d[c]||m[c]||s;return a?r.createElement(b,l(l({ref:t},u),{},{components:a})):r.createElement(b,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8788:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(3117),n=(a(7294),a(3905));const s={sidebar_position:7},l="Issue and Feature Labeling",i={unversionedId:"topics/github-labels",id:"topics/github-labels",title:"Issue and Feature Labeling",description:'In this document we describe our approach to setting labels to our issues and PRs by using a combination of "status" and "type" based labels. We also describe the PR title prefixes that we apply.',source:"@site/docs/topics/github-labels.md",sourceDirName:"topics",slug:"/topics/github-labels",permalink:"/britecharts/docs/topics/github-labels",draft:!1,editUrl:"https://github.com/britecharts/britecharts/edit/main/website/docs/topics/github-labels.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"The Reusable Chart API",permalink:"/britecharts/docs/topics/reusable-api"},next:{title:"Storybook",permalink:"/britecharts/docs/storybook"}},o={},p=[{value:"Labels",id:"labels",level:2},{value:"Status Labels",id:"status-labels",level:4},{value:"Labels",id:"labels-1",level:4},{value:"Type Labels",id:"type-labels",level:4},{value:"Labels",id:"labels-2",level:5},{value:"Other Labels",id:"other-labels",level:4},{value:"Labels",id:"labels-3",level:4},{value:"PR Title and Commit Prefixes",id:"pr-title-and-commit-prefixes",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"issue-and-feature-labeling"},"Issue and Feature Labeling"),(0,n.kt)("p",null,'In this document we describe our approach to setting labels to our issues and PRs by using a combination of "status" and "type" based labels. We also describe the PR title prefixes that we apply.'),(0,n.kt)("h2",{id:"labels"},"Labels"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"On Britecharts, we aim to be methodical on using issue labels, offering our community a way to understand what are the issues about and their status within or development process.\nWe use a bunch of GitHub labels. They are a mix of custom labels and the default Github labels for open-source projects. We base these labels on four main types: ",(0,n.kt)("strong",{parentName:"p"},"status labels"),", ",(0,n.kt)("strong",{parentName:"p"},"issue type labels"),", and the ",(0,n.kt)("strong",{parentName:"p"},"\u201cother\u201d category"),". Read on to learn more about them.")),(0,n.kt)("h4",{id:"status-labels"},"Status Labels"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"They show at a glance the status and progress of each issue"),(0,n.kt)("li",{parentName:"ul"},'Prefixed with "status:", followed by the label'),(0,n.kt)("li",{parentName:"ul"},"Only ",(0,n.kt)("em",{parentName:"li"},"one status label")," will be applied to any particular issue")),(0,n.kt)("h4",{id:"labels-1"},"Labels"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"status:needs_triage")," \u2013 For all issues that need to be processed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"status:needs_reproducing")," \u2013 For bugs that need to be reproduced in order to get fixed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"status:needs_votes")," \u2013 Issue or bug fix that needs support from the community to be considered")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"status:needs_design")," \u2013 Issue that needs design input to continue.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"status:in_progress")," \u2013 Issue that is being worked on right now.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"status:completed")," \u2013 Issue is completed and on main")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"status:abandoned")," \u2013 Issue we won\u2019t go ahead and implement, or that needs a \u201cchampion\u201d to take it through")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"status:blocked")," \u2013 Issue blocked by any reason (dependencies, previous work, lack of resources, etc.)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The resulting ",(0,n.kt)("strong",{parentName:"p"},"Feature Flow")," is:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Needs Triage >> Needs Votes >> Needs Design >> In Progress >> Completed"),(0,n.kt)("li",{parentName:"ul"},"Outside the flow: Blocked || Abandoned"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The resulting ",(0,n.kt)("strong",{parentName:"p"},"Issue Flow")," is:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Needs Triage >> Needs Reproducing >> Needs Votes >> In Progress >> Completed"),(0,n.kt)("li",{parentName:"ul"},"Outside the flow: Blocked || Abandoned")))),(0,n.kt)("p",null,"Here is a diagram representing these states within the lifecycles:\n",(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/britecharts/britecharts/main/packages/docs/static/img/process/issue_process_diagram.png",alt:"Feature and Bug Lifecycle"})),(0,n.kt)("h4",{id:"type-labels"},"Type Labels"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"They show the type of the issue"),(0,n.kt)("li",{parentName:"ul"},'Prefixed with "Type:", followed by the label')),(0,n.kt)("h5",{id:"labels-2"},"Labels"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type:bug")," \u2013 An unexpected problem or unintended behavior"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type:feature")," \u2013 A new feature request"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type:maintenance")," \u2013 A regular maintenance chore or task, including refactors, build system, CI, performance improvements"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type:documentation")," \u2013 A documentation improvement task"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type:question")," \u2013 An issue or PR that needs more information or a user question")),(0,n.kt)("h4",{id:"other-labels"},"Other Labels"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some of these are part of the standard GitHub labels and intended for OSS contributors"),(0,n.kt)("li",{parentName:"ul"},"Some are related to the tools we use to maintain the library"),(0,n.kt)("li",{parentName:"ul"},"They are not prefixed")),(0,n.kt)("h4",{id:"labels-3"},"Labels"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"help wanted")," \u2013 Indicates we are looking for contributors on this issue."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"good first issue")," \u2013 Indicates the issue is a great one to tackle by newcomers to the project or OSS in general."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dependencies")," \u2013 For ",(0,n.kt)("a",{parentName:"li",href:"https://snyk.io/"},"snyk"),", to manage dependencies updates")),(0,n.kt)("h2",{id:"pr-title-and-commit-prefixes"},"PR Title and Commit Prefixes"),(0,n.kt)("p",null,"As we adopted the Commitizen standard, we started using ",(0,n.kt)("a",{parentName:"p",href:"https://commitlint.js.org/#/"},"@commitlint")," to help us enforce meaningful PR and commit titles that will help us to generate the Changelog in the future."),(0,n.kt)("p",null,"The allowed commit and PR prefixes map to the issue types, so they would be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix \u2013 Fixes an unexpected problem or unintended behavior"),(0,n.kt)("li",{parentName:"ul"},"feat \u2013 Adds a new feature"),(0,n.kt)("li",{parentName:"ul"},"chore \u2013 Any regular maintenance chore or task, including: refactors, build system, CI, performance improvements"),(0,n.kt)("li",{parentName:"ul"},"docs \u2013 A documentation improvement task")))}m.isMDXComponent=!0}}]);