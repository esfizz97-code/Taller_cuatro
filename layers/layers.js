var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });
var format_Provincias_1 = new ol.format.GeoJSON();
var jsonSource_Provincias_1 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_Provincias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias_1, 
                style: style_Provincias_1,
                popuplayertitle: 'Provincias',
                interactive: false,
    title: 'Provincias<br />\
    <img src="styles/legend/Provincias_1_0.png" /> Alajuela<br />\
    <img src="styles/legend/Provincias_1_1.png" /> Cartago<br />\
    <img src="styles/legend/Provincias_1_2.png" /> Guanacaste<br />\
    <img src="styles/legend/Provincias_1_3.png" /> Heredia<br />\
    <img src="styles/legend/Provincias_1_4.png" /> Limón<br />\
    <img src="styles/legend/Provincias_1_5.png" /> Puntarenas<br />\
    <img src="styles/legend/Provincias_1_6.png" /> San José<br />' });

fetchWFSProvincias_1Data(lyr_Provincias_1.get('title'), function (error, response) {
    var features_Provincias_1;
    try {
        if (typeof response === "object" && !response.nodeType) {
            // Case JSONP/GeoJSON
            features_Provincias_1 = format_Provincias_1.readFeatures(response);
        } else {
            // Case XML string o DOM
            var parser = new DOMParser();
            var xmlDoc = (typeof response === "string")
                ? parser.parseFromString(response, "text/xml")
                : response;

            // Find GML version from tags
            var gmlFormat;
            if (xmlDoc.getElementsByTagName("gml:featureMember").length > 0) {
                // GML2
                gmlFormat = new ol.format.GML2();
            } else if (xmlDoc.getElementsByTagName("gml:featureMembers").length > 0 ||
                    xmlDoc.getElementsByTagName("gml:FeatureCollection").length > 0) {
                // GML3
                gmlFormat = new ol.format.GML3();
            } else {
                // Fallback generico
                gmlFormat = new ol.format.WFS();
            }

            features_Provincias_1 = gmlFormat.readFeatures(xmlDoc, {
                dataProjection: 'EPSG:3857',
                featureProjection: map.getView().getProjection()
            });
        }

        if (features_Provincias_1 && features_Provincias_1.length > 0) {
            jsonSource_Provincias_1.addFeatures(features_Provincias_1);
        } else {
            lyr_Provincias_1.set('title', '<i class="fa-regular fa-triangle-exclamation" title="Parsing Error"></i> ' + lyr_Provincias_1.get('title'));
            console.warn("No features loaded for Provincias_1");
        }
    } catch (e) {
        console.error("Error parsing WFS for Provincias_1:", e);
    }
});
var format_CentrosEducativos_2 = new ol.format.GeoJSON();
var features_CentrosEducativos_2 = format_CentrosEducativos_2.readFeatures(json_CentrosEducativos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosEducativos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosEducativos_2.addFeatures(features_CentrosEducativos_2);
cluster_CentrosEducativos_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CentrosEducativos_2
});
var lyr_CentrosEducativos_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CentrosEducativos_2, 
                style: style_CentrosEducativos_2,
                popuplayertitle: 'Centros Educativos',
                interactive: true,
                title: '<img src="styles/legend/CentrosEducativos_2.png" /> Centros Educativos'
            });

lyr_BingMap_0.setVisible(true);lyr_Provincias_1.setVisible(true);lyr_CentrosEducativos_2.setVisible(true);
var layersList = [lyr_BingMap_0,lyr_Provincias_1,lyr_CentrosEducativos_2];
lyr_Provincias_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_PROVINCIA': 'CÓDIGO_PROVINCIA', 'PROVINCIA': 'PROVINCIA', 'ORIGEN_DEL_TOPÓNIMO': 'ORIGEN_DEL_TOPÓNIMO', 'OFICIALIZACIÓN': 'OFICIALIZACIÓN', 'AREA': 'AREA', 'VERSIÓN': 'VERSIÓN', 'GLOBALID': 'GLOBALID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_CentrosEducativos_2.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', 'IMAGEN': 'IMAGEN', 'TIPO': 'TIPO', 'NIVEL': 'NIVEL', 'TELEFONO': 'TELEFONO', 'FAX': 'FAX', 'CORREO': 'CORREO', 'LINK': 'LINK', 'ZONA': 'ZONA', 'CODIGO_PRE': 'CODIGO_PRE', 'PROVINCIA': 'PROVINCIA', 'DIRECCION_': 'DIRECCION_', 'CIRCUITO': 'CIRCUITO', 'CANTON': 'CANTON', 'DISTRITO': 'DISTRITO', 'POBLADO': 'POBLADO', 'DIRECCION1': 'DIRECCION1', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'INFORMACIO': 'INFORMACIO', 'COMENTARIO': 'COMENTARIO', 'POBLACION': 'POBLACION', 'DIRECCION': 'DIRECCION', });
lyr_Provincias_1.set('fieldImages', {'OBJECTID': 'Range', 'CÓDIGO': 'Range', 'CÓDIGO_PROVINCIA': 'Range', 'PROVINCIA': 'TextEdit', 'ORIGEN_DEL_TOPÓNIMO': 'TextEdit', 'OFICIALIZACIÓN': 'TextEdit', 'AREA': 'TextEdit', 'VERSIÓN': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_CentrosEducativos_2.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', 'IMAGEN': 'TextEdit', 'TIPO': 'TextEdit', 'NIVEL': 'TextEdit', 'TELEFONO': 'TextEdit', 'FAX': 'TextEdit', 'CORREO': 'TextEdit', 'LINK': 'TextEdit', 'ZONA': 'TextEdit', 'CODIGO_PRE': 'TextEdit', 'PROVINCIA': 'TextEdit', 'DIRECCION_': 'TextEdit', 'CIRCUITO': 'TextEdit', 'CANTON': 'TextEdit', 'DISTRITO': 'TextEdit', 'POBLADO': 'TextEdit', 'DIRECCION1': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'INFORMACIO': 'TextEdit', 'COMENTARIO': 'TextEdit', 'POBLACION': 'TextEdit', 'DIRECCION': 'TextEdit', });
lyr_Provincias_1.set('fieldLabels', {'OBJECTID': 'no label', 'CÓDIGO': 'no label', 'CÓDIGO_PROVINCIA': 'no label', 'PROVINCIA': 'no label', 'ORIGEN_DEL_TOPÓNIMO': 'no label', 'OFICIALIZACIÓN': 'no label', 'AREA': 'no label', 'VERSIÓN': 'no label', 'GLOBALID': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_CentrosEducativos_2.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE': 'inline label - always visible', 'IMAGEN': 'hidden field', 'TIPO': 'hidden field', 'NIVEL': 'hidden field', 'TELEFONO': 'hidden field', 'FAX': 'hidden field', 'CORREO': 'hidden field', 'LINK': 'hidden field', 'ZONA': 'hidden field', 'CODIGO_PRE': 'hidden field', 'PROVINCIA': 'hidden field', 'DIRECCION_': 'hidden field', 'CIRCUITO': 'hidden field', 'CANTON': 'hidden field', 'DISTRITO': 'hidden field', 'POBLADO': 'hidden field', 'DIRECCION1': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'INFORMACIO': 'hidden field', 'COMENTARIO': 'hidden field', 'POBLACION': 'hidden field', 'DIRECCION': 'hidden field', });
lyr_CentrosEducativos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});