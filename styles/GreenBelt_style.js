var size = 0;

var styleCache_GreenBelt={}
var style_GreenBelt = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(128,152,72,0.2)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(51,160,44,0.2)"})
    }),new ol.style.Style({
        
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GreenBelt[key]){
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
        styleCache_GreenBelt[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GreenBelt[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};