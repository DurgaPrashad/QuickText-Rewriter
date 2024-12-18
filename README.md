# QuickText Rewriter Chrome Extension(pro)

## Overview

QuickText Rewriter is a Chrome Extension that leverages AI to rewrite, simplify, or rephrase selected text on any webpage. This tool is designed to enhance clarity, originality, or adapt content for different audiences, making it invaluable for students, professionals, and creative writers.

## Features

- Rewrite selected text on any webpage
- Seamless integration with Chrome's context menu
- AI-powered rephrasing using the Rewrite API
- Instant results displayed in a convenient pop-up

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The QuickText Rewriter extension should now appear in your Chrome toolbar.

## Usage

1. Select any text on a webpage.
2. Right-click to open the context menu.
3. Choose "Rewrite selected text" from the menu.
4. A pop-up will appear with the rewritten text.

## Development

### Prerequisites

- Google Chrome browser
- Basic knowledge of JavaScript and Chrome Extension development

### Project Structure

- `manifest.json`: Extension configuration
- `init.js`: Initializes background and content scripts
- `background.js`: Handles context menu creation and click events
- `content.js`: Manages text rewriting and result display
- `popup.html` & `popup.js`: Extension popup interface

### API Integration

Replace the placeholder API endpoint in `content.js` with your actual Rewrite API endpoint:

```javascript
const response = await fetch('https://your-actual-api-endpoint.com/rewrite', {
  // ... rest of the fetch configuration
});
