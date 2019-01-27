chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.storage.local.get(['is_active'], function (result) {
            chrome.tabs.sendMessage(tabs[0].id, {is_active: result.is_active});
            let icon = result.is_active ? 'icons/outline-black.png' : 'icons/outline.png';
            chrome.browserAction.setIcon({path: icon});
        });
    });
});