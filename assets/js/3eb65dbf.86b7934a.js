"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7507],{84330:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(85893),i=n(11151);const o={title:"createuser"},t="createuser",l={id:"sys-utilities/createuser",title:"createuser",description:"Creates a new database role.",source:"@site/docs/sys-utilities/createuser.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/createuser",permalink:"/docs/sys-utilities/createuser",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/createuser.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1737527923,formattedLastUpdatedAt:"Jan 22, 2025",frontMatter:{title:"createuser"},sidebar:"docsbars",previous:{title:"clusterdb",permalink:"/docs/sys-utilities/clusterdb"},next:{title:"createdb",permalink:"/docs/sys-utilities/createdb"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Connection options",id:"connection-options",level:3},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"createuser",children:"createuser"}),"\n",(0,r.jsx)(s.p,{children:"Creates a new database role."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"createuser [<connection-option> ...] [<role_attribute> ...] [-e] <role_name>\n\ncreateuser -? | --help \n\ncreateuser -V | --version\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"createuser"})," creates a new Cloudberry Database role. You must be a superuser or have the ",(0,r.jsx)(s.code,{children:"CREATEROLE"})," privilege to create new roles. You must connect to the database as a superuser to create new superusers."]}),"\n",(0,r.jsx)(s.p,{children:"Superusers can bypass all access permission checks within the database, so superuser privileges should not be granted lightly."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"createuser"})," is a wrapper around the SQL command ",(0,r.jsx)(s.code,{children:"CREATE ROLE"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"role_name"})})}),"\n",(0,r.jsx)(s.p,{children:"The name of the role to be created. This name must be different from all existing roles in this Cloudberry Database installation."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-c number | --connection-limit=number"})})}),"\n",(0,r.jsx)(s.p,{children:"Set a maximum number of connections for the new role. The default is to set no limit."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-d | --createdb"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will be allowed to create databases."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-D | --no-createdb"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will not be allowed to create databases. This is the default."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-e | --echo"})})}),"\n",(0,r.jsxs)(s.p,{children:["Echo the commands that ",(0,r.jsx)(s.code,{children:"createuser"})," generates and sends to the server."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-E | --encrypted"})})}),"\n",(0,r.jsx)(s.p,{children:"Encrypts the role's password stored in the database. If not specified, the default password behavior is used."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-i | --inherit"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will automatically inherit privileges of roles it is a member of. This is the default."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-I | --no-inherit"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will not automatically inherit privileges of roles it is a member of."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"--interactive"})})}),"\n",(0,r.jsxs)(s.p,{children:["Prompt for the user name if none is specified on the command line, and also prompt for whichever of the options ",(0,r.jsx)(s.code,{children:"-d"}),"/",(0,r.jsx)(s.code,{children:"-D"}),", ",(0,r.jsx)(s.code,{children:"-r"}),"/",(0,r.jsx)(s.code,{children:"-R"}),", ",(0,r.jsx)(s.code,{children:"-s"}),"/",(0,r.jsx)(s.code,{children:"-S"})," is not specified on the command line."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-l | --login"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will be allowed to log in to Cloudberry Database. This is the default."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-L | --no-login"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will not be allowed to log in (a group-level role)."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-N | --unencrypted"})})}),"\n",(0,r.jsx)(s.p,{children:"Does not encrypt the role's password stored in the database. If not specified, the default password behavior is used."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-P | --pwprompt"})})}),"\n",(0,r.jsxs)(s.p,{children:["If given, ",(0,r.jsx)(s.code,{children:"createuser"})," will issue a prompt for the password of the new role. This is not necessary if you do not plan on using password authentication."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-r | --createrole"})})}),"\n",(0,r.jsxs)(s.p,{children:["The new role will be allowed to create new roles (",(0,r.jsx)(s.code,{children:"CREATEROLE"})," privilege)."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-R | --no-createrole"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will not be allowed to create new roles. This is the default."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-s | --superuser"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will be a superuser."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-S | --no-superuser"})})}),"\n",(0,r.jsx)(s.p,{children:"The new role will not be a superuser. This is the default."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-V | --version"})})}),"\n",(0,r.jsxs)(s.p,{children:["Print the ",(0,r.jsx)(s.code,{children:"createuser"})," version and exit."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"--replication"})})}),"\n",(0,r.jsxs)(s.p,{children:["The new user will have the ",(0,r.jsx)(s.code,{children:"REPLICATION"})," privilege, which is described more fully in the documentation for ",(0,r.jsx)(s.a,{href:"/docs/sql-stmts/create-role",children:(0,r.jsx)(s.code,{children:"CREATE ROLE"})}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"--no-replication"})})}),"\n",(0,r.jsxs)(s.p,{children:["The new user will not have the ",(0,r.jsx)(s.code,{children:"REPLICATION"})," privilege, which is described more fully in the documentation for ",(0,r.jsx)(s.a,{href:"/docs/sql-stmts/create-role",children:(0,r.jsx)(s.code,{children:"CREATE ROLE"})}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-? | --help"})})}),"\n",(0,r.jsxs)(s.p,{children:["Show help about ",(0,r.jsx)(s.code,{children:"createuser"})," command line arguments, and exit."]}),"\n",(0,r.jsx)(s.h3,{id:"connection-options",children:"Connection options"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-h host | --host=host"})})}),"\n",(0,r.jsxs)(s.p,{children:["The host name of the machine on which the Cloudberry coordinator database server is running. If not specified, reads from the environment variable ",(0,r.jsx)(s.code,{children:"PGHOST"})," or defaults to localhost."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-p port | --port=port"})})}),"\n",(0,r.jsxs)(s.p,{children:["The TCP port on which the Cloudberry coordinator database server is listening for connections. If not specified, reads from the environment variable ",(0,r.jsx)(s.code,{children:"PGPORT"})," or defaults to 5432."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-U username | --username=username"})})}),"\n",(0,r.jsxs)(s.p,{children:["The database role name to connect as. If not specified, reads from the environment variable ",(0,r.jsx)(s.code,{children:"PGUSER"})," or defaults to the current system role name."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-w | --no-password"})})}),"\n",(0,r.jsxs)(s.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,r.jsx)(s.code,{children:".pgpass"})," file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"-W | --password"})})}),"\n",(0,r.jsx)(s.p,{children:"Force a password prompt."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["To create a role ",(0,r.jsx)(s.code,{children:"joe"})," on the default database server:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ createuser joe\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To create a role ",(0,r.jsx)(s.code,{children:"joe"})," on the default database server with prompting for some additional attributes:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ createuser --interactive joe\nShall the new role be a superuser? (y/n) **n**\nShall the new role be allowed to create databases? (y/n) **n**\nShall the new role be allowed to create more new roles? (y/n) **n**\nCREATE ROLE\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To create the same role ",(0,r.jsx)(s.code,{children:"joe"})," using connection options, with attributes explicitly specified, and taking a look at the underlying command:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"createuser -h coordinatorhost -p 54321 -S -D -R -e joe\nCREATE ROLE joe NOSUPERUSER NOCREATEDB NOCREATEROLE INHERIT \nLOGIN;\nCREATE ROLE\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To create the role ",(0,r.jsx)(s.code,{children:"joe"})," as a superuser, and assign password ",(0,r.jsx)(s.code,{children:"admin123"})," immediately:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"createuser -P -s -e joe\nEnter password for new role: admin123\nEnter it again: admin123\nCREATE ROLE joe PASSWORD 'admin123' SUPERUSER CREATEDB \nCREATEROLE INHERIT LOGIN;\nCREATE ROLE\n"})}),"\n",(0,r.jsxs)(s.p,{children:["In the above example, the new password is not actually echoed when typed, but we show what was typed for clarity. However the password will appear in the echoed command, as illustrated if the ",(0,r.jsx)(s.code,{children:"-e"})," option is used."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sql-stmts/create-role",children:(0,r.jsx)(s.code,{children:"CREATE ROLE"})}),", ",(0,r.jsx)(s.a,{href:"/docs/sys-utilities/dropuser",children:"dropuser"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>t});var r=n(67294);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);