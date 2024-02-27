/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/m/Dialog",
    "sap/m/Text",
    "sap/m/Button",
    "sap/ui/Device",
    "br/com/eldoradobrasil/fi050/fi050popup/model/models"
],
    function (UIComponent, Dialog, Text, Button, Device, models) {
        "use strict";

        return UIComponent.extend("br.com.eldoradobrasil.fi050.fi050popup.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                //var sLangu = sap.ui.getCore().getConfiguration().getLanguage();

                //if (sLangu.localeCompare("en") == 1) {

                    if (!this.dialogFragment) {
                        this.dialogFragment = sap.ui.xmlfragment("br.com.eldoradobrasil.fi050.fi050popup.fragment.Popup", this);
                        sap.ui.getCore().byId("cancelBtn").attachPress(function () {
                            this.dialogFragment.close();
                        }.bind(this));
                    }

                    this.dialogFragment.attachAfterClose(function () {
                        this.destroy(); // view is destroyed as a video plays inside
                    });

                    var oRootPath = jQuery.sap.getModulePath("br.com.eldoradobrasil.fi050"); // your resource root
                    var oImageModel = new sap.ui.model.json.JSONModel({
                        path: oRootPath,
                    });
                    this.setModel(oImageModel, "imageModel");

                    this.dialogFragment.open();
                //}
            }
        });
    }
);