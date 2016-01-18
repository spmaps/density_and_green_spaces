var size = 0;
var ranges_PopulationdensityPeopleperSqKm = [[126.000000, 7743.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(255,245,240,1.0)"})
    })]],
[7743.000000, 15105.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(252,163,134,1.0)"})
    })]],
[15105.000000, 42013.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(234,54,42,1.0)"})
    })]],
[42013.000000, 92722.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(103,0,13,1.0)"})
    })]]];
var styleCache_PopulationdensityPeopleperSqKm={}
var style_PopulationdensityPeopleperSqKm = function(feature, resolution){
    var value = feature.get("land-area-population-density-lsoa11_People_per_Sq_Km");
    var style = ranges_PopulationdensityPeopleperSqKm[0][2];
    for (i = 0; i < ranges_PopulationdensityPeopleperSqKm.length; i++){
        var range = ranges_PopulationdensityPeopleperSqKm[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_PopulationdensityPeopleperSqKm[key]){
        var text = new ol.style.Text({
              font: '16.9px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_PopulationdensityPeopleperSqKm[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_PopulationdensityPeopleperSqKm[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};