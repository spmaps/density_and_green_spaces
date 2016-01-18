var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: []});
var format_PopulationdensityPeopleperSqKm = new ol.format.GeoJSON();
var features_PopulationdensityPeopleperSqKm = format_PopulationdensityPeopleperSqKm.readFeatures(geojson_PopulationdensityPeopleperSqKm, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationdensityPeopleperSqKm = new ol.source.Vector();
jsonSource_PopulationdensityPeopleperSqKm.addFeatures(features_PopulationdensityPeopleperSqKm);var lyr_PopulationdensityPeopleperSqKm = new ol.layer.Vector({
                source:jsonSource_PopulationdensityPeopleperSqKm, 
                style: style_PopulationdensityPeopleperSqKm,
                title: "Population density - People per Sq Km"
            });var format_GreenBelt = new ol.format.GeoJSON();
var features_GreenBelt = format_GreenBelt.readFeatures(geojson_GreenBelt, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenBelt = new ol.source.Vector();
jsonSource_GreenBelt.addFeatures(features_GreenBelt);var lyr_GreenBelt = new ol.layer.Vector({
                source:jsonSource_GreenBelt, 
                style: style_GreenBelt,
                title: "GreenBelt"
            });var format_GreenSpaces = new ol.format.GeoJSON();
var features_GreenSpaces = format_GreenSpaces.readFeatures(geojson_GreenSpaces, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenSpaces = new ol.source.Vector();
jsonSource_GreenSpaces.addFeatures(features_GreenSpaces);var lyr_GreenSpaces = new ol.layer.Vector({
                source:jsonSource_GreenSpaces, 
                style: style_GreenSpaces,
                title: "Green Spaces "
            });

lyr_PopulationdensityPeopleperSqKm.setVisible(true);lyr_GreenBelt.setVisible(true);lyr_GreenSpaces.setVisible(true);
var layersList = [baseLayer,lyr_PopulationdensityPeopleperSqKm,lyr_GreenBelt,lyr_GreenSpaces];
