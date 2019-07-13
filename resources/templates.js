ccm.files["templates.js"] = {
    "main": [
        { "class": "device-xs visible-xs" },
        { "class": "device-sm visible-sm" },
        { "class": "device-md visible-md" },
        { "class": "device-lg visible-lg" },
        { "id": "feedback" },
        { "tag": "body", "class": "container-fluid", "inner": [
            { "class": "row", "id": "top-nav", "inner": [
                { "tag": "nav", "id": "ilTopNav", "class": "navbar navbar-default cm-navbar navbar-expand-lg navbar-light bg-light", "inner": [
                    { "tag": "a", "class": "navbar-brand cm-navbar-brand", "inner": [
                        { "tag": "span", "class": "badge cm-logo", "inner": '<span class="glyphicon glyphicon-blackboard"></span>'},
                        { "class": "ilTopTitle cm-title", "inner": "%cmTitle%" }
                    ]},
                    { "tag": "input", "type": "checkbox", "id": "hamburg" },
                    { "tag": "label", "for": "hamburg", "class": "toggle navbar-toggle", "inner": [
                        { "tag": "span", "class": "glyphicon glyphicon-menu-hamburger", style: "font-size: 18px; top: 0" },
                    ]},
                    { "class": "topmenu navbar-default", "inner": [
                        { "tag": "ul", "class": "nav navbar-nav ml-auto", "inner": [
                            { "tag": "li", "class": "nav-item", "id": "cm-profile", "inner": [
                                { "tag": "a", "class": "nav-link", "inner": [
                                    { "tag": "span", "class": "glyphicon glyphicon-user" },
                                    { "tag": "span", "class": "cm-profile-user", "inner": "Developer" },
                                    { "tag": "span", "class": "cm-profile-separator", "inner": "|" },
                                    { "tag": "span", "class": "cm-profile-team", "inner": "Mock-Team 8" },
                                    { "tag": "ul", "class": "dropdown-menu cm-profile-team-members", "inner": [
                                        { "tag": "li", "inner": { "tag": "a", "inner": "Learner" } },
                                        { "tag": "li", "inner": { "tag": "a", "inner": "Learner" } },
                                        { "tag": "li", "inner": { "tag": "a", "inner": "Learner" } },
                                        { "tag": "li", "inner": { "tag": "a", "inner": "Learner" } },
                                    ]}
                                ]}
                            ] },
                            { "tag": "li", "class": "nav-item", "id": "admin-nav", "inner": [
                                { "tag": "a", "id": "revert-dashboard", "alt": "%cmBoardRevert%", "class": "nav-link cm-tooltip", "inner": [
                                    { "tag": "span", "class": "glyphicon glyphicon-repeat" },
                                    { "tag": "span", "class": "cm-tooltiptext revert", "inner": "%cmBoardRevert%" },
                                    { "tag": "span", "class": "topNav", "inner": "Revert Dashboard" }
                                ]}
                            ] },
                            { "tag": "li", "class": "nav-item cm-nav-item-info", "id": "cm-info-nav","inner": [
                                { "tag": "a", "id": "cm-info", "alt": "Course-Monitoring Info", "class": "nav-link", "inner": [
                                    { "tag": "span", "class": "glyphicon glyphicon-info-sign" },
                                    { "tag": "span", "class": "topNav", "inner": "Info" }
                                ]}
                            ] }
                        ]}
                    ]},
                ]},
            ]},
            { "class": "row", "id": "main-content", "inner": [
                { "tag": "ul", "id": "ilTab", "class": "nav nav-tabs ilCollapsable hidden-print control panel-nav panel-tab-nav", "inner": [
                    { "tag": "li", "inner": {
                        "tag": "a", "id": "add-panel", "inner": {
                            "tag": "span", "class": "glyphicon glyphicon-plus" } } },
                    { "tag": "li", "class": "hide", "inner": [] },
                    { "tag": "li", "class": "cm-new-widget", "inner": {
                        "tag": "a", "id": "new-widget", "inner": {
                            "tag": "span", "class": "glyphicon glyphicon-modal-window" } } },
                ]},
                { "id": "dashboard-panels" },
            ]},
            { "class": "row", "id": "config-content" },
            { "id": "modal-wrapper" },
        ]}
    ],
    "loading": {
        "id": "cm-loading",
        "inner": [
            {
                "tag": "h3",
                "inner": "Start analyzing course"
            },
            {
                "class": "ilFileUploadEntryProgress",
                "inner": [
                    {
                        "tag": "span",
                        "class": "ilFileUploadEntryProgressBack",
                        "inner": [
                            "&nbsp;",
                            {
                                "tag": "span",
                                "class": "ilFileUploadEntryProgressBar"
                            },
                            {
                                "tag": "span",
                                "class": "ilFileUploadEntryProgressPercent",
                                "inner": ""
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "widget": {
        "config": {
            "wrapper": [
                { "tag": "ul", "class": "nav nav-tabs cm-widget-tabs ilCollapsable hidden-print", "inner": [
                        { "tag": "li", "class": "active", "id": "general", "inner": { "tag": "a", "inner": "General" } },
                        { "tag": "li", "id": "selection", "inner": { "tag": "a", "inner": "Selection" } },
                        { "tag": "li", "id": "grouping", "inner": { "tag": "a", "inner": "Grouping" } },
                        { "tag": "li", "id": "options", "inner": { "tag": "a", "inner": "Options" } },
                        { "tag": "li", "class": "cm-float-right ilFloatRight", "inner": { "tag": "a", "inner": { "tag": "span", "class": "glyphicon glyphicon-remove" } } },
                        { "tag": "li", "class": "cm-float-right ilFloatRight bg-primary", "inner": { "tag": "a", "class": "bg-primary", "id": "start-component", "inner": { "tag": "span", "class": "glyphicon glyphicon-play" } } },
                    ] },
                { "tag": "form", "id": "%widget%", "class": "ilTabsContentOuter form-inline", "inner": [
                        { "id": "generalConfig", "inner": [
                                { style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "inner": "Enter Monitor-Title", "for": "title"
                                        },
                                        {
                                            "tag": "input", "class": "small form-control", style: "width: 70%", "type": "text", "value": "New Monitor", "id": "title", "name": "title"
                                        }
                                    ]
                                },
                                { style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "inner": "Select Monitor-Type", "for": "type"
                                        },
                                        {
                                            "tag": "select", "class": "small form-control", style: "width: 70%", "type": "text", "id": "type", "name": "type"
                                        }
                                    ]
                                },
                            ] },
                        { "id": "selectionConfig", "class": "hide", "inner": [
                                { style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "inner": "Selection on", "for": "selection-type"
                                        },
                                        {
                                            "tag": "select", "disabled": true, "class": "small form-control", style: "width: 70%", "type": "text", "name": "selection-type", "id": "selection-type", "inner": [
                                                { "tag": "option", "value": "course", "inner": "Course" },
                                                { "tag": "option", "value": "learners", "inner": "Learner(s)" },
                                                { "tag": "option", "value": "teams", "inner": "Team(s)" }
                                            ]
                                        }
                                    ]
                                },
                                { style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "inner": "Select your subject(s)", "for": "selected-subjects"
                                        },
                                        {
                                            "tag": "select", "disabled": true, "multiple": true, "class": "small form-control", style: "width: 70%", "type": "text", "name": "selected-subjects", "id": "selected-subjects"
                                        }
                                    ]
                                }
                            ] },
                        { "id": "groupingConfig", "class": "hide", "inner": [
                                {
                                    style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "for": "root-group-by", "inner": "Primary groupBy"
                                        },
                                        {
                                            "tag": "select", "disabled": true, "class": "small form-control", style: "width: 70%", "type": "text", "name": "root-group-by", "id": "root-group-by",
                                        }
                                    ]
                                },
                                {
                                    style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "for": "grouping-deeper", "inner": "Deeper grouping?"
                                        },
                                        {
                                            "tag": "input", "disabled": true, "class": "small form-control", "type": "checkbox", "id": "grouping-deeper", "name": "grouping-deeper",
                                        },
                                    ]
                                },
                                {
                                    style: "margin-top: 10px;", "class": "hide",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "for": "child-group-by", "inner": "%childGroupByLabel%"
                                        },
                                        {
                                            "tag": "select", "disabled": true, "class": "small form-control", style: "width: 70%", "type": "text", "id": "child-group-by", "name": "child-group-by"
                                        }
                                    ]
                                },
                            ] },
                        { "id": "optionsConfig", "class": "hide", "inner": [
                                {
                                    style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "inner": "Visualization", "for": "graph"
                                        },
                                        {
                                            "tag": "select", "disabled": true, "class": "small form-control", style: "width: 70%", "type": "text", "id": "graph", "name": "graph"
                                        }
                                    ]
                                },

                                {
                                    style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: " width: 30%", "inner": "Ordering", "for": "sort"
                                        },
                                        {
                                            "tag": "select", "disabled": true, "class": "small form-control", style: "width: 70%", "type": "text", "name": "sort", "id": "sort", "inner": [
                                                { "tag": "option", "inner": "Highest" },
                                                { "tag": "option", "inner": "Lowest" }
                                            ]
                                        }
                                    ]
                                },

                                {
                                    style: "margin-top: 10px;",
                                    "inner": [
                                        {
                                            "tag": "label", "class": "small control-label", style: "width: 30%", "inner": "Size", "for": "size"
                                        },
                                        {
                                            "tag": "input", "disabled": true, "class": "small form-control", style: "width: 70%", "type": "number", "value": 5, "min": 3, "max": 20, "name": "size", "id": "size"
                                        }
                                    ]
                                }
                            ] }
                    ] }
            ]
        },
        "content": {},
        "without_header": {
            "id": "il_center_col",
            "class": "grid-stack-item-content table-bordered",
            style: "%widget-item-style%",
            "inner": {
                "class": "il_Block",
                "inner": [
                    {
                        "class": "ilFloatRight",
                        "inner": [
                            { "tag": "span", "class": "glyphicon glyphicon-remove widget-remove cm-widget-remove" },
                            { "tag": "span", "class": "glyphicon glyphicon-move cm-widget-move ilBlockDraggableHeader" }
                        ]
                    },
                    { "class": "ilBlockContent content cm-widget-content-headless", "id": "%widget-content-id%" },
                    { "class": "ilBlockContent config cm-widget-config-headless hide", "inner": "%widget-config%" }
                ]
            }
        },
        "wrapper": {
            "id": "il_center_col",
            "class": "grid-stack-item-content table-bordered",
            style: "%widget-item-style%",
            "inner": {
                "class": "il_Block",
                "inner": [
                    {
                        "class": "ilBlockHeader ilBlockDraggableHeader",
                        "inner": [
                            {
                                "class": "ilFloatRight cm-widget-control",
                                style: "",
                                "inner": [
                                    {
                                        "tag": "span",
                                        style: "cursor: pointer; float: right;",
                                        "class": "glyphicon glyphicon-remove widget-remove",
                                    },
                                    {
                                        "tag": "span",
                                        style: "cursor: pointer; padding-right: 7px; float: right;",
                                        "class": "glyphicon glyphicon-cog",
                                        "onclick": "%widget-toggle-config%"
                                    }
                                ]
                            },
                            {
                                "tag": "h3",
                                "class": "ilBlockHeader",
                                "inner": "%widget-title%", //settings.title
                            }
                        ]
                    },
                    {
                        "class": "ilBlockContent content", "id": "%widget-content-id%", style: "border: none; margin: 0 5px;" // margin equals .ilBlockHeader
                    },
                    {
                        "class": "ilBlockContent config hide",
                        style: "border: none;",
                        "inner": "%widget-config%"
                    }
                ]
            }
        },
    },
    "panel": {
        "wrapper": {
            "class": "grid-stack hide", "id": "%id%"
        },
        "link": {
            "tag": "li",
            "inner": {
                "tag": "a",
                "inner": [
                    {
                        "tag": "span",
                        "onclick": "%switch%",
                        "id": "link-%key%",
                        "inner": "%title%"
                    },
                    {
                        "tag": "span",
                        "class": "glyphicon glyphicon-remove cm-panel-remove hide",
                        "onclick": "%removePanel%"
                    }
                ],
                "id": "link-%key%"
            }
        },
    },
    "eval-info": {
            "id": "cm-modal",
            "class": "modal",
            "inner": {
                "class": "modal-dialog",
                "inner": {
                    "class": "modal-content",
                    "inner": [
                        {
                            "class": "modal-header",
                            "inner": {
                                "tag": "h5",
                                "class": "modal-title",
                                "inner": "Willkommen in Monitoring Courses"
                            }
                        },
                        {
                            "class": "modal-body",
                            "inner": [
                                {
                                    "tag": "p",
                                    "inner": "Wie in der Informations-Email erwähnt ist dies eine prototypische Konfiguration von <b>Monitoring Courses</b> für die Lehrveranstaltung Software Engineering I im Sommersemester 2019 an der Hochschule Bonn-Rhein-Sieg."
                                },
                                {
                                    "tag": "p",
                                    "inner": "Fühlen Sie sich frei explorativ durch die Anwendung zu navigieren, eigene Panels oder Monitor-Widgets zu erstellen, Monitore durch das Setzen von Filtern zu verändern und Vergleiche zwischen Ihnen und Kommilitonen anzustellen."
                                },
                                {
                                    "tag": "p",
                                    "inner": "Hier noch weitere Informationen:"
                                },
                                {
                                    "tag": "ul",
                                    "inner": [
                                        {
                                            "tag": "li",
                                            "inner": "Die Protokollierung der Daten wurde erst zum 22. Mai begonnen, daher können Rückschlüsse auf das gesamte Lernverhalten seit Beginn der Veranstaltung in diesem Kontext nicht gezogen werden."
                                        },
                                        {
                                            "tag": "li",
                                            "inner": "Diese Anwendung funktioniert klientseitig. Die Aggregation der Daten findet auf Ihrer Plattform statt und ist daher bezüglich Performance/Geschwindigkeit abhängig vom aufrufenden Gerät und der vorliegenden Internetverbindung."
                                        },
                                        {
                                            "tag": "li",
                                            "inner": "Beim ersten Aufruf der Anwendung läuft ein umfangreicher Datenladevorgang. Sollte dieser länger dauern, keine Sorge die Anwendung arbeitet noch. Während der Implementierung dieser Anwendung sind immer wieder Speed-Lacks im Logging-Server aufgefallen. Sollten Sie Ihren Cache nicht leeren, findet der längere Ladevorgang einmalig statt."
                                        },
                                        {
                                            "tag": "li",
                                            "inner": "Das Semester-Projekt wurde in dieser Lehrveranstaltung nicht auf Basis von ccm-Komponenten umgesetzt (gitlab etc.). Um dennoch einen Einblick in die Team-Möglichkeiten von <b>Monitoring Courses</b> zu geben wurden vereinzelt Mock-Daten generiert. Dazu zählen:"
                                        },
                                        {
                                            "tag": "ul",
                                            "inner": [
                                                {
                                                    "tag": "li",
                                                    "inner": "Kommunikationsprotokolle auf Basis der ccm-comment Komponente (kein kollaborative(s) Arbeiten/Lernen ohne Kommunikation)"
                                                },
                                                {
                                                    "tag": "li",
                                                    "inner": "Organisationsprotokolle auf Basis der ccm-kanban_board Komponente (kollaboratives/kooperatives Lernen benötigt Organisation in der Gruppe → diese kann durch Kanban unterstützt werden)"
                                                },
                                                {
                                                    "tag": "li",
                                                    "inner": "Teams auf Basis der ccm-teambuild Komponente. Da keine pseudonymisierten Teams in dieser Lehrveranstaltung zur Verfügung stehen und der Schutz ihrer personenbezogenen Daten gewährleistet sein muss, wurden Mock-Teams erzeugt. Diese nutzen das Datenschema ccm-teambuild’s und wurden willkürlich ohne Bezug zu real existierenden Gruppen dieser Lehrveranstaltung generiert."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tag": "p",
                                    "inner": "Diese Information kann jederzeit über das <span style='color: #6DAD53;' class='glyphicon glyphicon-info-sign'></span> erneut aufgerufen werden."
                                },
                                {
                                    "tag": "p",
                                    "inner": "<b>Vorab Vielen Dank für Ihre Zeit und Ihr Feedback.</b>"
                                }
                            ]
                        },
                        {
                            "class": "modal-footer",
                            "inner": {
                                "id": "cm-info-ok",
                                "tag": "button",
                                "class": "btn btn-primary",
                                "inner": "OK"
                            }
                        }
                    ]
                }
            }
        }
};