ccm.files[ "evaluation.script.js" ] = function (instance) {

    const self = instance;
    let $ = self.ccm.helper;

    // deactivate dashboard functions
    self.element.querySelector("#admin-nav").classList.add("hide");
    self.element.querySelector("#add-panel").parentNode.classList.add("hide");
    self.element.querySelector("li.cm-new-widget").classList.add("hide");

    self.evalNext = async function () {
        let panel = self.element.querySelector(".control.panel-nav.panel-tab-nav")
            .querySelector("li.active").querySelector("a")
            .id.replace("link-", "");
        let index = self.panels.ordered.indexOf(panel);
        let next = "panel__" + (index+1);
        if (self.panels.ordered[index+1]) {
            self.panel().switch(next);
        }
        else if (self.panels.obj[next] && self.panels.obj[next].dashboard) {
            self.panel().create(next, self.panels.obj[next]);
            self.panel().create("panel__" + (index+2), self.panels.obj["panel__" + (index+2)]);
            self.panel().switch(next);
        }
        else if (self.panels.obj[next]) {
            self.panel().create(next, self.panels.obj[next]);
            self.panel().switch(next);
        }
        else {
            await self.settings.evaluation.set(Object.assign({"key": [self.profile.user, $.generateKey()]},self.evaluation, {"_": self.settings.permissions}));
            let callback = await self.local.del("panels");
            self.panels.ordered = [];
            self.panels.obj = {};
            alert("Ihr Feedback wurde gespeichert. Vielen Dank für Ihre Zeit!");
            location.reload();
        }
    }

};