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
Google,go,https://www.google.com/search?q=%s
Localhost,lh,http://localhost:%s
Kagi,k,https://kagi.com/search?q=%s
KhanAcademy.org,ko,https://khanacademy.org
Khan Confluence,kc,https://khanacademy.atlassian.net/wiki/dosearchsite.action?queryString=%s
Khan Dev Admin,kda,https://khanacademy.org/devadmin/
Khan Google Docs,kgd,https://drive.google.com/drive/search?q=%s%20parent:1kFJl6pRLb00a_T_UbotX0InwWORnrv-j
Khan GraphQL,kgql,https://www.khanacademy.org/devadmin/graphql
Khan Hotel,kh,http://localhost:2000
Khan Jira,kj,https://khanacademy.atlassian.net/secure/QuickSearch.jspa?searchString=%s
Khan localhost,kl,http://localhost:8090
Khan PRs,kpr,https://github.com/pulls?q=is%3Aopen+is%3Apr+author%3ASeanMcP+archived%3Afalse+user%3AKhan
Khan Repo,kr,https://github.com/khan/%s
Khan Storybook,ksb,http://localhost:8228
Khan webapp diff,kd,https://github.com/Khan/webapp/compare/master...%s
Khan Writing Coach Report,kwcr,khanacademy.org/teacher/report/writing-coach/%s
MDN,mdn,https://developer.mozilla.org/en-US/search?q=%s
My GitHub Repo,mr,https://github.com/seanmcp/%s
My GitHub Stars,ms,https://github.com/SeanMcP?tab=stars&q=%s
My website,me,https://seanmcp.com
Perplexity.ai,pp,https://www.perplexity.ai/
Phind,ph,https://www.phind.com/search?q=%s
Playgrounds,pg,https://playgrounds.seanmcp.com/#%s
Puzzle Maker,pzl,https://www.jigsawexplorer.com/create-a-custom-jigsaw-puzzle/
Stack Overflow,so,https://stackoverflow.com/search?q=%s
seanmcp.com,sm,https://www.seanmcp.com/search/?q=%s
URL,u,https://%s
Wikipedia,wk,https://en.wikipedia.org/w/index.php?title=Special:Search&search=%s
Wonder Blocks,wb,https://khan.github.io/wonder-blocks/
Wonder Stuff,ws,https://khan.github.io/wonder-stuff/
`;
