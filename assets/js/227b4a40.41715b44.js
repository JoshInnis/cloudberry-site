"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4983],{1118:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(85893),n=t(11151);const i={title:"DROP TABLESPACE"},r="DROP TABLESPACE",l={id:"sql-stmts/drop-tablespace",title:"DROP TABLESPACE",description:"Removes a tablespace.",source:"@site/docs/sql-stmts/drop-tablespace.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-tablespace",permalink:"/docs/sql-stmts/drop-tablespace",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-tablespace.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"Nov 26, 2024",frontMatter:{title:"DROP TABLESPACE"},sidebar:"docsbars",previous:{title:"DROP TABLE",permalink:"/docs/sql-stmts/drop-table"},next:{title:"DROP TEXT SEARCH CONFIGURATION",permalink:"/docs/sql-stmts/drop-text-search-configuration"}},o={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"drop-tablespace",children:"DROP TABLESPACE"}),"\n",(0,a.jsx)(s.p,{children:"Removes a tablespace."}),"\n",(0,a.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"DROP TABLESPACE [IF EXISTS] <name>\n"})}),"\n",(0,a.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"DROP TABLESPACE"})," removes a tablespace from the system."]}),"\n",(0,a.jsxs)(s.p,{children:["A tablespace can only be dropped by its owner or a superuser. The tablespace must be empty of all database objects before it can be dropped. It is possible that objects in other databases may still reside in the tablespace even if no objects in the current database are using the tablespace. Also, if the tablespace is listed in the temp_tablespaces setting of any active session, ",(0,a.jsx)(s.code,{children:"DROP TABLESPACE"})," might fail due to temporary files residing in the tablespace."]}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,a.jsx)(s.p,{children:"Do not throw an error if the tablespace does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"name"})})}),"\n",(0,a.jsx)(s.p,{children:"The name of the tablespace to remove."}),"\n",(0,a.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(s.p,{children:["You cannot run ",(0,a.jsx)(s.code,{children:"DROP TABLESPACE"})," inside a transaction block."]}),"\n",(0,a.jsxs)(s.p,{children:["Run ",(0,a.jsx)(s.code,{children:"DROP TABLESPACE"})," during a period of low activity to avoid issues due to concurrent creation of tables and temporary objects. When a tablespace is dropped, there is a small window in which a table could be created in the tablespace that is currently being dropped. If this occurs, Cloudberry Database returns a warning. This is an example of the ",(0,a.jsx)(s.code,{children:"DROP TABLESPACE"})," warning."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:'testdb=# DROP TABLESPACE mytest; \nWARNINGtablespace with oid "16415" is not empty  (seg1 192.168.8.145:25433 pid=29023)\nWARNINGtablespace with oid "16415" is not empty  (seg0 192.168.8.145:25432 pid=29022)\nWARNINGtablespace with oid "16415" is not empty\nDROP TABLESPACE\n'})}),"\n",(0,a.jsxs)(s.p,{children:["The table data in the tablespace directory is not dropped. You can use the ",(0,a.jsx)(s.a,{href:"/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," command to change the tablespace defined for the table and move the data to an existing tablespace."]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(s.p,{children:["Remove the tablespace ",(0,a.jsx)(s.code,{children:"mystuff"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"DROP TABLESPACE mystuff;\n"})}),"\n",(0,a.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"DROP TABLESPACE"})," is a Cloudberry Database extension."]}),"\n",(0,a.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/sql-stmts/create-tablespace",children:(0,a.jsx)(s.code,{children:"CREATE TABLESPACE"})}),", ",(0,a.jsx)(s.a,{href:"/docs/sql-stmts/alter-tablespace",children:(0,a.jsx)(s.code,{children:"ALTER TABLESPACE"})})]})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>r});var a=t(67294);const n={},i=a.createContext(n);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);