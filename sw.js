/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","fd35ffa8fb45cf47480c65f64e250447"],["/404.html","02c43eaf6aaedc6a0dcfcfa0711d8102"],["/404/index.html","15e78362c40be596f764823fca27af86"],["/7-sorting-algorithms/index.html","ac107530f1604574d413e8e2feab8354"],["/AIO-blocking-model/index.html","1d6ecafc3fc7d09819b3dfaf4ca43941"],["/About-Snowflake-and-Consumption-Degradation/index.html","78cb3a84748e10d88d0624c276a77f2b"],["/BIO-blocking-model/index.html","f15f22084af5b0587edd830eb9411212"],["/Bloom-Filter/index.html","df2d34fee655c78a99bbda514043c046"],["/Boyer–Moore-majority/index.html","599b8cc950a4764dcdff3b58789e4dbd"],["/C-algorithm/index.html","6bfce2edf830d05ef1025329dc83999e"],["/C-programming/index.html","8e6fd78974181e175436c6b14921bf69"],["/CAS-&-AQS/index.html","66b6a5f7ace299b7040c8d1e1aff61be"],["/Comparator/index.html","ffb7e3ffa5f466aaa87600b373384d27"],["/Differential-array/index.html","916b9ffd5eed7bf827e6a78b2e8a1b9b"],["/Download/index.html","29f834f041958f47640c195785697551"],["/Front-end-security/index.html","0601de5b04d23d75dd7b7ae8afd28e84"],["/Good-use-of-pointers/index.html","550a4d998ccacfb399cc46613054e1a0"],["/Graph-degree/index.html","8eb977fbf7223ebdc3b2cbab4e04b85c"],["/Greedy-Algorithm/index.html","fd638715b037de513418d611a459a181"],["/Head-First-Map/index.html","cd4968e411fe506de59002e520b314bc"],["/Head-First-Netty/index.html","27a3c5bacc35b07edf28ff315850f957"],["/Head-First-Nginx/index.html","91ba441f4bb33487f114d6cbb6617183"],["/Head-first-Spring/index.html","1bbc4d7fe2aab66e1155072f5a07769e"],["/IO-model/index.html","dc5ac9ef0b99cb910b8c187a7367caf1"],["/IO/index.html","d200d1d0b3e3432c82ca9cc80336c6ea"],["/Implement-a-lock-based-on-ReentrantLock/index.html","24369994ff949c92df7bfbd95e249d4e"],["/Improve-Robustness-(1)/index.html","cf4f43c405823ca0262445f72fb5215b"],["/Improve-Robustness-(2)/index.html","f570178d7109e809427f97977cc2c832"],["/Integer/index.html","11aa05689f038df91365893845dfac53"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","eb9074d6ec1b98c07f0fb3485a509a45"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","900ec18fe0653faf5e612e5d5f2fb020"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","0a04dae4c8b4970675fe112e51924ec0"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","ac1ac517be94bc2f5cc4aee5b2174e2f"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","3af88ce94276225988f68df2ef86c7e1"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","130e7ec50a50c9808ccb8985779faabe"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","1a839e26a415df53cc0b1412a1d3062e"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","e6721474287b5b3f642d5948415639f6"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","088fe38c4e9c29a4f4a30a539e52e9be"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","897ceb33a0a9dcfd15bc30a84e3c578b"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","89179a59dc260597d7ef6bf84a6973f5"],["/Java-network-programming/index.html","ffca76344032cfab4098ccfeff1700d6"],["/Large-number-operations/index.html","5ccee95601bb39334a83ddf6cc11df42"],["/MYSQL-MVCC-&-LOCK/index.html","90818baaf2b2a5bdd9a7fb7fc28b8443"],["/MYSQL-uuid-and-page-splitting/index.html","62122221f4287abbca99dc2b023b32d9"],["/Minimum-Spanning-Tree/index.html","629a64153b763ccdf38d9f0e676e9ffd"],["/NIO-blocking-model/index.html","eaca0b77f15666b1de63a2efc5ca2a2c"],["/Nacos：Configure-MySQL-data-source/index.html","5a2b749e0cdb3deeaaebd687f2f45ca9"],["/Native-method/index.html","02404964602dd1e7da5369b202117420"],["/PriorityQueue/index.html","67b3dfaa4691a50c3ef6f21d9a58ff3c"],["/Proxy/index.html","e04cf2c53eded5de2914e44a4b562c70"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","4d0c8f5c4895380e7a04278107079f5c"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","005bed830a819f97c0edf8214faaa976"],["/Reservoir-Sampling·/index.html","242822e086da3a42369cfd61449d225c"],["/SQL-injection-vulnerability/index.html","e5f8d8f7541747e6bf29f4ae53eeb4bb"],["/Sandbox-security-mechanism/index.html","1d18b112aae98cb4a16ae21aa36babf5"],["/Spring-Cyclic-Ependencies/index.html","f8e52b1b5927bcd036de6b8452040deb"],["/SpringBoot-startup-process/index.html","905abacc85b5940b376ed4bd91a02467"],["/SpringSecurity/index.html","c0acdf0061b5f69e49a288cb236c3cba"],["/Thread_Pool/index.html","6ce9f4d331aa48b78a76c2dbfa48f824"],["/Transaction-isolation-level/index.html","bd3f9dc25d2419608a8da94847767507"],["/Unitest-framework/index.html","d5523241eda0f3757620180d92ab8da6"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","8cd279bd63653f1b77acfc8304387e82"],["/about/index.html","492ef86ac100f0fd2ec1acc146a2b65b"],["/adapter-mode/index.html","6c3a03c839afe55ffada98b8473a372d"],["/adjacency-matrix/index.html","b69deebfe0cf0587f44cb4db11efba8a"],["/adjacency-table/index.html","15b063773abfab1c7a8345fdb69eb73f"],["/agency-model/index.html","a152382fb7a838d4999bdf0fc949d446"],["/app-test/index.html","b2f34e5afaf408582a87ebdb8e765d43"],["/appearance-mode/index.html","0e9bc6360d255cacdebd18297c5a0385"],["/archives/2019/01/index.html","da59cbd4128068cb48bdcc4a951b0d8c"],["/archives/2019/07/index.html","d2bc98ef29d7d47ad50c1cfd6a629e63"],["/archives/2019/10/index.html","c9b6610fa605c6f892db970a632595f8"],["/archives/2019/12/index.html","8dc67488a16d8fa3bb22918a4c4aef2d"],["/archives/2019/index.html","a5242f932c08a7f221a4158c8902bc04"],["/archives/2020/04/index.html","124710e653823a4e6d7ef884cb295667"],["/archives/2020/05/index.html","1dfafa9da53b747fdee1cd415442a6b6"],["/archives/2020/05/page/2/index.html","81ea5a74297b25918cc1ac25c8ea503a"],["/archives/2020/06/index.html","f8a9fb48ac8bafed07429797723557a2"],["/archives/2020/06/page/2/index.html","8ef344179a8fa1e2fffc97d7dd463584"],["/archives/2020/06/page/3/index.html","a7af7d399545280e3731e730526a947d"],["/archives/2020/06/page/4/index.html","6e35a5e3ceef3a8bc5da0cf4d3f7c87d"],["/archives/2020/07/index.html","e90b3c33aa26c50cb4e700c7519aa2a8"],["/archives/2020/07/page/2/index.html","2058b02b54f53760e625e68f96fb1b48"],["/archives/2020/07/page/3/index.html","9a10c1c0e7dc207c56d510744fd1600e"],["/archives/2020/08/index.html","c373d692d3b83c31bc80231f6be8633a"],["/archives/2020/08/page/2/index.html","9974523bec2beb775ed72860575551b6"],["/archives/2020/09/index.html","841fefe32cd9a8aea4a3095fe7dcb49e"],["/archives/2020/09/page/2/index.html","ebeacca26149f722d0926bfa0efcaafc"],["/archives/2020/10/index.html","9c27a36caba3e92d4c45acdcda7bcd8e"],["/archives/2020/10/page/2/index.html","9e0ee0e9f97da9542aef5fefb92c442c"],["/archives/2020/11/index.html","2283f1885654496de3fea6fcd8cb1bfc"],["/archives/2020/11/page/2/index.html","d68afd1e86037f9e63bcf2b6637e959c"],["/archives/2020/12/index.html","1e92ec3aa34bed001960aecefa04955e"],["/archives/2020/12/page/2/index.html","2c93e80865c60bac051c886768cce34a"],["/archives/2020/index.html","079489c4284ec0b75407e516010e79e7"],["/archives/2020/page/10/index.html","bb7f7941f73ea6dd394c67b5c2c540d2"],["/archives/2020/page/11/index.html","4255f2078a8e503110514a7ace221e06"],["/archives/2020/page/12/index.html","9d43d6726648e5a1ad67d2e027535e72"],["/archives/2020/page/13/index.html","cb0779b12c91d3654023e064fbfb056d"],["/archives/2020/page/14/index.html","f58e97a0a777ea8da39a953c0812901b"],["/archives/2020/page/15/index.html","7c49eb7c1aad0237fad1cb6b9f10efe1"],["/archives/2020/page/16/index.html","e215f31f65609363e3c8fa1264235eb0"],["/archives/2020/page/2/index.html","3ee8326207d56500a89c4a6ce3a7efbe"],["/archives/2020/page/3/index.html","15191caea7e097232fc420a37dd10dad"],["/archives/2020/page/4/index.html","6ef7ce1cad69fb21259efe9b1eddb9c6"],["/archives/2020/page/5/index.html","4495a6bad3b0448ebc21e3746a1dd705"],["/archives/2020/page/6/index.html","eea69fb3820c2659eaf3c1c51cf58375"],["/archives/2020/page/7/index.html","d8b3d9ab6db599c380204412944bac29"],["/archives/2020/page/8/index.html","cfb84bd7d9580c1e9077abef709adc70"],["/archives/2020/page/9/index.html","8350b5ef5d5d05a8423f3274c360ac44"],["/archives/2021/01/index.html","e4e196120dce7eaaa2a2d241b0ceed5f"],["/archives/2021/02/index.html","f42727ee250f588bec8742660a5b58a2"],["/archives/2021/03/index.html","1b2c4257135897de1c2c181c60452813"],["/archives/2021/04/index.html","24e6def574c91f34ade5dd89523b7329"],["/archives/2021/04/page/2/index.html","5a329c2b0088bfb33df052aa29c64ef3"],["/archives/2021/05/index.html","0a50b3519e537c9f9fb591decc82a16b"],["/archives/2021/06/index.html","daea20149556f7cf3dc4bf5a20e5c5ae"],["/archives/2021/07/index.html","8a1517765961315916933350d39b86a2"],["/archives/2021/08/index.html","df06d348fc0155f2c04d9cea97e83e44"],["/archives/2021/09/index.html","efbdee59ac3385e6b28a4b1d4991c30d"],["/archives/2021/10/index.html","bd2c8ac9ae3761b02a2a2dbdb80b6fd9"],["/archives/2021/11/index.html","b17fb146a085e214a0e1b39f29019f60"],["/archives/2021/12/index.html","4f01fd11dad6cde0dd4124244d3c86d8"],["/archives/2021/index.html","9745a19344e75446be694e4542bfb717"],["/archives/2021/page/2/index.html","0ce0835e5819facae9b7ba951e9cf992"],["/archives/2021/page/3/index.html","b44ecb487d226d5b21c5b141edad0569"],["/archives/2021/page/4/index.html","e54b22a00bb2ccb0bc0596127e963acc"],["/archives/2021/page/5/index.html","f7b3a181731162eed37dcfa9f1dc2332"],["/archives/2021/page/6/index.html","fb11373ffc672cc539236ccf157beef7"],["/archives/2022/01/index.html","230b747bef0763cef1ec7445c0de23fd"],["/archives/2022/02/index.html","5624de76eebe630d79f5c2a3c0106e53"],["/archives/2022/03/index.html","36c8390be9023be4c5643401e00fae41"],["/archives/2022/04/index.html","67f223368af63a80bb59de8b51a18ee0"],["/archives/2022/05/index.html","d5829febc5c57b84a3443cd35580516d"],["/archives/2022/08/index.html","68807e33a6d73f456b818650257d67d4"],["/archives/2022/10/index.html","d0f758e36326a82d99a963c2540b27e8"],["/archives/2022/11/index.html","bf92f0c60eca0b6d8805c2e54b742df5"],["/archives/2022/index.html","bc6fb760992d26c87f38200c3db57666"],["/archives/2022/page/2/index.html","e8a38dbcd4e062508ebe66c453120533"],["/archives/2023/04/index.html","3d9146afd9382375a9ca7aa12beb364e"],["/archives/2023/06/index.html","cebee15d01ba5ebd57a362ed3ca09cf4"],["/archives/2023/index.html","9f1de40d31f85a31eb01316420f0e84c"],["/archives/index.html","4f11379e123503fb21431a5d064c9dde"],["/archives/page/10/index.html","50b39272f5de014ed1740b60c55d6055"],["/archives/page/11/index.html","f83a269547da356f9bc10108b1730dc0"],["/archives/page/12/index.html","64767f8dcc90f2b650ba13e1748d8bc1"],["/archives/page/13/index.html","1620da219b0f252b9bacaa60c1b8166e"],["/archives/page/14/index.html","23890d895b71ef20ae88ef636994a8d4"],["/archives/page/15/index.html","b3d67cbc549694852e150533cbd9b25a"],["/archives/page/16/index.html","f03af9594e243618e45647e6afa9f141"],["/archives/page/17/index.html","646c6a09df534c42da42d67674520170"],["/archives/page/18/index.html","0b7d1f1156f3d85a1c7f3e477cafd366"],["/archives/page/19/index.html","9464d24e50c6824a53129cfb4b734db5"],["/archives/page/2/index.html","a97ae7c4625cda35de4939132344cc1f"],["/archives/page/20/index.html","78b82784a7e05f5c8081fed8268384c4"],["/archives/page/21/index.html","2a83a8a063ef0e38b57a75dca37718e1"],["/archives/page/22/index.html","240f92aa77f56ce3e6a82d513bc82274"],["/archives/page/23/index.html","c3fb3c55a535044b5a3587d4116cf697"],["/archives/page/24/index.html","ac36bbeb5dfcdb440b971d32c4244350"],["/archives/page/3/index.html","541a6f32c0c6ec352730a22ddcbd9672"],["/archives/page/4/index.html","f03dabde531dd746d516e3bf577bc997"],["/archives/page/5/index.html","092a0c4197c040148e94b2ca399c7462"],["/archives/page/6/index.html","906dd292e2e844af1f5b02d56b8012fd"],["/archives/page/7/index.html","53a3d98bfe71b5f16907a0261741c801"],["/archives/page/8/index.html","0724b2fe5f39a224c9fe41c43a0daf92"],["/archives/page/9/index.html","1a08f724446ee6165f510641ab8373fd"],["/array/index.html","49ac01f3a06bd4556425adca13d0bedb"],["/automated-test-katalon/index.html","009258a8421e3b0b0ad79933e00c27c3"],["/automated-test-selenium/index.html","2352571fafed7140ba09e5fe7bc3c112"],["/back-to-table-query/index.html","c7cf13839a19c671e7250eef4d52f1c9"],["/binary-search-algorithm/index.html","f9e09337a72a745348f4adc9de51f6bf"],["/binary-sort-tree/index.html","afdc9d3ee5d8daf7ced8c6d811865571"],["/bionioaio/index.html","753f0aee5ae986d0fb0361637b33b2a3"],["/bridge-mode/index.html","d0c956070999449dd05cda2a4914453a"],["/builder/index.html","d4e564e83f19ec6b5f74005a898ce28d"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","f2f244441f1fd79e2cb7a683ca8e989f"],["/cache/index.html","8535de076f3a032923f6566842e1d549"],["/categories/C/index.html","ac78e276f1e6cedd8fbe091aaee2e056"],["/categories/SpringMVC/index.html","5381a703da8c2a410366b8be71ec6295"],["/categories/categories.html","5b0cb0648b22a8ec845508e0672b03d4"],["/categories/index.html","d2d79977daa60d7e3c0fb129d3adbe84"],["/categories/linux/index.html","b1ca252563a26de3660b2c642a8bb847"],["/categories/分布式/index.html","35805c6b8da3a598185ce94050d8a27b"],["/categories/分布式/page/2/index.html","486fac96f7aa6ce8a385388fdbc5e072"],["/categories/设计模式/index.html","d4a6ad12a36490ba6dd5a4ac14a7eea0"],["/categories/设计模式/page/2/index.html","65ef7ddb954a4dbef69155720c2742a6"],["/categories/高数/index.html","5687625fd00f5325f9da9742cbab0ae5"],["/chain-of-responsibility-model/index.html","6c5b2e83be019e4f3f4eba039421b59d"],["/charity/index.html","6da5d8cf82639ed479c3f826b794ac2c"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","e55b879ca0f4b84c89bf6a52c3f66c08"],["/combination-mode/index.html","498f6e8a9ca545b3c1034aa5d323399d"],["/command-mode/index.html","09a474893f06b68d0a14059d61c6942e"],["/common-commands-of-unix/index.html","fb773b5c0ef4422514029b6d1afb3eff"],["/computer-network/index.html","007642e3dcf7a9ea149483ea113b9392"],["/concurrency-principle/index.html","54fb09c906e41efd6eac01947cd660ae"],["/continuous/index.html","2b81eaff33c9c01ecc80b1d2b6ce88d4"],["/contract/index.html","573318c6aea702ca417114d1a2a645fc"],["/create/index.html","a5d94666455fe8562a4f1862abd28bfb"],["/css/main.css","5b96271d15a59f7ffdb3351dc1daa2ab"],["/cycle-structure-programming/index.html","b2f59fbcbda03b507974dbcefe65fa38"],["/data-structures-and-algorithms/index.html","9484b9e0c8c58c0b54801a59cbd6a8d6"],["/deb/index.html","10d4bf5df2c43a5f22e89956c40e2cd6"],["/decorator-mode/index.html","b82bc43c9017ca603d892b43503ffd6b"],["/definite-integral/index.html","4d5721229230cc82038893a54e5e87c5"],["/dependence-reversal-principle/index.html","ac8b6d5aca6eff80cd82f92f786a0aad"],["/derivative/index.html","b5e36479853c921cda4a5c003be2a977"],["/design-patterns/index.html","c890719693c6d7bedaef7c8160623801"],["/dic-algorithm/index.html","6e92780f08f53c872897591e3b7af5fd"],["/differential-equation/index.html","1a05ce6de4f42b319952fcb7f4757fb3"],["/differential/index.html","c9bf6e518e8ed9302ba1b78a382fc697"],["/dimits-law/index.html","7264b75f5fea6227259f15bc5c826275"],["/distributed-lock/index.html","48d8360ed54ae282de99dede2b9eea8f"],["/docker-virtualized-container/index.html","bcaa907691154a5347a9cc73a33242f8"],["/double-integral/index.html","f0bca5ecf608d70bf404dbb02287fba8"],["/dp-array/index.html","613f62ae9479556170a0fad3a6bfe2d8"],["/dynamic-array/index.html","a87a6b732f039d65641571110d7c3cd7"],["/dynamic-programming/index.html","75d32346bb1ea392b21936a0d0597618"],["/edgeset-array/index.html","d115bb52d95e948019df1a1232ba692b"],["/encoding-algorithm/index.html","3f167ebab79432372a1f1156b2877355"],["/eureka-service-registration-and-discovery/index.html","237f1b4098221abd972e84d730088cc6"],["/extreme-value-and-maximum-value/index.html","b0ceaee83c3b0dad81ac0060acb92348"],["/factory-design-pattern/index.html","c0791c3ea7c6a4f907de644f21f9f68e"],["/file-input-and-output/index.html","dda5550d1e060c74509f50265efd221c"],["/flyweight-model/index.html","4f2722cbb2479701d123e1d5107e71de"],["/friends/index.html","088e43962c25d493e54c99d6027015bb"],["/function-graphing/index.html","b68b5dda6e269f3a1461b83801f6511d"],["/gateway-service-current-limit/index.html","1b8759e52ff67e0b5a62d992c0a97623"],["/gc/index.html","31adc462b1f9f0fc15600b5431fc1540"],["/generalized-integral/index.html","b7f96190b523bc355be5800d72960aaf"],["/google8102e2f35ce9e391.html","6053baf41b525f83c70e866cd2471e3b"],["/gulp-compresses-static-resources/index.html","371c011cb57b07f27691410daaa1eff1"],["/hash-algorithm/index.html","87ff3c96bcd2fdd0f24358b1ad626093"],["/head-first-JVM(1)/index.html","ac347e1dc41f357a21b50291ff2143af"],["/head-first-JVM(2)/index.html","eec3639287ddadd4c7628daf269ba145"],["/head-first-JVM(3)/index.html","2d93a1a35b4eec82606d10bc50becd6c"],["/head-first-JVM(4)/index.html","5d008537efe251e96f790ca231b26045"],["/head-first-SpringSecurity/index.html","bf016d30aa39c4f7baa1a83886d6910e"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","eb5adafb13ae133608d807748d789606"],["/heap-sort/index.html","b895dc64885657aec9dd063ea369fc1b"],["/http/index.html","e1c242ad01bf4bb0c16bf622c65898e0"],["/huisu-algorithm/index.html","ed4b2e5353c675bdce90aee7bac9e447"],["/indefinite-integral/index.html","bdb9154598e1b52bc67365acc9d40a22"],["/index.html","c1b8eb63fd17f44e53430bec8492355e"],["/infinitesimal-and-infinite/index.html","8ca89804a22ee71846b6c94a3227d464"],["/interface-isolation-principle/index.html","ab31aff23938954d763a1390932f62fc"],["/interface-test/index.html","5183a0f80bc961c1b68c671dd4208ed8"],["/intermediary-model/index.html","b81bbde5cf459dab226b5e774bd2ff0f"],["/interpolation-search-algorithm/index.html","2656450770c39700184d8ba72b2f1755"],["/interpreter-mode/index.html","9ae4016da6d417b5ed86ab1d5696c3d8"],["/introduction-to-computer-network/index.html","072dc7a22841de71cf437a17c5911279"],["/introduction-to-operating-system/index.html","23ef6508d2fa29c2db6c05365fb8838c"],["/inversion-of-control/index.html","c1b56151208d2c9660df184aba819431"],["/io/index.html","d8e9818519c7180f58fc5a0512e57465"],["/iterator-mode/index.html","7a063ae97851665625ce82858bd57cdf"],["/j2ee/index.html","5150f2fd025bd3f1a0985f6f0fd37e9d"],["/j2se/index.html","f731e1d24a3c27b4dbc0e30e5ad145f5"],["/java.lang.String/index.html","3b061caea150ad66cbf440026143b942"],["/jdbc/index.html","7ac3c85f8af3636fed5815a2dfc331f1"],["/jdk/index.html","78de3f0326d87433fdcdf44890e8c121"],["/jmm-memory-model/index.html","129fa320b8ee4100dba4447870cf1222"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","4feaed458f11bad52e5ff3d2244ac729"],["/jvm-method-inline/index.html","ab4293eaca6061f1dbc5f21264f1e9fe"],["/jvm-tuning-practice/index.html","842ac58b58fe2e591229c041ffc6b364"],["/jvm/index.html","4ec8a86967102301250b1d742115fcd7"],["/law-of-robida/index.html","b3dbf674699ffa9eebab82d88e2c186e"],["/limit/index.html","de4db130e5d59c6b08992aaf8f6dce86"],["/linear-search-algorithm/index.html","eecbb6bfd24b6e22ec0b91990b2f4482"],["/linked-forward-star/index.html","9d5fd200e4169a2d92e88bc6d47ae201"],["/linked-list/index.html","518076851dc0ac88187bbc484298fd9c"],["/linux/index.html","d7b8bf24ea1c7da5670fc38f24638315"],["/liskov-substitution-principle/index.html","6ff8dad6ba24e31df3e3398244d6c5ba"],["/lock/index.html","2df788f8a5283516c474b566379c530e"],["/lru-cache/index.html","2abb23818e0915cbada5466411544b2e"],["/maogai/index.html","e002b207188a44417ed35cb9c1e586bc"],["/memo-mode/index.html","ae19bb9af39ebbae083a27fd9d871414"],["/monotonicity-and-convexity-of-functions/index.html","dc00d145e3d48a2d02f14f5731a0f062"],["/multi-function/index.html","9291e396cac8ece697136c5aefd1d35f"],["/multithreading/index.html","5650e9378bb1dd8c2914ab91eb7a6080"],["/mvc/index.html","43d68e647b4740cf09f3d13c76f85428"],["/mybatis-cache/index.html","6f7decf3e15c7442f80ec80be6898bb6"],["/mybatis/index.html","f332daee0de5af4ff46f5213b8341a3f"],["/mysql-index-wrong/index.html","1a36c0aebc252aaec3a723b5fd142cf3"],["/mysql-struct/index.html","396017b8df3001ddb5d4ceb1e2f3d6be"],["/mysql/index.html","451200d4666d84a40e81d8da85441e10"],["/nacos-service-registration-and-configuration-center/index.html","7e4666ff7d0b19752c1548ad165ecd49"],["/notes/index.html","e3f9981a9feb083cb5177d930e97af53"],["/null/index.html","97389fa5f30ff2061f6ad364b78f8175"],["/objectoriented/index.html","3052674cf7e73015074d72629137b772"],["/observer-mode/index.html","0db129694b96a8aaf0a0cd54c5dcba73"],["/off-heap/index.html","1ecf0953af970dc7903c14b6e39c9868"],["/operating-system/index.html","a08db1cfb24f732271dd9cea11df7f3e"],["/page/10/index.html","8c48cf17fda50742f1ff8da0f2904639"],["/page/11/index.html","15654ed1ca8dd4cdf3fc9f7f64e7d797"],["/page/12/index.html","c84dd63446860905e1d84d78f161a528"],["/page/13/index.html","8e44cda05c136d6bd679dc8c986a2480"],["/page/14/index.html","a26ce1b15c3baee31ff84d3aae759262"],["/page/15/index.html","b5d70a4b4ebf84d88905dc72347674b3"],["/page/16/index.html","761e75bcba25bb6cb115fd6f0d605300"],["/page/17/index.html","b5b8e74c6bce9bc21ca6a0af7d185909"],["/page/18/index.html","ad4628c6c21a5cc1046d2d77a8f06954"],["/page/19/index.html","f563452657c31d10cf0e97e50fb0b479"],["/page/2/index.html","200b30e9f8ec9065dcd79db4a655c39f"],["/page/20/index.html","716f449c53e677285eaa4955d1f7bcfe"],["/page/21/index.html","525c8c97e7c4208275d35e0852ab960a"],["/page/22/index.html","0d218a324f30975c2866b2b16c9e7792"],["/page/23/index.html","c14f0dd83ecd07e8c92ab676fd1db0a7"],["/page/24/index.html","61ef17bfb12dba07114cd957dffcd9b0"],["/page/3/index.html","780650f4ef9b74a0c352be278834e862"],["/page/4/index.html","c4eb78158250b57cee8b8109073371bc"],["/page/5/index.html","786bb4cd2392e0d431518bda9c69e149"],["/page/6/index.html","c7720ee7eee2d3ee48b061b3f30d950c"],["/page/7/index.html","ac913d2c46a79d0a669798be4114d758"],["/page/8/index.html","839059b467425a8122f7738b0d610630"],["/page/9/index.html","0802ad60374526722134f449fb3e13f5"],["/palindrome/index.html","78c7979063196dc95ef49ed3987e81fd"],["/partial-derivative/index.html","7fb604c1656f7cdeb0e85dcde6b88981"],["/pass-by-value/index.html","8a5d763c646bcbeaa511107cc6e8e746"],["/pictrue-bed/index.html","7da9dafdf86865d97c87ff689955ee20"],["/principle-of-opening-and-closing/index.html","3ab24d67c76c8f1c77e4ec3069053991"],["/principles-of-computer-organization/index.html","19ff92cd074707f2f53aaf75b5d51186"],["/program-test/index.html","d5c887ad4d94462a24773df8cecff505"],["/prototype/index.html","0d2651570f41a15fe97ca822d5a3ed7f"],["/queue/index.html","d22524c9829c44947333aa12de95f404"],["/random-weight-distribution/index.html","7aca3bffe75589e3f21021a6bc4102ca"],["/realize-modular-programming-with-functions/index.html","ef2fd042e03a985580a9f2ffe7bb4da0"],["/redis/index.html","223d69b3504a2cd97b44d646fcbcfddc"],["/reflection/index.html","911266c75e2a5f66cf471a322efa4b58"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","87c56000c240af49285869f4e1cb89b6"],["/ribbon-load-balancing-service-call-degradation/index.html","b738c1735ab423be81085245790e56fa"],["/round-dp-algorithm/index.html","f328a9b4d93a9add04f725de28d29a21"],["/seata-handles-distributed-transactions/index.html","0feb1e937d8a55ed2828594668e1a5b5"],["/select-structure-programming/index.html","1d0568cf8bb0e37352adeab6f353d284"],["/sentinel-realizes-fusing-and-current-limiting/index.html","e61de4e424530295fad8dbe06d415712"],["/sequential-programming/index.html","cd72247825dde388e3668aefcc341534"],["/series/index.html","01c5758dc8d10b6050f95beb94bd3d7e"],["/service-worker.js","5fc3d96f73fb7e9db54fb27305679361"],["/single-point-login/index.html","86dd884aa27e49ba9e6338394dc42980"],["/single-responsibility-principle/index.html","d802770e8818cb3fe2b52a6a79932f33"],["/singleton-mode/index.html","7715588a94c0882c03c918993f7c1eef"],["/slidingWindow/index.html","9dae42dea9205b43daff61d90a9ab5ef"],["/snowflake-distributed-id-algorithm/index.html","bad730919368eb20d988a38690d6d361"],["/sparsearray/index.html","ae53a91405987934ff49f641b6d3fd63"],["/spring-and-jwt/index.html","ea44f169ee802465968c74f3ae9d3cf3"],["/spring-architecture/index.html","18dba933f4a6a7300389b68443d954f9"],["/spring-relate/index.html","8c5965cc0098f86f7c4fd7d42678df8a"],["/spring-springmvc-mybatis-integration/index.html","852ea804aba7f70370c966989b024123"],["/spring/index.html","fd2a449b2722c0b58cf66a2c9b53170f"],["/springcloud-alibaba/index.html","ceaa266aee6d041ed43b93cc360bf848"],["/springcloud-bus-message/index.html","7e916c81b046c4081920918ab519ae8b"],["/springcloud-config-distributed-configuration-center/index.html","53a9bbf9dd149bf79ec1fd844c298a59"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","7fba34e8e9afb801960ff52e61a7914b"],["/springcloud-stream-message-driver/index.html","bf9d859de4a119abf8ae0c0c35f11648"],["/springcloud/index.html","abdde0090d6c7b4af16b5fe8ca91a277"],["/springmvc-environment-construction/index.html","202697a514da7184f79f8e59df972143"],["/springmvc-work-stream/index.html","19f742ef115e0b459da52e5a1c199757"],["/sql-injection-attacks/index.html","9947107d340d6096fa1392c2f07de162"],["/stack-simulation-iteration/index.html","4e40c314beb44414e3db385de510e794"],["/stack/index.html","fe93a412012901f99e28d93a552a5bc9"],["/state-mode/index.html","aa20e841b150910602254c69ed0f6058"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","559653ed5086a18c2463d493797c26fa"],["/strategy-mode/index.html","9c5b7ab9a2decd003a8310b64d2a707e"],["/sw-register.js","864fd012e4c38517a654c2739cd47862"],["/synthetic-reuse-principle/index.html","ae8f17b095e3cec146fa6fe4ad192a39"],["/tags/C/index.html","af4904ac72e59eb173cb147fd666a07e"],["/tags/C/page/2/index.html","04e9418a0283ef47e6f5a578463af09f"],["/tags/Concurrency/index.html","cb82435bd55ca40ffbe2d9f853037db6"],["/tags/DesignPatterns/index.html","2ca5a3fdf09553b3c5272cf0d692241d"],["/tags/DesignPatterns/page/2/index.html","62af34eaf529fd74416ceab1c35515b2"],["/tags/DesignPatterns/page/3/index.html","f4b5340bcffdc3b5ff386599c6acb618"],["/tags/DistributedMicroservices/index.html","a2017231164d90063b5159bb74521e35"],["/tags/DistributedMicroservices/page/2/index.html","b060b2b11c8d2222eb12fac648e8489c"],["/tags/Interview/index.html","92576b82a876ac704f4707d1019df303"],["/tags/Interview/page/2/index.html","1fcd89144d230a7c2d68495fdc62f565"],["/tags/JVM/index.html","635406e62683948656d75eea753ea22e"],["/tags/Operating-Systems/index.html","706a4fd6a5f5ce2d117d4757e1eca478"],["/tags/about/index.html","7e8d237c4ee71c84fb9679d2e3c49845"],["/tags/ad/index.html","f98e2b205ea54b049bf4d7cdf7739ac5"],["/tags/algorithm/index.html","a9bf2ba19b055f2cdb94e4486a8c82af"],["/tags/algorithm/page/2/index.html","383b0af8647bd557d5918bc08fe36dfa"],["/tags/algorithm/page/3/index.html","9df1ac5162bf350de2de614b1fe8091b"],["/tags/algorithm/page/4/index.html","da1a4db2ef5223e12dbec68457b6ad72"],["/tags/bug/index.html","c75fa815cd3420c5d8405c1b0ef1d218"],["/tags/computer/index.html","ecb5b8c6f5773a930ee60d7c28774bea"],["/tags/data-structure/index.html","4baabbdc219d08207ce653120b04dbad"],["/tags/docker/index.html","a25abd1456ca70505b84b1349db7bbf3"],["/tags/famework/index.html","85febc7b2acda504cdd3ac1860ec8817"],["/tags/frame/index.html","56e981343ba082a52ef39cfdfd515d19"],["/tags/frame/page/2/index.html","13c677553b83717474a89dc8ccfd03c9"],["/tags/front/index.html","907be19a2617ef9cad578befd5e589fe"],["/tags/index.html","d68111dad8846f0b45fd6ae03bef4476"],["/tags/interview/index.html","3fa8b13fdfd513f54254cc57a6540047"],["/tags/io/index.html","fb6692046262875932059fd3197eafb4"],["/tags/java/index.html","24ebdc5872cfc3ac03050958fdbd5303"],["/tags/jdk/index.html","d008c290752fc56e25c5497237f9cf63"],["/tags/jvm/index.html","ddfa58e84df13e86940e97188b4ce089"],["/tags/jvm/page/2/index.html","53229f49de946f27b4772fd80ffc5c07"],["/tags/linux/index.html","593d1e663827b0c555daef3f1b179d90"],["/tags/maintain/index.html","91ada87241c214cf8aa5fe9a483a0aa4"],["/tags/maogai/index.html","8b5374890ea705ebc1e3d5a72dd0515c"],["/tags/math/index.html","e6ad7f71df6e327e1c573bebd3c5e012"],["/tags/math/page/2/index.html","3de03a7211a22be470adb751521ed753"],["/tags/middleware/index.html","26490fa418a2e61be9481c2b8fe1c3ac"],["/tags/mysql/index.html","f774e862f1bbb41ff5314bbf42144cac"],["/tags/network/index.html","361efa2a03501d82ef37a5999eacbb44"],["/tags/project/index.html","f1e28e439e168805e23541e476688afd"],["/tags/security/index.html","eeb3cd31da51e75eb529c1baced1aa0d"],["/tags/sql/index.html","c2aa9a60f0fc5f6f826dc21fa41e6e31"],["/tags/test/index.html","96468b6f8064341da5ba2f9b9c2e58c5"],["/tags/think/index.html","1a399a1d9fd5ab0839c0ef0802648e75"],["/tcpip/index.html","2842ddf8acedc5f4a4de147822fde3e9"],["/template-method/index.html","a191d62199d0b1c0534f7e31b46e6413"],["/test-case/index.html","b6dcbbe67a162fba7fb1eb5f175ef268"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","a29b781a38398c593fbb7d75e9d42ebc"],["/thread/index.html","83f480cae9fcdbb9b5be1473581ea57d"],["/tj-horse-racing/index.html","3279ec465ac2b14754004f17c7cb9328"],["/topoSorting/index.html","71b7a10a3611228036ba53b6921204d5"],["/traffic-monetizationaccess-to-google-adsense/index.html","fa3f9acf31de673528bdf896b7739e4a"],["/txCharity/index.html","02e3c6443b670a405641df1366abc96c"],["/ubuntu-set-ip/index.html","87faba5cad7b4350a33d07262369144d"],["/undefined/index.html","833cebcc3f85823814a93d9330a8b457"],["/use-arrays-to-process-batch-data/index.html","28372faffcb5cf2b06bf5c52fb6455e2"],["/use-of-springmvcmodelattribute/index.html","e3733dcad7e89f499f1e0f222bfbb461"],["/users-create-data-types-themselves/index.html","24da83c041d183688eaa2fe087fea9c5"],["/visitor-mode/index.html","89881d5ee40c1dcea387006208120a4f"],["/what-is-milk-and-why-is-group-wise/index.html","b906236648934d9cbda2dadde2776d0c"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","f4578282a048f54ef65e4b401370a51e"],["/xss-crosssite-scripting-attack/index.html","ca4f476a060747d798debf065339ebe2"]];
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
