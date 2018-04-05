/* eslint-env browser */
const {JSDOM} = require("jsdom");

// init jsdom
const jsdom = new JSDOM(
  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head></head><body></body></html>',
  {
    contentType: "text/html",
    includeNodeLocations: true
  }
);

const window = jsdom.window;

function copyProps (src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === "undefined")
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36"
};

copyProps(window, global);

global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};