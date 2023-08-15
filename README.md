## Bowser

A small, fast and rich-API browser/platform/engine detector for both browser and node.

- **Small.** Use plain ES5-version which is ~4.8kB gzipped.
- **Optimized.** Use only those parsers you need — it doesn't do useless work.
- **Multi-platform.** It's browser- and node-ready, so you can use it in any environment.

## Browser props detection

Often we need to pick users' browser properties such as the name, the version, the rendering engine and so on. Here is an example how to do it with Bowser:

```javascript
import {getParser} from '@arnat/browser-detector';
getParser(window.navigator.userAgent);
// outputs
{
  browser: {
    name: "Internet Explorer"
    version: "11.0"
  },
  os: {
    name: "Windows"
    version: "NT 6.3"
    versionName: "8.1"
  },
  platform: {
    type: "desktop"
  },
  engine: {
    name: "Trident"
    version: "7.0"
  }
}
console.log(`The current browser name is "${getBrowserName()}"`);
console.log(getBrowser());
// outputs
{
  name: "Internet Explorer";
  version: "11.0";
}
```

## Filtering browsers

```javascript
const browser = Bowser.getParser(window.navigator.userAgent);
const isValidBrowser = browser.satisfies({
  windows: {
    "internet explorer": ">10",
  },
  macos: {
    safari: ">10.1",
  },
  mobile: {
    safari: ">=9",
    "android browser": ">3.10",
  },
  chrome: "~20.1.1432",
  firefox: ">31",
  opera: ">=22",
  chrome: "=20.1.1432",
  chrome: "~20",
  chrome: "~20.1",
});
```
