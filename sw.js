/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","fee8bce30f004da3ad5423dc5048218e"],["/404.html","d19b892eeb428cf3fa7d4f5a37b01527"],["/404/index.html","d83833267628c54c8f7c4a79f6c4e652"],["/7-sorting-algorithms/index.html","50a3c34924dc251fec0464380f736f0a"],["/AIO-blocking-model/index.html","5639ad03d96c0f5d18ad9d14d5362f96"],["/About-Snowflake-and-Consumption-Degradation/index.html","91702454e677766e674b44ccf642d639"],["/BIO-blocking-model/index.html","d696d7c9f81d231fa8456e01a9ac023c"],["/Bloom-Filter/index.html","e7012a7729b9529526b2d80ac4e3977b"],["/Boyer–Moore-majority/index.html","8e2cc7f8a5d9b964c039106c7ec98ec4"],["/C-algorithm/index.html","7a85b19c0a10a8ce46c3c63ff411df82"],["/C-programming/index.html","3d72374aa40fb77f8b1170fe2b9f1f70"],["/CAS-&-AQS/index.html","36c4023519695969bc5d108fe9091e37"],["/Comparator/index.html","280db7b20d8d7ec95efc900511342831"],["/Differential-array/index.html","a78c40884800730aae36cc85899a59bf"],["/Download/index.html","771716faef6029cc7582be446597b501"],["/Front-end-security/index.html","89df09757785800aed0dc8f4e1ff2272"],["/Good-use-of-pointers/index.html","e99c898fbc0aca93843cceb37e705183"],["/Graph-degree/index.html","eaf975f4a45d131991f179850601463f"],["/Greedy-Algorithm/index.html","a064b839fb9b845e3f566c29ebb602ca"],["/Head-First-Map/index.html","babd514b9160ec24579a142059adfc34"],["/Head-First-Netty/index.html","4ca68e4661d6f5fe168b9137fce0aa6d"],["/Head-First-Nginx/index.html","b83b34d58d8d98b43978f801487a7a10"],["/Head-first-Spring/index.html","2c43a313e701da6af1fb062d1359c309"],["/IO-model/index.html","f2a75f485f71df081ded50fa9c72698a"],["/IO/index.html","b08c89185abc5426a6e7a5dab243599b"],["/Implement-a-lock-based-on-ReentrantLock/index.html","1e294bffd2145a55504c2869a196386a"],["/Improve-Robustness-(1)/index.html","9a12e3c4eb1935e671603e2d2f87c2e1"],["/Improve-Robustness-(2)/index.html","ee83f5f54a24efb4f44034d546195731"],["/Integer/index.html","8d12a6181497db71d888a4a2f72ebb55"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","caf9d78129de9add0b1e7ca90c7899ae"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","6efd6ea939aab5c640c4ea316aa2d0b4"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","a39b320a2835383994e2605502fa1698"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","53ddaf0c97b07cc073b8b5d5cc11f5c3"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","85dfb91270a583944d4c32fe98b3b363"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","935ad1850d3398641db37f94a2dad053"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","6afcca9ab4ee680e2fcd347e1613a0a0"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","f75e435f6e90e4f5987695d01052839e"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","3aff61551dd6fe338bcceb51c89c0eea"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","85f85782fcaa75a71256d248b2810bd1"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","30d9f7bbcb51bf3ae05b4758e7c7459a"],["/Java-network-programming/index.html","08973acd82d7c44c510ceb71f0c8491c"],["/Large-number-operations/index.html","85fb50d1ee216927133d3c2f513ea87e"],["/MYSQL-MVCC-&-LOCK/index.html","900c18f7b91399bbced10fe440265234"],["/MYSQL-uuid-and-page-splitting/index.html","c1f508e58e2df4b8ad41eb8ae8c38c9c"],["/Minimum-Spanning-Tree/index.html","802c7d6e2429a1ac6539d84b26afe968"],["/NIO-blocking-model/index.html","245ca751986d84570c2d72f230ddcbaa"],["/Nacos：Configure-MySQL-data-source/index.html","2aa11c4f162cbb778df001f9ca8e3f89"],["/Native-method/index.html","1bccbe233099171bc5ae9873059c4994"],["/PriorityQueue/index.html","aa4fba82baef050851032f4b0cb48b18"],["/Proxy/index.html","9ed0d6f851120abc82a45ceacf95e897"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","cd361d252e15e3a2863b573dd2dad271"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","77516af509589e7bac75c3b824cde4d6"],["/Reservoir-Sampling·/index.html","7729da1ae40fcbea43162241fccef251"],["/SQL-injection-vulnerability/index.html","f88e631c445799db8b047c5084f879df"],["/Sandbox-security-mechanism/index.html","6600bf9d4c29af0e5beaca90375bd0a3"],["/Spring-Cyclic-Ependencies/index.html","0e72928dd1b1af4ce43f945f9ee74769"],["/SpringBoot-startup-process/index.html","0da6ff87d930d06d83e3b855cd3df959"],["/SpringSecurity/index.html","d43a9fbb112089141cc3f24c9087c646"],["/Thread_Pool/index.html","fcf6e7cac96b662a13fb1319b396b1fb"],["/Transaction-isolation-level/index.html","215198461081994317e42ca78d87340b"],["/Unitest-framework/index.html","17e0d4e14c254d5e665f93d75abd0d59"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","746463679436087c8b849eb7fe0b2b0c"],["/about/index.html","318a7c59b2ee80463daec1192b2482c5"],["/adapter-mode/index.html","7addb899a1369982ad9c5b8df112b64c"],["/adjacency-matrix/index.html","c2b44e968899b794a6a8844de6516141"],["/adjacency-table/index.html","36b8e6a7b931be01883963ffae165415"],["/agency-model/index.html","023d9a5d203e9595807950310b5c9eab"],["/app-test/index.html","56236459e355428bc831ad109b54fb06"],["/appearance-mode/index.html","8ca98abc19e2e89556aa40ec2839f1b9"],["/archives/2019/01/index.html","1058df123825854ece41bd9e5b896fc0"],["/archives/2019/07/index.html","3331fa0b5e26f500756f395cdc85d1e4"],["/archives/2019/10/index.html","017a3f29e97e4bc2557945ab85808747"],["/archives/2019/12/index.html","246e927c01449b2e86b9f70f4270bca4"],["/archives/2019/index.html","b1c71d8bfbe0f916018700b7d3bda65b"],["/archives/2020/04/index.html","fd0b0c220397dfdbe427470358c447d8"],["/archives/2020/05/index.html","735e2efaa8bef0559bda4f0a666a8ce0"],["/archives/2020/05/page/2/index.html","0d41721573df2c8842549835797f142f"],["/archives/2020/06/index.html","33b50d3b3fffd5fdce483154b8dad91e"],["/archives/2020/06/page/2/index.html","f6f3daaa088c47f448d7fe90df8b7a20"],["/archives/2020/06/page/3/index.html","63a17300a38d2fc4d5f84d48b5438520"],["/archives/2020/06/page/4/index.html","4ac53a5795b4e2e7533a4ac9091b2ca6"],["/archives/2020/07/index.html","e34f7d4ccbdd368e01ef0223409aea5a"],["/archives/2020/07/page/2/index.html","a9992b26e4b2b2c7af48d1ae4dabce20"],["/archives/2020/07/page/3/index.html","f816b58452c46d0e48d895f5f40124ee"],["/archives/2020/08/index.html","c2c7f369395948ecfd18708d6148ff19"],["/archives/2020/08/page/2/index.html","f33e5f7290cf57597dc110fa663ea534"],["/archives/2020/09/index.html","1ca7d4f9f31503e809ef45c195c754fc"],["/archives/2020/09/page/2/index.html","75c9003119cfbdee42aa4afa79c1d0ed"],["/archives/2020/10/index.html","05ba7bcb1ec02fd28ba6495ca935119f"],["/archives/2020/10/page/2/index.html","bcdfa44f3119b403fe3248b1f46cceb0"],["/archives/2020/11/index.html","09f4c19c307a8b6d6aa7d472f57a82f2"],["/archives/2020/11/page/2/index.html","5ef9f4b01be967baaaa1097753af633e"],["/archives/2020/12/index.html","b862ea6e45f4403cf1f95a535fd0d7a8"],["/archives/2020/12/page/2/index.html","44fd74600d81efd3d02cebf51599f8d7"],["/archives/2020/index.html","68b2ba5703647b3c24968118a13ec432"],["/archives/2020/page/10/index.html","1eb6570342cc27fe32b5903263cfae0c"],["/archives/2020/page/11/index.html","580d034322e7ed31aab6243d40d83169"],["/archives/2020/page/12/index.html","5e2d619f550ed6f001047d861a70e315"],["/archives/2020/page/13/index.html","4de41be8dff42867709fba1fc92a81b0"],["/archives/2020/page/14/index.html","c469c826dfba8780d730840962e371de"],["/archives/2020/page/15/index.html","676ffd63d90a87a48200a8d774330b7a"],["/archives/2020/page/16/index.html","2012e7a116e6a088216b74ce674a2c2a"],["/archives/2020/page/2/index.html","04e4cf958334d90b1511888b831f130e"],["/archives/2020/page/3/index.html","5543943c5dde991260b89f7f6e0b0146"],["/archives/2020/page/4/index.html","a08dd8683f4cfa223617025bab939643"],["/archives/2020/page/5/index.html","c1a12fa5d458e6e0fe7d6f833cdfed19"],["/archives/2020/page/6/index.html","89ba0fa0523b94b511b45f2d777d5068"],["/archives/2020/page/7/index.html","db5b29fc81c6e0a2f07bcab0ea173424"],["/archives/2020/page/8/index.html","d7f6a777bdfb3f3ce09ea9c0d7cf407d"],["/archives/2020/page/9/index.html","086f62d62fea1838f17aa73ea1565b22"],["/archives/2021/01/index.html","c98dd49566c0b49a1bef9181145ebeb7"],["/archives/2021/02/index.html","31486b3f7d6175a8a3d9991cc46afea0"],["/archives/2021/03/index.html","99c6870a95a48ac426cf6030ebbda1c3"],["/archives/2021/04/index.html","a6cfa938e6abac38d1efa2642732b43e"],["/archives/2021/04/page/2/index.html","60a60cce086ac7f695b4714d4a880788"],["/archives/2021/05/index.html","d9a6babb8767203f25d1bbf35804e021"],["/archives/2021/06/index.html","5a7969027a18d36c277b1d38363c8ae2"],["/archives/2021/07/index.html","7d37663e4781138ae0dd6dcf591ab626"],["/archives/2021/08/index.html","16278dcc4cb2520d729f07a0439076b0"],["/archives/2021/09/index.html","e57ff50e3cc7646572bc14571c7e20b3"],["/archives/2021/10/index.html","7f5e7baebde6e3c7a6eb3badc653d573"],["/archives/2021/11/index.html","8a8340bc9d9ee14f5b14a8efa91bb009"],["/archives/2021/12/index.html","2e2e9fe55c014dd3e638787eb9f62a54"],["/archives/2021/index.html","d3c942cef2d3ba5deff9d7ad049fef9f"],["/archives/2021/page/2/index.html","b1870dc0e438b5345915dc83c781429a"],["/archives/2021/page/3/index.html","223287657566f6f36e821edbf296748e"],["/archives/2021/page/4/index.html","15cc607be8e9061aa48f25e2f28704f9"],["/archives/2021/page/5/index.html","73ec2dcf1ceda479e43d035cec6651cb"],["/archives/2021/page/6/index.html","5962d32bce4e7e353330a193463debc1"],["/archives/2022/01/index.html","1f1e4ac184e0073e7366d2eb203e0b5f"],["/archives/2022/02/index.html","5ea01fdedd4bf034969ebf63608e282f"],["/archives/2022/03/index.html","a5795dfe8d15e02f8265fd25f5f81741"],["/archives/2022/04/index.html","8ba66801636cdd08271199f7db621041"],["/archives/2022/05/index.html","8dc4fde9bd53cba775bfb60ef2534851"],["/archives/2022/08/index.html","6d243e6897495b24af8a306bb47ce143"],["/archives/2022/10/index.html","b473aab1dbe98ec54cc4566c0aba3dcd"],["/archives/2022/11/index.html","6c7bf817edbf79b11622a81133cfecbc"],["/archives/2022/index.html","e9970a6d2565d153c5afb8463bb0209c"],["/archives/2022/page/2/index.html","87d401a31a5dab31e225f4959c6ffe14"],["/archives/2023/04/index.html","41dfab25d1439d6f9137b8df6eb14c66"],["/archives/2023/06/index.html","c16b7e3790c2edfc0cf5d70ed2859ba9"],["/archives/2023/index.html","b0dda1a5811c0940688dd0754fe8c889"],["/archives/index.html","3e3dba8ee5b163cd67ea8d8237592d66"],["/archives/page/10/index.html","7ed1cbfd88709c46aa3cad1f552a58e5"],["/archives/page/11/index.html","1f312392b5bbeb8ec06b9820b889ecb1"],["/archives/page/12/index.html","d92e32110e27920d75a06b6784c3a7bc"],["/archives/page/13/index.html","d54383c1b29b8ac7d41a066690092e0f"],["/archives/page/14/index.html","89f5f05da34be58d6481aa758d5e8237"],["/archives/page/15/index.html","21cfb335452750637ff6f058bd55f8a3"],["/archives/page/16/index.html","1e53e95803218cad798e837f259b4fc0"],["/archives/page/17/index.html","058d5303cbebea2eef3dd6740f073727"],["/archives/page/18/index.html","f4c27404a59470b397f8e99f4261a97e"],["/archives/page/19/index.html","cc37b97da36b0b46ca34d71ec7680ffa"],["/archives/page/2/index.html","54dd876527bf4ff3b45ba829b60b2332"],["/archives/page/20/index.html","c54dcc8d70f79fd5d97da0a15bfc1883"],["/archives/page/21/index.html","8b4256710ebed54fc5fb7f1661dd9c5f"],["/archives/page/22/index.html","e35911ea80c18b1bb5bcdc09115b5225"],["/archives/page/23/index.html","1a1591e21f3461864c90b2588d9f1fd3"],["/archives/page/24/index.html","1971fa1bcb770d6a9dc10c08e920d830"],["/archives/page/3/index.html","88dc6b76e874db7a8137df1e472b3d65"],["/archives/page/4/index.html","2ccdd48a9455b00f71d53ab32340d6cf"],["/archives/page/5/index.html","a77cc90e490a7081dcb5eb6443719b55"],["/archives/page/6/index.html","a446f0e33cd0d313208ba21406d14487"],["/archives/page/7/index.html","445202931f49c1f7938a256d0b512214"],["/archives/page/8/index.html","6f5f1dca69cece47851049d2e6a9741a"],["/archives/page/9/index.html","3b23255146bfc16a3ffa1bb3b4fd9aea"],["/array/index.html","8dda2ec1ebf1a17e93de28f2b8045f1a"],["/automated-test-katalon/index.html","d1bf6165cbd689f3e28097f3e895432e"],["/automated-test-selenium/index.html","155c78c33daf09dee292b33cac62649b"],["/back-to-table-query/index.html","b29c110e098c1fbf185657adb818aca0"],["/binary-search-algorithm/index.html","9a9c3dd6e6b9c2c5d6a37bed81277654"],["/binary-sort-tree/index.html","fbd658251d724e1e6fb8d40d9cd33f2e"],["/bionioaio/index.html","a9917a875271df88f5f3e4e7ff46c2e7"],["/bridge-mode/index.html","a23db6945f6115a4811d72c123f0e0c3"],["/builder/index.html","9e3c57a2f8526a7d03de503da7537be5"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","5abc8f10ae1b6d38bdce53cb37e2e38c"],["/cache/index.html","3292f5756a324dee41c44aeb0b57f7a7"],["/categories/C/index.html","8ccaaee508ad58c81e52cbda64f4a126"],["/categories/SpringMVC/index.html","4c0dd5794a78540e3c398572f3a21193"],["/categories/categories.html","80decbb88a9c19151ed244edb9b6f483"],["/categories/index.html","e88426195c2bec3bc36c3f7199c77d2e"],["/categories/linux/index.html","dbb61a71753221cbd7b4d73f2c6f71aa"],["/categories/分布式/index.html","bdd48f57656acac3cf2d418380d65b33"],["/categories/分布式/page/2/index.html","6ab828b03a39fd81c4f799ec2bb8ec19"],["/categories/设计模式/index.html","8b90f12426b0b0287fa1ee471d69ff9d"],["/categories/设计模式/page/2/index.html","df4ac3a017dbd966e63c1a081b65d41f"],["/categories/高数/index.html","adca5e91b24a24dd89638d4170ed5ff2"],["/chain-of-responsibility-model/index.html","48d5324412fdfec1f738d8965f6796e2"],["/charity/index.html","ededbffc60adb5aa94e2cb5591612348"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","8ac8ae7c23db8b263de5922b5875438e"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","d7e0e61506d89ea3c2a824d7eaf5553c"],["/combination-mode/index.html","db67ed3ef48ff41871489203f83d4a54"],["/command-mode/index.html","c5e39d68f34fa5ab37f3e103f4190233"],["/common-commands-of-unix/index.html","84606df401f49ba027985949419ad3a8"],["/computer-network/index.html","94b9b5964f94c401f719d6c43fbe6838"],["/concurrency-principle/index.html","9d15baf479d35606d0ac83445797bdcb"],["/continuous/index.html","2e0931d1a4f3e4787678bd61df9379a8"],["/contract/index.html","488495a025bd82a543517ef2736b4d27"],["/create/index.html","4e9c73c8ab1b8bd792f60b7cef7f81bd"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","e956ca80d914ddc1bf5c969c205cf3e4"],["/data-structures-and-algorithms/index.html","d50f950ae360f0d59cacb92bb8d345f3"],["/deb/index.html","4edb0a4fa5ccd5623328b5eb73044866"],["/decorator-mode/index.html","e2af807954f5f3a4419380524843c0b3"],["/definite-integral/index.html","9d9c1576395c2c3b873dbf691488cfff"],["/dependence-reversal-principle/index.html","508f1616f77fe4c7739dbb24d7a1412b"],["/derivative/index.html","0520ef66202b92a4c4e50a8729b4f2d9"],["/design-patterns/index.html","988327b275302e06a2fa01bdd7984c4b"],["/dic-algorithm/index.html","1629f11977aedf9834c558775165f711"],["/differential-equation/index.html","2172eaf6e5c9c8fa1ec8b007a995048e"],["/differential/index.html","8bfd37836f4357b0967e7f9721911d7b"],["/dimits-law/index.html","020a58fa01f68f7135b1bf86f18eb044"],["/distributed-lock/index.html","be7498a16c8b2b92562b338ffcfa2c21"],["/docker-virtualized-container/index.html","82ae8494ae92a48a0608dd150274f90f"],["/double-integral/index.html","8f1e13201526cf915ac493b422a85ad5"],["/dp-array/index.html","1c29b6021ffcb51f136827c642430b5c"],["/dynamic-array/index.html","210f2b7f7e10b3ff0339bbfe6d28eced"],["/dynamic-programming/index.html","9ce4622d9daea2802350bba81ba73892"],["/edgeset-array/index.html","156515f3b5a4dc95c08e7d646e440d1f"],["/encoding-algorithm/index.html","ecacca399d276278c9b3a058b1191a5c"],["/eureka-service-registration-and-discovery/index.html","63c8634f675c31557ecdff718cc7b372"],["/extreme-value-and-maximum-value/index.html","bae4ba566a4863718b992f338e8e2f55"],["/factory-design-pattern/index.html","2edf682e665b25d18d6f4e3c6413643d"],["/file-input-and-output/index.html","63d5932ff7f901a3ff1f06da20389425"],["/flyweight-model/index.html","98b0c39e349111455ca2c53fe7af3940"],["/friends/index.html","6fc05927d59697143cacd239e1f7d576"],["/function-graphing/index.html","ff42f07579fb2cb1ef900a9f14a31542"],["/gateway-service-current-limit/index.html","330e0b2b8208b70072d5464671125488"],["/gc/index.html","828d9d4394b8abb7998860771c37b8a6"],["/generalized-integral/index.html","a0c7f4f12235a2e5878fbbd80b225219"],["/google8102e2f35ce9e391.html","a7a1cbfb1e7e41626c3f3484861c2b05"],["/gulp-compresses-static-resources/index.html","a9984d3d03b27cc282ca35fcd60b17ab"],["/hash-algorithm/index.html","0c14dc0c7e49741a712e1b2ab23752c0"],["/head-first-JVM(1)/index.html","2ab055b5123a5c2488e0ea8320e87057"],["/head-first-JVM(2)/index.html","455ec1ca680d9b07d773d5d6c74f88fb"],["/head-first-JVM(3)/index.html","33b528fbc104ba355797aab251d7df4f"],["/head-first-JVM(4)/index.html","6a41c85155529a2fc828d33658b93085"],["/head-first-SpringSecurity/index.html","c26db0252db64b9d3620f19635e73a1c"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","671894ec1bf59ea8ee60bd8e5bd3a04a"],["/heap-sort/index.html","3f817dda54b0a8177d39898f079c125e"],["/http/index.html","98ae6113ac9d812b4d1a8c5f6e7a53e8"],["/huisu-algorithm/index.html","14d8270fe590533a824642d9b01b9110"],["/indefinite-integral/index.html","32a46f41b42c27521759cee6daea1844"],["/index.html","4fa6adc55d147e3336ed91bedb80dd86"],["/infinitesimal-and-infinite/index.html","5a88c417d2992c131c2c809601e53613"],["/interface-isolation-principle/index.html","6ce9a43c5d4437b7c1eae73421a06123"],["/interface-test/index.html","1e90585cee8f2d7b546133d6b46dbeea"],["/intermediary-model/index.html","4a6e2d6100f3ca405f627a87aa8e598a"],["/interpolation-search-algorithm/index.html","574d8f7750131b911a94fec9bb21c8bf"],["/interpreter-mode/index.html","f0b63d7856929afb12fce5bf9d48d1da"],["/introduction-to-computer-network/index.html","f8b4b81fc493c3c661fb03e2f3274e9d"],["/introduction-to-operating-system/index.html","fee97e712d5ea1dc765c2d9461283fb5"],["/inversion-of-control/index.html","efd557b8ac7028fe1393d5f4cd3410a9"],["/io/index.html","3b628fd087469b4e8c31a05c8745d1d2"],["/iterator-mode/index.html","c9018a66e845fd0b90ef35ba4a9698b0"],["/j2ee/index.html","1a4e8938863c40022d46f341fb8f7d71"],["/j2se/index.html","e2e242c8ad3324029831e84ea485a83f"],["/java.lang.String/index.html","afc2fd270cde7f55be087e50e4b5d108"],["/jdbc/index.html","ff6fc4276a8778ecd941062bf1535420"],["/jdk/index.html","358ddc6b5d3f5818527e0f7f7b103ce4"],["/jmm-memory-model/index.html","1d658e7ab1be1588bae18025186cc1ad"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","336d6716c8e8f2fcba3e63a1bc9f2c92"],["/jvm-method-inline/index.html","14bd2e8a77aa1ff78a602be64b81f563"],["/jvm-tuning-practice/index.html","861a395e046363f470762f293db532b7"],["/jvm/index.html","2c693e4f3ff298bea715d1e691dc36fe"],["/law-of-robida/index.html","b74d51ca76ecf7c6673b7531630119c8"],["/limit/index.html","e623a3de3fcf5690463f536653e1eee8"],["/linear-search-algorithm/index.html","ec5dd97247bafa5a8467bc99454ea9eb"],["/linked-forward-star/index.html","5a4ee4007f82490a126ecef493a6ab1f"],["/linked-list/index.html","77dea54f19dd78a197270e733dfaf6c0"],["/linux/index.html","473fd9a5748e3386dc477e8abecf8179"],["/liskov-substitution-principle/index.html","f0c33040996c8615347db75025b25cbd"],["/lock/index.html","0b253583f2713bd22b16ea51abf93998"],["/lru-cache/index.html","6016a0e91f0e006d8ce360115e9b6feb"],["/maogai/index.html","dfbe486a27f0a5f13a02b41cf82bfcb7"],["/memo-mode/index.html","f5857d26b1da90609341f6b9d70b0713"],["/monotonicity-and-convexity-of-functions/index.html","f0c8b00e5bb14a25ca23c4afefa11e9d"],["/multi-function/index.html","45fe0c1e17e6dcc2d37fbd59f9be002b"],["/multithreading/index.html","ad60f72ba663df8826f0203ee7adee60"],["/mvc/index.html","0ffe35de42292593ca10bde291358956"],["/mybatis-cache/index.html","fb668d524888d5e661825ff6e656df42"],["/mybatis/index.html","9fa420a3b6f207a3ca89d0cfa2846835"],["/mysql-index-wrong/index.html","347c9a92629912179429078170360792"],["/mysql-struct/index.html","bca908c56030f05674130e31132009d5"],["/mysql/index.html","e8380f5ec66ef23efabef9209b0e2f55"],["/nacos-service-registration-and-configuration-center/index.html","b2c0fd90b62831e8351d56bfbb83215a"],["/notes/index.html","08d79418c580792cedb6cb20756306ea"],["/null/index.html","a728d81f83238a9f5e1a8b8222579bb6"],["/objectoriented/index.html","3a3dc7037cbea78ef579596247c38c96"],["/observer-mode/index.html","138dd8cd0733168cb7a3d441425fca27"],["/off-heap/index.html","b21a94c3f230418db056352f8d7476ba"],["/operating-system/index.html","7ce0b72c92e5e99d4c5f49e41afce9bf"],["/page/10/index.html","1b6a5c783204439482bd4a107c4b9279"],["/page/11/index.html","aebe9fe1de7a7a37d80f3de79850e2ad"],["/page/12/index.html","d1789c1071365b60d513e799488622c7"],["/page/13/index.html","94953cfeee641f558408486369ec8be8"],["/page/14/index.html","2bede82afe84ce0917902a5dfd8a347b"],["/page/15/index.html","e7d166a68f47ef30d2f23b1c5bfb4c2e"],["/page/16/index.html","76bb7dec9099a32b2e8ad759d7b678df"],["/page/17/index.html","3aa2012602720eb2e265590d9b785721"],["/page/18/index.html","9990b5530da6814d2506753d8a8e2947"],["/page/19/index.html","ea90591fa9e36e48f06c5638bfdfd33f"],["/page/2/index.html","8331a35adec791f1c9ca5183865b5b03"],["/page/20/index.html","2ae98a5e4f618eda3eefc07fc5942d36"],["/page/21/index.html","6e0c7df228b967a163a3f39765429633"],["/page/22/index.html","8ac0f28cbdbefd932c471464487fd0df"],["/page/23/index.html","59563fb888aaea37a0161835207d0d33"],["/page/24/index.html","053ea6107c5080ef0dbe10ab5b5573b5"],["/page/3/index.html","6ab1b79c56a0137a973f2a16f1db2eed"],["/page/4/index.html","b17202cf32e1af0a6d0b39da509822cc"],["/page/5/index.html","bfec1d7210e6eda64916e2b818d687ad"],["/page/6/index.html","a8315b3383267ee9c8dcb97cf6405359"],["/page/7/index.html","77081999da662f88f875e8dbf153cab2"],["/page/8/index.html","3afa69774eedc9851f54cb83dffae5ec"],["/page/9/index.html","352da4ab771003724666c848061ed021"],["/palindrome/index.html","5ef21522f74bfdbc8db95ad01bdedded"],["/partial-derivative/index.html","a9da042e4fcc64262bbe65ad2999c2ad"],["/pass-by-value/index.html","3b918430e235898538f9f7a709041d11"],["/pictrue-bed/index.html","1ed057081ed9ee069279ca299f96eb58"],["/principle-of-opening-and-closing/index.html","4b9ed72d7a2008d8ee630bc61fb580ed"],["/principles-of-computer-organization/index.html","14042da3090c60a52033514b25bd2c01"],["/program-test/index.html","19408d29ab0c50ff6cb99022d2cc124f"],["/prototype/index.html","039ff58d567d9a6c22a50299b3e27c4f"],["/queue/index.html","aa6667e30f9e6952afde6bd080f4d554"],["/random-weight-distribution/index.html","78e81d9dacfea409b77df7f9191e45fa"],["/realize-modular-programming-with-functions/index.html","d5916531a7a0c1893b091016f6e571ed"],["/redis/index.html","cea7d7fb1ab93d55a3ff975bffa367ff"],["/reflection/index.html","9c06d8973337e5e0296498959598b44d"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","b222f24ffd061ac549f535bab1c49a8d"],["/ribbon-load-balancing-service-call-degradation/index.html","a300b8b6904bdaa6aeaa6eb826f7ae75"],["/round-dp-algorithm/index.html","24ea938bbdc99621ec55ab932db99867"],["/seata-handles-distributed-transactions/index.html","a30dbb360f8e9aec6e5c3dfb5593b4ec"],["/select-structure-programming/index.html","efc1cbafaf646cc3551805719d493390"],["/sentinel-realizes-fusing-and-current-limiting/index.html","1e5ba1e60839081f8b352dc3d5daadb0"],["/sequential-programming/index.html","b971e17109a522ad36460563a873027d"],["/series/index.html","7ac5b11aaf4147a3d4d2415b4056d19d"],["/service-worker.js","d3f54d79cf8b61fb55bc63b4b3d672bc"],["/single-point-login/index.html","36799e7f893072ee4249bd75b5256216"],["/single-responsibility-principle/index.html","ab7a288ecb4c365ce92dfcaea91a82a7"],["/singleton-mode/index.html","c445392ee3d99297476d9f3aba836c27"],["/slidingWindow/index.html","13a77e5d51d1f7325ace5be48e9e631e"],["/snowflake-distributed-id-algorithm/index.html","950cd069f8156402897f13a9c422ac16"],["/sparsearray/index.html","a127fae811d80cebb9c2a8ca1e3d9889"],["/spring-and-jwt/index.html","72f35de38295fda1af6c9e017260ad8f"],["/spring-architecture/index.html","a6dba0d791901c4ba805e0fab2edbd10"],["/spring-relate/index.html","e0606cc8651af076406c1fe9d34dfdc0"],["/spring-springmvc-mybatis-integration/index.html","9de03742c9d8daa62316f202ee1735fb"],["/spring/index.html","53ee28648c21cc558873af234a820d78"],["/springcloud-alibaba/index.html","badd6da7ed9f885af69622d096853879"],["/springcloud-bus-message/index.html","397d1f8627d6149b4fd8721b78e9a3b8"],["/springcloud-config-distributed-configuration-center/index.html","d1b68334e8f8ec3f25e3f11feadb0b08"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","bc8076bb1a760b4f13d8c344adec06a6"],["/springcloud-stream-message-driver/index.html","947e2bb076401d571ffbe56bae00d2c9"],["/springcloud/index.html","bd1650804039279cb2933f6134be0e2e"],["/springmvc-environment-construction/index.html","2c4b6e34589c84968b6f8794ecaf9cb9"],["/springmvc-work-stream/index.html","bee166c6f0a7705533e327ef9059817a"],["/sql-injection-attacks/index.html","dc1b2cda04bf2d339c6c0793b23086c3"],["/stack-simulation-iteration/index.html","7daa2209862305e8232bfd2fff2201a3"],["/stack/index.html","0476f97b7820eb110890d400b0442268"],["/state-mode/index.html","a1ff934140eceb9d834067958766a3e7"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","b1aef7f3906643ed1cea13616482da1a"],["/strategy-mode/index.html","351a7f7493fda032107824145b9bfe03"],["/sw-register.js","27199de53729b5ce5093e6adfcb95fe2"],["/synthetic-reuse-principle/index.html","8bb1c8bafde11b1ccf685b02e6315be8"],["/tags/C/index.html","71b8bae9c271e62d3460d7d61f7808d1"],["/tags/C/page/2/index.html","231f2f6ef80d56e87b37adab5ca93b1a"],["/tags/Concurrency/index.html","47bbec993bd4373668355c33c6c02924"],["/tags/DesignPatterns/index.html","b0a5d749f7ea319b4a81e54a37a778ee"],["/tags/DesignPatterns/page/2/index.html","a78f07c04c742d2038dcfd25ce2687b7"],["/tags/DesignPatterns/page/3/index.html","45761b77bae8ebfc34dc9a9de5b4a9a4"],["/tags/DistributedMicroservices/index.html","f4774e02fb6ef1cc2853fee6596ea354"],["/tags/DistributedMicroservices/page/2/index.html","5709a04eeb419d7e220641429b624112"],["/tags/Interview/index.html","672a9d4e80d4fd0ff73be7e50a1d77d2"],["/tags/Interview/page/2/index.html","84a60594cc71ff7c7ea670295d6dc68c"],["/tags/JVM/index.html","4ec8d6ca3970bcb2b5b47c5ca653e988"],["/tags/Operating-Systems/index.html","c5eefa4561b03bfa2b2c8f5624bf7de8"],["/tags/about/index.html","8e393f72f2900bc9dee1dcba2fdf15bd"],["/tags/ad/index.html","12c6e3294c04c8b5cc719a47e444afd5"],["/tags/algorithm/index.html","cd8f53252cca40354a243f1dd08f0597"],["/tags/algorithm/page/2/index.html","f648b179c1a49385b6363a59005e6d27"],["/tags/algorithm/page/3/index.html","69649bb417c602ec65c17bda4ca6e6a5"],["/tags/algorithm/page/4/index.html","fd4acf2f080b654f7a77a6e2814f3801"],["/tags/bug/index.html","a58c89ee7a4d9d6407e6d8444550e72d"],["/tags/computer/index.html","7da7eba2aa0d8e161a59877b1496fcc3"],["/tags/data-structure/index.html","45280174967a09827423a2f20236aae9"],["/tags/docker/index.html","d51e533ba66093d55213e43669d2e22e"],["/tags/famework/index.html","0fe1e8fe88df291305d8eab9ed669c8a"],["/tags/frame/index.html","882b1097a681d666dff08a3437e72831"],["/tags/frame/page/2/index.html","4f85ff0e7a3724e6a362174d152b281b"],["/tags/front/index.html","7e76c1e92fd153185d6c800a9ea721c8"],["/tags/github/index.html","35c96b5bc8e7e0bb7bf3da7392111d6d"],["/tags/index.html","7e8e15eb6a09e3cd24bc4a74dec3dfe0"],["/tags/interview/index.html","67908ea11d27750194c2269bfcabbf1a"],["/tags/io/index.html","fd0835c4d3cc91c29284985e0d9d561f"],["/tags/java/index.html","8ce892dac0c5d76b19aac72dce454ee9"],["/tags/jdk/index.html","e59e92c17e06e90e41ec73c5a9bc701d"],["/tags/jvm/index.html","08b8ea5a419bdc1a89056e4e5a8bff92"],["/tags/jvm/page/2/index.html","7b2dfc8e7e3b4c712cce99301214ffbc"],["/tags/linux/index.html","4f77875abf3989f969ddac75d82ce34f"],["/tags/maintain/index.html","22e57bf832167997061871a905c2d602"],["/tags/maogai/index.html","797e9a7758cad435f1fe4f4b8590a159"],["/tags/math/index.html","48d46f46d8ab93797596ff74341f9ee8"],["/tags/math/page/2/index.html","e602bee2a15da018827fd664dfa68c08"],["/tags/middleware/index.html","4eabe53ccdcdca92b0420e06e94883bf"],["/tags/mysql/index.html","59f3bb1d9ed71cd57c007327058f8ae1"],["/tags/network/index.html","ef6dc2a780aec697fe732103d4d4a5bf"],["/tags/project/index.html","68e1a62c52988cbf6f5bc986e205bda6"],["/tags/project/page/2/index.html","0a2d08179405327d5558be23f01d6132"],["/tags/security/index.html","63d99595bc484c72aea7298311888934"],["/tags/sql/index.html","6c503e442906ce770e87d33a77b32985"],["/tags/test/index.html","4ee246c55a2bf53e16c49d8ec31fc18e"],["/tags/think/index.html","c0ef350198ea673e62a4cd81a1688548"],["/tcpip/index.html","98421b98cbbd2f9baed754fec3d43043"],["/template-method/index.html","a0007cc89f0a339a2c4a62cb1d237ad0"],["/test-case/index.html","cb3be2c5ce7182dd8381e0dcc58ab6dc"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","8e7260a2d75e5fc9a4360dcf0b6fa6d1"],["/thread/index.html","517c4029935b86ce7d2959d4bb90d6c0"],["/tj-horse-racing/index.html","272f5573bbd904646e62cf167b131eab"],["/topoSorting/index.html","55f671d18746881ef36f40e889080db1"],["/traffic-monetizationaccess-to-google-adsense/index.html","be6d47541397711dbd8b485488dc9962"],["/txCharity/index.html","69cccde512fb0690bb342d79dd42c434"],["/ubuntu-set-ip/index.html","cbfd936fe90fc5503d86973125a8e07f"],["/undefined/index.html","5e80fb56e6fc05932af331136c4fa802"],["/use-arrays-to-process-batch-data/index.html","29293705f679a38586d31c2487b61ebd"],["/use-of-springmvcmodelattribute/index.html","1f4b8997cb89734ef9d1a4aca76c38dd"],["/users-create-data-types-themselves/index.html","cded0a26efd8ddb1331ed3c78b51e73c"],["/visitor-mode/index.html","d7540489a15b70a82f2664c8bf86c27f"],["/what-is-milk-and-why-is-group-wise/index.html","8db1cd979efe63024ca3171c96970152"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","a0e9848ec5d9daf3cfe5f9fc8d08f1a8"],["/xss-crosssite-scripting-attack/index.html","9298a31e15548883e46938a70d78f136"]];
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
