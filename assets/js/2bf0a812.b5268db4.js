"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8271],{51801:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(85893),n=t(11151);const i={title:"DROP TEXT SEARCH PARSER"},a="DROP TEXT SEARCH PARSER",c={id:"sql-stmts/drop-text-search-parser",title:"DROP TEXT SEARCH PARSER",description:"Description",source:"@site/docs/sql-stmts/drop-text-search-parser.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-text-search-parser",permalink:"/docs/sql-stmts/drop-text-search-parser",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-text-search-parser.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"Nov 26, 2024",frontMatter:{title:"DROP TEXT SEARCH PARSER"},sidebar:"docsbars",previous:{title:"DROP TEXT SEARCH DICTIONARY",permalink:"/docs/sql-stmts/drop-text-search-dictionary"},next:{title:"DROP TEXT SEARCH TEMPLATE",permalink:"/docs/sql-stmts/drop-text-search-template"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description-1",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"drop-text-search-parser",children:"DROP TEXT SEARCH PARSER"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Removes a text search parser."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"DROP TEXT SEARCH PARSER [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"DROP TEXT SEARCH PARSER"})," drops an existing text search parser. You must be a superuser to use this command."]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,r.jsx)(s.p,{children:"Do not throw an error if the text search parser does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"name"})})}),"\n",(0,r.jsx)(s.p,{children:"The name (optionally schema-qualified) of an existing text search parser."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"CASCADE"})})}),"\n",(0,r.jsx)(s.p,{children:"Automatically drop objects that depend on the text search parser, and in turn all objects that depend on those objects."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"RESTRICT"})})}),"\n",(0,r.jsx)(s.p,{children:"Refuse to drop the text search parser if any objects depend on it. This is the default."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["Remove the text search parser ",(0,r.jsx)(s.code,{children:"my_parser"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"DROP TEXT SEARCH PARSER my_parser;\n"})}),"\n",(0,r.jsxs)(s.p,{children:["This command will not succeed if there are any existing text search configurations that use the parser. Add ",(0,r.jsx)(s.code,{children:"CASCADE"})," to drop such configurations along with the parser."]}),"\n",(0,r.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(s.p,{children:["There is no ",(0,r.jsx)(s.code,{children:"DROP TEXT SEARCH PARSER"})," statement in the SQL standard."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sql-stmts/alter-text-search-parser",children:"ALTER TEXT SEARCH PARSER"}),", ",(0,r.jsx)(s.a,{href:"/docs/sql-stmts/create-text-search-parser",children:"CREATE TEXT SEARCH PARSER"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var r=t(67294);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);