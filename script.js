const caption = document.querySelector('.caption');
const separator = document.querySelector('.separator');

chrome.storage.sync.get(['caption', 'separator'], function(items) {
	if(items.caption) {
		caption.value = items.caption;
	}
    separator.checked = items.separator;
});

caption.onkeyup = () => {
    chrome.storage.sync.set({'caption': caption.value});
};

separator.onchange = () => {
    chrome.storage.sync.set({'separator': separator.checked});
};