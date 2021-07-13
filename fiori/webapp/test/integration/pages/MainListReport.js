sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'fiori',
            componentId: 'AirlinesList',
            entitySet: 'Airlines'
        },
        AdditionalCustomListReportDefinition
    );
});