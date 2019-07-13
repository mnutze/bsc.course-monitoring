/**
 * @overview <ccm-course_monitoring>
 * @author Michael Nutzenberger <michael.nutzenberger@smail.inf.h-brs.de> 2019
 * @license The MIT License (MIT)
 * @version latest (1.0.0)
 * @requirements log-server must support http(s) and websocket
 */

( function () {
    const component = {

        name: "course_monitoring",

        ccm: "https://ccmjs.github.io/ccm/versions/ccm-21.1.2.js",

        config: {
            /** stylesheets */
            "css": {
                "default": [ "ccm.load", [ { "url": "./resources/default.css" } ] ],
                "extern": [ "ccm.load", [
                    { "url": "https://mnutze.github.io/bsc.course-monitoring/libs/css/delos.css", "context": "head" },
                    { "url": "https://mnutze.github.io/bsc.course-monitoring/libs/css/delos.css" },
                    { "url": "https://mnutze.github.io/bsc.course-monitoring/libs/css/delos_cont.css" },
                    { "url": "https://cdnjs.cloudflare.com/ajax/libs/gridstack.js/0.4.0/gridstack.min.css" },
                    { "url": "https://cdnjs.cloudflare.com/ajax/libs/gridstack.js/0.4.0/gridstack-extra.css" }
                ] ]
            },
            /** loadable components */
            "components": {
                "monitor": [ "ccm.component", "ccm.monitor.js", {
                    "css.default": [ "ccm.load", [ { "url": "./resources/monitor.css" }, { "url": "./resources/cm-highcharts.css" } ] ],
                    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.0.1.js", { "css": [], "realm": "hbrsinfpseudo", "logged_in": true } ]
                } ],
                "cloze_analytics": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze_analytics/versions/ccm.cloze_analytics-1.3.0.js", {
                    "key": "teacher",
                    "sections": { "results": "Show Results",  "gaps": "Gap Analysis" },
                    "menu": [ "ccm.instance", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-1.2.1.js",
                        [ "ccm.get", "https://ccmjs.github.io/akless-components/menu/resources/configs.js", "bootstrap" ] ],
                    "cloze": {
                        "comp": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js" ],
                        "configs": [ "ccm.store", "https://ccmjs.github.io/akless-components/cloze/resources/configs.js" ],
                        "results": [ "ccm.store", { "url": "wss://ccm2.inf.h-brs.de", "store": "cloze_results" } ]
                    },
                    "table": [ "ccm.component", "https://ccmjs.github.io/tkless-components/table/versions/ccm.table-1.0.0.js" ],
                    "chart": [ "ccm.component", "https://ccmjs.github.io/akless-components/highchart/versions/ccm.highchart-1.0.0.js" ]
                } ],
                "result": [ "ccm.component", "https://ccmjs.github.io/akless-components/result/versions/ccm.result-2.0.0.js",
                    ["ccm.get","https://ccmjs.github.io/akless-components/result/resources/configs.js","ws"] ]
            },
            /** html */
            "html": [ "ccm.load", { "url": "./resources/templates.js" } ],
            /** needed js */
            "js" : [ "ccm.load", [
                { "url": "https://code.jquery.com/jquery-3.4.0.min.js", "type": "module" },
                { "url": "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js", "type": "module" },
                { "url": "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", "type": "module" },
                { "url": "https://mnutze.github.io/bsc.course-monitoring/libs/js/gridstack.js", "type": "module" },
                { "url": "https://mnutze.github.io/bsc.course-monitoring/libs/js/gridstack.jQueryUI.js", "type": "module" },
                { "url": "https://mnutze.github.io/bsc.course-monitoring/libs/js/moment.js" },
                { "url": "https://d3js.org/d3.v5.min.js" },
                { "url": "https://mnutze.github.io/bsc.course-monitoring/libs/js/logic.js" }
            ] ],
            /** local settings store */
            "local": [ "ccm.store" ],
            "utils": {
                "components": {
                    "feedback": [ "ccm.component", "https://ccmjs.github.io/tkless-components/feedback/versions/ccm.feedback-4.0.0.js", {
                        "from_above": 20, "css": [ "ccm.load", "https://ccmjs.github.io/tkless-components/feedback/resources/right.css" ],
                        "data": { "store": [ "ccm.store", { "name": "mnutze2s_evaluation_feedback", "url": "https://ccm2.inf.h-brs.de" } ], "key": "formative" } } ],
                },
                "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
            },
            "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.0.1.js", { "realm": "hbrsinfpseudo", "logged_in": true } ],
            "widgets": {},
            "worker": { 
                "filter": "./resources/worker.filter.js",
                "sharedFilter": "./resources/sharedWorker.filter.js"
            }
        },

        Instance: function () {

            const self = this;
            let $, worker = [], userInfo = { processed: 0 };

            // thanks to http://stackoverflow.com/a/22885503
            let waitForFinalEvent=function(){let b={};return function(c,d,a){a||(a="I am a banana!");b[a]&&clearTimeout(b[a]);b[a]=setTimeout(c,d)}}();
            let fullDateString = new Date();

            this.init = async () => {
                let has = function(key) { return !!$.deepValue(this, key); }; // $.deepValue(this, key) ? true : false
                jsonLogic.add_operation("has", has);
                // make sure that "jquery.js" library is executed only once -> can be called with jQuery
                !window.jQuery && await this.ccm.load( "https://code.jquery.com/jquery-3.4.0.min.js" );

                let localStoreName = window.location.hostname + window.location.pathname;
                self.local = await self.ccm.store({ "name": "cm-settings-" + self.utils.hash.md5(localStoreName) });

                if ( window.SharedWorker ) {
                    for (let i = 0; i < 4; i++) {
                        try {
                            let workerUrl = self.worker.sharedFilter;
                            if (testSameOrigin(workerUrl)) {
                                worker.push(new SharedWorker(workerUrl));
                                worker[i].onerror = function (event) {
                                    event.preventDefault();
                                    worker[i] = createSharedWorkerFallback(workerUrl);
                                    worker[i].port.start();
                                };
                            } else
                                worker.push(createSharedWorkerFallback(workerUrl));

                            worker[i].port.start();
                            worker[i].port.addEventListener('message', function(e) {
                                if (self.widgets[e.data.widget])
                                    // notify/send valid data(type = Array)
                                    self.widgets[e.data.widget].instance.update(e.data.data, e.data.key, true);
                            }, false);
                        } catch (e) {
                            let workerUrl = self.worker.filter;
                            worker.push(new SharedWorker(workerUrl));
                            worker[i].port.start();
                            worker[i].port.addEventListener('message', function(e) {
                                if (self.widgets[e.data.widget])
                                    // notify/send valid data(type = Array)
                                    self.widgets[e.data.widget].instance.update(e.data.data, e.data.key, true);
                            }, false);
                        }
                    }
                }
                else {
                    for (let i = 0; i < 4; i++) {
                        try {
                            let workerUrl = self.worker.filter;
                            if (testSameOrigin(workerUrl)) {
                                worker.push(new Worker(workerUrl));
                                worker[i].onerror = function (event) {
                                    event.preventDefault();
                                    worker[i] = createWorkerFallback(workerUrl);
                                };
                            } else
                                worker.push(createWorkerFallback(workerUrl));

                            worker[i].addEventListener('message', function(e) {
                                if (self.widgets[e.data.widget])
                                    // notify/send valid data(type = Array)
                                    self.widgets[e.data.widget].instance.update(e.data.data, e.data.key, true);
                            }, false);
                        } catch (e) {
                            let workerUrl = self.worker.filter;
                            worker.push(new Worker(workerUrl));
                            worker[i].addEventListener('message', function(e) {
                                if (self.widgets[e.data.widget])
                                    // notify/send valid data(type = Array)
                                    self.widgets[e.data.widget].instance.update(e.data.data, e.data.key, true);
                            }, false);
                        }
                    }
                }


                /** currently not active
                // give local store chance to finish all open store processes
                window.onbeforeunload = confirmExit;
                function confirmExit() {
                    return "You have attempted to leave this page. Are you sure you want to exit this page?";
                }
                */
            };

            this.ready = async () => {
                // set shortcut to help functions
                $ = self.ccm.helper;
            };

            this.start = async () => {

                if (self.settings && $.isDatastore(self.settings.store))
                    self.course = await self.settings.store.get(self.settings.course);
                if (!self.course) {
                    alert("Please contact admin/developer! Course key isn't right!");
                    $.setContent( self.element, "");
                    return;
                }

                self.element.parentNode.appendChild($.html(self.html["eval-info"]));
                self.element.parentNode.querySelector("#cm-modal").querySelector("#cm-info-ok").addEventListener("click", async function () {
                    self.element.parentNode.querySelector("#cm-modal").classList.toggle("show");
                    await self.local.set( { key: "eval_info", read: true } );
                });
                let eval_info = await self.local.get("eval_info");
                if (eval_info === null)
                    self.element.parentNode.querySelector("#cm-modal").classList.toggle("show");

                self.element.appendChild($.html(self.html.loading));
                // initiate data-sources
                await sources();

                // set content of own website area
                $.setContent( self.element, $.html(self.html.main, {
                    cmTitle: "Course - Monitoring",
                    cmBoardRevert: "Reset Dashboard"
                } ) );

                // set dashboard size
                if (!self.size) {
                    // stand-alone monitor running -> set height to full viewport height
                    self.element.querySelector("body").style = "height: 100vh;";
                    self.size = self.element.querySelector("body").getBoundingClientRect();
                } else
                    self.element.querySelector("body").style = $.format("height: %height%px; width: %width%px", {
                        height: self.size.height,
                        width: self.size.width
                    });

                // init revert Dashboard button
                self.element.querySelector("#revert-dashboard").addEventListener("click", revertDashboard);

                await initCourseTeamSettings();

                // @later: extend personalization by adding custom profile name
                self.profile = { user: self.user.data().user, name: "", team: self.course.learners[self.user.data().user]};
                // shortcut
                let navBarProfile = self.element.querySelector("nav.navbar.cm-navbar").querySelector("#cm-profile");
                $.setContent(navBarProfile.querySelector(".cm-profile-user"),
                    self.course.humanReadable.learners[self.profile.user] ?
                        self.course.humanReadable.learners[self.profile.user] : self.profile.user);
                $.setContent(navBarProfile.querySelector(".cm-profile-team"), self.course.teams[self.profile.team].name);
                $.setContent(navBarProfile.querySelector(".cm-profile-team-members"),
                    $.html(Object.keys(self.course.teams[self.profile.team].members).filter(member => member !== self.profile.user)
                        .map(member => ({
                            "tag": "li",
                            "inner": {
                                "tag": "a",
                                "onclick": () => {
                                    navBarProfile.querySelector(".cm-profile-team-members").classList.toggle("show");
                                    self.createBoardPanel(member, { "key": "user.user", "values": []}, false);
                                },
                                "inner": self.course.humanReadable.learners[member] ?
                                    self.course.humanReadable.learners[member] : member
                            }
                        }))));

                navBarProfile.querySelector(".cm-profile-team").addEventListener("click", function (event) {
                    navBarProfile.querySelector(".cm-profile-team-members").classList.toggle("show");
                });

                await self.utils.components.feedback.start({ root: self.element.querySelector( '#feedback' ) });

                await roleInit();

                await renderDashboard();
            };

            this.panel = () => {
                function id () { return "panel_" + $.generateKey(); }
                return {
                    create: (key, settings) => {
                        if (key === null) // if you're creating at runtime, there is no panel-key
                            key = id();

                        let element = $.html(self.html.panel.wrapper, {id: "grid-" + key});
                        self.element.querySelector("#dashboard-panels").appendChild(element);

                        // define grid cell height
                        let cellHeight = (
                            self.size.height -
                            self.element.querySelector("div#top-nav.row").getBoundingClientRect().height -
                            self.element.querySelector("ul#ilTab.control.panel-nav.panel-tab-nav").getBoundingClientRect().height -
                            260
                        ) / 12;
                        // instancing panel-grid
                        jQuery(self.element.querySelector("#grid-" + key)).gridstack({
                            verticalMargin: 0,
                            cellHeight: cellHeight,
                            float: false,
                            draggable: { handle: ".ilBlockDraggableHeader", cancel: "h3.ilBlockHeader" },
                        }).on('gsresizestop', function (ev, element) {
                            /** Widgets will be rerendered on resizing */
                            if (!self.widgets)
                                return;
                            let widget = self.widgets[element.getAttribute("data-gs-id")];
                            self.widget().resize(widget, element);
                        }).on("dragstop", function (event, element, parent) {
                            Object.keys(self.widgets).forEach(key => {
                                let widget = self.element.querySelector("[data-gs-id=" + key + "]");
                                let gridstack = self.panels.obj[widget.parentNode.id.replace("grid-", "")].gridstack;
                                let x = gridstack.grid.nodes.filter(node => node.id === key)[0].x;
                                let y = gridstack.grid.nodes.filter(node => node.id === key)[0].y;
                                //console.log(self.panels.obj[widget.parentNode.id.replace("grid-", "")].widgets[key])
                                self.panels.obj[widget.parentNode.id.replace("grid-", "")].widgets[key].position.x = x;
                                self.panels.obj[widget.parentNode.id.replace("grid-", "")].widgets[key].position.y = y;
                            });
                            saveBoard();
                        });

                        settings.gridstack = jQuery(self.element.querySelector("#grid-" + key)).data("gridstack");
                        settings.gridstack.setGridWidth(12);

                        // add a panel-link to panel-navigation -> add panel-link at third second last(-3) place, cause of link "new Widget" and "Config Panel"
                        let last_node = self.element.querySelector(".panel-nav").childNodes
                            .item(self.element.querySelector(".panel-nav").childNodes.length-3);

                        self.element.querySelector(".panel-nav").insertBefore($.html(self.html.panel.link, {
                            title: settings.title,
                            switch: function () { self.panel().switch(key); },
                            key: key,
                            removePanel: function (event) { self.panel().remove(this); }
                        }), last_node);

                        if (!self.panels.ordered.includes(key))
                            self.panels.ordered.push(key);

                        if (!self.panels.obj[key])
                            self.panels.obj[key] = settings;

                        return key;

                    },
                    render: async (key, panel) => {
                        self.element.querySelector("#grid-" + key).classList.remove("hide");

                        if (panel.widgets && $.isObject(panel.widgets)) {
                            let __keys = Object.keys(panel.widgets);
                            for (let i = 0; i < __keys.length; i++) {
                                let widget = await self.widget().create(__keys[i], panel);
                            }
                        }
                    },
                    remove: node => {
                        let key = node.parentNode.id.replace("link-", "");
                        let panel = self.panels.obj[key];
                        panel.gridstack.grid.nodes.forEach(node => self.widget().remove(node));
                        panel.gridstack.removeAll();

                        let root = node.parentNode.parentNode;
                        root.remove();

                        delete self.panels.obj[key];

                        self.panels.ordered = self.panels.ordered.filter(panel => panel !== key);

                        saveBoard();

                        self.panel().switch(self.panels.ordered[0]);
                    },
                    resize: () => {
                        function isBreakpoint(alias) {
                            return window.getComputedStyle(self.element.querySelector(".device-" + alias)).display === "block";
                        }
                        //var grid = $('.grid-stack').data('gridstack');
                        if (isBreakpoint('sm') || isBreakpoint('xs') || isBreakpoint('md')) {
                            Object.values(self.panels.obj).forEach(panel => panel.gridstack ?
                                panel.gridstack.setGridWidth(1) : undefined);

                            Object.keys(self.widgets).forEach(key => {
                                let element = self.element.querySelector("[data-gs-id=" + key + "]");
                                self.widget().resize(self.widgets[key], element);
                            });
                        } else if (isBreakpoint('lg')) {
                            Object.values(self.panels.obj).forEach(panel => panel.gridstack ?
                                panel.gridstack.setGridWidth(12) : undefined);

                            Object.keys(self.widgets).forEach(key => {
                                let element = self.element.querySelector("[data-gs-id=" + key + "]");
                                self.widget().resize(self.widgets[key], element);
                            });
                        }
                    },
                    switch: function (dest) {
                        let src, srcPanel;

                        let panelTab = self.element.querySelector(".control.panel-nav.panel-tab-nav");

                        if (self.element.querySelector(".control.panel-nav").querySelector(".active"))
                            src = self.element.querySelector(".control.panel-nav").querySelector(".active")
                                .querySelector("a").id.split("link-")[1];

                        if (src)
                            srcPanel = self.panels.obj[src];

                        if (srcPanel) {
                            srcPanel.gridstack.grid.nodes.forEach(async node => {
                                node._grid.removeWidget(node.el);
                                if (self.widgets[node.id] && self.widgets[node.id].instance && self.widgets[node.id].instance.worker)
                                    await self.widgets[node.id].instance.terminateWorker();
                                delete self.widgets[node.id];
                                Object.values(self.sources).forEach(src => {
                                    src.listener = src.listener.filter(d => d.id !== "widget_" + node.id);
                                    src.listener = src.listener.filter(d => d.widget !== node.id);
                                });
                            });
                            srcPanel.gridstack.removeAll();
                        }

                        self.panels.ordered.forEach(panel => {
                            panelTab.querySelector("#link-" + panel).parentNode.classList.remove("active");
                            panelTab.querySelector("#link-" + panel).querySelector(".glyphicon.glyphicon-remove").classList.remove("show");
                        });

                        panelTab.querySelector("#link-" + dest).parentNode.classList.add("active");
                        if (!self.panels.notRemovable)
                            panelTab.querySelector("#link-" + dest).querySelector(".glyphicon.glyphicon-remove").classList.add("show");

                        // switch
                        self.element.querySelector("#dashboard-panels").childNodes.forEach(node => node.classList.add("hide"));
                        self.element.querySelector("#grid-" + dest).classList.remove("hide");

                        saveBoard();
                        self.panel().render(dest, self.panels.obj[dest]);
                    }
                }
            };

            this.widget = () => {
                function id () { return "widget_" + $.generateKey(); }
                function addToPanel (id, panel, settings) {
                    function setAttributes (_div, ...attributes) {
                        attributes[0].forEach(_attributes => _div.setAttribute(_attributes[0], _attributes[1]))
                    }
                    function toggleConfig(ev) {
                        this.parentNode.parentNode.parentNode.querySelector(".ilBlockContent.config").classList.toggle("hide");
                        this.parentNode.parentNode.parentNode.querySelector(".ilBlockContent.content").classList.toggle("hide");
                        self.widget().config(id, panel, self.element.querySelector("[data-gs-id=" + id + "]"), size);
                    }

                    const div = document.createElement("div");
                    let attr = settings.attributes;
                    setAttributes(div, attr);

                    if (!settings.without_header) {
                        $.setContent(div, $.html(self.html.widget.wrapper, {
                            "widget-item-style": "overflow: hidden;",
                            "widget-title": settings.title,
                            "widget-content-id": id,
                            "widget-config": $.html(self.html.widget.config),
                            "widget-toggle-config": toggleConfig,
                        }));
                        if (settings.notModifiable)
                            div.querySelector(".cm-widget-control").classList.add("hide")
                    }
                    else
                        $.setContent(div, $.html(self.html.widget.without_header, {
                            "widget-item-style": "overflow: hidden;",
                            "widget-title": settings.title,
                            "widget-content-id": id,
                            "widget-config": $.html(self.html.widget.config),
                            "widget-toggle-config": toggleConfig,
                        }));

                    let widget = panel.gridstack.addWidget(jQuery(div), settings.position.x, settings.position.y,
                        settings.position.width, settings.position.height, settings.position.autoPosition);
                    let size = {
                        width: widget[0].querySelector(".grid-stack-item-content").offsetWidth,
                        height: widget[0].querySelector(".grid-stack-item-content").offsetHeight
                    };

                    widget[0].querySelector(".glyphicon-remove.widget-remove").addEventListener("click", ev => {
                        self.widget().remove(panel.gridstack.grid.nodes.filter(widget => widget.id === id)[0])
                    });

                    return { node: self.element.querySelector("[data-gs-id=" + id + "]"), size: size};
                }
                return {
                    // add a new grid-widget and fill it with a blank monitor-widget, which has to be configured
                    blank: () => {
                        let key = self.element.querySelector("#ilTab.panel-nav")
                            .querySelector(".active")
                            .querySelector("a").id.split("link-")[1];

                        // get current panel
                        let panel = self.panels.obj[key];
                        let widgetKey = id();
                        let newWidgetConfig = {
                            attributes: [["data-gs-id", widgetKey]],
                            position: {x: null, y: null, width: 3, height: 4, autoPosition: true},
                            title: "New Widget"
                        };
                        let element = addToPanel(widgetKey, panel, newWidgetConfig);

                        self.widget().config(widgetKey, panel, element.node, element.size);
                    },
                    // config chosen widget
                    config: (widgetId, panel, root, size) => {
                        if (self.widgets[widgetId]) {
                            /**
                             * @initial configuration
                             * graph -> render { key & graph }
                             * groupBy ->
                             * groupBy.groupBy
                             * render
                             * selection -> subject { key & values & evtl teams }
                             * size -> limit
                             * sort -> sort
                             * title -> title
                             * type -> process
                             */
                            let current = {};
                            if (self.widgets[widgetId].config.groupBy)
                                current.groupByPrimary = Object.values(self.ignore.groupBy)
                                    .reduce((prev, curr) => curr.key === self.widgets[widgetId].config.groupBy.key
                                        ? curr : prev, {});
                            if (self.widgets[widgetId].config.groupBy && self.widgets[widgetId].config.groupBy.groupBy)
                                current.groupBySecondary;
                            /*
                            console.log(
                                panel.widgets[widgetId].title,
                                self.panels,
                                self.widgets,
                                "reconfiguration",
                                self.widgets[widgetId],
                                self.widgets[widgetId].instance.render,
                                self.widgets[widgetId].instance.groupBy,
                                self.widgets[widgetId].instance.interval,
                                self.widgets[widgetId].instance.sort,
                                self.widgets[widgetId].instance.subject,
                                self.widgets[widgetId].instance.limit,
                                self.widgets[widgetId].type
                                ); // @ TODO to implement reconfiguration
                            */
                        }

                        let node = root.querySelector(".config");
                        root.querySelector(".ilBlockContent.content").classList.add("hide");
                        node.classList.remove("hide");

                        let configId = "config-" + widgetId;

                        $.setContent(node, $.html(self.html.widget.config.wrapper, {
                            widget: configId,
                            selectedSubjects: root.clientHeight / 2
                        }));

                        let configForm = node.querySelector("form");

                        ["general", "selection", "grouping", "options"].forEach(el =>
                            node.querySelector("li#" + el + " a").addEventListener("click", navigate));

                        configForm.querySelector("#title").addEventListener("input", function (event) {
                            root.querySelector("h3.ilBlockHeader").innerHTML = this.value;
                        });

                        while(configForm.querySelector("#type").firstChild)
                            configForm.querySelector("#type").remove(configForm.querySelector("#type").firstChild);

                        Object.keys(self.ignore.widgets).forEach(type => configForm.querySelector("#type")
                            .appendChild($.html({
                                tag: "option",
                                value: type,
                                inner: self.ignore.widgets[type].label
                            })));

                        if (self.widgets[widgetId])
                            node.querySelector("#type").value = self.widgets[widgetId].type.replace("ignore.widgets.", "");

                        setOptions(configForm.querySelector("#type").value);

                        addSettingsEventListener();

                        // set title
                        if (self.widgets[widgetId])
                            node.querySelector("#title").value = panel.widgets[widgetId].title;

                        root.querySelector("h3.ilBlockHeader").innerHTML = node.querySelector("#title").value;

                        node.querySelector("#start-component").addEventListener("click", finalizeConfiguration);

                        function navigate (){
                            Array.from(this.parentNode.parentNode.childNodes).forEach(node => node.classList.remove("active"));
                            this.parentNode.classList.add("active");
                            let key = this.parentNode.id;
                            Array.from(configForm.childNodes).forEach(node => node.classList.add("hide"));
                            configForm.querySelector("#" + key + "Config").classList.remove("hide");
                        }

                        function setOptions (key) {

                            let _node, widgetTypeConfig = self.ignore.widgets[key].options;

                            if (!widgetTypeConfig)
                                return;

                            if (widgetTypeConfig.groupBy) {
                                _node = configForm.querySelector("#root-group-by");
                                while (_node.firstChild)
                                    _node.removeChild(_node.firstChild);
                                _node.parentNode.querySelector("label").innerHTML = widgetTypeConfig.groupBy.label;
                                Object.keys(self.ignore.groupBy).forEach(key => {
                                    _node.appendChild($.html({
                                        tag: "option",
                                        value: key,
                                        inner: self.ignore.groupBy[key].label
                                    }));
                                });
                                _node.disabled = false;
                            } else
                                configForm.querySelector("#root-group-by").disabled = true;

                            if (widgetTypeConfig.selection) {
                                _node = configForm.querySelector("#selection-type");
                                // "selection": { "only": "learners", "single": true }
                                if ($.isObject(widgetTypeConfig.selection) && widgetTypeConfig.selection.only)
                                    _node.childNodes.forEach(opt => opt.value === "teams" ? opt.disabled = true : undefined);
                                // multiple subject selection allowed?
                                configForm.querySelector("#selected-subjects").multiple =
                                    !($.isObject(widgetTypeConfig.selection) && widgetTypeConfig.selection.single);
                                // subject selection allowed -> enable select
                                _node.disabled = false;
                            } else
                                configForm.querySelector("#selection-type").disabled = true;
console.log(widgetTypeConfig)
                            if (widgetTypeConfig.visualization) {
                                _node = node.querySelector("#graph");
                                while (_node.firstChild)
                                    _node.removeChild(_node.firstChild);
                                _node.parentNode.querySelector("label").innerHTML = widgetTypeConfig.visualization.label;

                                Object.keys(widgetTypeConfig.visualization.options).forEach(key => {
                                    _node.appendChild($.html({
                                        tag: "option",
                                        value: widgetTypeConfig.visualization.options[key],
                                        inner: key
                                    }));
                                });
                                _node.disabled = false;
                            } else
                                configForm.querySelector("#graph").disabled = true;

                            configForm.querySelector("#grouping-deeper").disabled =
                                !(widgetTypeConfig.groupBy && widgetTypeConfig.groupBy.groupBy);

                            configForm.querySelector("#sort").disabled = !!!widgetTypeConfig.sort;

                            configForm.querySelector("#size").disabled = !widgetTypeConfig.size;

                            // @TODO add selection perspective
                        }

                        function addSettingsEventListener () {

                            configForm.querySelector("#type").addEventListener("change", function (event) {
                                configForm.querySelector("#grouping-deeper").checked = false;
                                configForm.querySelector("#grouping-deeper").disabled = true;
                                configForm.querySelector("#root-group-by").disabled = true;
                                configForm.querySelector("#child-group-by").parentNode.classList.toggle("hide");
                                configForm.querySelector("#child-group-by").disabled = true;
                                configForm.querySelector("#graph").disabled = true;
                                configForm.querySelector("#sort").disabled = true;
                                configForm.querySelector("#size").disabled = true;
                                setOptions(this.value);
                            });

                            configForm.querySelector("#grouping-deeper").addEventListener("change", function (event) {
                                    let _node = configForm.querySelector("#child-group-by"),
                                        _type = configForm.querySelector("#type").value,
                                        _key = configForm.querySelector("#root-group-by").value,
                                        _options = self.ignore.widgets[_type].options.groupBy.groupBy;

                                    if (this.checked) {
                                        _node.parentNode.querySelector("label").innerHTML = _options.label;
                                        _options = self.ignore.groupBy[_key].groupBy;
                                        while (_node.firstChild)
                                            _node.removeChild(_node.firstChild);
                                        Object.keys(_options).forEach(key =>
                                            _node.appendChild($.html({
                                                tag: "option",
                                                value: key,
                                                inner: _options[key].label
                                            })));
                                        _node.parentNode.classList.toggle("hide");
                                        _node.disabled = false;
                                    } else {
                                        _node.parentNode.classList.toggle("hide");
                                        _node.disabled = true;
                                    }

                                });

                            configForm.querySelector("#root-group-by").addEventListener("change", function (event) {
                                let _node = configForm.querySelector("#child-group-by"),
                                    _type = configForm.querySelector("#type").value,
                                    _key = configForm.querySelector("#root-group-by").value;
                                while (_node.firstChild)
                                    _node.removeChild(_node.firstChild);

                                _node.parentNode.querySelector("label").innerHTML =
                                    self.ignore.widgets[_type].options.groupBy.groupBy.label;

                                Object.keys(self.ignore.groupBy[_key].groupBy).forEach(key =>
                                    _node.appendChild($.html({
                                        tag: "option",
                                        value: key,
                                        inner: self.ignore.groupBy[_key].groupBy[key].label
                                    }))
                                );
                            });

                            configForm.querySelector("#selection-type").addEventListener("change", function (event) {
                                // set shortcut
                                let optionsNode = configForm.querySelector("#selected-subjects");
                                // if option === "course", further subject(s) selection isn't needed
                                if (this.value === "course") {
                                    // let subject-selection be disabled
                                    optionsNode.disabled = true;
                                    // remove previous options
                                    while(optionsNode.firstChild)
                                        optionsNode.remove(optionsNode.firstChild);
                                    // further subject(s) selection isn't needed -> return
                                    return;
                                }
                                // option is a subject-type, enable subject(s) selection
                                optionsNode.disabled = false;
                                // if single subject selection allowed -> set multiple = false
                                // if options.selection.single -> this.multiple = false

                                // before re-new selected-subject options -> remove previous
                                while(optionsNode.firstChild)
                                    optionsNode.remove(optionsNode.firstChild);

                                // set selectable options by chosen subject-type
                                if (this.value === "teams")
                                    // subject-type === teams -> set available teams(from anonymized teambuild_data) as options
                                    Object.keys(self.course.teams).forEach(subject =>
                                        optionsNode.appendChild($.html({
                                            tag: "option",
                                            style: self.course.teams[subject].members[self.profile.user] ? "cm-yourself" : "",
                                            value: subject,
                                            inner: self.course.teams[subject].members[self.profile.user] ?
                                                self.course.teams[subject].name + " (yours)" :
                                                self.course.teams[subject].name
                                        })));
                                else
                                    // subject-type === learners -> set learner(humanReadable) as options
                                    Object.keys(self.course.learners).forEach(subject =>
                                        optionsNode.appendChild($.html({
                                            tag: "option",
                                            class: subject === self.profile.user ? "cm-yourself" : "",
                                            value: subject,
                                            inner: subject === self.profile.user ? "You" :
                                                self.course.humanReadable.learners[subject] ?
                                                    self.course.humanReadable.learners[subject] : subject
                                        })));
                            });
                        }

                        function finalizeConfiguration () {
                            let gridElement = panel.gridstack.grid.nodes.filter(widget => widget.id === widgetId)[0];
                            let formCollection = configForm.elements,
                                _type = formCollection.namedItem("type").value,
                                _options = self.ignore.widgets[_type].options,
                                __widget;

                            __widget = {
                                title: formCollection.namedItem("title").value,
                                component: self.ignore.widgets[_type].component,
                                options: _options,
                                position: {
                                    x: gridElement.x,
                                    y: gridElement.y,
                                    width: gridElement.width,
                                    height: gridElement.height
                                },
                                scroll: self.ignore.widgets[_type].scroll,
                                sources: self.ignore.widgets[_type].sources,
                                config: self.ignore.widgets[_type].config,
                                widget: "ignore.widgets." + _type,
                                type: "ignore.widgets." + _type
                            };

                            if (!formCollection.namedItem("sort").disabled)
                                __widget.config.sort =formCollection.namedItem("sort").value;

                            if (!formCollection.namedItem("size").disabled)
                                __widget.config.limit = formCollection.namedItem("size").value;

                            if (!formCollection.namedItem("graph").disabled) {
                                __widget.config.render.key = formCollection.namedItem("graph").value.split(".")[0];
                                __widget.config.render.type = formCollection.namedItem("graph").value.split(".")[1] ?
                                    formCollection.namedItem("graph").value.split(".")[1] : undefined
                            }

                            if (!formCollection.namedItem("root-group-by").disabled && formCollection.namedItem("grouping-deeper").checked)
                                __widget.config.groupBy = { // deeper groupBy
                                    key: self.ignore.groupBy[formCollection.namedItem("root-group-by").value].key,
                                    groupBy: {
                                        key: self.ignore.groupBy[formCollection.namedItem("root-group-by").value].groupBy[formCollection.namedItem("child-group-by").value].key
                                    }
                                };
                            else if (!formCollection.namedItem("root-group-by").disabled)
                                __widget.config.groupBy = { // single groupBy
                                    key: self.ignore.groupBy[formCollection.namedItem("root-group-by").value].key
                                };

                            if (!formCollection.namedItem("selection-type").disabled && formCollection.namedItem("selection-type").value !== "none") {
                                let __values = [];
                                Array.from(formCollection.namedItem("selected-subjects").selectedOptions)
                                    .forEach(selection => __values.push(selection.value) );

                                if (formCollection.namedItem("selection-type").value === "teams") {
                                    __widget.config.subject = { key: "team", values: __values, teams: true };
                                    __widget.config.teams = true;
                                } else if (formCollection.namedItem("selection-type").value === "learners")
                                    __widget.config.subject = { key: "user.user", values: __values };
                            }
                            else if (__widget.config) // nothing to do, user want to see all subjects and no relations between
                                __widget.config.subject = { key: "user.user", values: [] };


                            // hide config
                            node.classList.add("hide");
                            // show content
                            root.querySelector(".ilBlockContent.content").classList.remove("hide");
                            // start/render widget/component
                            if (__widget.config)
                                __widget.config.size = { width: root.clientWidth, height: root.clientHeight };

                            panel.widgets[widgetId] = __widget;

                            saveBoard();

                            self.widget().create(widgetId, panel, root.querySelector(".ilBlockContent.content"), "ignore.widgets." + _type)
                        }

                    },
                    // add a new grid-widget with a defined monitor-widget
                    create: async (key, panel, container, type) => {

                        if (!key)
                            key = id();

                        // @TODO extend for shared config ability!!!
                        let settings = $.clone(panel.widgets[key]);
                        if (!type)
                            type = settings.widget;
                        if (settings.widget)
                            settings = Object.assign($.clone($.deepValue(self, settings.widget)), settings);
                        settings = $.convertObjectKeys(settings);

                        let config = Object.assign({}, settings.config ? settings.config : {});

                        config.widget = key;

                        if (config.process && typeof config.process === "string")
                            config.process = $.deepValue(self, config.process);

                        if (settings.component === "monitor" && !config.process && !config.worker) {
                            console.error("Monitor/Widget is wrong configured! Can't create!");
                            return;
                        }

                        let component = self.components[settings.component];

                        if (!settings.attributes)
                            settings.attributes = [["data-gs-id", key]];
                        else
                            settings.attributes.push(["data-gs-id", key]);

                        if (!container) {
                            let created = addToPanel(key, panel, settings);
                            container = created.node.querySelector(".ilBlockContent.content");
                            config.size = created.size;
                        } else
                            config.size = config.size ? config.size : {
                                width: container.offsetWidth,
                                height: container.offsetHeight
                            };

                        if (settings.sources && $.isObject(settings.sources)) {
                            config.sources = {};
                            let __sources = Object.keys(settings.sources);
                            __sources.forEach((__key, i) =>
                                config.sources[self.sources[__key].hash] = ({
                                    id: i,
                                    name: __key,
                                    filter: typeof settings.sources[__key].filter === "string" ?
                                        $.deepValue( self, settings.sources[__key].filter ) :
                                        settings.sources[__key].filter,
                                    key: self.sources[__key].hash
                                }));
                        }

                        // if there is already an profile available, you'll get information this specific learner
                        //if (settings.component === "monitor" && !config.profile)
                        // set your profile to personally identify in monitors -> must be else
                        config.profile = self.profile;

                        if (config.teams)
                            config.teams = self.course.teams;

                        // current course members/teams
                        config.course = self.course;

                        // if monitor needs a subject selection and config.subject.values = undefined or [] -> select your profile
                        if (config.selection && !config.subject.values && config.teams)
                            config.subject.values = [self.course.learners[self.profile.user]];
                        else if (config.selection && !config.subject.values && !config.teams && config.subject.members) {
                            config.subject.values = Object.keys(self.course.teams[self.profile.team].members);
                        }
                        else if (config.selection && !config.subject.values && !config.teams)
                            config.subject.values = [self.profile.user];

                        // check for additional process filters
                        if (config.processing && config.processing.filter)
                            Object.keys(config.processing.filter).forEach(filterKey => {
                                config.processing.filter[filterKey] = typeof config.processing.filter[filterKey] === "string" ?
                                        $.deepValue( self, config.processing.filter[filterKey] ) :
                                        config.processing.filter[filterKey];});

                        config.root = container;

                        let instance = await component.start(config);

                        if (!self.widgets)
                            self.widgets = { [config.widget]: { config: config, instance: instance, type: type } };
                        else
                            self.widgets[config.widget] = { config: config, instance: instance, type: type };

                        if (instance && instance.update && config.sources) {
                            let __sources = Object.keys(config.sources);
                            __sources.forEach(src => {
                                Object.values(self.sources)
                                    .filter(source => source.hash === config.sources[src].key)
                                    .forEach(source => source.listener.push(instance))
                            });
                        }

                        // filter with shared filter worker
                        if (instance && instance.update && config.sources) {
                            let __sources = Object.keys(config.sources);
                            __sources.forEach(src => {
                                userInfo.processed += self.data[src].length;
                                try {
                                    if ( window.SharedWorker )
                                        worker[Object.keys(self.widgets).length % 4].port.postMessage({
                                            data: self.data[src],
                                            key: config.sources[src].key,
                                            rules: config.sources[src].filter,
                                            widget: config.widget
                                        });
                                    else
                                        worker[Object.keys(self.widgets).length % 4].postMessage({
                                            data: self.data[src],
                                            key: config.sources[src].key,
                                            rules: config.sources[src].filter,
                                            widget: config.widget
                                        });
                                } catch (e) {
                                    // browser is not SharedWorker compatible -> notify/send valid data(type = Array)
                                    preFilterData().then(data => self.widgets[config.widget].instance.update(data, self.data[src].key, true));
                                }
                            });
                        }

                        return config
                    },
                    remove: async (obj, key) => {
                        obj._grid.removeWidget(obj.el);
                        if (self.widgets[obj.id] && self.widgets[obj.id].instance && self.widgets[obj.id].instance.worker)
                            await self.widgets[obj.id].instance.terminateWorker();
                        delete self.widgets[obj.id];
                        Object.values(self.sources).forEach(src => {
                            src.listener = src.listener.filter(d => d.id !== "widget_" + obj.id);
                            src.listener = src.listener.filter(d => d.widget !== obj.id);
                        });
                        let panelKey = self.element.querySelector(".control.panel-nav.panel-tab-nav")
                            .querySelector(".active").querySelector("a").id
                            .replace("link-", "");
                        delete self.panels.obj[panelKey].widgets[obj.id];
                        await saveBoard();
                    },
                    resize: async (widget, element) => {
                        let widgetKey = element.getAttribute("data-gs-id");
                        let gsWidth = element.getAttribute("data-gs-width");
                        let gsHeight = element.getAttribute("data-gs-height");
                        Object.values(self.panels.obj).forEach(panel => {
                            if (panel.widgets[widgetKey]) {
                                panel.widgets[widgetKey].position.width = gsWidth;
                                panel.widgets[widgetKey].position.height = gsHeight;
                            }
                        });

                        // store board
                        await saveBoard();

                        if (widget && widget.instance)
                            widget.instance.size = {
                                width: element.querySelector(".grid-stack-item-content").offsetWidth,
                                height: element.querySelector(".grid-stack-item-content").offsetHeight};
                        if (widget && widget.instance && widget.instance.rerender)
                            widget.instance.rerender();
                    }
                }
            };

            /**
             * @info components are related to each other can create panels also(no matter if child or parent).
             * related component needs a subject key, subject definition and the team flag(be team ? true|false)
             * @param key
             * @param subject
             * @param teams
             * @returns {Promise<void>}
             */
            this.createBoardPanel = async (key, subject, teams) => {
                    let panel;
                    if (!teams)
                        panel = $.clone(self.ignore.panels.panel_learner);
                    else
                        panel = $.clone(self.ignore.panels.panel_team);

                    panel.widgets = panel.widgets.reduce((prev, settings) => {

                        // new uid for generic subject panel
                        let widgetKey = "widget_" + $.generateKey();

                        // assign generic template(ignore.widgets) or panel specific widget
                        if (settings.widget)
                            prev[widgetKey] = Object.assign({}, $.clone($.deepValue(self, settings.widget)), settings);
                        else
                            prev[widgetKey] = settings;
                        prev[widgetKey] = $.convertObjectKeys(prev[widgetKey]);

                        // set log-data modify flag -> if teams -> each log-entry will be extend by team identifier
                        if (teams)
                            prev[widgetKey].config.teams = true;

                        // @TODO ???
                        delete prev[widgetKey].widget;

                        // if monitor needs a subject -> add value(s)!
                        if (prev[widgetKey].config.subject)
                            prev[widgetKey].config.subject = Object.assign(prev[widgetKey].config.subject, { values: [key]});

                        // @TODO ???
                        if (prev[widgetKey].config.subject && !prev[widgetKey].config.subject.key && teams)
                            prev[widgetKey].config.subject.key = "team";
                        else if (prev[widgetKey].config.subject && !prev[widgetKey].config.subject.key)
                            prev[widgetKey].config.subject.key = "user.user";

                        if (prev[widgetKey].team && prev[widgetKey].team.members && prev[widgetKey].config.subject) {
                            prev[widgetKey].config.subject.values = Object.keys(self.course.teams[key].members);
                            prev[widgetKey].config.subject.key = "user.user";
                        }

                        if (!teams && prev[widgetKey].config.teams && prev[widgetKey].config.subject.key === "team")
                            prev[widgetKey].config.subject.values = [self.course.learners[key]];

                        prev[widgetKey] = $.format(prev[widgetKey], {
                            //monitorSubjectTitleValid: key.length > 14 ? key.substr(0, 12) + " ... - " : key + " - ",
                            monitorSubjectTitle: self.course.humanReadable.learners[key] ? self.course.humanReadable.learners[key] + " - " : key + " - "
                        });

                        return prev;
                    }, {});

                    if (teams)
                        panel.title = panel.title + self.course.teams[key].name;
                    else
                        panel.title = panel.title + self.course.humanReadable.learners[key] ? self.course.humanReadable.learners[key] : key;

                    let panelKey = await self.panel().create(null, panel );
                    await self.panel().switch(panelKey);
                };

            async function renderDashboard () {
                function setGridstackEnv() {
                    // adjust gridstack for course-monitoring
                    window.GridStackUI.Utils.createStylesheet = function(id) {
                        let style = document.createElement('style');
                        style.setAttribute('type', 'text/css');
                        style.setAttribute('data-gs-style-id', id);
                        if (style.styleSheet) {
                            style.styleSheet.cssText = '';
                        } else {
                            style.appendChild(document.createTextNode(''));
                        }

                        self.element.querySelector("#dashboard-panels").appendChild(style)

                        return style.sheet;
                    };

                    window.GridStackUI.Utils.removeStylesheet = function(id) {
                        self.element.querySelector("#dashboard-panels").querySelector('STYLE[data-gs-style-id=' + id + ']').remove();
                    };

                    window.addEventListener("resize", function () {
                        waitForFinalEvent(function() {
                            self.panel().resize();
                        }, 300, fullDateString.getTime());
                    });
                }

                async function initPanels() {
                    if (!self.panels || !$.isObject(self.panels.obj) || !Array.isArray(self.panels.ordered))
                        return;

                    let localPanels = await self.local.get("panels");
                    if (localPanels !== null)
                        self.panels = localPanels.panels;
                    else {
                        if (self.profile.teacher) {
                            self.panels.ordered = self.panels.role.teacher.ordered;
                            self.panels.obj = self.panels.role.teacher.obj;
                        }
                        else {
                            self.panels.ordered = self.panels.role.learner.ordered;
                            self.panels.obj = self.panels.role.learner.obj;
                        }
                    }

                    self.panels.ordered.forEach(key => self.panel().create(key, self.panels.obj[key]));
                }

                self.element.querySelector("#add-panel").addEventListener("click", function (event) {
                    self.panel().create(null, { title: "New Panel", widgets: {} } );
                });

                self.element.querySelector("#new-widget").addEventListener("click", self.widget().blank);

                setGridstackEnv();

                // ccm.course_monitoring -> evaluation @TODO remove after finished evaluation
                if (self.evaluation)
                    self.evaluationRun(self);

                await initPanels();
                self.element.querySelector(".panel-nav").childNodes.item(0).classList.add("active");

                let active = self.element.querySelector(".panel-nav").querySelector(".active")
                    .querySelector("a").id.split("link-")[1];

                self.widgets = {};

                await self.panel().render(active, self.panels.obj[active]);

                self.element.querySelector("#cm-info").addEventListener("click", function () {
                    //let panelKey = self.element.querySelector("#ilTab.control.panel-nav.panel-tab-nav").querySelector(".active").querySelector("a").id.replace("link-", "");
                    // if (self.panels.obj[panelKey].teams)
                    self.element.parentNode.querySelector("#cm-modal").classList.toggle("show");
                });



            }

            async function revertDashboard () {
                let callback = await self.local.del("panels");
                self.panels.ordered = [];
                self.panels.obj = {};
                location.reload();
            }

            async function roleInit () {
                // @TODO erstelle einen Datensatz mit einer Liste der entsprechenden hashed Teacher. Wenn list.includes(self.profile.user) self.profile.teacher = true;
                let role, key = self.settings.key + "_admin";
                if (self.settings && $.isDatastore(self.settings.store))
                    role = await self.settings.store.get(key);

                if (self.settings && $.isDatastore(self.settings.store))
                    Object.assign(self.settings, (await self.settings.store.get(self.settings.key)).settings);

                if (self.course.role.tutor[self.profile.user] || self.course.role.developer[self.profile.user])
                    self.profile.teacher = true;

                if (self.debuglearner)
                    self.profile.teacher = false;
            }

            async function saveBoard () {
                let panels = { ordered: self.panels.ordered, obj: {}, notRemovable: self.panels.notRemovable };
                Object.keys(self.panels.obj).forEach(key => {
                    panels.obj[key] = {
                        title: self.panels.obj[key].title,
                        teams: self.panels.obj[key].teams,
                        widgets: Object.assign({}, self.panels.obj[key].widgets)
                    };
                });
                await self.local.set( { key: "panels", panels: panels } );
            }

            /**initiate all configured data sources
             * @returns {Promise<void>} */
            async function sources() {
                async function init (key, config, curr, sum) {
                    if (config.store)
                        delete config.store;
                    if (config.parent)
                        delete config.parent;
                    let url = new URL(config.url);
                    let protocolPair = {
                        "http:": { "websocket": "ws:", "hypertext": "http:" },
                        "https:": { "websocket": "wss:", "hypertext": "https:" },
                        "wss:": { "websocket": "wss:", "hypertext": "https:" },
                        "ws:": { "websocket": "ws:", "hypertext": "http:" }
                    };
                    let str = '{"url": "' + url.hostname + url.hostname +'", "name": "' + config.name + '"}';
                    // to unique identifying create a hash value for each source
                    let hash = self.utils.hash.md5(str);
                    // no cache object available... create it
                    if (!self.data)
                        self.data = {};
                    self.data[hash] = [];
                    self.sources[key].hash = hash;
                    self.sources[key].listener = [];
                    // a source can also be a static dataset... then following procedure isn't needed and can return
                    if (!config.name) {
                        self.element.querySelector("#cm-loading").innerHTML += "<br>...fetch source " + curr + " (" + sum + " sources)";
                        self.data[hash] = await self.ccm.get(config.url, config.key);
                        return;
                    }
                    // initiate ccm-store level-2 store a local copy of source-data
                    self.sources[key].local = await ccm.store( { name: "cm-" + hash, parent: self } );
                    if (self.sources[key].local && $.isDatastore(self.sources[key].local))
                        self.data[hash] = await self.sources[key].local.get({});
                    if (self.data[hash] === null)
                        self.data[hash] = [];
                    // source-data already locally stored... then prepare modifying parameters for query newer data
                    let requestNewerThan;
                    if (self.data[hash].length > 0)
                        requestNewerThan = d3.extent(self.data[hash], dataset => new Date(dataset.created_at))[1];
                    // modify query for getting only newer data
                    if (requestNewerThan)
                        Object.assign(config.query,{created_at: {$gt: requestNewerThan.toISOString()}});
                    /** at first ccm-store will be initiated with http(s) protocol. Cause if a query requests big data
                     * the onchange mechanism of a WebSockets ccm-store can make data inconsistent */
                    let store = {name: config.name, url: protocolPair[url.protocol].hypertext + "//" + url.hostname + url.pathname, parent: self };
                    if (!self.sources[key].store || $.isDatastore(self.sources[key].store))
                        self.sources[key].store = await ccm.store(store);
                    // put info on screen
                    self.element.querySelector("#cm-loading").innerHTML += "<br>...fetch source " + curr + " (" + sum + " sources)";
                    // request newer data
                    let newData = await self.sources[key].store.get(config.query);
                    // bizarrely, server sometimes responds null datasets -> filter those
                    newData = newData.filter(dataset => dataset !== null);
                    // merge locally old and new data
                    self.data[hash] = self.data[hash].concat(newData);
                    // put info on screen
                    self.element.querySelector("#cm-loading").innerHTML += "<br>...analyze source " + curr + " (" + sum + " sources)";
                    /** @info update local copy of source data
                      * getting log data from a course can increase over 100MB or more
                      * you want not load every time this amount. So I'll store a local copy of this source,
                      * and update the local copy each time you're loading course-monitoring
                      * ... respectively source use WebSockets so it update during runtime */
                    for (let i = 0; i < newData.length; i++) {
                        if (self.sources[key].main && newData[i].user && newData[i].user.user && !self.course.learners[newData[i].user.user] )
                            self.course.learners[newData[i].user.user] = true;
                        // clean fix @TODO reduce log data by whitelist -> has to evaluate which resource/context has to be white listed
                        if (!jsonLogic.apply(self.ignore.filter["reduceLogWhitelist"], newData[i]))
                            reduceLogEntry(newData[i]);
                        await self.sources[key].local.set(newData[i]);
                    }

                    // maybe server doesn't support WebSockets
                    try {
                        store = { name: config.name, url: protocolPair[url.protocol].websocket + "//" + url.hostname + url.pathname, parent: self };
                        self.sources[key].store = await ccm.store(store);
                    } catch (e) {
                        // then there must not be registered an onchange listener
                        console.error("Server doesn't support WebSockets");
                        return;
                    }

                    // if initiating WebSocket store was successful
                    if (self.sources[key].store && $.isDatastore(self.sources[key].store)) {
                        // register an onchange listener for socket-store
                        self.sources[key].store.onchange = async dataset => {
                            /** ccm WebSocket server doesn't support notifying only queried datasets
                             *  onchange notification has to been filtered by predefined rules
                             *  filter-chains are build with jsonLogic */
                            dataset = jsonLogic.apply(self.sources[key].filter, dataset) ? dataset : null;
                            if (dataset !== undefined && dataset !== null) {
                                // listened dataset is valid
                                if (self.sources[key].main && dataset.user && dataset.user.user && !self.course.learners[dataset.user.user] )
                                    // a new learner visited course -> add him/her to learners object
                                    self.course.learners[dataset.user.user] = true;
                                // update cache
                                self.data[hash].push(dataset);
                                // reduce log entry from unneeded data
                                if (!jsonLogic.apply(self.ignore.filter["reduceLogWhitelist"], dataset))
                                    reduceLogEntry(dataset);
                                // update local story copy
                                await self.sources[key].local.set(dataset);
                                if (self.sources[key].listener)
                                    // if any monitor/widget is registered to source -> notify/send this valid dataset
                                    self.sources[key].listener.forEach(listener => listener.update(dataset, hash) );
                            }
                        }
                    }
                }
                let __keys = Object.keys(self.sources);
                if (self.sources && $.isObject(self.sources))
                    for (let i = 0; i < __keys.length; i++)
                        await init(__keys[i], self.sources[__keys[i]], (i+1), __keys.length);
            }

            async function initCourseTeamSettings () {
                /** Course Team Settings needs stored teams in ccm.teambuild format. If course teams are distributed in
                 * different teambuild-build lists Course-Monitoring merge these to one big.
                 *
                 * Cause of privacy teambuild data should not have clear names or pseudonyms which simply let assign names
                 * to real persons. Use hashed pseudoynms/names. This process called anonymization satisfacts law in germany
                 * -> DSGVO conform!
                 * */
                for (let i = 0; i < self.course.teamdata.length; i++)
                    self.course.teamdata[i] = await self.settings.store.get(self.course.teamdata[i]);

                Object.assign(self.course, { teams: {}, learners: {} });
                if (self.course.teamdata && Array.isArray(self.course.teamdata))
                    Object.assign(self.course, self.course.teamdata.reduce((prev, curr) => {
                        if (curr.teams && Array.isArray(curr.teams))
                            curr.teams.forEach(team => {
                                if (!prev.teams[team.key])
                                    prev.teams[team.key] = team;
                                Object.keys(team.members).forEach(memberKey => prev.learners[memberKey] = team.key);
                            });
                        return prev;
                    }, { teams: {}, learners: {} } ) );
                else if (self.course.teamdata && self.course.teamdata.teams && Array.isArray(self.course.teamdata.teams))
                    Object.assign(self.course, self.course.teamdata.teams.reduce((prev, curr)=> {
                        if (!prev.teams[curr.key]) {
                            prev.teams[curr.key] = curr;
                            self.course.teams[curr.key] = curr;
                        }
                        Object.keys(curr.members).forEach(memberKey => {
                            self.course.learners[memberKey] = curr.key;
                            prev.learners[memberKey] = curr.key;
                        });
                        return prev;
                        }, { teams: {}, learners: {} } ));
                /* mock teams-generator
                else {
                    let learners = [];
                    self.teambuild_data = { teams: [] };
                    self.data[self.sources.log.hash].forEach(dataset => {
                        if (dataset.user && learners.indexOf(dataset.user.user) === -1) {
                            learners.push(dataset.user.user);
                            if ( (learners.length - 1) % 4 === 0)
                                self.teambuild_data.teams.push({
                                    key: "mock_team_" + $.generateKey(),
                                    members: { [dataset.user.user]: true },
                                    name: "MockTeam " + ((self.teambuild_data.teams.length - 1 / 4) + 1).toFixed(0)
                                });
                            else
                                self.teambuild_data.teams[parseInt(learners.indexOf(dataset.user.user)/4)].members[dataset.user.user] = true;
                        }
                    });
                    self.teambuild_data = self.teambuild_data.teams.reduce((prev, curr)=> {
                        if (!prev.teams[curr.key])
                             prev.teams[curr.key] = curr;
                        Object.keys(curr.members).forEach(memberKey => prev.learners[memberKey] = curr.key);
                        return prev;
                        },
                        { teams: {}, learners: {} } );
                }
                */
            }

            function reduceLogEntry(dataset) {
                // @TODO doc: to process learners activity you don't need context-data from every activity
                // don't mix up context-data with context-identifier(dataset.parent.descr / dataset.parent.id)
                delete dataset.data;
            }

            function preFilterData(data, rules) {
                return new Promise((resolve, reject) => {
                    data = data.filter(dataset => jsonLogic.apply(rules, dataset));
                    //let workerResult = { widget: widget, data: data.filter(dataset => jsonLogic.apply(rules, dataset)) };
                    return data;
                });
            }

            /** work around for cross domain web(shared) workers
             * https://benohead.com/cross-domain-cross-browser-web-workers/ */
            function createWorkerFallback (workerUrl) {
                let worker = null;
                try {
                    let blob;
                    try {
                        blob = new Blob(["importScripts('" + workerUrl + "');"], { "type": 'application/javascript' });
                    } catch (e) {
                        let blobBuilder = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
                        blobBuilder.append("importScripts('" + workerUrl + "');");
                        blob = blobBuilder.getBlob('application/javascript');
                    }
                    let url = window.URL || window.webkitURL;
                    let blobUrl = url.createObjectURL(blob);
                    worker = new Worker(blobUrl);
                } catch (e1) {
                    //if it still fails, there is nothing much we can do
                }
                return worker;
            }

            /** work around for cross domain web(shared) workers
             * https://benohead.com/cross-domain-cross-browser-web-workers/ */
            function createSharedWorkerFallback (workerUrl) {
                let worker = null;
                try {
                    let blob;
                    try {
                        blob = new Blob(["importScripts('" + workerUrl + "');"], { "type": 'application/javascript' });
                    } catch (e) {
                        let blobBuilder = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
                        blobBuilder.append("importScripts('" + workerUrl + "');");
                        blob = blobBuilder.getBlob('application/javascript');
                    }
                    let url = window.URL || window.webkitURL;
                    let blobUrl = url.createObjectURL(blob);
                    worker = new SharedWorker(blobUrl);
                } catch (e1) {
                    //if it still fails, there is nothing much we can do
                }
                return worker;
            }

            function testSameOrigin (url) {
                let loc = window.location;
                let a = document.createElement('a');
                a.href = url;
                return a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol;
            }

        }

    };

    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();
