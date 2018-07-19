sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui5con/lib/reusablelibrary1/util/ComponentHelper",
    "sap/ui5con/lib/reusablelibrary1/components/reusableTable/models/Models"
], function(UIComponent,ComponentHelper,Models) {
    "use strict";

    
    var Component = UIComponent.extend("sap.ui5con.lib.reusablelibrary1.components.reusableTable.Component",
        /** @lends sap.ui5con.lib.reusablelibrary.components.reusableTable.Componentprototype */
        {
            metadata: {
                manifest: "json",
                library: "sap.ui5con.lib.reusablelibrary1.components"
            }
        });
    /**
     * Function that is called by the framework to create the component's content.
     *
     * @return {sap.ui.core.mvc.View} The main view
     * @public
     */
    Component.prototype.createContent = function() {
        var oModels = new Models();
        var oComponentData = this.getComponentData() || {};
        var oBindingModel = oModels.createBindingModelMainView(oComponentData);
        var oMainView = sap.ui.xmlview({
            viewName: "sap.ui5con.lib.reusablelibrary1.components.reusableTable.view.Main",
            async: true,
            preprocessors: {
                xml: {
                    preprocessor: ComponentHelper.xmlPreprocessorMainView,
                    models: {
                        bindingModel: oBindingModel
                    }
                }
            }
        });
        var oMainViewModel = oModels.createViewModelMainView(oComponentData);
        this.setModel(oMainViewModel, "mainViewModel");
        return oMainView;
    };
    return Component;
});