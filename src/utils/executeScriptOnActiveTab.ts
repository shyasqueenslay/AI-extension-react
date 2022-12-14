const executeScriptOnActiveTab = async (action: () => void) => {
  chrome.tabs.query({ active: true }, function (tabs) {
    const tab = tabs[0];

    if (tab.id) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id, allFrames: true },
          func: action,
        },
        (res) => console.log(res)
      );
    }
  });
};

export default executeScriptOnActiveTab;
