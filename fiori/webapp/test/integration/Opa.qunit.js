sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fiori/test/integration/pages/MainListReport' ,
        'fiori/test/integration/pages/MainObjectPage',
        'fiori/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fiori') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);