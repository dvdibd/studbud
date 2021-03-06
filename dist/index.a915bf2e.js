// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7pZ4g":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "70dca43e1ee77af44d4d7940a915bf2e"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          ???? ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4B4Nd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// Import as a module
var _navigation = require("./components/navigation");
var _navigationDefault = parcelHelpers.interopDefault(_navigation);
//Import just as JS
var _tasklist = require("./components/tasklist");
var _modal = require("./components/modal");
var _reading = require("./components/reading");
var _pomodoro = require("./components/pomodoro");
var _timer = require("./components/timer");
var _kanban = require("./components/kanban");
// DOM elements for links and pages
const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');
// Instantiate a new instance of the Navigation class using the DOM elements above as parameters
var nav = new _navigationDefault.default(links, pages);
// Event listeners for all links
nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId);
    });
});
// DOM elements for sublinks and subpages
const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');
// Instantiate a new instance of the Navigation class using the DOM elements above as parameters
var subNav = new _navigationDefault.default(subLinks, subPages);
// Event listeners for all sub links
subNav.links.forEach((link)=>{
    link.addEventListener('click', function() {
        let pageId = subNav.getHash(link);
        subNav.setPage(pageId);
    });
});
$('#DyanmicTable').SetEditable({
    $addButton: $('#addNewRow')
});

},{"./components/navigation":"2K1cj","@parcel/transformer-js/src/esmodule-helpers.js":"367CR","./components/tasklist":"Rj9Cl","./components/modal":"4LxbO","./components/pomodoro":"2KGxt","./components/reading":"5yTlS","./components/timer":"6s12x","./components/kanban":"3ezuS"}],"2K1cj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Creating navigation class structure
class Navigation {
    // Function to build the object, taking in input paramters when called in script.js
    constructor(links, pages){
        this.links = links;
        this.pages = pages;
        this.currentPage = null;
    }
    // Output all links from DOM element selector
    getLinks() {
        console.log(this.links);
    }
    // Set the current page when a user clicks on a link
    setPage(pageId) {
        this.currentPage = pageId;
        console.log(this.currentPage);
        // Manages state for the current active link 
        this.links.forEach((link)=>{
            link.classList.remove('active');
            if (this.getHash(link) === pageId) link.classList.add('active');
        });
        // Manages state for the current visible page
        this.pages.forEach((page)=>{
            page.style.display = 'none';
        });
        document.getElementById(pageId).style.display = "block";
    }
    // Function to separate pageId from URL, using the '#' to split the string
    getHash(link) {
        return link.href.split("#")[1];
    }
}
exports.default = Navigation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Rj9Cl":[function(require,module,exports) {
// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
// Selector for the tasklist output
var tasklist = document.querySelector("#tasklist > ul");
// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
//find row to append to
var table = document.getElementById("taskTable");
for(var i = 0, row; row = table.rows[i]; i++)//iterate through rows
//rows would be accessed using the "row" variable assigned in the for loop
var rowNum = i;
var rowAppend = rowNum - 1;
// Form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
});
// Create global array to track tasks
var taskListArray = [];
// Function to add task with user inputs as parameters
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        estimatedTime,
        completionTime,
        priorityRating,
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}
// Function to display task on screen
function renderTask(task) {
    // Call function - checks if a task has been added
    updateEmpty();
    // Create HTML elements
    //let item = document.createElement("li");
    //item.setAttribute('data-id', task.id);
    //item.innerHTML = "<p>" + task.taskDescription + "</p>" + task.dueDate +"</p>" +task.estimatedTime+ "</p>" +task.completionTime+ "</p>" +task.priorityRating+ "</p>" +"Not Done"; 
    //tasklist.appendChild(item);
    var tasknum = rowNum - 1;
    var idAdd = "row" + tasknum;
    //append tasklist in row 
    var table1 = document.getElementById("taskTable");
    var row1 = table1.insertRow(tasknum);
    row1.setAttribute('id', idAdd);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);
    //var cell7 = row.insertCell(6);
    cell1.innerHTML = task.taskDescription;
    cell2.innerHTML = task.dueDate;
    cell3.innerHTML = task.estimatedTime;
    cell4.innerHTML = task.completionTime;
    cell5.innerHTML = task.priorityRating;
    cell6.innerHTML = "Not Done";
    //cell7.innerHTML = "Not Done";
    var tasklist1 = document.querySelector("#taskTable > tr");
    let item = document.createElement("td");
    //item.setAttribute('data-id', task.id);
    //item.innerHTML = "<p>" + task.taskDescription + "</p>" + task.dueDate +"</p>" +task.estimatedTime+ "</p>" +task.completionTime+ "</p>" +task.priorityRating+ "</p>" +"Not Done"; 
    tasklist1.appendChild(item);
    // Extra Task DOM element
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Task Done");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex((task1)=>task1.id === Number(id)
        );
        removeItemFromArray(taskListArray, index);
        console.log(taskListArray);
        updateEmpty();
        item.remove();
        myDeleteFunction(tasknum);
    });
    // Clear the input form
    form.reset();
}
function myDeleteFunction(num) {
    document.getElementById("taskTable").deleteRow(num);
}
// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) arr.splice(index, 1);
    return arr;
}
// Function to hide the 'you haven't added any tasks' text
function updateEmpty() {
    if (taskListArray.length > 0) document.getElementById('emptyList').style.display = 'none';
    else document.getElementById('emptyList').style.display = 'block';
}

},{}],"4LxbO":[function(require,module,exports) {

},{}],"2KGxt":[function(require,module,exports) {
// refrenced from https://codepen.io/thomasvaeth/pen/QjwPgz
$(document).ready(function() {
    $('.task').html(taskTimer + clock);
    $('.break').html('0' + breakTimer + clock);
});
var taskTimer = 25;
var breakTimer = 5;
var clock = ':00';
$('.add-task').on('click', function() {
    taskTimer++;
    if (taskTimer > 0) $('.set-task, .subtract-task').removeAttr('disabled');
    if (taskTimer < 10) $('.task').html('0' + taskTimer + clock);
    else $('.task').html(taskTimer + clock);
});
$('.subtract-task').on('click', function() {
    taskTimer--;
    if (taskTimer === 0) $('.set-task, .subtract-task').attr('disabled', 'disabled');
    if (taskTimer < 10) $('.task').html('0' + taskTimer + clock);
    else $('.task').html(taskTimer + clock);
});
$('.set-task').on('click', function() {
    $('.task, .set-task, .add-task, .subtract-task').hide();
    $('.break, .set-break, .add-break, .subtract-break').show();
});
$('.add-break').on('click', function() {
    breakTimer++;
    if (breakTimer > 0) $('.set-break, .subtract-break').removeAttr('disabled');
    if (breakTimer < 10) $('.break').html('0' + breakTimer + clock);
    else $('.break').html(breakTimer + clock);
});
$('.subtract-break').on('click', function() {
    breakTimer--;
    if (breakTimer === 0) $('.set-break, .subtract-break').attr('disabled', 'disabled');
    if (breakTimer < 10) $('.break').html('0' + breakTimer + clock);
    else $('.break').html(breakTimer + clock);
});
$('.set-break').on('click', function() {
    $('.break, .set-break, .add-break, .subtract-break').hide();
    $('.start-task, .task').show();
});
var minutesLeft;
var secondsLeft = 0;
var timeSetup;
function taskClock() {
    $('.clock, .information');
    $('.information').text('Left in Task');
    $('.information').show();
    secondsLeft--;
    if (minutesLeft < 10 && secondsLeft < 10) $('.clock').html('0' + minutesLeft + ':0' + secondsLeft);
    else if (minutesLeft < 10) $('.clock').html('0' + minutesLeft + ':' + secondsLeft);
    else if (secondsLeft < 10) $('.clock').html(minutesLeft + ':0' + secondsLeft);
    else $('.clock').html(minutesLeft + ':' + secondsLeft);
    if (minutesLeft <= 1 && secondsLeft === 0 || minutesLeft < 1) $('.clock, .information').css('color', 'red');
    if (secondsLeft < 0) {
        if (minutesLeft === 0 && secondsLeft < 0) {
            taskTimer = 0;
            clearInterval(timeSetup);
            $('.clock').html('00:00');
            $('.stop, .information').hide();
            $('.start-break').show();
        } else {
            minutesLeft--;
            secondsLeft = 60;
            taskClock();
        }
    }
}
function breakClock() {
    $('.clock, .information');
    $('.information').text('Left in Break');
    $('.information').show();
    secondsLeft--;
    if (minutesLeft < 10 && secondsLeft < 10) $('.clock').html('0' + minutesLeft + ':0' + secondsLeft);
    else if (minutesLeft < 10) $('.clock').html('0' + minutesLeft + ':' + secondsLeft);
    else if (secondsLeft < 10) $('.clock').html(minutesLeft + ':0' + secondsLeft);
    else $('.clock').html(minutesLeft + ':' + secondsLeft);
    if (minutesLeft <= 1 && secondsLeft === 0 || minutesLeft < 1) $('.clock, .information').css('color', 'red');
    if (secondsLeft < 0) {
        if (minutesLeft === 0 && secondsLeft < 0) {
            taskTimer = 0;
            clearInterval(timeSetup);
            $('.clock').html('00:00');
            $('.information').hide();
            $('.stop').text('Reset');
        } else {
            minutesLeft--;
            secondsLeft = 60;
            breakClock();
        }
    }
}
$('.start-task').on('click', function() {
    $('.task, .start-task, .subtract-break').hide();
    $('.clock, .stop').show();
    timeSetup = setInterval(function() {
        taskClock();
    }, 1000);
    minutesLeft = taskTimer;
    taskClock();
});
$('.start-break').on('click', function() {
    $('.task, .start-break, .subtract-break').hide();
    $('.clock, .stop').show();
    timeSetup = setInterval(function() {
        breakClock();
    }, 1000);
    minutesLeft = breakTimer;
    breakClock();
});
$('.stop').on('click', function() {
    $('.stop, .clock, .information').hide();
    $('.stop').text('Stop');
    $('.task, .set-task, .add-task, .subtract-task').show();
    clearInterval(timeSetup);
    taskTimer = 25;
    $('.task').html(taskTimer + clock);
    breakTimer = 5;
    $('.break').html('0' + breakTimer + clock);
    minutesLeft = taskTimer;
    secondsLeft = 0;
    $('.clock').html('');
});

},{}],"5yTlS":[function(require,module,exports) {
// refrenced from https://codepen.io/ruslantau/pen/vRwjNP
$(document).on('click', '.edit', function() {
    $(this).parent().siblings('td.data').each(function() {
        var content = $(this).html();
        $(this).html('<input value="' + content + '" />');
    });
    $(this).siblings('.save').show();
    $(this).siblings('.delete').hide();
    $(this).hide();
});
$(document).on('click', '.save', function() {
    $('input').each(function() {
        var content = $(this).val();
        $(this).html(content);
        $(this).contents().unwrap();
    });
    $(this).siblings('.edit').show();
    $(this).siblings('.delete').show();
    $(this).hide();
});
$(document).on('click', '.delete', function() {
    $(this).parents('tr').remove();
});
$('.add').click(function() {
    $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td class="data"></td><td><button class="save">Save</button><button class="edit">Edit</button> <button class="delete">Delete</button></td></tr>');
});

},{}],"6s12x":[function(require,module,exports) {
//refrenced from https://codepen.io/grdgc/pen/PowNjVO
var hours = 0;
var mins = 0;
var seconds = 0;
$('#start').click(function() {
    startTimer();
});
$('#stop').click(function() {
    clearTimeout(timex);
});
$('#reset').click(function() {
    hours = 0;
    mins = 0;
    seconds = 0;
    $('#hours', '#mins').html('00:');
    $('#seconds').html('00');
});
function startTimer() {
    timex = setTimeout(function() {
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            mins++;
            if (mins > 59) {
                mins = 0;
                hours++;
                if (hours < 10) $("#hours").text('0' + hours + ':');
                else $("#hours").text(hours + ':');
            }
            if (mins < 10) $("#mins").text('0' + mins + ':');
            else $("#mins").text(mins + ':');
        }
        if (seconds < 10) $("#seconds").text('0' + seconds);
        else $("#seconds").text(seconds);
        startTimer();
    }, 1000);
}

},{}],"3ezuS":[function(require,module,exports) {
// refrenced from https://codepen.io/flosing/pen/VwpLQXr
const items = [
    {
        "name": "To Do",
        "items": [
            "Weekly task 1",
            "DECO2017 Assignment",
            "Leetcode",
            "Hackerrank java",
            "Hackerrank stats"
        ]
    },
    {
        "name": "In Progress",
        "items": [
            "Assignment 1",
            "Assignment 2"
        ]
    },
    {
        "name": "Done",
        "items": [
            "Report",
            "Meeting notes"
        ]
    }
];
const listTable = document.getElementById('list-table');
const dragStart = (ev)=>{
    ev.dataTransfer.setData("application/app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setDragImage(new Image(), 0, 0);
};
const dragDrop = (ev)=>{
    ev.preventDefault();
    const data = ev.dataTransfer.getData("application/app");
    const child = document.getElementById(data);
    child.style.position = 'static';
    child.style.maxWidth = '100%';
    ev.target.appendChild(document.getElementById(data));
};
const dragOver = (ev)=>{
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    const data = ev.dataTransfer.getData("application/app");
    const child = document.getElementById(data);
    child.style.maxWidth = child.clientWidth + 'px';
    child.style.position = 'absolute';
    child.style.top = ev.clientY + 'px';
    child.style.left = ev.clientX + 'px';
};
const addEl = (item)=>{
    var newListElement = document.createElement('div');
    var newHeadlineElement = document.createElement('h3');
    var newHeadlineTextNode = document.createTextNode(item.name);
    newHeadlineElement.appendChild(newHeadlineTextNode);
    newListElement.id = item.name.replace(" ", "");
    newListElement.classList.add('list');
    newListElement.appendChild(newHeadlineElement);
    newListElement.addEventListener('drop', (ev)=>dragDrop(ev)
    );
    newListElement.addEventListener('dragover', (ev)=>dragOver(ev)
    );
    listTable.appendChild(newListElement);
    item.items.forEach((iteme)=>{
        var entry = document.createElement('div');
        var entryContent = document.createTextNode(iteme);
        entry.id = iteme.replace(" ", "");
        entry.classList.add('list-entry');
        entry.appendChild(entryContent);
        entry.draggable = true;
        entry.addEventListener('dragstart', (ev)=>dragStart(ev)
        );
        newListElement.appendChild(entry);
    });
};
items.forEach((item)=>addEl(item)
);

},{}]},["7pZ4g","4B4Nd"], "4B4Nd", "parcelRequirec526")

//# sourceMappingURL=index.a915bf2e.js.map
