/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","cf9157951b2b336d36bd83ee557ae7b8"],["/404.html","ab60f40eb4f4f8fccc3511a0588720a7"],["/404/index.html","3d666cbe482e6cab8d9efc25a25088c6"],["/7-sorting-algorithms/index.html","2d27e947f0d7281a0c597fe2fe3e23c4"],["/AIO-blocking-model/index.html","594f5be6b6b03b068b7d5b6ccf8ae358"],["/About-Snowflake-and-Consumption-Degradation/index.html","6f49c8fe132595bc697e45983cc950a0"],["/BIO-blocking-model/index.html","07f1eab6e7a2d272d83be9a2a927a361"],["/Bloom-Filter/index.html","e4506347f1501a6e732ff2e6da182610"],["/Boyer–Moore-majority/index.html","0ded7c338aed571ca04fea41a216654b"],["/C-algorithm/index.html","d4b0297c87e9f41ed919ca7a37da6e0f"],["/C-programming/index.html","1379d71cc6a56d4b47045bc1978388d6"],["/CAS-&-AQS/index.html","b1436eac0ed9a379cd912ff5163121c9"],["/Comparator/index.html","0028e29066c0665466401254f87f7bbb"],["/Differential-array/index.html","ec1cc0e926f90075a9c379816fa726e2"],["/Download/index.html","2e2fd3f6f2b0c8e032770ed06a271912"],["/Front-end-security/index.html","a98e07703ed1e623834031cdd4287ae2"],["/Good-use-of-pointers/index.html","0836d90a1ccb84e2b4439c8fda111fb3"],["/Graph-degree/index.html","9340a4da41ef091b1c6def25fb6f94f1"],["/Greedy-Algorithm/index.html","dc8db8a66400e582716c81ad8e51d49f"],["/Head-First-Map/index.html","a187e1c6835974222bd4bccb826cfaaf"],["/Head-First-Netty/index.html","d12e819711f29461947afacfe5a76d18"],["/Head-First-Nginx/index.html","39a3c9bf501f93ee258bbc6de590d514"],["/Head-first-Spring/index.html","bdf59e1fec937622e64cd2c22a686936"],["/IO-model/index.html","a8072dd227f6fd87dd5d6ecc5b2891d9"],["/IO/index.html","1098840506f93fdde29dea23b38c5b67"],["/Implement-a-lock-based-on-ReentrantLock/index.html","0a013825bbcfde7d799c6f3a2767030c"],["/Improve-Robustness-(1)/index.html","b0788733c9729f5fb124a551a95bc114"],["/Improve-Robustness-(2)/index.html","9f379d3127a38f411bbc2393ce18f63b"],["/Integer/index.html","ab5f345846e5656fe1d934ffcdc1de2f"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","68d07b064fc4d2bb419d686aa74bb399"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","245b3310a89d971dbed051fd9ffd5cfe"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","3b37743e6b44e2c5f3c9ebd0cf63dfe5"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","779bfdcaf70a55ae2cedc80864bbe951"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","d3ec686055fbd1d710f5de524649fde9"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","5404855dfc780082b2b81d767e5bff6f"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","0aac0714bb58ae3f185fcb3fff5b58e9"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","b24138669d3f4f380dd30287c704256b"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","e87d12d85ac48e28215bca9ee4ae8afe"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b3d5f16d83e861b3f52689cc4f1e46e2"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","4545f714517af68e76b51644c45b3869"],["/Java-network-programming/index.html","8778f1900a986f4e94dc9b791670736e"],["/Large-number-operations/index.html","af26fe9e8601b10c9851abce89d1b080"],["/MYSQL-MVCC-&-LOCK/index.html","cd58631b527cd473651bbf087a8bb955"],["/MYSQL-uuid-and-page-splitting/index.html","2671dab82d6a2842838b19cd7fe1a140"],["/Minimum-Spanning-Tree/index.html","ad68fbe7ff46fbdd004bfcea440a88ab"],["/NIO-blocking-model/index.html","04fa0f7e45e1f99d7bf6f47220618cbc"],["/Nacos：Configure-MySQL-data-source/index.html","d6fcd4bbe7371d1d1ecbb4a96559fa11"],["/Native-method/index.html","550715cda4f04da3f216064246affe94"],["/PriorityQueue/index.html","c279234ccb2d2c6aebfa85e3c438d4e0"],["/Proxy/index.html","0219da6480059b2744ee70a15ee05140"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","a75ad88c9016c92cd9aae8ce7c021193"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","9a1590f53ca0c07b6f59a17a9554828b"],["/Reservoir-Sampling·/index.html","d641d9fe86146f2e9f7c59ca85fe64d6"],["/SQL-injection-vulnerability/index.html","84caefe235474cbad22dbda05b42e60e"],["/Sandbox-security-mechanism/index.html","22812d1b4fd579a0a521eef13e7258dd"],["/Spring-Cyclic-Ependencies/index.html","4f2f2d904b2fdda9995637afb4f0a4a6"],["/SpringBoot-startup-process/index.html","17a8fc0a5f4463d021855e2c549b7d47"],["/SpringSecurity/index.html","d3c7be3eff710a2ddc752825c42d9e31"],["/Thread_Pool/index.html","1694cc8abd0b728d1f19096f5d228c03"],["/Transaction-isolation-level/index.html","8d29b1a73bab8199aececa9b0789564e"],["/Unitest-framework/index.html","c2bd36a6b5c795f6aae61d40af8d0e7a"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","4ae6bc150e208c20b7ebfd8cf7b3ad93"],["/about/index.html","8850127b7f0504f970f456ed18f00a22"],["/adapter-mode/index.html","8dff7de57df142b39c802384456a41dc"],["/adjacency-matrix/index.html","d25316d51ac78118fa407f8edbf806a2"],["/adjacency-table/index.html","27efda2bdf8836f2264dfdb2479ba20b"],["/agency-model/index.html","ade6797a5017b505a743039024299492"],["/app-test/index.html","93512f31e0eee391bb3e71ec324dcd6f"],["/appearance-mode/index.html","8a947dbda91887d65fb616a020d90b36"],["/archives/2019/01/index.html","0d09f88738793cea729ad227bb56c8b3"],["/archives/2019/07/index.html","0f078d73d3f056a54bd3966029f5a353"],["/archives/2019/10/index.html","39f53c4dbe5fc326fc7bbf4940152150"],["/archives/2019/12/index.html","6db3fd05fb88d777d985ff074570896b"],["/archives/2019/index.html","29d6dd69699f3aaab20318fc8df23c88"],["/archives/2020/04/index.html","9beb7fca6fc5484574cb32130942564a"],["/archives/2020/05/index.html","41832da50fdee61ef747ea44f7c170d3"],["/archives/2020/05/page/2/index.html","5f218de6bd90290fe1cc30fbdba0334d"],["/archives/2020/06/index.html","798e39e36f75ea8f45a12da9055225a2"],["/archives/2020/06/page/2/index.html","cf434eed734a691c08970cddf3be019d"],["/archives/2020/06/page/3/index.html","9d27f58d342a1d0289509c5eea469f54"],["/archives/2020/06/page/4/index.html","3403e6f75d15242efe201c8eaf302e6a"],["/archives/2020/07/index.html","8943b4baab6ddd7197310b8a7e1adc92"],["/archives/2020/07/page/2/index.html","9115375b63cb64b26ea266c2a99b72df"],["/archives/2020/07/page/3/index.html","afa1e1e9ca3a1235709fa90c99c21776"],["/archives/2020/08/index.html","51ccb7871f52336379c87cb3c4cf3d8a"],["/archives/2020/08/page/2/index.html","257cf9731d63c4b453f6cf4714d8122e"],["/archives/2020/09/index.html","8d8c56a720245db33d00dea44fd043a9"],["/archives/2020/09/page/2/index.html","80da1a59db7056b50474b962d78fa49f"],["/archives/2020/10/index.html","a29d71ef9452987cbb9c76f20247e908"],["/archives/2020/10/page/2/index.html","ecb4af7954b6101ca45e917c1cdc0a22"],["/archives/2020/11/index.html","079fccf040bf4c3d2913645b5ebe4cfb"],["/archives/2020/11/page/2/index.html","94267763a872069116f1a035a02f71d4"],["/archives/2020/12/index.html","6830df92620acc957a7d404eba4681f9"],["/archives/2020/12/page/2/index.html","5969b226fcac7972d6085d487cb6aadc"],["/archives/2020/index.html","cc578dc100be1b92e6abf019e24639c7"],["/archives/2020/page/10/index.html","390c679d920fd5f5cdbd9375da1b65dc"],["/archives/2020/page/11/index.html","b74d5cf95ac4e83afec065e4be69e882"],["/archives/2020/page/12/index.html","d73a61d2043475a261dc99d1811f7367"],["/archives/2020/page/13/index.html","e57933df38bcbc3a71a2e7df7f0cb747"],["/archives/2020/page/14/index.html","4f64ad94fe0efdb1126febad4e276fae"],["/archives/2020/page/15/index.html","3a78ba384b28ee5270bf45c563b49928"],["/archives/2020/page/16/index.html","2a931a8dded90143dcc7c216af4fea7a"],["/archives/2020/page/2/index.html","186996b1ad3270a0ed40183156a0b81d"],["/archives/2020/page/3/index.html","51335c175a802dd4018a32644cdba77a"],["/archives/2020/page/4/index.html","5c5b9bb67e38b334b58efcb14ec0b91f"],["/archives/2020/page/5/index.html","9841c6c0bca5a2268aa2947d1f937168"],["/archives/2020/page/6/index.html","00126c627837c93042f6f8ad4b3ebdcd"],["/archives/2020/page/7/index.html","a59cb3e69b0d686cad09d0f743860500"],["/archives/2020/page/8/index.html","40f71da78ef571e129b019cf0f7e0b61"],["/archives/2020/page/9/index.html","6ae42c3946b9a317f964b61fee7f2bb2"],["/archives/2021/01/index.html","47f73f2677768c39f88c46270b45daa0"],["/archives/2021/02/index.html","081caf6c7607086fe49ebbb4d3cae392"],["/archives/2021/03/index.html","53b7fd067109688243a57307ee1db931"],["/archives/2021/04/index.html","bbd467686770d3c662e10978a3fe5c0b"],["/archives/2021/04/page/2/index.html","206378465ae04abf8347bd5f7a7bd827"],["/archives/2021/05/index.html","019e5d270aa8cbc3339b74fa867f38e3"],["/archives/2021/06/index.html","d12dfef02f00be4067edfe7991684750"],["/archives/2021/07/index.html","a656aa79afca564a3d39f604733ebfd5"],["/archives/2021/08/index.html","bec148d330aad73b262fd34d32c5b2b5"],["/archives/2021/09/index.html","af61f832441c93164afb7292afac011c"],["/archives/2021/10/index.html","352f08932dad31d8606409f7376c0271"],["/archives/2021/11/index.html","e70701146bdef5c759828eb6ae64c428"],["/archives/2021/12/index.html","b2b7ed81b36f7f1214395b2d06f1c17b"],["/archives/2021/index.html","2901038dc11b1c93c937b5d7ac6a1aa9"],["/archives/2021/page/2/index.html","f9d5d17cc30e0192a1fbcfed9ace3346"],["/archives/2021/page/3/index.html","d913c31d6996e715253b9553011d8afb"],["/archives/2021/page/4/index.html","6350d45469bb13eb79e46fa376972d4e"],["/archives/2021/page/5/index.html","c45545f728211912c8a9e0213fd39046"],["/archives/2021/page/6/index.html","30cc6d53655daec842a88c9d37427407"],["/archives/2022/01/index.html","21a7f27d864067229266c3e75d83df9d"],["/archives/2022/02/index.html","cb772afde1982eea600717aa999b4d21"],["/archives/2022/03/index.html","8ca5f5012c4892fe503e64ab6c4390fb"],["/archives/2022/04/index.html","1edf21665200d576e05607ba3b8b88c6"],["/archives/2022/05/index.html","17bb0b02bd0bb04d05159df3745276d7"],["/archives/2022/08/index.html","384c9fb0078d7d879b42104aa01189dc"],["/archives/2022/10/index.html","e65da710070985fb5ce841e1595d5518"],["/archives/2022/11/index.html","0aabf407c626070c6e2e0f132a360d53"],["/archives/2022/index.html","83778a8024a252ef12656f113c59442e"],["/archives/2022/page/2/index.html","4abb0cc575c627e278cfd79c8b7ed385"],["/archives/2023/04/index.html","cc8e1bd4218a949bdbbe181a2a67c543"],["/archives/2023/index.html","460653232a536b0340b34b9cb226d6a7"],["/archives/index.html","927d72cf022410add6c5adc3c2df9a69"],["/archives/page/10/index.html","6a3996429e35b80cbef0ce15108b3ac5"],["/archives/page/11/index.html","9177126f5d9580ba3ade70afc7c788ea"],["/archives/page/12/index.html","10ddb352bebb6b19081269c28d5ac7b2"],["/archives/page/13/index.html","358eb09952a8744d0ce3c7cde907f2e6"],["/archives/page/14/index.html","12289d2eefc1a13440101c46409b11db"],["/archives/page/15/index.html","ca44b2a780084563f35883aa777fe74f"],["/archives/page/16/index.html","8046a590a1da494361a01ff888e8844d"],["/archives/page/17/index.html","57ad1153c339c08ee480301d22a2bc88"],["/archives/page/18/index.html","e7041e30010f3ad798c17bb8c3c8e489"],["/archives/page/19/index.html","76e53f4a7a1c0b4cb5abecefafe7905c"],["/archives/page/2/index.html","d93f48fb19105ddb48c44d3602924f3e"],["/archives/page/20/index.html","c122d9dab0450615be7957081c9e2e17"],["/archives/page/21/index.html","ee440eba385104a792f0972f71a6bfb9"],["/archives/page/22/index.html","8e1995b4c75301d78d3edf17f59e1011"],["/archives/page/23/index.html","9c40acedf632eefbf6ff5a06bceceb2a"],["/archives/page/24/index.html","f02f760521336335778659ea2b56492f"],["/archives/page/3/index.html","4874229855b93b27b0558e751fe764a3"],["/archives/page/4/index.html","e4fedb7bcf151bfb26f47c457ef9efc0"],["/archives/page/5/index.html","d64281e46880e03386a7b138bcc25eda"],["/archives/page/6/index.html","498d27cee220c3a9c5c107c68ea45951"],["/archives/page/7/index.html","ffa7fb860659e0ac4c9a909027f1ade3"],["/archives/page/8/index.html","2c358db41efe68ff89957c4d8e2be46f"],["/archives/page/9/index.html","fc5e118c25ea421f6505166ff106c66b"],["/array/index.html","e3fdbc4b00b97ae6b084f83505837443"],["/automated-test-katalon/index.html","ee88707cda765598f0bf0eefb872fd9f"],["/automated-test-selenium/index.html","ecd77c319ee42a45442bc3f8863b0241"],["/back-to-table-query/index.html","e815bd91d3f32725a4dcf88b24a1a70a"],["/binary-search-algorithm/index.html","1f2fc6bd429b613e23405cefed3bc04c"],["/binary-sort-tree/index.html","179e374ef848b2956a524f050201fb61"],["/bionioaio/index.html","6da6194302bd443fb9008a7e7a5d540b"],["/bridge-mode/index.html","f06f061db224a1bd3fe39fcbe74dc69c"],["/builder/index.html","3fbcdd1fb07b902c60e0641b45c6868b"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","8975df4396be68ee98a1e98ce28c74a1"],["/cache/index.html","1785a23a570b2fdaa5f53be6fe850512"],["/categories/C/index.html","5889b37c79e0309a361ca24cff74defb"],["/categories/SpringMVC/index.html","de321d7a62cd367ab08ad05dd90a1673"],["/categories/categories.html","8962b49f1e62ca1be1bfa139a45e29f8"],["/categories/index.html","cded7bc3d7b763556d6e363010184729"],["/categories/linux/index.html","3a5e8e8ae65c863f37240d6403bda946"],["/categories/分布式/index.html","7e76f6c59ba0c48f5a1d518266d197de"],["/categories/分布式/page/2/index.html","9e640b463c0d27eb1a62c927a2745b5e"],["/categories/设计模式/index.html","769982ea1a02a61ead06a266dcdd53fd"],["/categories/设计模式/page/2/index.html","b7f942266c8b556fb0e727ede71297a5"],["/categories/高数/index.html","8c2e3f8e2c6d3deda18d0895499aacdc"],["/chain-of-responsibility-model/index.html","48cc367a0725bc9fd60464d058858dc6"],["/charity/index.html","dd01fc9923ec45b5b7c6dde912a0d778"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","fe09ce3882dcd0f935a9ae15dd7cae7b"],["/combination-mode/index.html","088f9673beb0a5e08eb8272c2dd0b108"],["/command-mode/index.html","adcf7b6758e1c87ea8830cf372714c63"],["/common-commands-of-unix/index.html","01de6ddbf80645e04347c8364f3e9043"],["/computer-network/index.html","a0f3eea68447235a3bd6356277c97c5d"],["/concurrency-principle/index.html","8be7a1870dbeab176a4909e43f758a70"],["/continuous/index.html","ed95db69203f003d295410914c0067ec"],["/contract/index.html","c8fe4507a515ec659ff13ff6c517c62d"],["/create/index.html","c6fc9eda6734a7970d28b3de3b8d4a1e"],["/css/main.css","8a6bd6d50e42272ab2b17bb8194976c8"],["/cycle-structure-programming/index.html","c76e6f939ddb9c8471579b8f26570422"],["/data-structures-and-algorithms/index.html","c9c2255c94f154a85f3aad00cb0d9866"],["/deb/index.html","2b31f45a33888b83c640b3e9328bfeeb"],["/decorator-mode/index.html","3d1605c2dc47800ea1896ecb31ac6eb4"],["/definite-integral/index.html","8d9a62ea753bd50540ead6651b500c89"],["/dependence-reversal-principle/index.html","9661a2e2d721a84bdbd6421b19c02638"],["/derivative/index.html","0695f8889d1045b6794abcb8786ea300"],["/design-patterns/index.html","183d7b1c6de6bc8d91a7a77516008861"],["/dic-algorithm/index.html","100b5b0356fbf938719ecb72c398809e"],["/differential-equation/index.html","9e9c4ca83794c46325e696529e9815f4"],["/differential/index.html","48c3073547243b16b7dd54159c621c9e"],["/dimits-law/index.html","805e886b53c9a22eedfa2151736fd403"],["/distributed-lock/index.html","b24c545503281b3a28079e3699760c3b"],["/docker-virtualized-container/index.html","49691b4b3ba03579af3e90d79e9da021"],["/double-integral/index.html","427ee72ac35a24f3e4fdbb9b2e41c3a3"],["/dp-array/index.html","7ed207815663aba01d4987d0ec7da0ff"],["/dynamic-array/index.html","348da5d1e492a3474792ce3f55c75d95"],["/dynamic-programming/index.html","0c9145b122538b5e3edc0a991efb955f"],["/edgeset-array/index.html","889a3c1bc90698e19162d597827e3245"],["/encoding-algorithm/index.html","911f72ff5049e115b990ab432c3e45a6"],["/eureka-service-registration-and-discovery/index.html","2b91d2396088758e7566af608d188887"],["/extreme-value-and-maximum-value/index.html","60bbd2916daf0e777de4d6c26e5923f4"],["/factory-design-pattern/index.html","6aefb9919b011bb15cbf58920e49ed10"],["/file-input-and-output/index.html","bc5243a865ae4e3e222545188413c5d4"],["/flyweight-model/index.html","4a0595963546dc8b77188cf239b883c1"],["/friends/index.html","e33c72c5298d4bc3ddab116f40695d2d"],["/function-graphing/index.html","ecd054fb8cd7134a28c5ebb06dac361f"],["/gateway-service-current-limit/index.html","34cb074c5a4db131f2e872d164f1d44f"],["/gc/index.html","9b95720dc48c01ab934f883db578f7a1"],["/generalized-integral/index.html","5e79c9b80ff8eb94792f30f18e54e58c"],["/google8102e2f35ce9e391.html","4f5af506b44a3764eb34af9186e05832"],["/gulp-compresses-static-resources/index.html","dbf6b280e37cc785f9a9dfac6addda9f"],["/hash-algorithm/index.html","6216c44eae072616a61d0412846178bd"],["/head-first-JVM(1)/index.html","7253478c5fa4f65eaaebf6429c7c687c"],["/head-first-JVM(2)/index.html","4279bacca4042f0650c1fc511ab9991b"],["/head-first-JVM(3)/index.html","3b8481a9844e3d893929f258dd798835"],["/head-first-JVM(4)/index.html","3a0dd4e7882361bf92dc328a141e82fc"],["/head-first-SpringSecurity/index.html","8b683999e8caffdb5ed32529c08fe605"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","64ef26a3deb26dd82e71e223fea09c3d"],["/heap-sort/index.html","c38f212326f44b64a210f6885fb61ae2"],["/http/index.html","bc1a1c633ff42582a3b494374ad876dd"],["/huisu-algorithm/index.html","c12e9fb6f5eaeebee1b9fe88a113ea31"],["/indefinite-integral/index.html","c6460abfec1e166b23dfc14fba5ccf8c"],["/index.html","0086948f40bf221d0203fddaf5232a0b"],["/infinitesimal-and-infinite/index.html","57e7517996375dcecc581e552f1e5513"],["/interface-isolation-principle/index.html","aa6ff7f622de8b224ab4217547f9ef70"],["/interface-test/index.html","5ba21522417541f3dbeaf68c8ac7256b"],["/intermediary-model/index.html","ceca72ecc1f7dd55eaddbdc7a6b146f1"],["/interpolation-search-algorithm/index.html","496e3925f504966263c22206e72a0915"],["/interpreter-mode/index.html","7c0e5aaae68de3f2a48457cae6a8d911"],["/introduction-to-computer-network/index.html","1f027bbc2c4b8ea70f152f5e5b176969"],["/introduction-to-operating-system/index.html","840663ae411e9b499fae2780fec85f00"],["/inversion-of-control/index.html","ed9384d7adf194b13b3f823f26d336d1"],["/io/index.html","e4f0bf315b7c666e45ccebbcd3df57e0"],["/iterator-mode/index.html","1175293e1083b4f54026fb394b40cad5"],["/j2ee/index.html","b00ee58ce7218a4194da18994ccb4f90"],["/j2se/index.html","0df68a92ec85e69dd71a2b2c30ae05af"],["/java.lang.String/index.html","fd471e657a988b66a87bfaaa7a1fee49"],["/jdbc/index.html","485c939a2cbc6f9260564b0b260da30f"],["/jdk/index.html","6fd725516755174b892eea5de99a2e20"],["/jmm-memory-model/index.html","4d07da66e3ce3f6c6f06696c6794879c"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","3322b19f3c74590ce73522bddb74adeb"],["/jvm-method-inline/index.html","b494469880f3d5442e90cf644b5fd67c"],["/jvm/index.html","4aa79ce01eb7d46dd5abe57de2cc75a1"],["/law-of-robida/index.html","dcbe4f7c0597a6c993e9d150c5f93241"],["/limit/index.html","65b7b746822cdcfd907398b3ff18c671"],["/linear-search-algorithm/index.html","fc669e50c8860be864f37121800513ba"],["/linked-forward-star/index.html","0044703c04037e8bb35f9f2591147242"],["/linked-list/index.html","b1171725a9c9db7b98046fd74c292c6c"],["/linux/index.html","de7110c797cedff3f54c42b52ba6b6a8"],["/liskov-substitution-principle/index.html","96a779539d6ee36aa80097625898a6bf"],["/lock/index.html","afb9fabe8c7a764485f233d92594f526"],["/lru-cache/index.html","a0c8cd021d893700a5dad635cb236e3c"],["/maogai/index.html","289666cf06cd4701267a7e05b35359c5"],["/memo-mode/index.html","0646d414bf4b9b20405b171ef289bc53"],["/monotonicity-and-convexity-of-functions/index.html","66dfacae145db9ab07e754cbce18d68f"],["/multi-function/index.html","0975e1cda0890b4d7940d84e69ea6e08"],["/multithreading/index.html","74d31e6e1a7d053e2eee51e9b2a7fda8"],["/mvc/index.html","bfd7f45b612328d79dc94833be08bbe8"],["/mybatis-cache/index.html","b68bab0e4f8c453c0ba17d4fa6bf90f8"],["/mybatis/index.html","ce6fe4d015ae643e668db3fa436500ac"],["/mysql-index-wrong/index.html","1e476af4c6c9411b3b5739ebb7d9b8a8"],["/mysql-struct/index.html","4ae6489a4462d2f6a8c6860a232c9155"],["/mysql/index.html","28af79db42d57eb547ef96af3a886637"],["/nacos-service-registration-and-configuration-center/index.html","df7558024d06ec84cdc81a1ae75ec2b4"],["/notes/index.html","fecafc855d239d704906d47b53840e11"],["/null/index.html","e533977c819a53e95f76bc1755d27171"],["/objectoriented/index.html","5aecdd3bbc73711bb35fe5c975e0a7bc"],["/observer-mode/index.html","b5071ed601edc26c20d15013bd693526"],["/off-heap/index.html","ba88de1805b82fe5f10f68af8ab8646f"],["/operating-system/index.html","3e1709156eb010e2b05c803b813e7311"],["/page/10/index.html","bd4363125931255720c14807e1c00c2a"],["/page/11/index.html","b5df9774cf9838e45967f3026b0eed5a"],["/page/12/index.html","917d93f335b8e0cec1ca7ec27a1ec6a8"],["/page/13/index.html","591a42f9e2eaa761cf69635e1fcafcef"],["/page/14/index.html","1c988d23e74fe0f04235ea823893fffe"],["/page/15/index.html","024780017f003d1f9c84aecb450eb6e3"],["/page/16/index.html","2327298dffbdeea1d8449efa52b4dbee"],["/page/17/index.html","a4390aa154ccfa5f10102efc2395d1cb"],["/page/18/index.html","d17590764cc6b39fa3ae6915f3eb1107"],["/page/19/index.html","7c02740bd03504529fa8a8180ecccd5e"],["/page/2/index.html","72548db6a6ae3f6946b87a3c55676ab2"],["/page/20/index.html","4238e664120364b233b8ec4f36676c46"],["/page/21/index.html","8ca4ea4861b3cd834375401c7e691c65"],["/page/22/index.html","753c3dbbb928fda1f74cfb2bf6fb92cd"],["/page/23/index.html","04c95b2e8e0c93f51fb4132d12e7827d"],["/page/24/index.html","53954c5a53a269db27969de214e8a45d"],["/page/3/index.html","954d228e0fb01dd1878a6e19177c4e85"],["/page/4/index.html","08774cfe4fdd727a8d8e345273acb603"],["/page/5/index.html","511cc165bd2664e2eabff4375bd56c51"],["/page/6/index.html","59949c185b13408d59b00a08db16c9ba"],["/page/7/index.html","c90a755d665f204644826441a8e1322d"],["/page/8/index.html","035bc1716f04022ae3f13051d35aa8ab"],["/page/9/index.html","ca03b3d6d2169da0364c8d93937deed9"],["/palindrome/index.html","b5b740b4df77b145e372e3ffb7b79e29"],["/partial-derivative/index.html","2831f7b92c0fffe5da13742141e6c366"],["/pass-by-value/index.html","1831329522334a7f59cc00713004b2d6"],["/pictrue-bed/index.html","f9fdfd956aaa2c41d106c606421f224a"],["/principle-of-opening-and-closing/index.html","acce86e3ba3bb34da7450383c6c0055f"],["/principles-of-computer-organization/index.html","c818c0caa2c0046b4a26b11288a926c0"],["/program-test/index.html","ad830a8894fafbc03561a793f8989037"],["/prototype/index.html","8540af3cdaf306be29ae3c81d882fc3c"],["/queue/index.html","98cf0f8b86c6eab96b14ab330755b427"],["/random-weight-distribution/index.html","dea3515cc0e7a80592e74b9e096d48b1"],["/realize-modular-programming-with-functions/index.html","67eba957bcac65b6f523cc26f01d8646"],["/redis/index.html","8cae831c826e12fc9a71354e0fca916f"],["/reflection/index.html","9bc4bc39be8435c699fd390b27208f15"],["/ribbon-load-balancing-service-call-degradation/index.html","2f2f80f88b5091befd1636c4bb0096a1"],["/round-dp-algorithm/index.html","fc74d5cade1183d44880a825c3024844"],["/seata-handles-distributed-transactions/index.html","5c97d9bccae2989a19def3df9f573510"],["/select-structure-programming/index.html","4676d4e59ee2dcb1b5f44532a1cc0f58"],["/sentinel-realizes-fusing-and-current-limiting/index.html","02600abc0cb94860593874cffdd9ce19"],["/sequential-programming/index.html","f766136f91d25332080e13b7a44c6017"],["/series/index.html","eb446f3a92f7f6b3f8c2542e443ce5d4"],["/service-worker.js","1399ece0ef31db3bcee855694d8b6d42"],["/single-point-login/index.html","30ceb830ab22e6167c436b209c5f3ca3"],["/single-responsibility-principle/index.html","7dacce5dffa8f030650c60d95fc4f463"],["/singleton-mode/index.html","f9fc3968c3acbbf88c6fcf62e315965c"],["/slidingWindow/index.html","5e2ffe6a09a78e5678103f7df45b2154"],["/snowflake-distributed-id-algorithm/index.html","709bf8519deeaba01daf8c11f6d377eb"],["/sparsearray/index.html","30fa0b5fd389e015f746d6e33d865c68"],["/spring-and-jwt/index.html","b2bf2016486b1e128f7030542e8fd5d1"],["/spring-architecture/index.html","dacd6dcd9afb368c445d6f52be4bfc29"],["/spring-relate/index.html","d06d08a8539fed6dc348ea1a65fdd41c"],["/spring-springmvc-mybatis-integration/index.html","c274f042a6af1c94cba502e1d4d1c532"],["/spring/index.html","c88550e939137e35a393ae5bfa7bec20"],["/springcloud-alibaba/index.html","6f412f9b260dce9832e8b681f201e4d0"],["/springcloud-bus-message/index.html","2a6232ce7fd74ba7f73a30167a3be9a5"],["/springcloud-config-distributed-configuration-center/index.html","a18f9b826e200421b691c9f80be8dcec"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","90f91d0b9757c42cceccb99bee1d742e"],["/springcloud-stream-message-driver/index.html","38d4d9e20938b3723e3a8dd483eaac93"],["/springcloud/index.html","a8f81e9a75c8b5aed407dfb29a32d125"],["/springmvc-environment-construction/index.html","226fcf4568c2d512ac242bdbc4eb5816"],["/springmvc-work-stream/index.html","be64ae26f1b82508e3e86c17511567f9"],["/sql-injection-attacks/index.html","20047d272e97d2e080728d03e5b95737"],["/stack-simulation-iteration/index.html","510c1b3695d0da75a2dbca1591bdb887"],["/stack/index.html","041a8fe087d9ed746acc6036b9141fb5"],["/state-mode/index.html","8451ca4fd2172528ef029026fbd8b51f"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","d5abf99b3f56ad04636e603c2201edc8"],["/strategy-mode/index.html","69942a1d9bd83f6d96dda51d785845ca"],["/sw-register.js","3a4c92b4d73bedfeb4139d662d2e9a51"],["/synthetic-reuse-principle/index.html","47d892bbaa5c146ef9b9321e4d1be8fd"],["/tags/C/index.html","149b7e3ac3bcd7a8a15e60056fc67883"],["/tags/C/page/2/index.html","501231ce8ce64f2877afe6ec893a225b"],["/tags/Concurrency/index.html","103d6b728fa173aaa9ce3ea5b3adbb73"],["/tags/DesignPatterns/index.html","dabc52ff16bd42d987645cbbe7b37a1c"],["/tags/DesignPatterns/page/2/index.html","8c51577b0ab6078ebb1ecd3be7feb53c"],["/tags/DesignPatterns/page/3/index.html","5e5308d714bc323de56c1c2bb39204e9"],["/tags/DistributedMicroservices/index.html","e274b427ef05b806a743ec504d44d246"],["/tags/DistributedMicroservices/page/2/index.html","f40043611c4b850d4ccfa7bb14bfc14c"],["/tags/Interview/index.html","d35946e1a2df1f43c26afa7d57cf82ab"],["/tags/Interview/page/2/index.html","ce3b74248d70b07a494781109f66b2ea"],["/tags/JVM/index.html","a6898d6ac6f0ef47feef8b28deebc27a"],["/tags/Operating-Systems/index.html","5dc9ada2e3f6bd721daf9ba3656d7d69"],["/tags/about/index.html","3de64fab8f8dbe6f0e6ad69e46a77da2"],["/tags/ad/index.html","6e408d5c1a902b0440e3c07990d8a85d"],["/tags/algorithm/index.html","9924bcdc8061737e9b82a977725ea08f"],["/tags/algorithm/page/2/index.html","21cf33a6d6f822ce0273af05c7a4ecda"],["/tags/algorithm/page/3/index.html","13979ddf7e75a39149d75de4a1e1d32a"],["/tags/algorithm/page/4/index.html","39bfadd95db1eb24d68a5fa351313463"],["/tags/bug/index.html","74c99b380116064d673579dc669893bd"],["/tags/computer/index.html","695645d932f9d6d4ff7af1e078a74912"],["/tags/data-structure/index.html","935f5e38762f2648cff960df314b4093"],["/tags/docker/index.html","df2592b88019ca70dab1f1f0a9bccbea"],["/tags/famework/index.html","e05cf57563af031a0fc629a3607d38dc"],["/tags/frame/index.html","70a58ed13435ea9c6f81990d0eee2b62"],["/tags/frame/page/2/index.html","779d8759673039f0357c25f1b38bba00"],["/tags/front/index.html","69c3fb91bb5f0251a5adc0c9735711b9"],["/tags/index.html","0e8d7a6a4b9f4fb53c6772fab69e5a86"],["/tags/interview/index.html","c0ec213f1bee00103ad42d02b91dbf01"],["/tags/io/index.html","bf8502ad6288917cebb4fd3a81af6fd1"],["/tags/java/index.html","2cb420da4e1072452e03d9d200bc00ad"],["/tags/jdk/index.html","ae139cc04f41274f2781b42ac6f2c84b"],["/tags/jvm/index.html","10b0302771c7d5619cfe3cae502100a4"],["/tags/linux/index.html","9aaa066eff6fbd21ab4a822e7067335c"],["/tags/maintain/index.html","68b2ff9d2169990e5b0c5391badb8b67"],["/tags/maogai/index.html","588082bdc476d48f5a4c34f9e2782674"],["/tags/math/index.html","d479c25716f240e547250b202e8ead21"],["/tags/math/page/2/index.html","97fdd32f260986f1ee8f8b60b118993b"],["/tags/middleware/index.html","c2718a79d4e99b1c634ee40e927af060"],["/tags/mysql/index.html","74d1d45d22e36277c9f32ff119deb328"],["/tags/network/index.html","1f12f483b0cdcc005e30ee2d41e346b5"],["/tags/project/index.html","8a0e0194b37357e1991f8c7a7222b202"],["/tags/security/index.html","bd2a53a2b89cd33d82bb8fd24bf55514"],["/tags/sql/index.html","bc92821639edc26c43cb249ba7be9707"],["/tags/test/index.html","b5013d225636ad17e3e544f51d9cb8ea"],["/tags/think/index.html","3d6e6957f088ec9411cc68228d33400f"],["/tcpip/index.html","b169b89482be0b31f72af0e341f594c8"],["/template-method/index.html","1024a93b7fb568a9ac2d1d286b59369d"],["/test-case/index.html","6b2d516b181bef8032c23261ae76c112"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","2778341521b25c79cd9e55c3aff1fff9"],["/thread/index.html","1f41ad549f9ba433323484be343b8187"],["/tj-horse-racing/index.html","3676dae75504b2ab434431064bdff47e"],["/topoSorting/index.html","6937450347460805a743e0ccb3a420f1"],["/traffic-monetizationaccess-to-google-adsense/index.html","bcc7f90055ee9a31009322548488253d"],["/txCharity/index.html","9849216ec054bd10feafbd4204cb4a5b"],["/ubuntu-set-ip/index.html","27f71616fe87e44075c26338adf25ab5"],["/undefined/index.html","ed64877d66909de37be88abd1a3b32b1"],["/use-arrays-to-process-batch-data/index.html","f56607f684d0489cb362f160c2ef20c1"],["/use-of-springmvcmodelattribute/index.html","16082e40610b0abca9b316b9e3ca1ec3"],["/users-create-data-types-themselves/index.html","6dfb214396676b65de03be3d10b072c6"],["/visitor-mode/index.html","69d8868e1916950051d19e87942d4d7e"],["/what-is-milk-and-why-is-group-wise/index.html","5eec37d3a3a87556708e8cf596740b95"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","96b4c71915a3633bd6462513a4d71c9c"],["/xss-crosssite-scripting-attack/index.html","383044ce4e7494516832ad95676407f8"]];
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
