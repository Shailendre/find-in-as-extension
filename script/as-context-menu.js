// context menu id
const CONTEXT_MENU_ID = "search-in-as-context-menu";

// create a context-menu
chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "Search in AlphaSense",
    contexts: ["selection"],
});

// add listener for context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {

    if (info.menuItemId === CONTEXT_MENU_ID) {

        let phrase = info.selectionText;
        console.log("selected phrase " + phrase);
        chrome.tabs.create(
            {'url': chrome.runtime.getURL("../static/send.html")},
            function (tab){

            });
    }
});