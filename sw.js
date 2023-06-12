/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","2909e5163fd962ce67fbc298b59ce9e6"],["/404.html","d193007da4cad390460b663b06b16c18"],["/404/index.html","b18542a30469343e59b617e3cffea52f"],["/7-sorting-algorithms/index.html","a781bf1fb3367d777107c0fe0487119d"],["/AIO-blocking-model/index.html","8a4f6a00902cae86739efd0138bf3e1d"],["/About-Snowflake-and-Consumption-Degradation/index.html","02a266250fc28d7be1283c62c435763d"],["/BIO-blocking-model/index.html","30ff4604c6e023edc6a675318e11caed"],["/Bloom-Filter/index.html","ca2c4500e46d42a0bce3fa73ce2fe55c"],["/Boyer–Moore-majority/index.html","0b6581efe19f1456e92fa03bbedd67cc"],["/C-algorithm/index.html","8d5a1cb2be77eaa36e157b0ac10f308e"],["/C-programming/index.html","a94feed681fbdf87e84d0ed9da78d767"],["/CAS-&-AQS/index.html","b8bb3e31d86992b2c8dab88be2e4aeb0"],["/Comparator/index.html","7e0c2e84382fab977b1cdcb201354fff"],["/Differential-array/index.html","36265625b0ea42b9c980e41a68422578"],["/Download/index.html","21c09426b8066508d1058d2d1bca3007"],["/Front-end-security/index.html","139c7daa3e4a9179d47de313a1b6b7f3"],["/Good-use-of-pointers/index.html","e0619bb8b260cf9df5f0e6c3611b02c7"],["/Graph-degree/index.html","d0a3ef88b9c8de0cf9e2666fe01d10b2"],["/Greedy-Algorithm/index.html","36f39a26ecec6adf4336e6ac989d5b4a"],["/Head-First-Map/index.html","6a449807eab4c5d20bd3f3712b6885ab"],["/Head-First-Netty/index.html","c93f6c6cafc1232566c2a6d2ee940e28"],["/Head-First-Nginx/index.html","bdf176d5b31b9c3068be4f41c6d93d95"],["/Head-first-Spring/index.html","7f759164d124399e9b94a38969203f0f"],["/IO-model/index.html","4bdfc4b4d3421da3c47e68bd6053a43c"],["/IO/index.html","8d4b4ae8548734346780539a57d9270f"],["/Implement-a-lock-based-on-ReentrantLock/index.html","66c62ca7470f6d985e4b3bd337d90e41"],["/Improve-Robustness-(1)/index.html","cbf2ff33d7a7925a27c7a914d180be75"],["/Improve-Robustness-(2)/index.html","c73c269f1e6e9d09577e9c2bca3838ed"],["/Integer/index.html","e6abb02d3e87a3d85339c713d12244cc"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","2b82177bc4f818da1ea6a7bf6f9a524c"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","bfcc74072501d5b27dea9c8432d39bc0"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","77e6c02853693b8f477c4abde253fbf6"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","3d360522aa47e712f60c0f8b48e2bd85"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","cef6721e6ff0a9d680d19a9e13184f71"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","b03b0b6f6e8976d0670c5018662eb488"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","47979ffe170b53dfb24266e956f1f65d"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","cacae54cfd27d93b5d4878faa0450d58"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","296454150cd03b3189c818e293afce44"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","a75849aa581885e2bfe1c9c050dd749a"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","59d7d88cade57c6e3239441d2c1c828e"],["/Java-network-programming/index.html","cc7bae7b9ec713b9ef0c36b8cd184e86"],["/Large-number-operations/index.html","38c2180e645de603e31070dd6a48ceb1"],["/MYSQL-MVCC-&-LOCK/index.html","974f3ec76c907cadc6bdbe3004992a99"],["/MYSQL-uuid-and-page-splitting/index.html","725799d7b1c9e18d0cee22bd5557d00f"],["/Minimum-Spanning-Tree/index.html","b7adb9f36c772683394236f6956a9593"],["/NIO-blocking-model/index.html","aa470142aa05fb97aef97c178ff46952"],["/Nacos：Configure-MySQL-data-source/index.html","60746e1f6ac24fe41d1f6ef22f8c0c4c"],["/Native-method/index.html","3f798df99e2e065a3dfa7353f0f12413"],["/PriorityQueue/index.html","bc834bdc965d8e08a22be8d1af611008"],["/Proxy/index.html","76d5a293c0c3eea14a471695faf71629"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","aef7039d07d716b760b8d9c891ae7346"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","40aba4bc05bb1bb79f11ebad36d852fe"],["/Reservoir-Sampling·/index.html","498bc99338fa95f5edd2eeac388c0835"],["/SQL-injection-vulnerability/index.html","61071bd9f05cfb7c48859680d0d29d26"],["/Sandbox-security-mechanism/index.html","ca460c91d50024eba1888e3ca5582f61"],["/Spring-Cyclic-Ependencies/index.html","07c3fbc13df7e4f189f61c091e3f2e73"],["/SpringBoot-startup-process/index.html","f691481d1f69ba746863638194ef8cb8"],["/SpringSecurity/index.html","9ad1f4f00ddec62510eca068a7da09ed"],["/Thread_Pool/index.html","90c74d79ac99e9a6b2e41f7418217a8d"],["/Transaction-isolation-level/index.html","2d23baa3be45e1180c471a1e5651f87a"],["/Unitest-framework/index.html","a13ad979fa0c3c4dd0b08fac6e1953f0"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","0289212be8c13d67d0d8ca67d6046fdc"],["/about/index.html","23a9177009603f7856d294abc1081ca8"],["/adapter-mode/index.html","8198cab46d9b6b2812579cee2cd50e70"],["/adjacency-matrix/index.html","73dbef08663f0492e87ff6e426fd02ce"],["/adjacency-table/index.html","dfaac41260ddf08f28fb707636829b7f"],["/agency-model/index.html","ef61ee601067bc8038fb0b3ce78efe6e"],["/app-test/index.html","7376245d8550b09334c3f12fd725804a"],["/appearance-mode/index.html","f5f84003c629665fa0ee78cd7eaa1a0a"],["/archives/2019/01/index.html","9fa3afd1a2d35602080a78063358c559"],["/archives/2019/07/index.html","79c07373358091c4bf68475070f328d0"],["/archives/2019/10/index.html","4c0d88375cc15970b61892540f6419d1"],["/archives/2019/12/index.html","6d56bd80a011bc8562b84d3a010d73d0"],["/archives/2019/index.html","81e23490dcc593c61de1a15d6a783f2b"],["/archives/2020/04/index.html","ce74251da30201324ad654e4f307ccfa"],["/archives/2020/05/index.html","ffc3ec5051d1634e453b201874f4db35"],["/archives/2020/05/page/2/index.html","6b6280d0351e711c1278a4aaf618efdc"],["/archives/2020/06/index.html","4b2bd2d0acddd80f58f56a5f6213de15"],["/archives/2020/06/page/2/index.html","ab8c4540f00357c241845c25cdfca984"],["/archives/2020/06/page/3/index.html","c16f24ecad121837c904c71e044e49d3"],["/archives/2020/06/page/4/index.html","bf205428ba38a41a4ea0d99b4ae1ed03"],["/archives/2020/07/index.html","6190db19a925b039b28e44e064384385"],["/archives/2020/07/page/2/index.html","21baf06b420c907d79de2b0bc4844ef7"],["/archives/2020/07/page/3/index.html","8a37e5b4c781e41c47b1f8d36fe1ed98"],["/archives/2020/08/index.html","283b6734418b4be88ab3010ce967de1d"],["/archives/2020/08/page/2/index.html","70aa81dae2174e5da08d942a87a057e1"],["/archives/2020/09/index.html","b04f934885ecbe1d9a6fe92ec90c8c89"],["/archives/2020/09/page/2/index.html","be38e7f95f78129716fe2c277def38d5"],["/archives/2020/10/index.html","4bc33b000b5762b28866b2c9e61e897a"],["/archives/2020/10/page/2/index.html","6ccb65366ac88417a03b3d183433104b"],["/archives/2020/11/index.html","6c2b7bfbc80715b3c3c568af0da4f6f4"],["/archives/2020/11/page/2/index.html","4db2573033c69684a3bd5db6077315d3"],["/archives/2020/12/index.html","44817676f39f1f525eb2870f3c106c02"],["/archives/2020/12/page/2/index.html","5ccba29fe28647d2894821146f423237"],["/archives/2020/index.html","b92fed8a4ed7394209a9290143dfa7fd"],["/archives/2020/page/10/index.html","bd44c263bb5c06492d5888692be5bc7a"],["/archives/2020/page/11/index.html","ee985a4f150dd852d877a77e81b29b15"],["/archives/2020/page/12/index.html","581810de6de131d07939b00aa0930b3b"],["/archives/2020/page/13/index.html","48a73805d5ab3ee2d630bfc04f3376fd"],["/archives/2020/page/14/index.html","8bc882c1d6d63794a9fe3c7daa64e432"],["/archives/2020/page/15/index.html","dfd1e0ef0f29a4f39f1203a9bdd7cd94"],["/archives/2020/page/16/index.html","4b1e385a28f1e67594ae9644afed6a0f"],["/archives/2020/page/2/index.html","5b91507a08adc82db38c60f346ed0308"],["/archives/2020/page/3/index.html","b4a647339a631330d9d00098c8ba5ce0"],["/archives/2020/page/4/index.html","4383181918c724a7889c5b5ef10123f5"],["/archives/2020/page/5/index.html","0a4f519adeef4a59d37139600bac47c2"],["/archives/2020/page/6/index.html","a83dbe03a5fd90a8e01198f558c3f62e"],["/archives/2020/page/7/index.html","09932c310c93209ebc66b1344a6ccb82"],["/archives/2020/page/8/index.html","086c577b99552b7d6e149c6e82677e71"],["/archives/2020/page/9/index.html","016f872f6697f8a78094ff4b4bf92a47"],["/archives/2021/01/index.html","a0515f61662416c5375ffa75bd9148cf"],["/archives/2021/02/index.html","57fb82ecc95fe7ce58d3eaeffa867a97"],["/archives/2021/03/index.html","25e7241d88d91b7625d3a01393f847aa"],["/archives/2021/04/index.html","cb60079e1465d79aaec1594dbf589e70"],["/archives/2021/04/page/2/index.html","93bbcfd7b0023d25e1e45add5d5d155b"],["/archives/2021/05/index.html","363fd4179aa834b53e311d0e9848bae1"],["/archives/2021/06/index.html","10d0dd9ec46e1fe9b10d18d3b0f2ce53"],["/archives/2021/07/index.html","66f34c4a23ea50db50ab7bf7c6dfaf76"],["/archives/2021/08/index.html","59b51a6d267346106054f795c7440ede"],["/archives/2021/09/index.html","48a2e3f605840e2497877844cc8565fc"],["/archives/2021/10/index.html","6aa7cf86bd198b770d14939d2240a7ae"],["/archives/2021/11/index.html","5c2e98ea57062d9eb0df75631027e0b4"],["/archives/2021/12/index.html","5f8dfd244a4ec6a02024ea56eace9bfa"],["/archives/2021/index.html","f62ebf44579c575e72afa70a84a23350"],["/archives/2021/page/2/index.html","f60fc411a4895a2d3bc820c38143d85c"],["/archives/2021/page/3/index.html","906c5a112aaee129a7ad666419aff2f4"],["/archives/2021/page/4/index.html","f16fbba90e6dece6906688d1f529c277"],["/archives/2021/page/5/index.html","834a664ac3737dbbce3da2072e09173e"],["/archives/2021/page/6/index.html","1c152e7a4d379e3461723c262841b686"],["/archives/2022/01/index.html","044c54d2fb98933556a6a4d08cc153b2"],["/archives/2022/02/index.html","93472efc4ab879b15b63cdc5c2d928d0"],["/archives/2022/03/index.html","cb7ca8b58a6d89743a29bcc378230c5a"],["/archives/2022/04/index.html","98cc0eb9c73bfb44c1ae69c80522d6e4"],["/archives/2022/05/index.html","3728539471b7fccc024f9afd4f8ed7ce"],["/archives/2022/08/index.html","7973e08e38dad8ed6547964dfec68fdc"],["/archives/2022/10/index.html","25bd4742b27c9f52571404737eda94ae"],["/archives/2022/11/index.html","01a84070f6f8a0689c1b85234e388f49"],["/archives/2022/index.html","3d89892aee65fb863815634005b6cf02"],["/archives/2022/page/2/index.html","c21ea798ed03bd340a3ee0c940365f29"],["/archives/2023/04/index.html","dff9c2ed13ff8ac742b63764207aeb8a"],["/archives/2023/06/index.html","5587a582a83e7f92d880c344a2fa177b"],["/archives/2023/index.html","bc764aba3e9f8779382a2b85fbde6c21"],["/archives/index.html","ed884086d67c28c3121c32fc8451383a"],["/archives/page/10/index.html","95d12651a75b4ab0f1b5646aafc283e7"],["/archives/page/11/index.html","07acd0b49b18cf0b78f4ffa0b543b910"],["/archives/page/12/index.html","dd87bfc0d9000b68f5032807df459808"],["/archives/page/13/index.html","9403b0ce16581059406a1716ab1653a8"],["/archives/page/14/index.html","f391ffd50f91fc2f76def093509be1b1"],["/archives/page/15/index.html","45bc0603ba25ac9ec4fc740e45f3356b"],["/archives/page/16/index.html","9644df337a53025c1209e58575d52e12"],["/archives/page/17/index.html","fcab5c5e10eb43b2ed68a9e6f3afa4f9"],["/archives/page/18/index.html","e55f1af2ab2a9c162c50c7ff3647cbd2"],["/archives/page/19/index.html","707b59cd3e00b1d1f448ffe6e15d3683"],["/archives/page/2/index.html","49eea3c2759e3ebd35eaa3ff97f1b55b"],["/archives/page/20/index.html","41c57025467e022dee6044924fd15549"],["/archives/page/21/index.html","1848304a35fb4527789fdf326698c14f"],["/archives/page/22/index.html","86bb4037f1221ccb4dd7b0567f63cd2c"],["/archives/page/23/index.html","1735fad30e03db8a08df057c2d73190c"],["/archives/page/24/index.html","0a6e7169c0b37ceb7a47ada605deae9e"],["/archives/page/3/index.html","3ff87a7aa6ee523deb2f2163deddf57e"],["/archives/page/4/index.html","46af92238af4d5ce1d13aa71240267a0"],["/archives/page/5/index.html","658ce53d310902fa68fe9e89212d32a8"],["/archives/page/6/index.html","120032e2932ecd115e6466a3b9f42086"],["/archives/page/7/index.html","7e590ebfaaa131b7e5a676d6d3d66049"],["/archives/page/8/index.html","ebcd9782b7261a81ec5c4a42417a219a"],["/archives/page/9/index.html","1c9327a93368efb81aa39b61da81c27d"],["/array/index.html","c962c3153150bbb87e5538571e7704d7"],["/automated-test-katalon/index.html","333f2add81444f6d0f4316cc4f3f1e8a"],["/automated-test-selenium/index.html","961eb45f2933b84883e5b989818bda11"],["/back-to-table-query/index.html","6c6b6ee517cfe78fae224051993594ed"],["/binary-search-algorithm/index.html","61f9c8d938c2494bd27db43eb7a2f811"],["/binary-sort-tree/index.html","b00a111e55444c518d77209c30104ce6"],["/bionioaio/index.html","7625ad999eb8735ea8a5bbfdc9cd0397"],["/bridge-mode/index.html","dd2d2c59d35e899bba252b71d282b72e"],["/builder/index.html","b4f18d6c2479ddecf73ad99e12d37541"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","b2362e0de0fdfea98aee9a46be2a89e2"],["/cache/index.html","5c7579c769c604c7fe270c7c5b7993b2"],["/categories/C/index.html","bacca85fc55935f062a36e8910d51637"],["/categories/SpringMVC/index.html","88fbf54ea12d1748dc30c949c475da6f"],["/categories/categories.html","b6952c51e121466da2dceed590bc7917"],["/categories/index.html","72b61d50a22176bc06902d537faab7e7"],["/categories/linux/index.html","9e91a9686ff293bb3f8b15257377967f"],["/categories/分布式/index.html","63f0645313b967c2289cfb872a95bbcc"],["/categories/分布式/page/2/index.html","0a545d76e4bde75216ec727af13aa318"],["/categories/设计模式/index.html","07fa9a79578a4f1c43affa37fbce9494"],["/categories/设计模式/page/2/index.html","a01d1b937a596c960d9fe507b5a12c78"],["/categories/高数/index.html","b1ba5e0f8ea9e5788002f326da7917a9"],["/chain-of-responsibility-model/index.html","718e1cf296661c9ec2d30b1a443133a8"],["/charity/index.html","5982104215b02688a8dd4f95a71c4210"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","b3bf70e5f3635e8b195ca2d250673980"],["/combination-mode/index.html","b017bfab1a4fddde1c6bd84ec9ae6056"],["/command-mode/index.html","1c9681a2fc24c506392b5b44b09090f9"],["/common-commands-of-unix/index.html","588967c87f903ba29217f2344fe700eb"],["/computer-network/index.html","5666377cfb75c4193f52e050becb5cfe"],["/concurrency-principle/index.html","90a8489fd6ccf3fb99da698d5ab18a4d"],["/continuous/index.html","bde7bd7394d05dd18a16d840555bb5bd"],["/contract/index.html","885f8ebf66734eb9cfceab9835accb3a"],["/create/index.html","399b7f0966167ef52bea0c53be0fbba4"],["/css/main.css","0ab02c81a8ead489278ab88be7700809"],["/cycle-structure-programming/index.html","9f04dde1a23e48d317a7679fcb1779b3"],["/data-structures-and-algorithms/index.html","085aff8edc4458f443ff77f4fc1b506c"],["/deb/index.html","4f9c9ccfda7d2ab47412848e61dae4f2"],["/decorator-mode/index.html","9dc5aabca089f4aa26ccb63a85084880"],["/definite-integral/index.html","89a6aa8b16b0dff53cc8196e022476e7"],["/dependence-reversal-principle/index.html","96784c4936e761af4ea82602cdd8c858"],["/derivative/index.html","aae34c800143ea60167c6d5392b8e34c"],["/design-patterns/index.html","3d0486cb19040074b34aae2e1743836b"],["/dic-algorithm/index.html","be3ce4c0d9ec9c6600223cfe384200cb"],["/differential-equation/index.html","b88c4cc8443693b8b01b4b91bb2360dc"],["/differential/index.html","8c4b194be272107d08cce25e258e626e"],["/dimits-law/index.html","3c7dbceaf3e60f26a856732f0e100709"],["/distributed-lock/index.html","93cc4148b142fbd0af74d543118307f9"],["/docker-virtualized-container/index.html","607fe36fe01978630394de19783b97f0"],["/double-integral/index.html","07bd6839df51bbb82e5877106611ff4d"],["/dp-array/index.html","153623144d05798d7a10a9735b0f18c2"],["/dynamic-array/index.html","ec5182879291503b09b45dd8688b0e7f"],["/dynamic-programming/index.html","4792065ff11c4b0ad23c78c00b3ba9c8"],["/edgeset-array/index.html","9a02bd854d936f30c59ecedd2fdf4c5f"],["/encoding-algorithm/index.html","d8dfabdf09460db8c5eceacbff7e4ffc"],["/eureka-service-registration-and-discovery/index.html","115e0cc0fbcb8ffe564f9dff9ec33373"],["/extreme-value-and-maximum-value/index.html","8f8c3a062bdc4b43bb4d58c067c0a387"],["/factory-design-pattern/index.html","3989c4a94e2b200437d28868f6a8ccbc"],["/file-input-and-output/index.html","d600723162b472b83829be6ba41d3c89"],["/flyweight-model/index.html","6da59d9f413a1c9a3ee1313cb78474ef"],["/friends/index.html","c49643ed4cdf1c6099a59e2658c5dc91"],["/function-graphing/index.html","c7f90d7b0c5740e77eaa22d4ad79a244"],["/gateway-service-current-limit/index.html","104b7b1f928abfef16d4fe59d594dd5c"],["/gc/index.html","89e04f01c3f06eb643ff676480da0d51"],["/generalized-integral/index.html","21dc74d3f0b2700ce2c19bc4ec47cf6f"],["/google8102e2f35ce9e391.html","4060b47b602869a6a405581806aa2946"],["/gulp-compresses-static-resources/index.html","90e40928a4982ff7947e0d948e53942d"],["/hash-algorithm/index.html","0a49454904cf067a5b630f7ad9af2cb5"],["/head-first-JVM(1)/index.html","51a349af39f8e9ecba8b08cdc0dbd63d"],["/head-first-JVM(2)/index.html","d4816def08d06e83ee055ed738636da6"],["/head-first-JVM(3)/index.html","80fa5666faca9a127d3d11ed57d52684"],["/head-first-JVM(4)/index.html","0a3cb7bca6f665d8c4f1f9475785744e"],["/head-first-SpringSecurity/index.html","5e55608f3fd5064c3fdfab76ba2c0bf0"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","b3fe45b1746c19268cb0cf75c4b4e57b"],["/heap-sort/index.html","df2275904341c1e5e3c9d6f8cb2abdc3"],["/http/index.html","d8e58504dd1dd21a25f70bc20f9c06b9"],["/huisu-algorithm/index.html","8ed39a83d66da8cd1c1f86dc1d7e5854"],["/indefinite-integral/index.html","f799e4c5cf07c70568f61f8bcd8a1d47"],["/index.html","2e26a51b8df20da1f97a3253e9597533"],["/infinitesimal-and-infinite/index.html","dd286307ca101c36e12b4f09b8155800"],["/interface-isolation-principle/index.html","9d7c2416d8db159ecd6c1c0352481203"],["/interface-test/index.html","42dea0af0e97618f6d81d854413dd5d2"],["/intermediary-model/index.html","3372f341bdd63e1365846b70afb0d747"],["/interpolation-search-algorithm/index.html","6320cadfa0497a5ad5a26fe5d862e397"],["/interpreter-mode/index.html","8d5499b1fb6fc7f82a8ea92af1fb1b9e"],["/introduction-to-computer-network/index.html","f6c90e6b02c80707031b52723718316d"],["/introduction-to-operating-system/index.html","271c54c9a59be673933c58a4a5f60e7a"],["/inversion-of-control/index.html","1fc1157001e876c44db89f305912865f"],["/io/index.html","5c1681339e7b395fcb74188934d89222"],["/iterator-mode/index.html","7ba78e47535e475fd370d7463dc3799c"],["/j2ee/index.html","3aac95b69b31c5821195a899b2848251"],["/j2se/index.html","07ccbfb13911550b57dfb011b3cb3494"],["/java.lang.String/index.html","7faefaf8a79cf067dcba1b7461f526ce"],["/jdbc/index.html","7dbff596965759f300fc3a6be6a69913"],["/jdk/index.html","172286084cea901246594d2b0bb87699"],["/jmm-memory-model/index.html","e454c71ea1765b9874644f52ec7ac74b"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","277ba4f02cf27f544f7fe898aa3611a8"],["/jvm-method-inline/index.html","332ddfbd55c6f8d691b47456efd59565"],["/jvm-tuning-practice/index.html","65d26f4cd8fc810419af0e5310b749c1"],["/jvm/index.html","06fc104ace2f587ea987f39aad681f57"],["/law-of-robida/index.html","e43520e93e652957cf05fe3b801e38d5"],["/limit/index.html","5b5296beeb9dd766ea1a557be02b7b00"],["/linear-search-algorithm/index.html","583a6c5fdbab73a208b9f508de6b4dda"],["/linked-forward-star/index.html","de531605d27d0701123ee252451859a6"],["/linked-list/index.html","ec9559e3a6190b6c9fbc8db2cc402bd0"],["/linux/index.html","73e05a396303445272be7ddc6dd1a42c"],["/liskov-substitution-principle/index.html","11a5307b60a687f96679166a05c61df8"],["/lock/index.html","44d8b5735e289ac08337d129e322e570"],["/lru-cache/index.html","54b10c8ab009665eb9814cca66650cdd"],["/maogai/index.html","cc03476423ce42830a8b3fd48c7ded7d"],["/memo-mode/index.html","632c62c83851c9109b08f565574d4b6e"],["/monotonicity-and-convexity-of-functions/index.html","332ac84e23666da02e8373039f0e61b7"],["/multi-function/index.html","92ea6a1844508aed4d9e45ef73252459"],["/multithreading/index.html","f6f371de3b07ef9c4b0316dbfce6799b"],["/mvc/index.html","9002954897e06a62eb10dbe52cb9b3ec"],["/mybatis-cache/index.html","a7cfdda9da7c711b533e190112f87bf3"],["/mybatis/index.html","af83ddb4d45a97b4326d36b2599c5361"],["/mysql-index-wrong/index.html","26f5c9ba1f5cf0516b625b508c088753"],["/mysql-struct/index.html","f1b06cf37ca749b0eae6a32abb142a1f"],["/mysql/index.html","4c81ba90c39513c397389a9e60e35d1f"],["/nacos-service-registration-and-configuration-center/index.html","f379a28bc265c11a3fa33c00f204183f"],["/notes/index.html","b07e861ae6121e3edba9dc4e69d90197"],["/null/index.html","c578b3b48cc2faa5db43ec4a878cde5e"],["/objectoriented/index.html","1b54bd37967bbc1ed99f6d71c546efc1"],["/observer-mode/index.html","ee5448b209eb55c1dce061f4d353822b"],["/off-heap/index.html","77b70f48048b28e888524ccd1012eab4"],["/operating-system/index.html","91afcaafff510e7858ebaa82b5f40523"],["/page/10/index.html","3bfed3e1883a861dad2607e8e10be6cb"],["/page/11/index.html","77b95689c832588717d7f9915603430d"],["/page/12/index.html","be9fe1e309f5194c961d3c3bda41c1e8"],["/page/13/index.html","dab0d1d82253f574bcd9a0b3bd48c442"],["/page/14/index.html","9131baa6e28a8d49cf1b805ff9285887"],["/page/15/index.html","1f6ee2946d8c76140e3bf27967ecdabe"],["/page/16/index.html","4bf9b8f3290b077b088d267ce9536f8f"],["/page/17/index.html","7a1bffcf8dc40a2efd9e53c18d93e4d0"],["/page/18/index.html","2bc581d94b716b9e4ce35f6581749aee"],["/page/19/index.html","a52805c24f07b9d18ebeaeeca7a8e1f9"],["/page/2/index.html","f26220446889173014c54b45fd84e47e"],["/page/20/index.html","26b8ee9a081053d5ec54b72ca0b2c80e"],["/page/21/index.html","5dc05866edfdf1ecb639434ea38cdd23"],["/page/22/index.html","8fbd52c05995d5e1809d3e8477f2247d"],["/page/23/index.html","cfbd4972d2a75a82071a95da9b8f5dfc"],["/page/24/index.html","536b1a8107a3748f13adc293d9c075be"],["/page/3/index.html","a50d4dfe8e34e211bc0500442ab8e6e5"],["/page/4/index.html","789a897bb8dd203bcc1c0307f8a8f638"],["/page/5/index.html","a5df0a0146447b47543150a2664914db"],["/page/6/index.html","56517d0336ff284ed93026d651a75780"],["/page/7/index.html","59bbebd56cca10b8bef85caa945f19e9"],["/page/8/index.html","ded9955b8b39313db65bdd406905d700"],["/page/9/index.html","cfc40f427e3d003fcfcb1515e44110d4"],["/palindrome/index.html","ab3c89dd3a16a36e23882922f7c0ac99"],["/partial-derivative/index.html","a439aa843cb804da1742c9bde86762d9"],["/pass-by-value/index.html","ad172505a75c54166ec8e7930fad0815"],["/pictrue-bed/index.html","0c79687702379ccf4aedb745f6aa3231"],["/principle-of-opening-and-closing/index.html","1782cb95f310d9dbae0ff74da386c7f1"],["/principles-of-computer-organization/index.html","ab42f1dce3aa13a252b0489dbd4164a3"],["/program-test/index.html","422422b37aa3fcd540229e0b5afdabdd"],["/prototype/index.html","e032e1e35133d5d665c418e017f3616f"],["/queue/index.html","0c7548b337ac96e69ff1920600f7ca0f"],["/random-weight-distribution/index.html","ae705656e232cacf0b5ea1aa9a6c3198"],["/realize-modular-programming-with-functions/index.html","945774e837985f7a8de6b27b3b06f944"],["/redis/index.html","a137c8c2f15c8005db6dff372ce40a2e"],["/reflection/index.html","b8362b12d43f8fb016ed8c42608c83c6"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","bda019124375b6baa19227d4fc9ea070"],["/ribbon-load-balancing-service-call-degradation/index.html","bb3370f6755e3b1cf75a9ba42c76e87f"],["/round-dp-algorithm/index.html","afffc244241b7b73e06f54fe93dbc790"],["/seata-handles-distributed-transactions/index.html","2dacd83825b45c12162bc09f5f5dd360"],["/select-structure-programming/index.html","8b51d1eca5a91a6cc0ea5776be9821b1"],["/sentinel-realizes-fusing-and-current-limiting/index.html","028ed8d506b9b2968d769e3f9c67445b"],["/sequential-programming/index.html","ffd91dc8e146ff63e638cf464f016083"],["/series/index.html","33984dda3291fa38d504811e7cc461ed"],["/service-worker.js","35daa9a60916ee6d6b60ac4708b9be63"],["/single-point-login/index.html","f3d3b77e0fff54c8d118b297c529d146"],["/single-responsibility-principle/index.html","6a2da0d7dbb1bc6a50b5efcd1fd876f5"],["/singleton-mode/index.html","88e4f767450066467853a92bf1966dd0"],["/slidingWindow/index.html","02f8a6a2e95e1fbda56093d442ab165b"],["/snowflake-distributed-id-algorithm/index.html","86cd9fca63adc4a612ceabd9dc83df00"],["/sparsearray/index.html","ab0fc3411ba229638302269423fd997d"],["/spring-and-jwt/index.html","d45103af65e75601ba321338b9be9569"],["/spring-architecture/index.html","a5c906136cff80537c79884beca3400f"],["/spring-relate/index.html","8e5e7be4cd760a5687e470ff909d7516"],["/spring-springmvc-mybatis-integration/index.html","51da5899735163278ccfd7d10b430ab2"],["/spring/index.html","6e4f22465edc522727f80cc50fc9b1d4"],["/springcloud-alibaba/index.html","31ca24d34cd23a65e5c6d75723b87fd6"],["/springcloud-bus-message/index.html","9c074bc642125c59b6a320efc3929e1e"],["/springcloud-config-distributed-configuration-center/index.html","fb29a3db8a83cecd67f3762e887f81c9"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","ca28b7d0bf439bcb54e9608355636e1b"],["/springcloud-stream-message-driver/index.html","5a57047cc01341553079d8b777e2c86c"],["/springcloud/index.html","957fe11dae4e0f21febbe7af2b19f265"],["/springmvc-environment-construction/index.html","1b63e4422ce9c9b70dd491255cf260de"],["/springmvc-work-stream/index.html","613e408e4896d53a47ee6058123ec6d7"],["/sql-injection-attacks/index.html","f8621db9e99c7274180e3d44cfdaa53f"],["/stack-simulation-iteration/index.html","889d2061816e65ccb05abac34620bc79"],["/stack/index.html","65767f8dc245a573df6a3fe9437c7c1a"],["/state-mode/index.html","c6ccdc795292e8a153c5ea22d282b731"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","8cf28a32d058c9d013913d72e56bb121"],["/strategy-mode/index.html","82ceb83241873f8cace169445ef261cb"],["/sw-register.js","3702b6f7f3a11d7769f1db3698bc2d50"],["/synthetic-reuse-principle/index.html","aac71e71fd77b64bb7206687cb3ff4b1"],["/tags/C/index.html","8ee7f0209118f7caeafce8fee2a1a660"],["/tags/C/page/2/index.html","24b90e8b9e6d213277dc44e87d0efba6"],["/tags/Concurrency/index.html","62af9e8faec3dc780dde2f8e114e7b61"],["/tags/DesignPatterns/index.html","cb4498593b74d788e3e636afc2814094"],["/tags/DesignPatterns/page/2/index.html","d6d9df624696d03a4d620fd0959a814c"],["/tags/DesignPatterns/page/3/index.html","9a261535e86d14c02da3a8c7e570a161"],["/tags/DistributedMicroservices/index.html","890a939b032d7033b9a8a58534dc5efe"],["/tags/DistributedMicroservices/page/2/index.html","9e059d9067a694b457ad3c06995121cf"],["/tags/Interview/index.html","84f7a4991ec4958692944ffd972258b2"],["/tags/Interview/page/2/index.html","b6f09690168c0d86045c0448b3c5521b"],["/tags/JVM/index.html","a462a94562afa4c3b049d2bf8b65c964"],["/tags/Operating-Systems/index.html","c135c2e848767287981d8679bdfb1cc0"],["/tags/about/index.html","6f0443510e0155fb4f4e22315b98589b"],["/tags/ad/index.html","6fec5eec354afd13992d778867658fb3"],["/tags/algorithm/index.html","ff6907cc26dc5269518518b454c6a811"],["/tags/algorithm/page/2/index.html","a026454d5aa178ec368b2a668b417bfc"],["/tags/algorithm/page/3/index.html","c7d4beb60f2951193acbe4d372c02cf5"],["/tags/algorithm/page/4/index.html","fd4d18a8a778287795de95782bd4dae5"],["/tags/bug/index.html","86e3c2532cc50f14ce7de2bae1a700f2"],["/tags/computer/index.html","5e386bb0190974b53f2e1f64b0ddb0f1"],["/tags/data-structure/index.html","16573efe3d6a2ec8f4bf59f8e938f738"],["/tags/docker/index.html","9c4686bbf1d3c5c97c0dc3e00a618857"],["/tags/famework/index.html","159487bf0c3ef99571d993e49c6e5c0a"],["/tags/frame/index.html","3ef3019ace75eb222b24c735409577c8"],["/tags/frame/page/2/index.html","39dc5b4e95b748294d6fc0c4ac73ad0c"],["/tags/front/index.html","31f03c5731ddab28913e1c8b9832a6e5"],["/tags/index.html","0e9f63e34fec4fae11c1139b23b84083"],["/tags/interview/index.html","99f8aeda9ec7247a6d0a1015987ad760"],["/tags/io/index.html","ef2fb2c9c33c86aa5356fe51fc53f422"],["/tags/java/index.html","509fe0432d61b5b78f01228bd5162c43"],["/tags/jdk/index.html","91993707bad7d281088e8409034e4744"],["/tags/jvm/index.html","a0ad85073378d7a1ac7456383c93509b"],["/tags/jvm/page/2/index.html","dd7dea5ab8781936e18bd357e5d06f59"],["/tags/linux/index.html","39fefbf18c2ac97b1aa28e4a6b646e02"],["/tags/maintain/index.html","50267be0790560647358883ae833a440"],["/tags/maogai/index.html","52c414c9d4b5d2b7d3eae801719b4344"],["/tags/math/index.html","ff0b46016168cebd20d4b1f39c88fb00"],["/tags/math/page/2/index.html","f9e1af9fe3cede531d354eae0a7fc782"],["/tags/middleware/index.html","12c4968990bd2fcd53adf1d6673df7a8"],["/tags/mysql/index.html","54cb1978a7bd1148559dbc358748f6fa"],["/tags/network/index.html","369c79e3417dd8cc86a044e40ce75372"],["/tags/project/index.html","97e120b0579917dded4631635075bd9f"],["/tags/security/index.html","b1e2a50ffeae1c91dd0807d503a3c688"],["/tags/sql/index.html","da377817d1f1ee3930b007f903c4fa50"],["/tags/test/index.html","e4ce2e8ce54b8accb44ffc6ae384301c"],["/tags/think/index.html","fccbe66a148522dbc47f6f5e4d6890a4"],["/tcpip/index.html","07652b6fe40f55db3684a516b389c8c6"],["/template-method/index.html","68723bb2fdd954a6c1a85b59516f3d5d"],["/test-case/index.html","5446102a27c5cc861dbf5d4dc889b02d"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","b7c4775aa7ece64e25c8831d06222519"],["/thread/index.html","6692febda612afbba3a412935def4398"],["/tj-horse-racing/index.html","30d3ebcf4f33478c4dad2791e1e74eb1"],["/topoSorting/index.html","25c9d344147ae0ef5d22e20c3f2a3969"],["/traffic-monetizationaccess-to-google-adsense/index.html","c4efc6fd7a058a9b6397757e70b6852f"],["/txCharity/index.html","0ab1a76688edbc46c74ca3f5741fcd34"],["/ubuntu-set-ip/index.html","5c4935a52ecd2c32b42cd274e2d977a5"],["/undefined/index.html","a426f95e8c7d5d92f748c57e3a97a853"],["/use-arrays-to-process-batch-data/index.html","b4cf0dbcde6cfcfbe26a898423cdc1d4"],["/use-of-springmvcmodelattribute/index.html","9cd8205583b730276dfe87c1da68c9fa"],["/users-create-data-types-themselves/index.html","e5244ccb3d04cf01d9a0bf170775b254"],["/visitor-mode/index.html","30d170ab2c671c5915245a16ff82b670"],["/what-is-milk-and-why-is-group-wise/index.html","75beaad2eb7d3e88893f54f33888df0d"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","02072b39f1cfab6143d61b4857f8a1e9"],["/xss-crosssite-scripting-attack/index.html","ee65ec1fcfce981ede9aa7fab82be97c"]];
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
