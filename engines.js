/**
 * CSV-style list of custom search engines
 * LABEL,SHORTCUT,URL (with %s for search term)
 */
window.engines = `
Duck Duck Go,ddg,https://duckduckgo.com/?q=%s
GitHub Code Search,cs,https://cs.github.com
GitHub,gh,https://github.com/%s
KhanAcademy.org,ko,https://khanacademy.org
Khan Confluence,kc,https://khanacademy.atlassian.net/wiki/dosearchsite.action?queryString=%s
Khan Dev Admin,kda,https://khanacademy.org/devadmin/
Khan Google Docs,kgd,https://drive.google.com/drive/search?q=%s%20parent:1kFJl6pRLb00a_T_UbotX0InwWORnrv-j
Khan Jira,kj,https://khanacademy.atlassian.net/secure/QuickSearch.jspa?searchString=%s
Khan localhost,kl,localhost:8090
Khan Repo,kr,https://github.com/khan/%s
MDN,mdn,https://developer.mozilla.org/en-US/search?q=%s
My GitHub Repo,mr,https://github.com/seanmcp/%s
My website,me,https://seanmcp.com
Puzzle Maker,pzl,https://www.jigsawexplorer.com/create-a-custom-jigsaw-puzzle/
Stack Overflow,so,https://stackoverflow.com/search?q=%s
Wikipedia,wk,https://en.wikipedia.org/w/index.php?title=Special:Search&search=%s
Wonder Blocks,wb,https://khan.github.io/wonder-blocks/
Phind,ph,https://www.phind.com/search?q=%s
`;
