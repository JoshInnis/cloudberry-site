"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4244],{75061:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=i(85893),s=i(11151);const c={title:"Configure Row-Level Security Policy",toc_max_heading_level:5},l="Configure Row-Level Security Policy",o={id:"security/configure-row-level-security-policy",title:"Configure Row-Level Security Policy",description:"Row-level security (RLS) policy allows the table owner to define access policies that control users' access to specific rows of the table. When a user tries to query or update a table, the RLS policy will be applied first before any user command is executed to truncate the rows in the table.",source:"@site/docs/security/configure-row-level-security-policy.md",sourceDirName:"security",slug:"/security/configure-row-level-security-policy",permalink:"/zh/docs/security/configure-row-level-security-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/security/configure-row-level-security-policy.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1732592200,formattedLastUpdatedAt:"2024\u5e7411\u670826\u65e5",frontMatter:{title:"Configure Row-Level Security Policy",toc_max_heading_level:5},sidebar:"docsbars",previous:{title:"Configure Client Authentication",permalink:"/zh/docs/security/client-auth"},next:{title:"Protect Passwords",permalink:"/zh/docs/security/protect-passwords"}},t={},a=[{value:"Row-Level Security Policy Overview",id:"row-level-security-policy-overview",level:2},{value:"Enable and create row-level security policy",id:"enable-and-create-row-level-security-policy",level:2},{value:"Example of using row-level security policy",id:"example-of-using-row-level-security-policy",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configure-row-level-security-policy",children:"Configure Row-Level Security Policy"}),"\n",(0,r.jsx)(n.p,{children:"Row-level security (RLS) policy allows the table owner to define access policies that control users' access to specific rows of the table. When a user tries to query or update a table, the RLS policy will be applied first before any user command is executed to truncate the rows in the table."}),"\n",(0,r.jsxs)(n.p,{children:["Row-level security policies can be created for specific commands, such as ",(0,r.jsx)(n.code,{children:"SELECT"}),"/",(0,r.jsx)(n.code,{children:"INSERT"}),"/",(0,r.jsx)(n.code,{children:"UPDATE"}),"/",(0,r.jsx)(n.code,{children:"DELETE"}),", or for all commands (",(0,r.jsx)(n.code,{children:"ALL"}),"). Row-level security policies can also control access to specific rows in a table based on certain users, user groups, or according to specific conditions."]}),"\n",(0,r.jsx)(n.h2,{id:"row-level-security-policy-overview",children:"Row-Level Security Policy Overview"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"By default, no row-level security policy is set for a table. If a user has access to the table according to the SQL permission system, all rows in the table can be queried or updated."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Users can enable row-level security policies on a table using the ",(0,r.jsx)(n.code,{children:"ALTER TABLE ... ENABLE ROW LEVEL SECURITY"})," command. After the policy is enabled, no other users except the table owner will be able to access and modify the table. Appropriate security policies must be set before other users can access and manipulate rows within the table."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Operations that apply to the entire table (such as ",(0,r.jsx)(n.code,{children:"TRUNCATE"})," and ",(0,r.jsx)(n.code,{children:"REFERENCES"}),") are not restricted by row-level security."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Row-level security policies can be specific to commands, user roles, or both. A policy can be applied to all commands, or just to ",(0,r.jsx)(n.code,{children:"SELECT"}),", ",(0,r.jsx)(n.code,{children:"INSERT"}),", ",(0,r.jsx)(n.code,{children:"UPDATE"}),", or ",(0,r.jsx)(n.code,{children:"DELETE"})," individually. Multiple roles can be granted the same policy, and the usual role hierarchy and inheritance rules also apply to row-level security policies."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Superusers and roles with the ",(0,r.jsx)(n.code,{children:"BYPASSRLS"})," attribute are not subject to row-level security policies. The table owner is typically not constrained by the policy, but row-level security can be enforced on the table owner by using ",(0,r.jsx)(n.code,{children:"ALTER TABLE ... FORCE ROW LEVEL SECURITY"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Only the table owner can enable, disable, or add row-level security policies."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"enable-and-create-row-level-security-policy",children:"Enable and create row-level security policy"}),"\n",(0,r.jsx)(n.p,{children:"The table owner must first enable row-level security policies for a table before creating specific policies."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 1."})," Enable row-level security policy"]}),"\n",(0,r.jsx)(n.p,{children:"The table owner must first enable row-level security policy using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ALTER TABLE <table_name> ENABLE ROW LEVEL SECURITY;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 2."})," Create policy"]}),"\n",(0,r.jsxs)(n.p,{children:["After enabling row-level security policies, you can create policies with ",(0,r.jsx)(n.code,{children:"CREATE POLICY"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A RLS policy must provide an expression in the ",(0,r.jsx)(n.code,{children:"USING"})," or ",(0,r.jsx)(n.code,{children:"WITH CHECK"})," clause that returns a boolean value determining which rows can be returned. This expression is evaluated row-by-row before any conditions and functions in the user's query are executed. Rows for which the expression does not return ",(0,r.jsx)(n.code,{children:"true"})," will not be processed."]}),"\n",(0,r.jsx)(n.p,{children:"You can specify separate expressions to provide independent control over which rows are visible and which can be modified. The policy expressions run as part of the query and have the permissions of the user running the query. Users can also use Security-definer functions to access data not available to the user."}),"\n",(0,r.jsx)(n.p,{children:"Refer to the following syntax to create a row-level security policy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE POLICY <name> ON <table_name>\n    [ AS { PERMISSIVE | RESTRICTIVE } ]\n    [ FOR { ALL | SELECT | INSERT | UPDATE | DELETE } ]\n    [ TO { <role_name> | PUBLIC | CURRENT_USER | SESSION_USER } [, ...] ]\n    [ USING ( <using_expression> ) ]\n    [ WITH CHECK ( <check_expression> ) ]\n"})}),"\n",(0,r.jsx)(n.p,{children:"See the following parameter descriptions for detailed usage:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"name"}),": The name of the policy."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"table_name"}),": The name of the table to which the policy applies."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"PERMISSIVE"}),": Specifies that the policy will be created as a permissive policy. All permissive policies applicable to a given query will be combined using the ",(0,r.jsx)(n.code,{children:"OR"})," operator. By creating permissive policies, administrators can add accessible record sets. By default, policies are permissive."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RESTRICTIVE"}),": Specifies that the policy will be created as a restrictive policy. All restrictive policies applicable to a given query will be combined using the ",(0,r.jsx)(n.code,{children:"AND"})," operator. By creating restrictive policies, administrators can reduce the accessible record set, as each record must pass all restrictive policies."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Commands (",(0,r.jsx)(n.code,{children:"ALL"}),", ",(0,r.jsx)(n.code,{children:"SELECT"}),", ",(0,r.jsx)(n.code,{children:"INSERT"}),", ",(0,r.jsx)(n.code,{children:"UPDATE"}),", ",(0,r.jsx)(n.code,{children:"DELETE"}),"): The commands to which the policy applies."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"role_name"}),": The roles to which the policy applies; the default is ",(0,r.jsx)(n.code,{children:"PUBLIC"}),", meaning the policy will apply to all roles."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"using_expression"}),": Any SQL conditional expression (returning a boolean value). The conditional expression cannot contain any aggregate functions or window functions. If row-level security is enabled, this expression will be added to queries that reference the table. Rows for which the expression returns ",(0,r.jsx)(n.code,{children:"true"})," will be visible. Any rows for which the expression returns ",(0,r.jsx)(n.code,{children:"false"})," or ",(0,r.jsx)(n.code,{children:"null"})," will be invisible to the user (in ",(0,r.jsx)(n.code,{children:"SELECT"})," commands) and cannot be modified (",(0,r.jsx)(n.code,{children:"UPDATE"})," or ",(0,r.jsx)(n.code,{children:"DELETE"}),"). Invisible or unmodifiable rows will not be returned and will not generate an error."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"check_expression"}),": Any SQL conditional expression (returning a boolean value). The conditional expression cannot contain any aggregate functions or window functions. If row-level security is enabled, this expression will be used for ",(0,r.jsx)(n.code,{children:"INSERT"})," and ",(0,r.jsx)(n.code,{children:"UPDATE"})," operations on the table. Only rows for which the expression evaluates to ",(0,r.jsx)(n.code,{children:"true"})," will be allowed. An error will be raised if any records inserted or resulting from an update evaluate to ",(0,r.jsx)(n.code,{children:"false"})," or ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"check_expression"})," is evaluated based on the proposed new content of the command, not the original content."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example-of-using-row-level-security-policy",children:"Example of using row-level security policy"}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets up a row-level access security policy on a table that only allows rows to be returned where ",(0,r.jsx)(n.code,{children:"(department = current_setting('myapp.current_department'))"})," is ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Access the database as an administrator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"psql -h <host_ip> -p <port> -U <user_name> -d <db_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a table and insert data:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE TABLE projects (\n    project_id SERIAL PRIMARY KEY,\n    project_name TEXT,\n    project_manager TEXT,\n    department TEXT\n);\n\nINSERT INTO projects (project_name, project_manager, department) VALUES\n('Project Alpha', 'zhangsan', 'Engineering'),\n('Project Beta', 'lisi', 'HR'),\n('Project Gamma', 'wangwu', 'Sales');\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable row-level security policy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ALTER TABLE projects ENABLE ROW LEVEL SECURITY;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create the row-level security policy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE POLICY department_policy\nON projects\nFOR SELECTUSING (department = current_setting('myapp.current_department'));\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This policy will only return rows where ",(0,r.jsx)(n.code,{children:"(department = current_setting('myapp.current_department'))"})," is ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create test users:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CREATE USER zhangsan WITH PASSWORD '<password>';\nCREATE USER lisi WITH PASSWORD '<password>';\nCREATE USER wangwu WITH PASSWORD '<password>';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Grant the test users permission to query the ",(0,r.jsx)(n.code,{children:"projects"})," table:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GRANT SELECT ON projects TO zhangsan;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Switch to the test user and define the value of the variable ",(0,r.jsx)(n.code,{children:"myapp.current_department"})," for the current session:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SET ROLE zhangsan;\nSET myapp.current_department = 'Engineering';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Query the ",(0,r.jsx)(n.code,{children:"projects"})," table as the current user:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SELECT * FROM projects;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Because the value of ",(0,r.jsx)(n.code,{children:"myapp.current_department"})," is set to ",(0,r.jsx)(n.code,{children:"Engineering"}),", you would expect the following data to be returned:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"project_id | project_name | project_manager | department\n------------+--------------+-----------------+------------\n        1 | Project Alpha | zhangsan        | Engineering\n"})}),"\n",(0,r.jsxs)(n.p,{children:['Only the row related to the "Engineering" department will be visible to the user ',(0,r.jsx)(n.code,{children:"zhangsan"})," because of the row-level security policy in place."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var r=i(67294);const s={},c=r.createContext(s);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);