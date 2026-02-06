/**
 * CSV-style list of custom search engines
 * LABEL,SHORTCUT,URL (with %s for search term)
 */
window.engines = `
Bible Gateway,bg,https://www.biblegateway.com/quicksearch/?quicksearch=%s&version=NET
Duck Duck Go,ddg,https://duckduckgo.com/?q=%s
GitHub,gh,https://github.com/%s
GitHub Notifications,ghn,https://github.com/notifications
GitHub Search,ghs,https://github.com/search?q=%s
GitHub Pages,ghp,https://seanmcp.github.io/%s
Google,go,https://www.google.com/search?q=%s
Kagi,k,https://kagi.com/search?q=%s
KhanAcademy.org,ko,https://khanacademy.org
KhanAcademy.dev,kd,https://khanacademy.dev
Khan BigQuery,kbq,https://console.cloud.google.com/bigquery?project=khan-academy
Khan Component Runner,kcr,https://www.khanacademy.org/devadmin/khanmigo/component-runner
Khan Confluence,kc,https://khanacademy.atlassian.net/wiki/dosearchsite.action?queryString=%s
Khan Datastore,kds,https://console.cloud.google.com/datastore/databases/-default-/entities/query/kind?project=khan-academy
Khan Dev Admin,kda,https://khanacademy.org/devadmin/
Khan Google Docs,kgd,https://drive.google.com/drive/search?q=%s%20parent:1kFJl6pRLb00a_T_UbotX0InwWORnrv-j
Khan GraphQL,kgql,https://www.khanacademy.org/devadmin/graphql
Khan Jira,kj,https://khanacademy.atlassian.net/secure/QuickSearch.jspa?searchString=%s
Khan Kaid,kk,https://khanacademy.org/devadmin/users/%s
Khan PRs,kpr,https://github.com/pulls?q=is%3Aopen+is%3Apr+author%3ASeanMcP+archived%3Afalse+user%3AKhan
Khan Repo,kr,https://github.com/khan/%s
Khan Storybook,ksb,http://localhost:8228
Khan Support Log,ksl,https://khanacademy.atlassian.net/wiki/spaces/ll/pages/4262592520/LangLit+Team+Support+Log+SY25-26
Khan Team-internal event doc,kti,https://docs.google.com/spreadsheets/d/14kG5--J8W9jj1mj2WLOFq3rOCWHT8faY1UgpCkPk1p8/edit?gid=883859295#gid=883859295
Khan frontend diff,kfd,https://github.com/Khan/frontend/compare/main...%s
Khan webapp diff,kwd,https://github.com/Khan/webapp/compare/master...%s
MDN,mdn,https://developer.mozilla.org/en-US/search?q=%s
Merriam-Webster Dictionary,d,https://www.merriam-webster.com/dictionary/%s
Merriam-Webster Thesaurus,t,https://www.merriam-webster.com/thesaurus/%s
My GitHub Repo,mr,https://github.com/seanmcp/%s
My GitHub Stars,ms,https://github.com/SeanMcP?tab=stars&q=%s
My website,me,https://seanmcp.com
Playgrounds,pg,https://playgrounds.seanmcp.com/#%s
Puzzle Maker,pzl,https://www.jigsawexplorer.com/create-a-custom-jigsaw-puzzle/
Stack Overflow,so,https://stackoverflow.com/search?q=%s
seanmcp.com,sm,https://www.seanmcp.com/search/?q=%s
Wikipedia,wk,https://en.wikipedia.org/w/index.php?title=Special:Search&search=%s
Wonder Blocks,wb,https://khan.github.io/wonder-blocks/
Wonder Stuff,ws,https://khan.github.io/wonder-stuff/
Writing Coach,wc,https://khanacademy.org/writing-coach/%s
Writing Coach Dev,wcd,https://khanacademy.dev/writing-coach/%s
Writing Coach Inspect,wci,https://khanacademy.dev/writing-coach/inspect/%s
`;
