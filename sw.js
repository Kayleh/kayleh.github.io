/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","a5e04345c8cba51fc23b023c059982f7"],["/404.html","295d46c5559f894a11c1e41be63b6c7a"],["/404/index.html","b981c687d7f9a320e58d43817ea01c06"],["/7-sorting-algorithms/index.html","dc9e03ac5f82c889137e21ad5398cf03"],["/AIO-blocking-model/index.html","55144370e0c2387152ac5950390971ec"],["/About-Snowflake-and-Consumption-Degradation/index.html","d8788f04d4f1db7aaf49994ca70517ab"],["/BIO-blocking-model/index.html","4d9a724b77c68b2c73b58757b175c2df"],["/Bloom-Filter/index.html","52683a2266fe0d63d78d23a49d59cac2"],["/Boyer–Moore-majority/index.html","bb33a179d61ecf61f985af7c42f84ba3"],["/C-algorithm/index.html","0cb3a7e7c36cf917744bf9bd13ccc01a"],["/C-programming/index.html","3b3d5ea77cb31852b78b7e32a0c3bf7c"],["/CAS-&-AQS/index.html","9cafabf0c9e5c4a4c9216e24008ed968"],["/Comparator/index.html","575e80042ac6368b656164d06f031fe8"],["/Differential-array/index.html","eb6b40fb79343cdbd15d6c939104d398"],["/Download/index.html","b1027a0ad13631b0673b48fd5cc03d7e"],["/Front-end-security/index.html","cdc60a55ccf637c2d7d364c3b36555dc"],["/Good-use-of-pointers/index.html","6b2d50d2ee05e03d77e368b5df56bd4e"],["/Graph-degree/index.html","60bd82c71981a5ffe5fbbc24ab114d0f"],["/Greedy-Algorithm/index.html","7ed5dec96402b0fee202603ad5e64efc"],["/Head-First-Map/index.html","8fccd9e4eeb6a2da26a30d13fe23b889"],["/Head-First-Netty/index.html","bd4b0c221dfaee771eee10977699a563"],["/Head-First-Nginx/index.html","2f9e9dbc87e1cc6e34befe2cb6b93e5f"],["/Head-first-Spring/index.html","f9649b20b5017bf85ecea8357129e348"],["/IO-model/index.html","ab52c676ce0c429a2ad748aedde73a01"],["/IO/index.html","5fb1302c0dd3c6ab0452955fec929c40"],["/Implement-a-lock-based-on-ReentrantLock/index.html","97bca9734c355b43cf6c4b5e5fc55b9c"],["/Improve-Robustness-(1)/index.html","77a436f5eddc8f41d784f4e3c810c28e"],["/Improve-Robustness-(2)/index.html","523494ae1093c1d6492e284c1126ac38"],["/Integer/index.html","212c17f8fe2cc0c6f6bfcb422b36ce8a"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","62bf7de820a6b69d2226b5bc8a1bf065"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","ac3c22e1f51880114be6b6db09966389"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","9cd75639b2f98722cffca7ddf7a6cbf9"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","1bab2c5e4fa2f2f4797597843d4b7688"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","c2f3cd52dbc5b8c7c915d41a52fc5b88"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","1430fe043ce83fb5734e333f872e9c9b"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","07d086620d593e3f0dfea0050a441e82"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","191766ca963db73c09b8e8102e6e50fa"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","ff477d1afe922449fe61bad037e8a9b8"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","af8c6dc80fbcf0c929e89c0c025d484e"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","2a6740f498debc7b56005c422e3e55a6"],["/Java-network-programming/index.html","98ed66e3bb37f7e6d3f5f0b82d0535fa"],["/Large-number-operations/index.html","d69ec92cbdad820fc25120b57330591c"],["/MYSQL-MVCC-&-LOCK/index.html","4f287a1fbb67182792eacedcaf49deca"],["/MYSQL-uuid-and-page-splitting/index.html","f05b7e67ee6a3f5c7d67ef94bd3903a1"],["/Minimum-Spanning-Tree/index.html","13e69d46ab1bb46151ba3821aac6c2d0"],["/NIO-blocking-model/index.html","e9c5bff5598f056c9d1939767e12c908"],["/Nacos：Configure-MySQL-data-source/index.html","3fe111d58c27ca3f2f0ae9136e8904fb"],["/Native-method/index.html","c1e22a5651e02e2c38c2134c76636f9d"],["/PriorityQueue/index.html","51d4dd1ad11e9cb3943424b1289eef50"],["/Proxy/index.html","0a279fffc1688c47c4900eff294e978f"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","dea00b5a3725c3a2aed33badf6d6762e"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","424d187c00d35f1e169b151629423628"],["/Reservoir-Sampling·/index.html","34dcd87e96de6868086515c37c882053"],["/SQL-injection-vulnerability/index.html","c526c4f7571dc0dafe58a2e0d183f28a"],["/Sandbox-security-mechanism/index.html","0f3763832f0fbc048a78945490dd9bc1"],["/Spring-Cyclic-Ependencies/index.html","162a55220f99ddda8f7d7b9bc6d3a5e9"],["/SpringBoot-startup-process/index.html","b90b899f4950d3633618b9cd830ba5a1"],["/SpringSecurity/index.html","834bb8c2b33e5640210966c0aaf90a8d"],["/Thread_Pool/index.html","4fd5a635ecb1b9d82373c8a1352a0bd2"],["/Transaction-isolation-level/index.html","05369a9f38179c369429be54cb78d560"],["/Unitest-framework/index.html","f086352b701928417009457116388724"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","57751f5f1828979862cf5bab9a86694b"],["/about/index.html","0df7348bdb345e64d974478a6ccf0866"],["/adapter-mode/index.html","607dd725a9617288e6246e23e1b460df"],["/adjacency-matrix/index.html","6414cb40641382244dada37a60e1479c"],["/adjacency-table/index.html","e2fcfec7761b65727300e10a17240551"],["/agency-model/index.html","5bf4533165ae757951211fb60b3e2dc5"],["/app-test/index.html","f340535c48ea0a1419e93a89ed2120d3"],["/appearance-mode/index.html","871144089e84ad219fb6e42d4abe7640"],["/archives/2019/01/index.html","9d0af1b181c435e48f8e36953cf7bae4"],["/archives/2019/07/index.html","d619766215df74a191492ae7ea0f54ea"],["/archives/2019/10/index.html","20765550a03b161fde8cbc639b06de93"],["/archives/2019/12/index.html","4e1bb39776303b4fc16234672637994a"],["/archives/2019/index.html","2c324b354df11320a782768e3d0dcc3d"],["/archives/2020/04/index.html","8da16712438deab70e0686fff3d6ee1b"],["/archives/2020/05/index.html","2915ae7b551899301390c2b39f10751b"],["/archives/2020/05/page/2/index.html","594ecd2c214fe8929c8119e19f43edba"],["/archives/2020/06/index.html","9901313ff41423285251bca98e832275"],["/archives/2020/06/page/2/index.html","24849886e1740745f61cf7e7e40c70b1"],["/archives/2020/06/page/3/index.html","2fd7be4e5f68ef66a65855d97ab4cdf0"],["/archives/2020/06/page/4/index.html","e3f3264251d8b65ac9f471af077de186"],["/archives/2020/07/index.html","f21fe98647fd8adcfe3f551ff7209f01"],["/archives/2020/07/page/2/index.html","d6411d07ab0ee89d1efa7f1f11f89b09"],["/archives/2020/07/page/3/index.html","f6eb50ebb19d00b79fd9adbed2f1adea"],["/archives/2020/08/index.html","0967a71efb829ec2ae57ef01b925d677"],["/archives/2020/08/page/2/index.html","8378548c750a6dfb04d9c6ff3c3bcc9f"],["/archives/2020/09/index.html","0370fd5da54ff66ec117884cb5d85405"],["/archives/2020/09/page/2/index.html","6aab4367a5457aa5504bb1f7c1d291cf"],["/archives/2020/10/index.html","eb2f1d01dd584d12b49a6a912899a109"],["/archives/2020/10/page/2/index.html","25519fe9eab61c18036dc4d80fb22298"],["/archives/2020/11/index.html","d964fe821f652f0d23eb6f61b6195076"],["/archives/2020/11/page/2/index.html","7eddd907323335175aa753eb269dda7f"],["/archives/2020/12/index.html","82dc224473324156c3cf842b49b26c72"],["/archives/2020/12/page/2/index.html","6029ba1c8fb26c10f6365abacde5c058"],["/archives/2020/index.html","448dd852a227f820ca1501003c9b9c16"],["/archives/2020/page/10/index.html","c134cb4ce9d08158950f9fe6422ccf75"],["/archives/2020/page/11/index.html","f49d96e74479c95ce658d464bcdc51a1"],["/archives/2020/page/12/index.html","aa859bcfd30e2fb9f77383b5d6bbe4c9"],["/archives/2020/page/13/index.html","aed094ce96265800f927b5553f4cfddd"],["/archives/2020/page/14/index.html","d7ed58067e55f30706e519e08ec67d5a"],["/archives/2020/page/15/index.html","e878dc982e932b10528a36fbdc3d70ba"],["/archives/2020/page/16/index.html","03998b7c18dd4c78719d16a6696bff1c"],["/archives/2020/page/2/index.html","448b3f7411e6edfe50c9672d4425cd5e"],["/archives/2020/page/3/index.html","dca9a2c78c85bf0ddf8d9ad5fb6c67ab"],["/archives/2020/page/4/index.html","120fe28e4f37bd7b7c3515800b68a55e"],["/archives/2020/page/5/index.html","bff1a88704d7dccf588d88716149b267"],["/archives/2020/page/6/index.html","cf24796110138e1c06b673720a2e82eb"],["/archives/2020/page/7/index.html","34f49397403b03157f5a4016f7d77472"],["/archives/2020/page/8/index.html","85b13582fe397f9de24c8fb5f80572b1"],["/archives/2020/page/9/index.html","0e2fb38a9ac5667bd61713e943f8fe04"],["/archives/2021/01/index.html","2a1dad538831ed246e0f75f2ad7f38ae"],["/archives/2021/02/index.html","6d745cd89256cbc5dbc6a5410856be8d"],["/archives/2021/03/index.html","26c9bc3a572bb15d3382037e50ed489c"],["/archives/2021/04/index.html","27ef47ae11d5d826b6dc798879454f83"],["/archives/2021/04/page/2/index.html","795c6913c616f699a03603c01e9c903f"],["/archives/2021/05/index.html","6a333c0fb5f0d2f52e9f0c2b2657a9bb"],["/archives/2021/06/index.html","f0bef451b664f0e86bd8fad8d2e642cc"],["/archives/2021/07/index.html","1d3995700d946e445d98026676e89100"],["/archives/2021/08/index.html","b428d79ce097d460f9e54f1b7c4aa67b"],["/archives/2021/09/index.html","d6c06562adf10c00b57801aab687038d"],["/archives/2021/10/index.html","7517a121d05b1e12a61a1c708add5ae6"],["/archives/2021/11/index.html","f5a4de93284aa9d755cc1e00639d91bb"],["/archives/2021/12/index.html","55ff5cdc6ca5d7c850899eb2ce9e1dfc"],["/archives/2021/index.html","7ccc0ef2ba0310d344086effc9b892e6"],["/archives/2021/page/2/index.html","96841394769bd6045786ca26431acc83"],["/archives/2021/page/3/index.html","2947553f615dc2cae58efb23394cb04d"],["/archives/2021/page/4/index.html","5886a07ea1612f258954428d93bf7e89"],["/archives/2021/page/5/index.html","b33edfceaa0f8176b5dd2cf973d34ae2"],["/archives/2021/page/6/index.html","2852204a1f37a92e724f6b6d5dee6795"],["/archives/2022/01/index.html","7bf5227c64e3cf102b1f0262dfb8f587"],["/archives/2022/02/index.html","f9f24ec26c2b957319863a2bb091f553"],["/archives/2022/03/index.html","83947d977161124d879f3193c7453daa"],["/archives/2022/04/index.html","9ced9448a7924cccb8b2ec644ecea699"],["/archives/2022/05/index.html","59a8a20652d7507dba52b54beba26ff4"],["/archives/2022/08/index.html","2aa63db0eea1669fab80cbba53277ca2"],["/archives/2022/10/index.html","cd3ae346be023ed280e79360853c1a65"],["/archives/2022/11/index.html","55f134a989334194d33601217b64c583"],["/archives/2022/index.html","fc52a8fa93fefc842b4a998e741835c7"],["/archives/2022/page/2/index.html","ebdb615aadc2541bdccca33e7f5fa711"],["/archives/2023/04/index.html","627f4944cb17ca109e4a84b04e5a72a1"],["/archives/2023/06/index.html","749aeb920ccfcb6cd888a2f0b51dddd8"],["/archives/2023/07/index.html","488516b14cf7de68cd43083a77c90c1b"],["/archives/2023/09/index.html","27f3f3654cb6e57a471676d71ec3d175"],["/archives/2023/index.html","a565199eaf20e2354b6d0e3d20800cd5"],["/archives/index.html","43c19f7b9427a927158b2f57c9ed4e2c"],["/archives/page/10/index.html","de54a874e521c84f84ad25ed9381cd49"],["/archives/page/11/index.html","cc7796439353ecc4162868df22a73373"],["/archives/page/12/index.html","eaf6565575b8f253e9b2e16b8ee9c281"],["/archives/page/13/index.html","7bdefaae333af8a5761945cd8d19ebbd"],["/archives/page/14/index.html","f25560ce627f4b93da0fad135738d657"],["/archives/page/15/index.html","8005cc4ef89ca746bb912c83ee06d398"],["/archives/page/16/index.html","adcedcd0393185f6b653019c2cb6e0b0"],["/archives/page/17/index.html","c26facf4b39c9eb28845e13247ca0c8c"],["/archives/page/18/index.html","2a7e4b90541b5c49d940374db8d20369"],["/archives/page/19/index.html","edb87953437b8cba8c2f4c0dd5af9faa"],["/archives/page/2/index.html","4bf4637ef020cdb2b04ce12c79f7d88f"],["/archives/page/20/index.html","d9a8c3ed59c0f462d5c889359d8dcf3c"],["/archives/page/21/index.html","76793174b82373acb4b1f04d0de12bf5"],["/archives/page/22/index.html","fd4410cc6689bccb5d920ae949ed39d0"],["/archives/page/23/index.html","a99932db635941c5fb0c671c549b6171"],["/archives/page/24/index.html","9f3f1f3b5b339a39def8ef7daa8bacdd"],["/archives/page/25/index.html","a3233c0f3f281b710b03da17801ec130"],["/archives/page/3/index.html","cc5a7c02fb7d1a1f0c884fb4ef4fd5ea"],["/archives/page/4/index.html","46288441741f188cfcf7955868b525e8"],["/archives/page/5/index.html","eeccc66baf756583ef156c0ee03fa82b"],["/archives/page/6/index.html","3c098007fdf935269822bbf37a82bf99"],["/archives/page/7/index.html","890fb17b40415bf8d2fbd0c714bc9d81"],["/archives/page/8/index.html","cffff74a3d2eb9c78174c5132e5b5a60"],["/archives/page/9/index.html","37220b5e98eb1acce629a3c6a217c2a4"],["/array/index.html","314931d66226b7210dd647cdb8057b53"],["/automated-test-katalon/index.html","ba16be53b545bfb7a30823873bf2a682"],["/automated-test-selenium/index.html","753f17218a67495e8fffbb50cbb3eb9a"],["/back-to-table-query/index.html","02b56e0b90f14cb0ddeea4cd493b7ffc"],["/binary-search-algorithm/index.html","9138aac74fe3b8159d1bdd9fab517eae"],["/binary-sort-tree/index.html","dd4854b0f36c5fd548afd0970ecafce7"],["/bionioaio/index.html","d0aad43a63fba2657876601d8d8753be"],["/bridge-mode/index.html","0ca4faba48d39abb075146f7b8e9bd99"],["/builder/index.html","63779b30414744e7b60c9025fcab68f4"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","10a5efe957ae9e609db331733222a0d8"],["/cache/index.html","cedebba4b6f9ee783549d33d7c55f622"],["/categories/C/index.html","09d34cd3d45739ad445d3e5d31e210c3"],["/categories/SpringMVC/index.html","0d1341c2035906d0cbb3cc11c7b74019"],["/categories/categories.html","c484ae389cc350cc8005449da0426c16"],["/categories/index.html","7f532750a44e2763d5b0158e74aabd26"],["/categories/linux/index.html","f59d8288c0324cbe5d39453878e3f1c4"],["/categories/分布式/index.html","048b9f43ec4e69102052df1fb7687157"],["/categories/分布式/page/2/index.html","0feccde79c16f77f8b2144d3ea0fd748"],["/categories/设计模式/index.html","2d2e4f7a43a34da1a8f54663b6f96beb"],["/categories/设计模式/page/2/index.html","5f8f762735af518dba6599c62c6551f0"],["/categories/高数/index.html","f954b838cf25c290777adc746f8b7468"],["/chain-of-responsibility-model/index.html","85cf6232cb47858eed432b9e160f8531"],["/charity/index.html","9911b6c52ae4209b832e19dffa2d7293"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","ce82e891c274bd0270933971f4c87d41"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","e1967053b23389b1cb8a8298690baaec"],["/combination-mode/index.html","c24daea42e763f16ea4962314258f0e3"],["/command-mode/index.html","53d1227238699f0750df62ea760a496e"],["/common-commands-of-unix/index.html","6816f1eb8222782313287c2649735d50"],["/computer-network/index.html","0999148635e290aa1debcbf599b60797"],["/concurrency-principle/index.html","887308d28b2d7a60c50ec2ada9820fa9"],["/continuous/index.html","4327d3f51b6fd366dd9419e92de2d8a4"],["/contract/index.html","af9d00d01bf5c45874bb6ed952b07e5c"],["/create/index.html","6cc9bb5892d84d5c1994357789ceab2a"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","4e93096cc5ba7a5874b89a58b6c70ff0"],["/data-structures-and-algorithms/index.html","69180e73fe7245e6d2a74d3c2a7c960e"],["/deb/index.html","3dd5ee624b1e5c1dc9839d5d698d7122"],["/decorator-mode/index.html","45afc093c4182b21844f8a14fcc6489b"],["/definite-integral/index.html","3f31c334e22e4fb88987494999cb6f39"],["/dependence-reversal-principle/index.html","ee0d0a1a483014784a82b4bef64689f5"],["/derivative/index.html","4df3600e629825cf5cb8713ed0a7e256"],["/design-patterns/index.html","8ada3fa9560976720f3c761ef3bc2de2"],["/dic-algorithm/index.html","60956165be517897886e733e7adad255"],["/differential-equation/index.html","5aed96827b669ebeafb8d14e994f5a39"],["/differential/index.html","17606448c7a1289ca637814261bcefd5"],["/dimits-law/index.html","ae63431b5571502a879ec9ce97af2cc3"],["/disjoint-set-union-find-technique-appreciation/img.png","3b180015f1019888938991178f4c1e06"],["/disjoint-set-union-find-technique-appreciation/img_1.png","e3611c71e7cb8a0cb4fa5e35c5f9bd36"],["/disjoint-set-union-find-technique-appreciation/img_2.png","d4bf7b42194d5378a43bd049b7b91da5"],["/disjoint-set-union-find-technique-appreciation/img_3.png","84469c7e0460e93e0590b56729ce340c"],["/disjoint-set-union-find-technique-appreciation/img_4.png","96308c2a7256c532ca38489ca81c1bac"],["/disjoint-set-union-find-technique-appreciation/index.html","99f419e0ad6be917609dbc5732243270"],["/distributed-lock/index.html","b8a7a1ff0aa9a0601bb32f1dfa7b52f5"],["/docker-virtualized-container/index.html","30d6c9fd7aac3b97e94fd03f3019d1c7"],["/double-integral/index.html","745e81b4e87271a36125eeaf0aa3704c"],["/dp-array/index.html","2ca88189d21857f1a58c2ba15700d76c"],["/dynamic-array/index.html","9636693dddb9b0d66647fdf8fa16450c"],["/dynamic-programming/index.html","4386f0ff08b091d74b5f9890df6cd624"],["/edgeset-array/index.html","a34bf01161745bf5be59c1f6baff75be"],["/encoding-algorithm/index.html","83cc9c96b18c32470b9a03b2427e9141"],["/eureka-service-registration-and-discovery/index.html","3bcaabbc62616925bcfc7f93288e1cc6"],["/extreme-value-and-maximum-value/index.html","94193e27a0b31f8275ee5918a91a787c"],["/factory-design-pattern/index.html","ce191ce14f9a3169a3a9051a8074b47b"],["/file-input-and-output/index.html","1191a79afab8f1c07d254601e4dfd992"],["/flyweight-model/index.html","703039bfd1a0bcd85937db7f3a3aa6f4"],["/friends/index.html","8bc2b4aa87d78979c030fb387c48e1c4"],["/function-graphing/index.html","4d2ed2e80c8436167af1d3dd2465e5fe"],["/gateway-service-current-limit/index.html","c9d6ee0790d5f1d8bcdb7953b62ad45f"],["/gc/index.html","c7cb80524f51d3ee7f247bd352e8a092"],["/generalized-integral/index.html","9f043ea3b11645db4a2ef7c822df2b8c"],["/google8102e2f35ce9e391.html","513910740304730905d2d960488bf088"],["/gulp-compresses-static-resources/index.html","e4d96edd3ac1b99a60a813a2dcbf4612"],["/hash-algorithm/index.html","ed6fb612e6ec77959acc540ddf382b77"],["/head-first-JVM(1)/index.html","2f503d77bc99765de0fe7d4480abb86c"],["/head-first-JVM(2)/index.html","281f7a3600601b92d69496261392c3f6"],["/head-first-JVM(3)/index.html","834c36a2e9c47d51f0dfa0e432027ebc"],["/head-first-JVM(4)/index.html","ef488f8ac3065c183a716930edff7031"],["/head-first-SpringSecurity/index.html","195b24036f8c1c8d1f5e6a547b919059"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","ab1c762acb0b9e7f5175f3069fbd0248"],["/heap-sort/index.html","0c45ae817fdcb020f71135f69eeb94e2"],["/http/index.html","2a9d0dbf8495caa17d7e9a33d327fc06"],["/huisu-algorithm/index.html","fbc761f5b55474b7d288480ec6a2998f"],["/indefinite-integral/index.html","fb7c27171d19ce03237e4d9de11dba0d"],["/index.html","92a90e43d114d3cb321c712805920191"],["/infinitesimal-and-infinite/index.html","92f693ee810a1a73485a2b1fec71c08c"],["/interface-isolation-principle/index.html","4e9cc00df36ec1c350bcc6412fee9804"],["/interface-test/index.html","77b755633c0c855a7c6531c267c8979d"],["/intermediary-model/index.html","dba1e6f5e68770688915af8c4f068a0b"],["/interpolation-search-algorithm/index.html","a4e587da17b0933563af3764b76f8108"],["/interpreter-mode/index.html","9b709c0f66c8658f8cb8ec5048ca0261"],["/introduction-to-computer-network/index.html","96d3be65dd453e7ce2b7eee8736971ba"],["/introduction-to-operating-system/index.html","57575c6758d0f6a76e7e59ab2b3d5380"],["/inversion-of-control/index.html","fc7ef226b839ab2ccdc1d8a3152f7733"],["/io/index.html","f71f4b02545817045609970dd9985819"],["/iterator-mode/index.html","54dcc8ff3ea39f3c6f7fe0c005b64011"],["/j2ee/index.html","b7796c7a6c0c90abbc09936634d78d8c"],["/j2se/index.html","8c8abd1003a351c7a7ac61b3b8598a56"],["/java.lang.String/index.html","be0469cc6f07e930397cb57fd209749c"],["/jdbc/index.html","028f941091712f43aa64bacebf5d7d1b"],["/jdk/index.html","a0a633d891d11c04abbf51c40eaf7192"],["/jmm-memory-model/index.html","a315167fec45dad7556884c0e5c5e7cf"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","1aaf4576d1ef6c95fe057025cf31c36a"],["/jvm-method-inline/index.html","33020c609b7a96c9ea96b401c227186f"],["/jvm-tuning-practice/index.html","8c0cf4b6d46dec3d5f78d04129a24bfe"],["/jvm/index.html","ba4f592a3d4e0b37e227eb2e88c436a3"],["/law-of-robida/index.html","db19ef8ac3e6ee23c366c73c4526da8c"],["/limit/index.html","3e70aa68d5ce7e0396452d0440000735"],["/linear-search-algorithm/index.html","5af9b0bc2ed510e8a17b6d3842616d7c"],["/linked-forward-star/index.html","5929b60ca5edce0ccaf84539ebf15de7"],["/linked-list/index.html","17009e502264a6be910d9cec3321e2cd"],["/linux/index.html","4d88ec6e8016a7fed7ae1935a9c3e4a3"],["/liskov-substitution-principle/index.html","eb9407ee3ccefd09eff37d20d8c79aa1"],["/lock/index.html","4cb89f30631e9999439433d85a5a3a61"],["/lru-cache/index.html","1636efe3244323ac34976c856a427983"],["/maogai/index.html","8a4ea51e5fea5e9a7e2709b51c9a6f58"],["/memo-mode/index.html","3fd5ea2e92268e84031c0e8a56b2693a"],["/monotonicity-and-convexity-of-functions/index.html","cb6c6bddc307f0823e35f9d3cf67cd26"],["/more/index.html","5c4ab2b2aa8e6f940a546d35b55eadb4"],["/multi-function/index.html","fb21e0cca8941b9562f75a322e254193"],["/multithreading/index.html","0c476f710bfd41892959a93c32b09ee1"],["/mvc/index.html","f9989b8bbe8bab06cf7e2608789d032e"],["/mybatis-cache/index.html","d97ca081551afc7c9c4937036775c4da"],["/mybatis/index.html","71c87227c1a0f71510dc8363fef81b62"],["/mysql-index-wrong/index.html","0ab0d2fb1f00dc67eaf46bec053ed4cf"],["/mysql-struct/index.html","d527e942bbbfa5c9c31ff13a2a19a2fc"],["/mysql/index.html","7117f1180099d9575cf3dd9f2bf5d88c"],["/nacos-service-registration-and-configuration-center/index.html","1a329ea29c1977ec05deb8647f8d0f87"],["/notes/index.html","5d52d06b91a54b19bbe7199d133ab3ad"],["/null/index.html","8826e06241938c01ab7933ef6d096dae"],["/objectoriented/index.html","30d028ba11e16fe7e7d727e9297a404f"],["/observer-mode/index.html","cc4801dbbdb3c410f80a0ca202115295"],["/off-heap/index.html","32553233731f9ad2753426deed40e511"],["/operating-system/index.html","55514478d778056475b4d1f4f23a77cd"],["/page/10/index.html","caabd4ab8412b073bbdf0e2c17797f3b"],["/page/11/index.html","b8c61c5d7065377a54d85d3ac5434154"],["/page/12/index.html","1b43ae1249f2674e80d5738f70171d54"],["/page/13/index.html","585137dd10947c0b72c6e1b9e4f6a9cd"],["/page/14/index.html","c0fc905acf915a75164f825f76befc1b"],["/page/15/index.html","8de92a1ecdf7bc2e50933e901fe7dd7a"],["/page/16/index.html","94b2daead9aebbf0a1ffe8510d8fc374"],["/page/17/index.html","63660f0732affcb3856f778336dec03b"],["/page/18/index.html","0438021e0a23b63a20fa14b291b7e2f3"],["/page/19/index.html","9f855f76208a83e4bb850e7c006b6baa"],["/page/2/index.html","a47b2df169417060a7d679ef9f3a41b6"],["/page/20/index.html","89c14d2b0502b91a0fd2ebcc4cea928a"],["/page/21/index.html","d955ff4f5dc3296af601549f6e8e8d68"],["/page/22/index.html","9249a0fc263d1f814bf59914b66288eb"],["/page/23/index.html","d643e3e72c4a13c6cdc6940217fb3fed"],["/page/24/index.html","63edb08768f334254335f8ac963be9fe"],["/page/25/index.html","3b8e9190868afcc4be02eed9f1b03fc8"],["/page/3/index.html","976ec2807b1d8a08a668611e2469a849"],["/page/4/index.html","a184e2c2ce5c37abbd759710ab2ac32d"],["/page/5/index.html","e25080e94db0a2dbc57ec020a864e61e"],["/page/6/index.html","7c560ae5e2c6431d60c7f66f98d9ac59"],["/page/7/index.html","f0a0216550b3b6d3b31d9d4ab81b4719"],["/page/8/index.html","e56ce593c51414051b1e3600ed54e0fd"],["/page/9/index.html","f829fd00150cb72350cc49f38b64336b"],["/palindrome/index.html","5e0fbef1c4dd7e22457027877a85dfba"],["/partial-derivative/index.html","5cbbf4b1fd7cb6898f91c0521bba318b"],["/pass-by-value/index.html","13f00413b8490019e8851d55b6ddc442"],["/pictrue-bed/index.html","79ef737cc24e4c32d345e1bd692def5e"],["/principle-of-opening-and-closing/index.html","43f6f6762461c5b11df7869218b8c566"],["/principles-of-computer-organization/index.html","6f07d0515174dfe52f5a8b007bb81b49"],["/program-test/index.html","7aea05f9a0f8a9b48c3c0165e12cd580"],["/prototype/index.html","63f297a02eb12481c15e58387ef56430"],["/queue/index.html","caf5b8a0aa4281cfbf4b13c84459efa1"],["/random-weight-distribution/index.html","0bfc81a6129bdcf13318fb65f15a6ca8"],["/realize-modular-programming-with-functions/index.html","c20ca86a0eeeef901ba205d99707cc9e"],["/redis/index.html","258b5680ea8560570c3f9eafb556695c"],["/reflection/index.html","9eb6c9ec3a037e01241eb5e30b90e710"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","843d1e391bf8c88d4e730f8168bfdb37"],["/ribbon-load-balancing-service-call-degradation/index.html","ead84e6a511be02e028cf2af0529cb82"],["/round-dp-algorithm/index.html","d2babd47eddf499bbc83d6685bb427c7"],["/seata-handles-distributed-transactions/index.html","1a6f00b4d66a72fd2ef712e7d92f586c"],["/select-structure-programming/index.html","362f4b75c856a4306358b169630890e6"],["/sentinel-realizes-fusing-and-current-limiting/index.html","63d4acd2c795bc364c094edfe65c9ade"],["/sequential-programming/index.html","f1b4bb278c82e8823254c107e9feebb0"],["/series/index.html","18da06c11aef023c061aef0424b7f6b5"],["/service-worker.js","4f475edb70da3de37588711127e73213"],["/single-point-login/index.html","17c30dbd0adda0ddd8df6d2e1ae7d236"],["/single-responsibility-principle/index.html","1498ab7f23f9df4553eb37e8be48e6ef"],["/singleton-mode/index.html","1e1290088f907f43f6c5c766341c7d8c"],["/slidingWindow/index.html","e8943621296abdeeaf4a3d81a686d02c"],["/snowflake-distributed-id-algorithm/index.html","b01a5713e94707d6173818c362c64597"],["/sparsearray/index.html","47701548fad99a7cb652bafb8be0957e"],["/spring-and-jwt/index.html","7c2cf1d65f9e482e107aa2028a450b42"],["/spring-architecture/index.html","1dde0c6699a8160aeff7e56693320a2c"],["/spring-relate/index.html","ffbf9c49464bb2554ef6dcb3e7425b11"],["/spring-springmvc-mybatis-integration/index.html","516188c742dccc880205f891522cb3a2"],["/spring/index.html","1a1b16400c140a3745d144c0365197b9"],["/springcloud-alibaba/index.html","9c5c28829eb8ec45969a22b25019590f"],["/springcloud-bus-message/index.html","565f3ef03b1448597a697bcb0be16386"],["/springcloud-config-distributed-configuration-center/index.html","1988552b6c7f01b3d1883e7aa3acd1a2"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","b4aa4ba918fefe8b87781d0b5e5a883c"],["/springcloud-stream-message-driver/index.html","3b58b3528801fc812fcff10feddc5ff8"],["/springcloud/index.html","c686a3c1601334aaae425875c7849a74"],["/springmvc-environment-construction/index.html","a487830d0351ebf461f991d460374310"],["/springmvc-work-stream/index.html","14cc40c25c8587ba52be896843b167d1"],["/sql-injection-attacks/index.html","9b6bd20b005a7a8fe5b8f2ff979ac713"],["/stack-simulation-iteration/index.html","d83056d3cfbd586b2114b5bebb34e589"],["/stack/index.html","e1c736eb0c4316c82a5e2ed75f8da240"],["/state-mode/index.html","db1a520bd2c8f0a737eb5d31ade7b2ec"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","b206569b4644eff9bc5e60317af10ebc"],["/strategy-mode/index.html","f3c086f5d0dabb7a51efc49a44fc1582"],["/sw-register.js","f8b76e1c9cd61c303ee898ae8df9dc93"],["/synthetic-reuse-principle/index.html","83ba4603d046e8efcd7bcf375ac96500"],["/tags/C/index.html","ad00364e95784217f4744112a3e1930f"],["/tags/C/page/2/index.html","f64f4d1788ed215c69bed383445685ff"],["/tags/Concurrency/index.html","84084d76db5d606b1c1730132aab3580"],["/tags/DesignPatterns/index.html","9b3bcc2c68cd73dd9342bb6383ecbf1a"],["/tags/DesignPatterns/page/2/index.html","c9d14ad17386c52443b2cab0278d35d9"],["/tags/DesignPatterns/page/3/index.html","51ce408b8781c56b9243fe3ca63bc00c"],["/tags/DistributedMicroservices/index.html","71bfd6180c38c6268c000ff30f425a82"],["/tags/DistributedMicroservices/page/2/index.html","ca413f7754f50b80d2b222a5db7754d1"],["/tags/Interview/index.html","1b164666a913043d0b61b46967368591"],["/tags/Interview/page/2/index.html","850035d5dac180c21d42b69ec6f417a3"],["/tags/JVM/index.html","b40076207fe9d7ed5695c01cca910980"],["/tags/Operating-Systems/index.html","0a068dac25dc4bc69f6f079af150e18a"],["/tags/about/index.html","fc65480eda8c85a7100ba0c934b26eda"],["/tags/ad/index.html","66c43f4b71038cc580cf88b12220dff9"],["/tags/algorithm/index.html","7b95930c859912bcf97b42dcf6f1855a"],["/tags/algorithm/page/2/index.html","270bba19fae7e184c176383751033aab"],["/tags/algorithm/page/3/index.html","793de28df02188de5e4cfa4fe21e9a5e"],["/tags/algorithm/page/4/index.html","3252640d585782bd855f40bb61f78ce7"],["/tags/algorithm/page/5/index.html","b914a89e592fd2b027dac910f0db565f"],["/tags/bug/index.html","d6c3b015a48a62061915fe10a32c8a15"],["/tags/computer/index.html","208f959d0cd5dd6b6e1c92bbaddaf405"],["/tags/data-structure/index.html","c4f5b7577f13d385f7d8290581b7e0b6"],["/tags/docker/index.html","6947a833d0faeb3399078ec1045e9fae"],["/tags/famework/index.html","3071680ac7ac6c83c45634be691126c3"],["/tags/frame/index.html","f2fe23fc9cd98f012e211d3c5319aef4"],["/tags/frame/page/2/index.html","3a0427d6b6d95acd8b370cec85c9415d"],["/tags/front/index.html","169af800339903e066f47d28c9ac7171"],["/tags/github/index.html","8885c8bb7498173bf318ac72a8aefb53"],["/tags/index.html","91fa43751f1681b75f11ffeabaa57244"],["/tags/interview/index.html","fc3706c1d4e7c648a934397d03652238"],["/tags/io/index.html","9b9bcde061f8b0b9b11b88db85b86124"],["/tags/java/index.html","27bd9aaf764dec8d4701d45ee48d9b6f"],["/tags/jdk/index.html","befd8d3f74169fd7c5577ade2970cffc"],["/tags/jvm/index.html","e355722ca5e4608221f4c148075ae7aa"],["/tags/jvm/page/2/index.html","6cfe4894e9ed9790bb5168f552c3095e"],["/tags/linux/index.html","189bc9d8f9c3cf83254cd51d76820247"],["/tags/maintain/index.html","6afeb5ae4019b9bc34e99b50a5bdbe5e"],["/tags/maogai/index.html","60cb1b7d5d285611b1fa7cd8dcf585e4"],["/tags/math/index.html","3121f2a2a90889513fb599bf976f8c5d"],["/tags/math/page/2/index.html","8d8bd1c6bc83546c0a801fdc981b8e33"],["/tags/middleware/index.html","cf41fe4a62b80b28d1429fde6ece4723"],["/tags/mysql/index.html","890c0adee0d01b65cf1501b7f82a9c9e"],["/tags/network/index.html","c9c22141eb9508e49d4c5ba307d50848"],["/tags/network/page/2/index.html","3c95d5a4c1a69d07a98c1177c42eb591"],["/tags/project/index.html","4edf62298cc30ef9df29f4cdfdf9c6b3"],["/tags/project/page/2/index.html","d4261c70df7aebf28b6c49f937544ed2"],["/tags/security/index.html","05b1acc23dc45711f9e1e61a5a9cf96a"],["/tags/sql/index.html","28520b15e92397e3450edda2cbc790a9"],["/tags/test/index.html","e141c3ed521878cefacc45ab793e26df"],["/tags/think/index.html","80d762dc733e409820a6151ecc0038c3"],["/tcpip/index.html","0693805e1bac3d5a663c79162c6a3dc5"],["/template-method/index.html","2a7eef3a183831d9a038aeaed941e639"],["/test-case/index.html","6370ef2997f7eabf3197a8c16d1b56fb"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","5ad24f9e3415066ad44f1beed7607eb3"],["/thread/index.html","470cc9fe16613923aa73011a94f86930"],["/tj-horse-racing/index.html","7b3f33cd6cec3a32b215cfcbd0613e0c"],["/topoSorting/index.html","c3db9ee062b761cac254d371aafd672d"],["/traffic-monetizationaccess-to-google-adsense/index.html","c25a035f219257d8b8aca1361aa4e1cc"],["/txCharity/index.html","19a4388cf1c088a9685ee73924d23f84"],["/ubuntu-set-ip/index.html","a5381a734c381183f66c231c5add7a18"],["/undefined/index.html","88665699d55975038d22641848175b65"],["/use-arrays-to-process-batch-data/index.html","4ca80a8dcd8fd33e7eae4341f5a21705"],["/use-of-springmvcmodelattribute/index.html","18291c20f494397ec65579f0a78bd1d8"],["/users-create-data-types-themselves/index.html","2ec04aa939cc1e3d7e5e3c196f859bc1"],["/visitor-mode/index.html","e3ad558f8c3232d6c590da9bc14bebcf"],["/what-is-milk-and-why-is-group-wise/index.html","73755fcb89ba56c660a74bac56df64d5"],["/wiki/index.html","b2edf64f54cf67736349230a5875f7b0"],["/wiki/tags/知识库/index.html","be87ca6f759c03114cbf0389c3467363"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","e875365cced9e15db37598cb7ad1e439"],["/xss-crosssite-scripting-attack/index.html","f580c6e0d6c4b5ac2dcc4b9ec7d302cd"]];
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
