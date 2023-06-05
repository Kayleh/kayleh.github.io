/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","e472e802c61d178c93f6ba961a05b51a"],["/404.html","68ab7ba353408ecc9ff94d5b1e15b59d"],["/404/index.html","9ebf3d5c83dae95d13f553f2826670c7"],["/7-sorting-algorithms/index.html","969fa84837af512a0ba1cdc3ddf2d849"],["/AIO-blocking-model/index.html","32973a70de78dbdc797215f9fb31ef41"],["/About-Snowflake-and-Consumption-Degradation/index.html","d7b67549cc4663ab979e477fe5bd1a45"],["/BIO-blocking-model/index.html","710185a069df33ed1deab8c86286e852"],["/Bloom-Filter/index.html","0657742fae26ee6eb148787a599ca960"],["/Boyer–Moore-majority/index.html","a74d712da374803ef962124f00d21837"],["/C-algorithm/index.html","9d3ad93a40c33049d65aec3ad8e25ec3"],["/C-programming/index.html","16cf2d9be424eb05242fddfc485ed367"],["/CAS-&-AQS/index.html","496dea7cec98d7e2eb118a1df292b1f6"],["/Comparator/index.html","f09e7112b88597464c35f4e5c7215c65"],["/Differential-array/index.html","2722ce84466f4dc4f7c5197e8d729769"],["/Download/index.html","bd2eaafea9a17752b8f4942dd1e60f2b"],["/Front-end-security/index.html","1e506d4ce1c78ab822afef44c8b6ce91"],["/Good-use-of-pointers/index.html","fecbd893479aea73ee7b9a0fc78dd406"],["/Graph-degree/index.html","e3b548e25a0010d5bcae3576c29caec4"],["/Greedy-Algorithm/index.html","0ecda71d566cfe8631e13ffbb4514ce5"],["/Head-First-Map/index.html","fd454be17429d21a6844d02c502de559"],["/Head-First-Netty/index.html","b4efca07a3571d361de74a2f439437af"],["/Head-First-Nginx/index.html","f3559140e89b5ee380a0d6c33c6d44bd"],["/Head-first-Spring/index.html","65c81ed65cad5f3dc471dd0fa1ea16c2"],["/IO-model/index.html","8f80001814d86ef440884538dd075474"],["/IO/index.html","841b7fb190ff5d33cb53e309e6c990f1"],["/Implement-a-lock-based-on-ReentrantLock/index.html","f7676df8c91f6bca2dd21499d303b21e"],["/Improve-Robustness-(1)/index.html","eadf4fb40147316e3b743bfffb966438"],["/Improve-Robustness-(2)/index.html","474814db9d35bbaaf216b2011b6b13cb"],["/Integer/index.html","565c224ef3bb731db594f3e62494dd83"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","71cc420454eba276a173b1a67a849448"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","ffd183c8f3a3633da682ec0b874f5497"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","0c7921c1b7049ab8579fc33c03273026"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","e0930684a6661968d5f48c8c4860d53b"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","89f0e57344b99325153e44f718c65372"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","e2c104ec67c64119b506658f3409c754"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","02cd9be7061b2e2152e75140bb3bac9a"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","cdb20dfb39be4f625cca192a758417d4"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","205eac80fe1a912b6df1ac77024da9d3"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","07b370f52e1926ba374b04bfb627ea49"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","21aac2f542cee2ccb43462dcf25c9a96"],["/Java-network-programming/index.html","d9a6b4cfec6ba314d0acbc721108153f"],["/Large-number-operations/index.html","b2a518f5fd94f7854483be4204cd6206"],["/MYSQL-MVCC-&-LOCK/index.html","2f3ff3d8ed054dc7aa1e8ffcdf86040c"],["/MYSQL-uuid-and-page-splitting/index.html","43d0d9e6d4acdd4fcf5664c17509aaa1"],["/Minimum-Spanning-Tree/index.html","34aca596ffe1b1c2f42c8516625a2b92"],["/NIO-blocking-model/index.html","dcda1c00e3de083a0bc955a923edb9b2"],["/Nacos：Configure-MySQL-data-source/index.html","5eb9225caedf81490d7c86de55d85274"],["/Native-method/index.html","71e86d4b43071f09cbb3f864dab0d925"],["/PriorityQueue/index.html","20a30468d128df5b3dbe14057fa97b0f"],["/Proxy/index.html","a768dd7e1f0a842b1f7809ed4004c6f0"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","67c8b4858baf7e1e3798ecd64e5a3f9d"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","887e9f0b551ee5f7b433070907f7015b"],["/Reservoir-Sampling·/index.html","f85a21d77a3de12dabf883d5b10218df"],["/SQL-injection-vulnerability/index.html","7e6ca7f56f07439ecc34d999554d1efa"],["/Sandbox-security-mechanism/index.html","3237d8968ba28b8dc6ea88d8821be975"],["/Spring-Cyclic-Ependencies/index.html","eca0a719805dfef51276b604c36ed51d"],["/SpringBoot-startup-process/index.html","cdd3814fc5267541a48dc489c242c4ac"],["/SpringSecurity/index.html","4036bf2fc3d021328a3f411c2e747687"],["/Thread_Pool/index.html","43b62bac6b3b7036def5a4d836f3ba1e"],["/Transaction-isolation-level/index.html","b8fe3e78ac83fb0604a4e7fb3107ec20"],["/Unitest-framework/index.html","335d7dc93f67bb5e76296f0b3cc9d0a1"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","9a865899409f4db7170439b12ba96506"],["/about/index.html","11e4d778dc4a14984ce1810c5c6f9add"],["/adapter-mode/index.html","24f4eaf4643f20fd8ce3af8d9ce762a3"],["/adjacency-matrix/index.html","47a865eca4d159f7e42b6ca0217dee53"],["/adjacency-table/index.html","9ed91d75245fe2b4e5ebbd313fc55b20"],["/agency-model/index.html","d039c3bfe407efd46ba38a0aaec1bb7d"],["/app-test/index.html","5d7ff62c580411ab378a88e8298be8f6"],["/appearance-mode/index.html","eae2476574d156940c4472448b4aae2c"],["/archives/2019/01/index.html","b26c24b6427b15cb9add492084f44a86"],["/archives/2019/07/index.html","c7121a23023f37e819b02241a2c48bd2"],["/archives/2019/10/index.html","9cfd4ea8e2f38ac3fd6a6d7f7153e20c"],["/archives/2019/12/index.html","f7fe0c95543b87f56ce155ed0a500f32"],["/archives/2019/index.html","86bf8a2e076eab67917e9e430c5a5821"],["/archives/2020/04/index.html","805a379c9c9af7c038efc7d0a1e925a1"],["/archives/2020/05/index.html","07da9cd1217732a141f3d3e3b8a13de5"],["/archives/2020/05/page/2/index.html","cc2f08d7399bad2751e80221d5c1688a"],["/archives/2020/06/index.html","735103c65dceb5fb17c504ed041d24cd"],["/archives/2020/06/page/2/index.html","49ab6aba92b97a6ac47697c5acaae1a4"],["/archives/2020/06/page/3/index.html","7db8fa4cba62f697f9f6b470c91c7cf1"],["/archives/2020/06/page/4/index.html","a79872f83fb921504258f66d6184bbaa"],["/archives/2020/07/index.html","659b185d8542aff8433cd040d6fdde11"],["/archives/2020/07/page/2/index.html","ec42892e9025118eedaef3608cbec10f"],["/archives/2020/07/page/3/index.html","3df09c9b5bec60e5b01dce2918bba604"],["/archives/2020/08/index.html","c28cce63c8257a0f772cd93c6f29698d"],["/archives/2020/08/page/2/index.html","6069e64675fab2cc08fff67c0523b06b"],["/archives/2020/09/index.html","46f61a43f11d23ce0e39cab0a22bec95"],["/archives/2020/09/page/2/index.html","a378a691ab90cc7114f12557dddd0f06"],["/archives/2020/10/index.html","a3d255fc714225b9021ebeee345ae3d9"],["/archives/2020/10/page/2/index.html","cbda53a34eb09b4093e18e6ef171f294"],["/archives/2020/11/index.html","ef54d4b0b8df6c9fbb97002538ca1391"],["/archives/2020/11/page/2/index.html","5558c95f4099fd5086205b819c555e59"],["/archives/2020/12/index.html","f2a48379e0634dda61bd468c30588027"],["/archives/2020/12/page/2/index.html","edc02c383391750845c393d4a534e573"],["/archives/2020/index.html","555becdec808707d61cc00aaaf6fd7fa"],["/archives/2020/page/10/index.html","4d78adcbac50088a0a9b11543045e71c"],["/archives/2020/page/11/index.html","3a0702378008d54aa6cc89f2b70edca9"],["/archives/2020/page/12/index.html","edc7d87e76e95dee9951b747b60258a9"],["/archives/2020/page/13/index.html","c248715fc60834991f14d413a6c165c0"],["/archives/2020/page/14/index.html","9324e4d38776cd9a03f06b7575467618"],["/archives/2020/page/15/index.html","a8152ab9991ad952e2513fe17d0a626b"],["/archives/2020/page/16/index.html","f388683ab19da77d7418e36a45810e05"],["/archives/2020/page/2/index.html","d40f85898b6ec4c3e5760933a81018f8"],["/archives/2020/page/3/index.html","48cefdb5ad39a129d755117814c2a8e5"],["/archives/2020/page/4/index.html","103489913164a0669e7ff0baad687d8e"],["/archives/2020/page/5/index.html","fd63995c7f3b5da1493398173eba16a4"],["/archives/2020/page/6/index.html","579d0e429f5c4772062b63766a8a4161"],["/archives/2020/page/7/index.html","87a506bd7ec9aecaaa879885b89b06b6"],["/archives/2020/page/8/index.html","e57d364d7dbde8de8bebaf00dc7a11fd"],["/archives/2020/page/9/index.html","590c9aee9025224ab3e01b72d51536b6"],["/archives/2021/01/index.html","fb57ef888227c524784df199600629f7"],["/archives/2021/02/index.html","15241b6595b4038f16d2c37d07b2d642"],["/archives/2021/03/index.html","0445ee4e4169c09ea71274cea5bdf47d"],["/archives/2021/04/index.html","cf59be4ec392036edf756344ad21b415"],["/archives/2021/04/page/2/index.html","d0e115c421abf3e5403f58c53f2c5c34"],["/archives/2021/05/index.html","593d9ae49f3f08ec47436995ca0beda6"],["/archives/2021/06/index.html","2d272f4723d452d7cbea4ad292529836"],["/archives/2021/07/index.html","4496264d6fcf9c434d97413610d2367a"],["/archives/2021/08/index.html","9dd8e0c1d7af2d209ab55c8dd60109e5"],["/archives/2021/09/index.html","cdcac0c14028f1eb57225455a7abdd9a"],["/archives/2021/10/index.html","20c8559b12b4daa6b70313b1948cdcc6"],["/archives/2021/11/index.html","7b77d939d1c63b02c0fe51a56a4bcde6"],["/archives/2021/12/index.html","7d9df48750e2abe738a594040ada2fc1"],["/archives/2021/index.html","0b4c1dd4a25e50210d278f7f3806122c"],["/archives/2021/page/2/index.html","2c13bdab26d0eae0a358be5b701d7b78"],["/archives/2021/page/3/index.html","116f39461aae9e64f62e2859c1b4cb33"],["/archives/2021/page/4/index.html","893353c1374c51678b71e3b19b528bf3"],["/archives/2021/page/5/index.html","2803141a3efd79aa4955dacca55ebeae"],["/archives/2021/page/6/index.html","6e6ee2e4ef3a84e8de6e0cb8b0aef059"],["/archives/2022/01/index.html","87a6653a3a692d5a35f8817b2e4613e8"],["/archives/2022/02/index.html","0685fa8b9799da1762752197977128b5"],["/archives/2022/03/index.html","518c9b93464f52e863477b659d0b1a0e"],["/archives/2022/04/index.html","3892a34cd6e7dc61dfa5345832c94a17"],["/archives/2022/05/index.html","c5bcba81daca83072d233b9f34f10a0f"],["/archives/2022/08/index.html","f30bccfa831c7141cf58f27c81ec3246"],["/archives/2022/10/index.html","1d0ce2c3df660ff73974a0efc970bd25"],["/archives/2022/11/index.html","03a3b6a420419879d43e5228fb01edfa"],["/archives/2022/index.html","0e8c82a82989640e9905155011b18f44"],["/archives/2022/page/2/index.html","b144e2ec5b781193fbd4a99482626306"],["/archives/2023/04/index.html","b3c9d6353e769d12c7e7c4e5435ac957"],["/archives/2023/index.html","5f69a44a39a11e75f5cb8b5c6cc4b3ed"],["/archives/index.html","b58a13a6262dfb388af5beb37fae821f"],["/archives/page/10/index.html","7a12cfbd903c3d4cfcfeae47382ab8f2"],["/archives/page/11/index.html","b44d699c80b0691a37fa5cac8e19d3f4"],["/archives/page/12/index.html","74c0074cdb03b9a07753b4992644d724"],["/archives/page/13/index.html","00a3f789a18135c1fa615f2b0e3401f8"],["/archives/page/14/index.html","738bf4ae9c1d50f32872c2d197385696"],["/archives/page/15/index.html","bd9700fbad91b36c6602446b96f452a8"],["/archives/page/16/index.html","82f673e381de7cfde3f243f7cc629153"],["/archives/page/17/index.html","ff8f1f4d46bf938abfaa515f1a789e3c"],["/archives/page/18/index.html","5fa2e76be58f5dc310b2e8d65b42cc43"],["/archives/page/19/index.html","9926549f94fe24a7c411bcc9c1a351e2"],["/archives/page/2/index.html","71542dd5784ed6994b16378bc272b7d4"],["/archives/page/20/index.html","2fa28712ead54e52fef05d47fee19ad6"],["/archives/page/21/index.html","0a892e338d6318fe6ffff654f12580da"],["/archives/page/22/index.html","f9e0eac5cda143eabb04496cb122ecd9"],["/archives/page/23/index.html","eb2f53b94c206de63455e5fd39034b4f"],["/archives/page/24/index.html","19c666ef12e01bbb41dc7630ad035a9d"],["/archives/page/3/index.html","f50ec6a83c5a1015793289375325e175"],["/archives/page/4/index.html","3f2d2e8c3e87df979fbd43f9bf6e6df5"],["/archives/page/5/index.html","d983a060d30e83d5d0f548e9113881eb"],["/archives/page/6/index.html","57b46be69894cbe77ec9239a89c0cc20"],["/archives/page/7/index.html","c8aac6d196cea1d5b48964f3b1eec128"],["/archives/page/8/index.html","c0600cd450a7ac17120105ab45f93f6e"],["/archives/page/9/index.html","b2af08e9acb2831607165c806f022687"],["/array/index.html","a7671afae2d4e964d735bfdbb4536c93"],["/automated-test-katalon/index.html","c9c7c65e0386eb19b35b96d353fb1778"],["/automated-test-selenium/index.html","8ac0ed68fe8d0ea9950bc1b558b5632e"],["/back-to-table-query/index.html","af63c79ca02aa190284a14ebc898f8cd"],["/binary-search-algorithm/index.html","d5a839e1b23e8d3218f8afacb4bf09eb"],["/binary-sort-tree/index.html","3567666e48cbddd759c8dfc9cc4ca712"],["/bionioaio/index.html","508207c91d4e06155bbdd2840043ad43"],["/bridge-mode/index.html","807c3a1e8b2f3db6e231cb881afebdac"],["/builder/index.html","58460e10759ebfdb1ce1f3229acf8da3"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","6d93620d9145edeb44125aebb86ea753"],["/cache/index.html","da2c5cb8eb9c56e7c55e1bbb7b2651e2"],["/categories/C/index.html","98be0862a23efc53883dd2258559f3a2"],["/categories/SpringMVC/index.html","58cfe6ad0def0dee9d91188b6f96b7be"],["/categories/categories.html","31d98316465207b7b591b3650d6d3ed5"],["/categories/index.html","78e83bfce28020d5a552a081ca645083"],["/categories/linux/index.html","aa3811d49d90de08959efacf55b92b1c"],["/categories/分布式/index.html","e255b907eeb9cae270fd16d2914aa918"],["/categories/分布式/page/2/index.html","58427515af5edcbd2094b396b45daa90"],["/categories/设计模式/index.html","7876488bd25b6292d83ce3c5f04c16b5"],["/categories/设计模式/page/2/index.html","500b50dc383530ee6a0203f86eea7f87"],["/categories/高数/index.html","309f8671aa8ab6f3ec5294c35ef685fb"],["/chain-of-responsibility-model/index.html","a3528673b5fe57583b15aab2a9e0bf0a"],["/charity/index.html","947ff2200a0f8dbffea5e1a9914ad8f9"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","46fa1cfc13344f8ed61a45cb5a0df29f"],["/combination-mode/index.html","88147efa0d27220241ecab552c94de9e"],["/command-mode/index.html","ae653669f4301015da5da4d47062517d"],["/common-commands-of-unix/index.html","287f4c22c8cc6af340b1377a8f2ca427"],["/computer-network/index.html","8ec74ae1711a659799747f97b84806dc"],["/concurrency-principle/index.html","c0106cc9f37cb772d833fa944a7ea5aa"],["/continuous/index.html","f84d3ce276bd562d941a0847b244b93c"],["/contract/index.html","59a2a6331635358a8686ef97839bf5df"],["/create/index.html","6792226fadb0a6ebef81fc666aac4d5f"],["/css/main.css","8a6bd6d50e42272ab2b17bb8194976c8"],["/cycle-structure-programming/index.html","cb25b19cd9c4da2d302b8c1bed3daa3a"],["/data-structures-and-algorithms/index.html","a24539c774591d3719ffef9a8e5f164d"],["/deb/index.html","501e34e504bad2b6be98f16ab2e53a42"],["/decorator-mode/index.html","ad7317303a1a676ea4e23e55070de80e"],["/definite-integral/index.html","c6944c3e21c5343a41c2c7f566dacf60"],["/dependence-reversal-principle/index.html","af20fb8d8811cf224ea83f3efd02fe87"],["/derivative/index.html","213baa799494588d363ee92253109aea"],["/design-patterns/index.html","140d2aea9ea216eafe646911402e6e20"],["/dic-algorithm/index.html","199ed30222bcc816f39ed64c0fe9fe55"],["/differential-equation/index.html","db6a76fc768df4121732f82d8f5393d3"],["/differential/index.html","d1d4d0d3b44e866c4c38bf0ccb7b7909"],["/dimits-law/index.html","ca1137ed5d17af4895a91f21995ab37c"],["/distributed-lock/index.html","c1bad8d214ec6fbfe464db01622fa0ab"],["/docker-virtualized-container/index.html","5f39011e1ff5deefa217c8ae6602bdd0"],["/double-integral/index.html","785fb73f21397b83f2ee1a147041e883"],["/dp-array/index.html","0a56bc3f6c0152c6910778e610999bf9"],["/dynamic-array/index.html","b74bbb219085929a9d37747505f77307"],["/dynamic-programming/index.html","ecd7e0976442acc5b77807f9b44b6427"],["/edgeset-array/index.html","013ad686c0faa5fdcc4fc5fb2b5ec166"],["/encoding-algorithm/index.html","f09478619d48a701ac7fd439ecd550bd"],["/eureka-service-registration-and-discovery/index.html","aea11e9b40f89cbec5c9adbd3137f357"],["/extreme-value-and-maximum-value/index.html","2f855d298a1ef29e95bfe99ae4dc323d"],["/factory-design-pattern/index.html","199fbdd1556791d5a6d04e1d5e014eb7"],["/file-input-and-output/index.html","93e389a1f2e454855d45373db188bdbc"],["/flyweight-model/index.html","4882c713b2cc207f6fb878ef89e928f9"],["/friends/index.html","78b12708a1b5490c0e33b43091d9e946"],["/function-graphing/index.html","b261866d619466b6af2e9191d1d426ab"],["/gateway-service-current-limit/index.html","a82dffea723afc4f38be0cd706866b2a"],["/gc/index.html","715d211d9132ea6d62a09733a0bb1b8d"],["/generalized-integral/index.html","4a54541f94a13230105549ae056b7da4"],["/google8102e2f35ce9e391.html","5a989647035247eeee4db99512521525"],["/gulp-compresses-static-resources/index.html","d347a0cddc749a09342b9e00e6b5d933"],["/hash-algorithm/index.html","f0e824e9afd22a823e485c0d669729d8"],["/head-first-JVM(1)/index.html","17c6cd824b0c49c6e6cb09067de4b0d6"],["/head-first-JVM(2)/index.html","7016e17e78f8f5f7ebb823893ca575e0"],["/head-first-JVM(3)/index.html","60e52150ce7d0d2d4662f48e5e6bfc72"],["/head-first-JVM(4)/index.html","29e089371591bf36aa0da1b838509862"],["/head-first-SpringSecurity/index.html","579137bb38130bf4f3a58cd547e4bd22"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","d612215d85754dd1631b7bce689d4039"],["/heap-sort/index.html","583d728e456703c1dfb0377655c20764"],["/http/index.html","83d924e0770323443739760ad69f2981"],["/huisu-algorithm/index.html","a71eb8f0f78086cb4166f0bf22aae560"],["/indefinite-integral/index.html","38a242dd6c6b1ca43c0db8587fc4d879"],["/index.html","41b9e2818ce783a94e30189ce9fe4b47"],["/infinitesimal-and-infinite/index.html","11912a6f7cbf1c4181fa1e99bf0e171e"],["/interface-isolation-principle/index.html","3652d2c894df14f690276d8f82766be2"],["/interface-test/index.html","8ecf40a678e720041e87629ce73adf4b"],["/intermediary-model/index.html","8bc54a464a44a4271381612767221427"],["/interpolation-search-algorithm/index.html","c036e12daa1c941947f8cd5606c0f96d"],["/interpreter-mode/index.html","2e089a5ae0643559de68601e0e8eb2ed"],["/introduction-to-computer-network/index.html","5d3efbee76c60aab442a0285ddec1997"],["/introduction-to-operating-system/index.html","79dfd294b90e4822e975461529dc34d7"],["/inversion-of-control/index.html","4d02311305715b7952e1ec8689e78a21"],["/io/index.html","9704fa61c04b1154dff1045f9207c972"],["/iterator-mode/index.html","e0d0edb1a21ab569d05ef2ad2bcaf61f"],["/j2ee/index.html","15f9b4edb3983701cf090d83c7a36e37"],["/j2se/index.html","bf6c03cc02a2ad65d535c7250f57c9be"],["/java.lang.String/index.html","a5417381a877202e0eec075721f8fb05"],["/jdbc/index.html","7ebb4d749e89491acc792a8391a22f6b"],["/jdk/index.html","b5c7183f3f2395ab4d4a89bd4a4c42f9"],["/jmm-memory-model/index.html","9404a3edf33ba0469f6f26c5061c2b81"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","5aa6248794dc1548aa3cbd17f2621174"],["/jvm-method-inline/index.html","1aee45e1155be7d942cccc2ab764505f"],["/jvm/index.html","38cf52de183706ba4af1728a6a189f76"],["/law-of-robida/index.html","e6d60e36169d7ee0ebde002fa115b8dc"],["/limit/index.html","7c4316726f1fdb06475cc4d5927dfd85"],["/linear-search-algorithm/index.html","f13b7f5394b3561d1e92f3e129bee39f"],["/linked-forward-star/index.html","3417842010ce27d0cbf2cdd51f2f0418"],["/linked-list/index.html","1b5d2e442dbe524a7e9a3f00b8c03b28"],["/linux/index.html","16194c68844a04571af594cf729ad005"],["/liskov-substitution-principle/index.html","aee06c8f004cf499f9b246a402dfb780"],["/lock/index.html","585e76cb4af3ab1f1fda746004aa316c"],["/lru-cache/index.html","8cbaa4577d4644fcfcc532592b59ec84"],["/maogai/index.html","d96487a49feb7aaf0d2eddab1b16c7a2"],["/memo-mode/index.html","5541338188660f26a02c3e0dc4c823fd"],["/monotonicity-and-convexity-of-functions/index.html","9e50c917e09380404c5855d3c7e85157"],["/multi-function/index.html","668fb1152718bc3d4d1be27885280c3c"],["/multithreading/index.html","97e26342c5c1f3dd41f79a87b6ac245f"],["/mvc/index.html","da211d1f4f93170c1283f685cd3cb22f"],["/mybatis-cache/index.html","4f80e82a38e7e6306ce03a588a18a01d"],["/mybatis/index.html","c43aa6b600ddab026ab9153df345b205"],["/mysql-index-wrong/index.html","d945750b90de0d0d846393949d827d05"],["/mysql-struct/index.html","197d04238ea3354979eb6fcf5d4a57a2"],["/mysql/index.html","17a12b33af5a2a567c177f05dfc5d7bf"],["/nacos-service-registration-and-configuration-center/index.html","43e7b89e90d5e2c66b29fa6b644848b2"],["/notes/index.html","1bc9002e54fcfd1152317c2929ef95de"],["/null/index.html","227cd9741da66308047faf71d4db5ea6"],["/objectoriented/index.html","81c308b3af05d5594ec14164de108e83"],["/observer-mode/index.html","d4524de683385735d3750ed01c573e05"],["/off-heap/index.html","3f124f1cda6213ba6ed1e3cc0b0bc864"],["/operating-system/index.html","755b149b6af393a4b460e012b4e061ed"],["/page/10/index.html","7b40001d15675609235754279d2eace3"],["/page/11/index.html","9528b1bf6bfa27b0659133df4f21569b"],["/page/12/index.html","4965acf0e8963f03bfab16e7d5c2dccf"],["/page/13/index.html","5a7b43b948988f48171438a9833e4e53"],["/page/14/index.html","fba5ae21617b8c4de351ceabbdd7b6f4"],["/page/15/index.html","9a9c15256fffc79b77e1db8e0ef1c275"],["/page/16/index.html","08c829205b18a42495f2ac3d7bbdfd4d"],["/page/17/index.html","04b646082fbe3328b09dc522a15b104c"],["/page/18/index.html","5ae6c055826c24a829d9eaa52fff2f89"],["/page/19/index.html","2e15329d30db34a76ee8037cfad43adc"],["/page/2/index.html","d2302a9b1f1e916602b82b28a13698bf"],["/page/20/index.html","4acf30ee449378910a78ad61017ab570"],["/page/21/index.html","c4b95f2b915a22bf00ca79ad48f21017"],["/page/22/index.html","3fc45964d1a5e89e81d094bcc61fc6aa"],["/page/23/index.html","1612401fb9b5625630b33e3fa8e71c10"],["/page/24/index.html","025c1a4798996e11096db6bd0f1e4c6c"],["/page/3/index.html","cbd3ee863d192d80a3c2ca116e3b7684"],["/page/4/index.html","46a02ba187d26b7db35366e42109dada"],["/page/5/index.html","f243d1416fd28dbd386c2150e1e92d2e"],["/page/6/index.html","ba5b583d11a46c80d2275ae12bb7b823"],["/page/7/index.html","12a5d81ce7ea920909c993659d31ff3d"],["/page/8/index.html","9cc446ca93d3e6da87f572df81e3dcc2"],["/page/9/index.html","81682fa2d3850a2faf9b64770db3c7e7"],["/palindrome/index.html","61b114af3442d25846bd80d445d9bbce"],["/partial-derivative/index.html","238a6f71e75e5373b17f22f74c5ef500"],["/pass-by-value/index.html","bc1c4f7b1fef36f871bd7951639c98c9"],["/pictrue-bed/index.html","927275322af9252efa2f228a73564dec"],["/principle-of-opening-and-closing/index.html","b786982911e13106041b24310a827827"],["/principles-of-computer-organization/index.html","8fcf650c787476543430d89a67b43a05"],["/program-test/index.html","7a2def06b63ebd1593fbeceeea88d1fb"],["/prototype/index.html","164ec50ffe847d5d452b4008839a5634"],["/queue/index.html","0b765192ffc44d0a7f95295114cb8d9c"],["/random-weight-distribution/index.html","2accf5d396ac5921a26003a26a4fcce8"],["/realize-modular-programming-with-functions/index.html","edf07dda8c16509c09d3fb1e03f53e30"],["/redis/index.html","13d997e86d27b26091677038e37b5552"],["/reflection/index.html","a7df2132308f1d5d84a503fd2425b6b5"],["/ribbon-load-balancing-service-call-degradation/index.html","a0b31f4e0c0e4ed087ae95ab5511f6b2"],["/round-dp-algorithm/index.html","f4aacffaca5bbd0b3eafe02c9e524d4c"],["/seata-handles-distributed-transactions/index.html","b2246dcefbd4635bd8fdd9883c5c8a77"],["/select-structure-programming/index.html","fd70fd01d2c9bcc4ee4c0454ce8b783b"],["/sentinel-realizes-fusing-and-current-limiting/index.html","dfe32a5ff3dbbcf11ec22425aa51831a"],["/sequential-programming/index.html","0eb43d94c74231710d7f888fdd4843bf"],["/series/index.html","ff3512f0937482b5db8f26ac3eb1efa6"],["/service-worker.js","1bb6c082f254e6ff53b8ec4bee728239"],["/single-point-login/index.html","c4cc545e696f6d9ab1ec452f43bdcdc4"],["/single-responsibility-principle/index.html","1101e54a1cc51756ea337de5d09d9c08"],["/singleton-mode/index.html","407a54a91e14f6b5385147b08ec0b431"],["/slidingWindow/index.html","99dbc636a7900a2419e2d7320f0c6625"],["/snowflake-distributed-id-algorithm/index.html","6f93594553f715d6dd24d56ea9177aa8"],["/sparsearray/index.html","3947480c55cdd2e49e5dbe61ebedcb22"],["/spring-and-jwt/index.html","f3164fededb676aaf472e34c4592c16a"],["/spring-architecture/index.html","4417524393de5d9ffb0d6f669474815a"],["/spring-relate/index.html","27b52327f8df2a5646d4c37e14b82ce9"],["/spring-springmvc-mybatis-integration/index.html","f59971957987751ce2f1b3650ff37646"],["/spring/index.html","47fb84cde1b71d1fa711ba2cb08d5c39"],["/springcloud-alibaba/index.html","9ba7ee46961506118a6f3645d2cab54b"],["/springcloud-bus-message/index.html","2644dc8b1682d0c9d06213b02bcf212c"],["/springcloud-config-distributed-configuration-center/index.html","f8db190a0bb3412d4807e53a2d1dae05"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","31bd13825c3bdd83350a2fe8b9d45df2"],["/springcloud-stream-message-driver/index.html","6f69dc90be32af1287d089a648db3915"],["/springcloud/index.html","ab606a66b8a8a46b164c27d57ad4f21f"],["/springmvc-environment-construction/index.html","54913b9dac2312f76d7d0ebb11c5d325"],["/springmvc-work-stream/index.html","ace124bd4b0196f9344cad5c604b4eb0"],["/sql-injection-attacks/index.html","65e881f5d6439ae18fcf3b576c05e78b"],["/stack-simulation-iteration/index.html","91f7e29a8ff7254c3035dd1748dd19b7"],["/stack/index.html","15be36e8604bfed8d56883e98bb80a09"],["/state-mode/index.html","4bd133a691183875348754b6766d7902"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","dd391b6f222e966af7f1621064d3c354"],["/strategy-mode/index.html","e6526a972fa43dfd38d5341bc4c28e6c"],["/sw-register.js","083d17ed2b37e5b0bf1ab6b607c16fb6"],["/synthetic-reuse-principle/index.html","0fb5cd0d2fb2d3965d17b9cea5afb0a3"],["/tags/C/index.html","8ada3fb75c27c29eddc96454e105b1c1"],["/tags/C/page/2/index.html","340ab2beaa7a3cc63881d9ddfee2dfb1"],["/tags/Concurrency/index.html","b464d5ceab6d687180a63a9d68d66e93"],["/tags/DesignPatterns/index.html","3c9a2fd9b7693ed8a4e48e8b7637c774"],["/tags/DesignPatterns/page/2/index.html","19677b17960d3dc165e7ffbffc3ea593"],["/tags/DesignPatterns/page/3/index.html","9d9a87116b54654d3d2131655bb3c6b1"],["/tags/DistributedMicroservices/index.html","326e4b2ca8963b717b3aa61a6945b2f1"],["/tags/DistributedMicroservices/page/2/index.html","fc16884b0f0a6dbffea07ece5b4e54be"],["/tags/Interview/index.html","1110cedeae734b81a1387d154ac8c1fa"],["/tags/Interview/page/2/index.html","86ad31ee14f478243ae60c76b1142f45"],["/tags/JVM/index.html","566e87f8ad6867cc7066b9d9d4232eb4"],["/tags/Operating-Systems/index.html","fcfc393809065c38248af475fe0b61e7"],["/tags/about/index.html","fb7cdc8f14d2fcd2b13fdec0ea58d747"],["/tags/ad/index.html","a2184770c55d8887a6c1d8197c5b5183"],["/tags/algorithm/index.html","78c0a3948b067a664093b208d7ffe1eb"],["/tags/algorithm/page/2/index.html","9ba7252495605779ad71638944e07952"],["/tags/algorithm/page/3/index.html","915024f360eac8a11ed3e83923c6fb21"],["/tags/algorithm/page/4/index.html","ced75a620dd605e6863f1de0b380fa9b"],["/tags/bug/index.html","27f2a80a693f741de34442b9f3b502fd"],["/tags/computer/index.html","eafd292fc9a5030ea87831018809ae92"],["/tags/data-structure/index.html","cec7dad76fbef77a02175d354f3c843c"],["/tags/docker/index.html","fe061c8f0c24647b10cd44d9db3ff963"],["/tags/famework/index.html","14cb0de90e50b882c2c118d871862917"],["/tags/frame/index.html","4e2c3be7ba54f430b096724265634c71"],["/tags/frame/page/2/index.html","0f2dd50fb961be509e1dc63484efdd06"],["/tags/front/index.html","87b3385cd29d2be8b33e9134eea3891a"],["/tags/index.html","0d9d6dcf677f8d71f268675d2fd7a046"],["/tags/interview/index.html","e7e9ce769562c29edfb68eba2577f413"],["/tags/io/index.html","d0410fd0876aba7e073ea6415e468de3"],["/tags/java/index.html","044a5a9d14f1d90d1a2df7aa01b9574c"],["/tags/jdk/index.html","9dd51177d03113f2e686ad52a367cbd2"],["/tags/jvm/index.html","6eb8bdc3123590a446c35e81415b0e72"],["/tags/linux/index.html","521e545ed861b00806a68812869e70f5"],["/tags/maintain/index.html","020f36ccba21d81422ae93a6d5d35553"],["/tags/maogai/index.html","677e519ade2f8aefbc49ded22631f256"],["/tags/math/index.html","e535433d2cc260a669ffce4dd5ab1bdd"],["/tags/math/page/2/index.html","09b1024f8896c9f0b48443880cdb1e22"],["/tags/middleware/index.html","544954d2b94af7f2a8ef8c12d754e848"],["/tags/mysql/index.html","e8f23944db0bc22d8944fa9ea7d2c6e4"],["/tags/network/index.html","f122e31ab4bd169d4b249c09d44caf06"],["/tags/project/index.html","19005af60e4178e287a65fc3db49f0e5"],["/tags/security/index.html","e04a8f37af701899b1e0a5ab52eff41d"],["/tags/sql/index.html","e690bf64f7bc3da02d686d9673d25310"],["/tags/test/index.html","1bec3599bbbf4ea5f08cfb32566c3db9"],["/tags/think/index.html","dde15449c832b27cc09c37a9359ac4b4"],["/tcpip/index.html","5de810ada18fce19194cabef8a41a6a6"],["/template-method/index.html","6d98b5ebc98f754469e6876c8c58b3db"],["/test-case/index.html","520ea3b44699f886482080cef0421be2"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","d3a08dabbc44bf6ab4d3649638943e58"],["/thread/index.html","ef6909f683040a0cba7df5f1ef507c08"],["/tj-horse-racing/index.html","ec2c7079e4d1275209998c57f25a3805"],["/topoSorting/index.html","f385b8bb8edf505463cbd59c3c5dd815"],["/traffic-monetizationaccess-to-google-adsense/index.html","ba2d3c1440a58745fc2f4a1a78b54a2f"],["/txCharity/index.html","c19ab84ffe105600a16e6b17e50e84ba"],["/ubuntu-set-ip/index.html","6c469b3747cef9e939177c7e90bcdbd6"],["/undefined/index.html","708b5e174f55794c94191acd02971212"],["/use-arrays-to-process-batch-data/index.html","e6e012cf3c575130e05be2598fdff158"],["/use-of-springmvcmodelattribute/index.html","537a068db10665de4d167a942159c4d1"],["/users-create-data-types-themselves/index.html","7eb555020baf45d8dbbfa7f4aee4f613"],["/visitor-mode/index.html","243a58f1bcc9c37378d1122ab4ca08bd"],["/what-is-milk-and-why-is-group-wise/index.html","acf73dfbc3b8ff5edeb24e2cd1c936c2"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","b6cd921749ae1264ae30b03483e89f28"],["/xss-crosssite-scripting-attack/index.html","af90c838e46ee6a5ff04b0ff44094a31"]];
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
