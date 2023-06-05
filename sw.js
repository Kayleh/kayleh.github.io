/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","d6e5e4780c41fbbc129591cbb389c6e9"],["/404.html","9f7ba46f6ce018c929f615ffa28562a8"],["/404/index.html","80716016fda56e6932d9ba274c094bf7"],["/7-sorting-algorithms/index.html","85808e1b35ff311f889e3bc0eec3efa2"],["/AIO-blocking-model/index.html","aa023a1330745dfc9bccbd3bf6561737"],["/About-Snowflake-and-Consumption-Degradation/index.html","3fd498857402cbe135c622d78d423509"],["/BIO-blocking-model/index.html","2179976232c3fda387138b626e9417ab"],["/Bloom-Filter/index.html","b936c4bc56f84b1b02454983ce5581ac"],["/Boyer–Moore-majority/index.html","1072ee6c6a51c7d7e0e80545baac8c44"],["/C-algorithm/index.html","fa1daf2c51af556046360162ab7e50f2"],["/C-programming/index.html","e18ecb3c915e2f26e2c4159811a07a29"],["/CAS-&-AQS/index.html","0c9102c88312bd5e29092c01fb69209d"],["/Comparator/index.html","8629764ba842ed2d64d61f02d0a6d138"],["/Differential-array/index.html","daa550557491e1d8cba520b72c599199"],["/Download/index.html","3e313e1a3d4691fffd126092e3746a64"],["/Front-end-security/index.html","d4621bd321d113b143fe4ce8f5df4bd4"],["/Good-use-of-pointers/index.html","b831d8b623c526bf168df2b76c143985"],["/Graph-degree/index.html","4111216663a8223fa343bb1060cc3c86"],["/Greedy-Algorithm/index.html","c4eed4703b505ca3955f7a2d7c9841c5"],["/Head-First-Map/index.html","6effcb7e0bb42c896da940363748c93c"],["/Head-First-Netty/index.html","f0fd95626972ffe063cd706f2e6f9ae6"],["/Head-First-Nginx/index.html","85ec3373dbb37eac08caaf42e3f6d933"],["/Head-first-Spring/index.html","3a5c847b665c224cefc7fda7302420c1"],["/IO-model/index.html","155b9bcc98a3ccb23a277a28d5142000"],["/IO/index.html","b96edf5b6b10851e0d469dfbf871763e"],["/Implement-a-lock-based-on-ReentrantLock/index.html","51ad1af2209160b7d6b345c016127c0e"],["/Improve-Robustness-(1)/index.html","c38aeec0c6474eb2146d43338fa521ee"],["/Improve-Robustness-(2)/index.html","d5a6a34b57647e62583a8157aefac1a0"],["/Integer/index.html","82972fe3468390ef6af3c962fb2ceed4"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","0882a374ecb4572b72f94ba23633e08c"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","b85c1c0e939b75bf92e8f501e6dac06c"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","e3ba6f1460c0f4d36130379bf4f9851b"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","cfd25c12eac0e64239996874bd081371"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","0bee328f150b0307efa17451c42ffe1c"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","57be0ea4e037e6fcc3cd42c982918584"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","c51ce15d7d9a45e9419d93cff4f80e48"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","1951f31338f033f5da46a93fc6693447"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","8f08699662fb601be40c6ea19a816776"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","393ddb8cef0ee60a66c31f0dd258a6c4"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","e9e67ee8532f6646b2d1c35e314c6e49"],["/Java-network-programming/index.html","8f88096052c3e23d1384d5856408ba0d"],["/Large-number-operations/index.html","d9ba0e8297a4dea0c90a26a28928e24d"],["/MYSQL-MVCC-&-LOCK/index.html","53a36e24a634f4e7724d7f9e3978f32e"],["/MYSQL-uuid-and-page-splitting/index.html","64e5f1d78bd26349d4cae8bdcd7876fd"],["/Minimum-Spanning-Tree/index.html","8c018636bbf74a10641bd139a21f1251"],["/NIO-blocking-model/index.html","bae56eccd9b66d6339f10961e4d585f0"],["/Nacos：Configure-MySQL-data-source/index.html","c066350527c498cc3c7559e63c1082d4"],["/Native-method/index.html","02b0a46e72c7d2ddda5aeec1de74e430"],["/PriorityQueue/index.html","80931dca920de751a03b3d3174d7053a"],["/Proxy/index.html","c82263fd7056897791bb7ae994076399"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","564c975a171c8dec6cd1f4b17a41b8ff"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","d10032b0259f6190b999992903952520"],["/Reservoir-Sampling·/index.html","97932da388d011343e0ec3c99906d071"],["/SQL-injection-vulnerability/index.html","0dad9c6bb0186d5423c56a67ad151601"],["/Sandbox-security-mechanism/index.html","c5042c7eba4e0f393b64ae297849a24f"],["/Spring-Cyclic-Ependencies/index.html","d7b13166c2bc41a71839af9f78bea650"],["/SpringBoot-startup-process/index.html","86a57dcd16b67dcc32f8b5a26d69d3f7"],["/SpringSecurity/index.html","93345c20e2039cb4d29b779c4a83e7d3"],["/Thread_Pool/index.html","3358bc2851f1b9deab4c6fa1947e3519"],["/Transaction-isolation-level/index.html","2f459626e3d2597fcfe6254bf8c1fe70"],["/Unitest-framework/index.html","7c6cc6ca5946b0b99e0af92a6250afbe"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","144412e62c5843b4ea55977617377a1d"],["/about/index.html","9237e4e0acc5f413af9d168fa32e9b9c"],["/adapter-mode/index.html","a447d36c39f3369bce322d949c9f730d"],["/adjacency-matrix/index.html","c0ab7f55a75886cda805397c29e26d38"],["/adjacency-table/index.html","2f441d451123c015225a6c47d43b7c97"],["/agency-model/index.html","a1be7069e1e47a7f8890879572ccc302"],["/app-test/index.html","d362fdb95f2b369485e7b5cf669782e9"],["/appearance-mode/index.html","cfbff4e1fb19dcd115bd7731d2e3ccf5"],["/archives/2019/01/index.html","36841ec6a0976e4bb5b115357edf5e6a"],["/archives/2019/07/index.html","a4f3c8dbbb24a8020684dcdda2d4ac88"],["/archives/2019/10/index.html","e7dcf6ac273155b68d9bc372c2bf3220"],["/archives/2019/12/index.html","117ae1e64c52a4236edb027b988210d7"],["/archives/2019/index.html","cb3f186560d975737b859f05eafcfc40"],["/archives/2020/04/index.html","d62af81e7c225a27c6eb903996ab8c67"],["/archives/2020/05/index.html","c4640bf41cc0f3e6d4f4ae6d6397c1c1"],["/archives/2020/05/page/2/index.html","f8db6003913ca19c96a19afc26fe8fd9"],["/archives/2020/06/index.html","c001ac4e5f6949d0b174bd1847a95aa4"],["/archives/2020/06/page/2/index.html","860955aceaa8f62b6eb26b546079cebb"],["/archives/2020/06/page/3/index.html","615c6c47618f6d32536e048a299dd478"],["/archives/2020/06/page/4/index.html","bf7d4cefb5486b19dfee69c29d1a398d"],["/archives/2020/07/index.html","4a6c6ce89472843d62fd2749216221dc"],["/archives/2020/07/page/2/index.html","43288a1565b0eb1124213344c8cea9dd"],["/archives/2020/07/page/3/index.html","f0f50ebd1e43e275899588ed51fbdc30"],["/archives/2020/08/index.html","97ac7755d47ffbaf8a1b1214158c7009"],["/archives/2020/08/page/2/index.html","da0bb71c6d84db35bf6f30031b3c10f0"],["/archives/2020/09/index.html","7d03a2d2595cec2096ae495e22d716d8"],["/archives/2020/09/page/2/index.html","f547764d4d16169aa2bf3a5ca54f38c4"],["/archives/2020/10/index.html","1ab5a1bbe90272bfbcc506cb540e8e8b"],["/archives/2020/10/page/2/index.html","c6a2fa5fb0a4d47a0ac3f894e0ea09b2"],["/archives/2020/11/index.html","36cc3d7ddc9066ccade4d2968213fc5d"],["/archives/2020/11/page/2/index.html","c481d68e72a20a4e34bdae3a080147e8"],["/archives/2020/12/index.html","1132c35a88602bcef10ebb668cfbcfbd"],["/archives/2020/12/page/2/index.html","f8d845c1fe808b58abc48db9b7e8e634"],["/archives/2020/index.html","fc5d1955f7dbdfc31ce167637b315a3f"],["/archives/2020/page/10/index.html","d89b65ad4fb4da67133a01abae7702fa"],["/archives/2020/page/11/index.html","2444b4a5d1b9e7da3db28ff1f0328a1b"],["/archives/2020/page/12/index.html","9fbabe39d69c2561aa9cc2080886dc5e"],["/archives/2020/page/13/index.html","b77a22dad7c61e8d6b76b4221e8fba24"],["/archives/2020/page/14/index.html","2f68b7f9462cf552d21d881ff8630514"],["/archives/2020/page/15/index.html","b7ffe70a84d99aba38c449e738db4704"],["/archives/2020/page/16/index.html","9f68242ba972baf1f0b8b2e345ea17f0"],["/archives/2020/page/2/index.html","47eee884bfb99c0c5d201a33af224f49"],["/archives/2020/page/3/index.html","a8c47250da5a5f2673ae8f875a06d356"],["/archives/2020/page/4/index.html","6970ea93c61778159fdcd52373a34dac"],["/archives/2020/page/5/index.html","fb0c78f9397a3d38a8bcc3a55ddb0b01"],["/archives/2020/page/6/index.html","8b880b3695cc0c2df1bbab4da6b2af9c"],["/archives/2020/page/7/index.html","0b04ebcd8135570ae99832de3f006467"],["/archives/2020/page/8/index.html","541009d581021f485b27091b1e45a065"],["/archives/2020/page/9/index.html","39c2cbf581ed1dd89ce3bdf0435a7d2a"],["/archives/2021/01/index.html","82547832bedf659be4182fb895e077de"],["/archives/2021/02/index.html","f898c76dbf49a36ac0c60f0ecacbcd32"],["/archives/2021/03/index.html","2a1e4b2d24ee215e80fa3abec62b35f2"],["/archives/2021/04/index.html","06d4ee1a698a376ada2178ff039081fd"],["/archives/2021/04/page/2/index.html","b3b4088b55277b5f7b11a95f80afc96d"],["/archives/2021/05/index.html","206c1d0ff7cc20cd1ac450159816af4b"],["/archives/2021/06/index.html","aa91887bc3cfb440d227430cddaf4da0"],["/archives/2021/07/index.html","10aa23e00689b710d10481f9f11ee6de"],["/archives/2021/08/index.html","65279a1a94f03570e008f6fedc1a6de0"],["/archives/2021/09/index.html","74fe3044bf6c53314ddd4009a19bde90"],["/archives/2021/10/index.html","cebdf682d6cfb0abdb4e49f526c1cb06"],["/archives/2021/11/index.html","e8550c4471bd6c2a91d8a810d2e87848"],["/archives/2021/12/index.html","2286d82ad222ad2f55035a8db8c845b7"],["/archives/2021/index.html","c9726a88cafaf101ca3e684862e888ff"],["/archives/2021/page/2/index.html","95f4b2e6434e422895ab4201f5f4bfe3"],["/archives/2021/page/3/index.html","1e6e778c86ae1acb026468b1e2ad15ab"],["/archives/2021/page/4/index.html","aa208e7688e6b45aa150032865a6f2c6"],["/archives/2021/page/5/index.html","53f744e4886f1c6808b2528d6e1999c9"],["/archives/2021/page/6/index.html","c6628dbb4618937681a30ad18098f8bb"],["/archives/2022/01/index.html","ddb6c4d0c8e277bcd11de4b15f647d8b"],["/archives/2022/02/index.html","b97e32eb9d538932cb42a10dbe01e663"],["/archives/2022/03/index.html","9cbf52b6b9864ff7c7ba5db2fda57bb2"],["/archives/2022/04/index.html","0c26ac65d61e89c6ca11b409480557be"],["/archives/2022/05/index.html","2b28428a5cf630541512ee12dea122ae"],["/archives/2022/08/index.html","abfdba56fa03086ed2a280330a87e036"],["/archives/2022/10/index.html","f4e24b0b72c42ba9a14e05a6bd7d81e0"],["/archives/2022/11/index.html","2884753f1e6ecbb7ce26cfd10b145d47"],["/archives/2022/index.html","aced8bff1a647068412bfd3e03fe5636"],["/archives/2022/page/2/index.html","5d6abc01ec63926057827ba5bce03142"],["/archives/2023/04/index.html","c985b8d531592aede4db595ad8ac23d7"],["/archives/2023/index.html","ed94bdd57f71f2c4699e4ca3d68082b9"],["/archives/index.html","e88970a735b565f82a5c3f4e789fc0bc"],["/archives/page/10/index.html","fbc1b1d4266e8383bbe3a90399c6a33b"],["/archives/page/11/index.html","58d34b384a58e9b1caccfea6d5c89eb2"],["/archives/page/12/index.html","1d262629b1d88d02db14c586450fe946"],["/archives/page/13/index.html","35bd53587b9de5bc1581e2c6e6c5cd58"],["/archives/page/14/index.html","cc1d28517459814aad2c35101a69b140"],["/archives/page/15/index.html","2dfd7441ba667473ea01d1413f0a0222"],["/archives/page/16/index.html","3f003db405356629aced351e9f36a43b"],["/archives/page/17/index.html","b09576206c2a2f75449e27c3957f3733"],["/archives/page/18/index.html","6f9d64dbc149a920d5d105675fef6384"],["/archives/page/19/index.html","331f73dc2d62fd61b95395f7f26c8adf"],["/archives/page/2/index.html","bcb0722a7265a5e872206f172af66df1"],["/archives/page/20/index.html","948ce1026a2a3af622289e91923a6659"],["/archives/page/21/index.html","d41898b3150a0468bc23bdaa8bcd5b2f"],["/archives/page/22/index.html","18bc964b6f1af192619d6469a33fb44d"],["/archives/page/23/index.html","001ea40b8bdbf8d96fd9b521ac806a78"],["/archives/page/24/index.html","285026522a80d3ce89019e0e1ae83812"],["/archives/page/3/index.html","41526e0e5e2ee6445b951ef77f13348c"],["/archives/page/4/index.html","0a66e3f2e9cd018789853cfcb936a7d9"],["/archives/page/5/index.html","922d040bfe9dcbb8352ffb59c813674d"],["/archives/page/6/index.html","a16edc5e7d2df037255df768e624102e"],["/archives/page/7/index.html","67f5c2258c0f5456121ac103870d6567"],["/archives/page/8/index.html","161c6c74cbc8560dad73078a02cade2d"],["/archives/page/9/index.html","e44d4a2707f6b4662efd65a02d56513c"],["/array/index.html","8abfc8b0d28f3e1f90a0cccebd98a5ac"],["/automated-test-katalon/index.html","ef5e4c6ac46a327326024e2f2af7c072"],["/automated-test-selenium/index.html","e2b516878788dccfcb7012a24419658f"],["/back-to-table-query/index.html","f8e4f5636d85e3f1ef8e5c536736b391"],["/binary-search-algorithm/index.html","10469faf1fdaff1b898ada04efaf9991"],["/binary-sort-tree/index.html","6c6b8e4b44171d1607127c0186a09a27"],["/bionioaio/index.html","09908d40a1a18e0cea5713dbb40d4d2f"],["/bridge-mode/index.html","d46279c9c65f4a3d2e4c335e8ad37504"],["/builder/index.html","c1e8dd0989469615fa8c074146173e58"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","598b06102f48196a86613cda0e73286a"],["/cache/index.html","3efd332314a7ba506fd3c4a8a1beb08e"],["/categories/C/index.html","9273d8888f335eca134cb3d68c1bbb9d"],["/categories/SpringMVC/index.html","3005c04a51278e8bd9aa59b1614e88bf"],["/categories/categories.html","933f9342ec22742e6c12bc97266b1ca2"],["/categories/index.html","0d50d4dae8db959eade79eafe85f9152"],["/categories/linux/index.html","69acdff70c9ac557f2f2034c32eac6d7"],["/categories/分布式/index.html","d66890f47727bf2c16ee88ad84c430e8"],["/categories/分布式/page/2/index.html","536c92504c4b65d472addf7bd6a11c4f"],["/categories/设计模式/index.html","704657001979230a2d4ebf914f1bc081"],["/categories/设计模式/page/2/index.html","9ac09adba3e272388d82cdf09553fdd6"],["/categories/高数/index.html","e28832f7d7e1ad253bb0138a9bbe02e3"],["/chain-of-responsibility-model/index.html","5d194b46a0ac644b6e74ee6f066a5889"],["/charity/index.html","bbed8e31a173812dd3556bca5f8c73f2"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","b7a8b48f8dec94348db5c1a4844804f8"],["/combination-mode/index.html","05bacf6029874c9f43e81b4450177923"],["/command-mode/index.html","952a4cfbe2f1d3f19e000adb98d22280"],["/common-commands-of-unix/index.html","2bb0443ae065219eafe6ef7c59f066bf"],["/computer-network/index.html","b13df9768ac3905850d7f07990d857c2"],["/concurrency-principle/index.html","a04ae5daa869f3545287ee654e09c4d3"],["/continuous/index.html","0aaffd492d02c9b0d5ebc08d2a3efdf6"],["/contract/index.html","da9e01a8974baeaf1f17e1541f6d3379"],["/create/index.html","d692531b0e40660c7846e24d413d3583"],["/css/main.css","1ac13e81dda1c8ff68be26adad70772e"],["/cycle-structure-programming/index.html","eceaafd124c7f3e708f0b7a2a58d56b1"],["/data-structures-and-algorithms/index.html","de1c5d584f9d10167f3ead24dbd2ed3f"],["/deb/index.html","1f6aa597c4a0a47bf19ed84ab3793420"],["/decorator-mode/index.html","88b76e2082007f155db52fbbcf4a156a"],["/definite-integral/index.html","27f7c80d3f694bfaf8883ebb55301cc1"],["/dependence-reversal-principle/index.html","8ca3cbbd34fdcf946ccf8bd3795deb64"],["/derivative/index.html","f871e05457c09d6af5843ea2448d6f3a"],["/design-patterns/index.html","d1993ef812ec1e8ca24bba1f2418448c"],["/dic-algorithm/index.html","74f7c7967ffa32a6d5810650e2086dca"],["/differential-equation/index.html","6877d47f9e7bd33ffc56e1636c6f8ffd"],["/differential/index.html","be03ce58733e1ced88401b5816673a0f"],["/dimits-law/index.html","8038b6b089391e13c18fb1b65b5c86db"],["/distributed-lock/index.html","b429784abe64f84088c39901b580e45a"],["/docker-virtualized-container/index.html","d5a52317d60378d920ba6adb63548810"],["/double-integral/index.html","96e2f1f821cf2c6fcbf21899b07d636e"],["/dp-array/index.html","7e3cb8086aefaa370ee304f91da899e0"],["/dynamic-array/index.html","cc9e5db477f897823bc0b6cbb45103f4"],["/dynamic-programming/index.html","5f7523796497d53fd798a9f4149e9a77"],["/edgeset-array/index.html","e870ee73ceb3c380c48fb7eae6e4ea7c"],["/encoding-algorithm/index.html","2222a10bed2a14949a948f8284198f91"],["/eureka-service-registration-and-discovery/index.html","3006fe3b52b2e0bd109dc2b0ca80584d"],["/extreme-value-and-maximum-value/index.html","0570e25411e6a2d6d9ebe211f9c11942"],["/factory-design-pattern/index.html","e70c9dd120f0168cdb03c54262b11e90"],["/file-input-and-output/index.html","f33ab81fad5219ca0c1075c96229e428"],["/flyweight-model/index.html","ea0d9e4fbe3af1be8871e18b30d2c358"],["/friends/index.html","5ee182b7dfc626c2370908ea4540c880"],["/function-graphing/index.html","3793b18116b66d9b39e2d5754e2b0f73"],["/gateway-service-current-limit/index.html","85ee3ea7001a03d3cf27fbc3e75f43ae"],["/gc/index.html","8d71ba2a850336d014a1e12357a90f82"],["/generalized-integral/index.html","c1f6552a9cffdb01a3740db97d89ee02"],["/google8102e2f35ce9e391.html","241deb0df4f19f39f026276bc4f83925"],["/gulp-compresses-static-resources/index.html","6e45141dd11dca5bbc7a6f3ff86809e2"],["/hash-algorithm/index.html","770e4e7dcd8cea95b103a763a9fe7556"],["/head-first-JVM(1)/index.html","fd75ce8cf0841e95748b9d584cb46a24"],["/head-first-JVM(2)/index.html","14681d3f3e73ad99fbc8295dcf781ef3"],["/head-first-JVM(3)/index.html","45350a29b616acade94a2e08ef41508b"],["/head-first-JVM(4)/index.html","4e5dd274da493a5f0b3030a7668fa714"],["/head-first-SpringSecurity/index.html","0b550900f584ec80dca33baf2fb96348"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","3ddddfde86c19ddd5e8257b723979e26"],["/heap-sort/index.html","6e39e912cb521f5fe0329327d4fac309"],["/http/index.html","64556af6504b648fb35b4a1736420c7e"],["/huisu-algorithm/index.html","cc096122d1c373998986c40142b71dac"],["/indefinite-integral/index.html","7a236a321e92e64b1f6eb964daf2b88c"],["/index.html","8743453fb060b62b2651c91e08eb3b87"],["/infinitesimal-and-infinite/index.html","0b38fe068b2ff677afb4758aecb86d76"],["/interface-isolation-principle/index.html","6893ac3920edaeccdd4d4a15d8b23971"],["/interface-test/index.html","ae7c15e8367677b787f72a29e1a6666c"],["/intermediary-model/index.html","146c41e3eb97aeeb8ef6ac69f1e369b0"],["/interpolation-search-algorithm/index.html","2b2655146d3342f711717bf2ded860c0"],["/interpreter-mode/index.html","bf38d542103c7b82a6ffed071a32e9db"],["/introduction-to-computer-network/index.html","cd812d0a45a9e596d7b260822a47e323"],["/introduction-to-operating-system/index.html","980d865a501ad9d4f815e24c1bc17fa6"],["/inversion-of-control/index.html","d539739ff1e5d054b64566894dc42db6"],["/io/index.html","b26cb2909aa8ef51bc1a288d1225fb6e"],["/iterator-mode/index.html","4b65c496c847be6b00b9643598dddb7b"],["/j2ee/index.html","47ca11b3347029a61892c5dc10252a58"],["/j2se/index.html","dc2073ba3e80249e7a6842265100bb00"],["/java.lang.String/index.html","3cc1f184f1b6f85a9edc6280db570887"],["/jdbc/index.html","88ecc970402552b5aba77e7f6e3c2a3d"],["/jdk/index.html","2228c0d19eccb90efbb469c97e32d85a"],["/jmm-memory-model/index.html","f443578678df93c05f9ca329400b83a3"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","8d79d4cc9ab6f1088d4fbbd819d16ee8"],["/jvm-method-inline/index.html","bfe27f4b663f122e2327c6ed3eb2470c"],["/jvm/index.html","44c0a2aafdbb4ea45447dad19928eb07"],["/law-of-robida/index.html","65d84cf67add8dcf1819b6e37ba8c24f"],["/limit/index.html","bc4cb7b394b774094a365f802ac03344"],["/linear-search-algorithm/index.html","51a7dc17a9e9b178d5b9377fe3769b68"],["/link/index.html","5da22dd255c1f85fd9dcf66010f7145c"],["/linked-forward-star/index.html","10dae192a4a643d98ad3899674d26316"],["/linked-list/index.html","f50a847b35a8cc91bbd48cca2be17a4b"],["/linux/index.html","ee5b2ec4a4a21da81f4ad165a275a6e2"],["/liskov-substitution-principle/index.html","f094e083a7f0a70c6e670e85d7129496"],["/lock/index.html","fbcaccb42ee16469b84a48bf1c554c5d"],["/lru-cache/index.html","4882aaf20a510a22bd527ba59b861599"],["/maogai/index.html","dde35dc602624993d6bdabb7b89ba62f"],["/memo-mode/index.html","e79617fd703151805324eac8ff3100ff"],["/monotonicity-and-convexity-of-functions/index.html","b3a4fc209fd0915d3022ec388b9b6e00"],["/multi-function/index.html","e8227bcab1057501fc34757e8518feff"],["/multithreading/index.html","7efb419c1cda32500e4560cd025942f2"],["/mvc/index.html","9543aca963b993c934cbe63354f48600"],["/mybatis-cache/index.html","8d443180761ebbfa2262fe407e00194c"],["/mybatis/index.html","88b687cc23e23fbff717082d660f7b56"],["/mysql-index-wrong/index.html","e906967592d109686e301d46378a06b4"],["/mysql-struct/index.html","f4e4a314c814a1c948f6f11b0d5420a5"],["/mysql/index.html","b1639970c5219f471f0ac3d9dbe3e4f9"],["/nacos-service-registration-and-configuration-center/index.html","281443772ccd8f7050f7dd44948e2978"],["/null/index.html","7cc3690c4741b4464e18a58b030e9b04"],["/objectoriented/index.html","a9c350b9520ee6c137042dfcd7cf82d3"],["/observer-mode/index.html","ccb358ad2bbce594e245381309b43b84"],["/off-heap/index.html","aab0cb034221d18b1959630eedf7d79c"],["/operating-system/index.html","01a899b783b95344419342ddeda4b8f1"],["/page/10/index.html","bda46a09c1d5361a6653c0c275355caf"],["/page/11/index.html","fba3fef52b51b71722fa203a7a637e12"],["/page/12/index.html","96e0abb7ce38aaad2084a16d9252465c"],["/page/13/index.html","7538ee103c62d9837ad9e3cc93afd3c3"],["/page/14/index.html","4f163e07678cfa944903e534fc141f84"],["/page/15/index.html","71cd25d5a69144d2ef08fb86f81bfcb4"],["/page/16/index.html","1fbf099764ec7b52d96c7f3505e8ba22"],["/page/17/index.html","466d612339190dbe8f5d85c873006aa0"],["/page/18/index.html","5aedf4b3fff627d74acff1e4989e5240"],["/page/19/index.html","a72197a1852918dcf89e5a708b0da7a9"],["/page/2/index.html","9b1aacb2fc89faa83c58667504c72a59"],["/page/20/index.html","89cb2943b1ddd98f36299f68d3d9e9fb"],["/page/21/index.html","5867793324a3738f4442f6325fde97aa"],["/page/22/index.html","67efc58b23c7026899dfc36ee5f0734e"],["/page/23/index.html","cade1ca13980d3847cbd231fd338f1ce"],["/page/24/index.html","b93d7eddb95f05c4be6e81a6df74b15d"],["/page/3/index.html","2f3ab53eb38e243c94686c8aea8b3575"],["/page/4/index.html","bb6f7609d89684b4a0ed7c50b47fcb30"],["/page/5/index.html","35ebecdfdb42cd121392c2b27d6d8cef"],["/page/6/index.html","660f361c264df14fbdf8b7a60f805d80"],["/page/7/index.html","2c8874afdf86edafb646a04539e5c0bf"],["/page/8/index.html","1e6610a9442745eca974fa432ae3e19d"],["/page/9/index.html","2e1307860ad498f9e246b1ffbf5697a8"],["/palindrome/index.html","42facf7215b298a417ed8d3d1e17effe"],["/partial-derivative/index.html","19fa11e4787078c6d42303ceeeceb021"],["/pass-by-value/index.html","1cfd2b59c74f77233ba8ac82d0a83742"],["/pictrue-bed/index.html","ed2233cefe5e12664a8b0ff91c4fbddb"],["/principle-of-opening-and-closing/index.html","51c02ed5abaed6fbd4ffcb80daae882d"],["/principles-of-computer-organization/index.html","4f31139139973948e25472d404cd6dc8"],["/program-test/index.html","f120bfc3ce01994fa27dc32a307dc20b"],["/prototype/index.html","c44ca026046ffb186d7a5386de2256d9"],["/queue/index.html","a5712cac2ad68faf8bbb1e941f6c1a15"],["/random-weight-distribution/index.html","910ed51fae0045458927d078789f668d"],["/realize-modular-programming-with-functions/index.html","57247022c98de8baf10a1b038ecf53ba"],["/redis/index.html","a0f17a72c04a93df70ab79f2085276ca"],["/reflection/index.html","e52ac7132cecc13fe64344b4888491b3"],["/ribbon-load-balancing-service-call-degradation/index.html","7ff50fb5f8bc156544b69edbb88b6833"],["/round-dp-algorithm/index.html","3f1b6d5affc50296bb46e841657b410e"],["/seata-handles-distributed-transactions/index.html","e061b655bcd11ec7b39ab0fe5594a112"],["/select-structure-programming/index.html","03b57eb4272d103c1c3e75d5415e127b"],["/sentinel-realizes-fusing-and-current-limiting/index.html","16badfbb05a26e1c02e7a7619cb16af8"],["/sequential-programming/index.html","502e2cb50aa5b359b828482e880e410a"],["/series/index.html","ba841483152824a9ad91b2ef59ec289e"],["/service-worker.js","302349ba6e321010bbb7c73a9568dcc8"],["/single-point-login/index.html","39b377de992ab6aee661d2456f3da9e7"],["/single-responsibility-principle/index.html","a055142dfd7a10c1fbab839154bc1fa2"],["/singleton-mode/index.html","d7125378a209413149e3859f731c7a24"],["/slidingWindow/index.html","2e5b3a39a4d61a911bf99fc4872d4424"],["/snowflake-distributed-id-algorithm/index.html","37dad4a8a53d7e42715388bf36ee7a22"],["/sparsearray/index.html","4d0f75cd25be300b78a3c6c9f40c46d7"],["/spring-and-jwt/index.html","5040585680b860cc511bb7709404321e"],["/spring-architecture/index.html","d215e0bfe2c884f244ccd7085b265d1e"],["/spring-relate/index.html","1902a0276843b83bb0355a446d994d5a"],["/spring-springmvc-mybatis-integration/index.html","6dd69bb705a5e09df434e127b2af0476"],["/spring/index.html","e93b8421dbf7bd68b6ea52922a457dbb"],["/springcloud-alibaba/index.html","acc65e859487d09f091b4825fd6a5337"],["/springcloud-bus-message/index.html","b5321bce13532e38325ae502480d1fa4"],["/springcloud-config-distributed-configuration-center/index.html","1cf3472bfb3f962541e5462443cfe49a"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","61699a537c8b8db752f3387161a05965"],["/springcloud-stream-message-driver/index.html","8108f0e937cf1a5294786b44a703bef6"],["/springcloud/index.html","fb20f6196739d9940623872fbaf4f3fc"],["/springmvc-environment-construction/index.html","1765e130748ee1c7b3f5132b2930b280"],["/springmvc-work-stream/index.html","ccbd00bfbb3c4ebfd2f711e8c9328a9a"],["/sql-injection-attacks/index.html","ba51750f051c9ec0f61af558b062794f"],["/stack-simulation-iteration/index.html","bb99a75e96213ede8d052a4d9aca66d6"],["/stack/index.html","d1f26eedd4262875ada87af6bbe24392"],["/state-mode/index.html","e621de35760728ce7eaab631039849fa"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","62822a9a6f369bb2a7c117c3564734ff"],["/strategy-mode/index.html","0ea7118c426eb33aaff55a29b4bf3211"],["/sw-register.js","adfe153155046890738b51a46fd7f0b3"],["/synthetic-reuse-principle/index.html","dce0ee8254a6a06093f344bf258d3cae"],["/tags/C/index.html","dae1b3731a105b999196b46ab4e80774"],["/tags/C/page/2/index.html","e50fc95421c302cc6c335afa43aac238"],["/tags/Concurrency/index.html","0bac0e6df24b2a67f4334dd2f7a811dd"],["/tags/DesignPatterns/index.html","589339d7abf49de1486a262dfbe88cd5"],["/tags/DesignPatterns/page/2/index.html","fd07d5aeddbd004a8a09006c58bf9521"],["/tags/DesignPatterns/page/3/index.html","fe16d7b26d21c743ff7be06688a91891"],["/tags/DistributedMicroservices/index.html","a353d7c3e4a8f6957afa1fdce06125d1"],["/tags/DistributedMicroservices/page/2/index.html","1167e365efdcb7726400bdeb9b8b7421"],["/tags/Interview/index.html","cc9f68edb839c04b9d083c2e16d83cb3"],["/tags/Interview/page/2/index.html","7cc79f829a8c4a3fd6a7181b36e143db"],["/tags/JVM/index.html","4d78103cbc689f1f6f2469c65ccc3e00"],["/tags/Operating-Systems/index.html","dafd1aab873e497c826848f401d06f09"],["/tags/about/index.html","af8dffed55eaf72f8d2f33a906e9d663"],["/tags/ad/index.html","b79bad3a4977c668405efe3066825077"],["/tags/algorithm/index.html","f070949717bd81bac282bacf974ddb2d"],["/tags/algorithm/page/2/index.html","1f7371fd7c6eb9890e51c9c94f5d9a2d"],["/tags/algorithm/page/3/index.html","5a80916f2a2b79eb1f24640802b3c9ae"],["/tags/algorithm/page/4/index.html","71bca8107718b916bdf22f31436e9b05"],["/tags/bug/index.html","c952584ce7573fe233a71f323781c633"],["/tags/computer/index.html","cdb955f3bbc9e4c41a9aaa04656d94ab"],["/tags/data-structure/index.html","0e8218a7a8d81b6946e1d4a1cefca36a"],["/tags/docker/index.html","1401b8f3345798f19c15f8971482bc08"],["/tags/famework/index.html","d8ddbed33e8ac4e22b31b7e63a667b68"],["/tags/frame/index.html","719071cf1286e2be153fea97f40dc4aa"],["/tags/frame/page/2/index.html","8f8c5a584db1756985be97d2187db09d"],["/tags/front/index.html","635081fff3206eff5240280b49f6f24d"],["/tags/index.html","473b7d164a7e4487a1eab41f1c825654"],["/tags/interview/index.html","087f60f58171cd23595ca9e5cb73878b"],["/tags/io/index.html","a5d9a0021a2b94cc100889bd80d35576"],["/tags/java/index.html","d7aaf6249b0c6c084366526ca3175721"],["/tags/jdk/index.html","63350bbbe14c39d7671a45ba82af28ff"],["/tags/jvm/index.html","96a79fe409005f7bf641c0037204e08c"],["/tags/linux/index.html","9b8028e2bc738036dd4f484574131012"],["/tags/maintain/index.html","07a98c165d2399e24ce408351cfc9e90"],["/tags/maogai/index.html","4a59caf20f355d21c7a26fe99f0bb69a"],["/tags/math/index.html","596e90190424f86dabaf1e10573d5f08"],["/tags/math/page/2/index.html","068c54210daf05707d3b71086883903b"],["/tags/middleware/index.html","f80993abe3ada9c32c5e90bde65437ae"],["/tags/mysql/index.html","3106b32f2abb5028539050e8df68489c"],["/tags/network/index.html","62744e346762853604353c313cc354b0"],["/tags/project/index.html","6bbfdfb6361527aedb5d0e5efa0916aa"],["/tags/security/index.html","41bcb6c7442640bd1d9aedaee45f6c7c"],["/tags/sql/index.html","1e00f07964b6065a93ae3a9bd8d95ffa"],["/tags/test/index.html","64c6f6f2daeacfcc0226a2599ec3e9ed"],["/tags/think/index.html","2af2fabdb49effd545368cff1cb87981"],["/tcpip/index.html","2453b5bd1f4dc3e42ba25ecaf4983438"],["/template-method/index.html","fd6074f2444738c8b47a92cbcb4655bc"],["/test-case/index.html","309cc742056b4257367c90a9bc19cd72"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","baddf8c1a87bb15cedec94a18a06b8f7"],["/thread/index.html","8f09bfea4637b285f3d7b7dcc2262714"],["/tj-horse-racing/index.html","1e7cac182319fdcfa5908ba3cf719783"],["/topoSorting/index.html","248ff575289a51009f8fee63eea84a96"],["/traffic-monetizationaccess-to-google-adsense/index.html","15c7abfa86d05f701bd2d54af8eba495"],["/txCharity/index.html","46d249d4292ed88c7a734458a92eb1ad"],["/ubuntu-set-ip/index.html","6a83dd0b7448dbc00bd5670a71cfe569"],["/undefined/index.html","982cf1580f82a675ec5847b7f8ea2ba8"],["/use-arrays-to-process-batch-data/index.html","1e1dbb66ab027c120eb6fe35e25356df"],["/use-of-springmvcmodelattribute/index.html","0783349766b6b9e878c0ba0d9404412c"],["/users-create-data-types-themselves/index.html","91f13be6ae06bf6f0758a56551db7820"],["/visitor-mode/index.html","ac1480deefb61ebdb33c7205df359704"],["/what-is-milk-and-why-is-group-wise/index.html","083d40d9a38ba0bf201b2ad8f67eac1b"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","82fbd28c81f7ef142bbffc1f280bddb3"],["/xss-crosssite-scripting-attack/index.html","8430c4289a01bcd7a0050f92fac0ec0d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
