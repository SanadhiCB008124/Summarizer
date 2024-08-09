chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: "extractContent" }, (response) => {
      console.log('Content extracted:', response.content);
    });
  });
