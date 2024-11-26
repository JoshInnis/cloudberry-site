"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4721],{79595:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(85893),a=n(11151);const i={title:"SAVEPOINT"},o="SAVEPOINT",l={id:"sql-stmts/savepoint",title:"SAVEPOINT",description:"Defines a new savepoint within the current transaction.",source:"@site/docs/sql-stmts/savepoint.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/savepoint",permalink:"/zh/docs/sql-stmts/savepoint",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/savepoint.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"2024\u5e7411\u670826\u65e5",frontMatter:{title:"SAVEPOINT"},sidebar:"docsbars",previous:{title:"ROLLBACK",permalink:"/zh/docs/sql-stmts/rollback"},next:{title:"SELECT INTO",permalink:"/zh/docs/sql-stmts/select-into"}},r={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"savepoint",children:"SAVEPOINT"}),"\n",(0,t.jsx)(s.p,{children:"Defines a new savepoint within the current transaction."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SAVEPOINT <savepoint_name>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"SAVEPOINT"})," establishes a new savepoint within the current transaction."]}),"\n",(0,t.jsx)(s.p,{children:"A savepoint is a special mark inside a transaction that allows all commands that are run after it was established to be rolled back, restoring the transaction state to what it was at the time of the savepoint."}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"savepoint_name"})})}),"\n",(0,t.jsx)(s.p,{children:"The name of the new savepoint. If savepoints with the same name already exist, they are inaccessible until newer identically-named savepoints are released."}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback-to-savepoint",children:(0,t.jsx)(s.code,{children:"ROLLBACK TO SAVEPOINT"})})," to rollback to a savepoint. Use ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/release-savepoint",children:(0,t.jsx)(s.code,{children:"RELEASE SAVEPOINT"})})," to destroy a savepoint, keeping the effects of commands run after it was established."]}),"\n",(0,t.jsx)(s.p,{children:"Savepoints can be established only inside a transaction block. You can define multiple savepoints within a transaction."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.p,{children:"To establish a savepoint and later undo the effects of all commands run after it was established:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"BEGIN;\n    INSERT INTO table1 VALUES (1);\n    SAVEPOINT my_savepoint;\n    INSERT INTO table1 VALUES (2);\n    ROLLBACK TO SAVEPOINT my_savepoint;\n    INSERT INTO table1 VALUES (3);\nCOMMIT;\n"})}),"\n",(0,t.jsx)(s.p,{children:"The above transaction inserts the values 1 and 3, but not 2."}),"\n",(0,t.jsx)(s.p,{children:"To establish and later destroy a savepoint:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"BEGIN;\n    INSERT INTO table1 VALUES (3);\n    SAVEPOINT my_savepoint;\n    INSERT INTO table1 VALUES (4);\n    RELEASE SAVEPOINT my_savepoint;\nCOMMIT;\n"})}),"\n",(0,t.jsx)(s.p,{children:"The above transaction inserts both 3 and 4."}),"\n",(0,t.jsx)(s.p,{children:"To use a single savepoint name:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"BEGIN;\n    INSERT INTO table1 VALUES (1);\n    SAVEPOINT my_savepoint;\n    INSERT INTO table1 VALUES (2);\n    SAVEPOINT my_savepoint;\n    INSERT INTO table1 VALUES (3);\n\n    -- rollback to the second savepoint\n    ROLLBACK TO SAVEPOINT my_savepoint;\n    SELECT * FROM table1;               -- shows rows 1 and 2\n\n    -- release the second savepoint\n    RELEASE SAVEPOINT my_savepoint;\n\n    -- rollback to the first savepoint\n    ROLLBACK TO SAVEPOINT my_savepoint;\n    SELECT * FROM table1;               -- shows only row 1\nCOMMIT;\n"})}),"\n",(0,t.jsx)(s.p,{children:"The above transaction shows row 3 being rolled back first, then row 2."}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:["SQL requires a savepoint to be destroyed automatically when another savepoint with the same name is established. In Cloudberry Database, the old savepoint is kept, though only the more recent one is used when rolling back or releasing. (Releasing the newer savepoint will cause the older one to again become accessible to ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback-to-savepoint",children:"ROLLBACK TO SAVEPOINT"})," and ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/release-savepoint",children:"RELEASE SAVEPOINT"}),".) Otherwise, ",(0,t.jsx)(s.code,{children:"SAVEPOINT"})," is fully SQL conforming."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/begin",children:(0,t.jsx)(s.code,{children:"BEGIN"})}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/commit",children:(0,t.jsx)(s.code,{children:"COMMIT"})}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/release-savepoint",children:(0,t.jsx)(s.code,{children:"RELEASE SAVEPOINT"})}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback",children:(0,t.jsx)(s.code,{children:"ROLLBACK"})}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/rollback-to-savepoint",children:(0,t.jsx)(s.code,{children:"ROLLBACK TO SAVEPOINT"})})]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var t=n(67294);const a={},i=t.createContext(a);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);