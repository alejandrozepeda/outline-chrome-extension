chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let tags = document.body.getElementsByTagName("*");
    let style = request.is_active ? 'none' : '1px solid red';
    document.body.style.outline = style;
    for (let i = 0; i < tags.length; i++) {
        tags[i].style.outline = style;
    }
    chrome.storage.local.set({"is_active": !request.is_active});
});