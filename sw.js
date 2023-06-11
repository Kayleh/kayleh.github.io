/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","3535e567e37fb10973c6b135ca576bb4"],["/404.html","fcf8100e0d32d75301449034593833a8"],["/404/index.html","a30cb9f045d1d7fd1bcb2f842cac3225"],["/7-sorting-algorithms/index.html","649462f9f0e6901ffbabcab22756f6b0"],["/AIO-blocking-model/index.html","9cf2b3719e75813b05092011932781e4"],["/About-Snowflake-and-Consumption-Degradation/index.html","e109964a63372891a3c696a5a2bc94f4"],["/BIO-blocking-model/index.html","9c43776ccf1eea0c8bad03b5e5dbb580"],["/Bloom-Filter/index.html","61c3a2e0a0bd9b23462c93c87bfea091"],["/Boyer–Moore-majority/index.html","79e9964cc7dd32db8c41e3130a82a017"],["/C-algorithm/index.html","cbe18bd58436026ae7239c47ec80f98d"],["/C-programming/index.html","e12084aac71f8c46a225c9fdffff899c"],["/CAS-&-AQS/index.html","82ce1032ae28cf5d4ff2685d1fdfdeab"],["/Comparator/index.html","63673b653879818548f928e5dd2d7fee"],["/Differential-array/index.html","666c3b3d46e7c2531323f3138c5c359d"],["/Download/index.html","0f865438b9a97aa40b94f94f84e8ccf1"],["/Front-end-security/index.html","543d3b2cf1a6a3e92a38ebece2b558c9"],["/Good-use-of-pointers/index.html","8a519e72d2f7641f28d6e80a5a7323e6"],["/Graph-degree/index.html","51f49700798815a486ed49b94fa94ece"],["/Greedy-Algorithm/index.html","dd3b7e3a8e0584e81e3a230c8f88cf1a"],["/Head-First-Map/index.html","b8db615549d7e7429a77a65855a4584f"],["/Head-First-Netty/index.html","bc80023fe2ab4f291336962a18aa95eb"],["/Head-First-Nginx/index.html","e0bb689e1e3b6a35f9838d859b0530f3"],["/Head-first-Spring/index.html","a72a12fa7dbdb33a745ad8e16cb95aa7"],["/IO-model/index.html","c2cee5937e01ded79cb2ff40246ffee6"],["/IO/index.html","d21ace1f3939f1b0aeb542859751d9b7"],["/Implement-a-lock-based-on-ReentrantLock/index.html","c29e0693eee96706090e998393eb880f"],["/Improve-Robustness-(1)/index.html","f5b5b7c44897a200c02ec37e306487a3"],["/Improve-Robustness-(2)/index.html","c480fb8651255cc22fdd179ebe396f45"],["/Integer/index.html","62dc6d06f5e0585ff9b876153aec18e7"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","9e6e12346aa27e73e93e4837a5622ccd"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","a385d1eb427acb450151a267908954b1"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","5e2b4443d9eafffdb02727dff8f73efb"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","0a20c0ac9e98886bbfd352a251e5d89c"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","25babfc2f47fcc788848c06cdb502e9c"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","291426a07b093a27f9b751db96bef6d2"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","65b36e34575d31bef630f232cffaf30b"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","44c01bb622ed8ba7f1431d7487ecc782"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","c0e976151a07eb46fd300cfaab2ccf98"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","6ad418ef62e4e9552f030d3ae6f02d66"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","f98df03a681f2be93fa7886dff29aa03"],["/Java-network-programming/index.html","655297703e78c1c13853edb2f86b061f"],["/Large-number-operations/index.html","b80aa522eceb90104b70e66af48a1c74"],["/MYSQL-MVCC-&-LOCK/index.html","63b755b5e9fcb36a3dad19285464e554"],["/MYSQL-uuid-and-page-splitting/index.html","7f7b9a80640a373cc22034f8311b968f"],["/Minimum-Spanning-Tree/index.html","bd750956667d3be1ea2a92e38ece671b"],["/NIO-blocking-model/index.html","e438a9842d35a023aab336539052ee48"],["/Nacos：Configure-MySQL-data-source/index.html","c75469a39825b9a4abecdc4fc7312228"],["/Native-method/index.html","e0d562c832abb7dc4450f5375b4e4a11"],["/PriorityQueue/index.html","a7e01ae00839325e5bb3a79f34fc7e53"],["/Proxy/index.html","17ce8f4835eaecc5aed5427231f1cf22"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","656aa5bcb9cc47e2906f30f6176eba4f"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","5caedf09b09c10c72dc94b0e7e26345b"],["/Reservoir-Sampling·/index.html","9cb1e92b70e5e94584d2f3a50c4ad248"],["/SQL-injection-vulnerability/index.html","af418091406bfb01203fa9685e3769ab"],["/Sandbox-security-mechanism/index.html","3586e61d45d61df2d246dd60cee693a4"],["/Spring-Cyclic-Ependencies/index.html","66a77b03fdb4eb2ea701098d22ad4d37"],["/SpringBoot-startup-process/index.html","8573ccfee10c76a685c997cd1e51d1cf"],["/SpringSecurity/index.html","7d873dc5d9649b222ed47a480d56f34d"],["/Thread_Pool/index.html","6bb946f66a4c70530f7c9abbffe50ef5"],["/Transaction-isolation-level/index.html","e1253d8397f1f453f24aff104943cf51"],["/Unitest-framework/index.html","1e48dced95d6338500d5c9fab5cc6af7"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","03316dbeaa7679d6d91f2139c83c8fa4"],["/about/index.html","a95b42118e2000a22fa5f1a6a2bcb6c7"],["/adapter-mode/index.html","7b45e3023aaa8074f698bdb3e9d16fec"],["/adjacency-matrix/index.html","eb21aa40ec3acb938256158f67b55470"],["/adjacency-table/index.html","c12d8a97e6585b1b25f2696296e3bc29"],["/agency-model/index.html","a4ad306302a542c40ed6ff5e4e3c9ca6"],["/app-test/index.html","7164c7d7da4efbaa25f25dca98fb636c"],["/appearance-mode/index.html","d6280d908952bc77655ff642dc6295c9"],["/archives/2019/01/index.html","1eca1a3b190efdb358fb9ee6ff7ba8fb"],["/archives/2019/07/index.html","8d051c74d06520294207d5d046804579"],["/archives/2019/10/index.html","83ada4d33ecae2daa707d9114cfd1caa"],["/archives/2019/12/index.html","1433c439157e6cf2f598f944934bf805"],["/archives/2019/index.html","e3a28f9dcb27c120cc108855a2b98339"],["/archives/2020/04/index.html","22ab4eb51bf88f1bd0469cfd6f755373"],["/archives/2020/05/index.html","1f3a1579a7581198294c2a9b3206b14e"],["/archives/2020/05/page/2/index.html","01b3c8924bb62e9e81f4acbb6c8280b0"],["/archives/2020/06/index.html","0507f651f0f43c06269d684971f92167"],["/archives/2020/06/page/2/index.html","c84f7ac5a92d469c388b228f961b9e49"],["/archives/2020/06/page/3/index.html","9494e67fafeac2e633419a281fc77b71"],["/archives/2020/06/page/4/index.html","f02714c728165c55632ee8a002902423"],["/archives/2020/07/index.html","f9494fefe2c1996dc98b4e764c2434b7"],["/archives/2020/07/page/2/index.html","075a89445f9f203d84745f39832d7c9b"],["/archives/2020/07/page/3/index.html","ba1d440b60db7ee29d8cae97d8bd4644"],["/archives/2020/08/index.html","ef0a645df3dfcb2eca0c1d9aa131e743"],["/archives/2020/08/page/2/index.html","67884a35256e9b6019337d63b787cf5e"],["/archives/2020/09/index.html","fee3b4fec356305a10bc90e175722e01"],["/archives/2020/09/page/2/index.html","57e7f9e1aa44845e6783d3350268fde5"],["/archives/2020/10/index.html","6de7b72ae6505d5fc7e0040cefe6b95f"],["/archives/2020/10/page/2/index.html","9d8796b3c4b07b51b08b661a12046504"],["/archives/2020/11/index.html","b7f0f98357f611d73d8cc207ecb0ba5b"],["/archives/2020/11/page/2/index.html","9a3dfb52b4d5d4eaa8e2dab5a21fbe94"],["/archives/2020/12/index.html","1b5716cde96af80667393bafcfa0a75e"],["/archives/2020/12/page/2/index.html","0e7d2521f2304fedd84e2c3ab9ea69ae"],["/archives/2020/index.html","2310fb499b925a8864b64888a2cc43e8"],["/archives/2020/page/10/index.html","c037bc4454be56f7e58e97d1ba9a662d"],["/archives/2020/page/11/index.html","67572a015307009ffb7183564361c128"],["/archives/2020/page/12/index.html","91ed92e4c14cf48eedabfb5985fce72c"],["/archives/2020/page/13/index.html","0bb95bdba1ce06e5085ff65a2a2a46d8"],["/archives/2020/page/14/index.html","6fd857acf6034ce6345342d83fa11412"],["/archives/2020/page/15/index.html","52e498e885a796e342e7358f25da3d7c"],["/archives/2020/page/16/index.html","09841dc03e701a953d02d5da2ebf4d96"],["/archives/2020/page/2/index.html","7437f9cf6726f0dd0853e7f7d267c5ad"],["/archives/2020/page/3/index.html","712a247ae0ff50d0e7b0483e655904a1"],["/archives/2020/page/4/index.html","089bd847649b2c76af3782c0654e9bb4"],["/archives/2020/page/5/index.html","9cd451ad5974718c730954ba776342a3"],["/archives/2020/page/6/index.html","24a0abcf2b41d2c280de81d401090039"],["/archives/2020/page/7/index.html","7c90f17b55991ca329412f4d0b53e104"],["/archives/2020/page/8/index.html","0af4bf102fcc4ac705745df851ee9eec"],["/archives/2020/page/9/index.html","1c32503233db14c46c6b86369afefd23"],["/archives/2021/01/index.html","f4781aee024ef6b303f6bf5bfe15f393"],["/archives/2021/02/index.html","74cc344e3bf9861cbac6c2d3243dcb80"],["/archives/2021/03/index.html","4398bab6cd6ff744927086722ee76656"],["/archives/2021/04/index.html","1344dcfd6e509109816444c054215fa1"],["/archives/2021/04/page/2/index.html","6f1f43d053b4311f012605bd6c511791"],["/archives/2021/05/index.html","1b5022b7c8aa1549c4dc32bb96a77f3e"],["/archives/2021/06/index.html","f836d15332c3c3fd1a6ccf226e0a6d24"],["/archives/2021/07/index.html","667723ef95c34e41a65bb3b7e50dbdb5"],["/archives/2021/08/index.html","517ef2a0389c1790f177c85a7c1a7a9b"],["/archives/2021/09/index.html","8f0419be9cc57f19e1286de4ab1f7776"],["/archives/2021/10/index.html","b5c8a81bbaf1785f6ef73443b7c1edd7"],["/archives/2021/11/index.html","2758966e37145abc7cf611355749a114"],["/archives/2021/12/index.html","ef75c5918ea7111de3c75fb9be05cdc5"],["/archives/2021/index.html","c9e2e79fdfda75493af72a6a90888080"],["/archives/2021/page/2/index.html","ed6e5eb9dbe95160e29a3301522d96b3"],["/archives/2021/page/3/index.html","459afcb8b79056c69ad627d8707976c1"],["/archives/2021/page/4/index.html","5dc1f75f6aab222da63935f526322e36"],["/archives/2021/page/5/index.html","b67db3906a33563748d60530eac2f9aa"],["/archives/2021/page/6/index.html","8dffb778a03ef95862bc2b7779b9237c"],["/archives/2022/01/index.html","1c459b78046a687c38756111362519ad"],["/archives/2022/02/index.html","5213356e1d242eb65208b8467f7f4f9f"],["/archives/2022/03/index.html","750f1cab2136750fb672e7b127ea46b3"],["/archives/2022/04/index.html","65bb0578d5ca672761320bd6ee17add6"],["/archives/2022/05/index.html","cc5139c151d99b6742b92fa5eb57fbf4"],["/archives/2022/08/index.html","85c0d09996d62e40bd25e62f0730221d"],["/archives/2022/10/index.html","cb678029db8a507178b9c47665411d9b"],["/archives/2022/11/index.html","5930fcbd2fb44fad3f113e720a1997cd"],["/archives/2022/index.html","1383dc21ed700317544abfeb38e42ec3"],["/archives/2022/page/2/index.html","8f90237eec2bc1f01754799d36bd6e99"],["/archives/2023/04/index.html","da73a68181391c2f3e3101e577235713"],["/archives/2023/index.html","4421ed2c8a5c47f210e01468d8396ab7"],["/archives/index.html","68e4492602d86be983c195cebf3f8d2d"],["/archives/page/10/index.html","827660f2eeda45d52073851e7b5b547e"],["/archives/page/11/index.html","ea51ba113680e2b031b170b123043bb3"],["/archives/page/12/index.html","5e88b97e01d955155b0ced5c3c79d237"],["/archives/page/13/index.html","bb2a23ece5eff4630d1600571a8304f1"],["/archives/page/14/index.html","c916ca64ca0d1368633a08c173ae3697"],["/archives/page/15/index.html","007c740abad2639aba5afbb969841054"],["/archives/page/16/index.html","af5f091ed6c37b1dd17dce5ba7f94dc6"],["/archives/page/17/index.html","b7377c7024032ee35bfe0940bacafd78"],["/archives/page/18/index.html","9f64c78242ae1f84ffeec225d741282c"],["/archives/page/19/index.html","07cdebfece2e4408200933e6d2f1b0bc"],["/archives/page/2/index.html","6d48e61361f1c4b6ac8412b0101cbdc5"],["/archives/page/20/index.html","52e774c08a73327a051b135ff0416227"],["/archives/page/21/index.html","08b3605cc6cfef511cd53cfbee75cf22"],["/archives/page/22/index.html","f0866a7f11c4e820bf0beac3f0899ecc"],["/archives/page/23/index.html","8849026f48af16a5579d5272baba6f56"],["/archives/page/24/index.html","d7c704bd9070b4a8e1b163f2c9ec1792"],["/archives/page/3/index.html","6f91ef28b7c08849a575eed970536a4e"],["/archives/page/4/index.html","c79b902e0fbf4eb16fcb83a9589a04d0"],["/archives/page/5/index.html","679eab987a0e96323f41d8b52d5563dd"],["/archives/page/6/index.html","7871290c2295a8b6ca8ac8dce26f35a5"],["/archives/page/7/index.html","161e4c0cf7c829c165f0b8c757b512ef"],["/archives/page/8/index.html","5a01ec8e834286aa80ed09d71dc255f0"],["/archives/page/9/index.html","4ef9ce72c9f2fd7814a18dcff2b72a1c"],["/array/index.html","ed4d320c50f5dfd8a6cc0f5f922c9eb4"],["/automated-test-katalon/index.html","61309ffe0f18e70178767139c5d1fc38"],["/automated-test-selenium/index.html","71b947f656c240ffc601a0c9ababd069"],["/back-to-table-query/index.html","cb7a4776ac139aeb7436eaefe222e00f"],["/binary-search-algorithm/index.html","40706d2688e1dc292aeba006a11d6c3e"],["/binary-sort-tree/index.html","6a48867fcf26112adac264714f335b02"],["/bionioaio/index.html","93aecea64ddc9f9d1626368f7bc64f59"],["/bridge-mode/index.html","ee63120f61e986a53a4f9d55766f3a3e"],["/builder/index.html","ab82d436c057aa35b0e8af2188c0e7ea"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","e83b8169f3a94d8d3d79bc7c87f10942"],["/cache/index.html","3099643803e3ecbe6d794aed358bd680"],["/categories/C/index.html","87a1495685cccb72c8b812c261ae6250"],["/categories/SpringMVC/index.html","05ad8687b6e2b4baefde2f2b07ecda5e"],["/categories/categories.html","324ffc7215630ccdc856315f1af83ec8"],["/categories/index.html","e558a6fa8e4fb6510150f6d8bd2ca199"],["/categories/linux/index.html","fed4f60cdfda2be304c463aea269cff4"],["/categories/分布式/index.html","1726ed6ae33e735c40dc0a2e03edab2b"],["/categories/分布式/page/2/index.html","be878b956784be0e2a78ac226d98781e"],["/categories/设计模式/index.html","4267400513dc7097b2406959b6f0b213"],["/categories/设计模式/page/2/index.html","7e52bc2487fde201b35c02bc26db0e3c"],["/categories/高数/index.html","323fff315441d78a77087910d81d62de"],["/chain-of-responsibility-model/index.html","2c5bd2cae8fa9ef36590edef43fb2b41"],["/charity/index.html","8cf014220fe5c14e8bcae306dbc3704d"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","1090c12440637890b560c2b4b55c311f"],["/combination-mode/index.html","813b6456db09712e62aaa2f27e68669c"],["/command-mode/index.html","74ab7f224c8dcdf515b188b825b72e9a"],["/common-commands-of-unix/index.html","e8b312b6e2760cfb1fc0e4e6cbce944f"],["/computer-network/index.html","501311fac08180cddd8d32a9d7135a86"],["/concurrency-principle/index.html","3d3e107bd8f6d66cfb99da1415dd1443"],["/continuous/index.html","f94e796685408b4d89f36454cd44df78"],["/contract/index.html","14d470bcfb3ddce902c7cb7ac337f976"],["/create/index.html","6ee2e8cf26c7c194e8dfc00ad6a952f3"],["/css/main.css","0ab02c81a8ead489278ab88be7700809"],["/cycle-structure-programming/index.html","800a4ad59ff47949483723754f7bd658"],["/data-structures-and-algorithms/index.html","acc9231a68824007536ea156837f7eb9"],["/deb/index.html","3522c8b1b439baed30d8fd897bc69d19"],["/decorator-mode/index.html","2e6b761a08bfa80b0e4f015ef5cad937"],["/definite-integral/index.html","f110e1dee823e63ab38a03f060948471"],["/dependence-reversal-principle/index.html","92af4d2f1865282af695c39c7588db97"],["/derivative/index.html","4881e7bb7a6ca80476fad0e02e609c6a"],["/design-patterns/index.html","4307b1811761a5ec51ef6885f875ff04"],["/dic-algorithm/index.html","a192dfcb88463dc1e7f3b0bcefb10817"],["/differential-equation/index.html","4f9b142ee05295a277ca2827581ea144"],["/differential/index.html","f0b84c01a53535cd4d70e5dff4eea911"],["/dimits-law/index.html","f79401f31ba495e49982c0ba4127621b"],["/distributed-lock/index.html","02b9a59b08cda499e6f8250cf5fef383"],["/docker-virtualized-container/index.html","4cdaa41938ff42b843249eba906e8530"],["/double-integral/index.html","53a92b8e65dc6a801785c6f7ae66d499"],["/dp-array/index.html","4800001649401461459af788b0e2bad9"],["/dynamic-array/index.html","32e4abb3434bbf70f5bbeeceb817d4be"],["/dynamic-programming/index.html","3a6002ae044e93ed647ae1cb44822c29"],["/edgeset-array/index.html","73c06acd6883f2ca8edcf39d7198a021"],["/encoding-algorithm/index.html","53c4a2175324ac5754b27439e18cf921"],["/eureka-service-registration-and-discovery/index.html","ada00faa8a9721331754d3991be7f874"],["/extreme-value-and-maximum-value/index.html","b31abfb7222494d5e960cffa6cb751fb"],["/factory-design-pattern/index.html","ea13ab6b78bc2f8536d3cede307fdd07"],["/file-input-and-output/index.html","23d109192bad188d5da284c3f56dbadf"],["/flyweight-model/index.html","6e7a0b557451491ac698b5b4b47a3361"],["/friends/index.html","f4f984eef16ade6b23183ab176bb58e9"],["/function-graphing/index.html","0acacfd5aa2bbccd2a9693cc08bf9f15"],["/gateway-service-current-limit/index.html","083bcc405062a0d6496331dca1d90c6e"],["/gc/index.html","64542a15cac3ef42e7f11c37335ac30a"],["/generalized-integral/index.html","54016dd7b1c59502b4f470cfa3515d6f"],["/google8102e2f35ce9e391.html","9d2fab613d5b13eafe030473756216ac"],["/gulp-compresses-static-resources/index.html","64b5b59161fcc095d1464a6ceab2976c"],["/hash-algorithm/index.html","e2f0ec07ce13fd41d3293a6f2b52c24d"],["/head-first-JVM(1)/index.html","a71cc844fe582f49b584e3b0a8c4b6c0"],["/head-first-JVM(2)/index.html","3ddddfaa0c09e592f10e842bb75fd3ac"],["/head-first-JVM(3)/index.html","55dce9936135ee7b6f53ce6339564cf7"],["/head-first-JVM(4)/index.html","706146e3bd9a09993fe5aaf20ddac9c1"],["/head-first-SpringSecurity/index.html","e9e696f040416194986c38091561b18a"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","f893bd2714cde4c6f3282323ab7a6970"],["/heap-sort/index.html","68338d4450f8dbbc4b1b477a6276300a"],["/http/index.html","d8c4685cb61afe5f7c1afc339cf5d8cf"],["/huisu-algorithm/index.html","b15cfe4b047d3a59fb010dea04b263a5"],["/indefinite-integral/index.html","013fbcde75cb9fcbef0cd7191f0ff56a"],["/index.html","df11f00b25006479a63c9e0e00b56f55"],["/infinitesimal-and-infinite/index.html","c2f9c2e1ea61f9d4b5eecf044abe26ec"],["/interface-isolation-principle/index.html","514644dd17c03e3c9d440bd10c56372a"],["/interface-test/index.html","7e372e30821a32e4f024c0ca2bade9c4"],["/intermediary-model/index.html","629c5fa1dd141c14232afa3e02afcd7e"],["/interpolation-search-algorithm/index.html","6386b56dbeb59a4c0a1b4c2607fdbbb2"],["/interpreter-mode/index.html","0c65beaf92d0844d916639c2f03edca5"],["/introduction-to-computer-network/index.html","7d5b54fd063e607638a3dd073199eda1"],["/introduction-to-operating-system/index.html","4eb9b7e606db10ce55a964169bf84791"],["/inversion-of-control/index.html","2c4d3de42ab890a594485b5eecacfcbf"],["/io/index.html","5789f1c4d5fa109b72d3d1923bbc488a"],["/iterator-mode/index.html","1c6c89f3388aee09bf9f8ce08560b578"],["/j2ee/index.html","4b9325168cad623e6fefec6423a29f79"],["/j2se/index.html","879dc9518414689f7bf840ed7739dc82"],["/java.lang.String/index.html","a230f44289b22ac22c573bf07fa6b5c3"],["/jdbc/index.html","4ef545a219d051ac2734ba45e74517fd"],["/jdk/index.html","20391f140899a87ae03228888541a8af"],["/jmm-memory-model/index.html","d2f5162163a9876915c30144e13586c2"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","41f35a829d3df5fe79f369a2d3db1b3a"],["/jvm-method-inline/index.html","cbaaf5fc819ffa43a84fdebbdcacc157"],["/jvm/index.html","6efe46bbe3bf660bd75e46a506a650fd"],["/law-of-robida/index.html","95669e813d5246626454be137fd33bb0"],["/limit/index.html","d30635b97ce5c3825e06034b5ca0c8bc"],["/linear-search-algorithm/index.html","bed2d55e73a2629165904a0d58ee17fb"],["/linked-forward-star/index.html","ffde0ca8b0dd4a8b1f757fc457640ed9"],["/linked-list/index.html","fc33c414438e88235c211d65fb0154a9"],["/linux/index.html","be4eab9bd5836c38fb01c6062638649b"],["/liskov-substitution-principle/index.html","644262243269c36ee7db8cb8be08b037"],["/lock/index.html","0bbbd7900b26602e0188feffbfad5dd6"],["/lru-cache/index.html","558228ec88e298c4f08c50ebb4c75cee"],["/maogai/index.html","861fe2cedc93f3c45e5f78d60a702fb8"],["/memo-mode/index.html","9701264f398dbf8e5b85ae7a8a4bf68d"],["/monotonicity-and-convexity-of-functions/index.html","6d69a27ef35df74027935c2c5741dce4"],["/multi-function/index.html","6263d8d7ed66ebc975dcf0c9d86f507c"],["/multithreading/index.html","d941192939f8a0d66b6426daaec2d2f9"],["/mvc/index.html","2f3b3c73d7e84c4fc582bbb105637483"],["/mybatis-cache/index.html","29608d0c527918f9f49e9c523641edb3"],["/mybatis/index.html","85743f59a1db70b00c72a9ec4ee29d37"],["/mysql-index-wrong/index.html","d6387c89e7918e9b109d466cd1f16efd"],["/mysql-struct/index.html","bd1e776e8210d67101734b23aff92106"],["/mysql/index.html","1065896889578a7fba564c8084341f3e"],["/nacos-service-registration-and-configuration-center/index.html","11f151387fb01ecaf5cd687c9006a8de"],["/notes/index.html","97eb444ca2606a0cbac0c9a7452eac59"],["/null/index.html","b5e396377344ca58b5a799b6e3679742"],["/objectoriented/index.html","632d77f40012df0330aac4ad86249d28"],["/observer-mode/index.html","7969d25bda903c35cca7d4ce79a71a69"],["/off-heap/index.html","f44691e76afd0779b7ca25fbc9ddd544"],["/operating-system/index.html","668b04b3a7dc4bafe574a47653484c1b"],["/page/10/index.html","c73f825354108eb6c59d21ffd6340573"],["/page/11/index.html","b6d2b2284f91486737a59dbfc82d1757"],["/page/12/index.html","fcfcfb4cbe119c79e33421cfe6feab6e"],["/page/13/index.html","6dedd8d448f9cd165adb3c479e15036d"],["/page/14/index.html","f3a240ab04e1197b63d5b3a339f3b58e"],["/page/15/index.html","f2bb876abb8666876d0d4010c4f0cac0"],["/page/16/index.html","2bde92cc865248ad3e88ff1bf6a55895"],["/page/17/index.html","e44b202ef0c981376536a1dd8e668ed3"],["/page/18/index.html","0f9342dcd3ec2a63a4c3e0df764845de"],["/page/19/index.html","3cfd64aa3b02869aad3e0a2a3cc0c676"],["/page/2/index.html","95dc3b1d87004c14e82f6f417c9ff6a6"],["/page/20/index.html","11cdbb74570a4105094040280f819b98"],["/page/21/index.html","74854fa93abbbbafb125b922b5cdeaf0"],["/page/22/index.html","b0949b22880f6475bb9d61fc4e7df1c6"],["/page/23/index.html","04f777258a871489312cd4434eddc348"],["/page/24/index.html","a9254db5c3f136b3e8210bb412da802b"],["/page/3/index.html","f7fb8affc0d122a49d0b7c2059fecda1"],["/page/4/index.html","dd31ccc8209f04fb48eb6465eba85bee"],["/page/5/index.html","db15a712f4227529667970cb07db681b"],["/page/6/index.html","d378c662e34650181b08efc3fed2480d"],["/page/7/index.html","671fa1d036682f0ceb6bbf6867f5d028"],["/page/8/index.html","36a9a93c895b398e3f71d4c3abe9aa3e"],["/page/9/index.html","4b9316b4731f0c3802d064a071a7f3df"],["/palindrome/index.html","a9d62a961d35f48e10bcda819050e47b"],["/partial-derivative/index.html","d3be47de032fb0f776b8f0022be8238c"],["/pass-by-value/index.html","f5535d6e2413f236f4d77f0dadfef82a"],["/pictrue-bed/index.html","8ac0bb1e9a6b44e1d5548f3e87bfac6a"],["/principle-of-opening-and-closing/index.html","db6396c754dc2bb8683298c718cf2e81"],["/principles-of-computer-organization/index.html","21b176cc5dbd9ee5c325bb74cde75a30"],["/program-test/index.html","b579b372f5b09d80fb69b6ad96291f91"],["/prototype/index.html","b4d922f31d44f616ffc47ae9a3828d7a"],["/queue/index.html","4fc7b07897cf4acedcaccf9f8c65ec8b"],["/random-weight-distribution/index.html","d5559e0f9bdf9702d482135a643a26ff"],["/realize-modular-programming-with-functions/index.html","f9cf629096818de3cfa3ec8a0745141e"],["/redis/index.html","97355864cd0d3995a06feea81ddab8a9"],["/reflection/index.html","0861510531adb1ef5a662148692a5e18"],["/ribbon-load-balancing-service-call-degradation/index.html","2d908701cb24247a8785bb0daf19f108"],["/round-dp-algorithm/index.html","deccbe15cae21c0a7228bbcd14e867a0"],["/seata-handles-distributed-transactions/index.html","b9238704f4d82f0c36f616208b1ad5fc"],["/select-structure-programming/index.html","56dc086b6ff7e48e23bc84599d7bed50"],["/sentinel-realizes-fusing-and-current-limiting/index.html","a8a54aaa9e241731c399d29736fae0d8"],["/sequential-programming/index.html","f51312e11bd4172ceb47fc3ca6221b35"],["/series/index.html","b8777e245186a45fc338adf4f98651d3"],["/service-worker.js","6ea0813bfd97cd2f5395f721d3132659"],["/single-point-login/index.html","6e53b6ca8ab4b43d942b0b2ec8edb98d"],["/single-responsibility-principle/index.html","524e10d9dad522b131943219ba0a081f"],["/singleton-mode/index.html","715a651aef2e4bcb999d1cfab0eed25c"],["/slidingWindow/index.html","e289b11df12ff79a62e080b93823d25c"],["/snowflake-distributed-id-algorithm/index.html","d6d9cc711bfbd3dac5d4e6084b04466c"],["/sparsearray/index.html","39d0038aeab4e3d13265bc86191496d8"],["/spring-and-jwt/index.html","d8493216478b1f4cd22e63fa849d1604"],["/spring-architecture/index.html","7f079aaaecf4061e31ff2d87a3c8821e"],["/spring-relate/index.html","f648aa839f1b917c34525b340144ef26"],["/spring-springmvc-mybatis-integration/index.html","b7cf1f0580cdb7e35219197fb60a04c4"],["/spring/index.html","c4647aa2f562bd863aef3cd3544bf908"],["/springcloud-alibaba/index.html","6e9f41f68d0fe445995dbd1a96958b3c"],["/springcloud-bus-message/index.html","a2ee0a557683d4808585a27359896f92"],["/springcloud-config-distributed-configuration-center/index.html","61a811e44a24a8d424984d51557194ca"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","3f95e6b0a38c1d23d882ba0f1efef3f9"],["/springcloud-stream-message-driver/index.html","2219edccf3b08e73f444869740b0812d"],["/springcloud/index.html","a06124d41701bf298f17fead26d48031"],["/springmvc-environment-construction/index.html","25ac1744e2a89639a38c18e6a5f5a122"],["/springmvc-work-stream/index.html","b7009da3a7e47004f701be82ea47367e"],["/sql-injection-attacks/index.html","987dd1b627aa8f8fb30936dc1e72e40c"],["/stack-simulation-iteration/index.html","698fa0c2442a7a948298ff646e5b0936"],["/stack/index.html","9d64b1f4007b27cdfe9a0f3f46f45f19"],["/state-mode/index.html","1287115cf2d207b01ad7244454cd4ecb"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","c07eb74826883ac0295a9fa61fe07683"],["/strategy-mode/index.html","97d0db102283f7e8f5789c30f94e53ba"],["/sw-register.js","6f5c707e6e92d843028042c99cd7251f"],["/synthetic-reuse-principle/index.html","acfaedf6f7947ad6be792657e9784e6a"],["/tags/C/index.html","cb6f0ae6ce02d6acfa0fa91db7662097"],["/tags/C/page/2/index.html","d3bbe5063920112b50f214224a3315b7"],["/tags/Concurrency/index.html","e906a4c14c872e7b9278f6aee2683fab"],["/tags/DesignPatterns/index.html","58ae0cc7c04b7adac2c9bc64815c5cb7"],["/tags/DesignPatterns/page/2/index.html","ff3b0e1850e6505556d0cdb2eb1d4472"],["/tags/DesignPatterns/page/3/index.html","296f6a2b3556e4c37ab6c352b9c7c35e"],["/tags/DistributedMicroservices/index.html","8549df8e20ee1bddb6874a8f62660588"],["/tags/DistributedMicroservices/page/2/index.html","9a42cdc719c9f5baac9874fc856b4fba"],["/tags/Interview/index.html","10fbb4586683e3d68a3f8488ded02e62"],["/tags/Interview/page/2/index.html","b88c9806b1b84b40cb8edcf7365dd5ad"],["/tags/JVM/index.html","2a5fe99cc745fea5be12c40ef1206599"],["/tags/Operating-Systems/index.html","b51a0ae5ef2e1b2b77508b413543cc37"],["/tags/about/index.html","210e98e64fce23b8cc72b40e1bb85062"],["/tags/ad/index.html","2f8a56fe5d2814801fff2aba97f7fe6b"],["/tags/algorithm/index.html","c593932614b5469e6d052979bb4492f1"],["/tags/algorithm/page/2/index.html","3a60196c901d3bf2d5e3d32a2bdb3f01"],["/tags/algorithm/page/3/index.html","cc89453e67d700b9dfa7def61d55527a"],["/tags/algorithm/page/4/index.html","12eb7a5578f5ac6bf922aad9d8f6b70a"],["/tags/bug/index.html","54152ed0fed3dfcb91b8f6f388676e6c"],["/tags/computer/index.html","76527526b4053aedef5fed18cfe8c167"],["/tags/data-structure/index.html","8d238ffc93953cb18cbf547cc54ef35f"],["/tags/docker/index.html","733839a70112ab90477de84f74475ff0"],["/tags/famework/index.html","b37d73b57e12a589c3d01cc9dd85ab22"],["/tags/frame/index.html","32eda46437cd0c453063eb94fd10e342"],["/tags/frame/page/2/index.html","97f41af4c9be5b757f53800b2568aaf2"],["/tags/front/index.html","75a913e36d697c9795de649a71c955f3"],["/tags/index.html","f98fd4ab47fcec508e5e4c47cd5c7e1e"],["/tags/interview/index.html","26271047e57347a3aeb9157f8de24015"],["/tags/io/index.html","4afa979ab45c8742176f6060146d7df8"],["/tags/java/index.html","cb0fb986da7af5a41f696a932906d88a"],["/tags/jdk/index.html","88b15329215457f34a96ab845db99df5"],["/tags/jvm/index.html","153b8adb4eef067f8064d323722775b0"],["/tags/linux/index.html","60a6c6e9992ba651c509b8359719961d"],["/tags/maintain/index.html","e31b646387e43b18ec258ef3e15e80ef"],["/tags/maogai/index.html","f3d7014c8966c076be5328bc632fd88f"],["/tags/math/index.html","48c339b9e0cc02c95eb9828df4b0c698"],["/tags/math/page/2/index.html","d23f824b0b64efd81e785cfcb580c758"],["/tags/middleware/index.html","29dcf38cc1a826eb54eaee3e8e403b04"],["/tags/mysql/index.html","4ee30e53d4db7c5612b29ac9adc74bf0"],["/tags/network/index.html","a3bce54a0a865922d740693928c91fe8"],["/tags/project/index.html","792ec86ffd9731ecb85f6d773e26a049"],["/tags/security/index.html","f919218d92d9fe2429f0e67e702316a6"],["/tags/sql/index.html","b7549fc6c71b10748e152ae6f26944d6"],["/tags/test/index.html","de83daf32139e6dd836d81f0023e38b1"],["/tags/think/index.html","df2d9e3da1354dc4ba9494aea5f3884f"],["/tcpip/index.html","3ef8f91dbaf5e7e2a184063d81f011af"],["/template-method/index.html","4727ed12e3fd666b57afa8e8b97c70c4"],["/test-case/index.html","9f3a3c3bce3c2c983eeb48886d1ea384"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","de2ccc31feecbc2383809f7a65cf8748"],["/thread/index.html","801d7a542082cc01c0843dd57c53ab51"],["/tj-horse-racing/index.html","0a615dbce84d55297b13d3e694fe6329"],["/topoSorting/index.html","71aa10ed6b23f21238a6ce764cc23173"],["/traffic-monetizationaccess-to-google-adsense/index.html","2970da9f4c8f3487fd4b1a5cda0f3eda"],["/txCharity/index.html","99ae0478635dca17fc375c5418043df2"],["/ubuntu-set-ip/index.html","9efccc6f12bc32d914cd107587ff0bbe"],["/undefined/index.html","9c327adf4f22f7a013d67f0993ab1ca3"],["/use-arrays-to-process-batch-data/index.html","e7970c059580f4c0e10cd31021cc6829"],["/use-of-springmvcmodelattribute/index.html","19a9cd9c124603ea4882082cc9237fb5"],["/users-create-data-types-themselves/index.html","4351482bd1f12507794f0ee45edb0a11"],["/visitor-mode/index.html","f7a5c8dfeef57c4f0644aac9443d13e6"],["/what-is-milk-and-why-is-group-wise/index.html","cf1b49542621acf6f2a8db601c5a51b3"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","cd7c01f61819280b4f21215984107409"],["/xss-crosssite-scripting-attack/index.html","610b77a9987434b7263c92b4867d1865"]];
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
