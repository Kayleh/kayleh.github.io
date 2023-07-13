/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","2f7f820beec1bea1d004df29957a9e3d"],["/404.html","21a47e4ad2298b4638b5b98bcd9a6259"],["/404/index.html","56f4bbafaa68ac33819478380ee2876b"],["/7-sorting-algorithms/index.html","b52b1064b790ed83c8407ec6cf5c5672"],["/AIO-blocking-model/index.html","2f9cce44b120728662d8b519bffd310f"],["/About-Snowflake-and-Consumption-Degradation/index.html","d9f12723df58467e2fe74e9f0f523d0a"],["/BIO-blocking-model/index.html","aa6d1e09267943c522bfe7af8cd40bac"],["/Bloom-Filter/index.html","f00de91cc1ac7edb7472a40025e053cd"],["/Boyer–Moore-majority/index.html","499aba50d87100c85e200340664e194f"],["/C-algorithm/index.html","8914d8a35e71621f06060ddd65c97e1c"],["/C-programming/index.html","d2ecbcae9f4d796f7e992a338e390d7a"],["/CAS-&-AQS/index.html","fcaef32ee9edc526a9cfaf8775c69a74"],["/Comparator/index.html","b2420bcdbf3c230be431908cd12662f3"],["/Differential-array/index.html","e25c8be72785cb891dea727900e49eae"],["/Download/index.html","d31df76fe8766d21275ac73f2c27bd7c"],["/Front-end-security/index.html","32bcf7f0e087de54eb29710603a9db31"],["/Good-use-of-pointers/index.html","b719dab0cfd26ec409373f7c5e3c3009"],["/Graph-degree/index.html","76ff0983006eb1efc28f2c247d8b38cd"],["/Greedy-Algorithm/index.html","7befb02b5619d638f477a286fa378cc5"],["/Head-First-Map/index.html","55ac8d9f0af16f6c561e0efbde8a2dfb"],["/Head-First-Netty/index.html","2ca41afc9dd5e5f3391ac4877bc24945"],["/Head-First-Nginx/index.html","dfe370286b12f2e82ccc7e1bc759d631"],["/Head-first-Spring/index.html","e29262218cda3976087f65a8eb8a6c5e"],["/IO-model/index.html","986e2dfd38698d41d3c93d3c898e8545"],["/IO/index.html","9f669bfaefc11290b8dfa552878c2f11"],["/Implement-a-lock-based-on-ReentrantLock/index.html","4c324f23f128bd93a4e0e215804f3978"],["/Improve-Robustness-(1)/index.html","c5dbd12f7ffe03f598c4e063b3a33329"],["/Improve-Robustness-(2)/index.html","c031a4235140306f7cdd066b15c12965"],["/Integer/index.html","69513b7d71fc7e69cf0054a3b136422e"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","5bb8176bacef13eb9d10750aeba6ce8a"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","13f4b80511706f7b6e5422b430082c12"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","99b7b71a8870ffd7952fbfdb28fe8324"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","0793f60a9969c5c70b2a513f3627e97c"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","56f091aa44258a85e6181d3b7577a14b"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","dd10bd93b04cb1b1e660ba1f00d89996"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","1f2aadb7e42215cc8321f9b2b365ec00"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","03f097c664a9002b9d89e4298c699a9b"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","425554e754acc80753ebe7e95b5f1489"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","86b0fa3ba31041545e09aee74d73b08c"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","f64c34e4a367fd4f7cb6c2893b39e648"],["/Java-network-programming/index.html","cbd521d4e737e78192be00fa3bbb7a7b"],["/Large-number-operations/index.html","cb7d43886893f4713e7c3ee61c9cba02"],["/MYSQL-MVCC-&-LOCK/index.html","29c287d7a601390a0bd6506fb9ed00dc"],["/MYSQL-uuid-and-page-splitting/index.html","96198386670f2959e7cdfd0a63637e26"],["/Minimum-Spanning-Tree/index.html","a4ec5c8ba172b4689239d7958d71dfcf"],["/NIO-blocking-model/index.html","32a3c20444cfe835474ad6585aa21c67"],["/Nacos：Configure-MySQL-data-source/index.html","6d17ac7ea4669e3d6ca05405aea76201"],["/Native-method/index.html","2586417ed5c232fd6576dce66d417502"],["/PriorityQueue/index.html","342369b9830450dd8e6f136be40dfd31"],["/Proxy/index.html","82ab0d68e2ce0607db37437a7d65fbc8"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","f9b69cae03a08c05591126bcf166cf07"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","6c58a8b652504be67945cc822d217978"],["/Reservoir-Sampling·/index.html","c6768a2181a5edde3f4800c0cca35f24"],["/SQL-injection-vulnerability/index.html","95d893f5d748c096878a7da515903716"],["/Sandbox-security-mechanism/index.html","873acc851be42e81bad53f6117e48dc7"],["/Spring-Cyclic-Ependencies/index.html","ce0d166b1a52644b7ed8d6a6c78049e6"],["/SpringBoot-startup-process/index.html","afcaed7e2aadbc50645af8814e5f2c27"],["/SpringSecurity/index.html","e51787afc96667c11f5a5431d5a1bab7"],["/Thread_Pool/index.html","c22c0a31a379831b4eb9c286775dc4b7"],["/Transaction-isolation-level/index.html","4a9c71b5842716e3c5c69fd6974039f2"],["/Unitest-framework/index.html","8578a1c7c7b56fa2c5ce0c4069146ddb"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","2d5740a7ac8f94dce48f1c6830d75c03"],["/about/index.html","39fbda8fef798634cfd8527ef7c4a744"],["/adapter-mode/index.html","9803f7380e8895209bf10f4ed871339f"],["/adjacency-matrix/index.html","08bfcd5a053c37babee49059355823b4"],["/adjacency-table/index.html","d484d3f95ba63545a9be7bd1615b760e"],["/agency-model/index.html","458296c0dcf55c71934fcca3a515df42"],["/app-test/index.html","53e8976ff71b20986a7eb3b42a6e5cd6"],["/appearance-mode/index.html","6f6c841842ff3338fc6a517a92f1d12f"],["/archives/2019/01/index.html","1e72c9acb5e5e018d72031d3e7f037f0"],["/archives/2019/07/index.html","19c352889e2c3f828de6274880ed7704"],["/archives/2019/10/index.html","ad3c0865dedf769e09d4337ca39ccdbd"],["/archives/2019/12/index.html","ba2a74a263b41b2ff848f7ef9b98fd0a"],["/archives/2019/index.html","ec57d982d49c704fa5832dc68e9d2b00"],["/archives/2020/04/index.html","13a1af7836a9765e1e8385be3fff67f3"],["/archives/2020/05/index.html","b2378f3b012be289cdf8190003474668"],["/archives/2020/05/page/2/index.html","1c2296aeb6340b689c0d5bfb94255dcd"],["/archives/2020/06/index.html","f7375bff425e3a8a2f59c34245e4cd96"],["/archives/2020/06/page/2/index.html","73f9d520de204d998154e93d078bf0d9"],["/archives/2020/06/page/3/index.html","241a8f8e05f3630ab55099214836da22"],["/archives/2020/06/page/4/index.html","c02eab95980278b575dd12fa3ba8200e"],["/archives/2020/07/index.html","bb361a3e56e3c86a09589a9f6bb8dbf5"],["/archives/2020/07/page/2/index.html","7f7b942c1027c7b18ce7a21a407e4326"],["/archives/2020/07/page/3/index.html","397e5078294e1bb7500f53e2bd1733be"],["/archives/2020/08/index.html","27df9754ee8eb982643504614557374b"],["/archives/2020/08/page/2/index.html","efc2166186c0b14878549f6fe8aa1662"],["/archives/2020/09/index.html","6b1d35778e8eb7177abc96eeec9696e8"],["/archives/2020/09/page/2/index.html","c8ae98c3d348c3d58e5f6e13b2e8af90"],["/archives/2020/10/index.html","2b3779ea3b3b166c76cf8dd1499febaa"],["/archives/2020/10/page/2/index.html","d728f57a246edf7934700c80b3bf10a2"],["/archives/2020/11/index.html","3822bdd93c46d797d56bc41039dde793"],["/archives/2020/11/page/2/index.html","5368cc26aca0c483d3cfe200171002a7"],["/archives/2020/12/index.html","16081de65b5406c26d852ab1fe48a844"],["/archives/2020/12/page/2/index.html","5d079441958eb4d65bc7df63a317cea7"],["/archives/2020/index.html","8bc731715bcbcf53bb1fc5cb499b28ad"],["/archives/2020/page/10/index.html","bc94746f6a4678920dd00c6f3d8ca68f"],["/archives/2020/page/11/index.html","eda3ead3e253daf882e926fe78c43bb0"],["/archives/2020/page/12/index.html","ffe061c3a8415a543edb71d3de2709b2"],["/archives/2020/page/13/index.html","1e1bb636009a2c6a9ffb549c13eb1027"],["/archives/2020/page/14/index.html","d68aed3e08d292e1904f6f872b1f8e05"],["/archives/2020/page/15/index.html","28e3270c943b6235630cb6f06bfbb264"],["/archives/2020/page/16/index.html","607f4acd89a66e4b8a431eeb0b24c7b7"],["/archives/2020/page/2/index.html","7a67bfc7a591591b977e9862f8122f0a"],["/archives/2020/page/3/index.html","c6883bf94b7505a9ee35f53928de84f5"],["/archives/2020/page/4/index.html","4c43fed112261a351bd5a3562f1780c0"],["/archives/2020/page/5/index.html","8111e112be32ddf96c7b30091acc6f17"],["/archives/2020/page/6/index.html","c44acbc0a585397e5157f98720e03040"],["/archives/2020/page/7/index.html","05b12537957159d26632d815f6050c6b"],["/archives/2020/page/8/index.html","dc460f0d8adedf2ebe9efd4c5c625fef"],["/archives/2020/page/9/index.html","3287d8e09969b48d1903648b8d9e2ea8"],["/archives/2021/01/index.html","0090094494efeeb58ffd66c455f579ce"],["/archives/2021/02/index.html","fd820292a161391892ab6b099b3a8043"],["/archives/2021/03/index.html","f4348d638e54f93e6bf0966deeac2606"],["/archives/2021/04/index.html","4c227330a0d70a5c15855e28603b860f"],["/archives/2021/04/page/2/index.html","e87461daf3f5c9ec3507b25b3cfaf057"],["/archives/2021/05/index.html","4444d7428289af89d9bc76c90876bf7d"],["/archives/2021/06/index.html","df966b5770c3c7479da32b384b9b5669"],["/archives/2021/07/index.html","ae30ba7a1d356020cdbe2eb7fc28029f"],["/archives/2021/08/index.html","6083cb91fb21d3c5bd6b9cd6b4a7d38f"],["/archives/2021/09/index.html","854e894815f5372bf699dfb7c516e537"],["/archives/2021/10/index.html","19b0678ab9368ab023eeb9fae178ef07"],["/archives/2021/11/index.html","eaa56abf9834902bb1afb9dbbed5a52f"],["/archives/2021/12/index.html","cb3e6160e9b3841fc5b47de83909e11a"],["/archives/2021/index.html","6439f26c84cf0fcd41d2aeb6b9903381"],["/archives/2021/page/2/index.html","c4409a7e50e0a8421386e7605ea8864f"],["/archives/2021/page/3/index.html","9624f4a57bfe912df63c3fc0f50334be"],["/archives/2021/page/4/index.html","7e81437d82b84f769c6aa575d8408b19"],["/archives/2021/page/5/index.html","311e2f0e212df0774bcfcd9333cd9439"],["/archives/2021/page/6/index.html","e72b9260ebf68d26a0b0da4744db9d73"],["/archives/2022/01/index.html","67211d3882be9880ef007e34edf725fe"],["/archives/2022/02/index.html","0a174005bb3dd702d10103375da88c25"],["/archives/2022/03/index.html","cc8b5840f5af5df0567428e2648caeba"],["/archives/2022/04/index.html","4a41627753d946462c5e1d94f509eb55"],["/archives/2022/05/index.html","0278dd1c2970583eb61643f37c7de4d5"],["/archives/2022/08/index.html","85d5ec8309bf5c92e1de678e6b4b454b"],["/archives/2022/10/index.html","2fdb926f9ad0d9f3fe8342d0b897e8fd"],["/archives/2022/11/index.html","4c8e2b24c4a873bb4306c5afab83dd57"],["/archives/2022/index.html","622377df616eb37ee89d3956f0b664d8"],["/archives/2022/page/2/index.html","473ad945e75dcf35402197ffb5595003"],["/archives/2023/04/index.html","6a4d31c92dcdf2426de2c0887c6e3046"],["/archives/2023/06/index.html","12b1c3e15aebcfd5566647a834d849ad"],["/archives/2023/index.html","9a8c30e541985547d9770f411ee3916c"],["/archives/index.html","34cda22625894807bf5ca5902ce672dd"],["/archives/page/10/index.html","52294df0f52109ba68904d508b6ee812"],["/archives/page/11/index.html","ee333eec5c0ae12f6b4e52ed0ce3e543"],["/archives/page/12/index.html","8aef5486c6bd4d983b1f5974df26c767"],["/archives/page/13/index.html","f0d1f1eb814ced758016c55bc327f178"],["/archives/page/14/index.html","bac54e4af42ae7668882f630e1cb1f91"],["/archives/page/15/index.html","9608f231e1ff9af881042fa0d1e6f3b0"],["/archives/page/16/index.html","9654c701a58c5f6869ef5cdb16c5ae74"],["/archives/page/17/index.html","2afaa7fb4c3dedebd5e488cfe23751cf"],["/archives/page/18/index.html","fa8f2393e4661c8e24ebf81b4b7e6241"],["/archives/page/19/index.html","435f64ee353ae1c95a9537806e0139d2"],["/archives/page/2/index.html","d3d5299a7c2e03f975805b3331923caa"],["/archives/page/20/index.html","f2216787cbf88072ece4ca1506bc88a4"],["/archives/page/21/index.html","a54361f611a4b4466f94f477a8f067b0"],["/archives/page/22/index.html","5a7f3472c2483a4e7a957b846567e8da"],["/archives/page/23/index.html","5f520fc9cae3c46e66dbdf37032ca0ef"],["/archives/page/24/index.html","bb32212a9af2f69b1f17072436557255"],["/archives/page/3/index.html","189b174a611e7fd8a3edaca57290bb23"],["/archives/page/4/index.html","3c1fc4ce226b62dfaf40b6a3b53ca5ee"],["/archives/page/5/index.html","afaaf680b819902d954f52174111715f"],["/archives/page/6/index.html","b7ac8a4cbaee9c61f15ccbd774ff1401"],["/archives/page/7/index.html","319be3cf0773a9619823130bbb93550a"],["/archives/page/8/index.html","e597a50095fd1d438223468c8a3ad309"],["/archives/page/9/index.html","c4d579042a20192be8a7d52a993fc30a"],["/array/index.html","e909dcfd9fca0b3f0dc5b3d90a9bf8ed"],["/automated-test-katalon/index.html","3bfdb923e6e97a94a97224de8d154a00"],["/automated-test-selenium/index.html","34ae2918e2d45aab0d17d731641355df"],["/back-to-table-query/index.html","b5de4ba0d7867610757d6a881e9c9945"],["/binary-search-algorithm/index.html","fdfe51804d54ff4b9e8e13f5cb9ef55e"],["/binary-sort-tree/index.html","19320c89e6493ea0b1ab123dc59346de"],["/bionioaio/index.html","70373616f86f7f66a809d977df40e286"],["/bridge-mode/index.html","91266b6e853fa8e34ce6f41c6c506689"],["/builder/index.html","c7c202c33b38a42490e7d9641ef2fd51"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","302accac9bcee65cb321fdcbad9332ff"],["/cache/index.html","91880295b3211dcb22281d7bfc36fe3f"],["/categories/C/index.html","59bd6ade6427caef4e5f9f188425643b"],["/categories/SpringMVC/index.html","d4597e2172475e9f5eefe330c58d1f67"],["/categories/categories.html","a35995e563e42f7b23fc6f7d5060d982"],["/categories/index.html","0a6cb127b6ee4a190b7e06758cb74976"],["/categories/linux/index.html","4fd3be99bac8cecce70878bd4ed2574c"],["/categories/分布式/index.html","957f02f9ed41bb1fc63f6fbb0f4dffed"],["/categories/分布式/page/2/index.html","16662c3b98dc3bf950f4adf321620ebe"],["/categories/设计模式/index.html","a2a1721d598af75a59cd77b8be9b4154"],["/categories/设计模式/page/2/index.html","b381037afab29f0b7ad390a049d406a7"],["/categories/高数/index.html","6d45ed730b74994dc85b1c54b5313cff"],["/chain-of-responsibility-model/index.html","ce434313c52fff0ab5242d852f0784a5"],["/charity/index.html","65cf9a5e839f1dc5548d2b5c95e1d655"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","4457fe1a077e9c0c44fd0d38e80dfdd0"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","407414eb47cc453838c727fb9d857bce"],["/combination-mode/index.html","b3ffdb2b3220c090e3d6c3aabe606e6c"],["/command-mode/index.html","f107245c13729f786ca592c9674f1bcc"],["/common-commands-of-unix/index.html","5c75706bf10a120335f0f7fd73efb5de"],["/computer-network/index.html","7cf562acec26e529d4293cfacf95b87d"],["/concurrency-principle/index.html","9d731ccc415109d81e784801cf137ae5"],["/continuous/index.html","a59fa814fbea00fad4df53e593234f3d"],["/contract/index.html","51a02a1f50d647289f51d2640dc80ccc"],["/create/index.html","2d82b6954cb894794288b4fb3de8038d"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","d5f0d87c715350940eea27d25e52beee"],["/data-structures-and-algorithms/index.html","8c43db7fac723f39142091e8cb5cd852"],["/deb/index.html","9fd43e0caad3a33050541701d33816b4"],["/decorator-mode/index.html","c1b60a20d6683ef3c86ce5e139461554"],["/definite-integral/index.html","10c713d6963e11270498438e3deb855f"],["/dependence-reversal-principle/index.html","371023942f4c561d25e4a69c24af0d24"],["/derivative/index.html","dc10dc794c5babedf5d2eed4f6e8ea1f"],["/design-patterns/index.html","8cee8b06bfc859610f8529d3f6f7e6e6"],["/dic-algorithm/index.html","e6ee1f5df78d85ee1dc7b0447c9379d4"],["/differential-equation/index.html","85081a7e0197cb185c960cd9196e8508"],["/differential/index.html","22eacef597332a80bbfd0ce88e707868"],["/dimits-law/index.html","d1f605a1e32e80a55cc3c6d3ecbb3d88"],["/distributed-lock/index.html","cc0d1590377d563afa335924d575afdc"],["/docker-virtualized-container/index.html","665423abbbd35394f7224cae1b95c0cc"],["/double-integral/index.html","bc28959c5b8f0329e05480e4bb7cd2a5"],["/dp-array/index.html","fa8d6a792f1db3a13bcaf1ae5fcd963b"],["/dynamic-array/index.html","f9ddfb3d90f1e0073efff0b0704de3bf"],["/dynamic-programming/index.html","5634cfcbac27f5e9cc6cf2d24474aab1"],["/edgeset-array/index.html","5628088b4902d0cb30cd1f8b7c710168"],["/encoding-algorithm/index.html","fd82352424c7ef2d64a99773df541cdc"],["/eureka-service-registration-and-discovery/index.html","e35e5a47c47d5f27633bd7262f46fbce"],["/extreme-value-and-maximum-value/index.html","bafafb07927fa418a5cd5a58dbf6e9c7"],["/factory-design-pattern/index.html","96e285cf3ab94c8ad71ea14e82a5204e"],["/file-input-and-output/index.html","962c183716505869dabfc3be91ead357"],["/flyweight-model/index.html","c4c01de1055c685fed87233f3f7ac3c2"],["/friends/index.html","6fe59ecdb4fac6e614bd1c7a23080881"],["/function-graphing/index.html","7caaaedb56e534a0dc4936daaf445210"],["/gateway-service-current-limit/index.html","0a1c54c237498675a99ac76798806e21"],["/gc/index.html","2f87eadfbd48d2e3b30f874ba79a4a11"],["/generalized-integral/index.html","5f4860cb1af33712704d089d9c32aced"],["/google8102e2f35ce9e391.html","8b12582a3617a092f11fb9f180a05211"],["/gulp-compresses-static-resources/index.html","11cbdbee8e73a15335d7804574cdda59"],["/hash-algorithm/index.html","4fc480faef66dae1b98dcca3649f72e9"],["/head-first-JVM(1)/index.html","382953bf62019c6e0522cae77e7c4b2b"],["/head-first-JVM(2)/index.html","4098fb4bf379f2d62a41022f8d09e184"],["/head-first-JVM(3)/index.html","a7afac9a0e2fc5b2d7af530d09ef5f4e"],["/head-first-JVM(4)/index.html","7429baefd6bf0b487a60fd832136e1c5"],["/head-first-SpringSecurity/index.html","4d34a91898e4f69dc7d012b2c662bfc8"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","dc6c93607a520e2b80404644cab01894"],["/heap-sort/index.html","8443b3052d051d12931681a39e8e9cd4"],["/http/index.html","ae7b9f07f74cd8baa3c43e229918c1ac"],["/huisu-algorithm/index.html","6328f34db39c52b87e3b11b2c35702f7"],["/indefinite-integral/index.html","48a96e973f743cbef5b673985c56ca7e"],["/index.html","28bc83b82cb7a682f21268c01f469f1e"],["/infinitesimal-and-infinite/index.html","ab6ad9279c7954faede0de1378ba5eff"],["/interface-isolation-principle/index.html","504d656d24ccc3fb29a7b0e5a291bc6f"],["/interface-test/index.html","52014d8d6185b8166b8aceebd86b2007"],["/intermediary-model/index.html","6c70b9139419129b9941c87ad520a96e"],["/interpolation-search-algorithm/index.html","93ff90db4c25d4008452cd992a57b277"],["/interpreter-mode/index.html","945f6dcb3769d35d9df6b4142b5e679c"],["/introduction-to-computer-network/index.html","b96023720d7dff3f641fcad0df79f012"],["/introduction-to-operating-system/index.html","06bfd12c0f0004040fbcee3f7af451c4"],["/inversion-of-control/index.html","4ab435d218a537571a4405ca71457f69"],["/io/index.html","b6b74d875151cb856a9becb7181dd4bd"],["/iterator-mode/index.html","2e484b8c92e02bade48958a869bb8768"],["/j2ee/index.html","a73f4d44a58687f2ad63f4210ae69fd1"],["/j2se/index.html","2d09aa887b566d64365245a77aafbe3c"],["/java.lang.String/index.html","ac1f7a3df5fec908416dddbb92dabafc"],["/jdbc/index.html","dfce4faeda4b98c21544485a2069dd0b"],["/jdk/index.html","549c3a8f59de52413b8c060ce91d44ae"],["/jmm-memory-model/index.html","c5d8691620c28aa6aebb7d8a5a679ac9"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","0a4da7e497f5c32aa0f45185f405a779"],["/jvm-method-inline/index.html","c1c79e3c895a06f01582af15375771f7"],["/jvm-tuning-practice/index.html","47127443f98df59f80940a20eb7dcbd0"],["/jvm/index.html","5c52d6f75eaa073009525a71651a872f"],["/law-of-robida/index.html","d6e7961dbfefd3d9cbd5da341e600b5a"],["/limit/index.html","fea90e6d3b162fb7fd3e655d132c966a"],["/linear-search-algorithm/index.html","d73cfec8876ecfe146231559aac5589c"],["/linked-forward-star/index.html","1f2cc254d33f79622f0171afdf8d2f0c"],["/linked-list/index.html","31b33a4402d99fa367f7df85313c4c85"],["/linux/index.html","a308cb23ce6df797af1bc6d5517b8bbe"],["/liskov-substitution-principle/index.html","2837ffe4cf73b070be032335a1630a07"],["/lock/index.html","1f9f0cf25f18b346154e29f563acde97"],["/lru-cache/index.html","eb6ef1f374c8a8ae7624ab695b0e13e1"],["/maogai/index.html","37c478c890b6957db5354deb1773bf32"],["/memo-mode/index.html","697946a0028fe172a42c8c56da05ffe8"],["/monotonicity-and-convexity-of-functions/index.html","06580ae5e3794fdc5b3cee89d3a99f12"],["/multi-function/index.html","e6f651d319150ab12a83dde926f58765"],["/multithreading/index.html","5623698f4e076f59ed874dbd554e4241"],["/mvc/index.html","797eb1a4758ff8ff2ad6e7316d96d0df"],["/mybatis-cache/index.html","65c321a5736f721ad26f5f84bc9512b0"],["/mybatis/index.html","bd8cc222a3617a7f0e3920168375b565"],["/mysql-index-wrong/index.html","5e7d6e66448ddea9b22a65980267ec20"],["/mysql-struct/index.html","95b1875a3b8910cf77e0cddac9fd1f0d"],["/mysql/index.html","1457e9d0e43dcf02ef19c3d932cfef85"],["/nacos-service-registration-and-configuration-center/index.html","3626fb98ab24ef987f9f0a5297c56981"],["/notes/index.html","bdba191d7b6501802a76080d6081f470"],["/null/index.html","470c9d045e8f2531158ef53a40b8efad"],["/objectoriented/index.html","93335de27d80ec37d7140b1778e40cb0"],["/observer-mode/index.html","88fd379a3e26e02e564c46830fe95a88"],["/off-heap/index.html","d81e60826fd5ff22fa9b5eeceef84bd4"],["/operating-system/index.html","da62329fb761d44f9d9da493315e0f84"],["/page/10/index.html","d794a3d5d3a8adcce8055b524e913245"],["/page/11/index.html","98abeb3bfd7768eae9a6877802f29b59"],["/page/12/index.html","2afd55f600cd5796e103169ef99a3e5b"],["/page/13/index.html","44fd34d43873558a9f457e97f8bbf633"],["/page/14/index.html","e4bc560f45cbe54c7b47f6960d5b12d5"],["/page/15/index.html","25c97402351fd232704c31a25c3987cc"],["/page/16/index.html","f7dc730e1a98968ac4d3cbd0a0cdcc9e"],["/page/17/index.html","74fa1896f9940abe67d20a34a7c9d35a"],["/page/18/index.html","c1e909edb2588e87741000308dd1d42a"],["/page/19/index.html","cba7f3ff9abb8e6001cea7d1e0e1062a"],["/page/2/index.html","414d25ba222ea717c83bca19539b9e31"],["/page/20/index.html","b14711ca4479642de33d8b8c1bbe0676"],["/page/21/index.html","50e101c1dc81d6012bd68de6883d7f0e"],["/page/22/index.html","f5f51916da10d7f31b1ae2d00d1cd04c"],["/page/23/index.html","5eb244bb08e1b2c981bff97219f5daea"],["/page/24/index.html","2801867542ce7cb104b0be3d71c90db8"],["/page/3/index.html","9d00e66ffb4189e701ececefb1479835"],["/page/4/index.html","1ef366b6c2fdc18f32de4dfcd010aace"],["/page/5/index.html","d386c06e24a532832c5d4518fe3ef40c"],["/page/6/index.html","62ecc54d5e0e37d7bbac2af1c36a430d"],["/page/7/index.html","8620a82f0fb84ed4989c1d44cc246a4e"],["/page/8/index.html","a4338abfda44cbe3af8d2dbfc800b4d0"],["/page/9/index.html","df4dba754f571fced4d86755d6096a0f"],["/palindrome/index.html","e188c596de3d5512e91815511ca1d345"],["/partial-derivative/index.html","e45a967187f575c49179f5fee03d0a2e"],["/pass-by-value/index.html","66fa9b59d028ac27a0813a145b202d94"],["/pictrue-bed/index.html","1eb1b6edbc065dd4791741a717a7177b"],["/principle-of-opening-and-closing/index.html","97cafb603345a171760a24749f2c531a"],["/principles-of-computer-organization/index.html","603db4dfc72dff46911722188b846d84"],["/program-test/index.html","26674a81d902802334e0f99e646a3779"],["/prototype/index.html","612b14746ebf5386e16155dcc7aba182"],["/queue/index.html","93623346e17f736672e2dee3e3d71392"],["/random-weight-distribution/index.html","d1c5f92288d38b316792836d24f548f2"],["/realize-modular-programming-with-functions/index.html","cc996f5bedd71ff9d82faae6a1f46009"],["/redis/index.html","769815bf32c9eb4bfef8405ac2330b04"],["/reflection/index.html","0a8b29fa25a9056e8ca2d0220b173657"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","b0c2d4b82592c8702f7ef602dcb4b799"],["/ribbon-load-balancing-service-call-degradation/index.html","9574709d48e6a1c0d1474fa15514a6ea"],["/round-dp-algorithm/index.html","5a9e078a67b142d351dc597284113c4d"],["/seata-handles-distributed-transactions/index.html","7acafeeb695f12ec831d49ee074f6fc8"],["/select-structure-programming/index.html","3f14135fcc3b74ef11ddab3adc2a8cc7"],["/sentinel-realizes-fusing-and-current-limiting/index.html","f58471bb00302e967fae0d4342f17528"],["/sequential-programming/index.html","47ac0076188f31d9f42a7d8b4d52f91c"],["/series/index.html","113923b809bf758c8ff9050870b7010c"],["/service-worker.js","ebc84185f9e39ffccc8c9764015d5cf4"],["/single-point-login/index.html","d402764e7becc27a730b83e1e940a5d6"],["/single-responsibility-principle/index.html","ec1d1cb9a22012b4543e81f885f4d532"],["/singleton-mode/index.html","587c06b9e18820430497ac6509e6a4d1"],["/slidingWindow/index.html","2001342b2559ad11b7499b472a17416f"],["/snowflake-distributed-id-algorithm/index.html","6f6fa38635a06ffb77043bede3979bd1"],["/sparsearray/index.html","4585c528572dcca9a90e8a398e65d4a9"],["/spring-and-jwt/index.html","80969d9f31807853e7a2b51c8f68de5a"],["/spring-architecture/index.html","92868f9126e85ed575819d7a0125030a"],["/spring-relate/index.html","1374894162f5ff3e3028521c2a8a7e40"],["/spring-springmvc-mybatis-integration/index.html","0b63d422e601bf85585739c6c1698370"],["/spring/index.html","2d4dac2ea1596fa1007d228634528d11"],["/springcloud-alibaba/index.html","014b60c42b936deb4fef646ce4ed7797"],["/springcloud-bus-message/index.html","776386e371f35fef224ae56edc194103"],["/springcloud-config-distributed-configuration-center/index.html","88e94e04e852a67233bd6b9b1aef0735"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","ebe1bb1c3bba6736879709c84b90442c"],["/springcloud-stream-message-driver/index.html","f10259111bb12ed98ed82e56e8eadc7d"],["/springcloud/index.html","823b3df2bbb53c6d45d8716c366a6034"],["/springmvc-environment-construction/index.html","98a12af4a906d9476d2c943501c76ebb"],["/springmvc-work-stream/index.html","24c261a4816c740b5fdc1b343c833405"],["/sql-injection-attacks/index.html","93bbce330d10f4d31f4175534b66a799"],["/stack-simulation-iteration/index.html","00ac52206047cc81f82ce2ced6d78332"],["/stack/index.html","5e67ae88ccc63b53f1e3e2ceacb0d6dd"],["/state-mode/index.html","605c7857dade2149437d8eb68be4dce9"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","b4e63ae9cf830a9f45604eefa1cde4c6"],["/strategy-mode/index.html","1475338b885cf3839ea0f18bc6f25149"],["/sw-register.js","bfeeb313b70abe3283537d617fe0709c"],["/synthetic-reuse-principle/index.html","925cb2b364c77e1549b76095856f92eb"],["/tags/C/index.html","3b21e86aed110048caa44251492c75f4"],["/tags/C/page/2/index.html","101bc9cd0386070a7b4ccf11521ca1e5"],["/tags/Concurrency/index.html","3c9ecf2423c64f670da542a113589506"],["/tags/DesignPatterns/index.html","0c5e63ada2c2eec8cf11a69fcdf29c1e"],["/tags/DesignPatterns/page/2/index.html","fe207231459526c3234dff3f18c67870"],["/tags/DesignPatterns/page/3/index.html","b96aeec6afea15b68e9b19cc38d3779d"],["/tags/DistributedMicroservices/index.html","84cbd2139d7fae32edd6939debcdf363"],["/tags/DistributedMicroservices/page/2/index.html","33b3c6dd583703fe31a6016b4867c08a"],["/tags/Interview/index.html","a82975f4ddbd2aa24920179ea87d255f"],["/tags/Interview/page/2/index.html","66c93ef10fca7da7cdfa1232abfa39d2"],["/tags/JVM/index.html","e94cfecd47c5a8d3dfc222a5d4566561"],["/tags/Operating-Systems/index.html","a07946ed241348d2fbb10b9afd32a7d3"],["/tags/about/index.html","6e883a48f91ccb34f3675d4809027404"],["/tags/ad/index.html","6a2ff2a225d7c756e1c9f8e08bd18972"],["/tags/algorithm/index.html","69c947379f73128c95d978b8d9ffb485"],["/tags/algorithm/page/2/index.html","97baad0d788cd1e7bc4c869c1a8e7bcc"],["/tags/algorithm/page/3/index.html","6c9d91a940426e18ad3a5f1bdbfc28e6"],["/tags/algorithm/page/4/index.html","749c0add112d4e3323c287434ada2b28"],["/tags/bug/index.html","09587d72ea40bbacc6ae7f834a6aeb8e"],["/tags/computer/index.html","839174bc421c4058abcac376a371c984"],["/tags/data-structure/index.html","79657242e86c94c65af496e335823b8e"],["/tags/docker/index.html","45c0b1e85ab81a6cc11887a98c66c0a5"],["/tags/famework/index.html","1274d3cabfed1cf0b8c88a653ed51d6d"],["/tags/frame/index.html","c223eab3ce61b592835c9f79537d15ad"],["/tags/frame/page/2/index.html","89b74220dee35da4c3bdb6a6db33300a"],["/tags/front/index.html","062c56bb41663f6a40e52e0b7fbc13b7"],["/tags/github/index.html","ff3abda406438ecc88dafc375789727a"],["/tags/index.html","e4d0ee289161490372e4b59f53a69804"],["/tags/interview/index.html","04bc6e9bfdbb8a23ff558d90201e46f5"],["/tags/io/index.html","f23b4c5fcb31bf1a8bba172c5b44afd8"],["/tags/java/index.html","ef64316ecd55b3f8c11b2c72ef407aeb"],["/tags/jdk/index.html","d0ced63f2f45779298cc9663f5a1c916"],["/tags/jvm/index.html","b05c795e7fb59cbef5befa52f2986be3"],["/tags/jvm/page/2/index.html","bd0f531993d57070ebe6d982063ce8ed"],["/tags/linux/index.html","e12cb9fa14f5cc96cf9523b37ed17ccb"],["/tags/maintain/index.html","c4a28b98dce95302e9e6dcced895c839"],["/tags/maogai/index.html","555dcc00e8fa90b629a2066447851ca0"],["/tags/math/index.html","81b7ece54783dc5ae8e2b62e9559aa22"],["/tags/math/page/2/index.html","60c0e901be3d8da98d736628935b6434"],["/tags/middleware/index.html","d248f9ea966f33288e53b33ec5305f07"],["/tags/mysql/index.html","2147d0b61db3f0f45cea576791f0953e"],["/tags/network/index.html","5fd4ed460890f0f271f774a4f4294657"],["/tags/project/index.html","68a938ec044c42fd71dcb52f03ed6442"],["/tags/project/page/2/index.html","649221231dc0ba83c169b73690023112"],["/tags/security/index.html","f9a62f1dcc1c75a13ac21a3e89ab5189"],["/tags/sql/index.html","021adc3532e5f5d81c7f613514bb5f50"],["/tags/test/index.html","3951653638ff156e1b6cb4d69017ad7b"],["/tags/think/index.html","845d7d96ee6e1a4c926485d7880ccafc"],["/tcpip/index.html","a3d9e3f309c3e75ade61f385bf6b3ced"],["/template-method/index.html","47d585d0608b8fa05643bd4ba4c8730a"],["/test-case/index.html","27bebef241ed038b14be08949465ee0c"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","45690b4975aefc21cdf1bc41682bfd63"],["/thread/index.html","ca9587086ba4e0b3dbefdf7c0cb6ed44"],["/tj-horse-racing/index.html","f6d34c109564614094d4fec36e905cb8"],["/topoSorting/index.html","6b75ea9f4aa0731165289aec33837ff5"],["/traffic-monetizationaccess-to-google-adsense/index.html","7f3d9d6e96dd17716e874d7ed72bb46c"],["/txCharity/index.html","09abdf4ac59ffa1115ac753e0589a7ec"],["/ubuntu-set-ip/index.html","b4fe09d43f9fa4bee667fdbe66d2e9d2"],["/undefined/index.html","9e29a1883cfbe4ff211e3a4d2b69a0e7"],["/use-arrays-to-process-batch-data/index.html","fdb1c3276b05c34d1f8a465a0845a877"],["/use-of-springmvcmodelattribute/index.html","4ef9533334f54c5a934ee7c629b87b0b"],["/users-create-data-types-themselves/index.html","24cab53463e42415935a5a5192336417"],["/visitor-mode/index.html","cceefde838854f9ac8bed7cf6ee5d48d"],["/what-is-milk-and-why-is-group-wise/index.html","9e468599014a255863769421d60de5c2"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","8bb59e8010a3ed0bfd73d2d2f71cae54"],["/xss-crosssite-scripting-attack/index.html","70617ea4e0c82ec9ee87cc862ea81a8d"]];
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
