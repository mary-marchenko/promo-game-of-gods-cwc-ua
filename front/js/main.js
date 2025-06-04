(function () {

    const apiURL = 'https://fav-prom.com/api_game_of_gods'


    // const currentDate = new Date();
    const currentDate = new Date('2025-06-07T20:30:00+03:00');


    const customPeriods = [
        { start: new Date('2025-06-15'), end: new Date('2025-06-22'), number: 1 },
        { start: new Date('2025-06-23'), end: new Date('2025-07-13'), number: 2 },
    ];

    const matchDates = [
        { date: new Date('2025-06-07T20:30:00+03:00')},
        { date: new Date('2025-06-08T20:30:00+03:00')},
    ];


    let liveMatchInterval = setInterval(() => {
        checkIsLiveMatch(currentDate);
    }, 600 * 1000);

    let activePeriodByDate = getActiveWeek(currentDate, customPeriods);
    // const activePeriodByDate = getActiveWeek(currentDate, customPeriods);

    let currentActivePeriod = activePeriodByDate;

    function getActiveWeek(date, periods) {
        const now = new Date(date);
        now.setHours(0, 0, 0, 0);

        for (let i = 0; i < periods.length; i++) {
            const start = new Date(periods[i].start);
            const end = new Date(periods[i].end);
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
        document.querySelectorAll('[class*="period-"]').forEach(el => {
            el.classList.remove('active');
        });

        const activeElement = document.querySelector(`.period-${activeNumber}`);

        if (activeElement) {
            activeElement.classList.add('active');
        }
    }

    setActiveTabByDate(currentActivePeriod);

    // click on finished tabs
    function updateFinishedTabs() {
        document.querySelectorAll('[class*="period-"]').forEach(el => {
            const match = el.className.match(/period-(\d+)/);
            if (!match) return;

            const periodNum = parseInt(match[1]);

            el.classList.remove('finished', 'continues');
            if (periodNum < activePeriodByDate) {
                el.classList.add('finished');
            } else if (periodNum === activePeriodByDate) {
                el.classList.add('continues');
            }

            if (!el.dataset.listenerAdded) {
                el.addEventListener('click', () => {
                    if (periodNum <= activePeriodByDate) {
                        currentActivePeriod = periodNum;
                        setActiveTabByDate(currentActivePeriod);
                    } else {
                        console.log(`Перемикання на період ${periodNum} заборонене. Активний період по даті: ${activePeriodByDate}`);
                    }
                });
                el.dataset.listenerAdded = 'true';
            }
        });
    }
    updateFinishedTabs();

    function checkIsLiveMatch(currentDate) {
        if (!existingUser) {
            return
        }
        let foundLive = false;

        for (let match of matchDates) {
            const start = new Date(match.date);
            const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // +2 години

            if (currentDate >= start && currentDate <= end) {
                foundLive = true;
                break; // знайшли — далі не перевіряємо
            }
        }

        if (foundLive) {
            console.log("show");
            redirectBtns.forEach(btn => btn.classList.add('hide'));
            btnCont.forEach(cont => cont.classList.remove('hide'));
        } else {
            console.log("NOT show");
            redirectBtns.forEach(btn => btn.classList.remove('hide'));
            btnCont.forEach(cont => cont.classList.add('hide'));
        }
    }

    setInterval(() => {
        checkIsLiveMatch(currentDate);
    }, 1 * 1000);

    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.play-btn'),
        btnCont = document.querySelectorAll('.btnCont'),
        loader = document.querySelector(".spinner-overlay")

    let existingUser = false;
    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let loaderBtn = false

    // let locale = "en"
    let locale = sessionStorage.getItem("locale") ?? "uk"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = true

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;

    // let userId = null;
    let userId = Number(sessionStorage.getItem("userId")) ?? null

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
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

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            checkUserAuth();
            participateBtns.forEach(btn => {
                btn.addEventListener('click', participate);
            })

        }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return request(`/new-translates/${locale}`)
            .then(json => {
                i18nData = json;
                translate();
                const targetNode = document.getElementById("game-of-gods");
                const mutationObserver = new MutationObserver(function (mutations) {
                    mutationObserver.disconnect();
                    translate();
                    mutationObserver.observe(targetNode, { childList: true, subtree: true });
                });
                mutationObserver.observe(targetNode, {
                    childList: true,
                    subtree: true
                });

            });
    }


    function checkUserAuth() {
        const loadTime = 200;

        setTimeout(() => {
            const showElements = (elements) => elements.forEach(el => el.classList.remove('hide'));
            const hideElements = (elements) => elements.forEach(el => el.classList.add('hide'));

            if (!userId) {
                hideElements(participateBtns);
                hideElements(redirectBtns);
                showElements(unauthMsgs);
                hideLoader();
                return Promise.resolve(false);
            }

            hideElements(unauthMsgs);

            return request(`/favuser/${userId}?nocache=1`).then(res => {
                if (res.userid) {
                    hideElements(participateBtns);
                    showElements(redirectBtns);
                    existingUser = true;
                    checkIsLiveMatch(currentDate);
                    if (liveMatchInterval) {
                        clearInterval(liveMatchInterval);
                    }
                    liveMatchInterval = setInterval(() => {
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
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
            }
        }
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(lang);
        }
        element.classList.add(locale);
    }

    function renderUsers(week) {
        request(`/users/${week}`)
            .then(data => {
                const users = data;
                populateUsersTable(users, userId, week);
            });
    }

    function populateUsersTable(users, currentUserId, week) {
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        if (!users?.length) return;
        const currentUser = users.find(user => user.userid === currentUserId);
        const isTopCurrentUser = currentUser && users.slice(0, 10).some(user => user.userid === currentUserId);
        const topUsersLength = !userId || isTopCurrentUser  ? 13 : 10;
        const topUsers = users.slice(0, topUsersLength);
        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight || isCurrentUser && !neighbor) {
                userRow.classList.add('you');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
                ${isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : ''}
            </div>
            <div class="table__row-item">
                ${isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${userData.points}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }


    function translateKey(key, defaultValue) {
        if (!key) {
            return;
        }
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function getPrizeTranslationKey(place, week) {
        if (place <= 3) return `prize_${week}-${place}`;
        if (place <= 10) return `prize_${week}-4-10`;
        if (place <= 25) return `prize_${week}-11-25`;
        if (place <= 50) return `prize_${week}-26-50`;
        if (place <= 75) return `prize_${week}-51-75`;
        if (place <= 100) return `prize_${week}-76-100`;
        if (place <= 125) return `prize_${week}-101-125`;
        if (place <= 150) return `prize_${week}-126-150`;
        if (place <= 175) return `prize_${week}-151-175`;
        if (place <= 200) return `prize_${week}-176-200`;
    }

    function participate() {
        if (!userId) {
            return;
        }

        console.log(userId)
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                loaderBtn = true
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                    toggleClasses(participateBtns, "loader")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                }, 1000)

            });
    }

    loadTranslations().then(init) //запуск ініту сторінки

    // TEST

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });

    document.querySelector('.dark-btn').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "en");
        }
        window.location.reload();
    });

    const authBtn = document.querySelector(".auth-btn")
    const betBtn = document.querySelector(".btn-bet-online")
    const liveBlock = document.querySelector(".liveBlock")
    const secondPer = document.querySelector(".secondPer")

    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "777777")
        }
        window.location.reload()
    });

    betBtn.addEventListener("click", () =>{
        if(sessionStorage.getItem("userId")=="777777"){
            unauthMsgs.forEach(item => item.classList.add('hide'));
            participateBtns.forEach(item => item.classList.add('hide'));
            redirectBtns.forEach(item => item.classList.remove('hide'));
        }else{
            sessionStorage.setItem("userId", "777")
        }
        // window.location.reload()
    });

    liveBlock.addEventListener("click", () =>{
        const testDate = new Date('2025-06-02T20:30:00+03:00');
        checkIsLiveMatch(testDate);
        console.log("Live Match for test");
    });

    secondPer.addEventListener("click", () => {
        currentActivePeriod = 2;
        activePeriodByDate = 2;

        setActiveTabByDate(currentActivePeriod);
        updateFinishedTabs();
        console.log("2 period активний");
    });

})();
