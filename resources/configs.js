ccm.files[ "configs.js" ] = {
    "local": {
        "key": "local",
        //"css.default": [ "ccm.load", [ { "url": "https://mnutze.github.io/bsc.monitoring-courses/resources/default.css" } ] ],
        //"html": [ "ccm.load", { "url": "https://mnutze.github.io/bsc.monitoring-courses/resources/templates.js" } ],
        //"components.monitor": [ "ccm.component", "https://mnutze.github.io/bsc.monitor/ccm.monitor.js", {
        //    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.0.1.js", {
        //        "css": [],
        //        "realm": "hbrsinfpseudo",
        //        "logged_in": true
        //    } ],
        //} ],
        "ignore": {
            /** reusable jsonLogic-filter rules */
            "filter": {
                "activities": {
                    "and": [
                        { "has": [ "user" ] },
                        { "or": [
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "youtube" ] }, { "===" : [ { "var" : "event" }, "onStateChange" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "quiz" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "live_poll" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "feedback" ] }, { "===" : [ { "var" : "event" }, "create" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "comment" ] }, { "===" : [ { "var" : "event" }, "create" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "submit" ] }, { "===" : [ { "var" : "event" }, "submit" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "cloze" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            //{ "and": [ { "===" : [ { "var" : "parent.name" }, "regex" ] }, { "===" : [ { "var" : "event" }, "regex" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "regex" ] }, { "===" : [ { "var" : "event" }, "plus" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "regex" ] }, { "===" : [ { "var" : "event" }, "eval" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "quick_decide" ] }, { "===" : [ { "var" : "event" }, "click" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "quick_decide" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "fast_poll" ] }, { "===" : [ { "var" : "event" }, "click" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "fast_poll" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "pdf_viewer" ] }, { "===" : [ { "var" : "event" }, "goto" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "pdf_viewer" ] }, { "===" : [ { "var" : "event" }, "next" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "pdf_viewer" ] }, { "===" : [ { "var" : "event" }, "prev" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "kanban_board" ] }, { "===" : [ { "var" : "event" }, "add" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "kanban_board" ] }, { "===" : [ { "var" : "event" }, "drop" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "kanban_board" ] }, { "===" : [ { "var" : "event" }, "del" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "kanban_card" ] }, { "===" : [ { "var" : "event" }, "change" ] } ] },
                        ] }
                    ]
                },
                "activities_and_login": {
                    "and": [
                        { "has": [ "user" ] },
                        { "or": [
                            // logins
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "user" ] }, { "===" : [ { "var" : "event" }, "login" ] } ] },
                            // default
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "youtube" ] }, { "===" : [ { "var" : "event" }, "onStateChange" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "quiz" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "live_poll" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "feedback" ] }, { "===" : [ { "var" : "event" }, "create" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "comment" ] }, { "===" : [ { "var" : "event" }, "create" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "submit" ] }, { "===" : [ { "var" : "event" }, "submit" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "cloze" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            //{ "and": [ { "===" : [ { "var" : "parent.name" }, "regex" ] }, { "===" : [ { "var" : "event" }, "regex" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "regex" ] }, { "===" : [ { "var" : "event" }, "plus" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "regex" ] }, { "===" : [ { "var" : "event" }, "eval" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "quick_decide" ] }, { "===" : [ { "var" : "event" }, "click" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "quick_decide" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "fast_poll" ] }, { "===" : [ { "var" : "event" }, "click" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "fast_poll" ] }, { "===" : [ { "var" : "event" }, "finish" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "pdf_viewer" ] }, { "===" : [ { "var" : "event" }, "goto" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "pdf_viewer" ] }, { "===" : [ { "var" : "event" }, "next" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "pdf_viewer" ] }, { "===" : [ { "var" : "event" }, "prev" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "kanban_board" ] }, { "===" : [ { "var" : "event" }, "add" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "kanban_board" ] }, { "===" : [ { "var" : "event" }, "drop" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "kanban_board" ] }, { "===" : [ { "var" : "event" }, "del" ] } ] },
                            { "and": [ { "===" : [ { "var" : "parent.name" }, "kanban_card" ] }, { "===" : [ { "var" : "event" }, "change" ] } ] },
                        ] }
                    ]
                },
                "reduceLogWhitelist": {
                    "or": [
                        { "===" : [ { "var" : "parent.name" }, "kanban_board" ] },
                        { "===" : [ { "var" : "parent.name" }, "kanban_card" ] }
                    ]
                },
                "communication_by_comment": { "and": [ { "has": [ "user" ] }, { "===" : [ { "var" : "parent.name" }, "comment" ] } ] },
                "exercise_submits": { "and": [ { "===" : [ { "var" : "event" }, "submit" ] }, { "===" : [ { "var" : "parent.name" }, "submit" ] } ] },
                "online_without_login": {
                    "and": [
                        { "has": [ "user" ] },
                        /** @info currently active cause of ccm.user in se1 is not configured
                         * to be assignable to a specific context */
                        { "!==" : [ { "var" : "event" }, "login" ] }
                    ]
                },
            },
            "groupBy": {
                "subject": {
                    "key": "user.user",
                    "label": "Learner",
                    "groupBy": {
                        "context": { "key": "parent.descr,parent.id", "label": "Context" },
                        "resource": { "key": "parent.name", "label": "Resource" },
                        "verb": { "key": "event", "label": "Action" }
                    }
                },
                "resource": {
                    "key": "parent.name", // + "parent.descr,parent.id"
                    "label": "Resource",
                    "groupBy": {
                        "context": { "key": "parent.descr,parent.id", "label": "Context" },
                        "subject": { "key": "user.user", "label": "Learner" },
                        "verb": { "key": "event", "label": "Action" }
                    }
                },
                "verb": {
                    "key": "event",
                    "label": "Activity",
                    "groupBy": {
                        "context": { "key": "parent.descr,parent.id", "label": "Context" },
                        "subject": { "key": "user.user", "label": "Learner" },
                        "resource": { "key": "parent.name", "label": "Resource" }
                    }
                }
            },
            "panels": {
                "panel_learner": {
                    "title": "",
                    "widgets": [
                        {
                            "title": "Learners Activity over Time-Range",
                            "position": { "x": 0, "y": 0, "width": 4, "height": 4 },
                            "widget": "ignore.widgets.subject_activity_over_time_range"
                        },
                        {
                            "title": "Exam Admission",
                            "position": { "x": 8, "y": 0, "width": 2, "height": 4 },
                            "widget": "ignore.widgets.learner_exam_admission"
                        },
                        {
                            "title": "Total Activities",
                            "position": { "x": 4, "y": 0, "width": 2, "height": 4 },
                            "widget": "ignore.widgets.subject_total_activities"
                        },
                        {
                            "title": "Learners Activity Classification",
                            "widget": "ignore.widgets.subject_classification",
                            "position": { "x": 0, "y": 4, "width": 4, "height": 4 }
                        },
                        {
                            "title": "Learners Unit Completion-Ratio",
                            "position": { "x": 8, "y": 4, "width": 4, "height": 4 },
                            "widget": "ignore.widgets.lesson_completion"
                        },
                        {
                            "title": "Latest 'Learner XY' Activities",
                            "position": { "x": 0, "y": 8, "width": 6, "height": 4 },
                            "widget": "ignore.widgets.latest_subject_activities"
                        },
                        // 'Learner XY' - Team Activity Distribution @TODO generalize
                        {
                            "title": "Team Activity Distribution",
                            "position": { "x": 6, "y": 8, "width": 6, "height": 4 },
                            "widget": "ignore.widgets.team_accumulated_activities"
                        },
                        // Activity Distribution @TODO generalize
                        {
                            title: "Activity Distribution",
                            component: "monitor",
                            config: {
                                // initial configuration
                                groupBy: {
                                    key: "event",
                                    groupBy: {key: "parent.descr,parent.id"},
                                },
                                limit: 20,
                                worker: "./assets/worker.leader.js",
                                render: { key: "highcharts", type: "pie", highcharts: { "tooltip.shared": false } },
                                subject: {},
                                // runtime configuration
                                range: { enabled: true, range: null },
                            },
                            position: { x: 6, y: 0, width: 2, height: 4 },
                            scroll: { y: false },
                            sources: { log: { filter: "ignore.filter.activities" } },

                        },
                        // Activity Distribution by Unit @TODO generalize
                        {
                            title: "Activity Distribution by Unit",
                            component: "monitor",
                            config: {
                                // initial configuration
                                groupBy: {
                                    key: "event",
                                    groupBy: {key: "parent.descr,parent.id"},
                                },
                                limit: 20,
                                worker: "./assets/worker.leader.js",
                                render: { key: "highcharts", type: "pie", highcharts: { "tooltip.shared": false } },
                                selection: true,
                                subject: { key: "user.user" },
                                // runtime configuration
                                range: { enabled: true, range: "lessons" },
                            },
                            position: { x: 4, y: 4, width: 4, height: 4 },
                            scroll: { y: false },
                            sources: { log: { filter: "ignore.filter.activities" } },

                        }

                    ]
                },
                "panel_team": {
                    "title": "",
                    "widgets": [
                        {
                            "title": "Teams Activity over Time-Range",
                            "position": { "x": 0, "y": 0, "width": 3, "height": 4 },
                            "widget": "ignore.widgets.subject_activity_over_time_range",
                            "config.subject.key": "team"
                        },
                        {
                            "title": "Members Activity over Time-Range",
                            "position": { "x": 3, "y": 0, "width": 3, "height": 4 },
                            "team": { "members": true },
                            "widget": "ignore.widgets.subject_activity_over_time_range"
                        },
                        {
                            "title": "Team Communication",
                            "position": { "x": 8, "y": 4, "width": 4, "height": 7 },
                            "team": { "members": true },
                            "widget": "ignore.widgets.subject_communication"
                        },
                        // Kanban-Flow @TODO generalize
                        {
                            "title": "Team Workflow",
                            "component": "monitor",
                            "config": {
                                // initial configuration
                                "process": "ignore.process.kanban",
                                "render": { "key": "highcharts", "mock": true },
                                "subject": { "key": "team", "values": [] },
                                "teams": true,
                                // runtime configuration
                            },
                            "position": { "x": 4, "y": 4, "width": 4, "height": 7 },
                            "scroll": { "y": false },
                            "sources": {
                                "kanban_log": {
                                    "filter": {
                                        "and": [
                                            { "has": [ "user" ] },
                                            { "or": [
                                                { "===" : [ { "var" : "parent.name" }, "kanban_board" ] },
                                                { "===" : [ { "var" : "parent.name" }, "kanban_card" ] }
                                            ] }
                                        ]
                                    }
                                }
                            },
                        },
                        {
                            "title": "Team Activity Distribution",
                            "position": { "x": 6, "y": 0, "width": 4, "height": 4 },
                            "widget": "ignore.widgets.team_accumulated_activities"
                        },
                        {
                            "title": "Teams Activity Classification",
                            "widget": "ignore.widgets.subject_classification",
                            "position": { "x": 0, "y": 4, "width": 4, "height": 4 },
                            "config.subject.key": "team"
                        },
                        {
                            "widget": "ignore.widgets.latest_subject_activities",
                            "position": { "x": 0, "y": 8, "width": 4, "height": 3 },
                            "team": { "members": true },
                            "title": "Latest Team-Member Activities"
                        },
                        // Team-Members @TODO generalize
                        {
                            title: "Team-Members",
                            component: "monitor",
                            config: {
                                // initial configuration
                                "process": "ignore.process.team_members",
                                render: { key: "custom" },
                                subject: { key: "team", values: [] },
                                // runtime configuration
                            },
                            position: { x: 10, y: 0, width: 2, height: 2 },
                            scroll: { y: false },
                            sources: { }
                        }
                    ]
                }
            },
            // @info process function will be loaded only once!
            "process": {
                "accumulated_activities": [ "ccm.load", { "url": "./assets/monitor.accumulated_activities.js", "type": "js" } ],
                "solutions_point_map": [ "ccm.load", { "url": "./assets/monitor.solutions_point_map.js", "type": "js" } ],
                "kanban": [ "ccm.load", { "url": "./assets/monitor.kanban.js", "type": "js" } ],
                "latest": [ "ccm.load", { "url": "./assets/monitor.latest.js", "type": "js" } ],
                "learners": [ "ccm.load", { "url": "./assets/monitor.learners.js", "type": "js" } ],
                "teams": [ "ccm.load", { "url": "./assets/monitor.teams.js", "type": "js" } ],
                "team_members": [ "ccm.load", { "url": "./assets/widget.team_members.js", "type": "js" } ],
            },
            "sorting": [ "Highest", "Lowest" ],
            /** approved:
             *  - latest subject activities
             *  - subject activity classification
             *  - A. Kless: cloze analytics
             *  - A. Kless: results
             *  */
            "widgets": {
                // FINAL [approved: true|false]
                "course_statistics": {
                    "label": "Course Statistics",
                    "title": "Course Statistics",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "worker": "./assets/worker.course_statistics.js",
                        "render": { "key": "custom" },
                        "subject": {}
                    },
                    "options": {
                        "selection": true
                    },
                    "scroll": { "y": false },
                    "sources": {
                        "log": { "filter": { "and": [ { "has": [ "user" ] } ] } },
                        "solutions": { "filter": {} }
                    }
                },
                // FINAL [approved: true|false]
                "latest_subject_activities": {
                    "label": "Latest Learners/Learner/Teams Activities",
                    "title": "Latest %subjectType%Activities",
                    "component": "monitor",
                    "config": {
                        "runtimeOptions": true,
                        "process": "ignore.process.latest",
                        "range": { "enabled": true, "value": 1200, "type": "number"}, // range in minutes
                        "subject": { "key": "user.user" },
                        "render": {
                            "key": "table",
                            "columns": {
                                "order": [ "datetime", "learner", "component", "event", "context" ],
                                "datetime": { "key": "created_at", "label": "Datetime", },
                                "learner": { "key": "user.user", "label": "Learner", "filter": true },
                                "component": { "key": "parent.name", "label": "Resource-Type", "filter": true },
                                "event": { "key": "event", "label": "Action", "filter": true },
                                "context": { "key": "parent.descr,parent.id", "label": "Context", "filter": true } // @TODO -> combine showing Resource-Type+Context to "Resource"
                            }
                        }
                    },
                    "options": { "selection": true },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.activities" } }
                },
                // FINAL [approved: true|false]
                "learner_exam_admission":{
                    "label": "Exam Admission",
                    "title": "Exam Admission",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "worker": "./assets/worker.learner_progress.js",
                        "render": { "key": "highcharts" },
                        "selection": true,
                        "subject": { "key": "user.user" },
                    },
                    "options": {"selection": { "only": "learners", "single": true } },
                    "scroll": { "y": false },
                    "sources": { "solutions": { "filter": {} } }
                },
                // FINAL [approved: true|false]
                "learners_list": {
                    "label": "Learners - List",
                    "title": "Learners - List",
                    "component": "monitor",
                    "config": {
                        "process": "ignore.process.learners" ,
                        "render": {
                            "notifyParent": true,
                            "key": "table" ,
                            "columns": {
                                "order": [ "subject", "lastOnline", "onlineCount", "onlineProfile", "lastAction", "actionCount", "actionProfile" ],
                                "subject": { "key": "key", "label": "Learner" },
                                "lastOnline": { "key": "last.online", "label": "Last Online" },
                                "onlineCount": { "key": "sum.online", "label": "&#8721; Online-Events" },
                                "onlineProfile": { "key": "profile.online", "label": "Online Profile" },
                                "lastAction": { "key": "last.action", "label": "Last Activity" },
                                "actionCount": { "key": "sum.action", "label": "&#8721; Activities" },
                                "actionProfile": { "key": "profile.action", "label": "Activity Profile" },
                            }
                        },
                        "subject": { "key": "user.user", "values": [] }
                    },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": { "and": [ { "has": [ "user" ] } ] } } }
                },
                // FINAL [approved: true|false]
                "lesson_completion": {
                    "label": "Learners Unit Completion-Ratio",
                    "title": "Learners Unit Completion-Ratio",
                    "component": "monitor",
                    "config": {
                        "worker": "./assets/worker.lesson_completion.js",
                        "render": { "key": "highcharts" },
                        "incompleteLog": true
                    },
                    "scroll": { "y": false },
                    "sources": {
                        "log": { "filter": "ignore.filter.online_without_login" },
                        "solutions": { "filter": {} }
                    }
                },
                // FINAL [approved: true|false]
                "solutions_point_map": {
                    "label": "Exercise-Solutions Point-Map",
                    "title": "Exercise-Solutions Point-Map",
                    "component": "monitor",
                    "config": {
                        "process": "ignore.process.solutions_point_map" ,
                        "render": { "key": "highcharts" },
                    },
                    "scroll": { "y": false },
                    "sources": { "solutions": { "filter": {} } }
                },
                // FINAL [approved: true|false]
                "subject_activity_by_day_and_hour": {
                    "label": "Learner(s) Activity-Times",
                    "title": "Learner(s) Activity-Times by Day and Hour",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "worker": "./assets/worker.time_series.js",
                        "render": { "key": "highcharts", "type": "hours" },
                        "subject": { "key": "user.user" },
                        // runtime configuration
                        "range": { "enabled": true, "range": null },
                    },
                    "options": { "selection": true },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.activities" } }
                },
                // FINAL [approved: true|false]
                "subject_activities_distribution_by_time_range": {
                    "label": "Learner(s)/Team(s) Activities Distribution by Time-Range",
                    "title": "Activities by Time-Range",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "groupBy": {
                            "key": "event",
                            "groupBy": { "key": "parent.descr,parent.id"},
                        },
                        "limit": 20,
                        "worker": "./assets/worker.leader.js",
                        "render": { "key": "highcharts", "type": "pie", "highcharts": { "tooltip.shared": false } },
                        "subject": {},
                        // runtime configuration
                        "range": { "enabled": true, "range": null }
                    },
                    "options": { "selection": true },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.activities" } }
                },
                // FINAL [approved: true|false]
                "subject_activity_over_time_range": {
                    "label": "Learner(s)/Team(s) Activity over Time-Range",
                    "title": "%subject%%subjectType% Activity over Time-Range",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "worker": "./assets/worker.time_series.js",
                        "render": { "key": "highcharts", "type": "range" },
                        "subject": {},
                        // runtime configuration
                        "interval": { "enabled": true, "current": "2h", "exclude": [] },
                        "range": { "enabled": true, "range": null },
                    },
                    "options": { "selection": true },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.activities" } }
                },
                // FINAL [approved: true|false]
                "subject_classification": {
                    "label": "Learners/Teams Activity Classification",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "worker": "./assets/worker.subject_classification.js",
                        "no-rlt": true,
                        "render": { "key": "highcharts", "highcharts": {"plotOptions.series.states.inactive.opacity": 1} },
                        "subject": {},
                        // runtime configuration
                        "range": { "enabled": true, "range": "weeks" },
                    },
                    "options": { "selection": true },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.activities" } }
                },
                // FINAL [approved: true|false]
                "subject_communication": {
                    "label": "Learner/Team Communication-Network-Analysis",
                    "title": "%subject%Communication-Network-Analysis",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "worker": "./assets/worker.communication_analysis.js",
                        "render": { "key": "forceDirected" },
                        "subject": { "key": "user.user" },
                        // runtime configuration
                        "runtimeOptions": true,
                    },
                    "options": { "selection": true },
                    "scroll": { "y": false },
                    "sources": { "communication_log": { "filter": "ignore.filter.communication_by_comment" } }
                },
                // FINAL [approved: true|false]
                "subject_total_activities": {
                    "label": "Total Activities",
                    "title": "Total Activities",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "processing": { "filter": { "exercise": "ignore.filter.exercise_submits" } },
                        "render": { "key": "highcharts" },
                        "selection": true,
                        "subject": { "key": "user.user" },
                        "worker": "./assets/worker.learner_activities.js"
                    },
                    "options": { "selection": { "only": "learners", "single": true } },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.activities" } }
                },
                // FINAL [approved: true|false]
                "team_accumulated_activities": {
                    "label": "Team Activity Distribution",
                    "title": "%subject%Team Activity Distribution",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "process": "ignore.process.accumulated_activities",
                        "render": { "key": "highcharts" },
                        "selection": true,
                        "subject": { "key": "team" },
                        "teams": true,
                    },
                    "options": { "selection": { "only": "teams", "single": true } },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.activities" } },
                },
                // FINAL [approved: true|false]
                "teams_list": {
                    "label": "Teams - List",
                    "title": "Teams - List",
                    "component": "monitor",
                    "config": {
                        "range": { "enabled": true, "range": null },
                        "process": "ignore.process.teams" ,
                        "render": {
                            "key": "table" ,
                            "notifyParent": { "teams": "true" },
                            "columns": {
                                "order": [ "subject", "lastOnline", "onlineCount", "onlineProfile", "lastAction", "actionCount", "actionProfile" ],
                                "subject": { "key": "label", "label": "Team" },
                                "lastOnline": { "key": "last.online", "label": "Last Online" },
                                "onlineCount": { "key": "sum.online", "label": "&#8721; Online-Events" },
                                "onlineProfile": { "key": "profile.online", "label": "Online Profile" },
                                "lastAction": { "key": "last.action", "label": "Last Activity" },
                                "actionCount": { "key": "sum.action", "label": "&#8721; Activities" },
                                "actionProfile": { "key": "profile.action", "label": "Activity Profile" }
                            }
                        },
                        "subject": { "key": "team", "teams": true, "values": [] },
                        "teams": true
                    },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": { "and": [ { "has": [ "user" ] } ] } } }
                },
                // FINAL [approved: true|false] @TODO (unit_activity) interval selection isn't running...bug...fix before live
                "unit_activity": {
                    "label": "Learners Unit Activity",
                    "title": "Learners Unit Activity",
                    "component": "monitor",
                    "config": {
                        "worker": "./assets/worker.lesson_activity.js",
                        "render": { "key": "highcharts" },
                        "incompleteLog": true,
                        // runtime configuration
                        "interval": { "enabled": true, "current": "2h", "exclude": [] },
                        "range": { "enabled": true, "range": "lessons" }
                    },
                    "options": { "selection": { "single": true } },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.online_without_login" } }
                },
                // FINAL [approved: true]
                "cloze_analytics": {
                    "component": "cloze_analytics",
                    "label": "ccm-cloze_analytics",
                    "position": { "x": 0, "y": 4, "width": 12, "height": 6}
                },
                // FINAL [approved: true]
                "akless_ccm_result": {
                    "label": "ccm-result",
                    "component": "result",
                    "position": { "x": 0, "y": 4, "width": 12, "height": 6 },
                },
                //
                "leaderboard": {
                    "label": "Leaderboard",
                    "title": "%title%",
                    "component": "monitor",
                    "config": {
                        // initial configuration
                        "groupBy": {
                            "key": "",
                            "groupBy": {
                                "key": "" // single: "event" multiability: "parent.descr,parent.id"
                            }
                        },
                        "limit": 20,
                        "render": { "key": "highcharts", "highcharts": { "legend.enabled": false } },
                        "subject": {},
                        "worker": "./assets/worker.leader.js",
                        // runtime configuration
                        "range": { "enabled": true, "type": null, "range": null } // @TODO add to options -> range-types "lessons"{ "enabled": true, "range": "lessons" }
                    },
                    "options": {
                        "visualization": {
                            "label": "Visualization",
                            "options": {
                                "Bar-Chart": "highcharts.bar",
                                "Column-Chart": "highcharts.column",
                                "Drilldown": "highcharts.pie"
                            }
                        },
                        "groupBy": {
                            "label": "Primary groupBy",
                            "groupBy": {
                                "label": "Secondary groupBy"
                            }
                        },
                        "selection": true,
                        "size": true,
                        "sort": {
                            "label": "Sort"
                        },
                    },
                    "scroll": { "y": false },
                    "sources": { "log": { "filter": "ignore.filter.activities" } }
                }
            }
        },
        // dashboard panels
        "panels": {
            "ordered": [],
            "obj": {},
            "role": {
                "teacher": {
                    "ordered": [ "panel_1559646513933X30564639958612694" , "panel_1560787652941X3465503820434819",
                        "panel_1560787652941X06270660849890297", "panel_312380031817X197632484137649411" ],
                    "obj": {
                        "panel_1559646513933X30564639958612694": {
                            "title": "Home",
                            "widgets": {
                                "widget_1560787652940X9322221359009968": {
                                    "title": "Learners Activity over Time-Range",
                                    "position": { "x": 0, "y": 0, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.subject_activity_over_time_range",
                                    "config.interval": { "enabled": true, "current": "1d", "exclude": [] }, // @TODO remove exclude from ccm.monitor
                                    "config.subject": { "key": "user.user", "values": [] }
                                },
                                "widget_47127652940X6952445580399216": {
                                    "title": "Learners Activity Classification",
                                    "position": { "x": 0, "y": 4, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.subject_classification",
                                    "config.subject": { "key": "user.user", "values": [] }
                                },
                                "widget_lessons_completion_656X151677": {
                                    "title": "Learners Unit Completion-Ratio",
                                    "position": { "x": 4, "y": 4, "width": 3, "height": 4 },
                                    "widget": "ignore.widgets.lesson_completion"
                                },
                                "widget_lesson_activity_19656X151677": {
                                    "title": "Learners Unit Activity",
                                    "position": { "x": 7, "y": 4, "width": 5, "height": 3 },
                                    "widget": "ignore.widgets.unit_activity",
                                    "config.interval": { "enabled": true, "current": "12h", "exclude": [] }, // @TODO remove exclude from ccm.monitor
                                    "config.subject": { "key": "user.user", "values": [] }
                                },
                                "widget_1560787652940X2119221359009968": {
                                    "title": "Learners Activity Times by Day and Hour",
                                    "position": { "x": 0, "y": 8, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.subject_activity_by_day_and_hour",
                                    "config.subject": { "key": "user.user", "values": [] }
                                },
                                "widget_198614237563X913236787272112": {
                                    "title": "Activities by Time-Range",
                                    "position": { "x": 4, "y": 8, "width": 3, "height": 4 },
                                    "widget": "ignore.widgets.leaderboard",
                                    "config.groupBy": { "key": "parent.name", "groupBy": { "key": "parent.descr,parent.id"} },
                                    "config.render.type": "pie"
                                },
                                /*
                                "widget_196014237563X913236787272106": {
                                    "title": "Activities by Unit",
                                    "position": { "x": 7, "y": 4, "width": 3, "height": 4 },
                                    "widget": "ignore.widgets.leaderboard",
                                    "config.groupBy": { "key": "event", "groupBy": { "key": "parent.descr,parent.id"} },
                                    "config.render.type": "pie",
                                    "config.range.range": "lessons"
                                },
                                */
                                "widget_47121984940X6952443992161907": {
                                    "title": "Course Statistics",
                                    "position": { "x": 10, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.course_statistics"
                                },
                                "widget_latest_513933X30564639958612": {
                                    "title": "Latest Learner Activities",
                                    "position": { "x": 4, "y": 0, "width": 6, "height": 4 },
                                    "widget": "ignore.widgets.latest_subject_activities"
                                },
                                "widget_47121912340XYZ52443992161907": {
                                    "title": "Learners Communication Network",
                                    "position": { "x": 7, "y": 7, "width": 5, "height": 5 },
                                    "widget": "ignore.widgets.subject_communication"
                                },
                            }
                        },
                        "panel_1560787652941X3465503820434819": {
                            "title": "Learners",
                            "widgets": {
                                "widget_1560787652941X378500491818365": {
                                    "title": "Learners - List",
                                    "position": { "x": 0, "y": 0, "width": 12, "height": 10 },
                                    "widget": "ignore.widgets.learners_list",
                                    "config.subject.key": "user.user"
                                }
                            }
                        },
                        "panel_1560787652941X06270660849890297": {
                            "title": "Teams",
                            "widgets": {
                                "widget_1560787652941X0876182795163658": {
                                    "title": "Teams - List",
                                    "position": { "x": 0, "y": 0, "width": 12, "height": 10 },
                                    "widget": "ignore.widgets.teams_list",
                                    "config.subject": { "key": "team", "teams": true, "values": [] }
                                }
                            }
                        },
                        "panel_312380031817X197632484137649411": {
                            "title": "Points-Map",
                            "widgets": {
                                "widget_155914237563X99849412666": {
                                    "title": "Heatmap",
                                    "position": { "x": 0, "y": 0, "width": 12, "height": 10 },
                                    "widget": "ignore.widgets.solutions_point_map"
                                }
                            }
                        }
                    }
                },
                "learner": {
                    "ordered": [ "panel_1559646513933X30564639958612ABC" , "panel_1560787652941X3465503820434819" ],
                    "obj": {
                        "panel_1559646513933X30564639958612ABC": {
                            "title": "Start",
                            "widgets": {
                                "widget_1560787652940X9322221351234567": {
                                    "title": "Learners Activity over Time-Range",
                                    "position": { "x": 0, "y": 0, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.subject_activity_over_time_range",
                                    "config.interval": { "enabled": true, "current": "6h", "exclude": [] }, // @TODO remove exclude from ccm.monitor
                                    "config.selection": true,
                                    "config.subject": { "key": "user.user" }
                                },
                                "widget_1560787652940X9322221357654321": {
                                    "title": "Your Exam Admission",
                                    "position": { "x": 8, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.learner_exam_admission",
                                },
                                "widget_1560787652940X932222135ABCDEFG": {
                                    "title": "All Your Activities",
                                    "position": { "x": 4, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.subject_total_activities",
                                    "config.selection": true,
                                    "config.subject.key": "user.user"
                                },
                                "widget_ABCDE984940X6952443992161907": {
                                    "title": "Course Statistics",
                                    "position": { "x": 10, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.course_statistics"
                                },
                                "widget_18867652940X6952445580399216": {
                                    "title": "Learners Activity Classification",
                                    "position": { "x": 0, "y": 4, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.subject_classification",
                                    "config.subject": { "key": "user.user", "values": [] }
                                },
                                "widget_198614237563X913236787272112": {
                                    "title": "Your Activity Distribution",
                                    "position": { "x": 6, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.leaderboard",
                                    "config.groupBy": { "key": "event", "groupBy": { "key": "parent.descr,parent.id"} },
                                    "config.selection": true,
                                    "config.subject.key": "user.user",
                                    "config.render.type": "pie"
                                },
                                /*
                                "widget_196014237563X913236787272106": {
                                    "title": "Your Activity Distribution per Unit",
                                    "position": { "x": 4, "y": 4, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.leaderboard",
                                    "config.groupBy": { "key": "event", "groupBy": { "key": "parent.descr,parent.id"} },
                                    "config.selection": true,
                                    "config.subject.key": "user.user",
                                    "config.render.type": "pie",
                                    "config.range.range": "lessons"
                                },
                                */
                                "widget_lessons_completion_999X151677": {
                                    "title": "Learners Unit Completion-Ratio",
                                    "position": { "x": 4, "y": 4, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.lesson_completion"
                                },
                                "widget_latest_198633X30564639958612": {
                                    "title": "Latest Learner Activities",
                                    "position": { "x": 0, "y": 8, "width": 5, "height": 3 },
                                    "widget": "ignore.widgets.latest_subject_activities"
                                },
                                "widget_accumulated_team_AB1827X1986": {
                                    "title": "Team Activity Distribution",
                                    "position": { "x": 5, "y": 8, "width": 3, "height": 3 },
                                    "widget": "ignore.widgets.team_accumulated_activities"
                                },
                                "widget_47LL1912340ABC52443992161907": {
                                    "title": "Your Communication Network",
                                    "position": { "x": 8, "y": 4, "width": 4, "height": 7 },
                                    "widget": "ignore.widgets.subject_communication",
                                    "config.selection": true
                                },
                            }
                        },
                        "panel_1560787652941X3465503820434819": {
                            "title": "Learners",
                            "widgets": {
                                "widget_1560787652941X378500491818365": {
                                    "title": "Learners - List",
                                    "position": { "x": 0, "y": 0, "width": 12, "height": 10 },
                                    "widget": "ignore.widgets.learners_list",
                                    "config.subject.key": "user.user"
                                }
                            }
                        },
                    }
                }
            }
        },
        "profile": {},
        "settings": {
            "course": "1561594547882X8328147500647436",
            "store": [ "ccm.store", { "name": "mnutze2s_course_monitoring", "url": "https://ccm2.inf.h-brs.de" } ],
            "key": "course_monitoring_ss19",
            "permissions": {
                "creator": "308cecce8e2115c780e374f13ecb4547",
                "realm": "hbrsinfpseudo",
                "group": {
                    "admingroup": [ "479e5f8396cec7afccd68b097eabe5f9", "4c9d704dfcb512873c39ddeefdd559e1", "308cecce8e2115c780e374f13ecb4547" ],
                    "studigroup": [ "479e5f8396cec7afccd68b097eabe5f9", "4c9d704dfcb512873c39ddeefdd559e1", "308cecce8e2115c780e374f13ecb4547", "%user%" ]
                },
                "access": {
                    "get": "studigroup",
                    "set": "admingroup",
                    "del": "admingroup"
                }
            }
        },
        "sources": {
            "log": { // { filter: {}, name: "", query: {}, url: "" }
                "filter": { "and": [ { "has": [ "user" ] } ] },
                "name": "mnutze2s_activity_log",
                "main": true,
                "query": { "user": { "$exists": true } },
                "url": "wss://ccm2.inf.h-brs.de"
            },
            "solutions": {
                "filter": {},
                "name": "se_ss19_solutions",
                "query": {},
                "url": "wss://ccm2.inf.h-brs.de",
            },
            "communication_log": {
                "filter": { "and": [ { "has": [ "user" ] }, { "===" : [ { "var" : "parent.name" }, "comment" ] } ] },
                "name": "mnutze2s_chat_log",
                "query": { "user": { "$exists": true }, "parent.name": "comment" },
                "url": "wss://ccm2.inf.h-brs.de"
            },
            // demo
            "kanban_log": {
                "query": {},
                "url": "wss://ccm2.inf.h-brs.de",
                "name": "mnutze2s_mock_kanban_log",
                "filter": {},
            },
        },
        "utils.hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.mjs", "type": "module" } ],
        "worker.filter": "https://mnutze.github.io/bsc.monitoring-courses/resources/worker.filter.js",
        "worker.sharedFilter": "https://mnutze.github.io/bsc.monitoring-courses/resources/sharedWorker.filter.js"
    }
};