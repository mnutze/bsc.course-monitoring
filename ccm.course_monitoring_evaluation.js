/**
 * @overview ccm evaluation component for <ccm-course_monitoring>
 * @author Michael Nutzenberger <michael.nutzenberger@smail.inf.h-brs.de> 2019
 * @version latest (1.0.0)
 */
( function () {
    const component = {

        name: "course_monitoring_evaluation",

        ccm: "https://ccmjs.github.io/ccm/ccm.js",

        config: {

            css: [ "ccm.load", [
                { url: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" },
                { url: "https://mnutze.github.io/bsc.course-monitoring/libs/css/delos.css", context: "head" },
                { url: "https://mnutze.github.io/bsc.course-monitoring/libs/css/delos.css" },

            ] ]
            ,

            html: {},

            debug: true,

            user: [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-9.0.1.js", {
                realm: "hbrsinfpseudo",
                logged_in: true
            } ],
        },

        Instance: function () {

            const self = this;
            let $, navContainer, time, rerender = true;

            this.init = async () => {
            };

            this.ready = async () => {
                // set shortcut to help functions
                $ = self.ccm.helper;

            };

            this.start = async () => {
                self.element.style = $.format("height: %height%px; width: %width%px; overflow-y: %scroll%;", {
                    height: self.size.height - 50,
                    width: self.size.width - 30,
                    scroll: self.scroll && self.scroll.y ? "scroll" : "unset",
                });
                // put main HTML structure into frontend
                $.setContent( self.element, $.html( self.html ) );
                if (self.parent.evaluation[self.element.querySelector("form").id]) {
                    Object.keys(self.parent.evaluation[self.element.querySelector("form").id]).forEach(key => {
                        self.element.querySelector("form").querySelector("#"+key).value = self.parent.evaluation[self.element.querySelector("form").id][key]
                    });
                }

                Array.from(self.element.querySelector("form").elements).filter(el => el.id !== "")
                    .forEach(element => {
                        element.addEventListener("change", function (e) {
                            if (self.parent.evaluation && !$.isObject(self.parent.evaluation))
                                self.parent.evaluation = { [self.element.querySelector("form").id]: { [this.name]: this.value } };
                            else if (!self.parent.evaluation[self.element.querySelector("form").id])
                                self.parent.evaluation[self.element.querySelector("form").id] = { [this.name]: this.value };
                            else if (self.parent.evaluation[self.element.querySelector("form").id])
                                self.parent.evaluation[self.element.querySelector("form").id][this.name] = this.value;
                        });
                });

                self.element.querySelector("form").addEventListener("submit", function (e) {
                    if (self.parent.evaluation && !$.isObject(self.parent.evaluation))
                        self.parent.evaluation = {[this.id]: Array.from(self.element.querySelector("form").elements).reduce((prev, element) => {
                            if (element.id !== "")
                                return Object.assign(prev, {[element.name]: element.value});
                            return prev;
                            }, {})};
                    else if (!self.parent.evaluation[this.id])
                        self.parent.evaluation[this.id] = Array.from(self.element.querySelector("form").elements).reduce((prev, element) => {
                            if (element.id !== "")
                                return Object.assign(prev, {[element.name]: element.value});
                            return prev;
                            }, {});
                    e.preventDefault();
                    self.parent.evalNext();
                })
            };
        }

    };

    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();