// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const themes = {
        light: {
            name: 'Light Theme',
            preview: '#ffffff'
        },
        dark: {
            name: 'Dark Theme', 
            preview: '#15202b'
        }
    };

    const colorPicker = document.getElementById('color-picker');

    Object.entries(themes).forEach(([key, theme]) => {
        const button = document.createElement('button');
        button.className = 'flex items-center w-full p-2 hover:bg-gray-100 rounded mb-2';
        button.innerHTML = `
            <span class="flex-1">${theme.name}</span>
            <div class="w-4 h-4 rounded" style="background-color: ${theme.preview}"></div>
        `;

        button.addEventListener('click', () => {
            chrome.storage.sync.set({ activeTheme: key });
            
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {
                    type: 'themeChange',
                    theme: key
                });
            });
        });

        colorPicker.appendChild(button);
    });

    // Show active theme if any
    chrome.storage.sync.get(['activeTheme'], (result) => {
        if (result.activeTheme) {
            // could highlight active theme button here
        }
    });
});