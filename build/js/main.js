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
  var currentDate = new Date('2025-06-29T00:00:00Z');
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

  // function setActiveTabByDate(activeNumber) {
  //     document.querySelectorAll('[class*="period-"]').forEach(el => {
  //         el.classList.remove('active');
  //     });
  //
  //     const activeElement = document.querySelector(`.period-${activeNumber}`);
  //
  //     if (activeElement) {
  //         activeElement.classList.add('active');
  //     }
  // }
  //
  // setActiveTabByDate(currentActivePeriod);

  // click on finished tabs
  // function updateFinishedTabs() {
  //     document.querySelectorAll('[class*="period-"]').forEach(el => {
  //         const match = el.className.match(/period-(\d+)/);
  //         if (!match) return;
  //
  //         const periodNum = parseInt(match[1]);
  //
  //         el.classList.remove('finished', 'continues');
  //         if (periodNum < activePeriodByDate) {
  //             el.classList.add('finished');
  //         } else if (periodNum === activePeriodByDate) {
  //             el.classList.add('continues');
  //         }
  //
  //         if (!el.dataset.listenerAdded) {
  //             el.addEventListener('click', () => {
  //                 if (periodNum <= activePeriodByDate) {
  //                     currentActivePeriod = periodNum;
  //
  //                 } else {
  //                     console.log(`Перемикання на період ${periodNum} заборонене. Активний період по даті: ${activePeriodByDate}`);
  //                 }
  //             });
  //             el.dataset.listenerAdded = 'true';
  //         }
  //     });
  // }
  // updateFinishedTabs();

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
      var users = data;
      populateUsersTable(users, userId, week);
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
    var topUsers = users.slice(0, 10);
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
    if (place <= 3) return "prize_1-3";
    if (place <= 10) return "prize-4-10";
    if (place <= 25) return "prize-11-25";
    if (place <= 50) return "prize-26-50";
    if (place <= 75) return "prize-51-75";
    if (place <= 100) return "prize-76-100";
    if (place <= 125) return "prize-101-125";
    if (place <= 150) return "prize-126-150";
    if (place <= 175) return "prize-151-175";
    if (place <= 200) return "prize}-176-200";
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3VzdG9tUGVyaW9kcyIsInN0YXJ0IiwiZW5kIiwibnVtYmVyIiwibWF0Y2hEYXRlcyIsImxpdmVNYXRjaEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjaGVja0lzTGl2ZU1hdGNoIiwiYWN0aXZlUGVyaW9kQnlEYXRlIiwiZ2V0QWN0aXZlV2VlayIsImN1cnJlbnRBY3RpdmVQZXJpb2QiLCJkYXRlIiwicGVyaW9kcyIsIm5vdyIsInNldEhvdXJzIiwiaSIsImxlbmd0aCIsInRhYmxlVGFicyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJOdW1iZXIiLCJnZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJmb3JFYWNoIiwidGFiIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFiV2VlayIsImFkZCIsInJlbmRlclVzZXJzIiwiZXhpc3RpbmdVc2VyIiwiZm91bmRMaXZlIiwibWF0Y2giLCJnZXRUaW1lIiwicmVkaXJlY3RCdG5zIiwiYnRuIiwiYnRuQ29udCIsImNvbnQiLCJtYWluUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicGFydGljaXBhdGVCdG5zIiwibG9hZGVyIiwiZ2lkZUJsb2NrIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJlbCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJib2R5Iiwib3ZlcmZsb3ciLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJwYXJ0aWNpcGF0ZSIsImN1cnJlbnRUYWIiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJwbGFjZSIsInBhcmFtcyIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsImJldEJ0biIsImxpdmVCbG9jayIsInNlY29uZFBlciIsIndpdGhvdXRHaWRlIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyx1Q0FBdUM7O0VBR3REO0VBQ0EsSUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztFQUdwRCxJQUFNQyxhQUFhLEdBQUcsQ0FDbEI7SUFBRUMsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFRyxHQUFHLEVBQUUsSUFBSUgsSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDakc7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFRyxHQUFHLEVBQUUsSUFBSUgsSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsQ0FDcEc7RUFFRCxJQUFNQyxVQUFVLEdBQUcsQ0FDZjtJQUFFSCxLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUV0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUV0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElB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VUFBQVksR0FBRztNQUFBLE9BQUlBLEdBQUcsQ0FBQ1YsU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQUEsRUFBQztJQUN6RFksVUFBVSxDQUFDakIsT0FBTyxDQUFDLFVBQUFZLEdBQUc7TUFBQSxPQUFJQSxHQUFHLENBQUNWLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUFBLEVBQUM7SUFDcERRLE9BQU8sQ0FBQ2IsT0FBTyxDQUFDLFVBQUFjLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNaLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUFBLEVBQUM7SUFDdERiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO0VBQ3RDLENBQUMsQ0FBQztFQUVGNEssU0FBUyxDQUFDM0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDdENaLG1CQUFtQixHQUFHLENBQUM7SUFDdkJGLGtCQUFrQixHQUFHLENBQUM7SUFFdEJZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBQ3BDLENBQUMsQ0FBQztFQUVGNkssV0FBVyxDQUFDNUssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDeEM0QixTQUFTLENBQUNsQixTQUFTLENBQUMyQixNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3RDLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfZ2FtZV9vZl9nb2RzJ1xuXG5cbiAgICAvLyBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgnMjAyNS0wNi0yOVQwMDowMDowMFonKTtcblxuXG4gICAgY29uc3QgY3VzdG9tUGVyaW9kcyA9IFtcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTVUMDA6MDA6MDBaJyksIGVuZDogbmV3IERhdGUoJzIwMjUtMDYtMjJUMjA6NTk6NTkuOTk5WicpLCBudW1iZXI6IDEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjNUMDA6MDA6MDBaJyksIGVuZDogbmV3IERhdGUoJzIwMjUtMDctMTNUMjA6NTk6NTkuOTk5WicpLCBudW1iZXI6IDIgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgbWF0Y2hEYXRlcyA9IFtcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTVUMDA6MDA6MDBaJyksIG51bWJlcjogMSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQxNjowMDowMFonKSwgbnVtYmVyOiAyIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE1VDE5OjAwOjAwWicpLCBudW1iZXI6IDMgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQyMjowMDowMFonKSwgbnVtYmVyOiA0IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE2VDAyOjAwOjAwWicpLCBudW1iZXI6IDUgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTZUMTk6MDA6MDBaJyksIG51bWJlcjogNiB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE2VDIyOjAwOjAwWicpLCBudW1iZXI6IDcgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTdUMDE6MDA6MDBaJyksIG51bWJlcjogOCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xN1QxNjowMDowMFonKSwgbnVtYmVyOiA5IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE3VDE5OjAwOjAwWicpLCBudW1iZXI6IDEwIH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTdUMjI6MDA6MDBaJyksIG51bWJlcjogMTEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMThUMDE6MDA6MDBaJyksIG51bWJlcjogMTIgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMThUMTY6MDA6MDBaJyksIG51bWJlcjogMTMgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMThUMTk6MDA6MDBaJyksIG51bWJlcjogMTQgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOFQyMjowMDowMFonKSwgbnVtYmVyOiAxNSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOVQwMTowMDowMFonKSwgbnVtYmVyOiAxNiB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOVQxNjowMDowMFonKSwgbnVtYmVyOiAxNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOVQxOTowMDowMFonKSwgbnVtYmVyOiAxOCB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE5VDIyOjAwOjAwWicpLCBudW1iZXI6IDE5IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIwVDAxOjAwOjAwWicpLCBudW1iZXI6IDIwIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIwVDE2OjAwOjAwWicpLCBudW1iZXI6IDIxIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIwVDE4OjAwOjAwWicpLCBudW1iZXI6IDIyIH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjBUMjI6MDA6MDBaJyksIG51bWJlcjogMjMgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjFUMDE6MDA6MDBaJyksIG51bWJlcjogMjQgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjFUMTY6MDA6MDBaJyksIG51bWJlcjogMjUgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjFUMTk6MDA6MDBaJyksIG51bWJlcjogMjYgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMVQyMjowMDowMFonKSwgbnVtYmVyOiAyNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMlQwMTowMDowMFonKSwgbnVtYmVyOiAyOCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMlQxNjowMDowMFonKSwgbnVtYmVyOiAyOSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMlQxOTowMDowMFonKSwgbnVtYmVyOiAzMCB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIyVDIyOjAwOjAwWicpLCBudW1iZXI6IDMxIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIzVDAxOjAwOjAwWicpLCBudW1iZXI6IDMyIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIzVDE5OjAwOjAwWicpLCBudW1iZXI6IDMzIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIzVDE5OjAwOjAwWicpLCBudW1iZXI6IDM0IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMDE6MDA6MDBaJyksIG51bWJlcjogMzUgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMDE6MDA6MDBaJyksIG51bWJlcjogMzYgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMTk6MDA6MDBaJyksIG51bWJlcjogMzcgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMTk6MDA6MDBaJyksIG51bWJlcjogMzggfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQwMTowMDowMFonKSwgbnVtYmVyOiAzOSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQwMTowMDowMFonKSwgbnVtYmVyOiA0MCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQxOTowMDowMFonKSwgbnVtYmVyOiA0MSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQxOTowMDowMFonKSwgbnVtYmVyOiA0MiB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDAxOjAwOjAwWicpLCBudW1iZXI6IDQzIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDAxOjAwOjAwWicpLCBudW1iZXI6IDQ0IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDE5OjAwOjAwWicpLCBudW1iZXI6IDQ1IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDE5OjAwOjAwWicpLCBudW1iZXI6IDQ2IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjdUMDE6MDA6MDBaJyksIG51bWJlcjogNDcgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjdUMDE6MDA6MDBaJyksIG51bWJlcjogNDggfSxcbiAgICBdO1xuXG5cbiAgICBsZXQgbGl2ZU1hdGNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNoZWNrSXNMaXZlTWF0Y2goY3VycmVudERhdGUpO1xuICAgIH0sIDYwMCAqIDEwMDApO1xuXG4gICAgbGV0IGFjdGl2ZVBlcmlvZEJ5RGF0ZSA9IGdldEFjdGl2ZVdlZWsoY3VycmVudERhdGUsIGN1c3RvbVBlcmlvZHMpO1xuICAgIC8vIGNvbnN0IGFjdGl2ZVBlcmlvZEJ5RGF0ZSA9IGdldEFjdGl2ZVdlZWsoY3VycmVudERhdGUsIGN1c3RvbVBlcmlvZHMpO1xuXG4gICAgbGV0IGN1cnJlbnRBY3RpdmVQZXJpb2QgPSBhY3RpdmVQZXJpb2RCeURhdGU7XG5cbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVXZWVrKGRhdGUsIHBlcmlvZHMpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIG5vdy5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcmlvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUocGVyaW9kc1tpXS5zdGFydCk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShwZXJpb2RzW2ldLmVuZCk7XG4gICAgICAgICAgICBzdGFydC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGVuZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydCAmJiBub3cgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcmlvZHNbaV0ubnVtYmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm93IDwgc3RhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyaW9kc1swXS5udW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGVyaW9kc1twZXJpb2RzLmxlbmd0aCAtIDFdLm51bWJlcjtcbiAgICB9XG5cbiAgICBsZXQgdGFibGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWl0ZW0nKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50QWN0aXZlUGVyaW9kKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT57XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKSl7XG4gICAgICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKSkgPiBjdXJyZW50QWN0aXZlUGVyaW9kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICAgICAgdGFibGVUYWJzLmZvckVhY2godGFiID0+e1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCB0YWJXZWVrID0gZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLmdldEF0dHJpYnV0ZShcImRhdGEtd2Vla1wiKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgcmVuZGVyVXNlcnModGFiV2VlaylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBmdW5jdGlvbiBzZXRBY3RpdmVUYWJCeURhdGUoYWN0aXZlTnVtYmVyKSB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJwZXJpb2QtXCJdJykuZm9yRWFjaChlbCA9PiB7XG4gICAgLy8gICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wZXJpb2QtJHthY3RpdmVOdW1iZXJ9YCk7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAvLyAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBzZXRBY3RpdmVUYWJCeURhdGUoY3VycmVudEFjdGl2ZVBlcmlvZCk7XG5cbiAgICAvLyBjbGljayBvbiBmaW5pc2hlZCB0YWJzXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlRmluaXNoZWRUYWJzKCkge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwicGVyaW9kLVwiXScpLmZvckVhY2goZWwgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgbWF0Y2ggPSBlbC5jbGFzc05hbWUubWF0Y2goL3BlcmlvZC0oXFxkKykvKTtcbiAgICAvLyAgICAgICAgIGlmICghbWF0Y2gpIHJldHVybjtcbiAgICAvL1xuICAgIC8vICAgICAgICAgY29uc3QgcGVyaW9kTnVtID0gcGFyc2VJbnQobWF0Y2hbMV0pO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcsICdjb250aW51ZXMnKTtcbiAgICAvLyAgICAgICAgIGlmIChwZXJpb2ROdW0gPCBhY3RpdmVQZXJpb2RCeURhdGUpIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIGlmIChwZXJpb2ROdW0gPT09IGFjdGl2ZVBlcmlvZEJ5RGF0ZSkge1xuICAgIC8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRpbnVlcycpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoIWVsLmRhdGFzZXQubGlzdGVuZXJBZGRlZCkge1xuICAgIC8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAocGVyaW9kTnVtIDw9IGFjdGl2ZVBlcmlvZEJ5RGF0ZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZVBlcmlvZCA9IHBlcmlvZE51bTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCf0LXRgNC10LzQuNC60LDQvdC90Y8g0L3QsCDQv9C10YDRltC+0LQgJHtwZXJpb2ROdW19INC30LDQsdC+0YDQvtC90LXQvdC1LiDQkNC60YLQuNCy0L3QuNC5INC/0LXRgNGW0L7QtCDQv9C+INC00LDRgtGWOiAke2FjdGl2ZVBlcmlvZEJ5RGF0ZX1gKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgIGVsLmRhdGFzZXQubGlzdGVuZXJBZGRlZCA9ICd0cnVlJztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIC8vIHVwZGF0ZUZpbmlzaGVkVGFicygpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tJc0xpdmVNYXRjaChjdXJyZW50RGF0ZSkge1xuICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvdW5kTGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IG1hdGNoIG9mIG1hdGNoRGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUobWF0Y2guc3RhcnQpO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgMiAqIDYwICogNjAgKiAxMDAwKTsgLy8gKzIg0LPQvtC00LjQvdC4XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZExpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDQt9C90LDQudGI0LvQuCDigJQg0LTQsNC70ZYg0L3QtSDQv9C10YDQtdCy0ZbRgNGP0ZTQvNC+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmRMaXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICBidG5Db250LmZvckVhY2goY29udCA9PiBjb250LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBzaG93XCIpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgYnRuQ29udC5mb3JFYWNoKGNvbnQgPT4gY29udC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjaGVja0lzTGl2ZU1hdGNoKGN1cnJlbnREYXRlKTtcbiAgICB9LCA2MCAqIDEwMDApO1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBidG5Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bkNvbnQnKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIGdpZGVCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2lkZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMtdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cy10YWJsZS1vdGhlcicpO1xuXG4gICAgbGV0IGV4aXN0aW5nVXNlciA9IGZhbHNlO1xuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcblxuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYWIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fdGFicy1pdGVtLmFjdGl2ZVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpXG5cbiAgICAgICAgICAgIHJlbmRlclVzZXJzKGN1cnJlbnRBY3RpdmVQZXJpb2QpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFiKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1vZi1nb2RzXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJc0xpdmVNYXRjaChjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGdpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICBpZiAobGl2ZU1hdGNoSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobGl2ZU1hdGNoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxpdmVNYXRjaEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJc0xpdmVNYXRjaChjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAxMCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfMS0zYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplLTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemUtMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemUtMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemUtNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplLTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemUtMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemUtMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemUtMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemV9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcklkKVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpIC8v0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG4gICAgLy8gVEVTVFxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG4gICAgY29uc3QgYmV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmV0LW9ubGluZVwiKVxuICAgIGNvbnN0IGxpdmVCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGl2ZUJsb2NrXCIpXG4gICAgY29uc3Qgc2Vjb25kUGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWNvbmRQZXJcIilcbiAgICBjb25zdCB3aXRob3V0R2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2l0aG91dEdpZGVcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3Nzc3NzdcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGJldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik9PVwiNzc3Nzc3XCIpe1xuICAgICAgICAgICAgdW5hdXRoTXNncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGdpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3NzdcIilcbiAgICAgICAgfVxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGxpdmVCbG9jay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICB1bmF1dGhNc2dzLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBidG5Db250LmZvckVhY2goY29udCA9PiBjb250LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGl2ZSBNYXRjaCBmb3IgdGVzdFwiKTtcbiAgICB9KTtcblxuICAgIHNlY29uZFBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjdXJyZW50QWN0aXZlUGVyaW9kID0gMjtcbiAgICAgICAgYWN0aXZlUGVyaW9kQnlEYXRlID0gMjtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIjIgcGVyaW9kINCw0LrRgtC40LLQvdC40LlcIik7XG4gICAgfSk7XG5cbiAgICB3aXRob3V0R2lkZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBnaWRlQmxvY2suY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIilcbiAgICB9KVxuXG59KSgpO1xuIl19
