/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","cce7cda620d7c6e990f5d7fda2030f4b"],["/404.html","a80a1d0a67be060791f59407cbdfb684"],["/404/index.html","8a967d5c3dc91c9adadc2362c358a715"],["/7-sorting-algorithms/index.html","6ca86bd1d51f6fd74f1e186addc87c62"],["/AIO-blocking-model/index.html","33212f0cc80994feb31b282bdcdf2a27"],["/About-Snowflake-and-Consumption-Degradation/index.html","ec0f11e105bb0b1b29385e9a53ce3ff8"],["/BIO-blocking-model/index.html","0f2e3c9a316c9d880fe1f578e1920f7a"],["/Bloom-Filter/index.html","09c4b36134aac846ba8d88e5fc3a084b"],["/Boyer–Moore-majority/index.html","bb1a8e052081e6ecd6273a5b5e20c8bf"],["/C-algorithm/index.html","94188d31b33ec21b448bb66519ed5292"],["/C-programming/index.html","8d83abdd88e81964dc0b6e0fd9cdb95b"],["/CAS-&-AQS/index.html","c4b6b117ae65d0817e590bce923185f8"],["/Comparator/index.html","aa3680c5e2c0b2bdbce29b2c7abf0fc2"],["/Differential-array/index.html","53107fd68db3e4e2bfab4539f0d1eb84"],["/Download/index.html","f658c8a4ce9df2cc63e7166cf4321096"],["/Front-end-security/index.html","a02816a25ab82896e3eaa4b941d01f93"],["/Good-use-of-pointers/index.html","3815a2f26a604d71db978c2a35e244a5"],["/Graph-degree/index.html","5e3f16469ad3c9aa21a00954f12912a8"],["/Greedy-Algorithm/index.html","cba2d365b1a82b60548630e009044a3e"],["/Head-First-Map/index.html","1e10811ffdf54bad25b9b39b8e5e5c8c"],["/Head-First-Netty/index.html","ff8170ce8bc1ded4af22262ada5f8a10"],["/Head-First-Nginx/index.html","be934783b3104deb02b4e098bf8b50d6"],["/Head-first-Spring/index.html","5bdb4c301e92ba03962b05a3d3f20c1a"],["/IO-model/index.html","5b97c5dac0c57aa2341b89ce0d08a728"],["/IO/index.html","cfb517ae78a9b01a3257128638d0a122"],["/Implement-a-lock-based-on-ReentrantLock/index.html","f14594edc371f7ccc376b2d082fdf101"],["/Improve-Robustness-(1)/index.html","f235c230e1eea681af4cab53a7ae3e5e"],["/Improve-Robustness-(2)/index.html","c3031be15751461ea94bad265a4b3e05"],["/Integer/index.html","7b95764e844af1946e0dd67e42f5e987"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","33ac38a7fa672a6f2369802d0f83cc6e"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","8a7397b3ba95172a3e3df7cb4b9ae79b"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","057bc264c565f3299d4074d3d74e1413"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","b2c31e3ef03d150495f2bf5928902a88"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","8416fee122b8efe30ea8a53205c460cd"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","bfdb7c1da7c20e66a65627f12e092a98"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","d0db435d10450976e120a33749a57136"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","5c3de4c38ee7ccd5b94c900299505a87"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","028bd2bf3e4b22b0c5efa4898f507d6b"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","7ed2bc77870e4f6097f1d5e82f4b9e9f"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","790d2ec60f72c078aa61aadd0c4dc458"],["/Java-network-programming/index.html","76a42c4e0d2ffd024736c012dc96ee74"],["/Large-number-operations/index.html","55bfe20410b0f4230772a7ee9b985f74"],["/MYSQL-MVCC-&-LOCK/index.html","bc88b364b766f6d593d1ea7eba9bfc85"],["/MYSQL-uuid-and-page-splitting/index.html","31cd8095686016a6263f86710ff23a81"],["/Minimum-Spanning-Tree/index.html","094b0bac935564501710d7986f672cf5"],["/NIO-blocking-model/index.html","201388fc1c83c2c3a3a0291725d2c9bd"],["/Nacos：Configure-MySQL-data-source/index.html","25e1b9f3e946ed1571ddbf8afa3b7873"],["/Native-method/index.html","9a2c5388dd7575d952fc2d509877d478"],["/PriorityQueue/index.html","cada6c3e04274e8795145aa12c3be474"],["/Proxy/index.html","2c403b312c368b0d40357c3ec60ce738"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","216945c6bf0ad381bf90e26e1dbbd9f3"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","a475b27a93884b0f6fbf81747a0700fb"],["/Reservoir-Sampling·/index.html","10dd9228601149fa813dc6315e46c4ee"],["/SQL-injection-vulnerability/index.html","6e1702a3fda4c714e560d773c8d64d3c"],["/Sandbox-security-mechanism/index.html","524b77798b8990aea72fa95f4aef95ee"],["/Spring-Cyclic-Ependencies/index.html","7d1534463fa7ce9de41159cf1b792d43"],["/SpringBoot-startup-process/index.html","1f0f777d66d3d77c495c46ac4bfcbd67"],["/SpringSecurity/index.html","709d296813b0882838a0c769f55554b8"],["/Thread_Pool/index.html","720d00007b835b54aa576fac87b51bc1"],["/Transaction-isolation-level/index.html","90240fbff5e74cdc0b7dd02f487ce1cd"],["/Unitest-framework/index.html","eb72244f6589cf3f0723165e24a1e7fd"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","c0150e70a6bbb7b0d474352cd3fe50df"],["/about/index.html","84319a302d8b62a1758488eb9a928020"],["/adapter-mode/index.html","8554a1b8375dbd0256bcb605db766984"],["/adjacency-matrix/index.html","e6c2991f1192af37ee0615cf5a536e17"],["/adjacency-table/index.html","9a07ca8a292170082b647ee93a35f46b"],["/agency-model/index.html","d30242c6adcd02e06196b827df3095bc"],["/app-test/index.html","7a0dcd2f2a8f20aa4519f80ae6187868"],["/appearance-mode/index.html","6248aa41f1775abdb0c70970e2627a37"],["/archives/2019/01/index.html","d93f17e7829342c6e3103691f14911a1"],["/archives/2019/07/index.html","6d4789b3b1a1fa383e6ddb7cb34edced"],["/archives/2019/10/index.html","0e4e75b5c980d6d69c02e8208576d2ad"],["/archives/2019/12/index.html","0946c2c531517724bf6a02d2ccbe5d5a"],["/archives/2019/index.html","8fec202e8c5d650e1efbd8db4007aa34"],["/archives/2020/04/index.html","193896e78c0c42ae9aa08281f56d2301"],["/archives/2020/05/index.html","7b2fe3a0a79bf220a25c128dc9e6801a"],["/archives/2020/05/page/2/index.html","3c57031227aa1b2f345a3340de376857"],["/archives/2020/06/index.html","577e6bdc29cd2ef329a828623cf72ede"],["/archives/2020/06/page/2/index.html","778025312012f0c8bb537e5693181377"],["/archives/2020/06/page/3/index.html","cc028248b1b7988641ee9e3d11beaa95"],["/archives/2020/06/page/4/index.html","6f170556486c28a45ca90614708d64fb"],["/archives/2020/07/index.html","c764bca844729cd63dce46813db26515"],["/archives/2020/07/page/2/index.html","5cc3ebe775974eacee74acde2c31b657"],["/archives/2020/07/page/3/index.html","2b6edf22d0ad2d5a1399bf5002faddb8"],["/archives/2020/08/index.html","79d3d4dd784c48aa322d90f32a285706"],["/archives/2020/08/page/2/index.html","0a6e472baa66c0cdacffbdda00502d43"],["/archives/2020/09/index.html","8e90b3d0a296cdff13cb3924de3755ea"],["/archives/2020/09/page/2/index.html","18ccc124ddcfcc5b727a04c4830306c0"],["/archives/2020/10/index.html","f8c604bda6b9ea0f2a96e4a279d1647c"],["/archives/2020/10/page/2/index.html","faf569c9e22b3e8c4096bfd871d4ec2d"],["/archives/2020/11/index.html","87aaad75967863ec60caa7a376eaae4a"],["/archives/2020/11/page/2/index.html","d17c7e8fbbcb5e96a26b1bb146e26ecf"],["/archives/2020/12/index.html","48ce8352d5c7be24af39ac4d4731c721"],["/archives/2020/12/page/2/index.html","cc4f94f4727e5fd8ac6010cbee3446d9"],["/archives/2020/index.html","5fc1724257774f7e7348b22069a0c22c"],["/archives/2020/page/10/index.html","9ff48f9da66a649bd9220bc898020ad5"],["/archives/2020/page/11/index.html","de8c987fa88d1aad8c2627d9b2e5d10a"],["/archives/2020/page/12/index.html","a8e0cf8dab21fb335826db6f8e61ab1c"],["/archives/2020/page/13/index.html","dbbe7ce762ab4c35b87eef4dee9b4220"],["/archives/2020/page/14/index.html","43acf590cc90641ed94e01abc5092ab8"],["/archives/2020/page/15/index.html","19f0542ef0f313a56aef763c6c151503"],["/archives/2020/page/16/index.html","d72a570bc4afa3c49e434036ab280c34"],["/archives/2020/page/2/index.html","3782275274796311d7b334a2957f62a1"],["/archives/2020/page/3/index.html","efb9c0d3e2befc81818cbebae688e18a"],["/archives/2020/page/4/index.html","d31826a9467a5a7fb1ae546082722d24"],["/archives/2020/page/5/index.html","50371cb99bb21a4e291e091b7e586a6c"],["/archives/2020/page/6/index.html","31cc44c6d99eac58309d9fe2dc84fdcd"],["/archives/2020/page/7/index.html","3adf062fdff175911bd891bcc1c46c6c"],["/archives/2020/page/8/index.html","229a4e8cbcd667cdb14d7c4d693a6b80"],["/archives/2020/page/9/index.html","35c2324017e39137302f193419a06c2f"],["/archives/2021/01/index.html","97e970ba7444b124d5eba298a0a46fab"],["/archives/2021/02/index.html","5b52d3cefd0309bfd1b27d91d9dfef98"],["/archives/2021/03/index.html","6e1c2fcf07cd2511ad0d34b3cd08bd5e"],["/archives/2021/04/index.html","0b85ee0b10c0eea8777ba2fb4a4b4abd"],["/archives/2021/04/page/2/index.html","b0a0241d23364ede4498b35e1ac4f80f"],["/archives/2021/05/index.html","5e404ac048127d303ec35d693181cb94"],["/archives/2021/06/index.html","396e0c58e93230a6428a5cbdd673bbd5"],["/archives/2021/07/index.html","bbca5ff83d9448f2efd7febe3f3c042b"],["/archives/2021/08/index.html","bc369b610ad96a327d9a41022231679e"],["/archives/2021/09/index.html","d774a86c9076b97c4fa0e5657a4ca596"],["/archives/2021/10/index.html","0ef73d236f97230b724b583064885529"],["/archives/2021/11/index.html","49baf40a87f5b5d6486866ebb86384b2"],["/archives/2021/12/index.html","75c62b60d7a6feccec12d537e9ce6e6b"],["/archives/2021/index.html","51e821944765e45f02bc8e1a0191197c"],["/archives/2021/page/2/index.html","49e44b2feef1c3e1faa205d61cf913b6"],["/archives/2021/page/3/index.html","ab78baf5612d3a1ecf3b4729896e3679"],["/archives/2021/page/4/index.html","cf4ad18a5f97923969a1f5aea7b2bf6e"],["/archives/2021/page/5/index.html","e9afeda2a2d767fe0d307b474a2e14ab"],["/archives/2021/page/6/index.html","b4de72a5d899c6d2fb80b41bccf6e7cb"],["/archives/2022/01/index.html","c0ebf6fedd551d1c560745a1ee42e52a"],["/archives/2022/02/index.html","52dd95d53e4dadebffc691ecad8577d8"],["/archives/2022/03/index.html","b1945c3563490e84808c2f2e7f18a78c"],["/archives/2022/04/index.html","ab2fc19653c1dcfdf65d8a988fc3044c"],["/archives/2022/05/index.html","d14b6a5389b3b85e6a3cebe5bba6bda5"],["/archives/2022/08/index.html","b71a1b0548ae5d70e6beec8bb6aa1f65"],["/archives/2022/10/index.html","6112bf483e9ac66d1737226be4e82b35"],["/archives/2022/11/index.html","66f20c4dac4e9331342d8d94182d04ef"],["/archives/2022/index.html","f36c817777d95ece3577c9e6dc969b32"],["/archives/2022/page/2/index.html","334b864219f9aaf79782aff2fecbe301"],["/archives/2023/04/index.html","fbfb5989438fcfdcabbebcc6d6489c62"],["/archives/2023/06/index.html","2b50a3e60b7218e45e691faa8a5cb832"],["/archives/2023/07/index.html","7f3af544fa8d041d73cb2690f1457d1e"],["/archives/2023/09/index.html","26b98f5f698a35e72be76a9347eec1b9"],["/archives/2023/index.html","5c80da7d6fd31f34554fbb4f3f77b0b6"],["/archives/index.html","2a18f914d180ea00d8025a0d4c7a9288"],["/archives/page/10/index.html","d5219e867edbdaf0d35b5fb2aa7f88c5"],["/archives/page/11/index.html","df916e4f4642d555bb2927608c347198"],["/archives/page/12/index.html","f19c98e698363509ce636efe53a7ecba"],["/archives/page/13/index.html","ab2ebe62b0079992b3591bc78489006a"],["/archives/page/14/index.html","4f44217cffde8004187a0cc2aeda31fd"],["/archives/page/15/index.html","e33c68641a700ffbfc28e50006b1df95"],["/archives/page/16/index.html","d9376cdc23357b11f9968f8d4c35c6e3"],["/archives/page/17/index.html","d7e90290e2fb8771b2d476bef3a3a8cb"],["/archives/page/18/index.html","93299e39e0f93c402ed7b3293c8999c8"],["/archives/page/19/index.html","997da0ae070a568efd1566de2b4cdd46"],["/archives/page/2/index.html","8b6265da152b102c2f8e8dc9af39d772"],["/archives/page/20/index.html","a374d9908be98141ea024bf102763dee"],["/archives/page/21/index.html","00122f19b2b9f725c53797a5bc88cb3e"],["/archives/page/22/index.html","b70c86f0f87bd0bf6b46d324a3da32f8"],["/archives/page/23/index.html","075534f278ed6acb8b02116101f90880"],["/archives/page/24/index.html","98904e29eaadb09f26c1df3310994f3d"],["/archives/page/25/index.html","7564fd1a38e8ff5bfb1139db64288354"],["/archives/page/3/index.html","f291baade4986af92788ae7abbb64477"],["/archives/page/4/index.html","a0af90cb8c4c738ef1fa1295fd3c34ad"],["/archives/page/5/index.html","d38ee889751dc0d08f4dd26e549f83eb"],["/archives/page/6/index.html","b1f9e315c6370ca7bb5761bc483c52e4"],["/archives/page/7/index.html","58ec6b1d5aab8140ad94a9a0c10200c5"],["/archives/page/8/index.html","a0192fa48af7e7a99e623629b4dcb545"],["/archives/page/9/index.html","b9fe91a0419d4dd690e9b52ae54ca659"],["/array/index.html","c1c80919d1b6d5fec21ba430fa8d88e9"],["/automated-test-katalon/index.html","42c7565abc3e6fc33d15d306a8136e37"],["/automated-test-selenium/index.html","6f96dc12d159ffb44f393db53193f867"],["/back-to-table-query/index.html","fc110e93613d7a93b709a96cbaf70bd8"],["/binary-search-algorithm/index.html","5934e774ab403494f67ed4012b4d95b5"],["/binary-sort-tree/index.html","507c206db5238c449998e03ec2b65418"],["/bionioaio/index.html","56e007e0a54cfd3819d5ef2254f8feb1"],["/bridge-mode/index.html","56f977391838414ef07f8864f4e85c61"],["/builder/index.html","c14a72a80f7399c06f0a8eae6504ea25"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","808dcb621ea04373a208ad6fafca6679"],["/cache/index.html","4bbb71cf70b0c7f0ab4001f3b9507b3f"],["/categories/C/index.html","5d5b849032fb4a922840693830380669"],["/categories/SpringMVC/index.html","dd7ec66a0e15e96da9ff5a06dfc80c6a"],["/categories/categories.html","9eb6718679189c4fd31fe2ba9284b094"],["/categories/index.html","b08ac22605c7330d2801ded4eedfa447"],["/categories/linux/index.html","5d07790ddde4a99fd17e0f3603cc3d9e"],["/categories/分布式/index.html","51f4ede6f2bac6bb4d30fa283a42c57e"],["/categories/分布式/page/2/index.html","ef85c6b6595bd7cf2f50999443d4bd17"],["/categories/设计模式/index.html","362c21d363c5f56e387f5cffcf04e5c5"],["/categories/设计模式/page/2/index.html","eea49e36c5f07741cb677f1bda9d3e24"],["/categories/高数/index.html","26ffd6f4b4553d547293b04f5737e2e6"],["/chain-of-responsibility-model/index.html","e215716e2c1648600e76e199eb25bebd"],["/charity/index.html","f80ab298ce973508578f067a6b8c543a"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","975f15cd0759417d7d3edc3cfcbd4ee5"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","d0c08a6305994030f0eff34e99e5d234"],["/combination-mode/index.html","d13853d1996b113611c8537f6af70476"],["/command-mode/index.html","5afe6469b3a9eb960f97d34b5352a0f0"],["/common-commands-of-unix/index.html","5f5a9ec170d85de9a47886aced2e18de"],["/computer-network/index.html","3baa365adc0eb78f070e6a949c41ab95"],["/concurrency-principle/index.html","b3788bd73e6e25b50ff7ce7706f5e6d3"],["/continuous/index.html","d65cd3ed527c7a1d72ac16ccbe99e5dc"],["/contract/index.html","b50e0d4565ec4a6b40cbc1fe1cbc3185"],["/create/index.html","d0c42ec3cbc1180ed28b24626b87ccfc"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","092060504f117cad7a4e8bad3a730d4b"],["/data-structures-and-algorithms/index.html","5835ef11fa843838feedcab20df8c351"],["/deb/index.html","5519b0b48a90cf3b3bc05b96abe4f69a"],["/decorator-mode/index.html","2736b752d788ddd207ef788a2a709934"],["/definite-integral/index.html","a24f3b84b4035fa86f73666f27846860"],["/dependence-reversal-principle/index.html","f1f7d74cc1d3e9a1cb3731c6296132f6"],["/derivative/index.html","4190e1836ec015aecfa4ed0b10e36957"],["/design-patterns/index.html","520c34533873bb347d4a75e9d3a8bca3"],["/dic-algorithm/index.html","3ab1fcbdec6924755adb12dca1a4bf5a"],["/differential-equation/index.html","c431ae945caa3430a23fcaec0ab0ae5c"],["/differential/index.html","5c7c694ace15a814b508d25752be448d"],["/dimits-law/index.html","477e658b31c1b89ff7cf557b95c30cc1"],["/disjoint-set-union-find-technique-appreciation/img.png","3b180015f1019888938991178f4c1e06"],["/disjoint-set-union-find-technique-appreciation/img_1.png","e3611c71e7cb8a0cb4fa5e35c5f9bd36"],["/disjoint-set-union-find-technique-appreciation/img_2.png","d4bf7b42194d5378a43bd049b7b91da5"],["/disjoint-set-union-find-technique-appreciation/img_3.png","84469c7e0460e93e0590b56729ce340c"],["/disjoint-set-union-find-technique-appreciation/img_4.png","96308c2a7256c532ca38489ca81c1bac"],["/disjoint-set-union-find-technique-appreciation/index.html","3188b40494478f58b629cc37ff2dc8d8"],["/distributed-lock/index.html","8768a58f7ac8b85cd373be79b3e316a0"],["/docker-virtualized-container/index.html","2c60b701b6c1f7ec4d3da4f021b2bacb"],["/double-integral/index.html","0796a97af3c8e93d3343d789f70a8b62"],["/dp-array/index.html","84781f51ca064f5ac1e3594df18a4dfb"],["/dynamic-array/index.html","2de9af3df3de68b7196a72bd5c0517c8"],["/dynamic-programming/index.html","19c0a12fbb138647fe257eb4d272f6e5"],["/edgeset-array/index.html","62af6611c8bcb8659882c78e6a22d007"],["/encoding-algorithm/index.html","d98cd7320a0f3df06375681b4f442b4d"],["/eureka-service-registration-and-discovery/index.html","38d449791c1dfdc21be9c77ebf2f8d3f"],["/extreme-value-and-maximum-value/index.html","3dcc8e493980973fc7d595f5b51f7c43"],["/factory-design-pattern/index.html","25f63618edcfb17453b881b7ec7a35b5"],["/file-input-and-output/index.html","7a7b9bbae39dfbb9d25c8c39263df9fa"],["/flyweight-model/index.html","7c8a0bbd8c3ad9ed073f7551c4b5c34d"],["/friends/index.html","08fecb5358b5d9ce8272c74104a48c84"],["/function-graphing/index.html","82eb035efc3d089c88b1d06d490ad9b2"],["/gateway-service-current-limit/index.html","1369d68416f10610dbc16de20eab1767"],["/gc/index.html","5d07b9767613fb946a261f0565f1998b"],["/generalized-integral/index.html","c57302cb4530f4e4ca50875cca219e65"],["/google8102e2f35ce9e391.html","11e3d8ff1848d63f5180d2945eede19e"],["/gulp-compresses-static-resources/index.html","e1cb232aea3a7eee4db32c5d60f80e42"],["/hash-algorithm/index.html","fc6fdc8d3cf5cfb7565bbfddb9317f8e"],["/head-first-JVM(1)/index.html","62628e3d18e7dff33548d64ceabdf6a4"],["/head-first-JVM(2)/index.html","1b4b664b6436aab4fd4138056eaeb8d6"],["/head-first-JVM(3)/index.html","d18754d0fa7558cafac704fd385a770c"],["/head-first-JVM(4)/index.html","a5dccf4b2a47913b0efce503be58f861"],["/head-first-SpringSecurity/index.html","1f11f102488e2f6a91cf0ea9843c27eb"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","99e731ee1d54a6908b6125bf630cd610"],["/heap-sort/index.html","fa8ff107cf5444b3ad6cea17fd2364a6"],["/http/index.html","3ba09f2b69e55753dadbdc4bd4265ea5"],["/huisu-algorithm/index.html","6a29546b7b29b948317d2bef8bd8d26c"],["/indefinite-integral/index.html","9ffc3cb5ee7995893671d1b24a39e11e"],["/index.html","8016a5beb57356a9955934226242b14e"],["/infinitesimal-and-infinite/index.html","702ca30468340be30feb3bfdeffdd23b"],["/interface-isolation-principle/index.html","b9a7e75e15781b345575cf5abd5934a2"],["/interface-test/index.html","d097604712a431753fbdb22537966c21"],["/intermediary-model/index.html","e0fa8543d2504791bb2066d99c85a237"],["/interpolation-search-algorithm/index.html","4b10365bd313b63c1fbb2a96ccdd4f4c"],["/interpreter-mode/index.html","a51fd6287a013129b2f596266c449780"],["/introduction-to-computer-network/index.html","ea6940d71ba30efed7ad16fd03b73236"],["/introduction-to-operating-system/index.html","30eb6883c31c24eb86571d8868bb0e3f"],["/inversion-of-control/index.html","ade3c333eaf285e964a295947baf28fd"],["/io/index.html","0532e8eb8edd39537b294e96477de510"],["/iterator-mode/index.html","72bf8790d633592bf54175ff191f6d11"],["/j2ee/index.html","af30f04cf2f6f3c76ffef86f12179fef"],["/j2se/index.html","cfa37a94b336299b70192da432620336"],["/java.lang.String/index.html","5aebe1455eb7fd090e22db0b2518fab5"],["/jdbc/index.html","987055efe24cce573f8f59e462f36f60"],["/jdk/index.html","2643d24886a4dca4e7a6f2d85b8ed644"],["/jmm-memory-model/index.html","438e8ee27660d776ce3b9a6f951d7020"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","985da402067de1ca43219786c9d7f7f4"],["/jvm-method-inline/index.html","7f677500f732622b4eaa7898c35460b2"],["/jvm-tuning-practice/index.html","4bebccc4811c8c498fd7735a7ebd3df5"],["/jvm/index.html","e9c1a21714bd1ad167259a49cff36457"],["/law-of-robida/index.html","9e0373acda3173fb9575ee7733b21dbe"],["/limit/index.html","56226cccdddbd60d3e4c2470d82cbeec"],["/linear-search-algorithm/index.html","c4a9be8f52144afae7dd069a52833e17"],["/linked-forward-star/index.html","975438c0f400e8a472e48a21dad8d4a1"],["/linked-list/index.html","43dc43621d36a3e50e8b87209a2d08cd"],["/linux/index.html","a87be9d407da4037917d5a6f761798a9"],["/liskov-substitution-principle/index.html","99dd6d115fc8c9d3eee345666efd8799"],["/lock/index.html","54e0d0abeb90ee169a4e9c7063ca21b8"],["/lru-cache/index.html","e278f29db355a6477e3a80b8c4b41ffb"],["/maogai/index.html","641f721c55e6e978d348c101ff8fb939"],["/memo-mode/index.html","fc0864a86ddb32728441d19336923be2"],["/monotonicity-and-convexity-of-functions/index.html","1d4076c2119e78489669762388b1f0e7"],["/more/index.html","dd0b41ed4eb8e43431e064191505f970"],["/multi-function/index.html","6b2be38c0573755b935dbe359959e34a"],["/multithreading/index.html","76060b7ce29a68c47dfac6e4bac2a3ad"],["/mvc/index.html","6cb16cbff5ad99a5407dd0479548dd8f"],["/mybatis-cache/index.html","3bec2f8508fa9a4c3cae76dcbb4b20ad"],["/mybatis/index.html","8da1a0b282b074a3b33cd74ea1e6d44e"],["/mysql-index-wrong/index.html","bdca22b4fccb978e30cb298c25b84700"],["/mysql-struct/index.html","e53067c6a2fbdba1c029fb1befdd44a3"],["/mysql/index.html","eba58d53f2bf194278647f3de364f102"],["/nacos-service-registration-and-configuration-center/index.html","a8477cc1239811ed8d02686a3c63aee7"],["/notes/index.html","401b9146a671e538faf0639cd7e125d2"],["/null/index.html","703ce7e26e34ea91fdd249e1c6164e7d"],["/objectoriented/index.html","2a787b0df9e5251dc2ea18ed2e0649b5"],["/observer-mode/index.html","676999ddc3d8948e4ef255a1889548fd"],["/off-heap/index.html","de899e61f20be6530720dae9bf508779"],["/operating-system/index.html","2b328f628f8f0327c402b708f7b3c984"],["/page/10/index.html","af0804f764d1dc15bcf0aed43bce97dd"],["/page/11/index.html","40ebd70b1d8f334670eec81c18afcb31"],["/page/12/index.html","b8c3335f29464855ed2d3825ea6ec23b"],["/page/13/index.html","2115f7a011edcb8cc87d6a8a422b57a2"],["/page/14/index.html","db8c3ff072a99f7d0f6ab2c10367a34d"],["/page/15/index.html","2026caf3add71dbee98211cdb327d12a"],["/page/16/index.html","9c8c78a9941417fcb169ad9aa07a0ea8"],["/page/17/index.html","688edd48c7e23ef4b04d3632a9cf4f2c"],["/page/18/index.html","d57631e9a44cd8278ef3c9719e49f796"],["/page/19/index.html","107cad679d7c9faaae46447a0f9225f4"],["/page/2/index.html","edde7bd942126000335d1acaf877d97d"],["/page/20/index.html","43d07d2397e15d85817bf0258b7c2478"],["/page/21/index.html","9581f1b8e0c5603925344e504d2aced4"],["/page/22/index.html","91e2614b5f35212a1ec8b17d954e5df7"],["/page/23/index.html","26e11462bf11b3407e8b84a8c197a75b"],["/page/24/index.html","435ac8d391bfc71adaaff5ce04f7c7b0"],["/page/25/index.html","1d04d59280d02c7edd13f140109d6d24"],["/page/3/index.html","ed02a06e3c9adfecab66271cc57c8ef7"],["/page/4/index.html","b3e4dda16194606b495f721909cac8d6"],["/page/5/index.html","0c91d1e67fdd73a2df3689fcdc684905"],["/page/6/index.html","9e1564164edc06db7b45aa788df5cd63"],["/page/7/index.html","2edec88e1cbf22a359d4533c79f135aa"],["/page/8/index.html","07a771514d259ee792ce7139ab0e4cf9"],["/page/9/index.html","3879dd8e0ee8c0608438453323dd0165"],["/palindrome/index.html","d4262d8d3fa341be4d31e1262bf49605"],["/partial-derivative/index.html","d6b7044a27d353187f1a0f72284bd9eb"],["/pass-by-value/index.html","49dde0fb247b89793590c1ca9bfef9ae"],["/pictrue-bed/index.html","dd09690e962854a6f2b3ca0dc9941d05"],["/principle-of-opening-and-closing/index.html","13c77c3dbd69b072ad5cdcdcfebff9ef"],["/principles-of-computer-organization/index.html","07864d3aebebb208b3ba20a6de8a6677"],["/program-test/index.html","8706b9e8b1a6bd418b6681a6f4793c2d"],["/prototype/index.html","c3f4c3f142d923f11700f1b2204f4975"],["/queue/index.html","32b6276f69c7ccb20e9c88d00145a07d"],["/random-weight-distribution/index.html","0f71b32ce9c9c6ba4b6ff9bde47799db"],["/realize-modular-programming-with-functions/index.html","fe41b71f8d7cd23bb335bd0b59ecd227"],["/redis/index.html","497474645d10067786e3473087e0ca94"],["/reflection/index.html","a282c32c27df1c7049c112a9bf05780c"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","9b438fa5d94304045ed5414cc805f6a3"],["/ribbon-load-balancing-service-call-degradation/index.html","ca563df17cbcba68ca1d4bb20ec33314"],["/round-dp-algorithm/index.html","c5f4bd43bb137ca399e35aab665efa80"],["/seata-handles-distributed-transactions/index.html","c32b671b27ecb9a9d7ea5b56ab7089eb"],["/select-structure-programming/index.html","6e273ea26ea17b4defe807f05912aba0"],["/sentinel-realizes-fusing-and-current-limiting/index.html","feeee68b7c5135b2107608db1460fd37"],["/sequential-programming/index.html","788bd87c170da9904ed293bcb69dc9d7"],["/series/index.html","cf166bd57e608a1bb4b20469391508c0"],["/service-worker.js","e476419e7b453658d072214856206047"],["/single-point-login/index.html","27fdfb996bee33341cb3b74e4751eaf3"],["/single-responsibility-principle/index.html","677b45f906c8c24289600dd17beb326c"],["/singleton-mode/index.html","eb754985d9ff9453651bfaad38694e2f"],["/slidingWindow/index.html","1be3d64fb4ce4c974b846cb97eabd88c"],["/snowflake-distributed-id-algorithm/index.html","8be8b8125c32641f79d611ea7e5024a3"],["/sparsearray/index.html","ca2df703327892352c4734ec17bb7778"],["/spring-and-jwt/index.html","0f67d7a4b9eb9189bf8aaf4156951e2d"],["/spring-architecture/index.html","2dce2437e58637d7257b32e6e38b8671"],["/spring-relate/index.html","58cb9494927df6337c1f964767a53ad1"],["/spring-springmvc-mybatis-integration/index.html","da8c7cb8dda48af3d9fece06562fd6ff"],["/spring/index.html","2a6e8b9597b73c96d2f853355419dcfe"],["/springcloud-alibaba/index.html","84444bb96215a942d39ddca8f3aea451"],["/springcloud-bus-message/index.html","4861c4ca892f86f734598107850085c4"],["/springcloud-config-distributed-configuration-center/index.html","73db0b8df47e4f10122d5a91d938278c"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","fc878ebffb1ea32b59b7efb1d158c28e"],["/springcloud-stream-message-driver/index.html","a7750f9a79260d793dcf2baf060649bd"],["/springcloud/index.html","fb36316d385be245c9161fa5f9ce4d2d"],["/springmvc-environment-construction/index.html","9a0df4555737f37aef0653c5805f4225"],["/springmvc-work-stream/index.html","0304ae86f4dd7c2ec5e64d64101c4c79"],["/sql-injection-attacks/index.html","c07293b2d2dfde2df6591e25d0409234"],["/stack-simulation-iteration/index.html","54e37dc57ba196ebfc31bbae94d05929"],["/stack/index.html","56ff380cad5c8c67827bdaefc4b7cd5f"],["/state-mode/index.html","273b7ff8f3f7f087fae18869506b2b12"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","02ef0dc29ceb3ea325bcbc22aa0c7d70"],["/strategy-mode/index.html","6fc057e9b0ad6649309ee09921350884"],["/sw-register.js","04c4854bd5063c452e26114f39e81900"],["/synthetic-reuse-principle/index.html","09da168d76760721ad131466e367e1e1"],["/tags/C/index.html","e2b0b83e77f93fcf5b489ecc88749be7"],["/tags/C/page/2/index.html","b3a48234b57f5c3b06899c5deaaaa249"],["/tags/Concurrency/index.html","726137bbd7498d0d083ddd99fac2cb14"],["/tags/DesignPatterns/index.html","b3382accdcd932e402742acc8cb91714"],["/tags/DesignPatterns/page/2/index.html","f1d8133083191b89a085414dba31305b"],["/tags/DesignPatterns/page/3/index.html","09a89597d02a2cf57bb8146668774147"],["/tags/DistributedMicroservices/index.html","fae5b57160057b6ee7a5e3bea0a5a57a"],["/tags/DistributedMicroservices/page/2/index.html","e12c6daa3d6918a43312ae490a2c2e5e"],["/tags/Interview/index.html","5e435f9c965d61814d15ef2d0351f766"],["/tags/Interview/page/2/index.html","4a9fa26330389a91c191218d7ff6dbfb"],["/tags/JVM/index.html","f647f5143dfd05aed563d0795be47061"],["/tags/Operating-Systems/index.html","8c6b9b3c0d0917f0838c53eadfa95bd7"],["/tags/about/index.html","217694d616ef48ead71937496b9f209a"],["/tags/ad/index.html","668783407ab78b40c8c78d43149d90b9"],["/tags/algorithm/index.html","96e4a7c67ed7c50a671134be8f6f776f"],["/tags/algorithm/page/2/index.html","9d6a9be47551b5fe00107ebf5dececd5"],["/tags/algorithm/page/3/index.html","81ef28f3cfcc617e7a8a997773cd0cba"],["/tags/algorithm/page/4/index.html","cf7ae647a26f8e2d397fe7784ed5d498"],["/tags/algorithm/page/5/index.html","649823c5ab649d4fd46e6c7959bf37c1"],["/tags/bug/index.html","d6662107b8718630cb0c0472c13072b4"],["/tags/computer/index.html","2a227c44e72146bb611cb4fc74cbc58e"],["/tags/data-structure/index.html","060cda6e3e3cf458727262ac28c672bc"],["/tags/docker/index.html","29946689176c910d11c4d3fdfcfe3f49"],["/tags/famework/index.html","52c26e19bf076fede2bdbc5eb0d90b5e"],["/tags/frame/index.html","4a58d9f00d23857212597c8b2234a861"],["/tags/frame/page/2/index.html","4870ae248ba1ed3c93dac8de12e8dd07"],["/tags/front/index.html","fb654f079832f1fe4f2e60b3b032b24e"],["/tags/github/index.html","0746e65182f09f2d1c44b89f7f65fa12"],["/tags/index.html","4eec07502db0274a63c2a0c47921774f"],["/tags/interview/index.html","d0c3d8b68ee74953fbdf94851839ecf3"],["/tags/io/index.html","34eb0f3005b86efe994f579faf456f8d"],["/tags/java/index.html","5bd6cff3eb6bb9d4893e662c24aee6c3"],["/tags/jdk/index.html","ce2b2c20fd52a3a7933f82c9de870b68"],["/tags/jvm/index.html","e9860bf03eb10635d1bbe6e07c90fe94"],["/tags/jvm/page/2/index.html","9fc582b6e7ef306dbe501e354d4ba7ef"],["/tags/linux/index.html","9aea58a51261605304b0404c133a2ab7"],["/tags/maintain/index.html","a697d4ab018f2930c07fe47c90814ac4"],["/tags/maogai/index.html","314b231d5ba3e72776b4b7cf0ab4fb7c"],["/tags/math/index.html","baa4b3f75e97cd502a30249b34f4657d"],["/tags/math/page/2/index.html","cfe076d6fd71f6090249e60ab40cd110"],["/tags/middleware/index.html","60d91c010a049daed0010478d83029a9"],["/tags/mysql/index.html","a10d698cf5d02401073cad76216f10b1"],["/tags/network/index.html","2ff979c4eb8f3b44922ae0726d966f7f"],["/tags/network/page/2/index.html","20f017729a1b10b17114d743daccca9f"],["/tags/project/index.html","724332875fb9c96be040b8f161b3ffec"],["/tags/project/page/2/index.html","81e195b763431518e5f59d019625bda7"],["/tags/security/index.html","ec0a72cb9586fdd8d06b1740cfa3f457"],["/tags/sql/index.html","d078800b3bdbcf66cdf436d4d50fa265"],["/tags/test/index.html","e34deec04dc12e4fd79ac2292b13079b"],["/tags/think/index.html","1be929c280de1ad4db459e19a1c8df32"],["/tailscale-ssh-remote-connection/index.html","cb62842afdff2f337b01514fbf6c9a39"],["/tcpip/index.html","ef3770d31f432ed7b5e6674df67ba292"],["/template-method/index.html","e051ec3e9eba532685ca4200147488de"],["/test-case/index.html","521505c993ba193aa605b2f0520328a8"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","3e6cd026251f5c3f29bbc0c77f5c5184"],["/thread/index.html","bf0704052e0866af7098a60800fa20c5"],["/tj-horse-racing/index.html","166daed112e25c8f960f20def4c0c694"],["/topoSorting/index.html","ff34b6c04d46b78297837ec07e1b0e4b"],["/traffic-monetizationaccess-to-google-adsense/index.html","28b8c2074edebede02a1b8d8774cb097"],["/txCharity/index.html","d0407d8e07034752edf94f4ed1add1bc"],["/ubuntu-set-ip/index.html","13d5b01131edab10ecf6e75a083ff33b"],["/undefined/index.html","06a028a8c33aa0f5a7367b67898ee0dc"],["/use-arrays-to-process-batch-data/index.html","1f845e53af10a19717e0a4c19c322fbd"],["/use-of-springmvcmodelattribute/index.html","d8f682121500fdbe106a0f45927c0201"],["/users-create-data-types-themselves/index.html","0ed607c02e2b72943a23082450da6802"],["/visitor-mode/index.html","df70cfe527d4320d2783ddefb3e04c8d"],["/what-is-milk-and-why-is-group-wise/index.html","16bcbe75fd8820b072b7bd56be868414"],["/wiki/index.html","b2edf64f54cf67736349230a5875f7b0"],["/wiki/tags/知识库/index.html","be87ca6f759c03114cbf0389c3467363"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","8a022d13798ef16b75e2a2346e770b18"],["/xss-crosssite-scripting-attack/index.html","aff2df75675459747f8a17ee834beca9"]];
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
