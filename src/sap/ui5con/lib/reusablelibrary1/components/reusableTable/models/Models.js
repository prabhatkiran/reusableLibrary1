sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui/model/json/JSONModel",
    "sap/ui5con/lib/reusablelibrary1/util/StringUtil"
], function(UI5Object, JSONModel, StringUtil) {

    "use strict";
    /**
     * Provides access to the models used in the component.
     *
     * @class
     * @public
     * @extends sap.ui.base.Object
     * @alias sap.lbn.uilib.components.object-information-section.model.Models
     */
    var Models = UI5Object.extend("sap.ui5con.lib.reusablelibrary1.components.reusableTable.model.Models",
        /** @lends sap.lbn.uilib.components.object-information-section.model.Models.prototype */
        {});
    /**
     * Creates a model that is used to store the binding paths for the main view and maps the binding paths.
     *
     * @param {Object} oComponentData Object that contains the binding paths given by the component's caller.
     * @return {sap.ui.model.json.JSONModel} The model that stores the binding paths for the main view
     * @public
     */
    Models.prototype.createBindingModelMainView = function(oComponentData) {
        var oData = {
            sEntityPath: "",
            sPathOrderID: "",
            sPathOrderDate: "",
           sPathOrderDetails: ""
        };
        jQuery.each(oData, function(sIndex) {
            if(oComponentData.hasOwnProperty(sIndex)) {
                oData[sIndex] = oComponentData[sIndex];
            }
        });
        return new JSONModel(oData);
    };
    /**
     * Creates a model that is used so store the settings for the main view.
     * The visibility of the groups and elements is derived from their respective binding paths.
     * If a binding path for an element is not provided, the respective element would not be displayed in the view.
     * If no binding path is provided at all for all elements af a group, the respective group would not be displayed in the view.
     *
     * @param {Object} oComponentData Object that contains the settings given by the component's caller
     * @return {sap.ui.model.json.JSONModel} The model that stores the settings for the main view
     * @public
     */
    Models.prototype.createViewModelMainView = function(oComponentData) {
        return new JSONModel({
           
            bIsVisibleElementOrderID: this._controlIsVisible([oComponentData.sPathOrderID]),
            bIsVisibleElementOrderDetails: this._controlIsVisible([oComponentData.sPathOrderDetails]),
            bIsVisibleElementOrderDate: this._controlIsVisible([oComponentData.sPathOrderDate])
            });
    };
    /**
     * Checks if UI control should be visible.
     * If at least one binding path is not null and not empty, the control should be visible and vice versa.
     *
     * @param {string[]} aPath String array that contains the binding paths to check
     * @return {boolean} Boolean that indicates if control should be visible (true) or invisible (false)
     * @private
     */
    Models.prototype._controlIsVisible = function(aPath) {
        var bIsVisible = false;
        jQuery.each(aPath, function(iIndex, sValue) {
            bIsVisible = !StringUtil.isNullOrEmpty(sValue);
            return !bIsVisible; // break in case we've found an entry
        });
        return bIsVisible;
    };
    return Models;
});