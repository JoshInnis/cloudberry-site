"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7604],{285:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var h=i(85893),t=i(11151);const s={title:"1.6.0"},n="Cloudberry Database v1.6.0 Release Notes",l={id:"releases/release-1.6.0",title:"1.6.0",description:"This is not an Apache release!",source:"@site/docs/releases/release-1.6.0.md",sourceDirName:"releases",slug:"/releases/release-1.6.0",permalink:"/docs/releases/release-1.6.0",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/releases/release-1.6.0.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"Nov 26, 2024",frontMatter:{title:"1.6.0"},sidebar:"docsbars",previous:{title:"Releases",permalink:"/docs/releases/"},next:{title:"1.5.4",permalink:"/docs/releases/release-1.5.4"}},c={},d=[{value:"Improvements and modifications",id:"improvements-and-modifications",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"\ud83d\ude4c\ud83c\udffb\ufe0f New contributors",id:"\ufe0f-new-contributors",level:2},{value:"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb Contributors",id:"-contributors",level:2}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.admonition,{type:"caution",children:(0,h.jsx)(r.p,{children:"This is not an Apache release!"})}),"\n",(0,h.jsx)(r.h1,{id:"cloudberry-database-v160-release-notes",children:"Cloudberry Database v1.6.0 Release Notes"}),"\n",(0,h.jsx)(r.p,{children:"Version number: v1.6.0"}),"\n",(0,h.jsx)(r.p,{children:"Cloudberry Database v1.6.0 is a minor release that includes some improvements, changes, and bug fixes."}),"\n",(0,h.jsxs)(r.p,{children:["Quick try: ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/releases/tag/1.6.0",children:"v1.6.0"})]}),"\n",(0,h.jsxs)(r.p,{children:["Full Changelog: ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/compare/1.5.4...1.6.0",children:"https://github.com/cloudberrydb/cloudberrydb/compare/1.5.4...1.6.0"})]}),"\n",(0,h.jsx)(r.h2,{id:"improvements-and-modifications",children:"Improvements and modifications"}),"\n",(0,h.jsx)(r.admonition,{type:"tip",children:(0,h.jsxs)(r.p,{children:['In the following notes, "AQUMV" refers to the "Answer Query Using Materialized Views" feature. See ',(0,h.jsx)(r.a,{href:"/docs/performance/use-auto-materialized-view-to-answer-queries",children:"Use Automatic Materialized Views for Query Optimization"})," for details."]})}),"\n",(0,h.jsxs)(r.ul,{children:["\n",(0,h.jsxs)(r.li,{children:["Add ",(0,h.jsx)(r.code,{children:"warehouse_id"})," to ",(0,h.jsx)(r.code,{children:"pg_stat_activity_extended"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/lss602726449",children:"lss602726449"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/453",children:"#453"})]}),"\n",(0,h.jsxs)(r.li,{children:["Modify the ORCA optimizer's processing of ",(0,h.jsx)(r.code,{children:"UNION ALL"})," distribution strategy by @",(0,h.jsx)(r.a,{href:"https://github.com/Light-City",children:"Light-City"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/399",children:"#399"})]}),"\n",(0,h.jsxs)(r.li,{children:["Update the location of ",(0,h.jsx)(r.code,{children:"python-dependencies.txt"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/Zhangbaowen-Hashdata",children:"Zhangbaowen-Hashdata"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/460",children:"#460"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add hook for ",(0,h.jsx)(r.code,{children:"exec_simple_query"})," and support custom spilling memory threshold in the ",(0,h.jsx)(r.code,{children:"cost"})," module by @",(0,h.jsx)(r.a,{href:"https://github.com/songdongxiaoa2",children:"songdongxiaoa2"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/447",children:"#447"})]}),"\n",(0,h.jsxs)(r.li,{children:["Use ",(0,h.jsx)(r.code,{children:"contain_var_clause"})," instead of ",(0,h.jsx)(r.code,{children:"pull_var_clause"})," in AQUMV by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/451",children:"#451"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add ",(0,h.jsx)(r.code,{children:"matchignore"})," and remove meta-command username output for Directory Table by @",(0,h.jsx)(r.a,{href:"https://github.com/edespino",children:"edespino"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/464",children:"#464"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add hook to support different methods to create, drop, or alter warehouses by @",(0,h.jsx)(r.a,{href:"https://github.com/lss602726449",children:"lss602726449"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/462",children:"#462"})]}),"\n",(0,h.jsxs)(r.li,{children:["Re-use index after ",(0,h.jsx)(r.code,{children:"ALTER COLUMN TYPE"})," shouldn't change ",(0,h.jsx)(r.code,{children:"relfilenode"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/lss602726449",children:"lss602726449"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/474",children:"#474"})]}),"\n",(0,h.jsxs)(r.li,{children:["Cherry-pick Resgroup-related code from Greenplum from Mar 2, 2022 to Feb 7, 2023 by @",(0,h.jsx)(r.a,{href:"https://github.com/foreyes",children:"foreyes"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/448",children:"#448"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add a weekly build and release process by @",(0,h.jsx)(r.a,{href:"https://github.com/Zhangbaowen-Hashdata",children:"Zhangbaowen-Hashdata"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/459",children:"#459"})]}),"\n",(0,h.jsxs)(r.li,{children:["Consider mutable functions and bypass expressions with no ",(0,h.jsx)(r.code,{children:"Vars"})," for view query targets in AQUMV by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/455",children:"#455"})]}),"\n",(0,h.jsxs)(r.li,{children:["Expose the function to adjust view query and ",(0,h.jsx)(r.code,{children:"varno"})," fix in AQUMV by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/469",children:"#469"})]}),"\n",(0,h.jsxs)(r.li,{children:["Modify weekly build release details by @",(0,h.jsx)(r.a,{href:"https://github.com/Zhangbaowen-Hashdata",children:"Zhangbaowen-Hashdata"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/477",children:"#477"})]}),"\n",(0,h.jsxs)(r.li,{children:["Call the ",(0,h.jsx)(r.code,{children:"query_info_collect_hook"})," function directly if an exception occurs by @",(0,h.jsx)(r.a,{href:"https://github.com/foreyes",children:"foreyes"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/481",children:"#481"})]}),"\n",(0,h.jsxs)(r.li,{children:["Cherry-pick: Work around a spurious compiler warning in ",(0,h.jsx)(r.code,{children:"inet"})," operators by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/499",children:"#499"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add LoongArch (",(0,h.jsx)(r.code,{children:"loongarch64"}),") support to ",(0,h.jsx)(r.code,{children:"s_lock.h"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/wangzw",children:"wangzw"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/500",children:"#500"})]}),"\n",(0,h.jsxs)(r.li,{children:["Implement features of the directory table by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/484",children:"#484"})]}),"\n",(0,h.jsxs)(r.li,{children:["Re-enable the external FTS ICW by @",(0,h.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/483",children:"#483"})]}),"\n",(0,h.jsxs)(r.li,{children:["Change ",(0,h.jsx)(r.code,{children:"AOCO_Compression"})," test case to validate ",(0,h.jsx)(r.code,{children:"pg_relation_size"})," and ",(0,h.jsx)(r.code,{children:"get_ao_compression_ratio"})," within a \xb110% expected range by @",(0,h.jsx)(r.a,{href:"https://github.com/congxuebin",children:"congxuebin"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/493",children:"#493"})]}),"\n",(0,h.jsxs)(r.li,{children:["Maintain materialized view data status by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/501",children:"#501"})]}),"\n",(0,h.jsxs)(r.li,{children:["Define ",(0,h.jsx)(r.code,{children:"EXT_OID_START"})," to suggest an OID range for extensions by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/514",children:"#514"})]}),"\n",(0,h.jsxs)(r.li,{children:["Ignore ",(0,h.jsx)(r.code,{children:"pg_upgrade"})," to resolve CI issues by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/515",children:"#515"})]}),"\n",(0,h.jsxs)(r.li,{children:["Reduce flakiness in ",(0,h.jsx)(r.code,{children:"fts_segment_reset"})," test by @",(0,h.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/518",children:"#518"})]}),"\n",(0,h.jsxs)(r.li,{children:["Stabilize ",(0,h.jsx)(r.code,{children:"gp_dqa"})," test case by @",(0,h.jsx)(r.a,{href:"https://github.com/congxuebin",children:"congxuebin"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/521",children:"#521"})]}),"\n",(0,h.jsxs)(r.li,{children:["Doc: Add more tools documentation for Cloudberry Database by @",(0,h.jsx)(r.a,{href:"https://github.com/tuhaihe",children:"tuhaihe"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/523",children:"#523"})]}),"\n",(0,h.jsxs)(r.li,{children:["Reimplement ",(0,h.jsx)(r.code,{children:"COPY FROM"})," for directory table by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/527",children:"#527"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add materialized view-related trigger cases in SingleNode mode by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/517",children:"#517"})]}),"\n",(0,h.jsxs)(r.li,{children:["Refactor view query target list processing in AQUMV by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/525",children:"#525"})]}),"\n",(0,h.jsxs)(r.li,{children:["Implement the tagging feature by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/444",children:"#444"})]}),"\n",(0,h.jsxs)(r.li,{children:["Update ",(0,h.jsx)(r.code,{children:"orafce"})," to version 4.9 and enhance it by @",(0,h.jsx)(r.a,{href:"https://github.com/foreyes",children:"foreyes"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/524",children:"#524"})]}),"\n",(0,h.jsxs)(r.li,{children:["Allow normal materialized views to answer queries in AQUMV by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/528",children:"#528"})]}),"\n",(0,h.jsxs)(r.li,{children:["Support ",(0,h.jsx)(r.code,{children:"COPY FROM"})," for directory tables with entry distribution policy by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/533",children:"#533"})]}),"\n",(0,h.jsxs)(r.li,{children:["Minor improvements to ",(0,h.jsx)(r.code,{children:"README.md"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/534",children:"#534"})]}),"\n",(0,h.jsxs)(r.li,{children:["Use ",(0,h.jsx)(r.code,{children:"FDW"})," to query multiple servers as shards by @",(0,h.jsx)(r.a,{href:"https://github.com/oppenheimer01",children:"oppenheimer01"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/320",children:"#320"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add an option in ",(0,h.jsx)(r.code,{children:"psql"})," to avoid encoding issues on certain platforms by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/535",children:"#535"})]}),"\n",(0,h.jsxs)(r.li,{children:["Refactor ",(0,h.jsx)(r.code,{children:"cbdb_log"})," to use ",(0,h.jsx)(r.code,{children:"vfprintf"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/ruhuang2001",children:"ruhuang2001"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/506",children:"#506"})]}),"\n",(0,h.jsxs)(r.li,{children:["Update ",(0,h.jsx)(r.code,{children:"aocsam.c"}),": Fix ",(0,h.jsx)(r.code,{children:"safeFSWriteSize"})," argument type by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/540",children:"#540"})]}),"\n",(0,h.jsxs)(r.li,{children:["Update the CI image to ",(0,h.jsx)(r.code,{children:"RockyLinux8"})," to ensure CI proper operations by @",(0,h.jsx)(r.a,{href:"https://github.com/Zhangbaowen-Hashdata",children:"Zhangbaowen-Hashdata"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/556",children:"#556"})]}),"\n",(0,h.jsxs)(r.li,{children:["Remove the unsupported ",(0,h.jsx)(r.code,{children:"AC_FUNC_FSEEKO"})," macro by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/543",children:"#543"})]}),"\n",(0,h.jsxs)(r.li,{children:["Adjust test cases for the ",(0,h.jsx)(r.code,{children:"cloudberrydb"})," binary swap tests by @",(0,h.jsx)(r.a,{href:"https://github.com/congxuebin",children:"congxuebin"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/537",children:"#537"})]}),"\n",(0,h.jsxs)(r.li,{children:["Implement ",(0,h.jsx)(r.code,{children:"CREATE FOREIGN TABLE LIKE"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/554",children:"#554"})]}),"\n",(0,h.jsxs)(r.li,{children:["Enable ",(0,h.jsx)(r.code,{children:"SingleQE"})," join with ",(0,h.jsx)(r.code,{children:"SegmentGeneralWorkers"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/327",children:"#327"})]}),"\n",(0,h.jsxs)(r.li,{children:["Use ",(0,h.jsx)(r.code,{children:"syscache"})," lookup in ",(0,h.jsx)(r.code,{children:"ShouldUseReservedSegno"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/gongxun0928",children:"gongxun0928"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/541",children:"#541"})]}),"\n",(0,h.jsxs)(r.li,{children:["Implement ",(0,h.jsx)(r.code,{children:"READ_STRING_FIELD_NULL"})," serializable read function by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/553",children:"#553"})]}),"\n",(0,h.jsxs)(r.li,{children:["Update ",(0,h.jsx)(r.code,{children:"appendonlywriter.c"})," to fix debug messages by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/564",children:"#564"})]}),"\n",(0,h.jsxs)(r.li,{children:["Support locking directory tables by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/572",children:"#572"})]}),"\n",(0,h.jsxs)(r.li,{children:["Update ",(0,h.jsx)(r.code,{children:"ALTER TABLE"})," help command content by @",(0,h.jsx)(r.a,{href:"https://github.com/EcaleD",children:"EcaleD"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/574",children:"#574"})]}),"\n",(0,h.jsxs)(r.li,{children:["Cherry-pick ",(0,h.jsx)(r.code,{children:"Resgroup V2"})," and toolkit from Greenplum Database by @",(0,h.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/531",children:"#531"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fallback to PostgreSQL optimizer for ORCA when NL inner plan is index scan by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/565",children:"#565"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add ",(0,h.jsx)(r.code,{children:"FIXME"})," for redundant parameter in ",(0,h.jsx)(r.code,{children:"ivm_visible_in_prestate"})," call by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/578",children:"#578"})]}),"\n",(0,h.jsxs)(r.li,{children:["Support ",(0,h.jsx)(r.code,{children:"DISTRIBUTED BY"})," clause specification when creating materialized views with the ",(0,h.jsx)(r.code,{children:"IF NOT EXISTS"})," clause by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/563",children:"#563"})]}),"\n",(0,h.jsxs)(r.li,{children:["Cherry-pick commits related to the recent ",(0,h.jsx)(r.code,{children:"Resgroup V2"})," merge by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/579",children:"#579"})]}),"\n",(0,h.jsxs)(r.li,{children:["Change temporary table names used for IMMV to less frequent sequences by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/581",children:"#581"})]}),"\n",(0,h.jsxs)(r.li,{children:["Rephrase comments for deferred IVM case by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/576",children:"#576"})]}),"\n",(0,h.jsxs)(r.li,{children:["Enable ",(0,h.jsx)(r.code,{children:"fsync=on"})," by default in ",(0,h.jsx)(r.code,{children:"gpAux/gpdemo/gpdemo-defaults.sh"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/yjhjstz",children:"yjhjstz"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/585",children:"#585"})]}),"\n",(0,h.jsxs)(r.li,{children:["Forbid inherited tables from storing in ",(0,h.jsx)(r.code,{children:"gp_matview_aux"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/587",children:"#587"})]}),"\n",(0,h.jsxs)(r.li,{children:["Check that relations have children when performing view matching in AQUMV by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/577",children:"#577"})]}),"\n",(0,h.jsxs)(r.li,{children:["Update ",(0,h.jsx)(r.code,{children:"check.c"})," to fix incorrect references to Cloudberry Database by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/600",children:"#600"})]}),"\n",(0,h.jsxs)(r.li,{children:["Send rows in binary mode for ",(0,h.jsx)(r.code,{children:"ANALYZE"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/Light-City",children:"Light-City"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/601",children:"#601"})]}),"\n",(0,h.jsxs)(r.li,{children:["Enable ",(0,h.jsx)(r.code,{children:"Resgroup"})," test cases in CI by @",(0,h.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/539",children:"#539"})]}),"\n",(0,h.jsxs)(r.li,{children:["Remove the ",(0,h.jsx)(r.code,{children:"cbdb"})," weekly and release workflows by @",(0,h.jsx)(r.a,{href:"https://github.com/edespino",children:"edespino"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/615",children:"#615"})]}),"\n",(0,h.jsxs)(r.li,{children:["Free ",(0,h.jsx)(r.code,{children:"tupleDesc"})," on commit or abort transaction by @",(0,h.jsx)(r.a,{href:"https://github.com/yjhjstz",children:"yjhjstz"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/551",children:"#551"})]}),"\n",(0,h.jsxs)(r.li,{children:["Replace ",(0,h.jsx)(r.code,{children:"gpscp"})," with ",(0,h.jsx)(r.code,{children:"gpsync"})," in external FTS by @",(0,h.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/470",children:"#470"})]}),"\n",(0,h.jsxs)(r.li,{children:["Add ",(0,h.jsx)(r.code,{children:"ao_unique_index_build"})," test in ",(0,h.jsx)(r.code,{children:"greenplum_schedule"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/lss602726449",children:"lss602726449"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/562",children:"#562"})]}),"\n",(0,h.jsxs)(r.li,{children:["Avoid executing the ",(0,h.jsx)(r.code,{children:"qual"})," clause twice by @",(0,h.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/396",children:"#396"})]}),"\n"]}),"\n",(0,h.jsx)(r.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,h.jsxs)(r.ul,{children:["\n",(0,h.jsxs)(r.li,{children:["Fix the compile error caused by redefinition of ",(0,h.jsx)(r.code,{children:"pipe"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/349",children:"#349"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the issue with recording ",(0,h.jsx)(r.code,{children:"password_history"})," when the role is not allowed to use profile by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/480",children:"#480"})]}),"\n",(0,h.jsxs)(r.li,{children:["Resolve the inconsistent result issue in ",(0,h.jsx)(r.code,{children:"gpdtm_plpgsql"})," test case by @",(0,h.jsx)(r.a,{href:"https://github.com/congxuebin",children:"congxuebin"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/491",children:"#491"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the issue of Cloudberry Database CI not running properly by @",(0,h.jsx)(r.a,{href:"https://github.com/Zhangbaowen-Hashdata",children:"Zhangbaowen-Hashdata"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/497",children:"#497"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the incorrect display of copy number when using ",(0,h.jsx)(r.code,{children:"COPY TO"})," on a replicated table by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/498",children:"#498"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the memory block size issue in ",(0,h.jsx)(r.code,{children:"bitmapinsert"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/495",children:"#495"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the issue of ignoring direct table test files by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/502",children:"#502"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix ",(0,h.jsx)(r.code,{children:"gpinitsystem"})," issues by @",(0,h.jsx)(r.a,{href:"https://github.com/fanfuxiaoran",children:"fanfuxiaoran"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/490",children:"#490"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix compile errors detected by GCC 12 by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/503",children:"#503"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the ",(0,h.jsx)(r.code,{children:"bsearch"})," compare function in ",(0,h.jsx)(r.code,{children:"guc.c"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/507",children:"#507"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix commands that forgot to mark meta track by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/505",children:"#505"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix compile error in C++20 by @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/510",children:"#510"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the issue that ",(0,h.jsx)(r.code,{children:"COPY TO"})," on directory table always returns ",(0,h.jsx)(r.code,{children:"1"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/522",children:"#522"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix ",(0,h.jsx)(r.code,{children:"segfilecount"})," of AO/AOCO during bulk insertion using ",(0,h.jsx)(r.code,{children:"COPY"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/530",children:"#530"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the crash of ",(0,h.jsx)(r.code,{children:"COPY FROM"})," on AO/AOCO/PAX partitioned tables by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/549",children:"#549"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the issue that occurs when copying some directory tables by @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/550",children:"#550"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix bugs with base relation truncation for IMMV by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/570",children:"#570"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the compile-time error in ",(0,h.jsx)(r.code,{children:"SparseData.h"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/566",children:"#566"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix ",(0,h.jsx)(r.code,{children:"pxf_fragment.c"})," compilation failure by @",(0,h.jsx)(r.a,{href:"https://github.com/Terry1504",children:"Terry1504"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/590",children:"#590"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix ",(0,h.jsx)(r.code,{children:"pg_upgrade"})," version parsing when upgrading from Greenplum by @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/599",children:"#599"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix serialization of expression ",(0,h.jsx)(r.code,{children:"AEXPR_NOT_DISTINCT"})," by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/598",children:"#598"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix writable rules on tables with related materialized views by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/584",children:"#584"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the issue with writable CTEs causing incorrect materialized view data status by @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/602",children:"#602"})]}),"\n",(0,h.jsxs)(r.li,{children:["Fix the issue of being unable to pull up equivalence class using the projected target list by @",(0,h.jsx)(r.a,{href:"https://github.com/yjhjstz",children:"yjhjstz"})," in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/606",children:"#606"})]}),"\n"]}),"\n",(0,h.jsx)(r.h2,{id:"\ufe0f-new-contributors",children:"\ud83d\ude4c\ud83c\udffb\ufe0f New contributors"}),"\n",(0,h.jsxs)(r.ul,{children:["\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/Light-City",children:"Light-City"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/399",children:"#399"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/songdongxiaoa2",children:"songdongxiaoa2"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/447",children:"#447"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/edespino",children:"edespino"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/464",children:"#464"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/congxuebin",children:"congxuebin"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/491",children:"#491"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/wangzw",children:"wangzw"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/500",children:"#500"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/534",children:"#534"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/oppenheimer01",children:"oppenheimer01"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/320",children:"#320"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/ruhuang2001",children:"ruhuang2001"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/506",children:"#506"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/EcaleD",children:"EcaleD"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/574",children:"#574"})]}),"\n",(0,h.jsxs)(r.li,{children:["@",(0,h.jsx)(r.a,{href:"https://github.com/Terry1504",children:"Terry1504"})," made their first contribution in ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/cloudberrydb/pull/590",children:"#590"})]}),"\n"]}),"\n",(0,h.jsx)(r.h2,{id:"-contributors",children:"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb Contributors"}),"\n",(0,h.jsxs)(r.p,{children:["Thanks to all the contributors to make this release happen: @",(0,h.jsx)(r.a,{href:"https://github.com/Aegeaner",children:"Aegeaner"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/EcaleD",children:"EcaleD"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/Light-City",children:"Light-City"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/RMTT",children:"RMTT"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/SmartKeyerror",children:"SmartKeyerror"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/Tao-T",children:"Tao-T"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/Terry1504",children:"Terry1504"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/Zhangbaowen-Hashdata",children:"Zhangbaowen-Hashdata"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/adam8157",children:"adam8157"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/airfan1994",children:"airfan1994"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/andr-sokolov",children:"andr-sokolov"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/ashwinstar",children:"ashwinstar"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/avamingli",children:"avamingli"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/beeender",children:"beeender"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/bmdoil",children:"bmdoil"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/charliettxx",children:"charliettxx"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/congxuebin",children:"congxuebin"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/dgkimura",children:"dgkimura"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/dh-cloud",children:"dh-cloud"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/divyeshddv",children:"divyeshddv"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/dreamedcheng",children:"dreamedcheng"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/edespino",children:"edespino"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/eespino",children:"eespino"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/fairyfar",children:"fairyfar"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/fanfuxiaoran",children:"fanfuxiaoran"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/foreyes",children:"foreyes"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/gfphoenix78",children:"gfphoenix78"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/gongxun0928",children:"gongxun0928"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/gpopt",children:"gpopt"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/higuoxing",children:"higuoxing"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/huansong",children:"huansong"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/hyongtao-db",children:"hyongtao-db"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/jchampio",children:"jchampio"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/jiaqizho",children:"jiaqizho"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/jimmyyih",children:"jimmyyih"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/kainwen",children:"kainwen"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/l-wang",children:"l-wang"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/lss602726449",children:"lss602726449"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/oppenheimer01",children:"oppenheimer01"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/reshke",children:"reshke"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/ruhuang2001",children:"ruhuang2001"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/songdongxiaoa2",children:"songdongxiaoa2"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/soumyadeep2007",children:"soumyadeep2007"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/thedanhoffman",children:"thedanhoffman"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/tuhaihe",children:"tuhaihe"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/wangzw",children:"wangzw"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/wenchaozhang-123",children:"wenchaozhang-123"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/yanwr1",children:"yanwr1"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/yaowangm",children:"yaowangm"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/yjhjstz",children:"yjhjstz"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/zhrt123",children:"zhrt123"}),", @",(0,h.jsx)(r.a,{href:"https://github.com/zxuejing",children:"zxuejing"})]}),"\n",(0,h.jsxs)("sub",{children:["\ud83e\uddc2\ud83e\uddea Try out Cloudberry Database via building ",(0,h.jsx)(r.a,{href:"https://github.com/cloudberrydb/bootcamp",children:"one Docker-based Sandbox"}),", which is tailored to help you gain a basic understanding of Cloudberry Database's capabilities and features a range of materials, including tutorials, sample code, and crash courses."]})]})}function a(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,h.jsx)(r,{...e,children:(0,h.jsx)(o,{...e})}):o(e)}},11151:(e,r,i)=>{i.d(r,{Z:()=>l,a:()=>n});var h=i(67294);const t={},s=h.createContext(t);function n(e){const r=h.useContext(s);return h.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),h.createElement(s.Provider,{value:r},e.children)}}}]);