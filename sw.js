/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","4340809c3169094b6098c38819623095"],["/404.html","bb4b6f6ec9170954b9dfdab90e331bb9"],["/404/index.html","b329be76bba2d37422100abb00aeff6c"],["/7-sorting-algorithms/index.html","01db7e1425d7341a56ead5822d3df6fc"],["/AIO-blocking-model/index.html","087589313d4cc6261c656c5479d2893b"],["/About-Snowflake-and-Consumption-Degradation/index.html","d061fda59b2293c3d310e93c0a883632"],["/BIO-blocking-model/index.html","dc25a1b31059b8dfd2ed607e3993e9a2"],["/Bloom-Filter/index.html","86338001a4dc07a8f20cd6b4e2ae0463"],["/Boyer–Moore-majority/index.html","b787acc0c7d93f976d8ecde735ccc7a2"],["/C-algorithm/index.html","b9bcd31534133dc6c1f20fbb5fba451e"],["/C-programming/index.html","5dd1e70b0a6eaa51979e5f9b2d1c528a"],["/CAS-&-AQS/index.html","c22ea6f5fccd6d22a8ec57c14b281409"],["/Comparator/index.html","03a360be590e084fbfc03241988c5abb"],["/Differential-array/index.html","68a4d387a1ef67986d5bd5f733be5547"],["/Download/index.html","a883d7007cd52b0e4ff2c2a4c8f0f7a6"],["/Front-end-security/index.html","3285ef0aac53930c4965a2dc1478c80f"],["/Good-use-of-pointers/index.html","78c367c958fcc6006e308c43e851c61f"],["/Graph-degree/index.html","0ba170ca65eac1df3711baffaf920c3d"],["/Greedy-Algorithm/index.html","d5b6865272d5f6ff3bf3e398871feca9"],["/Head-First-Map/index.html","9b7226f92f517d23b210b1ad1910558c"],["/Head-First-Netty/index.html","a6d94453a9722bf831752104a769f79c"],["/Head-First-Nginx/index.html","257a6dd8c9bc99fb2f77ba401bbc7955"],["/Head-first-Spring/index.html","7dca85d82380ba3a1763fc0748eb3d5d"],["/IO-model/index.html","a79c002e7ffa06aa295abfd8ec0e703e"],["/IO/index.html","39396d3f2d50d69d6886235582b629a9"],["/Implement-a-lock-based-on-ReentrantLock/index.html","c9744bbb70a6f05c4464f2defd1e6bb0"],["/Improve-Robustness-(1)/index.html","0b870428b24aa9226579ddc5f12a982a"],["/Improve-Robustness-(2)/index.html","1f937f44de40484e3c34cf90245a3cbf"],["/Integer/index.html","23d87ea966aa4301e7fb21ce9916c5b0"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","412fe26835889bff9ac02f57750dd161"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","409e75c596d7e942e5d8a3e9eeeaf67f"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","cfac133c551544a9c298887b036544c4"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","7a36a5390553dab0e935929e11c7a107"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","d8f6cdff7d8c65a1fba7bd18a15bb902"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","0c1386c436a860e02b744fae320dd506"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","917ebc6956a9caa650e072dd30d88d54"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","d3895f56d57172bfffc40f1a6dca5ba5"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","bf2343af1e4ef98cec9a44e1c67a382a"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","ca9a9e61c83eb9524708185ee922e493"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","e61bd954691880627af247374959b899"],["/Java-network-programming/index.html","5a3301988c0a76a56e8a98320a7050bc"],["/Large-number-operations/index.html","1b014aba1123b97ee45cd17172eb4385"],["/MYSQL-MVCC-&-LOCK/index.html","f9336285cbc78d5bc2937d9a1898bd6b"],["/MYSQL-uuid-and-page-splitting/index.html","a5abd0e101f8ffcbdcce40d3c7b43646"],["/Minimum-Spanning-Tree/index.html","7eb70f97e2236ac172cea0387a1b1b0a"],["/NIO-blocking-model/index.html","92afadad7624b3edc6d9f8b2172d4792"],["/Nacos：Configure-MySQL-data-source/index.html","dec88221d7cd5a4c390c44c0c982686f"],["/Native-method/index.html","88a66d94d9d351a7fc9abf82a7c9f243"],["/PriorityQueue/index.html","51db6842e00e4a512adc958a903bfe45"],["/Proxy/index.html","8d54dbe93eea53e8f909a40928e2beb8"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","ec425991a7356142b3cf76c00a3aaf92"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","118080a8f208107d5aa9ae9a73cb8597"],["/Reservoir-Sampling·/index.html","37fa295564e77e8a07b950e620788b6f"],["/SQL-injection-vulnerability/index.html","440a793ddfce2d011a64cfa1f225e7ff"],["/Sandbox-security-mechanism/index.html","c2fccb537bd46dd8f8dff500a7fa7293"],["/Spring-Cyclic-Ependencies/index.html","403f8d977df559bc56d437c3309b20ee"],["/SpringBoot-startup-process/index.html","cf8592697a388468c542c34706d22fc3"],["/SpringSecurity/index.html","dedf787ecec18777465304349d8afcd5"],["/Thread_Pool/index.html","9def214cbcd24f03eff9689dbbdcae03"],["/Transaction-isolation-level/index.html","747a7c55c9ec16bf6075894b596e160e"],["/Unitest-framework/index.html","430ddc682c0da30d879ecd84eba41144"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","e7544f48161c705ad4526f69bbb4bbd0"],["/about/index.html","b5df6125002d2bc04afa4702e65d3169"],["/adapter-mode/index.html","ca10ee39d6b0e965fe6e2058970d2947"],["/adjacency-matrix/index.html","033287fb3c087f23b1272d5a9c3811d8"],["/adjacency-table/index.html","0016a678aabd7ccdae35fc2d4a0d63e1"],["/agency-model/index.html","d4894ebe8b38194414cf77ce09286472"],["/app-test/index.html","54ffae3f9b9c157a2899739a67365c0c"],["/appearance-mode/index.html","c021ea52ca02b17417f4697630da290f"],["/archives/2019/01/index.html","d25fc48d8843dd4d52709087660adbb3"],["/archives/2019/07/index.html","1e3caa19204c34bb44cefb3c7a527e8c"],["/archives/2019/10/index.html","5251a60f2d64e1d797a971e5a0c77d42"],["/archives/2019/12/index.html","8cd00f92a203e0d55ef94dab0c7bf901"],["/archives/2019/index.html","84b1d251f14a713d429d6cd0b358b7a0"],["/archives/2020/04/index.html","d25454d2cb6781bc12510fc91d2f250e"],["/archives/2020/05/index.html","d25f792640db569121f8d1eac3acd12a"],["/archives/2020/05/page/2/index.html","2d5597aa65a7e41e6e842956c932aa6d"],["/archives/2020/06/index.html","2824eae3bb6f106f477b648bc747b684"],["/archives/2020/06/page/2/index.html","6bbf92c9c026063672ac7b50ec7b541d"],["/archives/2020/06/page/3/index.html","bf9f149866971d7f7b636469c37964f9"],["/archives/2020/06/page/4/index.html","f55508c70e5a98217a04a6a2aac2c26c"],["/archives/2020/07/index.html","deebb25d647a0ea449bb18d801bcfd34"],["/archives/2020/07/page/2/index.html","a452dc75f8ec45b56d0f49b74605d302"],["/archives/2020/07/page/3/index.html","cf037e015c7af0289209c53a79929e11"],["/archives/2020/08/index.html","4183cde78e912b79e5bcedff2cc1ea5c"],["/archives/2020/08/page/2/index.html","d459683da686f06a26e610661581a7db"],["/archives/2020/09/index.html","d55f246982b70741feaae92b9333f18c"],["/archives/2020/09/page/2/index.html","b2b257deb2e4ddfca382fbe15e9d2304"],["/archives/2020/10/index.html","13997c57d39dc076014b7af9ed92efc1"],["/archives/2020/10/page/2/index.html","ada978a79556b6838d2374ce417b961c"],["/archives/2020/11/index.html","af49ed3327c8977c5bfc44336103e979"],["/archives/2020/11/page/2/index.html","09b6757b0251a68b077b992624724281"],["/archives/2020/12/index.html","6cce851d4bef4a49700ea497959a5375"],["/archives/2020/12/page/2/index.html","03143fd996b7b7186293761d46c05af4"],["/archives/2020/index.html","99ffb748c85024dfc71bf0c9b1ca245f"],["/archives/2020/page/10/index.html","98fd478cd1cd2065929255c52423bf5d"],["/archives/2020/page/11/index.html","2143b8826a90a5dfffd9780b1c179fd7"],["/archives/2020/page/12/index.html","5d4f0081365b6a2b67e2020a4f67c57c"],["/archives/2020/page/13/index.html","9f6c3c552b4ea1de29fa78d0ba8b67fb"],["/archives/2020/page/14/index.html","487d2bd4ad3d2555d7e71b2e7dec2542"],["/archives/2020/page/15/index.html","887728157e1ca0c31f5c4b6d7fcd41ef"],["/archives/2020/page/16/index.html","4d291987df2d8bfe1b8728a66223ce32"],["/archives/2020/page/2/index.html","7f8248589a2aaee9e65a3c1d3c3010ec"],["/archives/2020/page/3/index.html","79e070b7a6210d264a9b852e362fc145"],["/archives/2020/page/4/index.html","1a973ff216d8d1b6fc33091fa4d682f8"],["/archives/2020/page/5/index.html","f6e6cb0ecb26a9ecc8cb7a8356fff5d1"],["/archives/2020/page/6/index.html","f5684ce565b9079a81bc1f3210df220a"],["/archives/2020/page/7/index.html","7322ee0c8bee18ac5befdec030808c5e"],["/archives/2020/page/8/index.html","540a14edb9520dfd185c81c89be99740"],["/archives/2020/page/9/index.html","84f7954e08ef7616152982171aefb3bb"],["/archives/2021/01/index.html","034a4c3d873e0d4b21370cf54227e09f"],["/archives/2021/02/index.html","28618d666688354b9bdea00e23d2fd0a"],["/archives/2021/03/index.html","e0eabc9a5c1fa3e22160224fd32121e4"],["/archives/2021/04/index.html","8f103f7a07b0b2b31d32ee988d04852d"],["/archives/2021/04/page/2/index.html","907da338b206457fb704729852e61978"],["/archives/2021/05/index.html","19de4d11cd3e064355b71a66968afeb0"],["/archives/2021/06/index.html","f7ed21cf4b0042fcdac91cf395a14a43"],["/archives/2021/07/index.html","d365769cfe7b240fb391268fe2a7f707"],["/archives/2021/08/index.html","a036efffb3e2d1677688c25515c1be78"],["/archives/2021/09/index.html","a0b4aeb7a11d2fbb0f6e2f93b6d9584f"],["/archives/2021/10/index.html","5f55b39a7e05bdf7882aef4f7558a07d"],["/archives/2021/11/index.html","fb4725b534f61c250896cb8210373d76"],["/archives/2021/12/index.html","f0939e6c682b700496315e526e9728d5"],["/archives/2021/index.html","e4a9dae9d4aa102d0eec645ff56c9783"],["/archives/2021/page/2/index.html","055b3df789df821e60422a560ccba8d0"],["/archives/2021/page/3/index.html","f74644996594cb2539005435c4191f03"],["/archives/2021/page/4/index.html","bbb55cb4b641b0a69c18c18f944f20eb"],["/archives/2021/page/5/index.html","afec8594c375486a4679cdf12a183b2c"],["/archives/2021/page/6/index.html","852494081fb6c40f14fea1f22afabc3b"],["/archives/2022/01/index.html","9376e9d40c47c0f79810d72eb83ff497"],["/archives/2022/02/index.html","637e4e4dc92d2f8acc081a5992f2f6ea"],["/archives/2022/03/index.html","d4056fb3acf8e09d5f35c1fbb1b672c9"],["/archives/2022/04/index.html","6a4e2023ac423bb9c01005cb6590cdcf"],["/archives/2022/05/index.html","c125154181f9ec57a187e02329277cc1"],["/archives/2022/08/index.html","5282a11b536d09d53a6f9feed051417b"],["/archives/2022/10/index.html","155b1cf8d12d72d74dfbfb90a743b082"],["/archives/2022/11/index.html","37970a6f1412edf184d90738ed94cd6f"],["/archives/2022/index.html","d72e50cb954dce29840562dba040653f"],["/archives/2022/page/2/index.html","4cbf04f85b1c014278aefd56263b1a8a"],["/archives/2023/04/index.html","36dad31a72193d71aa3754bde6d10b18"],["/archives/2023/06/index.html","4316fa3fe2f9a9111ade7d73b0a4d9ee"],["/archives/2023/index.html","e07484a27f3dcb3f6113054524325bf6"],["/archives/index.html","2f7cbfff5b5b25c83903b609d664d59b"],["/archives/page/10/index.html","4f65abacb44df6b2f1a811a14c13226d"],["/archives/page/11/index.html","089a4af8cf4a64e0288207a256cd51a5"],["/archives/page/12/index.html","8448a12146bbf6bb2e919732304831e5"],["/archives/page/13/index.html","16d8179df7dd6e8ec92dcec6e004160e"],["/archives/page/14/index.html","dcefe538d5925c9527aacd9c75f4714b"],["/archives/page/15/index.html","e4e0202a798fba33b6392d691fd77a48"],["/archives/page/16/index.html","578da987acd87601ee031424a631e649"],["/archives/page/17/index.html","0e721be92bd4bf08f7f361f271c5f98a"],["/archives/page/18/index.html","65b8cfa316b0fc5694fcf3ac34046370"],["/archives/page/19/index.html","4e9484d7dfd0f37ac5a717a1ef3e1f4c"],["/archives/page/2/index.html","0fad101be019996d9062d684fdc107aa"],["/archives/page/20/index.html","ba14da8b969f84b4a403a699f9fc027e"],["/archives/page/21/index.html","e3e9923a3df4e954f1f17cfc09d762db"],["/archives/page/22/index.html","d24016b6d79ae1c8bbf6a1e46e31e4c2"],["/archives/page/23/index.html","cec4a3c7473e15a0948d7133ddbeabd5"],["/archives/page/24/index.html","a17f6f71e68af4037aaee1b85fc25ff7"],["/archives/page/3/index.html","693b76c230348c8476b2acb3836e85a4"],["/archives/page/4/index.html","5da44959fd0ca87666298628bb2a5ab1"],["/archives/page/5/index.html","d8c13c49b9f445cac5f61901f8a7d210"],["/archives/page/6/index.html","c6678032b5596aea1bba559d7a11920c"],["/archives/page/7/index.html","f80281b7ee4086c8d8ff60e13a99b0ee"],["/archives/page/8/index.html","43364a83838f72ed72eb5a63b8e53a98"],["/archives/page/9/index.html","f6cc7264679588f4ea609cb8137d990b"],["/array/index.html","b269e8b8fb74490d1e22f2f5c49ba6d0"],["/automated-test-katalon/index.html","218f374a41448ff4103c59e34102af0f"],["/automated-test-selenium/index.html","ce42be1d7fca4f7016a1d85601820914"],["/back-to-table-query/index.html","5b6656df14f9632b98b87a2d7a69e01a"],["/binary-search-algorithm/index.html","f0bdb46ee143b054618cfbf8ee6d7118"],["/binary-sort-tree/index.html","74c9ab6576fde1d9aebbca1151b76be4"],["/bionioaio/index.html","a0fdc2b628cc94cadda9a66949db83d4"],["/bridge-mode/index.html","39af1f5f19af47ad6fb96e20541c38e3"],["/builder/index.html","0074100d9252cb6202019daac5a68774"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","d9d2850798a600082ac82b4507eb47f7"],["/cache/index.html","17e3e3b73def47484512e14b5d5b45c7"],["/categories/C/index.html","1148774262fa09bc61dba50d52197abb"],["/categories/SpringMVC/index.html","f9dd19d28d7495fe39c7fcff7fdcfcb7"],["/categories/categories.html","e86bbf2bed2901d94eb9ed1451129f3d"],["/categories/index.html","ff9793db5a6f0440319b2adab8bd712b"],["/categories/linux/index.html","f5e50cf97af768c598b583390970de98"],["/categories/分布式/index.html","32b40843d7182f8ac9b6d3979d6911e8"],["/categories/分布式/page/2/index.html","2c091ff05bcbe1d603c106277a4fb7b2"],["/categories/设计模式/index.html","25134350ba8a475968fce42af0d7d02f"],["/categories/设计模式/page/2/index.html","0d32ad3e811aab06f403fcb60d43a572"],["/categories/高数/index.html","d7416f4e5f36826f07c164ae7b923ffb"],["/chain-of-responsibility-model/index.html","905e09203db78b5bf887f461b2e11785"],["/charity/index.html","908056dee96c7d8766e09c5531087790"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","40683307760a5587a07edc4d435198d8"],["/combination-mode/index.html","291420ace561921630cbce505db80d39"],["/command-mode/index.html","d80feaa566e887ec1b6790bfc7f8e2e9"],["/common-commands-of-unix/index.html","a17c5b4fa21b4a6c374bf44dc852e491"],["/computer-network/index.html","add3ca816129b1502f6d2f3e21ea5a96"],["/concurrency-principle/index.html","c52ebe96f4a64c399e5685d2721b4611"],["/continuous/index.html","6e58fc8c6133dcb33ad450ffad5914a7"],["/contract/index.html","ed4347cad2d6511f9ae6d6a891e4a463"],["/create/index.html","aea64f9db7baebb3673749d822c198de"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","ef83bd7cb6fe39767ccf0355daaac856"],["/data-structures-and-algorithms/index.html","01c2d0f9b4c0d261d51c35a7c1a508ec"],["/deb/index.html","470b80bf5237f9838a8a8cbe143af6f9"],["/decorator-mode/index.html","69c3d69a2edf4634eb5da8d3b2061612"],["/definite-integral/index.html","9fa54977e5735ebd78e4677190d129dc"],["/dependence-reversal-principle/index.html","f005169b0bcbe2e88ba6ad9d06983f1c"],["/derivative/index.html","a546caa1843071374f35a1f218f1a17b"],["/design-patterns/index.html","457ce6e854d7a31c7f7d4c1ea9ce54c9"],["/dic-algorithm/index.html","0ab150292b4e8380f935e0a48e1339fc"],["/differential-equation/index.html","8cb07114fb53bb7addf0e62202530554"],["/differential/index.html","3163680bcd65f403d16295bd8c850f06"],["/dimits-law/index.html","64487c73f613012fed039ee956351145"],["/distributed-lock/index.html","d397e2e3cfbc664a722c907729541500"],["/docker-virtualized-container/index.html","90a7e2743a681083d06dcf0d98d4a141"],["/double-integral/index.html","b378a115d424b95c938a143fd2397494"],["/dp-array/index.html","770e8d9fc0606719d78e69998336773a"],["/dynamic-array/index.html","1a35cb36fb22f96c1cd2d50c1a851836"],["/dynamic-programming/index.html","87dc5865a618481c2d8a416bdaf4b91e"],["/edgeset-array/index.html","51ca4440962ff876522289e415fd53aa"],["/encoding-algorithm/index.html","201745382eeccc623ea2d56240cf16e5"],["/eureka-service-registration-and-discovery/index.html","6dbec7fee58ab71980ad34654d7ab177"],["/extreme-value-and-maximum-value/index.html","027a0f7ccafe002f4ae78ca01e60a511"],["/factory-design-pattern/index.html","7aeb4360d58593b4c31e8b14a07c5e9d"],["/file-input-and-output/index.html","1ece12d1b455822d62d644876f36b3db"],["/flyweight-model/index.html","ae77f7a5056bf65219817820f8fdb42d"],["/friends/index.html","c6ccf0b006a3a9b576673bac01d51b55"],["/function-graphing/index.html","0b3c2bf2f69c5bc6e8aeecaa537b08cc"],["/gateway-service-current-limit/index.html","3258304679c7dca61498677375ee663a"],["/gc/index.html","86b7c81643769bd1a530afd009a01b96"],["/generalized-integral/index.html","80930775febc639cbf932c0218f98ff6"],["/google8102e2f35ce9e391.html","47054156e89cb3d923f6816cc0869736"],["/gulp-compresses-static-resources/index.html","918b00903ac82ab50caa638b170eb2e9"],["/hash-algorithm/index.html","ecfb067b89b7bbf21f78cb05f0a656d4"],["/head-first-JVM(1)/index.html","43b79defc0c3c650b7ae635396990001"],["/head-first-JVM(2)/index.html","34ece694e3f4d76c76ae633ab1576c73"],["/head-first-JVM(3)/index.html","16acbd09d06ad9f5eec62e490d9daed5"],["/head-first-JVM(4)/index.html","9ff02835a6665146f8129072a339e77c"],["/head-first-SpringSecurity/index.html","f179ffec4547ea9245c90439e29e610c"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","ffd55708bc9cac78e1116f0b3986a4de"],["/heap-sort/index.html","3d374bc9afb36a17f86ffc3cb29ecff2"],["/http/index.html","2fe7429176281f3edfe7793f1463e9c1"],["/huisu-algorithm/index.html","487c0c1a11f6746d77cf47d3a94a1af7"],["/indefinite-integral/index.html","f81f29a8e04675121121085ef778803e"],["/index.html","e88e60d32f685113a18690ef25e6fead"],["/infinitesimal-and-infinite/index.html","b84e9976b4bbb69861270ac4ffb10986"],["/interface-isolation-principle/index.html","416f8bbb4cc33591d9e54819a79f25fc"],["/interface-test/index.html","edd06037655ceb0fbb404b99cb1c5f01"],["/intermediary-model/index.html","7a730c9481ab56fe99171b9ab012aba6"],["/interpolation-search-algorithm/index.html","eaa6f0aa4b23ae71b1364ad1155ff246"],["/interpreter-mode/index.html","5bf6ce948cc930e83ec05404fbb03d5d"],["/introduction-to-computer-network/index.html","04b90f7e60d32fb4ae8d2e23b9145056"],["/introduction-to-operating-system/index.html","de2129af6aa57e3c071198450f97d196"],["/inversion-of-control/index.html","2b97b7844b6bb027dbd3313fffb9e76e"],["/io/index.html","30ce8295a096e44ec692a6fc39bbd33e"],["/iterator-mode/index.html","cbaaf388242f6456730d654f5856cb8e"],["/j2ee/index.html","c027c0ef35531f47ae1f2d6423716f7b"],["/j2se/index.html","bb98f9993f902e24087774c05bba461c"],["/java.lang.String/index.html","a46ff2e9f2e2ccc0c467eb21bb81e80b"],["/jdbc/index.html","2880dd5e46b80b339c608bb97e7e4c45"],["/jdk/index.html","1b460d65623b15c422aaf9cbabfa18f5"],["/jmm-memory-model/index.html","b8fbcc22e1b30f10ece8e0de23c158cd"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","85a8f61fee4f2bbd54572c545fd20ef8"],["/jvm-method-inline/index.html","8f51d8941ddf4283937f8bbc46a8ff3f"],["/jvm-tuning-practice/index.html","b4786063c0e840e5e7c2c7ca4be57ace"],["/jvm/index.html","b8534cc8ec5eef91b1c6804fe2e9633b"],["/law-of-robida/index.html","dbde36cd9ace05b9714cd3f3c977c43e"],["/limit/index.html","1ddb1068f3e73b5132871c1e7c0ba212"],["/linear-search-algorithm/index.html","6c73e3b0ee74b5a4b0b4070a50fadbfe"],["/linked-forward-star/index.html","5d9eb15ec67db39e109121697c5e11bd"],["/linked-list/index.html","8707951e8313f4d3b79b32e432c40fe5"],["/linux/index.html","354d93fa9ac0a77a9aa0db881d105338"],["/liskov-substitution-principle/index.html","e359eab2faf48b398c50ba3ac5b2af61"],["/lock/index.html","c08387dd4be5d1393f79f072b27e39aa"],["/lru-cache/index.html","cd59f87be613100b99addead2ae4d75a"],["/maogai/index.html","10e2e19f4565583d830ce8c7efe99430"],["/memo-mode/index.html","eefe768c6c52c109ba13200f8da05134"],["/monotonicity-and-convexity-of-functions/index.html","3fc7b999750f94c8c2b3ecddbaf4db86"],["/multi-function/index.html","26beaabfdcfa371270d500f336bbd0c8"],["/multithreading/index.html","04af5e118ac9fbad1267fdaea3139ef0"],["/mvc/index.html","d94180f4107993cbe07feb75afb9ee74"],["/mybatis-cache/index.html","c2f8c295bdd8c94306369b030be6e83d"],["/mybatis/index.html","d5be8024186a3f0b3c9da90249703d3f"],["/mysql-index-wrong/index.html","e2751b632890fcc10feb19d96fb9b26d"],["/mysql-struct/index.html","7d09c51d74db2123cfa2a5d7a048ceb1"],["/mysql/index.html","6ceb973ebf51e845963186e330f97ca0"],["/nacos-service-registration-and-configuration-center/index.html","89d46a25441e7ebd24fb4199d3e3fd9c"],["/notes/index.html","3675b68011d83134f64b48946d283e10"],["/null/index.html","6561ae3debf3977d3a3807cf00eb7e70"],["/objectoriented/index.html","33b4c47216be5573544a2a9d0221e6e9"],["/observer-mode/index.html","e9d4d68cbc5b17dd90e0a50ae8585350"],["/off-heap/index.html","971cdb8e6f1ee88f5019771971f6e47f"],["/operating-system/index.html","bb8952ac0a58be453ae2df0447584f65"],["/page/10/index.html","56c053d7cbfd382d3870797dc4556d97"],["/page/11/index.html","a5f3db1dbf38d4c8f8ef987b3daa82a7"],["/page/12/index.html","eb26f1f4e14163fb73bc0884a515bc76"],["/page/13/index.html","c9ebeebc8f612bf23d980e6cc2355285"],["/page/14/index.html","dcd432ecd8431a25d29dfb1564f4dc76"],["/page/15/index.html","ac83959032f5285798dc28b021b66986"],["/page/16/index.html","c8707e011c81850b252be01e7a49276f"],["/page/17/index.html","6a809b84e07386b68e46f25121dfa5de"],["/page/18/index.html","4597aed2fbd4134369b1e149e74cc6bf"],["/page/19/index.html","9bf89f39d6d84b0a23cfec9b73b3f228"],["/page/2/index.html","eb362040f0af0c29a9082b0ec7bf4f0d"],["/page/20/index.html","aa29c024e3118af9fa87554586e99773"],["/page/21/index.html","9b124400bbea7b9b3dbe21f0cffb271e"],["/page/22/index.html","ae7de716dd047e96047051be0c2dffa4"],["/page/23/index.html","843f60c25e8a784badac402052e179bd"],["/page/24/index.html","e2457db02d814f33dfbef2c234cd280a"],["/page/3/index.html","abd06261b0b00aeb893f902c35a26930"],["/page/4/index.html","0f71cb83f0349919a8bff54c7254a683"],["/page/5/index.html","c7699d710558d7ac4a98ae4fe010d450"],["/page/6/index.html","3bc7bf2143ff2a7ba4ded3d5ce6d3dc6"],["/page/7/index.html","174e697af5f486e5f349bc350466c673"],["/page/8/index.html","3d86c866af72c647c578916397058259"],["/page/9/index.html","d010db10df422e1dcac94c1d929a388d"],["/palindrome/index.html","a835f0b9750d263d081909f2c653973c"],["/partial-derivative/index.html","9a5780a14b818827af559718964514cd"],["/pass-by-value/index.html","e1442b86836b043c160cb9b4f8712779"],["/pictrue-bed/index.html","9bf6e57aa205889436d2eed4dbf67793"],["/principle-of-opening-and-closing/index.html","ea7f491f0dcfce2b603ca724663b8b84"],["/principles-of-computer-organization/index.html","ebf468df97f45847119cd218b60c7589"],["/program-test/index.html","37deb79bb4865c2d55d98d462a0798ae"],["/prototype/index.html","d87e540ba0d81fd46d7cf559d9c18d92"],["/queue/index.html","79c0a2da1491341068935760189a5b9d"],["/random-weight-distribution/index.html","ccb5ce8d8564e00be73432a165dab3c9"],["/realize-modular-programming-with-functions/index.html","02e9ed3c1056f7ec3e8fe3fe98516c83"],["/redis/index.html","0feb08bed0017daaa225014845e49fae"],["/reflection/index.html","9eeaeefc6af0a2b76c63b81aea2033ee"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","77b49d48a1e70fa34ea646b43624ddca"],["/ribbon-load-balancing-service-call-degradation/index.html","02f5dccc0464bcd46355c0ded05301aa"],["/round-dp-algorithm/index.html","4d2012be77d93a777698ece90fc0c455"],["/seata-handles-distributed-transactions/index.html","4bfdd2b021cc4c948a11d114fd48e315"],["/select-structure-programming/index.html","d23f2c9df1c70de87acb60995c513995"],["/sentinel-realizes-fusing-and-current-limiting/index.html","20cc89608145c225ddc0c3f9dfa5b508"],["/sequential-programming/index.html","eab7b5e2c4cc190358175f3c7a35218c"],["/series/index.html","98b7c92787f3e3d87312b1b0cdb46cdd"],["/service-worker.js","2432a873fe2732ce5202dc4cbdaabf24"],["/single-point-login/index.html","fb0818a5594770f90b54207a82aebf73"],["/single-responsibility-principle/index.html","3769eb9df2fc21af6b4842a610fb091e"],["/singleton-mode/index.html","4c4c31acc42459b1894c9abda38c06b5"],["/slidingWindow/index.html","f89164c1b9ef74b05e2109a5c13d044f"],["/snowflake-distributed-id-algorithm/index.html","527c1fbc473ba9d4912a4b7a1ca53b06"],["/sparsearray/index.html","acb641b6b4e87f61733f9849ce9caec1"],["/spring-and-jwt/index.html","8d9016eee3b4864e2db694a390c8b989"],["/spring-architecture/index.html","c8a4a529ecbe4170051a50f4af000493"],["/spring-relate/index.html","8bfb657adbd51ac34099976e1a3d206f"],["/spring-springmvc-mybatis-integration/index.html","8421e8dbccd9c1d45bac7b36547b340a"],["/spring/index.html","e63808a29b0d6d51fca852bbea51a7bf"],["/springcloud-alibaba/index.html","639b4eaee0c41d5002d1bbbfb8b32632"],["/springcloud-bus-message/index.html","a974c08cd026c1729c1c1cae72824733"],["/springcloud-config-distributed-configuration-center/index.html","4e91e605abca2f3c3c4fc83e6f0ceebc"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","6825c863d4d821ba1e2595a94c2c4e4c"],["/springcloud-stream-message-driver/index.html","3ae5aebf71074511c8f61900a13b9eed"],["/springcloud/index.html","d56f349221ceec92ae14990cf7733d15"],["/springmvc-environment-construction/index.html","cad5f52f7cdffea98d693415bc690293"],["/springmvc-work-stream/index.html","c94c9e81cf2ae5dd43d9ba7214c85c31"],["/sql-injection-attacks/index.html","9824240187ecac9eecb97e30087c5f01"],["/stack-simulation-iteration/index.html","ac945d926c7dff80b9bc976ab64e3ef1"],["/stack/index.html","326a7881df4ea658d9f43b428e6c93b2"],["/state-mode/index.html","e2d0a17a64bd7edb64f72f8dffe9c18e"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","1f1145433c6111a7e4e5abbabb48aa9e"],["/strategy-mode/index.html","fc1bf76a0d8df03b299c3410028b1293"],["/sw-register.js","a3505e3c2e935d658f4415e37d8b32dc"],["/synthetic-reuse-principle/index.html","3416f5d5fdccc100e6ebd4f0872350f2"],["/tags/C/index.html","3b0b8cab609858bfb6a7afe1ffb1b791"],["/tags/C/page/2/index.html","4a895618ec49638e6ec5a5710fd05d6b"],["/tags/Concurrency/index.html","dd74741b15be4fe9e31ce8bb4e8f8bd2"],["/tags/DesignPatterns/index.html","c241811ebfce5a536e5d08825fc59270"],["/tags/DesignPatterns/page/2/index.html","76e77c90de667c5fca5754f271cea1fb"],["/tags/DesignPatterns/page/3/index.html","7199705c1efed7a8127c332c6758ed28"],["/tags/DistributedMicroservices/index.html","574e51cacdf7211b4d310e45b912bced"],["/tags/DistributedMicroservices/page/2/index.html","00036adc69fd973d2a749216cf57c524"],["/tags/Interview/index.html","2c36413bd7aa58bef17f8eb8003aaea6"],["/tags/Interview/page/2/index.html","e19c0eefe824a2e8248deb4f6bc9e06b"],["/tags/JVM/index.html","0ad5db02b064b41dd57be0f148b59ab8"],["/tags/Operating-Systems/index.html","1bfe57691883f5184f83954e226f1331"],["/tags/about/index.html","a379540a65c7c3d34f67661fdbb59b99"],["/tags/ad/index.html","8c4ada4b9dd6cf79ef651f54ac90f761"],["/tags/algorithm/index.html","038b21ad3c034b97053241f89899932a"],["/tags/algorithm/page/2/index.html","9a0f4257b38e182d281f542326fde1c1"],["/tags/algorithm/page/3/index.html","57659379873d09517e1a2184357898b3"],["/tags/algorithm/page/4/index.html","f17354069e38731521f5a1bd94637cfb"],["/tags/bug/index.html","188ba8def151131bfd44f0a88d08de46"],["/tags/computer/index.html","80fbf5b46febf36444954a94aa089395"],["/tags/data-structure/index.html","a91b7fb08fc3bd320fa13c57c65ff794"],["/tags/docker/index.html","df54642c04e0173977447716064c427d"],["/tags/famework/index.html","cf75ed9884399252e928af2f7693eb41"],["/tags/frame/index.html","9cf27a492f793b14fe1cd3006e2e9d5e"],["/tags/frame/page/2/index.html","b831764e090085719d84ca716ceba62e"],["/tags/front/index.html","fa13277755fe077444c8ba6521df780b"],["/tags/index.html","49221796835ed3d380583c7bfd5862f4"],["/tags/interview/index.html","93428c3dc0d6141ab264c42f5cc6f85f"],["/tags/io/index.html","831b1cce121d157544b20ce2fed9616b"],["/tags/java/index.html","9fa614c503dbb7ba4b37caeff29c1104"],["/tags/jdk/index.html","f741efc67b1cf05898c8656194f4a5a5"],["/tags/jvm/index.html","767a50221ec4d5e607119c64e9b963cd"],["/tags/jvm/page/2/index.html","d720d71138acd03bc558e98188048838"],["/tags/linux/index.html","34d6ac1cb196cfe801a79c6624782bc3"],["/tags/maintain/index.html","d2b5eefdba23e928ea0ecde6dddd1ed7"],["/tags/maogai/index.html","9597138a23434a36b186dc806d621e07"],["/tags/math/index.html","1508c903867301c640a5993007a85f7b"],["/tags/math/page/2/index.html","9956350dd6eb2dee8a02114fcc67ee82"],["/tags/middleware/index.html","5bc5d8d40096991f8cea2cbc871a7d34"],["/tags/mysql/index.html","e48de3d08ff841b941cb17a981014319"],["/tags/network/index.html","338ab1c5d864c864023d202cff11ff36"],["/tags/project/index.html","c8f5bf76820ca62cad0a80399ec1b940"],["/tags/security/index.html","4b555908c7ba8baa41ac5699c4d95ca8"],["/tags/sql/index.html","66fe17092060219144df5466bff387c3"],["/tags/test/index.html","cb9cf35f9cb93248ac9cf4921f7224cf"],["/tags/think/index.html","a1a95b506ba1f1e58f034b99e7cd95ad"],["/tcpip/index.html","981ecbd559b0cd413fbf1e0629e892c2"],["/template-method/index.html","b59f457c6fa3d146a3dc4686087c017b"],["/test-case/index.html","95dc0b659f4b9a371d94286204c03add"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","79b68bc55715559209d32cf6bb45d69a"],["/thread/index.html","d97b499bea57e610d8ed3fe763f974cd"],["/tj-horse-racing/index.html","81413cb73dba7b477d22e8965eaeb8ba"],["/topoSorting/index.html","76e15b233c9b9e850d44b10ee6e0d9f1"],["/traffic-monetizationaccess-to-google-adsense/index.html","a9a6b27108849cf02f9f126ab0642076"],["/txCharity/index.html","2830bbae49ddf1e32c5902def4d3a536"],["/ubuntu-set-ip/index.html","38e208c599c5131bc1d3c207ea7492d2"],["/undefined/index.html","0db45696acca1cd56e05b3f4dca4d474"],["/use-arrays-to-process-batch-data/index.html","cf3f229941ef034fe5b43e01248dd20e"],["/use-of-springmvcmodelattribute/index.html","13b727ff154564fede8c0973394bf932"],["/users-create-data-types-themselves/index.html","195f84afee186da729ba1690add3926d"],["/visitor-mode/index.html","dad24cd8fa73090c5bf389e07087f36e"],["/what-is-milk-and-why-is-group-wise/index.html","80a5d05c6163452fec3bd615717e85b6"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","d37ed2c0594520dba18de6f2438d29db"],["/xss-crosssite-scripting-attack/index.html","86c4819ebc6167b09913b5491d5a57d2"]];
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
