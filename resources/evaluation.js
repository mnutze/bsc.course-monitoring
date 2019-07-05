ccm.files[ "evaluation.js" ] = {
    "evaluation": {
        "evaluationRun": [ "ccm.load", { "url": "./resources/evaluation.script.js", "type": "js" } ],
        "key": "evaluation",
        //"css.default": [ "ccm.load", [ { "url": "https://mnutze.github.io/bsc.monitoring-courses/resources/default.css" } ] ],
        //"html": [ "ccm.load", { "url": "https://mnutze.github.io/bsc.monitoring-courses/resources/templates.js" } ],
        //"components.monitor": [ "ccm.component", "https://mnutze.github.io/bsc.monitor/ccm.monitor.js", {
        //    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.0.1.js", {
        //        "css": [],
        //        "realm": "hbrsinfpseudo",
        //        "logged_in": true
        //    } ],
        //} ],
        "components.evaluation": [ "ccm.component", "./ccm.course_monitoring_evaluation.js" ],
        "ignore": {
            "evaluation": {
                "part_1": {
                    "questions": {
                        "component": "evaluation",
                        "config": {
                            "html": {
                                tag: "form",
                                id: "part-1",
                                class: "form-horizontal preventDoubleSubmission",
                                inner: {
                                    class: "form-horizontal",
                                    inner: [
                                        {
                                            inner: "Sie sehen auf der rechten Seite 2 Fenster. Oben im Fenster ist die Online-Aktivität Ihres Teams als Kurve im Vergleich zur durchschnittlichen Aktivität der übrigen Teams (graue Fläche) dargestellt. Die roten Balken zeigen absolute Anzahl an aktiven Teams innerhalb des gewählten Zeit-Intervalls." +
                                                "<br/><br/>" +
                                                "Unten im Fenster sehen Sie Ihre eigene Aktivität, sowie die Ihrer Team-Mitglieder. In diesem Fenster stellt die graue Fläche die durschnittliche Aktivität aller anderen Kursteilnehmer da. Die Säulen kennzeichnen die absolute Anzahl an Lernenden innerhalb des gewählten Zeitintervalls."
                                        },
                                        {
                                            class: "form-group",
                                            inner: [
                                                { tag: "label", class: "col-sm-3 control-label", for: "part-1-1", inner: "Frage 1<span class=\"asterisk\">*</span>" },
                                                { class: "col-sm-9", inner: {
                                                    tag: "textarea", class: "form-control  noRTEditor", name: "part-1-1", id: "part-1-1", required: true
                                                } }
                                            ]
                                        },
                                        {
                                            class: "form-group",
                                            inner: [
                                                { tag: "label", class: "col-sm-3 control-label", for: "part-1-2", inner: "Frage 2<span class=\"asterisk\">*</span>" },
                                                { class: "col-sm-9", inner: {
                                                    tag: "textarea", class: "form-control  noRTEditor", name: "part-1-2", id: "part-1-2", required: true
                                                } }
                                            ]
                                        },
                                        {
                                            class: "ilFormFooter",
                                            inner: {
                                                class: "ilFormCmds",
                                                inner: {
                                                    tag: "input",
                                                    type: "submit",
                                                    class: "btn btn-default btn-sm",
                                                    value: "Weiter",
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "position": { "x": 0, "y": 4, "width": 12, "height": 6}
                    },
                },
                "part_2": {
                    "questions": {
                        "component": "evaluation",
                        "config": {
                            "html": {
                                tag: "form",
                                id: "part-2",
                                class: "form-horizontal preventDoubleSubmission",
                                inner: {
                                    class: "form-horizontal",
                                    inner: [
                                        {
                                            inner: "Sie sehen auf der rechten Seite 3 Fenster. Im ersten Fenster(von oben nach unten) sehen Sie die Online-Aktivität Ihres Teams (blaue Linie) im Vergleich zur durchschnittlichen Aktivität der übrigen Teams (graue Fläche). Die roten Balken zeigen die aktiven Teams innerhalb des Zeit-Intervalls in Summe."
                                        },
                                        {
                                            class: "form-group",
                                            inner: [
                                                { tag: "label", class: "col-sm-3 control-label", for: "part-2-1", inner: "Wie würden Sie ihre Team-Aktivität bezüglich der übrigen Teams sehen?<span class=\"asterisk\">*</span>" },
                                                { class: "col-sm-9", inner: {
                                                    tag: "textarea", class: "form-control  noRTEditor", name: "part-2-1", id: "part-2-1", required: true
                                                } }
                                            ]
                                        },
                                        {
                                            class: "form-group",
                                            inner: [
                                                { tag: "label", class: "col-sm-3 control-label", for: "part-2-2", inner: "Wie würden Sie ihre Team-Aktivität bezüglich der übrigen Teams sehen?<span class=\"asterisk\">*</span>" },
                                                { class: "col-sm-9", inner: {
                                                    tag: "textarea", class: "form-control  noRTEditor", name: "part-2-2", id: "part-2-2", required: true
                                                } }
                                            ]
                                        },
                                        {
                                            class: "ilFormFooter",
                                            inner: {
                                                class: "ilFormCmds",
                                                inner: {
                                                    tag: "input",
                                                    type: "submit",
                                                    class: "btn btn-default btn-sm",
                                                    value: "Weiter",
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "position": { "x": 0, "y": 4, "width": 12, "height": 6}
                    },
                },
                "part_3": {
                    "questions": {
                        "component": "evaluation",
                        "config": {
                            "html": {
                                tag: "form",
                                id: "part-3",
                                class: "form-horizontal preventDoubleSubmission",
                                inner: {
                                    class: "form-horizontal",
                                    inner: [
                                        {
                                            inner: "<p>Ihre Lernumgebung kann Sie durch kommunikativen Austausch mit anderen TeilnehmerInnen beim Lernen unterstützen. Das eigene Wissen mit anderen teilen, kann nicht nur für Sie sondern auch für Kommilitonen ein wertvoller Beitrag zum Lernprozess darstellen.</p><p>Im Communication-Network-Graph wird durch Knoten (TeilnehmerInnen) und Kanten (gemeinsame Kommunikation) ein Netzwerk-Graph aufgebaut. Hervorgehobene Knoten gleicher Farbe entsprechen den eigenen Gruppen-Mitgliedern. Kanten gleicher Farbe signalisieren denselben Kommunikationsraum.</p>"
                                        },
                                        {
                                            class: "form-group",
                                            inner: [
                                                { tag: "label", class: "col-sm-3 control-label", for: "part-3-1", inner: "Wie würden Sie ihre Team-Aktivität bezüglich der übrigen Teams sehen?<span class=\"asterisk\">*</span>" },
                                                { class: "col-sm-9", inner: {
                                                    tag: "textarea", class: "form-control  noRTEditor", name: "part-3-1", id: "part-3-1", required: true
                                                } }
                                            ]
                                        },
                                        {
                                            class: "form-group",
                                            inner: [
                                                { tag: "label", class: "col-sm-3 control-label", for: "part-3-2", inner: "Wie würden Sie ihre Team-Aktivität bezüglich der übrigen Teams sehen?<span class=\"asterisk\">*</span>" },
                                                { class: "col-sm-9", inner: {
                                                    tag: "textarea", class: "form-control  noRTEditor", name: "part-3-2", id: "part-3-2", required: true
                                                } }
                                            ]
                                        },
                                        {
                                            class: "ilFormFooter",
                                            inner: {
                                                class: "ilFormCmds",
                                                inner: {
                                                    tag: "input",
                                                    type: "submit",
                                                    class: "btn btn-default btn-sm",
                                                    value: "Weiter",
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "position": { "x": 0, "y": 4, "width": 12, "height": 6}
                    },
                },
                "part_4": {
                    "questions": {
                        "component": "evaluation",
                        "config": {
                            "html": {
                                tag: "form",
                                id: "part-4",
                                class: "form-horizontal preventDoubleSubmission",
                                inner: {
                                    class: "form-horizontal",
                                    inner: [
                                        {
                                            inner: "Sie sehen auf der rechten Seite 3 Fenster. Im ersten Fenster(von oben nach unten) sehen Sie die Online-Aktivität Ihres Teams (blaue Linie) im Vergleich zur durchschnittlichen Aktivität der übrigen Teams (graue Fläche). Die roten Balken zeigen die aktiven Teams innerhalb des Zeit-Intervalls in Summe."
                                        },
                                        {
                                            class: "form-group",
                                            inner: [
                                                { tag: "label", class: "col-sm-3 control-label", for: "part-4-1", inner: "Wie würden Sie ihre Team-Aktivität bezüglich der übrigen Teams sehen?<span class=\"asterisk\">*</span>" },
                                                { class: "col-sm-9", inner: {
                                                    tag: "textarea", class: "form-control  noRTEditor", name: "part-4-1", id: "part-4-1", required: true
                                                } }
                                            ]
                                        },
                                        {
                                            class: "form-group",
                                            inner: [
                                                { tag: "label", class: "col-sm-3 control-label", for: "part-4-2", inner: "Wie würden Sie ihre Team-Aktivität bezüglich der übrigen Teams sehen?<span class=\"asterisk\">*</span>" },
                                                { class: "col-sm-9", inner: {
                                                    tag: "textarea", class: "form-control  noRTEditor", name: "part-4-2", id: "part-4-2", required: true
                                                } }
                                            ]
                                        },
                                        {
                                            class: "ilFormFooter",
                                            inner: {
                                                class: "ilFormCmds",
                                                inner: {
                                                    tag: "input",
                                                    type: "submit",
                                                    class: "btn btn-default btn-sm",
                                                    value: "Weiter",
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "position": { "x": 0, "y": 4, "width": 12, "height": 6}
                    },
                },
                "part_5": {
                    "questions": {
                        "component": "evaluation",
                        "config": {
                            "html": "<form id='efla'>\n" +
                                "    <h2 style=\"margin-top: 25px\">Datenerfassung</h2>\n" +
                                "    <p style=\"margin-top: 25px\"><b>Aussage 1</b> Es ist mir klar welche Daten für die Learning Analytics-Monitore/die Visualisierungen gesammelt werden.</p>\n" +
                                "    <div class=\"input-group\">\n" +
                                "        <div class=\"input-group-prepend\" style=\"float: left;\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich überhaupt nicht zu</span>\n" +
                                "        </div>\n" +
                                "        <div class=\"form-check form-check-inline\" style=\"float: left;\">\n" +
                                "            <div style=\"position:relative; margin-right: 25px; margin-left: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-1\">1</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-1\" value=\"1\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-2\">2</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-2\" value=\"2\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-3\">3</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-3\" value=\"3\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-4\">4</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-4\" value=\"4\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-5\">5</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-5\" value=\"5\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-6\">6</label>\n" +
                                "             <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-6\" value=\"6\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-7\">7</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-7\" value=\"7\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-8\">8</label>\n" +
                                "              <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-8\" value=\"8\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-1-9\">9</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-9\" value=\"9\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: -3px; top: 20px;\" for=\"question-1-10\">10</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-1\" id=\"question-1-10\" value=\"10\">\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class=\"input-group-append\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich vollkommen zu</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "    <p style=\"margin-top: 75px\"><b>Aussage 2</b> Es ist mir klar warum die Daten für die Learning Analytics-Monitore/die Visualisierungen gesammelt werden.</p>\n" +
                                "    <div class=\"input-group\">\n" +
                                "        <div class=\"input-group-prepend\" style=\"float: left;\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich überhaupt nicht zu</span>\n" +
                                "        </div>\n" +
                                "        <div class=\"form-check form-check-inline\" style=\"float: left;\">\n" +
                                "            <div style=\"position:relative; margin-right: 25px; margin-left: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-1\">1</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-1\" value=\"1\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-2\">2</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-2\" value=\"2\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-3\">3</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-3\" value=\"3\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-4\">4</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-4\" value=\"4\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-5\">5</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-5\" value=\"5\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-6\">6</label>\n" +
                                "             <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-6\" value=\"6\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-7\">7</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-7\" value=\"7\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-8\">8</label>\n" +
                                "              <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-8\" value=\"8\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-2-9\">9</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-9\" value=\"9\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: -3px; top: 20px;\" for=\"question-2-10\">10</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-2\" id=\"question-2-10\" value=\"10\">\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class=\"input-group-append\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich vollkommen zu</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "\n" +
                                "    <h2 style=\"margin-top: 25px\">Wahrnehmung und Reflexion</h2>\n" +
                                "    <p style=\"margin-top: 25px\"><b>Aussage 3</b> Durch die Learning Analytics-Monitore bzw. deren  Visualisierungen wird mir mein Lernverhalten bewusst || This LA tool makes me aware\n" +
                                "of my current learning situation</p>\n" +
                                "    <div class=\"input-group\">\n" +
                                "        <div class=\"input-group-prepend\" style=\"float: left;\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich überhaupt nicht zu</span>\n" +
                                "        </div>\n" +
                                "        <div class=\"form-check form-check-inline\" style=\"float: left;\">\n" +
                                "            <div style=\"position:relative; margin-right: 25px; margin-left: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-1\">1</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-1\" value=\"1\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-2\">2</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-2\" value=\"2\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-3\">3</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-3\" value=\"3\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-4\">4</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-4\" value=\"4\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-5\">5</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-5\" value=\"5\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-6\">6</label>\n" +
                                "             <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-6\" value=\"6\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-7\">7</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-7\" value=\"7\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-8\">8</label>\n" +
                                "              <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-8\" value=\"8\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-3-9\">9</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-9\" value=\"9\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: -3px; top: 20px;\" for=\"question-3-10\">10</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-3\" id=\"question-3-10\" value=\"10\">\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class=\"input-group-append\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich vollkommen zu</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "\n" +
                                "    <p style=\"margin-top: 75px\"><b>Aussage 4</b> Die Learning Analytics-Monitore bzw. deren  Visualisierungen lassen mich mein zukünftiges Lernverhalten prognostizieren. || This LA tool makes me forecast my possible future\n" +
                                "learning situation given my (un)changed behaviour</p>\n" +
                                "    <div class=\"input-group\">\n" +
                                "        <div class=\"input-group-prepend\" style=\"float: left;\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich überhaupt nicht zu</span>\n" +
                                "        </div>\n" +
                                "        <div class=\"form-check form-check-inline\" style=\"float: left;\">\n" +
                                "            <div style=\"position:relative; margin-right: 25px; margin-left: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-1\">1</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-1\" value=\"1\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-2\">2</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-2\" value=\"2\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-3\">3</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-3\" value=\"3\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-4\">4</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-4\" value=\"4\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-5\">5</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-5\" value=\"5\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-6\">6</label>\n" +
                                "             <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-6\" value=\"6\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-7\">7</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-7\" value=\"7\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-8\">8</label>\n" +
                                "              <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-8\" value=\"8\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-4-9\">9</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-9\" value=\"9\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: -3px; top: 20px;\" for=\"question-4-10\">10</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-4\" id=\"question-4-10\" value=\"10\">\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class=\"input-group-append\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich vollkommen zu</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "\n" +
                                "    <p style=\"margin-top: 75px\"><b>Aussage 5</b> Die Learning Analytics-Monitore bzw. deren  Visualisierungen regen mich an mein bisheriges Lernverhalten zu reflektieren. || This LA tool stimulates me to reflect on my past learning behaviour</p>\n" +
                                "    <div class=\"input-group\">\n" +
                                "        <div class=\"input-group-prepend\" style=\"float: left;\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich überhaupt nicht zu</span>\n" +
                                "        </div>\n" +
                                "        <div class=\"form-check form-check-inline\" style=\"float: left;\">\n" +
                                "            <div style=\"position:relative; margin-right: 25px; margin-left: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-1\">1</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-1\" value=\"1\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-2\">2</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-2\" value=\"2\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-3\">3</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-3\" value=\"3\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-4\">4</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-4\" value=\"4\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-5\">5</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-5\" value=\"5\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-6\">6</label>\n" +
                                "             <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-6\" value=\"6\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-7\">7</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-7\" value=\"7\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-8\">8</label>\n" +
                                "              <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-8\" value=\"8\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-5-9\">9</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-9\" value=\"9\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: -3px; top: 20px;\" for=\"question-5-10\">10</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-5\" id=\"question-5-10\" value=\"10\">\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class=\"input-group-append\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich vollkommen zu</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "\n" +
                                "    <p style=\"margin-top: 75px\"><b>Aussage 6</b> Die Learning Analytics-Monitore bzw. deren  Visualisierungen regen mich an - falls notwendig - mein bisheriges Lernverhalten zu ändern. || This LA tool stimulates me to adapt my learning behaviour if necessary</p>\n" +
                                "    <div class=\"input-group\">\n" +
                                "        <div class=\"input-group-prepend\" style=\"float: left;\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich überhaupt nicht zu</span>\n" +
                                "        </div>\n" +
                                "        <div class=\"form-check form-check-inline\" style=\"float: left;\">\n" +
                                "            <div style=\"position:relative; margin-right: 25px; margin-left: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-1\">1</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-1\" value=\"1\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-2\">2</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-2\" value=\"2\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-3\">3</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-3\" value=\"3\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-4\">4</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-4\" value=\"4\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-5\">5</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-5\" value=\"5\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-6\">6</label>\n" +
                                "             <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-6\" value=\"6\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-7\">7</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-7\" value=\"7\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-8\">8</label>\n" +
                                "              <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-8\" value=\"8\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-6-9\">9</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-9\" value=\"9\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: -3px; top: 20px;\" for=\"question-6-10\">10</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-6\" id=\"question-6-10\" value=\"10\">\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class=\"input-group-append\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich vollkommen zu</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "\n" +
                                "    <h2 style=\"margin-top: 25px\">Auswirkungen</h2>\n" +
                                "    <p style=\"margin-top: 25px\"><b>Aussage 7</b> Die Learning Analytics-Monitore bzw. deren  Visualisierungen regen mich an, effizienter zu studieren. || This LA tool stimulates me to study more efficiently</p>\n" +
                                "    <div class=\"input-group\">\n" +
                                "        <div class=\"input-group-prepend\" style=\"float: left;\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich überhaupt nicht zu</span>\n" +
                                "        </div>\n" +
                                "        <div class=\"form-check form-check-inline\" style=\"float: left;\">\n" +
                                "            <div style=\"position:relative; margin-right: 25px; margin-left: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-1\">1</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-1\" value=\"1\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-2\">2</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-2\" value=\"2\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-3\">3</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-3\" value=\"3\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-4\">4</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-4\" value=\"4\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-5\">5</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-5\" value=\"5\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-6\">6</label>\n" +
                                "             <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-6\" value=\"6\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-7\">7</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-7\" value=\"7\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-8\">8</label>\n" +
                                "              <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-8\" value=\"8\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-7-9\">9</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-9\" value=\"9\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: -3px; top: 20px;\" for=\"question-7-10\">10</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-7\" id=\"question-7-10\" value=\"10\">\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class=\"input-group-append\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich vollkommen zu</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "\n" +
                                "    <p style=\"margin-top: 75px\"><b>Aussage 8</b> Die Learning Analytics-Monitore bzw. deren  Visualisierungen regen mich an, effektiver zu studieren. || This LA tool stimulates me to study more effectively</p>\n" +
                                "    <div class=\"input-group\">\n" +
                                "        <div class=\"input-group-prepend\" style=\"float: left;\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich überhaupt nicht zu</span>\n" +
                                "        </div>\n" +
                                "        <div class=\"form-check form-check-inline\" style=\"float: left;\">\n" +
                                "            <div style=\"position:relative; margin-right: 25px; margin-left: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-1\">1</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-1\" value=\"1\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-2\">2</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-2\" value=\"2\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-3\">3</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-3\" value=\"3\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-4\">4</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-4\" value=\"4\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-5\">5</label>\n" +
                                "               <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-5\" value=\"5\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-6\">6</label>\n" +
                                "             <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-6\" value=\"6\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-7\">7</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-7\" value=\"7\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-8\">8</label>\n" +
                                "              <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-8\" value=\"8\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: 1px; top: 20px;\" for=\"question-8-9\">9</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-9\" value=\"9\">\n" +
                                "            </div>\n" +
                                "            <div style=\"position:relative; margin-right: 25px;\">\n" +
                                "                <label style=\"position: absolute;left: -3px; top: 20px;\" for=\"question-8-10\">10</label>\n" +
                                "                <input type=\"radio\" required class=\"form-check-input\" name=\"question-8\" id=\"question-8-10\" value=\"10\">\n" +
                                "            </div>\n" +
                                "        </div>\n" +
                                "\n" +
                                "        <div class=\"input-group-append\">\n" +
                                "            <span class=\"input-group-text\">Stimme ich vollkommen zu</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "\n" +
                                "<div class=\"ilFormFooter\"><div class=\"ilFormCmds\"><input type=\"submit\" class=\"btn btn-default btn-sm\" value=\"Weiter\"></div></div>" +
                                "</form>"
                        }
                    }
                }
            },
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
            groupBy: {
                subject: {
                    key: "user.user",
                    label: "Learner",
                    groupBy: {
                        object: { key: "parent.name", label: "Component" },
                        verb: { key: "event", label: "Action" }
                    }
                },
                object: {
                    key: "parent.name",
                    label: "Component",
                    groupBy: {
                        subject: { key: "user.user", label: "Learner" },
                        verb: { key: "event", label: "Action" }
                    }
                },
                resource: {
                    key: "parent.name", // + "parent.descr,parent.id"
                    label: "Resource",
                    groupBy: {
                        subject: { key: "user.user", label: "Learner" },
                        verb: { key: "event", label: "Action" }
                    }
                },
                "verb": {
                    "key": "event",
                    "label": "Activity",
                    "groupBy": {
                        "object": { "key": "parent.name", "label": "Component" },
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
                        "type": {
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
            "notRemovable": true,
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
                    "ordered": [ "panel__0" ],
                    "obj": {
                        "panel__0": {
                            "title": "Teil 1",
                            "widgets": {
                                "widget_1560787652940X9322221359009968": {
                                    "title": "Aufgabe 1",
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 0, "y": 0, "width": 6, "height": 10 },
                                    "widget": "ignore.evaluation.part_1.questions"
                                },
                                "widget_47127652940X6952445580399216": {
                                    "title": "Teams Activity over Time-Range",
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 6, "y": 0, "width": 6, "height": 5 },
                                    "widget": "ignore.widgets.subject_activity_over_time_range",
                                    "config.subject.key": "team",
                                    "config.selection": true,
                                    "config.teams": true,
                                    "config.interval": { "enabled": true, "current": "1d", "exclude": [] },
                                    "config.range": { "enabled": true, "range": "last 2 month" },
                                },
                                "widget_11ABC6952445580399621": {
                                    "title": "Team-Members Activity over Time-Range",
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 6, "y": 5, "width": 6, "height": 5 },
                                    "widget": "ignore.widgets.subject_activity_over_time_range",
                                    "config.subject.key": "user.user",
                                    "config.subject.members": true,
                                    "config.selection": true,
                                    "config.interval": { "enabled": true, "current": "1d", "exclude": [] },
                                    "config.range": { "enabled": true, "range": "last 2 month" },
                                }
                            }
                        },
                        "panel__1": {
                            "title": "Teil 2",
                            "widgets": {
                                "widget_1560787652940X9322221359009968": {
                                    "title": "Aufgabe 2",
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 0, "y": 0, "width": 6, "height": 10 },
                                    "widget": "ignore.evaluation.part_2.questions"
                                },
                                "widget_47127652940X6952445580399216": {
                                    "title": "Team Activity Distribution",
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 6, "y": 0, "width": 6, "height": 5 },
                                    "widget": "ignore.widgets.team_accumulated_activities"
                                }
                            }
                        },
                        "panel__2": {
                            "title": "Teil 3",
                            "widgets": {
                                "widget_1984787652940X9322221359009968": {
                                    "title": "Aufgabe 3",
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 0, "y": 0, "width": 6, "height": 10 },
                                    "widget": "ignore.evaluation.part_3.questions"
                                },
                                "widget_19847652940X6952445580399216": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "position": { "x": 6, "y": 0, "width": 6, "height": 10 },
                                    "config.selection": true,
                                    "config.subject.members": true,
                                    "title": "Team Communication",
                                    "team": { "members": true },
                                    "widget": "ignore.widgets.subject_communication"
                                }
                            }
                        },
                        "panel__3": {
                            "title": "Teil 4",
                            "widgets": {
                                "widget_2112787652940X9322221359009968": {
                                    "title": "Aufgabe 4",
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 0, "y": 0, "width": 6, "height": 10 },
                                    "widget": "ignore.evaluation.part_4.questions"
                                },
                                "widget_21127652940X6952445580399216": {
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 6, "y": 0, "width": 6, "height": 10 },
                                    "widget": "ignore.widgets.subject_communication",
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
                                }
                            }
                        },
                        "panel__4": {
                            "title": "Dein Dashboard",
                            "dashboard": true,
                            "widgets": {
                                "widget_1560787652940X9322221351234567": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Learners Activity over Time-Range",
                                    "position": { "x": 0, "y": 0, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.subject_activity_over_time_range",
                                    "config.interval": { "enabled": true, "current": "6h", "exclude": [] }, // @TODO remove exclude from ccm.monitor
                                    "config.selection": true,
                                    "config.subject": { "key": "user.user" }
                                },
                                "widget_1560787652940X9322221357654321": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Your Exam Admission",
                                    "position": { "x": 8, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.learner_exam_admission",
                                },
                                "widget_1560787652940X932222135ABCDEFG": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "All Your Activities",
                                    "position": { "x": 4, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.subject_total_activities",
                                    "config.selection": true,
                                    "config.subject.key": "user.user"
                                },
                                "widget_ABCDE984940X6952443992161907": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Course Statistics",
                                    "position": { "x": 10, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.course_statistics"
                                },
                                "widget_18867652940X6952445580399216": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Learners Activity Classification",
                                    "position": { "x": 0, "y": 4, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.subject_classification",
                                    "config.subject": { "key": "user.user", "values": [] }
                                },
                                "widget_198614237563X913236787272112": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Your Activity Distribution",
                                    "position": { "x": 6, "y": 0, "width": 2, "height": 4 },
                                    "widget": "ignore.widgets.leaderboard",
                                    "config.groupBy": { "key": "event", "groupBy": { "key": "parent.descr,parent.id"} },
                                    "config.selection": true,
                                    "config.subject.key": "user.user",
                                    "config.render.type": "pie"
                                },
                                "widget_lessons_completion_999X151677": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Learners Unit Completion-Ratio",
                                    "position": { "x": 4, "y": 4, "width": 4, "height": 4 },
                                    "widget": "ignore.widgets.lesson_completion"
                                },
                                "widget_latest_198633X30564639958612": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Latest Learner Activities",
                                    "position": { "x": 0, "y": 8, "width": 5, "height": 3 },
                                    "widget": "ignore.widgets.latest_subject_activities"
                                },
                                "widget_accumulated_team_AB1827X1986": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Team Activity Distribution",
                                    "position": { "x": 5, "y": 8, "width": 3, "height": 3 },
                                    "widget": "ignore.widgets.team_accumulated_activities"
                                },
                                "widget_47LL1912340ABC52443992161907": {
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "notModifiable": true,
                                    "title": "Your Communication Network",
                                    "position": { "x": 8, "y": 4, "width": 4, "height": 7 },
                                    "widget": "ignore.widgets.subject_communication",
                                    "config.selection": true
                                },
                            }
                        },
                        "panel__5": {
                            "title": "Teil 5",
                            "widgets": {
                                "widget_1984787652940X9322221359009968": {
                                    "title": "Aufgabe 5",
                                    "notModifiable": true,
                                    "attributes": [["data-gs-no-resize", true ], ["data-gs-no-move", true]],
                                    "position": { "x": 0, "y": 0, "width": 12, "height": 8 },
                                    "config.scroll": { "y": true },
                                    "widget": "ignore.evaluation.part_5.questions"
                                }
                            }
                        }
                    }
                }
            }
        },
        "profile": {},
        "settings": {
            "course": "1561594547882X8328147500647436",
            "store": [ "ccm.store", { "name": "mnutze2s_course_monitoring", "url": "https://ccm2.inf.h-brs.de" } ],
            "evaluation": [ "ccm.store", { "name": "mnutze2s_course_monitoring_evaluation", "url": "https://ccm2.inf.h-brs.de" } ],
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
        "worker.filter": "https://mnutze.github.io/bsc.monitoring-courses/resources/worker.filter.js",
        "worker.sharedFilter": "https://mnutze.github.io/bsc.monitoring-courses/resources/sharedWorker.filter.js"

    }
};