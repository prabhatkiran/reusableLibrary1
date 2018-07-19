sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui5con/lib/reusablelibrary1/util/StringUtil"
], function(UI5Object, StringUtil) {
    "use strict";

    /**
     * Constructor for a new ComponentHelper
     * The sap.lbn.uilib.util.ComponentHelper provides reuse methods for components.
     *
     * @class
     * @public
     * @extends sap.ui.base.Object
     * @alias sap.lbn.uilib.util.ComponentHelper
     */
    var ComponentHelper = UI5Object.extend("sap.ui5con.lib.reusablelibrary1.util.ComponentHelper", /** @lends sap.lbn.uilib.util.ComponentHelper.prototype */ {});

    /**
     * XML view pre-processor function for the main view.
     * Replaces the "dummy" binding paths defined in the view's xml source with the real binding paths given in the bindingModel.
     *
     * @param {object} xml The view in encoded XML format (string) or DOM format (object)
     * @param {info} info Info about processing
     * @param {settings} settings The settings given to the pre-processor, e.g. the models
     * @return {Promise} A Promise
     */
    ComponentHelper.xmlPreprocessorMainView = function(xml, info, settings) {
        return new Promise(function(resolve) {
            var sXml = "";
            if(typeof xml !== "string") {
                sXml = new XMLSerializer().serializeToString(xml);
            } else {
                sXml = xml;
            }
            var sModelName = "bindingModel";
            jQuery.each(settings.models.bindingModel.getData(), function(sEntryIndex, sEntry) {
                if(!StringUtil.isNullOrEmpty(sEntry)) {
                    var oExp = new RegExp(sModelName + "&gt;/" + sEntryIndex, "g");
                    sXml = sXml.replace(oExp, sEntry);
                }
            });
            resolve(new DOMParser().parseFromString(sXml, "application/xml").documentElement);
        });
    };
    return ComponentHelper;
});