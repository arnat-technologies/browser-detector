import Utils from './utils.js';

const commonVersionIdentifier = /version\/(\d+(\.?_?\d+)+)/i;

const browsersList: any = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Googlebot',
      };
      const version =
        Utils.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Opera',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Opera',
      };
      const version =
        Utils.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/SamsungBrowser/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Samsung Internet for Android',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/Whale/i],
    describe(ua: string) {
      const browser: any = {
        name: 'NAVER Whale Browser',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/MZBrowser/i],
    describe(ua: string) {
      const browser: any = {
        name: 'MZ Browser',
      };
      const version =
        Utils.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/focus/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Focus',
      };
      const version =
        Utils.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/swing/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Swing',
      };
      const version =
        Utils.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/coast/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Opera Coast',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Opera Touch',
      };
      const version =
        Utils.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/yabrowser/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Yandex Browser',
      };
      const version =
        Utils.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/ucbrowser/i],
    describe(ua: string) {
      const browser: any = {
        name: 'UC Browser',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/Maxthon|mxios/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Maxthon',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/epiphany/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Epiphany',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/puffin/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Puffin',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/sleipnir/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Sleipnir',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/k-meleon/i],
    describe(ua: string) {
      const browser: any = {
        name: 'K-Meleon',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/micromessenger/i],
    describe(ua: string) {
      const browser: any = {
        name: 'WeChat',
      };
      const version =
        Utils.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/qqbrowser/i],
    describe(ua: string) {
      const browser: any = {
        name: /qqbrowserlite/i.test(ua) ? 'QQ Browser Lite' : 'QQ Browser',
      };
      const version =
        Utils.getFirstMatch(
          /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
          ua
        ) || Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/msie|trident/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Internet Explorer',
      };
      const version = Utils.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/\sedg\//i],
    describe(ua: string) {
      const browser: any = {
        name: 'Microsoft Edge',
      };

      const version = Utils.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Microsoft Edge',
      };

      const version = Utils.getSecondMatch(
        /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
        ua
      );

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/vivaldi/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Vivaldi',
      };
      const version = Utils.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/seamonkey/i],
    describe(ua: string) {
      const browser: any = {
        name: 'SeaMonkey',
      };
      const version = Utils.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/sailfish/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Sailfish',
      };

      const version = Utils.getFirstMatch(
        /sailfish\s?browser\/(\d+(\.\d+)?)/i,
        ua
      );

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/silk/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Amazon Silk',
      };
      const version = Utils.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/phantom/i],
    describe(ua: string) {
      const browser: any = {
        name: 'PhantomJS',
      };
      const version = Utils.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/slimerjs/i],
    describe(ua: string) {
      const browser: any = {
        name: 'SlimerJS',
      };
      const version = Utils.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(ua: string) {
      const browser: any = {
        name: 'BlackBerry',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(ua: string) {
      const browser: any = {
        name: 'WebOS Browser',
      };
      const version =
        Utils.getFirstMatch(commonVersionIdentifier, ua) ||
        Utils.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/bada/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Bada',
      };
      const version = Utils.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/tizen/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Tizen',
      };
      const version =
        Utils.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/qupzilla/i],
    describe(ua: string) {
      const browser: any = {
        name: 'QupZilla',
      };
      const version =
        Utils.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Firefox',
      };
      const version = Utils.getFirstMatch(
        /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
        ua
      );

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/electron/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Electron',
      };
      const version = Utils.getFirstMatch(
        /(?:electron)\/(\d+(\.?_?\d+)+)/i,
        ua
      );

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/MiuiBrowser/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Miui',
      };
      const version = Utils.getFirstMatch(
        /(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,
        ua
      );

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/chromium/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Chromium',
      };
      const version =
        Utils.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, ua) ||
        Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Chrome',
      };
      const version = Utils.getFirstMatch(
        /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
        ua
      );

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },
  {
    test: [/GSA/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Google Search',
      };
      const version = Utils.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Android Browser */
  {
    test(parser: any) {
      const notLikeAndroid = !parser.test(/like android/i);
      const butAndroid = parser.test(/android/i);
      return notLikeAndroid && butAndroid;
    },
    describe(ua: string) {
      const browser: any = {
        name: 'Android Browser',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(ua: string) {
      const browser: any = {
        name: 'PlayStation 4',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(ua: string) {
      const browser: any = {
        name: 'Safari',
      };
      const version = Utils.getFirstMatch(commonVersionIdentifier, ua);

      if (version) {
        browser.version = version;
      }

      return browser;
    },
  },

  /* Something else */
  {
    test: [/.*/i],
    describe(ua: string) {
      /* Here we try to make sure that there are explicit details about the device
       * in order to decide what regexp exactly we want to apply
       * (as there is a specific decision based on that conclusion)
       */
      const regexpWithoutDeviceSpec = /^(.*)\/(.*) /;
      const regexpWithDeviceSpec = /^(.*)\/(.*)[ \t]\((.*)/;
      const hasDeviceSpec = ua.search('\\(') !== -1;
      const regexp = hasDeviceSpec
        ? regexpWithDeviceSpec
        : regexpWithoutDeviceSpec;
      return {
        name: Utils.getFirstMatch(regexp, ua),
        version: Utils.getSecondMatch(regexp, ua),
      };
    },
  },
];

export default browsersList;
