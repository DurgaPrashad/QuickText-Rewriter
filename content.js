export default function initContentScript() {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "rewriteText") {
      rewriteText(request.text);
    }
  });
}

async function rewriteText(text) {
  try {
    const response = await fetch('https://api.example.com/rewrite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    showRewrittenText(data.rewrittenText);
  } catch (error) {
    console.error('Error:', error);
    showRewrittenText('An error occurred while rewriting the text.');
  }
}

function showRewrittenText(text) {
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 9999;
    max-width: 300px;
  `;
  
  popup.innerHTML = `
    <h3>Rewritten Text:</h3>
    <p>${text}</p>
    <button id="closePopup">Close</button>
  `;
  
  document.body.appendChild(popup);
  
  document.getElementById('closePopup').addEventListener('click', () => {
    document.body.removeChild(popup);
  });
}

