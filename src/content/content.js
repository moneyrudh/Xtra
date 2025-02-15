// content.js
const themes = {
    light: {
        // Text colors
        '--text-color-primary': '#ff0000',
        '--text-color-secondary': '#00ff00',
        '--text-color-tertiary': '#536471',   // Less important text elements
        
        // Main backgrounds
        '--background-main': '#0000ff',       // The main black background
        '--background-second': '#0000ff',     // Recommendations, composer, chat bg
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

        /* Navigation */
        [data-testid*="AppTabBar_"][role="link"] [dir="ltr"],
        [role="navigation"] [dir="ltr"],
        [data-testid*="_tab"] [dir="ltr"],
        [data-testid="AppTabBar_More_Menu"] [dir="ltr"] {
            color: var(--text-color-primary) !important;
        }
        
        /* Main content area - primary text */
        [data-testid="User-Name"] > div:first-child div[dir="ltr"],
        div[data-testid="trend"] > div:first-child {
            color: var(--text-color-primary) !important;
        }

        [data-testid="tweetText"],
        article[data-testid="tweet"] {
            color: var(--text-color-primary) !important;
        }

        [data-testid="User-Name"] > div:nth-child(2) div[dir="ltr"],
        [role="button"] > div[dir="ltr"]:not([data-testid="tweetText"]) {
            color: var(--text-color-secondary) !important;
        }

        /* Secondary text elements */
        time,
        [data-testid="socialContext"],
        [role="button"] .css-146c3p1,
        input::placeholder,
        div[dir="ltr"][aria-hidden="true"],
        div[dir="ltr"][aria-label*="ago"],
        [data-testid="app-text-transition-container"],
        div[dir="ltr"].css-146c3p1.r-14j79pv {
            color: var(--text-color-tertiary) !important;
        }

        /* Different background sections */
        /* Main black background */
        body {
            background-color: var(--background-main) !important;
        }

        /* Side sections, composer, chat backgrounds */
        [data-testid="primaryColumn"],
        .r-yfoy6g,
        [data-testid="DMDrawer"],
        [role="complementary"],
        [data-testid="sidebarColumn"],
        .r-18bvks7 {
            background-color: var(--background-second) !important;
        }

        /* Third level backgrounds (replies etc) */
        .r-1wyyakw,
        [data-testid="reply"],
        .r-eff27k {
            background-color: var(--background-third) !important;
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