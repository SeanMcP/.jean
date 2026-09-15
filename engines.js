/**
 * CSV-style list of custom search engines
 * LABEL,SHORTCUT,URL (with %s for search term)
 */
window.engines = `
Allegheny County Libraries,acl,https://acl.bibliocommons.com/v2/search?searchType=smart&query=%s
Bible Gateway,bg,https://www.biblegateway.com/quicksearch/?quicksearch=%s&version=NET
Diff Text,diff,https://difftext.com/
Duck Duck Go,ddg,https://duckduckgo.com/?q=%s
GitHub,gh,https://github.com/%s
GitHub Notifications,ghn,https://github.com/notifications
GitHub Search,ghs,https://github.com/search?q=%s
GitHub Pages,ghp,https://seanmcp.github.io/%s
Google,go,https://www.google.com/search?q=%s
Hacker News,hn,https://news.ycombinator.com/front
Kagi,k,https://kagi.com/search?q=%s
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
`;
