
(function () {
  window.fireEvent = function (eventName, trackName) {
    if (trackName !== null) {
      console.log(eventName + "-" + trackName);
    }
    window.dispatchEvent(window[eventName]);
  };

  window.listenEvent = function (eventName, handle) {
    if ("addEventListener" in window) {
      window.addEventListener(eventName, handle);
    }
    if ("attachEvent" in window) {
      window.attachEvent("on" + eventName, handle);
    }
    return handle;
  };

  window.stopListenEvent = function (eventName, handle) {
    if (typeof Event !== "function" || window.removeEventListener) {
      window.removeEventListener(eventName, handle);
    } else {
      window.detachEvent("on" + eventName, handle);
    }
  };
})();
