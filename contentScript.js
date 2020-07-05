const textArea = document.querySelector('#content .reply textarea');

if(textArea) {
    chrome.storage.sync.get(['caption', 'separator'], function(items) {
        if(items.separator) {
            textArea.value += '\r\n---------------------------------------------------------------------';
		}
        textArea.value += '\r\n' + items.caption;
    });
}