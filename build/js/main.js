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

  // Додаємо клас active до відповідного табу
  var activeTab = document.querySelector(".table__tabs-item.period-".concat(currentActivePeriod));
  if (activeTab) {
    activeTab.classList.add('active');
  }

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3VzdG9tUGVyaW9kcyIsInN0YXJ0IiwiZW5kIiwibnVtYmVyIiwibWF0Y2hEYXRlcyIsImxpdmVNYXRjaEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjaGVja0lzTGl2ZU1hdGNoIiwiYWN0aXZlUGVyaW9kQnlEYXRlIiwiZ2V0QWN0aXZlV2VlayIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50QWN0aXZlUGVyaW9kIiwiZGF0ZSIsInBlcmlvZHMiLCJub3ciLCJzZXRIb3VycyIsImkiLCJsZW5ndGgiLCJ0YWJsZVRhYnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJOdW1iZXIiLCJnZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJmb3JFYWNoIiwidGFiIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFiV2VlayIsImFkZCIsInJlbmRlclVzZXJzIiwiYWN0aXZlVGFiIiwicXVlcnlTZWxlY3RvciIsImV4aXN0aW5nVXNlciIsImZvdW5kTGl2ZSIsIm1hdGNoIiwiZ2V0VGltZSIsInJlZGlyZWN0QnRucyIsImJ0biIsImJ0bkNvbnQiLCJjb250IiwibWFpblBhZ2UiLCJ1bmF1dGhNc2dzIiwicGFydGljaXBhdGVCdG5zIiwibG9hZGVyIiwiZ2lkZUJsb2NrIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJlbCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJib2R5Iiwib3ZlcmZsb3ciLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJwYXJ0aWNpcGF0ZSIsImN1cnJlbnRUYWIiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BDb3VudCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInBsYWNlIiwicGFyYW1zIiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwiYmV0QnRuIiwibGl2ZUJsb2NrIiwic2Vjb25kUGVyIiwid2l0aG91dEdpZGUiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHVDQUF1Qzs7RUFHdEQ7RUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0VBR3BELElBQU1DLGFBQWEsR0FBRyxDQUNsQjtJQUFFQyxLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVHLEdBQUcsRUFBRSxJQUFJSCxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUNqRztJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVHLEdBQUcsRUFBRSxJQUFJSCxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxDQUNwRztFQUVELElBQU1DLFVBQVUsR0FBRyxDQUNmO0lBQUVILEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBRXREO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBRXREO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN2RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdkQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3ZEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV2RDtJ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QkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN4QzZCLFNBQVMsQ0FBQ25CLFNBQVMsQ0FBQzRCLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDdEMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9nYW1lX29mX2dvZHMnXG5cblxuICAgIC8vIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCcyMDI1LTA2LTI5VDAwOjAwOjAwWicpO1xuXG5cbiAgICBjb25zdCBjdXN0b21QZXJpb2RzID0gW1xuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQwMDowMDowMFonKSwgZW5kOiBuZXcgRGF0ZSgnMjAyNS0wNi0yMlQyMDo1OTo1OS45OTlaJyksIG51bWJlcjogMSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yM1QwMDowMDowMFonKSwgZW5kOiBuZXcgRGF0ZSgnMjAyNS0wNy0xM1QyMDo1OTo1OS45OTlaJyksIG51bWJlcjogMiB9LFxuICAgIF07XG5cbiAgICBjb25zdCBtYXRjaERhdGVzID0gW1xuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQwMDowMDowMFonKSwgbnVtYmVyOiAxIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE1VDE2OjAwOjAwWicpLCBudW1iZXI6IDIgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTVUMTk6MDA6MDBaJyksIG51bWJlcjogMyB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE1VDIyOjAwOjAwWicpLCBudW1iZXI6IDQgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTZUMDI6MDA6MDBaJyksIG51bWJlcjogNSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNlQxOTowMDowMFonKSwgbnVtYmVyOiA2IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTZUMjI6MDA6MDBaJyksIG51bWJlcjogNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xN1QwMTowMDowMFonKSwgbnVtYmVyOiA4IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE3VDE2OjAwOjAwWicpLCBudW1iZXI6IDkgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTdUMTk6MDA6MDBaJyksIG51bWJlcjogMTAgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xN1QyMjowMDowMFonKSwgbnVtYmVyOiAxMSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOFQwMTowMDowMFonKSwgbnVtYmVyOiAxMiB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOFQxNjowMDowMFonKSwgbnVtYmVyOiAxMyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOFQxOTowMDowMFonKSwgbnVtYmVyOiAxNCB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE4VDIyOjAwOjAwWicpLCBudW1iZXI6IDE1IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE5VDAxOjAwOjAwWicpLCBudW1iZXI6IDE2IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE5VDE2OjAwOjAwWicpLCBudW1iZXI6IDE3IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE5VDE5OjAwOjAwWicpLCBudW1iZXI6IDE4IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTlUMjI6MDA6MDBaJyksIG51bWJlcjogMTkgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjBUMDE6MDA6MDBaJyksIG51bWJlcjogMjAgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjBUMTY6MDA6MDBaJyksIG51bWJlcjogMjEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjBUMTg6MDA6MDBaJyksIG51bWJlcjogMjIgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMFQyMjowMDowMFonKSwgbnVtYmVyOiAyMyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMVQwMTowMDowMFonKSwgbnVtYmVyOiAyNCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMVQxNjowMDowMFonKSwgbnVtYmVyOiAyNSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMVQxOTowMDowMFonKSwgbnVtYmVyOiAyNiB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIxVDIyOjAwOjAwWicpLCBudW1iZXI6IDI3IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIyVDAxOjAwOjAwWicpLCBudW1iZXI6IDI4IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIyVDE2OjAwOjAwWicpLCBudW1iZXI6IDI5IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIyVDE5OjAwOjAwWicpLCBudW1iZXI6IDMwIH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjJUMjI6MDA6MDBaJyksIG51bWJlcjogMzEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjNUMDE6MDA6MDBaJyksIG51bWJlcjogMzIgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjNUMTk6MDA6MDBaJyksIG51bWJlcjogMzMgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjNUMTk6MDA6MDBaJyksIG51bWJlcjogMzQgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNFQwMTowMDowMFonKSwgbnVtYmVyOiAzNSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNFQwMTowMDowMFonKSwgbnVtYmVyOiAzNiB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNFQxOTowMDowMFonKSwgbnVtYmVyOiAzNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNFQxOTowMDowMFonKSwgbnVtYmVyOiAzOCB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI1VDAxOjAwOjAwWicpLCBudW1iZXI6IDM5IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI1VDAxOjAwOjAwWicpLCBudW1iZXI6IDQwIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI1VDE5OjAwOjAwWicpLCBudW1iZXI6IDQxIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI1VDE5OjAwOjAwWicpLCBudW1iZXI6IDQyIH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjZUMDE6MDA6MDBaJyksIG51bWJlcjogNDMgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjZUMDE6MDA6MDBaJyksIG51bWJlcjogNDQgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjZUMTk6MDA6MDBaJyksIG51bWJlcjogNDUgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjZUMTk6MDA6MDBaJyksIG51bWJlcjogNDYgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yN1QwMTowMDowMFonKSwgbnVtYmVyOiA0NyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yN1QwMTowMDowMFonKSwgbnVtYmVyOiA0OCB9LFxuICAgIF07XG5cblxuICAgIGxldCBsaXZlTWF0Y2hJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY2hlY2tJc0xpdmVNYXRjaChjdXJyZW50RGF0ZSk7XG4gICAgfSwgNjAwICogMTAwMCk7XG5cbiAgICBsZXQgYWN0aXZlUGVyaW9kQnlEYXRlID0gZ2V0QWN0aXZlV2VlayhjdXJyZW50RGF0ZSwgY3VzdG9tUGVyaW9kcyk7XG4gICAgY29uc29sZS5sb2coYWN0aXZlUGVyaW9kQnlEYXRlK1wiIC0g0YbQtSBhY3RpdmVQZXJpb2RCeURhdGVcIilcbiAgICAvLyBjb25zdCBhY3RpdmVQZXJpb2RCeURhdGUgPSBnZXRBY3RpdmVXZWVrKGN1cnJlbnREYXRlLCBjdXN0b21QZXJpb2RzKTtcblxuICAgIGxldCBjdXJyZW50QWN0aXZlUGVyaW9kID0gYWN0aXZlUGVyaW9kQnlEYXRlO1xuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlV2VlayhkYXRlLCBwZXJpb2RzKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBub3cuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZXJpb2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHBlcmlvZHNbaV0uc3RhcnQpO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUocGVyaW9kc1tpXS5lbmQpO1xuICAgICAgICAgICAgc3RhcnQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBlbmQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnQgJiYgbm93IDw9IGVuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJpb2RzW2ldLm51bWJlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vdyA8IHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcmlvZHNbMF0ubnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBlcmlvZHNbcGVyaW9kcy5sZW5ndGggLSAxXS5udW1iZXI7XG4gICAgfVxuXG4gICAgbGV0IHRhYmxlVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fdGFicy1pdGVtJyk7XG4gICAgY29uc29sZS5sb2coY3VycmVudEFjdGl2ZVBlcmlvZClcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+e1xuICAgICAgICBpZihlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikpe1xuICAgICAgICAgICAgaWYoTnVtYmVyKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpID4gY3VycmVudEFjdGl2ZVBlcmlvZCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YWJsZV9fdGFicy1pdGVtXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgIHRhYmxlVGFicy5mb3JFYWNoKHRhYiA9PntcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgdGFiV2VlayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFibGVfX3RhYnMtaXRlbVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIik7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhYmxlX190YWJzLWl0ZW1cIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzKHRhYldlZWspXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX190YWJzLWl0ZW0nKS5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuLy8g0JTQvtC00LDRlNC80L4g0LrQu9Cw0YEgYWN0aXZlINC00L4g0LLRltC00L/QvtCy0ZbQtNC90L7Qs9C+INGC0LDQsdGDXG4gICAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhYmxlX190YWJzLWl0ZW0ucGVyaW9kLSR7Y3VycmVudEFjdGl2ZVBlcmlvZH1gKTtcbiAgICBpZiAoYWN0aXZlVGFiKSB7XG4gICAgICAgIGFjdGl2ZVRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBzZXRBY3RpdmVUYWJCeURhdGUoYWN0aXZlTnVtYmVyKSB7XG4gICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJwZXJpb2QtXCJdJykuZm9yRWFjaChlbCA9PiB7XG4gICAgLy8gICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wZXJpb2QtJHthY3RpdmVOdW1iZXJ9YCk7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAvLyAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBzZXRBY3RpdmVUYWJCeURhdGUoY3VycmVudEFjdGl2ZVBlcmlvZCk7XG5cbiAgICAvLyBjbGljayBvbiBmaW5pc2hlZCB0YWJzXG4gICAgLy8gZnVuY3Rpb24gdXBkYXRlRmluaXNoZWRUYWJzKCkge1xuICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwicGVyaW9kLVwiXScpLmZvckVhY2goZWwgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgbWF0Y2ggPSBlbC5jbGFzc05hbWUubWF0Y2goL3BlcmlvZC0oXFxkKykvKTtcbiAgICAvLyAgICAgICAgIGlmICghbWF0Y2gpIHJldHVybjtcbiAgICAvL1xuICAgIC8vICAgICAgICAgY29uc3QgcGVyaW9kTnVtID0gcGFyc2VJbnQobWF0Y2hbMV0pO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcsICdjb250aW51ZXMnKTtcbiAgICAvLyAgICAgICAgIGlmIChwZXJpb2ROdW0gPCBhY3RpdmVQZXJpb2RCeURhdGUpIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xuICAgIC8vICAgICAgICAgfSBlbHNlIGlmIChwZXJpb2ROdW0gPT09IGFjdGl2ZVBlcmlvZEJ5RGF0ZSkge1xuICAgIC8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRpbnVlcycpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoIWVsLmRhdGFzZXQubGlzdGVuZXJBZGRlZCkge1xuICAgIC8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAocGVyaW9kTnVtIDw9IGFjdGl2ZVBlcmlvZEJ5RGF0ZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZVBlcmlvZCA9IHBlcmlvZE51bTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYNCf0LXRgNC10LzQuNC60LDQvdC90Y8g0L3QsCDQv9C10YDRltC+0LQgJHtwZXJpb2ROdW19INC30LDQsdC+0YDQvtC90LXQvdC1LiDQkNC60YLQuNCy0L3QuNC5INC/0LXRgNGW0L7QtCDQv9C+INC00LDRgtGWOiAke2FjdGl2ZVBlcmlvZEJ5RGF0ZX1gKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgIGVsLmRhdGFzZXQubGlzdGVuZXJBZGRlZCA9ICd0cnVlJztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIC8vIHVwZGF0ZUZpbmlzaGVkVGFicygpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tJc0xpdmVNYXRjaChjdXJyZW50RGF0ZSkge1xuICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvdW5kTGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IG1hdGNoIG9mIG1hdGNoRGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUobWF0Y2guc3RhcnQpO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgMiAqIDYwICogNjAgKiAxMDAwKTsgLy8gKzIg0LPQvtC00LjQvdC4XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZExpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDQt9C90LDQudGI0LvQuCDigJQg0LTQsNC70ZYg0L3QtSDQv9C10YDQtdCy0ZbRgNGP0ZTQvNC+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmRMaXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICBidG5Db250LmZvckVhY2goY29udCA9PiBjb250LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBzaG93XCIpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgYnRuQ29udC5mb3JFYWNoKGNvbnQgPT4gY29udC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjaGVja0lzTGl2ZU1hdGNoKGN1cnJlbnREYXRlKTtcbiAgICB9LCA2MCAqIDEwMDApO1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBidG5Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bkNvbnQnKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIGdpZGVCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2lkZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMtdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cy10YWJsZS1vdGhlcicpO1xuXG4gICAgbGV0IGV4aXN0aW5nVXNlciA9IGZhbHNlO1xuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcblxuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYWIgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fdGFicy1pdGVtLmFjdGl2ZVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlZWtcIikpXG5cbiAgICAgICAgICAgIHJlbmRlclVzZXJzKGN1cnJlbnRBY3RpdmVQZXJpb2QpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFiKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1vZi1nb2RzXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJc0xpdmVNYXRjaChjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGdpZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICBpZiAobGl2ZU1hdGNoSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobGl2ZU1hdGNoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxpdmVNYXRjaEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJc0xpdmVNYXRjaChjdXJyZW50RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wQ291bnQgPSBjdXJyZW50VXNlciA/IDEwIDogMTM7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wQ291bnQpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMzUpIHJldHVybiBgcHJpemVfMTFfMzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfMzZfNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfNTFfNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXzc2XzEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfMTAxXzEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfMTI2XzE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfMTUxXzE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfMTc2XzIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdCkgLy/Qt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvLyBURVNUXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBjb25zdCBiZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iZXQtb25saW5lXCIpXG4gICAgY29uc3QgbGl2ZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXZlQmxvY2tcIilcbiAgICBjb25zdCBzZWNvbmRQZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZFBlclwiKVxuICAgIGNvbnN0IHdpdGhvdXRHaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aXRob3V0R2lkZVwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3Nzc3N1wiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgYmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKT09XCI3Nzc3NzdcIil7XG4gICAgICAgICAgICB1bmF1dGhNc2dzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgZ2lkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3N1wiKVxuICAgICAgICB9XG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgbGl2ZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIHVuYXV0aE1zZ3MuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGJ0bkNvbnQuZm9yRWFjaChjb250ID0+IGNvbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXZlIE1hdGNoIGZvciB0ZXN0XCIpO1xuICAgIH0pO1xuXG4gICAgc2Vjb25kUGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRBY3RpdmVQZXJpb2QgPSAyO1xuICAgICAgICBhY3RpdmVQZXJpb2RCeURhdGUgPSAyO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMiBwZXJpb2Qg0LDQutGC0LjQstC90LjQuVwiKTtcbiAgICB9KTtcblxuICAgIHdpdGhvdXRHaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGdpZGVCbG9jay5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgIH0pXG5cbn0pKCk7XG4iXX0=
