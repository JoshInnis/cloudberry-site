"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1893],{90147:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(85893),t=n(11151);const r={title:"[101-2] Lesson 2: Create and Prepare Database",description:"Let's create one new database in the Cloudberry Database."},i=void 0,l={type:"mdx",permalink:"/zh/bootcamp/101-2-create-and-prepare-database",source:"@site/i18n/zh/docusaurus-plugin-content-pages/bootcamp/101-2-create-and-prepare-database.md",title:"[101-2] Lesson 2: Create and Prepare Database",description:"Let's create one new database in the Cloudberry Database.",frontMatter:{title:"[101-2] Lesson 2: Create and Prepare Database",description:"Let's create one new database in the Cloudberry Database."},unlisted:!1},c={},d=[{value:"Quick-start operations",id:"quick-start-operations",level:2},{value:"Create database",id:"create-database",level:3},{value:"Grant database privileges to users",id:"grant-database-privileges-to-users",level:3},{value:"Create schema and set search path",id:"create-schema-and-set-search-path",level:3},{value:"What&#39;s next",id:"whats-next",level:2}];function o(e){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["To create a new database in Cloudberry Database, you can either use the ",(0,s.jsx)(a.code,{children:"CREATE DATABASE"})," SQL command in the ",(0,s.jsx)(a.code,{children:"psql"})," client, or use the ",(0,s.jsx)(a.code,{children:"createdb"})," utility. The ",(0,s.jsx)(a.code,{children:"createdb"})," utility is a wrapper around the ",(0,s.jsx)(a.code,{children:"CREATE DATABASE"})," command."]}),"\n",(0,s.jsx)(a.h2,{id:"quick-start-operations",children:"Quick-start operations"}),"\n",(0,s.jsxs)(a.p,{children:["In the following operations, you will be guided to create a new database using the ",(0,s.jsx)(a.code,{children:"createdb"})," utility, to create a schema, and to set search path for schemas. You will also learn how to create a user and grant privileges to the user."]}),"\n",(0,s.jsxs)(a.p,{children:["Before moving on to the operations, make sure that you have completed the previous tutorial ",(0,s.jsx)(a.a,{href:"./101-1-create-users-and-roles",children:"Lesson 1: Create Users and Roles"}),". You will connect to the tutorial database as the user ",(0,s.jsx)(a.code,{children:"lily"})," with password set up in the previous tutorial."]}),"\n",(0,s.jsx)(a.h3,{id:"create-database",children:"Create database"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Log into Cloudberry Database in Docker. Before creating the ",(0,s.jsx)(a.code,{children:"tutorial"})," database, make sure that this database does not exist."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"[gpadmin@mdw ~]$ dropdb tutorial\n"})}),"\n",(0,s.jsx)(a.p,{children:"Output:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'dropdb: error: database removal failed: ERROR:  database "tutorial" does not exist\n'})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Create the ",(0,s.jsx)(a.code,{children:"tutorial"})," database using the ",(0,s.jsx)(a.code,{children:"createdb"})," utility."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"[gpadmin@mdw ~]$ createdb tutorial\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"[gpadmin@mdw ~]$ psql -l  # Verifies that this database has been created.\n                                List of databases\n   Name    |  Owner  | Encoding |   Collate   |    Ctype    |  Access privileges\n-----------+---------+----------+-------------+-------------+---------------------\n gpadmin   | gpadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 |\n postgres  | gpadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 |\n template0 | gpadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/gpadmin         +\n           |         |          |             |             | gpadmin=CTc/gpadmin\n template1 | gpadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/gpadmin         +\n           |         |          |             |             | gpadmin=CTc/gpadmin\n tutorial  | gpadmin | UTF8     | en_US.UTF-8 | en_US.UTF-8 |\n(5 rows)\n"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Info:"})}),"\n",(0,s.jsxs)(a.p,{children:["Unless you specify a different database, the newly created database is a copy of the ",(0,s.jsx)(a.code,{children:"template1"})," database."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Create an entry in the ",(0,s.jsx)(a.code,{children:"pg_hba.conf"})," configuration file by appending ",(0,s.jsx)(a.code,{children:"local tutorial lily md5"})," to ",(0,s.jsx)(a.code,{children:"/data0/database/master/gpseg-1/pg_hba.conf"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ echo "local tutorial lily md5" >> /data0/database/master/gpseg-1/pg_hba.conf\n'})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Info:"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"pg_hba.conf"})," is the configuration file for client access control in Cloudberry Database."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"md5"})," is the authentication methods, which means that the user needs to enter the password to log in."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Reload the configuration file to populate the change."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"[gpadmin@mdw ~]$ gpstop -u\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"20230818:14:18:45:003733 gpstop:mdw:gpadmin-[INFO]:-Starting gpstop with args: -u\n20230818:14:18:45:003733 gpstop:mdw:gpadmin-[INFO]:-Gathering information and validating the environment...\n20230818:14:18:45:003733 gpstop:mdw:gpadmin-[INFO]:-Obtaining Cloudberry Coordinator catalog information\n20230818:14:18:45:003733 gpstop:mdw:gpadmin-[INFO]:-Obtaining Segment details from coordinator...\n20230818:14:18:45:003733 gpstop:mdw:gpadmin-[INFO]:-Cloudberry Version: 'postgres (Cloudberry Database) 1.0.0 build dev'\n20230818:14:18:45:003733 gpstop:mdw:gpadmin-[INFO]:-Signalling all postmaster processes to reload\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Connect to the ",(0,s.jsx)(a.code,{children:"tutorial"})," database as the user ",(0,s.jsx)(a.code,{children:"lily"}),". You need to enter the password set up in the ",(0,s.jsx)(a.a,{href:"./101-1-create-users-and-roles#create-a-user-using-the-create-user-command",children:"previous tutorial"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'[gpadmin@mdw ~]$ psql -U lily tutorial\n\nPassword for user lily:  # changeme\npsql (14.4, server 14.4)\nType "help" for help.\n'})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"tutorial=> \\q    -- Exits the database.\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"grant-database-privileges-to-users",children:"Grant database privileges to users"}),"\n",(0,s.jsxs)(a.p,{children:["For database users to properly do their works, you need to grant them the minimum permissions required. For example, a user might need ",(0,s.jsx)(a.code,{children:"SELECT"})," permissions on a table to view data, and need ",(0,s.jsx)(a.code,{children:"UPDATE"}),", ",(0,s.jsx)(a.code,{children:"INSERT"}),", or ",(0,s.jsx)(a.code,{children:"DELETE"})," to modify the data."]}),"\n",(0,s.jsxs)(a.p,{children:["In the following operations, the database user ",(0,s.jsx)(a.code,{children:"lily"})," will require permissions to create and manipulate objects in the ",(0,s.jsx)(a.code,{children:"tutorial"})," database."]}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Connect to the ",(0,s.jsx)(a.code,{children:"tutorial"})," database as ",(0,s.jsx)(a.code,{children:"gpadmin"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"[gpadmin@mdw ~]$ psql -U gpadmin tutorial\n"})}),"\n",(0,s.jsx)(a.p,{children:"Output:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'psql (14.4, server 14.4)\nType "help" for help.\n'})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Grant ",(0,s.jsx)(a.code,{children:"lily"})," all privileges on the ",(0,s.jsx)(a.code,{children:"tutorial"})," database."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"tutorial=# GRANT ALL PRIVILEGES ON DATABASE tutorial TO lily;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Output:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"GRANT\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"tutorial=# \\q    -- Exits the database.\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"create-schema-and-set-search-path",children:"Create schema and set search path"}),"\n",(0,s.jsxs)(a.p,{children:["In this section, you will be guided to create a ",(0,s.jsx)(a.code,{children:"faa"})," schema and set the search path to make ",(0,s.jsx)(a.code,{children:"faa"})," the default schema."]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Info:"})}),"\n",(0,s.jsxs)(a.p,{children:["Database schema is a named container for a set of database objects, including tables, data types, and functions. One database can have multiple schemas. Objects in the schema are referenced by prefixing the object name with the schema name, separated with a period. For example, the ",(0,s.jsx)(a.code,{children:"person"})," table in the ",(0,s.jsx)(a.code,{children:"employee schema"})," is written as ",(0,s.jsx)(a.code,{children:"employee.person"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["The schema provides a namespace for the objects it contains. If the database is used for multiple applications, each with its own schema, the same table name can be used in each schema. For example, ",(0,s.jsx)(a.code,{children:"employee.person"})," is a different table than ",(0,s.jsx)(a.code,{children:"customer.person"}),". Both tables can be accessed in the same query as long as they are with accordingly schema name."]}),"\n",(0,s.jsx)(a.p,{children:"The database contains a schema search path including a list of schema names. The first schema in the search path is also the schema where new objects are created when no schema is specified. The default search path is user,public, so by default, each object you create belongs to a schema associated with your login name."}),"\n"]}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Connect to the ",(0,s.jsx)(a.code,{children:"tutorial"})," database as the user ",(0,s.jsx)(a.code,{children:"lily"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"[gpadmin@mdw ~]$ psql -U lily tutorial\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:'Password for user lily:  # changeme\n\npsql (14.4, server 14.4)\nType "help" for help.\n'})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Create the ",(0,s.jsx)(a.code,{children:"faa"})," schema."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"tutorial=> DROP SCHEMA IF EXISTS faa CASCADE;\ntutorial=> CREATE SCHEMA faa;\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Set the search path to ",(0,s.jsx)(a.code,{children:"faa"}),", ",(0,s.jsx)(a.code,{children:"public"}),", ",(0,s.jsx)(a.code,{children:"pg_catalog"}),", and ",(0,s.jsx)(a.code,{children:"gp_toolkit"})," schemas."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"tutorial=> SET SEARCH_PATH TO faa, public, pg_catalog, gp_toolkit;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Output:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SET\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Verify that the search path is set correctly."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"tutorial=> SHOW search_path;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Output:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"search_path\n-------------------------------------\nfaa, public, pg_catalog, gp_toolkit\n(1 row)\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Associate a search path with the user role ",(0,s.jsx)(a.code,{children:"lily"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["The search path you have set in the previous step is not persistent. You need to set it each time you connect to the database. You can associate a search path with the user role by using the ",(0,s.jsx)(a.code,{children:"ALTER ROLE"})," command, so that each time you connect to the database with that role, the search path is restored."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"tutorial=> ALTER ROLE lily SET search_path TO faa, public, pg_catalog, gp_toolkit;\n"})}),"\n",(0,s.jsx)(a.p,{children:"Output:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"ALTER ROLE\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsxs)(a.p,{children:["After creating and preparing the database, you can start to create tables in the database. See ",(0,s.jsx)(a.a,{href:"./101-3-create-tables",children:"Lesson 3: Create Tables"})," for more information."]}),"\n",(0,s.jsx)(a.p,{children:"Other tutorials:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"./101-1-create-users-and-roles",children:"Lesson 1: Create Users and Roles"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"./101-4-data-loading",children:"Lesson 4: Data Loading"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"./101-5-queries-and-performance-tuning",children:"Lesson 5: Queries and Performance Tuning"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"./101-6-backup-and-recovery-operations",children:"Lesson 6: Backup and Restore Operations"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>i});var s=n(67294);const t={},r=s.createContext(t);function i(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);