/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","fc6c4707c7a605bc839e439c212be64d"],["/404.html","37ff3366ca635b7c9e2221e65e306522"],["/404/index.html","374bf93651c2c69bc674de855a56ac6b"],["/7-sorting-algorithms/index.html","9d7c6de7c00092c872aa0b15de1c9bd5"],["/AIO-blocking-model/index.html","f20d2fe540ca59abf56b801f69b8a00e"],["/About-Snowflake-and-Consumption-Degradation/index.html","644ea0499c81d84008c8b74ebb67ccf5"],["/BIO-blocking-model/index.html","9b665fc778ca8e6f453f91b4d8a76567"],["/Bloom-Filter/index.html","d0082952dd382e751ee78e8626c1ce05"],["/Boyer–Moore-majority/index.html","23559f708bd3d434bdb85f5ca04d39a9"],["/C-algorithm/index.html","bc52696e3b55fc84449d9a7c49974774"],["/C-programming/index.html","bbbc5a090b9a811cf48e3393cf34a74b"],["/CAS-&-AQS/index.html","f7dfab8a640021181a83e4c55522a986"],["/Comparator/index.html","7917c810236ed1b05d2fb1f65adb92c1"],["/Differential-array/index.html","b7daf5765bf0794b7e8d1142603d6647"],["/Download/index.html","0475f314678c8c49f2308c43b80ed4a4"],["/Front-end-security/index.html","76b39ef6a7cadf594db1200605c5b35f"],["/Good-use-of-pointers/index.html","dd2268c0ea29321b2e640b8f957f9d3c"],["/Graph-degree/index.html","5d2ceff4db813e172f79154e2431d6de"],["/Greedy-Algorithm/index.html","b6d96f75c7c6cbafd4403d65eaa415ed"],["/Head-First-Map/index.html","29c4bc2ddb4f925bcdbb12f80897bf26"],["/Head-First-Netty/index.html","7e5349e67d6ca74d55c07d81fb755b2e"],["/Head-First-Nginx/index.html","64e2b9a36d5db36d2dc1eae7f204728b"],["/Head-first-Spring/index.html","a43014514a668b69efe7e364a7eb62cf"],["/IO-model/index.html","8722f37baf5fe6a5f0af510408ec1a32"],["/IO/index.html","608d19952bd1fcccb9752da788f67f60"],["/Implement-a-lock-based-on-ReentrantLock/index.html","63b0b8242622dc4141bc5138df2bf48e"],["/Improve-Robustness-(1)/index.html","54a3b9f3812c16940ff44ccb2111aeb5"],["/Improve-Robustness-(2)/index.html","9f24984f0a05f806ba1dc81d78f64bf6"],["/Integer/index.html","d2c8891d635230959df75cc9e40a0585"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","d4cab8c54516b8eadea08e94023887f6"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","157b4a18771f162bf967f37944cf6798"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","b9ed364bc7c58f63921d779e48faed14"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","ce2f08b801659c222c91aa4a84803628"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","931daeb0f098dc64f194aee36351d3f6"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","339df9a92460eab73e287846c76b7592"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","6f2380d76870e91506bc8a6839c625c1"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","ebcea7a30a201a9d0ca1154c7d6710de"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","2e3ee1dffa760f2d0df6f6841372b657"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b0e80335fa4127b84872413ed8fa3ab5"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","4027d69c2537d37963b0eae1240a4e66"],["/Java-network-programming/index.html","6091a80f36e7e5c8b30ee47796104b4d"],["/Large-number-operations/index.html","3a8cddee0e85f419da8735cb2886ac99"],["/MYSQL-MVCC-&-LOCK/index.html","b2d28ea9faef78c7477549a2066676dd"],["/MYSQL-uuid-and-page-splitting/index.html","e4efc83ba66d9294c4e9519f84e8cd74"],["/Minimum-Spanning-Tree/index.html","978ebcf1aaf002d6e987429ba044f37f"],["/NIO-blocking-model/index.html","2f6abc5f66ad2d889a87c10d59244fbf"],["/Nacos：Configure-MySQL-data-source/index.html","6579e9f8e4d9c6b385656b8d00af16d6"],["/Native-method/index.html","aba6f2df74ba52a36313d2f5cd927e42"],["/PriorityQueue/index.html","1b6e266345ea1f4a826d982862a21cef"],["/Proxy/index.html","83ce509963515b34b29cc1c19facb539"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","f658049531fa97cc42a5adc7fbcfd2d8"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","01be4b623648ef38841ba97c127917ba"],["/Reservoir-Sampling·/index.html","f63509cd252bae4e6486e983f1798b2d"],["/SQL-injection-vulnerability/index.html","a78775a2102b0ffaec3b7e089c4924ae"],["/Sandbox-security-mechanism/index.html","d8eed6360520adcbb07766658cc38aac"],["/Spring-Cyclic-Ependencies/index.html","3712d99cb7670706fba304199f190e07"],["/SpringBoot-startup-process/index.html","2077239e1bcacd232a24eda0c84b3df7"],["/SpringSecurity/index.html","9b5eb1654657386e86a4f61ed7f3003a"],["/Thread_Pool/index.html","38d1b6643056538d97b68e16209934f4"],["/Transaction-isolation-level/index.html","a65820c58ec37102ecdcb2a623bd0a93"],["/Unitest-framework/index.html","531c9cfb77330e52a485677b8e411b0f"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","8f74524e46cf8ebac7a0fb92d8e7437c"],["/about/index.html","ca2850268559cf5adb1d2ef53925562e"],["/adapter-mode/index.html","2c406ddee6956ac0b0946d05fcb9ece3"],["/adjacency-matrix/index.html","571ce3056f4d173b26bdcd5d4be55724"],["/adjacency-table/index.html","ded2dd2f446669671abf4edb2698c339"],["/agency-model/index.html","4ca11644443e77f50f75ef1d138b14e5"],["/app-test/index.html","feef9970adc91b2647ddcf6d3548ba8e"],["/appearance-mode/index.html","7af600164ac4a039dbca74b88b8783e3"],["/archives/2019/01/index.html","6159cd9a3bc6fe4334380906068c7b7d"],["/archives/2019/07/index.html","7e85ec3ca26c8d70365341f7ebb7b170"],["/archives/2019/10/index.html","d1651a71b04404b74a52c2d808e42248"],["/archives/2019/12/index.html","518263645d4cc4cadffd4932d1ba7011"],["/archives/2019/index.html","2ee1033b6826ca127bbbfc849aabd2eb"],["/archives/2020/04/index.html","e427db823a1cf72705bd3341605e24be"],["/archives/2020/05/index.html","e367d4be08c60813bb5adb8fdf318317"],["/archives/2020/05/page/2/index.html","8e6f71113fc9472ca1b46f6592a6d110"],["/archives/2020/06/index.html","60efc104db9a146486ef648a7ee94a1b"],["/archives/2020/06/page/2/index.html","dd6ec6a626a14825480e745974f38bad"],["/archives/2020/06/page/3/index.html","db60f3c82e68248e3ab64a665af5c369"],["/archives/2020/06/page/4/index.html","fdda05b32aa44a7d743078eb3fc08412"],["/archives/2020/07/index.html","a97ed2140bab334234e07a0049ec8e4c"],["/archives/2020/07/page/2/index.html","c851e6e730d7bfafb0c25ae6aef8edbc"],["/archives/2020/07/page/3/index.html","0ec1054a68bf8e115eedfd5b9127d9e6"],["/archives/2020/08/index.html","2cf5e7ae2352b08883568b629fe22906"],["/archives/2020/08/page/2/index.html","54e5e3474fd8c913959382e9ed52a82e"],["/archives/2020/09/index.html","ec3c986584d9f58bc40536b84380decf"],["/archives/2020/09/page/2/index.html","9250e7e445448f49cb5e7bd5ad0e50a7"],["/archives/2020/10/index.html","80c720077fa8186ae529792bde12e00c"],["/archives/2020/10/page/2/index.html","24068d4ce729e290df814672baaf2a13"],["/archives/2020/11/index.html","a2016631206b03b7449f3ce6278c3171"],["/archives/2020/11/page/2/index.html","d32e630364027e0abe3d0fdd7c59aa89"],["/archives/2020/12/index.html","518d78d35caccd17928e9e187df9f9d8"],["/archives/2020/12/page/2/index.html","24494832b8ed233709c881cadd7144c7"],["/archives/2020/index.html","a2f68e539c2f0b2e1e5158ab28f00e6a"],["/archives/2020/page/10/index.html","74b35d88021f6f17fabe5223e941ced5"],["/archives/2020/page/11/index.html","cfc84fd2b11f5bbc36660ca305410815"],["/archives/2020/page/12/index.html","47ae47705db1db6525b5a541f3f6b370"],["/archives/2020/page/13/index.html","78b4610322725172b9ea64abe68a4e38"],["/archives/2020/page/14/index.html","8f92d962d1268e56e4fd670d4502d5e0"],["/archives/2020/page/15/index.html","a61c53b255dee323dae32a6cee337861"],["/archives/2020/page/16/index.html","454a65c73c07a363fab0d64d6e8bbd3b"],["/archives/2020/page/2/index.html","ee22590c2eb108d404cecd6c0e6f045e"],["/archives/2020/page/3/index.html","7eb548ee41726a35f69c709bb6bfea4d"],["/archives/2020/page/4/index.html","5ddfe8b18b6371e4d83dbe60b8e088c8"],["/archives/2020/page/5/index.html","44c9ca09ba0a85e632b4f65daa1b9012"],["/archives/2020/page/6/index.html","766e46c52ee88dccaaee9e8a209a96e5"],["/archives/2020/page/7/index.html","2158ca5cb5348b99ffa77849eac7614a"],["/archives/2020/page/8/index.html","282881075e045c4325a80184aed13689"],["/archives/2020/page/9/index.html","f06f22d3d4470451c313ba963314aa0b"],["/archives/2021/01/index.html","bc0b12f4686f93105aebedd4c4ec8f3c"],["/archives/2021/02/index.html","b2d97032d5d23b8853206691e32c91fb"],["/archives/2021/03/index.html","d738927701c8156cc3367be7c4fbe8d1"],["/archives/2021/04/index.html","98e611c28fae5e47a8b7f1ac871dcaf4"],["/archives/2021/04/page/2/index.html","fd965080dcfa852fc49959babb8bc15c"],["/archives/2021/05/index.html","2d98aecaf7e465fb8e5c8e385af1db32"],["/archives/2021/06/index.html","c357713c207dab530a0915ed2c86e744"],["/archives/2021/07/index.html","95ccf9c50dc710e4a303b400cbfc866b"],["/archives/2021/08/index.html","b03748ba2e1cd3037bdb4aa8385ae74a"],["/archives/2021/09/index.html","c9db4d79d8df4b63ebd7281ff90b90dc"],["/archives/2021/10/index.html","1264203b06921f5c1056f8f8fa86856d"],["/archives/2021/11/index.html","84de3029fa19122d097dd86ba4db69c9"],["/archives/2021/12/index.html","e50daa7a664d789127c218d7ecec0ba8"],["/archives/2021/index.html","fdcd84a86625b9db32541310fd26c2b2"],["/archives/2021/page/2/index.html","1db6a321038c5440ef3d38d1688c8262"],["/archives/2021/page/3/index.html","96e779b27d792cd1c0df24141352d705"],["/archives/2021/page/4/index.html","f673e24faddb10a068540d918b1c38dd"],["/archives/2021/page/5/index.html","b4a56f0f32d6c1294dc5eadfd02816ea"],["/archives/2021/page/6/index.html","a957b4381e1229c3633836bdf7093d2a"],["/archives/2022/01/index.html","9deed22c31ce1ae544913d6a4eefd654"],["/archives/2022/02/index.html","3e6e8bca3708b3d842af0edca5d3e60b"],["/archives/2022/03/index.html","4ead90c90677a58e3e385760781d0fbf"],["/archives/2022/04/index.html","00a6aa854a3f5a8eaddac9d6b9ee32c6"],["/archives/2022/05/index.html","66d0f934dcec3b4ba2de6511186c25ab"],["/archives/2022/08/index.html","b2dc14cd96100d59772cc760a86f067a"],["/archives/2022/10/index.html","df40269a7aa1a0446be68d5b58670b1a"],["/archives/2022/11/index.html","474baef1b6a30837cfe41fa5d547894a"],["/archives/2022/index.html","3c261831dbf51d7c9d4a29dd31561658"],["/archives/2022/page/2/index.html","2d783e91faee87e2c6c7f5c359862519"],["/archives/2023/04/index.html","a12e3d6968cc9f2a4b78cd17ee0981ab"],["/archives/2023/06/index.html","e3794092c3486922a1d222dc99ee460a"],["/archives/2023/index.html","f53271774ef6787f512c95435e77cf0b"],["/archives/index.html","b1936931db53c2a654ef194748ab8ea6"],["/archives/page/10/index.html","0446127aa6495a749c98ed9fdb60bec5"],["/archives/page/11/index.html","6afdda150b5d158c2817a037d40d4a64"],["/archives/page/12/index.html","a95d95b979a6c3bfac3ad55cee0c9362"],["/archives/page/13/index.html","f8ba3c3e033deb30be0e206e96f74544"],["/archives/page/14/index.html","b5cb883d9ba0dbff5594a4988ba84abe"],["/archives/page/15/index.html","304bc851fe25fdaa3db2d9aef3868262"],["/archives/page/16/index.html","00373b2b96a04eb28cfe67e0a16dc498"],["/archives/page/17/index.html","ae248b6b74c81c3e587998f899591f4a"],["/archives/page/18/index.html","6d0e4e1f7d403b7e8e01f2d6220ead06"],["/archives/page/19/index.html","922d0ff8c8615ebbbcedade0f73ed6ff"],["/archives/page/2/index.html","6eb36808c2f7bf285769f482969913fa"],["/archives/page/20/index.html","8eb6bba482e9ea1ca4e2d2cfe324869a"],["/archives/page/21/index.html","acaba67b241e1453989846c1d0691ba5"],["/archives/page/22/index.html","19e0a3c0a8d173db0e65d9c6b015ee7b"],["/archives/page/23/index.html","6197d4c9637c0591d9f7d4f93e4a24e3"],["/archives/page/24/index.html","90744a4fa1092a165f341e1b2d3f00a2"],["/archives/page/3/index.html","318c53b976bd06d6a2837cf4f2f6ceb9"],["/archives/page/4/index.html","012b743108b0bf53174627e6ec12ff0a"],["/archives/page/5/index.html","f560fda297c2d228a18e1fe39ecdfbf0"],["/archives/page/6/index.html","a913b84b083634aa88fc8069d7a76cc6"],["/archives/page/7/index.html","4062b81c317de6ed9c59850c1b6ae90d"],["/archives/page/8/index.html","e2b42564a25dca4944c7af852c3c99f3"],["/archives/page/9/index.html","c35537735bac7cfc0bd5f86e5e2bf380"],["/array/index.html","1e3d8be06434d77366f9736fe6e1ca68"],["/automated-test-katalon/index.html","5d83aa7c30241be82693d1b03dd5d9c4"],["/automated-test-selenium/index.html","fdea02ff1f25118527b62c8394e18ad4"],["/back-to-table-query/index.html","bac24b0edc1c9b8384b870a120856206"],["/binary-search-algorithm/index.html","0116423765fd5d95ba5a84257f64cded"],["/binary-sort-tree/index.html","db48624532f2aaa3b37354bf68bc1c38"],["/bionioaio/index.html","e7739d87ff5b18ca6a35e19f9dd08801"],["/bridge-mode/index.html","58300f87aad54668c946e71a5c939c8f"],["/builder/index.html","6c00ed07b6ff2486c8ff819491245360"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","65402b90b649591d181f5aeb7603b31f"],["/cache/index.html","846e2087edc5aad067205f78222bc52f"],["/categories/C/index.html","1a71a5d30f49605dfa4bec4d89476673"],["/categories/SpringMVC/index.html","665f0042890cf994db333bda25c2b412"],["/categories/categories.html","c3b0c2d6d1bccc32041334c9480d7fea"],["/categories/index.html","61950f8fd7751a218893283089d116ef"],["/categories/linux/index.html","9b1cc37bf170ce7966d90ac482d53c95"],["/categories/分布式/index.html","7046a66f76c0a568e28fa9f64dd8a3ef"],["/categories/分布式/page/2/index.html","30912be9b8b119133ca69aa1247fdc76"],["/categories/设计模式/index.html","a4bbb56b9163143e335b8b7113927cd9"],["/categories/设计模式/page/2/index.html","bb737df94d60b177fd795b53fa577ae5"],["/categories/高数/index.html","a4aec08a775e3f09d962d980116485c9"],["/chain-of-responsibility-model/index.html","10d1ce518206dbed1a1c96ac66fa6e93"],["/charity/index.html","0d92e13ae8fa5585f93d4799d365828f"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","5f3b337f69b2a9cff26f734cbeb8ae46"],["/combination-mode/index.html","a4a8150ed2c3647cdbf5bc12ac4d88f6"],["/command-mode/index.html","82a1f015f0e345ac0ce0d44b118afae8"],["/common-commands-of-unix/index.html","1d70efdc0c4e387545f9ee61340f2b12"],["/computer-network/index.html","b5814455ce7be3b3a29659fefd7e7b5a"],["/concurrency-principle/index.html","054037e14976e5dcd7023f6ba09b2793"],["/continuous/index.html","4ae3e33aba4d756794097958114b8b8d"],["/contract/index.html","020d66ad12e60b41e0e0221970e8a13c"],["/create/index.html","d9d4e156d528677c83f153875dae4171"],["/css/main.css","fad5d4dc583dc386cb42779b0147ed55"],["/cycle-structure-programming/index.html","6a1c6dd26498fb2143f0ca41bb648d03"],["/data-structures-and-algorithms/index.html","8b1bd93129a799580ba14fc4f76046d6"],["/deb/index.html","5e44d292ad8d1d7e17fc3533cc822192"],["/decorator-mode/index.html","14ce001c1c45b9a0f3e6002ff72e132f"],["/definite-integral/index.html","aa4dddf1b98bc191620aa209441f0997"],["/dependence-reversal-principle/index.html","09a9e9c4d18b56fe061d4a68bbdee37b"],["/derivative/index.html","9e3a73b42f8d232db2c1cf71227b0849"],["/design-patterns/index.html","bb04e5fbf36aa27df4b54109b145f50a"],["/dic-algorithm/index.html","cb7a5ca021a095ed6cb3b09690a78863"],["/differential-equation/index.html","5db57e71064b139c3a35a0bca7313495"],["/differential/index.html","8fbc4bab1e253a6114e24c4408a744ee"],["/dimits-law/index.html","d17180aea31a9706d1477e03424a5b3d"],["/distributed-lock/index.html","26df1361341025d4f3baa954872bc70e"],["/docker-virtualized-container/index.html","0d80ee70c2797b659262779e55215421"],["/double-integral/index.html","d8f62b16b336a9261a2e7dd0f14694c5"],["/dp-array/index.html","6aa50d307d7d04946954c5169007e3f8"],["/dynamic-array/index.html","0c1261f86b154517b915fdf844384340"],["/dynamic-programming/index.html","8a17ed40eb6e53fd87038be3e1a2fec3"],["/edgeset-array/index.html","0243066ddee596b5b80e3d7aaed81ffe"],["/encoding-algorithm/index.html","0b38b5230e795267e88e3144d706899a"],["/eureka-service-registration-and-discovery/index.html","69087d26f23e2ca4b81a8d2ca3156bef"],["/extreme-value-and-maximum-value/index.html","5c78d4f4da0317a930ee234889b78afb"],["/factory-design-pattern/index.html","16c6b065333a202cbc735335d1af8e43"],["/file-input-and-output/index.html","9bed9342dd0a441cb7c1c22c7c80aa68"],["/flyweight-model/index.html","90036a29b40c2aef53fecd7d324eefc1"],["/friends/index.html","2dcd8019117208799b51d656ca19a566"],["/function-graphing/index.html","73209357a0c4e342d35372ffa4c81308"],["/gateway-service-current-limit/index.html","0c1c34449f1d89d89e7030b9c5609eac"],["/gc/index.html","bb49e0329a98fae9ca4207803f722e8a"],["/generalized-integral/index.html","de17410a5d62ec9f8334f6b39fffa510"],["/google8102e2f35ce9e391.html","8299251434acaae508a6509ff6ff2d0b"],["/gulp-compresses-static-resources/index.html","8a15116af1c1e87a0847ab19ab4197ab"],["/hash-algorithm/index.html","ba9a7308a3b282478d3ecd859e9b4728"],["/head-first-JVM(1)/index.html","262e866b63c8972771849c4675bfe21d"],["/head-first-JVM(2)/index.html","82c8521aa2933649bc212d1a463344ca"],["/head-first-JVM(3)/index.html","253c2aa039907a85396dbb3fe8a8920d"],["/head-first-JVM(4)/index.html","9eb19b53b2a4ef337f7133d37573b240"],["/head-first-SpringSecurity/index.html","3140d0cc8fe8a1f7d90659a412cde34e"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","8886f5d86951a1ed1b3e9546d989d21b"],["/heap-sort/index.html","0ffbf2711e1903205ef54d1d9f80e38e"],["/http/index.html","70ad30183268d42e67e06221cc8babee"],["/huisu-algorithm/index.html","3f172bb020b69ed90654ac535b3b3740"],["/indefinite-integral/index.html","cd16db85f636a0b5f7f0c245cab2e94e"],["/index.html","5d55496d9b9166e4e8cab81062374050"],["/infinitesimal-and-infinite/index.html","1000e6ba64721be91ccc8d80b131964a"],["/interface-isolation-principle/index.html","cb4d6d261bb95673b2e26748ac68081d"],["/interface-test/index.html","8a4263a87d787111dae84e19145f0def"],["/intermediary-model/index.html","d5a826b0cb3343f4b49ffdef787773be"],["/interpolation-search-algorithm/index.html","64cf84e778953704e635b033b8cba559"],["/interpreter-mode/index.html","16d17d5c64f76bfdbe6e5a9fc7cbd3fd"],["/introduction-to-computer-network/index.html","eb29b1b2963749c5e19a34a6a527a035"],["/introduction-to-operating-system/index.html","29a650a221d3aeb0cc6b869beeebd1c8"],["/inversion-of-control/index.html","45f67c7ba39255904fe7e449f1f5ad94"],["/io/index.html","a6710eb7494308babc852eaa534c1ee4"],["/iterator-mode/index.html","8d00dfce95740c7ec019efdea2bb5a1d"],["/j2ee/index.html","e9f91f03bcc20f38156a5b00caf48c34"],["/j2se/index.html","c2ccf0752fc9c0960097c04c3e9b7874"],["/java.lang.String/index.html","dfa7c43bf3c27c22aeac06adb16b03bf"],["/jdbc/index.html","2fe50481f048d3935abbf234394bb0ae"],["/jdk/index.html","299e47079007dcab163c9510f55052d9"],["/jmm-memory-model/index.html","4e9cfa8ffa7b3c1b9aa783b3b209aaa4"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","9b1e83a4588255ee9fdd5c5887c63b1f"],["/jvm-method-inline/index.html","1823a75d93599c067de2d9a78d1e35cc"],["/jvm-tuning-practice/index.html","2939e19902fcbfc8cc3afdbaa046a790"],["/jvm/index.html","29b01d8d5a225d1cf03f91accd7f829f"],["/law-of-robida/index.html","4b5bdadf8513af03ecd76fe69a91d4f7"],["/limit/index.html","fd4f759fcf692a4a64f55790c40630e5"],["/linear-search-algorithm/index.html","95839b9ae39f3dc4c40392f0af7519c0"],["/linked-forward-star/index.html","043b11d709b0af71a16f5f28417130e9"],["/linked-list/index.html","cae90853da20d882c50c7e7b473a9387"],["/linux/index.html","272ded2ebdea364faf26d0bcc601b189"],["/liskov-substitution-principle/index.html","41d6e1912bfb42e717be00a799c886f7"],["/lock/index.html","a534f5c370ea7ff92e440dd880c19eea"],["/lru-cache/index.html","62515a5afed48347d37c2d6cbc7ca9db"],["/maogai/index.html","68cf8299f3fc3f6c52dca5b3e4f3cb70"],["/memo-mode/index.html","0f36a6c3f920708dc3030007d3ec2f4f"],["/monotonicity-and-convexity-of-functions/index.html","56d6da129f3cd05c3fce0e6e746ac81b"],["/multi-function/index.html","03e043500930abb429b476c58af92809"],["/multithreading/index.html","0dc6c6390eb5a7cde191a596e042ad3b"],["/mvc/index.html","7efdaf2972875aa357e0c6d5e75fab38"],["/mybatis-cache/index.html","4119b752577da4f02973a000c814e36f"],["/mybatis/index.html","b6e984e5117a0bd959868fedd4b670e2"],["/mysql-index-wrong/index.html","20068d838b3ac8f1e6dc9cbc670f1bcc"],["/mysql-struct/index.html","58cc41eacdc1e514aaabccd35db1aad3"],["/mysql/index.html","bf46a391a012ade8045c15c1b07f0d20"],["/nacos-service-registration-and-configuration-center/index.html","d6f588e603e7f7394d9bfce3ed7a6c38"],["/notes/index.html","50b8e296f791b8f8a175bac99128f933"],["/null/index.html","4e20b724ef4ef2095da7cc71260026ff"],["/objectoriented/index.html","e1529e1876af85921839597b92446f49"],["/observer-mode/index.html","239f5b981f572e3c7efff4012327a5ed"],["/off-heap/index.html","e1976705b1ae268d17211af401d60dd3"],["/operating-system/index.html","8720853cfd2b4a28dbc011637188a4a5"],["/page/10/index.html","0f23f8b6f4248d8167d2dc6a76b8bafc"],["/page/11/index.html","bb1fa4d831e8ed9eb5a10bdb87eb21fd"],["/page/12/index.html","e4d130372dd57b2eeff46366e139aa90"],["/page/13/index.html","c3d5d7a459479d9f5e83e37b84155318"],["/page/14/index.html","17bc1291b73ca166adf3ff69d290a5ac"],["/page/15/index.html","45fded19f5ad6768f4a86ee049cb1f4e"],["/page/16/index.html","46fe12c888251a9c5e9e4d3beecfcb79"],["/page/17/index.html","3897d4bbd010f0f26af8b2a88fd1b7f1"],["/page/18/index.html","c3f3b31264b7402356b8283fec0a3bcf"],["/page/19/index.html","04fa94da92f76a0b55fcee15a6dd337a"],["/page/2/index.html","aeafcf4bf43f3ffb61f25562ec5dc21c"],["/page/20/index.html","7f2141975f145ad01c63e731c5380b7d"],["/page/21/index.html","e246a29b8e485339bd7349d2290dfc92"],["/page/22/index.html","4e5f852753bec7f3bfceca9854cde0b5"],["/page/23/index.html","3180389aca39c66da19bb5ab5bf70e45"],["/page/24/index.html","2e128afd621c6c2d44beb46ac11b9664"],["/page/3/index.html","0c8d323143822751b5b7f3712e48a420"],["/page/4/index.html","976cd7ff99a933eab5a7c17427cf3eef"],["/page/5/index.html","fc1ed817b2a3595d5fc9f7e2e762baa4"],["/page/6/index.html","00230ff14880aceb6651755c320940c8"],["/page/7/index.html","2c76aab70c3d9038c40a4bd84d3effe6"],["/page/8/index.html","0ec2f19f62f39e9361b7f9f989e36548"],["/page/9/index.html","52aab087641c6a5425b5fbca71811ad0"],["/palindrome/index.html","c3754767466ef287ee100f3efa09dae9"],["/partial-derivative/index.html","85d61979e3f46f0478a7239e2afd3083"],["/pass-by-value/index.html","29c82425b9f6114c27e35b10ea994b26"],["/pictrue-bed/index.html","4f5b374806c8d670995ebbbd20a9083e"],["/principle-of-opening-and-closing/index.html","197e2960f5ba2ed84823f4af47c8ddda"],["/principles-of-computer-organization/index.html","57e867b6be3564792f3d3316d408ec4e"],["/program-test/index.html","8c01927370430320071abaf66196d172"],["/prototype/index.html","718d70072df0b78c6258e79ddafdf61f"],["/queue/index.html","9938d24f5ce9c7a190cb34a23d2eb85f"],["/random-weight-distribution/index.html","e3856df42f4f45f79f4301a309f352d7"],["/realize-modular-programming-with-functions/index.html","c9fd2ecd9185f206f539f201abea6793"],["/redis/index.html","eb76d3b9373c449827a7fd6e7ade82da"],["/reflection/index.html","6995d6706add866018960304a0e95666"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","777e8a7598f5dfd6f5e91f7352e5723c"],["/ribbon-load-balancing-service-call-degradation/index.html","b7046af64ed6a50de15804107e13d805"],["/round-dp-algorithm/index.html","f4b56fb5c10a8f67d012ff1b8f9ff924"],["/seata-handles-distributed-transactions/index.html","0858b60daac440adcdcf5742ccf66f14"],["/select-structure-programming/index.html","300ac440c0fd62782ccc044a06641dc4"],["/sentinel-realizes-fusing-and-current-limiting/index.html","7779bb32170b7256c6e81aff785bfc48"],["/sequential-programming/index.html","d3b4b65260b886c5e96a7377b7c0d58b"],["/series/index.html","4fc210be9de86f299c1d5105485869cb"],["/service-worker.js","533353330c8a5318323062d95568ec1d"],["/single-point-login/index.html","fcd79847f3d1d5cbbafb38c7461b4619"],["/single-responsibility-principle/index.html","6380eb76731f6c9de188abf382ec20e9"],["/singleton-mode/index.html","bf8b2c2247c2d85b6e918c75bf252a58"],["/slidingWindow/index.html","244a286c4fb98e4088ec58ef63388960"],["/snowflake-distributed-id-algorithm/index.html","78bbf104b3a018de5e1ff20e76e3b357"],["/sparsearray/index.html","f55f8c3f1a5de5e781718153db49ad9a"],["/spring-and-jwt/index.html","02982ffcdc3068cdf4bd3a1543c07cd7"],["/spring-architecture/index.html","ec859d58d0b3245465f06dfcc04bd6a0"],["/spring-relate/index.html","26d7fb17c1f65b9b3989928ac6a42228"],["/spring-springmvc-mybatis-integration/index.html","981d3f49c0fc5c76fbb165a932a912f8"],["/spring/index.html","0c0564024627504ece265677fe746bc2"],["/springcloud-alibaba/index.html","3c011e3a4fc464f6d9a50b686a66eb05"],["/springcloud-bus-message/index.html","8eac84c0b53c234d2389d26a89b6e8e8"],["/springcloud-config-distributed-configuration-center/index.html","598c8575eaaff4a1c80da9baf2d5dde0"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","5047c545a67e696e89fd73a277519c78"],["/springcloud-stream-message-driver/index.html","639a230ab024123d26bcde5edfaecda1"],["/springcloud/index.html","f54b2711bce6daa0194d0daaa6a27ea2"],["/springmvc-environment-construction/index.html","4b6a1b880063919f5329cd2b13e4bae4"],["/springmvc-work-stream/index.html","47f987beb2f74d609d5d92e1979630f8"],["/sql-injection-attacks/index.html","64e42bebf51c91833c4633b436a07810"],["/stack-simulation-iteration/index.html","8c15c57fac083494e9088ff4d9421d5c"],["/stack/index.html","6c5652801c7233eaa8e64c8b0830e2fc"],["/state-mode/index.html","d935538e9f172f26113b490489aa6247"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","7c64ee0391277982523abddb649d53bc"],["/strategy-mode/index.html","4609106665634eecf50d1c8fb34a657b"],["/sw-register.js","f9e09927ed05d9af10bf5fb015e7646f"],["/synthetic-reuse-principle/index.html","3900c86c521113ff7f49ccc05ff9a724"],["/tags/C/index.html","3d13e1ff4282468b1c0f4d9dde947bb3"],["/tags/C/page/2/index.html","b587c96517ba507098f91d4c60c8ec68"],["/tags/Concurrency/index.html","835323df5d403e4f87edef6607348a7a"],["/tags/DesignPatterns/index.html","8da24d6e8d51a56909bea55b5c2561e7"],["/tags/DesignPatterns/page/2/index.html","854655e70579e819c9e83b421e510fac"],["/tags/DesignPatterns/page/3/index.html","52b5b9ace54096d2e001f3c57ec55e97"],["/tags/DistributedMicroservices/index.html","3480bcb4ae4a67db487310411e083b71"],["/tags/DistributedMicroservices/page/2/index.html","f8beecd8dffa9003a4401dde15abf61a"],["/tags/Interview/index.html","8de832f53668ccb1a763d6503e4959c5"],["/tags/Interview/page/2/index.html","c9edaeb13bc85c9f366382d6edeac122"],["/tags/JVM/index.html","def9724de7ff62466bedcfe55fe1cb8c"],["/tags/Operating-Systems/index.html","39805181e828df291c2ca583ba9de1dc"],["/tags/about/index.html","7fe6d2166dc903a6c1ba7bd41b154134"],["/tags/ad/index.html","157eaecee03a8c2b1f7aa8706df79800"],["/tags/algorithm/index.html","eda77f3999c4bfd47df21d2d64252da3"],["/tags/algorithm/page/2/index.html","6c5fc1dd18328896bdb0e5a404cdce53"],["/tags/algorithm/page/3/index.html","9b8fdb47e2f92b669ae87b5b98c24fdd"],["/tags/algorithm/page/4/index.html","cefc0c6830e2caa79b00482a33f08353"],["/tags/bug/index.html","28ba4d3272d2d680b81e638403734ed5"],["/tags/computer/index.html","99a75be00f8c89013f8103086b2e4293"],["/tags/data-structure/index.html","297e9584ae43ab31d7b972d941251bd8"],["/tags/docker/index.html","df08402eefb7fb2b19d69b80f8a333cc"],["/tags/famework/index.html","fe055cf16af6008d6b5798ef7d4a2a0f"],["/tags/frame/index.html","fc6ef22cbf3f66d6952017b88a3d4e79"],["/tags/frame/page/2/index.html","943486bfb4d5cfe924329795bbc7f670"],["/tags/front/index.html","a487c7f4eb320143c3ae00c278a16097"],["/tags/index.html","34f74a84f8d14c3aa4ae8a1588a90d86"],["/tags/interview/index.html","37c502d592700c49533820fcf08307dd"],["/tags/io/index.html","b441b9b690b9807b3bf4551181ea6699"],["/tags/java/index.html","c9951972d93880b5a74b6dbbe068a703"],["/tags/jdk/index.html","40d78ca5ef68b7c853bacb20c69bf8f3"],["/tags/jvm/index.html","6d8766d6f2f8cbf733c216602c6ffa2a"],["/tags/jvm/page/2/index.html","ab5e12fdb3ca76e57c91357f83860372"],["/tags/linux/index.html","137f78e45e15000da35e044507f4a158"],["/tags/maintain/index.html","c3e9aa450be9185b5cb7b2d41da5c71e"],["/tags/maogai/index.html","cce4d4801b41535b0bcc594911cb4218"],["/tags/math/index.html","752d928fe6fdee07c35964634fa3ef50"],["/tags/math/page/2/index.html","a4ecd6438a515f1a2d509645ecd2d4cd"],["/tags/middleware/index.html","0586207b6902e01fc9ad614b3f47d885"],["/tags/mysql/index.html","c4c23d619f1e3cb66b217e59e3badc8f"],["/tags/network/index.html","8c5f306f76d6266ea759726fc0a2ade0"],["/tags/project/index.html","9c8380803abc2473bc55b28e775f09b4"],["/tags/security/index.html","a0e4548898060970c35ee74b89c4a994"],["/tags/sql/index.html","901893ddc873155701c42adf8556aaca"],["/tags/test/index.html","25f348691d4aa85e694312917bc3a7fe"],["/tags/think/index.html","85d2481694251e85e6d3aa0e03229e0e"],["/tcpip/index.html","9a52eed65ce8069cecbb0fc2b12dd079"],["/template-method/index.html","cf3a2b235b8e3234762bbec0d5453853"],["/test-case/index.html","c86528c9a209ca02910b73d3e467b664"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","c1abcff08d91970f3ed9350564a3ed63"],["/thread/index.html","33ee5a04d7bead3be4c75e0cc1405bbf"],["/tj-horse-racing/index.html","391230ab5f1a2a4c28a0449fa7539f74"],["/topoSorting/index.html","7b801bb56499e97dbf0c14dc9b90b197"],["/traffic-monetizationaccess-to-google-adsense/index.html","e227a8943d1467b50bcc2cd6c396bf0d"],["/txCharity/index.html","904d9343eb2907ad40aee8f4759d7b40"],["/ubuntu-set-ip/index.html","8ac2221bfdeb066a3651b8b173a9e62d"],["/undefined/index.html","ac7e1c69af58e25b4925c9c98a727538"],["/use-arrays-to-process-batch-data/index.html","05c813a3fbb2ae98b2c5452092226c4c"],["/use-of-springmvcmodelattribute/index.html","b3c1830bfd24bfb7def119f69ea4729a"],["/users-create-data-types-themselves/index.html","d699af9a25d3c2c371a3e5cab79c09f5"],["/visitor-mode/index.html","0e953ab9ab643ea2befd344a1e7fcde2"],["/what-is-milk-and-why-is-group-wise/index.html","b0b20c417238da7b568ee7cad2819e2e"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","718845f3aa6f1391469ebe018397e608"],["/xss-crosssite-scripting-attack/index.html","e5204d5f6f78ad53636d269defc7e7e3"]];
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
