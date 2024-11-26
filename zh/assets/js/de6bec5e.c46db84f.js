"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5747],{51544:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(85893),i=n(11151);const o={title:"ALTER POLICY"},r="ALTER POLICY",l={id:"sql-stmts/alter-policy",title:"ALTER POLICY",description:"Changes the definition of a row-level security policy.",source:"@site/docs/sql-stmts/alter-policy.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-policy",permalink:"/zh/docs/sql-stmts/alter-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-policy.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"2024\u5e7411\u670826\u65e5",frontMatter:{title:"ALTER POLICY"},sidebar:"docsbars",previous:{title:"ALTER OPERATOR",permalink:"/zh/docs/sql-stmts/alter-operator"},next:{title:"ALTER PROCEDURE",permalink:"/zh/docs/sql-stmts/alter-procedure"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"alter-policy",children:"ALTER POLICY"}),"\n",(0,t.jsx)(s.p,{children:"Changes the definition of a row-level security policy."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ALTER POLICY <name> ON <table_name> RENAME TO <new_name>\n\nALTER POLICY <name ON table_name>\n    [ TO { <role_name> | PUBLIC | CURRENT_USER | SESSION_USER } [, ...] ]\n    [ USING ( <using_expression> ) ]\n    [ WITH CHECK ( <check_expression> ) ]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ALTER POLICY"})," changes the definition of an existing row-level security policy. Note that ",(0,t.jsx)(s.code,{children:"ALTER POLICY"})," only allows the set of roles to which the policy applies and the ",(0,t.jsx)(s.code,{children:"USING"})," and ",(0,t.jsx)(s.code,{children:"WITH CHECK"})," expressions to be modified. To change other properties of a policy, such as the command to which it applies or whether it is permissive or restrictive, the policy must be dropped and recreated."]}),"\n",(0,t.jsxs)(s.p,{children:["To use ",(0,t.jsx)(s.code,{children:"ALTER POLICY"}),", you must own the table to which the policy applies."]}),"\n",(0,t.jsxs)(s.p,{children:["In the second form of ",(0,t.jsx)(s.code,{children:"ALTER POLICY"}),", the role list, using_expression, and check_expression are replaced independently if specified. When one of those clauses is omitted, the corresponding part of the policy is unchanged."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"name"})})}),"\n",(0,t.jsx)(s.p,{children:"The name of an existing policy to alter."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"table_name"})})}),"\n",(0,t.jsx)(s.p,{children:"The name (optionally schema-qualified) of the table that the policy is on."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"new_name"})})}),"\n",(0,t.jsx)(s.p,{children:"The new name for the policy."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"role_name"})})}),"\n",(0,t.jsxs)(s.p,{children:["The role(s) to which the policy applies. Multiple roles can be specified at one time. To apply the policy to all roles, use ",(0,t.jsx)(s.code,{children:"PUBLIC"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"using_expression"})})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"USING"})," expression for the policy. See ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-policy",children:"CREATE POLICY"})," for details."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"check_expression"})})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"WITH CHECK"})," expression for the policy. See ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-policy",children:"CREATE POLICY"})," for details."]}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ALTER POLICY"})," is a Cloudberry Database extension to the SQL standard."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-policy",children:"CREATE POLICY"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/drop-policy",children:"DROP POLICY"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var t=n(67294);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);