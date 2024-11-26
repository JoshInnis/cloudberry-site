"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8513],{58362:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var r=s(85893),l=s(11151);const i={title:"\u4ea7\u54c1\u7279\u6027",slug:"/"},d="Cloudberry Database \u4ea7\u54c1\u7279\u6027",c={id:"cbdb-overview",title:"\u4ea7\u54c1\u7279\u6027",description:"Cloudberry Database \u57fa\u4e8e\u6700\u65b0\u7684 PostgreSQL 14.4 \u5185\u6838\uff0c\u662f\u5f53\u524d\u6700\u5148\u8fdb\u7684\u6210\u719f\u5f00\u6e90 MPP \u6570\u636e\u5e93\u4e4b\u4e00\uff0c\u5177\u5907\u9ad8\u5e76\u53d1\u3001\u9ad8\u53ef\u7528\u7b49\u591a\u79cd\u7279\u6027\uff0c\u53ef\u4ee5\u5bf9\u590d\u6742\u4efb\u52a1\u8fdb\u884c\u5feb\u901f\u9ad8\u6548\u8ba1\u7b97\uff0c\u4ee5\u6ee1\u8db3\u6d77\u91cf\u6570\u636e\u7ba1\u7406\u548c\u8ba1\u7b97\u7684\u9700\u6c42\uff0c\u76ee\u524d\u5728\u591a\u4e2a\u9886\u57df\u90fd\u6709\u7740\u5e7f\u6cdb\u5e94\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cbdb-overview.md",sourceDirName:".",slug:"/",permalink:"/zh/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/cbdb-overview.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"2024\u5e7411\u670826\u65e5",frontMatter:{title:"\u4ea7\u54c1\u7279\u6027",slug:"/"},sidebar:"docsbars",next:{title:"\u67b6\u6784\u4ecb\u7ecd",permalink:"/zh/docs/cbdb-architecture"}},a={},t=[{value:"\u591a\u573a\u666f\u9ad8\u6548\u67e5\u8be2",id:"\u591a\u573a\u666f\u9ad8\u6548\u67e5\u8be2",level:2},{value:"\u591a\u6001\u6570\u636e\u5b58\u50a8",id:"\u591a\u6001\u6570\u636e\u5b58\u50a8",level:2},{value:"\u591a\u5c42\u6b21\u7684\u6570\u636e\u5b89\u5168\u9632\u62a4",id:"\u591a\u5c42\u6b21\u7684\u6570\u636e\u5b89\u5168\u9632\u62a4",level:2},{value:"\u6570\u636e\u52a0\u8f7d",id:"\u6570\u636e\u52a0\u8f7d",level:2},{value:"\u591a\u5c42\u5bb9\u9519",id:"\u591a\u5c42\u5bb9\u9519",level:2},{value:"\u4e30\u5bcc\u7684\u6570\u636e\u5206\u6790\u652f\u6301",id:"\u4e30\u5bcc\u7684\u6570\u636e\u5206\u6790\u652f\u6301",level:2},{value:"\u7075\u6d3b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",id:"\u7075\u6d3b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",level:2},{value:"\u591a\u79cd\u517c\u5bb9\u6027",id:"\u591a\u79cd\u517c\u5bb9\u6027",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...n.components},{Details:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"cloudberry-database-\u4ea7\u54c1\u7279\u6027",children:"Cloudberry Database \u4ea7\u54c1\u7279\u6027"}),"\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u57fa\u4e8e\u6700\u65b0\u7684 PostgreSQL 14.4 \u5185\u6838\uff0c\u662f\u5f53\u524d\u6700\u5148\u8fdb\u7684\u6210\u719f\u5f00\u6e90 MPP \u6570\u636e\u5e93\u4e4b\u4e00\uff0c\u5177\u5907\u9ad8\u5e76\u53d1\u3001\u9ad8\u53ef\u7528\u7b49\u591a\u79cd\u7279\u6027\uff0c\u53ef\u4ee5\u5bf9\u590d\u6742\u4efb\u52a1\u8fdb\u884c\u5feb\u901f\u9ad8\u6548\u8ba1\u7b97\uff0c\u4ee5\u6ee1\u8db3\u6d77\u91cf\u6570\u636e\u7ba1\u7406\u548c\u8ba1\u7b97\u7684\u9700\u6c42\uff0c\u76ee\u524d\u5728\u591a\u4e2a\u9886\u57df\u90fd\u6709\u7740\u5e7f\u6cdb\u5e94\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u6587\u6863\u4ece\u603b\u4f53\u4e0a\u4ecb\u7ecd Cloudberry Database \u7684\u7279\u6027\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u591a\u573a\u666f\u9ad8\u6548\u67e5\u8be2",children:"\u591a\u573a\u666f\u9ad8\u6548\u67e5\u8be2"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u652f\u6301\u7528\u6237\u5728\u5927\u6570\u636e\u5206\u6790\u73af\u5883\u548c\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u8fdb\u884c\u6709\u6548\u7684\u67e5\u8be2\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5927\u6570\u636e\u5206\u6790\u73af\u5883"}),"\uff1aCloudberry Database \u4f7f\u7528\u5185\u7f6e\u7684 PostgreSQL \u7684\u4f18\u5316\u5668\uff0c\u53ef\u66f4\u597d\u5730\u652f\u6301\u5206\u5e03\u5f0f\u73af\u5883\u3002\u8fd9\u610f\u5473\u7740\u5b83\u80fd\u591f\u5728\u5904\u7406\u5927\u6570\u636e\u5206\u6790\u4efb\u52a1\u65f6\u4ea7\u751f\u66f4\u9ad8\u6548\u7684\u67e5\u8be2\u8ba1\u5212\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5206\u5e03\u5f0f\u73af\u5883"}),"\uff1a\u91c7\u7528\u5f00\u6e90\u4f18\u5316\u5668 GPORCA \u4f18\u5316\u5668\uff0c\u7ecf\u8fc7\u7279\u5b9a\u9002\u914d\uff0c\u53ef\u6ee1\u8db3\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u67e5\u8be2\u4f18\u5316\u9700\u6c42\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u63d0\u4f9b\u5206\u533a\u9759\u6001\u548c\u52a8\u6001\u51cf\u88c1\u3001\u805a\u96c6\u4e0b\u63a8\u3001\u8fde\u63a5\u8fc7\u6ee4\u7b49\u6280\u672f\uff0c\u4ee5\u5e2e\u52a9\u7528\u6237\u83b7\u5f97\u6700\u5feb\u3001\u6700\u7cbe\u786e\u7684\u67e5\u8be2\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u63d0\u4f9b\u4e86\u57fa\u4e8e\u89c4\u5219\u7684\u67e5\u8be2\u4f18\u5316\u624b\u6bb5\u548c\u57fa\u4e8e\u4ee3\u4ef7\u7684\u67e5\u8be2\u4f18\u5316\u624b\u6bb5\uff0c\u5e2e\u52a9\u7528\u6237\u751f\u6210\u66f4\u9ad8\u6548\u7684\u67e5\u8be2\u6267\u884c\u8ba1\u5212\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u591a\u6001\u6570\u636e\u5b58\u50a8",children:"\u591a\u6001\u6570\u636e\u5b58\u50a8"}),"\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u652f\u6301\u591a\u79cd\u4e0d\u540c\u7684\u5b58\u50a8\u683c\u5f0f\uff0c\u5305\u62ec Heap \u5b58\u50a8\u3001AO \u884c\u5b58\u50a8\u3001AOCS \u5217\u5b58\u50a8\uff0c\u7528\u4e8e\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u3002\u540c\u65f6\uff0cCloudberry Database \u8fd8\u652f\u6301\u5206\u533a\u8868\uff0c\u7528\u6237\u53ef\u4ee5\u6309\u7167\u67d0\u4e2a\u6761\u4ef6\u5b9a\u4e49\u8868\u7684\u5206\u533a\u65b9\u5f0f\uff0c\u67e5\u8be2\u65f6\u6839\u636e\u67e5\u8be2\u6761\u4ef6\u81ea\u52a8\u8fc7\u6ee4\u4e0d\u9700\u8981\u67e5\u8be2\u7684\u5b50\u8868\uff0c\u63d0\u9ad8\u6570\u636e\u7684\u67e5\u8be2\u6548\u7387\u3002"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u4ee5\u67e5\u770b\u8be6\u60c5"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5747\u5300\u7684\u6570\u636e\u5206\u5e03"}),"\uff1a\u901a\u8fc7 Hash \u548c Random \u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u5206\u5e03\uff0c\u53ef\u4ee5\u66f4\u597d\u5730\u5229\u7528\u78c1\u76d8\u6027\u80fd\u5e76\u89e3\u51b3 I/O \u74f6\u9888\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u591a\u79cd\u5b58\u50a8\u7c7b\u578b\u7684\u9009\u62e9"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u884c\u5f0f\u5b58\u50a8\uff1a\u9002\u7528\u4e8e\u5927\u591a\u6570\u5b57\u6bb5\u9891\u7e41\u67e5\u8be2\u548c\u968f\u673a\u884c\u8bbf\u95ee\u8f83\u591a\u7684\u60c5\u51b5\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5217\u5f0f\u5b58\u50a8\uff1a\u5f53\u4f60\u9700\u8981\u5bf9\u5c11\u6570\u5b57\u6bb5\u8fdb\u884c\u67e5\u8be2\u65f6\uff0c\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5927\u5e45\u8282\u7701 I/O \u64cd\u4f5c\uff0c\u975e\u5e38\u9002\u5408\u5927\u6570\u636e\u91cf\u9891\u7e41\u8bbf\u95ee\u7684\u573a\u666f\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4e13\u95e8\u7684\u5b58\u50a8\u6a21\u5f0f"}),"\uff1aCloudberry Database \u8bbe\u8ba1\u4e86 Heap \u5b58\u50a8\u3001AO \u884c\u5b58\u50a8\u3001AOCS \u5217\u5b58\u50a8\u7b49\u4e0d\u540c\u7684\u5b58\u50a8\u6a21\u5f0f\u4ee5\u4f18\u5316\u5404\u79cd\u5e94\u7528\u7c7b\u578b\u7684\u6027\u80fd\u3002\u5728\u6700\u7ec6\u7c92\u5ea6\u5230\u5206\u533a\u7684\u5c42\u9762\uff0c\u4e00\u5f20\u8868\u53ef\u4ee5\u5b9e\u73b0\u591a\u79cd\u5b58\u50a8\u6a21\u5f0f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u652f\u6301\u5206\u533a\u8868"}),"\uff1a\u4f60\u53ef\u4ee5\u6839\u636e\u7279\u5b9a\u6761\u4ef6\u5b9a\u4e49\u8868\u7684\u5206\u533a\u65b9\u5f0f\u3002\u5728\u67e5\u8be2\u65f6\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u8fc7\u6ee4\u4e0d\u9700\u8981\u67e5\u8be2\u7684\u5b50\u8868\uff0c\u63d0\u9ad8\u6570\u636e\u7684\u67e5\u8be2\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u9ad8\u6548\u7684\u6570\u636e\u538b\u7f29\u529f\u80fd"}),"\uff1a\u652f\u6301\u591a\u79cd\u538b\u7f29\u7b97\u6cd5\uff0c\u5982 Zlib 1-9 \u548c Zstandard 1~19\uff0c\u4ee5\u63d0\u9ad8\u6570\u636e\u5904\u7406\u6027\u80fd\uff0c\u5e76\u4fdd\u6301 CPU \u4e0e\u538b\u7f29\u6bd4\u7684\u5e73\u8861\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5bf9\u5c0f\u8868\u7684\u4f18\u5316"}),"\uff1a\u4f60\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 Replication Table\uff0c\u5e76\u5728\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u81ea\u5b9a\u4e49 Hash \u7b97\u6cd5\uff0c\u66f4\u7075\u6d3b\u5730\u63a7\u5236\u6570\u636e\u5206\u5e03\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u591a\u5c42\u6b21\u7684\u6570\u636e\u5b89\u5168\u9632\u62a4",children:"\u591a\u5c42\u6b21\u7684\u6570\u636e\u5b89\u5168\u9632\u62a4"}),"\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u52a0\u5f3a\u5bf9\u7528\u6237\u6570\u636e\u7684\u4fdd\u62a4\uff0c\u652f\u6301\u51fd\u6570\u52a0\u5bc6\u89e3\u5bc6\uff0c\u4ee5\u53ca\u900f\u660e\u6570\u636e\u52a0\u5bc6\u548c\u89e3\u5bc6\u3002\u900f\u660e\u6570\u636e\u52a0\u5bc6\u89e3\u5bc6\u6307\u5728\u7528\u6237\u4e0d\u611f\u77e5\u7684\u60c5\u51b5\u4e0b\uff0c\u52a0\u5bc6\u89e3\u5bc6\u8fc7\u7a0b\u7531 Cloudberry Database \u5185\u6838\u5b8c\u6210\uff0c\u76ee\u524d\u53ef\u4ee5\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u5305\u62ec Heap \u8868\u3001AO \u884c\u5b58\u50a8\u3001AOCS \u5217\u5b58\u50a8\u3002\u540c\u65f6\u52a0\u5bc6\u7b97\u6cd5\u9664\u4e86\u5e38\u7528\u7684 AES \u7b49\u7b97\u6cd5\u4ee5\u5916\uff0c\u8fd8\u7279\u522b\u652f\u6301\u56fd\u5bc6\u7b97\u6cd5\uff0c\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u7684\u6269\u5c55\u81ea\u5df1\u7684\u7b97\u6cd5\u5230\u900f\u660e\u6570\u636e\u52a0\u5bc6\u4e2d\u3002"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u4ee5\u67e5\u770b\u8be6\u60c5"}),(0,r.jsx)(e.p,{children:"Cloudberry Database \u7740\u91cd\u5f3a\u8c03\u6570\u636e\u5b89\u5168\u6027\uff0c\u63d0\u4f9b\u4e86\u5168\u65b9\u4f4d\u7684\u5b89\u5168\u4fdd\u62a4\u63aa\u65bd\u3002\u8fd9\u4e9b\u5b89\u5168\u7279\u6027\u88ab\u8bbe\u8ba1\u4e3a\u6ee1\u8db3\u5404\u79cd\u6570\u636e\u5e93\u73af\u5883\u9700\u6c42\uff0c\u5e76\u63d0\u4f9b\u591a\u5c42\u6b21\u7684\u5b89\u5168\u9632\u62a4\uff0c\u5305\u62ec\uff1a"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u5e93\u9694\u79bb"}),"\uff1a\u5728 Cloudberry Database \u4e2d\uff0c\u6570\u636e\u5728\u5404\u6570\u636e\u5e93\u95f4\u4e0d\u5171\u4eab\uff0c\u5b9e\u73b0\u4e86\u591a\u6570\u636e\u5e93\u73af\u5883\u7684\u9694\u79bb\u3002\u5982\u679c\u9700\u8981\u8fdb\u884c\u8de8\u6570\u636e\u5e93\u8bbf\u95ee\uff0c\u53ef\u4ee5\u4f7f\u7528 DBLink \u529f\u80fd\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5185\u90e8\u6570\u636e\u7ec4\u7ec7"}),"\uff1a\u6570\u636e\u5e93\u5185\u90e8\u7684\u6570\u636e\u903b\u8f91\u7ec4\u7ec7\u5305\u62ec\u591a\u79cd\u6570\u636e\u5bf9\u8c61\uff0c\u5982\u8868\u3001\u89c6\u56fe\u3001\u7d22\u5f15\u3001\u51fd\u6570\u7b49\uff0c\u800c\u6570\u636e\u8bbf\u95ee\u5219\u53ef\u4ee5\u8de8 Schema \u8fdb\u884c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5f3a\u5927\u7684\u6570\u636e\u5b58\u50a8\u5b89\u5168\u6027"}),"\uff1aCloudberry Database \u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u5b58\u50a8\u6a21\u5f0f\u4ee5\u652f\u6301\u6570\u636e\u5197\u4f59\uff0c\u5e76\u91c7\u7528\u5404\u79cd\u52a0\u5bc6\u65b9\u6cd5\uff08\u5305\u62ec AES 128\u3001192\u3001256\uff0cDES\uff0c\u4ee5\u53ca\u56fd\u5bc6\u52a0\u5bc6\u7b49\uff09\u4ee5\u786e\u4fdd\u6570\u636e\u5b58\u50a8\u7684\u5b89\u5168\u6027\u3002\u6b64\u5916\uff0c\u8fd8\u652f\u6301\u5bc6\u6587\u8ba4\u8bc1\uff0c\u5305\u62ec SCRAM-SHA-256\u3001MD5\u3001LDAP\u3001RADIUS \u7b49\u52a0\u5bc6\u7b97\u6cd5\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7528\u6237\u6570\u636e\u4fdd\u62a4"}),"\uff1aCloudberry Database \u63d0\u4f9b\u4e86\u51fd\u6570\u52a0\u5bc6\u89e3\u5bc6\uff0c\u4ee5\u53ca\u900f\u660e\u6570\u636e\u52a0\u5bc6\u89e3\u5bc6\u3002\u900f\u660e\u6570\u636e\u52a0\u5bc6\u89e3\u5bc6\u7684\u8fc7\u7a0b\u7531 Cloudberry Database \u5185\u6838\u5b8c\u6210\uff0c\u7528\u6237\u65e0\u9700\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u53ef\u4ee5\u652f\u6301\u7684\u6570\u636e\u683c\u5f0f\u5305\u62ec Heap \u8868\uff0cAO \u884c\u5b58\u50a8\uff0cAOCS \u5217\u5b58\u50a8\u3002\u9664\u4e86\u5e38\u89c1\u7684 AES \u7b49\u52a0\u5bc6\u7b97\u6cd5\uff0c\u4e5f\u7279\u522b\u652f\u6301\u56fd\u5bc6\u7b97\u6cd5\uff0c\u4f7f\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u5730\u6269\u5c55\u81ea\u5df1\u7684\u7b97\u6cd5\u5230\u900f\u660e\u6570\u636e\u52a0\u5bc6\u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8be6\u7ec6\u7684\u6743\u9650\u8bbe\u5b9a"}),"\uff1a\u4e3a\u4e86\u6ee1\u8db3\u4e0d\u540c\u7528\u6237\u548c\u4e0d\u540c\u7ea7\u522b\u7684\u5bf9\u8c61\uff08\u4f8b\u5982\uff1aSchema\u3001\u8868\u3001\u884c\u3001\u5217\u3001\u89c6\u56fe\u3001\u51fd\u6570\u7b49\uff09\u7684\u6743\u9650\u9700\u6c42\uff0cCloudberry Database \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u6743\u9650\u8bbe\u5b9a\u9009\u9879\uff0c\u5305\u62ec ",(0,r.jsx)(e.code,{children:"SELECT"}),"\u3001",(0,r.jsx)(e.code,{children:"UPDATE"}),"\u3001\u6267\u884c\u6743\u3001\u6240\u6709\u6743\u7b49\u7b49\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6570\u636e\u52a0\u8f7d",children:"\u6570\u636e\u52a0\u8f7d"}),"\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u9ad8\u6548\u4e14\u7075\u6d3b\u7684\u6570\u636e\u52a0\u8f7d\u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u6ee1\u8db3\u5404\u79cd\u6570\u636e\u5904\u7406\u9700\u6c42\uff0c\u5305\u62ec\u5e76\u884c\u5316\u548c\u6301\u4e45\u5316\u7684\u6570\u636e\u52a0\u8f7d\u3001\u652f\u6301\u7075\u6d3b\u7684\u6570\u636e\u6e90\u548c\u6587\u4ef6\u683c\u5f0f\u3001\u96c6\u6210\u591a\u6b3e ETL \u5de5\u5177\u3001\u652f\u6301\u6d41\u5f0f\u6570\u636e\u52a0\u8f7d\u3001\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u6570\u636e\u8bbf\u95ee\u3002"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u4ee5\u67e5\u770b\u8be6\u60c5"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5e76\u884c\u5316\u548c\u6301\u4e45\u5316\u7684\u6570\u636e\u52a0\u8f7d"}),"\uff1a\u901a\u8fc7\u5916\u90e8\u8868\u6280\u672f\uff0cCloudberry Database \u652f\u6301\u5927\u6279\u91cf\u5e76\u884c\u548c\u6301\u4e45\u5316\u7684\u6570\u636e\u52a0\u8f7d\uff0c\u5b9e\u73b0\u5b57\u7b26\u96c6\u95f4\u7684\u81ea\u52a8\u8f6c\u6362\uff0c\u4f8b\u5982\u4ece GBK \u5230 UTF8\u3002\u8fd9\u4e00\u529f\u80fd\u4f7f\u5f97\u6570\u636e\u8f93\u5165\u53d8\u5f97\u66f4\u4e3a\u6d41\u7545\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7075\u6d3b\u7684\u6570\u636e\u6e90\u548c\u6587\u4ef6\u683c\u5f0f\u652f\u6301"}),"\uff1a\u65e0\u8bba\u6570\u636e\u5b58\u50a8\u5728\u5916\u90e8\u6587\u4ef6\u670d\u52a1\u5668\u3001Hive\u3001Hbase\u3001HDFS \u8fd8\u662f S3 \u7b49\u591a\u79cd\u5b58\u50a8\u4ecb\u8d28\uff0c\u6216\u662f\u5904\u4e8e CSV\u3001Text\u3001JSON\u3001ORC\u3001Parquet \u7b49\u591a\u79cd\u6587\u4ef6\u683c\u5f0f\uff0cCloudberry Database \u90fd\u80fd\u63d0\u4f9b\u652f\u6301\u3002\u5e76\u4e14\uff0c\u8be5\u6570\u636e\u5e93\u4e5f\u53ef\u4ee5\u52a0\u8f7d Zip \u7b49\u538b\u7f29\u6570\u636e\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u96c6\u6210\u591a\u6b3e ETL \u5de5\u5177"}),"\uff1aDataStage\u3001Informatica\u3001Kettle \u7b49\u591a\u6b3e ETL \u5de5\u5177\u90fd\u5df2\u96c6\u6210\u5230 Cloudberry Database \u4e2d\uff0c\u63d0\u5347\u6570\u636e\u5904\u7406\u7684\u4fbf\u5229\u6027\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u652f\u6301\u6d41\u5f0f\u6570\u636e\u52a0\u8f7d"}),"\uff1aCloudberry Database \u53ef\u9488\u5bf9\u8ba2\u9605\u7684 Kafka Topic \u542f\u52a8\u591a\u4e2a\u5e76\u884c\u8bfb\u53d6\u4efb\u52a1\uff0c\u5c06\u8bfb\u53d6\u540e\u7684\u8bb0\u5f55\u7f13\u5b58\uff0c\u5230\u8fbe\u4e00\u5b9a\u65f6\u95f4\u6216\u8bb0\u5f55\u6570\u540e\uff0c\u901a\u8fc7 gpfdist \u52a0\u8f7d\u5230\u6570\u636e\u5e93\u4e2d\u3002\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u5b8c\u6574\u6027\uff0c\u4e0d\u91cd\u4e5f\u4e0d\u4e22\uff0c\u975e\u5e38\u9002\u7528\u4e8e\u6d41\u6570\u636e\u91c7\u96c6\u548c\u5b9e\u65f6\u5206\u6790\u573a\u666f\u3002\u652f\u6301\u8fbe\u5230\u6bcf\u5206\u949f\u51e0\u5343\u4e07\u7684\u6570\u636e\u52a0\u8f7d\u541e\u5410\u91cf\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u9ad8\u6027\u80fd\u7684\u6570\u636e\u8bbf\u95ee"}),"\uff1aPXF \u662f Cloudberry Database \u7684\u5185\u7f6e\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5c06\u5916\u90e8\u6570\u636e\u6e90\u6620\u5c04\u5230 Cloudberry Database \u7684\u5916\u90e8\u8868\uff0c\u5b9e\u73b0\u5e76\u884c\u548c\u9ad8\u901f\u7684\u6570\u636e\u8bbf\u95ee\u3002PXF \u652f\u6301\u6df7\u5408\u6570\u636e\u751f\u6001\u7684\u7ba1\u7406\u548c\u8bbf\u95ee\uff0c\u5e2e\u52a9\u5b9e\u73b0 Data Fabric \u67b6\u6784\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u591a\u5c42\u5bb9\u9519",children:"\u591a\u5c42\u5bb9\u9519"}),"\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u4e3a\u4e86\u786e\u4fdd\u6570\u636e\u5b89\u5168\u548c\u670d\u52a1\u7684\u8fde\u7eed\u6027\uff0c\u91c7\u53d6\u4e86\u6570\u636e\u9875\u9762\u3001Checksum\u3001\u955c\u50cf\u8282\u70b9\u914d\u7f6e\u3001\u63a7\u5236\u8282\u70b9\u5907\u4efd\u7684\u591a\u7ea7\u5bb9\u9519\u673a\u5236\u3002"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u4ee5\u67e5\u770b\u8be6\u60c5"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u9875\u9762\u7684 Checksum"}),"\uff1a\u5728\u5e95\u5c42\u5b58\u50a8\u4e0a\uff0cCloudberry Database \u4f7f\u7528 Checksum \u673a\u5236\u8fdb\u884c\u574f\u5757\u68c0\u6d4b\uff0c\u4fdd\u8bc1\u6570\u636e\u7684\u5b8c\u6574\u6027\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u955c\u50cf\u8282\u70b9\u914d\u7f6e"}),"\uff1a\u901a\u8fc7\u5728\u6570\u636e\u8282\u70b9\u95f4\u914d\u7f6e\u955c\u50cf\u8282\u70b9\uff0cCloudberry Database \u80fd\u5b9e\u73b0\u670d\u52a1\u7684\u9ad8\u53ef\u7528\u548c\u6545\u969c\u5207\u6362\u3002\u4e00\u65e6\u68c0\u6d4b\u5230\u4e3b\u8282\u70b9\u53d1\u751f\u4e0d\u53ef\u6062\u590d\u6545\u969c\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5207\u6362\u5230\u5907\u4efd\u6570\u636e\u8282\u70b9\uff0c\u786e\u4fdd\u7528\u6237\u67e5\u8be2\u4e0d\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u63a7\u5236\u8282\u70b9\u7684\u5907\u4efd"}),"\uff1a\u7c7b\u4f3c\u4e8e\u6570\u636e\u8282\u70b9\uff0c\u63a7\u5236\u8282\u70b9\u4e5f\u53ef\u4ee5\u914d\u7f6e\u5907\u4efd\u8282\u70b9\uff0c\u4ee5\u9632\u6b62\u4e3b\u63a7\u5236\u8282\u70b9\u53d1\u751f\u6545\u969c\u3002\u4e00\u65e6\u4e3b\u63a7\u5236\u8282\u70b9\u53d1\u751f\u6545\u969c\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u5207\u6362\u5230\u5907\u4efd\u63a7\u5236\u8282\u70b9\uff0c\u786e\u4fdd\u670d\u52a1\u7684\u8fde\u7eed\u6027\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4e30\u5bcc\u7684\u6570\u636e\u5206\u6790\u652f\u6301",children:"\u4e30\u5bcc\u7684\u6570\u636e\u5206\u6790\u652f\u6301"}),"\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6570\u636e\u5206\u6790\u529f\u80fd\uff0c\u4f7f\u5f97\u6570\u636e\u5904\u7406\u3001\u67e5\u8be2\u548c\u5206\u6790\u53d8\u5f97\u66f4\u52a0\u9ad8\u6548\uff0c\u6ee1\u8db3\u5404\u7c7b\u590d\u6742\u7684\u6570\u636e\u5904\u7406\u3001\u5206\u6790\u548c\u67e5\u8be2\u9700\u6c42\u3002"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u4ee5\u67e5\u770b\u8be6\u60c5"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5e76\u884c\u4f18\u5316\u5668\u548c\u6267\u884c\u5668"}),"\uff1aCloudberry Database \u5185\u6838\u5185\u7f6e\u4e86\u5e76\u884c\u4f18\u5316\u5668\u548c\u6267\u884c\u5668\uff0c\u4e0d\u4ec5\u80fd\u591f\u517c\u5bb9 PostgreSQL \u751f\u6001\uff0c\u8fd8\u652f\u6301\u6570\u636e\u5206\u533a\u88c1\u526a\u3001\u591a\u79cd\u7d22\u5f15\u6280\u672f\uff08\u5305\u62ec BTree\uff0cBitmap\uff0cHash\uff0cBrin\uff0cGIN\u7b49\uff09\uff0c\u4ee5\u53ca JIT\uff08\u8868\u8fbe\u5f0f\u5373\u65f6\u7f16\u8bd1\u5904\u7406\uff09\u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u673a\u5668\u5b66\u4e60\u7ec4\u4ef6 - MADlib"}),"\uff1aCloudberry Database \u96c6\u6210\u4e86 MADlib \u7ec4\u4ef6\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u5168 SQL \u9a71\u52a8\u7684\u673a\u5668\u5b66\u4e60\u529f\u80fd\uff0c\u8ba9\u7b97\u6cd5\u3001\u7b97\u529b\u548c\u6570\u636e\u80fd\u591f\u6df1\u5ea6\u878d\u5408\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u652f\u6301\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00"}),"\uff1aCloudberry Database \u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u7f16\u7a0b\u8bed\u8a00\u9009\u62e9\uff0c\u5305\u62ec R\u3001Python\u3001Perl\u3001Java\u548c PostgreSQL \u7b49\uff0c\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u5730\u7f16\u5199\u81ea\u5b9a\u4e49\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u57fa\u4e8e MPP \u5f15\u64ce\u7684\u9ad8\u6027\u80fd\u5e76\u884c\u8ba1\u7b97"}),"\uff1aCloudberry Database \u7684 MPP \u5f15\u64ce\u652f\u6301\u9ad8\u6027\u80fd\u5e76\u884c\u8ba1\u7b97\uff0c\u4e0e SQL \u65e0\u7f1d\u96c6\u6210\uff0c\u53ef\u4ee5\u9488\u5bf9 SQL \u6267\u884c\u7ed3\u679c\u8fdb\u884c\u5feb\u901f\u7684\u8ba1\u7b97\u548c\u5206\u6790\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"PostGIS \u5730\u7406\u6570\u636e\u5904\u7406"}),"\uff1aCloudberry Database \u5f15\u5165\u4e86\u5347\u7ea7\u7248\u7684 PostGIS 2.X\uff0c\u652f\u6301\u5176 MPP \u67b6\u6784\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u5bf9\u5730\u7406\u7a7a\u95f4\u6570\u636e\u7684\u5904\u7406\u80fd\u529b\u3002\u4e3b\u8981\u7279\u6027\u5305\u62ec\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u96c6\u6210\u5bf9\u8c61\u5b58\u50a8\uff1a\u652f\u6301\u5927\u5bb9\u91cf\u5730\u7406\u7a7a\u95f4\u6570\u636e\u4ece\u5bf9\u8c61\u5b58\u50a8\uff08OSS\uff09\u76f4\u63a5\u52a0\u8f7d\u5165\u5e93\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5168\u9762\u7684\u7a7a\u95f4\u6570\u636e\u7c7b\u578b\u652f\u6301\uff1a\u5305\u62ec geometry\uff08\u51e0\u4f55\uff09\u3001geography\uff08\u5730\u7406\uff09\u3001Raster\uff08\u6805\u683c\uff09\u7b49\u7a7a\u95f4\u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u65f6\u7a7a\u7d22\u5f15\uff1a\u63d0\u4f9b\u65f6\u7a7a\u7d22\u5f15\u6280\u672f\uff0c\u53ef\u4ee5\u6709\u6548\u52a0\u901f\u7a7a\u95f4\u548c\u65f6\u95f4\u76f8\u5173\u7684\u67e5\u8be2\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u590d\u6742\u7684\u7a7a\u95f4\u548c\u5730\u7406\u4f4d\u7f6e\u8ba1\u7b97\uff1a\u5305\u62ec\u7403\u4f53\u957f\u5ea6\u8ba1\u7b97\u4ee5\u53ca\u7a7a\u95f4\u805a\u96c6\u51fd\u6570\uff08\u5982\u5305\u542b\u3001\u8986\u76d6\u3001\u76f8\u4ea4\u7b49\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Cloudberry Database Text \u7ec4\u4ef6"}),"\uff1a\u8fd9\u4e2a\u7ec4\u4ef6\u652f\u6301\u5229\u7528 ElasticSearch \u52a0\u901f\u6587\u4ef6\u68c0\u7d22\u80fd\u529b\uff0c\u76f8\u6bd4\u4f20\u7edf\u7684 GIN \u6570\u636e\u6587\u672c\u67e5\u8be2\u6027\u80fd\u6709\u6570\u91cf\u7ea7\u7684\u63d0\u5347\uff0c\u652f\u6301\u591a\u79cd\u5206\u8bcd\uff0c\u81ea\u7136\u8bed\u8a00\u5904\u7406\uff0c\u4ee5\u53ca\u67e5\u8be2\u7ed3\u679c\u6e32\u67d3\u7b49\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u7075\u6d3b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406",children:"\u7075\u6d3b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406"}),"\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u63d0\u4f9b\u4e86\u5168\u9762\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406\u529f\u80fd\uff0c\u65e8\u5728\u6709\u6548\u5730\u5229\u7528\u548c\u4f18\u5316\u6570\u636e\u5e93\u8d44\u6e90\uff0c\u4ee5\u786e\u4fdd\u9ad8\u6548\u3001\u7a33\u5b9a\u7684\u8fd0\u884c\u3002\u5176\u5de5\u4f5c\u8d1f\u8f7d\u7ba1\u7406\u4e3b\u8981\u5305\u62ec\u8fde\u63a5\u7ea7\u522b\u7ba1\u7406\u3001\u4f1a\u8bdd\u7ea7\u522b\u7ba1\u7406\u3001SQL \u7ea7\u522b\u7ba1\u7406\u4e09\u4e2a\u5c42\u6b21\u7684\u63a7\u5236\u3002"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u4ee5\u67e5\u770b\u8be6\u60c5"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8fde\u63a5\u6c60 PGBouncer\uff08\u8fde\u63a5\u7ea7\u522b\u7ba1\u7406\uff09"}),"\uff1a\u901a\u8fc7\u8fde\u63a5\u6c60\uff0cCloudberry Database \u5bf9\u7528\u6237\u63a5\u5165\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u9650\u5236\u540c\u65f6\u6d3b\u8dc3\u7684\u7528\u6237\u6570\u91cf\uff0c\u4ee5\u63d0\u9ad8\u6548\u7387\u5e76\u907f\u514d\u56e0\u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u670d\u52a1\u8fdb\u7a0b\u800c\u6d6a\u8d39\u8d44\u6e90\u3002\u8fde\u63a5\u6c60\u5177\u6709\u8f83\u5c0f\u7684\u5185\u5b58\u5360\u7528\uff0c\u5e76\u80fd\u591f\u652f\u6301\u9ad8\u5e76\u53d1\u8fde\u63a5\uff0c\u4f7f\u7528 libevent \u8fdb\u884c Socket \u901a\u4fe1\u4ee5\u63d0\u9ad8\u901a\u4fe1\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u8d44\u6e90\u7ec4 Resource Group\uff08\u4f1a\u8bdd\u7ea7\u522b\u7ba1\u7406\uff09"}),"\uff1a\u901a\u8fc7\u8d44\u6e90\u7ec4\uff0cCloudberry Database \u80fd\u591f\u5206\u6790\u5e76\u5206\u7c7b\u5178\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u91cf\u5316\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u6240\u9700\u7684 CPU\u3001\u5185\u5b58\u3001\u5e76\u53d1\u5ea6\u7b49\u8d44\u6e90\u3002\u8fd9\u6837\uff0c\u6839\u636e\u5de5\u4f5c\u8d1f\u8f7d\u7684\u5b9e\u9645\u9700\u6c42\uff0c\u53ef\u4ee5\u8bbe\u5b9a\u9002\u5408\u7684\u8d44\u6e90\u7ec4\uff0c\u5e76\u52a8\u6001\u8c03\u6574\u8d44\u6e90\u4f7f\u7528\uff0c\u4ee5\u786e\u4fdd\u6574\u4f53\u8fd0\u884c\u6548\u7387\u3002\u540c\u65f6\uff0c\u8fd8\u53ef\u4ee5\u5229\u7528\u89c4\u5219\u6e05\u7406\u7a7a\u95f2\u7684\u4f1a\u8bdd\uff0c\u91ca\u653e\u4e0d\u5fc5\u8981\u7684\u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u52a8\u6001\u8d44\u6e90\u7ec4\u5206\u914d\uff08SQL \u7ea7\u522b\u7ba1\u7406\uff09"}),"\uff1a\u901a\u8fc7\u52a8\u6001\u8d44\u6e90\u7ec4\u5206\u914d\uff0cCloudberry Database \u80fd\u591f\u5728 SQL \u8bed\u53e5\u6267\u884c\u524d\u6216\u6267\u884c\u8fc7\u7a0b\u4e2d\u7075\u6d3b\u5730\u5206\u914d\u8d44\u6e90\uff0c\u4ee5\u4fbf\u4f18\u5f85\u7279\u5b9a\u7684\u67e5\u8be2\uff0c\u7f29\u77ed\u5176\u8fd0\u884c\u65f6\u95f4\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u591a\u79cd\u517c\u5bb9\u6027",children:"\u591a\u79cd\u517c\u5bb9\u6027"}),"\n",(0,r.jsx)(e.p,{children:"Cloudberry Database \u7684\u517c\u5bb9\u6027\u8868\u73b0\u5728 SQL \u8bed\u6cd5\u3001\u7ec4\u4ef6\u3001\u5de5\u5177\u548c\u7a0b\u5e8f\u3001\u786c\u4ef6\u5e73\u53f0\u548c\u64cd\u4f5c\u7cfb\u7edf\u7b49\u591a\u4e2a\u65b9\u9762\uff0c\u8fd9\u4f7f\u5f97\u5b83\u80fd\u591f\u7075\u6d3b\u5e94\u5bf9\u5404\u79cd\u5de5\u5177\u3001\u5e73\u53f0\u548c\u8bed\u8a00\u3002"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u4ee5\u67e5\u770b\u8be6\u60c5"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"SQL \u517c\u5bb9\u6027"}),"\uff1aCloudberry Database \u517c\u5bb9 PostgreSQL \u548c Greenplum \u8bed\u6cd5\uff0c\u652f\u6301 SQL-92\uff0cSQL-99\uff0c\u4ee5\u53ca SQL 2003 \u6807\u51c6\uff0c\u5305\u62ec SQL 2003 OLAP \u6269\u5c55\uff0c\u5982\u7a97\u53e3\u51fd\u6570\uff0c",(0,r.jsx)(e.code,{children:"rollup"}),"\uff0c",(0,r.jsx)(e.code,{children:"cube"})," \u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7ec4\u4ef6\u517c\u5bb9\u6027"}),"\uff1a\u57fa\u4e8e PostgreSQL 14.4 \u5185\u6838\uff0cCloudberry Database \u517c\u5bb9\u5e02\u9762\u4e0a\u5e38\u7528\u7684\u5927\u591a\u6570 PostgreSQL \u7ec4\u4ef6\u548c\u6269\u5c55\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5de5\u5177\u548c\u7a0b\u5e8f\u517c\u5bb9\u6027"}),"\uff1a\u4e0e\u591a\u79cd BI \u5de5\u5177\u3001\u6316\u6398\u9884\u6d4b\u5de5\u5177\u3001ETL \u5de5\u5177\uff0c\u4ee5\u53ca J2EE/.NET \u5e94\u7528\u7a0b\u5e8f\u90fd\u6709\u826f\u597d\u7684\u8fde\u901a\u6027\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u786c\u4ef6\u5e73\u53f0\u517c\u5bb9\u6027"}),"\uff1a\u80fd\u591f\u5728\u591a\u79cd\u786c\u4ef6\u67b6\u6784\u4e0b\u8fd0\u884c\uff0c\u5305\u62ec X86\u3001ARM\u3001\u98de\u817e\u3001\u9cb2\u9e4f\u3001\u6d77\u5149\u7b49\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u64cd\u4f5c\u7cfb\u7edf\u517c\u5bb9\u6027"}),"\uff1a\u517c\u5bb9\u591a\u79cd\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\uff0c\u5982 CentOS\u3001Ubuntu\u3001Kylin\u3001BC-Linux \u7b49\u3002"]}),"\n"]}),"\n"]})]})]})}function o(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},11151:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>d});var r=s(67294);const l={},i=r.createContext(l);function d(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);