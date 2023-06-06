/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","e93bb79f9e135138d5c1d68e3af2e32f"],["/404.html","719fdf0a51a0a08fe7911e8e5740381d"],["/404/index.html","8cc5eaa3234d3a8bae57fd02dc812bbb"],["/7-sorting-algorithms/index.html","3b9403fc581430ffa6afd2557c9bb2f8"],["/AIO-blocking-model/index.html","51513dd58b8667dc6a7554744f39ac15"],["/About-Snowflake-and-Consumption-Degradation/index.html","04c98917d08e5ecc0e5f246119741f19"],["/BIO-blocking-model/index.html","da5c9c3ff0f064c5e254b4edb1674034"],["/Bloom-Filter/index.html","4db045233867d0f828ff166c5f1413a0"],["/Boyer–Moore-majority/index.html","0966b1638e67c42297dbbcb4150e117d"],["/C-algorithm/index.html","33b7f9ea73b0b6e78507ac0393e15a94"],["/C-programming/index.html","9e46bcbe9bcb4d961cc661ffc827ce1f"],["/CAS-&-AQS/index.html","bbdd888f8b00c52f12a487c7b6026604"],["/Comparator/index.html","0fd84bb8bcde8a50621a4ce99d0879bc"],["/Differential-array/index.html","a8e06c7d2afbedadca1a98af0c1e312d"],["/Download/index.html","944a8a22544ddd6fec43341cee54aa50"],["/Front-end-security/index.html","04e9c516ba69257917d50dcf5f2a1304"],["/Good-use-of-pointers/index.html","e35e5f0c35ce2d2c5c097dba817c7cce"],["/Graph-degree/index.html","491262837d5605178394051164f77fdf"],["/Greedy-Algorithm/index.html","3dc77093118a3228519b2f91ce00aa41"],["/Head-First-Map/index.html","7849202b0bdd05aef68f475eaf93767a"],["/Head-First-Netty/index.html","ccf40909fe5c54c39d8577ee4753b673"],["/Head-First-Nginx/index.html","bd64ad96391c81a5f3080c0b3c542507"],["/Head-first-Spring/index.html","5d0ec19246b995825b69e7be67e30365"],["/IO-model/index.html","0e0b7c348eddf7c3807e655355170406"],["/IO/index.html","d320f310350826362c068edeba92f566"],["/Implement-a-lock-based-on-ReentrantLock/index.html","927563b74e640d2d14d667c98970bf48"],["/Improve-Robustness-(1)/index.html","f78ddcf7a3313cbd22ec468f5688c029"],["/Improve-Robustness-(2)/index.html","bae5b2099c0ede0527d0d9fdeee4ee8b"],["/Integer/index.html","b030ab852a1afc1cdde893cbceb504cd"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","71f4ec2bece220f1eae7492de0a5a9ef"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","7aecbf4b921273b386513eb0185e37b5"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","519b935dd225a40a2b979b286144936d"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","cb84a3bfedf882f47ea1bda71194bcbf"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","7cf4fd52d9685a0bb1a5d18813f2f1ae"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","885293efc143faf4ca76cfda8909c446"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","3f0add5734a6a92f09356e2b4e1b590e"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","83e76de810a48e831242cd521ead09b6"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","0c47a34773e80c29ab653af533495780"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b6504a6564139d73c3ae0017befdafe3"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","e954c44c2ec6e9b6a7f6d68f8de4020b"],["/Java-network-programming/index.html","861174375e98e37bf2d2f3d6365bfbd1"],["/Large-number-operations/index.html","e0d2de01225e586cd1dd16440a79c3c8"],["/MYSQL-MVCC-&-LOCK/index.html","6358605c8e424622f73fad165c0e1571"],["/MYSQL-uuid-and-page-splitting/index.html","0a4425194f0bf3dd638401edc41c2d9e"],["/Minimum-Spanning-Tree/index.html","27825489ddd5515f06261ae1abc53331"],["/NIO-blocking-model/index.html","8b66e5bd072fa07023572ddc82f972b9"],["/Nacos：Configure-MySQL-data-source/index.html","6001f516400719606330f570a0cbfdd7"],["/Native-method/index.html","766092666fe0a8d57cb79d049e9a42a5"],["/PriorityQueue/index.html","7457930b9d946fdc4b14ecd3662d1541"],["/Proxy/index.html","cf5fdead2c62963bb40dffd6087f8cff"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","8a2f2b89aed27e0c55f04db532a30a53"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","22d94c9df6952e15ee6ce51df6bd602c"],["/Reservoir-Sampling·/index.html","158a7d067e13a549615dbb9be76c7cf5"],["/SQL-injection-vulnerability/index.html","2efaa93cb0bfbafade29dd1672b09262"],["/Sandbox-security-mechanism/index.html","ec298e7211fe8876f7b5b6d5431c97d4"],["/Spring-Cyclic-Ependencies/index.html","988f0ac5b9a026651fae9f725ca3215f"],["/SpringBoot-startup-process/index.html","5bd8f0bacb2cb077096c16962d6661a0"],["/SpringSecurity/index.html","62455381ed348ece353926e418c920e5"],["/Thread_Pool/index.html","ac662bc76c0a315903e1f42474ba1514"],["/Transaction-isolation-level/index.html","f96cc6c1dd80b4b159073af1acca77e2"],["/Unitest-framework/index.html","4867231827bbd7755721a9089ab30bf2"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","bb53aa218dc514ae33f7975552f55d14"],["/about/index.html","a9a6f82107338bd56a2bbd81f52a6827"],["/adapter-mode/index.html","563c07b0fc721e55705982be6aeae93e"],["/adjacency-matrix/index.html","b9f4a60da2653d9e90e881dce213b037"],["/adjacency-table/index.html","2af447d494db16c1c9dc945067c7de94"],["/agency-model/index.html","4f8f3eecaef1b20e1cd3c17cc0955ab3"],["/app-test/index.html","5e81a92ba64c2a7369734d95cb60dfed"],["/appearance-mode/index.html","d18ddf01a60088509cb4199380e1a6ac"],["/archives/2019/01/index.html","123c56b9951f8b593eab951e8eff6110"],["/archives/2019/07/index.html","0e63ac75839f62e5632441a9f0b208f7"],["/archives/2019/10/index.html","1683e41ada7cffdea38e53284af9ddc0"],["/archives/2019/12/index.html","ae5b180b283bf06968b467b65eb3b8b7"],["/archives/2019/index.html","c4d7e90cbaaa9f35dd9d2ba49f069c03"],["/archives/2020/04/index.html","106782c376982e3655624194bfe52d65"],["/archives/2020/05/index.html","2807209a721f3d6d6fb96fb0ca7d4a1f"],["/archives/2020/05/page/2/index.html","8227c7bb37ceb3778419b895c04c4f34"],["/archives/2020/06/index.html","fd6feaff475e3e3d570bbf0770c49d96"],["/archives/2020/06/page/2/index.html","a44665b5ca1df1053d3189d268fc7c4a"],["/archives/2020/06/page/3/index.html","c6cdb5bc5f47bce2d4e0102430f4dd2d"],["/archives/2020/06/page/4/index.html","4b313ba31560a9826c5e178c00549b0b"],["/archives/2020/07/index.html","d60e5ce9123401810cee80177df0ec9d"],["/archives/2020/07/page/2/index.html","6e51febd021483c2872988878ed12d1d"],["/archives/2020/07/page/3/index.html","3d88b85d9d9cbed5b41234300ecb5315"],["/archives/2020/08/index.html","a831e530ba6eb58f4f5d17d8856758b1"],["/archives/2020/08/page/2/index.html","08eb2ae34ae42731862efaf7ac25438e"],["/archives/2020/09/index.html","1f188bea6998544c4b280fa73d5a405a"],["/archives/2020/09/page/2/index.html","6abc44219cc201c8faaef84138d0bbb1"],["/archives/2020/10/index.html","863db28fd8a9b2d26e7d666f0db04b2a"],["/archives/2020/10/page/2/index.html","7b40e14b6d0fd6e7ae3696098da276a5"],["/archives/2020/11/index.html","83790b62332289901f939bd7ddf6d27a"],["/archives/2020/11/page/2/index.html","2e693d5008e28c1216631fa00b866158"],["/archives/2020/12/index.html","845acf2b149dd43efb3fce0edd3be428"],["/archives/2020/12/page/2/index.html","c02b592e759ec2a15a0fc58ba6428e2a"],["/archives/2020/index.html","42474604d4a1dd1e5651814281288e5d"],["/archives/2020/page/10/index.html","af41789f0f65cc3cacd6cad648b53a06"],["/archives/2020/page/11/index.html","fdf277dc0df83f6e10c4a5eca614a973"],["/archives/2020/page/12/index.html","67ec0625a963f3ff5f3826de3a8fd7fb"],["/archives/2020/page/13/index.html","206d44235d7e696f5bd7ff5ad9eabe1e"],["/archives/2020/page/14/index.html","5fa3862bc43bf01f8000e83ef5de1bb1"],["/archives/2020/page/15/index.html","1b24fb918e92425c203a1dc991e203a1"],["/archives/2020/page/16/index.html","78db6256514606f6f469f45c5118087d"],["/archives/2020/page/2/index.html","413fcabe6a73f944e7e7b04d34f5bae9"],["/archives/2020/page/3/index.html","9e753ff5643e7abf4ad08e2ca8b8f78e"],["/archives/2020/page/4/index.html","979a468a9ed581ba23068181542f6b3d"],["/archives/2020/page/5/index.html","c5b95b24b5acf90d71479dd44d7142bd"],["/archives/2020/page/6/index.html","9a70ec49b1377d490b33ff8be6809c04"],["/archives/2020/page/7/index.html","e88c0d5deb1555a7a12c1e4a771f27c0"],["/archives/2020/page/8/index.html","3c8c4ce8578dfd7d7429bf6fa743d399"],["/archives/2020/page/9/index.html","bbfa4eeb98bec7acf39afa52281abb01"],["/archives/2021/01/index.html","6beb90c3651a7a627e6749e07754798d"],["/archives/2021/02/index.html","e473b86fe7719cf340550bece83dc08d"],["/archives/2021/03/index.html","eb3f13807910598b140c2751e5348d4f"],["/archives/2021/04/index.html","1b93d6938988958693508807ff0f1826"],["/archives/2021/04/page/2/index.html","4b7846f61a344a01546520242f605a8d"],["/archives/2021/05/index.html","b24afb640c45ecd367d2986dc57ae31b"],["/archives/2021/06/index.html","3e67d4d9281c4ca345963a1284790d30"],["/archives/2021/07/index.html","22c94550cc0ac9376a51111bb575395a"],["/archives/2021/08/index.html","b9b6b1fb16ee5760cab10e97076c6ac4"],["/archives/2021/09/index.html","caef580d3020ac19e748e05b3d153691"],["/archives/2021/10/index.html","71db828ffd470f2abc5464fcece820e4"],["/archives/2021/11/index.html","117e3a5036b2886ca4dc75579bcd4568"],["/archives/2021/12/index.html","207531f35ea42966db000cf2df71cce4"],["/archives/2021/index.html","236fd4d11c04c4d6f3559d71c9403a47"],["/archives/2021/page/2/index.html","c36411650e503034faeb985637a0f032"],["/archives/2021/page/3/index.html","10d9632637241b93fcfa708044433427"],["/archives/2021/page/4/index.html","d53d13bb78934433a7cb6ac381b9e0cf"],["/archives/2021/page/5/index.html","5432ab74d135cce0dcac28282af7ab5e"],["/archives/2021/page/6/index.html","0f4b3e1aeecf5204bdfc7c244709baa2"],["/archives/2022/01/index.html","2643d2fce12a0ed67cc117d277f86d04"],["/archives/2022/02/index.html","57336e5a0ce5cb638ab71e1c11ae43eb"],["/archives/2022/03/index.html","be013cd63a04ce8d9eb36494b6169c0c"],["/archives/2022/04/index.html","f655b0b40a6ca6b660e309c9da04a89e"],["/archives/2022/05/index.html","120593a7d01ac5edbd39b1cfa4949a51"],["/archives/2022/08/index.html","b69a8294b3a2272909ab78b3b0d9f8fd"],["/archives/2022/10/index.html","6e000bd33d0a2949bf7073c194f0d5e8"],["/archives/2022/11/index.html","af5f88b46962ff0a1746994b041ce666"],["/archives/2022/index.html","793b7ca5e0a45224449633865d87ccb3"],["/archives/2022/page/2/index.html","0976632ab26f9ad4def30c233b14b236"],["/archives/2023/04/index.html","11138e4296a774415d8f7e96fe8829d2"],["/archives/2023/index.html","9e536011e624f887a6d3f6836766c129"],["/archives/index.html","a5efc82d90fc0550237b09d89441b8be"],["/archives/page/10/index.html","afd9e808679bb9ef8d7a8a2f92b11109"],["/archives/page/11/index.html","a09e9c92661d5ebdab742ea3009ab624"],["/archives/page/12/index.html","8ea68d2ea7139d605a0081c62ea55c27"],["/archives/page/13/index.html","00b39dd13fb4fd4499a4fa863c4a461c"],["/archives/page/14/index.html","f6548fee61784e4d555d3ec95db91dec"],["/archives/page/15/index.html","c35267fe956fece8acd7e21d059c4fa1"],["/archives/page/16/index.html","22acb35aef1f1b8bf6ca2b78c8b43f9f"],["/archives/page/17/index.html","92fb73beeeec17f5bf32ce4af2ac2105"],["/archives/page/18/index.html","c13d6bd5dc7402f642fa2bcf36587434"],["/archives/page/19/index.html","55ea14761b81a88316af177dd3499375"],["/archives/page/2/index.html","1c7bd380fa3cd2448e6792a178b4f844"],["/archives/page/20/index.html","3af1d3870bb14781181b5ff469db5212"],["/archives/page/21/index.html","ec7ee2115d3db0612671bc62bd59a540"],["/archives/page/22/index.html","bdb51b89050fb1cedf77ccd8c551d96d"],["/archives/page/23/index.html","b7ea3b87755eb29a9324bf4ccef3f060"],["/archives/page/24/index.html","493a6cf4c703fdf4da1c5d1de0f69bef"],["/archives/page/3/index.html","1f96b6e69601312ce84ef7b788e63083"],["/archives/page/4/index.html","1d66c409e29767bb7c8fce028ab897c6"],["/archives/page/5/index.html","560d630690f1c5c51cbc93b13549b9e2"],["/archives/page/6/index.html","d9b3c623d5d50cb579f498e424009a15"],["/archives/page/7/index.html","e32e64d8239ade5df8291d7beefd3f22"],["/archives/page/8/index.html","bc01e0d7d730cb14bbf72513d17f312b"],["/archives/page/9/index.html","b9d2964b9238226d94a0678fde26258b"],["/array/index.html","14278171b708aa7647dbd67e0b695f39"],["/automated-test-katalon/index.html","d2fb32d99c290ed7a91ed300bc15bf5d"],["/automated-test-selenium/index.html","2f7752859649d43c081e6c571890cb66"],["/back-to-table-query/index.html","9b303c17c48827d0ee393f111da4b18e"],["/binary-search-algorithm/index.html","0ab386afe0a15ca51e24dff73386f3fe"],["/binary-sort-tree/index.html","2d18590b5dc458c509ae2b8a16dc861f"],["/bionioaio/index.html","42a204c3b4c181929f4def9901b24162"],["/bridge-mode/index.html","f9c54098a30707beae68b39e697fbdce"],["/builder/index.html","e0d65899e8be123679f9d586f4db1ec1"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","34d1779c0587779b973c351851c0158c"],["/cache/index.html","8c52ae0a9971c750f2cc72ff20ae7839"],["/categories/C/index.html","933d655d79a2c7f30b46fd5ba459e4db"],["/categories/SpringMVC/index.html","7d7d8fe4747f9677d052661e8a551ffc"],["/categories/categories.html","70827ac0337bba184de24acb096c510b"],["/categories/index.html","a49b379052ec499283ec7fa61897bdc8"],["/categories/linux/index.html","df98bf46c31dab7c28fca0bc36e42960"],["/categories/分布式/index.html","5278924f8a37963fd4e0afbf85c081f0"],["/categories/分布式/page/2/index.html","94075f58efd68d81fd5b9a86d915d52a"],["/categories/设计模式/index.html","c3f9af14f762fd48518858039b50cc42"],["/categories/设计模式/page/2/index.html","47696ee1628ba60638ff0c2095342e0f"],["/categories/高数/index.html","d12ab21b09e8bee60fcd4740f31d2b40"],["/chain-of-responsibility-model/index.html","80abbcc8982fd547ac3b348457451561"],["/charity/index.html","6f24f636931c851db8ac1fb346f2e012"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","90579b7e17f0edbf226d30b7c96603e7"],["/combination-mode/index.html","5ce60d08d1149622a9b58f3f82af4311"],["/command-mode/index.html","5b83a01803bd11a306c3126578b9ebbc"],["/common-commands-of-unix/index.html","1a94fd34a52b443b6217cda26fb975af"],["/computer-network/index.html","a4e8b43169d6949f589d3ec58f0446b4"],["/concurrency-principle/index.html","028aa1bcb72676be2750feaa38cf595a"],["/continuous/index.html","b2ae661b020ce931f8c5a12f5a33f28f"],["/contract/index.html","6f22b5b6e1c9fc7ea95fe3ca14f6a389"],["/create/index.html","0b6ce179fed9051f353d01da1d29856f"],["/css/main.css","0ab02c81a8ead489278ab88be7700809"],["/cycle-structure-programming/index.html","c1002c8fef1c7633625b9198aab50a0f"],["/data-structures-and-algorithms/index.html","d034ef3b3c5d78e4785c13d60f128acd"],["/deb/index.html","e5af267f72936420bc9b5d70123829b3"],["/decorator-mode/index.html","760146a7479bcbb59251b1dd898c19bc"],["/definite-integral/index.html","42fac1df19db7b12bff3e5631d508b93"],["/dependence-reversal-principle/index.html","b12deb9d96e585b036ff58403ec9e6fd"],["/derivative/index.html","c19996dada83b3844862455c547b49b1"],["/design-patterns/index.html","b411fd90a1ca4372ae40240bec8e610f"],["/dic-algorithm/index.html","fbb6598923319cd793f78a0575382a15"],["/differential-equation/index.html","2ed31b908b81cf2c478c1ee1259c3bf7"],["/differential/index.html","f4142650a590c26bd4518c4d0cbb4bfb"],["/dimits-law/index.html","09098e958931543badb47753c3ca2f0c"],["/distributed-lock/index.html","9160db26b4145e0f029c1c8958476bf0"],["/docker-virtualized-container/index.html","99ca1b8b7095411f27da5fbc58b7213c"],["/double-integral/index.html","2940b92e332c32e2b364be2958472cef"],["/dp-array/index.html","791cd3602469973ff55b12409b44d6e1"],["/dynamic-array/index.html","95db6423f1cddeaad48f28a4dcb9f88a"],["/dynamic-programming/index.html","ffe0e3525b6c4f06cc334ad15d60d27c"],["/edgeset-array/index.html","29d54761cac317ab78de17f9d8648eee"],["/encoding-algorithm/index.html","8d5c1113d67cce79d7a6f28a67c02420"],["/eureka-service-registration-and-discovery/index.html","82695e3a3c9d353d05ff7248b39bd829"],["/extreme-value-and-maximum-value/index.html","46cdd764dddf5bcb4b3eadd9de8ba962"],["/factory-design-pattern/index.html","a591c497a8add2e7e08f65280bd12365"],["/file-input-and-output/index.html","5a97b2276198f2c1dfae118951c0282a"],["/flyweight-model/index.html","f31d352b6cca6231e4fd98deb853897a"],["/friends/index.html","4cd14ac9588be63d531321c3bd652936"],["/function-graphing/index.html","0e042ffad9e43f05503221d1c563e4d0"],["/gateway-service-current-limit/index.html","894d78a79642759d87d99ecf3d7cd0cf"],["/gc/index.html","42c79f67d42719418e4425314ccb0d31"],["/generalized-integral/index.html","ec4d508225f7ec0b0a54befbcf5796a1"],["/google8102e2f35ce9e391.html","cb4de76d4c86831db332f96fafd23a3d"],["/gulp-compresses-static-resources/index.html","39b25f867e931de9d3be0fb7a6db5507"],["/hash-algorithm/index.html","223d0c32579becd24c70447d0ad35a06"],["/head-first-JVM(1)/index.html","c473a0f12a5f4b6b0bff3927513cb20b"],["/head-first-JVM(2)/index.html","972bcf78a9ff31eabd16630576945ac1"],["/head-first-JVM(3)/index.html","0b8a31fae339832785c092e6518df318"],["/head-first-JVM(4)/index.html","5d9ed23e69adbfd4a4ed04bd97a42fd6"],["/head-first-SpringSecurity/index.html","0c79ee802c76c7b00f3be5039a13691b"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","6c3073055cbe83141149f918a2134db9"],["/heap-sort/index.html","d58a889429d20082267e5a57e66c2efa"],["/http/index.html","ef2f82ce3372bf4897e8872c4bf4c74e"],["/huisu-algorithm/index.html","92a51da4532e2eac32ddb2e0f1d7b896"],["/indefinite-integral/index.html","ad2d37592ef6cd1be0186cd1f848f16d"],["/index.html","3ad27c416349feda5edc1ea51fdb6ab3"],["/infinitesimal-and-infinite/index.html","639eaee84d4e05ee720f63e12b4d13a2"],["/interface-isolation-principle/index.html","d6f0c74cc3df303cbdaef8a180853e91"],["/interface-test/index.html","a8be5707ad3a7c4ff261c12064263884"],["/intermediary-model/index.html","946c613964063fdf99c16cb70615a2be"],["/interpolation-search-algorithm/index.html","d42635e44d3ee0afa2fc09e2d20592b6"],["/interpreter-mode/index.html","f8e6e8fae0122c3466655adf782739c4"],["/introduction-to-computer-network/index.html","fe8dc11297dabab90e9bf9e6f2076835"],["/introduction-to-operating-system/index.html","f860b7097ee4c6a57378b84eaef1a605"],["/inversion-of-control/index.html","dbb7432348e031374db56c0b5fca8a20"],["/io/index.html","f59ed69b2b64c49a692931150e2d8bd2"],["/iterator-mode/index.html","b1bc4d430485985e7c77f54b4768b21e"],["/j2ee/index.html","ecaeba0267a197f958327159333db464"],["/j2se/index.html","9733db6384cec15164cb95f8bd0507c8"],["/java.lang.String/index.html","368c83e4563f7ac8d2ee3019d51bfa7c"],["/jdbc/index.html","8ebeecf0aeead5a49f505757d6dd2dff"],["/jdk/index.html","ea563619ab727cf45dd6f6c4393895ad"],["/jmm-memory-model/index.html","ea5cbddb3cc7b207c7954e61d0fcc906"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","75eed7ef4462d61ecee9e396baf5a367"],["/jvm-method-inline/index.html","f0cfe004dec3b622ba046ba30d4cc89c"],["/jvm/index.html","724b7d4cc3b2c1eb04d672937cffd163"],["/law-of-robida/index.html","d758f9df3ae35e4902ceec2f55f88703"],["/limit/index.html","a7489a32efa8dfeb02c14122b2778ed8"],["/linear-search-algorithm/index.html","bbd8a25e0ec0ff173872e23cd277a4df"],["/linked-forward-star/index.html","d543c58f2138b250393f24bfe4fafae0"],["/linked-list/index.html","298e38b78d1f756a9a6d1784f1fcefd5"],["/linux/index.html","afaa54e03ec3a5449775f13c27680250"],["/liskov-substitution-principle/index.html","5122346ec50143e957492bc26ea240ff"],["/lock/index.html","44a4a603dc225e6bdaa71c56fde1cee5"],["/lru-cache/index.html","683b564907e7278517d273598df2500e"],["/maogai/index.html","21c610978b06d2a2f66c1d577a4c822a"],["/memo-mode/index.html","0eb046d43ce5b8d7ecffcf07fc91da68"],["/monotonicity-and-convexity-of-functions/index.html","21ebb9937d6a662ba9138fc220d295b1"],["/multi-function/index.html","67107e2fbf8d0a44185d00ec23aa77c9"],["/multithreading/index.html","552fbc98d98d31cbf1a96a6e7e6a99a9"],["/mvc/index.html","b2b2fd626056d4a0b7bfc79f4f57c8cb"],["/mybatis-cache/index.html","2888349431ef656ff03e6d294e1921fa"],["/mybatis/index.html","924a941957589dc20acbcc0fa1093beb"],["/mysql-index-wrong/index.html","3dffdda38f80c6a2446879652ce3940a"],["/mysql-struct/index.html","2d574ea780a3ada50b47e837ff2428be"],["/mysql/index.html","c224a6534e989c8c750d75786cf6dcff"],["/nacos-service-registration-and-configuration-center/index.html","9dbf7e1252954d9abfd64e780a85ec97"],["/notes/index.html","da50e63f71da99dfe5a9b472e838cd3a"],["/null/index.html","fabd73d6e1f27b456310ddbcb4dd5f09"],["/objectoriented/index.html","6ad003c4941b7caaf24ef396f570565d"],["/observer-mode/index.html","bc688e0f20765d98bad6277ff2feef5d"],["/off-heap/index.html","f6bad642e512aeb8ca2dee2d931b38f2"],["/operating-system/index.html","20d01c1ef411bbb18bae5b9ec2ac3555"],["/page/10/index.html","0233097f90a6541e5ba18bfe0af75df7"],["/page/11/index.html","48d8446bf6a27aa9435ba2c498407ae4"],["/page/12/index.html","27a6296599b089e897a2165f131a8a16"],["/page/13/index.html","fa94c3b672d6487d081be38a5b428b4d"],["/page/14/index.html","087ff5076e5f61507df59e8d6863b251"],["/page/15/index.html","434866f53033af4e52af7e500249317c"],["/page/16/index.html","01d03ed87360456c792b5a7ee1a35589"],["/page/17/index.html","4ae26a2384822d243f7182d620aaa097"],["/page/18/index.html","e89183ed9d4c94dedb2c2b4136d11f47"],["/page/19/index.html","b68c19ec9e96b4cdfa62c2ed8605f474"],["/page/2/index.html","8b53d8a6559d7224aa9446661b25d847"],["/page/20/index.html","0a760bbf0a8819248d5f36e74833508e"],["/page/21/index.html","0365e29f83be835d448bdc9fc43043fe"],["/page/22/index.html","7a6cab21e21c0d2a79df7b9642db8287"],["/page/23/index.html","316121c5be4332918d5ddaa9c52184c5"],["/page/24/index.html","67d048530e62b700d804c0eedfa53b90"],["/page/3/index.html","df237cb4f526d09f889461736500fc29"],["/page/4/index.html","e4225d0a0a7eec7e86ab093f950749e2"],["/page/5/index.html","02ec43d555ff526dccedce2f273def93"],["/page/6/index.html","1622ff40222e5c71d0be68aeecee8443"],["/page/7/index.html","8244bf0ede632211b8a0daf7ece025dc"],["/page/8/index.html","ab55b4281533372f6e593021b0c4a0be"],["/page/9/index.html","0234c909566a45a1b0f3179e219a5660"],["/palindrome/index.html","6bb4f8b852f5f627c52c1011be655ba1"],["/partial-derivative/index.html","644f8d238bc0119baaf527bbe76199fd"],["/pass-by-value/index.html","cccfcf8ac52f36ee01ea5c4c590a3930"],["/pictrue-bed/index.html","d5007cc8d32670ebcfe90ff01ece367c"],["/principle-of-opening-and-closing/index.html","65d689955e95c1180e5db0919d766c5b"],["/principles-of-computer-organization/index.html","a4b6530c537748173dbd97b38c41abbc"],["/program-test/index.html","0a1b8a125f888340e9998c4003975b9f"],["/prototype/index.html","69af35db844adbadb98bcbcdea32db89"],["/queue/index.html","156215ecf8d4d2373f4e7906710bd7f5"],["/random-weight-distribution/index.html","db4793d4dbb21aba62f271a790fa92c8"],["/realize-modular-programming-with-functions/index.html","d69f99513bf5da5dc0f8cd8980d7c73a"],["/redis/index.html","e242c51a1012d82d3ae984756e968792"],["/reflection/index.html","d368d403d541f32e154a5f030187da95"],["/ribbon-load-balancing-service-call-degradation/index.html","1972e1e3b67d643796b54e6ae2322944"],["/round-dp-algorithm/index.html","52e069c0e3c04e23647b1b1f36ebf245"],["/seata-handles-distributed-transactions/index.html","23d5f98f808f4548313373d63d38de54"],["/select-structure-programming/index.html","a4aac1f14697051c1ca60ead4eb15a3f"],["/sentinel-realizes-fusing-and-current-limiting/index.html","89bde84a07c1e61afae0f7c882fa9d5d"],["/sequential-programming/index.html","536450e11ae71b19199c3fb3afca053e"],["/series/index.html","7e5afecdeb85d61ffcf9bcc4e159eaee"],["/service-worker.js","9368cc112d50a64fe7b1d6bcd977af6b"],["/single-point-login/index.html","a143d7c6690ddfbf35bf37927c008200"],["/single-responsibility-principle/index.html","85898c56621967602255e20331ad9b8e"],["/singleton-mode/index.html","fbf8c84f049261a87a8b30f1f908c4e4"],["/slidingWindow/index.html","5fad5063ecf5660c6eb1890c6de0d54f"],["/snowflake-distributed-id-algorithm/index.html","73e1e42f0509b6ff228d1815fb00b4b9"],["/sparsearray/index.html","0dc9aee18fa591c7159db7d7c085f8fb"],["/spring-and-jwt/index.html","6fad49b0bb35052403cf8ce75a6c909f"],["/spring-architecture/index.html","f6bd07c0bd9dfb096f74f431c5ba6842"],["/spring-relate/index.html","313ba7cada22553dee9836e02d76a8de"],["/spring-springmvc-mybatis-integration/index.html","065cd22dbeda349715fc7e1baaf89ed3"],["/spring/index.html","340748c26f0093719a76d967a50dd5cb"],["/springcloud-alibaba/index.html","98816602914826add6f498b68122578e"],["/springcloud-bus-message/index.html","d3fefc3601fb56b609da7c50965bf84c"],["/springcloud-config-distributed-configuration-center/index.html","c2fe7d37b616ad9a270e5db895151599"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","cdb567a1c75d7bc74398dbb46102e868"],["/springcloud-stream-message-driver/index.html","9417af28fdce9557f9fa94369ad17670"],["/springcloud/index.html","ea089cef424816b98648a125d4de90a1"],["/springmvc-environment-construction/index.html","143aa084bb611f30fbf9b97ad9f9a147"],["/springmvc-work-stream/index.html","a51b5325cf9c0b26c3b287f40b5dba11"],["/sql-injection-attacks/index.html","5f1a7ae783ecb3704b2ede1c0041c253"],["/stack-simulation-iteration/index.html","ee66d2c82b13cbad6a594f444b3c353e"],["/stack/index.html","5a5095dbd262ca24be849ea2948f0b1d"],["/state-mode/index.html","9b43dac89bcbc765ac5d8b5feeace628"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","61324fc8d6f8a84ee43b8fe30af684ef"],["/strategy-mode/index.html","1d17c81ab35cb5a1768c20065c34ec18"],["/sw-register.js","a9eeae0a973579faacd19cf90c609bef"],["/synthetic-reuse-principle/index.html","f6f1cf2f9bb09a2d9bf31b74e32a2516"],["/tags/C/index.html","5756187f9e9f6f0053587fc7365d7732"],["/tags/C/page/2/index.html","98c36d1a982fcabd745cabf428887320"],["/tags/Concurrency/index.html","65d4e7b2d20f00425cf10de2b004f73d"],["/tags/DesignPatterns/index.html","7ccb2719e5a4ad18cfce6e7bf009bcb7"],["/tags/DesignPatterns/page/2/index.html","c8a1e60fb360a3a724226617e550cb23"],["/tags/DesignPatterns/page/3/index.html","62dfd6610426f9a0757655c748d9913c"],["/tags/DistributedMicroservices/index.html","fee3eb5ef2f25492221089cc5e0d1dce"],["/tags/DistributedMicroservices/page/2/index.html","1ae58e868b941b85367c64f058ff5079"],["/tags/Interview/index.html","d3a7719e549c65b0524be8cedecffac7"],["/tags/Interview/page/2/index.html","2a369470a043c484b4d91f4d38e0a457"],["/tags/JVM/index.html","336e5ce983cc1016c2b3656563900874"],["/tags/Operating-Systems/index.html","b867bab63397c7ab5ef1ec063fb23502"],["/tags/about/index.html","90500eda4c06ae841a7b0ef390e75902"],["/tags/ad/index.html","13cd79f81dad914cbac36dfd7f063f09"],["/tags/algorithm/index.html","5d2e0445140a4b2d1a4de579b2fc7fdc"],["/tags/algorithm/page/2/index.html","0bdde5bb630c0b5e90eed9b8445ee009"],["/tags/algorithm/page/3/index.html","18c4a6879d4625416f5332f3c63e5899"],["/tags/algorithm/page/4/index.html","8c9ec93b717c5a6b6abeca21df9b31a1"],["/tags/bug/index.html","8283aa61400e781032d19a7756a3a498"],["/tags/computer/index.html","9c0215e224c5d025eda6deaeca0108c1"],["/tags/data-structure/index.html","a7c4c4609e5f87450545d5935ed75458"],["/tags/docker/index.html","6d91ea07b92e0f80c08eff69d3b7084d"],["/tags/famework/index.html","32f65afaa4ce8e69edf4ca023327938a"],["/tags/frame/index.html","b07e53d2c14552b01ab8462b4f2e584c"],["/tags/frame/page/2/index.html","5a120b224a8577748896ab353769e5b4"],["/tags/front/index.html","254b7e08e79162d8371b136842a12836"],["/tags/index.html","ed3fa9bfee16b315dcf23e567322a1b4"],["/tags/interview/index.html","360f2524010b2a6fd528776b420d4ba8"],["/tags/io/index.html","511c479221b93ad2056f0a3bfc26ff3d"],["/tags/java/index.html","4a79c408446837ff4a5416d091e5a2f7"],["/tags/jdk/index.html","66bac89cf924b109b33180455b13da28"],["/tags/jvm/index.html","b0d73bbf55fd91d7e476653ddd530331"],["/tags/linux/index.html","a0da21c0252d22eb23514aa63deea27b"],["/tags/maintain/index.html","eafa1f4fe58cde96e02f8c1a93342c80"],["/tags/maogai/index.html","cfc819628e96f1cc96299ac487947cfa"],["/tags/math/index.html","a093a3787477e3753ed5565836d4e83e"],["/tags/math/page/2/index.html","c555e784f1efddf82598fcc81934ce5c"],["/tags/middleware/index.html","5de6df672b910da6e2b791c63529e9b8"],["/tags/mysql/index.html","86723631f1279b3c77b9528e07715a69"],["/tags/network/index.html","f7fd13450b1c4fd27dfa9bf9ab1b5ee8"],["/tags/project/index.html","8d988293b43542c82ac264e807beb988"],["/tags/security/index.html","490b4b2bb470e888b829185e357ed503"],["/tags/sql/index.html","b17a21c5e48be0a19fe4708f3f8e063d"],["/tags/test/index.html","10c5c05c4b3e6c40d65028e05c41b6d5"],["/tags/think/index.html","f9a5c70b5fa4d09b70c47069c86b7f6a"],["/tcpip/index.html","32ffd2a3388fee54f07c0f4d3cccf4d6"],["/template-method/index.html","72af6ecda8fd8e3a6fdb4aae92a222bb"],["/test-case/index.html","7999308a4f708668288baba232ad84e0"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","f5e72ad4d7ae5a1e5dad6e10c4bb7154"],["/thread/index.html","d94734270c1b4116a91e199b21f28ea2"],["/tj-horse-racing/index.html","6147a78eb93f5eff16934ad1cb3b29bd"],["/topoSorting/index.html","277875d88cf8f60e3a144cd2c83f3f51"],["/traffic-monetizationaccess-to-google-adsense/index.html","6f6d0514226645cc2d156d76a71dd4f2"],["/txCharity/index.html","9e7cac85f28f9afe98d89191d86acf41"],["/ubuntu-set-ip/index.html","03d33dd8761062ef908fa64182e648df"],["/undefined/index.html","07cc0a2dd749f0b848cb823d42c722e8"],["/use-arrays-to-process-batch-data/index.html","a4d903e6f0c1068ef7668cb8e5b04bd0"],["/use-of-springmvcmodelattribute/index.html","ffb96507abe9884c4af0a37974a97f30"],["/users-create-data-types-themselves/index.html","9d73ca5fc29592225a499ec821183e72"],["/visitor-mode/index.html","d192ace359746dcf0f1e2d8ca3cebf24"],["/what-is-milk-and-why-is-group-wise/index.html","864caa7be177d2cd4f08df20e636b9c8"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","227e02deeb1e641a6dcf5a1eb5d6f53c"],["/xss-crosssite-scripting-attack/index.html","2a7f44139d7106accc109cb689ce3b8e"]];
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
