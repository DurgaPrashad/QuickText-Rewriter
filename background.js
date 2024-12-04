export default function initBackgroundScript() {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "rewriteText",
      title: "Rewrite selected text",
      contexts: ["selection"]
    });
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "rewriteText") {
      chrome.tabs.sendMessage(tab.id, { action: "rewriteText", text: info.selectionText });
    }
  });
}

