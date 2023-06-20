/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","9518f61a61f3377e3b083d34db14997c"],["/404.html","a32151874fa9c12ac4093d5e66d1773d"],["/404/index.html","ad7d39f4223129ee5d2699550c9a735c"],["/7-sorting-algorithms/index.html","b4d450c74852aca7715156e2bd45ef04"],["/AIO-blocking-model/index.html","83887727372f55036f47a08d204910a7"],["/About-Snowflake-and-Consumption-Degradation/index.html","7e4cbbf901da13e24ea006479c941dd9"],["/BIO-blocking-model/index.html","65161bb4d97a528b755ba1b144c3f8a4"],["/Bloom-Filter/index.html","44723b98822472686e16bbf993848d56"],["/Boyer–Moore-majority/index.html","04bc55d817fa6db44b2a7c65b856ba03"],["/C-algorithm/index.html","edb318c73246edebba6ac9950de0065d"],["/C-programming/index.html","1a62ff204c28320d58ae42e10f88ac15"],["/CAS-&-AQS/index.html","0bc1d3f12cded82bda8ea294efb50aeb"],["/Comparator/index.html","fc51c850362f7e384d01e376088262ba"],["/Differential-array/index.html","cce2cb61fc085e5890e57e5f1de244a6"],["/Download/index.html","01077998533c3a46182a29dc49934d77"],["/Front-end-security/index.html","2e15fd815b87cea310d6e933ded641f0"],["/Good-use-of-pointers/index.html","14b21daa293889f48b9353c6316ba470"],["/Graph-degree/index.html","d0bb723e8d9a08ed07cc6e7cfdc8db21"],["/Greedy-Algorithm/index.html","f1dabdd5299f871d0ee0fd01fb444055"],["/Head-First-Map/index.html","96a79b9fe3bf17c2f1875064080a540e"],["/Head-First-Netty/index.html","0ef0bd9cdefc4c945aeccbe065dfee62"],["/Head-First-Nginx/index.html","7cbf7eb908396d7568388b5e8e489c86"],["/Head-first-Spring/index.html","7b87387298a478ae524bfe51930d9199"],["/IO-model/index.html","f74c8ec7efdf7a1204e4a73090f61792"],["/IO/index.html","eb25907e2a15e1aeb79c9783a84d22db"],["/Implement-a-lock-based-on-ReentrantLock/index.html","8b1ac1beb91b4ed8e380df8812c213fe"],["/Improve-Robustness-(1)/index.html","d7de85594e5690b8b7d4dbd47c3e9a38"],["/Improve-Robustness-(2)/index.html","e49214b3ed1f798caaba0d73cbff397b"],["/Integer/index.html","28e31a3a990417269e287f2d889bde79"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","5c372a2066ab58cb5c32670611c25167"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","1a6a0cbab4540fc05e4b44a1dfb9d49e"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","86822875d16ee6cde4e6243aeb8ad846"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","6d101d368c750f0bc88e3af6ce97d344"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","72e4fdb8a6362130ddd6f3da44e17d1e"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","ad161717eae2ca982dbeb64d2d49ac4a"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","1975d8adde45ac10aa7e75e260c1f764"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","d1d6ba3080dabca70c9bfe5b388b8cc8"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","4f1feb60a0b3eb04f337c09908f888e9"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","4937ee4d15d006d60c39b485e253eb22"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","e547cdbe917416d6cf30317a37e538b7"],["/Java-network-programming/index.html","0a628ccabb9ae65ad565fd1384e9bcbb"],["/Large-number-operations/index.html","a29a30b762f5ab7fb31b60872883f300"],["/MYSQL-MVCC-&-LOCK/index.html","7c5e3c1f45d9648b8dc3885f76d59f9f"],["/MYSQL-uuid-and-page-splitting/index.html","46c25bd649557139e33cb2ddbb4576d8"],["/Minimum-Spanning-Tree/index.html","7c09a13ac01066713e9e128f5c4c6f31"],["/NIO-blocking-model/index.html","d841e56c81f8da08f069903044470c18"],["/Nacos：Configure-MySQL-data-source/index.html","f09de65c35a83d65b3733b3651ebdebd"],["/Native-method/index.html","db5c52f0070dc69b587c12c530fdca49"],["/PriorityQueue/index.html","6c33cbc38afddd4b0aac22932581ec10"],["/Proxy/index.html","91c9581efacfdbea1a2b1c181059a99b"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","5e0b5c055a6f05a0a813b1d961e89e96"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","a9079d1ff67ca097c41a9c0e8fa34b6c"],["/Reservoir-Sampling·/index.html","1a72c4556bd8f536d57423400d765228"],["/SQL-injection-vulnerability/index.html","f5dcfdfec11e8c0007b73862a845ca15"],["/Sandbox-security-mechanism/index.html","60e906677b08398caadd6c3cc93864af"],["/Spring-Cyclic-Ependencies/index.html","c4c90eb1ad989ed9af2383e22655f20f"],["/SpringBoot-startup-process/index.html","c0a20c0acd239dce3018a710230be54f"],["/SpringSecurity/index.html","a9d7d17ea0cf9e177a9e8ddc188c02c8"],["/Thread_Pool/index.html","9c09a8b11475a2bf7bdf4c440330fd83"],["/Transaction-isolation-level/index.html","a06d77ebf121c37f0f5c12ce917486da"],["/Unitest-framework/index.html","c115f188fbde7a4a1bdd6ad7c38597d7"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","f61e6660d9449f1fb0ae202301848e0a"],["/about/index.html","67a906405fd8383e3b54bedcb5257817"],["/adapter-mode/index.html","0dcad94769eac953173124c8094108e2"],["/adjacency-matrix/index.html","e17fd39561487dabc3479d5a7b01ad05"],["/adjacency-table/index.html","90d72b752fbde17a6b712402d1c40635"],["/agency-model/index.html","aed6d570f47a0ba37ed0d4ff0b66fb05"],["/app-test/index.html","a6074a87c19079e8bf8ccee06890590e"],["/appearance-mode/index.html","1b5ba707d8270f5d239e75183cd265f5"],["/archives/2019/01/index.html","0945d6dee10ae18f9397d16abdc20202"],["/archives/2019/07/index.html","7253298683c5a8f420e13c682936c704"],["/archives/2019/10/index.html","626181d8489552ed4ac706ba34b47d6e"],["/archives/2019/12/index.html","f32c7c20d9838f5261fa0fe00bf71bec"],["/archives/2019/index.html","d4881a3729f21fc8e43e7dab3b3925fe"],["/archives/2020/04/index.html","b6cb8d2bbf169bee524e983bb5bb64a0"],["/archives/2020/05/index.html","0a71d48384f45e9c39cc33a0e3906cf4"],["/archives/2020/05/page/2/index.html","b85acc21c7b6deebea0fc67e195e1b26"],["/archives/2020/06/index.html","4a7198f873a41fbf705728066349c1e1"],["/archives/2020/06/page/2/index.html","138f3fd571d024db002c51fdbb9d9a04"],["/archives/2020/06/page/3/index.html","824c2d282e5958be9f015e2e74d8e41b"],["/archives/2020/06/page/4/index.html","d8bd33267e6df26d9d0e5ea0451bc1ad"],["/archives/2020/07/index.html","09adf8b6519ca54b478810341b79e69b"],["/archives/2020/07/page/2/index.html","e454c9656a25412da3c6e1210ff38417"],["/archives/2020/07/page/3/index.html","06e7ec7f0a450f3169e2b76f9317ec11"],["/archives/2020/08/index.html","c6d8e4b1ff0b94e4ed411dac5d576140"],["/archives/2020/08/page/2/index.html","85825ea70357493d01f42f6511f62f2c"],["/archives/2020/09/index.html","ce98b2f4c2abe1a54a2509837553d414"],["/archives/2020/09/page/2/index.html","f6173386c8efbe1a5a6f9776e3273f31"],["/archives/2020/10/index.html","073887bd1018df10c0a58d4f05ba7683"],["/archives/2020/10/page/2/index.html","442d86c6157af8ae47121426293e0a11"],["/archives/2020/11/index.html","4a189a65d00bb5cda1dafaeb241fbab9"],["/archives/2020/11/page/2/index.html","2945abac2e29f4c99f67817b885982db"],["/archives/2020/12/index.html","ca6050549bf8515c361d72d932c30ca0"],["/archives/2020/12/page/2/index.html","774df444bb9920f40a3cd915e00f6001"],["/archives/2020/index.html","a633f0680f44ad6e60ab63db9cc4f50b"],["/archives/2020/page/10/index.html","c6b1793dbd2f2411c41a31976f2635f1"],["/archives/2020/page/11/index.html","20eb77a8cc4d08d031e75bdd8843fff6"],["/archives/2020/page/12/index.html","215aad35fe6960237fef67b3d7c1cbac"],["/archives/2020/page/13/index.html","81c2aee054e30a427ed1a0b6ab814477"],["/archives/2020/page/14/index.html","6b3363c6739687fd0aa296f17faed93b"],["/archives/2020/page/15/index.html","505cb23dfbaa5a8d0ec109d6772fca25"],["/archives/2020/page/16/index.html","41062991ed02a6482213c5aa02a3dc36"],["/archives/2020/page/2/index.html","a39fa2b62f2b1e658c8b0bdac0e9dfb8"],["/archives/2020/page/3/index.html","b0265373887415a00db63afd4553df95"],["/archives/2020/page/4/index.html","c90d49aa95167847c90a46b5979c5028"],["/archives/2020/page/5/index.html","2e98a7557fb5acc457f10047aee577ca"],["/archives/2020/page/6/index.html","6a55863a6c073278b45b1a6221cc7d74"],["/archives/2020/page/7/index.html","ab0a168158e57b928cd0d18e8f27ac1b"],["/archives/2020/page/8/index.html","a03aafe5adceba6ca6fc6f8e5d5ebc6d"],["/archives/2020/page/9/index.html","2c26d49fddcdd72d64e2a1c0c1c7076c"],["/archives/2021/01/index.html","29a11fbe3a00eef01d89e4805b9f0b45"],["/archives/2021/02/index.html","4048823a65a9933cc048a1535adab5e5"],["/archives/2021/03/index.html","51d4da9149ea431c97d6d7c0b2c4b18f"],["/archives/2021/04/index.html","ca52a5e2310f6af4e880f242e3c5c2b1"],["/archives/2021/04/page/2/index.html","e5ed0e65431b82464cc795ae7680d2a7"],["/archives/2021/05/index.html","146b6460036ce38db344a1333c97baa4"],["/archives/2021/06/index.html","c974253dc8d22c91b54abd5521fcec54"],["/archives/2021/07/index.html","581c1e85484437f5d99a502c2e92a717"],["/archives/2021/08/index.html","628ac68ae4500f65b053aef66e9278fd"],["/archives/2021/09/index.html","3eedbf1e96839267eebf280b563608ef"],["/archives/2021/10/index.html","831595b5e3f2167f256a954570692ff8"],["/archives/2021/11/index.html","6d6287adcd80e1613e53db218a3280bc"],["/archives/2021/12/index.html","9a1e9661f360e5758c30f084f2e39cc5"],["/archives/2021/index.html","10515305ccc568fd2b011544b31b9765"],["/archives/2021/page/2/index.html","da958994211f9abb61170556b474c913"],["/archives/2021/page/3/index.html","85a17577fa1f43bc0ccb1075302861a7"],["/archives/2021/page/4/index.html","d4b99db65fed3a361e7a8e49628d8daf"],["/archives/2021/page/5/index.html","a080dc5d524014f316b15214b61eb418"],["/archives/2021/page/6/index.html","dd9a1f40b5a79a1a9425ec3fbfeae8d3"],["/archives/2022/01/index.html","67be14dc7f45cfbdf638dbc0b69aed95"],["/archives/2022/02/index.html","78effb18a8043cb51cf5d82b35848841"],["/archives/2022/03/index.html","5f65c5e65e10501fcec02681a1d18701"],["/archives/2022/04/index.html","b7d5dda905de38762679d96b25607c48"],["/archives/2022/05/index.html","d6bb936b3a329904793a3bb4cfe3e266"],["/archives/2022/08/index.html","3fee44da3f8a11c5008b26cc14a454c1"],["/archives/2022/10/index.html","d1115dd4fec9ac4c18dfa798999048b3"],["/archives/2022/11/index.html","d20b751421600e61f2db133dcee56daf"],["/archives/2022/index.html","c993676b44209cdef346e2ff0fa9ff37"],["/archives/2022/page/2/index.html","5b04c7a0854b32309e7e54e3cd2793d8"],["/archives/2023/04/index.html","ee27a8c49901a851858144fed5895fd5"],["/archives/2023/06/index.html","cdb7eae781c6fad0f2171be32554ea29"],["/archives/2023/index.html","447af090598858d5a4a284f651eb5de5"],["/archives/index.html","21a99bdb3144a430f615669b8327b85b"],["/archives/page/10/index.html","03d72f5dd7f36bdcf3b4951be39ec458"],["/archives/page/11/index.html","276a5116dd15c65435e6df43afecde7f"],["/archives/page/12/index.html","faa5191c7da20a7f83fc37f36989e4ab"],["/archives/page/13/index.html","e8445d1ad48688e49b6020ded819f4e6"],["/archives/page/14/index.html","254a84c683b09cc7f8164f626db699f2"],["/archives/page/15/index.html","b8ae72eb28d6376565f783d826109cd2"],["/archives/page/16/index.html","994a873a401db91541a372b7173c80e2"],["/archives/page/17/index.html","44397c8f5a44f41dfc9a65fbf8ea7d8d"],["/archives/page/18/index.html","6c9a7cb04e423a45c2513c56c302296c"],["/archives/page/19/index.html","c35f27fb6e0ee4bf90d809bc2e2dca61"],["/archives/page/2/index.html","b90d30a9459dafe192229c3d2f5c961f"],["/archives/page/20/index.html","ed7299fd78cd3c2f52ad44d8f280d86b"],["/archives/page/21/index.html","8c59d5936252f2a21011afba022e6aed"],["/archives/page/22/index.html","47cf06efab8c601ca49c361f247d1536"],["/archives/page/23/index.html","627be9f97336e59f82d9edaa877c3b8c"],["/archives/page/24/index.html","265e8e3d47185c3295f77e963ed4d34f"],["/archives/page/3/index.html","230f0988058e79cf2949fcd00e642d21"],["/archives/page/4/index.html","e364fc5c75fc96c6d28a317f59fde3de"],["/archives/page/5/index.html","013d03e19a16e111bd962521e4fcbeb3"],["/archives/page/6/index.html","4c2ec347d76c507f1d0717427038cd17"],["/archives/page/7/index.html","a7470914d1b04d226704d759092ce644"],["/archives/page/8/index.html","f2255e924a7f5142217fb5c1da2b0da1"],["/archives/page/9/index.html","d6f768db07a2febd57209de01a08743f"],["/array/index.html","6b3efbabeb7f91257e4327fef49e5534"],["/automated-test-katalon/index.html","d294eb87476a9f27d063f30e4781ea7a"],["/automated-test-selenium/index.html","cb9941dcbed958be339e2b34d4facf71"],["/back-to-table-query/index.html","fda4be7f4589375a1c3e57cfb9b846f5"],["/binary-search-algorithm/index.html","7eda406942e7afdfdc919202045f71fc"],["/binary-sort-tree/index.html","c4d48d24d710bb7d924ea8151605b389"],["/bionioaio/index.html","e189c44cfec5efec235bff09d40ec150"],["/bridge-mode/index.html","de2fcc2249b27b016f6d34fa15050504"],["/builder/index.html","96adc6ee1974382897bc41b43bda43cb"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","5808a6be34e3117eb50f60475e6dd1b8"],["/cache/index.html","a0dfdf9200fa9a21b3ab846e87922472"],["/categories/C/index.html","54a6299230f109c097ef8162bd59e47a"],["/categories/SpringMVC/index.html","3903ec11f8fb4621f0c90beeffcd00a1"],["/categories/categories.html","f4cf88e6ca44eba7000e9cdb8953be34"],["/categories/index.html","f9ecd1a55019dd8592fd181051f4633f"],["/categories/linux/index.html","b8b19f1be0d164f01a52cf5f2e2330b8"],["/categories/分布式/index.html","731da02dd3042b0eef26572cf688e21e"],["/categories/分布式/page/2/index.html","fb1dad1993afa18d9bc2fb0d8b7b0144"],["/categories/设计模式/index.html","d15c130e48365fdb0b9ff8ffc879ac77"],["/categories/设计模式/page/2/index.html","2f5d479ccd6592a3a84f562d2ecd1df9"],["/categories/高数/index.html","236436feb3994ce748ab14f9c0cb9e59"],["/chain-of-responsibility-model/index.html","d9bde810d6fc1e8625eb12dedbd7508f"],["/charity/index.html","3e8d3bae6d1e9758981503ac0e13eed3"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","71cb66cbd2b633db2594e2bb0fd7f581"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","160851d9de77a8617fcd9078447c1ffa"],["/combination-mode/index.html","a7f584dcaa75b7477619a2f26a0e9ac0"],["/command-mode/index.html","16380fc6515b4d73b53efb5336b4f845"],["/common-commands-of-unix/index.html","40ebe41992d0a35be4a4c25c4b29981b"],["/computer-network/index.html","dcf37ae2d7c5321c4622d94fb446fb4a"],["/concurrency-principle/index.html","65d21893bb50f9f802d64b6b89492ebf"],["/continuous/index.html","5864c2bffa3a2b5d9964fb3e464cefd4"],["/contract/index.html","3edb0156eef8286d7b8630f06dc0f348"],["/create/index.html","36eb53039ab2f522582e446c2b900154"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","8b276b189b4d6058470da6c99f8fd3c5"],["/data-structures-and-algorithms/index.html","3e6f69a723accd14bb87152c17acc07a"],["/deb/index.html","5fecff1d1df47ed0405ed104148c3416"],["/decorator-mode/index.html","d3bb9a3ea1eb9d1d076121622c6f10ac"],["/definite-integral/index.html","c122df15d94db3dad2782206652fc1bb"],["/dependence-reversal-principle/index.html","2074e80e4ca78b27dec29327ab50d601"],["/derivative/index.html","676adcca0fa8afc244afaf22f9254a2b"],["/design-patterns/index.html","b70b56d05cb5c683e62642876b03a283"],["/dic-algorithm/index.html","7019b5efada8d9b59d96a615067fc8d7"],["/differential-equation/index.html","e92bc2f8b8d7001976064703504f12b5"],["/differential/index.html","78146d5e5ff28afb75f4aa77dbb93b00"],["/dimits-law/index.html","b475b9554c08ea37905878a493631110"],["/distributed-lock/index.html","6335be4399e03d10904c25bf957e2610"],["/docker-virtualized-container/index.html","7cd283fae3f736e92ce2b8403f628658"],["/double-integral/index.html","b2bf5e4aa047ad2504ba0c434e6553f1"],["/dp-array/index.html","905e541277ee6298dbaafd4116c591e3"],["/dynamic-array/index.html","c7cb9cadc66a4cafbe0739c1d938d0c3"],["/dynamic-programming/index.html","c2bebc86e199e7f343e0b6239fc5209d"],["/edgeset-array/index.html","f8a75d32088b1cdf24cf22a65306a63e"],["/encoding-algorithm/index.html","28fe837c7fb3f8f01c16edb79b677c7d"],["/eureka-service-registration-and-discovery/index.html","8a9882a3b7a4354f5cc19421b28c5495"],["/extreme-value-and-maximum-value/index.html","86ed61c7ccc151c4ef9d7da84ac2876d"],["/factory-design-pattern/index.html","074dde0e2c40f9659d73d5db4862875b"],["/file-input-and-output/index.html","e685fa019dd7f3e7a71143f7e9ac5eb9"],["/flyweight-model/index.html","7b88c532b3cd822ace0a887db225aa1a"],["/friends/index.html","a64aaa228a1fc446558b09988584d16a"],["/function-graphing/index.html","4c33361adf9a5e0f67bff203494a2309"],["/gateway-service-current-limit/index.html","e9b38a21283d033d7241618f3714f66b"],["/gc/index.html","a5aac766122c38c8f3731b70ff0b0d48"],["/generalized-integral/index.html","11c4693dba3ae77b0c318220f8baaba8"],["/google8102e2f35ce9e391.html","3bf4cd15d3657be341b572c3e755d181"],["/gulp-compresses-static-resources/index.html","3c78a01c13b84f9772d2db383404b16d"],["/hash-algorithm/index.html","5a59a91d0fd11f10b3e4ab124f18e233"],["/head-first-JVM(1)/index.html","62f016840597661d961b240a63e5ba32"],["/head-first-JVM(2)/index.html","3f613861452ec0a137799f7ea093bce8"],["/head-first-JVM(3)/index.html","d95a6dcf2c33c08cec587f2d8d353c47"],["/head-first-JVM(4)/index.html","444ab6b673b817a020aafee632b94492"],["/head-first-SpringSecurity/index.html","7ebf947552f16bb183aa6c86686f1de2"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","73341fb074f0f730dbabe5844553272a"],["/heap-sort/index.html","4bca086de7fb3decc65f5405242f34fe"],["/http/index.html","eb586c382e4cce1175406f3f17620b4f"],["/huisu-algorithm/index.html","d519b30cd8a4a9071edd1df13ecf6199"],["/indefinite-integral/index.html","bef061c8d08948a7a685ca653a205f11"],["/index.html","ad1cb6a877f4f035bb14f0de61f0e26f"],["/infinitesimal-and-infinite/index.html","d922755d28f41e8544c5e893711e4c5f"],["/interface-isolation-principle/index.html","c4e9fea12a90afc12e2ce1dd8fdc3d8b"],["/interface-test/index.html","18a9d6c8d276ce40c772eab989909744"],["/intermediary-model/index.html","c09016aa8629ca2d3063c90c26df849a"],["/interpolation-search-algorithm/index.html","7e6d54302bf6d15f0e4fb06bccdcc645"],["/interpreter-mode/index.html","2456497b96c465e721635acbace504a9"],["/introduction-to-computer-network/index.html","52d99269e3fa34ff694df21a3e8c5f2b"],["/introduction-to-operating-system/index.html","a800f173deac8b87a1bab76cf70453c3"],["/inversion-of-control/index.html","6b6027207677f292eb9ab6823d757fa3"],["/io/index.html","96edcdbea710555134dc9f8970cc338f"],["/iterator-mode/index.html","c287dff2d7a4a489eae722c93eb0181d"],["/j2ee/index.html","7e66263e6ea3f3d2dd5860860e55d33b"],["/j2se/index.html","f0b20470b6e6f7e55c4bb320a7a061b6"],["/java.lang.String/index.html","4d0d0beab0ae8c8b6f9a38c9717f95bc"],["/jdbc/index.html","05b971da53e5be88cc6ff66e3dd4a87a"],["/jdk/index.html","9cf57614d5bdb73038349761b8b207da"],["/jmm-memory-model/index.html","169cee67da6454d08eb57723b133b4d1"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","77c5b2a7e85345afa39492dc5ac308cf"],["/jvm-method-inline/index.html","bfc1e60a8904b273194b7bfdc56a35f0"],["/jvm-tuning-practice/index.html","0a94000490d04a1845f2103cd0a4a752"],["/jvm/index.html","99019695996f8d287000c324deedfb83"],["/law-of-robida/index.html","cc45f3dda801de21dd3992fa7f3eb48b"],["/limit/index.html","ff588f58ad4ad87cc1279a1eba404bb2"],["/linear-search-algorithm/index.html","126542ec32b6d30050bd56fd202f3b16"],["/linked-forward-star/index.html","a0e07f48d822374cfb49a53d03d63c7a"],["/linked-list/index.html","5d41584d573ec68b76a41fd8236a05a7"],["/linux/index.html","152282309aca7da849b46020e33ba41e"],["/liskov-substitution-principle/index.html","9ea857d737cac162211bbf5c60d3d044"],["/lock/index.html","f2eadc7630af539a247736539c39e017"],["/lru-cache/index.html","48e39cf6277aad78068313409b06a927"],["/maogai/index.html","4588f1e4d36867357bd563d30772d6c0"],["/memo-mode/index.html","1f1248b5cb699b5e352a53722a18423b"],["/monotonicity-and-convexity-of-functions/index.html","d672caf800ae61d4fa616831a3a185b6"],["/multi-function/index.html","544d8001e794c34ff742aeabf1fc5edc"],["/multithreading/index.html","a6647d2680fbf991ded9a54c8d2ba528"],["/mvc/index.html","bf9ee1844c4dfd5354efcebd3f62340d"],["/mybatis-cache/index.html","981ca292c95f4b9ed13e6605a32e38bd"],["/mybatis/index.html","1c45816e8559c309c8ed6bfe04d61204"],["/mysql-index-wrong/index.html","cb48e944764629adba3d3fccf898b086"],["/mysql-struct/index.html","a0540bb9f48e5e2b2c4418ecaf04a819"],["/mysql/index.html","2b11617c540e41b2dea898989a63e62b"],["/nacos-service-registration-and-configuration-center/index.html","d976697c7f3c4bffcbcc435c92279c26"],["/notes/index.html","ba7159140fb6ba62515ea5d612f1e86b"],["/null/index.html","308c0d4fc76b24fcd98ffd073ac9ba87"],["/objectoriented/index.html","cd7107d7c65f96bf96066d9674a29c6b"],["/observer-mode/index.html","67e6bf8d0b4eaa7af4dfc91098219543"],["/off-heap/index.html","60efbfbca796e4a043b028dfcf06a2ca"],["/operating-system/index.html","cb3f3c6f36b6b82881f5da909a1ad05e"],["/page/10/index.html","ed5c12e5c5b10655a6be93b0de098dfe"],["/page/11/index.html","2497e328b6cd0c132f36e95a979cb90c"],["/page/12/index.html","0a5a952d0993476aa66ed778926de890"],["/page/13/index.html","4791d74409799e56bd4bba822c255bcf"],["/page/14/index.html","a2eb8a17c5aa274c3bff25d9a64a18a3"],["/page/15/index.html","d646442c45da8bb76ac02d11dcac394c"],["/page/16/index.html","53513553d65861bdfa23db8a4110cd94"],["/page/17/index.html","0db31c255c683b91bcb8fb778a4c2cdc"],["/page/18/index.html","984377efde4d2e58cde8dbc8b2ac87f3"],["/page/19/index.html","56041a2248fe7233526795fb9ead0250"],["/page/2/index.html","fcc7f6b63dd113d594cab5bfb51c06ac"],["/page/20/index.html","ddb04bc521563e4da8458d08bc3e1901"],["/page/21/index.html","84eb11573b569da95a095c4619a43a15"],["/page/22/index.html","476755adb38b8a7636419f369047a3ed"],["/page/23/index.html","000a27554dee7267b8889336c2285709"],["/page/24/index.html","ab8a5416f7095b9362856c1735d311fd"],["/page/3/index.html","37c03222a24af90938343f942e104173"],["/page/4/index.html","7543ddd18bad1d93938290cefd801c1a"],["/page/5/index.html","7e359e21fab9ecc2d3f4f8bc04f00d50"],["/page/6/index.html","5c262eedac40fe30c37364a6a65a3b15"],["/page/7/index.html","6b96c41fe0567174fc21b9343747c09b"],["/page/8/index.html","4b12041590842f43c231ef486eebd53d"],["/page/9/index.html","5ba673f14537feccef0ff4dc17b2f51e"],["/palindrome/index.html","e6453b238cc50eb82d4dbce859060e01"],["/partial-derivative/index.html","db6633db2f02d4c7339904e368cd8ba7"],["/pass-by-value/index.html","8f593560b8a6f9edc3a5f74f2835b84b"],["/pictrue-bed/index.html","72c1f54dd78312102aff0225c7fd9b32"],["/principle-of-opening-and-closing/index.html","a6203de83b9dfa91810f03ca54ad67d8"],["/principles-of-computer-organization/index.html","2133caa7905869fdcac41d4b17d386bb"],["/program-test/index.html","bdf8431742f9d6440ba27db89c6f86ae"],["/prototype/index.html","6b1eb12c688041922a4d863ef6a6a44a"],["/queue/index.html","6608bb25bda4d6cb6e241e9198ebed5f"],["/random-weight-distribution/index.html","756384abc272eb1381020db9255d97df"],["/realize-modular-programming-with-functions/index.html","89f6b3cce0ee25082c3533c85b9552cc"],["/redis/index.html","fa445fb04bb0a9e08c492fd001ca47c7"],["/reflection/index.html","ce36022671ff48826d9df95076176d7b"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","4b1c2585a0eb18a969ef1cac7753f855"],["/ribbon-load-balancing-service-call-degradation/index.html","927f56701dbb932f0736f7dceebb3a3c"],["/round-dp-algorithm/index.html","043370ec6bf42c36b7fc5f90eca6b67c"],["/seata-handles-distributed-transactions/index.html","246597040964c3ac16857d01c3629d8c"],["/select-structure-programming/index.html","1c04d482c027322129bf3ff4ae4334e8"],["/sentinel-realizes-fusing-and-current-limiting/index.html","176c4933daab8796e252e027798a7182"],["/sequential-programming/index.html","d5cd4f08efa0bb0f8927f97e56fab90f"],["/series/index.html","2958fc4e6bc1aa656e2f280f681257e3"],["/service-worker.js","4f216a08bb170a95b316ad5ada7a70f3"],["/single-point-login/index.html","8c1c7c9e3f8c004aab30ddb37e689f44"],["/single-responsibility-principle/index.html","c4a8786547dc5ce95cf57f38b48b1e12"],["/singleton-mode/index.html","ad2647825ee9ab2ede00856975992114"],["/slidingWindow/index.html","911165ff60dd966b1a6c401d79ed733d"],["/snowflake-distributed-id-algorithm/index.html","fe3424898110f01c722c0ded52f1a95b"],["/sparsearray/index.html","1a79b4721573819e84d017e6454f64c6"],["/spring-and-jwt/index.html","0c6a1154c418ec2156efe2c99b0ce50e"],["/spring-architecture/index.html","067877fed13812c2fef4f9fb55aa7ace"],["/spring-relate/index.html","996cc8fa14ef3c3c343edaa3ffe337ac"],["/spring-springmvc-mybatis-integration/index.html","0f321841d7cccdde69bd6dbde03cece1"],["/spring/index.html","a2c20988f867fd784543993a0a1e735b"],["/springcloud-alibaba/index.html","7c989fc28cf017947788f33a00a0b00c"],["/springcloud-bus-message/index.html","c4a06989e19aa6da36edb7ad2c30b092"],["/springcloud-config-distributed-configuration-center/index.html","0a214c3bd312dfeae6b30207f87c5f69"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","fcb0b1be17e2c8b12f9a7ad720487af3"],["/springcloud-stream-message-driver/index.html","60854ed848fb0c89ed334e06129b8caf"],["/springcloud/index.html","f89a5ff54f8f05edea396101a40a2043"],["/springmvc-environment-construction/index.html","da013b8599ef148eb454cd0f994206e0"],["/springmvc-work-stream/index.html","4db62be7691902cdfb6c1aa36b71dc41"],["/sql-injection-attacks/index.html","fd7bdfdd76333b687f329eb564ddc123"],["/stack-simulation-iteration/index.html","447874e936fffb9978bee78266f45f27"],["/stack/index.html","e6b8823841e7049d3509905e23012fc6"],["/state-mode/index.html","a615ed28367be1c021e1f7bceb6b832a"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","ab3641224d014d1a3fbef23e8cc5e095"],["/strategy-mode/index.html","b6d0865045f179d2aefb1ee1f99439e4"],["/sw-register.js","0c486f692a1ed41665235626d977cae3"],["/synthetic-reuse-principle/index.html","f38bb6f97c09d20aee921b5390e278e2"],["/tags/C/index.html","bd66c4433ef0acd522ec16daf702f27d"],["/tags/C/page/2/index.html","5d7a476385df0889c98a81917b53d892"],["/tags/Concurrency/index.html","b2f0f7e7fbbbdbf954672a206599cd5b"],["/tags/DesignPatterns/index.html","f63437081d3dbf0ead6826ae533f71a1"],["/tags/DesignPatterns/page/2/index.html","8ca9d633aa060b10b61a67056463db3b"],["/tags/DesignPatterns/page/3/index.html","742a139f49536980e723c43468617456"],["/tags/DistributedMicroservices/index.html","08becec9aa062350011652151dd1fb0d"],["/tags/DistributedMicroservices/page/2/index.html","4d26eb489f4fb5553e93b9189d17c12e"],["/tags/Interview/index.html","ca761abaa812f5997bce117567ab4573"],["/tags/Interview/page/2/index.html","e049ef0398522d9d1b395088ceaa45d9"],["/tags/JVM/index.html","53093e399b43f2af81c19b523a9f3429"],["/tags/Operating-Systems/index.html","0b75fda6f39cf3f0d23913042ac12f1b"],["/tags/about/index.html","0123db4f69dc980231052762161b6542"],["/tags/ad/index.html","17cb3b8de2bfc3dca8c0c09b2448a31d"],["/tags/algorithm/index.html","8ac2ac4bc92082d7e938e983ef942fd9"],["/tags/algorithm/page/2/index.html","cd65fc4f5aa559ad77ec09be2268e88c"],["/tags/algorithm/page/3/index.html","ebb86493c961b57ac2ac4fdf867e3d95"],["/tags/algorithm/page/4/index.html","5fd74ec86e8648b4d14d7f2a3582093a"],["/tags/bug/index.html","c7ab9c097574546fcb9617773fb778f6"],["/tags/computer/index.html","13589d55325828b5f5583478e68e5e3c"],["/tags/data-structure/index.html","c58b8be6646c5c9cf825533a3b2c097e"],["/tags/docker/index.html","6fae191d52b60c012136d8f749a389b0"],["/tags/famework/index.html","92fc89a76e6a61aaa147fe030bce9785"],["/tags/frame/index.html","810a658716b17c2ef7755eb5af645f6b"],["/tags/frame/page/2/index.html","a2cb20df6ec762ffba3dce43e31342a4"],["/tags/front/index.html","feacd036a533d2be4d6968f418e33ffb"],["/tags/github/index.html","71c4f745ffdade16b46ac16fc77322f2"],["/tags/index.html","9009fd0db2d9fbdafd6762423b789534"],["/tags/interview/index.html","6913452b93e1f1e19f83d17564523f0e"],["/tags/io/index.html","cf1fd32b86293b72331a1201e16e9ea3"],["/tags/java/index.html","0dc3b88ec82b63e745ec33b2b0c9ba6b"],["/tags/jdk/index.html","695bee7371b4349221bd650d2439fa33"],["/tags/jvm/index.html","858e3b4cfa270995398faeaef7d9c961"],["/tags/jvm/page/2/index.html","4b11701feaa5c0aa41829b43e40d4cc2"],["/tags/linux/index.html","bb3952ad44da357b6c21561f19cb30c0"],["/tags/maintain/index.html","2bf4316662a6caa4d578967eed1c71fe"],["/tags/maogai/index.html","e4464ac788462686fda27f509c9358d9"],["/tags/math/index.html","b7d503eea188d16dd2a3059bbe38fde4"],["/tags/math/page/2/index.html","818bdf73ca83c81f8ad7e50d37130cbc"],["/tags/middleware/index.html","ecbb8962e8a60b5b261cfeb8ffaf691f"],["/tags/mysql/index.html","5d9ca4babfebf0681ed0f37adb9824eb"],["/tags/network/index.html","e0fbc467f2942fabd5a614ed52929340"],["/tags/project/index.html","c0ea5d924f195b4b50d0b2592c563af6"],["/tags/project/page/2/index.html","96dea46ca86e687edad196fc4b0067c6"],["/tags/security/index.html","2689d3c8e907fd1014026de4bc105777"],["/tags/sql/index.html","1bfc0d40442518af1e59fac969369082"],["/tags/test/index.html","75d7add23b07ccc05f66403e78f212fe"],["/tags/think/index.html","30b93006f253bac95e57374da0cd5545"],["/tcpip/index.html","339acb1ef42fddd237851d96b45c0973"],["/template-method/index.html","6fe4a376c6d011daf3cbf35265f758f0"],["/test-case/index.html","d4667306b412bad1b394cdfb0e4b4306"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","ee8bc25f43103c1d2bb6eade59c2659e"],["/thread/index.html","5bb9e1461e30c27102c862bafa8cff30"],["/tj-horse-racing/index.html","171d606a3b38bcce71eb3ef7c8137d72"],["/topoSorting/index.html","cfca7562f4ccf675455190fc4c68aae4"],["/traffic-monetizationaccess-to-google-adsense/index.html","e9eb98136f8efb48a203cfa0bcd44364"],["/txCharity/index.html","4f8c3b78bacfa7a8fb61680cc4e8660b"],["/ubuntu-set-ip/index.html","f4d31a8bc992cb39ccb4641845be67f2"],["/undefined/index.html","550499fd4ae1c3bf2b838632133becbf"],["/use-arrays-to-process-batch-data/index.html","5f11743fe32a19e7c409a2996783195c"],["/use-of-springmvcmodelattribute/index.html","5c33d4cc3830d886f8f9e3d266230953"],["/users-create-data-types-themselves/index.html","b7ffa7282fec7dfd4135a73efb7900ee"],["/visitor-mode/index.html","dcad510d41502146b4a9de0bcc3f97a6"],["/what-is-milk-and-why-is-group-wise/index.html","9ecd006b39f842dee2a195c7a3b9fa6f"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","174e43871cd924cf37a54a180bd85aba"],["/xss-crosssite-scripting-attack/index.html","e224b71e002de6ed6c92fe3b6f9f25d0"]];
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
