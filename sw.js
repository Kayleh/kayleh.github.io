/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","bc1bc27a6d6d31a232be770162eebce2"],["/404.html","e6907181ee2ae2a7bbdc2d0abbc264bd"],["/404/index.html","54ff7c7f6d9e584bbd69f7580632a03d"],["/7-sorting-algorithms/index.html","1db8c1f0fe6210f7057144e54e21a594"],["/AIO-blocking-model/index.html","a5b106ae8871a08fbe29f4accf1f8aeb"],["/About-Snowflake-and-Consumption-Degradation/index.html","5de492141ab81d7136d8bcd0a2cd324a"],["/BIO-blocking-model/index.html","b625ef15b58106f12e2f4846dc4c703e"],["/Bloom-Filter/index.html","7348b7acc6a06af70205e329b8008e3f"],["/Boyer–Moore-majority/index.html","cef362c89d4a160acc99aa89bc2c14f4"],["/C-algorithm/index.html","34ace22c15a022ea2e2bc3bec092eb17"],["/C-programming/index.html","aab37844234666d126aa0430a68981f1"],["/CAS-&-AQS/index.html","9554237f676c65ad08ed56c2bafaf069"],["/Comparator/index.html","6120a52af29bbbac3334d7d4f45d8fc4"],["/Differential-array/index.html","f219ce2ff47c64564dd00c03f71dd7c2"],["/Download/index.html","1bf17d0d43068508e255de984301517b"],["/Front-end-security/index.html","2e1e0402bdeb10ab445866d613e4c69f"],["/Good-use-of-pointers/index.html","05e84f796005c9fa579a5824faf3e3c7"],["/Graph-degree/index.html","7489af96faaa9ad310f34438881f60e2"],["/Greedy-Algorithm/index.html","47eb44ee4bbf34cdf80c030348c5c21b"],["/Head-First-Map/index.html","68625be9fbdf62d3299e8b8c8666cac3"],["/Head-First-Netty/index.html","eca24ab9c5cf98e2f42a625ac4c308bb"],["/Head-First-Nginx/index.html","d6e3dd9193ca2d44efe4e08da894c15f"],["/Head-first-Spring/index.html","087dcf660fa18347013ff59bbbe64b08"],["/IO-model/index.html","987b6b1f241449a9e7b91fa83e0d1424"],["/IO/index.html","f3ecb6f61ce1cffae7ccad20088fdb72"],["/Implement-a-lock-based-on-ReentrantLock/index.html","0706edb490ca265124374d1cfa57b2da"],["/Improve-Robustness-(1)/index.html","fb8547194ba2626b7be7cbbf512558d2"],["/Improve-Robustness-(2)/index.html","393b4cff98ee6510833df383cb971a8a"],["/Integer/index.html","7a8c3d3bdbedc4e6bf7073fd9d6fbe2f"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","dcd98d943cc3157d43741d20dea1960f"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","af2845f9a77e45ebdad45b8d1cbd0ac7"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","7b1ce9bc7587690de7a8031c75a73f3c"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","0f4aeeaa3740b946d464f181a3929f9a"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","b480e97c79ab465fed8894fef31f8fb8"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","989fe3003ca0de418252dc5d5d51ab1f"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","4f5bc8fe2599fd764bb86e627caecdee"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","d92b601ad4fa104bb6ec99285182a988"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","1447359f579e3c58825bdda1c485a78a"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","d6fc517f425ddb11f02a83b57a6bee88"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","3dcc769f27fb00ca020f80edcfede9ae"],["/Java-network-programming/index.html","a58e13facd13af1776c3a0beab7a45f7"],["/Large-number-operations/index.html","1533cc8f9c4855c62821d6db8b81fff7"],["/MYSQL-MVCC-&-LOCK/index.html","059cc9d9983edaa8c1149653e72814d7"],["/MYSQL-uuid-and-page-splitting/index.html","b744b5c842dd6f3884e39393c45b3f82"],["/Minimum-Spanning-Tree/index.html","7ce752d5a3b5f3462b8a60827e4c6c2b"],["/NIO-blocking-model/index.html","48ed40a5fab8e33a32c466eac546333f"],["/Nacos：Configure-MySQL-data-source/index.html","e2baadd984a7dbc2d0058ae32396ef42"],["/Native-method/index.html","1d019457a9ac174878f416955cb3d9d5"],["/PriorityQueue/index.html","df984781da6f9cd46d20615a98372922"],["/Proxy/index.html","602aa04dc35a199327fe357d3fbb3758"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","a4edd786fa897242361e7500ce5c2114"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","934225b2563c2a635a6e8a41a1a84745"],["/Reservoir-Sampling·/index.html","707feca291fd5b566e9f4a7c1228044c"],["/SQL-injection-vulnerability/index.html","532566e1035d72a96f971cc27281a6d6"],["/Sandbox-security-mechanism/index.html","a7f2994092b0e78c47a2af6c77d8ee1d"],["/Spring-Cyclic-Ependencies/index.html","04ed7e1a05107bd407d9140f86461bc9"],["/SpringBoot-startup-process/index.html","fb8eedd6f93b0e0bcefa71c30d297146"],["/SpringSecurity/index.html","3789836c2065c29c01ec81cc6efa348e"],["/Thread_Pool/index.html","4c0f3aee3056d293d8f652b61e7c5996"],["/Transaction-isolation-level/index.html","3fe2f0f01a4982725af6ab025342bfae"],["/Unitest-framework/index.html","80cdfc5ecac7dadc96251967386212aa"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","1dfb4b48d4de642f04f3e0087f1f036a"],["/about/index.html","b98ee42bedf5350063385047923f4675"],["/adapter-mode/index.html","cbb6ee55da4cb0d0bdb9c83b02d0bd82"],["/adjacency-matrix/index.html","4f1f34dc0820b593c4a4a017ba8476c5"],["/adjacency-table/index.html","14931a15e2ebef17330074f22e5de69e"],["/agency-model/index.html","2bb69ea5d7485e71b570613157a348e7"],["/app-test/index.html","10938638ffab1d7dc6ccca06889fa63a"],["/appearance-mode/index.html","56a8fc828866ed12a7de81a248a7994f"],["/archives/2019/01/index.html","5ef6f4629cb5cef71a4b867ac082e356"],["/archives/2019/07/index.html","fc150ecc2fe3634a402f15ddbc0ab0e2"],["/archives/2019/10/index.html","0b8e921864866398d829e8377b2f0f08"],["/archives/2019/12/index.html","aca42ea5686ddaa687ba0ba22db250b5"],["/archives/2019/index.html","9bea77eb9fc8c36aaf8cc74203583eeb"],["/archives/2020/04/index.html","5e7b5cb50633760979f9c5147052b50c"],["/archives/2020/05/index.html","e6455a13f291032561b618cf5877e197"],["/archives/2020/05/page/2/index.html","3a50bb4eeb83d03ace10f7b864314ea8"],["/archives/2020/06/index.html","835a225c277aadc20df8b3f26acfbfd4"],["/archives/2020/06/page/2/index.html","b491597aad51c50b4ad5b708b1a511a4"],["/archives/2020/06/page/3/index.html","a9d43f7a18699f5ad9db265605c3ae8d"],["/archives/2020/06/page/4/index.html","c3ddada4f82c19bbb192a8393fc67ff9"],["/archives/2020/07/index.html","18dcb10cc5daa3e4d6cb59e22f865e2c"],["/archives/2020/07/page/2/index.html","bbd72c3058e5ed88b1f068c8c0e26f68"],["/archives/2020/07/page/3/index.html","c1a8e5e6c08e8eae8a3a855a5b4bbb27"],["/archives/2020/08/index.html","b9388f3a3e7bdcdcf3358d2a6ff0ca93"],["/archives/2020/08/page/2/index.html","f2205693ffc79136981456230e50f751"],["/archives/2020/09/index.html","4aaa88d8c0b81766984424d8faeea700"],["/archives/2020/09/page/2/index.html","b90eaf9919192da655e2e5105ce54822"],["/archives/2020/10/index.html","55ba862fdfed32be8d8d34b697a6fa89"],["/archives/2020/10/page/2/index.html","268c9ad9d6b910dbf30263576455c092"],["/archives/2020/11/index.html","0788fa5842672fbfdeb462c79cfd5821"],["/archives/2020/11/page/2/index.html","6a7ad51f54a8e514381d1bb6ea712fb7"],["/archives/2020/12/index.html","9857c4cf9ca78d42ec50e0db1483ee87"],["/archives/2020/12/page/2/index.html","cc6a09912dbc2df9864c837bc3a52096"],["/archives/2020/index.html","9f1e524e38ea985c06170678df5eb304"],["/archives/2020/page/10/index.html","ab95c87bb2f5fa8ceca20a355800d341"],["/archives/2020/page/11/index.html","10b39539bc5c3feff3c8e9314c1fa1ae"],["/archives/2020/page/12/index.html","68d53d4e11d13f510b7994777d41c946"],["/archives/2020/page/13/index.html","6888f12cfcdb1e200dbf4f995b623f06"],["/archives/2020/page/14/index.html","9224c9e0ee3f6e4f85570e341e25dcea"],["/archives/2020/page/15/index.html","de6fe30414c2de5b7bd7e766dff26c0a"],["/archives/2020/page/16/index.html","4494c09fcce52a8493ddf581d92405af"],["/archives/2020/page/2/index.html","a85fe0d8de2d4f4e46cb9c6a588f76af"],["/archives/2020/page/3/index.html","a428096b6217c24aa9c066ac48940a4e"],["/archives/2020/page/4/index.html","e399a4e0ecf5464e1db03dde24daa92c"],["/archives/2020/page/5/index.html","faf8f47f9f1e19f24950470ec592d731"],["/archives/2020/page/6/index.html","ba0594972caacd7d6befb3ec582806a0"],["/archives/2020/page/7/index.html","13b97337a45c2d5104de8e56c740f846"],["/archives/2020/page/8/index.html","0ea4b66303e0b55cfee2bcaa40c2de88"],["/archives/2020/page/9/index.html","085d6a5868e1e90f51d44d7e752ad071"],["/archives/2021/01/index.html","a96ebcbdafe87721b76eb868fb9d3a52"],["/archives/2021/02/index.html","19541957d04af2c7fc1d1ce77a1be6b4"],["/archives/2021/03/index.html","5c94cb040177728b60bf661a8c1941b8"],["/archives/2021/04/index.html","fe29a0225b33a27efe33351ffd949aee"],["/archives/2021/04/page/2/index.html","b7ace7ccbf9a260e726df3762becc931"],["/archives/2021/05/index.html","b99be9c0d97f44ba9e1270c5c1d5d221"],["/archives/2021/06/index.html","b8e424eddc875ec60c382e6511953dc0"],["/archives/2021/07/index.html","8233479cbe512cb17119191263c6f667"],["/archives/2021/08/index.html","387a19355c7aafda77cd9bc198bec685"],["/archives/2021/09/index.html","9f142e19a6b4a44b2a0ba14ac61e7dc7"],["/archives/2021/10/index.html","8de9559ce60c64a267ad4b05ea244c9d"],["/archives/2021/11/index.html","ab0ddfada671d94f1ae9f75e48318a5a"],["/archives/2021/12/index.html","f2484cf5e81a1bad399a5af0cacd0ee4"],["/archives/2021/index.html","41d42f6047a23b95a3219536a825aec8"],["/archives/2021/page/2/index.html","5227a25df14a279664caedfa563adf48"],["/archives/2021/page/3/index.html","c38db806618c3fb8e2c84d4efb3e7655"],["/archives/2021/page/4/index.html","d3f4d86bf9cab43afe466a44d1361c8f"],["/archives/2021/page/5/index.html","868bff1d8de458a3c5a287f408e10bb7"],["/archives/2021/page/6/index.html","c5109a75a438f5643ffa7f8db11558f2"],["/archives/2022/01/index.html","2908c9d4a649eecf8bba487da632f1e9"],["/archives/2022/02/index.html","2372d209e8935d5e6449b4c47104511b"],["/archives/2022/03/index.html","526a1154062c7f41481e85745e84c5c4"],["/archives/2022/04/index.html","91b991d64c23e04d3e50cf2eb51cd9ba"],["/archives/2022/05/index.html","3c0253be6be49c87fe08a556b3b0c68a"],["/archives/2022/08/index.html","c8a1bc1cbcd8b2e94a2fae74015a9e54"],["/archives/2022/10/index.html","05dae498b8864cf8555a5a56175e60fe"],["/archives/2022/11/index.html","b0c3ec6f52e1852c9ca0c7bc908c34c9"],["/archives/2022/index.html","48fbae99a49f68c247396be78b65d968"],["/archives/2022/page/2/index.html","a61193c70de2a9a54a057e6a0512ecd8"],["/archives/2023/04/index.html","f2e46112641230771e1a85621829b4f2"],["/archives/2023/06/index.html","983f0737cb6065d0698531634168c95f"],["/archives/2023/index.html","4e699a8063142e306d7881c8f2786a49"],["/archives/index.html","834c259bee2ef8de1322c05f56b6e866"],["/archives/page/10/index.html","c111eafebf85761661b62ec1902fc0ae"],["/archives/page/11/index.html","3571074bafe67f0328c840ec4dec5ae4"],["/archives/page/12/index.html","d76d08544539277af35c06b7223c83b6"],["/archives/page/13/index.html","f1a27a994b141583d6f3091adb2d3798"],["/archives/page/14/index.html","88413346173ea560133999aa36258377"],["/archives/page/15/index.html","d3a7a9d185218af330d7850696d53aec"],["/archives/page/16/index.html","b3247d1ed4846d886a474d979fbeeca3"],["/archives/page/17/index.html","86f4473aa1ea4caa12e7f99fec6c1581"],["/archives/page/18/index.html","84a5d5f511089c1158f00f1090dc4b70"],["/archives/page/19/index.html","a606a27e2a3cc38b241d02e18f3035e2"],["/archives/page/2/index.html","827b11ca5ad2d23e59a7a9f6e625dedc"],["/archives/page/20/index.html","76db6ff0d6cddafe9e060d8cf18e37ee"],["/archives/page/21/index.html","f000a394a817c24d98191391ee07d847"],["/archives/page/22/index.html","86c3165f8b5ae6424af8c0f1da9abddc"],["/archives/page/23/index.html","5a537163a39b4f572c45d80f7900ee7e"],["/archives/page/24/index.html","708598f7056d9952c5b338d9b748c1d8"],["/archives/page/3/index.html","d4439d04d53f3eafc8dc7219718541d8"],["/archives/page/4/index.html","12015ea6da3a3d1bf84ece8d5a713054"],["/archives/page/5/index.html","39fe5069de06789503d0913ce4cec11f"],["/archives/page/6/index.html","b7cc78004f252ddde60d9ee62252500d"],["/archives/page/7/index.html","3c1b594aaa2385e0e3088a785f56df91"],["/archives/page/8/index.html","cff54b7b7e430e607e8df4c69444ae40"],["/archives/page/9/index.html","4f9f6492f4dc0051de17c06af7aee8ce"],["/array/index.html","f893b16c027653df4936e59756fe63af"],["/automated-test-katalon/index.html","718951662d08f89eda3a274de2b79a8a"],["/automated-test-selenium/index.html","3a57430be9d3f24ec86c95554495265c"],["/back-to-table-query/index.html","5ca4020f448928baa5587f60980684d0"],["/binary-search-algorithm/index.html","9a2c62fdd286ed53bd3a0c8164a1e68f"],["/binary-sort-tree/index.html","f0c78298baf4c68e4cc6fdcac061f91d"],["/bionioaio/index.html","2c7f0e175f94219706923554d70c9100"],["/bridge-mode/index.html","828fff63f32647bccd81ed122bad4f87"],["/builder/index.html","29c1cd1142c826dcce4f59858e1fb3ce"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","df3a5b9490805c7c988e2986836a0219"],["/cache/index.html","45f4f57893f4527955a88aebfeebfc7d"],["/categories/C/index.html","8d62963e14241c248fca4f05651b233f"],["/categories/SpringMVC/index.html","722d02cbb9d687464a3632920daed837"],["/categories/categories.html","314b24ed1403648ac2f1a8a8272944f5"],["/categories/index.html","54ec470458dbc22f1970676f0a190fba"],["/categories/linux/index.html","2e05d5e3a9e37fb804d42374b9ec2dec"],["/categories/分布式/index.html","694536d8122b88d63df6afa5e93a49c5"],["/categories/分布式/page/2/index.html","b1d78a2f7068d0e90d82817d259eeee4"],["/categories/设计模式/index.html","3f14a2031a7b25ba371c4e51b2bd927a"],["/categories/设计模式/page/2/index.html","1327c266a8c93632989a9a502db6ddf1"],["/categories/高数/index.html","c0be992a767c5a3c816feea62dfe387e"],["/chain-of-responsibility-model/index.html","988f7335e807e7c343ebbdb5becd0a8a"],["/charity/index.html","b11c55368483d2a977bf16373c37d130"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","26481dda83f325cd24fc1e709ff6567b"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","e3c4297adf328de261c99ef62a664fc9"],["/combination-mode/index.html","24635f793b9459bec085676231437600"],["/command-mode/index.html","93970def169cf9d854e28c190886af9d"],["/common-commands-of-unix/index.html","c9007dc0934ce45966d7c942fac195a1"],["/computer-network/index.html","b2d2854d38ae141415834211ecfec00c"],["/concurrency-principle/index.html","d0e24e17ad292c9904b8507767a03d11"],["/continuous/index.html","f0852a9eb460cf8ea66d520a24ff9b3a"],["/contract/index.html","85903e2b0157624acf364d7778637916"],["/create/index.html","5006f1cd4ae1537020ca7c0c252c9877"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","401498adde6dc0ff93e4174a3d398ea0"],["/data-structures-and-algorithms/index.html","f73a4d7109058a6afe1f4dfa0ea2fca6"],["/deb/index.html","764278e43e675acd6b4a96673f768c67"],["/decorator-mode/index.html","5e2268ab35d291df4a452b6d1530dd7d"],["/definite-integral/index.html","810411aaace32cd5b891760ad809b46e"],["/dependence-reversal-principle/index.html","6f9206af878f977eeeb89c006f6fca67"],["/derivative/index.html","63883c58a2f70d84d92b7f39a3c40f8c"],["/design-patterns/index.html","d7e9a78e415a9d7e263e0ddc368b66dc"],["/dic-algorithm/index.html","03809507624b5d9f238df2dcc75799f5"],["/differential-equation/index.html","fd8f92d226c72e34e43011427bd0e61d"],["/differential/index.html","d55ef709a42fc9dd914bada239214f67"],["/dimits-law/index.html","f95f22de44ec6b0a8d9f6297e4b4fe64"],["/distributed-lock/index.html","baf51e5dd05c101034db10fd5ec35f3b"],["/docker-virtualized-container/index.html","6c5bb53dc7ad5496285568b2239bb6e9"],["/double-integral/index.html","0be34791bd105609a8a4dd5488484f55"],["/dp-array/index.html","ef1b6f4bb426c0bb7dcd6bee1acb54ab"],["/dynamic-array/index.html","409e3eee36fb075fb3dd0cea212866f8"],["/dynamic-programming/index.html","fe2ea4cebb0fd1e0d34a53c93ba465f5"],["/edgeset-array/index.html","0f8b56d0a3b912e092a32eef8c1ff2e6"],["/encoding-algorithm/index.html","4559b5c5ef35aa8cfe391b5ab1d02ac5"],["/eureka-service-registration-and-discovery/index.html","0da3d9782e902e2ce6cc17c9a1ab7e79"],["/extreme-value-and-maximum-value/index.html","ec46e7c8686831f5adfff97f35b5d868"],["/factory-design-pattern/index.html","6990b39501c60bd8725c0f19a0ba3d57"],["/file-input-and-output/index.html","9ebb0b7a51cac29d051e663feb1166ac"],["/flyweight-model/index.html","ef630d4d44f519d7c051190f190d718b"],["/friends/index.html","7faf308c78fe93dc1f9fdb0b1ee48dfb"],["/function-graphing/index.html","a5857667b7dc61e93ed90ba27a72f610"],["/gateway-service-current-limit/index.html","d346378ced751fb1f268c80a39f7fa2e"],["/gc/index.html","2f8b82ba407754cf767075190b288ff1"],["/generalized-integral/index.html","f8492de1ff59842837fc4e43e2ef56fa"],["/google8102e2f35ce9e391.html","7b01b9e21a1541b324827bf088282132"],["/gulp-compresses-static-resources/index.html","4db5583bf36aa5411ae3e86d783eef39"],["/hash-algorithm/index.html","35e694df386b2df678b00f4f7868198a"],["/head-first-JVM(1)/index.html","091498b093a76c49fcbf9a6474720af1"],["/head-first-JVM(2)/index.html","7ab966ab16ad24c7f518ed1675e5b8ce"],["/head-first-JVM(3)/index.html","9686b791381d09eb3b1c595443097bb7"],["/head-first-JVM(4)/index.html","9d857baccc4a30c8559c32e8b723a9a5"],["/head-first-SpringSecurity/index.html","3f6d4e427eaa4f38b7c007935806eb66"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","614035a5d24a629089cafd65c1cecd6e"],["/heap-sort/index.html","7854a731ad59fa1b7d162da182851752"],["/http/index.html","d79b0ab8b37b65c60fc08073e104535b"],["/huisu-algorithm/index.html","0ffffed7f129a74a392981db73f8a505"],["/indefinite-integral/index.html","6598c6f47f9278363f7444bb32415990"],["/index.html","98f710b678c30ceba6982425d60ec697"],["/infinitesimal-and-infinite/index.html","60fbcf699d5ea6f7802bb5881c87440d"],["/interface-isolation-principle/index.html","7f3c0ed058b44f743ffb52b71189e6c7"],["/interface-test/index.html","2d8a0d71f2156b6eabb50cc8ec6b63f2"],["/intermediary-model/index.html","b81ecf99bb3c4ddeccca4a36b1e57d30"],["/interpolation-search-algorithm/index.html","6019b0f1d1a9ec63066e9943ca2cfd88"],["/interpreter-mode/index.html","e7208d210f759d7ed353104e1f60be58"],["/introduction-to-computer-network/index.html","99da89b0141f87590e4febe7b9907617"],["/introduction-to-operating-system/index.html","786076e9a7fc036e7514644eb483b61b"],["/inversion-of-control/index.html","df00e227980efc4d3518209e98a0bbe0"],["/io/index.html","02d8ef67bade43acba98d9d2b73a7e80"],["/iterator-mode/index.html","e4bc9936d5a5a54afc5c53f09e24243e"],["/j2ee/index.html","b20aceadb9dae76dac5b35da39ac02e3"],["/j2se/index.html","091e63a197a0ee52bac3fd4df4c33e42"],["/java.lang.String/index.html","1d450f5f66b6ca3a99b3ec04f098f631"],["/jdbc/index.html","10e5edf62a61e03316d75c719c5e89a0"],["/jdk/index.html","98d613ff222573f8a8154d20bc522045"],["/jmm-memory-model/index.html","0c1b0c3fb76049f7f01f12c804be9a6f"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","82799b07188455cc5d96949057c73f87"],["/jvm-method-inline/index.html","3f2f521d4212e41e2d6f60bd2fa770be"],["/jvm-tuning-practice/index.html","60f015aed1d788ea7661ac90b779b2a5"],["/jvm/index.html","dae5d20cd1c6211b614d0006c5bd88ad"],["/law-of-robida/index.html","691849f04537410f89b28087dba32b83"],["/limit/index.html","efd4607e6afa96ba25a756153226ce1c"],["/linear-search-algorithm/index.html","b1847814fa68243dd1c73fa0e957b44f"],["/linked-forward-star/index.html","f686b8bfdcda1557f3113c7ba8d3d1a7"],["/linked-list/index.html","a455c9ef38d39297b4535a9d12e329df"],["/linux/index.html","4da6a4edbee80626080ec2209b8066f5"],["/liskov-substitution-principle/index.html","46b143d054392fc8295590bdfbc4af85"],["/lock/index.html","6118234ea12f24e358a05be0ec65a9ac"],["/lru-cache/index.html","d89d7e018e2642d47adcbac83c921df3"],["/maogai/index.html","0131de3ee5d3ee106b7e606bd4fbc078"],["/memo-mode/index.html","1ae436a82037444e66d668f5be1bef43"],["/monotonicity-and-convexity-of-functions/index.html","86302b7dd747eb043945291f8f17a5f9"],["/multi-function/index.html","89f2f787c034157c60fa8ce999f18872"],["/multithreading/index.html","1a42365cd5701fffe02beccffc11d210"],["/mvc/index.html","c3bda7136fad1bacdd4f623c8aeabaf0"],["/mybatis-cache/index.html","4a985d030278ab911cbf92561ca0cead"],["/mybatis/index.html","8927191757fe32c128433379eb5e7f20"],["/mysql-index-wrong/index.html","d4ba0d2dd3ce49a68440982e6517d82c"],["/mysql-struct/index.html","f0ee862db48f916a26a12eb675b45408"],["/mysql/index.html","edfe06207c0e9058b053c6c89915c390"],["/nacos-service-registration-and-configuration-center/index.html","45814d1069572d44901395542bed69f9"],["/notes/index.html","cc88c166037bdb826bec68543eaf2ac3"],["/null/index.html","60bbc0d47a246b203c244c71b816861c"],["/objectoriented/index.html","102936a1d9689c4a39c7b60504894b82"],["/observer-mode/index.html","c0f486dd215a7cd9d0cff6d55f00b343"],["/off-heap/index.html","3cf54bab18e211ae3e31da36919bd9f1"],["/operating-system/index.html","6cb726488cdfc14015d3f3f4db6d8c83"],["/page/10/index.html","723207f5b76335ca1a1e82149b3d9f5b"],["/page/11/index.html","9f7d1ec18e9e523985f9dfbc38c9be80"],["/page/12/index.html","b85ef1c2ab5ebc1e0d18e9b0ef1639ec"],["/page/13/index.html","01140ffedd72808442d6e78015e998d6"],["/page/14/index.html","92f3648c020615874194aace38c39f1a"],["/page/15/index.html","fa2b51abf96ed5a856a596ff991fc1ac"],["/page/16/index.html","a8bdfcb61541ba5254575435e56acf68"],["/page/17/index.html","371244098189a68074b0d116b903cc75"],["/page/18/index.html","3e6210686f83c3b082703c6e74068d61"],["/page/19/index.html","e2331ee151e5ab9819c6d066319a2e35"],["/page/2/index.html","3d3df40277c67e6040eb84eb19ff019e"],["/page/20/index.html","7d9e24cc3df1f7cb53ba4851aefe1736"],["/page/21/index.html","694e0915f20a1c5d339b3b1c7b05066a"],["/page/22/index.html","1fb07f80363495617d2414ad8b0ef610"],["/page/23/index.html","2b186cdc57081610a27a98804f9b3ebf"],["/page/24/index.html","badf21c07d573d14c1fe222759d9fd90"],["/page/3/index.html","cd464eddc8bd0ae968e193b51bebf293"],["/page/4/index.html","9bfea5119dd3bfc7d1af99cf33705c93"],["/page/5/index.html","0283a13fc85f0b7767c7b14984402623"],["/page/6/index.html","a53e7a750b150a5c30781bcaccf18ff2"],["/page/7/index.html","e210b48433de0e889a9f4221add277c6"],["/page/8/index.html","f07703bfed2229d9dada198902546b61"],["/page/9/index.html","bbb05df8761e177c30be1def5cbf7555"],["/palindrome/index.html","1b8968127039a3d4fc6e9299ab168a39"],["/partial-derivative/index.html","31fa3703d61113f2158c8186ff9ab54f"],["/pass-by-value/index.html","7d1533fb75797e0795f07a9688c9d59f"],["/pictrue-bed/index.html","176e5f724a48306a9ba9f8a39b7a5ecc"],["/principle-of-opening-and-closing/index.html","8db69761782dbacc6908aa1c2c896cfe"],["/principles-of-computer-organization/index.html","221438b4a8ff9c5ba68fc513b2bd8dea"],["/program-test/index.html","7a246ea458ace9a40f3bb63b977712bf"],["/prototype/index.html","9b2b59d9b2471785027c19d82826ed16"],["/queue/index.html","93149f92bfbe975ef4794155faafc1db"],["/random-weight-distribution/index.html","46330a6ef787851ba184f24607d05d8c"],["/realize-modular-programming-with-functions/index.html","af22d3f1586bf8f47857e6ae72f7ca6b"],["/redis/index.html","a6d2e5e0bfa8f40f8997e193a58697dc"],["/reflection/index.html","b0fdbc57c0afda61b8990b6375923fe2"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","3807d9dfe5befda86944f3972a2de727"],["/ribbon-load-balancing-service-call-degradation/index.html","3dd80ba2917e50189eb473e14277c205"],["/round-dp-algorithm/index.html","48b515a002f968b4549644592c324336"],["/seata-handles-distributed-transactions/index.html","fc8e4ede2f1a9b8f2af3e5605efcba60"],["/select-structure-programming/index.html","7ec1e4ada3ce2223e40a99216eb9f6d8"],["/sentinel-realizes-fusing-and-current-limiting/index.html","f46c98a8eeacc8b6be22468c66825cfd"],["/sequential-programming/index.html","e8fa0f98e6aac81f4b8701a3802de817"],["/series/index.html","ee09c6cd3e6200987c818f64c15f6e6b"],["/service-worker.js","658400b0e55297b73c7e5e847c6a9409"],["/single-point-login/index.html","11379b2e994822d278eb8f15aabdb567"],["/single-responsibility-principle/index.html","3da6979c00ad4e1eb5201479e7e42d10"],["/singleton-mode/index.html","f7c7e3c0467aaccb7e8993fb7a569f04"],["/slidingWindow/index.html","adff094282d4eab77e3a2e1f207aeed5"],["/snowflake-distributed-id-algorithm/index.html","602817651f295a070e756d592822a906"],["/sparsearray/index.html","055481eb41b5ec619d4d13fdfaea9637"],["/spring-and-jwt/index.html","11b04db12062dbd4aaa14f1c83d8ae3b"],["/spring-architecture/index.html","cd72e7b34daa7feb7fe724dff6d7ea16"],["/spring-relate/index.html","0ec48659d292054eb307d4b79b00063c"],["/spring-springmvc-mybatis-integration/index.html","5363ec4f71200097e59d3767d6e5b746"],["/spring/index.html","89e6ba5a1bb280e1ee2a53fe08b5c466"],["/springcloud-alibaba/index.html","76cdef6f600dd26f8068607bd3c3b512"],["/springcloud-bus-message/index.html","57b17af3d57e5bf1e25e39ac7c59f6f9"],["/springcloud-config-distributed-configuration-center/index.html","7c2c2f29198230abcf67648c2a715f62"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","290e2d10233e2a5e019ea53fc41f0f5b"],["/springcloud-stream-message-driver/index.html","0853f645454000645e06db00e757f54c"],["/springcloud/index.html","8949a0e37bb332abff82e1e587d15a03"],["/springmvc-environment-construction/index.html","df73d6dc7252a223600b7eff0175fced"],["/springmvc-work-stream/index.html","eadc94f0787698ad2c0388fedcbf1438"],["/sql-injection-attacks/index.html","e296b0fd269a8953b8858019f906f6fd"],["/stack-simulation-iteration/index.html","e1409d993136e6dfb1ac4abba48ca266"],["/stack/index.html","44738703e3eb200d06e1feed891eca76"],["/state-mode/index.html","b3841a9ccc1f292c7ad67a1d9142d36c"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","9b4e79e44ea7c58512c044e6a628c680"],["/strategy-mode/index.html","893bf1ec8b01be9cf16466b1166232c6"],["/sw-register.js","7460449a0418fcb239a99c22baae412f"],["/synthetic-reuse-principle/index.html","501c2397493a7247d1a4f7fb1e1eb307"],["/tags/C/index.html","ef33ebb573510f625269d3f520e04c55"],["/tags/C/page/2/index.html","b72eb32ced2403131e3f2df4b7b2732e"],["/tags/Concurrency/index.html","eb6e2929eb5882f4cd56f52389b2267d"],["/tags/DesignPatterns/index.html","bf29e52e5bae25bc666ca9b83448ae05"],["/tags/DesignPatterns/page/2/index.html","54e696cda00280263aae5437f89a5dc2"],["/tags/DesignPatterns/page/3/index.html","a953ce4b256b2104e4e918ae044f9acc"],["/tags/DistributedMicroservices/index.html","eb8ad3910f60c8e8c59ac382854a4299"],["/tags/DistributedMicroservices/page/2/index.html","5707d277c4dc439be3a055d5b930c8ff"],["/tags/Interview/index.html","573a1b7114bbf61cbb0d339c8212ab1f"],["/tags/Interview/page/2/index.html","84e83e9020e9c8379829ca75f414478f"],["/tags/JVM/index.html","ea31c362b087c754127de8840db53250"],["/tags/Operating-Systems/index.html","9e6252baa5159b90ae78f19240aa72e1"],["/tags/about/index.html","fc04be8ecaafc3bec6c2c5feebec4933"],["/tags/ad/index.html","cde5f3f53475e2a75e050b3836ce65d7"],["/tags/algorithm/index.html","0f260cbad119125835dd8312c33fee9c"],["/tags/algorithm/page/2/index.html","ce367b9993ab81997575ccb16d1dd2f8"],["/tags/algorithm/page/3/index.html","5f49a2854ba7bbd66475c58188eae0ad"],["/tags/algorithm/page/4/index.html","eaa60eee43eae379c15ae4f406ec7f4c"],["/tags/bug/index.html","a261082a873d404c271fc89e0ed23c46"],["/tags/computer/index.html","85216fda7d5bedea65a71224cfc43bea"],["/tags/data-structure/index.html","addb47c158a61e28f8f5bfd2268d3afa"],["/tags/docker/index.html","c1e663701112ecb1797617f82d6f45a1"],["/tags/famework/index.html","18eb1c30a613a16c9443eea4619566db"],["/tags/frame/index.html","a7f74291100f60d70f5bd46dac5b2502"],["/tags/frame/page/2/index.html","d759a96b5b18878bfe2b84520ef1f178"],["/tags/front/index.html","ffd3960d1d3733e046a8b8d2d831a421"],["/tags/github/index.html","63a92d2d69ff368acb9d92459ce2903a"],["/tags/index.html","dfb7eb78811088cf4e9feec661e913ae"],["/tags/interview/index.html","233c755c784762ed15086e983c22ed20"],["/tags/io/index.html","3b0d574f85f33c2089a1dd5afb981cd4"],["/tags/java/index.html","a31f0970964f45457d9182af0821cd2b"],["/tags/jdk/index.html","fcf732c131ccded1c8428ffce2c588ab"],["/tags/jvm/index.html","cb0f4c2d40adbaf0d7a0032d130125a9"],["/tags/jvm/page/2/index.html","887cdfcb5969f33088c7561d0b2b974d"],["/tags/linux/index.html","61ab8807916d8999301e1525c6277bda"],["/tags/maintain/index.html","7f74031ee388d50983e11a3e1118d202"],["/tags/maogai/index.html","9753cfa7832e2416dcf28088df0447b9"],["/tags/math/index.html","92d8851b6b0120447740d5329312dd12"],["/tags/math/page/2/index.html","6b3350c6abdad158a55cd485a2256b9b"],["/tags/middleware/index.html","be0931188080c065a3c2c6d1d153b5a8"],["/tags/mysql/index.html","9d362ca4ce1980dbcfc78bff1c647daa"],["/tags/network/index.html","9551e36a4c8cb56cd402c72ab77931dc"],["/tags/project/index.html","ffefd7af495b5e9ca3aa871fa1502cf6"],["/tags/project/page/2/index.html","0dc2c2ff0eb035cd5923f97e27e16f5b"],["/tags/security/index.html","64323b14299ccf49f18d3a94111c2f3d"],["/tags/sql/index.html","3009c8c87918417be8a9c3077fbdec98"],["/tags/test/index.html","fcd8008193d6240e3cbad6341eef8eba"],["/tags/think/index.html","e237c4a7f61a876ce8e4fc12053ae65f"],["/tcpip/index.html","20d6ca1c15928d000de0845aea9688ef"],["/template-method/index.html","e6c8ff7232c9ab0910ed6ee09827093e"],["/test-case/index.html","8c4b22eb956267c15ba0551684200000"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","15a8ffa30d8af0145302a1172463cae4"],["/thread/index.html","672f547ccffe53504aeacd7b1cd9db9b"],["/tj-horse-racing/index.html","1cec69988b79d5fe508f65a352a59840"],["/topoSorting/index.html","7bfa2dfa8d4d115735a8ae11bbadb332"],["/traffic-monetizationaccess-to-google-adsense/index.html","5ed3b6d62c04ca4ffa439b87484fac5e"],["/txCharity/index.html","0a8b9a0996a675ace3180da6f132035b"],["/ubuntu-set-ip/index.html","5b9ec1619a856278c902625c0e84feb0"],["/undefined/index.html","f62abe1541527c47e25bd22f59c3ce7b"],["/use-arrays-to-process-batch-data/index.html","7fc1a179d1a5c42ff432be42d3bcfd79"],["/use-of-springmvcmodelattribute/index.html","5ead0e3d82422f0b936d00f041570875"],["/users-create-data-types-themselves/index.html","d6b6db848e68018bcce03d631ac1dead"],["/visitor-mode/index.html","4fff7e3ed771c3089541a01a63ca8c7d"],["/what-is-milk-and-why-is-group-wise/index.html","0d3a4bcfe3a88d5c0c90e9d78e35793d"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","7e303d4c1b52b2ac471dad9ca9643bc6"],["/xss-crosssite-scripting-attack/index.html","e0accd7529a4ffb4d204f164a646bc64"]];
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
