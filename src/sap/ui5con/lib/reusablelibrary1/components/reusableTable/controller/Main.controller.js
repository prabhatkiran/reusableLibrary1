sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui5con/lib/reusablelibrary1/util/Formatter"
], function(Controller, LibFormatter) {
    "use strict";

    /**
     * The main controller provides access to the UI library's formatter from the main view.
     *
     * @class
     * @public
     * @extends sap.ui.core.mvc.Controller
     * @alias sap.lbn.uilib.components.object-information-section.controller.Main
     */
    return Controller.extend("sap.ui5con.lib.reusablelibrary1.components.reusableTable.controller.Main",
        /** @lends sap.ui5con.lib.reusablelibrary.components.reusableTable.controller.Main.prototype */
        {
            constructor: function() {
                Controller.apply(this, arguments);
                /**
                 * The formatter that is defined in the UI library.
                 *
                 * @public
                 */
                this.libFormatter = LibFormatter;
            }
        });
});