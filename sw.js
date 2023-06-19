/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","2511eea12f9ffaa443bc081118ce814e"],["/404.html","cec7f752449028328ad0ae197a4d0950"],["/404/index.html","ab785831265e9ca8ec0e51043555ea9d"],["/7-sorting-algorithms/index.html","88fe19224f69e9267ff9b918a9ca1fba"],["/AIO-blocking-model/index.html","fcf131de51c6315e21bd06ddcea8b23e"],["/About-Snowflake-and-Consumption-Degradation/index.html","0c491c01b8b8b21fbb291d9d28ce504e"],["/BIO-blocking-model/index.html","81a841ce45c7924f763dcea5e8cdfe4e"],["/Bloom-Filter/index.html","8433a95575d92040ebe4a00948090106"],["/Boyer–Moore-majority/index.html","2b0e9fc94ed40ce2bc5cef0b70c295dd"],["/C-algorithm/index.html","7e2b69acf6cbc63658e8aa50f1d2296f"],["/C-programming/index.html","8da2356bb50551e4daa04ec2e62182e3"],["/CAS-&-AQS/index.html","a3ef2a3c6291d4bd3ad82ea87b745ae2"],["/Comparator/index.html","613351b176a7eca1b616bc54397f3846"],["/Differential-array/index.html","2c225d114f4bd6ab6f9eaeb254d9e3b0"],["/Download/index.html","915c0a42f43e16f1bb707350f9e1d78b"],["/Front-end-security/index.html","9b1e0810488f67eac70ac5fcdb68a9cf"],["/Good-use-of-pointers/index.html","40dab43825cc7904952c9999d1640ce7"],["/Graph-degree/index.html","fe2daef45a068da60b059da49e0181c7"],["/Greedy-Algorithm/index.html","a57837a8efdf20180eeaf30bc7af9aa7"],["/Head-First-Map/index.html","ffbf2a03a4abb654fb07862431fe6680"],["/Head-First-Netty/index.html","5d5421d5af4e5e593b1cc840891b2157"],["/Head-First-Nginx/index.html","67b3f1d4a972c18b258d9b481931bc0f"],["/Head-first-Spring/index.html","e72005bd2e36da35c09096dee94bc3d2"],["/IO-model/index.html","d02464aceb6f683bcc33ec0034d553dd"],["/IO/index.html","44ce21bd58af3d15e56a35f92917520d"],["/Implement-a-lock-based-on-ReentrantLock/index.html","d545bbb4bb8b39fbbbc9a8d6b16ffefe"],["/Improve-Robustness-(1)/index.html","f20a33f3942d8caf291ad3df82431f68"],["/Improve-Robustness-(2)/index.html","7cd07005ce4d37ff2526daa53d88369d"],["/Integer/index.html","49f225ef4ec4087d4dc938153e81c08b"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","ec141afe3b99ab6b179d518a762850d4"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","d2c460cddfeb4578d9483aab7e52c89e"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","bd1420211a07a69241ed786b3baab0ce"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","dfc2bc2d2fc6719436b589267c4fe91d"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","7487f623b2ee99865f91b5412cf14a59"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","63b7aaaf2cba8e0964e264d055d854be"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","1dfa0f216f4a1a465ce7a421f13a4904"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","9d81bb12da1a734ad5cfeaa6eaf98348"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","6dbd74844d89604668dd4b05d1ee7820"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","8449518f0ee26c083187f26ea31da3f1"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","b205b4eabc7db86230d16901e8f189e2"],["/Java-network-programming/index.html","11866c6f5e2ee81908f1690fdb2ad9a8"],["/Large-number-operations/index.html","04bb4ba691788feb0226b83532c128bc"],["/MYSQL-MVCC-&-LOCK/index.html","caa203a27cbc3cabfc8bb4b9f28cb19e"],["/MYSQL-uuid-and-page-splitting/index.html","664df4e7a4574fb49ed41b1c34fd58f4"],["/Minimum-Spanning-Tree/index.html","c82dd0b7fbe1b473be290d940f04e07e"],["/NIO-blocking-model/index.html","d5b70306d947b4c885d29bc19984e46a"],["/Nacos：Configure-MySQL-data-source/index.html","5d6ff77609c1727616c1bc910e0feb62"],["/Native-method/index.html","a3eb2e5639d96948db53938bd9db0dc8"],["/PriorityQueue/index.html","52d0cd775c623e88d114a6eecdeaf515"],["/Proxy/index.html","ddfd82e293d33b23c104c8b998b5bb56"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","049a6f9221fe822d80bd4629f3242fec"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","bb71144cf0092046218402707a413839"],["/Reservoir-Sampling·/index.html","f6e55d363b4a60c26b4c9fe8161bf5b5"],["/SQL-injection-vulnerability/index.html","73dfbc25dce72810e257f6de5a84784f"],["/Sandbox-security-mechanism/index.html","3d7da1da76d6f206beabdae0e243d795"],["/Spring-Cyclic-Ependencies/index.html","1adc24f6decc60010397ca9bf7f54039"],["/SpringBoot-startup-process/index.html","c862de78ba42880863ea379d5ff56565"],["/SpringSecurity/index.html","9564f5c7d753cfa66d3e2b06f49d5572"],["/Thread_Pool/index.html","816de163a4af7481c0c882da518c0264"],["/Transaction-isolation-level/index.html","2495335d91cc008a700d9597272382b9"],["/Unitest-framework/index.html","d34a7f3914232aed80340c68d440e8e4"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","e20bcae7bc1546a2db7df46825d8e3d5"],["/about/index.html","18f406bdfe51d365b7269dcebf942819"],["/adapter-mode/index.html","cae7cb706192ef964158d7a08af0a573"],["/adjacency-matrix/index.html","e52e15893cc741befb9fcc1544ef94bd"],["/adjacency-table/index.html","ac6f328a5910888255bfe3a289ae6e96"],["/agency-model/index.html","1ef791bca3cada8d2f9ab16a64c1a288"],["/app-test/index.html","c70177241e28d8f22dd78d23e5f8b05c"],["/appearance-mode/index.html","ae2b91f3abb5dd3d59a0aad45f85af94"],["/archives/2019/01/index.html","5e64d431eb338ce3d49d91ce19881bc0"],["/archives/2019/07/index.html","16ea3d78311f5a69f01c8e2cebec3b0f"],["/archives/2019/10/index.html","034f892dd9805f658d71c036c0cf2725"],["/archives/2019/12/index.html","dc714f17a997157fb8ebf0c39ff60455"],["/archives/2019/index.html","e1fdca10a4004e7f686be4be7d9089fe"],["/archives/2020/04/index.html","c898bec7a4487bd1e5e426b9a3c46079"],["/archives/2020/05/index.html","e70cdc8fceaf55aa28619b0a9e22be20"],["/archives/2020/05/page/2/index.html","d90e5cc0aeb91b8d65e25b5d28c8667a"],["/archives/2020/06/index.html","68ab9c2eb4841c550b0157e80fb5a9b1"],["/archives/2020/06/page/2/index.html","215a7042ca977305bb286f2e9ed5873a"],["/archives/2020/06/page/3/index.html","a22ff1855af05ea390b68ba13e9a2abe"],["/archives/2020/06/page/4/index.html","4665bdd71dc0eedfdeb7340e0fa8cf55"],["/archives/2020/07/index.html","fc137735b4511d0b57afed2b65a46f5b"],["/archives/2020/07/page/2/index.html","000e194ae096081ad1856f7a7e10b7cf"],["/archives/2020/07/page/3/index.html","d626e1c9f0d8a07b246e3e4181ac5fae"],["/archives/2020/08/index.html","5791fcf0127c3c9f19060d6f1afd8f5d"],["/archives/2020/08/page/2/index.html","0101bdaa5ad22ac08a2cfb618d22f184"],["/archives/2020/09/index.html","4c814a33bf3707c5927f7cac45ce44bd"],["/archives/2020/09/page/2/index.html","c61e1726558093aae339baca6c33a6a3"],["/archives/2020/10/index.html","42a15c6621aa5809867b08ca69284c7b"],["/archives/2020/10/page/2/index.html","907cec0f1bc17eba751698b6112ee6ef"],["/archives/2020/11/index.html","03086d553e35c15108bb9140099de684"],["/archives/2020/11/page/2/index.html","a07416a02c82047944e6e2d0d83e363c"],["/archives/2020/12/index.html","56a121e59c947a850003ad8a428d0113"],["/archives/2020/12/page/2/index.html","0307c625e4d3fe2c302a760f807e44c3"],["/archives/2020/index.html","d771c39c794ede3d7bccb8084613b59c"],["/archives/2020/page/10/index.html","b5c79107c2ef7ee897dd402c42c6b150"],["/archives/2020/page/11/index.html","a271f888b341cf29b3351d01a0b9b6d9"],["/archives/2020/page/12/index.html","1a20ad0a604562f7affa6bb86dfcf4b1"],["/archives/2020/page/13/index.html","cca88ed9a86c3b81a17b602fa3b2cd5a"],["/archives/2020/page/14/index.html","f4d175b3ff0be0af7ffef4d70ebc4fca"],["/archives/2020/page/15/index.html","ec1aa48590859d85dc15d4691597befe"],["/archives/2020/page/16/index.html","f5c655f5a28a22d0467c55e47dc6d17b"],["/archives/2020/page/2/index.html","3a790294d7481fd3eeb30a4ae63fbafe"],["/archives/2020/page/3/index.html","8103feab719b853865b4f2bce7a5b15e"],["/archives/2020/page/4/index.html","f4c2778f55f62d48db8e15111abf3e15"],["/archives/2020/page/5/index.html","0f5f7aab96b357e146a81cf8bd1fbe6e"],["/archives/2020/page/6/index.html","e338ce0e8d537a6df8686c4dd24f0dcc"],["/archives/2020/page/7/index.html","991e95cf6b468704999c2bb229e6c46d"],["/archives/2020/page/8/index.html","decfc75cb1de14be4f5fc96e30e9dbb6"],["/archives/2020/page/9/index.html","7da3d4867437a28b5d61287f084f33a8"],["/archives/2021/01/index.html","82f43cbf056756ee455c525fc0663077"],["/archives/2021/02/index.html","58d39ea9cc0c057f6491678fe3e5d43a"],["/archives/2021/03/index.html","3ff967d2e6d22aa3342c1449e942bf57"],["/archives/2021/04/index.html","6078d04ff72340e660329b55012e1511"],["/archives/2021/04/page/2/index.html","32a41e7c8035967f8a9dbff95fd862c7"],["/archives/2021/05/index.html","3ec119eb3020fef3a15fb0c86718b9a5"],["/archives/2021/06/index.html","2971806eea92a7208014c99df10dd8d5"],["/archives/2021/07/index.html","de52a7b2aff60733bdf48fd526e5d0a2"],["/archives/2021/08/index.html","4b69347adbb09e915485578de8695323"],["/archives/2021/09/index.html","22d1c4a784a85229440a685fc9c3e25c"],["/archives/2021/10/index.html","a07cfca8ea49a122cc0527c553dd811f"],["/archives/2021/11/index.html","7455e0a5b96ccd110e7907019b4a6e19"],["/archives/2021/12/index.html","5b741019dc13c14c1a671e69da8e1228"],["/archives/2021/index.html","ae4adfb6fd68c52ca91a7855edac40de"],["/archives/2021/page/2/index.html","cd447f5a905894fe31c218335078f527"],["/archives/2021/page/3/index.html","11886290cdee5e599e271a1a413bb5c2"],["/archives/2021/page/4/index.html","0f8f81594dfcc8b483bef239940e53bf"],["/archives/2021/page/5/index.html","74349975ce2f0a6f8e56ac9a2cacf187"],["/archives/2021/page/6/index.html","6a3334e00d1fc27943c326d98231d11c"],["/archives/2022/01/index.html","dc87a8f72b23e63194f21cf167f0c3f3"],["/archives/2022/02/index.html","77d824557e2a18223ea53da27dd6b9ac"],["/archives/2022/03/index.html","b68b9b9e0369af2738c793be8887ab24"],["/archives/2022/04/index.html","4b67e61c5b1597f98f18ea8b634c9069"],["/archives/2022/05/index.html","be1a7ada3ca032849315d85e744ad0d9"],["/archives/2022/08/index.html","1348c7c9e6f4ca3b8b283cc1c8a522a7"],["/archives/2022/10/index.html","2354d3ebc458b5c308b9f2bbcdb9bd57"],["/archives/2022/11/index.html","5695fa74ee6178ce8e8d56f35e6c61d8"],["/archives/2022/index.html","c7478d2d1c1c1c89681124329cab8e92"],["/archives/2022/page/2/index.html","e850520bc6b19f1b70b76e660fae6d83"],["/archives/2023/04/index.html","628aeb8da352850679a457b56d6d8a10"],["/archives/2023/06/index.html","7e512e346facaba42945d1ade556fbf8"],["/archives/2023/index.html","18ba64c17d790cbe7f05c8712dcee57d"],["/archives/index.html","aa27287972964da87965c5239b2fff46"],["/archives/page/10/index.html","39ba6c6c158ef07b32f6b061e42aa7ce"],["/archives/page/11/index.html","79eb8b1333829a4bdd2f6cb9b826dd1b"],["/archives/page/12/index.html","f70105931cec6040e124b7cc925aa122"],["/archives/page/13/index.html","a948e433e310cf381c07258b08bbbd92"],["/archives/page/14/index.html","64cb340f92e3134298fb1c5f6a4444f9"],["/archives/page/15/index.html","376da49b287a3ce742bc9021657000ea"],["/archives/page/16/index.html","5fea75568779cb70f18c1ca2221b9b67"],["/archives/page/17/index.html","5e0cf8efe28278ebd81004fb9b19afdf"],["/archives/page/18/index.html","a9f0eebdeed2c241dcec51d24beb6793"],["/archives/page/19/index.html","d970a25a46661841960949c27dabc295"],["/archives/page/2/index.html","0c5955959500741747c4cefcccbf3fe6"],["/archives/page/20/index.html","6bab80f68dfa9e64e6b8eaae68daf308"],["/archives/page/21/index.html","6e498fe86afd6c4f3db64250d99b9cf4"],["/archives/page/22/index.html","5c99e55786328061bede6c34733b3224"],["/archives/page/23/index.html","2b4cfd0fd0099e3a40d1816a170b72d5"],["/archives/page/24/index.html","a0d694c3efa7560ee6277aa342e85f03"],["/archives/page/3/index.html","b9c738b44e9db7f495b63359552c7fe6"],["/archives/page/4/index.html","8a19d7b427e8cd0c6aa0203271fda2b1"],["/archives/page/5/index.html","081799147d87cde5ea028d0833082b23"],["/archives/page/6/index.html","8a1d69acb380bf87ae35c846998f29fd"],["/archives/page/7/index.html","3cd4e3ce98336878fbf2e842757e57c0"],["/archives/page/8/index.html","e211f2c9b9a2660d52f74ad226842836"],["/archives/page/9/index.html","caecfbaa858360b064f4fd7635af65b1"],["/array/index.html","d80aeab48e4e8391bb3478a8b3e05e9f"],["/automated-test-katalon/index.html","cf4ad64ef9951eec20299ee7d527e341"],["/automated-test-selenium/index.html","95a6cb3ab42541f124459640f375a575"],["/back-to-table-query/index.html","72bddc99c540d4f6d67c448fae2d1934"],["/binary-search-algorithm/index.html","fbeb21cf5ac8d9671eb4518c3f0346db"],["/binary-sort-tree/index.html","6d9c458b8ac3a55b76d557cd98251e38"],["/bionioaio/index.html","b07edf64e21801ec72b896d25735d5ca"],["/bridge-mode/index.html","8eb6449459024ed81526ad1bdfdbdd5e"],["/builder/index.html","9cf1238e0c033decf241d189d84b8d98"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","c75fdc95ee71519c43050f7868704404"],["/cache/index.html","c8f3ab9361523438b97ae1cb3f1cd1c0"],["/categories/C/index.html","219f6306bc17454a5f8a31d538c4d8cd"],["/categories/SpringMVC/index.html","bbe9593caad550073ee9081f3c14ffb2"],["/categories/categories.html","bc82c65bbee3d133379476b5d2c7e4d7"],["/categories/index.html","9cde782d1476dc9edbe78fc6e9207262"],["/categories/linux/index.html","498f9ef2d7366f0bd0b798dad768002a"],["/categories/分布式/index.html","888fc647bff9605a3b33c1bd5507234a"],["/categories/分布式/page/2/index.html","f183a0a02253f76ec0daf91beda41919"],["/categories/设计模式/index.html","dc4ae31516c616053adae14e4f76a127"],["/categories/设计模式/page/2/index.html","abd2f1f7e313d8d8534908dfcb71f226"],["/categories/高数/index.html","8b69bf20dc9f3e2b37c0ec2a17743758"],["/chain-of-responsibility-model/index.html","4e52c6bda66b4d26821d6e17f132d5c3"],["/charity/index.html","52fcd1ddb8986dd3139d3a3609fc0a98"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","10e6ea644eccdf9298678ed5179d23a6"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","5d3909f7064cb78cf41633a5b8494535"],["/combination-mode/index.html","e31cabca1c6330389eeb50cce7b79f4a"],["/command-mode/index.html","89df87be49b6a493be4bf7dd46faf82a"],["/common-commands-of-unix/index.html","a5132edfbac914ebe8249c140193d685"],["/computer-network/index.html","b415c35e6b1802f9bfebdec764dec4f8"],["/concurrency-principle/index.html","e6ba8b2bed01c9cd0c4abe2acb4351ef"],["/continuous/index.html","b8a3fef812f55ef0de17e508e1cdcd14"],["/contract/index.html","368a34d27028d9ee17eda2f5aaf38c2d"],["/create/index.html","96a5487bec0358d722242b5108c3e5df"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","774047fa6c41d4cc1074afd12add5939"],["/data-structures-and-algorithms/index.html","78b909d57dd8bc794a4469b8b663c4f4"],["/deb/index.html","bfb1e3428ee00791d7704c3bbff4e639"],["/decorator-mode/index.html","2f972a9970701dac6612d9cedf6fe1ee"],["/definite-integral/index.html","c1c29bd42aa6b1d925d50f3f0a4efac6"],["/dependence-reversal-principle/index.html","d1800e0c5e97f80e1dcbe361c0ab3169"],["/derivative/index.html","a32bd50583060db2d78403fd7f8087ec"],["/design-patterns/index.html","2d6e3068b08ec76c38c50fe53c38fddf"],["/dic-algorithm/index.html","c525f043f5af30a024d6950579a8bb71"],["/differential-equation/index.html","583706f827072ed686ec529c1d6ce2c3"],["/differential/index.html","9004464612c68dfec18bb31d3665923d"],["/dimits-law/index.html","eaad1089d09250bc650c4230f31e025b"],["/distributed-lock/index.html","d6505bb61a9a5ddc4f8cce35fe38bdbc"],["/docker-virtualized-container/index.html","d22b7953e67a784ffb59f103bb93fd16"],["/double-integral/index.html","d0f7e3bdbc2a3f63a53de913c14c08a0"],["/dp-array/index.html","af54d0268233fe2a1945e4cd2f6b714c"],["/dynamic-array/index.html","dcf27772268b16c61f82e67c23bc3e8e"],["/dynamic-programming/index.html","14a82dc7c25242aa60cc10fa1e808f78"],["/edgeset-array/index.html","91f2c6bed110de1cb44bf0b1ce30f21c"],["/encoding-algorithm/index.html","b06de2f2a30bdf0976b5d74c5538ad01"],["/eureka-service-registration-and-discovery/index.html","11abb8350fa70bb533aa2928cb9996ac"],["/extreme-value-and-maximum-value/index.html","ab38d2b55e50c032e477cdc3ef376516"],["/factory-design-pattern/index.html","7f937a9751b35a8b3a2889a4858cc0fb"],["/file-input-and-output/index.html","e59bf62c58f2d4445bf8922069764c85"],["/flyweight-model/index.html","978ba8dd25c59e90f7c92c7ddb3176f7"],["/friends/index.html","e4b8ed7e29bd7280713973e50d557805"],["/function-graphing/index.html","52a15419b40b3b33c0421b4c68a165bc"],["/gateway-service-current-limit/index.html","04de143c3d9220e72586a25c20bb4bd7"],["/gc/index.html","71a58c7af3dbaa44258c8f4a6d8c8066"],["/generalized-integral/index.html","bed7f0af135ba4478d0142ad5043e191"],["/google8102e2f35ce9e391.html","4704791182e8e850f24c9d5175d70a51"],["/gulp-compresses-static-resources/index.html","7a3dc065c4d086be59067e440bca4c6f"],["/hash-algorithm/index.html","deaa07f85a112faa5071eede6ebd56b6"],["/head-first-JVM(1)/index.html","51b9c53110f8d0f18f8bd6deff21cc6b"],["/head-first-JVM(2)/index.html","d201d7f104fb5f1d36d6331813173186"],["/head-first-JVM(3)/index.html","f1f9f260db71944a124a65a1be43c9b3"],["/head-first-JVM(4)/index.html","3d8192039052b67023f2d6534d5a4461"],["/head-first-SpringSecurity/index.html","00816cadb833bbca9c7500278bb753ed"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","3439ee1d156aa973d02823684debf449"],["/heap-sort/index.html","a608280971223df52153b27ee2c93bcc"],["/http/index.html","221dc1eb908b68459dc98d1f6324608f"],["/huisu-algorithm/index.html","3fb61fe0362459b746e8977a5eb98fb3"],["/indefinite-integral/index.html","b032e07d1cc000c7a374de3f4ccaf2e5"],["/index.html","943bf0df64bf108607674c984a0d0239"],["/infinitesimal-and-infinite/index.html","8a971fb49ea0540a809b2de98ff84ef2"],["/interface-isolation-principle/index.html","f7244d621af7022d19b024e833c16933"],["/interface-test/index.html","041b6fa5efba8cfbe2ff7676bcbb92b3"],["/intermediary-model/index.html","83ba4f49033347b1df1b733df247521c"],["/interpolation-search-algorithm/index.html","eb81bbc5f228bf44fce7f932e7bceada"],["/interpreter-mode/index.html","b87de39c0217abaea82253decae6d677"],["/introduction-to-computer-network/index.html","ad3b18ee0de0122fc52fbbf2bdb55c91"],["/introduction-to-operating-system/index.html","2c508cc6cb7b8be48a319efe1d287fe4"],["/inversion-of-control/index.html","f923cf82c6d752533ae7ede10e60cb38"],["/io/index.html","e0489418fb2496a0488923c038573548"],["/iterator-mode/index.html","6b1cbb7bf29d92be87d1020972850fb6"],["/j2ee/index.html","50d015942f5b7ee4fe6f00d83e906dca"],["/j2se/index.html","c24af1125aa3d39657ff9657425c98e7"],["/java.lang.String/index.html","d90bc333241f1c1234313398c15f43af"],["/jdbc/index.html","f438484c38b82bcedf1babe7cbac0449"],["/jdk/index.html","1765fd525272fe23be69d9b86a4e84cd"],["/jmm-memory-model/index.html","8c48af0f5df54229e39e10f6a57a3b3e"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","a1d532faec71da87d49c0460fdc38ebe"],["/jvm-method-inline/index.html","7ec102716189be325749899044be7f7c"],["/jvm-tuning-practice/index.html","1a04ed70f940054699e8c598e7ed575c"],["/jvm/index.html","b6ecc289afbfb0cbb4bc4c9e7cff474e"],["/law-of-robida/index.html","8b981d8b99651e23ec4e13e542cf666e"],["/limit/index.html","bf522402532b09f802c37a1991b9c7e9"],["/linear-search-algorithm/index.html","c2b0624c5b36090f9eb5152c83853218"],["/linked-forward-star/index.html","0963021f91263673a337fc65d045f13a"],["/linked-list/index.html","dce646ba758988c4091f248005adad50"],["/linux/index.html","773ec2d0e69b39e59370ab64373c232e"],["/liskov-substitution-principle/index.html","1109f179d6e30ad3b9e495e393d97ed3"],["/lock/index.html","eb6a41d39403a7c2696ff9c2200ad626"],["/lru-cache/index.html","2f7c7179f157751b8ffae64530d7f957"],["/maogai/index.html","c8fbecb96b336b1aa70d2dc8f85a9f3b"],["/memo-mode/index.html","c808db01b7e9a885a5940f98f3c8d898"],["/monotonicity-and-convexity-of-functions/index.html","5efd1b70492776d87f33a1c267967f17"],["/multi-function/index.html","258f03b7db51e37d5884cc26d3c50694"],["/multithreading/index.html","32d523777512f127ef441d6004e786e0"],["/mvc/index.html","a6c923d17fe20c432b65d29d4e5d94e3"],["/mybatis-cache/index.html","724a3457a6b65f0e36c60c9bc0a02cfd"],["/mybatis/index.html","9122bc03548fdbaba72b0f850b312233"],["/mysql-index-wrong/index.html","a7498abcbbb54255519edc9a330c2dde"],["/mysql-struct/index.html","92591f98b7fcabef5de81aa8385acb44"],["/mysql/index.html","aa7f02343934189b94c05c994a7e50ca"],["/nacos-service-registration-and-configuration-center/index.html","1a5ca905524a3b2df86e6f2c05b4b309"],["/notes/index.html","e3f33409c714b328767725346e791c01"],["/null/index.html","3cb9b08db91153a325e981904642973e"],["/objectoriented/index.html","9894bbcfb63195769965bf14f0785507"],["/observer-mode/index.html","2a6d4c5b3ad8ea4797462f4da05f0c71"],["/off-heap/index.html","8cf8ea9876094c0bf97952e9d61e52b9"],["/operating-system/index.html","558e57fd29afbecbec6a6695b1fe5bdb"],["/page/10/index.html","de689c3684c45e61c0701fcc18ba0100"],["/page/11/index.html","16da4c7e5e17457d3a9200ee2ad6d388"],["/page/12/index.html","d64cc3402a1338b0571ef09a5669fc25"],["/page/13/index.html","be8ac47ad8d27a9698665e5ea3a69ba0"],["/page/14/index.html","0bbf62b110fab313a5669d62cfc23fbf"],["/page/15/index.html","3bd0dffba1946773b5069c134bed2a59"],["/page/16/index.html","21c4bc580bcb25390902ca996a96344f"],["/page/17/index.html","56b3aa1459fa6b95615298620b00a668"],["/page/18/index.html","6cecff29d38a8d4334225001501ae2ac"],["/page/19/index.html","f535539b0e1029ee6c85b098ccbf663b"],["/page/2/index.html","55f8e339e062dea68cb096c62f493694"],["/page/20/index.html","8999ce8dee15ad2b1271739e5144b245"],["/page/21/index.html","58ddb42802ee399bc918a85f60898b38"],["/page/22/index.html","0a5714772e3756dd97bcd47354581544"],["/page/23/index.html","fe5d22f1dcad97c497575ddac66d473a"],["/page/24/index.html","32dd8458e48e00b54507be276ca67b28"],["/page/3/index.html","331638931bf2fafce11af6ed7c5b5d4e"],["/page/4/index.html","83bbec5550ab414e9f4cb9cac2f6508f"],["/page/5/index.html","5e71fcda011a67b9f19f3c6edd4748e3"],["/page/6/index.html","747cc62786669c64b793d97017385e96"],["/page/7/index.html","c0305da5fd9dae51bae137bd39baa228"],["/page/8/index.html","d6cc772120eb177233efa14674026b4d"],["/page/9/index.html","1accad5ba5771bec94366b29b50aeef2"],["/palindrome/index.html","38ea40b2d8f2059386f37bdc50c201ea"],["/partial-derivative/index.html","2c4e1d0a1bac0b4e20354d1678f1cc0e"],["/pass-by-value/index.html","b0da767e980b1e9f86da19e5096b56d1"],["/pictrue-bed/index.html","5925d692fb00a1fd524c95473c0dbe8a"],["/principle-of-opening-and-closing/index.html","53b4f6e7bec21ecef971e93046745f02"],["/principles-of-computer-organization/index.html","acba346849aae1764ca821e29f4b7733"],["/program-test/index.html","9eb48755b4680ef68f599a931865083b"],["/prototype/index.html","29025d6864df63abc3fa7a1c3b949616"],["/queue/index.html","5d71dc427506392e5f58438ddca8942a"],["/random-weight-distribution/index.html","3dfa77ce06580b8fc9e91585323c5a78"],["/realize-modular-programming-with-functions/index.html","13458118ddf877329d71dd02e9fc5c4f"],["/redis/index.html","c3586900004a117f3db7ac5b115fc41c"],["/reflection/index.html","65db619a859a0f44a4d4ad5a1f48df96"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","5915cb32b0bdef2d6d9e7d532f64b37d"],["/ribbon-load-balancing-service-call-degradation/index.html","e53a03268a1bc93286bd7fb313ca1512"],["/round-dp-algorithm/index.html","dc02595849e93c880b3d9e90510aabf7"],["/seata-handles-distributed-transactions/index.html","6f26d1b383788f4e93671ac38d09ad65"],["/select-structure-programming/index.html","1dee86627111b59a9df0d765bcb49132"],["/sentinel-realizes-fusing-and-current-limiting/index.html","8cab0c2eeb269921232b41b4fba8a1cf"],["/sequential-programming/index.html","93e1012a7b2836ff5110fd314fd8534d"],["/series/index.html","bbcb5fa4fa54f7c831bd4278a9afe577"],["/service-worker.js","804370d0bbb28346e1dc648a7686efed"],["/single-point-login/index.html","8e0c6dd3b42777325e7751383f165b14"],["/single-responsibility-principle/index.html","2aef1dd6ea55065acc54cbf6e53f4a64"],["/singleton-mode/index.html","b054b80cbe6cc660e372298d3d86400b"],["/slidingWindow/index.html","699333a0d97848fbb17e2c075875f5fd"],["/snowflake-distributed-id-algorithm/index.html","62b7d7958d8e6bbc0f4c9e347f958ce2"],["/sparsearray/index.html","6b7ea4feaf07c5c00267901aff2c7950"],["/spring-and-jwt/index.html","7e88a3605531f11b6d6ac10e459401a3"],["/spring-architecture/index.html","9e4fcf8d2e3be503f7d5538494bf7a25"],["/spring-relate/index.html","7cd4b01a193b30338d88e6cba4fda047"],["/spring-springmvc-mybatis-integration/index.html","3f37c00703834cd7299650076412e785"],["/spring/index.html","4939c3f9f5a92cf9c9a41eecc717be6f"],["/springcloud-alibaba/index.html","3e9118e4f2a72b04ad197c983ae969c0"],["/springcloud-bus-message/index.html","8d335e2910b8f5ea98643185a01f8d39"],["/springcloud-config-distributed-configuration-center/index.html","9cd5ff3d9bc0215f25620b89ac44cd3d"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","832b11c15c08da431bf4bd96461d0b56"],["/springcloud-stream-message-driver/index.html","38e779158e7d6bc3ac2e21a59ec47786"],["/springcloud/index.html","0d825967b0e6e568e20be36cdb1aca1e"],["/springmvc-environment-construction/index.html","6029f962524ac53b0d17bc875a38be7f"],["/springmvc-work-stream/index.html","ed41aba7e05da6e0e478550ea194bcda"],["/sql-injection-attacks/index.html","7baf3f5ac9810bcc4af0c13d988aa2bb"],["/stack-simulation-iteration/index.html","78f1f1633c809f649f5e776f88e5504e"],["/stack/index.html","c011fc8e4ada4ed282dcc5b09dad443a"],["/state-mode/index.html","c40fa2e7b34bbaa81d2a00f03ad5cc93"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","6fab1578d62220f9651dc66dd539b7f0"],["/strategy-mode/index.html","67b67bf1669bd6b4f84582079b45fb9d"],["/sw-register.js","a1bd1071917b9bb933806357d4bf6fa8"],["/synthetic-reuse-principle/index.html","c49b145025994d2198bf431b026195e5"],["/tags/C/index.html","f9aa88632f8b421c783f36da06d601c6"],["/tags/C/page/2/index.html","05cd61fb825c2b6ba7a361a5474e1437"],["/tags/Concurrency/index.html","291ae17d35eb775449b4adff57799c79"],["/tags/DesignPatterns/index.html","cfa0ecce75ca6d0fb610b4ce4de4c596"],["/tags/DesignPatterns/page/2/index.html","f3360825be447f988a1e367968f093ef"],["/tags/DesignPatterns/page/3/index.html","b9e7d89b0cda1b7331432a49b240d4fd"],["/tags/DistributedMicroservices/index.html","048bf1002673efff0db5408156b3a5f0"],["/tags/DistributedMicroservices/page/2/index.html","c811e68223b3294af2b5f40aebae62c5"],["/tags/Interview/index.html","ba8e67ee4d1d7a51cd5151ee666188cb"],["/tags/Interview/page/2/index.html","dd000846e1c67cf1b0a1d1f2e9d24f98"],["/tags/JVM/index.html","8befab80eb20f70b7b9deeec7942ab61"],["/tags/Operating-Systems/index.html","e75fc239c3ba2b16bc8680cc715ef617"],["/tags/about/index.html","7bfbef408a1ba35c976e74ddc0ad0bdf"],["/tags/ad/index.html","c20ae03e69944ecb7102cb4f9e560ac7"],["/tags/algorithm/index.html","ebd68fe54cd4509a70c2085ec93dc24a"],["/tags/algorithm/page/2/index.html","cb89e0fb2f8347c633efc0a730793b10"],["/tags/algorithm/page/3/index.html","324ece893530794c54dfcff79678e68d"],["/tags/algorithm/page/4/index.html","4d1642e6db70636fa228d6f6632253ce"],["/tags/bug/index.html","20c0d1440b19718003ea7a6081dbe73a"],["/tags/computer/index.html","170f59609299c50a24c758620ed72f85"],["/tags/data-structure/index.html","6a4e59afdada4a439d3b7ee7ed0a4046"],["/tags/docker/index.html","d4f1353e293d79a36f72dfe236c8aa17"],["/tags/famework/index.html","aa4958af91403bf0429f6b0e58cc4076"],["/tags/frame/index.html","fb2be8e4bad85c0ce0e5b031649ccbc6"],["/tags/frame/page/2/index.html","94e42382534a1879691131921dd84b58"],["/tags/front/index.html","54cbc6b821c5444ca687a3a662c2c570"],["/tags/github/index.html","de2b0877f2085737f37e1f8c3aaa1880"],["/tags/index.html","c459e387250d7fe6e8847c74b1378998"],["/tags/interview/index.html","43cea3842b95653279fc71e6c2c1c5ad"],["/tags/io/index.html","fae117588b11f49f1d5d31101a94ef48"],["/tags/java/index.html","139558a11f0a667ed5abaf736384022c"],["/tags/jdk/index.html","a0c034e5e10e66ad7847f33066f0a24f"],["/tags/jvm/index.html","ff45b864f2ccfbb0c59a4ef04feb2f85"],["/tags/jvm/page/2/index.html","1fc8b501da3e6fde6ce730535e617571"],["/tags/linux/index.html","8c49baadf6ac830f7d5cdcb98e2a7e55"],["/tags/maintain/index.html","becf848175bdb6a2a409e6ed77e0d6e9"],["/tags/maogai/index.html","cebf8dd3ef3db4aa172b5a2cb8e0490c"],["/tags/math/index.html","5c945522dc2f37b501ae330a305dbf39"],["/tags/math/page/2/index.html","9b9f23d86be7cdcb061137ab887f3cda"],["/tags/middleware/index.html","25479ead05e4076a397171cd628c4f02"],["/tags/mysql/index.html","e57ac502adb6c9112388343371c007b1"],["/tags/network/index.html","23adc713bd8d0a4506a1c4d92ded80ac"],["/tags/project/index.html","d42dcf381a8012e488dadf02c183edd0"],["/tags/project/page/2/index.html","e4d9e3538faee4c579f08e3ae8991c8e"],["/tags/security/index.html","386befb9a6a19446039159d11a183e68"],["/tags/sql/index.html","5a9b7a4104b1ab79ea0da89de56c5efc"],["/tags/test/index.html","6b9c6c1c5a4b965d50f8aadb4eb9dc6f"],["/tags/think/index.html","e1ba33d0f778d86ca557a64e9589af73"],["/tcpip/index.html","b0354113d2d19bd7466828b935a6479c"],["/template-method/index.html","bdaf907e92c0b6b814079b3968d61dd3"],["/test-case/index.html","9340201d307f0c366aa120484fa0186b"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","3c17332f2e66b9b052ac87913727bda2"],["/thread/index.html","5e9fb07f86cc566c1f96dde4869c088f"],["/tj-horse-racing/index.html","a9e6be5b9ae6a990072da2cb3f4af069"],["/topoSorting/index.html","99e1490fe3b7f3074f98ab4ac6297bd9"],["/traffic-monetizationaccess-to-google-adsense/index.html","eb0b86e05f39d3338f84b4faa5bfafa8"],["/txCharity/index.html","468137995d9dd11d61321b76b7c2d005"],["/ubuntu-set-ip/index.html","f7173cc0521289a0b44ad6ad51017e46"],["/undefined/index.html","6a85306f210d7ab924ae8f3dcaf71b1c"],["/use-arrays-to-process-batch-data/index.html","38199fd8c0e98cdc5d0443fa52e57cd9"],["/use-of-springmvcmodelattribute/index.html","77fd1dc5202602d110b062e807792bbe"],["/users-create-data-types-themselves/index.html","1207200f889493823c288857b7fe9df1"],["/visitor-mode/index.html","1c724b1c1ba10783d0405e355ecdfd18"],["/what-is-milk-and-why-is-group-wise/index.html","4cb848ca9900f32e35640f156dd63fb4"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","a96b153e1ebd050ed3f1ad8c5fe33054"],["/xss-crosssite-scripting-attack/index.html","a307f8265adf214c208008592625c837"]];
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
