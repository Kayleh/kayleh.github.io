/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","62f029e52ca06a49496b302b73b5cc91"],["/404.html","ce6c96c89639098b58827e4b03b30428"],["/404/index.html","f2e14e09f01df1104167ff8682e04ae2"],["/7-sorting-algorithms/index.html","4299f1410e62a84511707ee155d07c41"],["/AIO-blocking-model/index.html","6db03ee4ee41657acf830c18285182af"],["/About-Snowflake-and-Consumption-Degradation/index.html","52dea70e1a8d953c846248aad09f861c"],["/BIO-blocking-model/index.html","cebe523ab05dfcbc7b1b8c08adb4773e"],["/Bloom-Filter/index.html","71cc2e03a3be53304bf9967e7bd0d327"],["/Boyer–Moore-majority/index.html","51a9b8bef1496828ed0480a36584df53"],["/C-algorithm/index.html","0292b313c04545e5840659e594b831f8"],["/C-programming/index.html","604a2538e3efada8d9c8108b2a71275d"],["/CAS-&-AQS/index.html","cc1455ab044236742f697e41b5ba1df0"],["/Comparator/index.html","c315d52a496f043113986250f880bba0"],["/Differential-array/index.html","5b37467186e653516fcea615075b457d"],["/Download/index.html","da067a238640b76da52a6a15a225b091"],["/Front-end-security/index.html","405b067a4d7741ab4135584d8cb8b498"],["/Good-use-of-pointers/index.html","8b8b0abf4b394a6348b38dcc1cf59092"],["/Graph-degree/index.html","38aa68bcbc537c8c1c5702654b015579"],["/Greedy-Algorithm/index.html","cfe6798f21294dcd8ff3e6a43657839f"],["/Head-First-Map/index.html","1b5ed197fc1ee0baacc7602221852859"],["/Head-First-Netty/index.html","347fc701919fe31affe5b6baeda73fa4"],["/Head-First-Nginx/index.html","9755b563b605d888419e1b525dfc5ee3"],["/Head-first-Spring/index.html","00e564f4772095f6406ec7be2e38f8fe"],["/IO-model/index.html","38880d5159617409ac675e7baf2b9d9e"],["/IO/index.html","f6801ec7d5c8e49525f30e7120c5232f"],["/Implement-a-lock-based-on-ReentrantLock/index.html","01d18daf0d3ce46141de57fccbe13690"],["/Improve-Robustness-(1)/index.html","891cffb1c22ea532f53d1a04f3a7f8e1"],["/Improve-Robustness-(2)/index.html","1ee2ba3781e1203f5389870e49fbcb6d"],["/Integer/index.html","2df45988821ec51c12f2a2aa8c9363fe"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","da6e4b18a21d7a1522c78565b8d4e78a"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","e820adf6f34574ed768540842f956810"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","d986cd553fe7376585fa0204d8a20c8e"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","fd2cd75b694e9d2aa8b521d645553623"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","4e366839b213d9e4ce68790e150a8f92"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","624e714acded9305aec594804e7a21b9"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","df26d8e8e32dd122b3e585f817ae10b3"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","cd229865e57f4503cdf7f113cda2beff"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","583b61aaf24aeef63108fadfcd98aabe"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","18681add21e8aad03bb53c7b5f8eeafc"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","cd0f2a9ae7bb9d9dcda4f92e007ec052"],["/Java-network-programming/index.html","6b4edd45e06c28005b3a4db798f26ef3"],["/Large-number-operations/index.html","159be2d40ad5616401bd657f14e5f7ed"],["/MYSQL-MVCC-&-LOCK/index.html","8c8fddc6e987dea81b2262152d9c5473"],["/MYSQL-uuid-and-page-splitting/index.html","47bdd020d701fa748ac74c240520649a"],["/Minimum-Spanning-Tree/index.html","04668546da3a4f364bd1764ffdb8ce73"],["/NIO-blocking-model/index.html","eefe3e8d0219f26d91268bf28dd2d965"],["/Nacos：Configure-MySQL-data-source/index.html","65e22b3285378345c7be31c37cb7c7ae"],["/Native-method/index.html","b44b9d9ff4dd041c38546a7b24e835c5"],["/PriorityQueue/index.html","a29817530922258ee8b9164109b94aed"],["/Proxy/index.html","efa7d4323c1d105f88c2b21ed3f04e8b"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","5ffd0b2a7b53b10abb20864842542f5e"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","c4b07c6484680c4c90c05bc56c367479"],["/Reservoir-Sampling·/index.html","78777c93ef131b918d6c3d4e099e724e"],["/SQL-injection-vulnerability/index.html","17c629553f72409f268824859f1f91ef"],["/Sandbox-security-mechanism/index.html","fb620a5e656ca2fb2c93c63bd1b3a3a6"],["/Spring-Cyclic-Ependencies/index.html","2c05e43f7af6f3b414b9510bea8dba53"],["/SpringBoot-startup-process/index.html","7479cb7f22325db303ff12cea3b8af28"],["/SpringSecurity/index.html","7573032a132ab4e513bdb516beb047f8"],["/Thread_Pool/index.html","5393586542c6b45c1d3244f3b6cc5646"],["/Transaction-isolation-level/index.html","14302e40529f3428b1bc64d12f12325b"],["/Unitest-framework/index.html","e46ee9a689c9ed4d9f52e05ae27af017"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","3122738d94f5747383288b0da1768e3c"],["/about/index.html","c07322aba62919d828106589cb57e1df"],["/adapter-mode/index.html","8930316860b33557ba05937880b28949"],["/adjacency-matrix/index.html","d07da2d1b6d521c4f9528bfda0c3b77b"],["/adjacency-table/index.html","71ed427d36d143cf2d6e96fe3973654b"],["/agency-model/index.html","8e6e260dbbb4a631ad383d383c6a0fe9"],["/app-test/index.html","1f75a216691f72508adedc7cf2a6813d"],["/appearance-mode/index.html","70f039754db393ae8fe1548ced910c6e"],["/archives/2019/01/index.html","4cbc1ae7b43eb5aab643aa946b3e4c06"],["/archives/2019/07/index.html","6e53730bcfb656623ea86019044832ae"],["/archives/2019/10/index.html","0fe1849e2d7fafceba843e69572b298f"],["/archives/2019/12/index.html","c2d479e9f199a50811f530a3bbd78b34"],["/archives/2019/index.html","c9efe6ea5dd07e5ef9e3af1913920b33"],["/archives/2020/04/index.html","4ac22f6bde219cabbb5ac2d2f9c1d8cb"],["/archives/2020/05/index.html","b4018b8db2dc29eaff968bc5a1d5db26"],["/archives/2020/05/page/2/index.html","a8f772140f96360a7487c580f97fda86"],["/archives/2020/06/index.html","66ea9775c8490ebcca46a415feb56569"],["/archives/2020/06/page/2/index.html","c6b8a1c7bca8b212182d08d43c7a6abd"],["/archives/2020/06/page/3/index.html","9feed2e6ac95d0e9242264540405c5d9"],["/archives/2020/06/page/4/index.html","82b72ccbbdd63700d69a22b3fa5d3d1a"],["/archives/2020/07/index.html","38b67faf15984db872a45866b56256f3"],["/archives/2020/07/page/2/index.html","e86306d34617a7bb240744ed20566db0"],["/archives/2020/07/page/3/index.html","8912d324433b8d617036b42d76bffcaf"],["/archives/2020/08/index.html","d6b77f104bdbd7bac161630e4cae4980"],["/archives/2020/08/page/2/index.html","7b470ae35a68cd39d3f9b1ad29ef0f63"],["/archives/2020/09/index.html","a2099400a86601b24fc0ac2641bc117c"],["/archives/2020/09/page/2/index.html","086d21b7954b710d2aed4360858555c2"],["/archives/2020/10/index.html","f9143699f0bcaf164d88b34fa9016d82"],["/archives/2020/10/page/2/index.html","95270af3d9348c61161deb7a489eba8d"],["/archives/2020/11/index.html","002ace5f461205d962e0df182cbfb2a2"],["/archives/2020/11/page/2/index.html","bd14c71b84d7e8e1d638597755aaf35a"],["/archives/2020/12/index.html","0c6c308f55ba779e720d9435628c4aa4"],["/archives/2020/12/page/2/index.html","0f2cdeef61616906993740d3df36d39e"],["/archives/2020/index.html","2db706ed566ae77eadef02321bd6e191"],["/archives/2020/page/10/index.html","086c2c8ce6411d6aefb5bb92e806950b"],["/archives/2020/page/11/index.html","6cc3824c0793b7f8da1d7dd18387f681"],["/archives/2020/page/12/index.html","168ac562e03fde6601f88f1757dbcbad"],["/archives/2020/page/13/index.html","d01119372ee7b44594a666d17078d8a0"],["/archives/2020/page/14/index.html","29b69eba742c07af9f592348e9973cac"],["/archives/2020/page/15/index.html","f6a5da9b5ee44058463ce6e541c66b1e"],["/archives/2020/page/16/index.html","9815a0564adea7bd6f1e22b12e9a2869"],["/archives/2020/page/2/index.html","01d24fbf5580398f27ee5519de81b293"],["/archives/2020/page/3/index.html","61c427fa29f6add864102edc50b8fcc3"],["/archives/2020/page/4/index.html","78d82421c33e85eda9fcbc148438bbce"],["/archives/2020/page/5/index.html","5f01b04fe710ea35870af5b1fa70679c"],["/archives/2020/page/6/index.html","391faa5e72d744a7f7d9ef20dfc85a9e"],["/archives/2020/page/7/index.html","fbb28967003339977d47678ca3aa0c7b"],["/archives/2020/page/8/index.html","67fabefcbe9fe8cd5b3f24e020fac712"],["/archives/2020/page/9/index.html","12f2eab54689d1ec7ff74c88f3cbf86b"],["/archives/2021/01/index.html","8f884de8246f3bb9a40f442ce0e90000"],["/archives/2021/02/index.html","ba4c17a9346f4abe41ed7c1582dc146d"],["/archives/2021/03/index.html","ae5b6efadc53aa82cf8a050fab85d482"],["/archives/2021/04/index.html","531b786b4071dde9d0a4339f8b7b4a4c"],["/archives/2021/04/page/2/index.html","3f48f832ea07aae3790c56b17dbb2725"],["/archives/2021/05/index.html","bccff21f1381489cd450b178ac74636a"],["/archives/2021/06/index.html","0c846ec77e5232e9b937e348aa012924"],["/archives/2021/07/index.html","b51b31f686d03fe0635a1753f11f4c00"],["/archives/2021/08/index.html","dc710fa3ea7bc220ee294f4bba9607c5"],["/archives/2021/09/index.html","5a942192fef16a4a7fef54a8e6ae1781"],["/archives/2021/10/index.html","79d81f029a537a1d0ec9ce3c2fb3ce4b"],["/archives/2021/11/index.html","5de34889bd56063cec0077f5d0cbfe19"],["/archives/2021/12/index.html","0aec602061aed25b2bc6113563fb5a22"],["/archives/2021/index.html","8a897ff60bc69c3b440c76b873a2985b"],["/archives/2021/page/2/index.html","9c15db686307151ff5d8e3c5d238bd9b"],["/archives/2021/page/3/index.html","2deac9c785bbfaa58c6f2313323c9963"],["/archives/2021/page/4/index.html","13addb716ee177c3bf9f3843808257b4"],["/archives/2021/page/5/index.html","e8be5785a7fb7f6efffa3a374be93e37"],["/archives/2021/page/6/index.html","713f0591fbb80262863aa360b361444c"],["/archives/2022/01/index.html","33a86a1d0157ced2767390ccbf5b9780"],["/archives/2022/02/index.html","7a6a4a9b8384d83024fdfc59888fb1f5"],["/archives/2022/03/index.html","a3405a545c6f63916c5d53dfa863f63a"],["/archives/2022/04/index.html","7a4301feece35af84539fc36b6af77c1"],["/archives/2022/05/index.html","b56dcc8aa950f994e42da6724a696c08"],["/archives/2022/08/index.html","5a78306c7a0f332ce3023def739d54c1"],["/archives/2022/10/index.html","7d32e76d957eac73b502c82a67830630"],["/archives/2022/11/index.html","2779590a6c413dc1ca1decbc41289b25"],["/archives/2022/index.html","3e15752363606fd6f287d2b057a724a1"],["/archives/2022/page/2/index.html","3f23a19adf002934ed918e3fc14399e0"],["/archives/2023/04/index.html","a7f8b429e80fbacedcb7923d55949cf9"],["/archives/2023/06/index.html","90a12bd3257521df2b74f27d6bfffddf"],["/archives/2023/index.html","ee52b20250725ff742bdd39cde0b2512"],["/archives/index.html","27b8febbe1ae5ad2e1106aff454134d1"],["/archives/page/10/index.html","9c66b970a690521a92385b38bf0b7bb6"],["/archives/page/11/index.html","bc179a73456a87f296010c1c40ece15f"],["/archives/page/12/index.html","644125f1eb80b318c2f9c56966338b4e"],["/archives/page/13/index.html","2659afcb10d634cb1d13c666698a2422"],["/archives/page/14/index.html","2c9356832a648ca4dfaa645d0febb82f"],["/archives/page/15/index.html","a324da460774fc65d43b602507cfedb2"],["/archives/page/16/index.html","9afc6f4c22f5988c97976d8f6af6bd3a"],["/archives/page/17/index.html","a44bbf1cfb2796f394ce7fcf64d0258b"],["/archives/page/18/index.html","1bd0c4dafd196d9a1eaeab9cc5774add"],["/archives/page/19/index.html","55e1d70e95f7ba34a46bb96ffe5d2d2f"],["/archives/page/2/index.html","b4739baad29b552abb0c5ddfbbe4cda0"],["/archives/page/20/index.html","ca670973c285bb0e94f926c1e0665b4c"],["/archives/page/21/index.html","846f03f538bb918b26670e6f93f10803"],["/archives/page/22/index.html","f31e50875904e675921d9d31e30c80bf"],["/archives/page/23/index.html","535b9eca65d1913be90b458249fdaa1c"],["/archives/page/24/index.html","a4bba92fce1e88f6682eabb1d81490fb"],["/archives/page/3/index.html","3379b7480b78b26b59f9016e70b71736"],["/archives/page/4/index.html","1597029d42e23250561aca6371389495"],["/archives/page/5/index.html","bb513a0c2b8a2bb9da97a4566a01b46d"],["/archives/page/6/index.html","71e14442cb122a3a88fe35d056302fdd"],["/archives/page/7/index.html","999f4225e592097149739b2b6baf384a"],["/archives/page/8/index.html","4851629a21348e0d47cc6cf5e67ae673"],["/archives/page/9/index.html","3aa2aa9bd11799a7fe656cf7fdab0931"],["/array/index.html","ec364ec34caa84b011240a2db0361045"],["/automated-test-katalon/index.html","225bf68279c89be9d0d674c0ccc08dbd"],["/automated-test-selenium/index.html","b72be1fb8095d832068d23fe0e523a08"],["/back-to-table-query/index.html","d398d2d03a7c1b5188181627ed723504"],["/binary-search-algorithm/index.html","e8f0ce0e746bb66eaa03ccc96f697ed4"],["/binary-sort-tree/index.html","7a6e68b2e3efc83f8a61a5895875e8fc"],["/bionioaio/index.html","bddfa8a3bb81140ef8b081e9e672f098"],["/bridge-mode/index.html","9bbf798633852d26068c1564a2bb1bc3"],["/builder/index.html","383ec73be2610be8e31e88d51e7d87fa"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","d465b0005d3743e8a88c70650c4dd214"],["/cache/index.html","f5b85f1aa800035c09bfbccf500266c7"],["/categories/C/index.html","fe0117b040e50f29d7c877abc93f664a"],["/categories/SpringMVC/index.html","a229d1d4f93d897baf5c6457b4975a07"],["/categories/categories.html","544aae3cb62e4250e89d4c5f3b669a3c"],["/categories/index.html","7eb2a779651ef7fc2d709ed9d7c222d3"],["/categories/linux/index.html","bee8f7adb498ce6c18508a3c2541e7ff"],["/categories/分布式/index.html","60db499f8c9e41aa0fd13f614e06f05e"],["/categories/分布式/page/2/index.html","fec6f9080f05f30d52fdbd7e4aab146a"],["/categories/设计模式/index.html","1a024f4ae7484da715b8af5f87d9775e"],["/categories/设计模式/page/2/index.html","b68243632353aa3b2a62baaf99617b90"],["/categories/高数/index.html","efa91e6cc0e246bd3e56237d93acf606"],["/chain-of-responsibility-model/index.html","16b3c383940cbff3a95239c09ee260be"],["/charity/index.html","473ef101bec4a3863a89675833b5fa32"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","6b46be9e1306cf0dfd4b208f00d6b66d"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","cd0587dc945050f59f2cfe156c3b5db6"],["/combination-mode/index.html","48299369b7271a09d8dcb18bc815a276"],["/command-mode/index.html","284ff57a500665883327c4d3216de301"],["/common-commands-of-unix/index.html","e7e29934bee0795262380d231f582e08"],["/computer-network/index.html","33d64c0dd4f30b896e031f8df3062682"],["/concurrency-principle/index.html","9dd23f053c867d002c6ecf1996c2c275"],["/continuous/index.html","46a5c634fe48cd14fe6f6a0d829aefdc"],["/contract/index.html","d9ae0bdfd0f6c7a291573fe271f15ed4"],["/create/index.html","df04ff2d1bf4e45cc0988286c8ac992b"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","0d5004d47d6c35043fa097a8c3700dd6"],["/data-structures-and-algorithms/index.html","97082e5bd8b981eaf8d7ea202212806b"],["/deb/index.html","612c5eef72a777a9f8ed70c424695881"],["/decorator-mode/index.html","5b27a424af302630ae0a482d6f80fccb"],["/definite-integral/index.html","83d922e02f779de433493a21372dc5ad"],["/dependence-reversal-principle/index.html","332d3581c34b8a201502bee1c0371dd7"],["/derivative/index.html","754468ff2fa6ae9ce45ad05494a68c1d"],["/design-patterns/index.html","c3ad79888318e0ba6e01080911f01f13"],["/dic-algorithm/index.html","7e67bfbe56460f584607dfa13c3f307d"],["/differential-equation/index.html","64824be26e5f287e10a4619e83e373fd"],["/differential/index.html","01a2930105e695223721ba273d870bec"],["/dimits-law/index.html","dde4698c8fe2723a2348e026ddfa50f7"],["/distributed-lock/index.html","6491e73b137904197f205c1ef142879e"],["/docker-virtualized-container/index.html","af9d74d4c6f23f20e08bedb9bc12959c"],["/double-integral/index.html","656b237ed1f3a8bb964dd093c3d84a33"],["/dp-array/index.html","6c7a8520ab010bfb197e9df9fe20b1df"],["/dynamic-array/index.html","658b6a5aa660619c966ca1b313d71c28"],["/dynamic-programming/index.html","1895f440719ebf0ca37fe299f28f71d2"],["/edgeset-array/index.html","c573902a71c216d4f233b3b1861ecf0f"],["/encoding-algorithm/index.html","cc8f93208d09dc894f9658ce9466c7ee"],["/eureka-service-registration-and-discovery/index.html","d3fe9b6c529aaa7e2602b6d73a50f906"],["/extreme-value-and-maximum-value/index.html","3b4def02f2bebf0ccfa1faafc3f2afec"],["/factory-design-pattern/index.html","0f1fb1f966a7176421a1b072c7714888"],["/file-input-and-output/index.html","5506a77ca68eba739558255e5beeeb70"],["/flyweight-model/index.html","27ab43c008970fc394e322af03a6a45d"],["/friends/index.html","d66f9963c83af8fecb9a9ae1625ba558"],["/function-graphing/index.html","8fc818e971b3a6e182317c8f1b1253a7"],["/gateway-service-current-limit/index.html","cbd36260dedd7f0432d0f56d722e0f53"],["/gc/index.html","185304f7c49f21111c223148e9db5b25"],["/generalized-integral/index.html","85c21dca9f52d32998f8904c7e0ab4fa"],["/google8102e2f35ce9e391.html","ba47b910b2f1174db8a423f80d157f44"],["/gulp-compresses-static-resources/index.html","7493b898b3273ee6db00eeb5e48c2391"],["/hash-algorithm/index.html","493dc4919635f07758f7848042aafff8"],["/head-first-JVM(1)/index.html","02c25a6d9013504d93a658836fe03892"],["/head-first-JVM(2)/index.html","92358a3ae1d672a6ebc2d2f6493d8119"],["/head-first-JVM(3)/index.html","46ed7e6f51436502c70fabc73f6ce4fa"],["/head-first-JVM(4)/index.html","2aa47821d3aaefaf460fa7846ac6278b"],["/head-first-SpringSecurity/index.html","e1627a198b29f4d1feed3d0d91305635"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","33432bcbb3feb9d81939d614a67139d0"],["/heap-sort/index.html","dbfc6da9f36337c4dd9021553ddd54b8"],["/http/index.html","3ce33d5547324974d730fc49a3e39dcb"],["/huisu-algorithm/index.html","3043c499b3115bba65e7c8b063959c08"],["/indefinite-integral/index.html","f1943cefed9f42e454b4079b654b4f50"],["/index.html","0554671d191f1e2c5e20b8d61cdc0a87"],["/infinitesimal-and-infinite/index.html","aeb0aa42cbbe63553519a9db9ba76e1f"],["/interface-isolation-principle/index.html","a9cb5c757b755e38ae6560b34daba9d9"],["/interface-test/index.html","40c453b4abc83a64151519723d739ce4"],["/intermediary-model/index.html","195985580fd8e6fbb8df8a57e9253046"],["/interpolation-search-algorithm/index.html","0db6029bf6a23ae3442468bfc1b119c7"],["/interpreter-mode/index.html","686c9479a183a45c21124196fdbeafb2"],["/introduction-to-computer-network/index.html","58ff0152cc3b3354484034b39c7b03d8"],["/introduction-to-operating-system/index.html","4c4c4e467335fd4a5fb894eda76db6d5"],["/inversion-of-control/index.html","c3cbed3333123ac345bbd28cf59b9105"],["/io/index.html","7f92ddbb3b49b6c86efeb3ca20af3ad9"],["/iterator-mode/index.html","42818cba88ff1a2e9673bc11ce352150"],["/j2ee/index.html","18dc1d9b837a4f6becfd6dd56f5fc349"],["/j2se/index.html","1596ea4b19c279ee1259eaa27bb1b141"],["/java.lang.String/index.html","412f9d6d360fb363629a955d8085b6f9"],["/jdbc/index.html","eb535362e23494d50d87a171f6919689"],["/jdk/index.html","410a8dc51086a21542032da1eb944e2e"],["/jmm-memory-model/index.html","ed446b525a1612eb13a7c86f803fe5d4"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","23d855dd01c0f714ec8bd802d932dae6"],["/jvm-method-inline/index.html","c8d3fcba40ff782ba25f33cb3e7d8f9d"],["/jvm-tuning-practice/index.html","6ca062e6da82594012fcdb5da962f154"],["/jvm/index.html","88448ef1921161def51c7daddb4854f2"],["/law-of-robida/index.html","79d9a14e9aeacae76383d5adc4132e86"],["/limit/index.html","3349e34830889e7427c88d6930516868"],["/linear-search-algorithm/index.html","19d625aa1f6391a8c83135db8dcb4aea"],["/linked-forward-star/index.html","3f158d8f4ea0e44bf8ed8a3937f0ed14"],["/linked-list/index.html","f4ee32bc91238ce4c603643b703e2dfc"],["/linux/index.html","389813995a1604983a1a32bfbda3e75b"],["/liskov-substitution-principle/index.html","b7367748ad8f0a93685ea456f4888d94"],["/lock/index.html","1c72ffa747ebfdc7508e7669038f3bc2"],["/lru-cache/index.html","0dfa5cb57126c251ffca284b98703628"],["/maogai/index.html","04708bc2b8f79ac02c468c21995b349a"],["/memo-mode/index.html","be72c5b38c369e3c4e6d9773f3dc209d"],["/monotonicity-and-convexity-of-functions/index.html","bd0b2426c8891d6c0a927ad6f2fb55ea"],["/more/index.html","330c7157e238052aa62d43c6cd53b780"],["/multi-function/index.html","27aa3237eb7dfb3b08b14d0ba94d785d"],["/multithreading/index.html","e750942e93db9283d7c64ec98bdcebc4"],["/mvc/index.html","393b84e97506378dfdb881fd32bec3f3"],["/mybatis-cache/index.html","b3a848248b03aaa085c07ad027f1f44e"],["/mybatis/index.html","67388cac20369215d721fa660e2a46ee"],["/mysql-index-wrong/index.html","268ca6ee5e2e7d8b26ad069beeead2ba"],["/mysql-struct/index.html","86b849ad5273b119b63befed11bb7b2a"],["/mysql/index.html","ee8349b804bb557aede1ad7f86f8f5c9"],["/nacos-service-registration-and-configuration-center/index.html","fec579eddbc3ec7a1565bed44bd6af74"],["/notes/index.html","62731a483c247c7664d539bc6e8b0469"],["/null/index.html","ac4a5d457d76235941ddf675c7451969"],["/objectoriented/index.html","a8535cb3f77b96b42f3c8ece4459030b"],["/observer-mode/index.html","eec80c1bcaec451b27ab5be02fb24c8c"],["/off-heap/index.html","9adcba4f6bc5994bbf2165582b8422e3"],["/operating-system/index.html","52b3e1532e0b94955764fb70d22f4f9b"],["/page/10/index.html","9baf3466a41cac43a04497ed69ddae0a"],["/page/11/index.html","7a71fb73bda1a8a44746121b02db83e4"],["/page/12/index.html","b9193a8557f3cddc5b551652c8e66ccc"],["/page/13/index.html","d86da1602a74ab7573da9463843abf1c"],["/page/14/index.html","52984e00b12def0aa6a88c852a83cb60"],["/page/15/index.html","1d43384ffac74a073d681530280599b1"],["/page/16/index.html","9772ba9bc8e781901df72889cd86b381"],["/page/17/index.html","5df771980f0585d728ea6881cfc7ac87"],["/page/18/index.html","e1da8b794b0784153146a16fcb795bf9"],["/page/19/index.html","4f0dbb14240d26ea9a2b06980268b2eb"],["/page/2/index.html","778d71b893473d5ff382969b64a84590"],["/page/20/index.html","f76643e554c077cb4c9c8464b6a726b6"],["/page/21/index.html","a24758c35b1bb68db972ac9d48d83055"],["/page/22/index.html","4f1e5d7e3e0b59428efc5fe133e056ac"],["/page/23/index.html","37e46dda877f42333644755dc962804c"],["/page/24/index.html","6174289af615586d5baf6f3d42114c51"],["/page/3/index.html","0bc0f5c306b686eceaad16711feb7673"],["/page/4/index.html","0a3d879a068d0b30d112c1797e0ea2f0"],["/page/5/index.html","3228c345bb751319cf47eb2940244381"],["/page/6/index.html","e430e5500fbac009271614a7fb003bf8"],["/page/7/index.html","40e1ba8cd23ffdd01cd758af4d2792ca"],["/page/8/index.html","5026e4c7308e2dcfc44233d7315e8f2f"],["/page/9/index.html","defe90e46e2ea66f677a839ecd2b8cc3"],["/palindrome/index.html","5e42d52b3bfa715412307378e87e8ec7"],["/partial-derivative/index.html","3c7eccea70b4f9efdfcbaba5865b2497"],["/pass-by-value/index.html","b4edac6aeb1ae7705668e24935b996ee"],["/pictrue-bed/index.html","1da88ece4a610d25caf613d8b43c8833"],["/principle-of-opening-and-closing/index.html","640330dccc3bcc4902bcc39d9c2a9999"],["/principles-of-computer-organization/index.html","9fa367da277ad7a66c6f4c1fa4460e10"],["/program-test/index.html","a2a79d579f12555f3ca8ccc0350ec246"],["/prototype/index.html","090e028477ef7ad55e1fd85befbc23d6"],["/queue/index.html","af986e315025d1f4c3f6f9babad429b3"],["/random-weight-distribution/index.html","3e989453acfd1cfd4a431b8562c7e512"],["/realize-modular-programming-with-functions/index.html","c21d8707cb059a245c10f78ffa858eac"],["/redis/index.html","3a1f0928b5422a6bbd923fa16f5d1a4f"],["/reflection/index.html","334cf04069dae5a4468ceeb7920db784"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","9d73f3bbac77404ac3ba256a491b4831"],["/ribbon-load-balancing-service-call-degradation/index.html","5d0fdca27dea92b0f3d0979afac99092"],["/round-dp-algorithm/index.html","5ec19941a50a55ddd0d28ebdb5a3a301"],["/seata-handles-distributed-transactions/index.html","e04d3ef29de75cc4b2364a2281b10605"],["/select-structure-programming/index.html","2159a5d8a7fd5ec4aa4a30fdbacad6f0"],["/sentinel-realizes-fusing-and-current-limiting/index.html","c71c6c2f97f0e218427fdb36e1c60690"],["/sequential-programming/index.html","3d62770458d929b858605cfec96d4444"],["/series/index.html","8bae114409664c8e618101927d359260"],["/service-worker.js","a10b47f9a8c1a9502a39fbaa77514e60"],["/single-point-login/index.html","9e76094fe19ea29fffeaef77e05cde85"],["/single-responsibility-principle/index.html","ae37609361f1218b91e178207722e726"],["/singleton-mode/index.html","272e496019fd27347f5dcb671658aa93"],["/slidingWindow/index.html","e02f17de1b09bd056c998d7361dee8b6"],["/snowflake-distributed-id-algorithm/index.html","12421c3cdcd3fcf36c3855d62f93cd2b"],["/sparsearray/index.html","466408b1672e03a6e5eb132ec10e720c"],["/spring-and-jwt/index.html","6400fc52b63b56c821abacbc8e8e6b7a"],["/spring-architecture/index.html","47bae6dc161ed343aae93d873735cc4c"],["/spring-relate/index.html","ff5298496ac473c327220ecf4705624b"],["/spring-springmvc-mybatis-integration/index.html","40093b4af22628a5c9ed07469829cd84"],["/spring/index.html","01e0e026a3c827bc747674c665ec5643"],["/springcloud-alibaba/index.html","75953199c75c4de3956449ed09a3ee37"],["/springcloud-bus-message/index.html","c51774e7ec4076c244a7bd6bc59e40a2"],["/springcloud-config-distributed-configuration-center/index.html","4901fdca7253a5a29960825588e0e7a2"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","b467819f8aa10abedbe68ac6865913b3"],["/springcloud-stream-message-driver/index.html","162b0dda89ef95da9bf563fde7d82872"],["/springcloud/index.html","ebc9b1b39415f63c8d8b529f21074e06"],["/springmvc-environment-construction/index.html","dc47c3578fe418e175ff3a01a5dadd2e"],["/springmvc-work-stream/index.html","8c7299309905397766af0d40d65e8fe1"],["/sql-injection-attacks/index.html","0440ee0f66fbc89e6ca4cfb5555fd70d"],["/stack-simulation-iteration/index.html","260c9188a2b27947249c4a6a43668f93"],["/stack/index.html","c39a902cae572cb6a561a0bdf1333d0e"],["/state-mode/index.html","e6635361a3e06cd3d426a5b2433ca2fb"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","3b19dcbb5254ae749dcde734e8d3a726"],["/strategy-mode/index.html","3c9e74138bbbfc4723de56bc68a8e587"],["/sw-register.js","ec60a8a99de42325f138416fea9722e6"],["/synthetic-reuse-principle/index.html","5c242b4eb2047799705db1b518d18a2b"],["/tags/C/index.html","22a5b06bd9c6b150c4521dd267f8334e"],["/tags/C/page/2/index.html","06c4a7fcb7a6df1c06ae45cd0a4dc67b"],["/tags/Concurrency/index.html","264cefabfd7b5042bfd0e6e0862d1a70"],["/tags/DesignPatterns/index.html","fbf13ac440503c935fc2e1254bb0e9ed"],["/tags/DesignPatterns/page/2/index.html","194fc7690febc3c4ef8a7159c92a1b35"],["/tags/DesignPatterns/page/3/index.html","c9a2c998b9a913391ef17fd487039234"],["/tags/DistributedMicroservices/index.html","b8abca99fad17939c4e00a7d84adf798"],["/tags/DistributedMicroservices/page/2/index.html","71f1874fdd2040c1bdcdedfc98be0577"],["/tags/Interview/index.html","63c0ec68502a8956293746fc7ed6d99e"],["/tags/Interview/page/2/index.html","853a93ed780b46b8732d326b32ffa885"],["/tags/JVM/index.html","72284624dfa29ac568b6ebb287322fa7"],["/tags/Operating-Systems/index.html","54e8845fd61dc17f5a54c1100bcc93ac"],["/tags/about/index.html","7d622ef4e6fb06e3c16f07df69db91fc"],["/tags/ad/index.html","d51fb8ee8beada56b4d6ea6024b501c5"],["/tags/algorithm/index.html","19c4563787a28ba35b68402c81fef5e3"],["/tags/algorithm/page/2/index.html","75c002b9c3f65413d0247ec24f62f4b9"],["/tags/algorithm/page/3/index.html","f71f6c0f0474788decf7eea7f035e6f9"],["/tags/algorithm/page/4/index.html","1d71265f63f3d00ac3ca7248eb8ca187"],["/tags/bug/index.html","c33affbfb72902faf37b877a85374d8d"],["/tags/computer/index.html","44db8e809f1f3806d759242285407f16"],["/tags/data-structure/index.html","0f80267638e55f4d40a50b988438c732"],["/tags/docker/index.html","1b74d33be0f788d2054cccb5c79675f9"],["/tags/famework/index.html","8ad4a54dbdc0ee1f93749d57a8e41179"],["/tags/frame/index.html","c4eed03227b73ff63e8b23077f479fcd"],["/tags/frame/page/2/index.html","a264d15034c384f43e91518b00a466a0"],["/tags/front/index.html","cbfad582131e00e54a118bb255d25cb6"],["/tags/github/index.html","3b86e4b454bef542e5c3ebcf156768d8"],["/tags/index.html","2ba8dd56131f5b1c1f46d5bcac12d980"],["/tags/interview/index.html","b563440289c7c2c89541ec68c2823ff0"],["/tags/io/index.html","40369a0fccaf04eea91eebf0eb596076"],["/tags/java/index.html","1f21a06b3cc0490bb8325eefacdd5e6d"],["/tags/jdk/index.html","702825b33e0c98be8e9a1f1d4b1ecdfa"],["/tags/jvm/index.html","2604616149a4efd0d9eff42c22c3e9e1"],["/tags/jvm/page/2/index.html","1945f6b3eba789b0b4b83f65a01feb4a"],["/tags/linux/index.html","90020f74ce75d7a499965a78e7065e3f"],["/tags/maintain/index.html","221218e992042621add4bcf10984424e"],["/tags/maogai/index.html","49a2dc29c2cfaf4663375cd0bd151201"],["/tags/math/index.html","5734cf9a9111f5c34c28e625368e5b75"],["/tags/math/page/2/index.html","231ad1af5416c5509742d803bdcca7c9"],["/tags/middleware/index.html","78282f59daa3b499aeccee12d21c30a1"],["/tags/mysql/index.html","f7b205e12635fceb08d9c381752a89d7"],["/tags/network/index.html","33196d43ae8dbe464b194638eb79cbc4"],["/tags/project/index.html","922e44f14ac3435705f23faaae1a4d63"],["/tags/project/page/2/index.html","9287662118a63f45aa9b8a81a06346ba"],["/tags/security/index.html","f6e41d623306f564e0cfa473c3722a82"],["/tags/sql/index.html","3d3785ac1e597297c0f31440cb0453b7"],["/tags/test/index.html","f2455a693ea9b24ef77df6ae6902caf1"],["/tags/think/index.html","c01b1dfc0681a501ef7c69f94b1a9f0c"],["/tcpip/index.html","753fc06ce00ff58e030c488bf9a96697"],["/template-method/index.html","f908d26d45816b4fb8eb68d4afa623bd"],["/test-case/index.html","47c54cd63270aaaf0b96b1efd6c1a8b7"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","362c99943bed591be506c6f01ed0fb82"],["/thread/index.html","8b9f22aab0ef76236336d3259ef7e9da"],["/tj-horse-racing/index.html","18792d9d2e4b82c30c3aeff6a600982e"],["/topoSorting/index.html","3e95fbbcdf1bf2e52f4138862a98d390"],["/traffic-monetizationaccess-to-google-adsense/index.html","e7ed1778d218e181bdddf70715cd0fc6"],["/txCharity/index.html","809971478debb9400b0843490e9470af"],["/ubuntu-set-ip/index.html","813ed1314d40b3018739412484c9953a"],["/undefined/index.html","c54bd7841f47ae7bb4a951392f9ad133"],["/use-arrays-to-process-batch-data/index.html","d45beaff68853a8155f04e2d85eda907"],["/use-of-springmvcmodelattribute/index.html","6df1f8dc51465ba1fa3835f8fde96bf1"],["/users-create-data-types-themselves/index.html","5c24e56229eeeffebcf774ed5861aa4e"],["/visitor-mode/index.html","b4c319de7ae2ca1900b37da281589af6"],["/what-is-milk-and-why-is-group-wise/index.html","fbd15f3cded8a426a1d8d6417ad86c31"],["/wiki/index.html","b2edf64f54cf67736349230a5875f7b0"],["/wiki/tags/知识库/index.html","be87ca6f759c03114cbf0389c3467363"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","d4de7c57d6431b5176c92087573c7c7d"],["/xss-crosssite-scripting-attack/index.html","0c245e7f69e34a926281033cd0db336a"]];
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
