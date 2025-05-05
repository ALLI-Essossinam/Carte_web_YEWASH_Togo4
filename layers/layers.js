var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Localite_YEWASH_1 = new ol.format.GeoJSON();
var features_Localite_YEWASH_1 = format_Localite_YEWASH_1.readFeatures(json_Localite_YEWASH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localite_YEWASH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localite_YEWASH_1.addFeatures(features_Localite_YEWASH_1);
var lyr_Localite_YEWASH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localite_YEWASH_1, 
                style: style_Localite_YEWASH_1,
                popuplayertitle: 'Localite_YEWASH',
                interactive: true,
    title: 'Localite_YEWASH<br />\
    <img src="styles/legend/Localite_YEWASH_1_0.png" /> <br />\
    <img src="styles/legend/Localite_YEWASH_1_1.png" /> PLAN INT TOGO<br />\
    <img src="styles/legend/Localite_YEWASH_1_2.png" /> YEWA2<br />\
    <img src="styles/legend/Localite_YEWASH_1_3.png" /> YEWASH<br />\
    <img src="styles/legend/Localite_YEWASH_1_4.png" /> YEWASH&YEWA2<br />' });
var format_Route_importante_2 = new ol.format.GeoJSON();
var features_Route_importante_2 = format_Route_importante_2.readFeatures(json_Route_importante_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_importante_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_importante_2.addFeatures(features_Route_importante_2);
var lyr_Route_importante_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Route_importante_2, 
                style: style_Route_importante_2,
                popuplayertitle: 'Route_importante',
                interactive: true,
    title: 'Route_importante<br />\
    <img src="styles/legend/Route_importante_2_0.png" /> RN1<br />\
    <img src="styles/legend/Route_importante_2_1.png" /> RN<br />' });
var format_Contons_yewash_3 = new ol.format.GeoJSON();
var features_Contons_yewash_3 = format_Contons_yewash_3.readFeatures(json_Contons_yewash_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contons_yewash_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contons_yewash_3.addFeatures(features_Contons_yewash_3);
var lyr_Contons_yewash_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contons_yewash_3, 
                style: style_Contons_yewash_3,
                popuplayertitle: 'Contons_yewash',
                interactive: true,
                title: '<img src="styles/legend/Contons_yewash_3.png" /> Contons_yewash'
            });
var format_Comm_yewash_4 = new ol.format.GeoJSON();
var features_Comm_yewash_4 = format_Comm_yewash_4.readFeatures(json_Comm_yewash_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comm_yewash_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comm_yewash_4.addFeatures(features_Comm_yewash_4);
var lyr_Comm_yewash_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comm_yewash_4, 
                style: style_Comm_yewash_4,
                popuplayertitle: 'Comm_yewash',
                interactive: true,
                title: '<img src="styles/legend/Comm_yewash_4.png" /> Comm_yewash'
            });
var format_pref_yewash_5 = new ol.format.GeoJSON();
var features_pref_yewash_5 = format_pref_yewash_5.readFeatures(json_pref_yewash_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pref_yewash_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pref_yewash_5.addFeatures(features_pref_yewash_5);
var lyr_pref_yewash_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pref_yewash_5, 
                style: style_pref_yewash_5,
                popuplayertitle: 'pref_yewash',
                interactive: true,
                title: '<img src="styles/legend/pref_yewash_5.png" /> pref_yewash'
            });
var format_Cntr_zone_yewash_6 = new ol.format.GeoJSON();
var features_Cntr_zone_yewash_6 = format_Cntr_zone_yewash_6.readFeatures(json_Cntr_zone_yewash_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cntr_zone_yewash_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cntr_zone_yewash_6.addFeatures(features_Cntr_zone_yewash_6);
var lyr_Cntr_zone_yewash_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cntr_zone_yewash_6, 
                style: style_Cntr_zone_yewash_6,
                popuplayertitle: 'Cntr_zone_yewash',
                interactive: true,
                title: '<img src="styles/legend/Cntr_zone_yewash_6.png" /> Cntr_zone_yewash'
            });
var format_hydro_1_2_Clip_7 = new ol.format.GeoJSON();
var features_hydro_1_2_Clip_7 = format_hydro_1_2_Clip_7.readFeatures(json_hydro_1_2_Clip_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hydro_1_2_Clip_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hydro_1_2_Clip_7.addFeatures(features_hydro_1_2_Clip_7);
var lyr_hydro_1_2_Clip_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hydro_1_2_Clip_7, 
                style: style_hydro_1_2_Clip_7,
                popuplayertitle: 'hydro_1_2_Clip',
                interactive: true,
    title: 'hydro_1_2_Clip<br />\
    <img src="styles/legend/hydro_1_2_Clip_7_0.png" /> FLEUVE<br />\
    <img src="styles/legend/hydro_1_2_Clip_7_1.png" /> RIVIERE<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Localite_YEWASH_1.setVisible(true);lyr_Route_importante_2.setVisible(true);lyr_Contons_yewash_3.setVisible(true);lyr_Comm_yewash_4.setVisible(true);lyr_pref_yewash_5.setVisible(true);lyr_Cntr_zone_yewash_6.setVisible(true);lyr_hydro_1_2_Clip_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Localite_YEWASH_1,lyr_Route_importante_2,lyr_Contons_yewash_3,lyr_Comm_yewash_4,lyr_pref_yewash_5,lyr_Cntr_zone_yewash_6,lyr_hydro_1_2_Clip_7];
lyr_Localite_YEWASH_1.set('fieldAliases', {'N°': 'N°', 'REGION': 'REGION', 'PREFECTURE': 'PREFECTURE', 'COMMUNE': 'COMMUNE', 'CANTON': 'CANTON', 'LOCALITE': 'LOCALITE', 'LOCALITE_S': 'LOCALITE_S', 'Distance_L': 'Distance_L', 'Local_Popu': 'Local_Popu', 'YEWA_Youth': 'YEWA_Youth', 'NOM_INFRAS': 'NOM_INFRAS', 'DATE_REALI': 'DATE_REALI', 'PROFONDEUR': 'PROFONDEUR', 'DEBIT__m3_': 'DEBIT__m3_', 'ETAT_INF': 'ETAT_INF', 'NBR_CHATEA': 'NBR_CHATEA', 'ETAT_CH': 'ETAT_CH', 'NBR_POINT_': 'NBR_POINT_', 'NBR_POINT1': 'NBR_POINT1', 'Primary_sc': 'Primary_sc', 'Technical': 'Technical', 'Type_of_tr': 'Type_of_tr', 'College': 'College', 'Health_Cli': 'Health_Cli', 'COOPEC_AD': 'COOPEC_AD', 'Other_SFD': 'Other_SFD', 'which_SFD_': 'which_SFD_', 'YEWA_You_1': 'YEWA_You_1', 'VSLA_GE_gr': 'VSLA_GE_gr', 'Other_yout': 'Other_yout', 'Other_NGOs': 'Other_NGOs', 'Cooperativ': 'Cooperativ', 'Other_Plan': 'Other_Plan', 'Plan_Proje': 'Plan_Proje', 'Number_of': 'Number_of', 'Number_o_1': 'Number_o_1', 'Number_o_2': 'Number_o_2', 'Number_o_3': 'Number_o_3', 'How_many_w': 'How_many_w', 'Is_the_wat': 'Is_the_wat', 'Number_o_4': 'Number_o_4', 'Number_o_5': 'Number_o_5', 'Active_wat': 'Active_wat', 'Date_of_el': 'Date_of_el', 'Number_o_6': 'Number_o_6', 'Number_o_7': 'Number_o_7', 'Menstrual': 'Menstrual', 'Number_o_8': 'Number_o_8', 'Number_o_9': 'Number_o_9', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'ZCOORD': 'ZCOORD', });
lyr_Route_importante_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'fid_1': 'fid_1', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'LENGTH': 'LENGTH', 'Catégorie': 'Catégorie', 'Shape_Leng': 'Shape_Leng', 'Distance_K': 'Distance_K', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Contons_yewash_3.set('fieldAliases', {'fid_1': 'fid_1', 'OBJECTID': 'OBJECTID', 'REGION': 'REGION', 'CODE_PREFE': 'CODE_PREFE', 'PREFECTURE': 'PREFECTURE', 'CODE_COMMU': 'CODE_COMMU', 'COMMUNE': 'COMMUNE', 'CODE_CANTO': 'CODE_CANTO', 'CANTON': 'CANTON', 'CODE_MILIE': 'CODE_MILIE', 'MILIEU': 'MILIEU', 'CODE__REGI': 'CODE__REGI', 'Nbre_canto': 'Nbre_canto', 'Superficie': 'Superficie', });
lyr_Comm_yewash_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid_1': 'fid_1', 'CODE_COMMU': 'CODE_COMMU', 'COMMUNE': 'COMMUNE', 'REGION': 'REGION', 'CODE_PREFE': 'CODE_PREFE', 'CODE_MILIE': 'CODE_MILIE', 'MILIEU': 'MILIEU', 'CODE_REGIO': 'CODE_REGIO', 'PREFECTURE': 'PREFECTURE', 'Nombre_com': 'Nombre_com', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_pref_yewash_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid_1': 'fid_1', 'CODE_COMMU': 'CODE_COMMU', 'COMMUNE': 'COMMUNE', 'REGION': 'REGION', 'CODE_PREFE': 'CODE_PREFE', 'CODE_MILIE': 'CODE_MILIE', 'MILIEU': 'MILIEU', 'CODE_REGIO': 'CODE_REGIO', 'PREFECTURE': 'PREFECTURE', 'Nombre_com': 'Nombre_com', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Cntr_zone_yewash_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid_1': 'fid_1', 'CODE_COMMU': 'CODE_COMMU', 'COMMUNE': 'COMMUNE', 'REGION': 'REGION', 'CODE_PREFE': 'CODE_PREFE', 'CODE_MILIE': 'CODE_MILIE', 'MILIEU': 'MILIEU', 'CODE_REGIO': 'CODE_REGIO', 'PREFECTURE': 'PREFECTURE', 'Nombre_com': 'Nombre_com', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_hydro_1_2_Clip_7.set('fieldAliases', {'fid_1': 'fid_1', 'CATÃ©GOR': 'CATÃ©GOR', 'NAME': 'NAME', 'CODE': 'CODE', });
lyr_Localite_YEWASH_1.set('fieldImages', {'N°': 'TextEdit', 'REGION': 'TextEdit', 'PREFECTURE': 'TextEdit', 'COMMUNE': 'TextEdit', 'CANTON': 'TextEdit', 'LOCALITE': 'TextEdit', 'LOCALITE_S': 'TextEdit', 'Distance_L': 'TextEdit', 'Local_Popu': 'TextEdit', 'YEWA_Youth': 'TextEdit', 'NOM_INFRAS': 'TextEdit', 'DATE_REALI': 'TextEdit', 'PROFONDEUR': 'TextEdit', 'DEBIT__m3_': 'TextEdit', 'ETAT_INF': 'TextEdit', 'NBR_CHATEA': 'TextEdit', 'ETAT_CH': 'TextEdit', 'NBR_POINT_': 'TextEdit', 'NBR_POINT1': 'TextEdit', 'Primary_sc': 'TextEdit', 'Technical': 'TextEdit', 'Type_of_tr': 'TextEdit', 'College': 'TextEdit', 'Health_Cli': 'TextEdit', 'COOPEC_AD': 'TextEdit', 'Other_SFD': 'TextEdit', 'which_SFD_': 'TextEdit', 'YEWA_You_1': 'TextEdit', 'VSLA_GE_gr': 'TextEdit', 'Other_yout': 'TextEdit', 'Other_NGOs': 'TextEdit', 'Cooperativ': 'TextEdit', 'Other_Plan': 'TextEdit', 'Plan_Proje': 'TextEdit', 'Number_of': 'TextEdit', 'Number_o_1': 'TextEdit', 'Number_o_2': 'TextEdit', 'Number_o_3': 'TextEdit', 'How_many_w': 'TextEdit', 'Is_the_wat': 'TextEdit', 'Number_o_4': 'TextEdit', 'Number_o_5': 'TextEdit', 'Active_wat': 'TextEdit', 'Date_of_el': 'DateTime', 'Number_o_6': 'TextEdit', 'Number_o_7': 'TextEdit', 'Menstrual': 'TextEdit', 'Number_o_8': 'TextEdit', 'Number_o_9': 'TextEdit', 'XCOORD': 'TextEdit', 'YCOORD': 'TextEdit', 'ZCOORD': 'TextEdit', });
lyr_Route_importante_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'fid_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'LENGTH': 'TextEdit', 'Catégorie': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Distance_K': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Contons_yewash_3.set('fieldImages', {'fid_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'REGION': 'TextEdit', 'CODE_PREFE': 'TextEdit', 'PREFECTURE': 'TextEdit', 'CODE_COMMU': 'TextEdit', 'COMMUNE': 'TextEdit', 'CODE_CANTO': 'TextEdit', 'CANTON': 'TextEdit', 'CODE_MILIE': 'TextEdit', 'MILIEU': 'TextEdit', 'CODE__REGI': 'TextEdit', 'Nbre_canto': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_Comm_yewash_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid_1': 'TextEdit', 'CODE_COMMU': 'TextEdit', 'COMMUNE': 'TextEdit', 'REGION': 'TextEdit', 'CODE_PREFE': 'TextEdit', 'CODE_MILIE': 'TextEdit', 'MILIEU': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'PREFECTURE': 'TextEdit', 'Nombre_com': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_pref_yewash_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid_1': 'TextEdit', 'CODE_COMMU': 'TextEdit', 'COMMUNE': 'TextEdit', 'REGION': 'TextEdit', 'CODE_PREFE': 'TextEdit', 'CODE_MILIE': 'TextEdit', 'MILIEU': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'PREFECTURE': 'TextEdit', 'Nombre_com': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Cntr_zone_yewash_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'fid_1': 'TextEdit', 'CODE_COMMU': 'TextEdit', 'COMMUNE': 'TextEdit', 'REGION': 'TextEdit', 'CODE_PREFE': 'TextEdit', 'CODE_MILIE': 'TextEdit', 'MILIEU': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'PREFECTURE': 'TextEdit', 'Nombre_com': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_hydro_1_2_Clip_7.set('fieldImages', {'fid_1': 'TextEdit', 'CATÃ©GOR': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', });
lyr_Localite_YEWASH_1.set('fieldLabels', {'N°': 'hidden field', 'REGION': 'inline label - always visible', 'PREFECTURE': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'CANTON': 'inline label - always visible', 'LOCALITE': 'inline label - always visible', 'LOCALITE_S': 'inline label - always visible', 'Distance_L': 'inline label - always visible', 'Local_Popu': 'inline label - always visible', 'YEWA_Youth': 'inline label - always visible', 'NOM_INFRAS': 'inline label - always visible', 'DATE_REALI': 'inline label - always visible', 'PROFONDEUR': 'inline label - always visible', 'DEBIT__m3_': 'inline label - always visible', 'ETAT_INF': 'inline label - always visible', 'NBR_CHATEA': 'inline label - always visible', 'ETAT_CH': 'inline label - always visible', 'NBR_POINT_': 'inline label - always visible', 'NBR_POINT1': 'inline label - always visible', 'Primary_sc': 'inline label - always visible', 'Technical': 'inline label - always visible', 'Type_of_tr': 'inline label - always visible', 'College': 'inline label - always visible', 'Health_Cli': 'inline label - always visible', 'COOPEC_AD': 'inline label - always visible', 'Other_SFD': 'inline label - always visible', 'which_SFD_': 'inline label - always visible', 'YEWA_You_1': 'inline label - always visible', 'VSLA_GE_gr': 'inline label - always visible', 'Other_yout': 'inline label - always visible', 'Other_NGOs': 'inline label - always visible', 'Cooperativ': 'inline label - always visible', 'Other_Plan': 'inline label - always visible', 'Plan_Proje': 'inline label - always visible', 'Number_of': 'inline label - always visible', 'Number_o_1': 'inline label - always visible', 'Number_o_2': 'inline label - always visible', 'Number_o_3': 'inline label - always visible', 'How_many_w': 'inline label - always visible', 'Is_the_wat': 'inline label - always visible', 'Number_o_4': 'inline label - always visible', 'Number_o_5': 'inline label - always visible', 'Active_wat': 'inline label - always visible', 'Date_of_el': 'inline label - always visible', 'Number_o_6': 'inline label - always visible', 'Number_o_7': 'inline label - always visible', 'Menstrual': 'inline label - always visible', 'Number_o_8': 'inline label - always visible', 'Number_o_9': 'inline label - always visible', 'XCOORD': 'no label', 'YCOORD': 'no label', 'ZCOORD': 'no label', });
lyr_Route_importante_2.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'fid_1': 'hidden field', 'OBJECTID': 'hidden field', 'NAME': 'inline label - always visible', 'LENGTH': 'inline label - always visible', 'Catégorie': 'inline label - visible with data', 'Shape_Leng': 'inline label - always visible', 'Distance_K': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_Contons_yewash_3.set('fieldLabels', {'fid_1': 'hidden field', 'OBJECTID': 'hidden field', 'REGION': 'inline label - always visible', 'CODE_PREFE': 'hidden field', 'PREFECTURE': 'inline label - always visible', 'CODE_COMMU': 'hidden field', 'COMMUNE': 'inline label - always visible', 'CODE_CANTO': 'hidden field', 'CANTON': 'inline label - always visible', 'CODE_MILIE': 'hidden field', 'MILIEU': 'hidden field', 'CODE__REGI': 'hidden field', 'Nbre_canto': 'hidden field', 'Superficie': 'inline label - always visible', });
lyr_Comm_yewash_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'fid_1': 'hidden field', 'CODE_COMMU': 'hidden field', 'COMMUNE': 'inline label - always visible', 'REGION': 'inline label - always visible', 'CODE_PREFE': 'hidden field', 'CODE_MILIE': 'hidden field', 'MILIEU': 'hidden field', 'CODE_REGIO': 'hidden field', 'PREFECTURE': 'inline label - always visible', 'Nombre_com': 'hidden field', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label - always visible', });
lyr_pref_yewash_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'fid_1': 'hidden field', 'CODE_COMMU': 'hidden field', 'COMMUNE': 'hidden field', 'REGION': 'inline label - always visible', 'CODE_PREFE': 'hidden field', 'CODE_MILIE': 'hidden field', 'MILIEU': 'hidden field', 'CODE_REGIO': 'hidden field', 'PREFECTURE': 'inline label - always visible', 'Nombre_com': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label - always visible', });
lyr_Cntr_zone_yewash_6.set('fieldLabels', {'OBJECTID': 'no label', 'fid_1': 'no label', 'CODE_COMMU': 'no label', 'COMMUNE': 'no label', 'REGION': 'no label', 'CODE_PREFE': 'no label', 'CODE_MILIE': 'no label', 'MILIEU': 'no label', 'CODE_REGIO': 'no label', 'PREFECTURE': 'no label', 'Nombre_com': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_hydro_1_2_Clip_7.set('fieldLabels', {'fid_1': 'no label', 'CATÃ©GOR': 'no label', 'NAME': 'no label', 'CODE': 'no label', });
lyr_hydro_1_2_Clip_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});