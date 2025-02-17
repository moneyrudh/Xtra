// content.js
const themes = {
    light: {
        // Text colors
        '--text-color-primary': '#ff0000',
        '--text-color-secondary': '#00ff00',
        '--text-color-tertiary': '#536471',   // Less important text elements
        
        // Main backgrounds
        '--background-main': '#ffffff',       // The main black background
        '--background-second': '#ffffff',     // Recommendations, composer, chat bg
        '--background-third': '#eff3f4',      // Third level backgrounds
        
        // Twitter's brand colors 
        '--color-blue-primary': '#1d9bf0',    
        '--color-blue-hover': '#1a8cd8',     
        '--color-red-like': '#f91880',        
        '--color-green-repost': '#00ba7c',    
        
        // Border colors
        '--border-color': '#eff3f4',
        
        // Chat colors
        '--chat-background': '#ffffff',
        '--chat-text': '#0f1419' 
    },
    dark: {
        // Text colors
        '--text-color-primary': '#ffffff',
        '--text-color-secondary': '#71767b',
        '--text-color-tertiary': '#8b98a5',
        
        // Main backgrounds 
        '--background-main': '#000000',       // The main black bg
        '--background-second': '#15202b',     // Side sections bg
        '--background-third': '#273340',      // Third level backgrounds
        
        // Brand colors stay same in dark mode
        '--color-blue-primary': '#1d9bf0',
        '--color-blue-hover': '#1a8cd8',
        '--color-red-like': '#f91880',
        '--color-green-repost': '#00ba7c',
        
        '--border-color': '#38444d',
        
        '--chat-background': '#15202b',
        '--chat-text': '#e7e9ea'
    }
};

function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    let styleElement = document.getElementById('xtra-theme');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'xtra-theme';
        document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
        /* Root variables */
        :root {
            ${Object.entries(theme).map(([key, value]) => `${key}: ${value};`).join(';\n')}
        }

        /* ------------------------------ */
        /* ----- PRIMARY TEXT COLOR ----- */
        /* ------------------------------ */

        /* ----- SIDEBAR NAVIGATION ----- */
        [data-testid*="AppTabBar_"][role="link"] [dir="ltr"],
        [role="navigation"] [dir="ltr"],
        [data-testid*="_tab"] [dir="ltr"],
        [data-testid="AppTabBar_More_Menu"] [dir="ltr"] {
            color: var(--text-color-primary) !important;
        }

        /* ----- SIDEBAR NAVIGATION SVGS ----- */
        [role="navigation"] svg {
            color: var(--text-color-primary) !important;
        }
        
        /* ----- TRENDING TAB TEXT ----- */
        div[data-testid="trend"] > div:first-child {
            color: var(--text-color-primary) !important;
        }

        div[aria-label="Trending"] span > span > span,
        div[aria-label="Trending"] div[dir="ltr"] > span {
            color: var(--text-color-primary) !important;
        }

        /* ----- HOME PAGE SEARCH BOX INPUT ----- */
        div[aria-label="Trending"] form[role="search"] input[data-testid="SearchBox_Search_Input"] {
            color: var(--text-color-primary) !important;
        }

        /* ----- CONNECT TEXT CONNECT PAGE ----- */
        div[aria-label="Home timeline"][tabindex="0"] div > h2[dir="ltr"][role="heading"] > span,
        /* ----- SETTINGS SVG CONNECT PAGE ----- */
        div[aria-label="Home timeline"][tabindex="0"] a[aria-label="Settings"][role="link"] > div[dir="ltr"] > svg,
        /* ----- BACK BUTTON CONNECT PAGE ----- */
        div[aria-label="Home timeline"][tabindex="0"] button[aria-label="Back"][role="button"] > div[dir="ltr"] > svg,
        div[aria-label="Home timeline"][tabindex="0"] div > div > a[role="link"] > div[dir="ltr"] > svg {
            color: var(--text-color-primary) !important;
        }

        /* ----- CONNECT TEXT USER DISPLAY NAME TEXT ----- */
        div[aria-label="Home timeline"][tabindex="0"] button[data-testid="UserCell"] a > div > div[dir="ltr"] > span > span {
            color: var(--text-color-primary) !important;
            text-decoration: none !important;
        }

        /* ----- CONNECT TEXT USER DISPLAY NAME TEXT ----- */
        div[aria-label="Home timeline"][tabindex="0"] button[data-testid="UserCell"] a > div > div[dir="ltr"] > span:has(span):hover {
            text-decoration: underline !important;
            text-decoration-color: var(--text-color-primary) !important;
        }

        /* ----- CONNECT TEXT USER BIO TEXT ----- */
        div[aria-label="Home timeline"][tabindex="0"] button[data-testid="UserCell"] div[dir="auto"] > span:not(a) {
            color: var(--text-color-primary) !important;
        }

        /* ----- EXPLORE PAGE RANDOM NOTIFICATION ----- */
        div[data-testid="cellInnerDiv"] > div > div > button[role="button"] > a[role="link"] > h2 > div[dir="ltr"] > span,
        div[data-testid="cellInnerDiv"] > div > div > button[role="button"] > a[role="link"] > h2 > div svg {
            color: var(--text-color-primary) !important;
        }

        /* ----- LIVE STREAM SIDEBAR NOTIFICATION ----- */
        div[aria-label="Trending"] h2[role="heading"],
        section[aria-labelledby="accessible-list-1"] h2[role="heading"],
        section[aria-labelledby="accessible-list-1"] h2[role="heading"] div[dir="ltr"],
        div[data-testid="trend"] div {
            color: var(--text-color-primary) !important;
        }

        /* ----- TWEET USER DISPLAY NAME ----- */
        [data-testid="User-Name"] > div:first-child div[dir="ltr"] {    
            color: var(--text-color-primary) !important;
        }

        /* ----- TWEET ARTICLE TEXT ----- */
        [data-testid="tweetText"],
        article[data-testid="tweet"] {
            color: var(--text-color-primary) !important;
        }

        /* ----- POST TWEET TEXT AREA HOME PAGE ----- */
        div[data-testid="tweetTextarea_0"] span {
            color: var(--text-color-primary) !important;
        }

        /* ----- "WHO TO FOLLOW" SIDEBAR ----- */
        aside[role="complementary"] div {
            color: var(--text-color-primary) !important;
        }

        /* ----- MAIN USER DISPLAY NAME BOTTOM LEFT SCREEN ----- */
        button[aria-label="Account menu"] div[dir="ltr"] span {
            color: var(--text-color-primary) !important;
        }

        /* ----- "POST" BUTTON ON HOME PAGE ----- */
        button[data-testid="tweetButtonInline"] {
            background-color: var(--text-color-primary) !important;
        }

        /* ----- HOVER USER CARD ----- */
        /* ----- FOLLOW BUTTON ----- */
        div[data-testid="hoverCardParent"] button[aria-label*="Follow"] span,
        /* ----- PROFILE SUMMARY SVG ----- */
        div[data-testid="hoverCardParent"] button[role="button"] > div[dir="ltr"] > svg,
        /* ----- PROFILE SUMMARY TEXT ----- */
        div[data-testid="hoverCardParent"] button[role="button"] > div[dir="ltr"] > span {
            color: var(--text-color-primary) !important;
        }

        /* ----- HOVER USER CARD BIO ----- */
        div[data-testid="hoverCardParent"] div[dir="auto"] span:not(a) {
            color: var(--text-color-primary) !important;
        }

        /* ----- HOVER USER CARD PRIMARY TEXT ----- */
        div[data-testid="hoverCardParent"] a[role="link"] div[dir="ltr"] > span {
            color: var(--text-color-primary) !important;
        }

        /* ----- HOVER USER CARD FOLLOWER/FOLLOWING COUNT ----- */
        div[data-testid="hoverCardParent"] div > a[role="link"][dir="ltr"] > span:first-child {
            color: var(--text-color-primary) !important;
        }

        /* -------------------------------- */
        /* ----- SECONDARY TEXT COLOR ----- */
        /* -------------------------------- */

        /* ----- MAIN USERNAME BOTTOM LEFT SCREEN ----- */
        button[aria-label="Account menu"] div[tabindex="-1"] div[dir="ltr"] span {
            color: var(--text-color-secondary) !important;
        }

        /* ----- TRENDING TAB SUBTEXT ----- */
        div[data-testid="trend"] div[dir="ltr"] span[dir="ltr"] span {
            color: var(--text-color-secondary) !important;
        }

        /* ----- TRENDING TAB "FOLLOWS YOU" MESSAGE ----- */
        div[aria-label="Trending"] aside[aria-label*="follow"][role="complementary"] li[data-testid="UserCell"] div[dir="ltr"][data-testid="userFollowIndicator"] span {
            color: var(--text-color-secondary) !important;
        }

        div[aria-label="Trending"] aside[aria-label*="Relevant"] li[data-testid="UserCell"] div > a[role="link"][tabindex="-1"] > div > div > span {
            color: var(--text-color-secondary) !important;
        }

        /* ----- CONNECT TEXT USER DISPLAY NAME TEXT ----- */
        div[aria-label="Home timeline"][tabindex="0"] button[data-testid="UserCell"] a[tabindex="-1"] > div > div[dir="ltr"] > span {
            color: var(--text-color-secondary) !important;
        }

        /* ----- WHO TO FOLLOW USERNAMES ----- */
        div[aria-label="Trending"] aside[aria-label*="follow"][role="complementary"] li[data-testid="UserCell"] a[tabindex="-1"] > div > div[dir="ltr"] > span {
            color: var(--text-color-secondary) !important;
        }
        
        /* ----- ???????????????????? ----- */
        section[aria-labelledby="accessible-list-1"] span[dir="ltr"] {
            color: var(--text-color-secondary) !important;
        }

        /* ----- TWEET/POST USERNAME, SVGs, BUTTONS ----- */
        [data-testid="User-Name"] > div:nth-child(2) div[dir="ltr"],
        [role="button"] > div[dir="ltr"]:not([data-testid="tweetText"]),
        article[data-testid="tweet"] time,
        article[data-testid="tweet"] [role="link"] svg:not([data-testid="icon-verified"]),
        article[data-testid="tweet"] span[data-testid="app-text-transition-container"] > span > span {
            color: var(--text-color-secondary) !important;
        }

        /* ----- HOVER USER CARD USERNAME ----- */
        div[data-testid="hoverCardParent"] a[role="link"][tabindex="-1"] div[dir="ltr"] span {
            color: var(--text-color-secondary) !important;
        }

        /* ----- HOVER USER CARD "FOLLOWS YOU" TEXT ----- */
        div[data-testid="hoverCardParent"] div > div > div[dir="ltr"] > span {
            color: var(--text-color-secondary) !important;
        }

        /* ----- HOVER USER CARD FOLLOWER/FOLLOWING TEXT ----- */
        div[data-testid="hoverCardParent"] div > a[role="link"][dir="ltr"] > span:nth-child(2) {
            color: var(--text-color-secondary) !important;
        }

        /* ------------------------------- */
        /* ----- TERTIARY TEXT COLOR ----- */
        /* ------------------------------- */

        /* TIME, ???, ???, ???, ???, ??? */
        time,
        [data-testid="socialContext"],
        input::placeholder,
        div[dir="ltr"][aria-hidden="true"],
        div[dir="ltr"][aria-label*="ago"],
        [data-testid="app-text-transition-container"] {
            color: var(--text-color-tertiary) !important;
        }

        /* ------------------------------------ */
        /* ----- PRIMARY BACKGROUND COLOR ----- */
        /* ------------------------------------ */

        /* ----- TRENDING TAB BACKGROUND COLOR ----- */
        div[aria-label="Trending"] div[data-testid="pill-contents-container"] > div {
            background-color: var(--background-main) !important;
        }

        div[aria-label="Trending"] > div > div:has(form[aria-label="Search"]) {
            background-color: var(--background-main) !important;
        }

        /* ----- MAIN TWITTER BACKGROUND ----- */
        body,
        main,
        div[aria-label*="Trending"],
        div[aria-label="Trending"] > div > div > div:not([data-testid*="UserAvatar"]),
        [role="region"][aria-label*="Timeline"] {
            background-color: var(--background-main) !important;
        }

        /* ----- TWEET ON HOVER ----- */
        div[data-testid="cellInnerDiv"]:has(div > div > article[role="article"][tabindex="0"][data-testid="tweet"]):hover {
            background-color: color-mix(in srgb, var(--background-main) 92%, var(--text-color-primary) 8%) !important;
        }

        /* ----- TWEET ON HOVER ----- */
        div[data-testid="cellInnerDiv"] div > div > article[role="article"][tabindex="0"][data-testid="tweet"] div[tabindex="0"][role="link"] > div:hover {
            background-color: color-mix(in srgb, var(--background-main) 88%, var(--text-color-primary) 12%) !important;
        }

        /* ----- HOVER USER CARD BACKGROUND ----- */
        div[data-testid="hoverCardParent"] > div > div > div[data-testid="HoverCard"] {
            background-color: var(--background-main) !important;
        }

        /* ----- EXPLORE PAGE RANDOM NOTIFICATION ----- */
        div[data-testid="cellInnerDiv"]:has(div > div > button[role="button"] > a) * {
            background-color: unset !important;
        }
        div[data-testid="cellInnerDiv"]:has(div > div > button[role="button"] > a):hover {
            background-color: color-mix(in srgb, var(--background-main) 90%, var(--text-color-primary) 10%) !important;
        }

        /* ----- SPECIFICALLY FOR POST TWEET REGION ----- */
        div[aria-label="Home timeline"] > div:nth-child(3) div[data-testid="toolBar"],
        div[aria-label="Home timeline"] > div:nth-child(3) > div > div:nth-child(2),
        div[aria-label="Home timeline"] > div:nth-child(3) > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div:nth-child(2) {
            background-color: var(--background-main) !important;
        }

        /* ----- POST REPLIES WITHIN POST ----- */
        div[data-testid="primaryColumn"] > div[aria-label="Home timeline"][tabindex="0"] > section[role="region"] div[data-testid="inline_reply_offscreen"] > div,
        div[data-testid="primaryColumn"] > div[aria-label="Home timeline"][tabindex="0"] > section[role="region"] div[data-testid="inline_reply_offscreen"] div[data-testid="toolBar"],
        div[data-testid="primaryColumn"] > div[aria-label="Home timeline"][tabindex="0"] > section[role="region"] div[data-testid="inline_reply_offscreen"] > div > div > div > div > div > div > div > div > div {
            background-color: var(--background-main) !important;
        }

        /* ----- UNSETTING MAIN USER'S IMAGE CSS PREVIOUSLY OVERRIDDEN BY CSS ABOVE ----- */
        div[aria-label="Home timeline"] div[data-testid*="UserAvatar"] div,
        article[data-testid="tweet"] div[data-testid="Tweet-User-Avatar"] * {
            background-color: unset !important;
        }

        /* ----- "FOR YOU", "FOLLOWING" ----- */
        div[data-testid="ScrollSnap-SwipeableList"] {
            background-color: var(--background-main) !important;
        }

        /* ----- SEARCH CONTAINERS ----- */
        /* ----- HOME PAGE SEARCH ----- */
        form[role="search"],
        /* ----- HOME PAGE SEARCH ----- */
        div[data-testid="primaryColumn"] > div[aria-label="Home timeline"][tabindex="0"] > div > div > div:not(has:(> div[role="status"] > button[tabindex="-1"])) {
            background-color: var(--background-main) !important;
        }

        /* ----- SEARCHBAR INPUT ELEMENT ----- */
        form[role="search"] input[data-testid="SearchBox_Search_Input"] {
            background-color: transparent !important;
        }

        /* ----- CLEAR NESTED SEARCHBAR BACKGROUND ---- */
        form[role="search"] div {
            background-color: transparent !important;
        }

        /* ----- SEARCHBAR PLACEHOLDER DROPDOWN + ACTUAL RESULTS DROPDOWN ----- */
        form[role="search"] div[role="listbox"],
        form[role="search"] div:has(> div[data-testid="typeaheadEmptySearch"]) {
            background-color: var(--background-main) !important;
        }

        /* ----- "POST" BUTTON FONT COLOR ----- */
        button[data-testid="tweetButtonInline"] span {
                color: var(--background-main) !important;
        }

        /* ----- "CONNECT"/"POST" BACKGROUND UPON CLICKING ----- */
        div[data-testid="primaryColumn"] > div[aria-label="Home timeline"][tabindex="0"] > div > div > div > div > div > div {
            background-color: var(--background-main) !important;
        }

        /* -------------------------------------- */
        /* ----- SECONDARY BACKGROUND COLOR ----- */
        /* -------------------------------------- */

        /* Side sections, composer, chat backgrounds */
        [data-testid="primaryColumn"],
        [data-testid="DMDrawer"],
        [role="complementary"],
        [data-testid="sidebarColumn"] {
            background-color: var(--background-second) !important;
        }

        /* ------------------------------------- */
        /* ----- TERTIARY BACKGROUND COLOR ----- */
        /* ------------------------------------- */

        /* ----- TRENDING TAB "FOLLOWS YOU" MESSAGE ----- */
        div[aria-label="Trending"] aside[aria-label*="follow"][role="complementary"] li[data-testid="UserCell"] div[dir="ltr"][data-testid="userFollowIndicator"] {
            background-color: var(--background-tertiary) !important;
        }

        /* -------------------------- */
        /* ----- MISCHELLANEOUS ----- */
        /* -------------------------- */

        h1[role="heading"] a[aria-label="X"] svg {
            color: #FFD700 !important;
        }

        button[aria-label="Account menu"] svg[data-testid="icon-verified"] {
            color: #FFD700 !important;
        }

        /* ----- POST REPLY, LIKES, RETWEET BUTTON COLORS ----- */
        article[data-testid="tweet"] div[role="group"] button[data-testid="reply"]:hover > div[dir="ltr"] svg,
        article[data-testid="tweet"] div[role="group"] button[data-testid="reply"]:hover > div[dir="ltr"] span {
            color: var(--color-blue-primary) !important;
        }

        article[data-testid="tweet"] div[role="group"] button[data-testid="like"]:hover > div[dir="ltr"] svg,
        article[data-testid="tweet"] div[role="group"] button[data-testid="like"]:hover > div[dir="ltr"] span {
            color: var(--color-red-like) !important;
        }

        article[data-testid="tweet"] div[role="group"] button[data-testid="unlike"] > div[dir="ltr"] svg,
        article[data-testid="tweet"] div[role="group"] button[data-testid="unlike"] > div[dir="ltr"] span {
            color: var(--color-red-like) !important;
        }
            
        article[data-testid="tweet"] div[role="group"] button[data-testid="retweet"]:hover > div[dir="ltr"] svg,
        article[data-testid="tweet"] div[role="group"] button[data-testid="retweet"]:hover > div[dir="ltr"] span {
            color: var(--color-green-repost) !important;
        }

        article[data-testid="tweet"] div[role="group"] button[data-testid="unretweet"] > div[dir="ltr"] svg,
        article[data-testid="tweet"] div[role="group"] button[data-testid="unretweet"] > div[dir="ltr"] span {
            color: var(--color-green-repost) !important;
        }

        article[data-testid="tweet"] div[role="group"] button[data-testid="bookmark"]:hover > div[dir="ltr"] svg,
        article[data-testid="tweet"] div[role="group"] button[data-testid="bookmark"]:hover > div[dir="ltr"] span {
            color: var(--color-blue-primary) !important;
        }

        // [data-testid="retweet"] {
        //     color: var(--color-green-repost) !important;
        // }

        /* Chat elements inherit the secondary background */
        [data-testid="DMDrawer"],
        [data-testid="DM_conversation"] {
            background-color: var(--background-second) !important;
            color: var(--chat-text) !important;
        }
    `;
}

// Event listeners and initialization remain the same
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'themeChange') {
        applyTheme(request.theme);
        sendResponse({ success: true });
    }
});

chrome.storage.sync.get(['activeTheme'], (result) => {
    if (result.activeTheme) {
        applyTheme(result.activeTheme);
    }
});

const observer = new MutationObserver((mutations) => {
    chrome.storage.sync.get(['activeTheme'], (result) => {
        if (result.activeTheme) {
            applyTheme(result.activeTheme);
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});