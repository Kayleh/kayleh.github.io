/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","e91230c5dca45e3fe9527fd9729ea72c"],["/404.html","cf2a9f6916b5067b195cb18256e2aa87"],["/404/index.html","a0d66dff7daf542f9b2b420dfb2b0537"],["/7-sorting-algorithms/index.html","0caed077b6277bcbc8f4b1d28c264ec4"],["/AIO-blocking-model/index.html","4ae0e5c46dff14090d41a1feaf6ab124"],["/About-Snowflake-and-Consumption-Degradation/index.html","bd052b72915911c1929bbd156259214b"],["/BIO-blocking-model/index.html","234c76d81180412989891690d8c8ea08"],["/Bloom-Filter/index.html","a3631a675136c72a1cad7ada5042e04d"],["/Boyer–Moore-majority/index.html","ffafa245fb7fa97d7b89009748b9291c"],["/C-algorithm/index.html","d362f7aac9b075e593f09071235054fa"],["/C-programming/index.html","4382ff7c7597db9134c848a43df2b1ea"],["/CAS-&-AQS/index.html","2dea14fee223f2c69bf15cb0158c95e4"],["/Comparator/index.html","eba2c5ffc81cef4f558c6c6e7878eb81"],["/Differential-array/index.html","f3de00d2929b1cf117d930baab23256a"],["/Download/index.html","1adda985275a1b04f4ab4561c2848557"],["/Front-end-security/index.html","9c1ddea25c8cff865bb9b5429bae7b75"],["/Good-use-of-pointers/index.html","489fd5093163bdf33b58ae545afdc22e"],["/Graph-degree/index.html","0fdd067191650a65a398be214045b5b4"],["/Greedy-Algorithm/index.html","75b9720886a3f76eb912f393556719b7"],["/Head-First-Map/index.html","4626f26bdf0f1fed0eb49c0f8031d76e"],["/Head-First-Netty/index.html","9967f31c4ad0fe9dbd87af9390c04b7e"],["/Head-First-Nginx/index.html","2e6de7a3264165ffa82c7fd5bb287c03"],["/Head-first-Spring/index.html","a858c160e763aa2c0f63a9b72e54aeda"],["/IO-model/index.html","bfd859941cee79b6a77df560ebb2f10a"],["/IO/index.html","63ae08404604ff80575659858853cd22"],["/Implement-a-lock-based-on-ReentrantLock/index.html","c5d663e72d5bcb08e2c0a51f4fe98d35"],["/Improve-Robustness-(1)/index.html","5edf5175d96b9a0e5675af11dbd69903"],["/Improve-Robustness-(2)/index.html","90e2798d138ff8e6ca34d5a1dc6bf686"],["/Integer/index.html","f3427eb7b40bc9b703cc94ff415b2fdc"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","6ac411d90f0e5c958358d85b74eb180a"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","626f97fd104238ee05d287883bc3570e"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","6d7997ee7b1258bdb64919225fd857f9"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","c96b11e4dedaa1166fcea22fbb12d45a"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","b58ffd32aca21e37277660ebaae6db49"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","7bb1f219f587692860812ec8022e07e6"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","6135041fb9f4f0b7ecf103a9a59c14d8"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","4f82c579d469989286cb0ca0ae31beb5"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","7566c090faaaf24563fe36d6d0826562"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","4171f322cdb106f133efd59202a20a27"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","75951f3edb242b33eef51af93a79bf39"],["/Java-network-programming/index.html","73b563c37565ada247eb7df99181c087"],["/Large-number-operations/index.html","4d5bb99865782e665fcc7587ae22cfe8"],["/MYSQL-MVCC-&-LOCK/index.html","c604330fb5c9acb6a8f352f4b47f4d35"],["/MYSQL-uuid-and-page-splitting/index.html","b6dd16788c32006c06d848b1b0f05731"],["/Minimum-Spanning-Tree/index.html","a08a881a54e7266cce08c1aa0d5b2d9c"],["/NIO-blocking-model/index.html","18689b3bf9a7638ae8b40d2fc97379c9"],["/Nacos：Configure-MySQL-data-source/index.html","5ee89b8ae2de47603264128048d4a9cb"],["/Native-method/index.html","0c2aaf02f6f18bf59017f768309adc79"],["/PriorityQueue/index.html","4650f36ed1c5cf2d8b05a0d2528f0e4c"],["/Proxy/index.html","f072d8aa0a52bb9538fc1c199e7a490b"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","ece4bc70f6c258b07474a3121954f659"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","7c0e3768fc0fa0b38829dc1a4cd9f463"],["/Reservoir-Sampling·/index.html","4ba5db09037b368e3e0355cfabb7391b"],["/SQL-injection-vulnerability/index.html","dbc2160108f2fe7d8e300d4eca88d87d"],["/Sandbox-security-mechanism/index.html","68d511aafc88ad49d3e27cb97dcac7d1"],["/Spring-Cyclic-Ependencies/index.html","c7b8790ef55c438a2dfc54840714f499"],["/SpringBoot-startup-process/index.html","4a25748a50ed29ceb744c681cc96d362"],["/SpringSecurity/index.html","0a1363e5cc22660ee975236767032f7c"],["/Thread_Pool/index.html","67e42a711f9c624360a5eabd4ea5b34c"],["/Transaction-isolation-level/index.html","a646cf9d61a6eb432520401af9f692d7"],["/Unitest-framework/index.html","1a79deb5fdf4a615bb24b47e8cc2db03"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","a08585726c71768b8ead09838cf6f61f"],["/about/index.html","fad0bff18a2141bfe8fd2c1faa9a6ed1"],["/adapter-mode/index.html","9e353a96a5dcbbaccf1a2ad17dc13446"],["/adjacency-matrix/index.html","0417dc4811f24491339a7dfd3dca5622"],["/adjacency-table/index.html","4c2525f7e34e50a48bbe86409f3664e3"],["/agency-model/index.html","32e773a20758bda6e27d9aee59ce5545"],["/app-test/index.html","fffb989b0c026bb4568718fc52a127b0"],["/appearance-mode/index.html","5b17039ca663162d2b17e41155eaa5ef"],["/archives/2019/01/index.html","6c23bfef81a9780284054d7b05fa44e5"],["/archives/2019/07/index.html","d810f678c33790ebd9e2f6a67d5c91df"],["/archives/2019/10/index.html","d0cce19d84075b1a9b05e51ff83266c3"],["/archives/2019/12/index.html","acdc958745dcde0f2fef97ee38ae4848"],["/archives/2019/index.html","3373d458d23578d9202482307afe3f8c"],["/archives/2020/04/index.html","43d489a5c89b9ac0e11d6e5003e12581"],["/archives/2020/05/index.html","b2ff0541b045dd1495057ff3f0d9d73f"],["/archives/2020/05/page/2/index.html","6e36e214d6f2f7dd55264776796831cc"],["/archives/2020/06/index.html","3af18196ad3a6d0ea8145b0d353378f8"],["/archives/2020/06/page/2/index.html","68ba90ad46cfe17f2b42821991db315c"],["/archives/2020/06/page/3/index.html","ea062c59e857214819874f320f69a1d8"],["/archives/2020/06/page/4/index.html","7b299a81c531d8c252e514ee81466eda"],["/archives/2020/07/index.html","d45e539b48135bb31d3decaf75b35fb0"],["/archives/2020/07/page/2/index.html","9b71aee136dcd00656b95ad4fec657c8"],["/archives/2020/07/page/3/index.html","4273ea46a76dc8a47033b80428764cbd"],["/archives/2020/08/index.html","aaa03c56497ad9fca0d624000610fb84"],["/archives/2020/08/page/2/index.html","984d3b6bc91828a48ac519662be9d6af"],["/archives/2020/09/index.html","5cdd8fe3b0b882d29b6c8e36068b3829"],["/archives/2020/09/page/2/index.html","b81cfd452473ee5f8b98682bcda5b4e0"],["/archives/2020/10/index.html","49b463c66f35549beee4084876daa328"],["/archives/2020/10/page/2/index.html","957cdde7a5dd3c5a747aaf2fe9972787"],["/archives/2020/11/index.html","ae678db113696ff4bbf03dbf572f2371"],["/archives/2020/11/page/2/index.html","9d323db0493429cc6e4d2cfd59f032b5"],["/archives/2020/12/index.html","1eb928922c0483a5d937409e1b5abd5e"],["/archives/2020/12/page/2/index.html","c126da82892591f3d5d5b5525447d01b"],["/archives/2020/index.html","293870e33b56279d3fa83ded58a62d96"],["/archives/2020/page/10/index.html","d1bc868fa5bb91097760b187b7cfa698"],["/archives/2020/page/11/index.html","aa1af927fb757108f660d7459e5471f3"],["/archives/2020/page/12/index.html","618d2639c2c4336a515c9f4afed19db0"],["/archives/2020/page/13/index.html","c55d4e5426e2228408d9c17a88a9b887"],["/archives/2020/page/14/index.html","60fb422c8ab6cc9212a179d13579667d"],["/archives/2020/page/15/index.html","89525a38939309f9df584404cc8839ae"],["/archives/2020/page/16/index.html","776ce644aacf57eba10db1e212e18e87"],["/archives/2020/page/2/index.html","2e1aa6e54dd15825f70e57d7f86d55ed"],["/archives/2020/page/3/index.html","a704a0b781bcb55e78a67a1fcecc2166"],["/archives/2020/page/4/index.html","bd5322de886b5b5988642640f13ea837"],["/archives/2020/page/5/index.html","1f1103afb1700a56dc0f140a7a5f3803"],["/archives/2020/page/6/index.html","575f99afbe51f973a2fa543dab487d23"],["/archives/2020/page/7/index.html","e6868218852502eab87da5e8d6f41869"],["/archives/2020/page/8/index.html","003610648757da52da06b5c1a94048f2"],["/archives/2020/page/9/index.html","703639e84ad294a9ba61ca3a59e8f1a1"],["/archives/2021/01/index.html","70981d655615830452b749f3b53f1e3e"],["/archives/2021/02/index.html","f87b0393e896974180fe6ce7244006a2"],["/archives/2021/03/index.html","5b3970232aa7304b692fe943d3f20fd9"],["/archives/2021/04/index.html","91181938cd87c608eeb647969fd0506c"],["/archives/2021/04/page/2/index.html","06489a9a8e99a309cb55be23ea33f9a4"],["/archives/2021/05/index.html","4be69374f0d5a051f6d88e03efe90ee2"],["/archives/2021/06/index.html","4de05552ae1b832777dc57ae4713b307"],["/archives/2021/07/index.html","52e56e58bf1401070a8ce45e72db4b97"],["/archives/2021/08/index.html","50aaef3cc5759c35da23c94231bff9ac"],["/archives/2021/09/index.html","75feb350d18b57302021025dc9827015"],["/archives/2021/10/index.html","6c81d2d03e1d657edec4916a54bbf3c3"],["/archives/2021/11/index.html","1c7a9d0abdbfc8afbb5f8c83aa36d9c4"],["/archives/2021/12/index.html","2234c52ef4cf8989bf3f6502769619b2"],["/archives/2021/index.html","c23e229d4d11d4dbcd1fdea52cf03a06"],["/archives/2021/page/2/index.html","85ea02e34e29c4d5e1e279ef73d8282a"],["/archives/2021/page/3/index.html","7e89e9b10533dac6b58cf8782b4c0597"],["/archives/2021/page/4/index.html","47a28f413ff98cbdda4d206c9732deb0"],["/archives/2021/page/5/index.html","e06d1da086131833fab4cf4c344b59ac"],["/archives/2021/page/6/index.html","790330794db250e13c07892eea2680cf"],["/archives/2022/01/index.html","2ce54ea33141efffbb25a1f360a05217"],["/archives/2022/02/index.html","0c6cd0a9698d4dc7fd059d6f0e1c2fd3"],["/archives/2022/03/index.html","6a66cf7cf21e5cf8e09c93f813aca587"],["/archives/2022/04/index.html","5ad1d0d20d4ad0443a9e0c6ca3b705eb"],["/archives/2022/05/index.html","149b311dcdd9460f9bde18b7f5a16ffc"],["/archives/2022/08/index.html","7eda0454ebb9b2c47332f0fce4e3ebdd"],["/archives/2022/10/index.html","11b2ceb91a5f8c57bcf6254b1f8e68e8"],["/archives/2022/11/index.html","f7c6611adba4d4b8ab660289637d5827"],["/archives/2022/index.html","8ffbaa86b2c1202dcc54196ef323b9a3"],["/archives/2022/page/2/index.html","8cb3aa257d3f9593b5fb528a74c1195c"],["/archives/2023/04/index.html","5787a7c620251a8768c3e11cdf257f5f"],["/archives/2023/index.html","842a6c952895e11a2a0891d8f3694efc"],["/archives/index.html","d5c671246a542fc397831546d198d3a1"],["/archives/page/10/index.html","65f0ee07305f8ffb91176b8565754846"],["/archives/page/11/index.html","2ff2dd416d2d13855956e4d9730d3543"],["/archives/page/12/index.html","874a4571705ae8fae14d2986635bb0ca"],["/archives/page/13/index.html","2575c94a95803d8c979c207536b52f6f"],["/archives/page/14/index.html","eb8a0da894c2168e72d902fe909cbc63"],["/archives/page/15/index.html","d491cf493db1031ae1401ba08d3418d4"],["/archives/page/16/index.html","664d875a2b37c2e3c04ee6cc27d21df0"],["/archives/page/17/index.html","2f7667ebe697e0571d5819f83f6e198e"],["/archives/page/18/index.html","fbbd648503b94c3a014f37dc179acf5d"],["/archives/page/19/index.html","1c31cc34477f7d3785db48b341952d8a"],["/archives/page/2/index.html","e8a6f3276309129c1f8b36e4da139fca"],["/archives/page/20/index.html","a47bcbbfdd613f1b6347f04340838fd6"],["/archives/page/21/index.html","20faee62f2fa691430423cf02e47f058"],["/archives/page/22/index.html","9953ac66423e9b573ca3f031513cbea0"],["/archives/page/23/index.html","c35577eb17d208aaf3d55f2e054dd3f2"],["/archives/page/24/index.html","f7710d66b1a2547ac1979d0b31240f52"],["/archives/page/3/index.html","04cd84bc4d0c6e3376891960c4d88cb4"],["/archives/page/4/index.html","5a5b38e248da4d280be680f3ebddbe3a"],["/archives/page/5/index.html","f5e258ba941a5edbd3d189ea219ec9b3"],["/archives/page/6/index.html","aec41d76f438592e492024c5c23900a1"],["/archives/page/7/index.html","8232a2933d5274c09fc238c4a869c4d7"],["/archives/page/8/index.html","c0a502ed2a5d077f8391ed96f11f733b"],["/archives/page/9/index.html","ff77bee9e630fdce9f2f9fd8ceeab851"],["/array/index.html","f90b094c556c40188b666828c75edc9b"],["/automated-test-katalon/index.html","a8d7630ebafa87335ebcbeeee50bdb05"],["/automated-test-selenium/index.html","d78f51dee7082343945fc83664ca66fe"],["/back-to-table-query/index.html","846f9881cae4c4add4c3e6038ccda21f"],["/binary-search-algorithm/index.html","5cd44f6a79bd8dea4e4b574034a0a712"],["/binary-sort-tree/index.html","096d282309ee27376c4382596e04b456"],["/bionioaio/index.html","90b77bd4a71cd0d058786cc9e9011537"],["/bridge-mode/index.html","0b962c6db643f052b2d3850713b036d9"],["/builder/index.html","5b07a83b829de5b6eacdf23de1a59e14"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","b20125fc7c276449f31112f11e6e7828"],["/cache/index.html","c7915e9e180025f25760db90360ed731"],["/categories/C/index.html","f0128dd33a902ee6a7326d5569949d79"],["/categories/SpringMVC/index.html","f0f0bb6bbd64961cd84ddca852b7a342"],["/categories/categories.html","b7c31fc0fbf04be9fdc737c0f81a8d1b"],["/categories/index.html","20dfd47fad9220904c5e14aef40cc7d2"],["/categories/linux/index.html","c4b0099f882e9bb7e5ba04f019f86e11"],["/categories/分布式/index.html","f9635a2ad7fabaa7668d36d9102e9b5f"],["/categories/分布式/page/2/index.html","7539b0b1208055a0b53ce8d241c8ca44"],["/categories/设计模式/index.html","dddc3a223184f256bd0a15c770b41d8b"],["/categories/设计模式/page/2/index.html","a03d729cf043de54f168b7764d265332"],["/categories/高数/index.html","188e19371dc963f2f6c69632216469e0"],["/chain-of-responsibility-model/index.html","1dbcb24e095751ad24db31aa13bb936c"],["/charity/index.html","77c874870c0890e5d12b82a6438b7e9b"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","2eaa8027450f85e6723ff5f60edbe989"],["/combination-mode/index.html","f3129e1df75ab7ac5bc463ebec53e44b"],["/command-mode/index.html","ac3d5bb7a931e850266ef8f060a117ab"],["/common-commands-of-unix/index.html","bfcccf21f7d0b0675a8d5c28380ed53c"],["/computer-network/index.html","12a5cc01a83fd27511414e9d25452565"],["/concurrency-principle/index.html","f8dbe3ad90d4686820dadc27e705a1da"],["/continuous/index.html","31ebb9ab3b9e2b0335924ade3e3a81e0"],["/contract/index.html","7ac3a83583d6f605b77436fa0e23eb4b"],["/create/index.html","32717f5897b755902f4aa71e2fc1e98a"],["/css/main.css","0ab02c81a8ead489278ab88be7700809"],["/cycle-structure-programming/index.html","f4dbb637c0f327791287c410a5d97c52"],["/data-structures-and-algorithms/index.html","53b494b3c0b774a46617d62ac6b88cff"],["/deb/index.html","3a9c930536a297343bddfde2113d8d41"],["/decorator-mode/index.html","b44a3762921a1b52df6860246c82de7d"],["/definite-integral/index.html","3a1a291fa35887aaa74078e0b41cce46"],["/dependence-reversal-principle/index.html","4af9a5a65cf544bd64bc8a6308d6bb71"],["/derivative/index.html","c1be288342d2480977426d6bf062cec6"],["/design-patterns/index.html","cb773f020b10297f8faab671ed596bbe"],["/dic-algorithm/index.html","3661106e0074c27168f11fae261e8f65"],["/differential-equation/index.html","bb9bd6b250c49077e998d2283b705b2e"],["/differential/index.html","b5661e4c639dde30bee9a25c102b2b27"],["/dimits-law/index.html","aa1dddd893bd77f2453d9cbcf8b0ce72"],["/distributed-lock/index.html","702603beb9a0a91ed457058c80e52ca9"],["/docker-virtualized-container/index.html","1baee23cc759564af12db203e9d443ea"],["/double-integral/index.html","a6fa5c64e3f8ddb25ec512709580dd92"],["/dp-array/index.html","60bb2614f516c342738ebc92c1186023"],["/dynamic-array/index.html","eb2b707d75596841dc051eb384c2a6c5"],["/dynamic-programming/index.html","595462b12de6801beb53932007ee1f52"],["/edgeset-array/index.html","b5498f25d067e3830e995b6dd2a88eed"],["/encoding-algorithm/index.html","072f1c1ae7a4641a1f28dfc31fc8adfc"],["/eureka-service-registration-and-discovery/index.html","0b562eff0b48c4046e90ea73021e5a49"],["/extreme-value-and-maximum-value/index.html","576ce4c4b5ee51378e250d840fbd00a7"],["/factory-design-pattern/index.html","e9628cf749ac613fad6bfe5fceee9cce"],["/file-input-and-output/index.html","67e95e8679759be07c73af15c0b1a522"],["/flyweight-model/index.html","2fafb252698293d2cd6b991084bba120"],["/friends/index.html","a2eae0e1a89f4a4ce0ae3eeab540ee8f"],["/function-graphing/index.html","9253f63aee1af73e54cde5843c1d9211"],["/gateway-service-current-limit/index.html","8855058c2b141efb2497d65c37220089"],["/gc/index.html","69e869b214d04db4e0d4a66816f3c5a4"],["/generalized-integral/index.html","8b49940b5330b231511754d65a899178"],["/google8102e2f35ce9e391.html","352ab5241e228093792e258e25fa0bb4"],["/gulp-compresses-static-resources/index.html","f4eebfc798573080ab6a891f0c305b72"],["/hash-algorithm/index.html","db72a1a1cdb40682f6a36f21765369e9"],["/head-first-JVM(1)/index.html","28214fc1fe801034694fe9bcb904a729"],["/head-first-JVM(2)/index.html","f4cefe1c1541ddf99c89cc764af7291f"],["/head-first-JVM(3)/index.html","aa4494fb7028e86000569f6ac5a54958"],["/head-first-JVM(4)/index.html","c41e1b6f7eb01256ab1c744dbd8a6122"],["/head-first-SpringSecurity/index.html","6e878bfc712fd84a21811af02cdc51dc"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","f050c5e1ee6e3ec56a53c083951a63bc"],["/heap-sort/index.html","74e243af3c9342e37f681b647d3a7872"],["/http/index.html","a7b408d043a5ff508c0fe63a379993a8"],["/huisu-algorithm/index.html","739ea01627db6e33b0123e585f62856e"],["/indefinite-integral/index.html","c91da487bf05f127cb487e6238dfeb3c"],["/index.html","50fa24295144d6b454161993247a6e00"],["/infinitesimal-and-infinite/index.html","52b2074075ffc72eed6a1a2a5274cb43"],["/interface-isolation-principle/index.html","d676c113de44d5f0b9c0d90adc196a0b"],["/interface-test/index.html","ee57e166cf9f17cc0598e26d28c40bf5"],["/intermediary-model/index.html","8ae05de2f5f666dffa5669da5407c92b"],["/interpolation-search-algorithm/index.html","92fcb38cfb8ff9ffc6ebd50b856cef78"],["/interpreter-mode/index.html","9adb602f70de4c5f080558496b77c1e8"],["/introduction-to-computer-network/index.html","ae77389dac2894574c5e71dede7d7cd5"],["/introduction-to-operating-system/index.html","cfc0ce05f2054e3c040d28150b8e24a4"],["/inversion-of-control/index.html","9d37f7ab5b1c62fc1aea5468b049299d"],["/io/index.html","04e2ef58aa123bb3207fe26998162702"],["/iterator-mode/index.html","8742bc23625fa24dc63bcc63c6bdbbf4"],["/j2ee/index.html","0af87538938354b7313d25682abe78ba"],["/j2se/index.html","9d2abe1b51cde5064cb3b4cc05221d8c"],["/java.lang.String/index.html","20cc187e7cce1428b38a5855b530b70b"],["/jdbc/index.html","43ecf72c62f6ea0318cc6a7d0c451419"],["/jdk/index.html","79ae47b750550ae3374e54a2996164fb"],["/jmm-memory-model/index.html","b229411e9c78bcc1848533ca5196915f"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","0ea0b324200e6585a16143ab4ea40b7d"],["/jvm-method-inline/index.html","e67729d14a9110f76042881de9cd7774"],["/jvm/index.html","057da8728d3517a96ddc12b441f0085f"],["/law-of-robida/index.html","4e75588b9721b450bae7249ee6cdfe1b"],["/limit/index.html","26cbf1a2062c14b94b6ba87307acdf81"],["/linear-search-algorithm/index.html","0337a98133df255dc2ed16c5bdcea44e"],["/linked-forward-star/index.html","b7b54a2f905a3efdb9e3875241525a8a"],["/linked-list/index.html","0b2e841d7a20ec63e2d2dc1422918001"],["/linux/index.html","2fd9601e8af8f8b263ebce9c248a2c01"],["/liskov-substitution-principle/index.html","4edca1d5d503820d193a0669de17c805"],["/lock/index.html","29546bbeb771679fed30f89a13d819f9"],["/lru-cache/index.html","70bf3ecb14024e2d64ce9bd03ef9c239"],["/maogai/index.html","acf6544d75235c01af621543133ed720"],["/memo-mode/index.html","d8174b0cdfbd7f5d0f06015e6e212b27"],["/monotonicity-and-convexity-of-functions/index.html","77c77ecaecbc9d088f5dea1e409a6319"],["/multi-function/index.html","f3929a20d1f6a8c4a9739be9495e5910"],["/multithreading/index.html","36c3cb5611240f41335eccc3509edd33"],["/mvc/index.html","b9a3bf4877c35620f70fed5f2cd1a95f"],["/mybatis-cache/index.html","5bfedb76c02605492f06a29ea754b06d"],["/mybatis/index.html","3cf3a9fbc7f98bc9b44207fbffc73992"],["/mysql-index-wrong/index.html","11270b65b08730cf75daa3a5ed7f3093"],["/mysql-struct/index.html","34cc71f1b0bacdba3e429f6a5be7e0b0"],["/mysql/index.html","9810fd0c2b829d02ba65951c670b68cd"],["/nacos-service-registration-and-configuration-center/index.html","d30a7e7ceadaa4f958a72f89dbe200a1"],["/notes/index.html","498c55c17dd2237888b1e4a85b6a7053"],["/null/index.html","4630bea6b177e3eac1e326ffdb2782fc"],["/objectoriented/index.html","6fbb95b3dc7ebbfe39cdecd68aea3cb6"],["/observer-mode/index.html","da05bc95db185db925e789ec388e0244"],["/off-heap/index.html","35a1cf5d1ae7a93de63511e2cb469b34"],["/operating-system/index.html","2bbd028f743335cfe4c7b8b6afbab806"],["/page/10/index.html","1e99222b4ed475c1ab4a66d67443b9e5"],["/page/11/index.html","3c6d32cb702d7a0eb0faa27c29c3cd2d"],["/page/12/index.html","af89e806fdda7925f1ddff237082d0c7"],["/page/13/index.html","330b2a259e2cb9b152781fa1e2882d5e"],["/page/14/index.html","b6c307943512d1f4b1bc6ef62bf2155a"],["/page/15/index.html","002a41c6c672115698f625c60568d2fb"],["/page/16/index.html","fa36a77b90a81fc317ad36849dc86a48"],["/page/17/index.html","b60a27cf519477f43753a09fec2f384b"],["/page/18/index.html","5dd8e42df362057cc9cb1de9ee72843f"],["/page/19/index.html","41205c37eac0f7356ae8061d7ace0f12"],["/page/2/index.html","25f8a88bb23cbbde4fbb3a4955b30af0"],["/page/20/index.html","7c08c226c229fe34d9c196c17e8d9550"],["/page/21/index.html","ea2c69bb2f9002f098305b80eccc7ee9"],["/page/22/index.html","a785a209aa64080c62403d44c90e66af"],["/page/23/index.html","c52759bdef39b90c353bfd6994b071c5"],["/page/24/index.html","0ad6397abd33075e2d39383a6cba40e2"],["/page/3/index.html","52f4459def016a351031d6409a82484c"],["/page/4/index.html","b13d9dfaa2ab2fa3b3fb32f7ce71d60f"],["/page/5/index.html","61782ee4ab6f26f9739f5d98166c4ba2"],["/page/6/index.html","a356260a4f7b1bc55f742a804ef46d6f"],["/page/7/index.html","5287da92ad9a42c73c9dcf6ea8a9ef76"],["/page/8/index.html","6681eac3f0dada6d6a07572124798a95"],["/page/9/index.html","ae44e21f69c51018e6e9ad8f43240ae7"],["/palindrome/index.html","a303f7bb40a3b1f4026846d3506b5d16"],["/partial-derivative/index.html","fbb0559cedd54bcbd11723189cb2a2b7"],["/pass-by-value/index.html","67f65539e3fc19196e6151bd9df84ede"],["/pictrue-bed/index.html","50af830f3285aee61ed0e71b187aaeae"],["/principle-of-opening-and-closing/index.html","211b1e3ca51e44378be8219fdd4dabda"],["/principles-of-computer-organization/index.html","d5fe7c5c3e4eb7850378e05b1181f315"],["/program-test/index.html","9fdbbec07b50d40bf59b69f9c7b84057"],["/prototype/index.html","7657bc2c1e37633bc8d5ae41f36cda23"],["/queue/index.html","51045f417b4a9fb9d9a8cae25f0c7dcc"],["/random-weight-distribution/index.html","c9459be8428a01f4e5c2ee33f81a7efc"],["/realize-modular-programming-with-functions/index.html","abe2d91e1bac1b442275a732fcd69703"],["/redis/index.html","2fdadd4f644e64660386b07864818a50"],["/reflection/index.html","0ba04827fa2db06a3d67c77717fa2632"],["/ribbon-load-balancing-service-call-degradation/index.html","7df85a5d620718982f4b2afdcde60fd0"],["/round-dp-algorithm/index.html","51fd477596d3268098c01991bfd2c731"],["/seata-handles-distributed-transactions/index.html","662f35f81e6df3b3da7fde1fba213833"],["/select-structure-programming/index.html","d7257a904d1c9ea188881f532811f3b6"],["/sentinel-realizes-fusing-and-current-limiting/index.html","a8d40021bb6d7bf1738a6b63bbf2b250"],["/sequential-programming/index.html","8320e7af7e2f63db5c82204faf897888"],["/series/index.html","67f14bb38023fd8dc70441554a67eb7a"],["/service-worker.js","6600fcd826649b4518555c615bfb5c00"],["/single-point-login/index.html","2ce71af41b33297d294c990e1d12d423"],["/single-responsibility-principle/index.html","5eadd59fb40620ca6ba10fee343e5a67"],["/singleton-mode/index.html","39f64cc40444acb9187f412087a80c7d"],["/slidingWindow/index.html","3df308ed7dc931cac658baa6388ca6a9"],["/snowflake-distributed-id-algorithm/index.html","018353909b55d856b8f6a909f676b100"],["/sparsearray/index.html","bb05fb6bf200ce12e654e2c12ae6e748"],["/spring-and-jwt/index.html","e34ae3a294511d2cf006ec977fb24df4"],["/spring-architecture/index.html","dbe3fa5b38ade336c9fd7a94e8c21c8a"],["/spring-relate/index.html","af41be2e8d27f2f5b1ab0a2f69fb710f"],["/spring-springmvc-mybatis-integration/index.html","81ec7d1e73831994ea43b8478a5eea09"],["/spring/index.html","5189cb2a0df7566de1ec3f0f2d323c90"],["/springcloud-alibaba/index.html","8d050d02cd67b2ebb995c884a9f14c93"],["/springcloud-bus-message/index.html","ffe6b9fe55990cd3f7f0b1648d36d602"],["/springcloud-config-distributed-configuration-center/index.html","05ad3296b984f165485fff41738db61e"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","408c98f41b540f8289a82ce0ed5579a0"],["/springcloud-stream-message-driver/index.html","c0f977d0d97bcb6192da6709faa3e8b6"],["/springcloud/index.html","00a9ae8a3bd5a94467037117a5b1163b"],["/springmvc-environment-construction/index.html","2f0aa933587c854bfe5f9bc14ad52f26"],["/springmvc-work-stream/index.html","ae2c340c755041a13a37b36bf0e9e712"],["/sql-injection-attacks/index.html","b11ca116b0069ce2caa06d4ec17d4596"],["/stack-simulation-iteration/index.html","5fb48e0775caa719d291e29669cdd52d"],["/stack/index.html","4832c82347f9e271d1c9431e0c3362ee"],["/state-mode/index.html","1e6895cb0c3afea6aa85395b028bed4c"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","e2c2d810d207f2861895348f5645108a"],["/strategy-mode/index.html","83b282070bdb019c3c83f80c3b0d2cdb"],["/sw-register.js","95909af1cc7e0057c60c0c4d281a9802"],["/synthetic-reuse-principle/index.html","a5aa780ac871f4b4292e2f6a2fdaed6a"],["/tags/C/index.html","5507d6da0837fac25497864993553d4c"],["/tags/C/page/2/index.html","1f90929e052198051cc7c02c09de5ee3"],["/tags/Concurrency/index.html","ee198c43b95eabef53bd8a039b6f9bb7"],["/tags/DesignPatterns/index.html","c08bf7584dac8b6fa9c029530202045f"],["/tags/DesignPatterns/page/2/index.html","f4e225f55fe42f49163d6249b07b1c0e"],["/tags/DesignPatterns/page/3/index.html","f41c0cbbb0057a12d7ef51257308c10c"],["/tags/DistributedMicroservices/index.html","afefa8b99a1ed2718ac748f5d222c997"],["/tags/DistributedMicroservices/page/2/index.html","0e6bfbf5379fb0c474d6a62fbe0aa422"],["/tags/Interview/index.html","ed50e2c4cff064cc8b164904934c5162"],["/tags/Interview/page/2/index.html","ed7d86a9064a85a1c031dc7ab1976b04"],["/tags/JVM/index.html","b0054130d6dbc06bee8b43bb8afa4b27"],["/tags/Operating-Systems/index.html","af9eb4ca8eb187905ef453bc5955230d"],["/tags/about/index.html","868e8c35a2e8093688b3607a15efd11f"],["/tags/ad/index.html","26a348abcc167df92faa81caa40c9e2c"],["/tags/algorithm/index.html","a240fb0ff30f1a9961d90f3809fe10f8"],["/tags/algorithm/page/2/index.html","6685673b213c5b65070e38ab481267a3"],["/tags/algorithm/page/3/index.html","b0dcb8a329258502f3fa3dbbe0ff1357"],["/tags/algorithm/page/4/index.html","1099d203c8706b3470274a74b319c9d5"],["/tags/bug/index.html","40303f922a94ab87126a4baa6de42c76"],["/tags/computer/index.html","de231203f91c7e31656813435e62eddd"],["/tags/data-structure/index.html","f9c3579d7c311985f1010b90cd95f73c"],["/tags/docker/index.html","dcc5aad26ea77d34063ccacda4c6d298"],["/tags/famework/index.html","df66df8b0af1e998a2224399acef3e77"],["/tags/frame/index.html","4d40f79c4bab19a3d1af64ffa6fef54a"],["/tags/frame/page/2/index.html","6dfe1d8881cb06a3e3347de1d865516e"],["/tags/front/index.html","f3c78aa3b7b833caec63fd2fe203111c"],["/tags/index.html","31ee7b2911d5d7af4406f559a2760e55"],["/tags/interview/index.html","6b57a9dab232ca302df31e4fe679ba33"],["/tags/io/index.html","09cec451a8409b603b47c95707530f5f"],["/tags/java/index.html","48dc7b43360066ee5e29e440ba16b171"],["/tags/jdk/index.html","10c92c144d02f9a154e23c1edaf2b1c0"],["/tags/jvm/index.html","a7ec46132c88e4bacae5a7df6c81c7f3"],["/tags/linux/index.html","4ccf6e6411fbe3fc3e2a9b67e284b918"],["/tags/maintain/index.html","2e2aa20c9a03f1503aae1451c363f88a"],["/tags/maogai/index.html","3f51bc9814cf7bab940f1534a12586ec"],["/tags/math/index.html","c15a4cde2184db5450dbe7cfadddcecb"],["/tags/math/page/2/index.html","6410cf7456c12bbeac511aa6934ac3e9"],["/tags/middleware/index.html","bbe6ad611660fbd60783ef2768656542"],["/tags/mysql/index.html","c2359e4424e4a4a64bfa280664cc69d9"],["/tags/network/index.html","e463bef300fd2da5ced39cd3f4bcbef3"],["/tags/project/index.html","dd6da6f23e0b783631a47786af7b8b23"],["/tags/security/index.html","5ecdd40812b63e2a2f74178b2a5a2f70"],["/tags/sql/index.html","cfac150d57351a4fd842835374e1d5a5"],["/tags/test/index.html","901ff0154cb4ed16137f5f30e3629b89"],["/tags/think/index.html","79ee289a1c5e25320f046ecf221c460b"],["/tcpip/index.html","bc2a951cf8531552bc161f53275da496"],["/template-method/index.html","ccafdd785449f0df40a493c8d0f70133"],["/test-case/index.html","65130eb5152c94792362c9807486126b"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","86265d34c17730afb9d372fa6d2bca2c"],["/thread/index.html","93fa99eb23d7d026461719fdfbda5e24"],["/tj-horse-racing/index.html","525abd44d56779c003b6d8ce6a04c8d7"],["/topoSorting/index.html","2c1c7d2a040cabfacf498c2b0ce3e163"],["/traffic-monetizationaccess-to-google-adsense/index.html","7bb35d7f1daab3878ddeabd92fe3327b"],["/txCharity/index.html","fbfeee597d1b02b46652dab79a2c5e56"],["/ubuntu-set-ip/index.html","dae2f4f8e1aee9a4ea0736b7265ee5b5"],["/undefined/index.html","572daad75a3092006c321994ad5916af"],["/use-arrays-to-process-batch-data/index.html","f5b2c929b8d55ea857b61364728a943e"],["/use-of-springmvcmodelattribute/index.html","68cf8133ecb4a6bafe9b3efba136ebdb"],["/users-create-data-types-themselves/index.html","42af75525ae3c66c1fb9e4fea48d3c2b"],["/visitor-mode/index.html","0d9d03f09fd96deebb16bfe498e989d1"],["/what-is-milk-and-why-is-group-wise/index.html","20cbb733e5cd416cb39752ee853f2beb"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","2a0c04e841c39c3d90f904e4253e9d43"],["/xss-crosssite-scripting-attack/index.html","9260e75b8d62eb75872b58b9eff41ef9"]];
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
