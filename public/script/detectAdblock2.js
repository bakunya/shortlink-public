var _window, _window2, _window3, _window4;

var removeRedirectContainer = function removeRedirectContainer() {
  var _document$getElementB;

  return (_document$getElementB = document.getElementById('containerWillRemoveIfAdblockDetected')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.remove();
};

var createMessage = function createMessage() {
  return '<h1 className="text-xl text-center">Please disable your adblock and reload this page</h1>';
};

var execIfAdblockWasEnable = function execIfAdblockWasEnable() {
  removeRedirectContainer();
  createMessage();
};

switch (true) {
  case !((_window = window) !== null && _window !== void 0 && _window.ads):
    execIfAdblockWasEnable();
    break;

  case !((_window2 = window) !== null && _window2 !== void 0 && _window2.prebidAds):
    execIfAdblockWasEnable();
    break;

  case !((_window3 = window) !== null && _window3 !== void 0 && _window3.adsPrebid):
    execIfAdblockWasEnable();
    break;

  case !((_window4 = window) !== null && _window4 !== void 0 && _window4.adsterra):
    execIfAdblockWasEnable();
    break;

  default:
    break;
}