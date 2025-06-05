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
    start: new Date('2025-06-15'),
    end: new Date('2025-06-22'),
    number: 1
  }, {
    start: new Date('2025-06-23'),
    end: new Date('2025-07-13'),
    number: 2
  }];
  var matchDates = [{
    start: new Date('2025-06-15T03:00:00'),
    number: 1
  }, {
    start: new Date('2025-06-15T19:00:00'),
    number: 2
  }, {
    start: new Date('2025-06-15T22:00:00'),
    number: 3
  }, {
    start: new Date('2025-06-16T01:00:00'),
    number: 4
  }, {
    start: new Date('2025-06-16T05:00:00'),
    number: 5
  }, {
    start: new Date('2025-06-16T22:00:00'),
    number: 6
  }, {
    start: new Date('2025-06-17T01:00:00'),
    number: 7
  }, {
    start: new Date('2025-06-17T04:00:00'),
    number: 8
  }, {
    start: new Date('2025-06-17T19:00:00'),
    number: 9
  }, {
    start: new Date('2025-06-17T22:00:00'),
    number: 10
  }, {
    start: new Date('2025-06-18T01:00:00'),
    number: 11
  }, {
    start: new Date('2025-06-18T04:00:00'),
    number: 12
  }, {
    start: new Date('2025-06-18T19:00:00'),
    number: 13
  }, {
    start: new Date('2025-06-18T22:00:00'),
    number: 14
  }, {
    start: new Date('2025-06-19T01:00:00'),
    number: 15
  }, {
    start: new Date('2025-06-19T04:00:00'),
    number: 16
  }, {
    start: new Date('2025-06-19T19:00:00'),
    number: 17
  }, {
    start: new Date('2025-06-19T22:00:00'),
    number: 18
  }, {
    start: new Date('2025-06-20T01:00:00'),
    number: 19
  }, {
    start: new Date('2025-06-20T04:00:00'),
    number: 20
  }, {
    start: new Date('2025-06-20T19:00:00'),
    number: 21
  }, {
    start: new Date('2025-06-20T21:00:00'),
    number: 22
  }, {
    start: new Date('2025-06-21T01:00:00'),
    number: 23
  }, {
    start: new Date('2025-06-21T04:00:00'),
    number: 24
  }, {
    start: new Date('2025-06-21T19:00:00'),
    number: 25
  }, {
    start: new Date('2025-06-21T22:00:00'),
    number: 26
  }, {
    start: new Date('2025-06-22T01:00:00'),
    number: 27
  }, {
    start: new Date('2025-06-22T04:00:00'),
    number: 28
  }, {
    start: new Date('2025-06-22T19:00:00'),
    number: 29
  }, {
    start: new Date('2025-06-22T22:00:00'),
    number: 30
  }, {
    start: new Date('2025-06-23T01:00:00'),
    number: 31
  }, {
    start: new Date('2025-06-23T04:00:00'),
    number: 32
  }, {
    start: new Date('2025-06-23T22:00:00'),
    number: 33
  }, {
    start: new Date('2025-06-23T22:00:00'),
    number: 34
  }, {
    start: new Date('2025-06-24T04:00:00'),
    number: 35
  }, {
    start: new Date('2025-06-24T04:00:00'),
    number: 36
  }, {
    start: new Date('2025-06-24T22:00:00'),
    number: 37
  }, {
    start: new Date('2025-06-24T22:00:00'),
    number: 38
  }, {
    start: new Date('2025-06-25T04:00:00'),
    number: 39
  }, {
    start: new Date('2025-06-25T04:00:00'),
    number: 40
  }, {
    start: new Date('2025-06-25T22:00:00'),
    number: 41
  }, {
    start: new Date('2025-06-25T22:00:00'),
    number: 42
  }, {
    start: new Date('2025-06-26T04:00:00'),
    number: 43
  }, {
    start: new Date('2025-06-26T04:00:00'),
    number: 44
  }, {
    start: new Date('2025-06-26T22:00:00'),
    number: 45
  }, {
    start: new Date('2025-06-26T22:00:00'),
    number: 46
  }, {
    start: new Date('2025-06-27T04:00:00'),
    number: 47
  }, {
    start: new Date('2025-06-27T04:00:00'),
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
  function setActiveTabByDate(activeNumber) {
    document.querySelectorAll('[class*="period-"]').forEach(function (el) {
      el.classList.remove('active');
    });
    var activeElement = document.querySelector(".period-".concat(activeNumber));
    if (activeElement) {
      activeElement.classList.add('active');
    }
  }
  setActiveTabByDate(currentActivePeriod);

  // click on finished tabs
  function updateFinishedTabs() {
    document.querySelectorAll('[class*="period-"]').forEach(function (el) {
      var match = el.className.match(/period-(\d+)/);
      if (!match) return;
      var periodNum = parseInt(match[1]);
      el.classList.remove('finished', 'continues');
      if (periodNum < activePeriodByDate) {
        el.classList.add('finished');
      } else if (periodNum === activePeriodByDate) {
        el.classList.add('continues');
      }
      if (!el.dataset.listenerAdded) {
        el.addEventListener('click', function () {
          if (periodNum <= activePeriodByDate) {
            currentActivePeriod = periodNum;
            setActiveTabByDate(currentActivePeriod);
          } else {
            console.log("\u041F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u043D\u043D\u044F \u043D\u0430 \u043F\u0435\u0440\u0456\u043E\u0434 ".concat(periodNum, " \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u0435. \u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439 \u043F\u0435\u0440\u0456\u043E\u0434 \u043F\u043E \u0434\u0430\u0442\u0456: ").concat(activePeriodByDate));
          }
        });
        el.dataset.listenerAdded = 'true';
      }
    });
  }
  updateFinishedTabs();
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
        var start = new Date(match.date);
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

              // renderUsers();
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
    var topUsersLength = !userId || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);
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
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
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
    setActiveTabByDate(currentActivePeriod);
    updateFinishedTabs();
    console.log("2 period активний");
  });
  withoutGide.addEventListener("click", function () {
    gideBlock.classList.toggle("hide");
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3VzdG9tUGVyaW9kcyIsInN0YXJ0IiwiZW5kIiwibnVtYmVyIiwibWF0Y2hEYXRlcyIsImxpdmVNYXRjaEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjaGVja0lzTGl2ZU1hdGNoIiwiYWN0aXZlUGVyaW9kQnlEYXRlIiwiZ2V0QWN0aXZlV2VlayIsImN1cnJlbnRBY3RpdmVQZXJpb2QiLCJkYXRlIiwicGVyaW9kcyIsIm5vdyIsInNldEhvdXJzIiwiaSIsImxlbmd0aCIsInNldEFjdGl2ZVRhYkJ5RGF0ZSIsImFjdGl2ZU51bWJlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFjdGl2ZUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkIiwidXBkYXRlRmluaXNoZWRUYWJzIiwibWF0Y2giLCJjbGFzc05hbWUiLCJwZXJpb2ROdW0iLCJwYXJzZUludCIsImRhdGFzZXQiLCJsaXN0ZW5lckFkZGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJleGlzdGluZ1VzZXIiLCJmb3VuZExpdmUiLCJnZXRUaW1lIiwicmVkaXJlY3RCdG5zIiwiYnRuIiwiYnRuQ29udCIsImNvbnQiLCJtYWluUGFnZSIsInVuYXV0aE1zZ3MiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJsb2FkZXIiLCJnaWRlQmxvY2siLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwicmVwb3J0RXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzdGFydHNXaXRoIiwiUHJvbWlzZSIsInJlamVjdCIsImJvZHkiLCJvdmVyZmxvdyIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsInBhcnRpY2lwYXRlIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwibG9hZFRpbWUiLCJzZXRUaW1lb3V0Iiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwidXNlcmlkIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInBsYWNlIiwicGFyYW1zIiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwiYmV0QnRuIiwibGl2ZUJsb2NrIiwic2Vjb25kUGVyIiwid2l0aG91dEdpZGUiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHVDQUF1Qzs7RUFHdEQ7RUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0VBRzlCLElBQU1DLGFBQWEsR0FBRyxDQUNsQjtJQUFFQyxLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUFFRyxHQUFHLEVBQUUsSUFBSUgsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3pFO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMsWUFBWSxDQUFDO0lBQUVHLEdBQUcsRUFBRSxJQUFJSCxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsQ0FDNUU7RUFFRCxJQUFNQyxVQUFVLEdBQUcsQ0FDZjtJQUFFSCxLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDckQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3JEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUVyRDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDckQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3JEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUVyRDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFFLENBQUMsRUFDckQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRSxDQUFDLEVBQ3JEO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUUsQ0FBQyxFQUNyRDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXREO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXREO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFFdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBRXREO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUV0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtFQUFHLENBQUMsRUFDdEQ7SUFBRUYsS0FBSyxFQUFFLElBQUlGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUFFSSxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQ3REO0lBQUVGLEtBQUssRUFBRSxJQUFJRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFBRUksTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUN0RDtJQUFFRixLQUFLLEVBQUUsSUFBSUYsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQUVJLE1BQU0sRUFBRTtF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SyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN4Q2MsU0FBUyxDQUFDMUIsU0FBUyxDQUFDaUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN0QyxDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX2dhbWVfb2ZfZ29kcydcblxuXG4gICAgLy8gY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuXG4gICAgY29uc3QgY3VzdG9tUGVyaW9kcyA9IFtcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTUnKSwgZW5kOiBuZXcgRGF0ZSgnMjAyNS0wNi0yMicpLCBudW1iZXI6IDEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjMnKSwgZW5kOiBuZXcgRGF0ZSgnMjAyNS0wNy0xMycpLCBudW1iZXI6IDIgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgbWF0Y2hEYXRlcyA9IFtcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTVUMDM6MDA6MDAnKSwgbnVtYmVyOiAxIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE1VDE5OjAwOjAwJyksIG51bWJlcjogMiB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQyMjowMDowMCcpLCBudW1iZXI6IDMgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xNlQwMTowMDowMCcpLCBudW1iZXI6IDQgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTZUMDU6MDA6MDAnKSwgbnVtYmVyOiA1IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE2VDIyOjAwOjAwJyksIG51bWJlcjogNiB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE3VDAxOjAwOjAwJyksIG51bWJlcjogNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xN1QwNDowMDowMCcpLCBudW1iZXI6IDggfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTdUMTk6MDA6MDAnKSwgbnVtYmVyOiA5IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE3VDIyOjAwOjAwJyksIG51bWJlcjogMTAgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOFQwMTowMDowMCcpLCBudW1iZXI6IDExIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE4VDA0OjAwOjAwJyksIG51bWJlcjogMTIgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMThUMTk6MDA6MDAnKSwgbnVtYmVyOiAxMyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOFQyMjowMDowMCcpLCBudW1iZXI6IDE0IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTlUMDE6MDA6MDAnKSwgbnVtYmVyOiAxNSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0xOVQwNDowMDowMCcpLCBudW1iZXI6IDE2IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTE5VDE5OjAwOjAwJyksIG51bWJlcjogMTcgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMTlUMjI6MDA6MDAnKSwgbnVtYmVyOiAxOCB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIwVDAxOjAwOjAwJyksIG51bWJlcjogMTkgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjBUMDQ6MDA6MDAnKSwgbnVtYmVyOiAyMCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMFQxOTowMDowMCcpLCBudW1iZXI6IDIxIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIwVDIxOjAwOjAwJyksIG51bWJlcjogMjIgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMVQwMTowMDowMCcpLCBudW1iZXI6IDIzIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIxVDA0OjAwOjAwJyksIG51bWJlcjogMjQgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjFUMTk6MDA6MDAnKSwgbnVtYmVyOiAyNSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMVQyMjowMDowMCcpLCBudW1iZXI6IDI2IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjJUMDE6MDA6MDAnKSwgbnVtYmVyOiAyNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yMlQwNDowMDowMCcpLCBudW1iZXI6IDI4IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIyVDE5OjAwOjAwJyksIG51bWJlcjogMjkgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjJUMjI6MDA6MDAnKSwgbnVtYmVyOiAzMCB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIzVDAxOjAwOjAwJyksIG51bWJlcjogMzEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjNUMDQ6MDA6MDAnKSwgbnVtYmVyOiAzMiB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yM1QyMjowMDowMCcpLCBudW1iZXI6IDMzIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTIzVDIyOjAwOjAwJyksIG51bWJlcjogMzQgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNFQwNDowMDowMCcpLCBudW1iZXI6IDM1IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI0VDA0OjAwOjAwJyksIG51bWJlcjogMzYgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjRUMjI6MDA6MDAnKSwgbnVtYmVyOiAzNyB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNFQyMjowMDowMCcpLCBudW1iZXI6IDM4IH0sXG5cbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjVUMDQ6MDA6MDAnKSwgbnVtYmVyOiAzOSB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNVQwNDowMDowMCcpLCBudW1iZXI6IDQwIH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI1VDIyOjAwOjAwJyksIG51bWJlcjogNDEgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjVUMjI6MDA6MDAnKSwgbnVtYmVyOiA0MiB9LFxuXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDA0OjAwOjAwJyksIG51bWJlcjogNDMgfSxcbiAgICAgICAgeyBzdGFydDogbmV3IERhdGUoJzIwMjUtMDYtMjZUMDQ6MDA6MDAnKSwgbnVtYmVyOiA0NCB9LFxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yNlQyMjowMDowMCcpLCBudW1iZXI6IDQ1IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI2VDIyOjAwOjAwJyksIG51bWJlcjogNDYgfSxcblxuICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wNi0yN1QwNDowMDowMCcpLCBudW1iZXI6IDQ3IH0sXG4gICAgICAgIHsgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTA2LTI3VDA0OjAwOjAwJyksIG51bWJlcjogNDggfSxcbiAgICBdO1xuXG5cbiAgICBsZXQgbGl2ZU1hdGNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNoZWNrSXNMaXZlTWF0Y2goY3VycmVudERhdGUpO1xuICAgIH0sIDYwMCAqIDEwMDApO1xuXG4gICAgbGV0IGFjdGl2ZVBlcmlvZEJ5RGF0ZSA9IGdldEFjdGl2ZVdlZWsoY3VycmVudERhdGUsIGN1c3RvbVBlcmlvZHMpO1xuICAgIC8vIGNvbnN0IGFjdGl2ZVBlcmlvZEJ5RGF0ZSA9IGdldEFjdGl2ZVdlZWsoY3VycmVudERhdGUsIGN1c3RvbVBlcmlvZHMpO1xuXG4gICAgbGV0IGN1cnJlbnRBY3RpdmVQZXJpb2QgPSBhY3RpdmVQZXJpb2RCeURhdGU7XG5cbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVXZWVrKGRhdGUsIHBlcmlvZHMpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIG5vdy5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlcmlvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUocGVyaW9kc1tpXS5zdGFydCk7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShwZXJpb2RzW2ldLmVuZCk7XG4gICAgICAgICAgICBzdGFydC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGVuZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydCAmJiBub3cgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcmlvZHNbaV0ubnVtYmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm93IDwgc3RhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyaW9kc1swXS5udW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGVyaW9kc1twZXJpb2RzLmxlbmd0aCAtIDFdLm51bWJlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVUYWJCeURhdGUoYWN0aXZlTnVtYmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzcyo9XCJwZXJpb2QtXCJdJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wZXJpb2QtJHthY3RpdmVOdW1iZXJ9YCk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUYWJCeURhdGUoY3VycmVudEFjdGl2ZVBlcmlvZCk7XG5cbiAgICAvLyBjbGljayBvbiBmaW5pc2hlZCB0YWJzXG4gICAgZnVuY3Rpb24gdXBkYXRlRmluaXNoZWRUYWJzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3MqPVwicGVyaW9kLVwiXScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBlbC5jbGFzc05hbWUubWF0Y2goL3BlcmlvZC0oXFxkKykvKTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgcGVyaW9kTnVtID0gcGFyc2VJbnQobWF0Y2hbMV0pO1xuXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcsICdjb250aW51ZXMnKTtcbiAgICAgICAgICAgIGlmIChwZXJpb2ROdW0gPCBhY3RpdmVQZXJpb2RCeURhdGUpIHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJpb2ROdW0gPT09IGFjdGl2ZVBlcmlvZEJ5RGF0ZSkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRpbnVlcycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWVsLmRhdGFzZXQubGlzdGVuZXJBZGRlZCkge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVyaW9kTnVtIDw9IGFjdGl2ZVBlcmlvZEJ5RGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZVBlcmlvZCA9IHBlcmlvZE51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYkJ5RGF0ZShjdXJyZW50QWN0aXZlUGVyaW9kKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQn9C10YDQtdC80LjQutCw0L3QvdGPINC90LAg0L/QtdGA0ZbQvtC0ICR7cGVyaW9kTnVtfSDQt9Cw0LHQvtGA0L7QvdC10L3QtS4g0JDQutGC0LjQstC90LjQuSDQv9C10YDRltC+0LQg0L/QviDQtNCw0YLRljogJHthY3RpdmVQZXJpb2RCeURhdGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbC5kYXRhc2V0Lmxpc3RlbmVyQWRkZWQgPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVGaW5pc2hlZFRhYnMoKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrSXNMaXZlTWF0Y2goY3VycmVudERhdGUpIHtcbiAgICAgICAgaWYgKCFleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCBmb3VuZExpdmUgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBtYXRjaCBvZiBtYXRjaERhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKG1hdGNoLmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgMiAqIDYwICogNjAgKiAxMDAwKTsgLy8gKzIg0LPQvtC00LjQvdC4XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RGF0ZSA+PSBzdGFydCAmJiBjdXJyZW50RGF0ZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZExpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDQt9C90LDQudGI0LvQuCDigJQg0LTQsNC70ZYg0L3QtSDQv9C10YDQtdCy0ZbRgNGP0ZTQvNC+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmRMaXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgICAgICAgICByZWRpcmVjdEJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICBidG5Db250LmZvckVhY2goY29udCA9PiBjb250LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBzaG93XCIpO1xuICAgICAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgYnRuQ29udC5mb3JFYWNoKGNvbnQgPT4gY29udC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjaGVja0lzTGl2ZU1hdGNoKGN1cnJlbnREYXRlKTtcbiAgICB9LCA2MCAqIDEwMDApO1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5LWJ0bicpLFxuICAgICAgICBidG5Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bkNvbnQnKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIGdpZGVCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2lkZVwiKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdHMtdGFibGUnKSxcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0cy10YWJsZS1vdGhlcicpO1xuXG4gICAgbGV0IGV4aXN0aW5nVXNlciA9IGZhbHNlO1xuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICAvLyBsZXQgbG9jYWxlID0gXCJlblwiXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJ1a1wiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcblxuICAgIC8vIGxldCB1c2VySWQgPSBudWxsO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgPz8gbnVsbFxuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gcmVuZGVyVXNlcnMoKTtcblxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLW9mLWdvZHNcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1VzZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjaGVja0lzTGl2ZU1hdGNoKGN1cnJlbnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgZ2lkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXZlTWF0Y2hJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsaXZlTWF0Y2hJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGl2ZU1hdGNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lzTGl2ZU1hdGNoKGN1cnJlbnREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAwICogMTAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgd2Vlayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWspIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJEYXRhLnBvaW50c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdCkgLy/Qt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvLyBURVNUXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBjb25zdCBiZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iZXQtb25saW5lXCIpXG4gICAgY29uc3QgbGl2ZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXZlQmxvY2tcIilcbiAgICBjb25zdCBzZWNvbmRQZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZFBlclwiKVxuICAgIGNvbnN0IHdpdGhvdXRHaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aXRob3V0R2lkZVwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3Nzc3N1wiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgYmV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKT09XCI3Nzc3NzdcIil7XG4gICAgICAgICAgICB1bmF1dGhNc2dzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgZ2lkZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3N1wiKVxuICAgICAgICB9XG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgbGl2ZUJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgcmVkaXJlY3RCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIHVuYXV0aE1zZ3MuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgIGJ0bkNvbnQuZm9yRWFjaChjb250ID0+IGNvbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXZlIE1hdGNoIGZvciB0ZXN0XCIpO1xuICAgIH0pO1xuXG4gICAgc2Vjb25kUGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRBY3RpdmVQZXJpb2QgPSAyO1xuICAgICAgICBhY3RpdmVQZXJpb2RCeURhdGUgPSAyO1xuXG4gICAgICAgIHNldEFjdGl2ZVRhYkJ5RGF0ZShjdXJyZW50QWN0aXZlUGVyaW9kKTtcbiAgICAgICAgdXBkYXRlRmluaXNoZWRUYWJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiMiBwZXJpb2Qg0LDQutGC0LjQstC90LjQuVwiKTtcbiAgICB9KTtcblxuICAgIHdpdGhvdXRHaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGdpZGVCbG9jay5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKVxuICAgIH0pXG5cbn0pKCk7XG4iXX0=
