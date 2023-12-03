/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","7ea84572e64231efa034f0c91db3d63c"],["/404.html","8afacdcd10cf36e15dff7f8a53bb077d"],["/404/index.html","a4e3276f1315d59b6b064a17aceba567"],["/7-sorting-algorithms/index.html","6441e66d850847af6716f10f3f041152"],["/AIO-blocking-model/index.html","c329760a77663fcf0886c821f3e987ee"],["/About-Snowflake-and-Consumption-Degradation/index.html","6408a8ffb142c600faba8a463dc5f255"],["/BIO-blocking-model/index.html","6cfcb0eb1a6ba02ef65e7ae1b2752aeb"],["/Bloom-Filter/index.html","88c18e0389a0bd45613939a2aa290e14"],["/Boyer–Moore-majority/index.html","c3e0b6763239534e3e4282e5a5fe0675"],["/C-algorithm/index.html","73309b446233af2409be9100b63df000"],["/C-programming/index.html","77744e30efa2753e479bb1f0c3813f34"],["/CAS-&-AQS/index.html","106bb54f7417e2c980208e072f82d658"],["/Comparator/index.html","998581d1ee79fad3642c56c39305610d"],["/Differential-array/index.html","95cf6be0cfc5140c541184b812be944d"],["/Download/index.html","3310084057a4883643c47e6fc30cc594"],["/Front-end-security/index.html","a09002aae8b22ae9d1010c1ab56b38b2"],["/Good-use-of-pointers/index.html","9d66c0fe113d7759191f64ee3ec96f3e"],["/Graph-degree/index.html","ee251489f8192c05c49ce1228dfb0a84"],["/Greedy-Algorithm/index.html","7e9592af92ed889d7e8e3434e92b0cd2"],["/Head-First-Map/index.html","7d1e5d491f88c6c3d74b9c48eb4784b9"],["/Head-First-Netty/index.html","aa9f5617c0b1c7a215a51660771e1775"],["/Head-First-Nginx/index.html","f901298274c5130935271ecc75fc52db"],["/Head-first-Spring/index.html","f431cc0102c13758796b5f838a3599ca"],["/IO-model/index.html","474003a3dfbb90da79df55b79f360a53"],["/IO/index.html","9cdb1183aa513df2398c01ec6dd9ca6f"],["/Implement-a-lock-based-on-ReentrantLock/index.html","5507daef962b9677c9e810287f8f1d3e"],["/Improve-Robustness-(1)/index.html","b0029be8a9cf7d00cf54c5ed5720b12e"],["/Improve-Robustness-(2)/index.html","1d276fa66320eea53337da91b2967b21"],["/Integer/index.html","1c7d4dc1e84820d74f08ba0f97f5ffe1"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","0802b0b725b2b2215e7d3bf097c4abb1"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","1259a758682a6fbc11624cd1ae402e43"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","eee2231206dad7749d5bb5afee5056ea"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","52eeea793922aa95dd58759e66c5a832"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","60c75c8d31ce40b630450795f21287cd"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","d7ab56369860476418051c804305955a"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","c2711a7dd436594cae345563b3e0b839"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","6ca36f180493caead8aa1c6bd50d17d3"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","665241ad0de70f0cd806a5091cccb3d6"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","6521d72c57f59f18729939c19a59c2c2"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","b25e43b63eddfd11e10a0d2002689f4d"],["/Java-network-programming/index.html","49feb1b19380d1f9450deb448fde06ac"],["/Large-number-operations/index.html","fdd8e818aa00a7d15088ca855f7d65e1"],["/MYSQL-MVCC-&-LOCK/index.html","01b20121ecb8ff006837dcf5d877c156"],["/MYSQL-uuid-and-page-splitting/index.html","85a71f66f3c41568c15c5e3a8bd8d491"],["/Minimum-Spanning-Tree/index.html","8b062b05b04a2e78bc05cda50b7826b5"],["/NIO-blocking-model/index.html","d2e3027b7524c6eb360f8f955b2700cc"],["/Nacos：Configure-MySQL-data-source/index.html","4e39b349534e2efe8fa80124c516092f"],["/Native-method/index.html","29240531d0ae6ba5140fe5e53c7c8e81"],["/PriorityQueue/index.html","b0932d055761fdd7114a2e240f6255e5"],["/Proxy/index.html","5a56c84eaf3f58932dcde5f04d7a8129"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","583ef6827763997ea775d05e8c3bd5bc"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","a8bdb8d6449871cabb5272aeac0d21b5"],["/Reservoir-Sampling·/index.html","09cf24fdfa3d9002a7a072447cd0083b"],["/SQL-injection-vulnerability/index.html","aa614b747029033fb08b330a1d0cf18c"],["/Sandbox-security-mechanism/index.html","44cc7eca42940eadf4467bcccc9df9d3"],["/Spring-Cyclic-Ependencies/index.html","66d99fceee82fc6e1b56a5c7a313a6ef"],["/SpringBoot-startup-process/index.html","a828a583b7a205396dbcbb45bae9a04a"],["/SpringSecurity/index.html","9ba0e2731a0df230716cb3d7f9825172"],["/Thread_Pool/index.html","cf44dd5a2ad2300ce4fe22e26314123a"],["/Transaction-isolation-level/index.html","7cb7548e9d1cbcecdab48d03f1f9f926"],["/Unitest-framework/index.html","b963c5fbfcd08d98bf70d4bf2600334f"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","3916700b181175ab757fae2126cfa57c"],["/about/index.html","66606fd568e5cc1fd3e055d81dcb29f4"],["/adapter-mode/index.html","1899e863da612c2ba23d94a64d339e93"],["/adjacency-matrix/index.html","b17b6835ad16d94ecf0eea222408245b"],["/adjacency-table/index.html","3b58a0e3a0103f586f377a28466b7178"],["/agency-model/index.html","841d00637f068060bce6b43d0e7a7933"],["/app-test/index.html","9afbdc5c340d69faee2f62335f3c1c27"],["/appearance-mode/index.html","626c18f9a9d05b49267cdb5e22fe0d77"],["/archives/2019/01/index.html","f83a64342e61fa6dad350a3f5e42960f"],["/archives/2019/07/index.html","2ea3f3c1c1a06c3352b2735697594fff"],["/archives/2019/10/index.html","99c03773ded8a981e3522591c905f907"],["/archives/2019/12/index.html","a28849088cca07ddaa1950671bf4ae5f"],["/archives/2019/index.html","ca1be8e33d0f0ae8c4db965b3b2786c2"],["/archives/2020/04/index.html","83a87532491c3a40b6ec2f15644b3f29"],["/archives/2020/05/index.html","b31149eec38664daacfa9345024d4ad5"],["/archives/2020/05/page/2/index.html","63748a603f7043a35430fade5c7f4ad3"],["/archives/2020/06/index.html","41ea11237c3498f7d88354d49dfecde1"],["/archives/2020/06/page/2/index.html","eb421d7c66203142fdffbde941d707e2"],["/archives/2020/06/page/3/index.html","21d38ecee3dc8776900503cc12a15f9b"],["/archives/2020/06/page/4/index.html","0227b870436fbfa0e2323f49026ab65c"],["/archives/2020/07/index.html","ddaa19ed05f646177c5b55ab5214f69e"],["/archives/2020/07/page/2/index.html","3f29273eaab6edc9b9d2189eea9558d5"],["/archives/2020/07/page/3/index.html","ab38d8f14fc4cdf0b80f74393f09a2d4"],["/archives/2020/08/index.html","d94da7494301a6fb768d008d52a1e4b5"],["/archives/2020/08/page/2/index.html","04f8a320a938680d7bc6e994a141a38e"],["/archives/2020/09/index.html","bc0838a4f502d3ae7b52d5f63d0ddcc7"],["/archives/2020/09/page/2/index.html","f9f292d169f0758e5bb8e29dfda043f9"],["/archives/2020/10/index.html","21fe36f2f7b936bd4bcb02c13d3d0faf"],["/archives/2020/10/page/2/index.html","73ac3ae19ab743ba562a415b685a0d0e"],["/archives/2020/11/index.html","469611c94ee510e65c76e52a72f785fa"],["/archives/2020/11/page/2/index.html","cbb3caaee7ff880160faa8cc7d74edae"],["/archives/2020/12/index.html","ca326db9ac4e41c614c1659c276cf71a"],["/archives/2020/12/page/2/index.html","08f666e800e2b88cd788d8d1214adfa5"],["/archives/2020/index.html","5b7ff2c1899d08c7cf034852fe9737a9"],["/archives/2020/page/10/index.html","038a7217f0894ebffa5868fb70fb7fe8"],["/archives/2020/page/11/index.html","96593f894a4410dc6392b8e074718b7b"],["/archives/2020/page/12/index.html","85c56d1ab8bc613ad293ca51902f27e3"],["/archives/2020/page/13/index.html","4368428e62ff12fda7fc94a8415fa462"],["/archives/2020/page/14/index.html","0405aa6f0d233fddc602219931540691"],["/archives/2020/page/15/index.html","b95da9c7525cac074b492c00ed8e3ea7"],["/archives/2020/page/16/index.html","8b5c9802031c3cd24bddc5e788000bf9"],["/archives/2020/page/2/index.html","ae7dd03d1afc97e7dbbe12f9e6a5725c"],["/archives/2020/page/3/index.html","3382fcfdea94e447b9598e02a7b9353b"],["/archives/2020/page/4/index.html","b23e8e9873e2cc11b069bce5ef71a548"],["/archives/2020/page/5/index.html","07aa4eb9ffb27b5b79d07d92b111e6a6"],["/archives/2020/page/6/index.html","d8211c14e7d27296c30197d0bd00ee46"],["/archives/2020/page/7/index.html","23bd0a37e339a70a98524400c174f8bf"],["/archives/2020/page/8/index.html","3e7b0c557240527d8f94a29b2b90f39d"],["/archives/2020/page/9/index.html","6fa029cee5f1c4d70cceaf1b59a7fe90"],["/archives/2021/01/index.html","73d047de7b0422e2dc764f628fc77ec0"],["/archives/2021/02/index.html","12f0f4ab7f3be292fdf6fe2b5811f665"],["/archives/2021/03/index.html","761b82fe07dee49cb7e6a2ef594b9de4"],["/archives/2021/04/index.html","32287bcb2aadea6ec32b330eeb400dad"],["/archives/2021/04/page/2/index.html","4646447940ec6a07ab8ec265a47457de"],["/archives/2021/05/index.html","a7f33c1ba33661c0d73978feb0f41ce8"],["/archives/2021/06/index.html","2cf598cf30e3e256c07aacc4d6239a96"],["/archives/2021/07/index.html","71e9ce898b35b6e45994b1ca98818c80"],["/archives/2021/08/index.html","3136beaf1c0c862924f629c0aa083be6"],["/archives/2021/09/index.html","f80e22916a3a790d4a64aae6f91f8d14"],["/archives/2021/10/index.html","9cf308366509225a1fb4d8a957d9ad75"],["/archives/2021/11/index.html","c7be3c373437c0a39311bc8f88de6d3a"],["/archives/2021/12/index.html","b72ec049f17b4ee8d3ff491a248551f4"],["/archives/2021/index.html","88401101a5248d805ec8c9ad10a4d977"],["/archives/2021/page/2/index.html","d870fcbc17554432a4ef12a185fc5d06"],["/archives/2021/page/3/index.html","a3aeda2456858d0003e102d6310507b9"],["/archives/2021/page/4/index.html","9422963940e5aa7b846513d80e0c1a53"],["/archives/2021/page/5/index.html","6dfcacdd618c76e4289ed78211d63c79"],["/archives/2021/page/6/index.html","c5d644421ec3319bd1a2ae866b1c88f7"],["/archives/2022/01/index.html","f15b44ec387bc40fd55fa3350a170ee4"],["/archives/2022/02/index.html","a15d61ad24393a4eaf6e104d2c97b073"],["/archives/2022/03/index.html","0552ce825ca1ae4182015e60f11eeffc"],["/archives/2022/04/index.html","1a9a454e4ecff38b410b86d6755fdff4"],["/archives/2022/05/index.html","69e2c6a5e5b9c2c6011a61cb82d31ccd"],["/archives/2022/08/index.html","9da59261feb902c851be39f0ef86b939"],["/archives/2022/10/index.html","79b48bec4ee53511708994087849a44c"],["/archives/2022/11/index.html","900a4ea49543545d17afefe8e77b9335"],["/archives/2022/index.html","b1368a79094e3f1de73d6a286bef494b"],["/archives/2022/page/2/index.html","b55ebee569fd3fae10414f7176f0bc18"],["/archives/2023/04/index.html","2fdbbb805cde36b88f33862b5f306325"],["/archives/2023/06/index.html","d9a8109e8e3fddaee85d839f3d598df8"],["/archives/2023/07/index.html","d6a4a0f84cb84177f32a6f819328b542"],["/archives/2023/09/index.html","0893344bd50f0a66daa0c8060b209300"],["/archives/2023/10/index.html","2d913e63d57fefb4b6db84ee6aed5114"],["/archives/2023/11/index.html","93762cb6a9f72827cedca4895e4ab781"],["/archives/2023/index.html","e932b2686e24dbe3b9f5a1e8cb8f04b5"],["/archives/2023/page/2/index.html","15f973ec20b9138ed05e9d79b17415a1"],["/archives/index.html","705faa88a1533987125b1615faf12ca2"],["/archives/page/10/index.html","03c69858ba516b12a2bd0b7f598bbfcd"],["/archives/page/11/index.html","eb7f68e532721d21d923bbf8b40e2fb4"],["/archives/page/12/index.html","172cd0536ff2330c2cf42a319bc8f3cf"],["/archives/page/13/index.html","78f53084196a2a7f8ed055eebaaff56b"],["/archives/page/14/index.html","3e547afc3eb96965470a4422e07ec3c6"],["/archives/page/15/index.html","4e36f05583d57ce98fc401d50759789c"],["/archives/page/16/index.html","ccc06b573111e012a5d698c0b20e1ea9"],["/archives/page/17/index.html","84a7139966cadf1b8710f5cc6cd6c35c"],["/archives/page/18/index.html","a358ad236c07ce91e854f51afa115ca4"],["/archives/page/19/index.html","1ecfa8794fcc2d9e81d9ccd8264edf80"],["/archives/page/2/index.html","644da08b20646965ca337dbb774408e8"],["/archives/page/20/index.html","8804a08b7b91e73fcbcad3d076af2d0f"],["/archives/page/21/index.html","5416089a3ca701ea7d78f26194227dea"],["/archives/page/22/index.html","0ebd20b1ed798771d55d80c6ad564d73"],["/archives/page/23/index.html","46e5960c4919882522d6ee54b42debb7"],["/archives/page/24/index.html","ee670e36ec670df8af63da6d1c91e33b"],["/archives/page/25/index.html","15fef7035113b461e188c9f98ebcade9"],["/archives/page/3/index.html","7cdfa7302f21f82c539bae4048098dd7"],["/archives/page/4/index.html","6c3ad5569b93a5354a467fa3125ce42c"],["/archives/page/5/index.html","d9466f71e12ad83f84b52f98a0b96078"],["/archives/page/6/index.html","a96bd819d864952663d5d423b6225fd3"],["/archives/page/7/index.html","0a6c26a20751bafc80cf691a95525db7"],["/archives/page/8/index.html","178e07fb9a6faa78b636f0d55db4b6d7"],["/archives/page/9/index.html","2c1d86fa462da02b45cf5a4566f74fb0"],["/array/index.html","791bcc321aa5edee676477c9d321edc0"],["/automated-test-katalon/index.html","05ab8338466835f5fab815b6eaf7e334"],["/automated-test-selenium/index.html","95334b04f2eda3de57fdc3af238e9bb7"],["/back-to-table-query/index.html","739f9d8d96e0051a62cc0def459c132e"],["/binary-search-algorithm/index.html","5081539ac5ed2da2531af0533adefc2c"],["/binary-sort-tree/index.html","f03b81b2422ad460fa2913e8b49ec51e"],["/bionioaio/index.html","aa3ac0e7cb3c1b5eedc31c9516b0403e"],["/bridge-mode/index.html","12ae36b86fdd7a87ebd39c8f5bbd1eb8"],["/builder/index.html","30cd01ea092a3cbfc14aa4cbb7b85413"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","18fa34bc73d3ddcc910225bc0670c606"],["/cache/index.html","a300a3b8d23a67c44268c9619c33ca58"],["/calculus-01-function/index.html","0b3bbd30e2ca92465dbf47553bc68d7b"],["/categories/C/index.html","7cb553eb84e7a5ede949b26ef07d94cf"],["/categories/SpringMVC/index.html","ae82bd8e92bccf9fd4fb3e447255be58"],["/categories/categories.html","e58ea699d15e8d5066e8897e194d3a95"],["/categories/index.html","b3e16d40be88a19a055b794eb12f9449"],["/categories/linux/index.html","128eeffde69a1ae1989cfb8e17acb002"],["/categories/分布式/index.html","34c09d11f24b4279f5faee361c57615b"],["/categories/分布式/page/2/index.html","5b4e2ba57905f1e5588634580369ceba"],["/categories/设计模式/index.html","419e75703d4152598e47b4cc0c90bf32"],["/categories/设计模式/page/2/index.html","e64dba36a2f848db20c85177a5cd1d63"],["/categories/高数/index.html","1b16c42e88e16729789cc293ce729432"],["/chain-of-responsibility-model/index.html","71a489237da26a7e9ad889b39fa045b2"],["/charity/index.html","02fdbbcda9175602d6c902dba5b68eed"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","e1c4154fdf9782bbab40f24cc06eac78"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","1d1b049a8c9ed422ac4585556c3b4633"],["/combination-mode/index.html","1ee3c7358e4109c1b61d8900782c78d8"],["/command-mode/index.html","d9597d64a1b0a2b8605984a99c01cd11"],["/common-commands-of-unix/index.html","d6a37acf30116c20b3fef3384a680062"],["/computer-network/index.html","fc561b41c676bbd66229236e8dd0fa48"],["/concurrency-principle/index.html","88f18ddd2796061784f804077047a1fa"],["/continuous/index.html","5364fe17580c5207de75b730b9d0b791"],["/contract/index.html","e7e80b83f28a86b8d7296eab835c7c0b"],["/create/index.html","b68082e6431fc88def299e9fa25d848e"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","c5b78b6acd9635951e48a2f8cee53ea3"],["/data-structures-and-algorithms/index.html","f72e941e6cf476d0479d1f6af0de2152"],["/deb/index.html","b999e2651b761eef3f8c086daa093271"],["/decorator-mode/index.html","465101c33b3f747816ecdff1f9d88ae7"],["/definite-integral/index.html","08709ba916fefe78848ed3c216a8d4ef"],["/dependence-reversal-principle/index.html","6748ae5044bc56e2ceb7247e8af7ffcc"],["/derivative/index.html","15870fcbdfe22c019d7c426e713e74aa"],["/design-patterns/index.html","df607f9378ba11f83ed01b5be5fd7e49"],["/dic-algorithm/index.html","628e1a4e3ee8140ea8e2fbb3410390b1"],["/differential-equation/index.html","8e26a7b8d81d6ca3201c558655861e29"],["/differential/index.html","be0c564db5b8c0af726427ae18bfc38d"],["/dimits-law/index.html","820a624de051486624b52873083a0312"],["/disjoint-set-union-find-technique-appreciation/img.png","3b180015f1019888938991178f4c1e06"],["/disjoint-set-union-find-technique-appreciation/img_1.png","e3611c71e7cb8a0cb4fa5e35c5f9bd36"],["/disjoint-set-union-find-technique-appreciation/img_2.png","d4bf7b42194d5378a43bd049b7b91da5"],["/disjoint-set-union-find-technique-appreciation/img_3.png","84469c7e0460e93e0590b56729ce340c"],["/disjoint-set-union-find-technique-appreciation/img_4.png","96308c2a7256c532ca38489ca81c1bac"],["/disjoint-set-union-find-technique-appreciation/index.html","c2f9521ff575873143062d900eb5a673"],["/distributed-lock/index.html","8de9eabf33bada4c14f0dba81bffacf7"],["/docker-virtualized-container/index.html","cb5353fefc76924cc28c4866aa9afcc1"],["/double-integral/index.html","9bd9ca2e92f1ef137a0fbbc0649f1f8e"],["/dp-array/index.html","a49cace58bde9227d8cadbbe0e0961f3"],["/dynamic-array/index.html","a378878a56fd9b37facd5da21b9d7277"],["/dynamic-programming/index.html","9f4483c7e3b9ec0932c75e5a05b8da7f"],["/edgeset-array/index.html","ba8ec0325877780ac80ad5ef2b6e4680"],["/encoding-algorithm/index.html","a17b9c3f9428f68c0730463d36d1ac48"],["/eureka-service-registration-and-discovery/index.html","f99806617674f2c32064dd4137f8a99d"],["/extreme-value-and-maximum-value/index.html","e19f15d572d7301b0af6ea2b365d1ff8"],["/factory-design-pattern/index.html","edf7b19517b79735c0919ccf9b16d946"],["/file-input-and-output/index.html","6f88f07815b8c9e09b180a98f76ecb03"],["/flyweight-model/index.html","dee9f7ae9c9f89f2e7816b86ff93c457"],["/friends/index.html","142b521ff3882dfa9e06b0c9378c2e7d"],["/function-graphing/index.html","25ccd0845462f23e09534b96ef3297fd"],["/gateway-service-current-limit/index.html","729fd7beb572d6e6ea0f6060407e7995"],["/gc/index.html","68cc2783a9e9dc38661d2a7c676224e2"],["/generalized-integral/index.html","2c46e0f9f60ce7f35455bcec178be88b"],["/google8102e2f35ce9e391.html","deb0dc5bf4a4eae7a95e08c954b4ba96"],["/gulp-compresses-static-resources/index.html","e7c4b5ea6f1e7f4287ae6697460d8c50"],["/hash-algorithm/index.html","9b2bf3b082ef034ea190e702b1e0c97a"],["/head-first-JVM(1)/index.html","15eec845288a3d563cb0cfc7a7bf846f"],["/head-first-JVM(2)/index.html","f72311bac33467cd3fe26c1d6a7d47d0"],["/head-first-JVM(3)/index.html","f13a9c45a881c6a8556d4b2ddbe2004b"],["/head-first-JVM(4)/index.html","13a47d68eb2b7c72ce89bb27eb65f4b3"],["/head-first-SpringSecurity/index.html","5200ee1d27d8bcf66d70820077f4f2a3"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","c5d23a12e796793e7fda6bd2b874caf6"],["/heap-sort/index.html","784de5e4070e233b5d058b1d369e9a25"],["/http/index.html","820e556e9ed867e33a62bb0cc279c35f"],["/huisu-algorithm/index.html","8f0196f1efec0c67062b3ec0b4d641a7"],["/indefinite-integral/index.html","85abdbbf365046b360d947d588e0e731"],["/index.html","3af45db194319512c878ec75aefae082"],["/infinitesimal-and-infinite/index.html","2973c11112724da3cd4bfb23dbb2c71b"],["/interface-isolation-principle/index.html","0e7326f93bbf009c9a79d5c5f446530c"],["/interface-test/index.html","3f7818b62830b8518fcfc90e5ac29266"],["/intermediary-model/index.html","a8ad62133638b1fa8e82557d5b592578"],["/interpolation-search-algorithm/index.html","139ade5122e41510bfefd6b415fce8a7"],["/interpreter-mode/index.html","14597a142f42fab48b883f1dea7ec89e"],["/introduction-to-computer-network/index.html","5e225ae62334dac08348f523e71b21e9"],["/introduction-to-operating-system/index.html","885254e1474ca270e178fc4c03d2985e"],["/inversion-of-control/index.html","3ac91203eb4287ad5d143a3d7a8c3158"],["/io/index.html","61fa89721efe652ce5b3fe72e74a8d15"],["/iterator-mode/index.html","db69aef689622bb60f53817582197c90"],["/j2ee/index.html","7b4d039fad52a490c736c7152f4ec7d6"],["/j2se/index.html","2d8dbb3547864a7bf1ed945a76fbd79b"],["/java.lang.String/index.html","3d902335d3a2e46f652c1114b61fbfb1"],["/jdbc/index.html","220f527d4294efa87466e4f358b7c587"],["/jdk/index.html","8cab42b3f6ae97da11c12491d0b35b5b"],["/jmm-memory-model/index.html","4076867890c4a2d18b1e1bbea6f87cb0"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","b2733af7ca59eaeb5d28d1f8380ac8f1"],["/jvm-method-inline/index.html","a3267833103eef96c71c0a171595e1c3"],["/jvm-tuning-practice/index.html","a0ea7d696c3f281bf3ad81d2d3b8fe8d"],["/jvm/index.html","a5781f95cc7f58a4bc65d6d6edfc1be8"],["/law-of-robida/index.html","2226c30c1960d1ba1b08e7bfd92e1395"],["/limit/index.html","12c1202bb968bd74cf17c27c8ebb7d2a"],["/linear-algebra/index.html","6c919c1dc7a4d11b72a68dee9cd6230f"],["/linear-search-algorithm/index.html","1bb42bab6666e09e765ad38f53262627"],["/linked-forward-star/index.html","ca0e6d3dfc7931e59c9e17865fdc761f"],["/linked-list/index.html","ec09b107d47dfe6ac9b8d1b9300439e3"],["/linux/index.html","ac7d7449012cadd81d57cddd3cd98c66"],["/liskov-substitution-principle/index.html","2b0782232f981e0dd38156198af8d6a6"],["/lock/index.html","393f02636cd34719a6df02e669268f2a"],["/lru-cache/index.html","9146ff471613b5db83687fc279a9c942"],["/memo-mode/index.html","f55f3fd6e3bd4bd5e51dbfc95895df28"],["/monotonicity-and-convexity-of-functions/index.html","38f416d59a0bac61c8239057ffd3fc68"],["/more/index.html","7534d413840ebb8209bd4341229344de"],["/multi-function/index.html","22c0a7e51e19df1562c5a412d2ec5905"],["/multithreading/index.html","f1ad9ecb684a3f4ac42d0d03765ce5dd"],["/mvc/index.html","5b91974689b4eb6f6c7a468bdb4f2315"],["/mybatis-cache/index.html","2fcdb5b437a07e5751dc9f6378b1e980"],["/mybatis/index.html","28d03311f388e6814e56cd528dffd8ba"],["/mysql-index-wrong/index.html","b76e5b557832d5fa9431a1f86a7f7b55"],["/mysql-struct/index.html","cfdf6a5f8d51d1c5683f3dddf3552f65"],["/mysql/index.html","b515cc28503fae6406cd94f20723cc2a"],["/nacos-service-registration-and-configuration-center/index.html","73a9676a6973b054defd22cceb814a7a"],["/notes/index.html","259825ea910c6c4f93f2980f6083c355"],["/null/index.html","556049d058937086ed2df0f8ac0be904"],["/objectoriented/index.html","01cafb89b1157b4e54026278881aabb1"],["/observer-mode/index.html","9b62cc4c08049edbdf56af3dd4eccdb2"],["/off-heap/index.html","3ffcf49ccbd6a4c42615fe492ac28972"],["/operating-system/index.html","56af5f00cca3673712142a4f2665d9f7"],["/page/10/index.html","0a69eaa92e6880428b23b7e7fb67213e"],["/page/11/index.html","7621c28d1fe582d3b76ed15f75da2788"],["/page/12/index.html","8209f59d03f8900a74507084e743f4cf"],["/page/13/index.html","a0248911c82c5ce865db8306de9e8f4a"],["/page/14/index.html","038aa7fdbf6b41234260f3a8f977f82f"],["/page/15/index.html","00ece57eca17a8980754177db44ffbd6"],["/page/16/index.html","5e2857620970cf9b641759e5ea411217"],["/page/17/index.html","b9b8acb291330736ebf71209cec014fc"],["/page/18/index.html","2b17caf21150be49759a0f943ee03ec2"],["/page/19/index.html","f251f82cb50a8ac87d0744466b1158e0"],["/page/2/index.html","c0a291362fc81dcb89da4aa00cee3ee7"],["/page/20/index.html","705833be7a722aa3efeaa9bfe9568d82"],["/page/21/index.html","e26f4980ed7f37973dbdd786e6f3363e"],["/page/22/index.html","2827d6e1b53c6cdf0442021de326578d"],["/page/23/index.html","37177e9fb483f76a069203d4abb79a73"],["/page/24/index.html","348e3e81b9d65a6da719688e3e8a680d"],["/page/25/index.html","751a210e3a55534e1f4cb3b4b0aeb822"],["/page/3/index.html","f5ecbe371123a506025347cef1fa6fc8"],["/page/4/index.html","a1dda003b4d17d73ae925f9185464129"],["/page/5/index.html","0a4c6f97f369cc90c784e3acac916b0d"],["/page/6/index.html","93cdfa465d617818d1e2a0b046298610"],["/page/7/index.html","1a29a2fa8a4a94849e09716ed9180f80"],["/page/8/index.html","2d92c85f061ebd9313d2850d910b167b"],["/page/9/index.html","ab37d8c572a3c91856132bfa2fc92296"],["/palindrome/index.html","820355e4557aee25d2a44938e757c58e"],["/partial-derivative/index.html","ad4791bb4db172a2f3a4854f840a679e"],["/pass-by-value/index.html","9e8a1fe9b88b40a5388a2495681c0a6b"],["/pictrue-bed/index.html","6345e17dc694e452f5287b3502fb1411"],["/principle-of-opening-and-closing/index.html","14c4a5a9330a4eee17a2dc3935fefa85"],["/principles-of-computer-organization/index.html","0a28953fae22b74727134ffadc2366ee"],["/program-test/index.html","ab387d8692f8595e35a8857f1cb77588"],["/prototype/index.html","d02683b9468eb198ff06e8289ad4386a"],["/queue/index.html","1ce864f4303d8ef8e50743926cc25192"],["/random-weight-distribution/index.html","e886082d30bed2e27712b8dc2923d314"],["/realize-modular-programming-with-functions/index.html","8de3fd9ea67903b4cad8475e483f3d49"],["/redis/index.html","4629a45137fd2608504d97671f6f2004"],["/reflection/index.html","a0c3488b59a482f68846efb6098c7535"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","8532daf11ccdaebc2ae758f3cfe01dea"],["/ribbon-load-balancing-service-call-degradation/index.html","700c2fe66550d0ae62cd77c0f8f74e14"],["/round-dp-algorithm/index.html","45fad78858111edfabebd65dd463d615"],["/seata-handles-distributed-transactions/index.html","45178dde0d9a80c1ed0dde22927f879b"],["/select-structure-programming/index.html","4a9560fdba63b0400005c801bf28bb63"],["/sentinel-realizes-fusing-and-current-limiting/index.html","f18e782649d2d7d6274e91f75696ed92"],["/sequential-programming/index.html","dfbacef02c352a3a5c5b80557c67c45f"],["/series/index.html","749cdcdc70f59f82bcd5de0324186880"],["/service-worker.js","36277bc2c9f01feceb1fda06f4a15ba2"],["/shortest-path-algorithm-Bellman–Ford/index.html","ee9daff3d45238edf6e48a6d5f9401d8"],["/shortest-path-algorithm-Dijkstra/index.html","7f72cb3f6d0ae11accab274fb381348b"],["/shortest-path-algorithm-Floyd/index.html","646c17e9e5d52360094e693d705421de"],["/single-point-login/index.html","cb0990d4a6a7360570c2d2e7ee3f9d0f"],["/single-responsibility-principle/index.html","a0513afa63cc0d4418a8e19f8ec7927f"],["/singleton-mode/index.html","1fc99d3f109a41615cc8fb8c818cfdc7"],["/slidingWindow/index.html","6fba416090a98881169ba4f36aa22422"],["/snowflake-distributed-id-algorithm/index.html","9cb26e6f5da87a304db5e3e158136d72"],["/sparsearray/index.html","9de322745363fe8a526d5e276a9b15a6"],["/spring-and-jwt/index.html","fa220665bf15a998fdcbf042f75b5b92"],["/spring-architecture/index.html","1320a831ef8de29834650be5f4ec0c48"],["/spring-relate/index.html","0d729f5ce515286edd73a46d345b775a"],["/spring-springmvc-mybatis-integration/index.html","defc9d95b12247cd88700b183e29a71f"],["/spring/index.html","9e5122bf7a0174f69f39f45859d355ac"],["/springcloud-alibaba/index.html","438aba9453e61fbbdfebee32cadcc531"],["/springcloud-bus-message/index.html","81ff69f674da18a3aad9c7064aedbf6b"],["/springcloud-config-distributed-configuration-center/index.html","2919ed3e181b840b6806d405e4799208"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","b0e39c629a013bfd6b04cf62beee050f"],["/springcloud-stream-message-driver/index.html","2deaee45d99698c09d7f34f56299ec0e"],["/springcloud/index.html","b40ce8e553d5bb2dc7ba3bac8f06df9c"],["/springmvc-environment-construction/index.html","754f02f4f4b565f341cd6b513523cf8f"],["/springmvc-work-stream/index.html","ef1f193a25f07b9c8a60b0386e4e9224"],["/sql-injection-attacks/index.html","2ade1f51bb74320978e71c90454dd097"],["/stack-simulation-iteration/index.html","a0d722052c248aacd08a71f838691bd2"],["/stack/index.html","18325026a2da3714f878c2e25bb42b3d"],["/state-mode/index.html","ad7187c69889b7f4a5de8b61c75a0bd9"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","178156b5e24eaef808b45a6efcc560c1"],["/strategy-mode/index.html","f5939646b479a26c3b198865973458d7"],["/sw-register.js","6f49ff94f434d49160b22aacf9ab01ca"],["/synthetic-reuse-principle/index.html","63adb7f5bd745ecf69a6584897d9ce44"],["/tags/C/index.html","627b67f16ddde2064fffb1ffccf2ce9d"],["/tags/C/page/2/index.html","edd118d911af8f816d5c36d1caa540c4"],["/tags/Concurrency/index.html","53589206b5699646852de558ee1158cd"],["/tags/DesignPatterns/index.html","a814c2d5cd38e5e646c939aa4d03739d"],["/tags/DesignPatterns/page/2/index.html","c9fac02e951153803b33557421527a88"],["/tags/DesignPatterns/page/3/index.html","0a2ca762d3426fe95d684d4204ebc762"],["/tags/DistributedMicroservices/index.html","69aaf58dc3da7e71ef8c5f9aa8748677"],["/tags/DistributedMicroservices/page/2/index.html","a3bc3c543ee1a15d5659b0f7d786c1fb"],["/tags/Interview/index.html","03acc2f07a23cc27b57089607c9b934d"],["/tags/Interview/page/2/index.html","3e9d47e18242ff6d0ba637f47cb1c4e0"],["/tags/JVM/index.html","af20104aa04cccbd05158971da6a1f7a"],["/tags/Operating-Systems/index.html","a0259125823bff603d84a661e64477c3"],["/tags/about/index.html","a00b0361f492995e262aa5cb5ff6481f"],["/tags/ad/index.html","1e696f31054d7ffd666b02a3798ce736"],["/tags/algorithm/index.html","d94113fa141e5cc36dace89a64e3d25a"],["/tags/algorithm/page/2/index.html","4d1c9ca9406e0e98aa93816cffde3eba"],["/tags/algorithm/page/3/index.html","2aacf26b93c3a758659703fa98f6d594"],["/tags/algorithm/page/4/index.html","ba9b15537fccd8a76ad8796172c9b79f"],["/tags/algorithm/page/5/index.html","fa0468f039f2b97b4cb5dd3e071fb155"],["/tags/bug/index.html","32650769d2bf7062f4286a2d3d929215"],["/tags/computer/index.html","21a07f3a497237c58cc71eaefeac81e6"],["/tags/data-structure/index.html","fa4f211e0c102031ceb65aad8c8da827"],["/tags/docker/index.html","2b89795608538ed44d9f2bc1980ccd37"],["/tags/frame/index.html","6dfe288b5b3e50d912d71bcd408c097e"],["/tags/frame/page/2/index.html","628d8fd42428f81ebb58149ac85e859b"],["/tags/framework/index.html","91b8a289ad0423f09037ac9254c46a9a"],["/tags/front/index.html","2564e6feb92a46da6ddfdc7423b9624d"],["/tags/github/index.html","dccead74d266f81b9d689ff44ad23bb3"],["/tags/index.html","94164a940079527361a6661df61f13e2"],["/tags/interview/index.html","73e5043c5bd7cc4651dd7e7c5cd509c7"],["/tags/io/index.html","1d98deb3f702cc4429b07c3b7c483141"],["/tags/java/index.html","46d43da1fdfeaf602b3ebc6ef48c6bef"],["/tags/jdk/index.html","05849596abf944c6cb5adcf809da4778"],["/tags/jvm/index.html","f8777ce3674a4f33a23ab0a1d2f668c7"],["/tags/jvm/page/2/index.html","0e5c4f7da7b927b7f42bf3f28221c170"],["/tags/linux/index.html","3e8090e94b1f6970f7658c4b3daaf092"],["/tags/maintain/index.html","5e4f25ab63ce7af0b281365ad0f9b7ac"],["/tags/math/index.html","c9ddd2978d1bac7d2e26a32b2a0e76d8"],["/tags/math/page/2/index.html","83f20b538b7f0a52d9c7824c38639fdb"],["/tags/middleware/index.html","b08c720a48edb8348544a0ccd99ef4dd"],["/tags/network/index.html","f533674abf070384f90c9a38e2a15759"],["/tags/network/page/2/index.html","e69a2a9e5913e21c1367e2adedbefe6e"],["/tags/project/index.html","5b3cc6d2b6a2eac2610dcc1deef5021e"],["/tags/project/page/2/index.html","40fe22041e797104f3f7f6419bebeaec"],["/tags/security/index.html","f690eaebbcc0127990578cfa174740d7"],["/tags/sql/index.html","c0be1ffa87972dee5bfb65ca28b30904"],["/tags/test/index.html","034beebd0dcd0a0d22bd54a4165bee02"],["/tags/think/index.html","ebf1456b45303895c58a4f2bd51687a3"],["/tailscale-ssh-remote-connection/index.html","8a2d9a1c122c16361ce4c899924665cf"],["/tcpip/index.html","ef28f680dbd46ac6dac52e8d3047ba17"],["/template-method/index.html","89464e67602fd1db0de7f3321898e321"],["/test-case/index.html","5d8b1346d28ac29b83e3be596ab738b3"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","45b80bd169d3d1244e60dfd600ba6e90"],["/thread/index.html","4f4a7bec5aafbe57c6320fd99a370946"],["/tj-horse-racing/index.html","33a44e8299432f21470226dcb2efd041"],["/topoSorting/index.html","7b546521d21dc6e45420df75b8743a99"],["/traffic-monetizationaccess-to-google-adsense/index.html","7bcf1f2d41f1be1e66aba7de1806b489"],["/txCharity/index.html","06330c07f99202fadf4288080157d999"],["/ubuntu-set-ip/index.html","ec62ec8ad6fac93cc4123d2606cabb0b"],["/undefined/index.html","9c4f1791848b0bb65da6453aec254a60"],["/use-arrays-to-process-batch-data/index.html","6cf652efc8347ced9a4ea8581f7b0f70"],["/use-of-springmvcmodelattribute/index.html","b8597a8ded36f87dc906e0d24c98fb07"],["/users-create-data-types-themselves/index.html","11470abc966d2391cc9487379116578b"],["/visitor-mode/index.html","62dcfa56f75a97644084e571898bd193"],["/what-is-milk-and-why-is-group-wise/index.html","314cff388d27c042afefce0d303d14d3"],["/wiki/index.html","dd81d78fa30fea8af78c4e8b07b059c8"],["/wiki/tags/知识库/index.html","ca293dd0e1dc5c2cd1e4221113752dcc"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","6b32aae6a49645c19feeea5d3c6bee50"],["/xss-crosssite-scripting-attack/index.html","5d488aa175340d23eb9616b3eebde49e"]];
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
