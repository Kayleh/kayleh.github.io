/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","a34e261241493a0d9944185729eeac46"],["/404.html","6463bb2de1c6255a44d64cfc5ce3be5e"],["/404/index.html","dc5bc8593a308b663022878a455df7fd"],["/7-sorting-algorithms/index.html","80f1e40a2deb48fcc583c24bc2e8026d"],["/AIO-blocking-model/index.html","ad207549ba45cd62c53dff7282ef7c15"],["/About-Snowflake-and-Consumption-Degradation/index.html","281107be2f869fbef712abdc1449d94c"],["/BIO-blocking-model/index.html","36f2d7d07657418b947fe7977912b634"],["/Bloom-Filter/index.html","0e04590710484324e61c3bcd6a72b853"],["/Boyer–Moore-majority/index.html","ff69a622679d5f1c54b9b8f8d96a444d"],["/C-algorithm/index.html","99de8b1ab5d85c9d8e90c3cb5c17674c"],["/C-programming/index.html","921d45571df8d10ad45a97a2d372296b"],["/CAS-&-AQS/index.html","5b490436935d9b903ca29b44804c6b7d"],["/Comparator/index.html","cf5f6b3722e4d45ef8ccb9640230b0e0"],["/Differential-array/index.html","cb31687034f45c742a42d5f245c22a23"],["/Download/index.html","7f79247994d12d7b91b80d7fd7de4b65"],["/Front-end-security/index.html","5bc4c666e157aaf9782bfbbaa1978c3f"],["/Good-use-of-pointers/index.html","9c338562f8d98aca2edcb00ba052f824"],["/Graph-degree/index.html","77743a689c4afcb21556e170df63d5f2"],["/Greedy-Algorithm/index.html","a504ff4c18556ed3d5f683fb88ab8afd"],["/Head-First-Map/index.html","f5f5ef000fa79d29d600a9fc28c341b6"],["/Head-First-Netty/index.html","7eba0f41cc88407e3dfd46540b147c79"],["/Head-First-Nginx/index.html","89dca4e4660223b8ebbaed69fe274463"],["/Head-first-Spring/index.html","ac419d140dc8f03598b695d641fc3adc"],["/IO-model/index.html","77d0e8422476c7f20f3cdcfe2940c471"],["/IO/index.html","c0a7605144010dde309c9a3187063951"],["/Implement-a-lock-based-on-ReentrantLock/index.html","8a572bb222a86d3af90adfa2a1b821d8"],["/Improve-Robustness-(1)/index.html","3b5b3bfd7196a9a38ea2d83b576f2f8a"],["/Improve-Robustness-(2)/index.html","0e59b809c426068fb2b6ff0300c203ef"],["/Integer/index.html","5f482301c5580469130011b6ea58bec5"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","1f27cef37d57fc9224f448f748c57a98"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","a523074c34ad4a4176639923992cb16f"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","bad2fb03bf22ecc9c85e38636b8172a6"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","b89e9c97a76753dd7a16ce2e153a5c5f"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","2829439b149071c3b7c0a94a9a40d888"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","7658ebb5a0bedaafa55d1ccd29bb9440"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","dc153cb8d442095ffea446f45dc4d527"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","74cb75de77523cdeebf9bed8eb38fe8b"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","4baf0e0e8b1d73fab13ae4f76739a1b9"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","a033cce9407cc57beef4889a66b320b1"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","789fe7d457f674c4dabb5c58233c527d"],["/Java-network-programming/index.html","c2c4ba23e60ef4487f138ab1e94da3d1"],["/Large-number-operations/index.html","fb80a50364781a3065ad945f5d611ede"],["/MYSQL-MVCC-&-LOCK/index.html","e7ced0aa18fac7d738964a46dd5cd493"],["/MYSQL-uuid-and-page-splitting/index.html","3df9012c55aca77a1e90beb7bc593183"],["/Minimum-Spanning-Tree/index.html","35db2983117e82056e18f6ae7e0a2d43"],["/NIO-blocking-model/index.html","1a33f48eb5ce072a0bf267e6f870f38f"],["/Nacos：Configure-MySQL-data-source/index.html","1c1a5d67dc8d2e5d58abbc17639e727e"],["/Native-method/index.html","9e3b0b0b809476d0958670f594b7112b"],["/PriorityQueue/index.html","8a4bf6c3f25deb78e01fa305dbc86f30"],["/Proxy/index.html","a10847693d5a83b9159f36306fdc3015"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","5ab703bfacd15be0972d10afe156bdcf"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","614eb971061e117a27f900a73d020640"],["/Reservoir-Sampling·/index.html","4f4dd6df2f02c23a0cff70dcc30cf289"],["/SQL-injection-vulnerability/index.html","77d4a84f00084839070089653ff1eaf6"],["/Sandbox-security-mechanism/index.html","c012ab676d1263799317d102d0e2a4df"],["/Spring-Cyclic-Ependencies/index.html","fa477b305420718126de78aed5288113"],["/SpringBoot-startup-process/index.html","f91097700c37c914e0c0e32dc9e0fad4"],["/SpringSecurity/index.html","6ae894bd796d7e1b2c532c3e6c2232be"],["/Thread_Pool/index.html","417cd24f5c2c00d8209534f2ea74c1b4"],["/Transaction-isolation-level/index.html","565e516c86ff686c5778971b935ce12d"],["/Unitest-framework/index.html","7e61200ff50024e05dd9820118a0f311"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","cf365ba9f30533375fca743b636b0e2e"],["/about/index.html","96e333807a13212c1953dcada1fca55c"],["/adapter-mode/index.html","30f1ebbb4d91be9d133103ab3525115f"],["/adjacency-matrix/index.html","5dfed6427f663dfe30d5086b2b1b941d"],["/adjacency-table/index.html","fb377e2553d5c86989a03e41dc871367"],["/agency-model/index.html","f7e30349363c8b528c06458a714aae06"],["/app-test/index.html","00c1c01f883b2b8f5157d28e350102c1"],["/appearance-mode/index.html","4fc66907e7e3661971f42db01517875c"],["/archives/2019/01/index.html","cca9ddb0396b50a89496fe4e98560617"],["/archives/2019/07/index.html","79bce4c57711c38f5a8d3378aa97773e"],["/archives/2019/10/index.html","26b2b9948dbaaf86a9e43d0357640368"],["/archives/2019/12/index.html","b03dbacff569e6967fa4a260771057dd"],["/archives/2019/index.html","1b5ae557f9eb471e7637c3917151bd0c"],["/archives/2020/04/index.html","d5c5967c146fd69b14fcf99cd72a9e7d"],["/archives/2020/05/index.html","79f03a38c5fbee230024024d73fa4cff"],["/archives/2020/05/page/2/index.html","056fb6958f75680abdb6f17985ac348f"],["/archives/2020/06/index.html","5fd60b0bb3e6e07061177359acbf9dc9"],["/archives/2020/06/page/2/index.html","eb06789708d0df70d8c1fdab9d1b69da"],["/archives/2020/06/page/3/index.html","91881cbbc5e31b8792ea7042f83dd7f6"],["/archives/2020/06/page/4/index.html","b3389cf6e14d429f1c62ee3436ea31c2"],["/archives/2020/07/index.html","e7cfaa395c65a4730c4e9db2b9dae20b"],["/archives/2020/07/page/2/index.html","bc15b3d6c371929bb761776e9293e5a8"],["/archives/2020/07/page/3/index.html","5588035c4c73fca8fbcde2c0ae6098e4"],["/archives/2020/08/index.html","206781b6fb01ae663478bcac3211c80e"],["/archives/2020/08/page/2/index.html","638ef03b1d3fb8ce62bd57f7ace7d0b2"],["/archives/2020/09/index.html","6bf1cdc3ba894f9d14a2deb0fe2e3570"],["/archives/2020/09/page/2/index.html","91445aa66a2ce9785acbf6b1d3e21041"],["/archives/2020/10/index.html","c9761789c2a831d3286375d7b1f1dc0c"],["/archives/2020/10/page/2/index.html","f2c4bcaa1138ffb45ddb4ae0b5da5c2f"],["/archives/2020/11/index.html","3ba712a3295b45a2a6542e7a29168f26"],["/archives/2020/11/page/2/index.html","7337fb45d97393a86e0153ba6701316d"],["/archives/2020/12/index.html","d597eb811d476a331fd50398137246e8"],["/archives/2020/12/page/2/index.html","5aaeed15261354b0e7194a4418a220b7"],["/archives/2020/index.html","ee29238ddf8af59d2f01e9fb8c22f921"],["/archives/2020/page/10/index.html","61cfe0ebd42db1e3407d673e02eeaa5f"],["/archives/2020/page/11/index.html","16b80e0eca3612eb37a62f7dbc6b39e1"],["/archives/2020/page/12/index.html","85743b892d35de5473ffd323b05e1437"],["/archives/2020/page/13/index.html","b0b52d0afbfbf89ce81e4858c95747ee"],["/archives/2020/page/14/index.html","9b51d6f66107f118fc3ac8b143a38c72"],["/archives/2020/page/15/index.html","63044c56d94ca86341e16e4ab40be9a2"],["/archives/2020/page/16/index.html","fa175b9725d3934be2ec6ed5cd99e268"],["/archives/2020/page/2/index.html","f8dcebdbbc8602695aaa5df421ef143b"],["/archives/2020/page/3/index.html","6a6881d30cb8756b3b1e7477518dfb8b"],["/archives/2020/page/4/index.html","563139d81c00d81db6d73406421ed306"],["/archives/2020/page/5/index.html","f559a63dfc7a10c8df5c4ac2394fe339"],["/archives/2020/page/6/index.html","4c5702255d50b04d2deb99a2be04a742"],["/archives/2020/page/7/index.html","28667ddb8a86c8f27e5d99a272c30a4e"],["/archives/2020/page/8/index.html","f95d6c519b8d59f8d6f7478c5c1edc80"],["/archives/2020/page/9/index.html","a6708722ddd1ed630b53381748fcfbe6"],["/archives/2021/01/index.html","e27022f092302700563a2e6e1729588e"],["/archives/2021/02/index.html","772cfcf2526e13c08778cf58dbf6f16c"],["/archives/2021/03/index.html","6e777bc80a66c0bc65d17da30dd7f06b"],["/archives/2021/04/index.html","d7713ec7e5501bd756c04acc4286351e"],["/archives/2021/04/page/2/index.html","8d32e66cd323a242e3033d57f942fa46"],["/archives/2021/05/index.html","42258baca2dc4b8fa2bd598eee96e993"],["/archives/2021/06/index.html","efae82f2014e0e94194831fe0ec4d1eb"],["/archives/2021/07/index.html","4f05b94b459bcc680bc27adb5de67c8d"],["/archives/2021/08/index.html","308b80d0417194906c5f8c6c6cd39171"],["/archives/2021/09/index.html","4564a31186c16efd1d1dcc56c8b44c76"],["/archives/2021/10/index.html","5ccc88c9d6186461caa6632466e7e4cb"],["/archives/2021/11/index.html","32eb14773c430755d3f757a6181915c6"],["/archives/2021/12/index.html","3c46effb44c21ad0f67f1c9e72fc906e"],["/archives/2021/index.html","bb63ad7f4a087a6f5ae5df559874ba00"],["/archives/2021/page/2/index.html","135f66cc6807d05cdfb0b6d17178185b"],["/archives/2021/page/3/index.html","50be33bd345d365db48915c54d874433"],["/archives/2021/page/4/index.html","f2432b3617b8531c5e19150a3764bf2b"],["/archives/2021/page/5/index.html","206dc6ea9cfe6733e9a7f092d970f978"],["/archives/2021/page/6/index.html","025f72dc868da5c83956349aeec72511"],["/archives/2022/01/index.html","977a3002db0011c288953918e352f379"],["/archives/2022/02/index.html","d0ea8c6535df314f67738774182da419"],["/archives/2022/03/index.html","058b5743f111ac665719b3e868a768d9"],["/archives/2022/04/index.html","6ec58993dcf6f569acc2fa4c5052858d"],["/archives/2022/05/index.html","00f34b288237c465e0ff6c901d0a1735"],["/archives/2022/08/index.html","91158ffdfbbf901a2b132e3b6126dc6f"],["/archives/2022/10/index.html","3a72f16b41d8cf3549d56fc9b70012ab"],["/archives/2022/11/index.html","352faad63b0786a40f791b0d00e82fa2"],["/archives/2022/index.html","f9aab42dd7285a9e8f0a99907c01100d"],["/archives/2022/page/2/index.html","6562c1a791cd8d9aa94237d7899ea068"],["/archives/2023/04/index.html","7013bb8d5eafe8b0ab19a2e94cd2c7fc"],["/archives/2023/index.html","c758841defe77d4deba7de3a8cc0fa3f"],["/archives/index.html","fbd6110ba55c51c2fc868d2b277c79fc"],["/archives/page/10/index.html","d9bb86d62b83acee07adc6ef7e4c8efb"],["/archives/page/11/index.html","18b9523ffabd8ba5395c672ce0c99cbe"],["/archives/page/12/index.html","31189baecea52b820665ec498c1ec887"],["/archives/page/13/index.html","6199253e54aa6a98d8be2aa021e6ecd0"],["/archives/page/14/index.html","1cd3e54a41b52c2872cb0e870b4aefa6"],["/archives/page/15/index.html","5d380eee13392736428fc82d0c2a4824"],["/archives/page/16/index.html","87c10c0e1ff09353f0b3d97f3ec458cf"],["/archives/page/17/index.html","688c1b1e9a435c157b45bd4c38b3580b"],["/archives/page/18/index.html","419d488b70bd9d67eb39179cc172204b"],["/archives/page/19/index.html","31b1af38aa5e556538fc111b854f6c8b"],["/archives/page/2/index.html","53065c2018578a19fe5de65d2f058692"],["/archives/page/20/index.html","a0c2836ad33a6a655d0f695c0689e4eb"],["/archives/page/21/index.html","1b03d56cbb0b61aed611416b05dffc50"],["/archives/page/22/index.html","b2c4ed2bc50bcd7ca7cf2e58cd1c6381"],["/archives/page/23/index.html","53c4bd61af141dc8c7911bcf4574285c"],["/archives/page/24/index.html","fc7925a5c3ffd615fea371926395f121"],["/archives/page/3/index.html","0a68eff783ac3d63c7cd282e2d60a2f0"],["/archives/page/4/index.html","48c87d570aa6e043d5f46df3cb072022"],["/archives/page/5/index.html","d13698d955bbe4bf32b17fb7f5c7f895"],["/archives/page/6/index.html","ddc7cd73c52f5ca92404ecbbebbfab84"],["/archives/page/7/index.html","a699884e9f9b545a9e8713c1b7b958fe"],["/archives/page/8/index.html","fc47aefd1cf5e036b58cecd0483b7493"],["/archives/page/9/index.html","50b481677e010de894e7ccac77414f6f"],["/array/index.html","9cc7259d35826416b1724e2c9d542f53"],["/automated-test-katalon/index.html","51a00eaa87d8f1812e7d2e694ec70df9"],["/automated-test-selenium/index.html","76dc81bd13e98b8429a34bc20273af9f"],["/back-to-table-query/index.html","8d223bd8494615f85c67858e2b41e76d"],["/binary-search-algorithm/index.html","babe5c462c02fd4118d192ddab66ff8e"],["/binary-sort-tree/index.html","2db2752032a5c66c6f473e52b1f5851d"],["/bionioaio/index.html","704a39935dcc7ef90e3e39bc312f231a"],["/bridge-mode/index.html","ad476521b65b9f712220bb3772694d26"],["/builder/index.html","f666f52ad6eed9614d6c0000630adba6"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","30d184594d2004afe9520b0129ad1101"],["/cache/index.html","4373ee15dd616ab115102215ed8c8f0b"],["/categories/C/index.html","7d4cb4ab4f08b9986392befea9821742"],["/categories/SpringMVC/index.html","d2aea0541950dcdd1c6aac6c8e60f275"],["/categories/categories.html","6d29bf241fbc57af771ac0c4de32ef21"],["/categories/index.html","b7a77bb3266fd861ff17bf2778a69cc4"],["/categories/linux/index.html","36f97d880627b4293fd98338eec6082c"],["/categories/分布式/index.html","de9fac3e2bd94c41d0e9c3c45b3a8c12"],["/categories/分布式/page/2/index.html","089a57315c5093727661dbf8b617c213"],["/categories/设计模式/index.html","0497d5aa8d8cadfe6bf4bd266b6f564d"],["/categories/设计模式/page/2/index.html","e4e9f646ee9241dbb5fdfcef3944f9c7"],["/categories/高数/index.html","7aa956dba1f6537029e1f22d3666c929"],["/chain-of-responsibility-model/index.html","9b8276cfa4f97c40d819c8c7d51fe797"],["/charity/index.html","f43f92765bf4faa3518e043172a90285"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","217e3e237a148665ccb11961d71edf44"],["/combination-mode/index.html","5b3888c514e9080212f6f4af69d336ab"],["/command-mode/index.html","7a8408824f990fe8c435e484f654cfe2"],["/common-commands-of-unix/index.html","003313e81cb7682469b9690b0f801393"],["/computer-network/index.html","00e5f3e38aae96cf38fbad09582390e1"],["/concurrency-principle/index.html","a2aeced12c9ea01a3d1f4fed9e9f4ad8"],["/continuous/index.html","7937a79d2bdf87272300e61c5d84dc32"],["/contract/index.html","0ea354d26d1ca990e0185b0c94c2d85e"],["/create/index.html","f0f4c20228eb744cc9416f891eaf18f8"],["/css/main.css","281a3975a5a58f6b89465a0a3ca969a1"],["/cycle-structure-programming/index.html","59b1658e2b63ba11617ec3c3cc1b1a4c"],["/data-structures-and-algorithms/index.html","7bbe79039c383b9558c16ecd21224ac5"],["/deb/index.html","2cee99415e58beff03cb09c06bf35e20"],["/decorator-mode/index.html","b31f24fdb91472edeb77cd6f245082fb"],["/definite-integral/index.html","124235e4dff6c9e088c16fd8460b0b71"],["/dependence-reversal-principle/index.html","1443a1c67d5f5594ecbfa50dc4a57849"],["/derivative/index.html","9e9dc1ae59de7b403aff5e0acdef3b75"],["/design-patterns/index.html","65e4bf20c89e1a848bf1f49b7a293573"],["/dic-algorithm/index.html","241077063b9450c1d8aeda36e8c83726"],["/differential-equation/index.html","448d231677618ac1715b1f9959c2d735"],["/differential/index.html","d7d3312c2886fb6be5d2fee2c3937b26"],["/dimits-law/index.html","ce45ba48faee9c8926ad530ef208e9a1"],["/distributed-lock/index.html","80d11579fccfb574cf782578b5a87c7e"],["/docker-virtualized-container/index.html","52013b7d6c5b88fc844c3d0d0926ad90"],["/double-integral/index.html","60640ebde2da6c90ca024b7c2be265c4"],["/dp-array/index.html","673cff5d57dccedaa5b77382b2f31b9c"],["/dynamic-array/index.html","c45a094fa7f78094a002ea6dfc178e5c"],["/dynamic-programming/index.html","d5c2f8247857f204cce2ee08af3b2a3b"],["/edgeset-array/index.html","84035d608bb5ef91250eebb69e5e39b7"],["/encoding-algorithm/index.html","43450b3bebad161d777d9cf1b54632d1"],["/eureka-service-registration-and-discovery/index.html","2ff38210d59605b7a790ae40318fc621"],["/extreme-value-and-maximum-value/index.html","d43d5f794fa24f1025cbe3c735a2181d"],["/factory-design-pattern/index.html","6ba4798ec4a7918099e0a1aa62602b6d"],["/file-input-and-output/index.html","beddc2f26feee403f7795e1a1ee430b6"],["/flyweight-model/index.html","201f926874387d10ae892e64fb9dcbb9"],["/friends/index.html","47f209a67ed7ef90362e122bdce3e230"],["/function-graphing/index.html","9adfc2203a11f6f2cc42079bc4778d30"],["/gateway-service-current-limit/index.html","a7bb17854bc38f92168c16b69ff505ab"],["/gc/index.html","488aa99cb03feebe25acde58dfff7a2b"],["/generalized-integral/index.html","8f9866010f21a8a4f37f7d8aa305b7dd"],["/google8102e2f35ce9e391.html","03e776fb516cec8c92d6dc04dae58491"],["/gulp-compresses-static-resources/index.html","a7ea490d59bd1af7df5d1cc60d756e81"],["/hash-algorithm/index.html","66c4d1f5a6dfdf9a69f5e575619e549d"],["/head-first-JVM(1)/index.html","8d9c54350f42ecec97c848083e42f271"],["/head-first-JVM(2)/index.html","09462232084e6a6ef1861390db2f2d1d"],["/head-first-JVM(3)/index.html","2954bd66e36b99ade83c9606f124735f"],["/head-first-JVM(4)/index.html","daa5ef3aec5ca2b9436e27021141db97"],["/head-first-SpringSecurity/index.html","24b1699ed0d70d16d15394054c4b7bd9"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","b1875b271fe1974dbb964d5fad69292b"],["/heap-sort/index.html","27039a1d15d8a9b9c6b85b7b09c7334d"],["/http/index.html","54259ceb1465ea87cabec4a65e3ddd78"],["/huisu-algorithm/index.html","55c390f26ff68859b5065458cd5488bf"],["/indefinite-integral/index.html","4fc6eab076f6aa5bbadc2bec32892088"],["/index.html","bb935df4957bba1c6c39aea15d0b4510"],["/infinitesimal-and-infinite/index.html","6e7110cdbf0b1d1b6eed73455a658976"],["/interface-isolation-principle/index.html","28318fb28a80dcc912bff35e172e4a25"],["/interface-test/index.html","ba234f1b586c2a92ccca65e28c4c279c"],["/intermediary-model/index.html","8ca0c9a16a0523004f14d06365ee1e66"],["/interpolation-search-algorithm/index.html","ff8e5280fbae18f8256324d9d2163af5"],["/interpreter-mode/index.html","dc43c48880a324c145b20d1f9fd9e2a2"],["/introduction-to-computer-network/index.html","b88c21ea70fec9e294178d4dd75bdd0f"],["/introduction-to-operating-system/index.html","a60252f8fc2cc6b02dd60dd53bacdb60"],["/inversion-of-control/index.html","32b55ca0f49106ff23a13eb1520291b6"],["/io/index.html","807f7c9e64a93b3d7dd370cca8605870"],["/iterator-mode/index.html","f40fd394525b4ca3224d7347a21c1a4c"],["/j2ee/index.html","bb8db21f3a89388c424704d7a2ff5e3c"],["/j2se/index.html","8a0886d5c589c54b20feeb420dfea744"],["/java.lang.String/index.html","29e09f50bbf82c2c9d379d9053dba12e"],["/jdbc/index.html","eb755219d8425f7e876747f870679e0a"],["/jdk/index.html","f0b120f6a56a7deb45335bdda4164372"],["/jmm-memory-model/index.html","b3890ad091faf2307b716143cc05ca17"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","bb0964faa5814eb4e8b7f66f9949b9c7"],["/jvm-method-inline/index.html","6ce1af3d223768b0e288c0c815d7063a"],["/jvm/index.html","8ac6bb5037c3d7303c8fbecfd2ad4b8c"],["/law-of-robida/index.html","697cdfb5590943d5b4b017ca7520dd5c"],["/limit/index.html","ed211e49a125a4f6768e8ae61d8fd37d"],["/linear-search-algorithm/index.html","117b33d47a864be80db070459f5c81ac"],["/linked-forward-star/index.html","725dde6bb5df16b319b0aab98efede55"],["/linked-list/index.html","b6dd58c8822837e33b434c43a707d8b2"],["/linux/index.html","2f0b91f239ad4689692f9328ba8b980f"],["/liskov-substitution-principle/index.html","7567632fd298841b521b374d2977decd"],["/lock/index.html","1b96d70da0fd89d01eb91eb8820f3313"],["/lru-cache/index.html","43dc59022706db355cc8d72afeea6349"],["/maogai/index.html","6aa7ed87f3dcd0f611fd4942af86a060"],["/memo-mode/index.html","bd5a047b598808a4fc7e09ceac0a602f"],["/monotonicity-and-convexity-of-functions/index.html","4b9e2c4e4b9da36c32c22f43a530d41c"],["/multi-function/index.html","f65304c801e88aec647f1e1d86dba811"],["/multithreading/index.html","a5384400bd56086250c566a498445ab3"],["/mvc/index.html","0a9a08ce51774336e15cd53183edf9fb"],["/mybatis-cache/index.html","07f64bcfe0d26a59f2088dfa6db04c04"],["/mybatis/index.html","22f09e014553f21370b602c216d194b5"],["/mysql-index-wrong/index.html","7a08779679323668476556dbcb5757a9"],["/mysql-struct/index.html","1bf7275cd52e485bedee853f2d61d2d3"],["/mysql/index.html","35106ebe7ed6ed8495f09ab02626423d"],["/nacos-service-registration-and-configuration-center/index.html","1e7e19274496ba8be78fa6268d4df7c9"],["/notes/index.html","ebbcd6995434d39a7eb8ba5d1a632e61"],["/null/index.html","fbc10d9755dc7f480aaf27d2a70e27e2"],["/objectoriented/index.html","df7d23ada83a274c6e668c58640d39de"],["/observer-mode/index.html","49fe30f97e8c88ea0b5cbfcd9a244192"],["/off-heap/index.html","5d18bd3bc03b651c5d6564dae68823e8"],["/operating-system/index.html","2df0f3b1ff8e06f995bc56157aa8f49f"],["/page/10/index.html","90b046bcf4f2c5dd4374133c24de36f6"],["/page/11/index.html","f20d5b344da251d568ad47aab77a7b6d"],["/page/12/index.html","e23e1d8e5223fb598576ab1fac9c03d2"],["/page/13/index.html","b8b6f2d4ed9a1e40ea75d2686bbc9298"],["/page/14/index.html","f286a7eb3949cea51e577d480b397f46"],["/page/15/index.html","8e36430f59027fca146154f0f0ccc11a"],["/page/16/index.html","b7b95cf8f9cef6f444e6b0369964ec5f"],["/page/17/index.html","9dfdb3c1ff0bfd596809291c548bd588"],["/page/18/index.html","1a8a9ab3054b248fee13aac238cd76b9"],["/page/19/index.html","a0dc80775d51154b7a8f4867ecc7bde1"],["/page/2/index.html","8a0c7cda769f4a45394e43b7c2d1a2cb"],["/page/20/index.html","71fa63f3585625101758b697be202194"],["/page/21/index.html","56b8c72905fae71b8c2da46cdc0b8ae1"],["/page/22/index.html","43ab3b66964298c40fcfb738cd402baa"],["/page/23/index.html","3717fb0acf0b0f31970be7ce699d59d0"],["/page/24/index.html","139184cf5979893a7a7a168f07482f29"],["/page/3/index.html","4925cf10095bb34bd12969b6760049a0"],["/page/4/index.html","64f8654f09b8a145c60a36c9978c6002"],["/page/5/index.html","5916037a21a68bae801b2fd5c39019a2"],["/page/6/index.html","8243f6c35f2ef1484090ea27d49ba634"],["/page/7/index.html","8cac6d0bfc4755a38bbac1d47952bae5"],["/page/8/index.html","e7601f6a65d608bca52539d547705dcd"],["/page/9/index.html","69d1f94fdee2fd5f872d324b9e05fcc0"],["/palindrome/index.html","420bf38c07feaffd0a5395e29a15af0d"],["/partial-derivative/index.html","47618107a100904464dce553739595b7"],["/pass-by-value/index.html","164c69b3a28b68947891045e73072c30"],["/pictrue-bed/index.html","2c96d4eddac53a3b64c495fc2be0c046"],["/principle-of-opening-and-closing/index.html","581ff672946948d4612918d2ec502f80"],["/principles-of-computer-organization/index.html","0b9246329635346fcf3e71ce46974212"],["/program-test/index.html","af8a0b792a77cfb91d6eb43d389dab78"],["/prototype/index.html","4b63d85080dd158d6601cb42d5b196f9"],["/queue/index.html","d89ea9df846da82669476770ff8d30f6"],["/random-weight-distribution/index.html","cc5b32f4ed64f30a05970c32ddbf4cc7"],["/realize-modular-programming-with-functions/index.html","e474e20643a61567c883d753aac094f7"],["/redis/index.html","bd016d7f4ef8bad7973db28e8ae8379f"],["/reflection/index.html","56ff1666be17dd5f4f52b72fa45c23a4"],["/ribbon-load-balancing-service-call-degradation/index.html","b52c1862bbfaa1cca9c2a4747a9d7655"],["/round-dp-algorithm/index.html","b0d95f70d3ee17288309b0193c3b06c1"],["/seata-handles-distributed-transactions/index.html","3f76dc76beb3548b32299b0f2f206ef1"],["/select-structure-programming/index.html","4cf2f17eef62b4f7230dc9ac1efc0c1f"],["/sentinel-realizes-fusing-and-current-limiting/index.html","1b584c3f94ac685529cdbed46b325559"],["/sequential-programming/index.html","8c1be5a12dd5ed4ee53f1dcbcb004272"],["/series/index.html","6b5a00d3f1f585bae3d31ff6cb106675"],["/service-worker.js","accd58c5f82519918bf17744eb1014c6"],["/single-point-login/index.html","20843819d9424b4b01a38e924039a9cc"],["/single-responsibility-principle/index.html","16d0f5b85ee03945cb6ae9fac35fadb4"],["/singleton-mode/index.html","e1ef403d7b1ecf8ba4d5f5e9e184327f"],["/slidingWindow/index.html","b89bb297c67996deb29970fe9d1f9b3d"],["/snowflake-distributed-id-algorithm/index.html","61e9bf84c66df1062ae06fd200b103a1"],["/sparsearray/index.html","ccf6757350013b58144bf47558e58d08"],["/spring-and-jwt/index.html","3e26ca7e4638df5481212fc62f5f6e58"],["/spring-architecture/index.html","0521404a870157753985a5f9b31d93e6"],["/spring-relate/index.html","84384ea71aac2a66a18d036dffc102ee"],["/spring-springmvc-mybatis-integration/index.html","faec5bb540643b2bbed1acb328f4a062"],["/spring/index.html","c6fc4278412355f9121dff7d5886b2ae"],["/springcloud-alibaba/index.html","b5366ae99929779b0dbbcf849e91b782"],["/springcloud-bus-message/index.html","698b8c7851bd0260d42fd10154c9604b"],["/springcloud-config-distributed-configuration-center/index.html","5a72b575acb25802d81a6a4bba819f83"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","422790eff71e47075e4b64c08b05f6c4"],["/springcloud-stream-message-driver/index.html","f3d09dacd8ec51dd73871c9945195a48"],["/springcloud/index.html","4c5b2c12b36f85ce5bdd591b7ed69b8d"],["/springmvc-environment-construction/index.html","e351bda56c776d71d515275981fac7f9"],["/springmvc-work-stream/index.html","01db68e3d5857d1d760c9553fed67410"],["/sql-injection-attacks/index.html","8d6b1bc419644e8108904f99e49e6701"],["/stack-simulation-iteration/index.html","356512a01220d55f3beefe78faad8d88"],["/stack/index.html","237e4ead183f44c9300f92b25fdfcc6a"],["/state-mode/index.html","b1b009ac1047008770173755f8867069"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","bbe87103022d7dd656ca741124cf99fe"],["/strategy-mode/index.html","e4d72642189a7d7c444c3e6570e187a2"],["/sw-register.js","efa24717f3ec925f8732c0aeea414414"],["/synthetic-reuse-principle/index.html","b71a8a9eeb59ae7ae41d096842914bbd"],["/tags/C/index.html","38a65ca8bfc2f36c55bbc3c620da493a"],["/tags/C/page/2/index.html","42c4fa88bfd456d3c8495fc83b4f381a"],["/tags/Concurrency/index.html","9e2c5dca6ca36e0dbead228194454254"],["/tags/DesignPatterns/index.html","39a4ec7c1a24b37a6736f5e73ba94cb2"],["/tags/DesignPatterns/page/2/index.html","aa49a4cd1c8dfad315e4d04039bc2aa5"],["/tags/DesignPatterns/page/3/index.html","c380d50a06b17c2d09c997d054a27a5c"],["/tags/DistributedMicroservices/index.html","627ccac4076cebbac4c1760f3bb111f9"],["/tags/DistributedMicroservices/page/2/index.html","e571dd3775fcd8a5153dbcca126ec6aa"],["/tags/Interview/index.html","65bff5734cb485f9b3e0f80eacbc2d82"],["/tags/Interview/page/2/index.html","f20c49b99531d59418e39d9c2de2cec6"],["/tags/JVM/index.html","b45b2de32984e523928d27e9acc5b22c"],["/tags/Operating-Systems/index.html","395fc3232e81919d66778aad2a2a7425"],["/tags/about/index.html","dac15f6171ec03230d8a1a88e441eb90"],["/tags/ad/index.html","0be5120add096ddb7edef2ab4b170724"],["/tags/algorithm/index.html","e1aa74ce3e86153a6fef88a7a7d40fe9"],["/tags/algorithm/page/2/index.html","10e6774379dc03c37228fb03b338aa71"],["/tags/algorithm/page/3/index.html","7271d348044a654e354a1b75a9bed520"],["/tags/algorithm/page/4/index.html","ecba3694960de5f8e64bcb8000967a68"],["/tags/bug/index.html","c50bc21d47b9f74d55615946da8aa71c"],["/tags/computer/index.html","1f2a1a8147256dad7496e642f9680815"],["/tags/data-structure/index.html","be5cfee411d487320340d7f82e4951aa"],["/tags/docker/index.html","8ec1947a4e5eb686d633d5d3c74ea7d2"],["/tags/famework/index.html","a0935f83ac0d72dd64b482777cf6bb6e"],["/tags/frame/index.html","f7e8d021569f5bd4c6c381fbd25f323d"],["/tags/frame/page/2/index.html","db3a97f2473c0adf5a6bfcabfb6d0d13"],["/tags/front/index.html","ffd6b2158292c5073d2c85d5ed509e71"],["/tags/index.html","a3d5e51bd6d49eab5fa1e4194bf04293"],["/tags/interview/index.html","f6d959af3f635e508d969fd094e3d12d"],["/tags/io/index.html","13208eb3b4d0c00ac49118ea7f4576b2"],["/tags/java/index.html","d375ef208fe3684f40038e827f2e9baf"],["/tags/jdk/index.html","2aea91c499c186704e9804e4972b1ecb"],["/tags/jvm/index.html","45a18c5b855bd21f9ee228b6c438150b"],["/tags/linux/index.html","62b6b0ca37cd5bf4de581f7d3de4e0d2"],["/tags/maintain/index.html","26ac433179f816ed7e8aa9dd58ec5512"],["/tags/maogai/index.html","268659e7140b2ccaa9dc3cd3ed6d3446"],["/tags/math/index.html","e385ddb17d4c4d5f61e4a5a428daf92e"],["/tags/math/page/2/index.html","d6c9767bd6444fa7ea43568434848d8b"],["/tags/middleware/index.html","5f607eea0e3f2b940519b8c9de0dbffd"],["/tags/mysql/index.html","c60de662f6a9456fcaec93fa94bc7652"],["/tags/network/index.html","0829355e99cc222bb152f455b654a84a"],["/tags/project/index.html","cf3e2e35355863950e6add4adeba4b6d"],["/tags/security/index.html","c3b63a4d72b5dfb620dde009d96dc8aa"],["/tags/sql/index.html","166b161d49fbd0dcbf69a1e2dbf5a429"],["/tags/test/index.html","41596de01eb6c4653a3b938f15b4fd08"],["/tags/think/index.html","f8cab6d51b121e9342410349aca43879"],["/tcpip/index.html","fc4333e8a58676afdc20ccbeab1335ce"],["/template-method/index.html","80e0c00f866b5f0dd74d39f5aa880d08"],["/test-case/index.html","31274339addf7e5349ced0052f874929"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","323e435ff667dfc0c3dbf3132b26160c"],["/thread/index.html","ae8993f6a5cd6396bd20cb139af634fb"],["/tj-horse-racing/index.html","abf074b942149f8d44d6cd744bff0ab0"],["/topoSorting/index.html","c430882681fce23743483f18dd62e563"],["/traffic-monetizationaccess-to-google-adsense/index.html","d4df45cb52d03f263b2df0c186d2a11d"],["/txCharity/index.html","156a28241245fc4daeb4e2e218160ea9"],["/ubuntu-set-ip/index.html","3852b2d16a3979d4070bc8a741cc9d9a"],["/undefined/index.html","02df0795875ac61753d7269b3b23e094"],["/use-arrays-to-process-batch-data/index.html","2b2566d840c1da84074be2d722823a0e"],["/use-of-springmvcmodelattribute/index.html","9f5f4e0f6bd12c35a3ab4f7bbd6b6549"],["/users-create-data-types-themselves/index.html","63f12a5eb4d9ddcd6ce65a0505318c0d"],["/visitor-mode/index.html","09234dce69f8184708be3cdae34eae80"],["/what-is-milk-and-why-is-group-wise/index.html","5053d76c1aaa1a21a4da72e33a3f8e29"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","4c613ce9e6df3c0981d14b26b26552b3"],["/xss-crosssite-scripting-attack/index.html","e6e6e9a459673b647d697acb27ccded0"]];
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
