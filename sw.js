/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","346c84f811b47a47d7103fae9e819743"],["/404.html","0357ecffc70d79f5e236dcab53e51416"],["/404/index.html","21daeec7acf4aeb29a8841c5abcf054a"],["/7-sorting-algorithms/index.html","17e6d18229d65590e1194bcda9a9d909"],["/AIO-blocking-model/index.html","6b4360b21c0553eda89ade6194165931"],["/About-Snowflake-and-Consumption-Degradation/index.html","f489de1bef9c7beae4da3d7be8db57aa"],["/BIO-blocking-model/index.html","5895b21633821a9d87ff71c3fdda8e5c"],["/Bloom-Filter/index.html","7d5a7ce9e71056b9c25fc31b18b7147c"],["/Boyer–Moore-majority/index.html","6f09bcff340e24ffe8e72c55a556b607"],["/C-algorithm/index.html","a34d04b30d2e499cea733e202ed89e82"],["/C-programming/index.html","e1af20398d2bb56e066272d0110c2e78"],["/CAS-&-AQS/index.html","73feaccae27d1e8c36feeeea3cb38184"],["/Comparator/index.html","d158d81ff3bf04b569d7fe0699db409a"],["/Differential-array/index.html","24c2f542ac1935983964957f96937ca7"],["/Download/index.html","335dc1bb874980b04809e201e70f4707"],["/Front-end-security/index.html","e5130d0c03968788b44689bdb738329c"],["/Good-use-of-pointers/index.html","b37a6bd7f27fe83600dad2814f536509"],["/Graph-degree/index.html","b54d0ea94e1074f33da17f1ad5be4ffc"],["/Greedy-Algorithm/index.html","4a0005658feebecfe0469ad4fbbc590a"],["/Head-First-Map/index.html","a8ebb487aff66f29819671a5f90b86f3"],["/Head-First-Netty/index.html","0f815716045b1ecd0af410015dc21ff4"],["/Head-First-Nginx/index.html","a21a6dd49d0b5efca6f34d156f88c75c"],["/Head-first-Spring/index.html","701fc7a47f6e216cdfd6ca3665d7dcf5"],["/IO-model/index.html","192ebb9d974669e30b13dc3157453bfc"],["/IO/index.html","b2e738cae830df5599e7a11022807672"],["/Implement-a-lock-based-on-ReentrantLock/index.html","4beda2dead4e96d528c5364672c3715b"],["/Improve-Robustness-(1)/index.html","a90c2e7650d9c7a85a116fbd2645b4f4"],["/Improve-Robustness-(2)/index.html","b30c600882763275da9d0a378e9792ab"],["/Integer/index.html","f800d6b37ec707d1d5443694fd7b616c"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","b7d4c01f626e92bbad908c86c3ace81e"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","92f642407859b669e240b96682b0dc53"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","3b064a8eb84cbe0f0e71b188d122b227"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","db19c12a3e87ba79b24a5a0bf5c13845"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","1a90a70eabd5e2cd46c7c708d7e14096"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","9b2dc2c6c0c1ca2c7a7fec0942db711a"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","7e763355f4bfdacc91d7833e2276ed8c"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","6ca7e6acef35fbe07670ec0f32e045de"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","0c02d58f8024881bb36c432abaae1815"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","be07879e4980e07d5b6a1c615fd4e530"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","e6aa9f289a91d9ce2fb5ef4b61afb050"],["/Java-network-programming/index.html","21eda85abb0909d22450194e9c2d8a7f"],["/Large-number-operations/index.html","225019e58c6e0443dc72bff0f7193800"],["/MYSQL-MVCC-&-LOCK/index.html","cfef153e3f6c24a16b95f9b46643fbc0"],["/MYSQL-uuid-and-page-splitting/index.html","48c4c3765690734fbb7ad69d27e50496"],["/Minimum-Spanning-Tree/index.html","ffce210547712c7bc7f2c35a47bb96f3"],["/NIO-blocking-model/index.html","82176553cb24e89b895eb4c9303932a4"],["/Nacos：Configure-MySQL-data-source/index.html","531ccf14759439fe7ee937edb6dd593a"],["/Native-method/index.html","39d64cbbc0791b0f9795aa4906a50f89"],["/PriorityQueue/index.html","4b20093efe5f62417e8b45c3b2701534"],["/Proxy/index.html","55289f3884817964f238650fa1b0b1f7"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","1b59b49e654989ff07b7cd4d77c201d1"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","cd43d4ca4ea82aae0992253da90c4104"],["/Reservoir-Sampling·/index.html","4472ffa21dbff61d31c2c5384f09318d"],["/SQL-injection-vulnerability/index.html","c17fc2dfc2c80688ef9e0754b54d2f33"],["/Sandbox-security-mechanism/index.html","c197429a04d80050ff0cd87f740a860f"],["/Spring-Cyclic-Ependencies/index.html","8b0f38d3241490f9f3ccba2e674f2f2d"],["/SpringBoot-startup-process/index.html","e08abc03a568afc1704f0cf5581ab834"],["/SpringSecurity/index.html","62e507a757cd6d166cee6aea3db86c7c"],["/Thread_Pool/index.html","2a4cd712a7161a7143f4d70367b9df64"],["/Transaction-isolation-level/index.html","fc8d0c2d69db8227740dd4e994ab5af7"],["/Unitest-framework/index.html","4251dbee38bbc1285fd20a1f8692fd15"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","8c30ba2a2f4e40e0ae8527851cecd0f8"],["/about/index.html","ae1e100d409b3a1fe0110fd4828a26c7"],["/adapter-mode/index.html","82efda8d04d34596910740410d745f0a"],["/adjacency-matrix/index.html","ead478574e0e84314f279e5fb5a47958"],["/adjacency-table/index.html","7d70f02cf66b039b735b0b7af66c958c"],["/agency-model/index.html","f3052b67c2220618f5ad7cb43efd6f23"],["/app-test/index.html","7e57199087d344f5240863f6ba2a534d"],["/appearance-mode/index.html","ae9e01ae1b15a85b04fe4d29fce30687"],["/archives/2019/01/index.html","c45806572d57f1a726dc23cbe37c5001"],["/archives/2019/07/index.html","d34a64057b47996ed116f8a6b6007cc6"],["/archives/2019/10/index.html","5fb420b13d38b00d0edbbb3ab6e57155"],["/archives/2019/12/index.html","66e293ed6efbfe1362fc62fe80a4e250"],["/archives/2019/index.html","0e8be4dd6f1c8d9725c288e36ea14a17"],["/archives/2020/04/index.html","9852761ba197fc94306e85f4d702c44a"],["/archives/2020/05/index.html","4b563a1237e500ad1cad3553b29e55f5"],["/archives/2020/05/page/2/index.html","a3ce9af9b44dbafdafdc6c5cfa7f7d1f"],["/archives/2020/06/index.html","14838437ecf612a73ae70450cfa6fa6d"],["/archives/2020/06/page/2/index.html","7efda83a3a974f69b0b064c95a2a4466"],["/archives/2020/06/page/3/index.html","a94618b4f89d57bb5ad4778cf0fc66d0"],["/archives/2020/06/page/4/index.html","22aa6ee9c4fc13007d9cd1fedd87ac9d"],["/archives/2020/07/index.html","c8651fce9b283e85914b7fb2788b4483"],["/archives/2020/07/page/2/index.html","d75b9f1980616e60c3ff88e0d738bbdf"],["/archives/2020/07/page/3/index.html","c455167643d5dc6b46b33f42d499e50e"],["/archives/2020/08/index.html","48bd9d5fa66d68ffb03cb6d37dd2f57e"],["/archives/2020/08/page/2/index.html","4aad6e70623b35a94a0e9764f29608c8"],["/archives/2020/09/index.html","f05f6c803b0bcae20dd300d040200b10"],["/archives/2020/09/page/2/index.html","b652cc563f54323fc8afe8a81fd19e69"],["/archives/2020/10/index.html","4a90e0f67d7fad230644e69bd5489cad"],["/archives/2020/10/page/2/index.html","201962ef18d4fb57f05a6c41ecf995db"],["/archives/2020/11/index.html","b547f576483f6aff487f57dbb0575aa9"],["/archives/2020/11/page/2/index.html","aa7c181094cf513b8567e470141fe213"],["/archives/2020/12/index.html","bc4495bdfd02cd62ebdc47bb91f46aa0"],["/archives/2020/12/page/2/index.html","426c475c7599568104eb250052c9ea01"],["/archives/2020/index.html","69ae2ccf66d499d96d0ad56fb2168737"],["/archives/2020/page/10/index.html","b4d4cf57c38ec396dfa4a12563c57666"],["/archives/2020/page/11/index.html","e63fd055abbc6ece002ce47c3617096a"],["/archives/2020/page/12/index.html","8122e82ac7c2be60ea15954fdcff33fa"],["/archives/2020/page/13/index.html","98def0ae4345252bd9065d092deb010c"],["/archives/2020/page/14/index.html","c9d5ed3847bbcfe44aeb670397a96876"],["/archives/2020/page/15/index.html","50e80ef37b0b75094874549998ee57a3"],["/archives/2020/page/16/index.html","bbb76688ec03ebdfef18c3208c0796c3"],["/archives/2020/page/2/index.html","ab9e71f64c5948ed12aeda7c9c55886e"],["/archives/2020/page/3/index.html","f8d7a6bf0dfb6e5be594400323989e89"],["/archives/2020/page/4/index.html","4310693defd694e54bf9d0f0ce049ee5"],["/archives/2020/page/5/index.html","eaecff7ab7e52bc68677fdcfb56c90dc"],["/archives/2020/page/6/index.html","c684c204af071d94ddfa8ae1fbb276a0"],["/archives/2020/page/7/index.html","323e36cef7fc8250197225eb51fad03d"],["/archives/2020/page/8/index.html","2da5d7776e7a06649c51e5d5394e1d54"],["/archives/2020/page/9/index.html","b529ff3352db22b632e99de8bbe74e13"],["/archives/2021/01/index.html","f6069abc2ae46455085aecec3822053e"],["/archives/2021/02/index.html","6482583a2fb9d5d6d4100e97ea1e3cc9"],["/archives/2021/03/index.html","639755f2ae496a7d86b05822c93c5d7e"],["/archives/2021/04/index.html","3b89427baa9afb3479ba94f61671de93"],["/archives/2021/04/page/2/index.html","d47e7f30bc7ee8b131d83955fa5ac66f"],["/archives/2021/05/index.html","332d55fa4a1813178a524c2f367ade13"],["/archives/2021/06/index.html","4a5a35a88102bdc281c2f2172d0de01e"],["/archives/2021/07/index.html","f09f65cb9e82b23695306f0b2c4085cc"],["/archives/2021/08/index.html","be1cdc7c73073bb420366e7f608e10ba"],["/archives/2021/09/index.html","d12079b21bf8aede12370318cfcf270d"],["/archives/2021/10/index.html","7554eaa09376ed79f9337505a44b1b88"],["/archives/2021/11/index.html","346c8fa27e7ccf18031e1493d4bfb70e"],["/archives/2021/12/index.html","158f8a6d6a6c12f4c449bff89892c875"],["/archives/2021/index.html","a68960f3c9f1a834f76e6804bc95a672"],["/archives/2021/page/2/index.html","bc38ed75ef1230b4ffdcdb45cc13c495"],["/archives/2021/page/3/index.html","37390788d12497b92023d82c1dd54c24"],["/archives/2021/page/4/index.html","43d7d0c967bd5f57f05b1850cfdf634a"],["/archives/2021/page/5/index.html","caa37bbd80a9d7d9c64a3957ac0decfb"],["/archives/2021/page/6/index.html","36203445fc046929938be5b06d1b5e20"],["/archives/2022/01/index.html","78f3c3c7a956780c0129425f960c90c4"],["/archives/2022/02/index.html","afb343082287138d5369d2667f3c2dab"],["/archives/2022/03/index.html","dcae60367d82a031d7374846e3b076bf"],["/archives/2022/04/index.html","63e739c01a76a2ddbb4b1bd1ddbc127a"],["/archives/2022/05/index.html","8bac296f11a3a3545acbf77071984459"],["/archives/2022/08/index.html","5b918977508fa8270abc1a8babab937f"],["/archives/2022/10/index.html","b6ea0397e78347aaeb0a3ea4e938af03"],["/archives/2022/11/index.html","b03c541b56e981ed0d894397758888b8"],["/archives/2022/index.html","434bff5a5c78a284807cb4978b93085d"],["/archives/2022/page/2/index.html","10b6b710c4e10a4e29ce7c213d0d8db5"],["/archives/2023/04/index.html","10471c945d75a791bef81541b837d5fa"],["/archives/2023/06/index.html","2a16adb7f5ea082b27fef1882009cf84"],["/archives/2023/index.html","a7ad6d9080b42d14a885119bde4ca62c"],["/archives/index.html","59ea1b0ff35a6bdc9ff9d19ea259baff"],["/archives/page/10/index.html","e4f62625250e0d0f491f9118f0ce9f3c"],["/archives/page/11/index.html","38df9e6e24b9fae37d9ed74c3320170f"],["/archives/page/12/index.html","075eb0ddc8a00cbb632801d03eee7db4"],["/archives/page/13/index.html","c95d717d5f07563a2aa16f9ea60cd050"],["/archives/page/14/index.html","e8fcfaeb373d0eecc2ab808282971de4"],["/archives/page/15/index.html","2f2f8f7eb1c3f3cad510fcffd620c0b0"],["/archives/page/16/index.html","c991baa2eaf7b5115a6e5916e6636e99"],["/archives/page/17/index.html","43be2cf884486c45dbef6f34fad2c3f3"],["/archives/page/18/index.html","f99e5f71152d649758d6f69c0275fee7"],["/archives/page/19/index.html","565eeebab302939c967f809284d1697c"],["/archives/page/2/index.html","a3c14e1eda9093ffe3c1bd6c7dc96157"],["/archives/page/20/index.html","171c845bf64b70cabc15ccc9a5d56da8"],["/archives/page/21/index.html","4e524c1a03104ccc7508625343034c3c"],["/archives/page/22/index.html","7bb6222249d7581b3f5aecd393237f1e"],["/archives/page/23/index.html","cb14c4c56493043694ca1787a55858bf"],["/archives/page/24/index.html","ee2f77bd4eae9fcbbe004dce602c05dc"],["/archives/page/3/index.html","eddb4f0a549fb7b0ba9c8d5c605649ba"],["/archives/page/4/index.html","da2175283eb59e52b4033fb471a1b035"],["/archives/page/5/index.html","d3ac1c0424bdc372b83b9cc3278071b5"],["/archives/page/6/index.html","f290fb155d92bcae360789d3f15a2f3f"],["/archives/page/7/index.html","793c0b4fe345b79cb22105b56e68aad4"],["/archives/page/8/index.html","5ff3b1050096c2ec4cf467668d526d21"],["/archives/page/9/index.html","15cf87605c926eb0c11bb244ecd9235f"],["/array/index.html","cce41fc11d97e6ce44534f0a2ad3f488"],["/automated-test-katalon/index.html","6b7297a87f98e5515f8a2d75a8418757"],["/automated-test-selenium/index.html","34d619c55829545a8007ff34129a1f13"],["/back-to-table-query/index.html","9f834ea3c03d6bce52abf18df3b21fb6"],["/binary-search-algorithm/index.html","1201d23b3af5a32d45bc4f1db4f64dbc"],["/binary-sort-tree/index.html","bd805604592d0b81f8b9123a000c4ab6"],["/bionioaio/index.html","24f9fde8aa0418b0722b5c4c3cb00ce3"],["/bridge-mode/index.html","9f227db99b5ec63de466bda15bc0d12e"],["/builder/index.html","1ab542c6be1278fa67f13ca2ffc328ce"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","f196e2df87d3ce578e0cdf0027055b10"],["/cache/index.html","a7e7d6dd6f08896c0788989310d42c48"],["/categories/C/index.html","e6b8ff5fa89cb61247953ecccfbd342c"],["/categories/SpringMVC/index.html","e21090327803a40c6156ac0a68927e45"],["/categories/categories.html","c5ffebb617df51e554d626ff3ae7c821"],["/categories/index.html","1872ed76cce982c41525701123b0d5c0"],["/categories/linux/index.html","819d7ce88f64874f877f119010029239"],["/categories/分布式/index.html","528b2e4f7c16b387163ab6e812747c1f"],["/categories/分布式/page/2/index.html","d01d45ef89b6af6bcaf8ab96af1af5bf"],["/categories/设计模式/index.html","13474d11bcdec008cb241300e49b7780"],["/categories/设计模式/page/2/index.html","0b95c8714087aabfc268904f586d24b0"],["/categories/高数/index.html","1141100680ad0d6150d7c8b39b616aa3"],["/chain-of-responsibility-model/index.html","8b086c9c37db42e1a3678ff8e45c3533"],["/charity/index.html","1db7ea01cd819dc634e9828c95d0028c"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","65ae42d556389203f11ad2f06261fc99"],["/combination-mode/index.html","f0e0962ed6dd5a99a8b8ca807a45a651"],["/command-mode/index.html","85732df16dc316fe877428bf919be51c"],["/common-commands-of-unix/index.html","eddd05c7f12ced936d2dd6b7edd8f153"],["/computer-network/index.html","80725115f9bfc105ab1ff6aae72d9b0a"],["/concurrency-principle/index.html","716fa8b6c4e1f6eaf74ea04424f559c1"],["/continuous/index.html","8d52ceefceed23bcbc659d4ae3198eb2"],["/contract/index.html","777b5f978ba0fce12dfbac364166d633"],["/create/index.html","81d8d91fe1fd2b91b9e93604511f624b"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","84091b4c8546e7cab65e60d01cebff6c"],["/data-structures-and-algorithms/index.html","a72893974fce89f1a4a80612e5172f2e"],["/deb/index.html","f00f2bf0e4ee985c9477191657f8499b"],["/decorator-mode/index.html","b96e5e86ed71188cdedceab8bb48ffa4"],["/definite-integral/index.html","64e3801dccdaa39fcca432a484fe49d9"],["/dependence-reversal-principle/index.html","29f00a723b39c0b51761ffaeddd8aff2"],["/derivative/index.html","25be3f8d73c1b4b13fcdc4bae0323362"],["/design-patterns/index.html","95ebe9d856733da6101d1e228b3af725"],["/dic-algorithm/index.html","aab254c3bc638d7936b8a58e728e4f3d"],["/differential-equation/index.html","39eed581fb53987aee5ea75c65da6bfc"],["/differential/index.html","cad61e9d8848e1b96b44657a27ba887c"],["/dimits-law/index.html","f09f681cd0799232e16c3893fff3a5fd"],["/distributed-lock/index.html","e35113168f0447449f901c13cf7b1d47"],["/docker-virtualized-container/index.html","4162e77be43abc196753fd55e281d04e"],["/double-integral/index.html","a17976121ef0ad58cdbd62c9802aef5b"],["/dp-array/index.html","d5bba96bc51f947bbe1062e6eb5e1682"],["/dynamic-array/index.html","18d070e5080861fa6168a1b1c30b0ca8"],["/dynamic-programming/index.html","7ba015d52a117b14eadfcc0200e7001e"],["/edgeset-array/index.html","b4da27108f9a69709bccdc7ef0736c8b"],["/encoding-algorithm/index.html","c0910cfed6cd124b014a238191d94145"],["/eureka-service-registration-and-discovery/index.html","c02393cf900a92910e2f45e00ebbd31e"],["/extreme-value-and-maximum-value/index.html","6f815e4734d2efb5c675ab531484bffc"],["/factory-design-pattern/index.html","b4fa6f5a08a01c8611fd353fc24a62bc"],["/file-input-and-output/index.html","622eb642f9304eb22d0b744c213315dd"],["/flyweight-model/index.html","7b6a0a141c9bdd3d6089d1634997dcf5"],["/friends/index.html","77b49914116f6688898677750f43fa6d"],["/function-graphing/index.html","18826ed210844be268f466046fbad805"],["/gateway-service-current-limit/index.html","a9813df28b17fdc93a184586357cfdfe"],["/gc/index.html","4d2f93d838c7c6e826ddc6c263d150ec"],["/generalized-integral/index.html","c13bfde18ca78650c920b50b2c87cce9"],["/google8102e2f35ce9e391.html","a61cb2521d8f0f6a76349a375f612dbe"],["/gulp-compresses-static-resources/index.html","1449e96b4c8adaa2968183d861837e38"],["/hash-algorithm/index.html","f84e9122d41e35c224de0734568764c2"],["/head-first-JVM(1)/index.html","5987dbb90813d7c37e1b0151cee47ef9"],["/head-first-JVM(2)/index.html","17dd210f8ee34a9ff7d56baa75723506"],["/head-first-JVM(3)/index.html","541e8e649e9988d53e3d7b4cfea7229b"],["/head-first-JVM(4)/index.html","4ac37b2ee0e55a93ec4737fb8384b9ac"],["/head-first-SpringSecurity/index.html","8414896fa23b7db864de6be974317b12"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","560e99432e95b490c1d3c2c3ac57fdc3"],["/heap-sort/index.html","1384bbd347d1d50100edb1a884c8ced3"],["/http/index.html","b5a2ec561ec96675c2effd8d572c9240"],["/huisu-algorithm/index.html","36bb2d63f0c8a0218b69f170959c4d71"],["/indefinite-integral/index.html","021ba60bb1a9c26a47f6749ddfe8e3f9"],["/index.html","17614b0f872d5bbd041e01d0d845a535"],["/infinitesimal-and-infinite/index.html","6cdc9198d5d246d86e4efe931af58d52"],["/interface-isolation-principle/index.html","674d89b68268b663dad87d874a5636ef"],["/interface-test/index.html","15fd2446c0d85513e4a7f90eb00cf240"],["/intermediary-model/index.html","cd9b2666ad2a8bb4e87c7877eddd7793"],["/interpolation-search-algorithm/index.html","effd1a6b733c98c7176ab0bb433a6e83"],["/interpreter-mode/index.html","bbdefadc11da0c108cff8705010f4511"],["/introduction-to-computer-network/index.html","e2952ffac56d74207f351cb811288b2a"],["/introduction-to-operating-system/index.html","1f294d95be087c627f8dcfdd2d3d701f"],["/inversion-of-control/index.html","aa2397ff3a7f5a9fd4ec6ecb81ebed29"],["/io/index.html","8afc073ec101f314180f649161f756c8"],["/iterator-mode/index.html","a81d19f26f598a818ecb01719722caf8"],["/j2ee/index.html","c408d11ec79ccd46b13c854870d811e0"],["/j2se/index.html","9d85a39d781f9235a947d407e51e05c0"],["/java.lang.String/index.html","0577e0d357552f805ffb240ec3a25080"],["/jdbc/index.html","4b679e34a4655dfd4772a7468c437edd"],["/jdk/index.html","9a4980054c3b77b6437ba3ebbc7c59cd"],["/jmm-memory-model/index.html","45f139f17ee8c8ef340f1d17b5b9096a"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","8e22ee461bc06ca956029eea276e7f8d"],["/jvm-method-inline/index.html","12c79ee931d60a621f4ed406615e5f56"],["/jvm-tuning-practice/index.html","5ac774b40109d848aee5f18e0d83d169"],["/jvm/index.html","424eb9f85dcadec1c7ce22a4ec927596"],["/law-of-robida/index.html","19cea861a673a3864b09a652e0b6bef2"],["/limit/index.html","d5a4259398014ae6443239f828901fca"],["/linear-search-algorithm/index.html","55cd2bc53a5bc5e134485ec2ecc066ec"],["/linked-forward-star/index.html","e05a80d3f1e769282010ec4bbc039f31"],["/linked-list/index.html","678f6625ab281558eab74a49a6d61951"],["/linux/index.html","6f16586839eda78a5147227accdedd7b"],["/liskov-substitution-principle/index.html","aa82f96263378c10d2a552b8e750c362"],["/lock/index.html","0da97cb0dd126d857116d7f50fc9bcc8"],["/lru-cache/index.html","8ea9df739dd2140727ee711984b201b5"],["/maogai/index.html","d9378cb7e17fed79e03fb24079030993"],["/memo-mode/index.html","6bc2cf753b1831bea4458c6d1dc8cc38"],["/monotonicity-and-convexity-of-functions/index.html","ee2d3a49060ed24844dff7876a0112e9"],["/multi-function/index.html","51aa60932c998911aee830f1b2b5f707"],["/multithreading/index.html","14250a5f1230b6ef0d751b0eb71ce370"],["/mvc/index.html","542e6bfd0861e2f5d15bd0d3881577be"],["/mybatis-cache/index.html","a3475f6f3bb2179ea050f5cf92fd677a"],["/mybatis/index.html","c3ffa2d4ea5294375afd572412bf610d"],["/mysql-index-wrong/index.html","79900ae0357e53c27085d893e8e406ad"],["/mysql-struct/index.html","ca7504e2d9a80802cd8dec7d14f038ca"],["/mysql/index.html","60c2bd10b5815027b2ce21c38c2b38fb"],["/nacos-service-registration-and-configuration-center/index.html","2bfb400ede2d1531fb6df47e3bd17c5b"],["/notes/index.html","4b466492949e544921280b4535ecb3a9"],["/null/index.html","af7b5f7cdb3f9fc5f336c2e0e006efc5"],["/objectoriented/index.html","f513b76d51fff0628f4ae0bed25b9093"],["/observer-mode/index.html","6e0d35b3df59ddef2fa72e5749a5705c"],["/off-heap/index.html","345ccc12847de3ddcf7acb08c125a6d0"],["/operating-system/index.html","f962e557b48db88526c5b84cb1e735d6"],["/page/10/index.html","591b84011217684db26feb82214af51e"],["/page/11/index.html","c305f2d6029815e83bafcdcfe61ce325"],["/page/12/index.html","0fc800e409b8b5c905c52bbcce887f90"],["/page/13/index.html","c7b954d6fb75867bbcbdf33eae230492"],["/page/14/index.html","ea7bbc8d930c54edab3312fb5fa99385"],["/page/15/index.html","8803d4638a3a7fdcb50ee4cff48564cf"],["/page/16/index.html","d973f27caa0a592fdc50b9419829f0ac"],["/page/17/index.html","778bf4202d64d45d5c9397ed907c3fe7"],["/page/18/index.html","128b5bbf3a99eeb86d81702cab940329"],["/page/19/index.html","d3cfcf196a117e166a0056039d298e98"],["/page/2/index.html","b2021b88cb618a4897e8d9b62332c1b2"],["/page/20/index.html","c4b87f075a5fbf2f3e4c647296051ab3"],["/page/21/index.html","7ca10ff3fed49b023c4991be3167fa9a"],["/page/22/index.html","6e1252826deef84c860e7f0d9aa612fb"],["/page/23/index.html","cb55c35c0cae5ca2530dfd581ec78807"],["/page/24/index.html","383d0997dd984e18d33306ce09c556cb"],["/page/3/index.html","300ed063d92b18c55e59d5ca80b46625"],["/page/4/index.html","83a6ce4beb08b21ec248f90e48c95bf8"],["/page/5/index.html","571055a9347a0b7088a6271cf31315c3"],["/page/6/index.html","595b046344522d647df4f7a89417d0da"],["/page/7/index.html","c0d1e6d06cabc823afa46e35199b195d"],["/page/8/index.html","c8bf03035e91176f70c69eb3b04d400c"],["/page/9/index.html","badac95206c59df4e48a4d6dac2a8cc3"],["/palindrome/index.html","60c8ea4ff118c6d3c498838eb2513dea"],["/partial-derivative/index.html","8ee611760634f4e285c0cb7b1d850ec5"],["/pass-by-value/index.html","c5d8d65f88b859863dfd71c58ac0f476"],["/pictrue-bed/index.html","5a9854a2d06451f9d46fbd1b4e65c10d"],["/principle-of-opening-and-closing/index.html","2844eb509d830d8d408a3d5c52b1cd07"],["/principles-of-computer-organization/index.html","842b313245c7673bf2fac65c73101c5f"],["/program-test/index.html","fc998d4f519ae61ef4e018f9a8a330ce"],["/prototype/index.html","ef2f7bd56e36feb3309f01d1d621ad75"],["/queue/index.html","fa82e985fd47287229dac26d342c74c4"],["/random-weight-distribution/index.html","6168fd8d52517b670535c05b0e8457d3"],["/realize-modular-programming-with-functions/index.html","5294244f2f646caa9c33209c35392be3"],["/redis/index.html","77cedb86c7d2ac86aca21a4ed144e91b"],["/reflection/index.html","0b7b8581a082b47a608fa817405721d7"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","57ed44a5d2be317408ef742304ccc4a7"],["/ribbon-load-balancing-service-call-degradation/index.html","ea4a2adbed0243a1bc9a6ac54a1a073b"],["/round-dp-algorithm/index.html","118f4e1c4ba87cda08f527f3f7ec86c4"],["/seata-handles-distributed-transactions/index.html","bd33c3319f762f84c0fe9c6f90680028"],["/select-structure-programming/index.html","eb4e191484fa0a5ac0050c1e5da0a186"],["/sentinel-realizes-fusing-and-current-limiting/index.html","4395dea443b632e40cdb9638759622d1"],["/sequential-programming/index.html","43583baaab025df754849b080c5ec248"],["/series/index.html","6a2d3c7c529706cbe326f2bdbb11bb4f"],["/service-worker.js","c8c9873de19507052d3d8d35f19e0051"],["/single-point-login/index.html","fece92da00f4f7e9e1c6c078669f8445"],["/single-responsibility-principle/index.html","ccc63913c0a8727a1c323c3dde6326dc"],["/singleton-mode/index.html","1f581eaf4ad97d2b8f647302d2d8e92b"],["/slidingWindow/index.html","afcc70c38b5e7d38473fc85c2ba96b12"],["/snowflake-distributed-id-algorithm/index.html","cd16c6d9a6bc14dde42bcc4e12dd840f"],["/sparsearray/index.html","5db72bbd1914c8dad28b253d4b13bfd0"],["/spring-and-jwt/index.html","abc1793914341815d018c9da7fb5a906"],["/spring-architecture/index.html","ef7e95cd39b7a9d68e93ff241c652fb5"],["/spring-relate/index.html","729ec5db6669b92c10ea2ece7ff38fc9"],["/spring-springmvc-mybatis-integration/index.html","ca59b65ed5dc802f9ed51c5fab376ece"],["/spring/index.html","7e1a4d57a2af6db532491a54c8637b1a"],["/springcloud-alibaba/index.html","2ee83c38526fb0072d594edb300508cd"],["/springcloud-bus-message/index.html","ccc0b225f8a5379124af3cc20083ac6d"],["/springcloud-config-distributed-configuration-center/index.html","618f61cbcd3077e167940f0093f2db3c"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","b3abea009509c7fb05bc7478c0807889"],["/springcloud-stream-message-driver/index.html","ad4e2d6c8f517421fead7e9a7cdfc382"],["/springcloud/index.html","113d6fdf632e370d54bed7344938fcd1"],["/springmvc-environment-construction/index.html","927cc37fbcfee8922f35bc9a50ada05b"],["/springmvc-work-stream/index.html","f263184b04235c0445e470fbe97d9d8b"],["/sql-injection-attacks/index.html","71f22fab2d4cbb9ea95a8e6657ce88a9"],["/stack-simulation-iteration/index.html","4a4d81ea266cbfc3b1026d59b0445e68"],["/stack/index.html","e842dd24eb79a9cdb29488589fcbf9f7"],["/state-mode/index.html","56a1130901f05b6e8e32cdcce4c5f3a3"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","68a1ac0b1b6f0c5e81665409f5e757f7"],["/strategy-mode/index.html","0d0102312cb66434b55753c04436b948"],["/sw-register.js","384e846acabfd741ba729e36e3d37cd9"],["/synthetic-reuse-principle/index.html","fa224f3d062081244f078b698ba72cb1"],["/tags/C/index.html","ee9647c6fe266aa2d75f8a5afe284435"],["/tags/C/page/2/index.html","b7e0deea94c37e4e10ab94e0e8253af5"],["/tags/Concurrency/index.html","25e3c585faaeca33bc755a70f1681f85"],["/tags/DesignPatterns/index.html","8ed2ee6b06cdc159a7c9ccef2b8a552d"],["/tags/DesignPatterns/page/2/index.html","0690bc1a27971a8389820ea98ecae81e"],["/tags/DesignPatterns/page/3/index.html","af2fdbe4134fd260ac219e31fff40450"],["/tags/DistributedMicroservices/index.html","cc314d46cd9a1151adebefb10fae374c"],["/tags/DistributedMicroservices/page/2/index.html","68a031af77e5a82f64cd587c1d19d58b"],["/tags/Interview/index.html","c96d37c55ff8378ed29715c5832094c9"],["/tags/Interview/page/2/index.html","b670a3af1a154e19bd27c93857a1b2ea"],["/tags/JVM/index.html","23a47644340b27a25f401bdc3719de3b"],["/tags/Operating-Systems/index.html","ee83ef3d40f4eb875712068d6f7f292b"],["/tags/about/index.html","2e759fe3c5ce12b5edc8173fb019ee82"],["/tags/ad/index.html","2f42f709933db27f8122e666260ec872"],["/tags/algorithm/index.html","8c2976672eff877bdc0d7734db4f98fb"],["/tags/algorithm/page/2/index.html","1f711e3c687105c8a89d4bea7a4ffebf"],["/tags/algorithm/page/3/index.html","29cfb3d77496eae7b646bee1d8861de2"],["/tags/algorithm/page/4/index.html","5335473bc8e57cbe051177d346be06a0"],["/tags/bug/index.html","4a2ddaaa5fb769d58aaf0f10f19ce356"],["/tags/computer/index.html","0573b4b9a16fe7d4d820931340990876"],["/tags/data-structure/index.html","4e4a57ca2cb39cbd2f9095850f82343e"],["/tags/docker/index.html","f73523356e24bf8a08869144554577a2"],["/tags/famework/index.html","037022ab1861569631f264a9706e7f44"],["/tags/frame/index.html","7ad3b8697a8cc7f0626747f43ca323f7"],["/tags/frame/page/2/index.html","4881b46526dd9f6925187056b1e192cf"],["/tags/front/index.html","1ca7d9caeb964abf0832a856bc201e5b"],["/tags/index.html","143b988046bc22ccd516a644888e3e3c"],["/tags/interview/index.html","2a38193c8b712ae8fff9209f2891b7aa"],["/tags/io/index.html","d68dd6d96af4a0dfbe116142adae1edd"],["/tags/java/index.html","c684d47320fddbf0a1e4800252158557"],["/tags/jdk/index.html","af90e074191683cb08fb0e06e9d918de"],["/tags/jvm/index.html","7e607bca6a0ca47ad64186a7994c804e"],["/tags/jvm/page/2/index.html","a37626610bc778ebe8cdc42bf3278ced"],["/tags/linux/index.html","1e1f660de8f68a3569fb121b3e92eb24"],["/tags/maintain/index.html","4b948c79dc0721510b882678f7b874bf"],["/tags/maogai/index.html","980fd937f64fbe01f7a3dca5a7bb107d"],["/tags/math/index.html","0133e56f10a3932e7e04f81663b7176f"],["/tags/math/page/2/index.html","9df92caa2fd202ace6a47a2ebb895134"],["/tags/middleware/index.html","2d39fc8c0332fa65098bf417ec8b7ee3"],["/tags/mysql/index.html","0e1a04d1df89216dba89c69946a239d2"],["/tags/network/index.html","1fac80af4c15979c57c63743f43cf941"],["/tags/project/index.html","0ef24bc27d1a4cc2f2e59cdd8d7e4be0"],["/tags/security/index.html","0ca255a9dea7488b2fd8c2b59c38954a"],["/tags/sql/index.html","5365618844842c79ad927ec663c0686b"],["/tags/test/index.html","fc4c0f0d5352369e31a419da1b90d482"],["/tags/think/index.html","de3e3004d1b065960a5efe582461dd0a"],["/tcpip/index.html","dae78892775b9444c3917c5d359c92c7"],["/template-method/index.html","2ccd6de3e7cd8378ea0fe6a5de2914f2"],["/test-case/index.html","a2c9f7daec1c40297b1ef827453d5e89"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","137110af4da13e697170a1730260fea3"],["/thread/index.html","91f0da7efb61a62d77547662c4d017f6"],["/tj-horse-racing/index.html","03ea9f8e743b768223903dfa9731bb72"],["/topoSorting/index.html","e13548e12c6031a8bd762adfc79a445e"],["/traffic-monetizationaccess-to-google-adsense/index.html","74a7223aab47b8af51343081a593125e"],["/txCharity/index.html","42e5c5db38a4c7e6b58fb90a5236120b"],["/ubuntu-set-ip/index.html","819aa19ba62071b047744453e6c8ede8"],["/undefined/index.html","28e42cc965b29d79d75253c94470de5c"],["/use-arrays-to-process-batch-data/index.html","48748d1c37c99b0d6bf4c265ccc280f1"],["/use-of-springmvcmodelattribute/index.html","3ab206939199a6608231258cc83bdb6d"],["/users-create-data-types-themselves/index.html","656ba5775367dd8cbab954854a009dc2"],["/visitor-mode/index.html","07bb9039e7042cf365f3944b7cca673b"],["/what-is-milk-and-why-is-group-wise/index.html","6812dc595c0a7196de5258095b8c6846"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","a7d3b64679dd123de8c9375785d388d9"],["/xss-crosssite-scripting-attack/index.html","6fd0b4f1b1b7be6f0b0539eb372b4c7a"]];
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
