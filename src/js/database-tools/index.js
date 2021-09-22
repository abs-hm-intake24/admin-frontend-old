"use strict";

module.exports = function (app) {
    require("./services")(app);
    require("./food-composition")(app);
    require("./food-frequency.controller")(app);
    require("./derive-locale/derive-locale.controller")(app);
    require("./clone-local/clone-local.controller")(app);
    require("./merge-locales/merge-locales.controller")(app);
    require("./update-uksa/update-uksa.controller")(app);
    require("./recalculate-nutrients/recalculate-nutrients.controller")(app);
    require("./export-nutrient-mapping/export-nutrient-mapping.controller")(app);
    require("./directives/task-status/task-status.directive")(app);
};
