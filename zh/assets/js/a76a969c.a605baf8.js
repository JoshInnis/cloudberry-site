"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9465],{87097:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(85893),r=s(11151);const o={title:"ALTER FOREIGN TABLE"},i="ALTER FOREIGN TABLE",a={id:"sql-stmts/alter-foreign-table",title:"ALTER FOREIGN TABLE",description:"Changes the definition of a foreign table.",source:"@site/docs/sql-stmts/alter-foreign-table.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-foreign-table",permalink:"/zh/docs/sql-stmts/alter-foreign-table",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-foreign-table.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1737527923,formattedLastUpdatedAt:"2025\u5e741\u670822\u65e5",frontMatter:{title:"ALTER FOREIGN TABLE"},sidebar:"docsbars",previous:{title:"ALTER FOREIGN DATA WRAPPER",permalink:"/zh/docs/sql-stmts/alter-foreign-data-wrapper"},next:{title:"ALTER FUNCTION",permalink:"/zh/docs/sql-stmts/alter-function"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"alter-foreign-table",children:"ALTER FOREIGN TABLE"}),"\n",(0,t.jsx)(n.p,{children:"Changes the definition of a foreign table."}),"\n",(0,t.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER FOREIGN TABLE [ IF EXISTS ] [ONLY] <name> [ * ]\n    <action> [, ... ]\nALTER FOREIGN TABLE [ IF EXISTS ] [ONLY] <name> [ * ]\n    RENAME [ COLUMN ] <column_name> TO <new_column_name>\nALTER FOREIGN TABLE [ IF EXISTS ] <name>\n    RENAME TO <new_name>\nALTER FOREIGN TABLE [ IF EXISTS ] <name>\n    SET SCHEMA <new_schema>\n\n-- where <action> is one of:\n\n    ADD [ COLUMN ] <column_name> <data_type> [ COLLATE <collation> ] [ <column_constraint> [ ... ] ]\n    DROP [ COLUMN ] [ IF EXISTS ] <column_name> [ RESTRICT | CASCADE ]\n    ALTER [ COLUMN ] <column_name> [ SET DATA ] TYPE <data_type> [ COLLATE <collation> ]\n    ALTER [ COLUMN ] <column_name> SET DEFAULT <expression>\n    ALTER [ COLUMN ] <column_name> DROP DEFAULT\n    ALTER [ COLUMN ] <column_name> { SET | DROP } NOT NULL\n    ALTER [ COLUMN ] <column_name> SET STATISTICS <integer>\n    ALTER [ COLUMN ] <column_name> SET ( <attribute_option> = <value> [, ... ] )\n    ALTER [ COLUMN ] <column_name> RESET ( <attribute_option> [, ... ] )\n    ALTER [ COLUMN ] <column_name> SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }\n    ALTER [ COLUMN ] <column_name> OPTIONS ( [ ADD | SET | DROP ] <option> ['<value>'] [, ... ])\n    ADD <table_constraint> [ NOT VALID ]\n    VALIDATE CONSTRAINT <constraint_name>\n    DROP CONSTRAINT [ IF EXISTS ]  <constraint_name> [ RESTRICT | CASCADE ]\n    DISABLE TRIGGER [ <trigger_name> | ALL | USER ]\n    ENABLE TRIGGER [ <trigger_name> | ALL | USER ]\n    ENABLE REPLICA TRIGGER <trigger_name>\n    ENABLE ALWAYS TRIGGER <trigger_name>\n    SET WITHOUT OIDS\n    INHERIT <parent_table>\n    NO INHERIT <parent_table>\n    OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n    OPTIONS ( [ ADD | SET | DROP ] <option> ['<value>'] [, ... ] )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ALTER FOREIGN TABLE"})," changes the definition of an existing foreign table. There are several subforms of the command:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ADD COLUMN"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form adds a new column to the foreign table, using the same syntax as ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-foreign-table",children:"CREATE FOREIGN TABLE"}),". Unlike the case when you add a column to a regular table, nothing happens to the underlying storage: this action simply declares that some new column is now accessible through the foreign table."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"DROP COLUMN [ IF EXISTS ]"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form drops a column from a foreign table. You must specify ",(0,t.jsx)(n.code,{children:"CASCADE"})," if any objects outside of the table depend on the column; for example, views. If you specify ",(0,t.jsx)(n.code,{children:"IF EXISTS"})," and the column does not exist, no error is thrown. In this case, Cloudberry Database issues a notice instead."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"IF EXISTS"})})}),"\n",(0,t.jsxs)(n.p,{children:["If you specify ",(0,t.jsx)(n.code,{children:"IF EXISTS"})," and the foreign table does not exist, no error is thrown. Cloudberry Database issues a notice instead."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET DATA TYPE"})})}),"\n",(0,t.jsx)(n.p,{children:"This form changes the type of a column of a foreign table. Again, this has no effect on any underlying storage: this action simply changes the type that Cloudberry Database believes the column to have."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET/DROP DEFAULT"})})}),"\n",(0,t.jsxs)(n.p,{children:["These forms set or remove the default value for a column. Default values apply only in subsequent ",(0,t.jsx)(n.code,{children:"INSERT"})," or ",(0,t.jsx)(n.code,{children:"UPDATE"})," commands; they do not cause rows already in the table to change."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET/DROP NOT NULL"})})}),"\n",(0,t.jsx)(n.p,{children:"Mark a column as allowing, or not allowing, null values."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET STATISTICS"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form sets the per-column statistics-gathering target for subsequent ",(0,t.jsx)(n.code,{children:"ANALYZE"})," operations. See the similar form of ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," for more details."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET ( attribute_option = value [, ...] ] )"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RESET ( attribute_option [, ... ] )"})})]}),"\n",(0,t.jsxs)(n.p,{children:["This form sets or resets per-attribute options. See the similar form of ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," for more details."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET STORAGE"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form sets the storage mode for a column. See the similar form of ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," for more details. Note that the storage mode has no effect unless the table's foreign-data wrapper chooses to pay attention to it."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ADD table_constraint [ NOT VALID ]"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form adds a new constraint to a foreign table, using the same syntax as ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-foreign-table",children:"CREATE FOREIGN TABLE"}),". Currently only ",(0,t.jsx)(n.code,{children:"CHECK"})," constraints are supported."]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the case when adding a constraint to a regular table, nothing is done to verify the constraint is correct; rather, this action simply declares that some new condition should be assumed to hold for all rows in the foreign table. (See the discussion in ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-foreign-table",children:"CREATE FOREIGN TABLE"}),".) If the constraint is marked ",(0,t.jsx)(n.code,{children:"NOT VALID"}),", then it isn't assumed to hold, but is only recorded for possible future use."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"VALIDATE CONSTRAINT"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form marks as valid a constraint that was previously marked as ",(0,t.jsx)(n.code,{children:"NOT VALID"}),". No action is taken to verify the constraint, but future queries will assume that it holds."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"DROP CONSTRAINT [ IF EXISTS ]"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form drops the specified constraint on a foreign table. If ",(0,t.jsx)(n.code,{children:"IF EXISTS"})," is specified and the constraint does not exist, no error is thrown. In this case a notice is issued instead."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"DISABLE/ENABLE [ REPLICA | ALWAYS ] TRIGGER"})})}),"\n",(0,t.jsxs)(n.p,{children:["These forms configure the firing of trigger(s) belonging to the foreign table. See the similar form of ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," for more details."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET WITHOUT OIDS"})})}),"\n",(0,t.jsx)(n.p,{children:"Backward compatibility syntax for removing the oid system column. As oid system columns cannot be added anymore, this never has an effect."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"INHERIT parent_table"})})}),"\n",(0,t.jsxs)(n.p,{children:["This form adds the target foreign table as a new child of the specified parent table. See the similar form of ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," for more details."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"NO INHERIT parent_table"})})}),"\n",(0,t.jsx)(n.p,{children:"This form removes the target foreign table from the list of children of the specified parent table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"OWNER"})})}),"\n",(0,t.jsx)(n.p,{children:"This form changes the owner of the foreign table to the specified user."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RENAME"})})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"RENAME"})," forms change the name of a foreign table or the name of an individual column in a foreign table."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"SET SCHEMA"})})}),"\n",(0,t.jsx)(n.p,{children:"This form moves the foreign table into another schema."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"OPTIONS ( [ ADD | SET | DROP ] option ['value'] [, ... ] )"})})}),"\n",(0,t.jsxs)(n.p,{children:["Change options for the foreign table. ",(0,t.jsx)(n.code,{children:"ADD"}),", ",(0,t.jsx)(n.code,{children:"SET"}),", and ",(0,t.jsx)(n.code,{children:"DROP"})," specify the action to perform. If no operation is explicitly specified, the default operation is ",(0,t.jsx)(n.code,{children:"ADD"}),". Option names must be unique (although it's OK for a table option and a column option to have the same name). Cloudberry Database also validates names and values using the server's foreign-data wrapper."]}),"\n",(0,t.jsxs)(n.p,{children:["You can combine all of the actions except ",(0,t.jsx)(n.code,{children:"RENAME"})," and ",(0,t.jsx)(n.code,{children:"SET SCHEMA"})," into a list of multiple alterations for Cloudberry Database to apply in parallel. For example, it is possible to add several columns and/or alter the type of several columns in a single command."]}),"\n",(0,t.jsxs)(n.p,{children:["If the command is written as ",(0,t.jsx)(n.code,{children:"ALTER FOREIGN TABLE IF EXISTS ..."})," and the foreign table does not exist, no error is thrown. A notice is issued in this case."]}),"\n",(0,t.jsxs)(n.p,{children:["You must own the table to use ",(0,t.jsx)(n.code,{children:"ALTER FOREIGN TABLE"}),". To change the schema of a foreign table, you must also have ",(0,t.jsx)(n.code,{children:"CREATE"})," privilege on the new schema. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,t.jsx)(n.code,{children:"CREATE"})," privilege on the table's schema. (These restrictions enforce that altering the owner doesn't do anything you couldn't do by dropping and recreating the table. However, a superuser can alter ownership of any table anyway.) To add a column or to alter a column type, you must also have ",(0,t.jsx)(n.code,{children:"USAGE"})," privilege on the data type."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})})}),"\n",(0,t.jsxs)(n.p,{children:["The name (possibly schema-qualified) of an existing foreign table to alter. If ",(0,t.jsx)(n.code,{children:"ONLY"})," is specified before the table name, only that table is altered. If ",(0,t.jsx)(n.code,{children:"ONLY"})," is not specified, the table and all its descendant tables (if any) are altered. Optionally, ",(0,t.jsx)(n.code,{children:"*"})," can be specified after the table name to explicitly indicate that descendant tables are included."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"column_name"})})}),"\n",(0,t.jsx)(n.p,{children:"The name of a new or existing column."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_column_name"})})}),"\n",(0,t.jsx)(n.p,{children:"The new name for an existing column."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_name"})})}),"\n",(0,t.jsx)(n.p,{children:"The new name for the foreign table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data_type"})})}),"\n",(0,t.jsx)(n.p,{children:"The data type of the new column, or new data type for an existing column."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"table_constraint"})})}),"\n",(0,t.jsx)(n.p,{children:"The new table constraint for the foreign table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"constraint_name"})})}),"\n",(0,t.jsx)(n.p,{children:"The name of an existing constraint to validate or drop."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"CASCADE"})})}),"\n",(0,t.jsx)(n.p,{children:"Automatically drop objects that depend on the dropped column or constraint (for example, views referencing the column), and in turn all objects that depend on those objects."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"RESTRICT"})})}),"\n",(0,t.jsx)(n.p,{children:"Refuse to drop the column or constraint if there are any dependent objects. This is the default behavior."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"trigger_name"})})}),"\n",(0,t.jsx)(n.p,{children:"Name of a single trigger to deactivate or enable."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ALL"})})}),"\n",(0,t.jsx)(n.p,{children:"Deactivate or activate all triggers belonging to the foreign table. (This requires superuser privilege if any of the triggers are internally generated triggers. The core system does not add such triggers to foreign tables, but add-on code could do so.)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"USER"})})}),"\n",(0,t.jsx)(n.p,{children:"Deactivate or activate all triggers belonging to the foreign table except for internally generated triggers."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"parent_table"})})}),"\n",(0,t.jsx)(n.p,{children:"A parent table to associate or de-associate with this foreign table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,t.jsx)(n.p,{children:"The user name of the new owner of the foreign table."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,t.jsx)(n.p,{children:"The name of the schema to which the foreign table will be moved."}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.p,{children:["The key word ",(0,t.jsx)(n.code,{children:"COLUMN"})," is noise and can be omitted."]}),"\n",(0,t.jsxs)(n.p,{children:["Consistency with the foreign server is not checked when a column is added or removed with ",(0,t.jsx)(n.code,{children:"ADD COLUMN"})," or ",(0,t.jsx)(n.code,{children:"DROP COLUMN"}),", a ",(0,t.jsx)(n.code,{children:"NOT NULL"})," or ",(0,t.jsx)(n.code,{children:"CHECK"})," constraint is added, or a column type is changed with ",(0,t.jsx)(n.code,{children:"SET DATA TYPE"}),". It is your responsibility to ensure that the table definition matches the remote side."]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-foreign-table",children:"CREATE FOREIGN TABLE"})," for a further description of valid parameters."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"To mark a column as not-null:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER FOREIGN TABLE distributors ALTER COLUMN street SET NOT NULL;\n"})}),"\n",(0,t.jsx)(n.p,{children:"To change the options of a foreign table:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER FOREIGN TABLE myschema.distributors \n    OPTIONS (ADD opt1 'value', SET opt2 'value2', DROP opt3 'value3');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(n.p,{children:["The forms ",(0,t.jsx)(n.code,{children:"ADD"}),", ",(0,t.jsx)(n.code,{children:"DROP"}),", and ",(0,t.jsx)(n.code,{children:"SET DATA TYPE"})," conform with the SQL standard. The other forms are Cloudberry Database extensions of the SQL standard. The ability to specify more than one manipulation in a single ",(0,t.jsx)(n.code,{children:"ALTER FOREIGN TABLE"})," command is also a Cloudberry Database extension."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"ALTER FOREIGN TABLE ... DROP COLUMN"})," to drop the only column of a foreign table, leaving a zero-column table. This is an extension of SQL, which disallows zero-column foreign tables."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"}),", ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-foreign-table",children:"CREATE FOREIGN TABLE"}),", ",(0,t.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-foreign-table",children:"DROP FOREIGN TABLE"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(67294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);