(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Do(parent) {
	var listeners = [];
	this.do = function(callback) {
		listeners.push(callback);
	};
	this.undo = function(callback) {
		listeners.splice(listeners.indexOf(callback), 1);
	};
	this.fire = function() {
		for (var v = 0; v < listeners.length; v++) {
			listeners[v].apply(parent, arguments);
		}
	};
}

if (typeof(module) === 'object') module.exports = Do;

},{}],2:[function(require,module,exports){
module.exports={
  "version": "1.5.0"
}
},{}],3:[function(require,module,exports){
module.exports={
	"unitsPerEm": 1792,
	"ascender": 1536,
	"descender": -256,
	"fonts": {
		"plus": {
			"advanceWidth": 1408,
			"commands": "M,1408,800 C,1408,853,1365,896,1312,896 L,896,896 L,896,1312 C,896,1365,853,1408,800,1408 L,608,1408 C,555,1408,512,1365,512,1312 L,512,896 L,96,896 C,43,896,0,853,0,800 L,0,608 C,0,555,43,512,96,512 L,512,512 L,512,96 C,512,43,555,0,608,0 L,800,0 C,853,0,896,43,896,96 L,896,512 L,1312,512 C,1365,512,1408,555,1408,608 Z"
		},
		"minus": {
			"advanceWidth": 1408,
			"commands": "M,1408,800 C,1408,853,1365,896,1312,896 L,96,896 C,43,896,0,853,0,800 L,0,608 C,0,555,43,512,96,512 L,1312,512 C,1365,512,1408,555,1408,608 Z"
		},
		"ok": {
			"advanceWidth": 1792,
			"commands": "M,1671,970 C,1671,995,1661,1020,1643,1038 L,1507,1174 C,1489,1192,1464,1202,1439,1202 C,1414,1202,1389,1192,1371,1174 L,715,517 L,421,812 C,403,830,378,840,353,840 C,328,840,303,830,285,812 L,149,676 C,131,658,121,633,121,608 C,121,583,131,558,149,540 L,511,178 L,647,42 C,665,24,690,14,715,14 C,740,14,765,24,783,42 L,919,178 L,1643,902 C,1661,920,1671,945,1671,970 Z"
		},
		"remove": {
			"advanceWidth": 1408,
			"commands": "M,1298,214 C,1298,239,1288,264,1270,282 L,976,576 L,1270,870 C,1288,888,1298,913,1298,938 C,1298,963,1288,988,1270,1006 L,1134,1142 C,1116,1160,1091,1170,1066,1170 C,1041,1170,1016,1160,998,1142 L,704,848 L,410,1142 C,392,1160,367,1170,342,1170 C,317,1170,292,1160,274,1142 L,138,1006 C,120,988,110,963,110,938 C,110,913,120,888,138,870 L,432,576 L,138,282 C,120,264,110,239,110,214 C,110,189,120,164,138,146 L,274,10 C,292,-8,317,-18,342,-18 C,367,-18,392,-8,410,10 L,704,304 L,998,10 C,1016,-8,1041,-18,1066,-18 C,1091,-18,1116,-8,1134,10 L,1270,146 C,1288,164,1298,189,1298,214 Z"
		},
		"zoom_in": {
			"advanceWidth": 1664,
			"commands": "M,1024,736 C,1024,753,1009,768,992,768 L,768,768 L,768,992 C,768,1009,753,1024,736,1024 L,672,1024 C,655,1024,640,1009,640,992 L,640,768 L,416,768 C,399,768,384,753,384,736 L,384,672 C,384,655,399,640,416,640 L,640,640 L,640,416 C,640,399,655,384,672,384 L,736,384 C,753,384,768,399,768,416 L,768,640 L,992,640 C,1009,640,1024,655,1024,672 M,1152,704 C,1152,457,951,256,704,256 C,457,256,256,457,256,704 C,256,951,457,1152,704,1152 C,951,1152,1152,951,1152,704 M,1664,-128 C,1664,-94,1650,-61,1627,-38 L,1284,305 C,1365,422,1408,562,1408,704 C,1408,1093,1093,1408,704,1408 C,315,1408,0,1093,0,704 C,0,315,315,0,704,0 C,846,0,986,43,1103,124 L,1446,-218 C,1469,-242,1502,-256,1536,-256 C,1607,-256,1664,-199,1664,-128 Z"
		},
		"zoom_out": {
			"advanceWidth": 1664,
			"commands": "M,1024,736 C,1024,753,1009,768,992,768 L,416,768 C,399,768,384,753,384,736 L,384,672 C,384,655,399,640,416,640 L,992,640 C,1009,640,1024,655,1024,672 M,1152,704 C,1152,457,951,256,704,256 C,457,256,256,457,256,704 C,256,951,457,1152,704,1152 C,951,1152,1152,951,1152,704 M,1664,-128 C,1664,-94,1650,-61,1627,-38 L,1284,305 C,1365,422,1408,562,1408,704 C,1408,1093,1093,1408,704,1408 C,315,1408,0,1093,0,704 C,0,315,315,0,704,0 C,846,0,986,43,1103,124 L,1446,-218 C,1469,-242,1502,-256,1536,-256 C,1607,-256,1664,-199,1664,-128 Z"
		},
		"cog": {
			"advanceWidth": 1536,
			"commands": "M,1024,640 C,1024,499,909,384,768,384 C,627,384,512,499,512,640 C,512,781,627,896,768,896 C,909,896,1024,781,1024,640 M,1536,749 C,1536,766,1524,782,1507,785 L,1324,813 C,1314,846,1300,879,1283,911 C,1317,958,1354,1002,1388,1048 C,1393,1055,1396,1062,1396,1071 C,1396,1079,1394,1087,1389,1093 C,1347,1152,1277,1214,1224,1263 C,1217,1269,1208,1273,1199,1273 C,1190,1273,1181,1270,1175,1264 L,1033,1157 C,1004,1172,974,1184,943,1194 L,915,1378 C,913,1395,897,1408,879,1408 L,657,1408 C,639,1408,625,1396,621,1380 C,605,1320,599,1255,592,1194 C,561,1184,530,1171,501,1156 L,363,1263 C,355,1269,346,1273,337,1273 C,303,1273,168,1127,144,1094 C,139,1087,135,1080,135,1071 C,135,1062,139,1054,145,1047 C,182,1002,218,957,252,909 C,236,879,223,849,213,817 L,27,789 C,12,786,0,768,0,753 L,0,531 C,0,514,12,498,29,495 L,212,468 C,222,434,236,401,253,369 C,219,322,182,278,148,232 C,143,225,140,218,140,209 C,140,201,142,193,147,186 C,189,128,259,66,312,18 C,319,11,328,7,337,7 C,346,7,355,10,362,16 L,503,123 C,532,108,562,96,593,86 L,621,-98 C,623,-115,639,-128,657,-128 L,879,-128 C,897,-128,911,-116,915,-100 C,931,-40,937,25,944,86 C,975,96,1006,109,1035,124 L,1173,16 C,1181,11,1190,7,1199,7 C,1233,7,1368,154,1392,186 C,1398,193,1401,200,1401,209 C,1401,218,1397,227,1391,234 C,1354,279,1318,323,1284,372 C,1300,401,1312,431,1323,463 L,1508,491 C,1524,494,1536,512,1536,527 Z"
		},
		"trash": {
			"advanceWidth": 1408,
			"commands": "M,512,800 C,512,818,498,832,480,832 L,416,832 C,398,832,384,818,384,800 L,384,224 C,384,206,398,192,416,192 L,480,192 C,498,192,512,206,512,224 M,768,800 C,768,818,754,832,736,832 L,672,832 C,654,832,640,818,640,800 L,640,224 C,640,206,654,192,672,192 L,736,192 C,754,192,768,206,768,224 M,1024,800 C,1024,818,1010,832,992,832 L,928,832 C,910,832,896,818,896,800 L,896,224 C,896,206,910,192,928,192 L,992,192 C,1010,192,1024,206,1024,224 M,1152,76 C,1152,28,1125,0,1120,0 L,288,0 C,283,0,256,28,256,76 L,256,1024 L,1152,1024 L,1152,76 M,480,1152 L,529,1269 C,532,1273,540,1279,546,1280 L,863,1280 C,868,1279,877,1273,880,1269 L,928,1152 M,1408,1120 C,1408,1138,1394,1152,1376,1152 L,1067,1152 L,997,1319 C,977,1368,917,1408,864,1408 L,544,1408 C,491,1408,431,1368,411,1319 L,341,1152 L,32,1152 C,14,1152,0,1138,0,1120 L,0,1056 C,0,1038,14,1024,32,1024 L,128,1024 L,128,72 C,128,-38,200,-128,288,-128 L,1120,-128 C,1208,-128,1280,-34,1280,76 L,1280,1024 L,1376,1024 C,1394,1024,1408,1038,1408,1056 Z"
		},
		"file_alt": {
			"advanceWidth": 1536,
			"commands": "M,1468,1156 L,1156,1468 C,1119,1505,1045,1536,992,1536 L,96,1536 C,43,1536,0,1493,0,1440 L,0,-160 C,0,-213,43,-256,96,-256 L,1440,-256 C,1493,-256,1536,-213,1536,-160 L,1536,992 C,1536,1045,1505,1119,1468,1156 M,1024,1400 C,1041,1394,1058,1385,1065,1378 L,1378,1065 C,1385,1058,1394,1041,1400,1024 L,1024,1024 M,1408,-128 L,128,-128 L,128,1408 L,896,1408 L,896,992 C,896,939,939,896,992,896 L,1408,896 Z"
		},
		"download_alt": {
			"advanceWidth": 1664,
			"commands": "M,1280,192 C,1280,157,1251,128,1216,128 C,1181,128,1152,157,1152,192 C,1152,227,1181,256,1216,256 C,1251,256,1280,227,1280,192 M,1536,192 C,1536,157,1507,128,1472,128 C,1437,128,1408,157,1408,192 C,1408,227,1437,256,1472,256 C,1507,256,1536,227,1536,192 M,1664,416 C,1664,469,1621,512,1568,512 L,1104,512 L,968,376 C,931,340,883,320,832,320 C,781,320,733,340,696,376 L,561,512 L,96,512 C,43,512,0,469,0,416 L,0,96 C,0,43,43,0,96,0 L,1568,0 C,1621,0,1664,43,1664,96 M,1339,985 C,1329,1008,1306,1024,1280,1024 L,1024,1024 L,1024,1472 C,1024,1507,995,1536,960,1536 L,704,1536 C,669,1536,640,1507,640,1472 L,640,1024 L,384,1024 C,358,1024,335,1008,325,985 C,315,961,320,933,339,915 L,787,467 C,799,454,816,448,832,448 C,848,448,865,454,877,467 L,1325,915 C,1344,933,1349,961,1339,985 Z"
		},
		"repeat": {
			"advanceWidth": 1536,
			"commands": "M,1536,1280 C,1536,1306,1520,1329,1497,1339 C,1473,1349,1445,1344,1427,1325 L,1297,1196 C,1156,1329,965,1408,768,1408 C,345,1408,0,1063,0,640 C,0,217,345,-128,768,-128 C,997,-128,1213,-27,1359,149 C,1369,162,1369,181,1357,192 L,1220,330 C,1213,336,1204,339,1195,339 C,1186,338,1177,334,1172,327 C,1074,200,927,128,768,128 C,486,128,256,358,256,640 C,256,922,486,1152,768,1152 C,899,1152,1023,1102,1117,1015 L,979,877 C,960,859,955,831,965,808 C,975,784,998,768,1024,768 L,1472,768 C,1507,768,1536,797,1536,832 Z"
		},
		"pencil": {
			"advanceWidth": 1536,
			"commands": "M,363,0 L,256,0 L,256,128 L,128,128 L,128,235 L,219,326 L,454,91 M,886,928 C,886,922,884,916,879,911 L,337,369 C,332,364,326,362,320,362 C,307,362,298,371,298,384 C,298,390,300,396,305,401 L,847,943 C,852,948,858,950,864,950 C,877,950,886,941,886,928 M,832,1120 L,0,288 L,0,-128 L,416,-128 L,1248,704 M,1515,1024 C,1515,1058,1501,1091,1478,1115 L,1243,1349 C,1219,1373,1186,1387,1152,1387 C,1118,1387,1085,1373,1062,1349 L,896,1184 L,1312,768 L,1478,934 C,1501,957,1515,990,1515,1024 Z"
		},
		"edit": {
			"advanceWidth": 1792,
			"commands": "M,888,352 L,832,352 L,832,448 L,736,448 L,736,504 L,852,620 L,1004,468 M,1328,1072 C,1337,1063,1336,1048,1327,1039 L,977,689 C,968,680,953,679,944,688 C,935,697,936,712,945,721 L,1295,1071 C,1304,1080,1319,1081,1328,1072 M,1408,478 C,1408,491,1400,502,1388,507 C,1376,512,1363,510,1353,500 L,1289,436 C,1283,430,1280,422,1280,414 L,1280,288 C,1280,200,1208,128,1120,128 L,288,128 C,200,128,128,200,128,288 L,128,1120 C,128,1208,200,1280,288,1280 L,1120,1280 C,1135,1280,1150,1278,1165,1274 C,1176,1270,1188,1273,1197,1282 L,1246,1331 C,1254,1339,1257,1349,1255,1360 C,1253,1370,1246,1379,1237,1383 C,1200,1400,1160,1408,1120,1408 L,288,1408 C,129,1408,0,1279,0,1120 L,0,288 C,0,129,129,0,288,0 L,1120,0 C,1279,0,1408,129,1408,288 M,1312,1216 L,640,544 L,640,256 L,928,256 L,1600,928 M,1756,1084 C,1793,1121,1793,1183,1756,1220 L,1604,1372 C,1567,1409,1505,1409,1468,1372 L,1376,1280 L,1664,992 L,1756,1084 Z"
		},
		"play": {
			"advanceWidth": 1408,
			"commands": "M,1384,609 C,1415,626,1415,654,1384,671 L,56,1409 C,25,1426,0,1411,0,1376 L,0,-96 C,0,-131,25,-146,56,-129 Z"
		},
		"pause": {
			"advanceWidth": 1536,
			"commands": "M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,960,1408 C,925,1408,896,1379,896,1344 L,896,-64 C,896,-99,925,-128,960,-128 L,1472,-128 C,1507,-128,1536,-99,1536,-64 M,640,1344 C,640,1379,611,1408,576,1408 L,64,1408 C,29,1408,0,1379,0,1344 L,0,-64 C,0,-99,29,-128,64,-128 L,576,-128 C,611,-128,640,-99,640,-64 Z"
		},
		"stop": {
			"advanceWidth": 1536,
			"commands": "M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,64,1408 C,29,1408,0,1379,0,1344 L,0,-64 C,0,-99,29,-128,64,-128 L,1472,-128 C,1507,-128,1536,-99,1536,-64 Z"
		},
		"resize_full": {
			"advanceWidth": 1536,
			"commands": "M,755,480 C,755,488,751,497,745,503 L,631,617 C,625,623,616,627,608,627 C,600,627,591,623,585,617 L,253,285 L,109,429 C,97,441,81,448,64,448 C,29,448,0,419,0,384 L,0,-64 C,0,-99,29,-128,64,-128 L,512,-128 C,547,-128,576,-99,576,-64 C,576,-47,569,-31,557,-19 L,413,125 L,745,457 C,751,463,755,472,755,480 M,1536,1344 C,1536,1379,1507,1408,1472,1408 L,1024,1408 C,989,1408,960,1379,960,1344 C,960,1327,967,1311,979,1299 L,1123,1155 L,791,823 C,785,817,781,808,781,800 C,781,792,785,783,791,777 L,905,663 C,911,657,920,653,928,653 C,936,653,945,657,951,663 L,1283,995 L,1427,851 C,1439,839,1455,832,1472,832 C,1507,832,1536,861,1536,896 Z"
		},
		"resize_small": {
			"advanceWidth": 1536,
			"commands": "M,768,576 C,768,611,739,640,704,640 L,256,640 C,221,640,192,611,192,576 C,192,559,199,543,211,531 L,355,387 L,23,55 C,17,49,13,40,13,32 C,13,24,17,15,23,9 L,137,-105 C,143,-111,152,-115,160,-115 C,168,-115,177,-111,183,-105 L,515,227 L,659,83 C,671,71,687,64,704,64 C,739,64,768,93,768,128 M,1523,1248 C,1523,1256,1519,1265,1513,1271 L,1399,1385 C,1393,1391,1384,1395,1376,1395 C,1368,1395,1359,1391,1353,1385 L,1021,1053 L,877,1197 C,865,1209,849,1216,832,1216 C,797,1216,768,1187,768,1152 L,768,704 C,768,669,797,640,832,640 L,1280,640 C,1315,640,1344,669,1344,704 C,1344,721,1337,737,1325,749 L,1181,893 L,1513,1225 C,1519,1231,1523,1240,1523,1248 Z"
		},
		"eye_open": {
			"advanceWidth": 1792,
			"commands": "M,1664,576 C,1493,312,1217,128,896,128 C,575,128,299,312,128,576 C,223,723,353,849,509,929 C,469,861,448,783,448,704 C,448,457,649,256,896,256 C,1143,256,1344,457,1344,704 C,1344,783,1323,861,1283,929 C,1439,849,1569,723,1664,576 M,944,960 C,944,934,922,912,896,912 C,782,912,688,818,688,704 C,688,678,666,656,640,656 C,614,656,592,678,592,704 C,592,871,729,1008,896,1008 C,922,1008,944,986,944,960 M,1792,576 C,1792,601,1784,624,1772,645 C,1588,947,1251,1152,896,1152 C,541,1152,204,947,20,645 C,8,624,0,601,0,576 C,0,551,8,528,20,507 C,204,205,541,0,896,0 C,1251,0,1588,204,1772,507 C,1784,528,1792,551,1792,576 Z"
		},
		"eye_close": {
			"advanceWidth": 1792,
			"commands": "M,555,201 C,379,280,232,415,128,576 C,223,723,353,849,509,929 C,469,861,448,783,448,704 C,448,561,517,426,633,342 M,944,960 C,944,934,922,912,896,912 C,782,912,688,819,688,704 C,688,678,666,656,640,656 C,614,656,592,678,592,704 C,592,871,729,1008,896,1008 C,922,1008,944,986,944,960 M,1307,1151 C,1307,1162,1301,1172,1291,1178 C,1270,1190,1176,1248,1158,1248 C,1146,1248,1136,1242,1130,1232 L,1076,1135 C,1017,1146,956,1152,896,1152 C,527,1152,218,949,20,645 C,7,625,0,600,0,576 C,0,551,7,527,20,507 C,135,327,298,177,492,89 C,482,72,448,18,448,2 C,448,-10,454,-20,464,-26 C,485,-38,580,-96,598,-96 C,609,-96,620,-90,626,-80 L,675,9 C,886,386,1095,765,1306,1142 C,1307,1144,1307,1149,1307,1151 M,1344,704 C,1344,732,1341,760,1336,788 L,1056,286 C,1229,352,1344,518,1344,704 M,1792,576 C,1792,602,1785,623,1772,645 C,1694,774,1569,899,1445,982 L,1382,870 C,1495,792,1590,691,1664,576 C,1508,334,1261,157,970,132 L,896,0 C,1197,0,1467,137,1663,362 C,1702,407,1741,456,1772,507 C,1785,529,1792,550,1792,576 Z"
		},
		"folder_open": {
			"advanceWidth": 1920,
			"commands": "M,1879,584 C,1879,629,1828,640,1792,640 L,704,640 C,616,640,498,586,440,518 L,104,122 C,88,104,73,80,73,56 C,73,11,124,0,160,0 L,1248,0 C,1336,0,1454,54,1512,122 L,1848,518 C,1864,536,1879,560,1879,584 M,1536,928 C,1536,1051,1435,1152,1312,1152 L,768,1152 L,768,1184 C,768,1307,667,1408,544,1408 L,224,1408 C,101,1408,0,1307,0,1184 L,0,224 C,0,216,1,207,1,199 L,6,205 L,343,601 C,424,697,579,768,704,768 L,1536,768 Z"
		},
		"signin": {
			"advanceWidth": 1536,
			"commands": "M,1184,640 C,1184,657,1177,673,1165,685 L,621,1229 C,609,1241,593,1248,576,1248 C,541,1248,512,1219,512,1184 L,512,896 L,64,896 C,29,896,0,867,0,832 L,0,448 C,0,413,29,384,64,384 L,512,384 L,512,96 C,512,61,541,32,576,32 C,593,32,609,39,621,51 L,1165,595 C,1177,607,1184,623,1184,640 M,1536,992 C,1536,1151,1407,1280,1248,1280 L,928,1280 C,883,1280,896,1212,896,1184 C,896,1147,935,1152,960,1152 L,1248,1152 C,1336,1152,1408,1080,1408,992 L,1408,288 C,1408,200,1336,128,1248,128 L,928,128 C,883,128,896,60,896,32 C,896,15,911,0,928,0 L,1248,0 C,1407,0,1536,129,1536,288 Z"
		},
		"upload_alt": {
			"advanceWidth": 1664,
			"commands": "M,1280,64 C,1280,29,1251,0,1216,0 C,1181,0,1152,29,1152,64 C,1152,99,1181,128,1216,128 C,1251,128,1280,99,1280,64 M,1536,64 C,1536,29,1507,0,1472,0 C,1437,0,1408,29,1408,64 C,1408,99,1437,128,1472,128 C,1507,128,1536,99,1536,64 M,1664,288 C,1664,341,1621,384,1568,384 L,1141,384 C,1114,310,1043,256,960,256 L,704,256 C,621,256,550,310,523,384 L,96,384 C,43,384,0,341,0,288 L,0,-32 C,0,-85,43,-128,96,-128 L,1568,-128 C,1621,-128,1664,-85,1664,-32 M,1339,936 C,1349,959,1344,987,1325,1005 L,877,1453 C,865,1466,848,1472,832,1472 C,816,1472,799,1466,787,1453 L,339,1005 C,320,987,315,959,325,936 C,335,912,358,896,384,896 L,640,896 L,640,448 C,640,413,669,384,704,384 L,960,384 C,995,384,1024,413,1024,448 L,1024,896 L,1280,896 C,1306,896,1329,912,1339,936 Z"
		},
		"save": {
			"advanceWidth": 1536,
			"commands": "M,384,0 L,384,384 L,1152,384 L,1152,0 M,1280,0 L,1280,416 C,1280,469,1237,512,1184,512 L,352,512 C,299,512,256,469,256,416 L,256,0 L,128,0 L,128,1280 L,256,1280 L,256,864 C,256,811,299,768,352,768 L,928,768 C,981,768,1024,811,1024,864 L,1024,1280 C,1044,1280,1083,1264,1097,1250 L,1378,969 C,1391,956,1408,915,1408,896 L,1408,0 M,896,928 C,896,911,881,896,864,896 L,672,896 C,655,896,640,911,640,928 L,640,1248 C,640,1265,655,1280,672,1280 L,864,1280 C,881,1280,896,1265,896,1248 L,896,928 M,1536,896 C,1536,949,1506,1022,1468,1060 L,1188,1340 C,1150,1378,1077,1408,1024,1408 L,96,1408 C,43,1408,0,1365,0,1312 L,0,-32 C,0,-85,43,-128,96,-128 L,1440,-128 C,1493,-128,1536,-85,1536,-32 Z"
		},
		"undo": {
			"advanceWidth": 1536,
			"commands": "M,1536,640 C,1536,1063,1191,1408,768,1408 C,571,1408,380,1329,239,1196 L,109,1325 C,91,1344,63,1349,40,1339 C,16,1329,0,1306,0,1280 L,0,832 C,0,797,29,768,64,768 L,512,768 C,538,768,561,784,571,808 C,581,831,576,859,557,877 L,420,1015 C,513,1102,637,1152,768,1152 C,1050,1152,1280,922,1280,640 C,1280,358,1050,128,768,128 C,609,128,462,200,364,327 C,359,334,350,338,341,339 C,332,339,323,336,316,330 L,179,192 C,168,181,167,162,177,149 C,323,-27,539,-128,768,-128 C,1191,-128,1536,217,1536,640 Z"
		},
		"paste": {
			"advanceWidth": 1792,
			"commands": "M,768,-128 L,768,1024 L,1152,1024 L,1152,608 C,1152,555,1195,512,1248,512 L,1664,512 L,1664,-128 M,1024,1312 C,1024,1295,1009,1280,992,1280 L,288,1280 C,271,1280,256,1295,256,1312 L,256,1376 C,256,1393,271,1408,288,1408 L,992,1408 C,1009,1408,1024,1393,1024,1376 L,1024,1312 M,1280,640 L,1280,939 L,1579,640 M,1792,512 C,1792,565,1762,638,1724,676 L,1316,1084 C,1305,1095,1293,1104,1280,1112 L,1280,1440 C,1280,1493,1237,1536,1184,1536 L,96,1536 C,43,1536,0,1493,0,1440 L,0,96 C,0,43,43,0,96,0 L,640,0 L,640,-160 C,640,-213,683,-256,736,-256 L,1696,-256 C,1749,-256,1792,-213,1792,-160 Z"
		},
		"folder_open_alt": {
			"advanceWidth": 1920,
			"commands": "M,1781,605 C,1781,590,1772,577,1763,566 L,1469,203 C,1435,161,1365,128,1312,128 L,224,128 C,202,128,171,135,171,163 C,171,178,180,191,189,203 L,483,566 C,517,607,587,640,640,640 L,1728,640 C,1750,640,1781,633,1781,605 M,640,768 C,549,768,442,717,384,646 L,128,331 L,128,1184 C,128,1237,171,1280,224,1280 L,544,1280 C,597,1280,640,1237,640,1184 L,640,1120 C,640,1067,683,1024,736,1024 L,1312,1024 C,1365,1024,1408,981,1408,928 L,1408,768 M,1909,605 C,1909,629,1904,652,1894,673 C,1864,737,1796,768,1728,768 L,1536,768 L,1536,928 C,1536,1051,1435,1152,1312,1152 L,768,1152 L,768,1184 C,768,1307,667,1408,544,1408 L,224,1408 C,101,1408,0,1307,0,1184 L,0,224 C,0,101,101,0,224,0 L,1312,0 C,1402,0,1511,52,1568,122 L,1863,485 C,1890,519,1909,561,1909,605 Z"
		}
	}
}
},{}],4:[function(require,module,exports){

var DEFAULT_TIME_SCALE = 60;

// Dimensions
module.exports = {
	LINE_HEIGHT: 26,
	DIAMOND_SIZE: 10,
	MARKER_TRACK_HEIGHT: 60,
	width: 600,
	height: 200,
	TIMELINE_SCROLL_HEIGHT: 0,
	LEFT_PANE_WIDTH: 250,
	time_scale: DEFAULT_TIME_SCALE, // number of pixels to 1 second
    default_length: 20, // seconds
};

},{}],5:[function(require,module,exports){
module.exports = {
	// photoshop colors
	a: '#343434',
	b: '#535353',
	c: '#b8b8b8',
	d: '#d6d6d6',
};
},{}],6:[function(require,module,exports){
/*
 * @author Joshua Koo http://joshuakoo.com
 */

var undo = require('./util_undo'),
	Dispatcher = require('./util_dispatcher'),
	Theme = require('./theme'),
	UndoManager = undo.UndoManager,
	UndoState = undo.UndoState,
	Settings = require('./settings'),
	utils = require('./utils'),
	LayerCabinet = require('./view_layer_cabinet'),
	TimelinePanel = require('./view_panel'),
	package_json = require('../package.json'),
	IconButton = require('./ui_icon_button'),
	style = utils.style,
	saveToFile = utils.saveToFile,
	openAs = utils.openAs,
	STORAGE_PREFIX = utils.STORAGE_PREFIX,
	ScrollBar = require('./ui_scrollbar'),
	DataStore = require('./util_datastore')
	;

var Z_INDEX = 999;

function LayerProp(name) {
	this.name = name;
	this.values = [];

	this._value = 0;

	this._color = '#' + (Math.random() * 0xffffff | 0).toString(16);
	/*
	this.max
	this.min
	this.step
	*/
}

function Timeliner(target) {
	// Dispatcher for coordination
	var dispatcher = new Dispatcher();

	// Data
	var data = new DataStore();
	var layer_store = data.get('layers');
	this.layer_store = layer_store;
	var layers = layer_store.value;

	window._timeliner_data = data; // expose it for debugging

	// Undo manager
	var undo_manager = new UndoManager(dispatcher);

	// Views
	var timeline = new TimelinePanel(data, dispatcher);
	var layer_panel = new LayerCabinet(data, dispatcher);

	setTimeout(function() {
		// hack!
		undo_manager.save(new UndoState(data, 'Loaded'), true);
	});

	dispatcher.on('keyframe', function(layer, value) {
		var index = layers.indexOf(layer);

		var t = data.get('ui:currentTime').value;
		var v = utils.findTimeinLayer(layer, t);

		// console.log(v, '...keyframe index', index, utils.format_friendly_seconds(t), typeof(v));
		// console.log('layer', layer, value);

		if (typeof(v) === 'number') {
			layer.values.splice(v, 0, {
				time: t,
				value: value,
				_color: '#' + (Math.random() * 0xffffff | 0).toString(16)
			});

			undo_manager.save(new UndoState(data, 'Add Keyframe'));
		} else {
			console.log('remove from index', v);
			layer.values.splice(v.index, 1);

			undo_manager.save(new UndoState(data, 'Remove Keyframe'));
		}

		repaintAll();

	});

	dispatcher.on('keyframe.move', function(layer, value) {
		undo_manager.save(new UndoState(data, 'Move Keyframe'));
	});

	// dispatcher.fire('value.change', layer, me.value);
	dispatcher.on('value.change', function(layer, value, dont_save) {
		if (layer._mute) return;

		var t = data.get('ui:currentTime').value;
		var v = utils.findTimeinLayer(layer, t);

		// console.log(v, 'value.change', layer, value, utils.format_friendly_seconds(t), typeof(v));
		if (typeof(v) === 'number') {
			layer.values.splice(v, 0, {
				time: t,
				value: value,
				_color: '#' + (Math.random() * 0xffffff | 0).toString(16)
			});
			if (!dont_save) undo_manager.save(new UndoState(data, 'Add value'));
		} else {
			v.object.value = value;
			if (!dont_save) undo_manager.save(new UndoState(data, 'Update value'));
		}

		repaintAll();
	});

	dispatcher.on('action:solo', function(layer, solo) {
		layer._solo = solo;

		console.log(layer, solo);

		// When a track is solo-ed, playback only changes values
		// of that layer.
	});

	dispatcher.on('action:mute', function(layer, mute) {
		layer._mute = mute;

		// When a track is mute, playback does not play
		// frames of those muted layers.

		// also feels like hidden feature in photoshop

		// when values are updated, eg. from slider,
		// no tweens will be created.
		// we can decide also to "lock in" layers
		// no changes to tween will be made etc.
	});

	dispatcher.on('ease', function(layer, ease_type) {
		var t = data.get('ui:currentTime').value;
		var v = utils.timeAtLayer(layer, t);
		// console.log('Ease Change > ', layer, value, v);
		if (v && v.entry) {
			v.entry.tween  = ease_type;
		}

		undo_manager.save(new UndoState(data, 'Add Ease'));

		repaintAll();
	});

	var start_play = null,
		played_from = 0; // requires some more tweaking

	dispatcher.on('controls.toggle_play', function() {
		if (start_play) {
			pausePlaying();
		} else {
			startPlaying();
		}
	});

	dispatcher.on('controls.restart_play', function() {
		if (!start_play) {
			startPlaying();
		}

		setCurrentTime(played_from);
	});

	dispatcher.on('controls.play', startPlaying);
	dispatcher.on('controls.pause', pausePlaying);

	function startPlaying() {
		// played_from = timeline.current_frame;
		start_play = performance.now() - data.get('ui:currentTime').value * 1000;
		layer_panel.setControlStatus(true);
		// dispatcher.fire('controls.status', true);
	}

	function pausePlaying() {
		start_play = null;
		layer_panel.setControlStatus(false);
		// dispatcher.fire('controls.status', false);
	}

	dispatcher.on('controls.stop', function() {
		if (start_play !== null) pausePlaying();
		setCurrentTime(0);
	});

	var currentTimeStore = data.get('ui:currentTime');
	dispatcher.on('time.update', setCurrentTime);

	dispatcher.on('update.scrollTime', function(v) {
		v = Math.max(0, v);
		data.get('ui:scrollTime').value = v;
		repaintAll();
	});


	function setCurrentTime(value) {
		value = Math.max(0, value);
		currentTimeStore.value = value;

		if (start_play) start_play = performance.now() - value * 1000;
		repaintAll();
		// layer_panel.repaint(s);
	}

	dispatcher.on('target.notify', function(name, value) {
		if (target) target[name] = value;
	});

	dispatcher.on('update.scale', function(v) {
		console.log('range', v);
		data.get('ui:timeScale').value = v;

		timeline.repaint();
	});

	// handle undo / redo
	dispatcher.on('controls.undo', function() {
		var history = undo_manager.undo();
		data.setJSONString(history.state);

		updateState();
	});

	dispatcher.on('controls.redo', function() {
		var history = undo_manager.redo();
		data.setJSONString(history.state);

		updateState();
	});

	/*
		Paint Routines
	*/

	function paint() {
		requestAnimationFrame(paint);

		if (start_play) {
			var t = (performance.now() - start_play) / 1000;
			setCurrentTime(t);


			if (t > data.get('ui:totalTime').value) {
				// simple loop
				start_play = performance.now();
			}
		}

		if (needsResize) {
			div.style.width = width + 'px';
			div.style.height = height + 'px';

			restyle(layer_panel.dom, timeline.dom);

			timeline.resize();
			repaintAll();
			needsResize = false;

			dispatcher.fire('resize');
		}

		timeline._paint();
	}

	paint();

	/*
		End Paint Routines
	*/

	this.getData = function () {
		return data;
	}
	function save(name) {
		if (!name) name = 'autosave';

		var json = data.getJSONString();

		try {
			localStorage[STORAGE_PREFIX + name] = json;
			dispatcher.fire('save:done');
		} catch (e) {
			console.log('Cannot save', name, json);
		}
	}

	function saveAs(name) {
		if (!name) name = data.get('name').value;
		name = prompt('Pick a name to save to (localStorage)', name);
		if (name) {
			data.data.name = name;
			save(name);
		}
	}

	function saveSimply() {
		var name = data.get('name').value;
		if (name) {
			save(name);
		} else {
			saveAs(name);
		}
	}

	function exportJSON() {
		var json = data.getJSONString();
		var ret = prompt('Hit OK to download otherwise Copy and Paste JSON', json);

		console.log(JSON.stringify(data.data, null, '\t'));
		if (!ret) return;

		// make json downloadable
		json = data.getJSONString('\t');
		var fileName = 'timeliner-test' + '.json';

		saveToFile(json, fileName);
	}

	function loadJSONString(o) {
		// should catch and check errors here
		var json = JSON.parse(o);
		load(json);
	}

	function load(o) {
		data.setJSON(o);
		//
		if (data.getValue('ui') === undefined) {
			data.setValue('ui', {
				currentTime: 0,
				totalTime: Settings.default_length,
				scrollTime: 0,
				timeScale: Settings.time_scale
			});
		}

		undo_manager.clear();
		undo_manager.save(new UndoState(data, 'Loaded'), true);

		updateState();
	}

	function updateState() {
		layers = layer_store.value; // FIXME: support Arrays
		layer_panel.setState(layer_store);
		timeline.setState(layer_store);

		repaintAll();
	}

	function repaintAll() {
		var content_height = layers.length * Settings.LINE_HEIGHT;
		scrollbar.setLength(Settings.TIMELINE_SCROLL_HEIGHT / content_height);

		layer_panel.repaint();
		timeline.repaint();
	}

	function promptImport() {
		var json = prompt('Paste JSON in here to Load');
		if (!json) return;
		console.log('Loading.. ', json);
		loadJSONString(json);
	}

	function open(title) {
		if (title) {
			loadJSONString(localStorage[STORAGE_PREFIX + title]);
		}
	}

	this.openLocalSave = open;

	dispatcher.on('import', function() {
		promptImport();
	}.bind(this));

	dispatcher.on('new', function() {
		data.blank();
		updateState();
	});

	dispatcher.on('openfile', function() {
		openAs(function(data) {
			// console.log('loaded ' + data);
			loadJSONString(data);
		}, div);
	});

	dispatcher.on('open', open);
	dispatcher.on('export', exportJSON);

	dispatcher.on('save', saveSimply);
	dispatcher.on('save_as', saveAs);

	// Expose API
	this.save = save;
	this.load = load;

	/*
		Start DOM Stuff (should separate file)
	*/

	var div = document.createElement('div');
	div.style.cssText = 'position: absolute;';
	div.style.top = '22px';

	var pane = document.createElement('div');

	style(pane, {
		position: 'fixed',
		top: '20px',
		left: '20px',
		margin: 0,
		border: '1px solid ' + Theme.a,
		padding: 0,
		overflow: 'hidden',
		backgroundColor: Theme.a,
		color: Theme.d,
		zIndex: Z_INDEX,
		fontFamily: 'monospace',
		fontSize: '12px'
	});


	var header_styles = {
		position: 'absolute',
		top: '0px',
		width: '100%',
		height: '22px',
		lineHeight: '22px',
		overflow: 'hidden'
	};

	var button_styles = {
		width: '20px',
		height: '20px',
		padding: '2px',
		marginRight: '2px'
	};

	var pane_title = document.createElement('div');
	style(pane_title, header_styles, {
		borderBottom: '1px solid ' + Theme.b,
		textAlign: 'center'
	});

	var title_bar = document.createElement('span');
	pane_title.appendChild(title_bar);

	title_bar.innerHTML = 'Timeliner ' + package_json.version;
	pane_title.appendChild(title_bar);

	var top_right_bar = document.createElement('div');
	style(top_right_bar, header_styles, {
		textAlign: 'right'
	});

	pane_title.appendChild(top_right_bar);

	// resize minimize
	// var resize_small = new IconButton(10, 'resize_small', 'minimize', dispatcher);
	// top_right_bar.appendChild(resize_small.dom);

	// resize full
	var resize_full = new IconButton(10, 'resize_full', 'maximize', dispatcher);
	style(resize_full.dom, button_styles, { marginRight: '2px' });
	top_right_bar.appendChild(resize_full.dom);

	var pane_status = document.createElement('div');

	var footer_styles = {
		position: 'absolute',
		width: '100%',
		height: '22px',
		lineHeight: '22px',
		bottom: '0',
		// padding: '2px',
		background: Theme.a,
		fontSize: '11px'
	};

	style(pane_status, footer_styles, {
		borderTop: '1px solid ' + Theme.b,
	});

	pane.appendChild(div);
	pane.appendChild(pane_status);
	pane.appendChild(pane_title);

	var label_status = document.createElement('span');
	label_status.textContent = 'hello!';
	label_status.style.marginLeft = '10px';

	this.setStatus = function(text) {
		label_status.textContent = text;
	};

	dispatcher.on('state:save', function(description) {
		dispatcher.fire('status', description);
		save('autosave');
	});

	dispatcher.on('status', this.setStatus);

	var bottom_right = document.createElement('div');
	style(bottom_right, footer_styles, {
		textAlign: 'right'
	});


	// var button_save = document.createElement('button');
	// style(button_save, button_styles);
	// button_save.textContent = 'Save';
	// button_save.onclick = function() {
	// 	save();
	// };

	// var button_load = document.createElement('button');
	// style(button_load, button_styles);
	// button_load.textContent = 'Import';
	// button_load.onclick = this.promptLoad;

	// var button_open = document.createElement('button');
	// style(button_open, button_styles);
	// button_open.textContent = 'Open';
	// button_open.onclick = this.promptOpen;


	// bottom_right.appendChild(button_load);
	// bottom_right.appendChild(button_save);
	// bottom_right.appendChild(button_open);

	pane_status.appendChild(label_status);
	pane_status.appendChild(bottom_right);


	/**/
	// zoom in
	var zoom_in = new IconButton(12, 'zoom_in', 'zoom in', dispatcher);
	// zoom out
	var zoom_out = new IconButton(12, 'zoom_out', 'zoom out', dispatcher);
	// settings
	var cog = new IconButton(12, 'cog', 'settings', dispatcher);

	// bottom_right.appendChild(zoom_in.dom);
	// bottom_right.appendChild(zoom_out.dom);
	// bottom_right.appendChild(cog.dom);

	// add layer
	var plus = new IconButton(12, 'plus', 'New Layer', dispatcher);
	plus.onClick(function() {
		var name = prompt('Layer name?');
		addLayer(name);

		undo_manager.save(new UndoState(data, 'Layer added'));

		repaintAll();
	});
	style(plus.dom, button_styles);
	bottom_right.appendChild(plus.dom);


	// trash
	var trash = new IconButton(12, 'trash', 'Delete save', dispatcher);
	trash.onClick(function() {
		var name = data.get('name').value;
		if (name && localStorage[STORAGE_PREFIX + name]) {
			var ok = confirm('Are you sure you wish to delete ' + name + '?');
			if (ok) {
				delete localStorage[STORAGE_PREFIX + name];
				dispatcher.fire('status', name + ' deleted');
				dispatcher.fire('save:done');
			}
		}
	});
	style(trash.dom, button_styles, { marginRight: '2px' });
	bottom_right.appendChild(trash.dom);


	// pane_status.appendChild(document.createTextNode(' | TODO <Dock Full | Dock Botton | Snap Window Edges | zoom in | zoom out | Settings | help>'));

	/*
			End DOM Stuff
	*/

	var ghostpane = document.createElement('div');
	ghostpane.id = 'ghostpane';
	style(ghostpane, {
		background: '#999',
		opacity: 0.2,
		position: 'fixed',
		margin: 0,
		padding: 0,
		zIndex: (Z_INDEX - 1),
		// transition: 'all 0.25s ease-in-out',
		transitionProperty: 'top, left, width, height, opacity',
 		transitionDuration: '0.25s',
		transitionTimingFunction: 'ease-in-out'
	});


	//
	// Handle DOM Views
	//

	// Shadow Root
	var root = document.createElement('timeliner');
	document.body.appendChild(root);
	if (root.createShadowRoot) root = root.createShadowRoot();

	window.r = root;

	// var iframe = document.createElement('iframe');
	// document.body.appendChild(iframe);
	// root = iframe.contentDocument.body;

	root.appendChild(pane);
	root.appendChild(ghostpane);

	div.appendChild(layer_panel.dom);
	div.appendChild(timeline.dom);

	var scrollbar = new ScrollBar(200, 10);
	div.appendChild(scrollbar.dom);

	// percentages
	scrollbar.onScroll.do(function(type, scrollTo) {
		switch(type) {
			case 'scrollto':
				layer_panel.scrollTo(scrollTo);
				timeline.scrollTo(scrollTo);
				break;
	//		case 'pageup':
	// 			scrollTop -= pageOffset;
	// 			me.draw();
	// 			me.updateScrollbar();
	// 			break;
	// 		case 'pagedown':
	// 			scrollTop += pageOffset;
	// 			me.draw();
	// 			me.updateScrollbar();
	// 			break;
		}
	});



	// document.addEventListener('keypress', function(e) {
	// 	console.log('kp', e);
	// });
	// document.addEventListener('keyup', function(e) {
	// 	if (undo) console.log('UNDO');

	// 	console.log('kd', e);
	// });

	// TODO: Keyboard Shortcuts
	// Esc - Stop and review to last played from / to the start?
	// Space - play / pause from current position
	// Enter - play all
	// k - keyframe

	document.addEventListener('keydown', function(e) {
		var play = e.keyCode == 32; // space
		var enter = e.keyCode == 13; //
		var undo = e.metaKey && e.keyCode == 91 && !e.shiftKey;

		var active = document.activeElement;
		// console.log( active.nodeName );

		if (active.nodeName.match(/(INPUT|BUTTON|SELECT|TIMELINER)/)) {
			active.blur();
		}

		if (play) {
			dispatcher.fire('controls.toggle_play');
		}
		else if (enter) {
			// FIXME: Return should play from the start or last played from?
			dispatcher.fire('controls.restart_play');
			// dispatcher.fire('controls.undo');
		}
		else if (e.keyCode == 27) {
			// Esc = stop. FIXME: should rewind head to last played from or Last pointed from?
			dispatcher.fire('controls.pause');
		}
		else console.log('keydown', e.keyCode);
	});

	var needsResize = true;

	function resize(width, height) {
		// data.get('ui:bounds').value = {
		// 	width: width,
		// 	height: height
		// };
		// TODO: remove ugly hardcodes
		width -= 4;
		height -= 44;

		Settings.width = width - Settings.LEFT_PANE_WIDTH;
		Settings.height = height;

		Settings.TIMELINE_SCROLL_HEIGHT = height - Settings.MARKER_TRACK_HEIGHT;
		var scrollable_height = Settings.TIMELINE_SCROLL_HEIGHT;

		scrollbar.setHeight(scrollable_height - 2);
		// scrollbar.setThumb

		style(scrollbar.dom, {
			top: Settings.MARKER_TRACK_HEIGHT + 'px',
			left: (width - 16) + 'px',
		});

		needsResize = true;
	}

	function restyle(left, right) {
		left.style.cssText = 'position: absolute; left: 0px; top: 0px; height: ' + Settings.height + 'px;';
		style(left, {
			// background: Theme.a,
			overflow: 'hidden'
		});
		left.style.width = Settings.LEFT_PANE_WIDTH + 'px';

		// right.style.cssText = 'position: absolute; top: 0px;';
		right.style.position = 'absolute';
		right.style.top = '0px';
		right.style.left = Settings.LEFT_PANE_WIDTH + 'px';
	}

	function addLayer(name) {
		var layer = new LayerProp(name);

		layers = layer_store.value;
		layers.push(layer);

		layer_panel.setState(layer_store);
	}

	this.addLayer = addLayer;

	this.setTarget = function(t) {
		timeline = t;
	};

	function getValueRanges(ranges, interval) {
		interval = interval ? interval : 0.15;
		ranges = ranges ? ranges : 2;

		// not optimized!
		var t = data.get('ui:currentTime').value;

		var values = [];

		for (var u = -ranges; u <= ranges; u++) {
			// if (u == 0) continue;
			var o = {};

			for (var l = 0; l < layers.length; l++) {
				var layer = layers[l];
				var m = utils.timeAtLayer(layer, t + u * interval);
				o[layer.name] = m.value;
			}

			values.push(o);

		}

		return values;
	}

	this.getValues = getValueRanges;

	(function DockingWindow() {
		"use strict";

		// Minimum resizable area
		var minWidth = 100;
		var minHeight = 80;

		// Thresholds
		var FULLSCREEN_MARGINS = 2;
		var SNAP_MARGINS = 8;
		var MARGINS = 2;

		// End of what's configurable.

		var clicked = null;
		var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;

		var preSnapped;

		var b, x, y;

		var redraw = false;

		// var pane = document.getElementById('pane');
		// var ghostpane = document.getElementById('ghostpane');

		var mouseOnTitle = false;
		var snapType;

		pane_title.addEventListener('mouseover', function() {
			mouseOnTitle = true;
		});

		pane_title.addEventListener('mouseout', function() {
			mouseOnTitle = false;
		});

		resize_full.onClick(function() {
			// TOOD toggle back to restored size
			if (!preSnapped) preSnapped = {
				width: b.width,
				height: b.height
			};

			snapType = 'full-screen';
			resizeEdges();
		});

		// pane_status.addEventListener('mouseover', function() {
		// 	mouseOnTitle = true;
		// });

		// pane_status.addEventListener('mouseout', function() {
		// 	mouseOnTitle = false;
		// });

		window.addEventListener('resize', function() {
			if (snapType)
				resizeEdges();
			else
				needsResize = true;
		});

		// utils
		function setBounds(element, x, y, w, h) {
			element.style.left = x + 'px';
			element.style.top = y + 'px';
			element.style.width = w + 'px';
			element.style.height = h + 'px';

			if (element === pane) {
				resize(w, h);
			}
		}

		function hintHide() {
			setBounds(ghostpane, b.left, b.top, b.width, b.height);
			ghostpane.style.opacity = 0;
		}

		setBounds(pane, 0, 0, Settings.width, Settings.height);
		setBounds(ghostpane, 0, 0, Settings.width, Settings.height);

		// Mouse events
		pane.addEventListener('mousedown', onMouseDown);
		document.addEventListener('mousemove', onMove);
		document.addEventListener('mouseup', onUp);

		// Touch events
		pane.addEventListener('touchstart', onTouchDown);
		document.addEventListener('touchmove', onTouchMove);
		document.addEventListener('touchend', onTouchEnd);


		function onTouchDown(e) {
			onDown(e.touches[0]);
			e.preventDefault();
		}

		function onTouchMove(e) {
			onMove(e.touches[0]);
		}

		function onTouchEnd(e) {
			if (e.touches.length == 0) onUp(e.changedTouches[0]);
		}

		function onMouseDown(e) {
			onDown(e);
		}

		function onDown(e) {
			calc(e);

			var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;
			var isMoving = !isResizing && canMove();

			clicked = {
				x: x,
				y: y,
				cx: e.clientX,
				cy: e.clientY,
				w: b.width,
				h: b.height,
				isResizing: isResizing,
				isMoving: isMoving,
				onTopEdge: onTopEdge,
				onLeftEdge: onLeftEdge,
				onRightEdge: onRightEdge,
				onBottomEdge: onBottomEdge
			};

			if (isResizing || isMoving) {
				e.preventDefault();
				e.stopPropagation();
			}
		}

		function canMove() {
			return mouseOnTitle;
			// return x > 0 && x < b.width && y > 0 && y < b.height
			// && y < 18;
		}

		function calc(e) {
			b = pane.getBoundingClientRect();
			x = e.clientX - b.left;
			y = e.clientY - b.top;

			onTopEdge = y < MARGINS;
			onLeftEdge = x < MARGINS;
			onRightEdge = x >= b.width - MARGINS;
			onBottomEdge = y >= b.height - MARGINS;
		}

		var e; // current mousemove event

		function onMove(ee) {
			e = ee;
			calc(e);

			redraw = true;
		}

		function animate() {

			requestAnimationFrame(animate);

			if (!redraw) return;

			redraw = false;

			if (clicked && clicked.isResizing) {

				if (clicked.onRightEdge) pane.style.width = Math.max(x, minWidth) + 'px';
				if (clicked.onBottomEdge) pane.style.height = Math.max(y, minHeight) + 'px';

				if (clicked.onLeftEdge) {
					var currentWidth = Math.max(clicked.cx - e.clientX  + clicked.w, minWidth);
					if (currentWidth > minWidth) {
						pane.style.width = currentWidth + 'px';
						pane.style.left = e.clientX + 'px';
					}
				}

				if (clicked.onTopEdge) {
					var currentHeight = Math.max(clicked.cy - e.clientY  + clicked.h, minHeight);
					if (currentHeight > minHeight) {
						pane.style.height = currentHeight + 'px';
						pane.style.top = e.clientY + 'px';
					}
				}

				hintHide();

				resize(b.width, b.height);

				return;
			}

			if (clicked && clicked.isMoving) {

				switch(checks()) {
					case 'full-screen':
						setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight);
						ghostpane.style.opacity = 0.2;
						break;
					case 'snap-top-edge':
						setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight / 2);
						ghostpane.style.opacity = 0.2;
						break;
					case 'snap-left-edge':
						setBounds(ghostpane, 0, 0, window.innerWidth / 2, window.innerHeight);
						ghostpane.style.opacity = 0.2;
						break;
					case 'snap-right-edge':
						setBounds(ghostpane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
						ghostpane.style.opacity = 0.2;
						break;
					case 'snap-bottom-edge':
						setBounds(ghostpane, 0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2);
						ghostpane.style.opacity = 0.2;
						break;
					default:
						hintHide();
				}

				if (preSnapped) {
					setBounds(pane,
						e.clientX - preSnapped.width / 2,
						e.clientY - Math.min(clicked.y, preSnapped.height),
						preSnapped.width,
						preSnapped.height
					);
					return;
				}

				// moving
				pane.style.top = (e.clientY - clicked.y) + 'px';
				pane.style.left = (e.clientX - clicked.x) + 'px';

				return;
			}

			// This code executes when mouse moves without clicking

			// style cursor
			if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
				pane.style.cursor = 'nwse-resize';
			} else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
				pane.style.cursor = 'nesw-resize';
			} else if (onRightEdge || onLeftEdge) {
				pane.style.cursor = 'ew-resize';
			} else if (onBottomEdge || onTopEdge) {
				pane.style.cursor = 'ns-resize';
			} else if (canMove()) {
				pane.style.cursor = 'move';
			} else {
				pane.style.cursor = 'default';
			}
		}

		function checks() {
			/*
			var rightScreenEdge, bottomScreenEdge;

			rightScreenEdge = window.innerWidth - MARGINS;
			bottomScreenEdge = window.innerHeight - MARGINS;

			// Edge Checkings
			// hintFull();
			if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS)
				return 'full-screen';

			// hintTop();
			if (b.top < MARGINS) return 'snap-top-edge';

			// hintLeft();
			if (b.left < MARGINS) return 'snap-left-edge';

			// hintRight();
			if (b.right > rightScreenEdge) return 'snap-right-edge';

			// hintBottom();
			if (b.bottom > bottomScreenEdge) return 'snap-bottom-edge';
			*/

			if (e.clientY < FULLSCREEN_MARGINS) return 'full-screen';

			if (e.clientY < SNAP_MARGINS) return 'snap-top-edge';

			// hintLeft();
			if (e.clientX < SNAP_MARGINS) return 'snap-left-edge';

			// hintRight();
			if (window.innerWidth - e.clientX < SNAP_MARGINS) return 'snap-right-edge';

			// hintBottom();
			if (window.innerHeight- e.clientY < SNAP_MARGINS) return 'snap-bottom-edge';

		}

		animate();

		function resizeEdges() {
			switch(snapType) {
				case 'full-screen':
					// hintFull();
					setBounds(pane, 0, 0, window.innerWidth, window.innerHeight);
					break;
				case 'snap-top-edge':
					// hintTop();
					setBounds(pane, 0, 0, window.innerWidth, window.innerHeight / 2);
					break;
				case 'snap-left-edge':
					// hintLeft();
					setBounds(pane, 0, 0, window.innerWidth / 2, window.innerHeight);
					break;
				case 'snap-right-edge':
					setBounds(pane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
					break;
				case 'snap-bottom-edge':
					setBounds(pane, 0, window.innerHeight / 2, window.innerWidth, window.innerHeight / 2);
					break;
			}
		}

		function onUp(e) {
			calc(e);

			if (clicked && clicked.isMoving) {
				// Snap
				snapType = checks();
				if (snapType) {
					preSnapped = {
						width: b.width,
						height: b.height
					};
					resizeEdges();
				} else {
					preSnapped = null;
				}

				hintHide();

			}

			clicked = null;

		}
	})();

}

window.Timeliner = Timeliner;

},{"../package.json":2,"./settings":4,"./theme":5,"./ui_icon_button":8,"./ui_scrollbar":10,"./util_datastore":11,"./util_dispatcher":12,"./util_undo":15,"./utils":16,"./view_layer_cabinet":18,"./view_panel":19}],7:[function(require,module,exports){
var handleDrag = require('./util_handle_drag');

function Canvas(w, h) {

	var canvas, ctx, width, height, dpr;

	var canvasItems = [];
	var child;

	function create() {
		canvas = document.createElement('canvas');
		ctx = canvas.getContext('2d');
	}

	function setSize(w, h) {
		width = w;
		height = h;
		dpr = window.devicePixelRatio;
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = width + 'px';
		canvas.style.height = height + 'px';

		if (child) child.setSize(w, h);
	}

	function paint(ctx) {
		if (child) {
			if (!child.paint) console.warn('implement repaint()')
			child.paint(ctx);
		}

		var item;
		for (var i = 0; i < canvasItems.length; i++) {
			item = canvasItems[i];
			item.paint()
		}
	}

	function repaint() {
		paint(ctx);
	}

	function add(item) {
		canvasItems.push(item)
	}

	function remove(item) {
		canvasItems.splice(canvasItems.indexOf(item), 1);
	}

	function uses(c) {
		child = c;
		child.add = this.add;
		child.remove = this.remove;
	}

	create();
	setSize(w, h);
	this.setSize = setSize;
	this.repaint = repaint;
	this.uses = uses;

	this.dom = canvas;

	handleDrag(canvas,
		function down(e) {
			if (child.onDown) { child.onDown(e) };
		},
		function move(e) {
			if (child.onMove) { child.onMove(e) };
		},
		function up(e) {
			if (child.onUp) { child.onUp(e) };
		}
		// function hit(e) {
		// 	if (child.onHit) { child.onHit(e) };
		// }
	);
}


module.exports = Canvas;

/*
 * Usage: canvas = new Canvas(width, height);
 * canvas.resize();
 */

// children
// 1: override repaint
// 2: add objects
// Canvas.uses(CanvasChild);
// CanvasItem
// width, height, x, y
// allow Drag
// allow Click
// mouseOver
// 


},{"./util_handle_drag":13}],8:[function(require,module,exports){
var font = require('./font.json'),
	Theme = require('./theme'),
	style = require('./utils').style;

var dp;

function IconButton(size, icon, tooltip, dp) {
	var iconStyle = {
		padding: '0.2em 0.4em',
		margin: '0em',
		background: 'none',
		outline: 'none',
		fontSize: '16px',
		border: 'none',
		borderRadius: '0.2em',
	};

	var button = document.createElement('button');
	style(button, iconStyle);

	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	button.appendChild(canvas);

	this.ctx = ctx;
	this.dom = button;
	this.canvas = canvas;

	var me = this;
	this.size = size;
	var dpr = 1;

	this.resize = function() {
		dpr = window.devicePixelRatio;
		var height = size;

		var glyph = font.fonts[icon];

		canvas.height = height * dpr;
		canvas.style.height = height + 'px';

		var scale = height / font.unitsPerEm;
		var width = glyph.advanceWidth * scale + 0.5 | 0;

		width += 2;
		height += 2;

		canvas.width = width * dpr;
		canvas.style.width = width + 'px';

		ctx.fillStyle = Theme.c;
		me.draw();
	};

	if (dp) dp.on('resize', this.resize);

	this.setSize = function(s) {
		size = s;
		this.resize();
	};

	this.setIcon = function(icon) {
		me.icon = icon;

		if (!font.fonts[icon]) console.warn('Font icon not found!');
		this.resize();
	};

	this.onClick = function(e) {
		button.addEventListener('click', e);
	};

	var LONG_HOLD_DURATION = 500;
	var longHoldTimer;

	this.onLongHold = function(f) {
		// not most elagent but oh wells.
		function startHold(e) {
			e.preventDefault();
			e.stopPropagation();
			longHoldTimer = setTimeout(function() {
				if (longHoldTimer) {
					console.log('LONG HOLD-ED!');
					f();
				}
			}, LONG_HOLD_DURATION);
		}

		function clearLongHoldTimer() {
			clearTimeout(longHoldTimer);
		}
		
		button.addEventListener('mousedown', startHold);
		button.addEventListener('touchstart', startHold);
		button.addEventListener('mouseup', clearLongHoldTimer);
		button.addEventListener('mouseout', clearLongHoldTimer);
		button.addEventListener('touchend', clearLongHoldTimer);
	};

	this.setTip = function(tip) {
		tooltip = tip;
	};

	var borders = {
		border: '1px solid ' + Theme.b,
		// boxShadow: Theme.b + ' 1px 1px'
	};

	var no_borders = {
		border: '1px solid transparent',
		// boxShadow: 'none'
	};

	var normal = 'none'; // Theme.b;
	var up = Theme.c;
	var down = Theme.b;

	button.style.background = normal;
	style(button, no_borders);

	button.addEventListener('mouseover', function() {
		// button.style.background = up;
		style(button, borders);
		
		ctx.fillStyle = Theme.d;
		// me.dropshadow = true;
		ctx.shadowColor = Theme.b;
		ctx.shadowBlur = 0.5 * dpr;
		ctx.shadowOffsetX = 1 * dpr;
		ctx.shadowOffsetY = 1 * dpr;
		me.draw();

		if (tooltip && dp) dp.fire('status', 'button: ' + tooltip);
	});

	button.addEventListener('mousedown', function() {
		button.style.background = down;
		// ctx.fillStyle = Theme.b;
		// me.draw();
	});

	button.addEventListener('mouseup', function() {
		// ctx.fillStyle = Theme.d;
		button.style.background = normal;
		style(button, borders);
		// me.draw();
	});

	button.addEventListener('mouseout', function() {
		// ctx.fillStyle = Theme.c;
		

		button.style.background = normal;
		style(button, no_borders);
		me.dropshadow = false;
		ctx.fillStyle = Theme.c;
		ctx.shadowColor = null;
		ctx.shadowBlur = 0;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		me.draw();
	});

	if (icon) this.setIcon(icon);
}

IconButton.prototype.CMD_MAP = {
	M: 'moveTo',
	L: 'lineTo',
	Q: 'quadraticCurveTo',
	C: 'bezierCurveTo',
	Z: 'closePath'
};

IconButton.prototype.draw = function() {
	if (!this.icon) return;

	var ctx = this.ctx;

	var glyph = font.fonts[this.icon];

	var height = this.size;
	var dpr = window.devicePixelRatio;
	var scale = height / font.unitsPerEm * dpr;
	var path_commands =  glyph.commands.split(' ');

	ctx.save();
	ctx.clearRect(0, 0, this.canvas.width * dpr, this.canvas.height * dpr);

	if (this.dropshadow) {
		ctx.save();
		ctx.fillStyle = Theme.b;
		ctx.translate(1.5 * dpr, 1.5 * dpr);
		ctx.scale(scale, -scale);
		ctx.translate(0 , -font.ascender);
		ctx.beginPath();

		for (var i = 0, il = path_commands.length; i < il; i++) {
			var cmds = path_commands[i].split(',');
			var params = cmds.slice(1);

			ctx[this.CMD_MAP[cmds[0]]].apply(ctx, params);
		}
		ctx.fill();
		ctx.restore();
	}

	ctx.scale(scale, -scale);
	ctx.translate(0, -font.ascender);
	ctx.beginPath();

	for (var i = 0, il = path_commands.length; i < il; i++) {
		var cmds = path_commands[i].split(',');
		var params = cmds.slice(1);

		ctx[this.CMD_MAP[cmds[0]]].apply(ctx, params);
	}
	ctx.fill();
	ctx.restore();

	/*
	var triangle = height / 3 * dpr;
	ctx.save();
	// ctx.translate(dpr * 2, 0);
	// ctx.fillRect(this.canvas.width - triangle, this.canvas.height - triangle, triangle, triangle);
	ctx.beginPath();
	ctx.moveTo(this.canvas.width - triangle, this.canvas.height - triangle / 2);
	ctx.lineTo(this.canvas.width, this.canvas.height - triangle / 2);
	ctx.lineTo(this.canvas.width - triangle / 2, this.canvas.height);
	ctx.fill();
	ctx.restore();
	*/
};

module.exports = IconButton;
},{"./font.json":3,"./theme":5,"./utils":16}],9:[function(require,module,exports){
var Theme = require('./theme'),
	Do = require('do.js'),
	handleDrag = require('./util_handle_drag'),
	style = require('./utils').style,
	firstDefined = require('./utils').firstDefined
	;

/**************************/
// NumberUI
/**************************/

function NumberUI(config) {
	config = config || {};
	var min = config.min === undefined ? -Infinity : config.min;

	// config.xstep and config.ystep allow configuring adjustment
	// speed across each axis.
	// config.wheelStep and config.wheelStepFine allow configuring
	// adjustment speed for mousewheel, and mousewheel while holding <alt>

	// If only config.step is specified, all other adjustment speeds
	// are set to the same value.
	var xstep = firstDefined(config.xstep, config.step, 0.001);
	var ystep = firstDefined(config.ystep, config.step, 0.1);
	var wheelStep = firstDefined(config.wheelStep, ystep);
	var wheelStepFine = firstDefined(config.wheelStepFine, xstep);

	var precision = config.precision || 3;
	// Range
	// Max

	var span = document.createElement('input');
	// span.type = 'number'; // spinner
	
	style(span, {
		textAlign: 'center',
		fontSize: '10px',
		padding: '1px',
		cursor: 'ns-resize',
		width: '40px',
		margin: 0,
		marginRight: '10px',
		appearance: 'none',
		outline: 'none',
		border: 0,
		background: 'none',
		borderBottom: '1px dotted '+ Theme.c,
		color: Theme.c
	});

	var me = this;
	var state, value = 0, unchanged_value;

	this.onChange = new Do();

	span.addEventListener('change', function(e) {
		console.log('input changed', span.value);
		value = parseFloat(span.value, 10);

		fireChange();
	});

	// Allow keydown presses in inputs, don't allow parent to block them
	span.addEventListener('keydown', function(e) {
		e.stopPropagation();
	})

	span.addEventListener('focus', function(e) {
		span.setSelectionRange(0, span.value.length);
	})

	span.addEventListener('wheel', function(e) {
		// Disregard pixel/line/page scrolling and just
		// use event direction.
		var inc = e.deltaY > 0? 1 : -1;
		if(e.altKey) {
			inc *= wheelStepFine;
		} else {
			inc *= wheelStep;
		}
		value = clamp(value + inc);
		fireChange();
	})

	handleDrag(span, onDown, onMove, onUp);

	function clamp(value) {
		return Math.max(min, value);
	}

	function onUp(e) {
		if (e.moved) fireChange();
		else {
			// single click
			span.focus();
		}
	}

	function onMove(e) {
		var dx = e.dx;
		var dy = e.dy;
	
		value = unchanged_value + (dx * xstep) + (dy * -ystep);

		value = clamp(value);

		// value = +value.toFixed(precision); // or toFixed toPrecision
		me.onChange.fire(value, true);
	}

	function onDown(e) {
		unchanged_value = value;
	}

	function fireChange() {
		me.onChange.fire(value);
	}

	this.dom = span;

	// public
	this.setValue = function(v) {
		value = v;
		span.value = value.toFixed(precision);
	};

	this.paint = function() {
		if (value && document.activeElement !== span) {
			span.value = value.toFixed(precision);
		}
	};
}

module.exports = NumberUI;

},{"./theme":5,"./util_handle_drag":13,"./utils":16,"do.js":1}],10:[function(require,module,exports){
var SimpleEvent = require('do.js');
var utils = require('./utils');

// ********** class: ScrollBar ****************** //
/*
	Simple UI widget that displays a scrolltrack 
	and slider, that fires some scroll events
*/
// ***********************************************

var scrolltrack_style = {
	// float: 'right',
	position: 'absolute',
	// right: '0',
	// top: '0',
	// bottom: '0',
	background: '-webkit-gradient(linear, left top, right top, color-stop(0, rgb(29,29,29)), color-stop(0.6, rgb(50,50,50)) )',
	border: '1px solid rgb(29, 29, 29)',
	// zIndex: '1000',
	textAlign: 'center',
	cursor: 'pointer'
};

var scrollbar_style = {
	background: '-webkit-gradient(linear, left top, right top, color-stop(0.2, rgb(88,88,88)), color-stop(0.6, rgb(64,64,64)) )',
	border: '1px solid rgb(25,25,25)',
	// position: 'absolute',
	position: 'relative',
	borderRadius: '6px'
};

function ScrollBar(h, w, dispatcher) {

	var SCROLLBAR_WIDTH = w ? w : 12;
	var SCROLLBAR_MARGIN = 3;
	var SCROLL_WIDTH = SCROLLBAR_WIDTH + SCROLLBAR_MARGIN * 2;
	var MIN_BAR_LENGTH = 25;

	var scrolltrack = document.createElement('div');
	utils.style(scrolltrack, scrolltrack_style);

	var scrolltrackHeight = h - 2;
	scrolltrack.style.height = scrolltrackHeight + 'px';
	scrolltrack.style.width = SCROLL_WIDTH + 'px';;

	// var scrollTop = 0;
	var scrollbar = document.createElement('div');
	// scrollbar.className = 'scrollbar';
	utils.style(scrollbar, scrollbar_style);
	scrollbar.style.width = SCROLLBAR_WIDTH + 'px';
	scrollbar.style.height = h / 2;
	scrollbar.style.top = 0;
	scrollbar.style.left = SCROLLBAR_MARGIN + 'px'; // 0; //S

	scrolltrack.appendChild(scrollbar);

	var me = this;

	var bar_length, bar_y;

	// Sets lengths of scrollbar by percentage
	this.setLength = function(l) {
		// limit 0..1
		l = Math.max(Math.min(1, l), 0);
		l *= scrolltrackHeight;
		bar_length = Math.max(l, MIN_BAR_LENGTH);
		scrollbar.style.height = bar_length + 'px';
	};

	this.setHeight = function(height) {
		h = height;

		scrolltrackHeight = h - 2;
		scrolltrack.style.height = scrolltrackHeight + 'px' ;
	};

	// Moves scrollbar to position by Percentage
	this.setPosition = function(p) {
		p = Math.max(Math.min(1, p), 0);
		var emptyTrack = scrolltrackHeight - bar_length;
		bar_y = p * emptyTrack;
		scrollbar.style.top = bar_y + 'px';
	};

	this.setLength(1);
	this.setPosition(0);
	this.onScroll = new SimpleEvent();

	var mouse_down_grip;

	function onDown(event) {
		event.preventDefault();

		if (event.target == scrollbar) {
			mouse_down_grip = event.clientY;
			document.addEventListener('mousemove', onMove, false);
			document.addEventListener('mouseup', onUp, false);
		} else {
			if (event.clientY < bar_y) {
				me.onScroll.fire('pageup');
			} else if (event.clientY > (bar_y + bar_length)) {
				me.onScroll.fire('pagedown');
			}
			// if want to drag scroller to empty track instead
			// me.setPosition(event.clientY / (scrolltrackHeight - 1));
		}
	}

	function onMove(event) {
		event.preventDefault();

		// event.target == scrollbar
		var emptyTrack = scrolltrackHeight - bar_length;
		var scrollto = (event.clientY - mouse_down_grip) / emptyTrack;

		// clamp limits to 0..1
		if (scrollto > 1) scrollto = 1;
		if (scrollto < 0) scrollto = 0;
		me.setPosition(scrollto);
		me.onScroll.fire('scrollto', scrollto);
	}

	function onUp(event) {
		onMove(event);
		document.removeEventListener('mousemove', onMove, false);
		document.removeEventListener('mouseup', onUp, false);
	}

	scrolltrack.addEventListener('mousedown', onDown, false);
	this.dom = scrolltrack;

}

module.exports = ScrollBar;
},{"./utils":16,"do.js":1}],11:[function(require,module,exports){
var package_json = require('../package.json'),
	Settings = require('./settings'),
	Do = require('do.js');

// Data Store with a source of truth
function DataStore() {
	this.DELIMITER = ':';
	this.blank();
	this.onOpen = new Do();
	this.onSave = new Do();

	this.listeners = [];
}

DataStore.prototype.addListener = function(path, cb) {
	this.listeners.push({
		path: path,
		callback: cb
	});
};

DataStore.prototype.blank = function() {
	var data = {};

	data.version = package_json.version;
	data.modified = new Date().toString();
	data.title = 'Untitled';

	data.ui = {
		currentTime: 0,
		totalTime: Settings.default_length,
		scrollTime: 0,
		timeScale: Settings.time_scale
	};

	data.layers = [];

	this.data = data;
};

DataStore.prototype.update = function() {
	var data = this.data;

	data.version = package_json.version;
	data.modified = new Date().toString();
};

DataStore.prototype.setJSONString = function(data) {
	this.data = JSON.parse(data);
};

DataStore.prototype.setJSON = function(data) {
	this.data = data;
};

DataStore.prototype.getJSONString = function(format) {
	return JSON.stringify(this.data, null, format);
};

DataStore.prototype.getValue = function(paths) {
	var descend = paths.split(this.DELIMITER);
	var reference = this.data;
	for (var i = 0, il = descend.length; i < il; i++) {
		var path = descend[i];
		if (reference[path] === undefined) {
			console.warn('Cant find ' + paths);
			return;
		}
		reference = reference[path];
	}
	return reference;
};

DataStore.prototype.setValue = function(paths, value) {
	var descend = paths.split(this.DELIMITER);
	var reference = this.data;
	for (var i = 0, il = descend.length - 1; path = descend[i], i < il ; i++) {
		reference = reference[path];
	}

	reference[path] = value;

	this.listeners.forEach(function(l) {
		if (paths.indexOf(l.path) > -1) l.callback();
	})
};

DataStore.prototype.get = function(path, suffix) {
	if (suffix) path = suffix + this.DELIMITER + path;
	return new DataProx(this, path);
};

function DataProx(store, path) {
	this.path = path;
	this.store = store;
}

DataProx.prototype = {
	get value() {
		return this.store.getValue(this.path);
	},
	set value(val) {
		this.store.setValue(this.path, val);
	}
};

DataProx.prototype.get = function(path) {
	return this.store.get(path, this.path);
};

module.exports = DataStore;

},{"../package.json":2,"./settings":4,"do.js":1}],12:[function(require,module,exports){
/**************************/
// Dispatcher
/**************************/

function Dispatcher() {

	var event_listeners = {

	};

	function on(type, listener) {
		if (!(type in event_listeners)) {
			event_listeners[type] = [];
		}
		var listeners = event_listeners[type];
		listeners.push(listener);
	}

	function fire(type) {
		var args = Array.prototype.slice.call(arguments);
		args.shift();
		var listeners = event_listeners[type];
		if (!listeners) return;
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			listener.apply(listener, args);
		}
	}

	this.on = on;
	this.fire = fire;

}

module.exports = Dispatcher;
},{}],13:[function(require,module,exports){
function handleDrag(element, ondown, onmove, onup, down_criteria) {
	var pointer = null;
	var bounds = element.getBoundingClientRect();
	
	element.addEventListener('mousedown', onMouseDown);

	function onMouseDown(e) {
		handleStart(e);

		if (down_criteria && !down_criteria(pointer)) {
			pointer = null;
			return;
		}

		
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		
		ondown(pointer);

		e.preventDefault();
	}
	
	function onMouseMove(e) {
		handleMove(e);
		onmove(pointer);
	}

	function handleStart(e) {
		bounds = element.getBoundingClientRect();
		var currentx = e.clientX, currenty = e.clientY;
		pointer = {
			startx: currentx,
			starty: currenty,
			x: currentx,
			y: currenty,
			dx: 0,
			dy: 0,
			offsetx: currentx - bounds.left,
			offsety: currenty - bounds.top,
			moved: false
		};
	}
	
	function handleMove(e) {
		bounds = element.getBoundingClientRect();
		var currentx = e.clientX,
		currenty = e.clientY,
		offsetx = currentx - bounds.left,
		offsety = currenty - bounds.top;
		pointer.x = currentx;
		pointer.y = currenty;
		pointer.dx = e.clientX - pointer.startx;
		pointer.dy = e.clientY - pointer.starty;
		pointer.offsetx = offsetx;
		pointer.offsety = offsety;

		// If the pointer dx/dy is _ever_ non-zero, then it's moved
		pointer.moved = pointer.moved || pointer.dx !== 0 || pointer.dy !== 0;
	}
	
	function onMouseUp(e) {
		handleMove(e);
		onup(pointer);
		pointer = null;
		
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}

	element.addEventListener('touchstart', onTouchStart);

	function onTouchStart(te) {
		
		if (te.touches.length == 1) {
			
			var e = te.touches[0];
			if (down_criteria && !down_criteria(e)) return;
			te.preventDefault();
			handleStart(e);
			ondown(pointer);
		}
		
		element.addEventListener('touchmove', onTouchMove);
		element.addEventListener('touchend', onTouchEnd);
	}
	
	function onTouchMove(te) {
		var e = te.touches[0];
		onMouseMove(e);
	}

	function onTouchEnd(e) {
		// var e = e.touches[0];
		onMouseUp(e);
		element.removeEventListener('touchmove', onTouchMove);
		element.removeEventListener('touchend', onTouchEnd);
	}


	this.release = function() {
		element.removeEventListener('mousedown', onMouseDown);
		element.removeEventListener('touchstart', onTouchStart);
	};
}

module.exports = handleDrag;

},{}],14:[function(require,module,exports){
/**************************/
// Tweens
/**************************/

var Tweens = {
	none: function(k) {
		return 0;
	},
	linear: function(k) {
		return k;
	},
	quadEaseIn: function(k) {
		return k * k;
	},
	quadEaseOut: function(k) {
		return - k * ( k - 2 );
	},
	quadEaseInOut: function(k) {
		if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
		return - 0.5 * ( --k * ( k - 2 ) - 1 );
	}
};

module.exports = Tweens;
},{}],15:[function(require,module,exports){
/**************************/
// Undo Manager
/**************************/

function UndoState(state, description) {
	// this.state = JSON.stringify(state);
	this.state = state.getJSONString();
	this.description = description;
}

function UndoManager(dispatcher, max) {
	this.dispatcher = dispatcher;
	this.MAX_ITEMS = max || 100;
	this.clear();
}

UndoManager.prototype.save = function(state, suppress) {
	var states = this.states;
	var next_index = this.index + 1;
	var to_remove = states.length - next_index;
	states.splice(next_index, to_remove, state);

	if (states.length > this.MAX_ITEMS) {
		states.shift();
	}

	this.index = states.length - 1;

	// console.log('Undo State Saved: ', state.description);
	if (!suppress) this.dispatcher.fire('state:save', state.description);
};

UndoManager.prototype.clear = function() {
	this.states = [];
	this.index = -1;
	// FIXME: leave default state or always leave one state?
};

UndoManager.prototype.canUndo = function() {
	return this.index > 0;
	// && this.states.length > 1
};

UndoManager.prototype.canRedo = function() {
	return this.index < this.states.length - 1;
};

UndoManager.prototype.undo = function() {
	if (this.canUndo()) {
		this.dispatcher.fire('status', 'Undo: ' + this.get().description);
		this.index--;
	} else {
		this.dispatcher.fire('status', 'Nothing to undo');
	}

	return this.get();
};

UndoManager.prototype.redo = function() {
	if (this.canRedo()) {
		this.index++;
		this.dispatcher.fire('status', 'Redo: ' + this.get().description);
	} else {
		this.dispatcher.fire('status', 'Nothing to redo');
	}

	return this.get();
};

UndoManager.prototype.get = function() {
	return this.states[this.index];
};

module.exports = {
	UndoState: UndoState,
	UndoManager: UndoManager
};
},{}],16:[function(require,module,exports){
var
	Tweens = require('./util_tween');

module.exports = {
	STORAGE_PREFIX: 'timeliner-',
	Z_INDEX: 999,
	firstDefined: firstDefined,
	style: style,
	saveToFile: saveToFile,
	openAs: openAs,
	format_friendly_seconds: format_friendly_seconds,
	findTimeinLayer: findTimeinLayer,
	timeAtLayer: timeAtLayer,
	proxy_ctx: proxy_ctx
};

/**************************/
// Utils
/**************************/

function firstDefined() {
	for(var i = 0; i < arguments.length; i++) {
		if(typeof arguments[i] !== 'undefined') {
			return arguments[i];
		}
	}
	return undefined;
}

function style(element, var_args) {
	for (var i = 1; i < arguments.length; ++i) {
		var styles = arguments[i];
		for (var s in styles) {
			element.style[s] = styles[s];
		}
	}
}

function saveToFile(string, filename) {
	var a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";

	var blob = new Blob([string], { type: 'octet/stream' }), // application/json
		url = window.URL.createObjectURL(blob);
	
	a.href = url;
	a.download = filename;

	fakeClick(a);

	setTimeout(function() {
		// cleanup and revoke
		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);
	}, 500);
}



var input, openCallback;

function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	console.log('handle file select', files.length);

	var f = files[0];
	if (!f) return;
	// Can try to do MINE match
	// if (!f.type.match('application/json')) {
	//   return;
	// }
	console.log('match', f.type);

	var reader = new FileReader();

	// Closure to capture the file information.
	reader.onload = function(e) {
		var data = e.target.result;
		openCallback(data);
	};
	
	reader.readAsText(f);

	input.value = '';
}


function openAs(callback, target) {
	console.log('openfile...');
	openCallback = callback;

	if (!input) {
		input = document.createElement('input');
		input.style.display = 'none';
		input.type = 'file';
		input.addEventListener('change', handleFileSelect);
		target = target || document.body;
		target.appendChild(input);
	}
	
	fakeClick(input);
}

function fakeClick(target) {
	var e = document.createEvent("MouseEvents");
	e.initMouseEvent(
		'click', true, false, window, 0, 0, 0, 0, 0,
		false, false, false, false, 0, null
	);
	target.dispatchEvent(e);
}

function format_friendly_seconds(s, type) {
	// TODO Refactor to 60fps???
	// 20 mins * 60 sec = 1080 
	// 1080s * 60fps = 1080 * 60 < Number.MAX_SAFE_INTEGER

	var raw_secs = s | 0;
	var secs_micro = s % 60;
	var secs = raw_secs % 60;
	var raw_mins = raw_secs / 60 | 0;
	var mins = raw_mins % 60;
	var hours = raw_mins / 60 | 0;

	var secs_str = (secs / 100).toFixed(2).substring(2);

	var str = mins + ':' + secs_str;

	if (s % 1 > 0) {
		var t2 = (s % 1) * 60;
		if (type === 'frames') str = secs + '+' + t2.toFixed(0) + 'f';
		else str += ((s % 1).toFixed(2)).substring(1);
		// else str = mins + ':' + secs_micro;
		// else str = secs_micro + 's'; /// .toFixed(2)
	}
	return str;	
}

// get object at time
function findTimeinLayer(layer, time) {
	var values = layer.values;
	var i, il;

	// TODO optimize by checking time / binary search

	for (i=0, il=values.length; i<il; i++) {
		var value = values[i];
		if (value.time === time) {
			return {
				index: i,
				object: value
			};
		} else if (value.time > time) {
			return i;
		}
	}

	return i;
}


function timeAtLayer(layer, t) {
	// Find the value of layer at t seconds.
	// this expect layer to be sorted
	// not the most optimized for now, but would do.

	var values = layer.values;
	var i, il, entry, prev_entry;

	il = values.length;

	// can't do anything
	if (il === 0) return;

	if (layer._mute) return

	// find boundary cases
	entry = values[0];
	if (t < entry.time) {
		return {
			value: entry.value,
			can_tween: false, // cannot tween
			keyframe: false // not on keyframe
		};
	}

	for (i=0; i<il; i++) {
		prev_entry = entry;
		entry = values[i];

		if (t === entry.time) {
			// only exception is on the last KF, where we display tween from prev entry
			if (i === il - 1) {
				return {
					// index: i,
					entry: prev_entry,
					tween: prev_entry.tween,
					can_tween: il > 1,
					value: entry.value,
					keyframe: true
				};
			}
			return {
				// index: i,
				entry: entry,
				tween: entry.tween,
				can_tween: il > 1,
				value: entry.value,
				keyframe: true // il > 1
			};
		}
		if (t < entry.time) {
			// possibly a tween
			if (!prev_entry.tween) { // or if value is none
				return {
					value: prev_entry.value,
					tween: false,
					entry: prev_entry,
					can_tween: true,
					keyframe: false
				};
			}

			// calculate tween
			var time_diff = entry.time - prev_entry.time;
			var value_diff = entry.value - prev_entry.value;
			var tween = prev_entry.tween;

			var dt = t - prev_entry.time;
			var k = dt / time_diff;
			var new_value = prev_entry.value + Tweens[tween](k) * value_diff;

			return {
				entry: prev_entry,
				value: new_value,
				tween: prev_entry.tween,
				can_tween: true,
				keyframe: false
			};
		}
	}
	// time is after all entries
	return {
		value: entry.value,
		can_tween: false,
		keyframe: false
	}; 

}


function proxy_ctx(ctx) {
	// Creates a proxy 2d context wrapper which 
	// allows the fluent / chaining API.
	var wrapper = {};

	function proxy_function(c) {
		return function() {
			// Warning: this doesn't return value of function call
			ctx[c].apply(ctx, arguments);
			return wrapper;
		};
	}

	function proxy_property(c) {
		return function(v) {
			ctx[c] = v;
			return wrapper;
		};
	}

	wrapper.run = function(args) {
		args(wrapper);
		return wrapper;
	};

	for (var c in ctx) {
		// if (!ctx.hasOwnProperty(c)) continue;
		// console.log(c, typeof(ctx[c]), ctx.hasOwnProperty(c));
		// string, number, boolean, function, object

		var type = typeof(ctx[c]);
		switch(type) {
			case 'object':
				break;
			case 'function':
				wrapper[c] = proxy_function(c);
				break;
			default:
				wrapper[c] = proxy_property(c);
				break;
		}
	}

	return wrapper;
}

},{"./util_tween":14}],17:[function(require,module,exports){
var
	Theme = require('./theme'),
	UINumber = require('./ui_number'),
	Tweens = require('./util_tween'),
	Settings = require('./settings'),
	utils = require('./utils')
;

// TODO - tagged by index instead, work off layers.

function LayerView(layer, dispatcher) {
	var dom = document.createElement('div');

	var label = document.createElement('span');
	
	label.style.cssText = 'font-size: 12px; padding: 4px;';

	var dropdown = document.createElement('select');
	var option;
	dropdown.style.cssText = 'font-size: 10px; width: 60px; margin: 0; float: right; text-align: right;';

	for (var k in Tweens) {
		option = document.createElement('option');
		option.text = k;
		dropdown.appendChild(option);
	}

	dropdown.addEventListener('change', function(e) {
		dispatcher.fire('ease', layer, dropdown.value);
	});
	var height = (Settings.LINE_HEIGHT - 1);

	var keyframe_button = document.createElement('button');
	keyframe_button.innerHTML = '&#9672;'; // '&diams;' &#9671; 9679 9670 9672
	keyframe_button.style.cssText = 'background: none; font-size: 12px; padding: 0px; font-family: monospace; float: right; width: 20px; height: ' + height + 'px; border-style:none; outline: none;'; //  border-style:inset;
	
	keyframe_button.addEventListener('click', function(e) {
		console.log('clicked:keyframing...', state.get('_value').value);
		dispatcher.fire('keyframe', layer, state.get('_value').value);
	});

	/*
	// Prev Keyframe
	var button = document.createElement('button');
	button.textContent = '<';
	button.style.cssText = 'font-size: 12px; padding: 1px; ';
	dom.appendChild(button);

	// Next Keyframe
	button = document.createElement('button');
	button.textContent = '>';
	button.style.cssText = 'font-size: 12px; padding: 1px; ';
	dom.appendChild(button);

	
	*/

	function ToggleButton(text) {
		// for css based button see http://codepen.io/mallendeo/pen/eLIiG

		var button = document.createElement('button');
		button.textContent = text;

		utils.style(button, {
			fontSize: '12px',
			padding: '1px',
			borderSize: '2px',
			outline: 'none',
			background: '#fff'
		});

		this.pressed = false;

		button.onclick = function() {
			this.pressed = !this.pressed;

			utils.style(button, {
				borderStyle: this.pressed ? 'inset' : 'outset', // inset outset groove ridge
			})

			if (this.onClick) this.onClick();
		}.bind(this);

		this.dom = button;

	}

	// Solo
	var solo_toggle = new ToggleButton('S');
	dom.appendChild(solo_toggle.dom);

	solo_toggle.onClick = function() {
		dispatcher.fire('action:solo', layer, solo_toggle.pressed);
	}

	// Mute
	var mute_toggle = new ToggleButton('M');
	dom.appendChild(mute_toggle.dom);

	mute_toggle.onClick = function() {
		dispatcher.fire('action:mute', layer, mute_toggle.pressed);
	}


	var number = new UINumber(layer, dispatcher);

	number.onChange.do(function(value, done) {
		state.get('_value').value = value;
		dispatcher.fire('value.change', layer, value, done);
	});

	utils.style(number.dom, {
		float: 'right'
	});

	dom.appendChild(label);
	dom.appendChild(keyframe_button);
	dom.appendChild(number.dom);
	dom.appendChild(dropdown);
	

	utils.style(dom, {
		textAlign: 'left',
		margin: '0px 0px 0px 5px',
		borderBottom: '1px solid ' + Theme.b,
		top: 0,
		left: 0,
		height: (Settings.LINE_HEIGHT - 1 ) + 'px',
		color: Theme.c
	});

	this.dom = dom;

	this.repaint = repaint;
	var state;

	this.setState = function(l, s) {
		layer = l;
		state = s;

		var tmp_value = state.get('_value');
		if (tmp_value.value === undefined) {
			tmp_value.value = 0;
		}

		number.setValue(tmp_value.value);
		label.textContent = state.get('name').value;

		repaint();
	};

	function repaint(s) {

		dropdown.style.opacity = 0;
		dropdown.disabled = true;
		keyframe_button.style.color = Theme.b;
		// keyframe_button.disabled = false;
		// keyframe_button.style.borderStyle = 'solid';

		var tween = null;
		var o = utils.timeAtLayer(layer, s);

		if (!o) return;

		if (o.can_tween) {
			dropdown.style.opacity = 1;
			dropdown.disabled = false;
			// if (o.tween)
			dropdown.value = o.tween ? o.tween : 'none';
			if (dropdown.value === 'none') dropdown.style.opacity = 0.5;
		}

		if (o.keyframe) {
			keyframe_button.style.color = Theme.c;
			// keyframe_button.disabled = true;
			// keyframe_button.style.borderStyle = 'inset';
		}

		state.get('_value').value = o.value;
		number.setValue(o.value);
		number.paint();

		dispatcher.fire('target.notify', layer.name, o.value);
	}

}

module.exports = LayerView;

},{"./settings":4,"./theme":5,"./ui_number":9,"./util_tween":14,"./utils":16}],18:[function(require,module,exports){
var Settings = require('./settings'),
	ViewLayer = require('./view_layer'),
	IconButton = require('./ui_icon_button'),
	style = require('./utils').style,
	Theme = require('./theme'),
	STORAGE_PREFIX = require('./utils').STORAGE_PREFIX,
	UINumber = require('./ui_number')
	;

function LayerCabinet(data, dispatcher) {
	var layer_store = data.get('layers');

	var div = document.createElement('div');

	var top = document.createElement('div');
	top.style.cssText = 'margin: 0px; top: 0; left: 0; height: ' + Settings.MARKER_TRACK_HEIGHT + 'px';
	// top.style.textAlign = 'right';

	var layer_scroll = document.createElement('div');
	style(layer_scroll, {
		position: 'absolute',
		top: Settings.MARKER_TRACK_HEIGHT + 'px',
		// height: (Settings.height - Settings.MARKER_TRACK_HEIGHT) + 'px'
		left: 0,
		right: 0,
		bottom: 0,
		overflow: 'hidden'
	});

	div.appendChild(layer_scroll);

	var playing = false;


	var button_styles = {
		width: '22px',
		height: '22px',
		padding: '2px'
	};

	var op_button_styles = {
		width: '32px',
		padding: '3px 4px 3px 4px'
	};


	var play_button = new IconButton(16, 'play', 'play', dispatcher);
	style(play_button.dom, button_styles, { marginTop: '2px' } );
	play_button.onClick(function(e) {
		e.preventDefault();
		dispatcher.fire('controls.toggle_play');
	});

	var stop_button = new IconButton(16, 'stop', 'stop', dispatcher);
	style(stop_button.dom, button_styles, { marginTop: '2px' } );
	stop_button.onClick(function(e) {
		dispatcher.fire('controls.stop');
	});


	var undo_button = new IconButton(16, 'undo', 'undo', dispatcher);
	style(undo_button.dom, op_button_styles);
	undo_button.onClick(function() {
		dispatcher.fire('controls.undo');
	});

	var redo_button = new IconButton(16, 'repeat', 'redo', dispatcher);
	style(redo_button.dom, op_button_styles);
	redo_button.onClick(function() {
		dispatcher.fire('controls.redo');
	});

	var range = document.createElement('input');
	range.type = "range";
	range.value = 0;
	range.min = -1;
	range.max = +1;
	range.step = 0.125;

	style(range, {
		width: '90px',
		margin: '0px',
		marginLeft: '2px',
		marginRight: '2px'
	});

	var draggingRange = 0;

	range.addEventListener('mousedown', function() {
		draggingRange = 1;
	});

	range.addEventListener('mouseup', function() {
		draggingRange = 0;
		changeRange();
	});

	range.addEventListener('mousemove', function() {
		if (!draggingRange) return;
		changeRange();
	});

	div.appendChild(top);

	var time_options = {
		min: 0,
		step: 0.125
	};

	var currentTime = new UINumber(time_options);
	var totalTime = new UINumber(time_options);

	var currentTimeStore = data.get('ui:currentTime');
	var totalTimeStore = data.get('ui:totalTime');

	// UI2StoreBind(view, datastore) {
	// 	view.onChange.do(function(v) {
	// 		datastore.value = view;
	// 	})

	// 	datastore.onChange.do(function(v) {
	// 		view.setValue = v;
	// 	})
	// }

	currentTime.onChange.do(function(value, done) {
		dispatcher.fire('time.update', value);
		// repaint();
	});

	totalTime.onChange.do(function(value, done) {
		totalTimeStore.value = value;
		repaint();
	});

	// Play Controls
	top.appendChild(currentTime.dom);
	top.appendChild(document.createTextNode('/')); // 0:00:00 / 0:10:00
	top.appendChild(totalTime.dom)
	top.appendChild(play_button.dom);
	top.appendChild(stop_button.dom);
	top.appendChild(range);


	var operations_div = document.createElement('div');
	style(operations_div, {
		marginTop: '4px',
		// borderBottom: '1px solid ' + Theme.b
	});
	top.appendChild(operations_div);
	// top.appendChild(document.createElement('br'));


	// open _alt
	var file_open = new IconButton(16, 'folder_open_alt', 'Open', dispatcher);
	style(file_open.dom, op_button_styles);
	operations_div.appendChild(file_open.dom);

	function populateOpen() {
		while (dropdown.length) {
			dropdown.remove(0);
		}

		var option;
		option = document.createElement('option');
		option.text = 'New';
		option.value = '*new*';
		dropdown.add(option);

		option = document.createElement('option');
		option.text = 'Import JSON';
		option.value = '*import*';
		dropdown.add(option);

		// Doesn't work
		// option = document.createElement('option');
		// option.text = 'Select File';
		// option.value = '*select*';
		// dropdown.add(option);

		option = document.createElement('option');
		option.text = '==Open==';
		option.disabled = true;
		option.selected = true;
		dropdown.add(option);

		var regex = new RegExp(STORAGE_PREFIX + '(.*)');
		for (var key in localStorage) {
			// console.log(key);

			var match = regex.exec(key);
			if (match) {
				option = document.createElement('option');
				option.text = match[1];

				dropdown.add(option);
			}
		}

	}

	// listen on other tabs
	window.addEventListener('storage', function(e) {
		var regex = new RegExp(STORAGE_PREFIX + '(.*)');
		if (regex.exec(e.key)) {
			populateOpen();
		}
	});

	dispatcher.on('save:done', populateOpen);

	var dropdown = document.createElement('select');

	style(dropdown, {
		position: 'absolute',
		// right: 0,
		// margin: 0,
		opacity: 0,
		width: '16px',
		height: '16px',
		// zIndex: 1,
	});

	dropdown.addEventListener('change', function(e) {
		// console.log('changed', dropdown.length, dropdown.value);

		switch (dropdown.value) {
			case '*new*':
				dispatcher.fire('new');
				break;
			case '*import*':
				dispatcher.fire('import');
				break;
			case '*select*':
				dispatcher.fire('openfile');
				break;
			default:
				dispatcher.fire('open', dropdown.value);
				break;
		}
	});

	file_open.dom.insertBefore(dropdown, file_open.dom.firstChild);

	populateOpen();

	// // json import
	// var import_json = new IconButton(16, 'signin', 'Import JSON', dispatcher);
	// operations_div.appendChild(import_json.dom);
	// import_json.onClick(function() {
	// 	dispatcher.fire('import');
	// });

	// // new
	// var file_alt = new IconButton(16, 'file_alt', 'New', dispatcher);
	// operations_div.appendChild(file_alt.dom);

	// save
	var save = new IconButton(16, 'save', 'Save', dispatcher);
	style(save.dom, op_button_styles);
	operations_div.appendChild(save.dom);
	save.onClick(function() {
		dispatcher.fire('save');
	});

	// save as
	var save_as = new IconButton(16, 'paste', 'Save as', dispatcher);
	style(save_as.dom, op_button_styles);
	operations_div.appendChild(save_as.dom);
	save_as.onClick(function() {
		dispatcher.fire('save_as');
	});

	// download json (export)
	var download_alt = new IconButton(16, 'download_alt', 'Download / Export JSON to file', dispatcher);
	style(download_alt.dom, op_button_styles);
	operations_div.appendChild(download_alt.dom);
	download_alt.onClick(function() {
		dispatcher.fire('export');
	});

	var upload_alt = new IconButton(16, 'upload_alt', 'Load from file', dispatcher);
	style(upload_alt.dom, op_button_styles);
	operations_div.appendChild(upload_alt.dom);
	upload_alt.onClick(function() {
		dispatcher.fire('openfile');
	});

	var span = document.createElement('span');
	span.style.width = '20px';
	span.style.display = 'inline-block';
	operations_div.appendChild(span);

	operations_div.appendChild(undo_button.dom);
	operations_div.appendChild(redo_button.dom);
	operations_div.appendChild(document.createElement('br'));

	// Cloud Download / Upload edit pencil

	/*
	// // show layer
	// var eye_open = new IconButton(16, 'eye_open', 'eye_open', dispatcher);
	// operations_div.appendChild(eye_open.dom);

	// // hide / disable layer
	// var eye_close = new IconButton(16, 'eye_close', 'eye_close', dispatcher);
	// operations_div.appendChild(eye_close.dom);


	// remove layer
	var minus = new IconButton(16, 'minus', 'minus', dispatcher);
	operations_div.appendChild(minus.dom);

	// check
	var ok = new IconButton(16, 'ok', 'ok', dispatcher);
	operations_div.appendChild(ok.dom);

	// cross
	var remove = new IconButton(16, 'remove', 'remove', dispatcher);
	operations_div.appendChild(remove.dom);

	*/


	// range.addEventListener('change', changeRange);


	function convertPercentToTime(t) {
		var min_time = 10 * 60; // 10 minutes
		min_time = data.get('ui:totalTime').value;
		var max_time = 1;
		var v = Settings.width * 0.8 / (t * (max_time - min_time) + min_time);
		return v;
	}

	function convertTimeToPercent(v) {
		var min_time = 10 * 60; // 10 minutes
		min_time = data.get('ui:totalTime').value;
		var max_time = 1;
		var t  = ((Settings.width * 0.8 / v) - min_time)  / (max_time - min_time);
		return t;
	}

	function changeRange() {

		dispatcher.fire('update.scale', Math.pow(100, -range.value) );
	}

	var layer_uis = [], visible_layers = 0;
	var unused_layers = [];

	this.layers = layer_uis;

	this.setControlStatus = function(v) {
		playing = v;
		if (playing) {
			play_button.setIcon('pause');
			play_button.setTip('pause');
		}
		else {
			play_button.setIcon('play');
			play_button.setTip('play');
		}
	};

	this.setState = function(state) {

		layer_store = state;
		layers = layer_store.value;
		// layers = state;
		console.log(layer_uis.length, layers);
		var i, layer;
		for (i = 0; i < layers.length; i++) {
			layer = layers[i];

			if (!layer_uis[i]) {
				var layer_ui;
				if (unused_layers.length) {
					layer_ui = unused_layers.pop();
					layer_ui.dom.style.display = 'block';
				} else {
					// new
					layer_ui = new ViewLayer(layer, dispatcher);
					layer_scroll.appendChild(layer_ui.dom);
				}
				layer_uis.push(layer_ui);
			}

			// layer_uis[i].setState(layer);
		}

		console.log('Total layers (view, hidden, total)', layer_uis.length, unused_layers.length,
			layer_uis.length + unused_layers.length);

	};

	function repaint(s) {

		s = currentTimeStore.value;
		currentTime.setValue(s);
		totalTime.setValue(totalTimeStore.value);
		currentTime.paint();
		totalTime.paint();

		var i;

		s = s || 0;
		for (i = layer_uis.length; i-- > 0;) {
			// quick hack
			if (i >= layers.length) {
				layer_uis[i].dom.style.display = 'none';
				unused_layers.push(layer_uis.pop());
				continue;
			}

			layer_uis[i].setState(layers[i], layer_store.get(i));
			// layer_uis[i].setState('layers'+':'+i);
			layer_uis[i].repaint(s);
		}

		visible_layers = layer_uis.length;

	}

	this.repaint = repaint;
	this.setState(layer_store);

	this.scrollTo = function(x) {
		layer_scroll.scrollTop = x * (layer_scroll.scrollHeight - layer_scroll.clientHeight);
	};

	this.dom = div;

	repaint();
}

module.exports = LayerCabinet;

},{"./settings":4,"./theme":5,"./ui_icon_button":8,"./ui_number":9,"./utils":16,"./view_layer":17}],19:[function(require,module,exports){
var
	Settings = require('./settings'),
	Theme = require('./theme'),
	utils = require('./utils'),
	proxy_ctx = utils.proxy_ctx,
	Tweens = require('./util_tween'),
	handleDrag = require('./util_handle_drag'),
	ScrollCanvas = require('./view_time_scroller'),
	Canvas = require('./ui_canvas')
	;

var
	LINE_HEIGHT = Settings.LINE_HEIGHT,
	DIAMOND_SIZE = Settings.DIAMOND_SIZE,
	TIME_SCROLLER_HEIGHT = 35,
	MARKER_TRACK_HEIGHT = 25,
	LEFT_PANE_WIDTH = Settings.LEFT_PANE_WIDTH,
	time_scale = Settings.time_scale,
	TOP = 10;


var frame_start = 0; // this is the current scroll position.


/*
 * This class contains the view for the right main section of timeliner
 */


// TODO
// dirty rendering
// drag block
// DON'T use time.update for everything

var tickMark1;
var tickMark2;
var tickMark3;

function time_scaled() {
	/*
	 * Subdivison LOD
	 * time_scale refers to number of pixels per unit
	 * Eg. 1 inch - 60s, 1 inch - 60fps, 1 inch - 6 mins
	 */
	var div = 60;

	tickMark1 = time_scale / div;
	tickMark2 = 2 * tickMark1;
	tickMark3 = 10 * tickMark1;

}

time_scaled();


/**************************/
// Timeline Panel
/**************************/

function TimelinePanel(data, dispatcher) {

	var dpr = window.devicePixelRatio;
	var canvas = document.createElement('canvas');

	var scrollTop = 0, scrollLeft = 0, SCROLL_HEIGHT;
	var layers = data.get('layers').value;

	this.scrollTo = function(s, y) {
		scrollTop = s * Math.max(layers.length * LINE_HEIGHT - SCROLL_HEIGHT, 0);
		repaint();
	};

	this.resize = function() {
		var h = (Settings.height - TIME_SCROLLER_HEIGHT);
		dpr = window.devicePixelRatio;
		canvas.width = Settings.width * dpr;
		canvas.height = h * dpr;
		canvas.style.width = Settings.width + 'px';
		canvas.style.height = h + 'px';
		SCROLL_HEIGHT = Settings.height - TIME_SCROLLER_HEIGHT;
		scroll_canvas.setSize(Settings.width, TIME_SCROLLER_HEIGHT);
	};

	var div = document.createElement('div');

	var scroll_canvas = new Canvas(Settings.width, TIME_SCROLLER_HEIGHT);
	// data.addListener('ui', repaint );

	utils.style(canvas, {
		position: 'absolute',
		top: TIME_SCROLLER_HEIGHT + 'px',
		left: '0px'
	});

	utils.style(scroll_canvas.dom, {
		position: 'absolute',
		top: '0px',
		left: '10px'
	});

	scroll_canvas.uses(new ScrollCanvas(dispatcher, data));


	div.appendChild(canvas);
	div.appendChild(scroll_canvas.dom);

	// this.dom = canvas;
	this.dom = div;
	this.resize();

	var ctx = canvas.getContext('2d');
	var ctx_wrap = proxy_ctx(ctx);

	var currentTime; // measured in seconds
	// technically it could be in frames or  have it in string format (0:00:00:1-60)

	var LEFT_GUTTER = 20;
	var i, x, y, il, j;

	var needsRepaint = false;
	var renderItems = [];

	function EasingRect(x1, y1, x2, y2, frame, frame2, values, layer, j) {
		var self = this;

		this.path = function() {
			ctx_wrap.beginPath()
			.rect(x1, y1, x2-x1, y2-y1)
			.closePath();
		};

		this.paint = function() {
			this.path();
			ctx.fillStyle = frame._color;
			ctx.fill();
		};

		this.mouseover = function() {
			canvas.style.cursor = 'pointer'; // pointer move ew-resize
		};

		this.mouseout = function() {
			canvas.style.cursor = 'default';
		};

		this.mousedrag = function(e) {
			var t1 = x_to_time(x1 + e.dx);
			t1 = Math.max(0, t1);
			// TODO limit moving to neighbours
			frame.time = t1;

			var t2 = x_to_time(x2 + e.dx);
			t2 = Math.max(0, t2);
			frame2.time = t2;

			// dispatcher.fire('time.update', t1);
		};
	}

	function Diamond(frame, y) {
		var x, y2;

		x = time_to_x(frame.time);
		y2 = y + LINE_HEIGHT * 0.5  - DIAMOND_SIZE / 2;

		var self = this;

		var isOver = false;

		this.path = function(ctx_wrap) {
			ctx_wrap
				.beginPath()
				.moveTo(x, y2)
				.lineTo(x + DIAMOND_SIZE / 2, y2 + DIAMOND_SIZE / 2)
				.lineTo(x, y2 + DIAMOND_SIZE)
				.lineTo(x - DIAMOND_SIZE / 2, y2 + DIAMOND_SIZE / 2)
				.closePath();
		};

		this.paint = function(ctx_wrap) {
			self.path(ctx_wrap);
			if (!isOver)
				ctx_wrap.fillStyle(Theme.c);
			else
				ctx_wrap.fillStyle('yellow'); // Theme.d

			ctx_wrap.fill()
			.stroke();
		};

		this.mouseover = function() {
			isOver = true;
			canvas.style.cursor = 'move'; // pointer move ew-resize
			self.paint(ctx_wrap);
		};

		this.mouseout = function() {
			isOver = false;
			canvas.style.cursor = 'default';
			self.paint(ctx_wrap);
		};

		this.mousedrag = function(e) {
			var t = x_to_time(x + e.dx);
			t = Math.max(0, t);
			// TODO limit moving to neighbours
			frame.time = t;
			dispatcher.fire('time.update', t);
			// console.log('frame', frame);
			// console.log(s, format_friendly_seconds(s), this);
		};

	}

	function repaint() {
		needsRepaint = true;
	}


	function drawLayerContents() {
		renderItems = [];
		// horizontal Layer lines
		for (i = 0, il = layers.length; i <= il; i++) {
			ctx.strokeStyle = Theme.b;
			ctx.beginPath();
			y = i * LINE_HEIGHT;
			y = ~~y - 0.5;

			ctx_wrap
			.moveTo(0, y)
			.lineTo(width, y)
			.stroke();
		}


		var frame, frame2, j;

		// Draw Easing Rects
		for (i = 0; i < il; i++) {
			// check for keyframes
			var layer = layers[i];
			var values = layer.values;

			y = i * LINE_HEIGHT;

			for (j = 0; j < values.length - 1; j++) {
				frame = values[j];
				frame2 = values[j + 1];

				// Draw Tween Rect
				x = time_to_x(frame.time);
				x2 = time_to_x(frame2.time);

				if (!frame.tween || frame.tween == 'none') continue;

				var y1 = y + 2;
				var y2 = y + LINE_HEIGHT - 2;

				renderItems.push(new EasingRect(x, y1, x2, y2, frame, frame2));

				// // draw easing graph
				// var color = parseInt(frame._color.substring(1,7), 16);
				// color = 0xffffff ^ color;
				// color = color.toString(16);           // convert to hex
				// color = '#' + ('000000' + color).slice(-6);

				// ctx.strokeStyle = color;
				// var x3;
				// ctx.beginPath();
				// ctx.moveTo(x, y2);
				// var dy = y1 - y2;
				// var dx = x2 - x;

				// for (x3=x; x3 < x2; x3++) {
				// 	ctx.lineTo(x3, y2 + Tweens[frame.tween]((x3 - x)/dx) * dy);
				// }
				// ctx.stroke();
			}

			for (j = 0; j < values.length; j++) {
				// Dimonds
				frame = values[j];
				renderItems.push(new Diamond(frame, y));
			}
		}

		// render items
		var item;
		for (i = 0, il = renderItems.length; i < il; i++) {
			item = renderItems[i];
			item.paint(ctx_wrap);
		}
	}

	function setTimeScale() {

		var v = data.get('ui:timeScale').value;
		if (time_scale !== v) {
			time_scale = v;
			time_scaled();
		}
	}

	var over = null;
	var mousedownItem = null;

	function check() {
		var item;
		var last_over = over;
		// over = [];
		over = null;
		for (i = renderItems.length; i-- > 0;) {
			item = renderItems[i];
			item.path(ctx_wrap);

			if (ctx.isPointInPath(pointer.x * dpr, pointer.y * dpr)) {
				// over.push(item);
				over = item;
				break;
			}
		}

		// clear old mousein
		if (last_over && last_over != over) {
			item = last_over;
			if (item.mouseout) item.mouseout();
		}

		if (over) {
			item = over;
			if (item.mouseover) item.mouseover();

			if (mousedown2) {
				mousedownItem = item;
			}
		}



		// console.log(pointer)
	}

	function pointerEvents() {
		if (!pointer) return;

		ctx_wrap
			.save()
			.scale(dpr, dpr)
			.translate(0, MARKER_TRACK_HEIGHT)
			.beginPath()
			.rect(0, 0, Settings.width, SCROLL_HEIGHT)
			.translate(-scrollLeft, -scrollTop)
			.clip()
				.run(check)
			.restore();
	}

	function _paint() {
		if (!needsRepaint) {
			pointerEvents();
			return;
		}

		scroll_canvas.repaint();

		setTimeScale();

		currentTime = data.get('ui:currentTime').value;
		frame_start =  data.get('ui:scrollTime').value;

		/**************************/
		// background

		ctx.fillStyle = Theme.a;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.scale(dpr, dpr);

		//

		ctx.lineWidth = 1; // .5, 1, 2

		width = Settings.width;
		height = Settings.height;

		var units = time_scale / tickMark1;
		var offsetUnits = (frame_start * time_scale) % units;

		var count = (width - LEFT_GUTTER + offsetUnits) / units;

		// console.log('time_scale', time_scale, 'tickMark1', tickMark1, 'units', units, 'offsetUnits', offsetUnits, frame_start);

		// time_scale = pixels to 1 second (40)
		// tickMark1 = marks per second (marks / s)
		// units = pixels to every mark (40)

		// labels only
		for (i = 0; i < count; i++) {
			x = i * units + LEFT_GUTTER - offsetUnits;

			// vertical lines
			ctx.strokeStyle = Theme.b;
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, height);
			ctx.stroke();

			ctx.fillStyle = Theme.d;
			ctx.textAlign = 'center';

			var t = (i * units - offsetUnits) / time_scale + frame_start;
			t = utils.format_friendly_seconds(t);
			ctx.fillText(t, x, 38);
		}

		units = time_scale / tickMark2;
		count = (width - LEFT_GUTTER + offsetUnits) / units;

		// marker lines - main
		for (i = 0; i < count; i++) {
			ctx.strokeStyle = Theme.c;
			ctx.beginPath();
			x = i * units + LEFT_GUTTER - offsetUnits;
			ctx.moveTo(x, MARKER_TRACK_HEIGHT - 0);
			ctx.lineTo(x, MARKER_TRACK_HEIGHT - 16);
			ctx.stroke();
		}

		var mul = tickMark3 / tickMark2;
		units = time_scale / tickMark3;
		count = (width - LEFT_GUTTER + offsetUnits) / units;

		// small ticks
		for (i = 0; i < count; i++) {
			if (i % mul === 0) continue;
			ctx.strokeStyle = Theme.c;
			ctx.beginPath();
			x = i * units + LEFT_GUTTER - offsetUnits;
			ctx.moveTo(x, MARKER_TRACK_HEIGHT - 0);
			ctx.lineTo(x, MARKER_TRACK_HEIGHT - 10);
			ctx.stroke();
		}

		// Encapsulate a scroll rect for the layers
		ctx_wrap
			.save()
			.translate(0, MARKER_TRACK_HEIGHT)
			.beginPath()
			.rect(0, 0, Settings.width, SCROLL_HEIGHT)
			.translate(-scrollLeft, -scrollTop)
			.clip()
				.run(drawLayerContents)
			.restore();

		// Current Marker / Cursor
		ctx.strokeStyle = 'red'; // Theme.c
		x = (currentTime - frame_start) * time_scale + LEFT_GUTTER;

		var txt = utils.format_friendly_seconds(currentTime);
		var textWidth = ctx.measureText(txt).width;

		var base_line = MARKER_TRACK_HEIGHT - 5, half_rect = textWidth / 2 + 4;

		ctx.beginPath();
		ctx.moveTo(x, base_line);
		ctx.lineTo(x, height);
		ctx.stroke();

		ctx.fillStyle = 'red'; // black
		ctx.textAlign = 'center';
		ctx.beginPath();
		ctx.moveTo(x, base_line + 5);
		ctx.lineTo(x + 5, base_line);
		ctx.lineTo(x + half_rect, base_line);
		ctx.lineTo(x + half_rect, base_line - 14);
		ctx.lineTo(x - half_rect, base_line - 14);
		ctx.lineTo(x - half_rect, base_line);
		ctx.lineTo(x - 5, base_line);
		ctx.closePath();
		ctx.fill();

		ctx.fillStyle = 'white';
		ctx.fillText(txt, x, base_line - 4);

		ctx.restore();

		needsRepaint = false;
		// pointerEvents();

	}

	function y_to_track(y) {
		if (y - MARKER_TRACK_HEIGHT < 0) return -1;
		return (y - MARKER_TRACK_HEIGHT + scrollTop) / LINE_HEIGHT | 0;
	}


	function x_to_time(x) {
		var units = time_scale / tickMark3;

		// return frame_start + (x - LEFT_GUTTER) / time_scale;

		return frame_start + ((x - LEFT_GUTTER) / units | 0) / tickMark3;
	}

	function time_to_x(s) {
		var ds = s - frame_start;
		ds *= time_scale;
		ds += LEFT_GUTTER;

		return ds;
	}

	var me = this;
	this.repaint = repaint;
	this._paint = _paint;

	repaint();

	var mousedown = false, selection = false;

	var dragObject;
	var canvasBounds;

	document.addEventListener('mousemove', onMouseMove);

	canvas.addEventListener('dblclick', function(e) {
		canvasBounds = canvas.getBoundingClientRect();
		var mx = e.clientX - canvasBounds.left , my = e.clientY - canvasBounds.top;


		var track = y_to_track(my);
		var s = x_to_time(mx);


		dispatcher.fire('keyframe', layers[track], currentTime);

	});

	function onMouseMove(e) {
		canvasBounds = canvas.getBoundingClientRect();
		var mx = e.clientX - canvasBounds.left , my = e.clientY - canvasBounds.top;
		onPointerMove(mx, my);
	}

	var pointerdidMoved = false;
	var pointer = null;

	function onPointerMove(x, y) {
		if (mousedownItem) return;
		pointerdidMoved = true;
		pointer = {x: x, y: y};
	}

	canvas.addEventListener('mouseout', function() {
		pointer = null;
	});

	var mousedown2 = false, mouseDownThenMove = false;
	handleDrag(canvas, function down(e) {
			mousedown2 = true;
			pointer = {
				x: e.offsetx,
				y: e.offsety
			};
			pointerEvents();

			if (!mousedownItem) dispatcher.fire('time.update', x_to_time(e.offsetx));
			// Hit criteria
		}, function move(e) {
			mousedown2 = false;
			if (mousedownItem) {
				mouseDownThenMove = true;
				if (mousedownItem.mousedrag) {
					mousedownItem.mousedrag(e);
				}
			} else {
				dispatcher.fire('time.update', x_to_time(e.offsetx));
			}
		}, function up(e) {
			if (mouseDownThenMove) {
				dispatcher.fire('keyframe.move');
			}
			else {
				dispatcher.fire('time.update', x_to_time(e.offsetx));
			}
			mousedown2 = false;
			mousedownItem = null;
			mouseDownThenMove = false;
		}
	);

	this.setState = function(state) {
		layers = state.value;
		repaint();
	};

}

module.exports = TimelinePanel;

},{"./settings":4,"./theme":5,"./ui_canvas":7,"./util_handle_drag":13,"./util_tween":14,"./utils":16,"./view_time_scroller":20}],20:[function(require,module,exports){
var
	Theme = require('./theme'),
	utils = require('./utils'),
	proxy_ctx = utils.proxy_ctx,
	handleDrag = require('./util_handle_drag')
	;


function Rect() {
	
}

Rect.prototype.set = function(x, y, w, h, color, outline) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.color = color;
	this.outline = outline;
};

Rect.prototype.paint = function(ctx) {
	ctx.fillStyle = Theme.b;  // // 'yellow';
	ctx.strokeStyle = Theme.c;

	this.shape(ctx);

	ctx.stroke();
	ctx.fill();
};

Rect.prototype.shape = function(ctx) {
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.w, this.h);
};

Rect.prototype.contains = function(x, y) {
	return x >= this.x && y >= this.y
	 && x <= this.x + this.w && y <= this.y + this.h;
};



function ScrollCanvas(dispatcher, data) {
	var width, height;

	this.setSize = function(w, h) {
		width = w;
		height = h;
	}

	var TOP_SCROLL_TRACK = 20;
	var MARGINS = 15;

	var scroller = {
		left: 0,
		grip_length: 0,
		k: 1
	};

	var scrollRect = new Rect();

	this.paint = function(ctx) {
		var totalTime = data.get('ui:totalTime').value;
		var scrollTime = data.get('ui:scrollTime').value;
		var currentTime = data.get('ui:currentTime').value;
		
		var pixels_per_second = data.get('ui:timeScale').value;

		ctx.save();

		var w = width - 2 * MARGINS;
		var h = 16; // TOP_SCROLL_TRACK;
		var h2 = h;


		ctx.clearRect(0, 0, width, height);
		ctx.translate(MARGINS, 5);

		// outline scroller
		ctx.beginPath();
		ctx.strokeStyle = Theme.b;
		ctx.rect(0, 0, w, h);
		ctx.stroke();
		
		var totalTimePixels = totalTime * pixels_per_second;
		var k = w / totalTimePixels;
		scroller.k = k;

		var grip_length = w * k;

		scroller.grip_length = grip_length;

		scroller.left = scrollTime / totalTime * w;
		
		scrollRect.set(scroller.left, 0, scroller.grip_length, h);
		scrollRect.paint(ctx);

		var r = currentTime / totalTime * w;		

		ctx.fillStyle =  Theme.c;
		ctx.lineWidth = 2;
		
		ctx.beginPath();
		
		// circle
		// ctx.arc(r, h2 / 2, h2 / 1.5, 0, Math.PI * 2);

		// line
		ctx.rect(r, 0, 2, h + 5);
		ctx.fill()

		ctx.fillText(currentTime && currentTime.toFixed(2), r, h + 14);
		// ctx.fillText(currentTime && currentTime.toFixed(3), 10, 10);
		ctx.fillText(totalTime, 300, 14);

		ctx.restore();
	}

	/** Handles dragging for scroll bar **/

	var draggingx = null;

	this.onDown = function(e) {
		// console.log('ondown', e);

		if (scrollRect.contains(e.offsetx - MARGINS, e.offsety -5)) {
			draggingx = scroller.left;
			return;
		}
		
		var totalTime = data.get('ui:totalTime').value;
		var pixels_per_second = data.get('ui:timeScale').value;
		var w = width - 2 * MARGINS;

		var t = (e.offsetx - MARGINS) / w * totalTime;
		// t = Math.max(0, t);

		// data.get('ui:currentTime').value = t;
		dispatcher.fire('time.update', t);
		
	};

	this.onMove = function move(e) {
		if (draggingx != null) {
			var totalTime = data.get('ui:totalTime').value;
			var w = width - 2 * MARGINS;
			
			dispatcher.fire('update.scrollTime', 
				(draggingx + e.dx)  / w * totalTime);

		} else {
			this.onDown(e);	
		}
		
	};

	this.onUp = function(e) {
		draggingx = null;
	}

	/*** End handling for scrollbar ***/
}

module.exports = ScrollCanvas;
},{"./theme":5,"./util_handle_drag":13,"./utils":16}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ny4yLjAvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL2RvLmpzL2RvLmpzIiwicGFja2FnZS5qc29uIiwic3JjL2ZvbnQuanNvbiIsInNyYy9zZXR0aW5ncy5qcyIsInNyYy90aGVtZS5qcyIsInNyYy90aW1lbGluZXIuanMiLCJzcmMvdWlfY2FudmFzLmpzIiwic3JjL3VpX2ljb25fYnV0dG9uLmpzIiwic3JjL3VpX251bWJlci5qcyIsInNyYy91aV9zY3JvbGxiYXIuanMiLCJzcmMvdXRpbF9kYXRhc3RvcmUuanMiLCJzcmMvdXRpbF9kaXNwYXRjaGVyLmpzIiwic3JjL3V0aWxfaGFuZGxlX2RyYWcuanMiLCJzcmMvdXRpbF90d2Vlbi5qcyIsInNyYy91dGlsX3VuZG8uanMiLCJzcmMvdXRpbHMuanMiLCJzcmMvdmlld19sYXllci5qcyIsInNyYy92aWV3X2xheWVyX2NhYmluZXQuanMiLCJzcmMvdmlld19wYW5lbC5qcyIsInNyYy92aWV3X3RpbWVfc2Nyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL21DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcmJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIERvKHBhcmVudCkge1xuXHR2YXIgbGlzdGVuZXJzID0gW107XG5cdHRoaXMuZG8gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdGxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcblx0fTtcblx0dGhpcy51bmRvID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRsaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSwgMSk7XG5cdH07XG5cdHRoaXMuZmlyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGZvciAodmFyIHYgPSAwOyB2IDwgbGlzdGVuZXJzLmxlbmd0aDsgdisrKSB7XG5cdFx0XHRsaXN0ZW5lcnNbdl0uYXBwbHkocGFyZW50LCBhcmd1bWVudHMpO1xuXHRcdH1cblx0fTtcbn1cblxuaWYgKHR5cGVvZihtb2R1bGUpID09PSAnb2JqZWN0JykgbW9kdWxlLmV4cG9ydHMgPSBEbztcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJ2ZXJzaW9uXCI6IFwiMS41LjBcIlxufSIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJ1bml0c1BlckVtXCI6IDE3OTIsXG5cdFwiYXNjZW5kZXJcIjogMTUzNixcblx0XCJkZXNjZW5kZXJcIjogLTI1Nixcblx0XCJmb250c1wiOiB7XG5cdFx0XCJwbHVzXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE0MDgsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNDA4LDgwMCBDLDE0MDgsODUzLDEzNjUsODk2LDEzMTIsODk2IEwsODk2LDg5NiBMLDg5NiwxMzEyIEMsODk2LDEzNjUsODUzLDE0MDgsODAwLDE0MDggTCw2MDgsMTQwOCBDLDU1NSwxNDA4LDUxMiwxMzY1LDUxMiwxMzEyIEwsNTEyLDg5NiBMLDk2LDg5NiBDLDQzLDg5NiwwLDg1MywwLDgwMCBMLDAsNjA4IEMsMCw1NTUsNDMsNTEyLDk2LDUxMiBMLDUxMiw1MTIgTCw1MTIsOTYgQyw1MTIsNDMsNTU1LDAsNjA4LDAgTCw4MDAsMCBDLDg1MywwLDg5Niw0Myw4OTYsOTYgTCw4OTYsNTEyIEwsMTMxMiw1MTIgQywxMzY1LDUxMiwxNDA4LDU1NSwxNDA4LDYwOCBaXCJcblx0XHR9LFxuXHRcdFwibWludXNcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTQwOCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE0MDgsODAwIEMsMTQwOCw4NTMsMTM2NSw4OTYsMTMxMiw4OTYgTCw5Niw4OTYgQyw0Myw4OTYsMCw4NTMsMCw4MDAgTCwwLDYwOCBDLDAsNTU1LDQzLDUxMiw5Niw1MTIgTCwxMzEyLDUxMiBDLDEzNjUsNTEyLDE0MDgsNTU1LDE0MDgsNjA4IFpcIlxuXHRcdH0sXG5cdFx0XCJva1wiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTY3MSw5NzAgQywxNjcxLDk5NSwxNjYxLDEwMjAsMTY0MywxMDM4IEwsMTUwNywxMTc0IEMsMTQ4OSwxMTkyLDE0NjQsMTIwMiwxNDM5LDEyMDIgQywxNDE0LDEyMDIsMTM4OSwxMTkyLDEzNzEsMTE3NCBMLDcxNSw1MTcgTCw0MjEsODEyIEMsNDAzLDgzMCwzNzgsODQwLDM1Myw4NDAgQywzMjgsODQwLDMwMyw4MzAsMjg1LDgxMiBMLDE0OSw2NzYgQywxMzEsNjU4LDEyMSw2MzMsMTIxLDYwOCBDLDEyMSw1ODMsMTMxLDU1OCwxNDksNTQwIEwsNTExLDE3OCBMLDY0Nyw0MiBDLDY2NSwyNCw2OTAsMTQsNzE1LDE0IEMsNzQwLDE0LDc2NSwyNCw3ODMsNDIgTCw5MTksMTc4IEwsMTY0Myw5MDIgQywxNjYxLDkyMCwxNjcxLDk0NSwxNjcxLDk3MCBaXCJcblx0XHR9LFxuXHRcdFwicmVtb3ZlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE0MDgsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMjk4LDIxNCBDLDEyOTgsMjM5LDEyODgsMjY0LDEyNzAsMjgyIEwsOTc2LDU3NiBMLDEyNzAsODcwIEMsMTI4OCw4ODgsMTI5OCw5MTMsMTI5OCw5MzggQywxMjk4LDk2MywxMjg4LDk4OCwxMjcwLDEwMDYgTCwxMTM0LDExNDIgQywxMTE2LDExNjAsMTA5MSwxMTcwLDEwNjYsMTE3MCBDLDEwNDEsMTE3MCwxMDE2LDExNjAsOTk4LDExNDIgTCw3MDQsODQ4IEwsNDEwLDExNDIgQywzOTIsMTE2MCwzNjcsMTE3MCwzNDIsMTE3MCBDLDMxNywxMTcwLDI5MiwxMTYwLDI3NCwxMTQyIEwsMTM4LDEwMDYgQywxMjAsOTg4LDExMCw5NjMsMTEwLDkzOCBDLDExMCw5MTMsMTIwLDg4OCwxMzgsODcwIEwsNDMyLDU3NiBMLDEzOCwyODIgQywxMjAsMjY0LDExMCwyMzksMTEwLDIxNCBDLDExMCwxODksMTIwLDE2NCwxMzgsMTQ2IEwsMjc0LDEwIEMsMjkyLC04LDMxNywtMTgsMzQyLC0xOCBDLDM2NywtMTgsMzkyLC04LDQxMCwxMCBMLDcwNCwzMDQgTCw5OTgsMTAgQywxMDE2LC04LDEwNDEsLTE4LDEwNjYsLTE4IEMsMTA5MSwtMTgsMTExNiwtOCwxMTM0LDEwIEwsMTI3MCwxNDYgQywxMjg4LDE2NCwxMjk4LDE4OSwxMjk4LDIxNCBaXCJcblx0XHR9LFxuXHRcdFwiem9vbV9pblwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNjY0LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw3MzYgQywxMDI0LDc1MywxMDA5LDc2OCw5OTIsNzY4IEwsNzY4LDc2OCBMLDc2OCw5OTIgQyw3NjgsMTAwOSw3NTMsMTAyNCw3MzYsMTAyNCBMLDY3MiwxMDI0IEMsNjU1LDEwMjQsNjQwLDEwMDksNjQwLDk5MiBMLDY0MCw3NjggTCw0MTYsNzY4IEMsMzk5LDc2OCwzODQsNzUzLDM4NCw3MzYgTCwzODQsNjcyIEMsMzg0LDY1NSwzOTksNjQwLDQxNiw2NDAgTCw2NDAsNjQwIEwsNjQwLDQxNiBDLDY0MCwzOTksNjU1LDM4NCw2NzIsMzg0IEwsNzM2LDM4NCBDLDc1MywzODQsNzY4LDM5OSw3NjgsNDE2IEwsNzY4LDY0MCBMLDk5Miw2NDAgQywxMDA5LDY0MCwxMDI0LDY1NSwxMDI0LDY3MiBNLDExNTIsNzA0IEMsMTE1Miw0NTcsOTUxLDI1Niw3MDQsMjU2IEMsNDU3LDI1NiwyNTYsNDU3LDI1Niw3MDQgQywyNTYsOTUxLDQ1NywxMTUyLDcwNCwxMTUyIEMsOTUxLDExNTIsMTE1Miw5NTEsMTE1Miw3MDQgTSwxNjY0LC0xMjggQywxNjY0LC05NCwxNjUwLC02MSwxNjI3LC0zOCBMLDEyODQsMzA1IEMsMTM2NSw0MjIsMTQwOCw1NjIsMTQwOCw3MDQgQywxNDA4LDEwOTMsMTA5MywxNDA4LDcwNCwxNDA4IEMsMzE1LDE0MDgsMCwxMDkzLDAsNzA0IEMsMCwzMTUsMzE1LDAsNzA0LDAgQyw4NDYsMCw5ODYsNDMsMTEwMywxMjQgTCwxNDQ2LC0yMTggQywxNDY5LC0yNDIsMTUwMiwtMjU2LDE1MzYsLTI1NiBDLDE2MDcsLTI1NiwxNjY0LC0xOTksMTY2NCwtMTI4IFpcIlxuXHRcdH0sXG5cdFx0XCJ6b29tX291dFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNjY0LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw3MzYgQywxMDI0LDc1MywxMDA5LDc2OCw5OTIsNzY4IEwsNDE2LDc2OCBDLDM5OSw3NjgsMzg0LDc1MywzODQsNzM2IEwsMzg0LDY3MiBDLDM4NCw2NTUsMzk5LDY0MCw0MTYsNjQwIEwsOTkyLDY0MCBDLDEwMDksNjQwLDEwMjQsNjU1LDEwMjQsNjcyIE0sMTE1Miw3MDQgQywxMTUyLDQ1Nyw5NTEsMjU2LDcwNCwyNTYgQyw0NTcsMjU2LDI1Niw0NTcsMjU2LDcwNCBDLDI1Niw5NTEsNDU3LDExNTIsNzA0LDExNTIgQyw5NTEsMTE1MiwxMTUyLDk1MSwxMTUyLDcwNCBNLDE2NjQsLTEyOCBDLDE2NjQsLTk0LDE2NTAsLTYxLDE2MjcsLTM4IEwsMTI4NCwzMDUgQywxMzY1LDQyMiwxNDA4LDU2MiwxNDA4LDcwNCBDLDE0MDgsMTA5MywxMDkzLDE0MDgsNzA0LDE0MDggQywzMTUsMTQwOCwwLDEwOTMsMCw3MDQgQywwLDMxNSwzMTUsMCw3MDQsMCBDLDg0NiwwLDk4Niw0MywxMTAzLDEyNCBMLDE0NDYsLTIxOCBDLDE0NjksLTI0MiwxNTAyLC0yNTYsMTUzNiwtMjU2IEMsMTYwNywtMjU2LDE2NjQsLTE5OSwxNjY0LC0xMjggWlwiXG5cdFx0fSxcblx0XHRcImNvZ1wiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTAyNCw2NDAgQywxMDI0LDQ5OSw5MDksMzg0LDc2OCwzODQgQyw2MjcsMzg0LDUxMiw0OTksNTEyLDY0MCBDLDUxMiw3ODEsNjI3LDg5Niw3NjgsODk2IEMsOTA5LDg5NiwxMDI0LDc4MSwxMDI0LDY0MCBNLDE1MzYsNzQ5IEMsMTUzNiw3NjYsMTUyNCw3ODIsMTUwNyw3ODUgTCwxMzI0LDgxMyBDLDEzMTQsODQ2LDEzMDAsODc5LDEyODMsOTExIEMsMTMxNyw5NTgsMTM1NCwxMDAyLDEzODgsMTA0OCBDLDEzOTMsMTA1NSwxMzk2LDEwNjIsMTM5NiwxMDcxIEMsMTM5NiwxMDc5LDEzOTQsMTA4NywxMzg5LDEwOTMgQywxMzQ3LDExNTIsMTI3NywxMjE0LDEyMjQsMTI2MyBDLDEyMTcsMTI2OSwxMjA4LDEyNzMsMTE5OSwxMjczIEMsMTE5MCwxMjczLDExODEsMTI3MCwxMTc1LDEyNjQgTCwxMDMzLDExNTcgQywxMDA0LDExNzIsOTc0LDExODQsOTQzLDExOTQgTCw5MTUsMTM3OCBDLDkxMywxMzk1LDg5NywxNDA4LDg3OSwxNDA4IEwsNjU3LDE0MDggQyw2MzksMTQwOCw2MjUsMTM5Niw2MjEsMTM4MCBDLDYwNSwxMzIwLDU5OSwxMjU1LDU5MiwxMTk0IEMsNTYxLDExODQsNTMwLDExNzEsNTAxLDExNTYgTCwzNjMsMTI2MyBDLDM1NSwxMjY5LDM0NiwxMjczLDMzNywxMjczIEMsMzAzLDEyNzMsMTY4LDExMjcsMTQ0LDEwOTQgQywxMzksMTA4NywxMzUsMTA4MCwxMzUsMTA3MSBDLDEzNSwxMDYyLDEzOSwxMDU0LDE0NSwxMDQ3IEMsMTgyLDEwMDIsMjE4LDk1NywyNTIsOTA5IEMsMjM2LDg3OSwyMjMsODQ5LDIxMyw4MTcgTCwyNyw3ODkgQywxMiw3ODYsMCw3NjgsMCw3NTMgTCwwLDUzMSBDLDAsNTE0LDEyLDQ5OCwyOSw0OTUgTCwyMTIsNDY4IEMsMjIyLDQzNCwyMzYsNDAxLDI1MywzNjkgQywyMTksMzIyLDE4MiwyNzgsMTQ4LDIzMiBDLDE0MywyMjUsMTQwLDIxOCwxNDAsMjA5IEMsMTQwLDIwMSwxNDIsMTkzLDE0NywxODYgQywxODksMTI4LDI1OSw2NiwzMTIsMTggQywzMTksMTEsMzI4LDcsMzM3LDcgQywzNDYsNywzNTUsMTAsMzYyLDE2IEwsNTAzLDEyMyBDLDUzMiwxMDgsNTYyLDk2LDU5Myw4NiBMLDYyMSwtOTggQyw2MjMsLTExNSw2MzksLTEyOCw2NTcsLTEyOCBMLDg3OSwtMTI4IEMsODk3LC0xMjgsOTExLC0xMTYsOTE1LC0xMDAgQyw5MzEsLTQwLDkzNywyNSw5NDQsODYgQyw5NzUsOTYsMTAwNiwxMDksMTAzNSwxMjQgTCwxMTczLDE2IEMsMTE4MSwxMSwxMTkwLDcsMTE5OSw3IEMsMTIzMyw3LDEzNjgsMTU0LDEzOTIsMTg2IEMsMTM5OCwxOTMsMTQwMSwyMDAsMTQwMSwyMDkgQywxNDAxLDIxOCwxMzk3LDIyNywxMzkxLDIzNCBDLDEzNTQsMjc5LDEzMTgsMzIzLDEyODQsMzcyIEMsMTMwMCw0MDEsMTMxMiw0MzEsMTMyMyw0NjMgTCwxNTA4LDQ5MSBDLDE1MjQsNDk0LDE1MzYsNTEyLDE1MzYsNTI3IFpcIlxuXHRcdH0sXG5cdFx0XCJ0cmFzaFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNDA4LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sNTEyLDgwMCBDLDUxMiw4MTgsNDk4LDgzMiw0ODAsODMyIEwsNDE2LDgzMiBDLDM5OCw4MzIsMzg0LDgxOCwzODQsODAwIEwsMzg0LDIyNCBDLDM4NCwyMDYsMzk4LDE5Miw0MTYsMTkyIEwsNDgwLDE5MiBDLDQ5OCwxOTIsNTEyLDIwNiw1MTIsMjI0IE0sNzY4LDgwMCBDLDc2OCw4MTgsNzU0LDgzMiw3MzYsODMyIEwsNjcyLDgzMiBDLDY1NCw4MzIsNjQwLDgxOCw2NDAsODAwIEwsNjQwLDIyNCBDLDY0MCwyMDYsNjU0LDE5Miw2NzIsMTkyIEwsNzM2LDE5MiBDLDc1NCwxOTIsNzY4LDIwNiw3NjgsMjI0IE0sMTAyNCw4MDAgQywxMDI0LDgxOCwxMDEwLDgzMiw5OTIsODMyIEwsOTI4LDgzMiBDLDkxMCw4MzIsODk2LDgxOCw4OTYsODAwIEwsODk2LDIyNCBDLDg5NiwyMDYsOTEwLDE5Miw5MjgsMTkyIEwsOTkyLDE5MiBDLDEwMTAsMTkyLDEwMjQsMjA2LDEwMjQsMjI0IE0sMTE1Miw3NiBDLDExNTIsMjgsMTEyNSwwLDExMjAsMCBMLDI4OCwwIEMsMjgzLDAsMjU2LDI4LDI1Niw3NiBMLDI1NiwxMDI0IEwsMTE1MiwxMDI0IEwsMTE1Miw3NiBNLDQ4MCwxMTUyIEwsNTI5LDEyNjkgQyw1MzIsMTI3Myw1NDAsMTI3OSw1NDYsMTI4MCBMLDg2MywxMjgwIEMsODY4LDEyNzksODc3LDEyNzMsODgwLDEyNjkgTCw5MjgsMTE1MiBNLDE0MDgsMTEyMCBDLDE0MDgsMTEzOCwxMzk0LDExNTIsMTM3NiwxMTUyIEwsMTA2NywxMTUyIEwsOTk3LDEzMTkgQyw5NzcsMTM2OCw5MTcsMTQwOCw4NjQsMTQwOCBMLDU0NCwxNDA4IEMsNDkxLDE0MDgsNDMxLDEzNjgsNDExLDEzMTkgTCwzNDEsMTE1MiBMLDMyLDExNTIgQywxNCwxMTUyLDAsMTEzOCwwLDExMjAgTCwwLDEwNTYgQywwLDEwMzgsMTQsMTAyNCwzMiwxMDI0IEwsMTI4LDEwMjQgTCwxMjgsNzIgQywxMjgsLTM4LDIwMCwtMTI4LDI4OCwtMTI4IEwsMTEyMCwtMTI4IEMsMTIwOCwtMTI4LDEyODAsLTM0LDEyODAsNzYgTCwxMjgwLDEwMjQgTCwxMzc2LDEwMjQgQywxMzk0LDEwMjQsMTQwOCwxMDM4LDE0MDgsMTA1NiBaXCJcblx0XHR9LFxuXHRcdFwiZmlsZV9hbHRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE0NjgsMTE1NiBMLDExNTYsMTQ2OCBDLDExMTksMTUwNSwxMDQ1LDE1MzYsOTkyLDE1MzYgTCw5NiwxNTM2IEMsNDMsMTUzNiwwLDE0OTMsMCwxNDQwIEwsMCwtMTYwIEMsMCwtMjEzLDQzLC0yNTYsOTYsLTI1NiBMLDE0NDAsLTI1NiBDLDE0OTMsLTI1NiwxNTM2LC0yMTMsMTUzNiwtMTYwIEwsMTUzNiw5OTIgQywxNTM2LDEwNDUsMTUwNSwxMTE5LDE0NjgsMTE1NiBNLDEwMjQsMTQwMCBDLDEwNDEsMTM5NCwxMDU4LDEzODUsMTA2NSwxMzc4IEwsMTM3OCwxMDY1IEMsMTM4NSwxMDU4LDEzOTQsMTA0MSwxNDAwLDEwMjQgTCwxMDI0LDEwMjQgTSwxNDA4LC0xMjggTCwxMjgsLTEyOCBMLDEyOCwxNDA4IEwsODk2LDE0MDggTCw4OTYsOTkyIEMsODk2LDkzOSw5MzksODk2LDk5Miw4OTYgTCwxNDA4LDg5NiBaXCJcblx0XHR9LFxuXHRcdFwiZG93bmxvYWRfYWx0XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE2NjQsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMjgwLDE5MiBDLDEyODAsMTU3LDEyNTEsMTI4LDEyMTYsMTI4IEMsMTE4MSwxMjgsMTE1MiwxNTcsMTE1MiwxOTIgQywxMTUyLDIyNywxMTgxLDI1NiwxMjE2LDI1NiBDLDEyNTEsMjU2LDEyODAsMjI3LDEyODAsMTkyIE0sMTUzNiwxOTIgQywxNTM2LDE1NywxNTA3LDEyOCwxNDcyLDEyOCBDLDE0MzcsMTI4LDE0MDgsMTU3LDE0MDgsMTkyIEMsMTQwOCwyMjcsMTQzNywyNTYsMTQ3MiwyNTYgQywxNTA3LDI1NiwxNTM2LDIyNywxNTM2LDE5MiBNLDE2NjQsNDE2IEMsMTY2NCw0NjksMTYyMSw1MTIsMTU2OCw1MTIgTCwxMTA0LDUxMiBMLDk2OCwzNzYgQyw5MzEsMzQwLDg4MywzMjAsODMyLDMyMCBDLDc4MSwzMjAsNzMzLDM0MCw2OTYsMzc2IEwsNTYxLDUxMiBMLDk2LDUxMiBDLDQzLDUxMiwwLDQ2OSwwLDQxNiBMLDAsOTYgQywwLDQzLDQzLDAsOTYsMCBMLDE1NjgsMCBDLDE2MjEsMCwxNjY0LDQzLDE2NjQsOTYgTSwxMzM5LDk4NSBDLDEzMjksMTAwOCwxMzA2LDEwMjQsMTI4MCwxMDI0IEwsMTAyNCwxMDI0IEwsMTAyNCwxNDcyIEMsMTAyNCwxNTA3LDk5NSwxNTM2LDk2MCwxNTM2IEwsNzA0LDE1MzYgQyw2NjksMTUzNiw2NDAsMTUwNyw2NDAsMTQ3MiBMLDY0MCwxMDI0IEwsMzg0LDEwMjQgQywzNTgsMTAyNCwzMzUsMTAwOCwzMjUsOTg1IEMsMzE1LDk2MSwzMjAsOTMzLDMzOSw5MTUgTCw3ODcsNDY3IEMsNzk5LDQ1NCw4MTYsNDQ4LDgzMiw0NDggQyw4NDgsNDQ4LDg2NSw0NTQsODc3LDQ2NyBMLDEzMjUsOTE1IEMsMTM0NCw5MzMsMTM0OSw5NjEsMTMzOSw5ODUgWlwiXG5cdFx0fSxcblx0XHRcInJlcGVhdFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTUzNiwxMjgwIEMsMTUzNiwxMzA2LDE1MjAsMTMyOSwxNDk3LDEzMzkgQywxNDczLDEzNDksMTQ0NSwxMzQ0LDE0MjcsMTMyNSBMLDEyOTcsMTE5NiBDLDExNTYsMTMyOSw5NjUsMTQwOCw3NjgsMTQwOCBDLDM0NSwxNDA4LDAsMTA2MywwLDY0MCBDLDAsMjE3LDM0NSwtMTI4LDc2OCwtMTI4IEMsOTk3LC0xMjgsMTIxMywtMjcsMTM1OSwxNDkgQywxMzY5LDE2MiwxMzY5LDE4MSwxMzU3LDE5MiBMLDEyMjAsMzMwIEMsMTIxMywzMzYsMTIwNCwzMzksMTE5NSwzMzkgQywxMTg2LDMzOCwxMTc3LDMzNCwxMTcyLDMyNyBDLDEwNzQsMjAwLDkyNywxMjgsNzY4LDEyOCBDLDQ4NiwxMjgsMjU2LDM1OCwyNTYsNjQwIEMsMjU2LDkyMiw0ODYsMTE1Miw3NjgsMTE1MiBDLDg5OSwxMTUyLDEwMjMsMTEwMiwxMTE3LDEwMTUgTCw5NzksODc3IEMsOTYwLDg1OSw5NTUsODMxLDk2NSw4MDggQyw5NzUsNzg0LDk5OCw3NjgsMTAyNCw3NjggTCwxNDcyLDc2OCBDLDE1MDcsNzY4LDE1MzYsNzk3LDE1MzYsODMyIFpcIlxuXHRcdH0sXG5cdFx0XCJwZW5jaWxcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDM2MywwIEwsMjU2LDAgTCwyNTYsMTI4IEwsMTI4LDEyOCBMLDEyOCwyMzUgTCwyMTksMzI2IEwsNDU0LDkxIE0sODg2LDkyOCBDLDg4Niw5MjIsODg0LDkxNiw4NzksOTExIEwsMzM3LDM2OSBDLDMzMiwzNjQsMzI2LDM2MiwzMjAsMzYyIEMsMzA3LDM2MiwyOTgsMzcxLDI5OCwzODQgQywyOTgsMzkwLDMwMCwzOTYsMzA1LDQwMSBMLDg0Nyw5NDMgQyw4NTIsOTQ4LDg1OCw5NTAsODY0LDk1MCBDLDg3Nyw5NTAsODg2LDk0MSw4ODYsOTI4IE0sODMyLDExMjAgTCwwLDI4OCBMLDAsLTEyOCBMLDQxNiwtMTI4IEwsMTI0OCw3MDQgTSwxNTE1LDEwMjQgQywxNTE1LDEwNTgsMTUwMSwxMDkxLDE0NzgsMTExNSBMLDEyNDMsMTM0OSBDLDEyMTksMTM3MywxMTg2LDEzODcsMTE1MiwxMzg3IEMsMTExOCwxMzg3LDEwODUsMTM3MywxMDYyLDEzNDkgTCw4OTYsMTE4NCBMLDEzMTIsNzY4IEwsMTQ3OCw5MzQgQywxNTAxLDk1NywxNTE1LDk5MCwxNTE1LDEwMjQgWlwiXG5cdFx0fSxcblx0XHRcImVkaXRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDg4OCwzNTIgTCw4MzIsMzUyIEwsODMyLDQ0OCBMLDczNiw0NDggTCw3MzYsNTA0IEwsODUyLDYyMCBMLDEwMDQsNDY4IE0sMTMyOCwxMDcyIEMsMTMzNywxMDYzLDEzMzYsMTA0OCwxMzI3LDEwMzkgTCw5NzcsNjg5IEMsOTY4LDY4MCw5NTMsNjc5LDk0NCw2ODggQyw5MzUsNjk3LDkzNiw3MTIsOTQ1LDcyMSBMLDEyOTUsMTA3MSBDLDEzMDQsMTA4MCwxMzE5LDEwODEsMTMyOCwxMDcyIE0sMTQwOCw0NzggQywxNDA4LDQ5MSwxNDAwLDUwMiwxMzg4LDUwNyBDLDEzNzYsNTEyLDEzNjMsNTEwLDEzNTMsNTAwIEwsMTI4OSw0MzYgQywxMjgzLDQzMCwxMjgwLDQyMiwxMjgwLDQxNCBMLDEyODAsMjg4IEMsMTI4MCwyMDAsMTIwOCwxMjgsMTEyMCwxMjggTCwyODgsMTI4IEMsMjAwLDEyOCwxMjgsMjAwLDEyOCwyODggTCwxMjgsMTEyMCBDLDEyOCwxMjA4LDIwMCwxMjgwLDI4OCwxMjgwIEwsMTEyMCwxMjgwIEMsMTEzNSwxMjgwLDExNTAsMTI3OCwxMTY1LDEyNzQgQywxMTc2LDEyNzAsMTE4OCwxMjczLDExOTcsMTI4MiBMLDEyNDYsMTMzMSBDLDEyNTQsMTMzOSwxMjU3LDEzNDksMTI1NSwxMzYwIEMsMTI1MywxMzcwLDEyNDYsMTM3OSwxMjM3LDEzODMgQywxMjAwLDE0MDAsMTE2MCwxNDA4LDExMjAsMTQwOCBMLDI4OCwxNDA4IEMsMTI5LDE0MDgsMCwxMjc5LDAsMTEyMCBMLDAsMjg4IEMsMCwxMjksMTI5LDAsMjg4LDAgTCwxMTIwLDAgQywxMjc5LDAsMTQwOCwxMjksMTQwOCwyODggTSwxMzEyLDEyMTYgTCw2NDAsNTQ0IEwsNjQwLDI1NiBMLDkyOCwyNTYgTCwxNjAwLDkyOCBNLDE3NTYsMTA4NCBDLDE3OTMsMTEyMSwxNzkzLDExODMsMTc1NiwxMjIwIEwsMTYwNCwxMzcyIEMsMTU2NywxNDA5LDE1MDUsMTQwOSwxNDY4LDEzNzIgTCwxMzc2LDEyODAgTCwxNjY0LDk5MiBMLDE3NTYsMTA4NCBaXCJcblx0XHR9LFxuXHRcdFwicGxheVwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNDA4LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTM4NCw2MDkgQywxNDE1LDYyNiwxNDE1LDY1NCwxMzg0LDY3MSBMLDU2LDE0MDkgQywyNSwxNDI2LDAsMTQxMSwwLDEzNzYgTCwwLC05NiBDLDAsLTEzMSwyNSwtMTQ2LDU2LC0xMjkgWlwiXG5cdFx0fSxcblx0XHRcInBhdXNlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNTM2LDEzNDQgQywxNTM2LDEzNzksMTUwNywxNDA4LDE0NzIsMTQwOCBMLDk2MCwxNDA4IEMsOTI1LDE0MDgsODk2LDEzNzksODk2LDEzNDQgTCw4OTYsLTY0IEMsODk2LC05OSw5MjUsLTEyOCw5NjAsLTEyOCBMLDE0NzIsLTEyOCBDLDE1MDcsLTEyOCwxNTM2LC05OSwxNTM2LC02NCBNLDY0MCwxMzQ0IEMsNjQwLDEzNzksNjExLDE0MDgsNTc2LDE0MDggTCw2NCwxNDA4IEMsMjksMTQwOCwwLDEzNzksMCwxMzQ0IEwsMCwtNjQgQywwLC05OSwyOSwtMTI4LDY0LC0xMjggTCw1NzYsLTEyOCBDLDYxMSwtMTI4LDY0MCwtOTksNjQwLC02NCBaXCJcblx0XHR9LFxuXHRcdFwic3RvcFwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNTM2LFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTUzNiwxMzQ0IEMsMTUzNiwxMzc5LDE1MDcsMTQwOCwxNDcyLDE0MDggTCw2NCwxNDA4IEMsMjksMTQwOCwwLDEzNzksMCwxMzQ0IEwsMCwtNjQgQywwLC05OSwyOSwtMTI4LDY0LC0xMjggTCwxNDcyLC0xMjggQywxNTA3LC0xMjgsMTUzNiwtOTksMTUzNiwtNjQgWlwiXG5cdFx0fSxcblx0XHRcInJlc2l6ZV9mdWxsXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSw3NTUsNDgwIEMsNzU1LDQ4OCw3NTEsNDk3LDc0NSw1MDMgTCw2MzEsNjE3IEMsNjI1LDYyMyw2MTYsNjI3LDYwOCw2MjcgQyw2MDAsNjI3LDU5MSw2MjMsNTg1LDYxNyBMLDI1MywyODUgTCwxMDksNDI5IEMsOTcsNDQxLDgxLDQ0OCw2NCw0NDggQywyOSw0NDgsMCw0MTksMCwzODQgTCwwLC02NCBDLDAsLTk5LDI5LC0xMjgsNjQsLTEyOCBMLDUxMiwtMTI4IEMsNTQ3LC0xMjgsNTc2LC05OSw1NzYsLTY0IEMsNTc2LC00Nyw1NjksLTMxLDU1NywtMTkgTCw0MTMsMTI1IEwsNzQ1LDQ1NyBDLDc1MSw0NjMsNzU1LDQ3Miw3NTUsNDgwIE0sMTUzNiwxMzQ0IEMsMTUzNiwxMzc5LDE1MDcsMTQwOCwxNDcyLDE0MDggTCwxMDI0LDE0MDggQyw5ODksMTQwOCw5NjAsMTM3OSw5NjAsMTM0NCBDLDk2MCwxMzI3LDk2NywxMzExLDk3OSwxMjk5IEwsMTEyMywxMTU1IEwsNzkxLDgyMyBDLDc4NSw4MTcsNzgxLDgwOCw3ODEsODAwIEMsNzgxLDc5Miw3ODUsNzgzLDc5MSw3NzcgTCw5MDUsNjYzIEMsOTExLDY1Nyw5MjAsNjUzLDkyOCw2NTMgQyw5MzYsNjUzLDk0NSw2NTcsOTUxLDY2MyBMLDEyODMsOTk1IEwsMTQyNyw4NTEgQywxNDM5LDgzOSwxNDU1LDgzMiwxNDcyLDgzMiBDLDE1MDcsODMyLDE1MzYsODYxLDE1MzYsODk2IFpcIlxuXHRcdH0sXG5cdFx0XCJyZXNpemVfc21hbGxcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDc2OCw1NzYgQyw3NjgsNjExLDczOSw2NDAsNzA0LDY0MCBMLDI1Niw2NDAgQywyMjEsNjQwLDE5Miw2MTEsMTkyLDU3NiBDLDE5Miw1NTksMTk5LDU0MywyMTEsNTMxIEwsMzU1LDM4NyBMLDIzLDU1IEMsMTcsNDksMTMsNDAsMTMsMzIgQywxMywyNCwxNywxNSwyMyw5IEwsMTM3LC0xMDUgQywxNDMsLTExMSwxNTIsLTExNSwxNjAsLTExNSBDLDE2OCwtMTE1LDE3NywtMTExLDE4MywtMTA1IEwsNTE1LDIyNyBMLDY1OSw4MyBDLDY3MSw3MSw2ODcsNjQsNzA0LDY0IEMsNzM5LDY0LDc2OCw5Myw3NjgsMTI4IE0sMTUyMywxMjQ4IEMsMTUyMywxMjU2LDE1MTksMTI2NSwxNTEzLDEyNzEgTCwxMzk5LDEzODUgQywxMzkzLDEzOTEsMTM4NCwxMzk1LDEzNzYsMTM5NSBDLDEzNjgsMTM5NSwxMzU5LDEzOTEsMTM1MywxMzg1IEwsMTAyMSwxMDUzIEwsODc3LDExOTcgQyw4NjUsMTIwOSw4NDksMTIxNiw4MzIsMTIxNiBDLDc5NywxMjE2LDc2OCwxMTg3LDc2OCwxMTUyIEwsNzY4LDcwNCBDLDc2OCw2NjksNzk3LDY0MCw4MzIsNjQwIEwsMTI4MCw2NDAgQywxMzE1LDY0MCwxMzQ0LDY2OSwxMzQ0LDcwNCBDLDEzNDQsNzIxLDEzMzcsNzM3LDEzMjUsNzQ5IEwsMTE4MSw4OTMgTCwxNTEzLDEyMjUgQywxNTE5LDEyMzEsMTUyMywxMjQwLDE1MjMsMTI0OCBaXCJcblx0XHR9LFxuXHRcdFwiZXllX29wZW5cIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE2NjQsNTc2IEMsMTQ5MywzMTIsMTIxNywxMjgsODk2LDEyOCBDLDU3NSwxMjgsMjk5LDMxMiwxMjgsNTc2IEMsMjIzLDcyMywzNTMsODQ5LDUwOSw5MjkgQyw0NjksODYxLDQ0OCw3ODMsNDQ4LDcwNCBDLDQ0OCw0NTcsNjQ5LDI1Niw4OTYsMjU2IEMsMTE0MywyNTYsMTM0NCw0NTcsMTM0NCw3MDQgQywxMzQ0LDc4MywxMzIzLDg2MSwxMjgzLDkyOSBDLDE0MzksODQ5LDE1NjksNzIzLDE2NjQsNTc2IE0sOTQ0LDk2MCBDLDk0NCw5MzQsOTIyLDkxMiw4OTYsOTEyIEMsNzgyLDkxMiw2ODgsODE4LDY4OCw3MDQgQyw2ODgsNjc4LDY2Niw2NTYsNjQwLDY1NiBDLDYxNCw2NTYsNTkyLDY3OCw1OTIsNzA0IEMsNTkyLDg3MSw3MjksMTAwOCw4OTYsMTAwOCBDLDkyMiwxMDA4LDk0NCw5ODYsOTQ0LDk2MCBNLDE3OTIsNTc2IEMsMTc5Miw2MDEsMTc4NCw2MjQsMTc3Miw2NDUgQywxNTg4LDk0NywxMjUxLDExNTIsODk2LDExNTIgQyw1NDEsMTE1MiwyMDQsOTQ3LDIwLDY0NSBDLDgsNjI0LDAsNjAxLDAsNTc2IEMsMCw1NTEsOCw1MjgsMjAsNTA3IEMsMjA0LDIwNSw1NDEsMCw4OTYsMCBDLDEyNTEsMCwxNTg4LDIwNCwxNzcyLDUwNyBDLDE3ODQsNTI4LDE3OTIsNTUxLDE3OTIsNTc2IFpcIlxuXHRcdH0sXG5cdFx0XCJleWVfY2xvc2VcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTc5Mixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDU1NSwyMDEgQywzNzksMjgwLDIzMiw0MTUsMTI4LDU3NiBDLDIyMyw3MjMsMzUzLDg0OSw1MDksOTI5IEMsNDY5LDg2MSw0NDgsNzgzLDQ0OCw3MDQgQyw0NDgsNTYxLDUxNyw0MjYsNjMzLDM0MiBNLDk0NCw5NjAgQyw5NDQsOTM0LDkyMiw5MTIsODk2LDkxMiBDLDc4Miw5MTIsNjg4LDgxOSw2ODgsNzA0IEMsNjg4LDY3OCw2NjYsNjU2LDY0MCw2NTYgQyw2MTQsNjU2LDU5Miw2NzgsNTkyLDcwNCBDLDU5Miw4NzEsNzI5LDEwMDgsODk2LDEwMDggQyw5MjIsMTAwOCw5NDQsOTg2LDk0NCw5NjAgTSwxMzA3LDExNTEgQywxMzA3LDExNjIsMTMwMSwxMTcyLDEyOTEsMTE3OCBDLDEyNzAsMTE5MCwxMTc2LDEyNDgsMTE1OCwxMjQ4IEMsMTE0NiwxMjQ4LDExMzYsMTI0MiwxMTMwLDEyMzIgTCwxMDc2LDExMzUgQywxMDE3LDExNDYsOTU2LDExNTIsODk2LDExNTIgQyw1MjcsMTE1MiwyMTgsOTQ5LDIwLDY0NSBDLDcsNjI1LDAsNjAwLDAsNTc2IEMsMCw1NTEsNyw1MjcsMjAsNTA3IEMsMTM1LDMyNywyOTgsMTc3LDQ5Miw4OSBDLDQ4Miw3Miw0NDgsMTgsNDQ4LDIgQyw0NDgsLTEwLDQ1NCwtMjAsNDY0LC0yNiBDLDQ4NSwtMzgsNTgwLC05Niw1OTgsLTk2IEMsNjA5LC05Niw2MjAsLTkwLDYyNiwtODAgTCw2NzUsOSBDLDg4NiwzODYsMTA5NSw3NjUsMTMwNiwxMTQyIEMsMTMwNywxMTQ0LDEzMDcsMTE0OSwxMzA3LDExNTEgTSwxMzQ0LDcwNCBDLDEzNDQsNzMyLDEzNDEsNzYwLDEzMzYsNzg4IEwsMTA1NiwyODYgQywxMjI5LDM1MiwxMzQ0LDUxOCwxMzQ0LDcwNCBNLDE3OTIsNTc2IEMsMTc5Miw2MDIsMTc4NSw2MjMsMTc3Miw2NDUgQywxNjk0LDc3NCwxNTY5LDg5OSwxNDQ1LDk4MiBMLDEzODIsODcwIEMsMTQ5NSw3OTIsMTU5MCw2OTEsMTY2NCw1NzYgQywxNTA4LDMzNCwxMjYxLDE1Nyw5NzAsMTMyIEwsODk2LDAgQywxMTk3LDAsMTQ2NywxMzcsMTY2MywzNjIgQywxNzAyLDQwNywxNzQxLDQ1NiwxNzcyLDUwNyBDLDE3ODUsNTI5LDE3OTIsNTUwLDE3OTIsNTc2IFpcIlxuXHRcdH0sXG5cdFx0XCJmb2xkZXJfb3BlblwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxOTIwLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sMTg3OSw1ODQgQywxODc5LDYyOSwxODI4LDY0MCwxNzkyLDY0MCBMLDcwNCw2NDAgQyw2MTYsNjQwLDQ5OCw1ODYsNDQwLDUxOCBMLDEwNCwxMjIgQyw4OCwxMDQsNzMsODAsNzMsNTYgQyw3MywxMSwxMjQsMCwxNjAsMCBMLDEyNDgsMCBDLDEzMzYsMCwxNDU0LDU0LDE1MTIsMTIyIEwsMTg0OCw1MTggQywxODY0LDUzNiwxODc5LDU2MCwxODc5LDU4NCBNLDE1MzYsOTI4IEMsMTUzNiwxMDUxLDE0MzUsMTE1MiwxMzEyLDExNTIgTCw3NjgsMTE1MiBMLDc2OCwxMTg0IEMsNzY4LDEzMDcsNjY3LDE0MDgsNTQ0LDE0MDggTCwyMjQsMTQwOCBDLDEwMSwxNDA4LDAsMTMwNywwLDExODQgTCwwLDIyNCBDLDAsMjE2LDEsMjA3LDEsMTk5IEwsNiwyMDUgTCwzNDMsNjAxIEMsNDI0LDY5Nyw1NzksNzY4LDcwNCw3NjggTCwxNTM2LDc2OCBaXCJcblx0XHR9LFxuXHRcdFwic2lnbmluXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxMTg0LDY0MCBDLDExODQsNjU3LDExNzcsNjczLDExNjUsNjg1IEwsNjIxLDEyMjkgQyw2MDksMTI0MSw1OTMsMTI0OCw1NzYsMTI0OCBDLDU0MSwxMjQ4LDUxMiwxMjE5LDUxMiwxMTg0IEwsNTEyLDg5NiBMLDY0LDg5NiBDLDI5LDg5NiwwLDg2NywwLDgzMiBMLDAsNDQ4IEMsMCw0MTMsMjksMzg0LDY0LDM4NCBMLDUxMiwzODQgTCw1MTIsOTYgQyw1MTIsNjEsNTQxLDMyLDU3NiwzMiBDLDU5MywzMiw2MDksMzksNjIxLDUxIEwsMTE2NSw1OTUgQywxMTc3LDYwNywxMTg0LDYyMywxMTg0LDY0MCBNLDE1MzYsOTkyIEMsMTUzNiwxMTUxLDE0MDcsMTI4MCwxMjQ4LDEyODAgTCw5MjgsMTI4MCBDLDg4MywxMjgwLDg5NiwxMjEyLDg5NiwxMTg0IEMsODk2LDExNDcsOTM1LDExNTIsOTYwLDExNTIgTCwxMjQ4LDExNTIgQywxMzM2LDExNTIsMTQwOCwxMDgwLDE0MDgsOTkyIEwsMTQwOCwyODggQywxNDA4LDIwMCwxMzM2LDEyOCwxMjQ4LDEyOCBMLDkyOCwxMjggQyw4ODMsMTI4LDg5Niw2MCw4OTYsMzIgQyw4OTYsMTUsOTExLDAsOTI4LDAgTCwxMjQ4LDAgQywxNDA3LDAsMTUzNiwxMjksMTUzNiwyODggWlwiXG5cdFx0fSxcblx0XHRcInVwbG9hZF9hbHRcIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTY2NCxcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDEyODAsNjQgQywxMjgwLDI5LDEyNTEsMCwxMjE2LDAgQywxMTgxLDAsMTE1MiwyOSwxMTUyLDY0IEMsMTE1Miw5OSwxMTgxLDEyOCwxMjE2LDEyOCBDLDEyNTEsMTI4LDEyODAsOTksMTI4MCw2NCBNLDE1MzYsNjQgQywxNTM2LDI5LDE1MDcsMCwxNDcyLDAgQywxNDM3LDAsMTQwOCwyOSwxNDA4LDY0IEMsMTQwOCw5OSwxNDM3LDEyOCwxNDcyLDEyOCBDLDE1MDcsMTI4LDE1MzYsOTksMTUzNiw2NCBNLDE2NjQsMjg4IEMsMTY2NCwzNDEsMTYyMSwzODQsMTU2OCwzODQgTCwxMTQxLDM4NCBDLDExMTQsMzEwLDEwNDMsMjU2LDk2MCwyNTYgTCw3MDQsMjU2IEMsNjIxLDI1Niw1NTAsMzEwLDUyMywzODQgTCw5NiwzODQgQyw0MywzODQsMCwzNDEsMCwyODggTCwwLC0zMiBDLDAsLTg1LDQzLC0xMjgsOTYsLTEyOCBMLDE1NjgsLTEyOCBDLDE2MjEsLTEyOCwxNjY0LC04NSwxNjY0LC0zMiBNLDEzMzksOTM2IEMsMTM0OSw5NTksMTM0NCw5ODcsMTMyNSwxMDA1IEwsODc3LDE0NTMgQyw4NjUsMTQ2Niw4NDgsMTQ3Miw4MzIsMTQ3MiBDLDgxNiwxNDcyLDc5OSwxNDY2LDc4NywxNDUzIEwsMzM5LDEwMDUgQywzMjAsOTg3LDMxNSw5NTksMzI1LDkzNiBDLDMzNSw5MTIsMzU4LDg5NiwzODQsODk2IEwsNjQwLDg5NiBMLDY0MCw0NDggQyw2NDAsNDEzLDY2OSwzODQsNzA0LDM4NCBMLDk2MCwzODQgQyw5OTUsMzg0LDEwMjQsNDEzLDEwMjQsNDQ4IEwsMTAyNCw4OTYgTCwxMjgwLDg5NiBDLDEzMDYsODk2LDEzMjksOTEyLDEzMzksOTM2IFpcIlxuXHRcdH0sXG5cdFx0XCJzYXZlXCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE1MzYsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwzODQsMCBMLDM4NCwzODQgTCwxMTUyLDM4NCBMLDExNTIsMCBNLDEyODAsMCBMLDEyODAsNDE2IEMsMTI4MCw0NjksMTIzNyw1MTIsMTE4NCw1MTIgTCwzNTIsNTEyIEMsMjk5LDUxMiwyNTYsNDY5LDI1Niw0MTYgTCwyNTYsMCBMLDEyOCwwIEwsMTI4LDEyODAgTCwyNTYsMTI4MCBMLDI1Niw4NjQgQywyNTYsODExLDI5OSw3NjgsMzUyLDc2OCBMLDkyOCw3NjggQyw5ODEsNzY4LDEwMjQsODExLDEwMjQsODY0IEwsMTAyNCwxMjgwIEMsMTA0NCwxMjgwLDEwODMsMTI2NCwxMDk3LDEyNTAgTCwxMzc4LDk2OSBDLDEzOTEsOTU2LDE0MDgsOTE1LDE0MDgsODk2IEwsMTQwOCwwIE0sODk2LDkyOCBDLDg5Niw5MTEsODgxLDg5Niw4NjQsODk2IEwsNjcyLDg5NiBDLDY1NSw4OTYsNjQwLDkxMSw2NDAsOTI4IEwsNjQwLDEyNDggQyw2NDAsMTI2NSw2NTUsMTI4MCw2NzIsMTI4MCBMLDg2NCwxMjgwIEMsODgxLDEyODAsODk2LDEyNjUsODk2LDEyNDggTCw4OTYsOTI4IE0sMTUzNiw4OTYgQywxNTM2LDk0OSwxNTA2LDEwMjIsMTQ2OCwxMDYwIEwsMTE4OCwxMzQwIEMsMTE1MCwxMzc4LDEwNzcsMTQwOCwxMDI0LDE0MDggTCw5NiwxNDA4IEMsNDMsMTQwOCwwLDEzNjUsMCwxMzEyIEwsMCwtMzIgQywwLC04NSw0MywtMTI4LDk2LC0xMjggTCwxNDQwLC0xMjggQywxNDkzLC0xMjgsMTUzNiwtODUsMTUzNiwtMzIgWlwiXG5cdFx0fSxcblx0XHRcInVuZG9cIjoge1xuXHRcdFx0XCJhZHZhbmNlV2lkdGhcIjogMTUzNixcblx0XHRcdFwiY29tbWFuZHNcIjogXCJNLDE1MzYsNjQwIEMsMTUzNiwxMDYzLDExOTEsMTQwOCw3NjgsMTQwOCBDLDU3MSwxNDA4LDM4MCwxMzI5LDIzOSwxMTk2IEwsMTA5LDEzMjUgQyw5MSwxMzQ0LDYzLDEzNDksNDAsMTMzOSBDLDE2LDEzMjksMCwxMzA2LDAsMTI4MCBMLDAsODMyIEMsMCw3OTcsMjksNzY4LDY0LDc2OCBMLDUxMiw3NjggQyw1MzgsNzY4LDU2MSw3ODQsNTcxLDgwOCBDLDU4MSw4MzEsNTc2LDg1OSw1NTcsODc3IEwsNDIwLDEwMTUgQyw1MTMsMTEwMiw2MzcsMTE1Miw3NjgsMTE1MiBDLDEwNTAsMTE1MiwxMjgwLDkyMiwxMjgwLDY0MCBDLDEyODAsMzU4LDEwNTAsMTI4LDc2OCwxMjggQyw2MDksMTI4LDQ2MiwyMDAsMzY0LDMyNyBDLDM1OSwzMzQsMzUwLDMzOCwzNDEsMzM5IEMsMzMyLDMzOSwzMjMsMzM2LDMxNiwzMzAgTCwxNzksMTkyIEMsMTY4LDE4MSwxNjcsMTYyLDE3NywxNDkgQywzMjMsLTI3LDUzOSwtMTI4LDc2OCwtMTI4IEMsMTE5MSwtMTI4LDE1MzYsMjE3LDE1MzYsNjQwIFpcIlxuXHRcdH0sXG5cdFx0XCJwYXN0ZVwiOiB7XG5cdFx0XHRcImFkdmFuY2VXaWR0aFwiOiAxNzkyLFxuXHRcdFx0XCJjb21tYW5kc1wiOiBcIk0sNzY4LC0xMjggTCw3NjgsMTAyNCBMLDExNTIsMTAyNCBMLDExNTIsNjA4IEMsMTE1Miw1NTUsMTE5NSw1MTIsMTI0OCw1MTIgTCwxNjY0LDUxMiBMLDE2NjQsLTEyOCBNLDEwMjQsMTMxMiBDLDEwMjQsMTI5NSwxMDA5LDEyODAsOTkyLDEyODAgTCwyODgsMTI4MCBDLDI3MSwxMjgwLDI1NiwxMjk1LDI1NiwxMzEyIEwsMjU2LDEzNzYgQywyNTYsMTM5MywyNzEsMTQwOCwyODgsMTQwOCBMLDk5MiwxNDA4IEMsMTAwOSwxNDA4LDEwMjQsMTM5MywxMDI0LDEzNzYgTCwxMDI0LDEzMTIgTSwxMjgwLDY0MCBMLDEyODAsOTM5IEwsMTU3OSw2NDAgTSwxNzkyLDUxMiBDLDE3OTIsNTY1LDE3NjIsNjM4LDE3MjQsNjc2IEwsMTMxNiwxMDg0IEMsMTMwNSwxMDk1LDEyOTMsMTEwNCwxMjgwLDExMTIgTCwxMjgwLDE0NDAgQywxMjgwLDE0OTMsMTIzNywxNTM2LDExODQsMTUzNiBMLDk2LDE1MzYgQyw0MywxNTM2LDAsMTQ5MywwLDE0NDAgTCwwLDk2IEMsMCw0Myw0MywwLDk2LDAgTCw2NDAsMCBMLDY0MCwtMTYwIEMsNjQwLC0yMTMsNjgzLC0yNTYsNzM2LC0yNTYgTCwxNjk2LC0yNTYgQywxNzQ5LC0yNTYsMTc5MiwtMjEzLDE3OTIsLTE2MCBaXCJcblx0XHR9LFxuXHRcdFwiZm9sZGVyX29wZW5fYWx0XCI6IHtcblx0XHRcdFwiYWR2YW5jZVdpZHRoXCI6IDE5MjAsXG5cdFx0XHRcImNvbW1hbmRzXCI6IFwiTSwxNzgxLDYwNSBDLDE3ODEsNTkwLDE3NzIsNTc3LDE3NjMsNTY2IEwsMTQ2OSwyMDMgQywxNDM1LDE2MSwxMzY1LDEyOCwxMzEyLDEyOCBMLDIyNCwxMjggQywyMDIsMTI4LDE3MSwxMzUsMTcxLDE2MyBDLDE3MSwxNzgsMTgwLDE5MSwxODksMjAzIEwsNDgzLDU2NiBDLDUxNyw2MDcsNTg3LDY0MCw2NDAsNjQwIEwsMTcyOCw2NDAgQywxNzUwLDY0MCwxNzgxLDYzMywxNzgxLDYwNSBNLDY0MCw3NjggQyw1NDksNzY4LDQ0Miw3MTcsMzg0LDY0NiBMLDEyOCwzMzEgTCwxMjgsMTE4NCBDLDEyOCwxMjM3LDE3MSwxMjgwLDIyNCwxMjgwIEwsNTQ0LDEyODAgQyw1OTcsMTI4MCw2NDAsMTIzNyw2NDAsMTE4NCBMLDY0MCwxMTIwIEMsNjQwLDEwNjcsNjgzLDEwMjQsNzM2LDEwMjQgTCwxMzEyLDEwMjQgQywxMzY1LDEwMjQsMTQwOCw5ODEsMTQwOCw5MjggTCwxNDA4LDc2OCBNLDE5MDksNjA1IEMsMTkwOSw2MjksMTkwNCw2NTIsMTg5NCw2NzMgQywxODY0LDczNywxNzk2LDc2OCwxNzI4LDc2OCBMLDE1MzYsNzY4IEwsMTUzNiw5MjggQywxNTM2LDEwNTEsMTQzNSwxMTUyLDEzMTIsMTE1MiBMLDc2OCwxMTUyIEwsNzY4LDExODQgQyw3NjgsMTMwNyw2NjcsMTQwOCw1NDQsMTQwOCBMLDIyNCwxNDA4IEMsMTAxLDE0MDgsMCwxMzA3LDAsMTE4NCBMLDAsMjI0IEMsMCwxMDEsMTAxLDAsMjI0LDAgTCwxMzEyLDAgQywxNDAyLDAsMTUxMSw1MiwxNTY4LDEyMiBMLDE4NjMsNDg1IEMsMTg5MCw1MTksMTkwOSw1NjEsMTkwOSw2MDUgWlwiXG5cdFx0fVxuXHR9XG59IiwiXG52YXIgREVGQVVMVF9USU1FX1NDQUxFID0gNjA7XG5cbi8vIERpbWVuc2lvbnNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRMSU5FX0hFSUdIVDogMjYsXG5cdERJQU1PTkRfU0laRTogMTAsXG5cdE1BUktFUl9UUkFDS19IRUlHSFQ6IDYwLFxuXHR3aWR0aDogNjAwLFxuXHRoZWlnaHQ6IDIwMCxcblx0VElNRUxJTkVfU0NST0xMX0hFSUdIVDogMCxcblx0TEVGVF9QQU5FX1dJRFRIOiAyNTAsXG5cdHRpbWVfc2NhbGU6IERFRkFVTFRfVElNRV9TQ0FMRSwgLy8gbnVtYmVyIG9mIHBpeGVscyB0byAxIHNlY29uZFxuICAgIGRlZmF1bHRfbGVuZ3RoOiAyMCwgLy8gc2Vjb25kc1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHQvLyBwaG90b3Nob3AgY29sb3JzXG5cdGE6ICcjMzQzNDM0Jyxcblx0YjogJyM1MzUzNTMnLFxuXHRjOiAnI2I4YjhiOCcsXG5cdGQ6ICcjZDZkNmQ2Jyxcbn07IiwiLypcbiAqIEBhdXRob3IgSm9zaHVhIEtvbyBodHRwOi8vam9zaHVha29vLmNvbVxuICovXG5cbnZhciB1bmRvID0gcmVxdWlyZSgnLi91dGlsX3VuZG8nKSxcblx0RGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vdXRpbF9kaXNwYXRjaGVyJyksXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHRVbmRvTWFuYWdlciA9IHVuZG8uVW5kb01hbmFnZXIsXG5cdFVuZG9TdGF0ZSA9IHVuZG8uVW5kb1N0YXRlLFxuXHRTZXR0aW5ncyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyksXG5cdExheWVyQ2FiaW5ldCA9IHJlcXVpcmUoJy4vdmlld19sYXllcl9jYWJpbmV0JyksXG5cdFRpbWVsaW5lUGFuZWwgPSByZXF1aXJlKCcuL3ZpZXdfcGFuZWwnKSxcblx0cGFja2FnZV9qc29uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJyksXG5cdEljb25CdXR0b24gPSByZXF1aXJlKCcuL3VpX2ljb25fYnV0dG9uJyksXG5cdHN0eWxlID0gdXRpbHMuc3R5bGUsXG5cdHNhdmVUb0ZpbGUgPSB1dGlscy5zYXZlVG9GaWxlLFxuXHRvcGVuQXMgPSB1dGlscy5vcGVuQXMsXG5cdFNUT1JBR0VfUFJFRklYID0gdXRpbHMuU1RPUkFHRV9QUkVGSVgsXG5cdFNjcm9sbEJhciA9IHJlcXVpcmUoJy4vdWlfc2Nyb2xsYmFyJyksXG5cdERhdGFTdG9yZSA9IHJlcXVpcmUoJy4vdXRpbF9kYXRhc3RvcmUnKVxuXHQ7XG5cbnZhciBaX0lOREVYID0gOTk5O1xuXG5mdW5jdGlvbiBMYXllclByb3AobmFtZSkge1xuXHR0aGlzLm5hbWUgPSBuYW1lO1xuXHR0aGlzLnZhbHVlcyA9IFtdO1xuXG5cdHRoaXMuX3ZhbHVlID0gMDtcblxuXHR0aGlzLl9jb2xvciA9ICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYgfCAwKS50b1N0cmluZygxNik7XG5cdC8qXG5cdHRoaXMubWF4XG5cdHRoaXMubWluXG5cdHRoaXMuc3RlcFxuXHQqL1xufVxuXG5mdW5jdGlvbiBUaW1lbGluZXIodGFyZ2V0KSB7XG5cdC8vIERpc3BhdGNoZXIgZm9yIGNvb3JkaW5hdGlvblxuXHR2YXIgZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5cblx0Ly8gRGF0YVxuXHR2YXIgZGF0YSA9IG5ldyBEYXRhU3RvcmUoKTtcblx0dmFyIGxheWVyX3N0b3JlID0gZGF0YS5nZXQoJ2xheWVycycpO1xuXHR2YXIgbGF5ZXJzID0gbGF5ZXJfc3RvcmUudmFsdWU7XG5cblx0d2luZG93Ll9kYXRhID0gZGF0YTsgLy8gZXhwb3NlIGl0IGZvciBkZWJ1Z2dpbmdcblxuXHQvLyBVbmRvIG1hbmFnZXJcblx0dmFyIHVuZG9fbWFuYWdlciA9IG5ldyBVbmRvTWFuYWdlcihkaXNwYXRjaGVyKTtcblxuXHQvLyBWaWV3c1xuXHR2YXIgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVQYW5lbChkYXRhLCBkaXNwYXRjaGVyKTtcblx0dmFyIGxheWVyX3BhbmVsID0gbmV3IExheWVyQ2FiaW5ldChkYXRhLCBkaXNwYXRjaGVyKTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdC8vIGhhY2shXG5cdFx0dW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCAnTG9hZGVkJyksIHRydWUpO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdrZXlmcmFtZScsIGZ1bmN0aW9uKGxheWVyLCB2YWx1ZSkge1xuXHRcdHZhciBpbmRleCA9IGxheWVycy5pbmRleE9mKGxheWVyKTtcblxuXHRcdHZhciB0ID0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWU7XG5cdFx0dmFyIHYgPSB1dGlscy5maW5kVGltZWluTGF5ZXIobGF5ZXIsIHQpO1xuXG5cdFx0Ly8gY29uc29sZS5sb2codiwgJy4uLmtleWZyYW1lIGluZGV4JywgaW5kZXgsIHV0aWxzLmZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHQpLCB0eXBlb2YodikpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdsYXllcicsIGxheWVyLCB2YWx1ZSk7XG5cblx0XHRpZiAodHlwZW9mKHYpID09PSAnbnVtYmVyJykge1xuXHRcdFx0bGF5ZXIudmFsdWVzLnNwbGljZSh2LCAwLCB7XG5cdFx0XHRcdHRpbWU6IHQsXG5cdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0X2NvbG9yOiAnIycgKyAoTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmIHwgMCkudG9TdHJpbmcoMTYpXG5cdFx0XHR9KTtcblxuXHRcdFx0dW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCAnQWRkIEtleWZyYW1lJykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygncmVtb3ZlIGZyb20gaW5kZXgnLCB2KTtcblx0XHRcdGxheWVyLnZhbHVlcy5zcGxpY2Uodi5pbmRleCwgMSk7XG5cblx0XHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ1JlbW92ZSBLZXlmcmFtZScpKTtcblx0XHR9XG5cblx0XHRyZXBhaW50QWxsKCk7XG5cblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbigna2V5ZnJhbWUubW92ZScsIGZ1bmN0aW9uKGxheWVyLCB2YWx1ZSkge1xuXHRcdHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ01vdmUgS2V5ZnJhbWUnKSk7XG5cdH0pO1xuXG5cdC8vIGRpc3BhdGNoZXIuZmlyZSgndmFsdWUuY2hhbmdlJywgbGF5ZXIsIG1lLnZhbHVlKTtcblx0ZGlzcGF0Y2hlci5vbigndmFsdWUuY2hhbmdlJywgZnVuY3Rpb24obGF5ZXIsIHZhbHVlLCBkb250X3NhdmUpIHtcblx0XHRpZiAobGF5ZXIuX211dGUpIHJldHVybjtcblxuXHRcdHZhciB0ID0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWU7XG5cdFx0dmFyIHYgPSB1dGlscy5maW5kVGltZWluTGF5ZXIobGF5ZXIsIHQpO1xuXG5cdFx0Ly8gY29uc29sZS5sb2codiwgJ3ZhbHVlLmNoYW5nZScsIGxheWVyLCB2YWx1ZSwgdXRpbHMuZm9ybWF0X2ZyaWVuZGx5X3NlY29uZHModCksIHR5cGVvZih2KSk7XG5cdFx0aWYgKHR5cGVvZih2KSA9PT0gJ251bWJlcicpIHtcblx0XHRcdGxheWVyLnZhbHVlcy5zcGxpY2UodiwgMCwge1xuXHRcdFx0XHR0aW1lOiB0LFxuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdF9jb2xvcjogJyMnICsgKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZiB8IDApLnRvU3RyaW5nKDE2KVxuXHRcdFx0fSk7XG5cdFx0XHRpZiAoIWRvbnRfc2F2ZSkgdW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCAnQWRkIHZhbHVlJykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2Lm9iamVjdC52YWx1ZSA9IHZhbHVlO1xuXHRcdFx0aWYgKCFkb250X3NhdmUpIHVuZG9fbWFuYWdlci5zYXZlKG5ldyBVbmRvU3RhdGUoZGF0YSwgJ1VwZGF0ZSB2YWx1ZScpKTtcblx0XHR9XG5cblx0XHRyZXBhaW50QWxsKCk7XG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ2FjdGlvbjpzb2xvJywgZnVuY3Rpb24obGF5ZXIsIHNvbG8pIHtcblx0XHRsYXllci5fc29sbyA9IHNvbG87XG5cblx0XHRjb25zb2xlLmxvZyhsYXllciwgc29sbyk7XG5cblx0XHQvLyBXaGVuIGEgdHJhY2sgaXMgc29sby1lZCwgcGxheWJhY2sgb25seSBjaGFuZ2VzIHZhbHVlc1xuXHRcdC8vIG9mIHRoYXQgbGF5ZXIuXG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ2FjdGlvbjptdXRlJywgZnVuY3Rpb24obGF5ZXIsIG11dGUpIHtcblx0XHRsYXllci5fbXV0ZSA9IG11dGU7XG5cblx0XHQvLyBXaGVuIGEgdHJhY2sgaXMgbXV0ZSwgcGxheWJhY2sgZG9lcyBub3QgcGxheVxuXHRcdC8vIGZyYW1lcyBvZiB0aG9zZSBtdXRlZCBsYXllcnMuXG5cblx0XHQvLyBhbHNvIGZlZWxzIGxpa2UgaGlkZGVuIGZlYXR1cmUgaW4gcGhvdG9zaG9wXG5cblx0XHQvLyB3aGVuIHZhbHVlcyBhcmUgdXBkYXRlZCwgZWcuIGZyb20gc2xpZGVyLFxuXHRcdC8vIG5vIHR3ZWVucyB3aWxsIGJlIGNyZWF0ZWQuXG5cdFx0Ly8gd2UgY2FuIGRlY2lkZSBhbHNvIHRvIFwibG9jayBpblwiIGxheWVyc1xuXHRcdC8vIG5vIGNoYW5nZXMgdG8gdHdlZW4gd2lsbCBiZSBtYWRlIGV0Yy5cblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignZWFzZScsIGZ1bmN0aW9uKGxheWVyLCBlYXNlX3R5cGUpIHtcblx0XHR2YXIgdCA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlO1xuXHRcdHZhciB2ID0gdXRpbHMudGltZUF0TGF5ZXIobGF5ZXIsIHQpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFYXNlIENoYW5nZSA+ICcsIGxheWVyLCB2YWx1ZSwgdik7XG5cdFx0aWYgKHYgJiYgdi5lbnRyeSkge1xuXHRcdFx0di5lbnRyeS50d2VlbiAgPSBlYXNlX3R5cGU7XG5cdFx0fVxuXG5cdFx0dW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCAnQWRkIEVhc2UnKSk7XG5cblx0XHRyZXBhaW50QWxsKCk7XG5cdH0pO1xuXG5cdHZhciBzdGFydF9wbGF5ID0gbnVsbCxcblx0XHRwbGF5ZWRfZnJvbSA9IDA7IC8vIHJlcXVpcmVzIHNvbWUgbW9yZSB0d2Vha2luZ1xuXG5cdGRpc3BhdGNoZXIub24oJ2NvbnRyb2xzLnRvZ2dsZV9wbGF5JywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHN0YXJ0X3BsYXkpIHtcblx0XHRcdHBhdXNlUGxheWluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFydFBsYXlpbmcoKTtcblx0XHR9XG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ2NvbnRyb2xzLnJlc3RhcnRfcGxheScsIGZ1bmN0aW9uKCkge1xuXHRcdGlmICghc3RhcnRfcGxheSkge1xuXHRcdFx0c3RhcnRQbGF5aW5nKCk7XG5cdFx0fVxuXG5cdFx0c2V0Q3VycmVudFRpbWUocGxheWVkX2Zyb20pO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdjb250cm9scy5wbGF5Jywgc3RhcnRQbGF5aW5nKTtcblx0ZGlzcGF0Y2hlci5vbignY29udHJvbHMucGF1c2UnLCBwYXVzZVBsYXlpbmcpO1xuXG5cdGZ1bmN0aW9uIHN0YXJ0UGxheWluZygpIHtcblx0XHQvLyBwbGF5ZWRfZnJvbSA9IHRpbWVsaW5lLmN1cnJlbnRfZnJhbWU7XG5cdFx0c3RhcnRfcGxheSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWUgKiAxMDAwO1xuXHRcdGxheWVyX3BhbmVsLnNldENvbnRyb2xTdGF0dXModHJ1ZSk7XG5cdFx0Ly8gZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy5zdGF0dXMnLCB0cnVlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBhdXNlUGxheWluZygpIHtcblx0XHRzdGFydF9wbGF5ID0gbnVsbDtcblx0XHRsYXllcl9wYW5lbC5zZXRDb250cm9sU3RhdHVzKGZhbHNlKTtcblx0XHQvLyBkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnN0YXR1cycsIGZhbHNlKTtcblx0fVxuXG5cdGRpc3BhdGNoZXIub24oJ2NvbnRyb2xzLnN0b3AnLCBmdW5jdGlvbigpIHtcblx0XHRpZiAoc3RhcnRfcGxheSAhPT0gbnVsbCkgcGF1c2VQbGF5aW5nKCk7XG5cdFx0c2V0Q3VycmVudFRpbWUoMCk7XG5cdH0pO1xuXG5cdHZhciBjdXJyZW50VGltZVN0b3JlID0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJyk7XG5cdGRpc3BhdGNoZXIub24oJ3RpbWUudXBkYXRlJywgc2V0Q3VycmVudFRpbWUpO1xuXG5cdGRpc3BhdGNoZXIub24oJ3VwZGF0ZS5zY3JvbGxUaW1lJywgZnVuY3Rpb24odikge1xuXHRcdHYgPSBNYXRoLm1heCgwLCB2KTtcblx0XHRkYXRhLmdldCgndWk6c2Nyb2xsVGltZScpLnZhbHVlID0gdjtcblx0XHRyZXBhaW50QWxsKCk7XG5cdH0pO1xuXG5cblx0ZnVuY3Rpb24gc2V0Q3VycmVudFRpbWUodmFsdWUpIHtcblx0XHR2YWx1ZSA9IE1hdGgubWF4KDAsIHZhbHVlKTtcblx0XHRjdXJyZW50VGltZVN0b3JlLnZhbHVlID0gdmFsdWU7XG5cblx0XHRpZiAoc3RhcnRfcGxheSkgc3RhcnRfcGxheSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdmFsdWUgKiAxMDAwO1xuXHRcdHJlcGFpbnRBbGwoKTtcblx0XHQvLyBsYXllcl9wYW5lbC5yZXBhaW50KHMpO1xuXHR9XG5cblx0ZGlzcGF0Y2hlci5vbigndGFyZ2V0Lm5vdGlmeScsIGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKHRhcmdldCkgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ3VwZGF0ZS5zY2FsZScsIGZ1bmN0aW9uKHYpIHtcblx0XHRjb25zb2xlLmxvZygncmFuZ2UnLCB2KTtcblx0XHRkYXRhLmdldCgndWk6dGltZVNjYWxlJykudmFsdWUgPSB2O1xuXG5cdFx0dGltZWxpbmUucmVwYWludCgpO1xuXHR9KTtcblxuXHQvLyBoYW5kbGUgdW5kbyAvIHJlZG9cblx0ZGlzcGF0Y2hlci5vbignY29udHJvbHMudW5kbycsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoaXN0b3J5ID0gdW5kb19tYW5hZ2VyLnVuZG8oKTtcblx0XHRkYXRhLnNldEpTT05TdHJpbmcoaGlzdG9yeS5zdGF0ZSk7XG5cblx0XHR1cGRhdGVTdGF0ZSgpO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdjb250cm9scy5yZWRvJywgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhpc3RvcnkgPSB1bmRvX21hbmFnZXIucmVkbygpO1xuXHRcdGRhdGEuc2V0SlNPTlN0cmluZyhoaXN0b3J5LnN0YXRlKTtcblxuXHRcdHVwZGF0ZVN0YXRlKCk7XG5cdH0pO1xuXG5cdC8qXG5cdFx0UGFpbnQgUm91dGluZXNcblx0Ki9cblxuXHRmdW5jdGlvbiBwYWludCgpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUocGFpbnQpO1xuXG5cdFx0aWYgKHN0YXJ0X3BsYXkpIHtcblx0XHRcdHZhciB0ID0gKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRfcGxheSkgLyAxMDAwO1xuXHRcdFx0c2V0Q3VycmVudFRpbWUodCk7XG5cblxuXHRcdFx0aWYgKHQgPiBkYXRhLmdldCgndWk6dG90YWxUaW1lJykudmFsdWUpIHtcblx0XHRcdFx0Ly8gc2ltcGxlIGxvb3Bcblx0XHRcdFx0c3RhcnRfcGxheSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChuZWVkc1Jlc2l6ZSkge1xuXHRcdFx0ZGl2LnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXHRcdFx0ZGl2LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblx0XHRcdHJlc3R5bGUobGF5ZXJfcGFuZWwuZG9tLCB0aW1lbGluZS5kb20pO1xuXG5cdFx0XHR0aW1lbGluZS5yZXNpemUoKTtcblx0XHRcdHJlcGFpbnRBbGwoKTtcblx0XHRcdG5lZWRzUmVzaXplID0gZmFsc2U7XG5cblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgncmVzaXplJyk7XG5cdFx0fVxuXG5cdFx0dGltZWxpbmUuX3BhaW50KCk7XG5cdH1cblxuXHRwYWludCgpO1xuXG5cdC8qXG5cdFx0RW5kIFBhaW50IFJvdXRpbmVzXG5cdCovXG5cblx0ZnVuY3Rpb24gc2F2ZShuYW1lKSB7XG5cdFx0aWYgKCFuYW1lKSBuYW1lID0gJ2F1dG9zYXZlJztcblxuXHRcdHZhciBqc29uID0gZGF0YS5nZXRKU09OU3RyaW5nKCk7XG5cblx0XHR0cnkge1xuXHRcdFx0bG9jYWxTdG9yYWdlW1NUT1JBR0VfUFJFRklYICsgbmFtZV0gPSBqc29uO1xuXHRcdFx0ZGlzcGF0Y2hlci5maXJlKCdzYXZlOmRvbmUnKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnQ2Fubm90IHNhdmUnLCBuYW1lLCBqc29uKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzYXZlQXMobmFtZSkge1xuXHRcdGlmICghbmFtZSkgbmFtZSA9IGRhdGEuZ2V0KCduYW1lJykudmFsdWU7XG5cdFx0bmFtZSA9IHByb21wdCgnUGljayBhIG5hbWUgdG8gc2F2ZSB0byAobG9jYWxTdG9yYWdlKScsIG5hbWUpO1xuXHRcdGlmIChuYW1lKSB7XG5cdFx0XHRkYXRhLmRhdGEubmFtZSA9IG5hbWU7XG5cdFx0XHRzYXZlKG5hbWUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNhdmVTaW1wbHkoKSB7XG5cdFx0dmFyIG5hbWUgPSBkYXRhLmdldCgnbmFtZScpLnZhbHVlO1xuXHRcdGlmIChuYW1lKSB7XG5cdFx0XHRzYXZlKG5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzYXZlQXMobmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZXhwb3J0SlNPTigpIHtcblx0XHR2YXIganNvbiA9IGRhdGEuZ2V0SlNPTlN0cmluZygpO1xuXHRcdHZhciByZXQgPSBwcm9tcHQoJ0hpdCBPSyB0byBkb3dubG9hZCBvdGhlcndpc2UgQ29weSBhbmQgUGFzdGUgSlNPTicsIGpzb24pO1xuXG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLCBudWxsLCAnXFx0JykpO1xuXHRcdGlmICghcmV0KSByZXR1cm47XG5cblx0XHQvLyBtYWtlIGpzb24gZG93bmxvYWRhYmxlXG5cdFx0anNvbiA9IGRhdGEuZ2V0SlNPTlN0cmluZygnXFx0Jyk7XG5cdFx0dmFyIGZpbGVOYW1lID0gJ3RpbWVsaW5lci10ZXN0JyArICcuanNvbic7XG5cblx0XHRzYXZlVG9GaWxlKGpzb24sIGZpbGVOYW1lKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRKU09OU3RyaW5nKG8pIHtcblx0XHQvLyBzaG91bGQgY2F0Y2ggYW5kIGNoZWNrIGVycm9ycyBoZXJlXG5cdFx0dmFyIGpzb24gPSBKU09OLnBhcnNlKG8pO1xuXHRcdGxvYWQoanNvbik7XG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkKG8pIHtcblx0XHRkYXRhLnNldEpTT04obyk7XG5cdFx0Ly9cblx0XHRpZiAoZGF0YS5nZXRWYWx1ZSgndWknKSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkYXRhLnNldFZhbHVlKCd1aScsIHtcblx0XHRcdFx0Y3VycmVudFRpbWU6IDAsXG5cdFx0XHRcdHRvdGFsVGltZTogU2V0dGluZ3MuZGVmYXVsdF9sZW5ndGgsXG5cdFx0XHRcdHNjcm9sbFRpbWU6IDAsXG5cdFx0XHRcdHRpbWVTY2FsZTogU2V0dGluZ3MudGltZV9zY2FsZVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dW5kb19tYW5hZ2VyLmNsZWFyKCk7XG5cdFx0dW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCAnTG9hZGVkJyksIHRydWUpO1xuXG5cdFx0dXBkYXRlU3RhdGUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKCkge1xuXHRcdGxheWVycyA9IGxheWVyX3N0b3JlLnZhbHVlOyAvLyBGSVhNRTogc3VwcG9ydCBBcnJheXNcblx0XHRsYXllcl9wYW5lbC5zZXRTdGF0ZShsYXllcl9zdG9yZSk7XG5cdFx0dGltZWxpbmUuc2V0U3RhdGUobGF5ZXJfc3RvcmUpO1xuXG5cdFx0cmVwYWludEFsbCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVwYWludEFsbCgpIHtcblx0XHR2YXIgY29udGVudF9oZWlnaHQgPSBsYXllcnMubGVuZ3RoICogU2V0dGluZ3MuTElORV9IRUlHSFQ7XG5cdFx0c2Nyb2xsYmFyLnNldExlbmd0aChTZXR0aW5ncy5USU1FTElORV9TQ1JPTExfSEVJR0hUIC8gY29udGVudF9oZWlnaHQpO1xuXG5cdFx0bGF5ZXJfcGFuZWwucmVwYWludCgpO1xuXHRcdHRpbWVsaW5lLnJlcGFpbnQoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByb21wdEltcG9ydCgpIHtcblx0XHR2YXIganNvbiA9IHByb21wdCgnUGFzdGUgSlNPTiBpbiBoZXJlIHRvIExvYWQnKTtcblx0XHRpZiAoIWpzb24pIHJldHVybjtcblx0XHRjb25zb2xlLmxvZygnTG9hZGluZy4uICcsIGpzb24pO1xuXHRcdGxvYWRKU09OU3RyaW5nKGpzb24pO1xuXHR9XG5cblx0ZnVuY3Rpb24gb3Blbih0aXRsZSkge1xuXHRcdGlmICh0aXRsZSkge1xuXHRcdFx0bG9hZEpTT05TdHJpbmcobG9jYWxTdG9yYWdlW1NUT1JBR0VfUFJFRklYICsgdGl0bGVdKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLm9wZW5Mb2NhbFNhdmUgPSBvcGVuO1xuXG5cdGRpc3BhdGNoZXIub24oJ2ltcG9ydCcsIGZ1bmN0aW9uKCkge1xuXHRcdHByb21wdEltcG9ydCgpO1xuXHR9LmJpbmQodGhpcykpO1xuXG5cdGRpc3BhdGNoZXIub24oJ25ldycsIGZ1bmN0aW9uKCkge1xuXHRcdGRhdGEuYmxhbmsoKTtcblx0XHR1cGRhdGVTdGF0ZSgpO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdvcGVuZmlsZScsIGZ1bmN0aW9uKCkge1xuXHRcdG9wZW5BcyhmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnbG9hZGVkICcgKyBkYXRhKTtcblx0XHRcdGxvYWRKU09OU3RyaW5nKGRhdGEpO1xuXHRcdH0sIGRpdik7XG5cdH0pO1xuXG5cdGRpc3BhdGNoZXIub24oJ29wZW4nLCBvcGVuKTtcblx0ZGlzcGF0Y2hlci5vbignZXhwb3J0JywgZXhwb3J0SlNPTik7XG5cblx0ZGlzcGF0Y2hlci5vbignc2F2ZScsIHNhdmVTaW1wbHkpO1xuXHRkaXNwYXRjaGVyLm9uKCdzYXZlX2FzJywgc2F2ZUFzKTtcblxuXHQvLyBFeHBvc2UgQVBJXG5cdHRoaXMuc2F2ZSA9IHNhdmU7XG5cdHRoaXMubG9hZCA9IGxvYWQ7XG5cblx0Lypcblx0XHRTdGFydCBET00gU3R1ZmYgKHNob3VsZCBzZXBhcmF0ZSBmaWxlKVxuXHQqL1xuXG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246IGFic29sdXRlOyc7XG5cdGRpdi5zdHlsZS50b3AgPSAnMjJweCc7XG5cblx0dmFyIHBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHRzdHlsZShwYW5lLCB7XG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0dG9wOiAnMjBweCcsXG5cdFx0bGVmdDogJzIwcHgnLFxuXHRcdG1hcmdpbjogMCxcblx0XHRib3JkZXI6ICcxcHggc29saWQgJyArIFRoZW1lLmEsXG5cdFx0cGFkZGluZzogMCxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBUaGVtZS5hLFxuXHRcdGNvbG9yOiBUaGVtZS5kLFxuXHRcdHpJbmRleDogWl9JTkRFWCxcblx0XHRmb250RmFtaWx5OiAnbW9ub3NwYWNlJyxcblx0XHRmb250U2l6ZTogJzEycHgnXG5cdH0pO1xuXG5cblx0dmFyIGhlYWRlcl9zdHlsZXMgPSB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dG9wOiAnMHB4Jyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzIycHgnLFxuXHRcdGxpbmVIZWlnaHQ6ICcyMnB4Jyxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0fTtcblxuXHR2YXIgYnV0dG9uX3N0eWxlcyA9IHtcblx0XHR3aWR0aDogJzIwcHgnLFxuXHRcdGhlaWdodDogJzIwcHgnLFxuXHRcdHBhZGRpbmc6ICcycHgnLFxuXHRcdG1hcmdpblJpZ2h0OiAnMnB4J1xuXHR9O1xuXG5cdHZhciBwYW5lX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN0eWxlKHBhbmVfdGl0bGUsIGhlYWRlcl9zdHlsZXMsIHtcblx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgJyArIFRoZW1lLmIsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJ1xuXHR9KTtcblxuXHR2YXIgdGl0bGVfYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRwYW5lX3RpdGxlLmFwcGVuZENoaWxkKHRpdGxlX2Jhcik7XG5cblx0dGl0bGVfYmFyLmlubmVySFRNTCA9ICdUaW1lbGluZXIgJyArIHBhY2thZ2VfanNvbi52ZXJzaW9uO1xuXHRwYW5lX3RpdGxlLmFwcGVuZENoaWxkKHRpdGxlX2Jhcik7XG5cblx0dmFyIHRvcF9yaWdodF9iYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0c3R5bGUodG9wX3JpZ2h0X2JhciwgaGVhZGVyX3N0eWxlcywge1xuXHRcdHRleHRBbGlnbjogJ3JpZ2h0J1xuXHR9KTtcblxuXHRwYW5lX3RpdGxlLmFwcGVuZENoaWxkKHRvcF9yaWdodF9iYXIpO1xuXG5cdC8vIHJlc2l6ZSBtaW5pbWl6ZVxuXHQvLyB2YXIgcmVzaXplX3NtYWxsID0gbmV3IEljb25CdXR0b24oMTAsICdyZXNpemVfc21hbGwnLCAnbWluaW1pemUnLCBkaXNwYXRjaGVyKTtcblx0Ly8gdG9wX3JpZ2h0X2Jhci5hcHBlbmRDaGlsZChyZXNpemVfc21hbGwuZG9tKTtcblxuXHQvLyByZXNpemUgZnVsbFxuXHR2YXIgcmVzaXplX2Z1bGwgPSBuZXcgSWNvbkJ1dHRvbigxMCwgJ3Jlc2l6ZV9mdWxsJywgJ21heGltaXplJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKHJlc2l6ZV9mdWxsLmRvbSwgYnV0dG9uX3N0eWxlcywgeyBtYXJnaW5SaWdodDogJzJweCcgfSk7XG5cdHRvcF9yaWdodF9iYXIuYXBwZW5kQ2hpbGQocmVzaXplX2Z1bGwuZG9tKTtcblxuXHR2YXIgcGFuZV9zdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHR2YXIgZm9vdGVyX3N0eWxlcyA9IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGhlaWdodDogJzIycHgnLFxuXHRcdGxpbmVIZWlnaHQ6ICcyMnB4Jyxcblx0XHRib3R0b206ICcwJyxcblx0XHQvLyBwYWRkaW5nOiAnMnB4Jyxcblx0XHRiYWNrZ3JvdW5kOiBUaGVtZS5hLFxuXHRcdGZvbnRTaXplOiAnMTFweCdcblx0fTtcblxuXHRzdHlsZShwYW5lX3N0YXR1cywgZm9vdGVyX3N0eWxlcywge1xuXHRcdGJvcmRlclRvcDogJzFweCBzb2xpZCAnICsgVGhlbWUuYixcblx0fSk7XG5cblx0cGFuZS5hcHBlbmRDaGlsZChkaXYpO1xuXHRwYW5lLmFwcGVuZENoaWxkKHBhbmVfc3RhdHVzKTtcblx0cGFuZS5hcHBlbmRDaGlsZChwYW5lX3RpdGxlKTtcblxuXHR2YXIgbGFiZWxfc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRsYWJlbF9zdGF0dXMudGV4dENvbnRlbnQgPSAnaGVsbG8hJztcblx0bGFiZWxfc3RhdHVzLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTBweCc7XG5cblx0dGhpcy5zZXRTdGF0dXMgPSBmdW5jdGlvbih0ZXh0KSB7XG5cdFx0bGFiZWxfc3RhdHVzLnRleHRDb250ZW50ID0gdGV4dDtcblx0fTtcblxuXHRkaXNwYXRjaGVyLm9uKCdzdGF0ZTpzYXZlJywgZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3N0YXR1cycsIGRlc2NyaXB0aW9uKTtcblx0XHRzYXZlKCdhdXRvc2F2ZScpO1xuXHR9KTtcblxuXHRkaXNwYXRjaGVyLm9uKCdzdGF0dXMnLCB0aGlzLnNldFN0YXR1cyk7XG5cblx0dmFyIGJvdHRvbV9yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzdHlsZShib3R0b21fcmlnaHQsIGZvb3Rlcl9zdHlsZXMsIHtcblx0XHR0ZXh0QWxpZ246ICdyaWdodCdcblx0fSk7XG5cblxuXHQvLyB2YXIgYnV0dG9uX3NhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0Ly8gc3R5bGUoYnV0dG9uX3NhdmUsIGJ1dHRvbl9zdHlsZXMpO1xuXHQvLyBidXR0b25fc2F2ZS50ZXh0Q29udGVudCA9ICdTYXZlJztcblx0Ly8gYnV0dG9uX3NhdmUub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHQvLyBcdHNhdmUoKTtcblx0Ly8gfTtcblxuXHQvLyB2YXIgYnV0dG9uX2xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0Ly8gc3R5bGUoYnV0dG9uX2xvYWQsIGJ1dHRvbl9zdHlsZXMpO1xuXHQvLyBidXR0b25fbG9hZC50ZXh0Q29udGVudCA9ICdJbXBvcnQnO1xuXHQvLyBidXR0b25fbG9hZC5vbmNsaWNrID0gdGhpcy5wcm9tcHRMb2FkO1xuXG5cdC8vIHZhciBidXR0b25fb3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHQvLyBzdHlsZShidXR0b25fb3BlbiwgYnV0dG9uX3N0eWxlcyk7XG5cdC8vIGJ1dHRvbl9vcGVuLnRleHRDb250ZW50ID0gJ09wZW4nO1xuXHQvLyBidXR0b25fb3Blbi5vbmNsaWNrID0gdGhpcy5wcm9tcHRPcGVuO1xuXG5cblx0Ly8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKGJ1dHRvbl9sb2FkKTtcblx0Ly8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKGJ1dHRvbl9zYXZlKTtcblx0Ly8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKGJ1dHRvbl9vcGVuKTtcblxuXHRwYW5lX3N0YXR1cy5hcHBlbmRDaGlsZChsYWJlbF9zdGF0dXMpO1xuXHRwYW5lX3N0YXR1cy5hcHBlbmRDaGlsZChib3R0b21fcmlnaHQpO1xuXG5cblx0LyoqL1xuXHQvLyB6b29tIGluXG5cdHZhciB6b29tX2luID0gbmV3IEljb25CdXR0b24oMTIsICd6b29tX2luJywgJ3pvb20gaW4nLCBkaXNwYXRjaGVyKTtcblx0Ly8gem9vbSBvdXRcblx0dmFyIHpvb21fb3V0ID0gbmV3IEljb25CdXR0b24oMTIsICd6b29tX291dCcsICd6b29tIG91dCcsIGRpc3BhdGNoZXIpO1xuXHQvLyBzZXR0aW5nc1xuXHR2YXIgY29nID0gbmV3IEljb25CdXR0b24oMTIsICdjb2cnLCAnc2V0dGluZ3MnLCBkaXNwYXRjaGVyKTtcblxuXHQvLyBib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQoem9vbV9pbi5kb20pO1xuXHQvLyBib3R0b21fcmlnaHQuYXBwZW5kQ2hpbGQoem9vbV9vdXQuZG9tKTtcblx0Ly8gYm90dG9tX3JpZ2h0LmFwcGVuZENoaWxkKGNvZy5kb20pO1xuXG5cdC8vIGFkZCBsYXllclxuXHR2YXIgcGx1cyA9IG5ldyBJY29uQnV0dG9uKDEyLCAncGx1cycsICdOZXcgTGF5ZXInLCBkaXNwYXRjaGVyKTtcblx0cGx1cy5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuYW1lID0gcHJvbXB0KCdMYXllciBuYW1lPycpO1xuXHRcdGFkZExheWVyKG5hbWUpO1xuXG5cdFx0dW5kb19tYW5hZ2VyLnNhdmUobmV3IFVuZG9TdGF0ZShkYXRhLCAnTGF5ZXIgYWRkZWQnKSk7XG5cblx0XHRyZXBhaW50QWxsKCk7XG5cdH0pO1xuXHRzdHlsZShwbHVzLmRvbSwgYnV0dG9uX3N0eWxlcyk7XG5cdGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZChwbHVzLmRvbSk7XG5cblxuXHQvLyB0cmFzaFxuXHR2YXIgdHJhc2ggPSBuZXcgSWNvbkJ1dHRvbigxMiwgJ3RyYXNoJywgJ0RlbGV0ZSBzYXZlJywgZGlzcGF0Y2hlcik7XG5cdHRyYXNoLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5hbWUgPSBkYXRhLmdldCgnbmFtZScpLnZhbHVlO1xuXHRcdGlmIChuYW1lICYmIGxvY2FsU3RvcmFnZVtTVE9SQUdFX1BSRUZJWCArIG5hbWVdKSB7XG5cdFx0XHR2YXIgb2sgPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gZGVsZXRlICcgKyBuYW1lICsgJz8nKTtcblx0XHRcdGlmIChvaykge1xuXHRcdFx0XHRkZWxldGUgbG9jYWxTdG9yYWdlW1NUT1JBR0VfUFJFRklYICsgbmFtZV07XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnc3RhdHVzJywgbmFtZSArICcgZGVsZXRlZCcpO1xuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ3NhdmU6ZG9uZScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cdHN0eWxlKHRyYXNoLmRvbSwgYnV0dG9uX3N0eWxlcywgeyBtYXJnaW5SaWdodDogJzJweCcgfSk7XG5cdGJvdHRvbV9yaWdodC5hcHBlbmRDaGlsZCh0cmFzaC5kb20pO1xuXG5cblx0Ly8gcGFuZV9zdGF0dXMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyB8IFRPRE8gPERvY2sgRnVsbCB8IERvY2sgQm90dG9uIHwgU25hcCBXaW5kb3cgRWRnZXMgfCB6b29tIGluIHwgem9vbSBvdXQgfCBTZXR0aW5ncyB8IGhlbHA+JykpO1xuXG5cdC8qXG5cdFx0XHRFbmQgRE9NIFN0dWZmXG5cdCovXG5cblx0dmFyIGdob3N0cGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRnaG9zdHBhbmUuaWQgPSAnZ2hvc3RwYW5lJztcblx0c3R5bGUoZ2hvc3RwYW5lLCB7XG5cdFx0YmFja2dyb3VuZDogJyM5OTknLFxuXHRcdG9wYWNpdHk6IDAuMixcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRtYXJnaW46IDAsXG5cdFx0cGFkZGluZzogMCxcblx0XHR6SW5kZXg6IChaX0lOREVYIC0gMSksXG5cdFx0Ly8gdHJhbnNpdGlvbjogJ2FsbCAwLjI1cyBlYXNlLWluLW91dCcsXG5cdFx0dHJhbnNpdGlvblByb3BlcnR5OiAndG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0LCBvcGFjaXR5JyxcbiBcdFx0dHJhbnNpdGlvbkR1cmF0aW9uOiAnMC4yNXMnLFxuXHRcdHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0J1xuXHR9KTtcblxuXG5cdC8vXG5cdC8vIEhhbmRsZSBET00gVmlld3Ncblx0Ly9cblxuXHQvLyBTaGFkb3cgUm9vdFxuXHR2YXIgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RpbWVsaW5lcicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuXHRpZiAocm9vdC5jcmVhdGVTaGFkb3dSb290KSByb290ID0gcm9vdC5jcmVhdGVTaGFkb3dSb290KCk7XG5cblx0d2luZG93LnIgPSByb290O1xuXG5cdC8vIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblx0Ly8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXHQvLyByb290ID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5O1xuXG5cdHJvb3QuYXBwZW5kQ2hpbGQocGFuZSk7XG5cdHJvb3QuYXBwZW5kQ2hpbGQoZ2hvc3RwYW5lKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQobGF5ZXJfcGFuZWwuZG9tKTtcblx0ZGl2LmFwcGVuZENoaWxkKHRpbWVsaW5lLmRvbSk7XG5cblx0dmFyIHNjcm9sbGJhciA9IG5ldyBTY3JvbGxCYXIoMjAwLCAxMCk7XG5cdGRpdi5hcHBlbmRDaGlsZChzY3JvbGxiYXIuZG9tKTtcblxuXHQvLyBwZXJjZW50YWdlc1xuXHRzY3JvbGxiYXIub25TY3JvbGwuZG8oZnVuY3Rpb24odHlwZSwgc2Nyb2xsVG8pIHtcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAnc2Nyb2xsdG8nOlxuXHRcdFx0XHRsYXllcl9wYW5lbC5zY3JvbGxUbyhzY3JvbGxUbyk7XG5cdFx0XHRcdHRpbWVsaW5lLnNjcm9sbFRvKHNjcm9sbFRvKTtcblx0XHRcdFx0YnJlYWs7XG5cdC8vXHRcdGNhc2UgJ3BhZ2V1cCc6XG5cdC8vIFx0XHRcdHNjcm9sbFRvcCAtPSBwYWdlT2Zmc2V0O1xuXHQvLyBcdFx0XHRtZS5kcmF3KCk7XG5cdC8vIFx0XHRcdG1lLnVwZGF0ZVNjcm9sbGJhcigpO1xuXHQvLyBcdFx0XHRicmVhaztcblx0Ly8gXHRcdGNhc2UgJ3BhZ2Vkb3duJzpcblx0Ly8gXHRcdFx0c2Nyb2xsVG9wICs9IHBhZ2VPZmZzZXQ7XG5cdC8vIFx0XHRcdG1lLmRyYXcoKTtcblx0Ly8gXHRcdFx0bWUudXBkYXRlU2Nyb2xsYmFyKCk7XG5cdC8vIFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cblxuXG5cdC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xuXHQvLyBcdGNvbnNvbGUubG9nKCdrcCcsIGUpO1xuXHQvLyB9KTtcblx0Ly8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG5cdC8vIFx0aWYgKHVuZG8pIGNvbnNvbGUubG9nKCdVTkRPJyk7XG5cblx0Ly8gXHRjb25zb2xlLmxvZygna2QnLCBlKTtcblx0Ly8gfSk7XG5cblx0Ly8gVE9ETzogS2V5Ym9hcmQgU2hvcnRjdXRzXG5cdC8vIEVzYyAtIFN0b3AgYW5kIHJldmlldyB0byBsYXN0IHBsYXllZCBmcm9tIC8gdG8gdGhlIHN0YXJ0P1xuXHQvLyBTcGFjZSAtIHBsYXkgLyBwYXVzZSBmcm9tIGN1cnJlbnQgcG9zaXRpb25cblx0Ly8gRW50ZXIgLSBwbGF5IGFsbFxuXHQvLyBrIC0ga2V5ZnJhbWVcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuXHRcdHZhciBwbGF5ID0gZS5rZXlDb2RlID09IDMyOyAvLyBzcGFjZVxuXHRcdHZhciBlbnRlciA9IGUua2V5Q29kZSA9PSAxMzsgLy9cblx0XHR2YXIgdW5kbyA9IGUubWV0YUtleSAmJiBlLmtleUNvZGUgPT0gOTEgJiYgIWUuc2hpZnRLZXk7XG5cblx0XHR2YXIgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHQvLyBjb25zb2xlLmxvZyggYWN0aXZlLm5vZGVOYW1lICk7XG5cblx0XHRpZiAoYWN0aXZlLm5vZGVOYW1lLm1hdGNoKC8oSU5QVVR8QlVUVE9OfFNFTEVDVHxUSU1FTElORVIpLykpIHtcblx0XHRcdGFjdGl2ZS5ibHVyKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYXkpIHtcblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMudG9nZ2xlX3BsYXknKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZW50ZXIpIHtcblx0XHRcdC8vIEZJWE1FOiBSZXR1cm4gc2hvdWxkIHBsYXkgZnJvbSB0aGUgc3RhcnQgb3IgbGFzdCBwbGF5ZWQgZnJvbT9cblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMucmVzdGFydF9wbGF5Jyk7XG5cdFx0XHQvLyBkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnVuZG8nKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoZS5rZXlDb2RlID09IDI3KSB7XG5cdFx0XHQvLyBFc2MgPSBzdG9wLiBGSVhNRTogc2hvdWxkIHJld2luZCBoZWFkIHRvIGxhc3QgcGxheWVkIGZyb20gb3IgTGFzdCBwb2ludGVkIGZyb20/XG5cdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnBhdXNlJyk7XG5cdFx0fVxuXHRcdGVsc2UgY29uc29sZS5sb2coJ2tleWRvd24nLCBlLmtleUNvZGUpO1xuXHR9KTtcblxuXHR2YXIgbmVlZHNSZXNpemUgPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0Ly8gZGF0YS5nZXQoJ3VpOmJvdW5kcycpLnZhbHVlID0ge1xuXHRcdC8vIFx0d2lkdGg6IHdpZHRoLFxuXHRcdC8vIFx0aGVpZ2h0OiBoZWlnaHRcblx0XHQvLyB9O1xuXHRcdC8vIFRPRE86IHJlbW92ZSB1Z2x5IGhhcmRjb2Rlc1xuXHRcdHdpZHRoIC09IDQ7XG5cdFx0aGVpZ2h0IC09IDQ0O1xuXG5cdFx0U2V0dGluZ3Mud2lkdGggPSB3aWR0aCAtIFNldHRpbmdzLkxFRlRfUEFORV9XSURUSDtcblx0XHRTZXR0aW5ncy5oZWlnaHQgPSBoZWlnaHQ7XG5cblx0XHRTZXR0aW5ncy5USU1FTElORV9TQ1JPTExfSEVJR0hUID0gaGVpZ2h0IC0gU2V0dGluZ3MuTUFSS0VSX1RSQUNLX0hFSUdIVDtcblx0XHR2YXIgc2Nyb2xsYWJsZV9oZWlnaHQgPSBTZXR0aW5ncy5USU1FTElORV9TQ1JPTExfSEVJR0hUO1xuXG5cdFx0c2Nyb2xsYmFyLnNldEhlaWdodChzY3JvbGxhYmxlX2hlaWdodCAtIDIpO1xuXHRcdC8vIHNjcm9sbGJhci5zZXRUaHVtYlxuXG5cdFx0c3R5bGUoc2Nyb2xsYmFyLmRvbSwge1xuXHRcdFx0dG9wOiBTZXR0aW5ncy5NQVJLRVJfVFJBQ0tfSEVJR0hUICsgJ3B4Jyxcblx0XHRcdGxlZnQ6ICh3aWR0aCAtIDE2KSArICdweCcsXG5cdFx0fSk7XG5cblx0XHRuZWVkc1Jlc2l6ZSA9IHRydWU7XG5cdH1cblxuXHRmdW5jdGlvbiByZXN0eWxlKGxlZnQsIHJpZ2h0KSB7XG5cdFx0bGVmdC5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMHB4OyB0b3A6IDBweDsgaGVpZ2h0OiAnICsgU2V0dGluZ3MuaGVpZ2h0ICsgJ3B4Oyc7XG5cdFx0c3R5bGUobGVmdCwge1xuXHRcdFx0Ly8gYmFja2dyb3VuZDogVGhlbWUuYSxcblx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xuXHRcdH0pO1xuXHRcdGxlZnQuc3R5bGUud2lkdGggPSBTZXR0aW5ncy5MRUZUX1BBTkVfV0lEVEggKyAncHgnO1xuXG5cdFx0Ly8gcmlnaHQuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMHB4Oyc7XG5cdFx0cmlnaHQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdHJpZ2h0LnN0eWxlLnRvcCA9ICcwcHgnO1xuXHRcdHJpZ2h0LnN0eWxlLmxlZnQgPSBTZXR0aW5ncy5MRUZUX1BBTkVfV0lEVEggKyAncHgnO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkTGF5ZXIobmFtZSkge1xuXHRcdHZhciBsYXllciA9IG5ldyBMYXllclByb3AobmFtZSk7XG5cblx0XHRsYXllcnMgPSBsYXllcl9zdG9yZS52YWx1ZTtcblx0XHRsYXllcnMucHVzaChsYXllcik7XG5cblx0XHRsYXllcl9wYW5lbC5zZXRTdGF0ZShsYXllcl9zdG9yZSk7XG5cdH1cblxuXHR0aGlzLmFkZExheWVyID0gYWRkTGF5ZXI7XG5cblx0dGhpcy5zZXRUYXJnZXQgPSBmdW5jdGlvbih0KSB7XG5cdFx0dGltZWxpbmUgPSB0O1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGdldFZhbHVlUmFuZ2VzKHJhbmdlcywgaW50ZXJ2YWwpIHtcblx0XHRpbnRlcnZhbCA9IGludGVydmFsID8gaW50ZXJ2YWwgOiAwLjE1O1xuXHRcdHJhbmdlcyA9IHJhbmdlcyA/IHJhbmdlcyA6IDI7XG5cblx0XHQvLyBub3Qgb3B0aW1pemVkIVxuXHRcdHZhciB0ID0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWU7XG5cblx0XHR2YXIgdmFsdWVzID0gW107XG5cblx0XHRmb3IgKHZhciB1ID0gLXJhbmdlczsgdSA8PSByYW5nZXM7IHUrKykge1xuXHRcdFx0Ly8gaWYgKHUgPT0gMCkgY29udGludWU7XG5cdFx0XHR2YXIgbyA9IHt9O1xuXG5cdFx0XHRmb3IgKHZhciBsID0gMDsgbCA8IGxheWVycy5sZW5ndGg7IGwrKykge1xuXHRcdFx0XHR2YXIgbGF5ZXIgPSBsYXllcnNbbF07XG5cdFx0XHRcdHZhciBtID0gdXRpbHMudGltZUF0TGF5ZXIobGF5ZXIsIHQgKyB1ICogaW50ZXJ2YWwpO1xuXHRcdFx0XHRvW2xheWVyLm5hbWVdID0gbS52YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFsdWVzLnB1c2gobyk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWVzO1xuXHR9XG5cblx0dGhpcy5nZXRWYWx1ZXMgPSBnZXRWYWx1ZVJhbmdlcztcblxuXHQoZnVuY3Rpb24gRG9ja2luZ1dpbmRvdygpIHtcblx0XHRcInVzZSBzdHJpY3RcIjtcblxuXHRcdC8vIE1pbmltdW0gcmVzaXphYmxlIGFyZWFcblx0XHR2YXIgbWluV2lkdGggPSAxMDA7XG5cdFx0dmFyIG1pbkhlaWdodCA9IDgwO1xuXG5cdFx0Ly8gVGhyZXNob2xkc1xuXHRcdHZhciBGVUxMU0NSRUVOX01BUkdJTlMgPSAyO1xuXHRcdHZhciBTTkFQX01BUkdJTlMgPSA4O1xuXHRcdHZhciBNQVJHSU5TID0gMjtcblxuXHRcdC8vIEVuZCBvZiB3aGF0J3MgY29uZmlndXJhYmxlLlxuXG5cdFx0dmFyIGNsaWNrZWQgPSBudWxsO1xuXHRcdHZhciBvblJpZ2h0RWRnZSwgb25Cb3R0b21FZGdlLCBvbkxlZnRFZGdlLCBvblRvcEVkZ2U7XG5cblx0XHR2YXIgcHJlU25hcHBlZDtcblxuXHRcdHZhciBiLCB4LCB5O1xuXG5cdFx0dmFyIHJlZHJhdyA9IGZhbHNlO1xuXG5cdFx0Ly8gdmFyIHBhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFuZScpO1xuXHRcdC8vIHZhciBnaG9zdHBhbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2hvc3RwYW5lJyk7XG5cblx0XHR2YXIgbW91c2VPblRpdGxlID0gZmFsc2U7XG5cdFx0dmFyIHNuYXBUeXBlO1xuXG5cdFx0cGFuZV90aXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdG1vdXNlT25UaXRsZSA9IHRydWU7XG5cdFx0fSk7XG5cblx0XHRwYW5lX3RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHRtb3VzZU9uVGl0bGUgPSBmYWxzZTtcblx0XHR9KTtcblxuXHRcdHJlc2l6ZV9mdWxsLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBUT09EIHRvZ2dsZSBiYWNrIHRvIHJlc3RvcmVkIHNpemVcblx0XHRcdGlmICghcHJlU25hcHBlZCkgcHJlU25hcHBlZCA9IHtcblx0XHRcdFx0d2lkdGg6IGIud2lkdGgsXG5cdFx0XHRcdGhlaWdodDogYi5oZWlnaHRcblx0XHRcdH07XG5cblx0XHRcdHNuYXBUeXBlID0gJ2Z1bGwtc2NyZWVuJztcblx0XHRcdHJlc2l6ZUVkZ2VzKCk7XG5cdFx0fSk7XG5cblx0XHQvLyBwYW5lX3N0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcblx0XHQvLyBcdG1vdXNlT25UaXRsZSA9IHRydWU7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyBwYW5lX3N0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIFx0bW91c2VPblRpdGxlID0gZmFsc2U7XG5cdFx0Ly8gfSk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoc25hcFR5cGUpXG5cdFx0XHRcdHJlc2l6ZUVkZ2VzKCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG5lZWRzUmVzaXplID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdC8vIHV0aWxzXG5cdFx0ZnVuY3Rpb24gc2V0Qm91bmRzKGVsZW1lbnQsIHgsIHksIHcsIGgpIHtcblx0XHRcdGVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdFx0ZWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4Jztcblx0XHRcdGVsZW1lbnQuc3R5bGUud2lkdGggPSB3ICsgJ3B4Jztcblx0XHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cblx0XHRcdGlmIChlbGVtZW50ID09PSBwYW5lKSB7XG5cdFx0XHRcdHJlc2l6ZSh3LCBoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoaW50SGlkZSgpIHtcblx0XHRcdHNldEJvdW5kcyhnaG9zdHBhbmUsIGIubGVmdCwgYi50b3AsIGIud2lkdGgsIGIuaGVpZ2h0KTtcblx0XHRcdGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMDtcblx0XHR9XG5cblx0XHRzZXRCb3VuZHMocGFuZSwgMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNldHRpbmdzLmhlaWdodCk7XG5cdFx0c2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNldHRpbmdzLmhlaWdodCk7XG5cblx0XHQvLyBNb3VzZSBldmVudHNcblx0XHRwYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdmUpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvblVwKTtcblxuXHRcdC8vIFRvdWNoIGV2ZW50c1xuXHRcdHBhbmUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hEb3duKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcblxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaERvd24oZSkge1xuXHRcdFx0b25Eb3duKGUudG91Y2hlc1swXSk7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuXHRcdFx0b25Nb3ZlKGUudG91Y2hlc1swXSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG5cdFx0XHRpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAwKSBvblVwKGUuY2hhbmdlZFRvdWNoZXNbMF0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcblx0XHRcdG9uRG93bihlKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbkRvd24oZSkge1xuXHRcdFx0Y2FsYyhlKTtcblxuXHRcdFx0dmFyIGlzUmVzaXppbmcgPSBvblJpZ2h0RWRnZSB8fCBvbkJvdHRvbUVkZ2UgfHwgb25Ub3BFZGdlIHx8IG9uTGVmdEVkZ2U7XG5cdFx0XHR2YXIgaXNNb3ZpbmcgPSAhaXNSZXNpemluZyAmJiBjYW5Nb3ZlKCk7XG5cblx0XHRcdGNsaWNrZWQgPSB7XG5cdFx0XHRcdHg6IHgsXG5cdFx0XHRcdHk6IHksXG5cdFx0XHRcdGN4OiBlLmNsaWVudFgsXG5cdFx0XHRcdGN5OiBlLmNsaWVudFksXG5cdFx0XHRcdHc6IGIud2lkdGgsXG5cdFx0XHRcdGg6IGIuaGVpZ2h0LFxuXHRcdFx0XHRpc1Jlc2l6aW5nOiBpc1Jlc2l6aW5nLFxuXHRcdFx0XHRpc01vdmluZzogaXNNb3ZpbmcsXG5cdFx0XHRcdG9uVG9wRWRnZTogb25Ub3BFZGdlLFxuXHRcdFx0XHRvbkxlZnRFZGdlOiBvbkxlZnRFZGdlLFxuXHRcdFx0XHRvblJpZ2h0RWRnZTogb25SaWdodEVkZ2UsXG5cdFx0XHRcdG9uQm90dG9tRWRnZTogb25Cb3R0b21FZGdlXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoaXNSZXNpemluZyB8fCBpc01vdmluZykge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2FuTW92ZSgpIHtcblx0XHRcdHJldHVybiBtb3VzZU9uVGl0bGU7XG5cdFx0XHQvLyByZXR1cm4geCA+IDAgJiYgeCA8IGIud2lkdGggJiYgeSA+IDAgJiYgeSA8IGIuaGVpZ2h0XG5cdFx0XHQvLyAmJiB5IDwgMTg7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2FsYyhlKSB7XG5cdFx0XHRiID0gcGFuZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHggPSBlLmNsaWVudFggLSBiLmxlZnQ7XG5cdFx0XHR5ID0gZS5jbGllbnRZIC0gYi50b3A7XG5cblx0XHRcdG9uVG9wRWRnZSA9IHkgPCBNQVJHSU5TO1xuXHRcdFx0b25MZWZ0RWRnZSA9IHggPCBNQVJHSU5TO1xuXHRcdFx0b25SaWdodEVkZ2UgPSB4ID49IGIud2lkdGggLSBNQVJHSU5TO1xuXHRcdFx0b25Cb3R0b21FZGdlID0geSA+PSBiLmhlaWdodCAtIE1BUkdJTlM7XG5cdFx0fVxuXG5cdFx0dmFyIGU7IC8vIGN1cnJlbnQgbW91c2Vtb3ZlIGV2ZW50XG5cblx0XHRmdW5jdGlvbiBvbk1vdmUoZWUpIHtcblx0XHRcdGUgPSBlZTtcblx0XHRcdGNhbGMoZSk7XG5cblx0XHRcdHJlZHJhdyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYW5pbWF0ZSgpIHtcblxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG5cdFx0XHRpZiAoIXJlZHJhdykgcmV0dXJuO1xuXG5cdFx0XHRyZWRyYXcgPSBmYWxzZTtcblxuXHRcdFx0aWYgKGNsaWNrZWQgJiYgY2xpY2tlZC5pc1Jlc2l6aW5nKSB7XG5cblx0XHRcdFx0aWYgKGNsaWNrZWQub25SaWdodEVkZ2UpIHBhbmUuc3R5bGUud2lkdGggPSBNYXRoLm1heCh4LCBtaW5XaWR0aCkgKyAncHgnO1xuXHRcdFx0XHRpZiAoY2xpY2tlZC5vbkJvdHRvbUVkZ2UpIHBhbmUuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgoeSwgbWluSGVpZ2h0KSArICdweCc7XG5cblx0XHRcdFx0aWYgKGNsaWNrZWQub25MZWZ0RWRnZSkge1xuXHRcdFx0XHRcdHZhciBjdXJyZW50V2lkdGggPSBNYXRoLm1heChjbGlja2VkLmN4IC0gZS5jbGllbnRYICArIGNsaWNrZWQudywgbWluV2lkdGgpO1xuXHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBtaW5XaWR0aCkge1xuXHRcdFx0XHRcdFx0cGFuZS5zdHlsZS53aWR0aCA9IGN1cnJlbnRXaWR0aCArICdweCc7XG5cdFx0XHRcdFx0XHRwYW5lLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyAncHgnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjbGlja2VkLm9uVG9wRWRnZSkge1xuXHRcdFx0XHRcdHZhciBjdXJyZW50SGVpZ2h0ID0gTWF0aC5tYXgoY2xpY2tlZC5jeSAtIGUuY2xpZW50WSAgKyBjbGlja2VkLmgsIG1pbkhlaWdodCk7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRIZWlnaHQgPiBtaW5IZWlnaHQpIHtcblx0XHRcdFx0XHRcdHBhbmUuc3R5bGUuaGVpZ2h0ID0gY3VycmVudEhlaWdodCArICdweCc7XG5cdFx0XHRcdFx0XHRwYW5lLnN0eWxlLnRvcCA9IGUuY2xpZW50WSArICdweCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aGludEhpZGUoKTtcblxuXHRcdFx0XHRyZXNpemUoYi53aWR0aCwgYi5oZWlnaHQpO1xuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNsaWNrZWQgJiYgY2xpY2tlZC5pc01vdmluZykge1xuXG5cdFx0XHRcdHN3aXRjaChjaGVja3MoKSkge1xuXHRcdFx0XHRcdGNhc2UgJ2Z1bGwtc2NyZWVuJzpcblx0XHRcdFx0XHRcdHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0XHRcdFx0Z2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdzbmFwLXRvcC1lZGdlJzpcblx0XHRcdFx0XHRcdHNldEJvdW5kcyhnaG9zdHBhbmUsIDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcblx0XHRcdFx0XHRcdGdob3N0cGFuZS5zdHlsZS5vcGFjaXR5ID0gMC4yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnc25hcC1sZWZ0LWVkZ2UnOlxuXHRcdFx0XHRcdFx0c2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0XHRcdFx0Z2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdzbmFwLXJpZ2h0LWVkZ2UnOlxuXHRcdFx0XHRcdFx0c2V0Qm91bmRzKGdob3N0cGFuZSwgd2luZG93LmlubmVyV2lkdGggLyAyLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0XHRcdFx0XHRnaG9zdHBhbmUuc3R5bGUub3BhY2l0eSA9IDAuMjtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3NuYXAtYm90dG9tLWVkZ2UnOlxuXHRcdFx0XHRcdFx0c2V0Qm91bmRzKGdob3N0cGFuZSwgMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMiwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpO1xuXHRcdFx0XHRcdFx0Z2hvc3RwYW5lLnN0eWxlLm9wYWNpdHkgPSAwLjI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0aGludEhpZGUoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwcmVTbmFwcGVkKSB7XG5cdFx0XHRcdFx0c2V0Qm91bmRzKHBhbmUsXG5cdFx0XHRcdFx0XHRlLmNsaWVudFggLSBwcmVTbmFwcGVkLndpZHRoIC8gMixcblx0XHRcdFx0XHRcdGUuY2xpZW50WSAtIE1hdGgubWluKGNsaWNrZWQueSwgcHJlU25hcHBlZC5oZWlnaHQpLFxuXHRcdFx0XHRcdFx0cHJlU25hcHBlZC53aWR0aCxcblx0XHRcdFx0XHRcdHByZVNuYXBwZWQuaGVpZ2h0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBtb3Zpbmdcblx0XHRcdFx0cGFuZS5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gY2xpY2tlZC55KSArICdweCc7XG5cdFx0XHRcdHBhbmUuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSBjbGlja2VkLngpICsgJ3B4JztcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoaXMgY29kZSBleGVjdXRlcyB3aGVuIG1vdXNlIG1vdmVzIHdpdGhvdXQgY2xpY2tpbmdcblxuXHRcdFx0Ly8gc3R5bGUgY3Vyc29yXG5cdFx0XHRpZiAob25SaWdodEVkZ2UgJiYgb25Cb3R0b21FZGdlIHx8IG9uTGVmdEVkZ2UgJiYgb25Ub3BFZGdlKSB7XG5cdFx0XHRcdHBhbmUuc3R5bGUuY3Vyc29yID0gJ253c2UtcmVzaXplJztcblx0XHRcdH0gZWxzZSBpZiAob25SaWdodEVkZ2UgJiYgb25Ub3BFZGdlIHx8IG9uQm90dG9tRWRnZSAmJiBvbkxlZnRFZGdlKSB7XG5cdFx0XHRcdHBhbmUuc3R5bGUuY3Vyc29yID0gJ25lc3ctcmVzaXplJztcblx0XHRcdH0gZWxzZSBpZiAob25SaWdodEVkZ2UgfHwgb25MZWZ0RWRnZSkge1xuXHRcdFx0XHRwYW5lLnN0eWxlLmN1cnNvciA9ICdldy1yZXNpemUnO1xuXHRcdFx0fSBlbHNlIGlmIChvbkJvdHRvbUVkZ2UgfHwgb25Ub3BFZGdlKSB7XG5cdFx0XHRcdHBhbmUuc3R5bGUuY3Vyc29yID0gJ25zLXJlc2l6ZSc7XG5cdFx0XHR9IGVsc2UgaWYgKGNhbk1vdmUoKSkge1xuXHRcdFx0XHRwYW5lLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhbmUuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNoZWNrcygpIHtcblx0XHRcdC8qXG5cdFx0XHR2YXIgcmlnaHRTY3JlZW5FZGdlLCBib3R0b21TY3JlZW5FZGdlO1xuXG5cdFx0XHRyaWdodFNjcmVlbkVkZ2UgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIE1BUkdJTlM7XG5cdFx0XHRib3R0b21TY3JlZW5FZGdlID0gd2luZG93LmlubmVySGVpZ2h0IC0gTUFSR0lOUztcblxuXHRcdFx0Ly8gRWRnZSBDaGVja2luZ3Ncblx0XHRcdC8vIGhpbnRGdWxsKCk7XG5cdFx0XHRpZiAoYi50b3AgPCBGVUxMU0NSRUVOX01BUkdJTlMgfHwgYi5sZWZ0IDwgRlVMTFNDUkVFTl9NQVJHSU5TIHx8IGIucmlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCAtIEZVTExTQ1JFRU5fTUFSR0lOUyB8fCBiLmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodCAtIEZVTExTQ1JFRU5fTUFSR0lOUylcblx0XHRcdFx0cmV0dXJuICdmdWxsLXNjcmVlbic7XG5cblx0XHRcdC8vIGhpbnRUb3AoKTtcblx0XHRcdGlmIChiLnRvcCA8IE1BUkdJTlMpIHJldHVybiAnc25hcC10b3AtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRMZWZ0KCk7XG5cdFx0XHRpZiAoYi5sZWZ0IDwgTUFSR0lOUykgcmV0dXJuICdzbmFwLWxlZnQtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRSaWdodCgpO1xuXHRcdFx0aWYgKGIucmlnaHQgPiByaWdodFNjcmVlbkVkZ2UpIHJldHVybiAnc25hcC1yaWdodC1lZGdlJztcblxuXHRcdFx0Ly8gaGludEJvdHRvbSgpO1xuXHRcdFx0aWYgKGIuYm90dG9tID4gYm90dG9tU2NyZWVuRWRnZSkgcmV0dXJuICdzbmFwLWJvdHRvbS1lZGdlJztcblx0XHRcdCovXG5cblx0XHRcdGlmIChlLmNsaWVudFkgPCBGVUxMU0NSRUVOX01BUkdJTlMpIHJldHVybiAnZnVsbC1zY3JlZW4nO1xuXG5cdFx0XHRpZiAoZS5jbGllbnRZIDwgU05BUF9NQVJHSU5TKSByZXR1cm4gJ3NuYXAtdG9wLWVkZ2UnO1xuXG5cdFx0XHQvLyBoaW50TGVmdCgpO1xuXHRcdFx0aWYgKGUuY2xpZW50WCA8IFNOQVBfTUFSR0lOUykgcmV0dXJuICdzbmFwLWxlZnQtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRSaWdodCgpO1xuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIC0gZS5jbGllbnRYIDwgU05BUF9NQVJHSU5TKSByZXR1cm4gJ3NuYXAtcmlnaHQtZWRnZSc7XG5cblx0XHRcdC8vIGhpbnRCb3R0b20oKTtcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJIZWlnaHQtIGUuY2xpZW50WSA8IFNOQVBfTUFSR0lOUykgcmV0dXJuICdzbmFwLWJvdHRvbS1lZGdlJztcblxuXHRcdH1cblxuXHRcdGFuaW1hdGUoKTtcblxuXHRcdGZ1bmN0aW9uIHJlc2l6ZUVkZ2VzKCkge1xuXHRcdFx0c3dpdGNoKHNuYXBUeXBlKSB7XG5cdFx0XHRcdGNhc2UgJ2Z1bGwtc2NyZWVuJzpcblx0XHRcdFx0XHQvLyBoaW50RnVsbCgpO1xuXHRcdFx0XHRcdHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc25hcC10b3AtZWRnZSc6XG5cdFx0XHRcdFx0Ly8gaGludFRvcCgpO1xuXHRcdFx0XHRcdHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IC8gMik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NuYXAtbGVmdC1lZGdlJzpcblx0XHRcdFx0XHQvLyBoaW50TGVmdCgpO1xuXHRcdFx0XHRcdHNldEJvdW5kcyhwYW5lLCAwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NuYXAtcmlnaHQtZWRnZSc6XG5cdFx0XHRcdFx0c2V0Qm91bmRzKHBhbmUsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgMCwgd2luZG93LmlubmVyV2lkdGggLyAyLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzbmFwLWJvdHRvbS1lZGdlJzpcblx0XHRcdFx0XHRzZXRCb3VuZHMocGFuZSwgMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMiwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVXAoZSkge1xuXHRcdFx0Y2FsYyhlKTtcblxuXHRcdFx0aWYgKGNsaWNrZWQgJiYgY2xpY2tlZC5pc01vdmluZykge1xuXHRcdFx0XHQvLyBTbmFwXG5cdFx0XHRcdHNuYXBUeXBlID0gY2hlY2tzKCk7XG5cdFx0XHRcdGlmIChzbmFwVHlwZSkge1xuXHRcdFx0XHRcdHByZVNuYXBwZWQgPSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogYi53aWR0aCxcblx0XHRcdFx0XHRcdGhlaWdodDogYi5oZWlnaHRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJlc2l6ZUVkZ2VzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJlU25hcHBlZCA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoaW50SGlkZSgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNsaWNrZWQgPSBudWxsO1xuXG5cdFx0fVxuXHR9KSgpO1xuXG59XG5cbndpbmRvdy5UaW1lbGluZXIgPSBUaW1lbGluZXI7XG4iLCJ2YXIgaGFuZGxlRHJhZyA9IHJlcXVpcmUoJy4vdXRpbF9oYW5kbGVfZHJhZycpO1xuXG5mdW5jdGlvbiBDYW52YXModywgaCkge1xuXG5cdHZhciBjYW52YXMsIGN0eCwgd2lkdGgsIGhlaWdodCwgZHByO1xuXG5cdHZhciBjYW52YXNJdGVtcyA9IFtdO1xuXHR2YXIgY2hpbGQ7XG5cblx0ZnVuY3Rpb24gY3JlYXRlKCkge1xuXHRcdGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0U2l6ZSh3LCBoKSB7XG5cdFx0d2lkdGggPSB3O1xuXHRcdGhlaWdodCA9IGg7XG5cdFx0ZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdFx0Y2FudmFzLndpZHRoID0gd2lkdGggKiBkcHI7XG5cdFx0Y2FudmFzLmhlaWdodCA9IGhlaWdodCAqIGRwcjtcblx0XHRjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG5cdFx0Y2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblx0XHRpZiAoY2hpbGQpIGNoaWxkLnNldFNpemUodywgaCk7XG5cdH1cblxuXHRmdW5jdGlvbiBwYWludChjdHgpIHtcblx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdGlmICghY2hpbGQucGFpbnQpIGNvbnNvbGUud2FybignaW1wbGVtZW50IHJlcGFpbnQoKScpXG5cdFx0XHRjaGlsZC5wYWludChjdHgpO1xuXHRcdH1cblxuXHRcdHZhciBpdGVtO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FudmFzSXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGl0ZW0gPSBjYW52YXNJdGVtc1tpXTtcblx0XHRcdGl0ZW0ucGFpbnQoKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlcGFpbnQoKSB7XG5cdFx0cGFpbnQoY3R4KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZChpdGVtKSB7XG5cdFx0Y2FudmFzSXRlbXMucHVzaChpdGVtKVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlKGl0ZW0pIHtcblx0XHRjYW52YXNJdGVtcy5zcGxpY2UoY2FudmFzSXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG5cdH1cblxuXHRmdW5jdGlvbiB1c2VzKGMpIHtcblx0XHRjaGlsZCA9IGM7XG5cdFx0Y2hpbGQuYWRkID0gdGhpcy5hZGQ7XG5cdFx0Y2hpbGQucmVtb3ZlID0gdGhpcy5yZW1vdmU7XG5cdH1cblxuXHRjcmVhdGUoKTtcblx0c2V0U2l6ZSh3LCBoKTtcblx0dGhpcy5zZXRTaXplID0gc2V0U2l6ZTtcblx0dGhpcy5yZXBhaW50ID0gcmVwYWludDtcblx0dGhpcy51c2VzID0gdXNlcztcblxuXHR0aGlzLmRvbSA9IGNhbnZhcztcblxuXHRoYW5kbGVEcmFnKGNhbnZhcyxcblx0XHRmdW5jdGlvbiBkb3duKGUpIHtcblx0XHRcdGlmIChjaGlsZC5vbkRvd24pIHsgY2hpbGQub25Eb3duKGUpIH07XG5cdFx0fSxcblx0XHRmdW5jdGlvbiBtb3ZlKGUpIHtcblx0XHRcdGlmIChjaGlsZC5vbk1vdmUpIHsgY2hpbGQub25Nb3ZlKGUpIH07XG5cdFx0fSxcblx0XHRmdW5jdGlvbiB1cChlKSB7XG5cdFx0XHRpZiAoY2hpbGQub25VcCkgeyBjaGlsZC5vblVwKGUpIH07XG5cdFx0fVxuXHRcdC8vIGZ1bmN0aW9uIGhpdChlKSB7XG5cdFx0Ly8gXHRpZiAoY2hpbGQub25IaXQpIHsgY2hpbGQub25IaXQoZSkgfTtcblx0XHQvLyB9XG5cdCk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXM7XG5cbi8qXG4gKiBVc2FnZTogY2FudmFzID0gbmV3IENhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcbiAqIGNhbnZhcy5yZXNpemUoKTtcbiAqL1xuXG4vLyBjaGlsZHJlblxuLy8gMTogb3ZlcnJpZGUgcmVwYWludFxuLy8gMjogYWRkIG9iamVjdHNcbi8vIENhbnZhcy51c2VzKENhbnZhc0NoaWxkKTtcbi8vIENhbnZhc0l0ZW1cbi8vIHdpZHRoLCBoZWlnaHQsIHgsIHlcbi8vIGFsbG93IERyYWdcbi8vIGFsbG93IENsaWNrXG4vLyBtb3VzZU92ZXJcbi8vIFxuXG4iLCJ2YXIgZm9udCA9IHJlcXVpcmUoJy4vZm9udC5qc29uJyksXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHRzdHlsZSA9IHJlcXVpcmUoJy4vdXRpbHMnKS5zdHlsZTtcblxudmFyIGRwO1xuXG5mdW5jdGlvbiBJY29uQnV0dG9uKHNpemUsIGljb24sIHRvb2x0aXAsIGRwKSB7XG5cdHZhciBpY29uU3R5bGUgPSB7XG5cdFx0cGFkZGluZzogJzAuMmVtIDAuNGVtJyxcblx0XHRtYXJnaW46ICcwZW0nLFxuXHRcdGJhY2tncm91bmQ6ICdub25lJyxcblx0XHRvdXRsaW5lOiAnbm9uZScsXG5cdFx0Zm9udFNpemU6ICcxNnB4Jyxcblx0XHRib3JkZXI6ICdub25lJyxcblx0XHRib3JkZXJSYWRpdXM6ICcwLjJlbScsXG5cdH07XG5cblx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRzdHlsZShidXR0b24sIGljb25TdHlsZSk7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0YnV0dG9uLmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cblx0dGhpcy5jdHggPSBjdHg7XG5cdHRoaXMuZG9tID0gYnV0dG9uO1xuXHR0aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuXHR2YXIgbWUgPSB0aGlzO1xuXHR0aGlzLnNpemUgPSBzaXplO1xuXHR2YXIgZHByID0gMTtcblxuXHR0aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHRcdHZhciBoZWlnaHQgPSBzaXplO1xuXG5cdFx0dmFyIGdseXBoID0gZm9udC5mb250c1tpY29uXTtcblxuXHRcdGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XG5cdFx0Y2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblx0XHR2YXIgc2NhbGUgPSBoZWlnaHQgLyBmb250LnVuaXRzUGVyRW07XG5cdFx0dmFyIHdpZHRoID0gZ2x5cGguYWR2YW5jZVdpZHRoICogc2NhbGUgKyAwLjUgfCAwO1xuXG5cdFx0d2lkdGggKz0gMjtcblx0XHRoZWlnaHQgKz0gMjtcblxuXHRcdGNhbnZhcy53aWR0aCA9IHdpZHRoICogZHByO1xuXHRcdGNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcblxuXHRcdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5jO1xuXHRcdG1lLmRyYXcoKTtcblx0fTtcblxuXHRpZiAoZHApIGRwLm9uKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG5cblx0dGhpcy5zZXRTaXplID0gZnVuY3Rpb24ocykge1xuXHRcdHNpemUgPSBzO1xuXHRcdHRoaXMucmVzaXplKCk7XG5cdH07XG5cblx0dGhpcy5zZXRJY29uID0gZnVuY3Rpb24oaWNvbikge1xuXHRcdG1lLmljb24gPSBpY29uO1xuXG5cdFx0aWYgKCFmb250LmZvbnRzW2ljb25dKSBjb25zb2xlLndhcm4oJ0ZvbnQgaWNvbiBub3QgZm91bmQhJyk7XG5cdFx0dGhpcy5yZXNpemUoKTtcblx0fTtcblxuXHR0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSk7XG5cdH07XG5cblx0dmFyIExPTkdfSE9MRF9EVVJBVElPTiA9IDUwMDtcblx0dmFyIGxvbmdIb2xkVGltZXI7XG5cblx0dGhpcy5vbkxvbmdIb2xkID0gZnVuY3Rpb24oZikge1xuXHRcdC8vIG5vdCBtb3N0IGVsYWdlbnQgYnV0IG9oIHdlbGxzLlxuXHRcdGZ1bmN0aW9uIHN0YXJ0SG9sZChlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0bG9uZ0hvbGRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChsb25nSG9sZFRpbWVyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0xPTkcgSE9MRC1FRCEnKTtcblx0XHRcdFx0XHRmKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIExPTkdfSE9MRF9EVVJBVElPTik7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2xlYXJMb25nSG9sZFRpbWVyKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KGxvbmdIb2xkVGltZXIpO1xuXHRcdH1cblx0XHRcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnRIb2xkKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN0YXJ0SG9sZCk7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbGVhckxvbmdIb2xkVGltZXIpO1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNsZWFyTG9uZ0hvbGRUaW1lcik7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgY2xlYXJMb25nSG9sZFRpbWVyKTtcblx0fTtcblxuXHR0aGlzLnNldFRpcCA9IGZ1bmN0aW9uKHRpcCkge1xuXHRcdHRvb2x0aXAgPSB0aXA7XG5cdH07XG5cblx0dmFyIGJvcmRlcnMgPSB7XG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICcgKyBUaGVtZS5iLFxuXHRcdC8vIGJveFNoYWRvdzogVGhlbWUuYiArICcgMXB4IDFweCdcblx0fTtcblxuXHR2YXIgbm9fYm9yZGVycyA9IHtcblx0XHRib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnLFxuXHRcdC8vIGJveFNoYWRvdzogJ25vbmUnXG5cdH07XG5cblx0dmFyIG5vcm1hbCA9ICdub25lJzsgLy8gVGhlbWUuYjtcblx0dmFyIHVwID0gVGhlbWUuYztcblx0dmFyIGRvd24gPSBUaGVtZS5iO1xuXG5cdGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gbm9ybWFsO1xuXHRzdHlsZShidXR0b24sIG5vX2JvcmRlcnMpO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcblx0XHQvLyBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IHVwO1xuXHRcdHN0eWxlKGJ1dHRvbiwgYm9yZGVycyk7XG5cdFx0XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmQ7XG5cdFx0Ly8gbWUuZHJvcHNoYWRvdyA9IHRydWU7XG5cdFx0Y3R4LnNoYWRvd0NvbG9yID0gVGhlbWUuYjtcblx0XHRjdHguc2hhZG93Qmx1ciA9IDAuNSAqIGRwcjtcblx0XHRjdHguc2hhZG93T2Zmc2V0WCA9IDEgKiBkcHI7XG5cdFx0Y3R4LnNoYWRvd09mZnNldFkgPSAxICogZHByO1xuXHRcdG1lLmRyYXcoKTtcblxuXHRcdGlmICh0b29sdGlwICYmIGRwKSBkcC5maXJlKCdzdGF0dXMnLCAnYnV0dG9uOiAnICsgdG9vbHRpcCk7XG5cdH0pO1xuXG5cdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpIHtcblx0XHRidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IGRvd247XG5cdFx0Ly8gY3R4LmZpbGxTdHlsZSA9IFRoZW1lLmI7XG5cdFx0Ly8gbWUuZHJhdygpO1xuXHR9KTtcblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIGN0eC5maWxsU3R5bGUgPSBUaGVtZS5kO1xuXHRcdGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gbm9ybWFsO1xuXHRcdHN0eWxlKGJ1dHRvbiwgYm9yZGVycyk7XG5cdFx0Ly8gbWUuZHJhdygpO1xuXHR9KTtcblxuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbigpIHtcblx0XHQvLyBjdHguZmlsbFN0eWxlID0gVGhlbWUuYztcblx0XHRcblxuXHRcdGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gbm9ybWFsO1xuXHRcdHN0eWxlKGJ1dHRvbiwgbm9fYm9yZGVycyk7XG5cdFx0bWUuZHJvcHNoYWRvdyA9IGZhbHNlO1xuXHRcdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5jO1xuXHRcdGN0eC5zaGFkb3dDb2xvciA9IG51bGw7XG5cdFx0Y3R4LnNoYWRvd0JsdXIgPSAwO1xuXHRcdGN0eC5zaGFkb3dPZmZzZXRYID0gMDtcblx0XHRjdHguc2hhZG93T2Zmc2V0WSA9IDA7XG5cdFx0bWUuZHJhdygpO1xuXHR9KTtcblxuXHRpZiAoaWNvbikgdGhpcy5zZXRJY29uKGljb24pO1xufVxuXG5JY29uQnV0dG9uLnByb3RvdHlwZS5DTURfTUFQID0ge1xuXHRNOiAnbW92ZVRvJyxcblx0TDogJ2xpbmVUbycsXG5cdFE6ICdxdWFkcmF0aWNDdXJ2ZVRvJyxcblx0QzogJ2JlemllckN1cnZlVG8nLFxuXHRaOiAnY2xvc2VQYXRoJ1xufTtcblxuSWNvbkJ1dHRvbi5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMuaWNvbikgcmV0dXJuO1xuXG5cdHZhciBjdHggPSB0aGlzLmN0eDtcblxuXHR2YXIgZ2x5cGggPSBmb250LmZvbnRzW3RoaXMuaWNvbl07XG5cblx0dmFyIGhlaWdodCA9IHRoaXMuc2l6ZTtcblx0dmFyIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHR2YXIgc2NhbGUgPSBoZWlnaHQgLyBmb250LnVuaXRzUGVyRW0gKiBkcHI7XG5cdHZhciBwYXRoX2NvbW1hbmRzID0gIGdseXBoLmNvbW1hbmRzLnNwbGl0KCcgJyk7XG5cblx0Y3R4LnNhdmUoKTtcblx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCAqIGRwciwgdGhpcy5jYW52YXMuaGVpZ2h0ICogZHByKTtcblxuXHRpZiAodGhpcy5kcm9wc2hhZG93KSB7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHguZmlsbFN0eWxlID0gVGhlbWUuYjtcblx0XHRjdHgudHJhbnNsYXRlKDEuNSAqIGRwciwgMS41ICogZHByKTtcblx0XHRjdHguc2NhbGUoc2NhbGUsIC1zY2FsZSk7XG5cdFx0Y3R4LnRyYW5zbGF0ZSgwICwgLWZvbnQuYXNjZW5kZXIpO1xuXHRcdGN0eC5iZWdpblBhdGgoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBpbCA9IHBhdGhfY29tbWFuZHMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuXHRcdFx0dmFyIGNtZHMgPSBwYXRoX2NvbW1hbmRzW2ldLnNwbGl0KCcsJyk7XG5cdFx0XHR2YXIgcGFyYW1zID0gY21kcy5zbGljZSgxKTtcblxuXHRcdFx0Y3R4W3RoaXMuQ01EX01BUFtjbWRzWzBdXV0uYXBwbHkoY3R4LCBwYXJhbXMpO1xuXHRcdH1cblx0XHRjdHguZmlsbCgpO1xuXHRcdGN0eC5yZXN0b3JlKCk7XG5cdH1cblxuXHRjdHguc2NhbGUoc2NhbGUsIC1zY2FsZSk7XG5cdGN0eC50cmFuc2xhdGUoMCwgLWZvbnQuYXNjZW5kZXIpO1xuXHRjdHguYmVnaW5QYXRoKCk7XG5cblx0Zm9yICh2YXIgaSA9IDAsIGlsID0gcGF0aF9jb21tYW5kcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XG5cdFx0dmFyIGNtZHMgPSBwYXRoX2NvbW1hbmRzW2ldLnNwbGl0KCcsJyk7XG5cdFx0dmFyIHBhcmFtcyA9IGNtZHMuc2xpY2UoMSk7XG5cblx0XHRjdHhbdGhpcy5DTURfTUFQW2NtZHNbMF1dXS5hcHBseShjdHgsIHBhcmFtcyk7XG5cdH1cblx0Y3R4LmZpbGwoKTtcblx0Y3R4LnJlc3RvcmUoKTtcblxuXHQvKlxuXHR2YXIgdHJpYW5nbGUgPSBoZWlnaHQgLyAzICogZHByO1xuXHRjdHguc2F2ZSgpO1xuXHQvLyBjdHgudHJhbnNsYXRlKGRwciAqIDIsIDApO1xuXHQvLyBjdHguZmlsbFJlY3QodGhpcy5jYW52YXMud2lkdGggLSB0cmlhbmdsZSwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gdHJpYW5nbGUsIHRyaWFuZ2xlLCB0cmlhbmdsZSk7XG5cdGN0eC5iZWdpblBhdGgoKTtcblx0Y3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAtIHRyaWFuZ2xlLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0cmlhbmdsZSAvIDIpO1xuXHRjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0cmlhbmdsZSAvIDIpO1xuXHRjdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC0gdHJpYW5nbGUgLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXHRjdHguZmlsbCgpO1xuXHRjdHgucmVzdG9yZSgpO1xuXHQqL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJY29uQnV0dG9uOyIsInZhciBUaGVtZSA9IHJlcXVpcmUoJy4vdGhlbWUnKSxcblx0RG8gPSByZXF1aXJlKCdkby5qcycpLFxuXHRoYW5kbGVEcmFnID0gcmVxdWlyZSgnLi91dGlsX2hhbmRsZV9kcmFnJyksXG5cdHN0eWxlID0gcmVxdWlyZSgnLi91dGlscycpLnN0eWxlLFxuXHRmaXJzdERlZmluZWQgPSByZXF1aXJlKCcuL3V0aWxzJykuZmlyc3REZWZpbmVkXG5cdDtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gTnVtYmVyVUlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gTnVtYmVyVUkoY29uZmlnKSB7XG5cdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0dmFyIG1pbiA9IGNvbmZpZy5taW4gPT09IHVuZGVmaW5lZCA/IC1JbmZpbml0eSA6IGNvbmZpZy5taW47XG5cblx0Ly8gY29uZmlnLnhzdGVwIGFuZCBjb25maWcueXN0ZXAgYWxsb3cgY29uZmlndXJpbmcgYWRqdXN0bWVudFxuXHQvLyBzcGVlZCBhY3Jvc3MgZWFjaCBheGlzLlxuXHQvLyBjb25maWcud2hlZWxTdGVwIGFuZCBjb25maWcud2hlZWxTdGVwRmluZSBhbGxvdyBjb25maWd1cmluZ1xuXHQvLyBhZGp1c3RtZW50IHNwZWVkIGZvciBtb3VzZXdoZWVsLCBhbmQgbW91c2V3aGVlbCB3aGlsZSBob2xkaW5nIDxhbHQ+XG5cblx0Ly8gSWYgb25seSBjb25maWcuc3RlcCBpcyBzcGVjaWZpZWQsIGFsbCBvdGhlciBhZGp1c3RtZW50IHNwZWVkc1xuXHQvLyBhcmUgc2V0IHRvIHRoZSBzYW1lIHZhbHVlLlxuXHR2YXIgeHN0ZXAgPSBmaXJzdERlZmluZWQoY29uZmlnLnhzdGVwLCBjb25maWcuc3RlcCwgMC4wMDEpO1xuXHR2YXIgeXN0ZXAgPSBmaXJzdERlZmluZWQoY29uZmlnLnlzdGVwLCBjb25maWcuc3RlcCwgMC4xKTtcblx0dmFyIHdoZWVsU3RlcCA9IGZpcnN0RGVmaW5lZChjb25maWcud2hlZWxTdGVwLCB5c3RlcCk7XG5cdHZhciB3aGVlbFN0ZXBGaW5lID0gZmlyc3REZWZpbmVkKGNvbmZpZy53aGVlbFN0ZXBGaW5lLCB4c3RlcCk7XG5cblx0dmFyIHByZWNpc2lvbiA9IGNvbmZpZy5wcmVjaXNpb24gfHwgMztcblx0Ly8gUmFuZ2Vcblx0Ly8gTWF4XG5cblx0dmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHQvLyBzcGFuLnR5cGUgPSAnbnVtYmVyJzsgLy8gc3Bpbm5lclxuXHRcblx0c3R5bGUoc3Bhbiwge1xuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0Zm9udFNpemU6ICcxMHB4Jyxcblx0XHRwYWRkaW5nOiAnMXB4Jyxcblx0XHRjdXJzb3I6ICducy1yZXNpemUnLFxuXHRcdHdpZHRoOiAnNDBweCcsXG5cdFx0bWFyZ2luOiAwLFxuXHRcdG1hcmdpblJpZ2h0OiAnMTBweCcsXG5cdFx0YXBwZWFyYW5jZTogJ25vbmUnLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRib3JkZXI6IDAsXG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlckJvdHRvbTogJzFweCBkb3R0ZWQgJysgVGhlbWUuYyxcblx0XHRjb2xvcjogVGhlbWUuY1xuXHR9KTtcblxuXHR2YXIgbWUgPSB0aGlzO1xuXHR2YXIgc3RhdGUsIHZhbHVlID0gMCwgdW5jaGFuZ2VkX3ZhbHVlO1xuXG5cdHRoaXMub25DaGFuZ2UgPSBuZXcgRG8oKTtcblxuXHRzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcblx0XHRjb25zb2xlLmxvZygnaW5wdXQgY2hhbmdlZCcsIHNwYW4udmFsdWUpO1xuXHRcdHZhbHVlID0gcGFyc2VGbG9hdChzcGFuLnZhbHVlLCAxMCk7XG5cblx0XHRmaXJlQ2hhbmdlKCk7XG5cdH0pO1xuXG5cdC8vIEFsbG93IGtleWRvd24gcHJlc3NlcyBpbiBpbnB1dHMsIGRvbid0IGFsbG93IHBhcmVudCB0byBibG9jayB0aGVtXG5cdHNwYW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9KVxuXG5cdHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbihlKSB7XG5cdFx0c3Bhbi5zZXRTZWxlY3Rpb25SYW5nZSgwLCBzcGFuLnZhbHVlLmxlbmd0aCk7XG5cdH0pXG5cblx0c3Bhbi5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcblx0XHQvLyBEaXNyZWdhcmQgcGl4ZWwvbGluZS9wYWdlIHNjcm9sbGluZyBhbmQganVzdFxuXHRcdC8vIHVzZSBldmVudCBkaXJlY3Rpb24uXG5cdFx0dmFyIGluYyA9IGUuZGVsdGFZID4gMD8gMSA6IC0xO1xuXHRcdGlmKGUuYWx0S2V5KSB7XG5cdFx0XHRpbmMgKj0gd2hlZWxTdGVwRmluZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5jICo9IHdoZWVsU3RlcDtcblx0XHR9XG5cdFx0dmFsdWUgPSBjbGFtcCh2YWx1ZSArIGluYyk7XG5cdFx0ZmlyZUNoYW5nZSgpO1xuXHR9KVxuXG5cdGhhbmRsZURyYWcoc3Bhbiwgb25Eb3duLCBvbk1vdmUsIG9uVXApO1xuXG5cdGZ1bmN0aW9uIGNsYW1wKHZhbHVlKSB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KG1pbiwgdmFsdWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25VcChlKSB7XG5cdFx0aWYgKGUubW92ZWQpIGZpcmVDaGFuZ2UoKTtcblx0XHRlbHNlIHtcblx0XHRcdC8vIHNpbmdsZSBjbGlja1xuXHRcdFx0c3Bhbi5mb2N1cygpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW92ZShlKSB7XG5cdFx0dmFyIGR4ID0gZS5keDtcblx0XHR2YXIgZHkgPSBlLmR5O1xuXHRcblx0XHR2YWx1ZSA9IHVuY2hhbmdlZF92YWx1ZSArIChkeCAqIHhzdGVwKSArIChkeSAqIC15c3RlcCk7XG5cblx0XHR2YWx1ZSA9IGNsYW1wKHZhbHVlKTtcblxuXHRcdC8vIHZhbHVlID0gK3ZhbHVlLnRvRml4ZWQocHJlY2lzaW9uKTsgLy8gb3IgdG9GaXhlZCB0b1ByZWNpc2lvblxuXHRcdG1lLm9uQ2hhbmdlLmZpcmUodmFsdWUsIHRydWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25Eb3duKGUpIHtcblx0XHR1bmNoYW5nZWRfdmFsdWUgPSB2YWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZpcmVDaGFuZ2UoKSB7XG5cdFx0bWUub25DaGFuZ2UuZmlyZSh2YWx1ZSk7XG5cdH1cblxuXHR0aGlzLmRvbSA9IHNwYW47XG5cblx0Ly8gcHVibGljXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbih2KSB7XG5cdFx0dmFsdWUgPSB2O1xuXHRcdHNwYW4udmFsdWUgPSB2YWx1ZS50b0ZpeGVkKHByZWNpc2lvbik7XG5cdH07XG5cblx0dGhpcy5wYWludCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh2YWx1ZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBzcGFuKSB7XG5cdFx0XHRzcGFuLnZhbHVlID0gdmFsdWUudG9GaXhlZChwcmVjaXNpb24pO1xuXHRcdH1cblx0fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJVSTtcbiIsInZhciBTaW1wbGVFdmVudCA9IHJlcXVpcmUoJ2RvLmpzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8vICoqKioqKioqKiogY2xhc3M6IFNjcm9sbEJhciAqKioqKioqKioqKioqKioqKiogLy9cbi8qXG5cdFNpbXBsZSBVSSB3aWRnZXQgdGhhdCBkaXNwbGF5cyBhIHNjcm9sbHRyYWNrIFxuXHRhbmQgc2xpZGVyLCB0aGF0IGZpcmVzIHNvbWUgc2Nyb2xsIGV2ZW50c1xuKi9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbnZhciBzY3JvbGx0cmFja19zdHlsZSA9IHtcblx0Ly8gZmxvYXQ6ICdyaWdodCcsXG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHQvLyByaWdodDogJzAnLFxuXHQvLyB0b3A6ICcwJyxcblx0Ly8gYm90dG9tOiAnMCcsXG5cdGJhY2tncm91bmQ6ICctd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwLCByZ2IoMjksMjksMjkpKSwgY29sb3Itc3RvcCgwLjYsIHJnYig1MCw1MCw1MCkpICknLFxuXHRib3JkZXI6ICcxcHggc29saWQgcmdiKDI5LCAyOSwgMjkpJyxcblx0Ly8gekluZGV4OiAnMTAwMCcsXG5cdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdGN1cnNvcjogJ3BvaW50ZXInXG59O1xuXG52YXIgc2Nyb2xsYmFyX3N0eWxlID0ge1xuXHRiYWNrZ3JvdW5kOiAnLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMC4yLCByZ2IoODgsODgsODgpKSwgY29sb3Itc3RvcCgwLjYsIHJnYig2NCw2NCw2NCkpICknLFxuXHRib3JkZXI6ICcxcHggc29saWQgcmdiKDI1LDI1LDI1KScsXG5cdC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0Ym9yZGVyUmFkaXVzOiAnNnB4J1xufTtcblxuZnVuY3Rpb24gU2Nyb2xsQmFyKGgsIHcsIGRpc3BhdGNoZXIpIHtcblxuXHR2YXIgU0NST0xMQkFSX1dJRFRIID0gdyA/IHcgOiAxMjtcblx0dmFyIFNDUk9MTEJBUl9NQVJHSU4gPSAzO1xuXHR2YXIgU0NST0xMX1dJRFRIID0gU0NST0xMQkFSX1dJRFRIICsgU0NST0xMQkFSX01BUkdJTiAqIDI7XG5cdHZhciBNSU5fQkFSX0xFTkdUSCA9IDI1O1xuXG5cdHZhciBzY3JvbGx0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR1dGlscy5zdHlsZShzY3JvbGx0cmFjaywgc2Nyb2xsdHJhY2tfc3R5bGUpO1xuXG5cdHZhciBzY3JvbGx0cmFja0hlaWdodCA9IGggLSAyO1xuXHRzY3JvbGx0cmFjay5zdHlsZS5oZWlnaHQgPSBzY3JvbGx0cmFja0hlaWdodCArICdweCc7XG5cdHNjcm9sbHRyYWNrLnN0eWxlLndpZHRoID0gU0NST0xMX1dJRFRIICsgJ3B4Jzs7XG5cblx0Ly8gdmFyIHNjcm9sbFRvcCA9IDA7XG5cdHZhciBzY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Ly8gc2Nyb2xsYmFyLmNsYXNzTmFtZSA9ICdzY3JvbGxiYXInO1xuXHR1dGlscy5zdHlsZShzY3JvbGxiYXIsIHNjcm9sbGJhcl9zdHlsZSk7XG5cdHNjcm9sbGJhci5zdHlsZS53aWR0aCA9IFNDUk9MTEJBUl9XSURUSCArICdweCc7XG5cdHNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSBoIC8gMjtcblx0c2Nyb2xsYmFyLnN0eWxlLnRvcCA9IDA7XG5cdHNjcm9sbGJhci5zdHlsZS5sZWZ0ID0gU0NST0xMQkFSX01BUkdJTiArICdweCc7IC8vIDA7IC8vU1xuXG5cdHNjcm9sbHRyYWNrLmFwcGVuZENoaWxkKHNjcm9sbGJhcik7XG5cblx0dmFyIG1lID0gdGhpcztcblxuXHR2YXIgYmFyX2xlbmd0aCwgYmFyX3k7XG5cblx0Ly8gU2V0cyBsZW5ndGhzIG9mIHNjcm9sbGJhciBieSBwZXJjZW50YWdlXG5cdHRoaXMuc2V0TGVuZ3RoID0gZnVuY3Rpb24obCkge1xuXHRcdC8vIGxpbWl0IDAuLjFcblx0XHRsID0gTWF0aC5tYXgoTWF0aC5taW4oMSwgbCksIDApO1xuXHRcdGwgKj0gc2Nyb2xsdHJhY2tIZWlnaHQ7XG5cdFx0YmFyX2xlbmd0aCA9IE1hdGgubWF4KGwsIE1JTl9CQVJfTEVOR1RIKTtcblx0XHRzY3JvbGxiYXIuc3R5bGUuaGVpZ2h0ID0gYmFyX2xlbmd0aCArICdweCc7XG5cdH07XG5cblx0dGhpcy5zZXRIZWlnaHQgPSBmdW5jdGlvbihoZWlnaHQpIHtcblx0XHRoID0gaGVpZ2h0O1xuXG5cdFx0c2Nyb2xsdHJhY2tIZWlnaHQgPSBoIC0gMjtcblx0XHRzY3JvbGx0cmFjay5zdHlsZS5oZWlnaHQgPSBzY3JvbGx0cmFja0hlaWdodCArICdweCcgO1xuXHR9O1xuXG5cdC8vIE1vdmVzIHNjcm9sbGJhciB0byBwb3NpdGlvbiBieSBQZXJjZW50YWdlXG5cdHRoaXMuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihwKSB7XG5cdFx0cCA9IE1hdGgubWF4KE1hdGgubWluKDEsIHApLCAwKTtcblx0XHR2YXIgZW1wdHlUcmFjayA9IHNjcm9sbHRyYWNrSGVpZ2h0IC0gYmFyX2xlbmd0aDtcblx0XHRiYXJfeSA9IHAgKiBlbXB0eVRyYWNrO1xuXHRcdHNjcm9sbGJhci5zdHlsZS50b3AgPSBiYXJfeSArICdweCc7XG5cdH07XG5cblx0dGhpcy5zZXRMZW5ndGgoMSk7XG5cdHRoaXMuc2V0UG9zaXRpb24oMCk7XG5cdHRoaXMub25TY3JvbGwgPSBuZXcgU2ltcGxlRXZlbnQoKTtcblxuXHR2YXIgbW91c2VfZG93bl9ncmlwO1xuXG5cdGZ1bmN0aW9uIG9uRG93bihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoZXZlbnQudGFyZ2V0ID09IHNjcm9sbGJhcikge1xuXHRcdFx0bW91c2VfZG93bl9ncmlwID0gZXZlbnQuY2xpZW50WTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW92ZSwgZmFsc2UpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uVXAsIGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGV2ZW50LmNsaWVudFkgPCBiYXJfeSkge1xuXHRcdFx0XHRtZS5vblNjcm9sbC5maXJlKCdwYWdldXAnKTtcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQuY2xpZW50WSA+IChiYXJfeSArIGJhcl9sZW5ndGgpKSB7XG5cdFx0XHRcdG1lLm9uU2Nyb2xsLmZpcmUoJ3BhZ2Vkb3duJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBpZiB3YW50IHRvIGRyYWcgc2Nyb2xsZXIgdG8gZW1wdHkgdHJhY2sgaW5zdGVhZFxuXHRcdFx0Ly8gbWUuc2V0UG9zaXRpb24oZXZlbnQuY2xpZW50WSAvIChzY3JvbGx0cmFja0hlaWdodCAtIDEpKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdmUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Ly8gZXZlbnQudGFyZ2V0ID09IHNjcm9sbGJhclxuXHRcdHZhciBlbXB0eVRyYWNrID0gc2Nyb2xsdHJhY2tIZWlnaHQgLSBiYXJfbGVuZ3RoO1xuXHRcdHZhciBzY3JvbGx0byA9IChldmVudC5jbGllbnRZIC0gbW91c2VfZG93bl9ncmlwKSAvIGVtcHR5VHJhY2s7XG5cblx0XHQvLyBjbGFtcCBsaW1pdHMgdG8gMC4uMVxuXHRcdGlmIChzY3JvbGx0byA+IDEpIHNjcm9sbHRvID0gMTtcblx0XHRpZiAoc2Nyb2xsdG8gPCAwKSBzY3JvbGx0byA9IDA7XG5cdFx0bWUuc2V0UG9zaXRpb24oc2Nyb2xsdG8pO1xuXHRcdG1lLm9uU2Nyb2xsLmZpcmUoJ3Njcm9sbHRvJywgc2Nyb2xsdG8pO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25VcChldmVudCkge1xuXHRcdG9uTW92ZShldmVudCk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3ZlLCBmYWxzZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uVXAsIGZhbHNlKTtcblx0fVxuXG5cdHNjcm9sbHRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG93biwgZmFsc2UpO1xuXHR0aGlzLmRvbSA9IHNjcm9sbHRyYWNrO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsQmFyOyIsInZhciBwYWNrYWdlX2pzb24gPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKSxcblx0U2V0dGluZ3MgPSByZXF1aXJlKCcuL3NldHRpbmdzJyksXG5cdERvID0gcmVxdWlyZSgnZG8uanMnKTtcblxuLy8gRGF0YSBTdG9yZSB3aXRoIGEgc291cmNlIG9mIHRydXRoXG5mdW5jdGlvbiBEYXRhU3RvcmUoKSB7XG5cdHRoaXMuREVMSU1JVEVSID0gJzonO1xuXHR0aGlzLmJsYW5rKCk7XG5cdHRoaXMub25PcGVuID0gbmV3IERvKCk7XG5cdHRoaXMub25TYXZlID0gbmV3IERvKCk7XG5cblx0dGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cblxuRGF0YVN0b3JlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKHBhdGgsIGNiKSB7XG5cdHRoaXMubGlzdGVuZXJzLnB1c2goe1xuXHRcdHBhdGg6IHBhdGgsXG5cdFx0Y2FsbGJhY2s6IGNiXG5cdH0pO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5ibGFuayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZGF0YSA9IHt9O1xuXG5cdGRhdGEudmVyc2lvbiA9IHBhY2thZ2VfanNvbi52ZXJzaW9uO1xuXHRkYXRhLm1vZGlmaWVkID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xuXHRkYXRhLnRpdGxlID0gJ1VudGl0bGVkJztcblxuXHRkYXRhLnVpID0ge1xuXHRcdGN1cnJlbnRUaW1lOiAwLFxuXHRcdHRvdGFsVGltZTogU2V0dGluZ3MuZGVmYXVsdF9sZW5ndGgsXG5cdFx0c2Nyb2xsVGltZTogMCxcblx0XHR0aW1lU2NhbGU6IFNldHRpbmdzLnRpbWVfc2NhbGVcblx0fTtcblxuXHRkYXRhLmxheWVycyA9IFtdO1xuXG5cdHRoaXMuZGF0YSA9IGRhdGE7XG59O1xuXG5EYXRhU3RvcmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZGF0YSA9IHRoaXMuZGF0YTtcblxuXHRkYXRhLnZlcnNpb24gPSBwYWNrYWdlX2pzb24udmVyc2lvbjtcblx0ZGF0YS5tb2RpZmllZCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuc2V0SlNPTlN0cmluZyA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuc2V0SlNPTiA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0dGhpcy5kYXRhID0gZGF0YTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuZ2V0SlNPTlN0cmluZyA9IGZ1bmN0aW9uKGZvcm1hdCkge1xuXHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLCBudWxsLCBmb3JtYXQpO1xufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHBhdGhzKSB7XG5cdHZhciBkZXNjZW5kID0gcGF0aHMuc3BsaXQodGhpcy5ERUxJTUlURVIpO1xuXHR2YXIgcmVmZXJlbmNlID0gdGhpcy5kYXRhO1xuXHRmb3IgKHZhciBpID0gMCwgaWwgPSBkZXNjZW5kLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcblx0XHR2YXIgcGF0aCA9IGRlc2NlbmRbaV07XG5cdFx0aWYgKHJlZmVyZW5jZVtwYXRoXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0NhbnQgZmluZCAnICsgcGF0aHMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZWZlcmVuY2UgPSByZWZlcmVuY2VbcGF0aF07XG5cdH1cblx0cmV0dXJuIHJlZmVyZW5jZTtcbn07XG5cbkRhdGFTdG9yZS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbihwYXRocywgdmFsdWUpIHtcblx0dmFyIGRlc2NlbmQgPSBwYXRocy5zcGxpdCh0aGlzLkRFTElNSVRFUik7XG5cdHZhciByZWZlcmVuY2UgPSB0aGlzLmRhdGE7XG5cdGZvciAodmFyIGkgPSAwLCBpbCA9IGRlc2NlbmQubGVuZ3RoIC0gMTsgcGF0aCA9IGRlc2NlbmRbaV0sIGkgPCBpbCA7IGkrKykge1xuXHRcdHJlZmVyZW5jZSA9IHJlZmVyZW5jZVtwYXRoXTtcblx0fVxuXG5cdHJlZmVyZW5jZVtwYXRoXSA9IHZhbHVlO1xuXG5cdHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24obCkge1xuXHRcdGlmIChwYXRocy5pbmRleE9mKGwucGF0aCkgPiAtMSkgbC5jYWxsYmFjaygpO1xuXHR9KVxufTtcblxuRGF0YVN0b3JlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihwYXRoLCBzdWZmaXgpIHtcblx0aWYgKHN1ZmZpeCkgcGF0aCA9IHN1ZmZpeCArIHRoaXMuREVMSU1JVEVSICsgcGF0aDtcblx0cmV0dXJuIG5ldyBEYXRhUHJveCh0aGlzLCBwYXRoKTtcbn07XG5cbmZ1bmN0aW9uIERhdGFQcm94KHN0b3JlLCBwYXRoKSB7XG5cdHRoaXMucGF0aCA9IHBhdGg7XG5cdHRoaXMuc3RvcmUgPSBzdG9yZTtcbn1cblxuRGF0YVByb3gucHJvdG90eXBlID0ge1xuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuZ2V0VmFsdWUodGhpcy5wYXRoKTtcblx0fSxcblx0c2V0IHZhbHVlKHZhbCkge1xuXHRcdHRoaXMuc3RvcmUuc2V0VmFsdWUodGhpcy5wYXRoLCB2YWwpO1xuXHR9XG59O1xuXG5EYXRhUHJveC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24ocGF0aCkge1xuXHRyZXR1cm4gdGhpcy5zdG9yZS5nZXQocGF0aCwgdGhpcy5wYXRoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVN0b3JlO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gRGlzcGF0Y2hlclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBEaXNwYXRjaGVyKCkge1xuXG5cdHZhciBldmVudF9saXN0ZW5lcnMgPSB7XG5cblx0fTtcblxuXHRmdW5jdGlvbiBvbih0eXBlLCBsaXN0ZW5lcikge1xuXHRcdGlmICghKHR5cGUgaW4gZXZlbnRfbGlzdGVuZXJzKSkge1xuXHRcdFx0ZXZlbnRfbGlzdGVuZXJzW3R5cGVdID0gW107XG5cdFx0fVxuXHRcdHZhciBsaXN0ZW5lcnMgPSBldmVudF9saXN0ZW5lcnNbdHlwZV07XG5cdFx0bGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZmlyZSh0eXBlKSB7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdGFyZ3Muc2hpZnQoKTtcblx0XHR2YXIgbGlzdGVuZXJzID0gZXZlbnRfbGlzdGVuZXJzW3R5cGVdO1xuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGxpc3RlbmVyLmFwcGx5KGxpc3RlbmVyLCBhcmdzKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLm9uID0gb247XG5cdHRoaXMuZmlyZSA9IGZpcmU7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwYXRjaGVyOyIsImZ1bmN0aW9uIGhhbmRsZURyYWcoZWxlbWVudCwgb25kb3duLCBvbm1vdmUsIG9udXAsIGRvd25fY3JpdGVyaWEpIHtcblx0dmFyIHBvaW50ZXIgPSBudWxsO1xuXHR2YXIgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcblx0XHRoYW5kbGVTdGFydChlKTtcblxuXHRcdGlmIChkb3duX2NyaXRlcmlhICYmICFkb3duX2NyaXRlcmlhKHBvaW50ZXIpKSB7XG5cdFx0XHRwb2ludGVyID0gbnVsbDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cdFx0XG5cdFx0b25kb3duKHBvaW50ZXIpO1xuXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZShlKSB7XG5cdFx0aGFuZGxlTW92ZShlKTtcblx0XHRvbm1vdmUocG9pbnRlcik7XG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVTdGFydChlKSB7XG5cdFx0Ym91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgY3VycmVudHggPSBlLmNsaWVudFgsIGN1cnJlbnR5ID0gZS5jbGllbnRZO1xuXHRcdHBvaW50ZXIgPSB7XG5cdFx0XHRzdGFydHg6IGN1cnJlbnR4LFxuXHRcdFx0c3RhcnR5OiBjdXJyZW50eSxcblx0XHRcdHg6IGN1cnJlbnR4LFxuXHRcdFx0eTogY3VycmVudHksXG5cdFx0XHRkeDogMCxcblx0XHRcdGR5OiAwLFxuXHRcdFx0b2Zmc2V0eDogY3VycmVudHggLSBib3VuZHMubGVmdCxcblx0XHRcdG9mZnNldHk6IGN1cnJlbnR5IC0gYm91bmRzLnRvcCxcblx0XHRcdG1vdmVkOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGhhbmRsZU1vdmUoZSkge1xuXHRcdGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0dmFyIGN1cnJlbnR4ID0gZS5jbGllbnRYLFxuXHRcdGN1cnJlbnR5ID0gZS5jbGllbnRZLFxuXHRcdG9mZnNldHggPSBjdXJyZW50eCAtIGJvdW5kcy5sZWZ0LFxuXHRcdG9mZnNldHkgPSBjdXJyZW50eSAtIGJvdW5kcy50b3A7XG5cdFx0cG9pbnRlci54ID0gY3VycmVudHg7XG5cdFx0cG9pbnRlci55ID0gY3VycmVudHk7XG5cdFx0cG9pbnRlci5keCA9IGUuY2xpZW50WCAtIHBvaW50ZXIuc3RhcnR4O1xuXHRcdHBvaW50ZXIuZHkgPSBlLmNsaWVudFkgLSBwb2ludGVyLnN0YXJ0eTtcblx0XHRwb2ludGVyLm9mZnNldHggPSBvZmZzZXR4O1xuXHRcdHBvaW50ZXIub2Zmc2V0eSA9IG9mZnNldHk7XG5cblx0XHQvLyBJZiB0aGUgcG9pbnRlciBkeC9keSBpcyBfZXZlcl8gbm9uLXplcm8sIHRoZW4gaXQncyBtb3ZlZFxuXHRcdHBvaW50ZXIubW92ZWQgPSBwb2ludGVyLm1vdmVkIHx8IHBvaW50ZXIuZHggIT09IDAgfHwgcG9pbnRlci5keSAhPT0gMDtcblx0fVxuXHRcblx0ZnVuY3Rpb24gb25Nb3VzZVVwKGUpIHtcblx0XHRoYW5kbGVNb3ZlKGUpO1xuXHRcdG9udXAocG9pbnRlcik7XG5cdFx0cG9pbnRlciA9IG51bGw7XG5cdFx0XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcblxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQodGUpIHtcblx0XHRcblx0XHRpZiAodGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuXHRcdFx0XG5cdFx0XHR2YXIgZSA9IHRlLnRvdWNoZXNbMF07XG5cdFx0XHRpZiAoZG93bl9jcml0ZXJpYSAmJiAhZG93bl9jcml0ZXJpYShlKSkgcmV0dXJuO1xuXHRcdFx0dGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGhhbmRsZVN0YXJ0KGUpO1xuXHRcdFx0b25kb3duKHBvaW50ZXIpO1xuXHRcdH1cblx0XHRcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKHRlKSB7XG5cdFx0dmFyIGUgPSB0ZS50b3VjaGVzWzBdO1xuXHRcdG9uTW91c2VNb3ZlKGUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG5cdFx0Ly8gdmFyIGUgPSBlLnRvdWNoZXNbMF07XG5cdFx0b25Nb3VzZVVwKGUpO1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcblx0fVxuXG5cblx0dGhpcy5yZWxlYXNlID0gZnVuY3Rpb24oKSB7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcblx0fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYW5kbGVEcmFnO1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gVHdlZW5zXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBUd2VlbnMgPSB7XG5cdG5vbmU6IGZ1bmN0aW9uKGspIHtcblx0XHRyZXR1cm4gMDtcblx0fSxcblx0bGluZWFyOiBmdW5jdGlvbihrKSB7XG5cdFx0cmV0dXJuIGs7XG5cdH0sXG5cdHF1YWRFYXNlSW46IGZ1bmN0aW9uKGspIHtcblx0XHRyZXR1cm4gayAqIGs7XG5cdH0sXG5cdHF1YWRFYXNlT3V0OiBmdW5jdGlvbihrKSB7XG5cdFx0cmV0dXJuIC0gayAqICggayAtIDIgKTtcblx0fSxcblx0cXVhZEVhc2VJbk91dDogZnVuY3Rpb24oaykge1xuXHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGs7XG5cdFx0cmV0dXJuIC0gMC41ICogKCAtLWsgKiAoIGsgLSAyICkgLSAxICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5zOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8vIFVuZG8gTWFuYWdlclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBVbmRvU3RhdGUoc3RhdGUsIGRlc2NyaXB0aW9uKSB7XG5cdC8vIHRoaXMuc3RhdGUgPSBKU09OLnN0cmluZ2lmeShzdGF0ZSk7XG5cdHRoaXMuc3RhdGUgPSBzdGF0ZS5nZXRKU09OU3RyaW5nKCk7XG5cdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbn1cblxuZnVuY3Rpb24gVW5kb01hbmFnZXIoZGlzcGF0Y2hlciwgbWF4KSB7XG5cdHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG5cdHRoaXMuTUFYX0lURU1TID0gbWF4IHx8IDEwMDtcblx0dGhpcy5jbGVhcigpO1xufVxuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKHN0YXRlLCBzdXBwcmVzcykge1xuXHR2YXIgc3RhdGVzID0gdGhpcy5zdGF0ZXM7XG5cdHZhciBuZXh0X2luZGV4ID0gdGhpcy5pbmRleCArIDE7XG5cdHZhciB0b19yZW1vdmUgPSBzdGF0ZXMubGVuZ3RoIC0gbmV4dF9pbmRleDtcblx0c3RhdGVzLnNwbGljZShuZXh0X2luZGV4LCB0b19yZW1vdmUsIHN0YXRlKTtcblxuXHRpZiAoc3RhdGVzLmxlbmd0aCA+IHRoaXMuTUFYX0lURU1TKSB7XG5cdFx0c3RhdGVzLnNoaWZ0KCk7XG5cdH1cblxuXHR0aGlzLmluZGV4ID0gc3RhdGVzLmxlbmd0aCAtIDE7XG5cblx0Ly8gY29uc29sZS5sb2coJ1VuZG8gU3RhdGUgU2F2ZWQ6ICcsIHN0YXRlLmRlc2NyaXB0aW9uKTtcblx0aWYgKCFzdXBwcmVzcykgdGhpcy5kaXNwYXRjaGVyLmZpcmUoJ3N0YXRlOnNhdmUnLCBzdGF0ZS5kZXNjcmlwdGlvbik7XG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5zdGF0ZXMgPSBbXTtcblx0dGhpcy5pbmRleCA9IC0xO1xuXHQvLyBGSVhNRTogbGVhdmUgZGVmYXVsdCBzdGF0ZSBvciBhbHdheXMgbGVhdmUgb25lIHN0YXRlP1xufTtcblxuVW5kb01hbmFnZXIucHJvdG90eXBlLmNhblVuZG8gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuaW5kZXggPiAwO1xuXHQvLyAmJiB0aGlzLnN0YXRlcy5sZW5ndGggPiAxXG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUuY2FuUmVkbyA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMuc3RhdGVzLmxlbmd0aCAtIDE7XG59O1xuXG5VbmRvTWFuYWdlci5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5jYW5VbmRvKCkpIHtcblx0XHR0aGlzLmRpc3BhdGNoZXIuZmlyZSgnc3RhdHVzJywgJ1VuZG86ICcgKyB0aGlzLmdldCgpLmRlc2NyaXB0aW9uKTtcblx0XHR0aGlzLmluZGV4LS07XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5kaXNwYXRjaGVyLmZpcmUoJ3N0YXR1cycsICdOb3RoaW5nIHRvIHVuZG8nKTtcblx0fVxuXG5cdHJldHVybiB0aGlzLmdldCgpO1xufTtcblxuVW5kb01hbmFnZXIucHJvdG90eXBlLnJlZG8gPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuY2FuUmVkbygpKSB7XG5cdFx0dGhpcy5pbmRleCsrO1xuXHRcdHRoaXMuZGlzcGF0Y2hlci5maXJlKCdzdGF0dXMnLCAnUmVkbzogJyArIHRoaXMuZ2V0KCkuZGVzY3JpcHRpb24pO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuZGlzcGF0Y2hlci5maXJlKCdzdGF0dXMnLCAnTm90aGluZyB0byByZWRvJyk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcy5nZXQoKTtcbn07XG5cblVuZG9NYW5hZ2VyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuc3RhdGVzW3RoaXMuaW5kZXhdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFVuZG9TdGF0ZTogVW5kb1N0YXRlLFxuXHRVbmRvTWFuYWdlcjogVW5kb01hbmFnZXJcbn07IiwidmFyXG5cdFR3ZWVucyA9IHJlcXVpcmUoJy4vdXRpbF90d2VlbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0U1RPUkFHRV9QUkVGSVg6ICd0aW1lbGluZXItJyxcblx0Wl9JTkRFWDogOTk5LFxuXHRmaXJzdERlZmluZWQ6IGZpcnN0RGVmaW5lZCxcblx0c3R5bGU6IHN0eWxlLFxuXHRzYXZlVG9GaWxlOiBzYXZlVG9GaWxlLFxuXHRvcGVuQXM6IG9wZW5Bcyxcblx0Zm9ybWF0X2ZyaWVuZGx5X3NlY29uZHM6IGZvcm1hdF9mcmllbmRseV9zZWNvbmRzLFxuXHRmaW5kVGltZWluTGF5ZXI6IGZpbmRUaW1laW5MYXllcixcblx0dGltZUF0TGF5ZXI6IHRpbWVBdExheWVyLFxuXHRwcm94eV9jdHg6IHByb3h5X2N0eFxufTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLy8gVXRpbHNcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gZmlyc3REZWZpbmVkKCkge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBhcmd1bWVudHNbaV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHN0eWxlKGVsZW1lbnQsIHZhcl9hcmdzKSB7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0dmFyIHN0eWxlcyA9IGFyZ3VtZW50c1tpXTtcblx0XHRmb3IgKHZhciBzIGluIHN0eWxlcykge1xuXHRcdFx0ZWxlbWVudC5zdHlsZVtzXSA9IHN0eWxlc1tzXTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2F2ZVRvRmlsZShzdHJpbmcsIGZpbGVuYW1lKSB7XG5cdHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG5cdGEuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtzdHJpbmddLCB7IHR5cGU6ICdvY3RldC9zdHJlYW0nIH0pLCAvLyBhcHBsaWNhdGlvbi9qc29uXG5cdFx0dXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFxuXHRhLmhyZWYgPSB1cmw7XG5cdGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcblxuXHRmYWtlQ2xpY2soYSk7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHQvLyBjbGVhbnVwIGFuZCByZXZva2Vcblx0XHR3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG5cdH0sIDUwMCk7XG59XG5cblxuXG52YXIgaW5wdXQsIG9wZW5DYWxsYmFjaztcblxuZnVuY3Rpb24gaGFuZGxlRmlsZVNlbGVjdChldnQpIHtcblx0dmFyIGZpbGVzID0gZXZ0LnRhcmdldC5maWxlczsgLy8gRmlsZUxpc3Qgb2JqZWN0XG5cblx0Y29uc29sZS5sb2coJ2hhbmRsZSBmaWxlIHNlbGVjdCcsIGZpbGVzLmxlbmd0aCk7XG5cblx0dmFyIGYgPSBmaWxlc1swXTtcblx0aWYgKCFmKSByZXR1cm47XG5cdC8vIENhbiB0cnkgdG8gZG8gTUlORSBtYXRjaFxuXHQvLyBpZiAoIWYudHlwZS5tYXRjaCgnYXBwbGljYXRpb24vanNvbicpKSB7XG5cdC8vICAgcmV0dXJuO1xuXHQvLyB9XG5cdGNvbnNvbGUubG9nKCdtYXRjaCcsIGYudHlwZSk7XG5cblx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cblx0Ly8gQ2xvc3VyZSB0byBjYXB0dXJlIHRoZSBmaWxlIGluZm9ybWF0aW9uLlxuXHRyZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBkYXRhID0gZS50YXJnZXQucmVzdWx0O1xuXHRcdG9wZW5DYWxsYmFjayhkYXRhKTtcblx0fTtcblx0XG5cdHJlYWRlci5yZWFkQXNUZXh0KGYpO1xuXG5cdGlucHV0LnZhbHVlID0gJyc7XG59XG5cblxuZnVuY3Rpb24gb3BlbkFzKGNhbGxiYWNrLCB0YXJnZXQpIHtcblx0Y29uc29sZS5sb2coJ29wZW5maWxlLi4uJyk7XG5cdG9wZW5DYWxsYmFjayA9IGNhbGxiYWNrO1xuXG5cdGlmICghaW5wdXQpIHtcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0aW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRpbnB1dC50eXBlID0gJ2ZpbGUnO1xuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUZpbGVTZWxlY3QpO1xuXHRcdHRhcmdldCA9IHRhcmdldCB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdH1cblx0XG5cdGZha2VDbGljayhpbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGZha2VDbGljayh0YXJnZXQpIHtcblx0dmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO1xuXHRlLmluaXRNb3VzZUV2ZW50KFxuXHRcdCdjbGljaycsIHRydWUsIGZhbHNlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsXG5cdFx0ZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGxcblx0KTtcblx0dGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHMsIHR5cGUpIHtcblx0Ly8gVE9ETyBSZWZhY3RvciB0byA2MGZwcz8/P1xuXHQvLyAyMCBtaW5zICogNjAgc2VjID0gMTA4MCBcblx0Ly8gMTA4MHMgKiA2MGZwcyA9IDEwODAgKiA2MCA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG5cblx0dmFyIHJhd19zZWNzID0gcyB8IDA7XG5cdHZhciBzZWNzX21pY3JvID0gcyAlIDYwO1xuXHR2YXIgc2VjcyA9IHJhd19zZWNzICUgNjA7XG5cdHZhciByYXdfbWlucyA9IHJhd19zZWNzIC8gNjAgfCAwO1xuXHR2YXIgbWlucyA9IHJhd19taW5zICUgNjA7XG5cdHZhciBob3VycyA9IHJhd19taW5zIC8gNjAgfCAwO1xuXG5cdHZhciBzZWNzX3N0ciA9IChzZWNzIC8gMTAwKS50b0ZpeGVkKDIpLnN1YnN0cmluZygyKTtcblxuXHR2YXIgc3RyID0gbWlucyArICc6JyArIHNlY3Nfc3RyO1xuXG5cdGlmIChzICUgMSA+IDApIHtcblx0XHR2YXIgdDIgPSAocyAlIDEpICogNjA7XG5cdFx0aWYgKHR5cGUgPT09ICdmcmFtZXMnKSBzdHIgPSBzZWNzICsgJysnICsgdDIudG9GaXhlZCgwKSArICdmJztcblx0XHRlbHNlIHN0ciArPSAoKHMgJSAxKS50b0ZpeGVkKDIpKS5zdWJzdHJpbmcoMSk7XG5cdFx0Ly8gZWxzZSBzdHIgPSBtaW5zICsgJzonICsgc2Vjc19taWNybztcblx0XHQvLyBlbHNlIHN0ciA9IHNlY3NfbWljcm8gKyAncyc7IC8vLyAudG9GaXhlZCgyKVxuXHR9XG5cdHJldHVybiBzdHI7XHRcbn1cblxuLy8gZ2V0IG9iamVjdCBhdCB0aW1lXG5mdW5jdGlvbiBmaW5kVGltZWluTGF5ZXIobGF5ZXIsIHRpbWUpIHtcblx0dmFyIHZhbHVlcyA9IGxheWVyLnZhbHVlcztcblx0dmFyIGksIGlsO1xuXG5cdC8vIFRPRE8gb3B0aW1pemUgYnkgY2hlY2tpbmcgdGltZSAvIGJpbmFyeSBzZWFyY2hcblxuXHRmb3IgKGk9MCwgaWw9dmFsdWVzLmxlbmd0aDsgaTxpbDsgaSsrKSB7XG5cdFx0dmFyIHZhbHVlID0gdmFsdWVzW2ldO1xuXHRcdGlmICh2YWx1ZS50aW1lID09PSB0aW1lKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbmRleDogaSxcblx0XHRcdFx0b2JqZWN0OiB2YWx1ZVxuXHRcdFx0fTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlLnRpbWUgPiB0aW1lKSB7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaTtcbn1cblxuXG5mdW5jdGlvbiB0aW1lQXRMYXllcihsYXllciwgdCkge1xuXHQvLyBGaW5kIHRoZSB2YWx1ZSBvZiBsYXllciBhdCB0IHNlY29uZHMuXG5cdC8vIHRoaXMgZXhwZWN0IGxheWVyIHRvIGJlIHNvcnRlZFxuXHQvLyBub3QgdGhlIG1vc3Qgb3B0aW1pemVkIGZvciBub3csIGJ1dCB3b3VsZCBkby5cblxuXHR2YXIgdmFsdWVzID0gbGF5ZXIudmFsdWVzO1xuXHR2YXIgaSwgaWwsIGVudHJ5LCBwcmV2X2VudHJ5O1xuXG5cdGlsID0gdmFsdWVzLmxlbmd0aDtcblxuXHQvLyBjYW4ndCBkbyBhbnl0aGluZ1xuXHRpZiAoaWwgPT09IDApIHJldHVybjtcblxuXHRpZiAobGF5ZXIuX211dGUpIHJldHVyblxuXG5cdC8vIGZpbmQgYm91bmRhcnkgY2FzZXNcblx0ZW50cnkgPSB2YWx1ZXNbMF07XG5cdGlmICh0IDwgZW50cnkudGltZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogZW50cnkudmFsdWUsXG5cdFx0XHRjYW5fdHdlZW46IGZhbHNlLCAvLyBjYW5ub3QgdHdlZW5cblx0XHRcdGtleWZyYW1lOiBmYWxzZSAvLyBub3Qgb24ga2V5ZnJhbWVcblx0XHR9O1xuXHR9XG5cblx0Zm9yIChpPTA7IGk8aWw7IGkrKykge1xuXHRcdHByZXZfZW50cnkgPSBlbnRyeTtcblx0XHRlbnRyeSA9IHZhbHVlc1tpXTtcblxuXHRcdGlmICh0ID09PSBlbnRyeS50aW1lKSB7XG5cdFx0XHQvLyBvbmx5IGV4Y2VwdGlvbiBpcyBvbiB0aGUgbGFzdCBLRiwgd2hlcmUgd2UgZGlzcGxheSB0d2VlbiBmcm9tIHByZXYgZW50cnlcblx0XHRcdGlmIChpID09PSBpbCAtIDEpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQvLyBpbmRleDogaSxcblx0XHRcdFx0XHRlbnRyeTogcHJldl9lbnRyeSxcblx0XHRcdFx0XHR0d2VlbjogcHJldl9lbnRyeS50d2Vlbixcblx0XHRcdFx0XHRjYW5fdHdlZW46IGlsID4gMSxcblx0XHRcdFx0XHR2YWx1ZTogZW50cnkudmFsdWUsXG5cdFx0XHRcdFx0a2V5ZnJhbWU6IHRydWVcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC8vIGluZGV4OiBpLFxuXHRcdFx0XHRlbnRyeTogZW50cnksXG5cdFx0XHRcdHR3ZWVuOiBlbnRyeS50d2Vlbixcblx0XHRcdFx0Y2FuX3R3ZWVuOiBpbCA+IDEsXG5cdFx0XHRcdHZhbHVlOiBlbnRyeS52YWx1ZSxcblx0XHRcdFx0a2V5ZnJhbWU6IHRydWUgLy8gaWwgPiAxXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAodCA8IGVudHJ5LnRpbWUpIHtcblx0XHRcdC8vIHBvc3NpYmx5IGEgdHdlZW5cblx0XHRcdGlmICghcHJldl9lbnRyeS50d2VlbikgeyAvLyBvciBpZiB2YWx1ZSBpcyBub25lXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dmFsdWU6IHByZXZfZW50cnkudmFsdWUsXG5cdFx0XHRcdFx0dHdlZW46IGZhbHNlLFxuXHRcdFx0XHRcdGVudHJ5OiBwcmV2X2VudHJ5LFxuXHRcdFx0XHRcdGNhbl90d2VlbjogdHJ1ZSxcblx0XHRcdFx0XHRrZXlmcmFtZTogZmFsc2Vcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsY3VsYXRlIHR3ZWVuXG5cdFx0XHR2YXIgdGltZV9kaWZmID0gZW50cnkudGltZSAtIHByZXZfZW50cnkudGltZTtcblx0XHRcdHZhciB2YWx1ZV9kaWZmID0gZW50cnkudmFsdWUgLSBwcmV2X2VudHJ5LnZhbHVlO1xuXHRcdFx0dmFyIHR3ZWVuID0gcHJldl9lbnRyeS50d2VlbjtcblxuXHRcdFx0dmFyIGR0ID0gdCAtIHByZXZfZW50cnkudGltZTtcblx0XHRcdHZhciBrID0gZHQgLyB0aW1lX2RpZmY7XG5cdFx0XHR2YXIgbmV3X3ZhbHVlID0gcHJldl9lbnRyeS52YWx1ZSArIFR3ZWVuc1t0d2Vlbl0oaykgKiB2YWx1ZV9kaWZmO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlbnRyeTogcHJldl9lbnRyeSxcblx0XHRcdFx0dmFsdWU6IG5ld192YWx1ZSxcblx0XHRcdFx0dHdlZW46IHByZXZfZW50cnkudHdlZW4sXG5cdFx0XHRcdGNhbl90d2VlbjogdHJ1ZSxcblx0XHRcdFx0a2V5ZnJhbWU6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHQvLyB0aW1lIGlzIGFmdGVyIGFsbCBlbnRyaWVzXG5cdHJldHVybiB7XG5cdFx0dmFsdWU6IGVudHJ5LnZhbHVlLFxuXHRcdGNhbl90d2VlbjogZmFsc2UsXG5cdFx0a2V5ZnJhbWU6IGZhbHNlXG5cdH07IFxuXG59XG5cblxuZnVuY3Rpb24gcHJveHlfY3R4KGN0eCkge1xuXHQvLyBDcmVhdGVzIGEgcHJveHkgMmQgY29udGV4dCB3cmFwcGVyIHdoaWNoIFxuXHQvLyBhbGxvd3MgdGhlIGZsdWVudCAvIGNoYWluaW5nIEFQSS5cblx0dmFyIHdyYXBwZXIgPSB7fTtcblxuXHRmdW5jdGlvbiBwcm94eV9mdW5jdGlvbihjKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gV2FybmluZzogdGhpcyBkb2Vzbid0IHJldHVybiB2YWx1ZSBvZiBmdW5jdGlvbiBjYWxsXG5cdFx0XHRjdHhbY10uYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIHdyYXBwZXI7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHByb3h5X3Byb3BlcnR5KGMpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24odikge1xuXHRcdFx0Y3R4W2NdID0gdjtcblx0XHRcdHJldHVybiB3cmFwcGVyO1xuXHRcdH07XG5cdH1cblxuXHR3cmFwcGVyLnJ1biA9IGZ1bmN0aW9uKGFyZ3MpIHtcblx0XHRhcmdzKHdyYXBwZXIpO1xuXHRcdHJldHVybiB3cmFwcGVyO1xuXHR9O1xuXG5cdGZvciAodmFyIGMgaW4gY3R4KSB7XG5cdFx0Ly8gaWYgKCFjdHguaGFzT3duUHJvcGVydHkoYykpIGNvbnRpbnVlO1xuXHRcdC8vIGNvbnNvbGUubG9nKGMsIHR5cGVvZihjdHhbY10pLCBjdHguaGFzT3duUHJvcGVydHkoYykpO1xuXHRcdC8vIHN0cmluZywgbnVtYmVyLCBib29sZWFuLCBmdW5jdGlvbiwgb2JqZWN0XG5cblx0XHR2YXIgdHlwZSA9IHR5cGVvZihjdHhbY10pO1xuXHRcdHN3aXRjaCh0eXBlKSB7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdFx0d3JhcHBlcltjXSA9IHByb3h5X2Z1bmN0aW9uKGMpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHdyYXBwZXJbY10gPSBwcm94eV9wcm9wZXJ0eShjKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHdyYXBwZXI7XG59XG4iLCJ2YXJcblx0VGhlbWUgPSByZXF1aXJlKCcuL3RoZW1lJyksXG5cdFVJTnVtYmVyID0gcmVxdWlyZSgnLi91aV9udW1iZXInKSxcblx0VHdlZW5zID0gcmVxdWlyZSgnLi91dGlsX3R3ZWVuJyksXG5cdFNldHRpbmdzID0gcmVxdWlyZSgnLi9zZXR0aW5ncycpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuO1xuXG4vLyBUT0RPIC0gdGFnZ2VkIGJ5IGluZGV4IGluc3RlYWQsIHdvcmsgb2ZmIGxheWVycy5cblxuZnVuY3Rpb24gTGF5ZXJWaWV3KGxheWVyLCBkaXNwYXRjaGVyKSB7XG5cdHZhciBkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHR2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFxuXHRsYWJlbC5zdHlsZS5jc3NUZXh0ID0gJ2ZvbnQtc2l6ZTogMTJweDsgcGFkZGluZzogNHB4Oyc7XG5cblx0dmFyIGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cdHZhciBvcHRpb247XG5cdGRyb3Bkb3duLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiAxMHB4OyB3aWR0aDogNjBweDsgbWFyZ2luOiAwOyBmbG9hdDogcmlnaHQ7IHRleHQtYWxpZ246IHJpZ2h0Oyc7XG5cblx0Zm9yICh2YXIgayBpbiBUd2VlbnMpIHtcblx0XHRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRvcHRpb24udGV4dCA9IGs7XG5cdFx0ZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblx0fVxuXG5cdGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ2Vhc2UnLCBsYXllciwgZHJvcGRvd24udmFsdWUpO1xuXHR9KTtcblx0dmFyIGhlaWdodCA9IChTZXR0aW5ncy5MSU5FX0hFSUdIVCAtIDEpO1xuXG5cdHZhciBrZXlmcmFtZV9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0a2V5ZnJhbWVfYnV0dG9uLmlubmVySFRNTCA9ICcmIzk2NzI7JzsgLy8gJyZkaWFtczsnICYjOTY3MTsgOTY3OSA5NjcwIDk2NzJcblx0a2V5ZnJhbWVfYnV0dG9uLnN0eWxlLmNzc1RleHQgPSAnYmFja2dyb3VuZDogbm9uZTsgZm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiAwcHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZsb2F0OiByaWdodDsgd2lkdGg6IDIwcHg7IGhlaWdodDogJyArIGhlaWdodCArICdweDsgYm9yZGVyLXN0eWxlOm5vbmU7IG91dGxpbmU6IG5vbmU7JzsgLy8gIGJvcmRlci1zdHlsZTppbnNldDtcblx0XG5cdGtleWZyYW1lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRjb25zb2xlLmxvZygnY2xpY2tlZDprZXlmcmFtaW5nLi4uJywgc3RhdGUuZ2V0KCdfdmFsdWUnKS52YWx1ZSk7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdrZXlmcmFtZScsIGxheWVyLCBzdGF0ZS5nZXQoJ192YWx1ZScpLnZhbHVlKTtcblx0fSk7XG5cblx0Lypcblx0Ly8gUHJldiBLZXlmcmFtZVxuXHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGJ1dHRvbi50ZXh0Q29udGVudCA9ICc8Jztcblx0YnV0dG9uLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiAxcHg7ICc7XG5cdGRvbS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cdC8vIE5leHQgS2V5ZnJhbWVcblx0YnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGJ1dHRvbi50ZXh0Q29udGVudCA9ICc+Jztcblx0YnV0dG9uLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiAxMnB4OyBwYWRkaW5nOiAxcHg7ICc7XG5cdGRvbS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cdFxuXHQqL1xuXG5cdGZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbih0ZXh0KSB7XG5cdFx0Ly8gZm9yIGNzcyBiYXNlZCBidXR0b24gc2VlIGh0dHA6Ly9jb2RlcGVuLmlvL21hbGxlbmRlby9wZW4vZUxJaUdcblxuXHRcdHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdFx0dXRpbHMuc3R5bGUoYnV0dG9uLCB7XG5cdFx0XHRmb250U2l6ZTogJzEycHgnLFxuXHRcdFx0cGFkZGluZzogJzFweCcsXG5cdFx0XHRib3JkZXJTaXplOiAnMnB4Jyxcblx0XHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRcdGJhY2tncm91bmQ6ICcjZmZmJ1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wcmVzc2VkID0gZmFsc2U7XG5cblx0XHRidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5wcmVzc2VkID0gIXRoaXMucHJlc3NlZDtcblxuXHRcdFx0dXRpbHMuc3R5bGUoYnV0dG9uLCB7XG5cdFx0XHRcdGJvcmRlclN0eWxlOiB0aGlzLnByZXNzZWQgPyAnaW5zZXQnIDogJ291dHNldCcsIC8vIGluc2V0IG91dHNldCBncm9vdmUgcmlkZ2Vcblx0XHRcdH0pXG5cblx0XHRcdGlmICh0aGlzLm9uQ2xpY2spIHRoaXMub25DbGljaygpO1xuXHRcdH0uYmluZCh0aGlzKTtcblxuXHRcdHRoaXMuZG9tID0gYnV0dG9uO1xuXG5cdH1cblxuXHQvLyBTb2xvXG5cdHZhciBzb2xvX3RvZ2dsZSA9IG5ldyBUb2dnbGVCdXR0b24oJ1MnKTtcblx0ZG9tLmFwcGVuZENoaWxkKHNvbG9fdG9nZ2xlLmRvbSk7XG5cblx0c29sb190b2dnbGUub25DbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnYWN0aW9uOnNvbG8nLCBsYXllciwgc29sb190b2dnbGUucHJlc3NlZCk7XG5cdH1cblxuXHQvLyBNdXRlXG5cdHZhciBtdXRlX3RvZ2dsZSA9IG5ldyBUb2dnbGVCdXR0b24oJ00nKTtcblx0ZG9tLmFwcGVuZENoaWxkKG11dGVfdG9nZ2xlLmRvbSk7XG5cblx0bXV0ZV90b2dnbGUub25DbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnYWN0aW9uOm11dGUnLCBsYXllciwgbXV0ZV90b2dnbGUucHJlc3NlZCk7XG5cdH1cblxuXG5cdHZhciBudW1iZXIgPSBuZXcgVUlOdW1iZXIobGF5ZXIsIGRpc3BhdGNoZXIpO1xuXG5cdG51bWJlci5vbkNoYW5nZS5kbyhmdW5jdGlvbih2YWx1ZSwgZG9uZSkge1xuXHRcdHN0YXRlLmdldCgnX3ZhbHVlJykudmFsdWUgPSB2YWx1ZTtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3ZhbHVlLmNoYW5nZScsIGxheWVyLCB2YWx1ZSwgZG9uZSk7XG5cdH0pO1xuXG5cdHV0aWxzLnN0eWxlKG51bWJlci5kb20sIHtcblx0XHRmbG9hdDogJ3JpZ2h0J1xuXHR9KTtcblxuXHRkb20uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXHRkb20uYXBwZW5kQ2hpbGQoa2V5ZnJhbWVfYnV0dG9uKTtcblx0ZG9tLmFwcGVuZENoaWxkKG51bWJlci5kb20pO1xuXHRkb20uYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xuXHRcblxuXHR1dGlscy5zdHlsZShkb20sIHtcblx0XHR0ZXh0QWxpZ246ICdsZWZ0Jyxcblx0XHRtYXJnaW46ICcwcHggMHB4IDBweCA1cHgnLFxuXHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAnICsgVGhlbWUuYixcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHRoZWlnaHQ6IChTZXR0aW5ncy5MSU5FX0hFSUdIVCAtIDEgKSArICdweCcsXG5cdFx0Y29sb3I6IFRoZW1lLmNcblx0fSk7XG5cblx0dGhpcy5kb20gPSBkb207XG5cblx0dGhpcy5yZXBhaW50ID0gcmVwYWludDtcblx0dmFyIHN0YXRlO1xuXG5cdHRoaXMuc2V0U3RhdGUgPSBmdW5jdGlvbihsLCBzKSB7XG5cdFx0bGF5ZXIgPSBsO1xuXHRcdHN0YXRlID0gcztcblxuXHRcdHZhciB0bXBfdmFsdWUgPSBzdGF0ZS5nZXQoJ192YWx1ZScpO1xuXHRcdGlmICh0bXBfdmFsdWUudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dG1wX3ZhbHVlLnZhbHVlID0gMDtcblx0XHR9XG5cblx0XHRudW1iZXIuc2V0VmFsdWUodG1wX3ZhbHVlLnZhbHVlKTtcblx0XHRsYWJlbC50ZXh0Q29udGVudCA9IHN0YXRlLmdldCgnbmFtZScpLnZhbHVlO1xuXG5cdFx0cmVwYWludCgpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlcGFpbnQocykge1xuXG5cdFx0ZHJvcGRvd24uc3R5bGUub3BhY2l0eSA9IDA7XG5cdFx0ZHJvcGRvd24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGtleWZyYW1lX2J1dHRvbi5zdHlsZS5jb2xvciA9IFRoZW1lLmI7XG5cdFx0Ly8ga2V5ZnJhbWVfYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0Ly8ga2V5ZnJhbWVfYnV0dG9uLnN0eWxlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuXHRcdHZhciB0d2VlbiA9IG51bGw7XG5cdFx0dmFyIG8gPSB1dGlscy50aW1lQXRMYXllcihsYXllciwgcyk7XG5cblx0XHRpZiAoIW8pIHJldHVybjtcblxuXHRcdGlmIChvLmNhbl90d2Vlbikge1xuXHRcdFx0ZHJvcGRvd24uc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0XHRkcm9wZG93bi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gaWYgKG8udHdlZW4pXG5cdFx0XHRkcm9wZG93bi52YWx1ZSA9IG8udHdlZW4gPyBvLnR3ZWVuIDogJ25vbmUnO1xuXHRcdFx0aWYgKGRyb3Bkb3duLnZhbHVlID09PSAnbm9uZScpIGRyb3Bkb3duLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG5cdFx0fVxuXG5cdFx0aWYgKG8ua2V5ZnJhbWUpIHtcblx0XHRcdGtleWZyYW1lX2J1dHRvbi5zdHlsZS5jb2xvciA9IFRoZW1lLmM7XG5cdFx0XHQvLyBrZXlmcmFtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0Ly8ga2V5ZnJhbWVfYnV0dG9uLnN0eWxlLmJvcmRlclN0eWxlID0gJ2luc2V0Jztcblx0XHR9XG5cblx0XHRzdGF0ZS5nZXQoJ192YWx1ZScpLnZhbHVlID0gby52YWx1ZTtcblx0XHRudW1iZXIuc2V0VmFsdWUoby52YWx1ZSk7XG5cdFx0bnVtYmVyLnBhaW50KCk7XG5cblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3RhcmdldC5ub3RpZnknLCBsYXllci5uYW1lLCBvLnZhbHVlKTtcblx0fVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXJWaWV3O1xuIiwidmFyIFNldHRpbmdzID0gcmVxdWlyZSgnLi9zZXR0aW5ncycpLFxuXHRWaWV3TGF5ZXIgPSByZXF1aXJlKCcuL3ZpZXdfbGF5ZXInKSxcblx0SWNvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vdWlfaWNvbl9idXR0b24nKSxcblx0c3R5bGUgPSByZXF1aXJlKCcuL3V0aWxzJykuc3R5bGUsXG5cdFRoZW1lID0gcmVxdWlyZSgnLi90aGVtZScpLFxuXHRTVE9SQUdFX1BSRUZJWCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5TVE9SQUdFX1BSRUZJWCxcblx0VUlOdW1iZXIgPSByZXF1aXJlKCcuL3VpX251bWJlcicpXG5cdDtcblxuZnVuY3Rpb24gTGF5ZXJDYWJpbmV0KGRhdGEsIGRpc3BhdGNoZXIpIHtcblx0dmFyIGxheWVyX3N0b3JlID0gZGF0YS5nZXQoJ2xheWVycycpO1xuXG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHR2YXIgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRvcC5zdHlsZS5jc3NUZXh0ID0gJ21hcmdpbjogMHB4OyB0b3A6IDA7IGxlZnQ6IDA7IGhlaWdodDogJyArIFNldHRpbmdzLk1BUktFUl9UUkFDS19IRUlHSFQgKyAncHgnO1xuXHQvLyB0b3Auc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0JztcblxuXHR2YXIgbGF5ZXJfc2Nyb2xsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHN0eWxlKGxheWVyX3Njcm9sbCwge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogU2V0dGluZ3MuTUFSS0VSX1RSQUNLX0hFSUdIVCArICdweCcsXG5cdFx0Ly8gaGVpZ2h0OiAoU2V0dGluZ3MuaGVpZ2h0IC0gU2V0dGluZ3MuTUFSS0VSX1RSQUNLX0hFSUdIVCkgKyAncHgnXG5cdFx0bGVmdDogMCxcblx0XHRyaWdodDogMCxcblx0XHRib3R0b206IDAsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nXG5cdH0pO1xuXG5cdGRpdi5hcHBlbmRDaGlsZChsYXllcl9zY3JvbGwpO1xuXG5cdHZhciBwbGF5aW5nID0gZmFsc2U7XG5cblxuXHR2YXIgYnV0dG9uX3N0eWxlcyA9IHtcblx0XHR3aWR0aDogJzIycHgnLFxuXHRcdGhlaWdodDogJzIycHgnLFxuXHRcdHBhZGRpbmc6ICcycHgnXG5cdH07XG5cblx0dmFyIG9wX2J1dHRvbl9zdHlsZXMgPSB7XG5cdFx0d2lkdGg6ICczMnB4Jyxcblx0XHRwYWRkaW5nOiAnM3B4IDRweCAzcHggNHB4J1xuXHR9O1xuXG5cblx0dmFyIHBsYXlfYnV0dG9uID0gbmV3IEljb25CdXR0b24oMTYsICdwbGF5JywgJ3BsYXknLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUocGxheV9idXR0b24uZG9tLCBidXR0b25fc3R5bGVzLCB7IG1hcmdpblRvcDogJzJweCcgfSApO1xuXHRwbGF5X2J1dHRvbi5vbkNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy50b2dnbGVfcGxheScpO1xuXHR9KTtcblxuXHR2YXIgc3RvcF9idXR0b24gPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3N0b3AnLCAnc3RvcCcsIGRpc3BhdGNoZXIpO1xuXHRzdHlsZShzdG9wX2J1dHRvbi5kb20sIGJ1dHRvbl9zdHlsZXMsIHsgbWFyZ2luVG9wOiAnMnB4JyB9ICk7XG5cdHN0b3BfYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdGRpc3BhdGNoZXIuZmlyZSgnY29udHJvbHMuc3RvcCcpO1xuXHR9KTtcblxuXG5cdHZhciB1bmRvX2J1dHRvbiA9IG5ldyBJY29uQnV0dG9uKDE2LCAndW5kbycsICd1bmRvJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKHVuZG9fYnV0dG9uLmRvbSwgb3BfYnV0dG9uX3N0eWxlcyk7XG5cdHVuZG9fYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdjb250cm9scy51bmRvJyk7XG5cdH0pO1xuXG5cdHZhciByZWRvX2J1dHRvbiA9IG5ldyBJY29uQnV0dG9uKDE2LCAncmVwZWF0JywgJ3JlZG8nLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUocmVkb19idXR0b24uZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcblx0cmVkb19idXR0b24ub25DbGljayhmdW5jdGlvbigpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ2NvbnRyb2xzLnJlZG8nKTtcblx0fSk7XG5cblx0dmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0cmFuZ2UudHlwZSA9IFwicmFuZ2VcIjtcblx0cmFuZ2UudmFsdWUgPSAwO1xuXHRyYW5nZS5taW4gPSAtMTtcblx0cmFuZ2UubWF4ID0gKzE7XG5cdHJhbmdlLnN0ZXAgPSAwLjEyNTtcblxuXHRzdHlsZShyYW5nZSwge1xuXHRcdHdpZHRoOiAnOTBweCcsXG5cdFx0bWFyZ2luOiAnMHB4Jyxcblx0XHRtYXJnaW5MZWZ0OiAnMnB4Jyxcblx0XHRtYXJnaW5SaWdodDogJzJweCdcblx0fSk7XG5cblx0dmFyIGRyYWdnaW5nUmFuZ2UgPSAwO1xuXG5cdHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuXHRcdGRyYWdnaW5nUmFuZ2UgPSAxO1xuXHR9KTtcblxuXHRyYW5nZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG5cdFx0ZHJhZ2dpbmdSYW5nZSA9IDA7XG5cdFx0Y2hhbmdlUmFuZ2UoKTtcblx0fSk7XG5cblx0cmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCFkcmFnZ2luZ1JhbmdlKSByZXR1cm47XG5cdFx0Y2hhbmdlUmFuZ2UoKTtcblx0fSk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKHRvcCk7XG5cblx0dmFyIHRpbWVfb3B0aW9ucyA9IHtcblx0XHRtaW46IDAsXG5cdFx0c3RlcDogMC4xMjVcblx0fTtcblxuXHR2YXIgY3VycmVudFRpbWUgPSBuZXcgVUlOdW1iZXIodGltZV9vcHRpb25zKTtcblx0dmFyIHRvdGFsVGltZSA9IG5ldyBVSU51bWJlcih0aW1lX29wdGlvbnMpO1xuXG5cdHZhciBjdXJyZW50VGltZVN0b3JlID0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJyk7XG5cdHZhciB0b3RhbFRpbWVTdG9yZSA9IGRhdGEuZ2V0KCd1aTp0b3RhbFRpbWUnKTtcblxuXHQvLyBVSTJTdG9yZUJpbmQodmlldywgZGF0YXN0b3JlKSB7XG5cdC8vIFx0dmlldy5vbkNoYW5nZS5kbyhmdW5jdGlvbih2KSB7XG5cdC8vIFx0XHRkYXRhc3RvcmUudmFsdWUgPSB2aWV3O1xuXHQvLyBcdH0pXG5cblx0Ly8gXHRkYXRhc3RvcmUub25DaGFuZ2UuZG8oZnVuY3Rpb24odikge1xuXHQvLyBcdFx0dmlldy5zZXRWYWx1ZSA9IHY7XG5cdC8vIFx0fSlcblx0Ly8gfVxuXG5cdGN1cnJlbnRUaW1lLm9uQ2hhbmdlLmRvKGZ1bmN0aW9uKHZhbHVlLCBkb25lKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCd0aW1lLnVwZGF0ZScsIHZhbHVlKTtcblx0XHQvLyByZXBhaW50KCk7XG5cdH0pO1xuXG5cdHRvdGFsVGltZS5vbkNoYW5nZS5kbyhmdW5jdGlvbih2YWx1ZSwgZG9uZSkge1xuXHRcdHRvdGFsVGltZVN0b3JlLnZhbHVlID0gdmFsdWU7XG5cdFx0cmVwYWludCgpO1xuXHR9KTtcblxuXHQvLyBQbGF5IENvbnRyb2xzXG5cdHRvcC5hcHBlbmRDaGlsZChjdXJyZW50VGltZS5kb20pO1xuXHR0b3AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy8nKSk7IC8vIDA6MDA6MDAgLyAwOjEwOjAwXG5cdHRvcC5hcHBlbmRDaGlsZCh0b3RhbFRpbWUuZG9tKVxuXHR0b3AuYXBwZW5kQ2hpbGQocGxheV9idXR0b24uZG9tKTtcblx0dG9wLmFwcGVuZENoaWxkKHN0b3BfYnV0dG9uLmRvbSk7XG5cdHRvcC5hcHBlbmRDaGlsZChyYW5nZSk7XG5cblxuXHR2YXIgb3BlcmF0aW9uc19kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0c3R5bGUob3BlcmF0aW9uc19kaXYsIHtcblx0XHRtYXJnaW5Ub3A6ICc0cHgnLFxuXHRcdC8vIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAnICsgVGhlbWUuYlxuXHR9KTtcblx0dG9wLmFwcGVuZENoaWxkKG9wZXJhdGlvbnNfZGl2KTtcblx0Ly8gdG9wLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG5cblx0Ly8gb3BlbiBfYWx0XG5cdHZhciBmaWxlX29wZW4gPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ2ZvbGRlcl9vcGVuX2FsdCcsICdPcGVuJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKGZpbGVfb3Blbi5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChmaWxlX29wZW4uZG9tKTtcblxuXHRmdW5jdGlvbiBwb3B1bGF0ZU9wZW4oKSB7XG5cdFx0d2hpbGUgKGRyb3Bkb3duLmxlbmd0aCkge1xuXHRcdFx0ZHJvcGRvd24ucmVtb3ZlKDApO1xuXHRcdH1cblxuXHRcdHZhciBvcHRpb247XG5cdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0b3B0aW9uLnRleHQgPSAnTmV3Jztcblx0XHRvcHRpb24udmFsdWUgPSAnKm5ldyonO1xuXHRcdGRyb3Bkb3duLmFkZChvcHRpb24pO1xuXG5cdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0b3B0aW9uLnRleHQgPSAnSW1wb3J0IEpTT04nO1xuXHRcdG9wdGlvbi52YWx1ZSA9ICcqaW1wb3J0Kic7XG5cdFx0ZHJvcGRvd24uYWRkKG9wdGlvbik7XG5cblx0XHQvLyBEb2Vzbid0IHdvcmtcblx0XHQvLyBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHQvLyBvcHRpb24udGV4dCA9ICdTZWxlY3QgRmlsZSc7XG5cdFx0Ly8gb3B0aW9uLnZhbHVlID0gJypzZWxlY3QqJztcblx0XHQvLyBkcm9wZG93bi5hZGQob3B0aW9uKTtcblxuXHRcdG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdG9wdGlvbi50ZXh0ID0gJz09T3Blbj09Jztcblx0XHRvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cdFx0ZHJvcGRvd24uYWRkKG9wdGlvbik7XG5cblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFNUT1JBR0VfUFJFRklYICsgJyguKiknKTtcblx0XHRmb3IgKHZhciBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhrZXkpO1xuXG5cdFx0XHR2YXIgbWF0Y2ggPSByZWdleC5leGVjKGtleSk7XG5cdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0b3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRcdG9wdGlvbi50ZXh0ID0gbWF0Y2hbMV07XG5cblx0XHRcdFx0ZHJvcGRvd24uYWRkKG9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvLyBsaXN0ZW4gb24gb3RoZXIgdGFic1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFNUT1JBR0VfUFJFRklYICsgJyguKiknKTtcblx0XHRpZiAocmVnZXguZXhlYyhlLmtleSkpIHtcblx0XHRcdHBvcHVsYXRlT3BlbigpO1xuXHRcdH1cblx0fSk7XG5cblx0ZGlzcGF0Y2hlci5vbignc2F2ZTpkb25lJywgcG9wdWxhdGVPcGVuKTtcblxuXHR2YXIgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuXHRzdHlsZShkcm9wZG93biwge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdC8vIHJpZ2h0OiAwLFxuXHRcdC8vIG1hcmdpbjogMCxcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHdpZHRoOiAnMTZweCcsXG5cdFx0aGVpZ2h0OiAnMTZweCcsXG5cdFx0Ly8gekluZGV4OiAxLFxuXHR9KTtcblxuXHRkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NoYW5nZWQnLCBkcm9wZG93bi5sZW5ndGgsIGRyb3Bkb3duLnZhbHVlKTtcblxuXHRcdHN3aXRjaCAoZHJvcGRvd24udmFsdWUpIHtcblx0XHRcdGNhc2UgJypuZXcqJzpcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCduZXcnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICcqaW1wb3J0Kic6XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgnaW1wb3J0Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnKnNlbGVjdConOlxuXHRcdFx0XHRkaXNwYXRjaGVyLmZpcmUoJ29wZW5maWxlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZGlzcGF0Y2hlci5maXJlKCdvcGVuJywgZHJvcGRvd24udmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0pO1xuXG5cdGZpbGVfb3Blbi5kb20uaW5zZXJ0QmVmb3JlKGRyb3Bkb3duLCBmaWxlX29wZW4uZG9tLmZpcnN0Q2hpbGQpO1xuXG5cdHBvcHVsYXRlT3BlbigpO1xuXG5cdC8vIC8vIGpzb24gaW1wb3J0XG5cdC8vIHZhciBpbXBvcnRfanNvbiA9IG5ldyBJY29uQnV0dG9uKDE2LCAnc2lnbmluJywgJ0ltcG9ydCBKU09OJywgZGlzcGF0Y2hlcik7XG5cdC8vIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGltcG9ydF9qc29uLmRvbSk7XG5cdC8vIGltcG9ydF9qc29uLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdC8vIFx0ZGlzcGF0Y2hlci5maXJlKCdpbXBvcnQnKTtcblx0Ly8gfSk7XG5cblx0Ly8gLy8gbmV3XG5cdC8vIHZhciBmaWxlX2FsdCA9IG5ldyBJY29uQnV0dG9uKDE2LCAnZmlsZV9hbHQnLCAnTmV3JywgZGlzcGF0Y2hlcik7XG5cdC8vIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGZpbGVfYWx0LmRvbSk7XG5cblx0Ly8gc2F2ZVxuXHR2YXIgc2F2ZSA9IG5ldyBJY29uQnV0dG9uKDE2LCAnc2F2ZScsICdTYXZlJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKHNhdmUuZG9tLCBvcF9idXR0b25fc3R5bGVzKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoc2F2ZS5kb20pO1xuXHRzYXZlLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdzYXZlJyk7XG5cdH0pO1xuXG5cdC8vIHNhdmUgYXNcblx0dmFyIHNhdmVfYXMgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3Bhc3RlJywgJ1NhdmUgYXMnLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUoc2F2ZV9hcy5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChzYXZlX2FzLmRvbSk7XG5cdHNhdmVfYXMub25DbGljayhmdW5jdGlvbigpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3NhdmVfYXMnKTtcblx0fSk7XG5cblx0Ly8gZG93bmxvYWQganNvbiAoZXhwb3J0KVxuXHR2YXIgZG93bmxvYWRfYWx0ID0gbmV3IEljb25CdXR0b24oMTYsICdkb3dubG9hZF9hbHQnLCAnRG93bmxvYWQgLyBFeHBvcnQgSlNPTiB0byBmaWxlJywgZGlzcGF0Y2hlcik7XG5cdHN0eWxlKGRvd25sb2FkX2FsdC5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChkb3dubG9hZF9hbHQuZG9tKTtcblx0ZG93bmxvYWRfYWx0Lm9uQ2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0ZGlzcGF0Y2hlci5maXJlKCdleHBvcnQnKTtcblx0fSk7XG5cblx0dmFyIHVwbG9hZF9hbHQgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ3VwbG9hZF9hbHQnLCAnTG9hZCBmcm9tIGZpbGUnLCBkaXNwYXRjaGVyKTtcblx0c3R5bGUodXBsb2FkX2FsdC5kb20sIG9wX2J1dHRvbl9zdHlsZXMpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZCh1cGxvYWRfYWx0LmRvbSk7XG5cdHVwbG9hZF9hbHQub25DbGljayhmdW5jdGlvbigpIHtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ29wZW5maWxlJyk7XG5cdH0pO1xuXG5cdHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRzcGFuLnN0eWxlLndpZHRoID0gJzIwcHgnO1xuXHRzcGFuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQodW5kb19idXR0b24uZG9tKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQocmVkb19idXR0b24uZG9tKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cblx0Ly8gQ2xvdWQgRG93bmxvYWQgLyBVcGxvYWQgZWRpdCBwZW5jaWxcblxuXHQvKlxuXHQvLyAvLyBzaG93IGxheWVyXG5cdC8vIHZhciBleWVfb3BlbiA9IG5ldyBJY29uQnV0dG9uKDE2LCAnZXllX29wZW4nLCAnZXllX29wZW4nLCBkaXNwYXRjaGVyKTtcblx0Ly8gb3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQoZXllX29wZW4uZG9tKTtcblxuXHQvLyAvLyBoaWRlIC8gZGlzYWJsZSBsYXllclxuXHQvLyB2YXIgZXllX2Nsb3NlID0gbmV3IEljb25CdXR0b24oMTYsICdleWVfY2xvc2UnLCAnZXllX2Nsb3NlJywgZGlzcGF0Y2hlcik7XG5cdC8vIG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKGV5ZV9jbG9zZS5kb20pO1xuXG5cblx0Ly8gcmVtb3ZlIGxheWVyXG5cdHZhciBtaW51cyA9IG5ldyBJY29uQnV0dG9uKDE2LCAnbWludXMnLCAnbWludXMnLCBkaXNwYXRjaGVyKTtcblx0b3BlcmF0aW9uc19kaXYuYXBwZW5kQ2hpbGQobWludXMuZG9tKTtcblxuXHQvLyBjaGVja1xuXHR2YXIgb2sgPSBuZXcgSWNvbkJ1dHRvbigxNiwgJ29rJywgJ29rJywgZGlzcGF0Y2hlcik7XG5cdG9wZXJhdGlvbnNfZGl2LmFwcGVuZENoaWxkKG9rLmRvbSk7XG5cblx0Ly8gY3Jvc3Ncblx0dmFyIHJlbW92ZSA9IG5ldyBJY29uQnV0dG9uKDE2LCAncmVtb3ZlJywgJ3JlbW92ZScsIGRpc3BhdGNoZXIpO1xuXHRvcGVyYXRpb25zX2Rpdi5hcHBlbmRDaGlsZChyZW1vdmUuZG9tKTtcblxuXHQqL1xuXG5cblx0Ly8gcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlUmFuZ2UpO1xuXG5cblx0ZnVuY3Rpb24gY29udmVydFBlcmNlbnRUb1RpbWUodCkge1xuXHRcdHZhciBtaW5fdGltZSA9IDEwICogNjA7IC8vIDEwIG1pbnV0ZXNcblx0XHRtaW5fdGltZSA9IGRhdGEuZ2V0KCd1aTp0b3RhbFRpbWUnKS52YWx1ZTtcblx0XHR2YXIgbWF4X3RpbWUgPSAxO1xuXHRcdHZhciB2ID0gU2V0dGluZ3Mud2lkdGggKiAwLjggLyAodCAqIChtYXhfdGltZSAtIG1pbl90aW1lKSArIG1pbl90aW1lKTtcblx0XHRyZXR1cm4gdjtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbnZlcnRUaW1lVG9QZXJjZW50KHYpIHtcblx0XHR2YXIgbWluX3RpbWUgPSAxMCAqIDYwOyAvLyAxMCBtaW51dGVzXG5cdFx0bWluX3RpbWUgPSBkYXRhLmdldCgndWk6dG90YWxUaW1lJykudmFsdWU7XG5cdFx0dmFyIG1heF90aW1lID0gMTtcblx0XHR2YXIgdCAgPSAoKFNldHRpbmdzLndpZHRoICogMC44IC8gdikgLSBtaW5fdGltZSkgIC8gKG1heF90aW1lIC0gbWluX3RpbWUpO1xuXHRcdHJldHVybiB0O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hhbmdlUmFuZ2UoKSB7XG5cblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3VwZGF0ZS5zY2FsZScsIE1hdGgucG93KDEwMCwgLXJhbmdlLnZhbHVlKSApO1xuXHR9XG5cblx0dmFyIGxheWVyX3VpcyA9IFtdLCB2aXNpYmxlX2xheWVycyA9IDA7XG5cdHZhciB1bnVzZWRfbGF5ZXJzID0gW107XG5cblx0dGhpcy5sYXllcnMgPSBsYXllcl91aXM7XG5cblx0dGhpcy5zZXRDb250cm9sU3RhdHVzID0gZnVuY3Rpb24odikge1xuXHRcdHBsYXlpbmcgPSB2O1xuXHRcdGlmIChwbGF5aW5nKSB7XG5cdFx0XHRwbGF5X2J1dHRvbi5zZXRJY29uKCdwYXVzZScpO1xuXHRcdFx0cGxheV9idXR0b24uc2V0VGlwKCdwYXVzZScpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHBsYXlfYnV0dG9uLnNldEljb24oJ3BsYXknKTtcblx0XHRcdHBsYXlfYnV0dG9uLnNldFRpcCgncGxheScpO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLnNldFN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcblxuXHRcdGxheWVyX3N0b3JlID0gc3RhdGU7XG5cdFx0bGF5ZXJzID0gbGF5ZXJfc3RvcmUudmFsdWU7XG5cdFx0Ly8gbGF5ZXJzID0gc3RhdGU7XG5cdFx0Y29uc29sZS5sb2cobGF5ZXJfdWlzLmxlbmd0aCwgbGF5ZXJzKTtcblx0XHR2YXIgaSwgbGF5ZXI7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGF5ZXIgPSBsYXllcnNbaV07XG5cblx0XHRcdGlmICghbGF5ZXJfdWlzW2ldKSB7XG5cdFx0XHRcdHZhciBsYXllcl91aTtcblx0XHRcdFx0aWYgKHVudXNlZF9sYXllcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0bGF5ZXJfdWkgPSB1bnVzZWRfbGF5ZXJzLnBvcCgpO1xuXHRcdFx0XHRcdGxheWVyX3VpLmRvbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBuZXdcblx0XHRcdFx0XHRsYXllcl91aSA9IG5ldyBWaWV3TGF5ZXIobGF5ZXIsIGRpc3BhdGNoZXIpO1xuXHRcdFx0XHRcdGxheWVyX3Njcm9sbC5hcHBlbmRDaGlsZChsYXllcl91aS5kb20pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxheWVyX3Vpcy5wdXNoKGxheWVyX3VpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gbGF5ZXJfdWlzW2ldLnNldFN0YXRlKGxheWVyKTtcblx0XHR9XG5cblx0XHRjb25zb2xlLmxvZygnVG90YWwgbGF5ZXJzICh2aWV3LCBoaWRkZW4sIHRvdGFsKScsIGxheWVyX3Vpcy5sZW5ndGgsIHVudXNlZF9sYXllcnMubGVuZ3RoLFxuXHRcdFx0bGF5ZXJfdWlzLmxlbmd0aCArIHVudXNlZF9sYXllcnMubGVuZ3RoKTtcblxuXHR9O1xuXG5cdGZ1bmN0aW9uIHJlcGFpbnQocykge1xuXG5cdFx0cyA9IGN1cnJlbnRUaW1lU3RvcmUudmFsdWU7XG5cdFx0Y3VycmVudFRpbWUuc2V0VmFsdWUocyk7XG5cdFx0dG90YWxUaW1lLnNldFZhbHVlKHRvdGFsVGltZVN0b3JlLnZhbHVlKTtcblx0XHRjdXJyZW50VGltZS5wYWludCgpO1xuXHRcdHRvdGFsVGltZS5wYWludCgpO1xuXG5cdFx0dmFyIGk7XG5cblx0XHRzID0gcyB8fCAwO1xuXHRcdGZvciAoaSA9IGxheWVyX3Vpcy5sZW5ndGg7IGktLSA+IDA7KSB7XG5cdFx0XHQvLyBxdWljayBoYWNrXG5cdFx0XHRpZiAoaSA+PSBsYXllcnMubGVuZ3RoKSB7XG5cdFx0XHRcdGxheWVyX3Vpc1tpXS5kb20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dW51c2VkX2xheWVycy5wdXNoKGxheWVyX3Vpcy5wb3AoKSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRsYXllcl91aXNbaV0uc2V0U3RhdGUobGF5ZXJzW2ldLCBsYXllcl9zdG9yZS5nZXQoaSkpO1xuXHRcdFx0Ly8gbGF5ZXJfdWlzW2ldLnNldFN0YXRlKCdsYXllcnMnKyc6JytpKTtcblx0XHRcdGxheWVyX3Vpc1tpXS5yZXBhaW50KHMpO1xuXHRcdH1cblxuXHRcdHZpc2libGVfbGF5ZXJzID0gbGF5ZXJfdWlzLmxlbmd0aDtcblxuXHR9XG5cblx0dGhpcy5yZXBhaW50ID0gcmVwYWludDtcblx0dGhpcy5zZXRTdGF0ZShsYXllcl9zdG9yZSk7XG5cblx0dGhpcy5zY3JvbGxUbyA9IGZ1bmN0aW9uKHgpIHtcblx0XHRsYXllcl9zY3JvbGwuc2Nyb2xsVG9wID0geCAqIChsYXllcl9zY3JvbGwuc2Nyb2xsSGVpZ2h0IC0gbGF5ZXJfc2Nyb2xsLmNsaWVudEhlaWdodCk7XG5cdH07XG5cblx0dGhpcy5kb20gPSBkaXY7XG5cblx0cmVwYWludCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyQ2FiaW5ldDtcbiIsInZhclxuXHRTZXR0aW5ncyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MnKSxcblx0VGhlbWUgPSByZXF1aXJlKCcuL3RoZW1lJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpLFxuXHRwcm94eV9jdHggPSB1dGlscy5wcm94eV9jdHgsXG5cdFR3ZWVucyA9IHJlcXVpcmUoJy4vdXRpbF90d2VlbicpLFxuXHRoYW5kbGVEcmFnID0gcmVxdWlyZSgnLi91dGlsX2hhbmRsZV9kcmFnJyksXG5cdFNjcm9sbENhbnZhcyA9IHJlcXVpcmUoJy4vdmlld190aW1lX3Njcm9sbGVyJyksXG5cdENhbnZhcyA9IHJlcXVpcmUoJy4vdWlfY2FudmFzJylcblx0O1xuXG52YXJcblx0TElORV9IRUlHSFQgPSBTZXR0aW5ncy5MSU5FX0hFSUdIVCxcblx0RElBTU9ORF9TSVpFID0gU2V0dGluZ3MuRElBTU9ORF9TSVpFLFxuXHRUSU1FX1NDUk9MTEVSX0hFSUdIVCA9IDM1LFxuXHRNQVJLRVJfVFJBQ0tfSEVJR0hUID0gMjUsXG5cdExFRlRfUEFORV9XSURUSCA9IFNldHRpbmdzLkxFRlRfUEFORV9XSURUSCxcblx0dGltZV9zY2FsZSA9IFNldHRpbmdzLnRpbWVfc2NhbGUsXG5cdFRPUCA9IDEwO1xuXG5cbnZhciBmcmFtZV9zdGFydCA9IDA7IC8vIHRoaXMgaXMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLlxuXG5cbi8qXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIHRoZSB2aWV3IGZvciB0aGUgcmlnaHQgbWFpbiBzZWN0aW9uIG9mIHRpbWVsaW5lclxuICovXG5cblxuLy8gVE9ET1xuLy8gZGlydHkgcmVuZGVyaW5nXG4vLyBkcmFnIGJsb2NrXG4vLyBET04nVCB1c2UgdGltZS51cGRhdGUgZm9yIGV2ZXJ5dGhpbmdcblxudmFyIHRpY2tNYXJrMTtcbnZhciB0aWNrTWFyazI7XG52YXIgdGlja01hcmszO1xuXG5mdW5jdGlvbiB0aW1lX3NjYWxlZCgpIHtcblx0Lypcblx0ICogU3ViZGl2aXNvbiBMT0Rcblx0ICogdGltZV9zY2FsZSByZWZlcnMgdG8gbnVtYmVyIG9mIHBpeGVscyBwZXIgdW5pdFxuXHQgKiBFZy4gMSBpbmNoIC0gNjBzLCAxIGluY2ggLSA2MGZwcywgMSBpbmNoIC0gNiBtaW5zXG5cdCAqL1xuXHR2YXIgZGl2ID0gNjA7XG5cblx0dGlja01hcmsxID0gdGltZV9zY2FsZSAvIGRpdjtcblx0dGlja01hcmsyID0gMiAqIHRpY2tNYXJrMTtcblx0dGlja01hcmszID0gMTAgKiB0aWNrTWFyazE7XG5cbn1cblxudGltZV9zY2FsZWQoKTtcblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBUaW1lbGluZSBQYW5lbFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBUaW1lbGluZVBhbmVsKGRhdGEsIGRpc3BhdGNoZXIpIHtcblxuXHR2YXIgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblxuXHR2YXIgc2Nyb2xsVG9wID0gMCwgc2Nyb2xsTGVmdCA9IDAsIFNDUk9MTF9IRUlHSFQ7XG5cdHZhciBsYXllcnMgPSBkYXRhLmdldCgnbGF5ZXJzJykudmFsdWU7XG5cblx0dGhpcy5zY3JvbGxUbyA9IGZ1bmN0aW9uKHMsIHkpIHtcblx0XHRzY3JvbGxUb3AgPSBzICogTWF0aC5tYXgobGF5ZXJzLmxlbmd0aCAqIExJTkVfSEVJR0hUIC0gU0NST0xMX0hFSUdIVCwgMCk7XG5cdFx0cmVwYWludCgpO1xuXHR9O1xuXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGggPSAoU2V0dGluZ3MuaGVpZ2h0IC0gVElNRV9TQ1JPTExFUl9IRUlHSFQpO1xuXHRcdGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXHRcdGNhbnZhcy53aWR0aCA9IFNldHRpbmdzLndpZHRoICogZHByO1xuXHRcdGNhbnZhcy5oZWlnaHQgPSBoICogZHByO1xuXHRcdGNhbnZhcy5zdHlsZS53aWR0aCA9IFNldHRpbmdzLndpZHRoICsgJ3B4Jztcblx0XHRjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdFx0U0NST0xMX0hFSUdIVCA9IFNldHRpbmdzLmhlaWdodCAtIFRJTUVfU0NST0xMRVJfSEVJR0hUO1xuXHRcdHNjcm9sbF9jYW52YXMuc2V0U2l6ZShTZXR0aW5ncy53aWR0aCwgVElNRV9TQ1JPTExFUl9IRUlHSFQpO1xuXHR9O1xuXG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXHR2YXIgc2Nyb2xsX2NhbnZhcyA9IG5ldyBDYW52YXMoU2V0dGluZ3Mud2lkdGgsIFRJTUVfU0NST0xMRVJfSEVJR0hUKTtcblx0Ly8gZGF0YS5hZGRMaXN0ZW5lcigndWknLCByZXBhaW50ICk7XG5cblx0dXRpbHMuc3R5bGUoY2FudmFzLCB7XG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0dG9wOiBUSU1FX1NDUk9MTEVSX0hFSUdIVCArICdweCcsXG5cdFx0bGVmdDogJzBweCdcblx0fSk7XG5cblx0dXRpbHMuc3R5bGUoc2Nyb2xsX2NhbnZhcy5kb20sIHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6ICcwcHgnLFxuXHRcdGxlZnQ6ICcxMHB4J1xuXHR9KTtcblxuXHRzY3JvbGxfY2FudmFzLnVzZXMobmV3IFNjcm9sbENhbnZhcyhkaXNwYXRjaGVyLCBkYXRhKSk7XG5cblxuXHRkaXYuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblx0ZGl2LmFwcGVuZENoaWxkKHNjcm9sbF9jYW52YXMuZG9tKTtcblxuXHQvLyB0aGlzLmRvbSA9IGNhbnZhcztcblx0dGhpcy5kb20gPSBkaXY7XG5cdHRoaXMucmVzaXplKCk7XG5cblx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHR2YXIgY3R4X3dyYXAgPSBwcm94eV9jdHgoY3R4KTtcblxuXHR2YXIgY3VycmVudFRpbWU7IC8vIG1lYXN1cmVkIGluIHNlY29uZHNcblx0Ly8gdGVjaG5pY2FsbHkgaXQgY291bGQgYmUgaW4gZnJhbWVzIG9yICBoYXZlIGl0IGluIHN0cmluZyBmb3JtYXQgKDA6MDA6MDA6MS02MClcblxuXHR2YXIgTEVGVF9HVVRURVIgPSAyMDtcblx0dmFyIGksIHgsIHksIGlsLCBqO1xuXG5cdHZhciBuZWVkc1JlcGFpbnQgPSBmYWxzZTtcblx0dmFyIHJlbmRlckl0ZW1zID0gW107XG5cblx0ZnVuY3Rpb24gRWFzaW5nUmVjdCh4MSwgeTEsIHgyLCB5MiwgZnJhbWUsIGZyYW1lMiwgdmFsdWVzLCBsYXllciwgaikge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdHRoaXMucGF0aCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y3R4X3dyYXAuYmVnaW5QYXRoKClcblx0XHRcdC5yZWN0KHgxLCB5MSwgeDIteDEsIHkyLXkxKVxuXHRcdFx0LmNsb3NlUGF0aCgpO1xuXHRcdH07XG5cblx0XHR0aGlzLnBhaW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnBhdGgoKTtcblx0XHRcdGN0eC5maWxsU3R5bGUgPSBmcmFtZS5fY29sb3I7XG5cdFx0XHRjdHguZmlsbCgpO1xuXHRcdH07XG5cblx0XHR0aGlzLm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJzsgLy8gcG9pbnRlciBtb3ZlIGV3LXJlc2l6ZVxuXHRcdH07XG5cblx0XHR0aGlzLm1vdXNlb3V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjYW52YXMuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXHRcdH07XG5cblx0XHR0aGlzLm1vdXNlZHJhZyA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciB0MSA9IHhfdG9fdGltZSh4MSArIGUuZHgpO1xuXHRcdFx0dDEgPSBNYXRoLm1heCgwLCB0MSk7XG5cdFx0XHQvLyBUT0RPIGxpbWl0IG1vdmluZyB0byBuZWlnaGJvdXJzXG5cdFx0XHRmcmFtZS50aW1lID0gdDE7XG5cblx0XHRcdHZhciB0MiA9IHhfdG9fdGltZSh4MiArIGUuZHgpO1xuXHRcdFx0dDIgPSBNYXRoLm1heCgwLCB0Mik7XG5cdFx0XHRmcmFtZTIudGltZSA9IHQyO1xuXG5cdFx0XHQvLyBkaXNwYXRjaGVyLmZpcmUoJ3RpbWUudXBkYXRlJywgdDEpO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBEaWFtb25kKGZyYW1lLCB5KSB7XG5cdFx0dmFyIHgsIHkyO1xuXG5cdFx0eCA9IHRpbWVfdG9feChmcmFtZS50aW1lKTtcblx0XHR5MiA9IHkgKyBMSU5FX0hFSUdIVCAqIDAuNSAgLSBESUFNT05EX1NJWkUgLyAyO1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0dmFyIGlzT3ZlciA9IGZhbHNlO1xuXG5cdFx0dGhpcy5wYXRoID0gZnVuY3Rpb24oY3R4X3dyYXApIHtcblx0XHRcdGN0eF93cmFwXG5cdFx0XHRcdC5iZWdpblBhdGgoKVxuXHRcdFx0XHQubW92ZVRvKHgsIHkyKVxuXHRcdFx0XHQubGluZVRvKHggKyBESUFNT05EX1NJWkUgLyAyLCB5MiArIERJQU1PTkRfU0laRSAvIDIpXG5cdFx0XHRcdC5saW5lVG8oeCwgeTIgKyBESUFNT05EX1NJWkUpXG5cdFx0XHRcdC5saW5lVG8oeCAtIERJQU1PTkRfU0laRSAvIDIsIHkyICsgRElBTU9ORF9TSVpFIC8gMilcblx0XHRcdFx0LmNsb3NlUGF0aCgpO1xuXHRcdH07XG5cblx0XHR0aGlzLnBhaW50ID0gZnVuY3Rpb24oY3R4X3dyYXApIHtcblx0XHRcdHNlbGYucGF0aChjdHhfd3JhcCk7XG5cdFx0XHRpZiAoIWlzT3Zlcilcblx0XHRcdFx0Y3R4X3dyYXAuZmlsbFN0eWxlKFRoZW1lLmMpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjdHhfd3JhcC5maWxsU3R5bGUoJ3llbGxvdycpOyAvLyBUaGVtZS5kXG5cblx0XHRcdGN0eF93cmFwLmZpbGwoKVxuXHRcdFx0LnN0cm9rZSgpO1xuXHRcdH07XG5cblx0XHR0aGlzLm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aXNPdmVyID0gdHJ1ZTtcblx0XHRcdGNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7IC8vIHBvaW50ZXIgbW92ZSBldy1yZXNpemVcblx0XHRcdHNlbGYucGFpbnQoY3R4X3dyYXApO1xuXHRcdH07XG5cblx0XHR0aGlzLm1vdXNlb3V0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpc092ZXIgPSBmYWxzZTtcblx0XHRcdGNhbnZhcy5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cdFx0XHRzZWxmLnBhaW50KGN0eF93cmFwKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5tb3VzZWRyYWcgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgdCA9IHhfdG9fdGltZSh4ICsgZS5keCk7XG5cdFx0XHR0ID0gTWF0aC5tYXgoMCwgdCk7XG5cdFx0XHQvLyBUT0RPIGxpbWl0IG1vdmluZyB0byBuZWlnaGJvdXJzXG5cdFx0XHRmcmFtZS50aW1lID0gdDtcblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgndGltZS51cGRhdGUnLCB0KTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdmcmFtZScsIGZyYW1lKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHMsIGZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHMpLCB0aGlzKTtcblx0XHR9O1xuXG5cdH1cblxuXHRmdW5jdGlvbiByZXBhaW50KCkge1xuXHRcdG5lZWRzUmVwYWludCA9IHRydWU7XG5cdH1cblxuXG5cdGZ1bmN0aW9uIGRyYXdMYXllckNvbnRlbnRzKCkge1xuXHRcdHJlbmRlckl0ZW1zID0gW107XG5cdFx0Ly8gaG9yaXpvbnRhbCBMYXllciBsaW5lc1xuXHRcdGZvciAoaSA9IDAsIGlsID0gbGF5ZXJzLmxlbmd0aDsgaSA8PSBpbDsgaSsrKSB7XG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5iO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0eSA9IGkgKiBMSU5FX0hFSUdIVDtcblx0XHRcdHkgPSB+fnkgLSAwLjU7XG5cblx0XHRcdGN0eF93cmFwXG5cdFx0XHQubW92ZVRvKDAsIHkpXG5cdFx0XHQubGluZVRvKHdpZHRoLCB5KVxuXHRcdFx0LnN0cm9rZSgpO1xuXHRcdH1cblxuXG5cdFx0dmFyIGZyYW1lLCBmcmFtZTIsIGo7XG5cblx0XHQvLyBEcmF3IEVhc2luZyBSZWN0c1xuXHRcdGZvciAoaSA9IDA7IGkgPCBpbDsgaSsrKSB7XG5cdFx0XHQvLyBjaGVjayBmb3Iga2V5ZnJhbWVzXG5cdFx0XHR2YXIgbGF5ZXIgPSBsYXllcnNbaV07XG5cdFx0XHR2YXIgdmFsdWVzID0gbGF5ZXIudmFsdWVzO1xuXG5cdFx0XHR5ID0gaSAqIExJTkVfSEVJR0hUO1xuXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgdmFsdWVzLmxlbmd0aCAtIDE7IGorKykge1xuXHRcdFx0XHRmcmFtZSA9IHZhbHVlc1tqXTtcblx0XHRcdFx0ZnJhbWUyID0gdmFsdWVzW2ogKyAxXTtcblxuXHRcdFx0XHQvLyBEcmF3IFR3ZWVuIFJlY3Rcblx0XHRcdFx0eCA9IHRpbWVfdG9feChmcmFtZS50aW1lKTtcblx0XHRcdFx0eDIgPSB0aW1lX3RvX3goZnJhbWUyLnRpbWUpO1xuXG5cdFx0XHRcdGlmICghZnJhbWUudHdlZW4gfHwgZnJhbWUudHdlZW4gPT0gJ25vbmUnKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgeTEgPSB5ICsgMjtcblx0XHRcdFx0dmFyIHkyID0geSArIExJTkVfSEVJR0hUIC0gMjtcblxuXHRcdFx0XHRyZW5kZXJJdGVtcy5wdXNoKG5ldyBFYXNpbmdSZWN0KHgsIHkxLCB4MiwgeTIsIGZyYW1lLCBmcmFtZTIpKTtcblxuXHRcdFx0XHQvLyAvLyBkcmF3IGVhc2luZyBncmFwaFxuXHRcdFx0XHQvLyB2YXIgY29sb3IgPSBwYXJzZUludChmcmFtZS5fY29sb3Iuc3Vic3RyaW5nKDEsNyksIDE2KTtcblx0XHRcdFx0Ly8gY29sb3IgPSAweGZmZmZmZiBeIGNvbG9yO1xuXHRcdFx0XHQvLyBjb2xvciA9IGNvbG9yLnRvU3RyaW5nKDE2KTsgICAgICAgICAgIC8vIGNvbnZlcnQgdG8gaGV4XG5cdFx0XHRcdC8vIGNvbG9yID0gJyMnICsgKCcwMDAwMDAnICsgY29sb3IpLnNsaWNlKC02KTtcblxuXHRcdFx0XHQvLyBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcblx0XHRcdFx0Ly8gdmFyIHgzO1xuXHRcdFx0XHQvLyBjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRcdC8vIGN0eC5tb3ZlVG8oeCwgeTIpO1xuXHRcdFx0XHQvLyB2YXIgZHkgPSB5MSAtIHkyO1xuXHRcdFx0XHQvLyB2YXIgZHggPSB4MiAtIHg7XG5cblx0XHRcdFx0Ly8gZm9yICh4Mz14OyB4MyA8IHgyOyB4MysrKSB7XG5cdFx0XHRcdC8vIFx0Y3R4LmxpbmVUbyh4MywgeTIgKyBUd2VlbnNbZnJhbWUudHdlZW5dKCh4MyAtIHgpL2R4KSAqIGR5KTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHQvLyBjdHguc3Ryb2tlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0Ly8gRGltb25kc1xuXHRcdFx0XHRmcmFtZSA9IHZhbHVlc1tqXTtcblx0XHRcdFx0cmVuZGVySXRlbXMucHVzaChuZXcgRGlhbW9uZChmcmFtZSwgeSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHJlbmRlciBpdGVtc1xuXHRcdHZhciBpdGVtO1xuXHRcdGZvciAoaSA9IDAsIGlsID0gcmVuZGVySXRlbXMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuXHRcdFx0aXRlbSA9IHJlbmRlckl0ZW1zW2ldO1xuXHRcdFx0aXRlbS5wYWludChjdHhfd3JhcCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc2V0VGltZVNjYWxlKCkge1xuXG5cdFx0dmFyIHYgPSBkYXRhLmdldCgndWk6dGltZVNjYWxlJykudmFsdWU7XG5cdFx0aWYgKHRpbWVfc2NhbGUgIT09IHYpIHtcblx0XHRcdHRpbWVfc2NhbGUgPSB2O1xuXHRcdFx0dGltZV9zY2FsZWQoKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgb3ZlciA9IG51bGw7XG5cdHZhciBtb3VzZWRvd25JdGVtID0gbnVsbDtcblxuXHRmdW5jdGlvbiBjaGVjaygpIHtcblx0XHR2YXIgaXRlbTtcblx0XHR2YXIgbGFzdF9vdmVyID0gb3Zlcjtcblx0XHQvLyBvdmVyID0gW107XG5cdFx0b3ZlciA9IG51bGw7XG5cdFx0Zm9yIChpID0gcmVuZGVySXRlbXMubGVuZ3RoOyBpLS0gPiAwOykge1xuXHRcdFx0aXRlbSA9IHJlbmRlckl0ZW1zW2ldO1xuXHRcdFx0aXRlbS5wYXRoKGN0eF93cmFwKTtcblxuXHRcdFx0aWYgKGN0eC5pc1BvaW50SW5QYXRoKHBvaW50ZXIueCAqIGRwciwgcG9pbnRlci55ICogZHByKSkge1xuXHRcdFx0XHQvLyBvdmVyLnB1c2goaXRlbSk7XG5cdFx0XHRcdG92ZXIgPSBpdGVtO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBjbGVhciBvbGQgbW91c2VpblxuXHRcdGlmIChsYXN0X292ZXIgJiYgbGFzdF9vdmVyICE9IG92ZXIpIHtcblx0XHRcdGl0ZW0gPSBsYXN0X292ZXI7XG5cdFx0XHRpZiAoaXRlbS5tb3VzZW91dCkgaXRlbS5tb3VzZW91dCgpO1xuXHRcdH1cblxuXHRcdGlmIChvdmVyKSB7XG5cdFx0XHRpdGVtID0gb3Zlcjtcblx0XHRcdGlmIChpdGVtLm1vdXNlb3ZlcikgaXRlbS5tb3VzZW92ZXIoKTtcblxuXHRcdFx0aWYgKG1vdXNlZG93bjIpIHtcblx0XHRcdFx0bW91c2Vkb3duSXRlbSA9IGl0ZW07XG5cdFx0XHR9XG5cdFx0fVxuXG5cblxuXHRcdC8vIGNvbnNvbGUubG9nKHBvaW50ZXIpXG5cdH1cblxuXHRmdW5jdGlvbiBwb2ludGVyRXZlbnRzKCkge1xuXHRcdGlmICghcG9pbnRlcikgcmV0dXJuO1xuXG5cdFx0Y3R4X3dyYXBcblx0XHRcdC5zYXZlKClcblx0XHRcdC5zY2FsZShkcHIsIGRwcilcblx0XHRcdC50cmFuc2xhdGUoMCwgTUFSS0VSX1RSQUNLX0hFSUdIVClcblx0XHRcdC5iZWdpblBhdGgoKVxuXHRcdFx0LnJlY3QoMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNDUk9MTF9IRUlHSFQpXG5cdFx0XHQudHJhbnNsYXRlKC1zY3JvbGxMZWZ0LCAtc2Nyb2xsVG9wKVxuXHRcdFx0LmNsaXAoKVxuXHRcdFx0XHQucnVuKGNoZWNrKVxuXHRcdFx0LnJlc3RvcmUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9wYWludCgpIHtcblx0XHRpZiAoIW5lZWRzUmVwYWludCkge1xuXHRcdFx0cG9pbnRlckV2ZW50cygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNjcm9sbF9jYW52YXMucmVwYWludCgpO1xuXG5cdFx0c2V0VGltZVNjYWxlKCk7XG5cblx0XHRjdXJyZW50VGltZSA9IGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlO1xuXHRcdGZyYW1lX3N0YXJ0ID0gIGRhdGEuZ2V0KCd1aTpzY3JvbGxUaW1lJykudmFsdWU7XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0Ly8gYmFja2dyb3VuZFxuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFRoZW1lLmE7XG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LnNjYWxlKGRwciwgZHByKTtcblxuXHRcdC8vXG5cblx0XHRjdHgubGluZVdpZHRoID0gMTsgLy8gLjUsIDEsIDJcblxuXHRcdHdpZHRoID0gU2V0dGluZ3Mud2lkdGg7XG5cdFx0aGVpZ2h0ID0gU2V0dGluZ3MuaGVpZ2h0O1xuXG5cdFx0dmFyIHVuaXRzID0gdGltZV9zY2FsZSAvIHRpY2tNYXJrMTtcblx0XHR2YXIgb2Zmc2V0VW5pdHMgPSAoZnJhbWVfc3RhcnQgKiB0aW1lX3NjYWxlKSAlIHVuaXRzO1xuXG5cdFx0dmFyIGNvdW50ID0gKHdpZHRoIC0gTEVGVF9HVVRURVIgKyBvZmZzZXRVbml0cykgLyB1bml0cztcblxuXHRcdC8vIGNvbnNvbGUubG9nKCd0aW1lX3NjYWxlJywgdGltZV9zY2FsZSwgJ3RpY2tNYXJrMScsIHRpY2tNYXJrMSwgJ3VuaXRzJywgdW5pdHMsICdvZmZzZXRVbml0cycsIG9mZnNldFVuaXRzLCBmcmFtZV9zdGFydCk7XG5cblx0XHQvLyB0aW1lX3NjYWxlID0gcGl4ZWxzIHRvIDEgc2Vjb25kICg0MClcblx0XHQvLyB0aWNrTWFyazEgPSBtYXJrcyBwZXIgc2Vjb25kIChtYXJrcyAvIHMpXG5cdFx0Ly8gdW5pdHMgPSBwaXhlbHMgdG8gZXZlcnkgbWFyayAoNDApXG5cblx0XHQvLyBsYWJlbHMgb25seVxuXHRcdGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0XHR4ID0gaSAqIHVuaXRzICsgTEVGVF9HVVRURVIgLSBvZmZzZXRVbml0cztcblxuXHRcdFx0Ly8gdmVydGljYWwgbGluZXNcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IFRoZW1lLmI7XG5cdFx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0XHRjdHgubW92ZVRvKHgsIDApO1xuXHRcdFx0Y3R4LmxpbmVUbyh4LCBoZWlnaHQpO1xuXHRcdFx0Y3R4LnN0cm9rZSgpO1xuXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gVGhlbWUuZDtcblx0XHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcblxuXHRcdFx0dmFyIHQgPSAoaSAqIHVuaXRzIC0gb2Zmc2V0VW5pdHMpIC8gdGltZV9zY2FsZSArIGZyYW1lX3N0YXJ0O1xuXHRcdFx0dCA9IHV0aWxzLmZvcm1hdF9mcmllbmRseV9zZWNvbmRzKHQpO1xuXHRcdFx0Y3R4LmZpbGxUZXh0KHQsIHgsIDM4KTtcblx0XHR9XG5cblx0XHR1bml0cyA9IHRpbWVfc2NhbGUgLyB0aWNrTWFyazI7XG5cdFx0Y291bnQgPSAod2lkdGggLSBMRUZUX0dVVFRFUiArIG9mZnNldFVuaXRzKSAvIHVuaXRzO1xuXG5cdFx0Ly8gbWFya2VyIGxpbmVzIC0gbWFpblxuXHRcdGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5jO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0eCA9IGkgKiB1bml0cyArIExFRlRfR1VUVEVSIC0gb2Zmc2V0VW5pdHM7XG5cdFx0XHRjdHgubW92ZVRvKHgsIE1BUktFUl9UUkFDS19IRUlHSFQgLSAwKTtcblx0XHRcdGN0eC5saW5lVG8oeCwgTUFSS0VSX1RSQUNLX0hFSUdIVCAtIDE2KTtcblx0XHRcdGN0eC5zdHJva2UoKTtcblx0XHR9XG5cblx0XHR2YXIgbXVsID0gdGlja01hcmszIC8gdGlja01hcmsyO1xuXHRcdHVuaXRzID0gdGltZV9zY2FsZSAvIHRpY2tNYXJrMztcblx0XHRjb3VudCA9ICh3aWR0aCAtIExFRlRfR1VUVEVSICsgb2Zmc2V0VW5pdHMpIC8gdW5pdHM7XG5cblx0XHQvLyBzbWFsbCB0aWNrc1xuXHRcdGZvciAoaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0XHRpZiAoaSAlIG11bCA9PT0gMCkgY29udGludWU7XG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBUaGVtZS5jO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0eCA9IGkgKiB1bml0cyArIExFRlRfR1VUVEVSIC0gb2Zmc2V0VW5pdHM7XG5cdFx0XHRjdHgubW92ZVRvKHgsIE1BUktFUl9UUkFDS19IRUlHSFQgLSAwKTtcblx0XHRcdGN0eC5saW5lVG8oeCwgTUFSS0VSX1RSQUNLX0hFSUdIVCAtIDEwKTtcblx0XHRcdGN0eC5zdHJva2UoKTtcblx0XHR9XG5cblx0XHQvLyBFbmNhcHN1bGF0ZSBhIHNjcm9sbCByZWN0IGZvciB0aGUgbGF5ZXJzXG5cdFx0Y3R4X3dyYXBcblx0XHRcdC5zYXZlKClcblx0XHRcdC50cmFuc2xhdGUoMCwgTUFSS0VSX1RSQUNLX0hFSUdIVClcblx0XHRcdC5iZWdpblBhdGgoKVxuXHRcdFx0LnJlY3QoMCwgMCwgU2V0dGluZ3Mud2lkdGgsIFNDUk9MTF9IRUlHSFQpXG5cdFx0XHQudHJhbnNsYXRlKC1zY3JvbGxMZWZ0LCAtc2Nyb2xsVG9wKVxuXHRcdFx0LmNsaXAoKVxuXHRcdFx0XHQucnVuKGRyYXdMYXllckNvbnRlbnRzKVxuXHRcdFx0LnJlc3RvcmUoKTtcblxuXHRcdC8vIEN1cnJlbnQgTWFya2VyIC8gQ3Vyc29yXG5cdFx0Y3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7IC8vIFRoZW1lLmNcblx0XHR4ID0gKGN1cnJlbnRUaW1lIC0gZnJhbWVfc3RhcnQpICogdGltZV9zY2FsZSArIExFRlRfR1VUVEVSO1xuXG5cdFx0dmFyIHR4dCA9IHV0aWxzLmZvcm1hdF9mcmllbmRseV9zZWNvbmRzKGN1cnJlbnRUaW1lKTtcblx0XHR2YXIgdGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHR4dCkud2lkdGg7XG5cblx0XHR2YXIgYmFzZV9saW5lID0gTUFSS0VSX1RSQUNLX0hFSUdIVCAtIDUsIGhhbGZfcmVjdCA9IHRleHRXaWR0aCAvIDIgKyA0O1xuXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5tb3ZlVG8oeCwgYmFzZV9saW5lKTtcblx0XHRjdHgubGluZVRvKHgsIGhlaWdodCk7XG5cdFx0Y3R4LnN0cm9rZSgpO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICdyZWQnOyAvLyBibGFja1xuXHRcdGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4Lm1vdmVUbyh4LCBiYXNlX2xpbmUgKyA1KTtcblx0XHRjdHgubGluZVRvKHggKyA1LCBiYXNlX2xpbmUpO1xuXHRcdGN0eC5saW5lVG8oeCArIGhhbGZfcmVjdCwgYmFzZV9saW5lKTtcblx0XHRjdHgubGluZVRvKHggKyBoYWxmX3JlY3QsIGJhc2VfbGluZSAtIDE0KTtcblx0XHRjdHgubGluZVRvKHggLSBoYWxmX3JlY3QsIGJhc2VfbGluZSAtIDE0KTtcblx0XHRjdHgubGluZVRvKHggLSBoYWxmX3JlY3QsIGJhc2VfbGluZSk7XG5cdFx0Y3R4LmxpbmVUbyh4IC0gNSwgYmFzZV9saW5lKTtcblx0XHRjdHguY2xvc2VQYXRoKCk7XG5cdFx0Y3R4LmZpbGwoKTtcblxuXHRcdGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuXHRcdGN0eC5maWxsVGV4dCh0eHQsIHgsIGJhc2VfbGluZSAtIDQpO1xuXG5cdFx0Y3R4LnJlc3RvcmUoKTtcblxuXHRcdG5lZWRzUmVwYWludCA9IGZhbHNlO1xuXHRcdC8vIHBvaW50ZXJFdmVudHMoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24geV90b190cmFjayh5KSB7XG5cdFx0aWYgKHkgLSBNQVJLRVJfVFJBQ0tfSEVJR0hUIDwgMCkgcmV0dXJuIC0xO1xuXHRcdHJldHVybiAoeSAtIE1BUktFUl9UUkFDS19IRUlHSFQgKyBzY3JvbGxUb3ApIC8gTElORV9IRUlHSFQgfCAwO1xuXHR9XG5cblxuXHRmdW5jdGlvbiB4X3RvX3RpbWUoeCkge1xuXHRcdHZhciB1bml0cyA9IHRpbWVfc2NhbGUgLyB0aWNrTWFyazM7XG5cblx0XHQvLyByZXR1cm4gZnJhbWVfc3RhcnQgKyAoeCAtIExFRlRfR1VUVEVSKSAvIHRpbWVfc2NhbGU7XG5cblx0XHRyZXR1cm4gZnJhbWVfc3RhcnQgKyAoKHggLSBMRUZUX0dVVFRFUikgLyB1bml0cyB8IDApIC8gdGlja01hcmszO1xuXHR9XG5cblx0ZnVuY3Rpb24gdGltZV90b194KHMpIHtcblx0XHR2YXIgZHMgPSBzIC0gZnJhbWVfc3RhcnQ7XG5cdFx0ZHMgKj0gdGltZV9zY2FsZTtcblx0XHRkcyArPSBMRUZUX0dVVFRFUjtcblxuXHRcdHJldHVybiBkcztcblx0fVxuXG5cdHZhciBtZSA9IHRoaXM7XG5cdHRoaXMucmVwYWludCA9IHJlcGFpbnQ7XG5cdHRoaXMuX3BhaW50ID0gX3BhaW50O1xuXG5cdHJlcGFpbnQoKTtcblxuXHR2YXIgbW91c2Vkb3duID0gZmFsc2UsIHNlbGVjdGlvbiA9IGZhbHNlO1xuXG5cdHZhciBkcmFnT2JqZWN0O1xuXHR2YXIgY2FudmFzQm91bmRzO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcblxuXHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0Y2FudmFzQm91bmRzID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciBteCA9IGUuY2xpZW50WCAtIGNhbnZhc0JvdW5kcy5sZWZ0ICwgbXkgPSBlLmNsaWVudFkgLSBjYW52YXNCb3VuZHMudG9wO1xuXG5cblx0XHR2YXIgdHJhY2sgPSB5X3RvX3RyYWNrKG15KTtcblx0XHR2YXIgcyA9IHhfdG9fdGltZShteCk7XG5cblxuXHRcdGRpc3BhdGNoZXIuZmlyZSgna2V5ZnJhbWUnLCBsYXllcnNbdHJhY2tdLCBjdXJyZW50VGltZSk7XG5cblx0fSk7XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoZSkge1xuXHRcdGNhbnZhc0JvdW5kcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgbXggPSBlLmNsaWVudFggLSBjYW52YXNCb3VuZHMubGVmdCAsIG15ID0gZS5jbGllbnRZIC0gY2FudmFzQm91bmRzLnRvcDtcblx0XHRvblBvaW50ZXJNb3ZlKG14LCBteSk7XG5cdH1cblxuXHR2YXIgcG9pbnRlcmRpZE1vdmVkID0gZmFsc2U7XG5cdHZhciBwb2ludGVyID0gbnVsbDtcblxuXHRmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKHgsIHkpIHtcblx0XHRpZiAobW91c2Vkb3duSXRlbSkgcmV0dXJuO1xuXHRcdHBvaW50ZXJkaWRNb3ZlZCA9IHRydWU7XG5cdFx0cG9pbnRlciA9IHt4OiB4LCB5OiB5fTtcblx0fVxuXG5cdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuXHRcdHBvaW50ZXIgPSBudWxsO1xuXHR9KTtcblxuXHR2YXIgbW91c2Vkb3duMiA9IGZhbHNlLCBtb3VzZURvd25UaGVuTW92ZSA9IGZhbHNlO1xuXHRoYW5kbGVEcmFnKGNhbnZhcywgZnVuY3Rpb24gZG93bihlKSB7XG5cdFx0XHRtb3VzZWRvd24yID0gdHJ1ZTtcblx0XHRcdHBvaW50ZXIgPSB7XG5cdFx0XHRcdHg6IGUub2Zmc2V0eCxcblx0XHRcdFx0eTogZS5vZmZzZXR5XG5cdFx0XHR9O1xuXHRcdFx0cG9pbnRlckV2ZW50cygpO1xuXG5cdFx0XHRpZiAoIW1vdXNlZG93bkl0ZW0pIGRpc3BhdGNoZXIuZmlyZSgndGltZS51cGRhdGUnLCB4X3RvX3RpbWUoZS5vZmZzZXR4KSk7XG5cdFx0XHQvLyBIaXQgY3JpdGVyaWFcblx0XHR9LCBmdW5jdGlvbiBtb3ZlKGUpIHtcblx0XHRcdG1vdXNlZG93bjIgPSBmYWxzZTtcblx0XHRcdGlmIChtb3VzZWRvd25JdGVtKSB7XG5cdFx0XHRcdG1vdXNlRG93blRoZW5Nb3ZlID0gdHJ1ZTtcblx0XHRcdFx0aWYgKG1vdXNlZG93bkl0ZW0ubW91c2VkcmFnKSB7XG5cdFx0XHRcdFx0bW91c2Vkb3duSXRlbS5tb3VzZWRyYWcoZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgndGltZS51cGRhdGUnLCB4X3RvX3RpbWUoZS5vZmZzZXR4KSk7XG5cdFx0XHR9XG5cdFx0fSwgZnVuY3Rpb24gdXAoZSkge1xuXHRcdFx0aWYgKG1vdXNlRG93blRoZW5Nb3ZlKSB7XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgna2V5ZnJhbWUubW92ZScpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGRpc3BhdGNoZXIuZmlyZSgndGltZS51cGRhdGUnLCB4X3RvX3RpbWUoZS5vZmZzZXR4KSk7XG5cdFx0XHR9XG5cdFx0XHRtb3VzZWRvd24yID0gZmFsc2U7XG5cdFx0XHRtb3VzZWRvd25JdGVtID0gbnVsbDtcblx0XHRcdG1vdXNlRG93blRoZW5Nb3ZlID0gZmFsc2U7XG5cdFx0fVxuXHQpO1xuXG5cdHRoaXMuc2V0U3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuXHRcdGxheWVycyA9IHN0YXRlLnZhbHVlO1xuXHRcdHJlcGFpbnQoKTtcblx0fTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVsaW5lUGFuZWw7XG4iLCJ2YXJcblx0VGhlbWUgPSByZXF1aXJlKCcuL3RoZW1lJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpLFxuXHRwcm94eV9jdHggPSB1dGlscy5wcm94eV9jdHgsXG5cdGhhbmRsZURyYWcgPSByZXF1aXJlKCcuL3V0aWxfaGFuZGxlX2RyYWcnKVxuXHQ7XG5cblxuZnVuY3Rpb24gUmVjdCgpIHtcblx0XG59XG5cblJlY3QucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHgsIHksIHcsIGgsIGNvbG9yLCBvdXRsaW5lKSB7XG5cdHRoaXMueCA9IHg7XG5cdHRoaXMueSA9IHk7XG5cdHRoaXMudyA9IHc7XG5cdHRoaXMuaCA9IGg7XG5cdHRoaXMuY29sb3IgPSBjb2xvcjtcblx0dGhpcy5vdXRsaW5lID0gb3V0bGluZTtcbn07XG5cblJlY3QucHJvdG90eXBlLnBhaW50ID0gZnVuY3Rpb24oY3R4KSB7XG5cdGN0eC5maWxsU3R5bGUgPSBUaGVtZS5iOyAgLy8gLy8gJ3llbGxvdyc7XG5cdGN0eC5zdHJva2VTdHlsZSA9IFRoZW1lLmM7XG5cblx0dGhpcy5zaGFwZShjdHgpO1xuXG5cdGN0eC5zdHJva2UoKTtcblx0Y3R4LmZpbGwoKTtcbn07XG5cblJlY3QucHJvdG90eXBlLnNoYXBlID0gZnVuY3Rpb24oY3R4KSB7XG5cdGN0eC5iZWdpblBhdGgoKTtcblx0Y3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcbn07XG5cblJlY3QucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oeCwgeSkge1xuXHRyZXR1cm4geCA+PSB0aGlzLnggJiYgeSA+PSB0aGlzLnlcblx0ICYmIHggPD0gdGhpcy54ICsgdGhpcy53ICYmIHkgPD0gdGhpcy55ICsgdGhpcy5oO1xufTtcblxuXG5cbmZ1bmN0aW9uIFNjcm9sbENhbnZhcyhkaXNwYXRjaGVyLCBkYXRhKSB7XG5cdHZhciB3aWR0aCwgaGVpZ2h0O1xuXG5cdHRoaXMuc2V0U2l6ZSA9IGZ1bmN0aW9uKHcsIGgpIHtcblx0XHR3aWR0aCA9IHc7XG5cdFx0aGVpZ2h0ID0gaDtcblx0fVxuXG5cdHZhciBUT1BfU0NST0xMX1RSQUNLID0gMjA7XG5cdHZhciBNQVJHSU5TID0gMTU7XG5cblx0dmFyIHNjcm9sbGVyID0ge1xuXHRcdGxlZnQ6IDAsXG5cdFx0Z3JpcF9sZW5ndGg6IDAsXG5cdFx0azogMVxuXHR9O1xuXG5cdHZhciBzY3JvbGxSZWN0ID0gbmV3IFJlY3QoKTtcblxuXHR0aGlzLnBhaW50ID0gZnVuY3Rpb24oY3R4KSB7XG5cdFx0dmFyIHRvdGFsVGltZSA9IGRhdGEuZ2V0KCd1aTp0b3RhbFRpbWUnKS52YWx1ZTtcblx0XHR2YXIgc2Nyb2xsVGltZSA9IGRhdGEuZ2V0KCd1aTpzY3JvbGxUaW1lJykudmFsdWU7XG5cdFx0dmFyIGN1cnJlbnRUaW1lID0gZGF0YS5nZXQoJ3VpOmN1cnJlbnRUaW1lJykudmFsdWU7XG5cdFx0XG5cdFx0dmFyIHBpeGVsc19wZXJfc2Vjb25kID0gZGF0YS5nZXQoJ3VpOnRpbWVTY2FsZScpLnZhbHVlO1xuXG5cdFx0Y3R4LnNhdmUoKTtcblxuXHRcdHZhciB3ID0gd2lkdGggLSAyICogTUFSR0lOUztcblx0XHR2YXIgaCA9IDE2OyAvLyBUT1BfU0NST0xMX1RSQUNLO1xuXHRcdHZhciBoMiA9IGg7XG5cblxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cdFx0Y3R4LnRyYW5zbGF0ZShNQVJHSU5TLCA1KTtcblxuXHRcdC8vIG91dGxpbmUgc2Nyb2xsZXJcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4LnN0cm9rZVN0eWxlID0gVGhlbWUuYjtcblx0XHRjdHgucmVjdCgwLCAwLCB3LCBoKTtcblx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0XG5cdFx0dmFyIHRvdGFsVGltZVBpeGVscyA9IHRvdGFsVGltZSAqIHBpeGVsc19wZXJfc2Vjb25kO1xuXHRcdHZhciBrID0gdyAvIHRvdGFsVGltZVBpeGVscztcblx0XHRzY3JvbGxlci5rID0gaztcblxuXHRcdHZhciBncmlwX2xlbmd0aCA9IHcgKiBrO1xuXG5cdFx0c2Nyb2xsZXIuZ3JpcF9sZW5ndGggPSBncmlwX2xlbmd0aDtcblxuXHRcdHNjcm9sbGVyLmxlZnQgPSBzY3JvbGxUaW1lIC8gdG90YWxUaW1lICogdztcblx0XHRcblx0XHRzY3JvbGxSZWN0LnNldChzY3JvbGxlci5sZWZ0LCAwLCBzY3JvbGxlci5ncmlwX2xlbmd0aCwgaCk7XG5cdFx0c2Nyb2xsUmVjdC5wYWludChjdHgpO1xuXG5cdFx0dmFyIHIgPSBjdXJyZW50VGltZSAvIHRvdGFsVGltZSAqIHc7XHRcdFxuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICBUaGVtZS5jO1xuXHRcdGN0eC5saW5lV2lkdGggPSAyO1xuXHRcdFxuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcblx0XHQvLyBjaXJjbGVcblx0XHQvLyBjdHguYXJjKHIsIGgyIC8gMiwgaDIgLyAxLjUsIDAsIE1hdGguUEkgKiAyKTtcblxuXHRcdC8vIGxpbmVcblx0XHRjdHgucmVjdChyLCAwLCAyLCBoICsgNSk7XG5cdFx0Y3R4LmZpbGwoKVxuXG5cdFx0Y3R4LmZpbGxUZXh0KGN1cnJlbnRUaW1lICYmIGN1cnJlbnRUaW1lLnRvRml4ZWQoMiksIHIsIGggKyAxNCk7XG5cdFx0Ly8gY3R4LmZpbGxUZXh0KGN1cnJlbnRUaW1lICYmIGN1cnJlbnRUaW1lLnRvRml4ZWQoMyksIDEwLCAxMCk7XG5cdFx0Y3R4LmZpbGxUZXh0KHRvdGFsVGltZSwgMzAwLCAxNCk7XG5cblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0LyoqIEhhbmRsZXMgZHJhZ2dpbmcgZm9yIHNjcm9sbCBiYXIgKiovXG5cblx0dmFyIGRyYWdnaW5neCA9IG51bGw7XG5cblx0dGhpcy5vbkRvd24gPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ29uZG93bicsIGUpO1xuXG5cdFx0aWYgKHNjcm9sbFJlY3QuY29udGFpbnMoZS5vZmZzZXR4IC0gTUFSR0lOUywgZS5vZmZzZXR5IC01KSkge1xuXHRcdFx0ZHJhZ2dpbmd4ID0gc2Nyb2xsZXIubGVmdDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIHRvdGFsVGltZSA9IGRhdGEuZ2V0KCd1aTp0b3RhbFRpbWUnKS52YWx1ZTtcblx0XHR2YXIgcGl4ZWxzX3Blcl9zZWNvbmQgPSBkYXRhLmdldCgndWk6dGltZVNjYWxlJykudmFsdWU7XG5cdFx0dmFyIHcgPSB3aWR0aCAtIDIgKiBNQVJHSU5TO1xuXG5cdFx0dmFyIHQgPSAoZS5vZmZzZXR4IC0gTUFSR0lOUykgLyB3ICogdG90YWxUaW1lO1xuXHRcdC8vIHQgPSBNYXRoLm1heCgwLCB0KTtcblxuXHRcdC8vIGRhdGEuZ2V0KCd1aTpjdXJyZW50VGltZScpLnZhbHVlID0gdDtcblx0XHRkaXNwYXRjaGVyLmZpcmUoJ3RpbWUudXBkYXRlJywgdCk7XG5cdFx0XG5cdH07XG5cblx0dGhpcy5vbk1vdmUgPSBmdW5jdGlvbiBtb3ZlKGUpIHtcblx0XHRpZiAoZHJhZ2dpbmd4ICE9IG51bGwpIHtcblx0XHRcdHZhciB0b3RhbFRpbWUgPSBkYXRhLmdldCgndWk6dG90YWxUaW1lJykudmFsdWU7XG5cdFx0XHR2YXIgdyA9IHdpZHRoIC0gMiAqIE1BUkdJTlM7XG5cdFx0XHRcblx0XHRcdGRpc3BhdGNoZXIuZmlyZSgndXBkYXRlLnNjcm9sbFRpbWUnLCBcblx0XHRcdFx0KGRyYWdnaW5neCArIGUuZHgpICAvIHcgKiB0b3RhbFRpbWUpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub25Eb3duKGUpO1x0XG5cdFx0fVxuXHRcdFxuXHR9O1xuXG5cdHRoaXMub25VcCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRkcmFnZ2luZ3ggPSBudWxsO1xuXHR9XG5cblx0LyoqKiBFbmQgaGFuZGxpbmcgZm9yIHNjcm9sbGJhciAqKiovXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsQ2FudmFzOyJdfQ==
