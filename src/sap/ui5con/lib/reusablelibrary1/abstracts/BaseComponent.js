/* global moment:true */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
    
], function(UIComponent, Device) {
    "use strict";

    /**
     * The base component acts as the foundation for all application specific components.
     * All application specific components shall extend the base controller.
     *
     * @class
     * @public
     * @extends sap.ui.core.UIComponent
     * @alias sap.lbn.uilib.abstracts.BaseComponent
     */
    var Component = UIComponent.extend("sap.ui5con.lib.reusablelibrary1.abstracts.BaseComponent", /** @lends sap.lbn.uilib.abstracts.BaseComponent.prototype */ {
        constructor: function() {
            UIComponent.apply(this, arguments);
        }
    });
    /**
     * The init method is called by the framework.
     *
     * @public
     */
    Component.prototype.init = function() {
        UIComponent.prototype.init.apply(this, arguments);
        
        jQuery.sap.log.info("App has been started with component data " + JSON.stringify(this.getComponentData()));
        // this._setCrossApplicationNavigationHelper(new CrossApplicationNavigationHelper());
        // this._setErrorHandler(new ErrorHandler(this));
        //this._setCustomHeaders();
    };
    /**
     * The destroy method is called by the framework.
     *
     * @public
     */
    Component.prototype.destroy = function() {
        this.getErrorHandler().destroy();
        UIComponent.prototype.destroy.apply(this, arguments);
    };
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     *
     * @return {string} CSS class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' or an empty string if no css class should be set
     * public
     */
    Component.prototype.getContentDensityClass = function() {
        if(this._sContentDensityClass === undefined) {
            // Check whether FLP has already set the content density class; do nothing in this case
            if(jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
                this._sContentDensityClass = "";
            } else if(!Device.support.touch) { // Apply "compact" mode if touch is not supported
                this._sContentDensityClass = "sapUiSizeCompact";
            } else {
                // Apply "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                this._sContentDensityClass = "sapUiSizeCozy";
            }
        }
        return this._sContentDensityClass;
    };
    /**
     * Returns the component's CrossApplicationNavigationHelper instance.
     *
     * @return {sap.lbn.uilib.util.CrossApplicationNavigationHelper} CrossApplicationNavigationHelper instance
     * @public
     */
    Component.prototype.getCrossApplicationNavigationHelper = function() {
        return this._oCrossApplicationNavigationHelper;
    };
    /**
     * Sets the component's CrossApplicationNavigationHelper instance.
     *
     * @param {sap.lbn.uilib.util.CrossApplicationNavigationHelper} oCrossApplicationNavigationHelper CrossApplicationNavigationHelper instance
     * @private
     */
    Component.prototype._setCrossApplicationNavigationHelper = function(oCrossApplicationNavigationHelper) {
        this._oCrossApplicationNavigationHelper = oCrossApplicationNavigationHelper;
    };
    /**
     * Returns the component's error handler instance.
     *
     * @return {sap.lbn.uilib.controller.ErrorHandler} Error handler instance
     * @public
     */
    Component.prototype.getErrorHandler = function() {
        return this._oErrorHandler;
    };
    /**
     * Sets the component's error handler instance.
     *
     * @param {sap.lbn.uilib.abstracts.helpers.ErrorHandler} oErrorHandler Error handler instance
     * @private
     */
    Component.prototype._setErrorHandler = function(oErrorHandler) {
        this._oErrorHandler = oErrorHandler;
    };

    /**
     * Sets the custom headers to the default OData model.
     * Use moment-timezone to determine the user's timezone.
     *
     * @private
     */
    Component.prototype._setCustomHeaders = function() {
        var oModel = this.getModel();
        if(oModel) {
            var oHeader = oModel.getHeaders();
            jQuery.extend(oHeader, {
                "sap-lbn-usertimezone": this._getTimezone()
            });
            oModel.setHeaders(oHeader);
        }
    };
    /**
     * Gets the user's timezone using moment-timezone.
     *
     * @return {String} Timezone
     * @private
     */
    Component.prototype._getTimezone = function() {
        return moment.tz.guess(true).toString();
    };
    return Component;
});