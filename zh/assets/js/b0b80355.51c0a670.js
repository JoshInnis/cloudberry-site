"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3478],{81341:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(85893),r=i(11151);const t={title:"pg_config"},o="pg_config",l={id:"sys-utilities/pg-config",title:"pg_config",description:"Retrieves information about the installed version of Cloudberry Database.",source:"@site/docs/sys-utilities/pg-config.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/pg-config",permalink:"/zh/docs/sys-utilities/pg-config",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/pg-config.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732177246,formattedLastUpdatedAt:"2024\u5e7411\u670821\u65e5",frontMatter:{title:"pg_config"},sidebar:"docsbars",previous:{title:"pg_checksums",permalink:"/zh/docs/sys-utilities/pg-checksums"},next:{title:"pg_dump",permalink:"/zh/docs/sys-utilities/pg-dump"}},d={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pg_config",children:"pg_config"}),"\n",(0,s.jsx)(n.p,{children:"Retrieves information about the installed version of Cloudberry Database."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pg_config [<option> ...]\n\npg_config -? | --help\n\npg_config --version\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"pg_config"})," utility prints configuration parameters of the currently installed version of Cloudberry Database. It is intended, for example, to be used by software packages that want to interface to Cloudberry Database to facilitate finding the required header files and libraries. Note that information printed out by ",(0,s.jsx)(n.code,{children:"pg_config"})," is for the Cloudberry Database coordinator only."]}),"\n",(0,s.jsx)(n.p,{children:"If more than one option is given, the information is printed in that order, one item per line. If no options are given, all available information is printed, with labels."}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--bindir"})})}),"\n",(0,s.jsxs)(n.p,{children:["Print the location of user executables. Use this, for example, to find the ",(0,s.jsx)(n.code,{children:"psql"})," program. This is normally also the location where the ",(0,s.jsx)(n.code,{children:"pg_config"})," program resides."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--docdir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of documentation files."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--includedir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of C header files of the client interfaces."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--pkgincludedir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of other C header files."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--includedir-server"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of C header files for server programming."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--libdir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of object code libraries."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--pkglibdir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of dynamically loadable modules, or where the server would search for them. (Other architecture-dependent data files may also be installed in this directory.)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--localedir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of locale support files."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--mandir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of manual pages."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--sharedir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of architecture-independent support files."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--sysconfdir"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of system-wide configuration files."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--pgxs"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the location of extension makefiles."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--configure"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the options that were given to the configure script when Cloudberry Database was configured for building."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--cc"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the value of the CC variable that was used for building Cloudberry Database. This shows the C compiler used."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--cppflags"})})}),"\n",(0,s.jsxs)(n.p,{children:["Print the value of the ",(0,s.jsx)(n.code,{children:"CPPFLAGS"})," variable that was used for building Cloudberry Database. This shows C compiler switches needed at preprocessing time."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--cflags"})})}),"\n",(0,s.jsxs)(n.p,{children:["Print the value of the ",(0,s.jsx)(n.code,{children:"CFLAGS"})," variable that was used for building Cloudberry Database. This shows C compiler switches."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--cflags_sl"})})}),"\n",(0,s.jsxs)(n.p,{children:["Print the value of the ",(0,s.jsx)(n.code,{children:"CFLAGS_SL"})," variable that was used for building Cloudberry Database. This shows extra C compiler switches used for building shared libraries."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--ldflags"})})}),"\n",(0,s.jsxs)(n.p,{children:["Print the value of the ",(0,s.jsx)(n.code,{children:"LDFLAGS"})," variable that was used for building Cloudberry Database. This shows linker switches."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--ldflags_ex"})})}),"\n",(0,s.jsxs)(n.p,{children:["Print the value of the ",(0,s.jsx)(n.code,{children:"LDFLAGS_EX"})," variable that was used for building Cloudberry Database. This shows linker switches that were used for building executables only."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--ldflags_sl"})})}),"\n",(0,s.jsxs)(n.p,{children:["Print the value of the ",(0,s.jsx)(n.code,{children:"LDFLAGS_SL"})," variable that was used for building Cloudberry Database. This shows linker switches used for building shared libraries only."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--libs"})})}),"\n",(0,s.jsxs)(n.p,{children:["Print the value of the ",(0,s.jsx)(n.code,{children:"LIBS"})," variable that was used for building Cloudberry Database. This normally contains ",(0,s.jsx)(n.code,{children:"-l"})," switches for external libraries linked into Cloudberry Database."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"--version"})})}),"\n",(0,s.jsx)(n.p,{children:"Print the version of Cloudberry Database."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"To reproduce the build configuration of the current Cloudberry Database installation, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"eval ./configure 'pg_config --configure'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The output of ",(0,s.jsx)(n.code,{children:"pg_config --configure"})," contains shell quotation marks so arguments with spaces are represented correctly. Therefore, using ",(0,s.jsx)(n.code,{children:"eval"})," is required for proper results."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(67294);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);