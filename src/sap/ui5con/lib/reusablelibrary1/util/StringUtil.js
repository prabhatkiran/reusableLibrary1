sap.ui.define([
    "sap/ui/base/Object"
], function(UI5Object) {
    "use strict";
    /**
     * Constructor for a new StringUtil.
     * The sap.lbn.uilib.util.StringUtil provides utility functionality for the String datatype.
     *
     * @class
     * @public
     * @extends sap.ui.base.Object
     * @alias sap.lbn.uilib.util.StringUtil
     */
    var StringUtil = UI5Object.extend("sap.lbn.uilib.util.StringUtil", /** @lends sap.lbn.uilib.util.StringUtil.prototype */ {});
    /**
     * Checks if the given variable is a String and if it is null or empty (e.g. "", "   ").
     *
     * @param {String} sString The variable to be checked
     * @returns {boolean} True, if the variable is not of type String, null, or empty
     * @public
     */
    StringUtil.isNullOrEmpty = function(sString) {
        var bIsNullOrEmpty = true;
        if(typeof sString === "string" && sString !== "undefined") {
            var sValue = sString.trim();
            if(sValue.length > 0) {
                bIsNullOrEmpty = false;
            }
        }
        return bIsNullOrEmpty;
    };
   
    StringUtil.format = function(sString) {
        var bIsNullOrEmpty = true;
        if(typeof sString === "string" && sString !== "undefined") {
            var sValue = sString.trim();
            if(sValue.length > 0) {
                bIsNullOrEmpty = false;
            }
        }
        return bIsNullOrEmpty;
    };

    return StringUtil;
});