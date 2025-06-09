"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function () {
  var _sessionStorage$getIt, _Number;
  var apiURL = 'https://fav-prom.com/api_game_of_gods';

  // const currentDate = new Date();
  var currentDate = new Date();
  var customPeriods = [{
    start: new Date('2025-06-15T00:00:00Z'),
    end: new Date('2025-06-22T20:59:59.999Z'),
    number: 1
  }, {
    start: new Date('2025-06-23T00:00:00Z'),
    end: new Date('2025-07-13T20:59:59.999Z'),
    number: 2
  }];
  var matchDates = [{
    start: new Date('2025-06-15T00:00:00Z'),
    number: 1
  }, {
    start: new Date('2025-06-15T16:00:00Z'),
    number: 2
  }, {
    start: new Date('2025-06-15T19:00:00Z'),
    number: 3
  }, {
    start: new Date('2025-06-15T22:00:00Z'),
    number: 4
  }, {
    start: new Date('2025-06-16T02:00:00Z'),
    number: 5
  }, {
    start: new Date('2025-06-16T19:00:00Z'),
    number: 6
  }, {
    start: new Date('2025-06-16T22:00:00Z'),
    number: 7
  }, {
    start: new Date('2025-06-17T01:00:00Z'),
    number: 8
  }, {
    start: new Date('2025-06-17T16:00:00Z'),
    number: 9
  }, {
    start: new Date('2025-06-17T19:00:00Z'),
    number: 10
  }, {
    start: new Date('2025-06-17T22:00:00Z'),
    number: 11
  }, {
    start: new Date('2025-06-18T01:00:00Z'),
    number: 12
  }, {
    start: new Date('2025-06-18T16:00:00Z'),
    number: 13
  }, {
    start: new Date('2025-06-18T19:00:00Z'),
    number: 14
  }, {
    start: new Date('2025-06-18T22:00:00Z'),
    number: 15
  }, {
    start: new Date('2025-06-19T01:00:00Z'),
    number: 16
  }, {
    start: new Date('2025-06-19T16:00:00Z'),
    number: 17
  }, {
    start: new Date('2025-06-19T19:00:00Z'),
    number: 18
  }, {
    start: new Date('2025-06-19T22:00:00Z'),
    number: 19
  }, {
    start: new Date('2025-06-20T01:00:00Z'),
    number: 20
  }, {
    start: new Date('2025-06-20T16:00:00Z'),
    number: 21
  }, {
    start: new Date('2025-06-20T18:00:00Z'),
    number: 22
  }, {
    start: new Date('2025-06-20T22:00:00Z'),
    number: 23
  }, {
    start: new Date('2025-06-21T01:00:00Z'),
    number: 24
  }, {
    start: new Date('2025-06-21T16:00:00Z'),
    number: 25
  }, {
    start: new Date('2025-06-21T19:00:00Z'),
    number: 26
  }, {
    start: new Date('2025-06-21T22:00:00Z'),
    number: 27
  }, {
    start: new Date('2025-06-22T01:00:00Z'),
    number: 28
  }, {
    start: new Date('2025-06-22T16:00:00Z'),
    number: 29
  }, {
    start: new Date('2025-06-22T19:00:00Z'),
    number: 30
  }, {
    start: new Date('2025-06-22T22:00:00Z'),
    number: 31
  }, {
    start: new Date('2025-06-23T01:00:00Z'),
    number: 32
  }, {
    start: new Date('2025-06-23T19:00:00Z'),
    number: 33
  }, {
    start: new Date('2025-06-23T19:00:00Z'),
    number: 34
  }, {
    start: new Date('2025-06-24T01:00:00Z'),
    number: 35
  }, {
    start: new Date('2025-06-24T01:00:00Z'),
    number: 36
  }, {
    start: new Date('2025-06-24T19:00:00Z'),
    number: 37
  }, {
    start: new Date('2025-06-24T19:00:00Z'),
    number: 38
  }, {
    start: new Date('2025-06-25T01:00:00Z'),
    number: 39
  }, {
    start: new Date('2025-06-25T01:00:00Z'),
    number: 40
  }, {
    start: new Date('2025-06-25T19:00:00Z'),
    number: 41
  }, {
    start: new Date('2025-06-25T19:00:00Z'),
    number: 42
  }, {
    start: new Date('2025-06-26T01:00:00Z'),
    number: 43
  }, {
    start: new Date('2025-06-26T01:00:00Z'),
    number: 44
  }, {
    start: new Date('2025-06-26T19:00:00Z'),
    number: 45
  }, {
    start: new Date('2025-06-26T19:00:00Z'),
    number: 46
  }, {
    start: new Date('2025-06-27T01:00:00Z'),
    number: 47
  }, {
    start: new Date('2025-06-27T01:00:00Z'),
    number: 48
  }];
  var liveMatchInterval = setInterval(function () {
    checkIsLiveMatch(currentDate);
  }, 600 * 1000);
  var activePeriodByDate = getActiveWeek(currentDate, customPeriods);
  console.log(activePeriodByDate + " - це activePeriodByDate");
  // const activePeriodByDate = getActiveWeek(currentDate, customPeriods);

  var currentActivePeriod = activePeriodByDate;
  function getActiveWeek(date, periods) {
    var now = new Date(date);
    now.setHours(0, 0, 0, 0);
    for (var i = 0; i < periods.length; i++) {
      var start = new Date(periods[i].start);
      var end = new Date(periods[i].end);
      start.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);
      if (now >= start && now <= end) {
        return periods[i].number;
      }
      if (now < start) {
        return periods[0].number;
      }
    }
    return periods[periods.length - 1].number;
  }
  var tableTabs = document.querySelectorAll('.table__tabs-item');
  console.log(currentActivePeriod);
  tableTabs.forEach(function (tab) {
    var tabWeek = Number(tab.getAttribute("data-week"));
    if (tabWeek <= currentActivePeriod) {
      tab.classList.add("show-period");
    } else {
      tab.classList.remove("show-period");
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest(".table__tabs-item")) {
      if (Number(e.target.closest(".table__tabs-item").getAttribute("data-week")) > currentActivePeriod) {
        return;
      }
      e.target.closest(".table__tabs-item").style.pointerEvents = "initial";
      tableTabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      var tabWeek = e.target.closest(".table__tabs-item").getAttribute("data-week");
      e.target.closest(".table__tabs-item").classList.add("active");
      renderUsers(tabWeek);
    }
  });
  document.querySelectorAll('.table__tabs-item').forEach(function (tab) {
    tab.classList.remove('active');
  });
  var activeTab = document.querySelector(".table__tabs-item.period-".concat(currentActivePeriod));
  if (activeTab) {
    activeTab.classList.add('active');
  }
  function checkIsLiveMatch(currentDate) {
    if (!existingUser) {
      return;
    }
    var foundLive = false;
    var _iterator = _createForOfIteratorHelper(matchDates),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var match = _step.value;
        var start = new Date(match.start);
        var end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // +2 години

        if (currentDate >= start && currentDate <= end) {
          foundLive = true;
          break; // знайшли — далі не перевіряємо
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (foundLive) {
      console.log("show");
      redirectBtns.forEach(function (btn) {
        return btn.classList.add('hide');
      });
      btnCont.forEach(function (cont) {
        return cont.classList.remove('hide');
      });
    } else {
      console.log("NOT show");
      redirectBtns.forEach(function (btn) {
        return btn.classList.remove('hide');
      });
      btnCont.forEach(function (cont) {
        return cont.classList.add('hide');
      });
    }
  }
  setInterval(function () {
    checkIsLiveMatch(currentDate);
  }, 60 * 1000);
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    btnCont = document.querySelectorAll('.btnCont'),
    loader = document.querySelector(".spinner-overlay"),
    gideBlock = document.querySelector(".gide"),
    resultsTable = document.querySelector('#results-table'),
    resultsTableOther = document.querySelector('#results-table-other');
  var existingUser = false;
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;

  // let locale = "en"
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "uk";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;

  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth();
              participateBtns.forEach(function (btn) {
                btn.addEventListener('click', participate);
              });
              var currentTab = Number(document.querySelector(".table__tabs-item.active").getAttribute("data-week"));
              renderUsers(currentActivePeriod);
              console.log(currentTab);
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var targetNode = document.getElementById("game-of-gods");
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(targetNode, {
        childList: true,
        subtree: true
      });
    });
  }
  function checkUserAuth() {
    var loadTime = 200;
    setTimeout(function () {
      var showElements = function showElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.remove('hide');
        });
      };
      var hideElements = function hideElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.add('hide');
        });
      };
      if (!userId) {
        hideElements(participateBtns);
        hideElements(redirectBtns);
        showElements(unauthMsgs);
        hideLoader();
        return Promise.resolve(false);
      }
      hideElements(unauthMsgs);
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          hideElements(participateBtns);
          showElements(redirectBtns);
          existingUser = true;
          checkIsLiveMatch(currentDate);
          gideBlock.classList.add("hide");
          if (liveMatchInterval) {
            clearInterval(liveMatchInterval);
          }
          liveMatchInterval = setInterval(function () {
            checkIsLiveMatch(currentDate);
          }, 600 * 1000);
        } else {
          showElements(participateBtns);
          hideElements(redirectBtns);
        }
        hideLoader();
      });
    }, loadTime);
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function renderUsers(week) {
    request("/users/".concat(week)).then(function (data) {
      populateUsersTable(data, userId, week);
    });
  }
  function populateUsersTable(users, currentUserId, week) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var currentUser = users.find(function (user) {
      return user.userid === currentUserId;
    });
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topCount = currentUser ? 10 : 13;
    var topUsers = users.slice(0, topCount);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 10) return "prize_".concat(place);
    if (place <= 35) return "prize_11_35";
    if (place <= 50) return "prize_36_50";
    if (place <= 75) return "prize_51_75";
    if (place <= 100) return "prize_76_100";
    if (place <= 125) return "prize_101_125";
    if (place <= 150) return "prize_126_150";
    if (place <= 175) return "prize_151_175";
    if (place <= 200) return "prize_176_200";
  }
  function participate() {
    if (!userId) {
      return;
    }
    console.log(userId);
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
      }, 1000);
    });
  }
  loadTranslations().then(init); //запуск ініту сторінки

  // TEST

  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  var betBtn = document.querySelector(".btn-bet-online");
  var liveBlock = document.querySelector(".liveBlock");
  var secondPer = document.querySelector(".secondPer");
  var withoutGide = document.querySelector(".withoutGide");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "777777");
    }
    window.location.reload();
  });
  betBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("userId") == "777777") {
      unauthMsgs.forEach(function (item) {
        return item.classList.add('hide');
      });
      participateBtns.forEach(function (item) {
        return item.classList.add('hide');
      });
      redirectBtns.forEach(function (item) {
        return item.classList.remove('hide');
      });
      gideBlock.classList.add("hide");
    } else {
      sessionStorage.setItem("userId", "777");
    }
    // window.location.reload()
  });

  liveBlock.addEventListener("click", function () {
    redirectBtns.forEach(function (btn) {
      return btn.classList.add('hide');
    });
    participateBtns.forEach(function (btn) {
      return btn.classList.add('hide');
    });
    unauthMsgs.forEach(function (btn) {
      return btn.classList.add('hide');
    });
    btnCont.forEach(function (cont) {
      return cont.classList.remove('hide');
    });
    console.log("Live Match for test");
  });
  secondPer.addEventListener("click", function () {
    currentActivePeriod = 2;
    activePeriodByDate = 2;
    console.log("2 period активний");
  });
  withoutGide.addEventListener("click", function () {
    gideBlock.classList.toggle("hide");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3VzdG9tUGVyaW9kcyIsInN0YXJ0IiwiZW5kIiwibnVtYmVyIiwibWF0Y2hEYXRlcyIsImxpdmVNYXRjaEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjaGVja0lzTGl2ZU1hdGNoIiwiYWN0aXZlUGVyaW9kQnlEYXRlIiwiZ2V0QWN0aXZlV2VlayIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50QWN0aXZlUGVyaW9kIiwiZGF0ZSIsInBlcmlvZHMiLCJub3ciLCJzZXRIb3VycyIsImkiLCJsZW5ndGgiLCJ0YWJsZVRhYnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidGFiIiwidGFiV2VlayIsIk51bWJlciIsImdldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInJlbmRlclVzZXJzIiwiYWN0aXZlVGFiIiwicXVlcnlTZWxlY3RvciIsImV4aXN0aW5nVXNlciIsImZvdW5kTGl2ZSIsIm1hdGNoIiwiZ2V0VGltZSIsInJlZGlyZWN0QnRucyIsImJ0biIsImJ0bkNvbnQiLCJjb250IiwibWFpblBhZ2UiLCJ1bmF1dGhNc2dzIiwicGFydGljaXBhdGVCdG5zIiwibG9hZGVyIiwiZ2lkZUJsb2NrIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJlbCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJib2R5Iiwib3ZlcmZsb3ciLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJwYXJ0aWNpcGF0ZSIsImN1cnJlbnRUYWIiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsIndlZWsiLCJkYXRhIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwidXNlcnMiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BDb3VudCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInBsYWNlIiwicGFyYW1zIiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwiYmV0QnRuIiwibGl2ZUJsb2NrIiwic2Vjb25kUGVyIiwid2l0aG91dEdpZGUiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHVDQUF1Qzs7RUFHdEQ7RUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0VBRzlCLElBQU1DLGFBQWEsR0FBRyxDQUNsQjtJQUFFQyxLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVHLEdBQUcsRUFBRSxJQUFJSCxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUNqRztJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVHLEdBQUcsRUFBRSxJQUFJSCxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxDQUNwRztFQUVELElBQU1DLFVBQVUsR0FBRyxDQUNmO0lBQUVILEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBRXREO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBRXREO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVB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QyxtQkFBbUIsQ0FBQztFQUNwQyxDQUFDLENBQUM7RUFFRnlMLFdBQVcsQ0FBQ3RLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3hDcUIsU0FBUyxDQUFDeEIsU0FBUyxDQUFDaUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN0QyxDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2dhbWVfb2ZfZ29kcydcblxuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuXG4gICAgY29uc3QgY3VzdG9tUGVyaW9kcyA9IFtcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTVUMDA6MDA6MDBaJyksIGVuZDogbmV3IERhdGUoJzIwMjUtMDYtMjJUMjA6NTk6NTkuOTk5WicpLCBudW1iZXI6IDEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjNUMDA6MDA6MDBaJyksIGVuZDogbmV3IERhdGUoJzIwMjUtMDctMTNUMjA6NTk6NTkuOTk5WicpLCBudW1iZXI6IDIgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgbWF0Y2hEYXRlcyA9IFtcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTVUMDA6MDA6MDBaJyksIG51bWJlcjogMSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQxNjowMDowMFonKSwgbnVtYmVyOiAyIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE1VDE5OjAwOjAwWicpLCBudW1iZXI6IDMgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQyMjowMDowMFonKSwgbnVtYmVyOiA0IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE2VDAyOjAwOjAwWicpLCBudW1iZXI6IDUgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTZUMTk6MDA6MDBaJyksIG51bWJlcjogNiB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE2VDIyOjAwOjAwWicpLCBudW1iZXI6IDcgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTdUMDE6MDA6MDBaJyksIG51bWJlcjogOCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xN1QxNjowMDowMFonKSwgbnVtYmVyOiA5IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE3VDE5OjAwOjAwWicpLCBudW1iZXI6IDEwIH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTdUMjI6MDA6MDBaJyksIG51bWJlcjogMTEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMThUMDE6MDA6MDBaJyksIG51bWJlcjogMTIgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMThUMTY6MDA6MDBaJyksIG51bWJlcjogMTMgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMThUMTk6MDA6MDBaJyksIG51bWJlcjogMTQgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOFQyMjowMDowMFonKSwgbnVtYmVyOiAxNSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOVQwMTowMDowMFonKSwgbnVtYmVyOiAxNiB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOVQxNjowMDowMFonKSwgbnVtYmVyOiAxNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOVQxOTowMDowMFonKSwgbnVtYmVyOiAxOCB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE5VDIyOjAwOjAwWicpLCBudW1iZXI6IDE5IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIwVDAxOjAwOjAwWicpLCBudW1iZXI6IDIwIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIwVDE2OjAwOjAwWicpLCBudW1iZXI6IDIxIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIwVDE4OjAwOjAwWicpLCBudW1iZXI6IDIyIH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjBUMjI6MDA6MDBaJyksIG51bWJlcjogMjMgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjFUMDE6MDA6MDBaJyksIG51bWJlcjogMjQgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjFUMTY6MDA6MDBaJyksIG51bWJlcjogMjUgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjFUMTk6MDA6MDBaJyksIG51bWJlcjogMjYgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMVQyMjowMDowMFonKSwgbnVtYmVyOiAyNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMlQwMTowMDowMFonKSwgbnVtYmVyOiAyOCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMlQxNjowMDowMFonKSwgbnVtYmVyOiAyOSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMlQxOTowMDowMFonKSwgbnVtYmVyOiAzMCB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIyVDIyOjAwOjAwWicpLCBudW1iZXI6IDMxIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIzVDAxOjAwOjAwWicpLCBudW1iZXI6IDMyIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIzVDE5OjAwOjAwWicpLCBudW1iZXI6IDMzIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIzVDE5OjAwOjAwWicpLCBudW1iZXI6IDM0IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMDE6MDA6MDBaJyksIG51bWJlcjogMzUgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMDE6MDA6MDBaJyksIG51bWJlcjogMzYgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMTk6MDA6MDBaJyksIG51bWJlcjogMzcgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMTk6MDA6MDBaJyksIG51bWJlcjogMzggfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQwMTowMDowMFonKSwgbnVtYmVyOiAzOSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQwMTowMDowMFonKSwgbnVtYmVyOiA0MCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQxOTowMDowMFonKSwgbnVtYmVyOiA0MSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQxOTowMDowMFonKSwgbnVtYmVyOiA0MiB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDAxOjAwOjAwWicpLCBudW1iZXI6IDQzIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDAxOjAwOjAwWicpLCBudW1iZXI6IDQ0IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDE5OjAwOjAwWicpLCBudW1iZXI6IDQ1IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDE5OjAwOjAwWicpLCBudW1iZXI6IDQ2IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjdUMDE6MDA6MDBaJyksIG51bWJlcjogNDcgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjdUMDE6MDA6MDBaJyksIG51bWJlcjogNDggfSxcbiAgICBdO1xuXG5cbiAgICBsZXQgbGl2ZU1hdGNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNoZWNrSXNMaXZlTWF0Y2goY3VycmVudERhdGUpO1xuICAgIH0sIDYwMCAqIDEwMDApO1xuXG4gICAgbGV0IGFjdGl2ZVBlcmlvZEJ5RGF0ZSA9IGdldEFjdGl2ZVdlZWsoY3VycmVudERhdGUsIGN1c3RvbVBlcmlvZHMpO1xuICAgIGNvbnNvbGUubG9nKGFjdGl2ZVBlcmlvZEJ5RGF0ZStcIiAtINGG0LUgYWN0aXZlUGVyaW9kQnlEYXRlXCIpXG4gICAgLy8gY29uc3QgYWN0aXZlUGVyaW9kQnlEYXRlID0gZ2V0QWN0aXZlV2VlayhjdXJyZW50RGF0ZSwgY3VzdG9tUGVyaW9kcyk7XG5cbiAgICBsZXQgY3VycmVudEFjdGl2ZVBlcmlvZCA9IGFjdGl2ZVBlcmlvZEJ5RGF0ZTtcblxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVdlZWsoZGF0ZSwgcGVyaW9kcykge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgbm93LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyaW9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShwZXJpb2RzW2ldLnN0YXJ0KTtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHBlcmlvZHNbaV0uZW5kKTtcbiAgICAgICAgICAgIHN0YXJ0LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgZW5kLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0ICYmIG5vdyA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyaW9kc1tpXS5udW1iZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub3cgPCBzdGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJpb2RzWzBdLm51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwZXJpb2RzW3BlcmlvZHMubGVuZ3RoIC0gMV0ubnVtYmVyO1xuICAgIH1cblxuICAgIGxldCB0YWJsZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtaXRlbScpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBY3RpdmVQZXJpb2QpXG5cbiAgICB0YWJsZVRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICBjb25zdCB0YWJXZWVrID0gTnVtYmVyKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpO1xuICAgICAgICBpZiAodGFiV2VlayA8PSBjdXJyZW50QWN0aXZlUGVyaW9kKSB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChcInNob3ctcGVyaW9kXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXBlcmlvZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKSl7XG4gICAgICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBjdXJyZW50QWN0aXZlUGVyaW9kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCB0YWJXZWVrID0gZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3RhYnMtaXRlbScpLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhYmxlX190YWJzLWl0ZW0ucGVyaW9kLSR7Y3VycmVudEFjdGl2ZVBlcmlvZH1gKTtcbiAgICBpZiAoYWN0aXZlVGFiKSB7XG4gICAgICAgIGFjdGl2ZVRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0lzTGl2ZU1hdGNoKGN1cnJlbnREYXRlKSB7XG4gICAgICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgZm91bmRMaXZlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hEYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShtYXRjaC5zdGFydCk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShzdGFydC5nZXRUaW1lKCkgKyAyICogNjAgKiA2MCAqIDEwMDApOyAvLyArMiDQs9C+0LTQuNC90LhcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnREYXRlID49IHN0YXJ0ICYmIGN1cnJlbnREYXRlIDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIGZvdW5kTGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vINC30L3QsNC50YjQu9C4IOKAlCDQtNCw0LvRliDQvdC1INC/0LXRgNC10LLRltGA0Y/RlNC80L5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3VuZExpdmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIGJ0bkNvbnQuZm9yRWFjaChjb250ID0+IGNvbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTk9UIHNob3dcIik7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBidG5Db250LmZvckVhY2goY29udCA9PiBjb250LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNoZWNrSXNMaXZlTWF0Y2goY3VycmVudERhdGUpO1xuICAgIH0sIDYwICogMTAwMCk7XG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktYnRuJyksXG4gICAgICAgIGJ0bkNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuQ29udCcpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgZ2lkZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naWRlXCIpLFxuICAgICAgICByZXN1bHRzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cy10YWJsZScpLFxuICAgICAgICByZXN1bHRzVGFibGVPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzLXRhYmxlLW90aGVyJyk7XG5cbiAgICBsZXQgZXhpc3RpbmdVc2VyID0gZmFsc2U7XG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyBcInVrXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IGZhbHNlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuXG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXJ0aWNpcGF0ZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgY3VycmVudFRhYiA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX190YWJzLWl0ZW0uYWN0aXZlXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSlcblxuICAgICAgICAgICAgcmVuZGVyVXNlcnMoY3VycmVudEFjdGl2ZVBlcmlvZCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYWIpO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLW9mLWdvZHNcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1VzZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjaGVja0lzTGl2ZU1hdGNoKGN1cnJlbnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgZ2lkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXZlTWF0Y2hJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsaXZlTWF0Y2hJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGl2ZU1hdGNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lzTGl2ZU1hdGNoKGN1cnJlbnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwICogMTAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZShkYXRhLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wQ291bnQgPSBjdXJyZW50VXNlciA/IDEwIDogMTM7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wQ291bnQpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMzUpIHJldHVybiBgcHJpemVfMTFfMzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfMzZfNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfNTFfNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXzc2XzEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfMTAxXzEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfMTI2XzE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfMTUxXzE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfMTc2XzIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdCkgLy/Qt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvLyBURVNUXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBjb25zdCBiZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iZXQtb25saW5lXCIpXG4gICAgY29uc3QgbGl2ZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXZlQmxvY2tcIilcbiAgICBjb25zdCBzZWNvbmRQZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZFBlclwiKVxuICAgIGNvbnN0IHdpdGhvdXRHaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aXRob3V0R2lkZVwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3Nzc3N1wiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgYmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKT09XCI3Nzc3NzdcIil7XG4gICAgICAgICAgICB1bmF1dGhNc2dzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgZ2lkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3N1wiKVxuICAgICAgICB9XG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgbGl2ZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIHVuYXV0aE1zZ3MuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGJ0bkNvbnQuZm9yRWFjaChjb250ID0+IGNvbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXZlIE1hdGNoIGZvciB0ZXN0XCIpO1xuICAgIH0pO1xuXG4gICAgc2Vjb25kUGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRBY3RpdmVQZXJpb2QgPSAyO1xuICAgICAgICBhY3RpdmVQZXJpb2RCeURhdGUgPSAyO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMiBwZXJpb2Qg0LDQutGC0LjQstC90LjQuVwiKTtcbiAgICB9KTtcblxuICAgIHdpdGhvdXRHaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGdpZGVCbG9jay5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgIH0pXG5cbn0pKCk7XG4iXX0=
