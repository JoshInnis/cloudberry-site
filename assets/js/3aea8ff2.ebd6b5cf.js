"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8892],{52730:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(85893),n=s(11151);const i={title:"ALTER TRIGGER"},a="ALTER TRIGGER",l={id:"sql-stmts/alter-trigger",title:"ALTER TRIGGER",description:"Changes the definition of a trigger.",source:"@site/docs/sql-stmts/alter-trigger.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-trigger",permalink:"/docs/sql-stmts/alter-trigger",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-trigger.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732177246,formattedLastUpdatedAt:"Nov 21, 2024",frontMatter:{title:"ALTER TRIGGER"},sidebar:"docsbars",previous:{title:"ALTER TEXT SEARCH TEMPLATE",permalink:"/docs/sql-stmts/alter-text-search-template"},next:{title:"ALTER TYPE",permalink:"/docs/sql-stmts/alter-type"}},o={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"alter-trigger",children:"ALTER TRIGGER"}),"\n",(0,r.jsx)(t.p,{children:"Changes the definition of a trigger."}),"\n",(0,r.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"ALTER TRIGGER <name> ON <table> RENAME TO <newname>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ALTER TRIGGER"})," changes properties of an existing trigger. The ",(0,r.jsx)(t.code,{children:"RENAME"})," clause changes the name of the given trigger without otherwise changing the trigger definition. You must own the table on which the trigger acts to be allowed to change its properties."]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"name"})})}),"\n",(0,r.jsx)(t.p,{children:"The name of an existing trigger to alter."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"table"})})}),"\n",(0,r.jsx)(t.p,{children:"The name of the table on which this trigger acts."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"newname"})})}),"\n",(0,r.jsx)(t.p,{children:"The new name for the trigger."}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.p,{children:["The ability to temporarily activate or deactivate a trigger is provided by ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/alter-table",children:"ALTER TABLE"}),", not by ",(0,r.jsx)(t.code,{children:"ALTER TRIGGER"}),", because ",(0,r.jsx)(t.code,{children:"ALTER TRIGGER"})," has no convenient way to express the option of activating or deactivating all of a table's triggers at once."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that Cloudberry Database has limited support of triggers in this release. See ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/create-trigger",children:"CREATE TRIGGER"})," for more information."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"To rename an existing trigger:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"ALTER TRIGGER emp_stamp ON emp RENAME TO emp_track_chgs;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ALTER TRIGGER"})," is a Cloudberry Database extension of the SQL standard."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/sql-stmts/alter-table",children:"ALTER TABLE"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/create-trigger",children:"CREATE TRIGGER"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/drop-trigger",children:"DROP TRIGGER"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>a});var r=s(67294);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);