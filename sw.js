/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","2663f9ed7293c005c5d3279d3c85e4ed"],["/404.html","1e16e90ef7e98ff421f0ae98ebd9ef67"],["/404/index.html","d4009a736246de7ab0070bd60d8e3e05"],["/7-sorting-algorithms/index.html","32485511bd09ba38283d98a43d519236"],["/AIO-blocking-model/index.html","5b760b5bb37d4b6a6887111eaa133423"],["/About-Snowflake-and-Consumption-Degradation/index.html","fce9a408dd1446cd56a99c41b031f9ac"],["/BIO-blocking-model/index.html","61d10c77c32f2e9ee88690081ac43c00"],["/Bloom-Filter/index.html","ca3812f706e9ffb3d8905a6d36c9ce2f"],["/Boyer–Moore-majority/index.html","67229b4078fca2c843ca07eb5bd9f577"],["/C-algorithm/index.html","5a1115373f1262af2a505be45f68318f"],["/C-programming/index.html","cccf69eed4fae50129e479a97e9ee8c8"],["/CAS-&-AQS/index.html","a353b1c37315c9f62a7bd26377ce00ec"],["/Comparator/index.html","2566a7944ad2cc7e81bfe4fea7a809ae"],["/Differential-array/index.html","0c8eaee3c1b9eee14a4bf0df51a48dc4"],["/Download/index.html","ec801fa5ddc586fce10d6e78b2b64992"],["/Front-end-security/index.html","09358f98c7b5b0303c9c8853b45adb92"],["/Good-use-of-pointers/index.html","72da64c9e600cf2a6a83e22689758c4d"],["/Graph-degree/index.html","662f446847f7311047956538fb30e02f"],["/Greedy-Algorithm/index.html","ff014de7cec43c132437e42bdb3bb15d"],["/Head-First-Map/index.html","4d2966172ea493af890ead9a51d738f9"],["/Head-First-Netty/index.html","549b1b4075ec1d825fecc1df8b44cdb9"],["/Head-First-Nginx/index.html","10db82109e959f66384c9ffc01b0f5f0"],["/Head-first-Spring/index.html","b51c12a9092c13210348a814e3d8d417"],["/IO-model/index.html","7a15a6502c07df853124c736aed3719c"],["/IO/index.html","8fd5e2b51f375c9a7277c179e56d2581"],["/Implement-a-lock-based-on-ReentrantLock/index.html","e4b0b82af00875202cdaa9748468ab0c"],["/Improve-Robustness-(1)/index.html","ca0880d7f5ef563812a1af18c1c08711"],["/Improve-Robustness-(2)/index.html","00944b19b17ed5a855d09325e2e93836"],["/Integer/index.html","6336c5183d9f7851305adb5fe9df8382"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","0e9ad29862e3e15ae623a876f122379d"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","65255070c64145de36035cfb751828bb"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","5b23cfcd2be9a581db45b2c3b7fe2805"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","5cb5d1c2fd519ee934aed1dbb40f160e"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","c2f040ec32c6fff2c5a1ab1974dbd7b9"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","bcb5528034a4477fed7c3cd604cce9bf"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","79c727f59b2b4b867a062db612a69f3c"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","b0fd99aed2cec741b790df147fb2fe33"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","58e24e5c854ff118e3444d1340325e8e"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","93fe9ea5a407d6565215f5b6caa77604"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","4f984d99fdaf73152490fcfb832cda75"],["/Java-network-programming/index.html","bfa711b2316004c8f4cb3ea3f3b5fc8e"],["/Large-number-operations/index.html","660f6afbd31d24ed8c6d6cf0a62f72f7"],["/MYSQL-MVCC-&-LOCK/index.html","29133ea0b8e6db453add4af85a8d3a7c"],["/MYSQL-uuid-and-page-splitting/index.html","9a548684acda160ef526caeb2d4aa03d"],["/Minimum-Spanning-Tree/index.html","e4541a0b54eea771acf5b6b64b0d0e02"],["/NIO-blocking-model/index.html","d82243caa4e2920653673d497024b027"],["/Nacos：Configure-MySQL-data-source/index.html","8e071a2f6fb1c7e9670ced4174112ebd"],["/Native-method/index.html","aae06d3c8a0c84e9902ed2c84faae329"],["/PriorityQueue/index.html","574dcd66544330ca4159faa9726bea8a"],["/Proxy/index.html","4d41527218aee3b283b691b46c660e39"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","020acdf0198ce6e61b8afa4672d95a9e"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","845b8689e2df3bd520a8422c14fc75f6"],["/Reservoir-Sampling·/index.html","881079447c158ba458108aef76fde88f"],["/SQL-injection-vulnerability/index.html","079fd7a98b0ae069618bac14f9f78050"],["/Sandbox-security-mechanism/index.html","e27967d06b6549ff58ec0ac9b5047269"],["/Spring-Cyclic-Ependencies/index.html","f533542a007d467bedd0def7d8321d3d"],["/SpringBoot-startup-process/index.html","4e07be23a215bf2c2e6599d438499cf7"],["/SpringSecurity/index.html","e766db41d0b310ba294ce936a142942e"],["/Thread_Pool/index.html","784d9f2146c205e275db8a0b8d6d8ffd"],["/Transaction-isolation-level/index.html","399e39c90f0ab2753e6634f3fa991b32"],["/Unitest-framework/index.html","fd4a1819d701d7ed353306b5ce93cea4"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","affcf8c43d2ab775f03f40e5f860a029"],["/about/index.html","a37bb0a07d6b2fa2d22102fbe097865c"],["/adapter-mode/index.html","9db45a6f2a25b9f0253a5d1dd51bfd85"],["/adjacency-matrix/index.html","d7ec3877827c9e24369aea3718e9403e"],["/adjacency-table/index.html","2e55fb2e1af20269a11a55edd968d5ed"],["/agency-model/index.html","0600b0c65dcb5437bb2f2e34c52df323"],["/app-test/index.html","b024f7d6755d5b29a4478bced59050ff"],["/appearance-mode/index.html","e675e7ed29b3ec360893dbed21184efa"],["/archives/2019/01/index.html","99cc6741219c83f6fbb2a70654f86c91"],["/archives/2019/07/index.html","9b8a635be8f150d0689075e77ff417d1"],["/archives/2019/10/index.html","c920e024b16095aba029479201f9089f"],["/archives/2019/12/index.html","f2c3401c97be76464f3052e8d1821a83"],["/archives/2019/index.html","915f0ac616c34e1e2e979c55afc556fd"],["/archives/2020/04/index.html","c81b3ae2072726fcc2e40d0ee6681a73"],["/archives/2020/05/index.html","8ff3e0a7bafaf6f6c834ab3189948287"],["/archives/2020/05/page/2/index.html","2bbf317c6cc34b68ebaa32aaff07a9bc"],["/archives/2020/06/index.html","088ab008b3203371a589f3336c32d886"],["/archives/2020/06/page/2/index.html","e27ff81892eacacb9ce75da43e2563df"],["/archives/2020/06/page/3/index.html","d1355738643fdc2ad265db7932ab48ce"],["/archives/2020/06/page/4/index.html","0be3a00d9f4f8819192f7ab49d0f7e4a"],["/archives/2020/07/index.html","f599a05e7f88e928c8f10406e6142508"],["/archives/2020/07/page/2/index.html","d0ea5793b5f98971f272d98772f5bea1"],["/archives/2020/07/page/3/index.html","c94d2683ee738704046128b4c3b0fabc"],["/archives/2020/08/index.html","d8daaa13881d4a3859ae605b0f99a921"],["/archives/2020/08/page/2/index.html","eacfe64210bf30f6972e84e1b023b40a"],["/archives/2020/09/index.html","f378afc874567a07470387930c7c1f0c"],["/archives/2020/09/page/2/index.html","af4a728f6071b2a40d5d703452f6a4ec"],["/archives/2020/10/index.html","df82b4f0c150b06c65a999cc88283979"],["/archives/2020/10/page/2/index.html","93712dd94979ae8bc0d525d0a1d6b538"],["/archives/2020/11/index.html","7163f1dc324ea89f189f87e97eacae12"],["/archives/2020/11/page/2/index.html","80a32b6351f9a3b964125f205c490424"],["/archives/2020/12/index.html","c03d6628124287c2c0a058ad526d28eb"],["/archives/2020/12/page/2/index.html","d14a182b72d19705abc5c7dab770eac6"],["/archives/2020/index.html","d431a34eef7012545fb0f09cd77d8706"],["/archives/2020/page/10/index.html","725fb8b1345bf087ba0143cca8397e16"],["/archives/2020/page/11/index.html","2f922b26d55f62f3a4d7430627de65fa"],["/archives/2020/page/12/index.html","b24ace049d4e9472cd86818d18ba308b"],["/archives/2020/page/13/index.html","344bcef395d892bb4787d2a5b0a7c912"],["/archives/2020/page/14/index.html","f52a1b78e24997e22e71fd586eeae3af"],["/archives/2020/page/15/index.html","d29b12ab7e037b1cb7dae0d2e78e619f"],["/archives/2020/page/16/index.html","fe0945ad1617a6ae9ca114684d4e0192"],["/archives/2020/page/2/index.html","7b2f0b18f722feecd69302bfc59c350f"],["/archives/2020/page/3/index.html","2a7f6dbdaf8f68cf37934b646defb8db"],["/archives/2020/page/4/index.html","3f01b3a56a1d9bc977eab84e888cd3d4"],["/archives/2020/page/5/index.html","456dd334387da2f6fa9e2c5cf55d76f9"],["/archives/2020/page/6/index.html","40b16989de91f66c3bf17ecdae38e2d2"],["/archives/2020/page/7/index.html","9faef828d1baf58372b01cc6b32f4dbe"],["/archives/2020/page/8/index.html","eef0fae7dec44024c1abbf706b6999aa"],["/archives/2020/page/9/index.html","8c2bbe4c36f52b6cedd2b704c71f4eac"],["/archives/2021/01/index.html","99d266c745cecd13f841deb39d7ae309"],["/archives/2021/02/index.html","11943cdd84afd4e299d6d9585dafce6f"],["/archives/2021/03/index.html","8e10a1dd86bb42bd8bdfd959b14dddae"],["/archives/2021/04/index.html","cbefe36ccbf57ac0bf7316ecc6fbad6e"],["/archives/2021/04/page/2/index.html","746d6bae2928596b0111150b4248896f"],["/archives/2021/05/index.html","2fc6e8723ed97b941639c104ac61c34c"],["/archives/2021/06/index.html","51550133fb9c7e3a2716d592a7010103"],["/archives/2021/07/index.html","9f001ddfa29f1a9b98531eba3c824719"],["/archives/2021/08/index.html","fa44f10a7e6337439872a45f3b698e3e"],["/archives/2021/09/index.html","8efec6d330fdd8744d72427104231b96"],["/archives/2021/10/index.html","124c3a77e4d13b90ddfd6e2258e654b3"],["/archives/2021/11/index.html","e8a0d7d8ce4a057f0d2cca5ace2de9c0"],["/archives/2021/12/index.html","25633d76ddd0a08cf5f5e2606556001b"],["/archives/2021/index.html","ddb8d9025b8e0e61ae6ca8a2a9fb3f06"],["/archives/2021/page/2/index.html","4ea6c2256ddf9027e075b8675aaeb3f8"],["/archives/2021/page/3/index.html","d03da6fa113b311866a700ee1dbe5082"],["/archives/2021/page/4/index.html","336330dca8ec59af71612966eb08f997"],["/archives/2021/page/5/index.html","a17c79b85fd66f18ad119dab3987c4f8"],["/archives/2021/page/6/index.html","5cab258a6731a08e1fa17557bd885b60"],["/archives/2022/01/index.html","35160f465e18b51f6be41d1c217e0474"],["/archives/2022/02/index.html","8e9a30052beb89f0d7ce42f6deece2b2"],["/archives/2022/03/index.html","73cc53203e81dfcfd06a320aed623ce1"],["/archives/2022/04/index.html","fb8dbac6ed681e0fd49788edf4335e7d"],["/archives/2022/05/index.html","4a552bafc4b01fd6c42fe3a190ba9a52"],["/archives/2022/08/index.html","4ae3220ed504cd5177432770fc9c81a8"],["/archives/2022/10/index.html","7f14c6b30865add970e96e6a70c34097"],["/archives/2022/11/index.html","fa59d611427dcfb0af2a14e0f95ef065"],["/archives/2022/index.html","4ed6f1fbf23824c6ef6a4755ddf4ec82"],["/archives/2022/page/2/index.html","26f79dcea2c1fa264ed2bd805c9031d2"],["/archives/2023/04/index.html","27f3bb34d1c2bdf09ba1bcdb62eed0f4"],["/archives/2023/06/index.html","ea7aba8669d1a4535c3e284600b971f6"],["/archives/2023/index.html","353e30776e6a896d88a0e2247c745b73"],["/archives/index.html","8e907bbfbffdb28d7442a4bc74645790"],["/archives/page/10/index.html","7b44766da1a20798ad61fd8a7a4223a7"],["/archives/page/11/index.html","74b5a490d46e0d89959877d731983500"],["/archives/page/12/index.html","f03db216d9a3b833edd54ff46ea91364"],["/archives/page/13/index.html","7017155e936208183993f27195bc23c1"],["/archives/page/14/index.html","cca8caa8b79dc18b9705c3bdb045fca1"],["/archives/page/15/index.html","50be35b08f670af33efce96291f3da90"],["/archives/page/16/index.html","c30de7396b01a91f6470fa562cd9bd6b"],["/archives/page/17/index.html","6c5346615a0bcfaf37bb8e1e7892c818"],["/archives/page/18/index.html","90f2fe684ea2f26cdff5ae0519aaaab9"],["/archives/page/19/index.html","973feb2c3b209c765d826f2cfb3b0b2d"],["/archives/page/2/index.html","e9d91696bf12c295c77d01e82431769e"],["/archives/page/20/index.html","85b38759bad3b74650879af0fd124e9d"],["/archives/page/21/index.html","6bea9961f7520b6448f591423cc22568"],["/archives/page/22/index.html","cbf51d90bc6131eed0d38543615a5f6a"],["/archives/page/23/index.html","ec6c469ead03bc25d939f210833d7d20"],["/archives/page/24/index.html","6b105e03e1a589fadd5e87bb40ba029d"],["/archives/page/3/index.html","8dc7fb8902d235b77c440f446eaca2cd"],["/archives/page/4/index.html","1fc8f9ee711d441a7d8e58fdff07b7f7"],["/archives/page/5/index.html","09f3fd8e02bbb9114a9fea3e245b86ce"],["/archives/page/6/index.html","3162a3d4d29b1a62b45b28815888db10"],["/archives/page/7/index.html","8b99b1791596be133b674dae80146559"],["/archives/page/8/index.html","7f4f330b3239a1e40da588f439e2fff8"],["/archives/page/9/index.html","3280aa0545c8421edb314d382c652c4f"],["/array/index.html","ae2a7184a52d74e1443816f1054c5843"],["/automated-test-katalon/index.html","8911c6051c392fb23755616254f1f199"],["/automated-test-selenium/index.html","2841bf8a88d151d0221a04b203d40419"],["/back-to-table-query/index.html","77d5b2a8357caa2584f33f05cb232d88"],["/binary-search-algorithm/index.html","1a3aad2520190dcdfe29db1b08f47286"],["/binary-sort-tree/index.html","23f673bdf22baa2c8ec3c9f355107cf5"],["/bionioaio/index.html","1f1b8bfa821146d9dc7e3b9343f939a0"],["/bridge-mode/index.html","9d60fe455d803100850e63709fb106ac"],["/builder/index.html","d55e2c34319d2bb68ad20a36efc71dd9"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","bc0eb2de96a2795ddeee5bf8217ecd1a"],["/cache/index.html","0e48c73c568fc97a42bac88b1524bbd2"],["/categories/C/index.html","b42bec139fc99e6e29838ade3d4496f0"],["/categories/SpringMVC/index.html","76857aa507cc402d779b1de47e484781"],["/categories/categories.html","5df579d31e365b7a1c64d4ed925a6877"],["/categories/index.html","88496ada30afdf763688e4d50e551686"],["/categories/linux/index.html","85cb74108e565a40ed0dffe9f20af1df"],["/categories/分布式/index.html","dfb685856ccd36993a6d069c4beab8d9"],["/categories/分布式/page/2/index.html","1382a8993b064e33121fd74918b79d16"],["/categories/设计模式/index.html","79867fafe4a411bf5c9249c68541a26e"],["/categories/设计模式/page/2/index.html","8f4636e6311b39da6c4dc97057ea2bea"],["/categories/高数/index.html","58f4ddd0456a028f2cba89b22c84fe35"],["/chain-of-responsibility-model/index.html","826d449c040a001eef77402b4f32c107"],["/charity/index.html","eb1be779f4d8db2754bf9f72de2b506f"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","566467e35c1ceb049a37d4353c040cd6"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","e1520a1b88f296ba45797eba003ace8e"],["/combination-mode/index.html","6b4bd433872cb41bae79128e9138d996"],["/command-mode/index.html","fec268b175b2512c93a44fc3ffd38c26"],["/common-commands-of-unix/index.html","8ecbda92b8b29694962cfd6c3e4026e4"],["/computer-network/index.html","a17be7b0a87acd3a68222aff369d6153"],["/concurrency-principle/index.html","40453c9ee08aca01528b00775189b63a"],["/continuous/index.html","33e91ca33f699ecf1304580e56423ff1"],["/contract/index.html","cc25ec7301b6858ac982c4c7da281cba"],["/create/index.html","56440be4b01b566527789effb7eaa231"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","9f27a7bee82c89fd6e7b678aea53bbfe"],["/data-structures-and-algorithms/index.html","c02becf9af435ddf29bf5592ae5c7752"],["/deb/index.html","616b112332c2f1f9238e25982ffc258b"],["/decorator-mode/index.html","3b86266d9a1dfd5452d00d0581e39268"],["/definite-integral/index.html","25814ec84651f1ecebef10fd89f3fe29"],["/dependence-reversal-principle/index.html","58bfa4791775faaeb30fbc8f8bfdb0a6"],["/derivative/index.html","2ec7593b55e6e2fed67b62b21b41834c"],["/design-patterns/index.html","9fedb1b64d46771aac9c54b705fb56e9"],["/dic-algorithm/index.html","d73bd22b7de1c4f49da802f608b2899d"],["/differential-equation/index.html","d8880c6f7431d5839e55cc8a54d6691f"],["/differential/index.html","222f22e6b7a351b66d1b061dea7aaa84"],["/dimits-law/index.html","3b5a8cc1e4dcea011ff80e8c7c55f1d6"],["/distributed-lock/index.html","d4b5b414145a0b6c660f6905f2e3ce81"],["/docker-virtualized-container/index.html","adcc46e26decb5081cd0df8124f8fdcf"],["/double-integral/index.html","951c577ff9562e673fcc14f5abeafc98"],["/dp-array/index.html","254352746cded4c668977ae9df886500"],["/dynamic-array/index.html","9230e182254ec0933fae98d70a62afb4"],["/dynamic-programming/index.html","ee100b1ea73c3469d986d804d87e458f"],["/edgeset-array/index.html","4998c271936a2c00e73ad97bc1f07c02"],["/encoding-algorithm/index.html","72f724e55ca22db5dbdac2a0e2095c65"],["/eureka-service-registration-and-discovery/index.html","61eea356936b95ddd2ba9f679bac25dc"],["/extreme-value-and-maximum-value/index.html","5d68d3f4f86f6ab4cb3fe357fe20919d"],["/factory-design-pattern/index.html","4f095898c2b2c7eabc7f8ec6e3535456"],["/file-input-and-output/index.html","c58d2c06e0bbdf9a4a28f26c6e98678f"],["/flyweight-model/index.html","7c9affd789b6b86b775d8e615f588218"],["/friends/index.html","2badde74aff2bd6d044291ab43c70643"],["/function-graphing/index.html","fa3b940fb556d7067a89e9daf2a6bbe8"],["/gateway-service-current-limit/index.html","010957d846c1f82d8c6e6cfe0f8be968"],["/gc/index.html","528a41665019b3b280e3afb05e4e6606"],["/generalized-integral/index.html","7a28ad65ae1a88031624b7a72de3f3d7"],["/google8102e2f35ce9e391.html","434ff366e2e55b5f93846b02d4f3e484"],["/gulp-compresses-static-resources/index.html","9bd752df936c4a51d81514b31c21631d"],["/hash-algorithm/index.html","d92ecc4a80dfd131f160c645896553c8"],["/head-first-JVM(1)/index.html","6d261d656752eb765402872bcf760f22"],["/head-first-JVM(2)/index.html","136c509cfd25b184b81ac8bcc723a75b"],["/head-first-JVM(3)/index.html","cd4144ad69fb8545cfdde7d0c0980597"],["/head-first-JVM(4)/index.html","9ff11422e68931dd81fd2ce430ddd216"],["/head-first-SpringSecurity/index.html","988421d2f7751d37e2a62c4ced421bab"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","2c80c86781621c1f195148c471c03d49"],["/heap-sort/index.html","aabc19f99db878d5a4f4374c6d209dbd"],["/http/index.html","c9c368a94e9be910b14faacf1d5ad161"],["/huisu-algorithm/index.html","4dd25240485240373f0fc0442b70920f"],["/indefinite-integral/index.html","aaf8a8fa7d4a3b0d07a2d2b4934354c5"],["/index.html","00ce3da15bf8cae33cd980fb344f0377"],["/infinitesimal-and-infinite/index.html","f86a5ec0890332c1eb5f1d626630da6a"],["/interface-isolation-principle/index.html","ba1296b2f1b68a08f93f3297bf223e08"],["/interface-test/index.html","74ade7115f7bcfd796a025fbe26bb845"],["/intermediary-model/index.html","db85a302fba2298e6e18dce6bd74eff2"],["/interpolation-search-algorithm/index.html","37fcebf03141f0895de7f2c96572abd3"],["/interpreter-mode/index.html","24c0148af8d7a5cc612d9bd8434fbf13"],["/introduction-to-computer-network/index.html","1bb3dd0ac71a16080d4fce8e638b8ec9"],["/introduction-to-operating-system/index.html","bdb9ba376d452ad8f37bd94ec419423a"],["/inversion-of-control/index.html","b13f999f1c5a821ec387eae862d9b918"],["/io/index.html","fb29e2ab431e2c503d4f89defd665aea"],["/iterator-mode/index.html","dfc202d296654a68e81bb22ca1cdfaee"],["/j2ee/index.html","1f87ce0f7f57b47a0b1fbe8859d0e3fc"],["/j2se/index.html","037846acdc6d2edaebdd3dfe0ea90d6e"],["/java.lang.String/index.html","1ee097d5ca9c1fe75be8b98975632683"],["/jdbc/index.html","d85aa7db2b8823569f2fe8936ef6fafd"],["/jdk/index.html","c0bd24317441b84b321df9b4cab8ad99"],["/jmm-memory-model/index.html","79430e05bf9084ca3d2e29475b867097"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","ac79b659b442a2aa6bc35c177c0a4d5d"],["/jvm-method-inline/index.html","7f55d4881fdc200747f5a17c487085c3"],["/jvm-tuning-practice/index.html","82d40fe9e25ad066722e8878514e90c1"],["/jvm/index.html","73c924bfc866a804125b8cbf5ecd4a8e"],["/law-of-robida/index.html","61ee4fc92f2be605b43a7e16a291e014"],["/limit/index.html","611cf34895066cec6b58da13e9e2170a"],["/linear-search-algorithm/index.html","2185061b5d1e045a243c858bd69e9b16"],["/linked-forward-star/index.html","bc7d79721479c3eeab903f3dc53e9f52"],["/linked-list/index.html","3e08d69a5dbcedf96e5550b3a50a2934"],["/linux/index.html","70900bb0ca9feefbe4f14c7234f11387"],["/liskov-substitution-principle/index.html","82c1e4d5570d0f29dd0b00ddb59074bc"],["/lock/index.html","f75e94708b7aca00ede3c52ee8557c4c"],["/lru-cache/index.html","48eac53a9f6525e1913ff2dc43b9eb5c"],["/maogai/index.html","03536443039ac44d7c38b9dfeef34a04"],["/memo-mode/index.html","a0388b92ce3c7f2f85236969b12c418e"],["/monotonicity-and-convexity-of-functions/index.html","e02ab9db5213517fd46a0a2fee82c549"],["/multi-function/index.html","ceb3190915e99b5035704c877a4141e5"],["/multithreading/index.html","f881e8c9a13f1a249e845d3295c885b8"],["/mvc/index.html","66d5bed15e3698f3629db94a08e454d2"],["/mybatis-cache/index.html","f1b0abb5b85a37be0804ac8ec1c2391d"],["/mybatis/index.html","316623de680f5bc5af9d39344b0fa3aa"],["/mysql-index-wrong/index.html","6ab0ba63b0c785d576d938c959473e12"],["/mysql-struct/index.html","ca2151066d9fa5e30c2800383962df75"],["/mysql/index.html","c42fc49ca00c328a49a5ca1c2510fd75"],["/nacos-service-registration-and-configuration-center/index.html","a693935b0d1d1a9a2a1cfd14ec872369"],["/notes/index.html","3ffc84f0f9361c24dcc9e18c828607e2"],["/null/index.html","5c51a0ca981201f306d0b40fb7513bad"],["/objectoriented/index.html","8f0fa4003f1d8391c7aa0ce05fb331ef"],["/observer-mode/index.html","8780375abedc891aeb8c8473579471d5"],["/off-heap/index.html","c1e8cf7b141d0f8771a14587aa2c973e"],["/operating-system/index.html","ea2e9a1989970d9b2831e6587ac7bb4d"],["/page/10/index.html","a472a425c588c058ed082e00fd023978"],["/page/11/index.html","3ad94a38da42b7e3fef599be5f16a272"],["/page/12/index.html","b39ac3667b19765b8b317cf38f1ade54"],["/page/13/index.html","d0e9fbf4444c690859afd41b847f62d2"],["/page/14/index.html","57043f4883f67e54481ed0012e01b5af"],["/page/15/index.html","f1088c23066a6ff18a213d0956647b22"],["/page/16/index.html","ca7594001becc5153297fe8d23e4f1f0"],["/page/17/index.html","744e00953992b32a29698fa42224b240"],["/page/18/index.html","f989215d6aae873a8ae0f2d1c1a4666b"],["/page/19/index.html","4883cce9e99cd0f5f97ba8106eefb92c"],["/page/2/index.html","619154a5051696c82628414bf09846da"],["/page/20/index.html","cdba619b810d1223029db5ebec144bc4"],["/page/21/index.html","8777aa994bd95a73de9b791182ab3208"],["/page/22/index.html","85c82b6fa95577432fea422c69d8ff90"],["/page/23/index.html","5553f7a7aa20bf9c63e310c926dc4eb1"],["/page/24/index.html","798d94b3e96c3d742f952276132581ab"],["/page/3/index.html","87704a708f7652dbe4f462b08ea8f65a"],["/page/4/index.html","5d233283b381f48208287d0245949744"],["/page/5/index.html","1521e0e5fae7cbad838cc7074cf786cb"],["/page/6/index.html","1d54d11fee17175c51a0699ac4c85797"],["/page/7/index.html","66e737286304b48eff2b24752f97b6bf"],["/page/8/index.html","5a37c76a50af2a540acca1e036e87a5c"],["/page/9/index.html","9d73d4a24adf8109a1d7a9d109fcd33e"],["/palindrome/index.html","f71a40d02681bdb5c76e853f35eeb46b"],["/partial-derivative/index.html","6219188f107a48ef547ecf5da06eb44a"],["/pass-by-value/index.html","929f4a34067ba84c8e48d9b088fc7ae3"],["/pictrue-bed/index.html","57cfac74dc1bc5f5498204e3069160db"],["/principle-of-opening-and-closing/index.html","1155c3f909eba6e19f6dbef6b75cbe33"],["/principles-of-computer-organization/index.html","f596c94994a9cefa141824c54f1f2303"],["/program-test/index.html","2648b708073befbe497e15c611c422ff"],["/prototype/index.html","697a3c615175b577a45131c129a4102f"],["/queue/index.html","72c1c2fd5ef8ca23e6e6ebba67b016ca"],["/random-weight-distribution/index.html","979ec0aaca1b4f8fd977ad09829cf009"],["/realize-modular-programming-with-functions/index.html","4819a07421ef1cc7ab02ccd7b9f3fa22"],["/redis/index.html","93068e7eaac6c20cfa02383d57509648"],["/reflection/index.html","de76d98d03390f765fe2ec1cfd61370a"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","c8367b982b2501cf721f78ef5af810fb"],["/ribbon-load-balancing-service-call-degradation/index.html","fa361cd99904d7e27c6a4584444755c9"],["/round-dp-algorithm/index.html","c4a74238285ff0aefa761b8d3f42176c"],["/seata-handles-distributed-transactions/index.html","18378d04adadd31684e2855c55dda09c"],["/select-structure-programming/index.html","edb7741ce3c2ef60d32aa43f4bb56f04"],["/sentinel-realizes-fusing-and-current-limiting/index.html","b20069432f291334ee91596aafaa0734"],["/sequential-programming/index.html","5f3942281ebf54fbbab873318f3d48d0"],["/series/index.html","3eb162311c9e1945e94dd977d061ad10"],["/service-worker.js","cec5ae447d262614982f39ce03d387d9"],["/single-point-login/index.html","8da735769dafb415176aa427e8556227"],["/single-responsibility-principle/index.html","7e0b5e087cbbb0f243467c50aa133e3a"],["/singleton-mode/index.html","ff3192f5469be6ae0cceae618716bd50"],["/slidingWindow/index.html","ea2e55175abaaff693a7325e1cf6adbc"],["/snowflake-distributed-id-algorithm/index.html","5968ffe4f8c501ea46bc663cc2fc6558"],["/sparsearray/index.html","46e44c9bcb79b3c35d97bc58c4116643"],["/spring-and-jwt/index.html","d82ea64bf5cbce73fd465cdffc508d10"],["/spring-architecture/index.html","aedd147f96653f5f98be5c86f745b4e9"],["/spring-relate/index.html","f7d5da351a1b003d72ef3e38a36fcdcd"],["/spring-springmvc-mybatis-integration/index.html","028a17aeff757991f917338ccc408709"],["/spring/index.html","c988bf0489ff713eb08f5fb2064ec68e"],["/springcloud-alibaba/index.html","224a890b6994a9e9a17e91c66a5754b4"],["/springcloud-bus-message/index.html","61bebc42d80ab3a8b61eee520e5161bb"],["/springcloud-config-distributed-configuration-center/index.html","9d3ad1cb4d1fdbae90d2e3813bfffdfa"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","7a81ef140d602510283566bc8379fdfd"],["/springcloud-stream-message-driver/index.html","e595080a4857f1c3012f597367c8447e"],["/springcloud/index.html","03b7ac76a48b460975d9e26ecc6e19df"],["/springmvc-environment-construction/index.html","218e6dfa6db57fc6129d237db099cf31"],["/springmvc-work-stream/index.html","89866fa02fffc880de79667aecd971d6"],["/sql-injection-attacks/index.html","3f916d73e3f9f7af1a52d5b9b0cc8674"],["/stack-simulation-iteration/index.html","de8e03fc9c3dafca9610d08dcf2b831b"],["/stack/index.html","63f1cf6785b50c66f0941989b8475503"],["/state-mode/index.html","453592ff43568e4b7cabaf0ba101bb38"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","0c1f576c12dad38e4a8e475f3c342f49"],["/strategy-mode/index.html","9fd6eefe43c1bf625186683468dc3770"],["/sw-register.js","d8ed080624e9a7be901b744becfdcbb7"],["/synthetic-reuse-principle/index.html","38f5551bf58119df312549e988c350e5"],["/tags/C/index.html","d93ab092619fda9d1a47d08c9883f4b7"],["/tags/C/page/2/index.html","5fdfb30afe2a6f6fe4c92de90bd571a3"],["/tags/Concurrency/index.html","10a6ac8b7729536bc3d22e87eb04a87e"],["/tags/DesignPatterns/index.html","546dbfdd7c366124e237f3d5b9a4035f"],["/tags/DesignPatterns/page/2/index.html","01e2032ac1276678c1994b787a5efb70"],["/tags/DesignPatterns/page/3/index.html","42f73ef2d73eb5eef2e71631d8d20f41"],["/tags/DistributedMicroservices/index.html","77d500655fc19ec2718566cc39dd181b"],["/tags/DistributedMicroservices/page/2/index.html","d7154aff0500df1d7d839a9c56de99c2"],["/tags/Interview/index.html","669b243a7d237e125f725c1b8a1b2495"],["/tags/Interview/page/2/index.html","f4ea03da92e0001db55187fc13f36e08"],["/tags/JVM/index.html","48f91fc68357a36828a198514b797289"],["/tags/Operating-Systems/index.html","830c3ebcb2c71b0b639d546d472fad40"],["/tags/about/index.html","947c157d32f42fce9d52e53585fc8cf4"],["/tags/ad/index.html","8d0bded965074c7eb2738cfd3725d828"],["/tags/algorithm/index.html","b77a399256a68c9139ece8c4e6bf2479"],["/tags/algorithm/page/2/index.html","cddfb65e253706e9fa220afe8423feee"],["/tags/algorithm/page/3/index.html","9599d263d7ae7c24e9dce05e56e62435"],["/tags/algorithm/page/4/index.html","68bcb4f98db6193f92b288401200827f"],["/tags/bug/index.html","d02d4ef080c4ed0abd37f77fe498edfc"],["/tags/computer/index.html","1a998ef70a04afa57e338ed6a4f6ad52"],["/tags/data-structure/index.html","485b13dcc89fc35e332bcb27842240b0"],["/tags/docker/index.html","2ab850c7d804982e450de0b2bce29d88"],["/tags/famework/index.html","630c2472e9f3f861571d63a387f59195"],["/tags/frame/index.html","b68558e3d54ea987c5f2fe03152c992d"],["/tags/frame/page/2/index.html","cd13cce8f36a5678451afbba4fb9a091"],["/tags/front/index.html","00592b96bc0de65d0959f31a93731a82"],["/tags/github/index.html","2c1c0a5bfac12d0722ce401093b124bf"],["/tags/index.html","e76d7fec85a524ac3f7edf0ea7e44100"],["/tags/interview/index.html","ddc761d1e223c0e9292e00c502fd2f7e"],["/tags/io/index.html","979d6de431804cac2195b798ac7dc00c"],["/tags/java/index.html","18dbb69671c7b1161d08cff539af08a6"],["/tags/jdk/index.html","fa325d4a6cda113541b910f1d2d02e03"],["/tags/jvm/index.html","e9b70d1d183abdb9cecabfac82d2a7c2"],["/tags/jvm/page/2/index.html","26668eb73ff0ce1c63868b2b576961c6"],["/tags/linux/index.html","e0ff88e6f9f5246cb30249fdee3879ef"],["/tags/maintain/index.html","b8cf196e0f83e54fe11b6518eb2deeeb"],["/tags/maogai/index.html","e00bc3a6ff321a92394e0f9c4a8e31a2"],["/tags/math/index.html","089738b2acc0b6dd66d96896cd10043c"],["/tags/math/page/2/index.html","388c464f84ab2b9ba39d656421a1e6f4"],["/tags/middleware/index.html","8d808f87d715aed6f40dd8b157193a60"],["/tags/mysql/index.html","3bd5f0d38edc06782e183c329b8852ac"],["/tags/network/index.html","2819e0b0ab5e545f9bafa79e4358f379"],["/tags/project/index.html","c8a754f8a45378f49d878ecba28a2331"],["/tags/project/page/2/index.html","5a51b10fcbe47bbb676997d7fc585337"],["/tags/security/index.html","9c97d0de817a087a23e50bb1cd60b312"],["/tags/sql/index.html","d81a6b8112fae8d842449acc39267232"],["/tags/test/index.html","d43f7bd82a97ed00d1866071a8cb8297"],["/tags/think/index.html","0e4f8fbd14ae9b1c3e0404643134d350"],["/tcpip/index.html","913ffc7ad883f0a9cfe2c7ecf23753e0"],["/template-method/index.html","fd19053cef181355dbc919f843dcec58"],["/test-case/index.html","04201ece593633d735762b5098fe52db"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","1e8a69c1795b46118e4dcfbde55b60de"],["/thread/index.html","a94d952b4b668e33085d755aa34ac517"],["/tj-horse-racing/index.html","292a86711088094fe2b0a28f34f8f360"],["/topoSorting/index.html","45825dc377ed707b2184176dd0dc15cf"],["/traffic-monetizationaccess-to-google-adsense/index.html","1c201f7707758397df9e343d537b4dac"],["/txCharity/index.html","35bbfa6d0282dc0cfdadab6908d29618"],["/ubuntu-set-ip/index.html","5847fd62bf5f3f3760da0c1936f81ca0"],["/undefined/index.html","1ea58143b794353c4c5ce6997e741eb5"],["/use-arrays-to-process-batch-data/index.html","c643004887503ee025c36f986f962bf6"],["/use-of-springmvcmodelattribute/index.html","40522afaf700c0687bc348d1b39bda5e"],["/users-create-data-types-themselves/index.html","483d2b11dafb2ce9c17cdaba8cec2fc3"],["/visitor-mode/index.html","ba63da152c2f7d8b78c05f33601f52d9"],["/what-is-milk-and-why-is-group-wise/index.html","0772418882d3c60633b38e3af93cd20a"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","0291427fa3ce6ff74c1f42456dc70860"],["/xss-crosssite-scripting-attack/index.html","80e5cd9137ea57cac28e1cfa4c0ecbe8"]];
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
