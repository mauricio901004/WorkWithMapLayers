var mapMain;

// @formatter:off
require([
    "esri/map",
    "dojo/ready",
    "dojo/parser",
    "dojo/on",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/geometry/Extent"
],
    function (Map,ready, parser, on, BorderContainer, ContentPane, ArcGISDynamicMapServiceLayer, Extent) {
        // @formatter:on

        // Wait until DOM is ready *and* all outstanding require() calls have been resolved
        ready(function () {

            // Parse DOM nodes decorated with the data-dojo-type attribute
            parser.parse();

            /*
             * Step: Specify the initial extent
             * Note: Exact coordinates may vary slightly from snippet/solution
             * Reference: https://developers.arcgis.com/javascript/jssamples/fl_any_projection.html
             */
            var extentInitial = new Extent({
                "xmin" : -14374651.058794111,
                "ymin" : 3597572.9883619756,
                "xmax" : -12408079.19507362,
                "ymax" : 5441845.606826218,
                "spatialReference" : {
                  "wkid" : 102100
                }
            });

            // Create the map
            mapMain = new Map("cpCenter", {
                basemap: "satellite",
                extent: extentInitial
             });

            /*
             * Step: Add the USA map service to the map
             */
             var lyrUSA= new ArcGISDynamicMapServiceLayer("https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer");
            /*
             * Step: Add the earthquakes layer to the map
             */

            /*
            * Step: Revise code to use the addLayers() method
            */
              mapMain.addLayers(lyrUSA);
            /*
             * Step: Add the BaseMapToggle widget to the map
             */


            /*
             * Step: Add a legend once all layers have been added to the map
             */
            //mapMain.on(); // stub


        });
    });
