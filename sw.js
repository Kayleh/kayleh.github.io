/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","7e356a8ce0bad393dfc91ace2af0728e"],["/404.html","bc374ba4692c17e6fcd4e231cb9bb319"],["/404/index.html","ff6000b41b769e71b01577f98f7f386d"],["/7-sorting-algorithms/index.html","1b4133f2d0be6d38883f929007529c8d"],["/AIO-blocking-model/index.html","eb511b9d905d493577211a8e0e9bef17"],["/About-Snowflake-and-Consumption-Degradation/index.html","46c69991b367938a5505aa832130d2e5"],["/BIO-blocking-model/index.html","4769416ea19f7d10005d8ae0254b9dd3"],["/Bloom-Filter/index.html","0406450efef5c7186d88f9152c197a28"],["/Boyer–Moore-majority/index.html","7b042d6118aacaf3c58abc990d582598"],["/C-algorithm/index.html","6c02ac03a2b14d3c6e03f4e51fa6574a"],["/C-programming/index.html","8fea2736560a7bfc8d1b75730b445866"],["/CAS-&-AQS/index.html","ef56b1637ef9f7237399753ea0608d5d"],["/Comparator/index.html","b0a4db9619430e14f8af627a3155b030"],["/Differential-array/index.html","46c2c873d0cef88fd2dac81c0ee404dc"],["/Download/index.html","53e2f93254f6df0fb1a2154acb9da753"],["/Front-end-security/index.html","4eb50b025b5a0eaec82e433e4db72b44"],["/Good-use-of-pointers/index.html","b4d12aa28e3f7f73df7ffb52e4304550"],["/Graph-degree/index.html","0531e7efd4d60625c5803601f31930ce"],["/Greedy-Algorithm/index.html","3fd3ad82f8ee6c013b8e197d6c7cb615"],["/Head-First-Map/index.html","5bb1444364ad348fb9e78cf7a5020e66"],["/Head-First-Netty/index.html","37992b467c2cff233bb0c8bbb9747e31"],["/Head-First-Nginx/index.html","04bb7d0019beb00c24715fb4e32772a5"],["/Head-first-Spring/index.html","5af13b9542702b2fcb6aba5b19a7ad46"],["/IO-model/index.html","ddedb1229ac449bdf26eb19a9c272a51"],["/IO/index.html","d008f00ad4f853fb4c77108d6a548ef6"],["/Implement-a-lock-based-on-ReentrantLock/index.html","4900c33971ecc8408cac0026157c4201"],["/Improve-Robustness-(1)/index.html","afc688411b4b4c3c9fbbfaad2f4e59c8"],["/Improve-Robustness-(2)/index.html","ded97a3e80c743e8d4a1c45afd1e187e"],["/Integer/index.html","423cdcad955f1967f71476128afb6bf7"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","d40aae8c521c6ef4bd8c6f6e490cfb56"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","a7abe95d8047d13c5a84f192a61253d5"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","ca6bb03d46d6a8ff62231bbf362a8763"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","9b03ecf3dc4d36b8f39bf35bf90377e8"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","fb17f293d013f9ee756c72f4b2bf4815"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","8123d343eb1355081eb6e012080e24c8"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","7d5ec46225a88d93a8409764da586780"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","a2c02f783343ef25848e30e3ae1b1fd5"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","9f18ce38e6191aa6b10b867668243c72"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","d1938f74607ca900fcc5bb38934670ce"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","f4ede198411da044eaa9304fc6be01f6"],["/Java-network-programming/index.html","d350c81c8d0831018ef54275c4b20b8c"],["/Large-number-operations/index.html","9b721164941112685105d37f9f424116"],["/MYSQL-MVCC-&-LOCK/index.html","cdbe0973695bb5c80dca632f6ce610e4"],["/MYSQL-uuid-and-page-splitting/index.html","d14146b0bff6db6d3b4b54849546cfd5"],["/Minimum-Spanning-Tree/index.html","4015e26f1f4c269e291c9dec6ea9202a"],["/NIO-blocking-model/index.html","8f6d6cb0f5d87e94d123f6dcdaa8289c"],["/Nacos：Configure-MySQL-data-source/index.html","b6c45f420e90caa53769012b06a27ee1"],["/Native-method/index.html","ad6ee3dd526594f1c72a359d9d1e30d9"],["/PriorityQueue/index.html","e2129f3a2550d2773d9a14d9ad2fbe4d"],["/Proxy/index.html","9db49cf2b73e4e13fb7d9d52e10b96e2"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","eae908bc64a9eb198cd7af2f6f4a2244"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","f04f78b6cfc8d138a9d343399116f798"],["/Reservoir-Sampling·/index.html","1ea27c73924ad7baee71e74097504690"],["/SQL-injection-vulnerability/index.html","c7b56ffc915a703feb909cd79acff4bc"],["/Sandbox-security-mechanism/index.html","fff1ea372bfb22c93c821b558602d82b"],["/Spring-Cyclic-Ependencies/index.html","de305b267f9a4d31fdb4fe0a0cc6416d"],["/SpringBoot-startup-process/index.html","3a040fae9225d0dbd0a8696298c9ca37"],["/SpringSecurity/index.html","cf4adebdf8bf0ab88c96f53dd1ccd3f9"],["/Thread_Pool/index.html","cce83158a294ef8b8f79de89f63db87d"],["/Transaction-isolation-level/index.html","07e82b31aa07b22712a4394019382a90"],["/Unitest-framework/index.html","363a75b905c367ab570d67df7980c912"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","9a7c04b4a180f764170dfbc22d2dc8d3"],["/about/index.html","569a71a46dfd1e8e2e6e3ceeca60fd38"],["/adapter-mode/index.html","3f7e53eb1962096a503f7d3954cc4c5f"],["/adjacency-matrix/index.html","272977a91953ffbeca6b67b510a7ef4e"],["/adjacency-table/index.html","a1d03f098c28f80963d45d73e3394a81"],["/agency-model/index.html","53ba5db93b0d7ae404ab8a90adf8b189"],["/app-test/index.html","bdcdba019ce87431b3e5266d694f3bfc"],["/appearance-mode/index.html","0cf209926d0abffc0d9ef9d6763c3a10"],["/archives/2019/01/index.html","882864975987f3694baa8ca43c192998"],["/archives/2019/07/index.html","91773e1b768b896e019baae231c419fc"],["/archives/2019/10/index.html","af21e2acfc06a7ee65eb486d6d520d4a"],["/archives/2019/12/index.html","6b53263f1c35b980eedc96c1f3aaca50"],["/archives/2019/index.html","902c7dc828a62a1a1bd6747a12691b3e"],["/archives/2020/04/index.html","b2985af8fa0021ada2739fed0144de4a"],["/archives/2020/05/index.html","3330c63a78eb598c783ad00c0ac906e2"],["/archives/2020/05/page/2/index.html","65f27894a0bc323ad007f2e132628816"],["/archives/2020/06/index.html","903afefc858802d70ca6f3b41e1fb093"],["/archives/2020/06/page/2/index.html","65113060c4dd42b87666139d1b939ef5"],["/archives/2020/06/page/3/index.html","46f49bb977900b4adce0419f4f229c13"],["/archives/2020/06/page/4/index.html","d63c86f818196a918b39a18f7d87222d"],["/archives/2020/07/index.html","83106cbc5f4647bb12fdcb166590ee97"],["/archives/2020/07/page/2/index.html","2dfa9a9ab7a3b48e90f26eadabb98059"],["/archives/2020/07/page/3/index.html","c8a190abfa98400eb8868d85338b7477"],["/archives/2020/08/index.html","0476cfbefaade2aa6e9f95b840ba13f9"],["/archives/2020/08/page/2/index.html","0ff6776dcb373ab0ab1d7ff0ce1e705a"],["/archives/2020/09/index.html","6f06dabd41a0c5f25445bc6054f427fb"],["/archives/2020/09/page/2/index.html","86b4b3b69c7539817e8666d52d56e480"],["/archives/2020/10/index.html","bb29d29350bb0e81474603a2b0fda4eb"],["/archives/2020/10/page/2/index.html","3cbb0be3a3fea40d714e91bfed4d180a"],["/archives/2020/11/index.html","28799d81257ce70540caa7dd6d6bfc1c"],["/archives/2020/11/page/2/index.html","7ac50e82edd4eff790f40ccfa7b85174"],["/archives/2020/12/index.html","b126dbd72dd3a929634a01e37a438689"],["/archives/2020/12/page/2/index.html","5d2087acd30bb9bb6dbc62c1fde0da98"],["/archives/2020/index.html","e66d5006075bba91f24fd4b73726188a"],["/archives/2020/page/10/index.html","2c2806b3a10b01c2695215a4240ba426"],["/archives/2020/page/11/index.html","eb2c75e49cffa19d997701a4126c10f4"],["/archives/2020/page/12/index.html","b2d2044fc56f7409f0d63e360721acfa"],["/archives/2020/page/13/index.html","7bb1f52432108a52810ba7ad30eb12ac"],["/archives/2020/page/14/index.html","3a1c9b824620dec7628620d97b9cbc90"],["/archives/2020/page/15/index.html","fe0fe60753fc5c507f2dee89f2335bcb"],["/archives/2020/page/16/index.html","0b05e326345fe8c6338986b8275607c1"],["/archives/2020/page/2/index.html","6232dbf7cd797b16eac4b0267e96cc62"],["/archives/2020/page/3/index.html","41444c8df9cc944b29339a6c88ef6c17"],["/archives/2020/page/4/index.html","f0d46932fe6bc14778e45af6e52cf6ba"],["/archives/2020/page/5/index.html","a4e69c36e731e115d65701dc09641919"],["/archives/2020/page/6/index.html","263a021246e6ce6eeab27b20eb0ed2b9"],["/archives/2020/page/7/index.html","ebd144a0687cf0f2646dd0db67752a95"],["/archives/2020/page/8/index.html","ac8b676cd95473e8354bb84bf693ea1c"],["/archives/2020/page/9/index.html","aad2d6cc35daaa2dde91eb4461b7a353"],["/archives/2021/01/index.html","33250d161658f739fc4b3d35976a4a44"],["/archives/2021/02/index.html","a5648acf882ff8f3c1039a4839af2488"],["/archives/2021/03/index.html","3a69891ba5faad5f8d86ecffdd6ed322"],["/archives/2021/04/index.html","d2d0cad3ab45223123d51d707e9aea4e"],["/archives/2021/04/page/2/index.html","abb0734b58fa379bc093b46c1bb9be6c"],["/archives/2021/05/index.html","54e81909645dd4d44cd5ba203bf21181"],["/archives/2021/06/index.html","7fef0c07c8b5fe3eac5e238d379dc32e"],["/archives/2021/07/index.html","6f10915dee127e4e15b00ee8269d9b51"],["/archives/2021/08/index.html","78e82ef862ff400276338dd384c5156b"],["/archives/2021/09/index.html","942b488cd20fce85aa33eb8ff4c0e8b9"],["/archives/2021/10/index.html","1d88af12a127ec0df985bd918ce29182"],["/archives/2021/11/index.html","6f0ecb6a7acd48fac6912c66471baae9"],["/archives/2021/12/index.html","da74863517be1921798f15992f89dd76"],["/archives/2021/index.html","39fffe0f371028a7735381e257c3272e"],["/archives/2021/page/2/index.html","384e1505936aad5bedca6c7100980aff"],["/archives/2021/page/3/index.html","73550e5a15e66a6135ea42aa980ba26b"],["/archives/2021/page/4/index.html","33a7ab4493fdfa4d01715b196c7053d2"],["/archives/2021/page/5/index.html","6dad49e84874c6ad51177499bbf99690"],["/archives/2021/page/6/index.html","8df9c8220f0677e6f11354b78229b1b4"],["/archives/2022/01/index.html","166d535da199f56b987d98ab4dec204c"],["/archives/2022/02/index.html","29a01ab78bdd70fa744ccd8007c3b9b1"],["/archives/2022/03/index.html","c4a82733e4688e9176ef5405156b344b"],["/archives/2022/04/index.html","9956af3a606d05827f97cba3ba08e7d3"],["/archives/2022/05/index.html","8c802ac91389f61b38dd80d160dcd9c0"],["/archives/2022/08/index.html","08742fa7cd9a77cb8d23dde6a5258022"],["/archives/2022/10/index.html","b1aab57f4c3fb76eab602c7bd193d78f"],["/archives/2022/11/index.html","fe13f898ea86b2c7004e830b8e18767b"],["/archives/2022/index.html","646fbef7c6f640361c0a471965b68b51"],["/archives/2022/page/2/index.html","94a8cc0e724ce401e536b5304399b044"],["/archives/2023/04/index.html","829265495f56a9a2010edc5197c886d4"],["/archives/2023/06/index.html","b8137b0d096cf5ba63d99fde127366f1"],["/archives/2023/index.html","6be8f4854a0e6302974fc6c8371e5f0f"],["/archives/index.html","18c270962665ff02a63fadb6d86a0713"],["/archives/page/10/index.html","36af77924b460749b8cd231e3362b596"],["/archives/page/11/index.html","92557726cbe202b75024f6cabf8cd2a8"],["/archives/page/12/index.html","6c35d12ed0d8a4236e0bd54462309d70"],["/archives/page/13/index.html","56b6efb058b0d38656b26379776fb720"],["/archives/page/14/index.html","2e0be9df72f7e903a0213cac7df04917"],["/archives/page/15/index.html","0d77c1933bc8a7f16fd0a6e4dd6ef299"],["/archives/page/16/index.html","30b81131c1bfda6fcd515afe75e5a32b"],["/archives/page/17/index.html","ac949140b140e4f9e3cc98fbc3a61eb7"],["/archives/page/18/index.html","17265392b30b5722a0a29958de5ea695"],["/archives/page/19/index.html","8e147ad3c32d4adfb330c3da7dc653a1"],["/archives/page/2/index.html","8e236996fd9bafa1f0d79906805d850d"],["/archives/page/20/index.html","9ec315fcb80ad65588973baca9a25655"],["/archives/page/21/index.html","89dd1faa9ef3940ce4dc95577420d677"],["/archives/page/22/index.html","d369a0245e2461810500791ff91fe6ca"],["/archives/page/23/index.html","c3cb77db8467d0a48a2701b98316f533"],["/archives/page/24/index.html","c13c8849f26e65f9389bc562c74f9105"],["/archives/page/3/index.html","87a4f9e38e422a0ee7f2788c7f873156"],["/archives/page/4/index.html","910656f89c88a8545925bd135f599580"],["/archives/page/5/index.html","dc30bc759b7ca37146916240b83f36c8"],["/archives/page/6/index.html","40fb6aaf7a230e85d9d1e61086b3f836"],["/archives/page/7/index.html","c643cc044bbfd67ea0ad7bce4ad57f66"],["/archives/page/8/index.html","8ad67a1f790b6c862b79bd05476d1498"],["/archives/page/9/index.html","19ff9c338654b831db7dad105bb1db7d"],["/array/index.html","a600e064d7fecb68c8758e788858e1e1"],["/automated-test-katalon/index.html","c53839cc66c3757fbf43f59f9912f319"],["/automated-test-selenium/index.html","2988a5d446e069ea83ab0d89e31e2f49"],["/back-to-table-query/index.html","23436bd259d2864e73b03eca45882b27"],["/binary-search-algorithm/index.html","c36a0bb02ddb4a0e0317c0386d6106fa"],["/binary-sort-tree/index.html","1c9572e2dfb4a414e6c6c32de4bd8962"],["/bionioaio/index.html","6eb2da72c3dc4353920dd0ae256f0c6c"],["/bridge-mode/index.html","228f8e7aecc8f068162c7f26f71240d7"],["/builder/index.html","9fd00a936011fb5feca3ef838dfaeacd"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","a80aac7768c6117af0ff69f1cd6ad897"],["/cache/index.html","3fcacda1fcdb0617edad2bf99c35aeb7"],["/categories/C/index.html","20e30e371c3e625880e3bac9a83ccc72"],["/categories/SpringMVC/index.html","c76df2a1f866cfb113109eef5c19e95c"],["/categories/categories.html","2f90ea9fe115bcba3835061c8a82f971"],["/categories/index.html","dc3938b0c85fbf4d54fd60940fb23ff5"],["/categories/linux/index.html","eb73fbfcb1ee40d5975e3501767b43fb"],["/categories/分布式/index.html","b2cf63e75fe7c228324dc6fa1a01c426"],["/categories/分布式/page/2/index.html","223c5ec135ec777141e12f209871c8c3"],["/categories/设计模式/index.html","6e3052b6fb5bd627d4474ad350c95697"],["/categories/设计模式/page/2/index.html","fd39e8007d862c5d56b70ba1d8e3c408"],["/categories/高数/index.html","605deabc0358906318bbe99d0dc830eb"],["/chain-of-responsibility-model/index.html","ce3d96f4bf384dae7a13c8434a7fadb6"],["/charity/index.html","657f3495a5047b673adae1804edde154"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","fb33965ae8261b8eecc406312f8e5a11"],["/combination-mode/index.html","955ba3f8a4aa77fe1938924a30612ce5"],["/command-mode/index.html","5049d20475405fbf60c92caa94b86d64"],["/common-commands-of-unix/index.html","9e264224f9c9dd44cce1dde46d047b20"],["/computer-network/index.html","1c2b19eeea84be02d44148be019602c1"],["/concurrency-principle/index.html","40febe7282a2f7352d954b661e38a8b3"],["/continuous/index.html","5c61ba936ffc3e65c7daae5fbc27a5e4"],["/contract/index.html","c87eb2aaa3ab9740d6fd7acbeca2bff3"],["/create/index.html","b03740b7bc5346821a297d01a64094af"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","3a9e21c8165c3d797fe375988d2c65e5"],["/data-structures-and-algorithms/index.html","65dac8b2fd9d67c266499ba9dc4ba785"],["/deb/index.html","29030e6bb0535c83703a542ee37f9385"],["/decorator-mode/index.html","d2a9f8be3c25d793e3bd637126bf4925"],["/definite-integral/index.html","dca15750f6066183191b8230a45620d4"],["/dependence-reversal-principle/index.html","8866c524e551cb835211b892fb646ef4"],["/derivative/index.html","e43179ecea4aee1e0f6478e8871aef7d"],["/design-patterns/index.html","3a9112b93f9b81001905909d5e8a3204"],["/dic-algorithm/index.html","8e11000c5cf9ed758ab01ef88bb24e38"],["/differential-equation/index.html","e260f87d47ed8c88b336ac32f2ec05b6"],["/differential/index.html","9e01c41f178a09fc88456f28aeb9425e"],["/dimits-law/index.html","923234b7da07f214ad15b63c2d5d6600"],["/distributed-lock/index.html","e189275c147fd7fc47195ec961a58eed"],["/docker-virtualized-container/index.html","887ca787622e5a619e5485be1dcc853e"],["/double-integral/index.html","7084663677e686714ad8994becac75f6"],["/dp-array/index.html","0fd33981c761d859e1cc966587353fb5"],["/dynamic-array/index.html","7f464ba0db67fb853ed6fc079eeba6f2"],["/dynamic-programming/index.html","3595f402c335e9f1cd3832bf556e96c9"],["/edgeset-array/index.html","770bafe92314decb4d5a04181a06be50"],["/encoding-algorithm/index.html","2b8eb28262c010ba9ef9de34573ad930"],["/eureka-service-registration-and-discovery/index.html","550b385a26760da6d761ab372c2327a4"],["/extreme-value-and-maximum-value/index.html","4518bef1054d6348a6e2d0d1d97e3bc6"],["/factory-design-pattern/index.html","7d1a11b0e498733cbf3da0ff0a4216a6"],["/file-input-and-output/index.html","520e6b0d9e105250a0ad5e17c9ed0995"],["/flyweight-model/index.html","e5174e0305afcd8dcd9e36eea3b5d9e5"],["/friends/index.html","cd9a13c9a9fe84678287cd3eaeee8301"],["/function-graphing/index.html","a7f45725c2962d366d698c219b47134b"],["/gateway-service-current-limit/index.html","a94dc4f1e61e4913ebd653eaffb02930"],["/gc/index.html","6b831568a668e379fe914703f57d2b04"],["/generalized-integral/index.html","f4e0e4188e48aa6bf58cb5c7230d6a0e"],["/google8102e2f35ce9e391.html","d4a72b269f76cdfa7534f2f91b5318ca"],["/gulp-compresses-static-resources/index.html","737567ffe5dafd0ad210b4d426bc9a1e"],["/hash-algorithm/index.html","2c23d8884980ee6912037c5194801260"],["/head-first-JVM(1)/index.html","52170b5e635e0e7ef51ff4ccc0979f0f"],["/head-first-JVM(2)/index.html","012d7db0edec0a52a5442a97b2f7e3a1"],["/head-first-JVM(3)/index.html","2c1c5afb396ba5dbbe66ea4702bc9d11"],["/head-first-JVM(4)/index.html","bf6b20cd5abdaf539bae46e87632b5d4"],["/head-first-SpringSecurity/index.html","48863a305115b87053d628629e05aa0c"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","3b2026cb2864f17b07dd764235ce9486"],["/heap-sort/index.html","2eaa837684e40451083a760d5000383a"],["/http/index.html","a39490001513ee674200a6bf76faa083"],["/huisu-algorithm/index.html","a4720de99fb9fe519cf1ad3821481040"],["/indefinite-integral/index.html","da826d9a1b84b42823be9ae644d39f4b"],["/index.html","3f2d7823ebab773fe977f7fa434a5c0c"],["/infinitesimal-and-infinite/index.html","65c4841a065a67cccc84a969f044c0b1"],["/interface-isolation-principle/index.html","ea364157aa559da3e9f9d4632e85f6d0"],["/interface-test/index.html","fe0247d85a7a492c243ef351caa0c724"],["/intermediary-model/index.html","d43266ea8282239b9a8e688209219e92"],["/interpolation-search-algorithm/index.html","6dfd02597f434245d2db63ddddab7fdd"],["/interpreter-mode/index.html","f5967cbc9c370332c66c5854fa152d20"],["/introduction-to-computer-network/index.html","5bacb99671ab3b9847f07cfb07a6a744"],["/introduction-to-operating-system/index.html","d6ebf3e8aca2fffc005125077f07b88b"],["/inversion-of-control/index.html","0c59862606334a3d3c5209c14b061a0d"],["/io/index.html","e2c0733ec1c40fa0325afc2e0818b267"],["/iterator-mode/index.html","e5861a30501c10a1db4c8b49cad6150a"],["/j2ee/index.html","e1072138d3e8af983a071e82310c264b"],["/j2se/index.html","3bd4694f2d2f44b84c36df15d331ca68"],["/java.lang.String/index.html","156026b04550868e89f85eb478772d7f"],["/jdbc/index.html","27246517d03c05f126d61dedacce43f3"],["/jdk/index.html","9928ff8d23973b05e44b0ada8cbf4d94"],["/jmm-memory-model/index.html","8ac9fb331b5c9bec0f8c116939a6b19b"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","f354a28bcb7f44e96026e8bd84bca681"],["/jvm-method-inline/index.html","fa364260ac0c500c60b9e2a31ccc6d80"],["/jvm-tuning-practice/index.html","b78d331dafced1121bde5524e47d1612"],["/jvm/index.html","7153e4ef07b73d74033a5d3aabcb3e19"],["/law-of-robida/index.html","879e9857febd635ff91867fd30b4e26a"],["/limit/index.html","6edf267f185234feca11c1ad380e93a9"],["/linear-search-algorithm/index.html","00ff18c95d91758da9f19f5b20e3bd4b"],["/linked-forward-star/index.html","7827c6dd7b5ba3994b02fa151946ab8b"],["/linked-list/index.html","f2d9cee7a7c20140cc2b6552188f2a99"],["/linux/index.html","2e2048ff6ce9901c13ae8e4f78c2e02c"],["/liskov-substitution-principle/index.html","dc60eb87e0b6a72464a5598d625083d8"],["/lock/index.html","b898e5e18691090d33ea6342d8e91b78"],["/lru-cache/index.html","d2f3d1b1af2f08a345aa7a21fba2cb80"],["/maogai/index.html","e9aaf249f9276136172bc101595b0660"],["/memo-mode/index.html","cd6d881b743fabc496b2b7e40d495cec"],["/monotonicity-and-convexity-of-functions/index.html","3affee85e687f8fab44ecb3ee8f5579f"],["/multi-function/index.html","f8d90fbce521c8f44ef47a62f60245b8"],["/multithreading/index.html","88b50e13b036e03a48de2ac3678353e4"],["/mvc/index.html","d4c95f9aa00b13ced4d3a906cc4e0b19"],["/mybatis-cache/index.html","bc440e15e40e9e8268df19ba7457ad6c"],["/mybatis/index.html","051569e5b6bf44b05e7418e4fa3a9a34"],["/mysql-index-wrong/index.html","f11099a051a17d386d0589f66304c7d3"],["/mysql-struct/index.html","f176f6339a0c6c61bf08fdd8f7bc4e1e"],["/mysql/index.html","50dcbd75abf87678f6535d70d080ae10"],["/nacos-service-registration-and-configuration-center/index.html","793b191ce2469aa799c1c9d7d235a2e5"],["/notes/index.html","dbc26c0f2dce944f427dc3087d448aef"],["/null/index.html","0b08d0c3e9b87abc7c97860d7243e3c3"],["/objectoriented/index.html","7f6452faa253bfb8960e60145a23fe4b"],["/observer-mode/index.html","d994330ee09e2e28dd11d9416744c85b"],["/off-heap/index.html","79778ed753d90f340f1c8f485133b150"],["/operating-system/index.html","a1a6df8bdd4aa45dcfaa484aa5a2e6c4"],["/page/10/index.html","7c47c974de4c8c1e2975681c3df788b6"],["/page/11/index.html","99e35abd9e88fb8467092c7660b155dc"],["/page/12/index.html","98e7357aef824268d70ab0dec6e4d496"],["/page/13/index.html","37221cb1cedaa1f1702370a3cb71937e"],["/page/14/index.html","32804c91a3bcdd6a17f4d0da84cf573b"],["/page/15/index.html","187b80bca3f3e41fb498e7539060a725"],["/page/16/index.html","7ed11d27eb1cb639d3beef2fa036ff77"],["/page/17/index.html","9063fc62416979d000a4b7b30f86768b"],["/page/18/index.html","97a59f33e1795508a7dcd985902f3f2b"],["/page/19/index.html","7cf3baf6e1b0f0d5fbeb978341c4d201"],["/page/2/index.html","9ef849b499998da979fed76093d2243d"],["/page/20/index.html","b31c4b56d48db84470400002620ef003"],["/page/21/index.html","348dd07c960a12c303d6ca4afa1dd5f5"],["/page/22/index.html","4020d024fcf135df290e2dae92d4d91b"],["/page/23/index.html","0177d10505cae80e713532d3f9ae9a82"],["/page/24/index.html","5523a4434c912bcfe9bd3359d43d4beb"],["/page/3/index.html","ada7667f9f2623378172da36349f2af8"],["/page/4/index.html","20e62dd3102ceb6ebc481abf0946f99b"],["/page/5/index.html","dac7a888a8018185ce42ce58425d0da5"],["/page/6/index.html","fad51191e6d7594dc493a39fbd2cf27c"],["/page/7/index.html","d19a66c39882c9a0d12301ef178362a1"],["/page/8/index.html","aefd32f1cfb3d9eea85430d76b054927"],["/page/9/index.html","45b79e78c1cc867bb1f2101d346a460d"],["/palindrome/index.html","d96be964626ec9c64db3a92c0b12ba1f"],["/partial-derivative/index.html","57436c7e15564cbf79a3e690b534f070"],["/pass-by-value/index.html","edd3b9f4363362867674574e2694ce59"],["/pictrue-bed/index.html","c18a8c06209e94b757d922fb586f26d4"],["/principle-of-opening-and-closing/index.html","360cd24b6617fd140664f1dce9f4bf9f"],["/principles-of-computer-organization/index.html","39d2b3cfe6c081d863e021cbdd2272c6"],["/program-test/index.html","7085f96423c08134938c704e7f52342d"],["/prototype/index.html","fc92f5ef6c22f04ce8671993f52103b1"],["/queue/index.html","d8ac36d12161ef2c72f0d212ba33a5fb"],["/random-weight-distribution/index.html","8b41bd2da485e3c8dc20f2a420b35bde"],["/realize-modular-programming-with-functions/index.html","2ee22d00ff569d942e839115309a74fd"],["/redis/index.html","69022552daed55f0cb615a9ec1713278"],["/reflection/index.html","29a7af812af59d8d400a10fb026bafd3"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","c2718dcf893105a18430b1bc2f116870"],["/ribbon-load-balancing-service-call-degradation/index.html","257098925cc7830cba5a33273f4dbc8f"],["/round-dp-algorithm/index.html","382bb45d2aa6d7e2307ce504ee5f9d9e"],["/seata-handles-distributed-transactions/index.html","18f68c061bce8aa59fed33f95ccc96eb"],["/select-structure-programming/index.html","ebcdbd512ba25e56b5008c59b2f2cf87"],["/sentinel-realizes-fusing-and-current-limiting/index.html","72156e293a7d4b69a864b3617271df78"],["/sequential-programming/index.html","9f52a28b90218c65389a4cf19d4c2a2e"],["/series/index.html","a54c94a21814d6ea99e9f05dff4935e4"],["/service-worker.js","df6b1e251a20b413810d0c350925f406"],["/single-point-login/index.html","e6be452868d8d29a268d7ca6f1774346"],["/single-responsibility-principle/index.html","1d0cb969b9d4fd79af9afc1b77ca8a4e"],["/singleton-mode/index.html","e9b3510c72f1631946a3f97296d57682"],["/slidingWindow/index.html","6d639e9950af016f22e8eaaf4bbbb72c"],["/snowflake-distributed-id-algorithm/index.html","49be58b030be2facc846e2f6c19edd9a"],["/sparsearray/index.html","19dceb97015ae0ae08ccf7ea28a4380e"],["/spring-and-jwt/index.html","48914a1df3d41b9a3800a2e28bb574b3"],["/spring-architecture/index.html","4302190519c9c054a4759028c3d3653f"],["/spring-relate/index.html","b83e95e48529d0969b56dcfbcea5723a"],["/spring-springmvc-mybatis-integration/index.html","eeed908cb924aa6ea19c1b8a93a98421"],["/spring/index.html","a1c24509ac1d1e086676e8a9f7ce2932"],["/springcloud-alibaba/index.html","83446590a68e59af8e62dfe02a6f00ad"],["/springcloud-bus-message/index.html","c262ba42fd908255c30ee41c45bd35ef"],["/springcloud-config-distributed-configuration-center/index.html","29e932593d2e6e471b4bc043b465b6bd"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","ba0d6f3c966564dae917ea2cc11554d0"],["/springcloud-stream-message-driver/index.html","d064ff970a016c50a8251b1a82b07475"],["/springcloud/index.html","d8efc8b907443de044b9f1d93d9845b8"],["/springmvc-environment-construction/index.html","26d90a769fa8ba4c6d301333f99adf1b"],["/springmvc-work-stream/index.html","1486ee914fab19b3634d785ddc28ab38"],["/sql-injection-attacks/index.html","d1c518712d2befd3bfcda01511609939"],["/stack-simulation-iteration/index.html","5a682bbeea974276c169c771c5574f29"],["/stack/index.html","0198534906a13a26eea3167fc134f24f"],["/state-mode/index.html","c8ca7bff87e83ab5ca091189906e151d"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","98f49473cc6aa586be8e796b467b9a26"],["/strategy-mode/index.html","89ad3abacbeae9d891b10ff467b0d175"],["/sw-register.js","a64eee076ccede181fb40923913cb30d"],["/synthetic-reuse-principle/index.html","7a56d8eb86ce39be2ed1348f66a2f30f"],["/tags/C/index.html","3c96465194fe93c5adc1d9d912f838d7"],["/tags/C/page/2/index.html","d57ab7dbdf2adab901dab83ee860a8c7"],["/tags/Concurrency/index.html","50f4725d63e46b0f55dd2b33f937bb90"],["/tags/DesignPatterns/index.html","acdd13676ab0c1ef476a7bfd191443c9"],["/tags/DesignPatterns/page/2/index.html","a5e52d5a314464c0dce003e6cf7cf12d"],["/tags/DesignPatterns/page/3/index.html","acb2222da7f459e7b2ffc2ffb82284db"],["/tags/DistributedMicroservices/index.html","970977eb71cdfd9f5994e6c97197e1a6"],["/tags/DistributedMicroservices/page/2/index.html","89608a46dfdfd732d75c7d3a94afe72f"],["/tags/Interview/index.html","614d1f5067a6a78734a7181d24385254"],["/tags/Interview/page/2/index.html","a0c1c86af8c22fe0b566c8e9bf34e35d"],["/tags/JVM/index.html","f262b4f11614d075c9daac5014f6d083"],["/tags/Operating-Systems/index.html","63bc523ad7df27a2411034c310798292"],["/tags/about/index.html","1caa2aaf6777a6d6a2ccf6f8e74af942"],["/tags/ad/index.html","1d1dbe663b2b796ed613153a698d83e9"],["/tags/algorithm/index.html","3bdb55afba2bfda7349b78d26218b085"],["/tags/algorithm/page/2/index.html","2f0d482225c4d95bcfb79277416b6b61"],["/tags/algorithm/page/3/index.html","5b92b959ab3760abd2b2980beedc1900"],["/tags/algorithm/page/4/index.html","74080efb5a871fe8c1e68d3db2681073"],["/tags/bug/index.html","f3ee0493ec253c4e4b778b43c8b7b496"],["/tags/computer/index.html","ebd366c4ebc2750a7519d36f2442ac09"],["/tags/data-structure/index.html","ee8598acf970c4831754e354515838a1"],["/tags/docker/index.html","14785e9df57c48848d3a6fb2c489ba73"],["/tags/famework/index.html","7edd70e8ce287c86df1dfd0bb6b53a0b"],["/tags/frame/index.html","5100518f026b356d2e733eb9ecbb9666"],["/tags/frame/page/2/index.html","fd9d60623354ea043a35d2779da62b80"],["/tags/front/index.html","c0735573956776b6d2a82acee2931c50"],["/tags/index.html","bf4677ae3689a0001f8c962a2b130e62"],["/tags/interview/index.html","5ecd76f6c1703bb3735c172a39213faf"],["/tags/io/index.html","f1229199193d7da961c7b0df82123f04"],["/tags/java/index.html","23ba318f028de8edc70a36c27fa001c9"],["/tags/jdk/index.html","caa816859838dab624089039eb172629"],["/tags/jvm/index.html","97b9526238bb26ee8947a622ab95ee5f"],["/tags/jvm/page/2/index.html","461d2926bfdad3e442e734f329715fc9"],["/tags/linux/index.html","f31c676078c9227db12ad6ea50f3436e"],["/tags/maintain/index.html","345e202a853f010580f998fb4f1523ef"],["/tags/maogai/index.html","55153dbee25bb12d79eb5ba12cc368f5"],["/tags/math/index.html","ce1b468bdbba80c654fb2d94a7f46498"],["/tags/math/page/2/index.html","d0e3f7687af2970c9990a6c358db28d9"],["/tags/middleware/index.html","7c839939665ebb6a26c54d9c54916cf5"],["/tags/mysql/index.html","02b43831f169f2081036d33cf7ba1d05"],["/tags/network/index.html","4c37c1915ec8250c05966b10e6ad35e0"],["/tags/project/index.html","9f8b6ac6e72a2f902fc0d133f040c8ee"],["/tags/security/index.html","8e624eaafc9b4b499b9153fb3c7f707e"],["/tags/sql/index.html","493013b77484cb4c88271a1647ea8295"],["/tags/test/index.html","314739e05816349b6308ac420e3daee4"],["/tags/think/index.html","97986f6430afbfef7775bd8edfa9d6c4"],["/tcpip/index.html","ddbe92ffb776e8f475d6be811a5c2aa2"],["/template-method/index.html","b63576b3ba46944cd932c85241ace6dd"],["/test-case/index.html","926bee3b4bdd60d6e3e9200994551e98"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","8362606bed1723dee8c450091e85885d"],["/thread/index.html","175c426a3e125a60d1bec23ff6f3e89e"],["/tj-horse-racing/index.html","4a286671ddf57041e62fedf878fc1810"],["/topoSorting/index.html","302fdb979abf372b81a6fe8eb09e538d"],["/traffic-monetizationaccess-to-google-adsense/index.html","1d90c34323936a7da9f95abdaccf3435"],["/txCharity/index.html","7dcb2f2061ea42843e411e0197d65714"],["/ubuntu-set-ip/index.html","2a38ad52a26a08ba27532cb0447d2a26"],["/undefined/index.html","c78947874f28ca018f77d9d962a69cbe"],["/use-arrays-to-process-batch-data/index.html","b1f533baf997421adcc04ec6740147a3"],["/use-of-springmvcmodelattribute/index.html","2fc15f2559b503f92390997bf1cbb0ec"],["/users-create-data-types-themselves/index.html","416c0c620d3f36168617c25484a7a63d"],["/visitor-mode/index.html","554123ecbb517d525adb691da77b3169"],["/what-is-milk-and-why-is-group-wise/index.html","79dd2fca0b7119176189e050ccc7e748"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","15433521234e8c165712c4ad6f6b7845"],["/xss-crosssite-scripting-attack/index.html","f71dd6ac59e8c5c38e615adef906f6f6"]];
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
