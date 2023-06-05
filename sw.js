/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","3ab90fb10e951c01393dbe1c0063ca2a"],["/404.html","1a0cb0735561a3e6c28f16ab92c9e8cd"],["/404/index.html","de88820601b6476bd6ee053a14da127e"],["/7-sorting-algorithms/index.html","ef9b4b70893eb4979cad042a3bf99832"],["/AIO-blocking-model/index.html","ae8b51c1f4fb4d5d8f785ca4a696732c"],["/About-Snowflake-and-Consumption-Degradation/index.html","27643b3445601653846f0937e020c938"],["/BIO-blocking-model/index.html","1fad248135845bf2e856ed49fe03bc11"],["/Bloom-Filter/index.html","264e157f0e72528384d54e27ac2f14a3"],["/Boyer–Moore-majority/index.html","c9eac63141652339b3c79159e3b5877b"],["/C-algorithm/index.html","da86eac5a93ddde289a8744b4ee8e39d"],["/C-programming/index.html","947ebcdee08b897433fa539bb5a3465c"],["/CAS-&-AQS/index.html","1ceea84f384f127838b53618b46c3454"],["/Comparator/index.html","107be1efc9fc794d35f5cbd99bcb4a06"],["/Differential-array/index.html","a90291e81e2cbdfa1f879a1143ce45ae"],["/Download/index.html","6065b3778ba9414e57eb65552ebd8f25"],["/Front-end-security/index.html","07ee7d447e95079266c01eeecc87c8b4"],["/Good-use-of-pointers/index.html","8013fe03506767bb44f435a917acf313"],["/Graph-degree/index.html","b996e5e6a2455fc52597d46dc5d1b742"],["/Greedy-Algorithm/index.html","6ebb42bcab6a7f316684a7d98eb27826"],["/Head-First-Map/index.html","1f47380ee35e99c2bca80a18dbb9ba5b"],["/Head-First-Netty/index.html","fa9e8739c74a57aa2e81f47614f1e7dd"],["/Head-First-Nginx/index.html","1899f62bfa546de0abc9e8ae5a7e3690"],["/Head-first-Spring/index.html","22a833eb117afd017174db246b8bb134"],["/IO-model/index.html","0cd02be69bd91ce6dfe95e73ec1a8159"],["/IO/index.html","655ca56553885002e6e331f6eff2f9e7"],["/Implement-a-lock-based-on-ReentrantLock/index.html","37038d91ba7d2a44a8ef2714f561c566"],["/Improve-Robustness-(1)/index.html","584e2f2d21621163ad7cd6b6c8c07d6b"],["/Improve-Robustness-(2)/index.html","cf0774699d92a3954d2302181af37d4c"],["/Integer/index.html","9df0dada70b47001d1c6ec1edfc457b8"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","d58594692f11c354ab087043cc964b57"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","74b7c28a495f23629b313900e1efd610"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","690d017c8e8cdf1d82d17b741102dfb5"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","3c7d044948f61a7b2d520a23e3008a99"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","bdbaf93be6db8534c4bf803c9bec98a0"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","4af29435b804b94b9b518fd889569114"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","a726c60aa063de6fd609340de8fff7c1"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","2ef5c0597336075aa9cdca9460257af7"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","576bedaf49de5432938439dc5e760d2f"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","6b04cda69c04f48227257d7de2215b6e"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","bd2be16bde34be48ecfae376c2465dbb"],["/Java-network-programming/index.html","95d6773547574c15d2a032afedacab6f"],["/Large-number-operations/index.html","2513c0c31b7f2525be8c50af95adc0b2"],["/MYSQL-MVCC-&-LOCK/index.html","d7b03568ecadac778bf3824d232ab6e1"],["/MYSQL-uuid-and-page-splitting/index.html","8221c5344b3e5489e3ee0cb52c3c7f74"],["/Minimum-Spanning-Tree/index.html","39894c01d1902d973ec822ce5b115cc9"],["/NIO-blocking-model/index.html","bb56e961cd1b1b9ae0146d2f81b3d406"],["/Nacos：Configure-MySQL-data-source/index.html","286b74ca7e184fae5aaf15fc745b0b35"],["/Native-method/index.html","5d1bbddaa1059710d5c19d019e46c942"],["/PriorityQueue/index.html","b6be0608516be4550624c8821affea46"],["/Proxy/index.html","f63acfde77d6c4cf3f52cbacce4d29c0"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","60b45643516fa09ef6e74b8380639528"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","9d125b62a332c4a019daea7715da81be"],["/Reservoir-Sampling·/index.html","b688f9d2424f3bc606acc7e2f84cd60e"],["/SQL-injection-vulnerability/index.html","ef71a543e3f679ef55453edbc533b29a"],["/Sandbox-security-mechanism/index.html","c8d39aa0b98646a167d069f43e389eb1"],["/Spring-Cyclic-Ependencies/index.html","42f5686e0a6550839054f340a9bf66ca"],["/SpringBoot-startup-process/index.html","732e484ecd416f3ee8fe0d9d8f20804f"],["/SpringSecurity/index.html","99403466c01ff1bad60c07e9ee7c1e01"],["/Thread_Pool/index.html","12edd77923373a5be390ecf2af4c22b2"],["/Transaction-isolation-level/index.html","b25e5950bcf49ffae0ff0183c521f6f6"],["/Unitest-framework/index.html","a43a73709403905da4deb45ab60ca4ab"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","f380eff9286e88bfdc88231cf1910d90"],["/about/index.html","f96002bd500f3f878f21ece6bbcccd9b"],["/adapter-mode/index.html","e403df1ef2a646240c3a127acaf2dd6e"],["/adjacency-matrix/index.html","2385eb0d52a102236406001c1c962f3c"],["/adjacency-table/index.html","f90e840c4507be98777fa1deebb436a0"],["/agency-model/index.html","11ec575fd656dfd36ca1e9aff1ceec94"],["/app-test/index.html","0c96778871a34931588c97281454143c"],["/appearance-mode/index.html","fd71b640f44275f3d5a931d4d5951383"],["/archives/2019/01/index.html","c8cddce925511daf40244ed9748ed3aa"],["/archives/2019/07/index.html","ef225bf8431eb0575cb341701bd865a3"],["/archives/2019/10/index.html","c8e45e5ebee72a590f40690dda07eb9d"],["/archives/2019/12/index.html","d638bb9db11aa3026f1ad4f570ea9090"],["/archives/2019/index.html","19a0f5653e8157f73b2f455f6076b63c"],["/archives/2020/04/index.html","96d6ac6282810cea70a22d213c89f83f"],["/archives/2020/05/index.html","d5eeb489bc156bdcc454ff15930ee674"],["/archives/2020/05/page/2/index.html","b7dc5216ab44b646d98b70af5e7201cd"],["/archives/2020/06/index.html","3944af749be0e69a30cc347c242e7b06"],["/archives/2020/06/page/2/index.html","c26c65204853eaed2230215cc7cf3cd1"],["/archives/2020/06/page/3/index.html","639e4ed1f806c256457a73f0d1df3211"],["/archives/2020/06/page/4/index.html","71f3431cfce448c03a7da2969dfa16b5"],["/archives/2020/07/index.html","13056ba5313624ce83006abe17a94c95"],["/archives/2020/07/page/2/index.html","f6687fa0b6ddfa9c96e244209016108e"],["/archives/2020/07/page/3/index.html","3db471820ba89aaf59f0ee016adf17ea"],["/archives/2020/08/index.html","d422030601bef657714ff0ffbac3b067"],["/archives/2020/08/page/2/index.html","a23d568c88176f484c93a89d3cb90acf"],["/archives/2020/09/index.html","9d7c9718a108bfd822aea2c64070e48f"],["/archives/2020/09/page/2/index.html","44ee86dcabe7fee6cd8f7ac13c54d1ae"],["/archives/2020/10/index.html","30088a1d6bb38bd1efbd3527995cc393"],["/archives/2020/10/page/2/index.html","510607e2286b5d26efec735f1b76b631"],["/archives/2020/11/index.html","e38bca605f9ed04f859cac8a17a66d13"],["/archives/2020/11/page/2/index.html","772facc1f16c1d1a78f87eade84fdb20"],["/archives/2020/12/index.html","63a5f9e6dad601fc7e0492103a51b330"],["/archives/2020/12/page/2/index.html","698b5d80278ee5a787ecdc428a6bdf7f"],["/archives/2020/index.html","26f58c66b019d3fbfc8e5b890394cf03"],["/archives/2020/page/10/index.html","b2190c7249b30a89c9427946aedd27ae"],["/archives/2020/page/11/index.html","8b47f207a7ec84c30cd524e977f2782c"],["/archives/2020/page/12/index.html","4d82dcb1a027c8db928d9e054b03283b"],["/archives/2020/page/13/index.html","e08116ec1b681862b619b27c812b114d"],["/archives/2020/page/14/index.html","39adccc00a149b772311e9c973e513af"],["/archives/2020/page/15/index.html","a8792d98750fd985d9501848df3e85bb"],["/archives/2020/page/16/index.html","b6050247223823ed02f31a0332c638c0"],["/archives/2020/page/2/index.html","42375e68850bd50a49fb6a73d5d083bc"],["/archives/2020/page/3/index.html","6730131aef446971c7c492f62238684d"],["/archives/2020/page/4/index.html","90388e42d9697efdce252f68883050cd"],["/archives/2020/page/5/index.html","d4d61697fd29de6b85a0be0170895020"],["/archives/2020/page/6/index.html","eb7511845540a8fd76ed77bbc4d8caec"],["/archives/2020/page/7/index.html","bf7b2d67faf8a72a8d885b4581ff231f"],["/archives/2020/page/8/index.html","90598305914df98cf10fd6946ad71d5c"],["/archives/2020/page/9/index.html","d19a463d1ec31af61a7dda8e595587ad"],["/archives/2021/01/index.html","8a49481dc3cf49f97dc6896fa1c22f0f"],["/archives/2021/02/index.html","d7b03333c0c01cc16a2b427b108f57ef"],["/archives/2021/03/index.html","fe7afd3ba491bbd0e878ed337f7d8ff1"],["/archives/2021/04/index.html","1038e530b680f455e67bcc44c148a7c0"],["/archives/2021/04/page/2/index.html","3925be54fa572587a481a79e3009cfc9"],["/archives/2021/05/index.html","92f932a2a942ae084ac18d3cd300f084"],["/archives/2021/06/index.html","128c572c492ad3bb387a779619dee504"],["/archives/2021/07/index.html","d4aa2274616790484b57b1df8446389c"],["/archives/2021/08/index.html","be3928cc7a6c903d041ea885deb645cb"],["/archives/2021/09/index.html","ec20dc28399151adce7c499f0dee29cf"],["/archives/2021/10/index.html","46ae9258bec7a6192328576ba3cebb39"],["/archives/2021/11/index.html","b1ee4038402a4c971456c075422fad19"],["/archives/2021/12/index.html","65fb04a70d4763014d21d3e247244db3"],["/archives/2021/index.html","8aa01423ea5ffab39a12ee940482b2ac"],["/archives/2021/page/2/index.html","575c6d6ec85ac7e6dca8359dbb385aa1"],["/archives/2021/page/3/index.html","7b3d4c75710e85fc390d5f564825b034"],["/archives/2021/page/4/index.html","90fd04d453016d0db04872a29a54e8fe"],["/archives/2021/page/5/index.html","da517348ec711fa7ee1640d8cd61e172"],["/archives/2021/page/6/index.html","9cdf040f09f1f7c02d26641088f6a1da"],["/archives/2022/01/index.html","0ba7a3e49cd72218f848d4ad0dc98741"],["/archives/2022/02/index.html","228d1996a8bf3ed036d53a91cc86afaf"],["/archives/2022/03/index.html","17512b496b3d38b042f65f15130522e2"],["/archives/2022/04/index.html","44b72d05bc2659f0058adaf16261c7b2"],["/archives/2022/05/index.html","997dd6e8f378567ba741341566cb94d3"],["/archives/2022/08/index.html","e569f2f7dec661c7dd796bec6b56010a"],["/archives/2022/10/index.html","9beeeb5c94b1e0e54e07339065143c5c"],["/archives/2022/11/index.html","607cb514bbf8c4b278a2b6d8a1924db8"],["/archives/2022/index.html","ff0df0d8496e84db4f9599c3b5f7e407"],["/archives/2022/page/2/index.html","c0984dda840ba4541c76005bcda5f67b"],["/archives/2023/04/index.html","a2889a5bea96eb9461e6ea63afbe14ee"],["/archives/2023/index.html","57b09e56672cbbda9267ff1326073464"],["/archives/index.html","da61f9d24efc397ede617828f97ccb71"],["/archives/page/10/index.html","8929e817afe864abf45fd864b95d23e8"],["/archives/page/11/index.html","0f3e4fd0314c15408118a4bccca30225"],["/archives/page/12/index.html","9fadb6b633da7257a085c8f3493ba1d0"],["/archives/page/13/index.html","1390e13cb41217a513a7701f85054d51"],["/archives/page/14/index.html","43817980d9428ada441ca44c5e903fc8"],["/archives/page/15/index.html","ed400bf3de649d135250e04f3f8e110f"],["/archives/page/16/index.html","75b5b3170865cc9397677919707c27d9"],["/archives/page/17/index.html","03accc94874b8bc7e80183ab69909313"],["/archives/page/18/index.html","55e8b9f2f60fe4f89b8682da269c0b4d"],["/archives/page/19/index.html","ea918f183e5bc14a110f10d68694da1f"],["/archives/page/2/index.html","815f0f96084d6daadf6a26156569eae3"],["/archives/page/20/index.html","228142eecbd707b08d76f20e6c4bce66"],["/archives/page/21/index.html","353a46e2234313cff4b6fb6d8913fbda"],["/archives/page/22/index.html","528e6858c53e708be331b63bdc49225b"],["/archives/page/23/index.html","b87966dd20037c9dd284866b2d72fe6b"],["/archives/page/24/index.html","403f94e9db807a9b70d8339696435976"],["/archives/page/3/index.html","e4ea9a6a89590212b91547b3a6bb5f2e"],["/archives/page/4/index.html","90a030ab8bc23c002283361ef6557605"],["/archives/page/5/index.html","27f0c58868b4ef9e30158b9c394f1280"],["/archives/page/6/index.html","6370f10cbd8856ccb790c35c44e11fed"],["/archives/page/7/index.html","266118c883325da799e1c3bbb7dfd96d"],["/archives/page/8/index.html","68bcffe88f59b5159c76899739da108d"],["/archives/page/9/index.html","097284ab227de2d50d971676709ec81a"],["/array/index.html","185ab82922d3481d76b81a40763e92b1"],["/automated-test-katalon/index.html","0107353b67ac0800eff1fa880bd655df"],["/automated-test-selenium/index.html","6c23122678b129bf2be42b081ed8beee"],["/back-to-table-query/index.html","50e3c76042d05084dfc185f9d8a54d43"],["/binary-search-algorithm/index.html","c5fc522ebfb27c6805217b205c08d4aa"],["/binary-sort-tree/index.html","573133cb1607aad583ceabfbd7d10121"],["/bionioaio/index.html","10e2b90b9a6d9c939cd1491c1f7bcd80"],["/bridge-mode/index.html","a75080998ed65268416b8562da55c137"],["/builder/index.html","47034938e1d51fa96b3ec62e7f7c241b"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","da669813f9e7bb8dae1dee12148c6a28"],["/cache/index.html","687aea30b2d83e2d2aecc2421fb4bd4f"],["/categories/C/index.html","4529339766d7bcb768bdcb9ac21246e8"],["/categories/SpringMVC/index.html","4612ef45d352f777c388cff658755770"],["/categories/categories.html","a304f5f7d206608f41e6e22d6a30b7ca"],["/categories/index.html","82d9721237b38da3001393572848affe"],["/categories/linux/index.html","7efa508369005f559ceb1252fd8e66de"],["/categories/分布式/index.html","83dbcd51e7bba102889f7a1fff30fd73"],["/categories/分布式/page/2/index.html","ee5272bef96c19449b4bd50a37ffcd88"],["/categories/设计模式/index.html","29d9837e5381f36984b6e89b7ca6d388"],["/categories/设计模式/page/2/index.html","0221b819da34e0d6beca74fc0f53dcdd"],["/categories/高数/index.html","0590c55e3787926d5d91076a8bd85f43"],["/chain-of-responsibility-model/index.html","3d3698ec771cf2431d19438b06a2fdc2"],["/charity/index.html","5971c7f280ac1839fcb01582e621ec77"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","b5cccac150f1a8cfec16781b0563ad88"],["/combination-mode/index.html","cb54ac213e5e4655b79036adb607f8f8"],["/command-mode/index.html","c52609b79f3204f3c7626453d47eb509"],["/common-commands-of-unix/index.html","65e9308ebdee4c8fc9bd1ccb31c93597"],["/computer-network/index.html","d8e627a14723a6df6b2c92cae6b53cb3"],["/concurrency-principle/index.html","645cb626721f4d1f51131e17b516a71b"],["/continuous/index.html","256cc34af0ca9834da664d2fb7de3333"],["/contract/index.html","3b95f8c939c77b7816b353ad18736c81"],["/create/index.html","638cc6873537889f297e6b9adeeaef77"],["/css/main.css","8a6bd6d50e42272ab2b17bb8194976c8"],["/cycle-structure-programming/index.html","0ca1fa9b8211ceab499bf7486da57258"],["/data-structures-and-algorithms/index.html","2e737bb1b80e7d8134821e3d32011002"],["/deb/index.html","de751fe7aed8e98cdf16fb9b2da3d162"],["/decorator-mode/index.html","4f9808249525f018f9406631085b74a2"],["/definite-integral/index.html","20ea24a851974333dbd42fe8434923f3"],["/dependence-reversal-principle/index.html","9f6c65671dba5d9053ede7bba58be0ae"],["/derivative/index.html","54d076555d81b10edfbbb51c8d9775ec"],["/design-patterns/index.html","e192583fb86751b9b066581ad2c6fb57"],["/dic-algorithm/index.html","c7883dc52e14071e59fa4fa3ab20e570"],["/differential-equation/index.html","145af200ba749d11827d4c4c726ececc"],["/differential/index.html","d91cdc64a3003507a8f02595f95ee280"],["/dimits-law/index.html","b499efd8c541704dd5926c2d6a93043e"],["/distributed-lock/index.html","4271bbc795f1c9e8c23511ca484f00b5"],["/docker-virtualized-container/index.html","14dafd5f4321fc157838e83b1c3766a9"],["/double-integral/index.html","b8365f27578fc757f2fc75cebbd9f6be"],["/dp-array/index.html","93ef577122d1cf9222f8e96792a8f3ff"],["/dynamic-array/index.html","4e871b37a7053a53ad835ab2ac52015b"],["/dynamic-programming/index.html","906176ea6ddc8e81b57d548894ae0dcb"],["/edgeset-array/index.html","3749cd5988a18dadd647158a144ba734"],["/encoding-algorithm/index.html","67f7defb1fbe41426199f3a29a37582a"],["/eureka-service-registration-and-discovery/index.html","0a0b4a309d96f45497fa1c32197b6fd9"],["/extreme-value-and-maximum-value/index.html","2a56ae32b7f342d0a6b510311149d575"],["/factory-design-pattern/index.html","9ac1f45587f7617fa8f5bf5982bd74b4"],["/file-input-and-output/index.html","273201c8525340cfef7ee30d849a8bf8"],["/flyweight-model/index.html","df93411134e64614c24017cd34169f6c"],["/friends/index.html","ae823f0fda400b325c7ce3f2d4168107"],["/function-graphing/index.html","67fb855ee25b39409953c698bbe2fdf8"],["/gateway-service-current-limit/index.html","7fdcd69fbb547837ecccb67e62a6ead0"],["/gc/index.html","178add175fc00ffe7914a608f3596a82"],["/generalized-integral/index.html","066e2c1c991ecfbc7614b2d4b60c5a8f"],["/google8102e2f35ce9e391.html","21ade35d5a7eb94ec933bcdb666ccdd3"],["/gulp-compresses-static-resources/index.html","6c8c3d0ba75fa08f63cb379a0fe3719c"],["/hash-algorithm/index.html","3f830842d708f9a06a5cd1e435a83f0f"],["/head-first-JVM(1)/index.html","a519859acfb26272528397cc84a9e840"],["/head-first-JVM(2)/index.html","205e60efbce3c9accca33f301a1b824b"],["/head-first-JVM(3)/index.html","07bc502dc15c52ac2afdc912a907a6d8"],["/head-first-JVM(4)/index.html","f219baf605e4075a94327640b76e7a0c"],["/head-first-SpringSecurity/index.html","78d22cbe088e6ce87fd1ef8cbf59455c"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","5c4fc1c0bee28e5e317dad012125e680"],["/heap-sort/index.html","a25d59482bdfb78e74cabb114c21897a"],["/http/index.html","902f8b5b85f833065dba6110c27647fa"],["/huisu-algorithm/index.html","dda681e57cddab08781b5bb075b47710"],["/indefinite-integral/index.html","9fac84d607915e5f9a95c6919f6d2da0"],["/index.html","3fabd6111cd35021722d95b699964a8f"],["/infinitesimal-and-infinite/index.html","583a0806db273acf073b9fa04df6bd5e"],["/interface-isolation-principle/index.html","2bb6dad3797a99e0de07ed53b3218896"],["/interface-test/index.html","78f9a434b763b1e584bddb8108848922"],["/intermediary-model/index.html","56373107621abaeb11d64f6d08950068"],["/interpolation-search-algorithm/index.html","b61375aee80dfbe23520fcd8ee3fba31"],["/interpreter-mode/index.html","031d6a3b969f54793ed22a09a80233ce"],["/introduction-to-computer-network/index.html","873a5cafc2259f57aa924f57fedde2b0"],["/introduction-to-operating-system/index.html","7c7716e126c4ae24b8df76de9b6b30ab"],["/inversion-of-control/index.html","a4ddd107d54e1c6e4b48250e1ac66b0f"],["/io/index.html","5e380b65aac36e529b147438fe388ae3"],["/iterator-mode/index.html","901efe7c123cb1ae16c12f3270557769"],["/j2ee/index.html","754bf956f32f068d643bb7bddeaa07b5"],["/j2se/index.html","1bd0fbc054bee8082846e8f58a62f549"],["/java.lang.String/index.html","faaca3003858f3945596e1fc7e01e7c2"],["/jdbc/index.html","7f8bb86d0f98836e00c3f5c1789cf3be"],["/jdk/index.html","0ce7b1e1d0afbc87cc5017df4b198451"],["/jmm-memory-model/index.html","5a61370112e25ba533c483ea201cd42a"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","7586c8d81ffe7d6f87c1f1df9853df16"],["/jvm-method-inline/index.html","1afae5ba3d00ba85219473b13c1caba2"],["/jvm/index.html","8e817384e8ac6f48c7dab0f56dbd081d"],["/law-of-robida/index.html","1eecf5a7bf560f9194e7fa9da1b664e6"],["/limit/index.html","9616cd98f82d38c75e4ff275049309fe"],["/linear-search-algorithm/index.html","2ed93200a910d270401e78c0c4833375"],["/linked-forward-star/index.html","f608ad7fe66a27aaf30d6ef9e4b5bb54"],["/linked-list/index.html","023c2e4d757eb5ef27ea64acfc0a5534"],["/linux/index.html","2498f21aef52458aa2ab52f8beb90460"],["/liskov-substitution-principle/index.html","8dd4b5cc9374e9126df18c3e96d375f7"],["/lock/index.html","c82fc25256708ff2a2d6cb6428375565"],["/lru-cache/index.html","a0708b60b9017877432a58a7b007d716"],["/maogai/index.html","e6535f46696e4e4eb671a7855c3fa740"],["/memo-mode/index.html","9417118c31781b70b342e931d9acbeed"],["/monotonicity-and-convexity-of-functions/index.html","52af98c47935cce5a6d3480f8c2676be"],["/multi-function/index.html","e78dbbf76d033a6485d0e6e53a23e31f"],["/multithreading/index.html","8eb910aa26421ff631e5035c77d6fb17"],["/mvc/index.html","db84d565f07d17a4b2c7ea129bbb0f8b"],["/mybatis-cache/index.html","9f9c472099c034f0499423e995276118"],["/mybatis/index.html","32a9294c4f69b6545de34d644c06932e"],["/mysql-index-wrong/index.html","884f3c75d1f663b083014e72cc477f12"],["/mysql-struct/index.html","77cae20aa161d70d5b618a8bae2c29ba"],["/mysql/index.html","053172e750b86b12883d0cc3746669db"],["/nacos-service-registration-and-configuration-center/index.html","389d36f9019da51b9d52065b4fab24d4"],["/notes/index.html","c192e0bded007b6a380cc578f3c84bc7"],["/null/index.html","2a82dbd5f7895af31fc7b1ff8295c58a"],["/objectoriented/index.html","cefaa08132aa226f4a572701e082a1d6"],["/observer-mode/index.html","52dceb3becc523373ae7d330b410ca6a"],["/off-heap/index.html","cec93bcc0c3a374d38702ee084b7141a"],["/operating-system/index.html","9080df0f9ce451ecc26675dd7f8afb97"],["/page/10/index.html","0a56b12e161d8474a9116029516e83fd"],["/page/11/index.html","50f1a106029d785118419d3f831cab1a"],["/page/12/index.html","784c55f391f59121df695a98d65c9701"],["/page/13/index.html","14e8951067d5633f7bad649a77ce545d"],["/page/14/index.html","e6098b4e74ceeaf05c1baeebf1626b82"],["/page/15/index.html","2ffa833c78e7e8c55a88ade05d648791"],["/page/16/index.html","c68396885a156ba603bb8c17bc749ed3"],["/page/17/index.html","08f6e37da2163f73aafd08ec178d4c97"],["/page/18/index.html","8e7374ab34c9202eb476a8e01cd4e63e"],["/page/19/index.html","7d5eca0e052849167155ef9819a5047f"],["/page/2/index.html","11fb6702209aa7d398d5e07282e0d1a5"],["/page/20/index.html","28a9e22a05eb3b3c9c5cf70cdce45155"],["/page/21/index.html","a1dd80a883bf86ef8b7cf72b919e7486"],["/page/22/index.html","69ed959f1b53d9539e077bbb138af362"],["/page/23/index.html","f3b0f01108cbe45b833e907179188346"],["/page/24/index.html","7a4255663223939ca61538ea78d7bd2b"],["/page/3/index.html","db3ea87f81b7ae7791f342e4a91090f2"],["/page/4/index.html","b94395c559b8242a020d12efd63e4a98"],["/page/5/index.html","893144b713b24d282275a914151b2b5b"],["/page/6/index.html","880a1b1a83b3047538a3eeaa7e3121f9"],["/page/7/index.html","a37afbb804f10a3f48e109e3d7ec1ad4"],["/page/8/index.html","c1b668b0f55a8a8c1bed39f27fb1f27b"],["/page/9/index.html","2baf15e0623c5196a89e958923a50ba4"],["/palindrome/index.html","f19f78aa048522bc1c2b9f3e43278793"],["/partial-derivative/index.html","5bcf9aa44f3fac28916e82d908ecbd38"],["/pass-by-value/index.html","c50cdc26ca60fd99bd110003352b958a"],["/pictrue-bed/index.html","1c3fe5b754e9d7ebe4588e47e56e228a"],["/principle-of-opening-and-closing/index.html","f75c59ed689886767e575f013f8f60ff"],["/principles-of-computer-organization/index.html","eae0cd4f1058b3410070fc68bf68b462"],["/program-test/index.html","f55f415f9f2dba4ff30bba24605fa00d"],["/prototype/index.html","008d231dc1e0eb76de6f646e14da0699"],["/queue/index.html","a4121fd154c94f530f5c944931a05381"],["/random-weight-distribution/index.html","c960858ce5a7e367e6fe4e348fc736ea"],["/realize-modular-programming-with-functions/index.html","da22f91ea5db2fc9937134a2f86afff0"],["/redis/index.html","44b79efae131b5b09408d7f4d544159d"],["/reflection/index.html","24f491e4c94a496cbbc961f54a7b0ea4"],["/ribbon-load-balancing-service-call-degradation/index.html","18a94ac1085ae14fa8622740e6aae681"],["/round-dp-algorithm/index.html","14bcaecf100d70a79ecfdda91812ea01"],["/seata-handles-distributed-transactions/index.html","32ffdc7c09ec1b0f60df7fde775c0a8c"],["/select-structure-programming/index.html","019ac19badc089f0be61202e09409803"],["/sentinel-realizes-fusing-and-current-limiting/index.html","54b13687437799ffa384778c5d9ca714"],["/sequential-programming/index.html","2603129794baa31c2686c8c9a1ab2f89"],["/series/index.html","0691391bd1b740a03758c1f2fb96ebac"],["/service-worker.js","5bce2ebd8b1f5b5a4fbb906aab90afd5"],["/single-point-login/index.html","e43b1d19d2a60d4d2be1251a1383fa73"],["/single-responsibility-principle/index.html","be0523eefb33a23448b33f2a63f638ec"],["/singleton-mode/index.html","5ea09719fb1753700f6847da788d8b8e"],["/slidingWindow/index.html","dd354de036281b9a0736465b6de5cfe5"],["/snowflake-distributed-id-algorithm/index.html","16a19c772d8f8e80662a9bbe21699c32"],["/sparsearray/index.html","60441c66e7efc9710c9c1483757b1548"],["/spring-and-jwt/index.html","62ee2b726d53e0c4eb25416eb51fdcbe"],["/spring-architecture/index.html","0e6029a54e6a918ad58a7a5f6e76c7d1"],["/spring-relate/index.html","5422965decb584fdd2251e99254a79a6"],["/spring-springmvc-mybatis-integration/index.html","e9498521e9791114e251aee11956ff9b"],["/spring/index.html","846273bda083293bbf49bf6782ab65bb"],["/springcloud-alibaba/index.html","f6357a56b0e7a021b9fc95759930233e"],["/springcloud-bus-message/index.html","6c628e5fc84bd29d8a15f8e65f48ff4e"],["/springcloud-config-distributed-configuration-center/index.html","46eec15c0c3c04648510321152003120"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","4857ee3bd24979dc9c6f8a46141b265f"],["/springcloud-stream-message-driver/index.html","d146c5d0c4cea0c32142995c249101be"],["/springcloud/index.html","e88874564f7c13dfe5c81f1a59ea942a"],["/springmvc-environment-construction/index.html","098457dc14d0ac74a499045a25df2acf"],["/springmvc-work-stream/index.html","f1fb747d3155641f5b403cd15a19e6b7"],["/sql-injection-attacks/index.html","76fdcc36af948f2d38d1ef3cd346800d"],["/stack-simulation-iteration/index.html","f5188132b9b9f84294b82450fd06ef94"],["/stack/index.html","65a9a4832cf61ab0d2dd586b2eefb812"],["/state-mode/index.html","7d10eb7d66b3af50e7a68bd3924a6f9f"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","75a57e258e28ed7ff1c3e56180f3dc23"],["/strategy-mode/index.html","91a5f168c15038c24f16b58f1b6b8d47"],["/sw-register.js","b7174d4bd5158e50ab242916b951db3c"],["/synthetic-reuse-principle/index.html","ebbdb700b34b2cac4c0f976cc8d748dd"],["/tags/C/index.html","28e87ac193b91f90ed3e2d6d357eae26"],["/tags/C/page/2/index.html","e437dfa0d0e268f5588a9a07176b0988"],["/tags/Concurrency/index.html","fce05e4aaa3760071ac0aac93736c354"],["/tags/DesignPatterns/index.html","8af2d4f4b7c46fd488b51abc809f9fc8"],["/tags/DesignPatterns/page/2/index.html","b386ed11632cb1c1be265a2e294ec914"],["/tags/DesignPatterns/page/3/index.html","1e3bad793aa79846576e373e078ccbfc"],["/tags/DistributedMicroservices/index.html","4e2b00202c163f012e191b1e3e735c59"],["/tags/DistributedMicroservices/page/2/index.html","56b068c37a5c6a50ac83c9bcce434c81"],["/tags/Interview/index.html","02829189e1ffff9a32474a3e07564b7e"],["/tags/Interview/page/2/index.html","815dadc40248147d3beea5e0709a7d5f"],["/tags/JVM/index.html","ebab159b16918bd03ba620d50aeecf5e"],["/tags/Operating-Systems/index.html","3e4c05d3e0151733013023082289bb7e"],["/tags/about/index.html","bccb78d298597fe847ad78c204a135d4"],["/tags/ad/index.html","b01e8d31a2c425346270552b23634956"],["/tags/algorithm/index.html","ace9939a3b2e4c24a727697bd8ebb4c8"],["/tags/algorithm/page/2/index.html","153aa1527a29206dc86cb27c93217ef6"],["/tags/algorithm/page/3/index.html","a3e6855a7540e5ef5eebe903d2b0fd2d"],["/tags/algorithm/page/4/index.html","a5f483ead7196b21f52bc63d5cb12a8c"],["/tags/bug/index.html","b2c14a66ce9302fea70291527a0612df"],["/tags/computer/index.html","07cfbf5d631dc7e8c18eb657a4c072a1"],["/tags/data-structure/index.html","3107c9d87b47dd9532c35c84afbfcb57"],["/tags/docker/index.html","0e23950462454defeb453bd4e92ac8af"],["/tags/famework/index.html","7c971bda4a16006acb4d0731b65b2ec3"],["/tags/frame/index.html","dd41bc4a05101a125370fd9b7afb901a"],["/tags/frame/page/2/index.html","deb8b75e221011fa08cf462befe06836"],["/tags/front/index.html","6be89a2b0166f21002eec8f8b7b4492f"],["/tags/index.html","69ca9e164411b121389ff1ddb5aa1b1e"],["/tags/interview/index.html","9a4f5d339b36a01a2ca5bc06b1018461"],["/tags/io/index.html","2531f1e5a2efd4579a3ed6b97d40b9e8"],["/tags/java/index.html","74f7c30314b73e276f271da56837ccab"],["/tags/jdk/index.html","69fb0b4b3ba43a71a2d05e2863d2b73e"],["/tags/jvm/index.html","6cdaf809425a6d92a9f3b529e9991c4b"],["/tags/linux/index.html","2b8d14997b918c2e9db003d3e1c8f113"],["/tags/maintain/index.html","afe405a1bf7f059e1c135d2c9b9a6786"],["/tags/maogai/index.html","34566063bbab6f5b671ec78c6aad7cc4"],["/tags/math/index.html","c1e144fac4620a11d87c39fb75e7b12f"],["/tags/math/page/2/index.html","84a0f14c4f6626eb43c25db943076ef2"],["/tags/middleware/index.html","4cf4a54a4973c3f0c04bfb78d2d183af"],["/tags/mysql/index.html","65e8eedc0263cd983346319763131994"],["/tags/network/index.html","6e38b0696da0d388c26e8e88f2b87f08"],["/tags/project/index.html","1ab5ad22bdacf25bda03fb2687077b94"],["/tags/security/index.html","95b19038d9377233fd09222ff97b9149"],["/tags/sql/index.html","cb6e557c2bc4ef119972d4de88d9fa1e"],["/tags/test/index.html","dd8a798f7923060cb8fa85940482d178"],["/tags/think/index.html","94a2fd357ebaa3adbd417b55dadc0d1e"],["/tcpip/index.html","f0cd32a72abd3a4812f792c2b9b75ddb"],["/template-method/index.html","bff80b6de3c83af29eb4460ec5c03f4e"],["/test-case/index.html","c70fc458b513a294f0cca1c9cb87626d"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","0f201b55e990f58e97f9e25f95e42c49"],["/thread/index.html","28fd718efa16472900400b1a9246bfea"],["/tj-horse-racing/index.html","5e87708d28514e25c4aba09789dadbb3"],["/topoSorting/index.html","02112e385dbf20a923693653657fbd95"],["/traffic-monetizationaccess-to-google-adsense/index.html","149aa6f5b63bb3fb34e4b192fbca5f31"],["/txCharity/index.html","11cbe64b4ad9d713ab66071eb26d0d5a"],["/ubuntu-set-ip/index.html","e5ab56953232127948d42a69e4a990fa"],["/undefined/index.html","e476f0ad10cd958cea4f49505d499e98"],["/use-arrays-to-process-batch-data/index.html","f5efd9ce839ebb77942044dc11ef2919"],["/use-of-springmvcmodelattribute/index.html","34d2f2826a325af4f9a5100c137ae830"],["/users-create-data-types-themselves/index.html","0b55a7fe1d67d1e9c893853b7c9f2f25"],["/visitor-mode/index.html","c2ef4d8aa4736a235cb8f462f7cc621f"],["/what-is-milk-and-why-is-group-wise/index.html","72d0cd85f609b8c5135b5e9b1caa980d"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","578a6526a34dfabf6e37bd9d6e458227"],["/xss-crosssite-scripting-attack/index.html","bf9a280c38a75c3af6ea0df2d26636cc"]];
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
