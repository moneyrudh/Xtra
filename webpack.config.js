const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        popup: './src/popup/popup.js',
        background: './src/background/background.js',
        content: './src/content/content.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/[name].js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "manifest.json" },
                { from: "src/popup/popup.html", to: "popup/popup.html" },
                { from: "src/popup/styles", to: "popup/styles" },
                { from: "dist/styles/tailwind.min.css", to: "styles/tailwind.min.css" }
            ]
        })
    ]
}