"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7086],{45583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>E,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const a={title:"CREATE USER"},r="CREATE USER",o={id:"sql-stmts/create-user",title:"CREATE USER",description:"Defines a new database role.",source:"@site/docs/sql-stmts/create-user.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-user",permalink:"/docs/sql-stmts/create-user",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-user.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"Nov 26, 2024",frontMatter:{title:"CREATE USER"},sidebar:"docsbars",previous:{title:"CREATE USER MAPPING",permalink:"/docs/sql-stmts/create-user-mapping"},next:{title:"CREATE VIEW",permalink:"/docs/sql-stmts/create-view"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-user",children:"CREATE USER"}),"\n",(0,s.jsx)(n.p,{children:"Defines a new database role."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE USER <name> [[WITH] <option> [ ... ]]\n\nwhere option can be:\n      SUPERUSER | NOSUPERUSER\n    | CREATEDB | NOCREATEDB\n    | CREATEROLE | NOCREATEROLE\n\xa0\xa0\xa0\xa0| CREATEEXTTABLE | NOCREATEEXTTABLE \n\xa0\xa0\xa0\xa0\xa0\xa0[ ( <attribute>='<value>'[, ...] ) ]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0where <attributes> and <value> are:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0type='readable'|'writable'\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0protocol='gpfdist'|'http'\n    | INHERIT | NOINHERIT\n    | LOGIN | NOLOGIN\n    | REPLICATION | NOREPLICATION\n    | BYPASSRLS | NOBYPASSRLS\n    | CONNECTION LIMIT <connlimit>\n    | [ ENCRYPTED ] PASSWORD '<password>' | PASSWORD NULL\n    | VALID UNTIL '<timestamp>'\n    | IN ROLE <role_name> [, ...]\n    | IN GROUP <role_name>\n    | ROLE <role_name> [, ...]\n    | ADMIN <role_name> [, ...]\n    | USER <role_name> [, ...]\n    | SYSID <uid>\n\xa0\xa0\xa0\xa0| RESOURCE QUEUE <queue_name>\n\xa0\xa0\xa0\xa0| RESOURCE GROUP <group_name>\n    | [ DENY <deny_point> ]\n    | [ DENY BETWEEN <deny_point> AND <deny_point>]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE USER"})," is an alias for ",(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-role",children:"CREATE ROLE"}),". The only difference is that when the command ",(0,s.jsx)(n.code,{children:"CREATE USER"})," is invoked, ",(0,s.jsx)(n.code,{children:"LOGIN"})," is assumed by default, whereas ",(0,s.jsx)(n.code,{children:"NOLOGIN"})," is assumed when the command invoked is ",(0,s.jsx)(n.code,{children:"CREATE ROLE"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CREATE USER"})," statement is a Cloudberry Database extension. The SQL standard leaves the definition of users to the implementation."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sql-stmts/create-role",children:"CREATE ROLE"})})]})}function E(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);