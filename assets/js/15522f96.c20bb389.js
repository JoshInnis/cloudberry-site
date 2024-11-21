"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2726],{49658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(85893),i=n(11151);const r={title:"CREATE TEXT SEARCH CONFIGURATION"},a="CREATE TEXT SEARCH CONFIGURATION",c={id:"sql-stmts/create-text-search-configuration",title:"CREATE TEXT SEARCH CONFIGURATION",description:"Defines a new text search configuration.",source:"@site/docs/sql-stmts/create-text-search-configuration.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-text-search-configuration",permalink:"/docs/sql-stmts/create-text-search-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-text-search-configuration.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732177246,formattedLastUpdatedAt:"Nov 21, 2024",frontMatter:{title:"CREATE TEXT SEARCH CONFIGURATION"},sidebar:"docsbars",previous:{title:"CREATE TABLESPACE",permalink:"/docs/sql-stmts/create-tablespace"},next:{title:"CREATE TEXT SEARCH DICTIONARY",permalink:"/docs/sql-stmts/create-text-search-dictionary"}},o={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-text-search-configuration",children:"CREATE TEXT SEARCH CONFIGURATION"}),"\n",(0,s.jsx)(t.p,{children:"Defines a new text search configuration."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TEXT SEARCH CONFIGURATION <name> (\n    PARSER = <parser_name> |\n    COPY = <source_config>\n)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"CREATE TEXT SEARCH CONFIGURATION"})," creates a new text search configuration. A text search configuration specifies a text search parser that can divide a string into tokens, plus dictionaries that can be used to determine which tokens are of interest for searching."]}),"\n",(0,s.jsxs)(t.p,{children:["If only the parser is specified, then the new text search configuration initially has no mappings from token types to dictionaries, and therefore will ignore all words. Subsequent ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/alter-text-search-configuration",children:"ALTER TEXT SEARCH CONFIGURATION"})," commands must be used to create mappings to make the configuration useful. Alternatively, an existing text search configuration can be copied."]}),"\n",(0,s.jsx)(t.p,{children:"If a schema name is provided then the text search configuration is created in the specified schema. Otherwise it is created in the current schema."}),"\n",(0,s.jsx)(t.p,{children:"The user who defines a text search configuration becomes its owner."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the text search configuration to be created. The name can be schema-qualified."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"parser_name"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of the text search parser to use for this configuration."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"source_config"})})}),"\n",(0,s.jsx)(t.p,{children:"The name of an existing text search configuration to copy."}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"PARSER"})," and ",(0,s.jsx)(t.code,{children:"COPY"})," options are mutually exclusive, because when an existing configuration is copied, its parser selection is copied too."]}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["There is no ",(0,s.jsx)(t.code,{children:"CREATE TEXT SEARCH CONFIGURATION"})," statement in the SQL standard."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/sql-stmts/alter-text-search-configuration",children:"ALTER TEXT SEARCH CONFIGURATION"}),", ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/drop-text-search-configuration",children:"DROP TEXT SEARCH CONFIGURATION"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);