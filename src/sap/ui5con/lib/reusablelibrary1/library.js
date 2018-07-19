
sap.ui.define(['jquery.sap.global',
		'sap/ui/core/library'
	], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name sap.ui5con.lib.reusablelibrary1
		 * @author SAP SE
		 * @version ${version}
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "sap.ui5con.lib.reusablelibrary1",
			version: "${version}",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				
			],
			elements: []
		});

		return sap.ui5con.lib.reusablelibrary1;

	}, /* bExport= */ false);