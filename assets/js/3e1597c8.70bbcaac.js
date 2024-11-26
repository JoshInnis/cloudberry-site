"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4909],{57983:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>t});var r=n(85893),o=n(11151);const l={title:"Use Column-Level Compression"},c="Use Column-Level Compression",a={id:"performance/use-columnar-compression",title:"Use Column-Level Compression",description:"Apache Cloudberry supports column-level compression, which reduces storage space by compressing specific columns. In some cases, it can also improve query performance, especially when processing large-scale data.",source:"@site/docs/performance/use-columnar-compression.md",sourceDirName:"performance",slug:"/performance/use-columnar-compression",permalink:"/docs/performance/use-columnar-compression",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/use-columnar-compression.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"Nov 26, 2024",frontMatter:{title:"Use Column-Level Compression"},sidebar:"docsbars",previous:{title:"Use RuntimeFilter to Optimize Join Queries",permalink:"/docs/performance/use-runtimefilter-to-optimize-queries"},next:{title:"Security and Permission",permalink:"/docs/security/"}},i={},t=[{value:"User scenarios",id:"user-scenarios",level:2},{value:"Example usage",id:"example-usage",level:2}];function m(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"use-column-level-compression",children:"Use Column-Level Compression"}),"\n",(0,r.jsx)(s.p,{children:"Apache Cloudberry supports column-level compression, which reduces storage space by compressing specific columns. In some cases, it can also improve query performance, especially when processing large-scale data."}),"\n",(0,r.jsx)(s.h2,{id:"user-scenarios",children:"User scenarios"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Storage optimization"}),": Reduces disk space usage for storage-intensive applications."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Performance improvement"}),": Smaller compressed data blocks reduce I/O costs in columnar query scenarios."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"High-frequency data analysis"}),": Lowers data access costs in large-scale data analysis."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,r.jsx)(s.p,{children:"The following is a simple example demonstrating how column-level compression can make a difference in Apache Cloudberry."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Create a table without column-level compression."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE no_column_compression (\n    id serial PRIMARY KEY,\n    data1 text,\n    data2 text\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Create a table with column-level compression."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE column_compression (\n    id serial PRIMARY KEY,\n    data1 text ENCODING (compresstype=zlib, compresslevel=5),\n    data2 text\n)\nWITH (\n    appendoptimized=true,\n    orientation=column\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Insert data into the table without column-level compression."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"INSERT INTO no_column_compression (data1, data2)\nSELECT repeat(md5(random()::text), 10), repeat(md5(random()::text), 10)\nFROM generate_series(1, 100000);\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Insert data into the table with column-level compression."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"INSERT INTO column_compression (data1, data2)\nSELECT repeat(md5(random()::text), 10), repeat(md5(random()::text), 10)\nFROM generate_series(1, 100000);\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Check the storage size of the table without column-level compression."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT pg_size_pretty(pg_total_relation_size('no_column_compression')) AS no_column_compression_size;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Example result:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"no_column_compression_size\n---------------------------\n69 MB\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Check the storage size of the table with column-level compression."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT pg_size_pretty(pg_total_relation_size('column_compression')) AS column_compression_size;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Example result:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"column_compression_size\n------------------------\n36 MB\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Compressed tables use significantly less storage space compared to uncompressed tables. In this example, the table with column-level compression reduced storage usage by nearly 50%."})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>c});var r=n(67294);const o={},l=r.createContext(o);function c(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);