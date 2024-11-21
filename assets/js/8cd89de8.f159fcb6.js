"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4729],{70942:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var s=a(85893),r=a(11151);const d={title:"Deploy Manually Using RPM Package"},o="Deploy Cloudberry Database Manually Using RPM Package",t={id:"cbdb-op-deploy-guide",title:"Deploy Manually Using RPM Package",description:"This document introduces how to manually deploy Cloudberry Database on physical machines using RPM package. Before reading this document, it is recommended to first read the Software and Hardware Configuration Requirements and Prepare to Deploy Cloudberry Database on Physical Machine.",source:"@site/docs/cbdb-op-deploy-guide.md",sourceDirName:".",slug:"/cbdb-op-deploy-guide",permalink:"/docs/cbdb-op-deploy-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/cbdb-op-deploy-guide.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1732177246,formattedLastUpdatedAt:"Nov 21, 2024",frontMatter:{title:"Deploy Manually Using RPM Package"},sidebar:"docsbars",previous:{title:"Prepare to Deploy",permalink:"/docs/cbdb-op-prepare-to-deploy"},next:{title:"Deploy with a Single Computing Node",permalink:"/docs/deploy-cbdb-with-single-node"}},i={},c=[{value:"Step 1: Prepare server nodes",id:"step-1-prepare-server-nodes",level:2},{value:"Step 2. Install the RPM package",id:"step-2-install-the-rpm-package",level:2},{value:"Step 3. Configure mutual trust between nodes",id:"step-3-configure-mutual-trust-between-nodes",level:2},{value:"Step 4. Initialize Cloudberry Database",id:"step-4-initialize-cloudberry-database",level:2},{value:"Step 5. Log into Cloudberry Database",id:"step-5-log-into-cloudberry-database",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-cloudberry-database-manually-using-rpm-package",children:"Deploy Cloudberry Database Manually Using RPM Package"}),"\n",(0,s.jsxs)(n.p,{children:["This document introduces how to manually deploy Cloudberry Database on physical machines using RPM package. Before reading this document, it is recommended to first read the ",(0,s.jsx)(n.a,{href:"/docs/cbdb-op-software-hardware",children:"Software and Hardware Configuration Requirements"})," and ",(0,s.jsx)(n.a,{href:"/docs/cbdb-op-prepare-to-deploy",children:"Prepare to Deploy Cloudberry Database on Physical Machine"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The deployment method in this document is for production environments."}),"\n",(0,s.jsx)(n.p,{children:"The example in this document uses CentOS 7.6 and deploys Cloudberry Database v1.0.0. The main steps are as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-1-prepare-server-nodes",children:"Prepare node servers"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-2-install-the-rpm-package",children:"Install the RPM package"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-3-configure-mutual-trust-between-nodes",children:"Configure mutual trust between nodes"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-4-initialize-cloudberry-database",children:"Initialize the database"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#step-5-log-into-cloudberry-database",children:"Log into the database"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-prepare-server-nodes",children:"Step 1: Prepare server nodes"}),"\n",(0,s.jsxs)(n.p,{children:["Read the ",(0,s.jsx)(n.a,{href:"/docs/cbdb-op-prepare-to-deploy",children:"Prepare to Deploy Cloudberry Database on Physical Machine"})," document to prepare the server nodes."]}),"\n",(0,s.jsx)(n.h2,{id:"step-2-install-the-rpm-package",children:"Step 2. Install the RPM package"}),"\n",(0,s.jsxs)(n.p,{children:["After the preparation, it is time to install Cloudberry Database. You need to download the corresponding RPM package from ",(0,s.jsx)(n.a,{href:"https://github.com/cloudberrydb/cloudberrydb/releases",children:"Cloudberry Database Releases"}),", and then install the database on each node using the installation package."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the RPM package to the home directory of ",(0,s.jsx)(n.code,{children:"gpadmin"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget -P /home/gpadmin <download address>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install the RPM package in the ",(0,s.jsx)(n.code,{children:"/home/gpadmin"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["When running the following command, you need to replace ",(0,s.jsx)(n.code,{children:"<RPM package path>"})," with the actual RPM package path, as the ",(0,s.jsx)(n.code,{children:"root"})," user. During the installation, the directory ",(0,s.jsx)(n.code,{children:"/usr/local/cloudberry-db/"})," is automatically created."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /home/gpadmin\nyum install <RPM package path>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Grant the ",(0,s.jsx)(n.code,{children:"gpadmin"})," user the permission to access the ",(0,s.jsx)(n.code,{children:"/usr/local/cloudberry-db/"})," directory."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chown -R gpadmin:gpadmin /usr/local\nchown -R gpadmin:gpadmin /usr/local/cloudberry*\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-3-configure-mutual-trust-between-nodes",children:"Step 3. Configure mutual trust between nodes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Switch to the ",(0,s.jsx)(n.code,{children:"gpadmin"})," user, and use the ",(0,s.jsx)(n.code,{children:"gpadmin"})," user for subsequent operations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a configuration file for node information."}),"\n",(0,s.jsxs)(n.p,{children:["Create the node configuration file in the ",(0,s.jsx)(n.code,{children:"/home/gpadmin/"})," directory, including the ",(0,s.jsx)(n.code,{children:"all_hosts"})," and ",(0,s.jsx)(n.code,{children:"seg_hosts"})," files, which store the host information of all nodes and data nodes respectively. The example node information is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[gpadmin@cbdb-coordinator gpadmin]$ cat all_hosts\n\ncbdb-coordinator\ncbdb-standbycoordinator\ncbdb-datanode01\ncbdb-datanode02\ncbdb-datanode03\n\n[gpadmin@cbdb-coordinator gpadmin]$ cat seg_hosts\n\ncbdb-datanode01\ncbdb-datanode02\ncbdb-datanode03\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure SSH trust between hosts."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"ssh-keygen"})," on each host to generate SSH key. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[gpadmin@cbbd-coordinator cloudberry-db-1.0.0]$ ssh-keygen\n\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/usr/local/cloudberry-db/.ssh/id_rsa):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /usr/local/cloudberry-db/.ssh/id_rsa.\nYour public key has been saved in /usr/local/cloudberry-db/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:cvcYS87egYCyh/v6UtdqrejVU5qqF7OvpcHg/T9lRrg gpadmin@cbbd-coordinator\nThe key's randomart image is:\n+---[RSA 2048]----+\n|                 |\n|                 |\n|       +         |\n|+      O         |\n|o ...  S         |\n|. +o=  B C       |\n| o B=00 D        |\n|.o=o0o.. =       |\n|O=++*+o+..       |\n+----[SHA256]-----+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"ssh-copy-id"})," on each host to configure password-free login. The example is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh-copy-id  cbdb-coordinator\nssh-copy-id  cbdb-standbycoordinator\nssh-copy-id  cbdb-datanode01\nssh-copy-id  cbdb-datanode02\nssh-copy-id  cbdb-datanode03\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify that SSH between nodes is all connected, that is, the password-free login between servers is successful. The example is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[gpadmin@cbdb-coordinator ~]$ gpssh -f all_hosts\n=> pwd\n[ cbdb-datanode03] b'/usr/local/cloudberry-db\\r'\n[ cbdb-coordinator] b'/usr/local/cloudberry-db\\r'\n[ cbdb-datanode02] b'/usr/local/cloudberry-db\\r'\n[cbdb-standbycoordinator] b'/usr/local/cloudberry-db\\r'\n[ cbdb-datanode01] b'/usr/local/cloudberry-db\\r'\n=>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you fail to run ",(0,s.jsx)(n.code,{children:"gpssh"}),", you can first run ",(0,s.jsx)(n.code,{children:"source /usr/local/cloudberry-db/greenplum_path.sh"})," on the coordinator node."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-4-initialize-cloudberry-database",children:"Step 4. Initialize Cloudberry Database"}),"\n",(0,s.jsxs)(n.p,{children:["Before performing the following operations, run ",(0,s.jsx)(n.code,{children:"su - gpadmin"})," to switch to the ",(0,s.jsx)(n.code,{children:"gpadmin"})," user."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add a new line of ",(0,s.jsx)(n.code,{children:"source"})," command to the ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," files of all nodes (coordinator/standby coordinator/segment). The example is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source /usr/local/cloudberry-db/greenplum_path.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the ",(0,s.jsx)(n.code,{children:"source"})," command to make the newly added content effective:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"gpssh"})," command on the coordinator node to create data directories and mirror directories for segment nodes. In this document, the 2 directories are ",(0,s.jsx)(n.code,{children:"/data0/primary/"})," and ",(0,s.jsx)(n.code,{children:"/data0/mirror/"}),", respectively. The example is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gpssh -f seg_hosts\nmkdir -p /data0/primary/\nmkdir -p /data0/mirror/\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create data directory on the coordinator node. In this document, the directory is ",(0,s.jsx)(n.code,{children:"/data0/coordinator/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p /data0/coordinator/\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"gpssh"})," command on the coordinator node to create data directory for the standby node. In this document, the directory is ",(0,s.jsx)(n.code,{children:"/data0/coordinator/"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gpssh -h cbdb-standbycoordinator -e 'mkdir -p /data0/coordinator/'\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["On the hosts of the coordinator and standby nodes, add a line to the ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," file to declare the path of ",(0,s.jsx)(n.code,{children:"COORDINATOR_DATA_DIRECTORY"}),", which is ",(0,s.jsx)(n.code,{children:"{the path step 5}"})," + ",(0,s.jsx)(n.code,{children:"gpseg-1"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export COORDINATOR_DATA_DIRECTORY=/data0/coordinator/gpseg-1\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the following command on the hosts of the coordinator and standby nodes to make the declaration of ",(0,s.jsx)(n.code,{children:"COORDINATOR_DATA_DIRECTORY"})," in the previous step effective."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure the ",(0,s.jsx)(n.code,{children:"gpinitsystem_config"})," initialization script:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On the host where the coordinator node is located, copy the template configuration file to the current directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp $GPHOME/docs/cli_help/gpconfigs/gpinitsystem_config .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"gpinitsystem_config"})," file as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pay attention to the port, coordinator node, segment node, and mirror node."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify ",(0,s.jsx)(n.code,{children:"DATA_DIRECTORY"})," to the data directory of the segment node, for example, ",(0,s.jsx)(n.code,{children:"/data0/primary"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify ",(0,s.jsx)(n.code,{children:"COORDINATOR_HOSTNAME"})," to the hostname of the coordinator node, for example, ",(0,s.jsx)(n.code,{children:"cbdb-coordinator"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify ",(0,s.jsx)(n.code,{children:"COORDINATOR_DIRECTORY"})," to the data directory of the coordinator node, for example, ",(0,s.jsx)(n.code,{children:"/data0/coordinator"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify ",(0,s.jsx)(n.code,{children:"MIRROR_DATA_DIRECTORY"})," to the data directory of the mirror node, for example, ",(0,s.jsx)(n.code,{children:"/data0/mirror"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[gpadmin@cbdb-coordinator ~]$ cat gpinitsystem_config\n# FILE NAME: gpinitsystem_config\n\n# Configuration file needed by the gpinitsystem\n\n########################################\n#### REQUIRED PARAMETERS\n########################################\n\n#### Naming convention for utility-generated data directories.\nSEG_PREFIX=gpseg\n\n#### Base number by which primary segment port numbers\n#### are calculated.\nPORT_BASE=6000\n\n#### File system location(s) where primary segment data directories\n#### will be created. The number of locations in the list dictate\n#### the number of primary segments that will get created per\n#### physical host (if multiple addresses for a host are listed in\n#### the hostfile, the number of segments will be spread evenly across\n#### the specified interface addresses).\ndeclare -a DATA_DIRECTORY=(/data0/primary)\n\n#### OS-configured hostname or IP address of the coordinator host.\nCOORDINATOR_HOSTNAME=cbdb-coordinator\n\n#### File system location where the coordinator data directory\n#### will be created.\nCOORDINATOR_DIRECTORY=/data0/coordinator\n\n#### Port number for the coordinator instance.\nCOORDINATOR_PORT=5432\n\n#### Shell utility used to connect to remote hosts.\nTRUSTED_SHELL=ssh\n\n#### Default server-side character set encoding.\nENCODING=UNICODE\n\n########################################\n#### OPTIONAL MIRROR PARAMETERS\n########################################\n\n#### Base number by which mirror segment port numbers\n#### are calculated.\nMIRROR_PORT_BASE=7000\n\n#### File system location(s) where mirror segment data directories\n#### will be created. The number of mirror locations must equal the\n#### number of primary locations as specified in the\n#### DATA_DIRECTORY parameter.\ndeclare -a MIRROR_DATA_DIRECTORY=(/data0/mirror)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To create a default database during initialization, you need to fill in the database name. In this example, the ",(0,s.jsx)(n.code,{children:"warehouse"})," database is created during initialization"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:"########################################\n#### OTHER OPTIONAL PARAMETERS\n########################################\n\n#### Create a database of this name after initialization.\nDATABASE_NAME=warehouse\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"gpinitsystem"})," to initialize Cloudberry Database. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gpinitsystem -c  gpinitsystem_config -h /home/gpadmin/seg_hosts\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the command above, ",(0,s.jsx)(n.code,{children:"-c"})," specifies the configuration file and ",(0,s.jsx)(n.code,{children:"-h"})," specifies the computing node list."]}),"\n",(0,s.jsx)(n.p,{children:"If you need to initialize the standby coordinator node, refer to the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"gpinitstandby -s cbdb-standbycoordinator\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-5-log-into-cloudberry-database",children:"Step 5. Log into Cloudberry Database"}),"\n",(0,s.jsx)(n.p,{children:"Now you have successfully deployed Cloudberry Database. To log into the database, refer to the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"psql -h <hostname> -p <port> -U <username> -d <database>\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the command above:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<hostname>"})," is the IP address of the coordinator node of the Cloudberry Database server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<port>"})," is the default port number of Cloudberry Database, which is ",(0,s.jsx)(n.code,{children:"5432"})," by default."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<username>"})," is the user name of the database."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<database>"})," is the name of the database to connect."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After you run the ",(0,s.jsx)(n.code,{children:"psql"})," command, the system will prompt you to enter the database password. After you enter the correct password, you will successfully log into the Cloudberry Database and can perform SQL queries and operations. Make sure that you have the correct permissions to access the target database."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'[gpadmin@cddb-coordinator ~]$ psql warehouse\npsql (14.4, server 14.4)\nType "help" for help.\n\nwarehouse=# SELECT * FROM gp_segment_configuration;\ndbid | content | role | preferred_role | mode | status | port  | hostname             | address               | datadir\n------------------------------------------------------------------------------------------\n1    | -1      | p    | p              | n    | u      | 5432 | cddb-coordinator          | cddb-coordinator           | /data0/coordinator/gpseg-1\n8    | -1      | m    | m              | s    | u      | 5432 | cddb-standbycoordinator   | cddb-standbycoordinator    | /data0/coordinator/gpseg-1\n2    | 0       | p    | p              | s    | u      | 6000 | cddb-datanode01      | cddb-datanode01       | /data0/primary/gpseg0\n5    | 0       | m    | m              | s    | u      | 7000 | cddb-datanode02      | cddb-datanode02       | /data0/mirror/gpseg0\n3    | 1       | p    | p              | s    | u      | 6000 | cddb-datanode02      | cddb-datanode02       | /data0/primary/gpseg1\n6    | 1       | m    | m              | s    | u      | 7000 | cddb-datanode03      | cddb-datanode03       | /data0/mirror/gpseg1\n4    | 2       | p    | p              | s    | u      | 6000 | cddb-datanode03      | cddb-datanode03       | /data0/primary/gpseg2\n7    | 2       | m    | m              | s    | u      | 7000 | cddb-datanode01      | cddb-datanode01       | /data0/mirror/gpseg2\n(8 rows)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>o});var s=a(67294);const r={},d=s.createContext(r);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);