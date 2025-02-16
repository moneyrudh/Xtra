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

        div[aria-label="Trending"] form[role="search"] input[data-testid="SearchBox_Search_Input"] {
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

        /* ----- MAIN TWITTER BACKGROUND ----- */
        body,
        main,
        div[aria-label="Trending"],
        div[aria-label="Trending"] > div > div > div:not([data-testid*="UserAvatar"]),
        [role="region"] {
            background-color: var(--background-main) !important;
        }

        /* ----- SPECIFICALLY FOR POST TWEET REGION ----- */
        div[aria-label="Home timeline"] > div:nth-child(3) div[data-testid="toolBar"],
        div[aria-label="Home timeline"] > div:nth-child(3) > div > div:nth-child(2),
        div[aria-label="Home timeline"] > div:nth-child(3) > div > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div:nth-child(2) {
            background-color: var(--background-main) !important;
        }

        /* ----- UNSETTING MAIN USER'S IMAGE CSS PREVIOUSLY OVERRIDDEN BY CSS ABOVE ----- */
        div[aria-label="Home timeline"] div[data-testid*="UserAvatar"] div {
            background-color: unset !important;
        }

        /* ----- "FOR YOU", "FOLLOWING" ----- */
        div[data-testid="ScrollSnap-SwipeableList"] {
            background-color: var(--background-main) !important;
        }

        /* The search container */
        form[role="search"] {
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


        /* -------------------------- */
        /* ----- MISCHELLANEOUS ----- */
        /* -------------------------- */

        h1[role="heading"] a[aria-label="X"] svg {
            color: #FFD700 !important;
        }

        button[aria-label="Account menu"] svg[data-testid="icon-verified"] {
            color: #FFD700 !important;
        }

        /* Brand colors & interactions */
        [data-testid="like"] {
            color: var(--color-red-like) !important;
        }

        [data-testid="retweet"] {
            color: var(--color-green-repost) !important;
        }

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