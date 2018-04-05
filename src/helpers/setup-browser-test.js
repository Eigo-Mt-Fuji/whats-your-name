const {JSDOM} = require("jsdom");

/*global XMLHttpRequest */
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/*global raf */
raf = require("raf/polyfill");

// init jsdom
const jsdom = new JSDOM(
  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html><head></head><body></body></html>',
  {
    contentType: "text/html",
    includeNodeLocations: true
  }
);
/*global window*/
window = jsdom.window;

/*global document*/
document = window.document;
/*global navigator*/
navigator = {
  userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36"
};
