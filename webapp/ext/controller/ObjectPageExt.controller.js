sap.ui.controller("by.smartpro.fioritest.fiori.ext.controller.ObjectPageExt", {
    onInit : function(oEvent) { 
        this.extensionAPI.attachPageDataLoaded(function (oEvent) {
			sap.m.MessageToast.show(oEvent.context.getProperty("CategoryID"));
		});
    }
});
