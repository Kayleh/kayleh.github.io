/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","096895da5003be0a6552ef8a1945f19d"],["/404.html","2980ac95a4bc555a2695635ff65cd911"],["/404/index.html","b43153c56241189b5265ac682dd43845"],["/7-sorting-algorithms/index.html","ca38a1c45728946ca6669f0b0dfcdcb8"],["/AIO-blocking-model/index.html","1839e78e7d65cc9742ffd22d72f5d864"],["/About-Snowflake-and-Consumption-Degradation/index.html","e21ee8e2fe5d079cdcec8d8cd2f8554d"],["/BIO-blocking-model/index.html","e0759928c32612d3307bccc270e0dd27"],["/Bloom-Filter/index.html","da050a1991369ee4964fcd3bcfefd120"],["/Boyer–Moore-majority/index.html","0de100ebf04724ce046cb08f876c52f5"],["/C-algorithm/index.html","188566b908725bbcdd06b209c7ae021e"],["/C-programming/index.html","ee6d6efcaa2fe73f0361bffa92ccce1f"],["/CAS-&-AQS/index.html","e3c20b4b1beeedc0539fa615e3399adc"],["/Comparator/index.html","2c6e07d3bf0654d837a975ee4551e7c5"],["/Differential-array/index.html","bdbedaf23c3d1fde897537a5a73809d4"],["/Download/index.html","fe69a02bd74a7016749cb2c2df15778f"],["/Front-end-security/index.html","dd75c3863759626eeffc0e3aca8b7c11"],["/Good-use-of-pointers/index.html","f1f47013f167f941245724953523fd7f"],["/Graph-degree/index.html","dee47172c9bdacb11115a28e8b20a114"],["/Greedy-Algorithm/index.html","1474ebcfbfaccb6f463d1491f587012c"],["/Head-First-Map/index.html","4a74c453ae43470d529182f3b82ea13a"],["/Head-First-Netty/index.html","b16409b641c854e728d06904436e7689"],["/Head-First-Nginx/index.html","b90f8179b99325259ddd04e46eb3993a"],["/Head-first-Spring/index.html","d327e37955ad31b03f950b7d1a604b1c"],["/IO-model/index.html","362dc2ce7adbd1c4b24388cf152038a7"],["/IO/index.html","5cefb47c603569b187422d67104bb9e6"],["/Implement-a-lock-based-on-ReentrantLock/index.html","364210457bf4a435d8e24a9ceabd7945"],["/Improve-Robustness-(1)/index.html","cf9380958654d1edfa33f0db73dd7825"],["/Improve-Robustness-(2)/index.html","95b99f54672024743197a1ee88b96b60"],["/Integer/index.html","3cd7bf56a831459b9738546d1f6eed5b"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","dc4a81051e3de8a2b5026d163fbce8a2"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","d2137303d39a7ef89fb69b29e63171f2"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","63aa1dafe8ff6650f5ff3e680d397d1a"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","c53e91bd4f9cba10f6dfc19aa6230a05"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","1b8cae88fb14f8710e3c90df76c52255"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","8aa14da6afb3b2dbdf534f87b41df582"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","2a2148f03d018baf454596d86e7cf820"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","4bdea40bdf8568348883f31eec1f5ace"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","82affd6c033c5912a950c22e8fc7e82f"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","bff1701b8750c10eaa0f8ada8c48822c"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","70c229e2a82e02d40bd34988d2390268"],["/Java-network-programming/index.html","cbdf8def60645adc093f3f600c2fac08"],["/Large-number-operations/index.html","1c49ee72c76f08c6c61504b93f3f8000"],["/MYSQL-MVCC-&-LOCK/index.html","42041937fbd822ca2ae9c887ac975566"],["/MYSQL-uuid-and-page-splitting/index.html","0f73d1ae6f2337e59eb023c8f37629fc"],["/Minimum-Spanning-Tree/index.html","e7918f78a6820e32990bd48d630de6e7"],["/NIO-blocking-model/index.html","512b89286f51ec10807b0b71ea23222c"],["/Nacos：Configure-MySQL-data-source/index.html","757708abb47b0b8d07b97838d7a6f39c"],["/Native-method/index.html","5bba6991bee07f7e24a3dd87abc0e6ed"],["/PriorityQueue/index.html","57e0747e641958f78b7d7fde4d1ab1d6"],["/Proxy/index.html","23db40f61c592094c89edd963806a445"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","fa82a6350d4d7d5f31881720da9113cb"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","5f8e28cfdd20e7058c8b100aac21ed45"],["/Reservoir-Sampling·/index.html","e1f6efcfc1dc07234bfaf088a9476a5d"],["/SQL-injection-vulnerability/index.html","1e8cf465fd4aefc946a952c4887b9d50"],["/Sandbox-security-mechanism/index.html","2885be91d47d2f5ac633b1cbc30cd449"],["/Spring-Cyclic-Ependencies/index.html","7e903a4e95035a65d0d61903aef14bf3"],["/SpringBoot-startup-process/index.html","d006565fe2a0480df1248532447b14c5"],["/SpringSecurity/index.html","31f15b8ba3c1148fb6a8ede254de8922"],["/Thread_Pool/index.html","4ef5c834256a1ba8ca9770aed52f0b0d"],["/Transaction-isolation-level/index.html","0703acf91256d00ea406f541b0969590"],["/Unitest-framework/index.html","76001f561096a938407c5f030fe8e801"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","317ec23cd8bc9083ea3ad87b02dd7589"],["/about/index.html","0fd3a9717450c12ec26c66dcf129259c"],["/adapter-mode/index.html","d272789c90de0bb5e1c8672430d80702"],["/adjacency-matrix/index.html","a0321842d8da0bd01a698f83747f3568"],["/adjacency-table/index.html","0dd91426aecca876eeb7d9e0b00359f1"],["/agency-model/index.html","89dcbc2c9b994a35681e0a83e374ab15"],["/app-test/index.html","84ddf7738bfb2d7023bfe35cba34e50d"],["/appearance-mode/index.html","a8bb58413a80d8d1336e92eee834511e"],["/archives/2019/01/index.html","98f0b98f77e0b8b62bc0cb7eb98c526a"],["/archives/2019/07/index.html","36c6a2fdfe3d856d8f45804fa46e88ee"],["/archives/2019/10/index.html","466480fb2851f7708b6d30bc4f4bd08e"],["/archives/2019/12/index.html","1b0026b6c066798bf822332a99af2b7b"],["/archives/2019/index.html","c0947cdf16a68f1a979af23172d331ac"],["/archives/2020/04/index.html","0079d38f1d6853628d8a6fc513a99ade"],["/archives/2020/05/index.html","8c2209d7757f553909fd25370b01f9f6"],["/archives/2020/05/page/2/index.html","9232131aa38eae843ddcaff79da658ae"],["/archives/2020/06/index.html","24d40bdf86cbe849ef4b624a9a418272"],["/archives/2020/06/page/2/index.html","28e3681f8d7eadb7cc623f202fc65388"],["/archives/2020/06/page/3/index.html","e3923d78929cd6b30d5ee516ced25c32"],["/archives/2020/06/page/4/index.html","bc1c08721a635c18ea5840c0eea9af38"],["/archives/2020/07/index.html","64db8287711d62cba0754f1d760c3da5"],["/archives/2020/07/page/2/index.html","83057025cd9ec921db84978f9a6b3c52"],["/archives/2020/07/page/3/index.html","25a9436315a2f0a4fc074fc4b9df8691"],["/archives/2020/08/index.html","d781e195287095375fbcb72792f400f8"],["/archives/2020/08/page/2/index.html","c6d66f137b9d6dab8ab4632b2c7d398a"],["/archives/2020/09/index.html","ff33162815089bac3cde80d0cf25a392"],["/archives/2020/09/page/2/index.html","638c468f5154568d7443f4e99ec7dc5c"],["/archives/2020/10/index.html","2fceeabcea201af765a37fe7be969d6b"],["/archives/2020/10/page/2/index.html","34bbf0f604a3f9d9e714c4f7496a73a2"],["/archives/2020/11/index.html","351dace9df9526cb9147225156de73b7"],["/archives/2020/11/page/2/index.html","2a73d0e301bb0bf36b861c77cf715f36"],["/archives/2020/12/index.html","98fae07f82e418ae8984a7d70d4410d4"],["/archives/2020/12/page/2/index.html","33604b226dcb5a83b0e2ff95fe8dc47b"],["/archives/2020/index.html","a9a21be675029139aece167a7a1e864d"],["/archives/2020/page/10/index.html","185c295edb1f308a973056ae0f5046a5"],["/archives/2020/page/11/index.html","9daa9feebec003bcbd423522ebc451b8"],["/archives/2020/page/12/index.html","12ecac3b4abdd988dd3b351eb3f61e1d"],["/archives/2020/page/13/index.html","5df3d7376e1b13ad554759bdb0370c05"],["/archives/2020/page/14/index.html","78bed772e71c98240bd9efe2671f3e3f"],["/archives/2020/page/15/index.html","2999808bb05d8f1e3123e36e7153a559"],["/archives/2020/page/16/index.html","2b0f23e33b3479f3ded4c4ba9a6a5b7b"],["/archives/2020/page/2/index.html","d16cb00f149b84966f7ac976dd4a00fc"],["/archives/2020/page/3/index.html","f123ab1192870218f3dee545d9ea5b61"],["/archives/2020/page/4/index.html","ed3601c42b3eb5c99cd0b2dc5a200600"],["/archives/2020/page/5/index.html","8bc2ede5b3ecbbc6ac3807f1991db7c4"],["/archives/2020/page/6/index.html","4e0686b519df7a4386d25503a7af8824"],["/archives/2020/page/7/index.html","a0196b1bc3107ecd6edba9171067fd98"],["/archives/2020/page/8/index.html","f90504a1ff33cea17f497caf32f1de7f"],["/archives/2020/page/9/index.html","b5cfdcaf302826630da061d01519d41d"],["/archives/2021/01/index.html","8965dfbdca82c9d846ae56750253cf85"],["/archives/2021/02/index.html","a96ace2424d0b220857d95c4c3531e34"],["/archives/2021/03/index.html","ab0565ec933a62c7d04065f1f7d547bd"],["/archives/2021/04/index.html","c2d1ef1fe390ee6fb9c5f856596089e1"],["/archives/2021/04/page/2/index.html","055319b3569a28efd1af44d2f597468c"],["/archives/2021/05/index.html","af564eddb65fcf96140fcad92cb616dc"],["/archives/2021/06/index.html","9610e48a7c37bf69276a9664735263d3"],["/archives/2021/07/index.html","cb7e9a9ea23490c92efccfe84440de62"],["/archives/2021/08/index.html","670134ba9711a116a2d3c9bda4fcf755"],["/archives/2021/09/index.html","7a51b2203713abbb16c7b5c1120078cf"],["/archives/2021/10/index.html","f0aeb71a317d13dca7ca7beb848ba497"],["/archives/2021/11/index.html","981e7ecec6dc5adf8ab8622222d569ca"],["/archives/2021/12/index.html","59f54f547ee88d4f9390317b8718b3f4"],["/archives/2021/index.html","ae0923167457db7b75a05b1780515ea2"],["/archives/2021/page/2/index.html","1ae22557a4258acb5edb5ca714f0ace4"],["/archives/2021/page/3/index.html","9cbe8e0f314152bfc2a876f77542a7b1"],["/archives/2021/page/4/index.html","e5cbbd013d64a56784b53500989afa8f"],["/archives/2021/page/5/index.html","29d1ae57cc90c31f2cb4cffe9f4b7b86"],["/archives/2021/page/6/index.html","dab237efe0041640e132d2410085d8f6"],["/archives/2022/01/index.html","53fd073fa9e37e482ae0546f985f77a3"],["/archives/2022/02/index.html","d8be20d5058c630ec6c5bc752247f56c"],["/archives/2022/03/index.html","4264890d8579c9e1c3050630cc28e364"],["/archives/2022/04/index.html","bc53c4513173be9309a675b147601c38"],["/archives/2022/05/index.html","0c16f3191184cccf6ffccf61945ea787"],["/archives/2022/08/index.html","76fee8251e6ac10b3ad1d4c550f33363"],["/archives/2022/10/index.html","88a4afe5fba511b693536ef4609592e7"],["/archives/2022/11/index.html","739c75790c91e2fdf1f36df06397cde1"],["/archives/2022/index.html","d7e6c296e9fa0c4a3baac95fcb085809"],["/archives/2022/page/2/index.html","2928f63a73017669648d04cda1eab1cd"],["/archives/2023/04/index.html","1bb78134076c0fc755549355aeab3693"],["/archives/2023/06/index.html","511fa2c26bcd94f7715855251f031521"],["/archives/2023/07/index.html","7dfdd33a6268d8136c5dbcb738300a83"],["/archives/2023/09/index.html","706996af0b8b315fc50ef4412df6763f"],["/archives/2023/index.html","0ddf70f4569c654a4e745bbb4204ddb4"],["/archives/index.html","b791b003c0e2408b77b9bbb8e7402617"],["/archives/page/10/index.html","e3e182d6b3b89e0eb0ecd4116cf79399"],["/archives/page/11/index.html","155d9949c223fef426e4447f61bed9f9"],["/archives/page/12/index.html","4893c7e281379a1961bf45268be547ab"],["/archives/page/13/index.html","c6e022e4136537b8abde89db996521ca"],["/archives/page/14/index.html","3d49266e45e4f9e096c0a89665cab609"],["/archives/page/15/index.html","73fec13c39a9f8791c444f0fbb9e018c"],["/archives/page/16/index.html","bc39f5cd0d632c8ec7df55afa0a07a4e"],["/archives/page/17/index.html","a0b5a3ad70f62ded7414d872bb8ee5e7"],["/archives/page/18/index.html","30cd99f74d3bad22c6398e6a24d436de"],["/archives/page/19/index.html","89f15ca86fc6e1018af67a584377d71c"],["/archives/page/2/index.html","fad48112ecc55ec514c40d10c857905a"],["/archives/page/20/index.html","68c0c37042cd34b205166b7965cc3579"],["/archives/page/21/index.html","26634c898142cb556f1198619802b20d"],["/archives/page/22/index.html","48ed46101de9bfc24049e4159983a133"],["/archives/page/23/index.html","d25575989eb965de30e89f7f13cf851e"],["/archives/page/24/index.html","ebd04fc71bbfc4d803f219dcec837128"],["/archives/page/25/index.html","6494a6eac4ebfe344a0f50f07d45e63d"],["/archives/page/3/index.html","795aba0e3d7e858fdc1496cbaa835725"],["/archives/page/4/index.html","97d13c89d510e4e5fd81c654e3496c42"],["/archives/page/5/index.html","a60457167e2b5d9fa7bcf0e70e11029e"],["/archives/page/6/index.html","d6627dd2cb2e3eb8f6dce2d7feb1fb28"],["/archives/page/7/index.html","b993f44ef328f2c7285baf5122d80e5c"],["/archives/page/8/index.html","9ca0b2c7e536c0fe67a85a3640e9cd6e"],["/archives/page/9/index.html","93226b80068b997396527a0481379c07"],["/array/index.html","befdebfb21345057fd8e0f5a04a23639"],["/automated-test-katalon/index.html","7d4686c2803930612485784a24ddfdf9"],["/automated-test-selenium/index.html","fb6a1add92693816a17dfd314425c5d7"],["/back-to-table-query/index.html","c612b648c5fb328424c19fb55fce2648"],["/binary-search-algorithm/index.html","7f6188e1b34613d09d80cf0718122ac3"],["/binary-sort-tree/index.html","2c304cacdeeecfa34fcb0a92d07efc4b"],["/bionioaio/index.html","d3cbcc9af77de1e74f912b6ca61b8c61"],["/bridge-mode/index.html","f8cb810506cb400f1a7cbcf963814120"],["/builder/index.html","efbcff0c2c9ea17ed1fc3c96ac91f617"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","1858996d7ca8c8509b7470a1a16d1948"],["/cache/index.html","d8914f84d90eea57bb196a028c35ec39"],["/categories/C/index.html","2219a0d9ca3a650748a10503ecbacfb8"],["/categories/SpringMVC/index.html","b004c92cf535c5aaab20c514d0decf90"],["/categories/categories.html","20149c898141ac1e5abf7478de6a678f"],["/categories/index.html","873aa88af212c257b27127e9393e6a7d"],["/categories/linux/index.html","3bd2d1fb29b57d390dbe9d4def790dd5"],["/categories/分布式/index.html","55ff3bb3710188f2332114c27c210357"],["/categories/分布式/page/2/index.html","b4f56cee4e2ae222e1f1404c9597a399"],["/categories/设计模式/index.html","610818138b84632a8e8d1fa555e2e0d5"],["/categories/设计模式/page/2/index.html","ed4617a1202728ef7bda1abc44cdaade"],["/categories/高数/index.html","abab099ea13b0e84374fdd9a0225cf41"],["/chain-of-responsibility-model/index.html","a85593db8ca4e1e2474ed9b32a2fcbc3"],["/charity/index.html","0255f907c058285b82cea83468900c5b"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","5bb4674f28c2bb1d4f87b6d6796eb5e0"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","451222ac82f9e691449906331d749dc6"],["/combination-mode/index.html","b26bbf70017fed146e94a030aa9dfefa"],["/command-mode/index.html","1a3963bd5811ce38393a9418c83b8021"],["/common-commands-of-unix/index.html","d55218ab3d8e97ca64352b02d7916aca"],["/computer-network/index.html","260f1441e468055d3b30a58ba36a4c07"],["/concurrency-principle/index.html","bb68d0a88764fecd50d6e07c8d6d91be"],["/continuous/index.html","bcafe1fdb90e0f816d37de8d66d611c7"],["/contract/index.html","652a4d67a59c8c0efb9afc14c92c3c59"],["/create/index.html","f2724751cda2f7dcd9b386368a356250"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","2679b7473a724e8e609dbb96f6bec308"],["/data-structures-and-algorithms/index.html","93e2179bdc78e351580eacb843acd348"],["/deb/index.html","c95eb18fce8b8dfddd1a048548aa66f3"],["/decorator-mode/index.html","56c4c632fb3df8840f48f14f0a4ae963"],["/definite-integral/index.html","70d93f85a8ace85e08b62ee86528bdc0"],["/dependence-reversal-principle/index.html","93ab511f28fc129e24e1f316c63d66b9"],["/derivative/index.html","5dccdf0e96292be154cb4a52aac1a264"],["/design-patterns/index.html","261fbdfd3a188206f1fa29fa58450393"],["/dic-algorithm/index.html","957f92d249ed14c1b8570ac5c75a3664"],["/differential-equation/index.html","21cb36954ce067ad538340b75dd7a4ca"],["/differential/index.html","978dec68cdd21971282748fc4f8a06c7"],["/dimits-law/index.html","bda0ffdcce96aaf543478b5d6407723a"],["/disjoint-set-union-find-technique-appreciation/img.png","3b180015f1019888938991178f4c1e06"],["/disjoint-set-union-find-technique-appreciation/img_1.png","e3611c71e7cb8a0cb4fa5e35c5f9bd36"],["/disjoint-set-union-find-technique-appreciation/img_2.png","d4bf7b42194d5378a43bd049b7b91da5"],["/disjoint-set-union-find-technique-appreciation/img_3.png","84469c7e0460e93e0590b56729ce340c"],["/disjoint-set-union-find-technique-appreciation/img_4.png","96308c2a7256c532ca38489ca81c1bac"],["/disjoint-set-union-find-technique-appreciation/index.html","cb78b18fdb6a5ebddb446c76645a36ab"],["/distributed-lock/index.html","397910cbfc67282a19fd8f4604cfdbc4"],["/docker-virtualized-container/index.html","a00b4911d7636feb3b9754244b31fa7e"],["/double-integral/index.html","9727dc3c77bec8c42333496db0c8e703"],["/dp-array/index.html","b80caefa340683c56a3955feeca8c30d"],["/dynamic-array/index.html","bc75585f04fcdba3918413b6bbc64a4a"],["/dynamic-programming/index.html","723e34d84cb81d167ae3eab71d7e074a"],["/edgeset-array/index.html","3fea316f8d2c41645ed5558b2ca794af"],["/encoding-algorithm/index.html","1cf93a8de98840ba81ba69304321d4f2"],["/eureka-service-registration-and-discovery/index.html","23b4a5fa8d3a58149b7fd7a52c62293c"],["/extreme-value-and-maximum-value/index.html","c7fa1b7a39dda715758b90089a06c88d"],["/factory-design-pattern/index.html","dccdd8f8944ae07b9d0e207f204aac84"],["/file-input-and-output/index.html","79cd440a98c04231ec49e5366da15833"],["/flyweight-model/index.html","804398b8af2009a75b6ffbffd33340cd"],["/friends/index.html","9530ef2949ff35f0d3fa3e23f4ca5924"],["/function-graphing/index.html","4031a3fc96f9c01b4444140a5c91a807"],["/gateway-service-current-limit/index.html","284b7ac946f96c5d864f914c59237391"],["/gc/index.html","b8dce79385af430aaa1b861a827eede6"],["/generalized-integral/index.html","64aba3251c43afb53435a822432197ae"],["/google8102e2f35ce9e391.html","cf61d81ef143ae721cb2c238f4f75c23"],["/gulp-compresses-static-resources/index.html","4bdc6d521cfce5c25adc3c654d0eabcd"],["/hash-algorithm/index.html","f5ed1a5458560f5501518932431443dd"],["/head-first-JVM(1)/index.html","fc2893cef220b5aee696c40fd696d05f"],["/head-first-JVM(2)/index.html","19539cb98ef9265d3e6b86da7c34c445"],["/head-first-JVM(3)/index.html","633cce104369ccbbd6808e3839824f5d"],["/head-first-JVM(4)/index.html","8fff2188229ba2441345fc4dcd03a489"],["/head-first-SpringSecurity/index.html","e30b33f7c1e87567959764018c06dfcb"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","7e5d2dc48fe5c2797fccb1a8c004e10d"],["/heap-sort/index.html","7c62ded21c33fe839d0ad55f47b5c48f"],["/http/index.html","46733a67af9f134aa06db5c7d2689574"],["/huisu-algorithm/index.html","08c792c133c762b95d1ced2f8fcc6624"],["/indefinite-integral/index.html","e50f3a87c9fe99f9e9e09087c5fcb779"],["/index.html","ed0014734b9137965d1b159ad6e710cd"],["/infinitesimal-and-infinite/index.html","7bc182808a2f5a715958c92af35adcff"],["/interface-isolation-principle/index.html","01c9b4e453cdc0b399d36597b3c3753d"],["/interface-test/index.html","285219b3df9546c2de3d60fa9ca201cb"],["/intermediary-model/index.html","e05e59a0bb26fe68d8fac11d8193c192"],["/interpolation-search-algorithm/index.html","c1084b35646a44e754eb0da6d2fb5465"],["/interpreter-mode/index.html","46cddc97d3696bc218f6e2cbc66f441b"],["/introduction-to-computer-network/index.html","926186976558ff1860671bc5c06450fa"],["/introduction-to-operating-system/index.html","b57504d7857c6049f33486c82c9a120d"],["/inversion-of-control/index.html","f2f24c2fa717797632f55fb72e8f2655"],["/io/index.html","825731a6ef4c73fd884f4c22ba7aa78d"],["/iterator-mode/index.html","7344c79d11056052707e7b11f20606eb"],["/j2ee/index.html","166b1bc742972449789033972eebb01b"],["/j2se/index.html","a008a7cb7bcb368c5a5a50cf6f33dfd7"],["/java.lang.String/index.html","db586acf4854decce08b6fb37308d397"],["/jdbc/index.html","32bb4e0f272fc78c23cafc8e7d64f17e"],["/jdk/index.html","08d773698792aa9ba42cfbcf4b2fa248"],["/jmm-memory-model/index.html","653d020c0e610ed7cc7f9f103b7c6e2f"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","99c20c8ba3e5f241067d7150ade8b2e4"],["/jvm-method-inline/index.html","8cb0cc24010ae8a7fea14c655ecce1f7"],["/jvm-tuning-practice/index.html","5cacdc1c3c0ed18230f49a702dca74ad"],["/jvm/index.html","dfd4007869e99f9b52b05c23fce29b09"],["/law-of-robida/index.html","394eb6f3b68ee5b8733e57f2a381e57a"],["/limit/index.html","289f7deaf27f385bad593191a8416f40"],["/linear-search-algorithm/index.html","e76c7850f230facf9c1ac2ae5efa9845"],["/linked-forward-star/index.html","51b8ffcb23bbc5b518e8cf73373bf526"],["/linked-list/index.html","72958b446f1d5c54324eaf987f5a3be9"],["/linux/index.html","c6d4f0b9aeb5ab8b01c9592518dc50ac"],["/liskov-substitution-principle/index.html","fb35e7349696ad5fb0d44d70884dc25e"],["/lock/index.html","7f792d0fc5aec91bd3223e4ff7d24229"],["/lru-cache/index.html","cb505d01f1822d0abf35dc359bb16110"],["/maogai/index.html","16b633f791517a796af51dbfd89cb08b"],["/memo-mode/index.html","08ae5dfc9f362bc23041cbc13a636f98"],["/monotonicity-and-convexity-of-functions/index.html","0ed964ed9f77abadd937c7eedbc35793"],["/more/index.html","610178581f2b326f0d33731a2afb0f6d"],["/multi-function/index.html","193c0bf16e86e82b096c4c252b69e00a"],["/multithreading/index.html","4a46122696c130633b1604d291bc7a04"],["/mvc/index.html","533b17bdb209ccb94b2549f83aadac6b"],["/mybatis-cache/index.html","6d9ebb1c501728b6da6f43af383fb614"],["/mybatis/index.html","f2ab9b96aba8cf98ae664cc4b5e4f49e"],["/mysql-index-wrong/index.html","9e6f935744a56be7d6d360a9311f6eed"],["/mysql-struct/index.html","7332c5bc0d16480b54bfac3b79d6c93d"],["/mysql/index.html","969d53f35bdeac7f505629ef65e478fb"],["/nacos-service-registration-and-configuration-center/index.html","41caefef61f9c6443d7b1e4b91ca80ea"],["/notes/index.html","68a43f1f6c39c425a0c14c6ce99fcb23"],["/null/index.html","72677fda5f6c01b378f20086884a7eed"],["/objectoriented/index.html","ff9cac9c73653ac5d5cea9fd373ac39c"],["/observer-mode/index.html","4502591d2a3d2aefde1b49fce6f86d8b"],["/off-heap/index.html","26334075a4b672cd793b927ccf81568f"],["/operating-system/index.html","12dcacf388dde3d600541d0b3fd82294"],["/page/10/index.html","ef9b63b899f40401ddb1c8c910748ab3"],["/page/11/index.html","53d291b1513a7e849a2c5b4cfd585bad"],["/page/12/index.html","c93859eae8a934dd4d745b27826feaf3"],["/page/13/index.html","3b16dcdcf5637e08fcd007cd7f8d2d2c"],["/page/14/index.html","16489cf3308068f9b6c4560cf080aa41"],["/page/15/index.html","f785bd797d48cb42d794725748f397a7"],["/page/16/index.html","62062dea22672e30181fc4da97797dfa"],["/page/17/index.html","cf070e785a9a341d685bfa9344d9760a"],["/page/18/index.html","647b07b22cd71e86d5ce78a82adf818d"],["/page/19/index.html","246d833fb3624b4def317e34fcc94d10"],["/page/2/index.html","3c55a02909e816d6d7548ccc085dff74"],["/page/20/index.html","df20349cdddf706c3a8c98ac6a494fee"],["/page/21/index.html","af1c8ecf466c0b941f7ca852ac5165f8"],["/page/22/index.html","de2f09c62ea25a5ff1d9a898b6670d0c"],["/page/23/index.html","069bd4448fc8502549359ac7101b5653"],["/page/24/index.html","f46eec05c09bdb9848e3de433f124ca2"],["/page/25/index.html","6795f8e1aa64e11a533048eb265e619c"],["/page/3/index.html","dbe70d552c5f739ee452fe48f5005dfe"],["/page/4/index.html","8285e4f4d3e4403d9ab7015ac4a5af99"],["/page/5/index.html","d6028165553b5290dd8b94f9f379f356"],["/page/6/index.html","2391cec3524bcdd9f569a6d6e170cb83"],["/page/7/index.html","0dd20d3481cf644c743927e3dfed3ffe"],["/page/8/index.html","cfd0e14e276b843847dda494e09edc04"],["/page/9/index.html","0a9a37b2926d6dbf18784a328ce8bcad"],["/palindrome/index.html","69aadbf4722880cc91d9f1655ff74148"],["/partial-derivative/index.html","285bc30192f7b8a13f9e5ae54672272f"],["/pass-by-value/index.html","13c2be01157d29fc4ef32f83359fe1b3"],["/pictrue-bed/index.html","34b89b3b8534fe826993733efbbee611"],["/principle-of-opening-and-closing/index.html","197ffbedf025d7d994e3825996058949"],["/principles-of-computer-organization/index.html","bff0791f4412e2af6161e6acf444c0c1"],["/program-test/index.html","e33380fa671ba02fc8981ecc9df66304"],["/prototype/index.html","c14622244b32a9ab966d13fa8624b984"],["/queue/index.html","3f180cef6d40fae376808942415840a8"],["/random-weight-distribution/index.html","28962e747e8b13c420a3760ee8a60fc7"],["/realize-modular-programming-with-functions/index.html","7cf69b981e722f99a60d89802d3bb224"],["/redis/index.html","c9ffe5dba1f059392787730cb4c2f62e"],["/reflection/index.html","5d8ee6d46da1b590471339349dd4b984"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","3ca657f1652ad88e63d4b51c0bbe98d9"],["/ribbon-load-balancing-service-call-degradation/index.html","7afb2c4a7ad73eda437e61194b1bc588"],["/round-dp-algorithm/index.html","02ec6af1ef2413a3a0c1df276f32e37c"],["/seata-handles-distributed-transactions/index.html","39939b7534db3e18b12d7c19c9105bf2"],["/select-structure-programming/index.html","09abd75ebf78cea6cf53b10fc0f99074"],["/sentinel-realizes-fusing-and-current-limiting/index.html","5cae2c7f527a3eade8c3a36976114e36"],["/sequential-programming/index.html","37331a1e14502fcf98e2d01562848135"],["/series/index.html","d4a6e59d821d5b8fd2dfefe23a7d3e78"],["/service-worker.js","5bb421499a49791f773f5b6d8ad6ac65"],["/single-point-login/index.html","c3874f48e68441626c748d44f118538e"],["/single-responsibility-principle/index.html","e58d6ed7b90e7fad2005a499d3f65dcf"],["/singleton-mode/index.html","a0557f1705f465cbaecee5429b72a075"],["/slidingWindow/index.html","4c526c5de3ea753e78e02f3d28de1d44"],["/snowflake-distributed-id-algorithm/index.html","cc94537210c3d043952c0d1f25d8c839"],["/sparsearray/index.html","d2fa80cfccec42bfbc439ea900c9e921"],["/spring-and-jwt/index.html","7130e041d65252aaf17f69fc99b25ff4"],["/spring-architecture/index.html","ecc8526dd97d4f7de5b1ceb6e06aeb73"],["/spring-relate/index.html","6fab101286cbd21d64aecd9b1de276f6"],["/spring-springmvc-mybatis-integration/index.html","8cc8e44e0339739044576c210212b512"],["/spring/index.html","34ef904555f780d0602688fc381f09bd"],["/springcloud-alibaba/index.html","740719a13defa25b379b18bba266067b"],["/springcloud-bus-message/index.html","7c4f0738dfc79028e963333be8cd18da"],["/springcloud-config-distributed-configuration-center/index.html","647d8a4a0714219f73913ad7d7b7cc2b"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","dfc89104f53d693142a87444824afbca"],["/springcloud-stream-message-driver/index.html","9e2fa6519e81d6673197de2a7a04c44d"],["/springcloud/index.html","9633621fc3abcc15076e7ebda9e89ae0"],["/springmvc-environment-construction/index.html","8e645f5b2e241ef4bbe6f6914e509379"],["/springmvc-work-stream/index.html","f42e1e11b63d854f3d2b00ea9078893d"],["/sql-injection-attacks/index.html","ef9f74fad14bedad87952e357afc8339"],["/stack-simulation-iteration/index.html","02611f0f5446204221ba5bd71f6e5c68"],["/stack/index.html","eb8a2a4862e8f29d851bf3a1f7110c06"],["/state-mode/index.html","6e36893af287bab2958d133c2dc2af9c"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","39799fb0b214f530183c74a852c53abb"],["/strategy-mode/index.html","69846819ea8572489686d7afb51fba8d"],["/sw-register.js","d3ead2a742ad52c567aa4a81db5c4fc0"],["/synthetic-reuse-principle/index.html","d430bed1823fbfb1da2fdfe8d73bb3ed"],["/tags/C/index.html","98460100fea17ddffba7ac3ef0781c92"],["/tags/C/page/2/index.html","e2657592cfe96e535d6133135273d0ee"],["/tags/Concurrency/index.html","047390b5dcf0aa18b4e3699c064480c3"],["/tags/DesignPatterns/index.html","7c3123f885cb2f6e4185b16fd62d880e"],["/tags/DesignPatterns/page/2/index.html","3aa459a1be7e8aba1153795c5c44d2f9"],["/tags/DesignPatterns/page/3/index.html","2f5440d2638839e0687a6b7cc86ea647"],["/tags/DistributedMicroservices/index.html","a4df2a592116f901f37a4ac15750509f"],["/tags/DistributedMicroservices/page/2/index.html","8dd85127eecfa6c20e7044cdc4f41d7e"],["/tags/Interview/index.html","556dafecddd38955c07db2fb03b0427d"],["/tags/Interview/page/2/index.html","37caa8faba43db124075737435a6e3ad"],["/tags/JVM/index.html","3cb6877709669f46da9f4cacf015e4e4"],["/tags/Operating-Systems/index.html","572327f7610180f3c588d1c099b20e22"],["/tags/about/index.html","62ae0e803ecfd741dffb4d2f99f36247"],["/tags/ad/index.html","10bd0a7ecdbb07cd3aa52d2d1e990120"],["/tags/algorithm/index.html","7f91de32c87061949add9430d3eb5fe4"],["/tags/algorithm/page/2/index.html","f24226e8f902489be9ba4b0cccc2f635"],["/tags/algorithm/page/3/index.html","e69a517c9e86c9f505d6eb8e978d0215"],["/tags/algorithm/page/4/index.html","4784aa71a47e87cc75c33873a02058dd"],["/tags/algorithm/page/5/index.html","9fd5f9f5609854d4c37de86b205eac67"],["/tags/bug/index.html","c279bf26c6ed45323989c8aab9707397"],["/tags/computer/index.html","41bd8e652bee3ccfcbc33bf1bad91da6"],["/tags/data-structure/index.html","c7101b095028405f1604e2e7f1d76353"],["/tags/docker/index.html","7179179038d62891f42d403562fc4dde"],["/tags/famework/index.html","9f9da360d2afdb4245393cc716cc86cc"],["/tags/frame/index.html","cc20d131957c708dc5322894d007b368"],["/tags/frame/page/2/index.html","8301ffaa3fda5bd78d0c0008ffc64ae1"],["/tags/front/index.html","42d6b8e25d9638d3bb7bba75138ff5a2"],["/tags/github/index.html","d917aa8e5c63db9528bdeafd4fda1d4b"],["/tags/index.html","d7d917075347073b2c43199dd7255ead"],["/tags/interview/index.html","079ffef83273b130c71748dd22eda2bd"],["/tags/io/index.html","6e96ef506f4f3e45eee70057470adfa6"],["/tags/java/index.html","ac7591b43bfc64962e9fe642ceb07e63"],["/tags/jdk/index.html","216a7455b35af1a825472b274f6d11ac"],["/tags/jvm/index.html","bbcfe5ff02155791dd79aad2cf503a63"],["/tags/jvm/page/2/index.html","eb0e83a20e15a1677d3c547680c11f9d"],["/tags/linux/index.html","83385e691d1d7543e3c9058bac88fd16"],["/tags/maintain/index.html","7f32fae36feb78feb93c8328e5b52a6a"],["/tags/maogai/index.html","353a64324b767410cbdd47f0fd734961"],["/tags/math/index.html","b829bdeda671e5e0cf1b395f041853af"],["/tags/math/page/2/index.html","6929516dc88dd2a06b292231ed478508"],["/tags/middleware/index.html","a3904c6e295aef7484fea34ee34bf1b8"],["/tags/mysql/index.html","1102674565cc4120a612dfc1b0b0156f"],["/tags/network/index.html","b9ba0c4af9cb5bea78ade2f27f81c9c9"],["/tags/network/page/2/index.html","66e4b23fe55e5aa7fc11f026fe1fe60e"],["/tags/project/index.html","27f8155a425bf832def6a7c20b76f1ef"],["/tags/project/page/2/index.html","f403c34500d90eebcdd4239146ec15ea"],["/tags/security/index.html","85c6497c7ba5f0ec027a98fc2afc5116"],["/tags/sql/index.html","3b1e2c06ea13624f4f4edc35fe732858"],["/tags/test/index.html","9e034d11dc62ce533985576358e24afa"],["/tags/think/index.html","ef801f1dfd6d83d2f4acca10ee84cc5a"],["/tailscale-ssh-remote-connection/index.html","62c876fe98a76ec948b95b3a9aefe5c4"],["/tcpip/index.html","0b4ae981ecccdba8e7ff44eada475522"],["/template-method/index.html","1eac9ca60ad2430a3a92aa0b31e1d513"],["/test-case/index.html","48df2f212ec361ffea5952c0a823005e"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","78647a49f4ea89d6e8bdf13803af1ca7"],["/thread/index.html","eac6c2a79dd075127d3f25970fd3452e"],["/tj-horse-racing/index.html","3d8e93d2c4d1fad8e0e9b043ce3cd9cd"],["/topoSorting/index.html","6c80f37caa141e233d3f16d3e0e208e1"],["/traffic-monetizationaccess-to-google-adsense/index.html","0166568157b58a2b856c86bd3db33f0c"],["/txCharity/index.html","8cf3812a8e43b6a87b8cdc05bf73e114"],["/ubuntu-set-ip/index.html","170e70d1fbfa2f585a52e3b7fdff7317"],["/undefined/index.html","280fa90f8a21d05bc53fbdf04dc9a67d"],["/use-arrays-to-process-batch-data/index.html","a1b1ebcb8115a4aa4341a70ccfe11790"],["/use-of-springmvcmodelattribute/index.html","bf88fd06f1529d39ff24c5a23780c05a"],["/users-create-data-types-themselves/index.html","40d2a06a5979b2cc94e1f97d2f5c354c"],["/visitor-mode/index.html","49aa76b976e2886ceac44776f1719158"],["/what-is-milk-and-why-is-group-wise/index.html","a72b33e059163f240e73bba6995292d2"],["/wiki/index.html","b2edf64f54cf67736349230a5875f7b0"],["/wiki/tags/知识库/index.html","be87ca6f759c03114cbf0389c3467363"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","24ec8111504c252d0638f27e325b9c8f"],["/xss-crosssite-scripting-attack/index.html","177630174ab1da3f7df322e4bf36aa4f"]];
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
