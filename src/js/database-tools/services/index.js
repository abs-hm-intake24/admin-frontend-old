"use strict";

module.exports = function (app) {
    require("./database-tools.service")(app);
    require("./food-composition-tables.service")(app);
    require("./derive-locale.service")(app);
    require("./merge-locales.service")(app);
    require("./update-uksa.service")(app);
    require("./recalculate-nutrients.service")(app);
    require("./export-nutrient-mapping.service")(app);
    require("./pairwise-associations.service")(app);
};
