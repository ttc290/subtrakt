// send the page title as a chrome message
chrome.runtime.sendMessage(
  document.querySelector("*").innerHTML);
