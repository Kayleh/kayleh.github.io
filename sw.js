/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","38a7070bb6773396f230c62afbbbd4e2"],["/404.html","a9b8b65b4df238acaa2668d26308b7fd"],["/404/index.html","f13082382956c3d20a432f64aea44034"],["/7-sorting-algorithms/index.html","7582ca4b089c80630158b3291f39c5cd"],["/AIO-blocking-model/index.html","5cd33fff40e188647f4e78c546cf16f4"],["/About-Snowflake-and-Consumption-Degradation/index.html","24720e95e31bf2df3ff7f5067fdbc87e"],["/BIO-blocking-model/index.html","94882940898b2f13b577d0bd1640f114"],["/Bloom-Filter/index.html","d56bbdf686ba02503e3f1a220931d4fd"],["/Boyer–Moore-majority/index.html","975b8cd46dee5651f678a9dcdd043127"],["/C-algorithm/index.html","35fe7bbc59c3b28555cefee28bd67ac2"],["/C-programming/index.html","1c86a73549453b3fc7378b390641c702"],["/CAS-&-AQS/index.html","2518459117af731eb0947782009b5aca"],["/Comparator/index.html","2a119f9eb018dc6aaf8cf07c56f3aa3c"],["/Differential-array/index.html","cfb5bcad66492ff302db6b8f8be29ff4"],["/Download/index.html","d155e9f21717951d1480396dddf3b195"],["/Front-end-security/index.html","ff60a7e56341ca2403813c635a64392a"],["/Good-use-of-pointers/index.html","58150a1f3532114354ca7e2b61ba7ed2"],["/Graph-degree/index.html","7a95bd7a9a8a2d8f8ae3e1a187b5d96a"],["/Greedy-Algorithm/index.html","e557dcc88e47b27e9d5e7479aff979c6"],["/Head-First-Map/index.html","52e982fda3be51c43f9215b9504c5a32"],["/Head-First-Netty/index.html","7ca3a648e29511aa4bd3ccba911bb547"],["/Head-First-Nginx/index.html","e655e12818f161cdeb038657255ada18"],["/Head-first-Spring/index.html","550f5777eb593afadfc05de845656fd7"],["/IO-model/index.html","572a23d6f289c4e0a850e5c327cb9cf2"],["/IO/index.html","4f6877502e008a2cf6103d0469317750"],["/Implement-a-lock-based-on-ReentrantLock/index.html","3280f29c769c99d1747faf6a020b9053"],["/Improve-Robustness-(1)/index.html","c3c9e4218ecdee06884dc54eaf446b0d"],["/Improve-Robustness-(2)/index.html","91dd11dbe84a0053076a350ab3e4b273"],["/Integer/index.html","e0b913b07b351484f245aa1d324ead68"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","035430f0c30f7b7c952befd56f08c85a"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","1a571b0e0ccebae29a6d4b58d26360d6"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","51ca745545fe0d2ac71ec6fbd350df4f"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","17e97e7a81d098d0fb6fd6e96097f6a5"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","2d04ad62b797463285f5544a53050eef"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","b3813b12e33f4dbcfd493882616d35a1"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","4658e87dd73171870db0d21d71e623ac"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","a5344ba54bcbcdc258c3d4ddfe8f66f1"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","8c897a4e2f13f8b4cb208199a5fa3c83"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","8b64da0a7560883d822215fb4abe23b1"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","4b1dff4dcda69d37ee3e333e7678615a"],["/Java-network-programming/index.html","3b2d23205a5760b177728b6f3cfcbd7e"],["/Large-number-operations/index.html","e959075eae6d04e69099c3e43d46f2be"],["/MYSQL-MVCC-&-LOCK/index.html","c2235013ba2905ab1842ecc29a8acc48"],["/MYSQL-uuid-and-page-splitting/index.html","3ce14d300e596fc04bacd94661b29caa"],["/Minimum-Spanning-Tree/index.html","d4ab0651ed38d5c072f0b60cbcd82d2e"],["/NIO-blocking-model/index.html","618de2855c3edbe7e8ba33adc80d204b"],["/Nacos：Configure-MySQL-data-source/index.html","ca3f381d43a1469f3911abd333e9a7a4"],["/Native-method/index.html","79410d9c2c62565dae96171c70087b10"],["/PriorityQueue/index.html","dd4b5010142334084b2069766c24d8d1"],["/Proxy/index.html","dfe85e9d0362e88b2995ecf42b38f2c6"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","fd13717ae28e43d51806ccea178cf8bc"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","7c9140a2e9def5c760a49443dafd361a"],["/Reservoir-Sampling·/index.html","6c71fe2a4aa107ec28d6b5a67ebfefbd"],["/SQL-injection-vulnerability/index.html","d2ae368fe0b324d63929f75ab477e12a"],["/Sandbox-security-mechanism/index.html","be3a92103f445c69c8d2dc24d962cb03"],["/Spring-Cyclic-Ependencies/index.html","f9601e6abbc52fe1623f50555d807079"],["/SpringBoot-startup-process/index.html","4f56ccee75dcabb0a5caf3e782714cdf"],["/SpringSecurity/index.html","a2535a0302135d6a325a66db41f3aa61"],["/Thread_Pool/index.html","f71adff121aedca2061a8bf3b0c9e7bf"],["/Transaction-isolation-level/index.html","ac99ec1ff46309955151b89d93457765"],["/Unitest-framework/index.html","fda119fdb88967f639e04fd22bc175be"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","2680bd926c6490a94c12c0c523b9f078"],["/about/index.html","14660afc903c5b677b9934411d4c6ebc"],["/adapter-mode/index.html","c50872577dd6458295bf29055f9a34e8"],["/adjacency-matrix/index.html","06fd4ee107add93d8a503884949620ca"],["/adjacency-table/index.html","d027ae69e225171e7cd0b05c7dd2217f"],["/agency-model/index.html","74dd0529fdc3f7a5f85a2aa4055e9196"],["/app-test/index.html","9604fb3caa0dfe0a17021ea5ef5fe359"],["/appearance-mode/index.html","90b567b249eeaead97790ff95fd5b8f4"],["/archives/2019/01/index.html","4bd18b0797de1de945539ab3f263ac13"],["/archives/2019/07/index.html","4b34261944f46aff556da5dd4a142376"],["/archives/2019/10/index.html","dc55753f29bbe37c168fe82fb512bdab"],["/archives/2019/12/index.html","ab4defce9597ae44e4020eca4c75e1d7"],["/archives/2019/index.html","37345bed831c9195265d63f9674ae9aa"],["/archives/2020/04/index.html","ebf26b5843b975920b57e1277a3e6f02"],["/archives/2020/05/index.html","e5dec7c80177f179403b93be2774c889"],["/archives/2020/05/page/2/index.html","f9f4c93b932dc3da47b996c719bd956e"],["/archives/2020/06/index.html","813fcb3958389c4b41893815d23c3b15"],["/archives/2020/06/page/2/index.html","ad117bf88509a0f437eaf2911dc3b6b7"],["/archives/2020/06/page/3/index.html","559d07a69b69186a6cc48565e96114c5"],["/archives/2020/06/page/4/index.html","ce79980c67b632364fd632d5b05a1994"],["/archives/2020/07/index.html","602ebe9bca4ddc830843b866d618f1aa"],["/archives/2020/07/page/2/index.html","4211f4b60fdb71bde303bf9f88763412"],["/archives/2020/07/page/3/index.html","89f20b72e88646516d7e5f56a36ca9d3"],["/archives/2020/08/index.html","45b14aede3c4347fdefad14a810cd545"],["/archives/2020/08/page/2/index.html","9d90771c477c55b24db7d050bd823259"],["/archives/2020/09/index.html","9e6b46968e60e8897c53bf61acc97baf"],["/archives/2020/09/page/2/index.html","7d588ebd5f9985e020cec8ad06765267"],["/archives/2020/10/index.html","db76ef7882e634baa89a1b3f3306295e"],["/archives/2020/10/page/2/index.html","44477cf589cfb5dbf6b293f4f3ba240f"],["/archives/2020/11/index.html","217fd3d8852dd79da9859bf2c91da2c6"],["/archives/2020/11/page/2/index.html","08547f3b68cb73118469426a386b729e"],["/archives/2020/12/index.html","adcffbd68f8f4eb0fba5c7f1cda4627e"],["/archives/2020/12/page/2/index.html","f7b50704812736e1cc52b83ffcdced99"],["/archives/2020/index.html","c71f805434ff1151d129145e609d2526"],["/archives/2020/page/10/index.html","d2618a2d0e16640227c0699fc6aa8e8e"],["/archives/2020/page/11/index.html","4b107bb9485af41703c42f91aad47afa"],["/archives/2020/page/12/index.html","3ee43cdda850aabf69c6531e8b05827c"],["/archives/2020/page/13/index.html","f5dea26b226442daf65f145788b6803c"],["/archives/2020/page/14/index.html","bb37be23c5d92073366ac06492958f66"],["/archives/2020/page/15/index.html","1b029cb11ebd4d72ba50be2b4a72788b"],["/archives/2020/page/16/index.html","d087308eed619c3fc3bec62048bd0ad7"],["/archives/2020/page/2/index.html","4a0fac6d9397f347df8d59d50c8d883c"],["/archives/2020/page/3/index.html","fb4e0b51a3e29c750ea3139e7bc2f38d"],["/archives/2020/page/4/index.html","2c8ae6e4d58a0cfbdc05af0555d7a5ed"],["/archives/2020/page/5/index.html","b778ee26c4e052d7293fec0c883185ff"],["/archives/2020/page/6/index.html","7383a4491db0158ffaf60ae2ec3d76bf"],["/archives/2020/page/7/index.html","651b6f70cb270efb51b1aabb4c4d8c04"],["/archives/2020/page/8/index.html","2f5c4ac8b90b5bdf1320f4c49adede1c"],["/archives/2020/page/9/index.html","b6d3bcf466a6a1cb9296b0cc5b325f3a"],["/archives/2021/01/index.html","1401bda96e23fbea88a16b2db3448af4"],["/archives/2021/02/index.html","a8c729891df110fa84b9995b41a07f09"],["/archives/2021/03/index.html","15fd118ca2eaac2a196728941c0f3329"],["/archives/2021/04/index.html","ac9ba1dc5d52be98427ae58381ab5a39"],["/archives/2021/04/page/2/index.html","c62c8b5f5df0838b19397174862234b7"],["/archives/2021/05/index.html","d27c07f2a83bafda2fab195030ff4a0a"],["/archives/2021/06/index.html","378109396fbd82a96aa35c3196c2c3b9"],["/archives/2021/07/index.html","3adf6c531fd1e6854f57ce847b8847b2"],["/archives/2021/08/index.html","898433406c0fb536bc6a6c89442ac926"],["/archives/2021/09/index.html","3e51b3b953d865959f9c9fcc2d2d9b6f"],["/archives/2021/10/index.html","e89407b5f5758900e5298be406b426bb"],["/archives/2021/11/index.html","27d3d69c769e6cbe59f8ea8477337453"],["/archives/2021/12/index.html","a3337dea65b8c95ef048bcb4a30adac3"],["/archives/2021/index.html","92ff1d8ebbde5cbe28a255120fce751b"],["/archives/2021/page/2/index.html","32475d4aa82ecf6dbca7f7b12938014b"],["/archives/2021/page/3/index.html","7d2b66fb0366697c4fcac71d1d5bedd3"],["/archives/2021/page/4/index.html","9c4b004233e3209015e92a7be5206f85"],["/archives/2021/page/5/index.html","0be61ef69ce635d4bfcfc24bdb987f77"],["/archives/2021/page/6/index.html","5a321ee776dc6999e1312f67c883df3a"],["/archives/2022/01/index.html","24cbd3f3da1cbe85bef8dd3a5c982367"],["/archives/2022/02/index.html","754e48e65471d8efed3f8bd6adfeefa8"],["/archives/2022/03/index.html","87f3a4ab59719944c273350d62e7af72"],["/archives/2022/04/index.html","231af9438c5754a0c8b57840b0180638"],["/archives/2022/05/index.html","1eca64ef9c50555492094fe7892ccc39"],["/archives/2022/08/index.html","a3c707ac27666d26631ad6b74dff6fd3"],["/archives/2022/10/index.html","184a4fa070cfe586c001dda787a24813"],["/archives/2022/11/index.html","a2872f3fa1a70a08ccff8cff17f4b5b0"],["/archives/2022/index.html","21a92d8d3d1a11d2a11f1c08038ea05a"],["/archives/2022/page/2/index.html","b09feaa30d46af2dd277bbd418d692a8"],["/archives/2023/04/index.html","24e3b5dc826f8c1e2f09109c90e52be7"],["/archives/2023/06/index.html","e28083195224901521aae5f69969de1a"],["/archives/2023/07/index.html","c5eeb062abb139381b65b417fd5ffce7"],["/archives/2023/09/index.html","6400c3630c129210097f303e1ac7f9a2"],["/archives/2023/11/index.html","d01262eefa08f1d34b539e1c45abf503"],["/archives/2023/index.html","5180420a302c0e07fb63e1d1c449d397"],["/archives/index.html","eff45075e6356a768a7e726598bdfb71"],["/archives/page/10/index.html","164b9bb0b45bb79568234b3725c7a902"],["/archives/page/11/index.html","cbad14e28ba8b7297b7a11a9affa33ad"],["/archives/page/12/index.html","cfa936ac1500faf09176cb741c0b375a"],["/archives/page/13/index.html","429ef17d735e8770afb4466c2838df01"],["/archives/page/14/index.html","7fd5da315dacecc0ae8c634ae26edb2a"],["/archives/page/15/index.html","1b67d64ffac38ea7deac42427d74421c"],["/archives/page/16/index.html","403875982a78d1880fe0c3ffe440d1b5"],["/archives/page/17/index.html","337cfd008ee72d24ebac61d8738a86be"],["/archives/page/18/index.html","456723fce78f2b814a7ffde5fc438f6c"],["/archives/page/19/index.html","e3ca7cb887363514fb43ab25cd61451d"],["/archives/page/2/index.html","a8562bb8f7c93d7b06240652e00c4cc9"],["/archives/page/20/index.html","a5f7486c56e453a43d7486fdbac94fe1"],["/archives/page/21/index.html","da453af835360ec3598c9c1a15adb908"],["/archives/page/22/index.html","5c5c7725bca5a15e04de6b85cf57a4c9"],["/archives/page/23/index.html","f3a2b6fcfd5332a1ed289f7ababcb1f2"],["/archives/page/24/index.html","f812c3b99b127f523de7fd2c6434b9fe"],["/archives/page/25/index.html","8f34d15c8c22742e4e1a1f103ed838bf"],["/archives/page/3/index.html","9b9e29f093f7c06663c63d934d3b66aa"],["/archives/page/4/index.html","cceff9b52c3cc1f9de806fa2b3ea5384"],["/archives/page/5/index.html","45b5dbaace16e8f3a141d71a506b7ff3"],["/archives/page/6/index.html","cd4e1d5ef907f2e08e28eb9a5a666666"],["/archives/page/7/index.html","bddf1fa5b1b7b0c9bd6c0d7bc7697b62"],["/archives/page/8/index.html","bf5229432437dc608bf1d45efa063aa5"],["/archives/page/9/index.html","18ee13af17e03bfe7d8952f15236b801"],["/array/index.html","493afcce95af610a29e0506e209acad9"],["/automated-test-katalon/index.html","c34cd8a98af719984d103432893fe7b1"],["/automated-test-selenium/index.html","058acc2200611a82ea2b31c2965330d7"],["/back-to-table-query/index.html","c0fce29f286d59c31abe2d69c3dae62b"],["/binary-search-algorithm/index.html","9f2cb494651a6a81e30b8a9daaae7700"],["/binary-sort-tree/index.html","e66a569d7619af9580221cdbd83396a7"],["/bionioaio/index.html","be88d399673520f7d0984fbeee003a6e"],["/bridge-mode/index.html","39e358c36036d5c411dbf18f19a65438"],["/builder/index.html","35076756afb3d58f550cde7be5eceab6"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","9bd5d52cf23de698e19a647207e7fa32"],["/cache/index.html","99f4cd1ddccca8ad8ded311db1605a7a"],["/categories/C/index.html","c210ccbce4290670ede71a1679856c87"],["/categories/SpringMVC/index.html","7a3f729c9025797862e653690ca7ed37"],["/categories/categories.html","bc4cb9f04acfe684b261b0e3fdc5c49e"],["/categories/index.html","eadc298344ec81cafd895adc0af39ab3"],["/categories/linux/index.html","1ebd4d5f34e62db00f4477502cd2dbd5"],["/categories/分布式/index.html","f0baac7aa2c581790987209570cfac21"],["/categories/分布式/page/2/index.html","6f837420e5947ddde0d6a260d37baff0"],["/categories/设计模式/index.html","93963d4f344f45a1c917586ff298551b"],["/categories/设计模式/page/2/index.html","201e4599f25fcc5708db87b6f99adeb1"],["/categories/高数/index.html","c62b3d4640806193b88b65a8956a71d4"],["/chain-of-responsibility-model/index.html","6ef7a9ebbf87d77bde617e72178c4051"],["/charity/index.html","768ffb879b4159bfb3deb0bb03d74f79"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","f5c394b8e0b5ff07178d405bbc2b88fd"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","0a3b7cc4dc7d9329339c001d38213a20"],["/combination-mode/index.html","6c827dc36bb7f2a36242f790dec2ec9c"],["/command-mode/index.html","0a3d7db02e5438fb3133d58fbe5bc699"],["/common-commands-of-unix/index.html","dff163facfa93412b8f023832859900c"],["/computer-network/index.html","e92c5b9690f287425fb90c6faeafbdcf"],["/concurrency-principle/index.html","4be1ce18ebfba2916796707ace07520e"],["/continuous/index.html","094b8420cac264d64b12c619e3a19052"],["/contract/index.html","3b0ec122e1af2d03a0e7536c68ce948a"],["/create/index.html","eb455220b4ce7881cd5d9d3e690622e0"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","63489164b4193b49e451ea7dc6a23006"],["/data-structures-and-algorithms/index.html","fb3dc84cb16a3d097318a1dfd4d1951c"],["/deb/index.html","f5e8d06fab77dd1f29eb3746ccb89dbf"],["/decorator-mode/index.html","51de28b49835435defbc65edf15b9cdd"],["/definite-integral/index.html","3bc2b681d05401561790c6a7b411f303"],["/dependence-reversal-principle/index.html","ca9bab5fb8489426d82caf608dfac3b5"],["/derivative/index.html","1662023ab4733600c924a366b8856acf"],["/design-patterns/index.html","6366595d90580a05a079542a70b4c392"],["/dic-algorithm/index.html","b44286673a11f987f646d786e1cf03b9"],["/differential-equation/index.html","e4201aafe5ab27c9837dca1e32c04352"],["/differential/index.html","512fd5b5a7a7af2444634c7032fec4d0"],["/dimits-law/index.html","f965871c4c529c72d2322608368226fa"],["/disjoint-set-union-find-technique-appreciation/index.html","2b22cd20483a325983182c821e959f41"],["/distributed-lock/index.html","b2092b9228778cd832f734a965d20fb9"],["/docker-virtualized-container/index.html","16132a44c6168278c7745322b8679e63"],["/double-integral/index.html","924be067e0fdcd38a88c8362f084a750"],["/dp-array/index.html","a94c41580e54cc3205656032b72e96fa"],["/dynamic-array/index.html","702f8a681e87e482d981ca8f8c03df4a"],["/dynamic-programming/index.html","f606202109bebe4fa7ed2486631f5ede"],["/edgeset-array/index.html","206b60a69dd0703dd2cf5b6aa69f96fd"],["/encoding-algorithm/index.html","5382bac756d80dcec1adae4fa0660b0f"],["/eureka-service-registration-and-discovery/index.html","19a893718c0fb079fadc7f1d10a1b77d"],["/extreme-value-and-maximum-value/index.html","c310de21109209cbcfdac709c53eec05"],["/factory-design-pattern/index.html","63a5f07be81bfe83bd1b961eec433112"],["/file-input-and-output/index.html","ea88f4e0168f6d5e559c787083df2c23"],["/flyweight-model/index.html","0c1faddb8711b99bb6c30edc6cc6641c"],["/friends/index.html","56118ff14ac371738ec463fe184c4946"],["/function-graphing/index.html","943db94c2ff69818a00fe1285e843540"],["/gateway-service-current-limit/index.html","5a3f28b272d8ba11fba1acd7d563b708"],["/gc/index.html","8af126ebed38c0ae574a5fac9282f1ea"],["/generalized-integral/index.html","f44171309697d22ec7a8b1d5466f25a7"],["/google8102e2f35ce9e391.html","6d6cecc177946388968ae62c0bb3e4fd"],["/gulp-compresses-static-resources/index.html","c4d440bfef927c45c5e203d1316c2285"],["/hash-algorithm/index.html","cde3444eb4cd3c81957edc04fc9bb838"],["/head-first-JVM(1)/index.html","17e149460fab766774c0219d4aace0fa"],["/head-first-JVM(2)/index.html","6ec0f2b8d68cccec6777c0ed100fbbc2"],["/head-first-JVM(3)/index.html","8707037f7254428f7eaab185c3df7d83"],["/head-first-JVM(4)/index.html","7297f738476c70ba7a7eaccc550d8138"],["/head-first-SpringSecurity/index.html","af607b5e9dfcda1120d314b134d242fe"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","c11d026ebb1d4b19667f3cef9e6e2446"],["/heap-sort/index.html","1a800a93904257a66ebeeaa22663a07d"],["/http/index.html","be9ddd40baba2eef2469acece3c4ff5f"],["/huisu-algorithm/index.html","290c55dbad5dc027362eebf9df3e30dd"],["/indefinite-integral/index.html","b4a7c7161c97ab8acfcb2ade79da944f"],["/index.html","9040fef66c2d10717d07338d3b386149"],["/infinitesimal-and-infinite/index.html","202eb1519fa6cbcbc4277eb4ead1e54b"],["/interface-isolation-principle/index.html","e96e29845b762f5e03351f4ce14db965"],["/interface-test/index.html","d25609f884f0c891f59db0eb23a27dc9"],["/intermediary-model/index.html","77976f8245ffc1fa42181d8f74336b8f"],["/interpolation-search-algorithm/index.html","a04dd34f7a6bfa2ef268caca64578a56"],["/interpreter-mode/index.html","bdeffa1af0d5602f0207268c7f5bfbd8"],["/introduction-to-computer-network/index.html","0e10c2686b4ccfe99307813457fbe3de"],["/introduction-to-operating-system/index.html","c4e4a91bf3dd2e25ca4ef0869fdb19c3"],["/inversion-of-control/index.html","4dcd98e446f55c8efd15bd91639d3807"],["/io/index.html","c1f3c6bbff9b03a14d696a898664d3f4"],["/iterator-mode/index.html","8bb23ae6abcfb360424b07903d350f8a"],["/j2ee/index.html","ffc937b04560d51f107baf249aceea51"],["/j2se/index.html","14dee97e575f674576b3bd93406154df"],["/java.lang.String/index.html","219e0496f49aa54a125bcf80abe9fb96"],["/jdbc/index.html","6874b607aa94cf5c039bcd9ab854ed0e"],["/jdk/index.html","73749d2ec4dcbbfd26512261d9398c8f"],["/jmm-memory-model/index.html","8c0e18b49cd62fd5f97f634da2ff5c95"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","8d14666a1dee4d0bcd68a98f15063e22"],["/jvm-method-inline/index.html","51836da34e21f3200ab33856865faaf0"],["/jvm-tuning-practice/index.html","a86d236386442ed30d59739fa1bdf47a"],["/jvm/index.html","db2a3071e26365362f65eb528fded836"],["/law-of-robida/index.html","9c77cc3bb2f342066def56e0308dbfdd"],["/limit/index.html","1bd650aeaa385a98537f135db3c0427a"],["/linear-algebra/index.html","dcd1b758ceee2ff9b15f19a96e9e10d6"],["/linear-search-algorithm/index.html","1eba13facad1f9e695518ebbe8f9e91a"],["/linked-forward-star/index.html","6470d17d2314e94cbf292716c42e5394"],["/linked-list/index.html","cc1afb6b9f719d8c622f4de030e55164"],["/linux/index.html","5d30fdf8dd194731852561d9c52dd9a7"],["/liskov-substitution-principle/index.html","cf6878ba23664246612003d02f89228d"],["/lock/index.html","b6574b1b8a3fd4de903797db1f713e66"],["/lru-cache/index.html","811aa7726bf8892890fabcb4dbdba90d"],["/memo-mode/index.html","33a7d61af35e800c7f95424bf7f17800"],["/monotonicity-and-convexity-of-functions/index.html","3a1f6ac3f05abb9dbba4bbcf0c573d4e"],["/more/index.html","c44f78dcd9f1cf0159c51af5419d2dae"],["/multi-function/index.html","081441093e1324e71904e21313bbff40"],["/multithreading/index.html","87da2fd25a90488633a8c297610d5ec2"],["/mvc/index.html","814ff0c1902f45ab4170ccdf655e2203"],["/mybatis-cache/index.html","5fe906f73f076f5c81a722a438c49b45"],["/mybatis/index.html","b87238f392db6b9c589c4aa736fe3202"],["/mysql-index-wrong/index.html","1a46898a34a7af6d028863227ed00128"],["/mysql-struct/index.html","849abad33c47f61c0406b4200dd837f6"],["/mysql/index.html","b4d4dbc5791fbd5d2a63b5db8e0a26d7"],["/nacos-service-registration-and-configuration-center/index.html","2bfc3bb81b6c7ac77dfb75832bab2a63"],["/notes/index.html","3b675313bfe3140db7474110be66ad09"],["/null/index.html","92dadf998e401f7e85010695d4855914"],["/objectoriented/index.html","324df2bf222c29ddeee1e547bdbe36ef"],["/observer-mode/index.html","9d8e49207b243ce89f2071f03d250da0"],["/off-heap/index.html","aa55d51436dee0df00c7876bf1473b7f"],["/operating-system/index.html","30ca5086062c06b5e812a56eec9e2270"],["/page/10/index.html","ed1f0b91ca4f61a575bfc62f283300fd"],["/page/11/index.html","404df6ceee70640211910504614f7d6a"],["/page/12/index.html","6169ccba366a8f141d7e3e5780540451"],["/page/13/index.html","ca5232882e97b453f9e4e9f085d16d24"],["/page/14/index.html","a1c1297ec06f42efa63c28ecce8ed75b"],["/page/15/index.html","cfa4e423e47be8c077e0cec8b2e80c00"],["/page/16/index.html","3e34b15af226fc8d9e5efb17dd1e3eb7"],["/page/17/index.html","7a976ac751a70be7562dc7f4bac96f06"],["/page/18/index.html","67210056039e38504c63ec23e01ea816"],["/page/19/index.html","5c5ca298b8b96815cb06918f7fe66a05"],["/page/2/index.html","f370f8f050ef22de9078b24dd068e13a"],["/page/20/index.html","c7c65e113576be19efe69b7bc1b20f5a"],["/page/21/index.html","adafca7d17a2fa17719137243ccdea2d"],["/page/22/index.html","6f2257afbc8ae439f3684996b74e71be"],["/page/23/index.html","704d3789c22a30910dd169db086f5bd1"],["/page/24/index.html","af90ec8b1c06d8c2401c493a9d03b28a"],["/page/25/index.html","a8ff1f9af1f0a3c4f2162b6f04c4e34d"],["/page/3/index.html","360ababd78f2469be962f32d5b1553d3"],["/page/4/index.html","80512ce8a58988750937390be2c29559"],["/page/5/index.html","3dbfafdf90c6c29ed1fb23bb72bf7c5d"],["/page/6/index.html","c9a02e7db1f0ab1710a316d239e2dd19"],["/page/7/index.html","d1f0580ebc8eaa6e847499e5b7ec54b8"],["/page/8/index.html","fcf4f19bd95a78d8ce90120ab0b9a214"],["/page/9/index.html","ec5e8c2cd6a03d45eecc7b80f3bd7a4e"],["/palindrome/index.html","ae6ccd8bd9eba5edf51c62355ab1cff9"],["/partial-derivative/index.html","44ce9d07cc9552c92a23b5de06896305"],["/pass-by-value/index.html","fc91b6f05021ce5e594abdbc86a4d9a4"],["/pictrue-bed/index.html","bcfbddb65119ed475566bb783e25582b"],["/principle-of-opening-and-closing/index.html","c11a8a9984ab6218f799a3b21a3c13d8"],["/principles-of-computer-organization/index.html","bc18d845a6d780dbdbb8a33c8a9e5148"],["/program-test/index.html","b041c319f6a7e972727d3ca1e87d2287"],["/prototype/index.html","4d9e68985c4f12e516cfa739be5544eb"],["/queue/index.html","8b79e1b026cfdb04a084ad9a152d17a6"],["/random-weight-distribution/index.html","4508397b605eaf0e17ff55bb10d679fc"],["/realize-modular-programming-with-functions/index.html","19d82d7b27ebe5f6d4bb0b0956072439"],["/redis/index.html","a3d0b1f33fd1943f344cdf6d6a9e9566"],["/reflection/index.html","df3518a61677a011d9fdc107cb81c7d6"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","20bde7031cdf74ed02fd2d59945ad7b7"],["/ribbon-load-balancing-service-call-degradation/index.html","d40e234765117a43fb0636efb841321a"],["/round-dp-algorithm/index.html","6e2be23f74108f774746c7c551d21622"],["/seata-handles-distributed-transactions/index.html","28e14371ba91a51c4f28b5f2424319e2"],["/select-structure-programming/index.html","bdca8741658f0dfb890128f8b6da2fd8"],["/sentinel-realizes-fusing-and-current-limiting/index.html","b0f8d7fc8ed80100154ad6029ec83a1d"],["/sequential-programming/index.html","2a4a574f9a942ee2d01ee56eb4d8bbd3"],["/series/index.html","eb9a3e6501dfda42c80ad66c42092401"],["/service-worker.js","19bc58f5ea39ef4d06af043da7c1d0d9"],["/shortest-path-algorithm-Bellman–Ford/index.html","87a82d4ca885f1e1ba6c39325941dce4"],["/shortest-path-algorithm-Dijkstra/index.html","395e66d39b6350976ad2cadbcfaa7b6f"],["/shortest-path-algorithm-Floyd/index.html","5fbbea2d40c06aefff4e4e3af2b43dcd"],["/single-point-login/index.html","f9d3907347187268596e42b7e126e1f7"],["/single-responsibility-principle/index.html","5e00e0b9762baa7944ec561a11623756"],["/singleton-mode/index.html","af226888c250175019d2dbfaaeb2ef1d"],["/slidingWindow/index.html","472b8b6f589098b374a3e2b959bf8249"],["/snowflake-distributed-id-algorithm/index.html","b69fb508b72b953d58af29662ea93ed6"],["/sparsearray/index.html","ea13dab2fae7ab4dad6ab3676cdb76e6"],["/spring-and-jwt/index.html","3cc300c23f77ddebb26d38750cba6781"],["/spring-architecture/index.html","1103ae430dd6155ba7aaca51b9a0c53a"],["/spring-relate/index.html","22a86e12c4c7890bd1665ccb4c616450"],["/spring-springmvc-mybatis-integration/index.html","e900f7e59ee7653cf53d0c6b8390ae5a"],["/spring/index.html","de5b24cfc22eb579569ee16fc0b1b0ff"],["/springcloud-alibaba/index.html","6463caa8ac38020fbef0f64edff471f4"],["/springcloud-bus-message/index.html","3ef2438d974fcd462753daa00ae7bd1b"],["/springcloud-config-distributed-configuration-center/index.html","733e8f8fc7687733fc6fa832652c2ebb"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","1691dfc8eb36ffc4e2cc0b1f54dae884"],["/springcloud-stream-message-driver/index.html","cdb53b746c4396a279785d001ff7736f"],["/springcloud/index.html","b3a99c2c6caf2728721680752bba4adb"],["/springmvc-environment-construction/index.html","d8a5e8a56fb14fb5bdfe0c12001bbbf9"],["/springmvc-work-stream/index.html","ab2dbcae1a4e0d3b854846171b62034f"],["/sql-injection-attacks/index.html","6acdc43d62950bdd9dfba90a2327fc04"],["/stack-simulation-iteration/index.html","9134d9e9bfa6ea005d5deb8d5f49ce9c"],["/stack/index.html","f3baaf7c00d0be5884d0a802f52f84f8"],["/state-mode/index.html","965c9f4547124bfe7cc3f731da7d0ffb"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","ac8e6853c05743fde5d044e750747ee2"],["/strategy-mode/index.html","abd107c54263c4b8a73302d04925e2fd"],["/sw-register.js","b6a7b22c64463fe091ac840df0dab1c5"],["/synthetic-reuse-principle/index.html","e60212d2b4b9032365fe545944a1582e"],["/tags/C/index.html","5d8ab188c95ae28184c4d8b746db8ccb"],["/tags/C/page/2/index.html","9c59c1fa26fa09094489bbb40e12a463"],["/tags/Concurrency/index.html","bffd96925ce8fa9a58ead7cf99659398"],["/tags/DesignPatterns/index.html","52b2f2011bcc7143a76acc665877a733"],["/tags/DesignPatterns/page/2/index.html","7ba405b8f5860aabff889d63b8cc4b4d"],["/tags/DesignPatterns/page/3/index.html","0b98e2cc063420d58f5e7e1630416e7c"],["/tags/DistributedMicroservices/index.html","2af2c64d8e6cc6a699a796a50ba03071"],["/tags/DistributedMicroservices/page/2/index.html","46fa30d403d57bf2acc9834de9730c0f"],["/tags/Interview/index.html","ca2f13c4cb6c75bee4c8db58da047d60"],["/tags/Interview/page/2/index.html","12f9ff386368f5b943d8f0c3b418e36e"],["/tags/JVM/index.html","ee64ea8c3b7da46771b11403f02328ab"],["/tags/Operating-Systems/index.html","5c9c642504a090218259ad2ecd96de64"],["/tags/about/index.html","1400034c06358fd1e66c64f8c8060360"],["/tags/ad/index.html","d9eafcc744012e4cb4de7cf1b7083bae"],["/tags/algorithm/index.html","54289fdd11d24b608f45d6916fe502f2"],["/tags/algorithm/page/2/index.html","d45589dcebc5bc03817817008f642f9a"],["/tags/algorithm/page/3/index.html","c5ec915af72b36547fa6265369bc7457"],["/tags/algorithm/page/4/index.html","312ee44ec3238d1e5896071adac68016"],["/tags/algorithm/page/5/index.html","2d7a39faf7fe69687f9829505f758e51"],["/tags/bug/index.html","499c4ccb6be56b94b761c4e3db976ad6"],["/tags/computer/index.html","864334b8138667e3f7fa216dbfc3bbff"],["/tags/data-structure/index.html","44799f0a86068b19b3bdccf23b8f355d"],["/tags/docker/index.html","9b568052a750a41d07068a2cb56d68b6"],["/tags/frame/index.html","c4b738ff5ae83cb2fc56092dedb554b8"],["/tags/frame/page/2/index.html","7e75c79e7fa42684f18ac9a736cacd2c"],["/tags/framework/index.html","4e35fc434972d45ab9579e942885e8a9"],["/tags/front/index.html","b5df865524808aab89b284d473c01373"],["/tags/github/index.html","070e28cd36e6ee994f49ae023d202b16"],["/tags/index.html","3079b6cc6e7028088578ecff188cc701"],["/tags/interview/index.html","3ed82df4730bbf011e0cf0de8cc99dfe"],["/tags/io/index.html","c9e3a41d50b1a5bb070c7adc26b1a9b9"],["/tags/java/index.html","48cc9ca530ac4a345981622b2b56f2bf"],["/tags/jdk/index.html","e0336cc1619172171d707a06eea06465"],["/tags/jvm/index.html","9086d572c094285f0b4c60bfa806ee7c"],["/tags/jvm/page/2/index.html","82aed1f4aef044c4ac8558f312b2fbcb"],["/tags/linux/index.html","38db92c505b1be458a01355545a9688d"],["/tags/maintain/index.html","c3bad01c81c5b7b49e48aff13570afbd"],["/tags/math/index.html","028e7542efb093f959172ac720e6cb74"],["/tags/math/page/2/index.html","ebbc370eace721ef03cd344dcf0596da"],["/tags/middleware/index.html","1596c8604c8d7b5231842d3139ca663a"],["/tags/network/index.html","c5c79f0d8293cd40f168f79d438a8c61"],["/tags/network/page/2/index.html","119224d840a33eb5c1e0e3114920975e"],["/tags/project/index.html","e142d82bd1ea155f1356211e9ac6a473"],["/tags/project/page/2/index.html","cc2f3422ec12e5f869148233111e578f"],["/tags/security/index.html","9362141e7b1b8fddb9d705db6fae9558"],["/tags/sql/index.html","b29fcb4deb8690e88ff6e29e31f14d7f"],["/tags/test/index.html","fff8d1e8be5aa8096db768194aa049b1"],["/tags/think/index.html","70626b49cb293135abcc030cde2c569e"],["/tailscale-ssh-remote-connection/index.html","9ca7538ac8389b64e388cb4d2a8367fe"],["/tcpip/index.html","9a27a9636dfb7f0188e560e68cd5ddbd"],["/template-method/index.html","fc78027a0377b92f87ba81ec1095686a"],["/test-case/index.html","9fcaad80aaa418cb7ad55d4117ed4bb9"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","012d24833a39a5e6697cb605626d6525"],["/thread/index.html","6b95d71afbfef26a3baec467b3e97482"],["/tj-horse-racing/index.html","b7228949b3519b433516455fe8c80785"],["/topoSorting/index.html","44e8136c25126733fa177b93158498b8"],["/traffic-monetizationaccess-to-google-adsense/index.html","4a74e16b2707a6293189ddf6c0bc09e1"],["/txCharity/index.html","44ab6718b5889a198c505fbc70048f4a"],["/ubuntu-set-ip/index.html","77c7d8eb8a6c81687e3947c6446e9ebe"],["/undefined/index.html","fbab456b4c5f98c5d7c9110aa6743a08"],["/use-arrays-to-process-batch-data/index.html","7ea49b9d4218d975a27cecdda29e3d1c"],["/use-of-springmvcmodelattribute/index.html","351ed005a527798a8e8e556198b29cce"],["/users-create-data-types-themselves/index.html","e9d3183bd53d2831a16ebdbe85d6b70a"],["/visitor-mode/index.html","784ef9117278896423adf3fe84f50840"],["/what-is-milk-and-why-is-group-wise/index.html","458a15909634951512abb881b9fdf195"],["/wiki/index.html","dd81d78fa30fea8af78c4e8b07b059c8"],["/wiki/tags/知识库/index.html","ca293dd0e1dc5c2cd1e4221113752dcc"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","212de38a8f25df16189c43c5394ab571"],["/xss-crosssite-scripting-attack/index.html","ddd4eaacd942259a71e3dd796a3e2f79"]];
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
