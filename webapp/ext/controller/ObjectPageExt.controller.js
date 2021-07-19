var id;
sap.ui.controller("by.smartpro.fioritest.fiori.ext.controller.ObjectPageExt", {

	onInit : function(oEvent) { 
        this.extensionAPI.attachPageDataLoaded(function (oEvent) {
			id = oEvent.context.getProperty("CategoryID");
			sap.m.MessageToast.show(id);
		
		});
    },
	onHello : function(oEvent) { 
        sap.m.MessageToast.show("Hello world");
    },
    onActivate: function(){
        this.getOwnerComponent().getModel().callFunction("/toActiveStatus",{
			method: "GET",
			success: function() {
				
				if(this.getOwnerComponent().getModel().getProperty("/Categories(" + id + ")/StatusID") != 1){
					this.getOwnerComponent().getModel().setProperty("/Categories(" + id + ")/StatusID", 1);
					this.getOwnerComponent().getModel().submitChanges();
					this.getOwnerComponent().getModel().refresh();
				}else{
					sap.m.MessageToast.show("already is active");
				}

			}.bind(this),
			error: function() {
				sap.m.MessageToast.show("Error status!!!");
			}
		});                   
    }
});
