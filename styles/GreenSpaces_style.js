var size = 0;

var styleCache_GreenSpaces={}
var style_GreenSpaces = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(128,152,72,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(186,221,105,1.0)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GreenSpaces[key]){
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
        styleCache_GreenSpaces[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GreenSpaces[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};