var size = 0;
var placement = 'point';

var style_Comm_yewash_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#7229b1";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("COMMUNE") !== null) {
        labelText = String(feature.get("COMMUNE"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(120,25,159,1.0)', lineDash: [16.15,3.23,6.46,3.23], lineCap: 'butt', lineJoin: 'miter', width: 3.23}),fill: new ol.style.Fill({color: 'rgba(133,182,111,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
