/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","191653971a67fb79acbbc180cddf17e6"],["/404.html","05525c4c43fea9ab17a577c455791585"],["/404/index.html","ad1d21531f17e1a888d38ee83b4454ea"],["/7-sorting-algorithms/index.html","cd951048dc32e27b2c6b003adc22a0c3"],["/AIO-blocking-model/index.html","6a0aec41cf2b5759612ba3e7c7d51071"],["/About-Snowflake-and-Consumption-Degradation/index.html","9d87114068195001fac85bdfcecf5a7c"],["/BIO-blocking-model/index.html","e5c86dfc121cb900616913f299e36b99"],["/Bloom-Filter/index.html","8cbdb77503c78037a289b3bc372e0c50"],["/Boyer–Moore-majority/index.html","5752a6933fcaf3a958b87e0226843531"],["/C-algorithm/index.html","2ce70b3aead8a48a3d63d0fecf6aa4a4"],["/C-programming/index.html","fe805c7dc11b94c677266b2f862b63c4"],["/CAS-&-AQS/index.html","ab9dc24e2e3e864b19a2e5de948bcd57"],["/Comparator/index.html","7e22d00a0e2a6357d84868129c4545b1"],["/Differential-array/index.html","140528332ef47452dd6b6e610f639991"],["/Download/index.html","fab403f6f7056ecb19d00438d24a87c7"],["/Front-end-security/index.html","a4d6f46ed9232fefac8c0aaf23becaf2"],["/Good-use-of-pointers/index.html","c09f73bbf1d8f667895bdf44d04abcee"],["/Graph-degree/index.html","b1fbc52a679707c84fe344c0dfbf16ce"],["/Greedy-Algorithm/index.html","4aef31145839cd3754c479c78561c59d"],["/Head-First-Map/index.html","4558ad03977f89b88d8e1dbdcfe4c0f2"],["/Head-First-Netty/index.html","717838254ec0215c12569e2b97280c42"],["/Head-First-Nginx/index.html","c6fdee5b5c8aa9219c3af462c1fa8078"],["/Head-first-Spring/index.html","9753fa735e62814be7f4db3a2359be0a"],["/IO-model/index.html","cca6ae13564d8cd08c49537b23ce0f9d"],["/IO/index.html","01ed270fcaf46c761a8de6c4df8df07b"],["/Implement-a-lock-based-on-ReentrantLock/index.html","734d3db433ff09d1e61816dce6d76355"],["/Improve-Robustness-(1)/index.html","e4027baa778274e9fd678c8208ba2edf"],["/Improve-Robustness-(2)/index.html","89b730f419c5dba3cb791afc3dfbe472"],["/Integer/index.html","733f9a4cfbc6d65ad5022380c6e9ea03"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","075d932657cce8e6c3e0621b3ae7e1da"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","e723998f297e940af873e93fe52ebe9c"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","8debd2781707585b9c8df82c98f1a494"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","e6917b5bf16aedea74d833841cc1aba7"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","befd95fc71dd4b821696564ab1e270b7"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","a8199e56e48173b4ac8a388dbd8de332"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","a1dc995fded6c7e414b978f3a0b0a613"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","6fb877b4582874b361fa8febeeb16f24"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","dc3a3c8b15f5c325299a527c8c6ff848"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","fa9935a4075cf3ebf7fd7ce4aba5564d"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","958cdaf036f1c4aaa27ac2ad371e523b"],["/Java-network-programming/index.html","ab40a51cf2ca645e67c5b26a6c0f8ce9"],["/Large-number-operations/index.html","a981703960f4caac3d33e98a295fe6c5"],["/MYSQL-MVCC-&-LOCK/index.html","fc2235865f26fa2c1f7ef2a48063657d"],["/MYSQL-uuid-and-page-splitting/index.html","85a8013b7ef5ed3f73428fcf5c754feb"],["/Minimum-Spanning-Tree/index.html","03ee06d7a9c01657ee3fab1e291092e7"],["/NIO-blocking-model/index.html","7d98a650c5d8adfd76f0574e98403711"],["/Nacos：Configure-MySQL-data-source/index.html","02fe84e54352b893c2cb80a13f09fd2b"],["/Native-method/index.html","cdebda830291ea4a9f062e7b4b65bbc4"],["/PriorityQueue/index.html","f799b9601f5882a59cc5c8e4b9a8c726"],["/Proxy/index.html","4629c6f0cddb1eb97e0d006d9ea7abb0"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","afbf8e1b76181b29473bc806bb0addda"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","4fa44897881e8548a30d71a66006255c"],["/Reservoir-Sampling·/index.html","bb112877f111af51d363b1651d8d5c14"],["/SQL-injection-vulnerability/index.html","3d442dbbb33163c6e40600c16037839e"],["/Sandbox-security-mechanism/index.html","50386409a5bca9e8f484ee1eeed84db6"],["/Spring-Cyclic-Ependencies/index.html","11eef68a23bbbe6be45a604720360391"],["/SpringBoot-startup-process/index.html","dc887b94895e70b9a7015cfff4298edd"],["/SpringSecurity/index.html","12363b3c002bf2472f03252672e9dfca"],["/Thread_Pool/index.html","48935ed5efead81306ff1b59214e2e09"],["/Transaction-isolation-level/index.html","cec8ebfeb36e21558e12535a7fa0072f"],["/Unitest-framework/index.html","861074d0fd39f18c9f8652cb0433cec1"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","cca248740c8a25c8ebd8de467908b650"],["/about/index.html","455998c2dfe448176417d4dea9c37a54"],["/adapter-mode/index.html","0400095025c04d808274631e520ec8a5"],["/adjacency-matrix/index.html","3a16426520adc3463d931b7b976886f8"],["/adjacency-table/index.html","120337e9478898bb218a88ce3f59b466"],["/agency-model/index.html","f84932101f13169c42f40691ca5630c0"],["/app-test/index.html","ee08261dab82137166b9f584bb006ed8"],["/appearance-mode/index.html","899c730e5c0202db819d4b3cc2fb39f0"],["/archives/2019/01/index.html","4aa06ef3d5bc33f0322e797c93472582"],["/archives/2019/07/index.html","a72919b61647dbe93d62d54190c8a266"],["/archives/2019/10/index.html","7acb3a660e610c9ed28bdc390eccbd81"],["/archives/2019/12/index.html","610cb99ca07783caa54518b428470025"],["/archives/2019/index.html","b4ff108d4fd3030317dbf1de0b685b65"],["/archives/2020/04/index.html","e910bc4eeb2be2343270902c6bd1ba75"],["/archives/2020/05/index.html","291663368839c6e5b482032dce6711af"],["/archives/2020/05/page/2/index.html","d5a681b7076b67d128926a11df0171c0"],["/archives/2020/06/index.html","1ea491793259dfd4812ece3f00d919cc"],["/archives/2020/06/page/2/index.html","af60cbbe7fe87497f393ae18bbc2f142"],["/archives/2020/06/page/3/index.html","f4acb8431797fdead869b9ea453b695d"],["/archives/2020/06/page/4/index.html","5d9f66b8d5c4ad3fe7bd6c03f24e56e9"],["/archives/2020/07/index.html","b3a6bb2102e84b736fddcc61c0f76742"],["/archives/2020/07/page/2/index.html","a1289a4d74cb5a468bd3a3a8358190bd"],["/archives/2020/07/page/3/index.html","8647d02a1461991d1f8f85c8f1528a02"],["/archives/2020/08/index.html","5c62747120216af8adfd8d9917caf4a0"],["/archives/2020/08/page/2/index.html","1d0f9afc9605a7879176f566a53cc384"],["/archives/2020/09/index.html","b586191b72e879504b204950f2ec2c99"],["/archives/2020/09/page/2/index.html","0a27fcb8343099c211dc0300140ee6fa"],["/archives/2020/10/index.html","b7fa236e25023b9694f74ef07b35de4d"],["/archives/2020/10/page/2/index.html","a5d9202a2cab4f5a543b295caac8498a"],["/archives/2020/11/index.html","166fd413a1ed4e5d40b25f937a7ee12d"],["/archives/2020/11/page/2/index.html","17f7b35fc7faf32bf6ddf2b3f396d7fb"],["/archives/2020/12/index.html","1bb55be11ef1d688b01b48217d2a7b3e"],["/archives/2020/12/page/2/index.html","fcdf42236090497d4d551d2c9dbbb551"],["/archives/2020/index.html","3a2150b4860da692412a3293827b4fdc"],["/archives/2020/page/10/index.html","c61d2926560bb9c5a621488c0ef59b2d"],["/archives/2020/page/11/index.html","43b5ad9ca8ec43d44fe072abfce2d56d"],["/archives/2020/page/12/index.html","af232a2e47d8761f705bb1102138859e"],["/archives/2020/page/13/index.html","bb07827df364315c39c86c4dedec579c"],["/archives/2020/page/14/index.html","9afdc4dd4223a26962d68617f7c374d9"],["/archives/2020/page/15/index.html","9bd4c1d521448b97b396d7b1d2d00aee"],["/archives/2020/page/16/index.html","ac77389bd7bca1f7445cdf90a342e123"],["/archives/2020/page/2/index.html","4fc0bb00a7bc23a0b8fb798cf6db18b6"],["/archives/2020/page/3/index.html","672786dac4c15cac1a262fb195db3904"],["/archives/2020/page/4/index.html","ec47c2173ac62af7df0d4a3c4505f84f"],["/archives/2020/page/5/index.html","97977c289ce8b9d7b2e7e7c0a794fbaf"],["/archives/2020/page/6/index.html","e683e0d8dfe6111b9bb190082c6d5393"],["/archives/2020/page/7/index.html","32348f660f14cea7d44d23e6dd7ba2d5"],["/archives/2020/page/8/index.html","d596428197e62dceaa685129c4355117"],["/archives/2020/page/9/index.html","4b13f83e2fe7b1b4f2dc0308c0617fe1"],["/archives/2021/01/index.html","7fd16b44f18ae206ff1e077bb561fce9"],["/archives/2021/02/index.html","6940fbf00509c1ba6a444b4adee154ba"],["/archives/2021/03/index.html","a52f711842d23e168a6b4ce4c983361e"],["/archives/2021/04/index.html","1e586132742c981809658206cabb125a"],["/archives/2021/04/page/2/index.html","61e8025f1ccac9b7baf0a0fdafeb2a45"],["/archives/2021/05/index.html","d8d5453a1e476c51add9cb652a631d54"],["/archives/2021/06/index.html","4c33e643c79f1b958454424a7ca14405"],["/archives/2021/07/index.html","2a06acb1f850038027d3bb6464a131e1"],["/archives/2021/08/index.html","a67ab6dd0ecb590e74d56ae158d486cc"],["/archives/2021/09/index.html","9ddbcae6eab9510b1bd41332002a85b4"],["/archives/2021/10/index.html","26fef02f7438f4b3f90ecc32aef2b6c1"],["/archives/2021/11/index.html","104ff097c1003b0c75e0a8a2a84c59d0"],["/archives/2021/12/index.html","84d8b895bf972975c5851aeb38559bf0"],["/archives/2021/index.html","4860654308a8b2171b630b031c9c4ccf"],["/archives/2021/page/2/index.html","f6898ce7f803aad9ca4e8c2893cdc4fe"],["/archives/2021/page/3/index.html","6ff4d9d0b81dadf53e91fecc24e02535"],["/archives/2021/page/4/index.html","937b3f7e2fb50078b30fb7be769ab9fd"],["/archives/2021/page/5/index.html","c0113b3163974a3922cbb1520100e894"],["/archives/2021/page/6/index.html","e44c3a547c1b931af58d89d3806b7342"],["/archives/2022/01/index.html","beaa712d2d4091a7bc377f410808cf15"],["/archives/2022/02/index.html","662ae3cfaf0c505f607a962195e212c1"],["/archives/2022/03/index.html","7dab48f432119259ed88b9333719c4a8"],["/archives/2022/04/index.html","ab73af5282bfdf67101965d73966288e"],["/archives/2022/05/index.html","da3d0f97daca22cb9ca045ca0ee7e6d1"],["/archives/2022/08/index.html","fad65f62372f352ded3687aef7a15cfc"],["/archives/2022/10/index.html","770b322dc3db412592e2e1362eea0415"],["/archives/2022/11/index.html","b7d063a8ee7d57a8779d693ffed7cdd6"],["/archives/2022/index.html","97afcb5490c993354a31fe903b0ea124"],["/archives/2022/page/2/index.html","58feda8398e8f54aec3a4a77862ad941"],["/archives/2023/04/index.html","19621c4cb29da26abf8aee1e2c86f15f"],["/archives/2023/index.html","1429fc50e5c2cd8087e1dcc92cd3a233"],["/archives/index.html","44e9f73146d36884d6b8b4da4fdfc265"],["/archives/page/10/index.html","7d098cdf97ee6495a571422cc3d908f9"],["/archives/page/11/index.html","a64789fa8e589c8857ed65057095dd7e"],["/archives/page/12/index.html","392dbbc10ee8267cce79b92207980048"],["/archives/page/13/index.html","6bd99c1e3ae05707a14f6418a36275d0"],["/archives/page/14/index.html","e45ff7f21f36ae18157861bce55922e3"],["/archives/page/15/index.html","59866def8d95ed5c864404d163e0832d"],["/archives/page/16/index.html","bbc154f7b1acd0862a0f2214e1247a12"],["/archives/page/17/index.html","92e1ff42eace8b72bcf317f286b71eee"],["/archives/page/18/index.html","4870913100105cf013db9674aa390867"],["/archives/page/19/index.html","4c37e294431beae3a8269011050a93c1"],["/archives/page/2/index.html","1a46dea97b957a42b5614b5f1bd40cc2"],["/archives/page/20/index.html","e3334809c64f4c61221dff7923b30bb7"],["/archives/page/21/index.html","1af091974967b088050fd5ba1a6f3f2e"],["/archives/page/22/index.html","a67564c9b24aee8c1f526ea653cc2d02"],["/archives/page/23/index.html","a9da21f574578e318489dbaf0e900bd2"],["/archives/page/24/index.html","9f80d20f1e833fcf16c44764352fe0a3"],["/archives/page/3/index.html","c387a244b801b5e3874acc0ddf415b51"],["/archives/page/4/index.html","d243bc18c4c132580215fdadeab478ce"],["/archives/page/5/index.html","40d5d0606cd0676c1d692e6c901b12b3"],["/archives/page/6/index.html","07a4e45c48bd4e686cca1e85e22e89f0"],["/archives/page/7/index.html","1ae6256f45cf4f107d796eddd556df25"],["/archives/page/8/index.html","bad61ebf40fef0f0133e3cfb8f7b20f8"],["/archives/page/9/index.html","f778e41c6cc12f13558e3e8734032c30"],["/array/index.html","661c26c23733e1004b27651f3f4a5bc7"],["/automated-test-katalon/index.html","930b26cc86f3dac1ebb370a8b375648c"],["/automated-test-selenium/index.html","e5585f065a4e7cafebdc3a6410b9296d"],["/back-to-table-query/index.html","dd38544d85f562d692f98c811bcc7f03"],["/binary-search-algorithm/index.html","35c140cc1953299614f4b00373666c27"],["/binary-sort-tree/index.html","0ef997d1eed1201de8e51fd6553e0ca0"],["/bionioaio/index.html","87325ac7ea80c0fc71f623e9e0fdd0df"],["/bridge-mode/index.html","b013936e9c8144fac756052e53c0849e"],["/builder/index.html","953eb42f4a46f586d13efd2c0b499b14"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","95e56edfc7b7d1bc640076738ca447e3"],["/cache/index.html","d820c3ed422db7666cea4c814fa87b03"],["/categories/C/index.html","ecb23d7c6959ed17aeefdb3041ef7735"],["/categories/SpringMVC/index.html","6892ae1875201cb8f06d0c56762fe4b1"],["/categories/categories.html","6aa83a32b81357e4f6d2beac44e03e43"],["/categories/index.html","79aae0726a92ad75fd77f9c51a814952"],["/categories/linux/index.html","bd1e11d97c226a82dd0ff30e9758e1eb"],["/categories/分布式/index.html","b0f0342d697f41fc6d902cdd6dc2c3ea"],["/categories/分布式/page/2/index.html","3cb3df79857e3be206463f4763105ca6"],["/categories/设计模式/index.html","8cdf0c6718a84032b7aeaaff7a7e8a4f"],["/categories/设计模式/page/2/index.html","dda75d7bd46ba7075e543612cf4a0f53"],["/categories/高数/index.html","0dba8524f9c2f887d2ea4653ea641e50"],["/chain-of-responsibility-model/index.html","eb5e85166aeaf2127f40a71bcbe4419e"],["/charity/index.html","2d17626e16fe0244db90a58dbc9ef38f"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","90988f9b64628aa698e337ccd864c6c6"],["/combination-mode/index.html","881c6fcabf0c383cb29116df36725570"],["/command-mode/index.html","e8cc7d59bd3d807d8afcae1832ee3ab3"],["/common-commands-of-unix/index.html","5b6a21533623dc0017d696e78cb1471a"],["/computer-network/index.html","ac154c6143880be6158c1af4eb212158"],["/concurrency-principle/index.html","7f26894f6db0e5cacbee587827082b48"],["/continuous/index.html","53e1aca6ceb350f61933ae7b85a76ebb"],["/contract/index.html","a84fb5b5c066510033f04937a3de7ff3"],["/create/index.html","30337ceadb4f56fc60857e372d0ab9a7"],["/css/main.css","8a6bd6d50e42272ab2b17bb8194976c8"],["/cycle-structure-programming/index.html","23d91d1a6616a3e35d31508509494920"],["/data-structures-and-algorithms/index.html","1c105efbf178c92dc9bb6792b5edb554"],["/deb/index.html","3734140bb8804e3d310201134fdbb9a2"],["/decorator-mode/index.html","afe7ccad410837487e6ca3bb0c71c8e6"],["/definite-integral/index.html","a48da4bab9daa1e00b6757a16a5de3b8"],["/dependence-reversal-principle/index.html","1dc47d1506bde3ae92e08812c8cba856"],["/derivative/index.html","238474f1d82c96b8008e13ec910d98e4"],["/design-patterns/index.html","908bbc40dc7e6988469d4fb2c4a33c8e"],["/dic-algorithm/index.html","0bcc1d4128e1be3e6d376e75054b03ee"],["/differential-equation/index.html","57e8a44fd42c313f1f7747283773272e"],["/differential/index.html","56faa7ffd811dfd4232e5ace3c716971"],["/dimits-law/index.html","18fe9ea75193db6a6e7f170fe0fb6076"],["/distributed-lock/index.html","4a4d89b81d8058d75a5682e5f41e67f0"],["/docker-virtualized-container/index.html","0665b174f6a7b3d01f1fd8538b7401e4"],["/double-integral/index.html","3774355c8bf7ecd895f1f921fd3f029b"],["/dp-array/index.html","c32e79a7fa873aeeda18b754a0a82ff0"],["/dynamic-array/index.html","e7a2d606dc5301ec6788369ea96e5760"],["/dynamic-programming/index.html","94be49e56df2fb1068cc5cc2dba0db96"],["/edgeset-array/index.html","7193ef6efcbdf7c459071cf93e69859a"],["/encoding-algorithm/index.html","7d47f55b7c9b6d4039404f9df46d2606"],["/eureka-service-registration-and-discovery/index.html","ad6246e31750cb912dba24a2aa7458a9"],["/extreme-value-and-maximum-value/index.html","a6adcf020a54099646faf0ff753ccd15"],["/factory-design-pattern/index.html","c0c9dcace3eb5ffd76f78dd41a5cda9b"],["/file-input-and-output/index.html","2c3bf6495f009096aafa3b5fbda7f221"],["/flyweight-model/index.html","0a5e230617374c2ceca6b27df00e6689"],["/friends/index.html","621f4ccc72b57e729254e27e693822e9"],["/function-graphing/index.html","a90234074b212a4c49197fff5a235aad"],["/gateway-service-current-limit/index.html","6e8ab54ffb3f2371b607a89a81cb86a8"],["/gc/index.html","74a7152f5cf3a03edb01ac493dac1f4c"],["/generalized-integral/index.html","65a48aba48f7891d7818b0f68674ec6b"],["/google8102e2f35ce9e391.html","3d485bddeca11e4ebf384bc8e9d8e6c6"],["/gulp-compresses-static-resources/index.html","ad2b5ae53800dc8f38ac8d24f99d5429"],["/hash-algorithm/index.html","dbb271479e121840b4119324fd7b34b0"],["/head-first-JVM(1)/index.html","e8be1ace1daa0cd0c83836cd07e7ac11"],["/head-first-JVM(2)/index.html","b6f934b76058b3845f1802c8dd64aab7"],["/head-first-JVM(3)/index.html","e4de779002f2de7b611dfb94d00fb408"],["/head-first-JVM(4)/index.html","964cd272c5d6e851f4e5d6e7f7f69295"],["/head-first-SpringSecurity/index.html","c3b28cd8110cc9d67d20e0e692e22925"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","a5187c435302150afc2f7a49fe1d81f8"],["/heap-sort/index.html","35c8b19cf59aa39357a222b82b9a3e71"],["/http/index.html","620cdc2230e8a8546c06148ae981be16"],["/huisu-algorithm/index.html","881f385ad40f1649e8014ad5555303c2"],["/indefinite-integral/index.html","544dc3b2f9c41239db0538f0fc40e35f"],["/index.html","d2f33b2d33a7c408f3c63c6f5b812845"],["/infinitesimal-and-infinite/index.html","8f83dd4a98363e4210e276b791965f41"],["/interface-isolation-principle/index.html","181930c0befff15dc05636e5f8e44c31"],["/interface-test/index.html","b864b6e225b82a0c291bd0c6a24882ba"],["/intermediary-model/index.html","2edeb8d596bdb01cff795069bc43b6bf"],["/interpolation-search-algorithm/index.html","eeee86851e2f3512a40b506b105cb944"],["/interpreter-mode/index.html","39c40b997f8440ed1427471f99dc22a8"],["/introduction-to-computer-network/index.html","72ada2d88bb83707c0ec7142160e4852"],["/introduction-to-operating-system/index.html","c7ea4d3985747b792c3d846c17d47e43"],["/inversion-of-control/index.html","4ccaed29e2b9d40ad06e572cee67a241"],["/io/index.html","38deda3e9693abd66f1764755771aa9d"],["/iterator-mode/index.html","fffe2e0a339d4d635c295398e2518ded"],["/j2ee/index.html","2307205666c4b8a7d3da6c0cc2da9d2a"],["/j2se/index.html","d2be0140822a5b7bcd23737b440e58e4"],["/java.lang.String/index.html","9b4d5da64ed51578c190fe83c4c2e2f8"],["/jdbc/index.html","da57fbc1a556ce86cd2f20baabdf96f2"],["/jdk/index.html","376366979fdeafaf68bf3d9dad0b0703"],["/jmm-memory-model/index.html","249354d7922532cc2f5ff3c38398fb49"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","b2846d15594363f0ea3f39594a9e9f67"],["/jvm-method-inline/index.html","a0a1e21600c7ae50ba347af4b60d24c8"],["/jvm/index.html","f27b184b3549efb078aa43fc244a92dd"],["/law-of-robida/index.html","804d079580dab2ad0543d5bd0888e341"],["/limit/index.html","4ed59d3e578801414f6e5aff5db5e3a2"],["/linear-search-algorithm/index.html","d60e2bb4cbf0067f01ff395d52d18d10"],["/linked-forward-star/index.html","506ba56b963d25c37838cd9f6d7b92b2"],["/linked-list/index.html","9d208f1e8b51a581048e7ec38ac8cd98"],["/linux/index.html","7aa9ac7e9a54e4266905501cc80c4f39"],["/liskov-substitution-principle/index.html","ffab88c9e3e81a5d178b92e242ddf2b1"],["/lock/index.html","4ffafcc76b82f2aac4c6ec8847729861"],["/lru-cache/index.html","bdb0b5baeeec1fe1d34a224f7021555b"],["/maogai/index.html","3401337076d484bda8622248d26d5c84"],["/memo-mode/index.html","f2e9123cb300bdf4f9db2b263809f021"],["/monotonicity-and-convexity-of-functions/index.html","d0e2a3e2a23f0523f69f08bdc4ece8c9"],["/multi-function/index.html","d15419a82b9594907e8c0f026536934c"],["/multithreading/index.html","b65ebb8e4a983defa642e0caf515c289"],["/mvc/index.html","d4f4efc25bf8c4096c07440963b9f075"],["/mybatis-cache/index.html","beae35458f93d6a6a98ce0916c92ba4e"],["/mybatis/index.html","42d43ab58a16d05aa4b97323f88d1099"],["/mysql-index-wrong/index.html","6302c7eb9968f56bde32509f575ec84a"],["/mysql-struct/index.html","5063a80833b4a6a3dcd3a3e93f1b5362"],["/mysql/index.html","7def9c612db2a8e52b0e3578b0dec2e1"],["/nacos-service-registration-and-configuration-center/index.html","211fe1daf2f2eb32e373f8491c635fde"],["/notes/index.html","0ce90915b781780fedadea607a482f82"],["/null/index.html","0df2b382848207efa16cb843b9942b02"],["/objectoriented/index.html","d1177d2b7c521bb52ce980ffdfadf078"],["/observer-mode/index.html","80d67a52219e01c800a2bcc96d2fd373"],["/off-heap/index.html","d6e72568a54b0e8b71da015594239739"],["/operating-system/index.html","9ec0c2d5c78c2027c44dff99f8af952e"],["/page/10/index.html","ceea42d058f2c47dc2c1cba1fc1c53a6"],["/page/11/index.html","b4ecebe9bf9ec938db14d6e762068b7a"],["/page/12/index.html","c8109c3813ce742c240988ad38b25033"],["/page/13/index.html","d49087a1fe935d7bab3baa0aaaa1bb75"],["/page/14/index.html","39a0abb7587d6bed8587f0e1318653a3"],["/page/15/index.html","0e4d53220216b3ad78174044f2b3a9fd"],["/page/16/index.html","d4f08e493a3e1d2121212cb95fa4e033"],["/page/17/index.html","144e9877bb1aea7c4d4e3ba77a85cdf2"],["/page/18/index.html","b3f93816985feebb9d37320f34d46557"],["/page/19/index.html","e357cc6757b93268408cfed9cb4f00df"],["/page/2/index.html","6f5b1c28f0a18cead9a77588bb29e3ab"],["/page/20/index.html","3bd2a91e3355ea769273c8ab0aca1c28"],["/page/21/index.html","c2506cf1aa8a0e8022735b7e4a63c365"],["/page/22/index.html","05276036d5c3af4c4b26f06a1896b8cc"],["/page/23/index.html","31cea9dc5de9326985e41423c2630985"],["/page/24/index.html","c25e5b761dead2423f74a4115568063d"],["/page/3/index.html","382e5e1b7046acf9d2a91170776d296b"],["/page/4/index.html","c45cdc33e91cd99798394bffb4c1cc44"],["/page/5/index.html","ec22f81dc7958c87b44e2660f5b1b865"],["/page/6/index.html","c5ecb89cc7d592c62769dd8439dda15a"],["/page/7/index.html","d4cfa53e8b78881ee448c4ad6824fe7c"],["/page/8/index.html","5ea0ddf3ecbd76bb66e5b2f493592a2e"],["/page/9/index.html","3657b1edfd40c78114a4ceccd7ba2f64"],["/palindrome/index.html","3a58fa19ad8f3a2a6a66eb370e2521ca"],["/partial-derivative/index.html","0be37129c2c7967a4029d7415acde5fb"],["/pass-by-value/index.html","6488ac8f21051626c0503decb1db914d"],["/pictrue-bed/index.html","922f5c4794c0627aaa885d22650fd67b"],["/principle-of-opening-and-closing/index.html","b45ad1b5d3bc3eed279c8c0574f1044f"],["/principles-of-computer-organization/index.html","e09b2ab9b69f9cb1783dd49bf97ab679"],["/program-test/index.html","46dd3220e38139b7074e7e52beb4053f"],["/prototype/index.html","7487ea6537aa960f243beb3a6354ea43"],["/queue/index.html","ae50c01d0cfa30ae79870205ae44580f"],["/random-weight-distribution/index.html","ff6851a917c0ae525096b38b5057a8d7"],["/realize-modular-programming-with-functions/index.html","56224ef4b4700a0718804811d53837db"],["/redis/index.html","1d59db8c8384b391c1bf28295e2aa7aa"],["/reflection/index.html","f6670f88a17c0aeccc98c9b17d6c53b9"],["/ribbon-load-balancing-service-call-degradation/index.html","db23faccb8ead8e2d32b0526212ce6e3"],["/round-dp-algorithm/index.html","99dafc3debceaac507b6273fd07e409c"],["/seata-handles-distributed-transactions/index.html","a7e1a06928f186caa92bd4476a3fdcc2"],["/select-structure-programming/index.html","6d15449591a40ee25f4ff289d7e867f5"],["/sentinel-realizes-fusing-and-current-limiting/index.html","ea7c2e1b91812ff30908c1758e68e29b"],["/sequential-programming/index.html","c85cc1c194c62bda85ce508bea540bc7"],["/series/index.html","ffc3ad98d617a2cc4e6c4ecab2a34170"],["/service-worker.js","500d3fce70fbf7349d0d0b86c0e56642"],["/single-point-login/index.html","fe6c7b13f4f52f2addc858ec3df5d7ac"],["/single-responsibility-principle/index.html","3502e094a1d13a1d04640792dab331b3"],["/singleton-mode/index.html","72318f62587f22a5397eb67c5f60fd0f"],["/slidingWindow/index.html","0a71d385e1e83da0a90a3db0eacfb42d"],["/snowflake-distributed-id-algorithm/index.html","6551bed04668927749aac6f107eae6f9"],["/sparsearray/index.html","56d88848b891e2106436c88aff6f9821"],["/spring-and-jwt/index.html","ee8fb9141b13c70726f469ceb33fdb6d"],["/spring-architecture/index.html","c4f4f08ef4150bd66735a4e8c7ea7017"],["/spring-relate/index.html","c99efeb9630f3bc55fbbccb738f29fa8"],["/spring-springmvc-mybatis-integration/index.html","614f12ee84d5cc2ce46ae045500b4a66"],["/spring/index.html","bab3ab28f5cfc7de39b6948554c13ac9"],["/springcloud-alibaba/index.html","cafbcde3d545a910f46140253a5fc9e4"],["/springcloud-bus-message/index.html","bcf6a113916a674d7dd9b415b3133308"],["/springcloud-config-distributed-configuration-center/index.html","d784b97817ee8d3ac9b1dba46b038e2e"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","58a18bee04da370518847055d347927c"],["/springcloud-stream-message-driver/index.html","955b959c2463aec4e6b0fcc5774f3e20"],["/springcloud/index.html","0baf1d6dfbc72154b5e561d2f66e56a3"],["/springmvc-environment-construction/index.html","eff5e3429d0c1c9365194aa5209d1629"],["/springmvc-work-stream/index.html","be5c2d87567be58e4af4fd18db9f8f6d"],["/sql-injection-attacks/index.html","4dd42fb5fd18c43d8e30e8364e10fffc"],["/stack-simulation-iteration/index.html","fae2b8933f878785d0c8fd41c389146b"],["/stack/index.html","8c3d897bc30556d60c72517e54b82fdf"],["/state-mode/index.html","750b8280a98c231bcfab1e63005555f4"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","27dbcff440c51197f724d08d1c204f43"],["/strategy-mode/index.html","cab9e30a09eaf108208e6a37d3d3f9ce"],["/sw-register.js","44929cb89b220f3acd0e9f86ad7153d0"],["/synthetic-reuse-principle/index.html","24cadb64079f171e045136ee519ef4cc"],["/tags/C/index.html","d5f0fface51fb8232dffa9da35b871ff"],["/tags/C/page/2/index.html","f3c9bca3508e6f304f9c2ae58196c2ce"],["/tags/Concurrency/index.html","1cb7c42a912da94e202e5d8922165d08"],["/tags/DesignPatterns/index.html","defbffd5346aa4abb1a2d852f0530525"],["/tags/DesignPatterns/page/2/index.html","eec819debba88ff9ee6b5bf135d35fad"],["/tags/DesignPatterns/page/3/index.html","a1ad89bada3b82c2f1d12f0c30680fd2"],["/tags/DistributedMicroservices/index.html","c6ea797350dc7f469f20eeca7547ef30"],["/tags/DistributedMicroservices/page/2/index.html","48c03d34f3c480cea7256538d9730067"],["/tags/Interview/index.html","6dace464e9dfd298b9fae1ba9cbb2c92"],["/tags/Interview/page/2/index.html","f879056b6b5aa7920bcabd91471b00e7"],["/tags/JVM/index.html","176274f27bf59ca220c898d989e2601e"],["/tags/Operating-Systems/index.html","6eabc16b0be26bc826c50f4dbfb369f8"],["/tags/about/index.html","66f55f6566f93c84dfbf0c3a12f7225d"],["/tags/ad/index.html","65457893cef67e3a6d7a2bcb7b343359"],["/tags/algorithm/index.html","46a826d438c20cdb28749c828d3dc2a7"],["/tags/algorithm/page/2/index.html","c00142df3bace5fb0c8747d38c073a87"],["/tags/algorithm/page/3/index.html","4afd8e4a82e3a5b484f5290fda804965"],["/tags/algorithm/page/4/index.html","ce799aa96326f59e9c58ca6e3a5f89c7"],["/tags/bug/index.html","20d1e6fb17c81d97e21d76d65199ed24"],["/tags/computer/index.html","cbfa8a9f70ad874132931c8fe2ca5b7f"],["/tags/data-structure/index.html","ae30bd4c9be9b62df3274a4c4320eae4"],["/tags/docker/index.html","ab37a084dc7d07cc9eaff9a82a38dbd9"],["/tags/famework/index.html","8dc78057c91df9267f7423c3ff0dd7bf"],["/tags/frame/index.html","3d570f5383a191bea322c4d7860d8406"],["/tags/frame/page/2/index.html","e2aefc42500ce106818e278dbe5e1c5d"],["/tags/front/index.html","df3246e440e6922d51f439d76f3efc5f"],["/tags/index.html","762ac5c0bddf250b394119acb5d1ce59"],["/tags/interview/index.html","89b36a044e4d5d1357040f3c4a9a48cc"],["/tags/io/index.html","f43a6ed77ca08adc1f2974ba15c04cd3"],["/tags/java/index.html","ad445bcad2dd7161b28554f02a28f578"],["/tags/jdk/index.html","529d5c5e6210915bceba22e288b8badf"],["/tags/jvm/index.html","830bb7f302ee8ddeda394d8732c3849e"],["/tags/linux/index.html","c96a5712c188ca8fb8ce0bf828c9f50a"],["/tags/maintain/index.html","1ad44861ceaf0de676b0f9a1745ee08e"],["/tags/maogai/index.html","2cacddec58ae04bd448f33b43f32f538"],["/tags/math/index.html","d0317b088fa15bdf5aa001114db666be"],["/tags/math/page/2/index.html","4a6b1a30a15c4f151d8ac7b7622fda87"],["/tags/middleware/index.html","cdff763e3b2c229c3765da4edd68b0bc"],["/tags/mysql/index.html","6a068256f24f2d8bd1cd21fc0785357f"],["/tags/network/index.html","10d979ab173a105caf5e0990b621d1d4"],["/tags/project/index.html","dacdcfc30d8087c7ca5c939a9328d167"],["/tags/security/index.html","4e780eedfefcbf46ef5b07929d021723"],["/tags/sql/index.html","2f37316ad802215f99aac526623a69aa"],["/tags/test/index.html","342302b5d03709b32117383f0109d490"],["/tags/think/index.html","fae7d414d2f1d6e51e9964d9b4b303b9"],["/tcpip/index.html","157ab7b4260962c4ccfbd0be33681b79"],["/template-method/index.html","690ab9f77e9600abef5d649fd53ba5c2"],["/test-case/index.html","e8a426430e0f68cd79cb2ecfe22c1cca"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","b4e38a1a54edf492b7bfa317b5ef2c84"],["/thread/index.html","5cd8c65f139e6ecba473aff521ab78ff"],["/tj-horse-racing/index.html","16b51b78faee564d6ba384fdd4c1e70b"],["/topoSorting/index.html","45f3f040ac9d0d855eaa11580c4979d8"],["/traffic-monetizationaccess-to-google-adsense/index.html","7e95fe4ef08cd833f181a09ad8ae5a3a"],["/txCharity/index.html","1d2df7c4a62493480493340011deb622"],["/ubuntu-set-ip/index.html","7db9f7d6a523002eec510bc80fa4e415"],["/undefined/index.html","6ab012bda3d57879fac6461391afdd12"],["/use-arrays-to-process-batch-data/index.html","7e8d3eb7333271fa8efa6051dc1a6413"],["/use-of-springmvcmodelattribute/index.html","9bdefc415bd9cb89c6ef1c790019d7be"],["/users-create-data-types-themselves/index.html","2f4fc915f2965ef1434391a8c6608264"],["/visitor-mode/index.html","315db095afb45190cd3f0979c612979c"],["/what-is-milk-and-why-is-group-wise/index.html","49eb8c15e8878dca1f58f9ef6af7a388"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","8a6e968b0edb3d524135c74a1f97f0b0"],["/xss-crosssite-scripting-attack/index.html","2f692b62482591857001bd88f518582c"]];
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
