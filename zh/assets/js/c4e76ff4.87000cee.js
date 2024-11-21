"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8860],{18539:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>h,toc:()=>d});var n=s(85893),r=s(11151);const i={title:"gpcheckperf"},o="gpcheckperf",h={id:"sys-utilities/gpcheckperf",title:"gpcheckperf",description:"Verifies the baseline hardware performance of the specified hosts.",source:"@site/docs/sys-utilities/gpcheckperf.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpcheckperf",permalink:"/zh/docs/sys-utilities/gpcheckperf",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpcheckperf.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732177246,formattedLastUpdatedAt:"2024\u5e7411\u670821\u65e5",frontMatter:{title:"gpcheckperf"},sidebar:"docsbars",previous:{title:"gpcheckcat",permalink:"/zh/docs/sys-utilities/gpcheckcat"},next:{title:"gpconfig",permalink:"/zh/docs/sys-utilities/gpconfig"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"gpcheckperf",children:"gpcheckperf"}),"\n",(0,n.jsx)(t.p,{children:"Verifies the baseline hardware performance of the specified hosts."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"gpcheckperf -d <test_directory> [-d <test_directory> ...] \n\xa0\xa0\xa0\xa0{-f\xa0<hostfile_gpcheckperf> | - h <hostname> [-h hostname ...]} \n\xa0\xa0\xa0\xa0[-r ds] [-B <block_size>] [-S <file_size>] [-D] [-v|-V]\n\ngpcheckperf -d <temp_directory>\n\xa0\xa0\xa0\xa0{-f\xa0<hostfile_gpchecknet> | - h <hostname> [-h< hostname> ...]} \n\xa0\xa0\xa0\xa0[ -r n|N|M [--duration <time>] [--netperf] ] [-D] [-v | -V]\n\ngpcheckperf -?\n\ngpcheckperf --version\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"gpcheckperf"})," utility starts a session on the specified hosts and runs the following performance tests:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Disk I/O Test (dd test)"})," \u2014 To test the sequential throughput performance of a logical disk or file system, the utility uses the ",(0,n.jsx)(t.strong,{children:"dd"})," command, which is a standard UNIX utility. It times how long it takes to write and read a large file to and from disk and calculates your disk I/O performance in megabytes (MB) per second. By default, the file size that is used for the test is calculated at two times the total random access memory (RAM) on the host. This ensures that the test is truly testing disk I/O and not using the memory cache."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Memory Bandwidth Test (stream)"})," \u2014 To test memory bandwidth, the utility uses the STREAM benchmark program to measure sustainable memory bandwidth (in MB/s). This tests that your system is not limited in performance by the memory bandwidth of the system in relation to the computational performance of the CPU. In applications where the data set is large (as in Cloudberry Database), low memory bandwidth is a major performance issue. If memory bandwidth is significantly lower than the theoretical bandwidth of the CPU, then it can cause the CPU to spend significant amounts of time waiting for data to arrive from system memory."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.em,{children:[(0,n.jsx)(t.em,{children:"Network Performance Test (gpnetbench"}),")"]}),"* \u2014 To test network performance (and thereby the performance of the Cloudberry Database interconnect), the utility runs a network benchmark program that transfers a 5 second stream of data from the current host to each remote host included in the test. The data is transferred in parallel to each remote host and the minimum, maximum, average and median network transfer rates are reported in megabytes (MB) per second. If the summary transfer rate is slower than expected (less than 100 MB/s), you can run the network test serially using the ",(0,n.jsx)(t.code,{children:"-r n"})," option to obtain per-host results. To run a full-matrix bandwidth test, you can specify ",(0,n.jsx)(t.code,{children:"-r M"})," which will cause every host to send and receive data from every other host specified. This test is best used to validate if the switch fabric can tolerate a full-matrix workload."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To specify the hosts to test, use the ",(0,n.jsx)(t.code,{children:"-f"})," option to specify a file containing a list of host names, or use the ",(0,n.jsx)(t.code,{children:"-h"})," option to name single host names on the command-line. If running the network performance test, all entries in the host file must be for network interfaces within the same subnet. If your segment hosts have multiple network interfaces configured on different subnets, run the network test once for each subnet."]}),"\n",(0,n.jsxs)(t.p,{children:["You must also specify at least one test directory (with ",(0,n.jsx)(t.code,{children:"-d"}),"). The user who runs ",(0,n.jsx)(t.code,{children:"gpcheckperf"})," must have write access to the specified test directories on all remote hosts. For the disk I/O test, the test directories should correspond to your segment data directories (primary and/or mirrors). For the memory bandwidth and network tests, a temporary directory is required for the test program files."]}),"\n",(0,n.jsxs)(t.p,{children:["Before using ",(0,n.jsx)(t.code,{children:"gpcheckperf"}),", you must have a trusted host setup between the hosts involved in the performance test. You can use the utility ",(0,n.jsx)(t.code,{children:"gpssh-exkeys"})," to update the known host files and exchange public keys between hosts if you have not done so already. Note that ",(0,n.jsx)(t.code,{children:"gpcheckperf"})," calls to ",(0,n.jsx)(t.code,{children:"gpssh"})," and ",(0,n.jsx)(t.code,{children:"gpsync"}),", so these Cloudberry utilities must also be in your ",(0,n.jsx)(t.code,{children:"$PATH"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-B block_size"})})}),"\n",(0,n.jsx)(t.p,{children:"Specifies the block size (in KB or MB) to use for disk I/O test. The default is 32KB, which is the same as the Cloudberry Database page size. The maximum block size is 1 MB."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-d test_directory"})})}),"\n",(0,n.jsxs)(t.p,{children:["For the disk I/O test, specifies the file system directory locations to test. You must have write access to the test directory on all hosts involved in the performance test. You can use the ",(0,n.jsx)(t.code,{children:"-d"})," option multiple times to specify multiple test directories (for example, to test disk I/O of your primary and mirror data directories)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-d temp_directory"})})}),"\n",(0,n.jsx)(t.p,{children:"For the network and stream tests, specifies a single directory where the test program files will be copied for the duration of the test. You must have write access to this directory on all hosts involved in the test."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-D (display per-host results)"})})}),"\n",(0,n.jsx)(t.p,{children:"Reports performance results for each host for the disk I/O tests. The default is to report results for just the hosts with the minimum and maximum performance, as well as the total and average performance of all hosts."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"--duration time"})})}),"\n",(0,n.jsx)(t.p,{children:"Specifies the duration of the network test in seconds (s), minutes (m), hours (h), or days (d). The default is 15 seconds."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-f hostfile_gpcheckperf"})})}),"\n",(0,n.jsx)(t.p,{children:"For the disk I/O and stream tests, specifies the name of a file that contains one host name per host that will participate in the performance test. The host name is required, and you can optionally specify an alternate user name and/or SSH port number per host. The syntax of the host file is one host per line as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"[<username>@]<hostname>[:<ssh_port>]\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-f hostfile_gpchecknet"})})}),"\n",(0,n.jsx)(t.p,{children:"For the network performance test, all entries in the host file must be for host addresses within the same subnet. If your segment hosts have multiple network interfaces configured on different subnets, run the network test once for each subnet. For example (a host file containing segment host address names for interconnect subnet 1):"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"sdw1-1\nsdw2-1\nsdw3-1\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-h hostname"})})}),"\n",(0,n.jsxs)(t.p,{children:["Specifies a single host name (or host address) that will participate in the performance test. You can use the ",(0,n.jsx)(t.code,{children:"-h"})," option multiple times to specify multiple host names."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"--netperf"})})}),"\n",(0,n.jsxs)(t.p,{children:["Specifies that the ",(0,n.jsx)(t.code,{children:"netperf"})," binary should be used to perform the network test instead of the Cloudberry network test. To use this option, you must download ",(0,n.jsx)(t.code,{children:"netperf"})," from ",(0,n.jsx)(t.a,{href:"https://github.com/HewlettPackard/netperf",children:"https://github.com/HewlettPackard/netperf"})," and install it into ",(0,n.jsx)(t.code,{children:"$GPHOME/bin/lib"})," on all Cloudberry hosts (coordinator and segments)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-r ds{n|N|M}"})})}),"\n",(0,n.jsxs)(t.p,{children:["Specifies which performance tests to run. The default is ",(0,n.jsx)(t.code,{children:"dsn"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Disk I/O test (",(0,n.jsx)(t.code,{children:"d"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Stream test (",(0,n.jsx)(t.code,{children:"s"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Network performance test in sequential (",(0,n.jsx)(t.code,{children:"n"}),"), parallel (",(0,n.jsx)(t.code,{children:"N"}),"), or full-matrix (",(0,n.jsx)(t.code,{children:"M"}),") mode. The optional ",(0,n.jsx)(t.code,{children:"--duration"})," option specifies how long (in seconds) to run the network test. To use the parallel (",(0,n.jsx)(t.code,{children:"N"}),") mode, you must run the test on an even number of hosts."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you would rather use ",(0,n.jsx)(t.code,{children:"netperf"})," (",(0,n.jsx)(t.a,{href:"https://github.com/HewlettPackard/netperf",children:"https://github.com/HewlettPackard/netperf"}),") instead of the Cloudberry network test, you can download it and install it into ",(0,n.jsx)(t.code,{children:"$GPHOME/bin/lib"})," on all Cloudberry hosts (coordinator and segments). You would then specify the optional ",(0,n.jsx)(t.code,{children:"--netperf"})," option to use the ",(0,n.jsx)(t.code,{children:"netperf"})," binary instead of the default ",(0,n.jsx)(t.code,{children:"gpnetbench*"})," utilities."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-S file_size"})})}),"\n",(0,n.jsxs)(t.p,{children:["Specifies the total file size to be used for the disk I/O test for all directories specified with ",(0,n.jsx)(t.code,{children:"-d"}),". file_size should equal two times total RAM on the host. If not specified, the default is calculated at two times the total RAM on the host where ",(0,n.jsx)(t.code,{children:"gpcheckperf"})," is run. This ensures that the test is truly testing disk I/O and not using the memory cache. You can specify sizing in KB, MB, or GB."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-v (verbose) | -V (very verbose)"})})}),"\n",(0,n.jsx)(t.p,{children:"Verbose mode shows progress and status messages of the performance tests as they are run. Very verbose mode shows all output messages generated by this utility."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"--version"})})}),"\n",(0,n.jsx)(t.p,{children:"Displays the version of this utility."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-? (help)"})})}),"\n",(0,n.jsx)(t.p,{children:"Displays the online help."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Run the disk I/O and memory bandwidth tests on all the hosts in the file host_file using the test directory of /data1 and /data2:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ gpcheckperf -f hostfile_gpcheckperf -d /data1 -d /data2 -r ds\n"})}),"\n",(0,n.jsx)(t.p,{children:"Run only the disk I/O test on the hosts named sdw1 and sdw2using the test directory of /data1. Show individual host results and run in verbose mode:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ gpcheckperf -h sdw1 -h sdw2 -d /data1 -r d -D -v\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Run the parallel network test using the test directory of ",(0,n.jsx)(t.code,{children:"/tmp"}),", where ",(0,n.jsx)(t.code,{children:"hostfile_gpcheck_ic*"})," specifies all network interface host address names within the same interconnect subnet:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ gpcheckperf -f hostfile_gpchecknet_ic1 -r N -d /tmp\n$ gpcheckperf -f hostfile_gpchecknet_ic2 -r N -d /tmp\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Run the same test as above, but use ",(0,n.jsx)(t.code,{children:"netperf"})," instead of the Cloudberry network test (note that ",(0,n.jsx)(t.code,{children:"netperf"})," must be installed in ",(0,n.jsx)(t.code,{children:"$GPHOME/bin/lib"})," on all Cloudberry hosts):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ gpcheckperf -f hostfile_gpchecknet_ic1 -r N --netperf -d /tmp\n$ gpcheckperf -f hostfile_gpchecknet_ic2 -r N --netperf -d /tmp\n"})}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/zh/docs/sys-utilities/gpssh",children:"gpssh"}),", ",(0,n.jsx)(t.a,{href:"/zh/docs/sys-utilities/gpsync",children:"gpsync"})]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>h,a:()=>o});var n=s(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);