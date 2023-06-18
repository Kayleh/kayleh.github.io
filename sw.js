/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","62dbec7ad2ecf7a338705fcddf7d1aa9"],["/404.html","54208d60337e90d1a79a7541fb65c37c"],["/404/index.html","55ca74ef08db2d345623e7866750a6e7"],["/7-sorting-algorithms/index.html","0659ffd6102ad783436726cf53ff59fd"],["/AIO-blocking-model/index.html","c1c1a5eb0b734edab5fac383561e6122"],["/About-Snowflake-and-Consumption-Degradation/index.html","91b9393f3c8edba2106eabc17384797b"],["/BIO-blocking-model/index.html","01864c8b6c4ff137d9a9f5756f446df8"],["/Bloom-Filter/index.html","7e62ae2935b11289f65772927efeaba5"],["/Boyer–Moore-majority/index.html","0455804c8fabc9f75db0ffecf6e48559"],["/C-algorithm/index.html","7f0209379eea76251261d5a87946a6b7"],["/C-programming/index.html","34d2987125740a20e3a6e86769600c0d"],["/CAS-&-AQS/index.html","02ea4ab43aa3b27dfb75598cc805bb35"],["/Comparator/index.html","65bff6316292500548894d3764910018"],["/Differential-array/index.html","7dcbdd6b41f4e6eb2784517aa5671f59"],["/Download/index.html","0bb69a3b9cf83e239c3a4976389375b9"],["/Front-end-security/index.html","b27fd48a8f4d4e014a41f9082740d70a"],["/Good-use-of-pointers/index.html","93328886ca28c2fbbab96cd8c7e8a31d"],["/Graph-degree/index.html","2183cc9564b0423079355435979fed92"],["/Greedy-Algorithm/index.html","786c11493a21a64e8c79472d40f63651"],["/Head-First-Map/index.html","e6f4991329d8192ab78c1bd58e9dabd0"],["/Head-First-Netty/index.html","9d3e9d84f22af295577b79cb13283d26"],["/Head-First-Nginx/index.html","3128099a2687ec8cf5e9860162ddb4f3"],["/Head-first-Spring/index.html","6dfd58c34b24e82308eb816eae3c6d17"],["/IO-model/index.html","d55f710b3c8c179c776ce82ee6a97d07"],["/IO/index.html","235975cf857a22f1ddafcc657b412b82"],["/Implement-a-lock-based-on-ReentrantLock/index.html","459969f0df13c2ca7e14e2f8f5e296e9"],["/Improve-Robustness-(1)/index.html","e67834eb99defcb84049b8d107f5e622"],["/Improve-Robustness-(2)/index.html","f927438580f6464eb564e0fb2fa3c4aa"],["/Integer/index.html","4d8624b167f042bfc1d0cc43bd3ddcee"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","a83fbc865bf32f57f1389944d326c912"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","271ad30fc47b5b43509283f9335c26d1"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","0d04e2d00f3f7728cd4d703555b2163e"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","3a5cd3a2ce226db3850b0ff600935706"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","4cafdc5ab3125b0e3c004956c06ba857"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","7ba2802dcee93ddf118558b13de47630"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","2c3dee30d5c8e32c1030087ba5d902ee"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","b827c5560db187ec843cf0581af33f68"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","3b6b5225ed1cceb911253cca4729c1fc"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","8cdb52c31833338915582e3974867149"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","acff544c07496a308f3c2888e43c41a9"],["/Java-network-programming/index.html","7b2f94425ef838cad8cc9f81923438e8"],["/Large-number-operations/index.html","c64f3be74e20b9a21c4caab948ca54f1"],["/MYSQL-MVCC-&-LOCK/index.html","2837eb7a27324e74e92301aed84a946b"],["/MYSQL-uuid-and-page-splitting/index.html","89b7b5425169c7cae5e9646376176d56"],["/Minimum-Spanning-Tree/index.html","c0328684ead19974426362c135fb99fb"],["/NIO-blocking-model/index.html","e261453aeaedfd04a9d769e95f5935cf"],["/Nacos：Configure-MySQL-data-source/index.html","864a1b997758fb359850c2a49d27d965"],["/Native-method/index.html","36c0a4c9620f3cec212466c511934a21"],["/PriorityQueue/index.html","72da7a44def7cef6bb887b57022cf009"],["/Proxy/index.html","8bca43c7e2bc44216ec0a9d4a0fb69a5"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","89c6846995a2a7d5c4d9a16f6c8ef21e"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","154deb9302f4f0526ccbb5eb02a75d0a"],["/Reservoir-Sampling·/index.html","9ca00fcf868c7bf416346b5dd25dee18"],["/SQL-injection-vulnerability/index.html","3f3a1aa13c119b01cf6ac72c17e07e91"],["/Sandbox-security-mechanism/index.html","ae95337e1da5c7e1c3485296bec1aab3"],["/Spring-Cyclic-Ependencies/index.html","c3e5b911453c62efd2b23c5c6ea8716f"],["/SpringBoot-startup-process/index.html","3fcd35e58bfdad9be350e0d6e644db66"],["/SpringSecurity/index.html","227266209b2dbb65af08963554d86146"],["/Thread_Pool/index.html","1246099ec1edb7f7aae266bf47c485d0"],["/Transaction-isolation-level/index.html","4cea4c9480d6da18f7250db3fa037a82"],["/Unitest-framework/index.html","c2d7f90350028d6d7f21323866f9e16b"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","47ad69166b367dbe6c8ae9ac8a44900b"],["/about/index.html","3422db5c86b2a9a3b37e82bd7b34dd59"],["/adapter-mode/index.html","60c4eb477f506a80a4afe35221a3e15e"],["/adjacency-matrix/index.html","523739be11ac5fdc487dbb9fd1be45a8"],["/adjacency-table/index.html","42eabfabfd9398b0e2c000d2e482898c"],["/agency-model/index.html","ea92dc7ed1dbfe28324caa5a97920e34"],["/app-test/index.html","ec9b2b8c915c97c74f9fd08ab21a3460"],["/appearance-mode/index.html","5fea2c7cac9a355e6f3f95b83da49d81"],["/archives/2019/01/index.html","075f38e8eaa1dd7b34b7ae67549f82a9"],["/archives/2019/07/index.html","35345101c9b7c2b8b1429253df2bc4a5"],["/archives/2019/10/index.html","62760eccfb824267e8a237af5818df17"],["/archives/2019/12/index.html","4ba5561114d720497028e257374fcf1f"],["/archives/2019/index.html","1ef9d26ab03064bfb7677961bae78cdb"],["/archives/2020/04/index.html","5b40c8c00440c0767f835d4820ca6851"],["/archives/2020/05/index.html","c32b5a97269418cf360a70f57ae04011"],["/archives/2020/05/page/2/index.html","09247979d03bd2e32318e31df9f3f047"],["/archives/2020/06/index.html","6798ab88edd022d7482a33625be9664e"],["/archives/2020/06/page/2/index.html","eed3de161a5a237f7d7f112780b9d735"],["/archives/2020/06/page/3/index.html","2048c5fe55ffc333a3cb9654868edeef"],["/archives/2020/06/page/4/index.html","9712dbecf5862d0b5ae1d90c10b026bf"],["/archives/2020/07/index.html","198504188da4f2bde34e466b184348fa"],["/archives/2020/07/page/2/index.html","a2e38ebc2faba73356c0039d96751bc3"],["/archives/2020/07/page/3/index.html","299821262c0be2f5ba1af1ce8998e957"],["/archives/2020/08/index.html","08db4a894906764e60ce16251f7c7d90"],["/archives/2020/08/page/2/index.html","c249ecc50663a94d75792f438e1b618c"],["/archives/2020/09/index.html","a285841ffa3e639f3458e1535d84d78c"],["/archives/2020/09/page/2/index.html","7087d8af05e046fa38112e178037d96e"],["/archives/2020/10/index.html","7d95b2b04c7fe3b0c557e4cf35f352c7"],["/archives/2020/10/page/2/index.html","9739343303ba39d7e2ab6c3545fc0073"],["/archives/2020/11/index.html","56aeebc4089bc95a5ad00e33182eae23"],["/archives/2020/11/page/2/index.html","0fde26223d85e3ba5302e37aa693c77a"],["/archives/2020/12/index.html","ef94b76ff9fdee716a01dae72000c309"],["/archives/2020/12/page/2/index.html","396238d6dac1c0103a19860910e917a4"],["/archives/2020/index.html","25aa60fecf34bc278761e66327b07b30"],["/archives/2020/page/10/index.html","2189b9fdf02433ee0d991233432eb375"],["/archives/2020/page/11/index.html","f1cea39ebbb8c459a7558ad8bc2f9105"],["/archives/2020/page/12/index.html","4862c93fc5756394143216b1d24f1fcf"],["/archives/2020/page/13/index.html","17579e5646d114726749488f37e04135"],["/archives/2020/page/14/index.html","83e7ddea7fc9be449be08c3dd6aa9db5"],["/archives/2020/page/15/index.html","46504f214a17dba1d636a3be49121105"],["/archives/2020/page/16/index.html","b22a95f507ca406d56a259873d3c931b"],["/archives/2020/page/2/index.html","e8e3009869aa81856a3cc6564950effe"],["/archives/2020/page/3/index.html","8d857df7d706d8af3c8119ab3138ea16"],["/archives/2020/page/4/index.html","b835dccdb9628aad07bf2141e2f0bfa4"],["/archives/2020/page/5/index.html","1407fd7baecc0598960e1ecb97434f79"],["/archives/2020/page/6/index.html","edae6a64a67619eec46e1b4b5a12e4a1"],["/archives/2020/page/7/index.html","db07e1c15b09a2e5d2a0f8b476ca7013"],["/archives/2020/page/8/index.html","d5a131dd8c34ecc8f73746d1393624e5"],["/archives/2020/page/9/index.html","2e18cf02c344647b255a487af13fa7de"],["/archives/2021/01/index.html","3424d146bcfb83cca4fd3c3aeeadb575"],["/archives/2021/02/index.html","67963a04cd988fe7a67c520df275efaf"],["/archives/2021/03/index.html","cf7bf1d7feddadd980462c3e52e38c2e"],["/archives/2021/04/index.html","e29faf75bf372f7fd4cfdb4f51f85544"],["/archives/2021/04/page/2/index.html","e701acfba32063d9b794f0d2e37729bd"],["/archives/2021/05/index.html","173dd8f52730c26263c830cd38cf8831"],["/archives/2021/06/index.html","e135f29764a3dcb19d28eed6beb51650"],["/archives/2021/07/index.html","0de8298e94565b74ebafa1bf9e1aca2e"],["/archives/2021/08/index.html","95fb0f682f477cafa5073770b204fd76"],["/archives/2021/09/index.html","e6f50a98e4dc9d6d6de3df22463298b1"],["/archives/2021/10/index.html","92c4c447d94f64743f8be2f3c08bd9ed"],["/archives/2021/11/index.html","d75e1db57569102627ab88ebdafb3010"],["/archives/2021/12/index.html","9e7e4fc72ca0e05edae9cb320115b922"],["/archives/2021/index.html","78ba8bcbc6b50ed6b7a1733f30661a54"],["/archives/2021/page/2/index.html","c5e62a05555392ba79f104f1f59c6fa8"],["/archives/2021/page/3/index.html","68fc475d5be2bf0165481ea43705ee26"],["/archives/2021/page/4/index.html","32adb6910faf08f81717d21727d55517"],["/archives/2021/page/5/index.html","068ce7e78536ca8c7136d587f73dbafb"],["/archives/2021/page/6/index.html","db6d2af4f335b5b3281e5ac44d2a048c"],["/archives/2022/01/index.html","17a6d10b6161fd2b4956f658a5a32e31"],["/archives/2022/02/index.html","ec62eb580443353d998aa122157a3065"],["/archives/2022/03/index.html","b5453d6dc40cba5d0a779b3345553f96"],["/archives/2022/04/index.html","3e3a1b515ed8210223ec553b0e8338b2"],["/archives/2022/05/index.html","d982a12356f9071c12f2c830aaf15a15"],["/archives/2022/08/index.html","351993f2a970b0b6f13c80171f487802"],["/archives/2022/10/index.html","55d463700eeaa041e5892df6ff295652"],["/archives/2022/11/index.html","757fbe9f9ab64d57a65fe380fdca9abe"],["/archives/2022/index.html","f9ba82f74fd443dfe95deae81d719081"],["/archives/2022/page/2/index.html","87bdb56681b3b0bca23afd3d3964ce95"],["/archives/2023/04/index.html","16cc7e82b3262b7b1438d0d9e8f42b2e"],["/archives/2023/06/index.html","270b279daf796218d8a2686c092cb3f6"],["/archives/2023/index.html","000753cf1adce81b5ff2a7a7a0db15b3"],["/archives/index.html","4d54b8f67dea80717b02c6623da838af"],["/archives/page/10/index.html","666d783e16fb3451cd503df4722ed2b1"],["/archives/page/11/index.html","ed00d52547cca658d3118f329da401ea"],["/archives/page/12/index.html","39e6e1440130694b075108432129e34b"],["/archives/page/13/index.html","cb546b254a998b53eb0b0b6eafbbb9b0"],["/archives/page/14/index.html","279045983ed9cb19d8429ded4d0c8ee4"],["/archives/page/15/index.html","83d71fb6a710a6f25515e6d2e464055d"],["/archives/page/16/index.html","37d0bb823dd98a4e419ecea7e7ceef19"],["/archives/page/17/index.html","27ad5fbd8ee5b2bd48950551ddaac775"],["/archives/page/18/index.html","a8f5bd53587bd23aad2751c82e0bc2ae"],["/archives/page/19/index.html","f3d83267718549d46d8631b45dc567d0"],["/archives/page/2/index.html","ebbbd70b168cc074ad6a909497f1666e"],["/archives/page/20/index.html","086fd91ebcbc4997443e6f18b4457a6b"],["/archives/page/21/index.html","28ae004a1964a0a6a686229489b67258"],["/archives/page/22/index.html","de2711394e0e61a5f6a7197ab4047e55"],["/archives/page/23/index.html","e448203551418fc42da3db53359f544a"],["/archives/page/24/index.html","fea2e95475d96fc26567da2e9c40f9d5"],["/archives/page/3/index.html","5fa2be48a134c47301141c43412c9e40"],["/archives/page/4/index.html","127700c72e911516c1704d4723bc6fc3"],["/archives/page/5/index.html","0a79ec74e6c04180b37dc8e13defdf02"],["/archives/page/6/index.html","6e098a0d8dc4c9bedbd279d3e346825b"],["/archives/page/7/index.html","0db524f9eec1ef3e027cfef2699ac55a"],["/archives/page/8/index.html","abe9b5b1df8b20d09d983507cb333400"],["/archives/page/9/index.html","9a2adc38839d0323895a9c455ee6de4b"],["/array/index.html","04e4ea5caa30949d0dc99d7d5e4f565f"],["/automated-test-katalon/index.html","05708e4a810e96c28050bf264a76e311"],["/automated-test-selenium/index.html","aff09674dadb70da3fd8e5cb58bdbf62"],["/back-to-table-query/index.html","e6c4823f7a9da356a1093fa00f65c8ff"],["/binary-search-algorithm/index.html","391e23729a7a5de14d0a09129117e47d"],["/binary-sort-tree/index.html","2e95d1a70afb09adc9317edaca03bf3f"],["/bionioaio/index.html","abc12720353128af00143ae62546b2a2"],["/bridge-mode/index.html","9efc3c941148ceb9392b534679c6c2c1"],["/builder/index.html","e077b905a180c1e890aee8e42c501577"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","480a3570f25fc896e852ab56b2fcf205"],["/cache/index.html","bc48a12daf0023dcbc10d56759c815b7"],["/categories/C/index.html","e62c86e129b9dffba4d811728c653412"],["/categories/SpringMVC/index.html","3d24d5bc904901135b7d347d275fc14b"],["/categories/categories.html","61786d44c9ba5a4f5ced798cb21f4fa1"],["/categories/index.html","5b674501266d2bea90a783f2c08892c8"],["/categories/linux/index.html","6d87203bb7b59311946346be492f3e82"],["/categories/分布式/index.html","3430f997ff8904ae2a505dee1fff9097"],["/categories/分布式/page/2/index.html","7b73eb9a6078307e3b20847d5a66945e"],["/categories/设计模式/index.html","7f7bf1384f43e4d43d6b3a90508d8205"],["/categories/设计模式/page/2/index.html","efbb09b117d1551622988849fa95a8c9"],["/categories/高数/index.html","bf5c372740b5ba2c5b06e9fdcfcfc6b5"],["/chain-of-responsibility-model/index.html","aad9dbc2ec32922ada42971f8a876fcf"],["/charity/index.html","de929562880383b650ccd5d8c8600e82"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","7352bd8f41c8a9a7c16f2e96d70098ab"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","07659e87589180bd4a19153159e8dd5c"],["/combination-mode/index.html","4d8539b0506ea57a5a7b02d643fde713"],["/command-mode/index.html","173d86d7a2fad286bf524d7fef1b605f"],["/common-commands-of-unix/index.html","14a4f814f974e9e8c650869a03c5104f"],["/computer-network/index.html","1e42a490b0c64fa27fa8303e9a20f6f8"],["/concurrency-principle/index.html","d1d36986eb3449490beec10cd3444209"],["/continuous/index.html","cccc231e24ac2f5f8153b78e24e09ad8"],["/contract/index.html","6d93bf7cbb4dbe971b1b6973e72adcad"],["/create/index.html","08f4d6530b0a13a3258ba7825d5953a4"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","ed91ac6b5f939c911978deb4a14d6d03"],["/data-structures-and-algorithms/index.html","5278e9ace2c76e53903ed9e424b4b6ff"],["/deb/index.html","368b2828e8d1ffc90986009460f455ba"],["/decorator-mode/index.html","f8241ef3a4b995a5aeb4e2f36a10cdd8"],["/definite-integral/index.html","d60233b3e07d1e6c6dccd0b7651715e0"],["/dependence-reversal-principle/index.html","cc998051cfdf81d3ee5eebf9767919a2"],["/derivative/index.html","e99cd3a6b97896b840d742d763a0cfab"],["/design-patterns/index.html","8a1deef8c1952145db5c6d122495a8ce"],["/dic-algorithm/index.html","f335e83cdc2a0591243da48eaffdb9eb"],["/differential-equation/index.html","98756f89b75961024810622eba4fafab"],["/differential/index.html","e68b5fad5ef0d963bf93144cae9d2224"],["/dimits-law/index.html","1065cfc9f7f50c4ffb4859bd3b75de38"],["/distributed-lock/index.html","9fee8ac3784762f0f48acfe1cb4f500b"],["/docker-virtualized-container/index.html","e9d43e39d5b59683add0b067253ccd2c"],["/double-integral/index.html","3894a59142cedf3e68dd87251afc5a3d"],["/dp-array/index.html","e249220da588c1ab9050c3439b841b20"],["/dynamic-array/index.html","cb5056a9864c9d700449faf3390798b8"],["/dynamic-programming/index.html","2dac2480d7fef4a5fd784901bc4bca07"],["/edgeset-array/index.html","7fd79de3d93ce8d2b738e787a86c6d56"],["/encoding-algorithm/index.html","ae1be670835cb126a1e49591524b47d1"],["/eureka-service-registration-and-discovery/index.html","64b2b90456b53ee97f4376952d75f800"],["/extreme-value-and-maximum-value/index.html","c6f9b7edac9df1095aea7847e2ff5f3b"],["/factory-design-pattern/index.html","6847cc59b1c151336dc25558786a4e73"],["/file-input-and-output/index.html","fa61eb36d9cc0d3f2e6a49134e1c5703"],["/flyweight-model/index.html","f4686bba52354cf4657ff8f78d1310f9"],["/friends/index.html","84a24a00dfe35fe7c329231ba972b9cc"],["/function-graphing/index.html","d02839857b2de08bf0604eb2b1fb0ece"],["/gateway-service-current-limit/index.html","d6de86b8969008cdad5425d34c602c49"],["/gc/index.html","7a06e3eb6e86eace4cca3ec1bc6e6a89"],["/generalized-integral/index.html","1c42d6a2112a48663399f32e433d6916"],["/google8102e2f35ce9e391.html","ab09ed748707300a22edf01e8103bc16"],["/gulp-compresses-static-resources/index.html","82da27e1eb23d6625ed0c9a4fd27d8c7"],["/hash-algorithm/index.html","2a7b32be757b864280898a3efaaf3d3f"],["/head-first-JVM(1)/index.html","9594c4b70d0cd8d4ac640f3936a79a3b"],["/head-first-JVM(2)/index.html","6d8388f4ccac5f7d1de6cd14dca2a990"],["/head-first-JVM(3)/index.html","afc34bcf47ee47daea2149656623a6c4"],["/head-first-JVM(4)/index.html","72fc852eb93695f17549eae0eea62e17"],["/head-first-SpringSecurity/index.html","e3ddb5b938299786c269c18636af94e9"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","fdf5fc0559be6ff9003f0b22999cd9e7"],["/heap-sort/index.html","6cefad3699600f62663718a09f76f5f9"],["/http/index.html","326c26aa2f25698a0485781d014ca299"],["/huisu-algorithm/index.html","9124526750fe1b91d503a21f135c27b1"],["/indefinite-integral/index.html","153af9f9e181667e911b12ecd557c971"],["/index.html","c7ddac73fcf211eaf6819033f15890c4"],["/infinitesimal-and-infinite/index.html","8b9a2b1c0938ca14a59b2f22049345f7"],["/interface-isolation-principle/index.html","1f933c3c3868a487c94cd6a9ff46b1d6"],["/interface-test/index.html","568a4bcf30c6c3ff865ba27037c68d90"],["/intermediary-model/index.html","c27fb4bb38b19e52f92c0d6d86857b23"],["/interpolation-search-algorithm/index.html","dfe93c4c8565193ff506d5a5b5a40c05"],["/interpreter-mode/index.html","f16bb285ac6c3a3bf9cab71fd2b0c6e9"],["/introduction-to-computer-network/index.html","80116299456febe7ddb6e1a9ad881b99"],["/introduction-to-operating-system/index.html","7b52d2f8b4b525d53b48d2ef66ce0075"],["/inversion-of-control/index.html","93b8f75f5610f637ef8113d618c72490"],["/io/index.html","0c4d58580a83a9b6120f90177bec09e2"],["/iterator-mode/index.html","290fa995294bd260447f98998f2c8fe1"],["/j2ee/index.html","08640e486d00e437a202a135d65f46c1"],["/j2se/index.html","ce7973f3a13f67075dc67857b062eebd"],["/java.lang.String/index.html","29e73b984a6214c356f583fb1a960388"],["/jdbc/index.html","a53570b4188c86a304d35643c5beabaf"],["/jdk/index.html","90af91cc32d7779800c8cd13be70e6b1"],["/jmm-memory-model/index.html","795beea01c7ffb34f4e70dfb99488a03"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","2c1e92c2ad1b767bb3733fff4c6517fd"],["/jvm-method-inline/index.html","9edc281626ee5aa214aa45b1238a91ea"],["/jvm-tuning-practice/index.html","7a8d3d3dac3ca01e1e6b5d285870a57e"],["/jvm/index.html","0825df00f702fab788550adad0091abd"],["/law-of-robida/index.html","005a179cb8e08bdddd3d7938b6f14e4a"],["/limit/index.html","32e81318ce9a3ae05d984700489416f4"],["/linear-search-algorithm/index.html","d12cf744652a842e2c0d2f9df46f6d41"],["/linked-forward-star/index.html","e95243eb83657f2c16104528a036daa8"],["/linked-list/index.html","d7f19d742800b0fa245d725932093c42"],["/linux/index.html","e5468694ab6cf6288e0d543832b5d570"],["/liskov-substitution-principle/index.html","2dd5462d327be7530797dcc21fd35807"],["/lock/index.html","2492a8bde63184ff2ef67c57a8f38786"],["/lru-cache/index.html","053ae1f2e2bd4781048280d9c5b25431"],["/maogai/index.html","2034e9eda0036cd938cf634ad6538191"],["/memo-mode/index.html","f1256cb26764fc0bc1c6ab8c4cf01484"],["/monotonicity-and-convexity-of-functions/index.html","ea00ace6b2d895269e8ce83c67de1b77"],["/multi-function/index.html","c2d95e719e5fd489c5e34c799585176b"],["/multithreading/index.html","f60add682d40190fc4e62082fb55ca8d"],["/mvc/index.html","8346f225d799769fc1c850fc283480e5"],["/mybatis-cache/index.html","4c627ecab2defa1d47656cbdb9134b0c"],["/mybatis/index.html","530536e64e46f12fcf8b1cb80a24f756"],["/mysql-index-wrong/index.html","5c9c7e83b01b9ac94ba4e444c5855da4"],["/mysql-struct/index.html","6191ce4dce30628e533e3718a9081cd5"],["/mysql/index.html","1155abc5b2f166ff1f957eb4ba9fcad8"],["/nacos-service-registration-and-configuration-center/index.html","2b98449ec39a3d7af300f1224e6d7a77"],["/notes/index.html","5dba988e8fee4dfc7ebdea4c96c555ea"],["/null/index.html","ff54d0b84ace1c66d2a49bc10bd04b56"],["/objectoriented/index.html","b002cb527c83382748c592ab2c35aecb"],["/observer-mode/index.html","a0bc1d14f9243af774e188e2630e4fe1"],["/off-heap/index.html","bd4acac58e243a3ec01625bb16110eec"],["/operating-system/index.html","570e761f178022c667c0cb580a0b6bc0"],["/page/10/index.html","1e82e29f977575d501059471e2f087f9"],["/page/11/index.html","b6fcd2daac0e7720aef38c72aada91ae"],["/page/12/index.html","91579ff11984afc7a110f953e5f676e1"],["/page/13/index.html","378dbd62d8f8fc166a3f5367e230e859"],["/page/14/index.html","230dde3283277088292b99aa4b4a6651"],["/page/15/index.html","3536f2739f124af0f28f1f40bd304a8d"],["/page/16/index.html","6eeb15de4f5469ecf3bc775785b504e8"],["/page/17/index.html","91aecc4344bc4ca1378ac4beb664c496"],["/page/18/index.html","c7441d6950f1f9ed5b219bf3d3df8fd0"],["/page/19/index.html","83992ddf739d94b4223a0488cc7b3451"],["/page/2/index.html","3a3fcd04824d2bec117b54b8b5ad7cba"],["/page/20/index.html","67c69e46abdcfb6a2dfcefa34b0153ba"],["/page/21/index.html","9691333404bf74812c05a95232a78dbb"],["/page/22/index.html","8cd700434ad14034da8ee2d6c3865025"],["/page/23/index.html","8b81ac2412df1f7846f091b39f961d69"],["/page/24/index.html","7ee7e208b5757ef7bc7fd117ceb551b9"],["/page/3/index.html","6009bd222b4a2c9c502c2ac2ea96de78"],["/page/4/index.html","2bcea7ad0d430c24a6ee22dda6d66541"],["/page/5/index.html","d0c99b474f37be57da24f754f8ccab86"],["/page/6/index.html","7b0230bafff4ccc07e4c0e4c253ee508"],["/page/7/index.html","b2c20883a8aefc91398f8b581502f58a"],["/page/8/index.html","444121b3963010249f2895d4ed4e6414"],["/page/9/index.html","8eb2232aa798877c679a5066ef81b557"],["/palindrome/index.html","272577ffc7b16830f43097398afd5c67"],["/partial-derivative/index.html","2eec3f82578bf17483375e722f5717aa"],["/pass-by-value/index.html","531a545801d900b29edd2d420375a6c3"],["/pictrue-bed/index.html","8827d45c8dbeb3ca95c0a1fc2ad08870"],["/principle-of-opening-and-closing/index.html","f1b354b3318bd49b7cfdab2db9512ce3"],["/principles-of-computer-organization/index.html","82cc600b78b02997fb52d9153d7ce7dc"],["/program-test/index.html","ac4f7a264454f9a27816fb2345cec8dc"],["/prototype/index.html","393ccad58748a9bd17d390c2bda70d23"],["/queue/index.html","9602b1be48cbcf1b3376de414d3fe0de"],["/random-weight-distribution/index.html","61e19683c1c08350d46f9699f5ef1840"],["/realize-modular-programming-with-functions/index.html","5e8533fb0b4619a577c0ea1be5576bd9"],["/redis/index.html","2a01f3a2b776c0b05dab2c71d2976647"],["/reflection/index.html","8b54d943a20702937079671327d9002f"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","e1b48c0c2cfa87e7c088b162c77b2068"],["/ribbon-load-balancing-service-call-degradation/index.html","69c32a961edc03f40a3875dcfdacd881"],["/round-dp-algorithm/index.html","123ad47d3ef30d1caaf4e1751f1d6158"],["/seata-handles-distributed-transactions/index.html","cf9d5384fcfb0e4aa6e85df9f7486116"],["/select-structure-programming/index.html","96f3a477d4588f7d20ceff3609a3b313"],["/sentinel-realizes-fusing-and-current-limiting/index.html","382412add62081564c513d80e365372b"],["/sequential-programming/index.html","c97ae840eace934dc5bfb9d1c8a8eb9f"],["/series/index.html","f6adf379382eb93e9841ea9446e98cc7"],["/service-worker.js","d878fb4b9aed448f2cca6b3cec1cd862"],["/single-point-login/index.html","50b366dc56cb13db46a5f74304cc7185"],["/single-responsibility-principle/index.html","6413220c68e57f30872fb971dd439ad4"],["/singleton-mode/index.html","98b0848bd562b865e6a1a8270b886ff1"],["/slidingWindow/index.html","a1c6d493c233d04d7d8cc827aca4644f"],["/snowflake-distributed-id-algorithm/index.html","44e535cfc7aab775f7cff83ae2bf9cd1"],["/sparsearray/index.html","3932e4e2a9849f5e1f5321af50556adf"],["/spring-and-jwt/index.html","e8a7e526e9b70c9c9460606e5f9ef946"],["/spring-architecture/index.html","0a33adb0bb6f9329ee531eea08ce637f"],["/spring-relate/index.html","a6e07cf810c85604a2efd9c38d12bf19"],["/spring-springmvc-mybatis-integration/index.html","1e593bd3e0c57176606c3b31765340e9"],["/spring/index.html","bbb1179cb0ff668fee67d7ee5b3a3d51"],["/springcloud-alibaba/index.html","e37f40caee37ab11f9db2f9869f93289"],["/springcloud-bus-message/index.html","76d1a7b76e04fd408788ea41bb794e65"],["/springcloud-config-distributed-configuration-center/index.html","4602eab5b168ca252a4231ac5f1bedb2"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","c18718215a9f042d609c02daa65186cc"],["/springcloud-stream-message-driver/index.html","9b58390c6aa2da34cf19c18db3e3efe6"],["/springcloud/index.html","8cf7895ffacf2f5272bb7a891dc7cbc1"],["/springmvc-environment-construction/index.html","531064418ac1eaecf910901446a0ff9d"],["/springmvc-work-stream/index.html","eef9ee6378fe5f83ca8e001c40bef23d"],["/sql-injection-attacks/index.html","d0dbe309e66af032cebca570a9c2ddac"],["/stack-simulation-iteration/index.html","de6450eb776b1c2908248504481efa04"],["/stack/index.html","456738aea532d8cb65d27083684fcde7"],["/state-mode/index.html","03140af341af063cd0598c02a861bb3b"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","215c13b992cf69b3a12a31c10bbd6ea6"],["/strategy-mode/index.html","2a6b00b5eee7a0bb399abd5f3b0a1f04"],["/sw-register.js","70e2fda174d2ac180ada367e0dc0f676"],["/synthetic-reuse-principle/index.html","927430c305586a7121ec35b6742600fd"],["/tags/C/index.html","cc2dbd770ac725dfb40b508a1bd86cbc"],["/tags/C/page/2/index.html","32df44b5682a3b97a3dc69754098a632"],["/tags/Concurrency/index.html","c8283afc39d7a49852164c6407df5f49"],["/tags/DesignPatterns/index.html","240591d0d979a0fbe4e6ec04e963030f"],["/tags/DesignPatterns/page/2/index.html","eee09a07b6a6e496e29b66fc23ccfc28"],["/tags/DesignPatterns/page/3/index.html","fe1ccb5cedb64346b5be039442359a95"],["/tags/DistributedMicroservices/index.html","3e36abcb0ad907bf8389cd1264250819"],["/tags/DistributedMicroservices/page/2/index.html","0ffac3cfdd2d991dc8053642326cbbb2"],["/tags/Interview/index.html","100ea9a1f3f747c2e23d035e6070b995"],["/tags/Interview/page/2/index.html","11f00d5b8547dacc71ae287f48f23199"],["/tags/JVM/index.html","6cc168b94d232a90d0dfdfda397aac39"],["/tags/Operating-Systems/index.html","5267ac207e0de8893e647c9cae9a9aeb"],["/tags/about/index.html","0db0caf885bcba5e77ca47abbc521e26"],["/tags/ad/index.html","3b8023215c4b9a40c4ef71f9f542cbd2"],["/tags/algorithm/index.html","0e7bfcadca3cfe1b38a7801e684b9b90"],["/tags/algorithm/page/2/index.html","698978e964ed602407b906cf7a5b8979"],["/tags/algorithm/page/3/index.html","1697ecc0f7db5a27f052f969bdff3cc7"],["/tags/algorithm/page/4/index.html","3c67dc5789ec36804dd6f8772fc479e5"],["/tags/bug/index.html","7afcef8b996dafdb03ac454e77a16cbd"],["/tags/computer/index.html","ce4ab3bd0a5d790e5917acfd1aca52bf"],["/tags/data-structure/index.html","c5a2a73cda3c62d44f02c9f621952fe0"],["/tags/docker/index.html","848fa77bdf487b5d2a8e41b73d4160e8"],["/tags/famework/index.html","51c7f2338c8b87669f3abc2abe6bdebe"],["/tags/frame/index.html","f8ff562a96fb630ba59bcee3182b7367"],["/tags/frame/page/2/index.html","eb72916fd49d67812a53cfddf99b2734"],["/tags/front/index.html","7d7942c82444787e64ba4d6edfe9b2e5"],["/tags/github/index.html","66ce254656af169be2e2193a713b0212"],["/tags/index.html","de3d9f722327bfb77bf2625c7c9c9f8e"],["/tags/interview/index.html","0785e5072d4321658fb27c3dfbdfa5d5"],["/tags/io/index.html","c3d6fb0bf794660c80e5bf1df7145dfa"],["/tags/java/index.html","98e0ce3294c2d74bb91166ff2477bd94"],["/tags/jdk/index.html","ad26fe3cdf7240aa6291c5bc032d4e41"],["/tags/jvm/index.html","19e9535d44c184e3ce0ddded16b721d8"],["/tags/jvm/page/2/index.html","c0cba56fd29e472ed07e233d36d5b008"],["/tags/linux/index.html","097dd6b636ce85c089eb7b441c44a520"],["/tags/maintain/index.html","a342738c76e8a7b05819573a952b7c05"],["/tags/maogai/index.html","64432d145901f99741211ba97852846f"],["/tags/math/index.html","01c602b43e7e1f95135283d939497d09"],["/tags/math/page/2/index.html","028e9321dc3a0dab4fd3ffbc9316d329"],["/tags/middleware/index.html","2aa579ee7766ed1f371a02e0527a5df1"],["/tags/mysql/index.html","57a9d6222cba074fcd2f4215e17d2f17"],["/tags/network/index.html","87da506cc80af3426547d688d1d44d13"],["/tags/project/index.html","807cbe79ba0eee90ad74f172ad5d4453"],["/tags/project/page/2/index.html","ced797f4539f7cd432ab6c1de4fee710"],["/tags/security/index.html","1a42e50c23f7ebe8c9368b542585a6c9"],["/tags/sql/index.html","71c08d60252b4b613db2b152934f0b0a"],["/tags/test/index.html","44351057afac30dc843c6a89669e0ad4"],["/tags/think/index.html","4b9692c0113d41d4703f7eeeeeb3a275"],["/tcpip/index.html","24c48713f1e4d37441c52bada3be0aae"],["/template-method/index.html","f7f55c9dbbdba0425277dcbd71e120ec"],["/test-case/index.html","f23f81654c66aa6267d49776dbea2299"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","75f49df91e26975aa3e2f0f42e9777bd"],["/thread/index.html","3c8cc32598c6650bafad1920bd93e6fd"],["/tj-horse-racing/index.html","881836efd6edc5671720bec7d1e5e417"],["/topoSorting/index.html","2f51b6196d6ba72a4969ac903d6d8063"],["/traffic-monetizationaccess-to-google-adsense/index.html","999ddbc2b48e276432c001c96baa1aeb"],["/txCharity/index.html","0f48c2f7f8329cbb78ba2102318dd6c6"],["/ubuntu-set-ip/index.html","88335738ffc2220c9e37ec8e6bdf0dbc"],["/undefined/index.html","7175ed72c9620c4c3faf937532ca0ece"],["/use-arrays-to-process-batch-data/index.html","79913b97c4bc925ee1732e15703e3c06"],["/use-of-springmvcmodelattribute/index.html","ebcfbfcb2fca7c0138a23395f5341f20"],["/users-create-data-types-themselves/index.html","132abdbf367fc90d607d2e04ca6444f4"],["/visitor-mode/index.html","3c7f98043b176e9de41e8d9c835c2137"],["/what-is-milk-and-why-is-group-wise/index.html","af4666fe6eccc29aa80ac12fdc3d098a"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","c1e9e7ee95d39418587605bb7a274b87"],["/xss-crosssite-scripting-attack/index.html","b1032e29b4e5b8c9ef821f0ba15baae9"]];
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
