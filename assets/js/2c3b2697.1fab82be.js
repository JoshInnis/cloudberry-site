"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4895],{69553:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=t(85893),r=t(11151);const l={title:"DROP TABLE"},a="DROP TABLE",i={id:"sql-stmts/drop-table",title:"DROP TABLE",description:"Removes a table.",source:"@site/docs/sql-stmts/drop-table.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-table",permalink:"/docs/sql-stmts/drop-table",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-table.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1737527923,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{title:"DROP TABLE"},sidebar:"docsbars",previous:{title:"DROP STATISTICS",permalink:"/docs/sql-stmts/drop-statistics"},next:{title:"DROP TABLESPACE",permalink:"/docs/sql-stmts/drop-tablespace"}},d={},o=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-table",children:"DROP TABLE"}),"\n",(0,n.jsx)(s.p,{children:"Removes a table."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP TABLE [IF EXISTS] <name> [, ...] [CASCADE | RESTRICT]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP TABLE"})," removes tables from the database. Only the table owner, the schema owner, and superuser can drop a table. To empty a table of rows without removing the table definition, use ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/delete",children:(0,n.jsx)(s.code,{children:"DELETE"})})," or ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/truncate",children:(0,n.jsx)(s.code,{children:"TRUNCATE"})}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP TABLE"})," always removes any indexes, rules, triggers, and constraints that exist for the target table. However, to drop a table that is referenced by a view, ",(0,n.jsx)(s.code,{children:"CASCADE"})," must be specified. ",(0,n.jsx)(s.code,{children:"CASCADE"})," removes a dependent view entirely."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not throw an error if the table does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name (optionally schema-qualified) of the table to remove."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(s.p,{children:"Automatically drop objects that depend on the table (such as views), and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(s.p,{children:"Refuse to drop the table if any objects depend on it. This is the default."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Remove the table ",(0,n.jsx)(s.code,{children:"mytable"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP TABLE mytable;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Remove two tables, ",(0,n.jsx)(s.code,{children:"films"})," and ",(0,n.jsx)(s.code,{children:"distributors"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP TABLE films, distributors;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP TABLE"})," conforms to the SQL standard, except that the standard allows only one table to be dropped per command. Also, the ",(0,n.jsx)(s.code,{children:"IF EXISTS"})," option is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/alter-table",children:(0,n.jsx)(s.code,{children:"ALTER TABLE"})}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-table",children:(0,n.jsx)(s.code,{children:"CREATE TABLE"})})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>a});var n=t(67294);const r={},l=n.createContext(r);function a(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);