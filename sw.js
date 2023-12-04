/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","63f367b5f3b7d014237a98893cd6fddd"],["/404.html","504b52b73f9b861f246f99522223c3fa"],["/404/index.html","93b323f55896028b766f9d491fd0b45a"],["/7-sorting-algorithms/index.html","fda9fd742335025a03e855f0f10d0f34"],["/AIO-blocking-model/index.html","8ac2a9254d86c39c00f281b6e3a98f6e"],["/About-Snowflake-and-Consumption-Degradation/index.html","4188076b87f171fe6154b10a811dc963"],["/BIO-blocking-model/index.html","fd23dba2242fdabcd9c4ddd12064be67"],["/Bloom-Filter/index.html","71f69248126cb5256259e18429331c5a"],["/Boyer–Moore-majority/index.html","c2e7ac355a38ee6f883ba1bfa67a83c2"],["/C-algorithm/index.html","d75ed46b670287b7c9e611dd194504e8"],["/C-programming/index.html","452f077e22da6899ac2415e31aaecf26"],["/CAS-&-AQS/index.html","e6d83b06124acc8f8b61d2f9e6b00065"],["/Comparator/index.html","f7546ca12ceda5baef4df5d199cef8e7"],["/Differential-array/index.html","72c7fa34bb0bc8455d06cc882291547e"],["/Download/index.html","cbf9d87a7076dc187bbf737cb1a938dc"],["/Front-end-security/index.html","56018434a4998efb317a833d0eeaaf95"],["/Good-use-of-pointers/index.html","c257af79f702cb91efcb168f2d6c8b69"],["/Graph-degree/index.html","2b5918dac0f79b8a29d386214a9f4f7d"],["/Greedy-Algorithm/index.html","9de89d51a11ce15b25bcecbd090f67b6"],["/Head-First-Map/index.html","9549dae496bc2da29935a5cff787e4c0"],["/Head-First-Netty/index.html","6ccc01404ce705439b3ad6d5b090d6b8"],["/Head-First-Nginx/index.html","2ad115cc972e1f7d946c8db542261c64"],["/Head-first-Spring/index.html","c7cb9bc72cb68fa74307329c89569601"],["/IO-model/index.html","b2b99f8e3268cfb48bfc3a4614f2b18e"],["/IO/index.html","339af3c447ee0080671f42831a27685c"],["/Implement-a-lock-based-on-ReentrantLock/index.html","0b5957359e9f74e9777f534b1d792aa0"],["/Improve-Robustness-(1)/index.html","644078d8d9e839c766a75794fcdd18cb"],["/Improve-Robustness-(2)/index.html","663c65ca835f8629a4d10d07802bdb71"],["/Integer/index.html","ed67f5af43ceacb4db03f6fec2cdf7dc"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","580297f2d182e45356496f126cf6dcf6"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","f051cdd9be6367cbfa7575eedd1f94d0"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","af1dddac41490beeea7e20e2f00fc5aa"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","755e1c032217af905d64ba9d86853840"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","f475985bbbb578261862876e3b1af947"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","bc0e840a89294a191c7199bbc90c228f"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","e300a4e8c9b8c713f5bcf53387eb53e5"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","1a966d4435b7e7a401bd64a8367c119c"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","a2c1eb6d2ebb6e4955b3f0fded80e999"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","796ac4fbdd98b8769b399b0bfb5923bc"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","3a9a2756e702f161729373f653c7a1e0"],["/Java-network-programming/index.html","484f87eb4220aadd8ff2918ad25beaa9"],["/Large-number-operations/index.html","bb81a8be0ef50de7f0f662696c303715"],["/MYSQL-MVCC-&-LOCK/index.html","0022196b753a5188ea9b5141737c0149"],["/MYSQL-uuid-and-page-splitting/index.html","23cc6b957d728fac8c5047df8043f35f"],["/Minimum-Spanning-Tree/index.html","e898fb03aec5b7b57383255dc79ddbdb"],["/NIO-blocking-model/index.html","0f7908c476a262f95e878afb250bd686"],["/Nacos：Configure-MySQL-data-source/index.html","7ed40b91aad4480bc2171c911b79d016"],["/Native-method/index.html","c16c6f7815e1626f4cbb57b195ba9a91"],["/PriorityQueue/index.html","98f2f1df51be2482cf51bfa4f33e9f5d"],["/Proxy/index.html","8ede554600bd163eca20fe50a73ab152"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","59c15f41afab55ab75481a9ba4f1cc0d"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","22e949cbb5ad8d4bde68c7846a011f7b"],["/Reservoir-Sampling·/index.html","49311efd2bea623c347444ccab1ef0dd"],["/SQL-injection-vulnerability/index.html","708a02ab574e1e6eb67c548c67c448f2"],["/Sandbox-security-mechanism/index.html","cd26ab929247ddfdfb78cffc3b3e672f"],["/Spring-Cyclic-Ependencies/index.html","7363d5a61a134929b3bce97782461a24"],["/SpringBoot-startup-process/index.html","f26a96436af679ce656fe0643af3f6ce"],["/SpringSecurity/index.html","c596078ce3a1515e653dc347be1a165e"],["/Thread_Pool/index.html","f764bc6c676b74a70da2b262fcba5862"],["/Transaction-isolation-level/index.html","ef20b14126197f78c2610e5c2edddcc6"],["/Unitest-framework/index.html","47477b3a75c481e99051744b38428a19"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","619639068cb55e582d06d4518ea0a475"],["/about/index.html","78ac5b1bf89dc3c0bbe78404b42d0bb5"],["/adapter-mode/index.html","e435327d573a86315e6fe855519b3c6d"],["/adjacency-matrix/index.html","3fc75a5fe1f243023267a3cb12925c18"],["/adjacency-table/index.html","72c9f240a298d6f25c58a774f23a1c4f"],["/agency-model/index.html","75583d909c5167bab9a792d54c0e98d0"],["/app-test/index.html","448b8a77e97b46469ff4e64ae42f8730"],["/appearance-mode/index.html","369157bac36409038795ab5d69911154"],["/archives/2019/01/index.html","fdbde9cd7a9231b1e26080060bbf6b12"],["/archives/2019/07/index.html","9dc777af4ac456b2a7d31fe9f7c2d71b"],["/archives/2019/10/index.html","7f1460e1bd1c22e8b2398dbcc9f9bfb1"],["/archives/2019/12/index.html","f312e69ff7ccc3a589f3cf821d9ed3d7"],["/archives/2019/index.html","10ecf36485b9ce3cd5fb05c5d81cde16"],["/archives/2020/04/index.html","1a0d350e4e4f97b5dd534103705c6a06"],["/archives/2020/05/index.html","762514ce933586217047319d179e0d91"],["/archives/2020/05/page/2/index.html","03360ef1ec2605b01cffefd81fd0e218"],["/archives/2020/06/index.html","4aa5a840e4df5a3b96e0f30a1a36643c"],["/archives/2020/06/page/2/index.html","79d5fcd9bdc9974e0a23db79fe04f98d"],["/archives/2020/06/page/3/index.html","08a781167ebfd355f60a09d1b47628ff"],["/archives/2020/06/page/4/index.html","ee80ed1656f2d8f4d5b71ee1d52dfef9"],["/archives/2020/07/index.html","dbc58151541a90ee8bb2f78fda3c0c67"],["/archives/2020/07/page/2/index.html","995ea56bb9fc21c285fdf9754893b529"],["/archives/2020/07/page/3/index.html","024cc7f5e356084a2ba6f5e9af730118"],["/archives/2020/08/index.html","0cbc50c72564dc11a22816c7fd5c4e41"],["/archives/2020/08/page/2/index.html","afc0b8b6710b12d83db91429521d39dd"],["/archives/2020/09/index.html","7c0ceace87cd900bae1ea067eef4ce2c"],["/archives/2020/09/page/2/index.html","5fc8b02ce5b0a2df0e143156f7b9fca7"],["/archives/2020/10/index.html","2e4787685c1d0b9fd78585b626f2d6b4"],["/archives/2020/10/page/2/index.html","3e70d50ea4939d1f8e615dd793ade425"],["/archives/2020/11/index.html","6cd23961beb272b3c196fd574ed7bb69"],["/archives/2020/11/page/2/index.html","4c0daefe2443ae5b79e6ef70627a8af3"],["/archives/2020/12/index.html","3ed59febfab69738756cba33a80d75f6"],["/archives/2020/12/page/2/index.html","887efe0325cf87fd90860ef7ccfc52e3"],["/archives/2020/index.html","8c1e1bfa0f3cda70f683f34d95739879"],["/archives/2020/page/10/index.html","d307c54c12d88e1f749420a551126565"],["/archives/2020/page/11/index.html","9bd29ee4682597b51dde38724beb4663"],["/archives/2020/page/12/index.html","c8fe407eaa55e1f3eac5ef778f7847cd"],["/archives/2020/page/13/index.html","e54c18c1e94d363f5d52547cde04554f"],["/archives/2020/page/14/index.html","959e7383c1acd771718ae2a169e4c742"],["/archives/2020/page/15/index.html","b182e855f5b2814bcfd0e5b0a6280643"],["/archives/2020/page/16/index.html","ade8bfd6a33a791740b3b0c57c9c46c8"],["/archives/2020/page/2/index.html","b4536dd52d6228cb2ff71b79a9ccc53a"],["/archives/2020/page/3/index.html","68b41d5cbb40cc931eb4b40a5c0b99fb"],["/archives/2020/page/4/index.html","51903e42d3a1b2d9bae7c7624138bb58"],["/archives/2020/page/5/index.html","9bd05032bfe13f27a1cd72bb24212897"],["/archives/2020/page/6/index.html","dbc75522b14196f8b9cf4074854c78d7"],["/archives/2020/page/7/index.html","8c12693d4b009f393bec0e06b573c874"],["/archives/2020/page/8/index.html","ec018f0a170bc42f16eebea08912824e"],["/archives/2020/page/9/index.html","ea35c97544322f31fd6369a884e0d635"],["/archives/2021/01/index.html","b463fa22319057bd41757c9aa0ac32ed"],["/archives/2021/02/index.html","ff936af4614cad18b5230f94b3942600"],["/archives/2021/03/index.html","eef56f6ba4fdef7b422d2f32b5996746"],["/archives/2021/04/index.html","96c6ec90ae8107cb7ade273eac30fc21"],["/archives/2021/04/page/2/index.html","18ca85118194bceb1094e98ae21e356d"],["/archives/2021/05/index.html","0e442184f0256cda8ff07ae64f21f098"],["/archives/2021/06/index.html","62d4b553d68bdbc9e2d640a6593e5544"],["/archives/2021/07/index.html","790b1a572de51a9d486db6e40544fbd3"],["/archives/2021/08/index.html","9e652c0b1fcf68a77b01b1a2ac0cd2d1"],["/archives/2021/09/index.html","ed123a81e0c09fc6ab8153c88157b5be"],["/archives/2021/10/index.html","e1f6854c12e59bb5dd09ab13a6a0ace7"],["/archives/2021/11/index.html","d196a8c3bf78001c6c33d4abcc4023ee"],["/archives/2021/12/index.html","065b40a3929fb088b1374c6316629222"],["/archives/2021/index.html","f476b2499fab2f4c46803df063fde3c0"],["/archives/2021/page/2/index.html","017ed6241e8c50465a0ada5c62912471"],["/archives/2021/page/3/index.html","0455189203ff0bd76183bf8f6f35bf13"],["/archives/2021/page/4/index.html","d356f3d329df62b65e86d4403b37316f"],["/archives/2021/page/5/index.html","ec0172bedc9397f0b839be9a5a13a33f"],["/archives/2021/page/6/index.html","e0d808184e5b990fcd774c414137fb05"],["/archives/2022/01/index.html","2e0f9a1c5069138cb35c75329ea8ae2c"],["/archives/2022/02/index.html","717de2c79642ab55033bf1c1d383a33d"],["/archives/2022/03/index.html","b26cd6a71e36370367917a148d3e7473"],["/archives/2022/04/index.html","057e0ad7f62a4998c610bacbdec1837e"],["/archives/2022/05/index.html","f87d5d7c618fa26f51f90e4dadb73db2"],["/archives/2022/08/index.html","e51b7f030be3abc1fc77eb61882a250c"],["/archives/2022/10/index.html","65394de728d7b3d2ffd80d6b30738771"],["/archives/2022/11/index.html","1e7d0fde3a1fe9e1d4263ba7a4d679ae"],["/archives/2022/index.html","b892e5f500cb95773cbb2c51e7cb141b"],["/archives/2022/page/2/index.html","fade4206cb249d36c49f1682cf4f07d2"],["/archives/2023/04/index.html","0c6e4136623beb3907c42e90db815016"],["/archives/2023/06/index.html","5b0df681442427dfa2efd57e6386a7f0"],["/archives/2023/07/index.html","a5ae59e978e94cb0ed7e5c33fd363121"],["/archives/2023/09/index.html","8e7ff1c46c3e5e6ca26360603091aef5"],["/archives/2023/10/index.html","858baed6a7c96e8a6764d7b03207f81d"],["/archives/2023/11/index.html","4d4a5835831bd1ae72e3cbc24d1c1804"],["/archives/2023/index.html","e7c8ffba222a62a99ec792266d49a911"],["/archives/2023/page/2/index.html","4e63d586aa3c3f7491110d550807d826"],["/archives/index.html","1baac5c4b8eb601bb59d24a9c3494941"],["/archives/page/10/index.html","f7291001b8dcdbf2b189edaac224bf06"],["/archives/page/11/index.html","c9231ac04e85c0abdf2f2cf700fba537"],["/archives/page/12/index.html","ee676b8182233baff0564ec876a38ddc"],["/archives/page/13/index.html","9fc4cdad4c48ef3d155c7ccf2c4a4aff"],["/archives/page/14/index.html","76936ff7d706f1cf88150a67d558d0a1"],["/archives/page/15/index.html","4de1a9565673b9f92d8ab19e496ea169"],["/archives/page/16/index.html","669b57a20eaf404395a94dacdacf385a"],["/archives/page/17/index.html","955c6aa3a26a9e04f5e946d0685108c2"],["/archives/page/18/index.html","719f6d5c1160ba3f0d7cec78d65785a8"],["/archives/page/19/index.html","72592ef3848a5454e684d0af92aa0ce4"],["/archives/page/2/index.html","9160b07b933d16e3da1811a324ecadeb"],["/archives/page/20/index.html","9859260f91f5efe9908835911a41f21f"],["/archives/page/21/index.html","deb9707ea2ac53ebc7c2072015f7a758"],["/archives/page/22/index.html","bc3d7d7a195210b1ca894366735660e6"],["/archives/page/23/index.html","33548957d7a10c84d8a18f947173541a"],["/archives/page/24/index.html","c2c565e9187d7231a91f5997e614194f"],["/archives/page/25/index.html","169554e7bea557cb7816efe67b1bcdac"],["/archives/page/3/index.html","14d852daaf2624b3427652218ee1bf5e"],["/archives/page/4/index.html","3d46527a935e3d36e6686a2a9c2bab37"],["/archives/page/5/index.html","37452e0dcf22881ee21c4a80f2bf9f7d"],["/archives/page/6/index.html","60c6f018a95b801deb7c242f7a256742"],["/archives/page/7/index.html","322c9b59646f3f5a6c5d11280a81e66d"],["/archives/page/8/index.html","6dea54546be0e0d2f67adcef8422f769"],["/archives/page/9/index.html","a5f9da6a538551d1876c01b1d4ab3f58"],["/array/index.html","b790ef42cf5db8579fc9e80e7511af87"],["/automated-test-katalon/index.html","0f77bff0064f2b352d80da6f36c8f64b"],["/automated-test-selenium/index.html","4125b85e53c0372b1809e7462f1a5107"],["/back-to-table-query/index.html","1d2e3b767d201e6a6f38dfb6aa04ebe6"],["/binary-search-algorithm/index.html","90ecc83c31250e6aab4b4a83db8df7db"],["/binary-sort-tree/index.html","64a9261c88437dc83940ecb38fd9d706"],["/bionioaio/index.html","39fc9f69993fc73b17187e15302fa869"],["/bridge-mode/index.html","91e04e4b9cff8cdfea0c7fdad9861279"],["/builder/index.html","d2fc0c8b5258503370df6bd71c4ab6da"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","389c3689f7cdfb913d733e7cdae16145"],["/cache/index.html","4b283339af253b86679578e84035bd78"],["/calculus-01-function/index.html","b861e7776a75cd42b431d83bbca9ae18"],["/categories/C/index.html","245d0ec1397dd1e428909187c6e081ab"],["/categories/SpringMVC/index.html","b053454b1d024e445a7c9dc5d116912c"],["/categories/categories.html","c08ee461c2239cc3acaa394ec44ae89c"],["/categories/index.html","3ba35a44ec1ad3b7e6fe01ce8125acea"],["/categories/linux/index.html","11756bce89054de475397e4fe0bb0ca3"],["/categories/分布式/index.html","7e0baedc9930b81ec37664dd7811d301"],["/categories/分布式/page/2/index.html","d0bcbd0f7dc380498c884bd46f4975c9"],["/categories/设计模式/index.html","bede48f5c7043b56c1e5b1d7f5302669"],["/categories/设计模式/page/2/index.html","b2ae275c65d26e9bde46014c38b930bf"],["/categories/高数/index.html","4fd15b360224fb3141eddf20473b188e"],["/chain-of-responsibility-model/index.html","b0d71cae6cec9c95a34176e20b55ed80"],["/charity/index.html","bd47c4c1fc4d824a1e5221d552878cb7"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","6b4e8284b675f2c3e1d2a3965c48ca7a"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","8730bafbd9b105272cac25903c137503"],["/combination-mode/index.html","be25fd83feed4fdc07b09724f5d90670"],["/command-mode/index.html","53edd7fb0d2e1450aecab7cc2cd80c3e"],["/common-commands-of-unix/index.html","28112fd8a4ef1bb0659c1b0d3bc87a5e"],["/computer-network/index.html","9e66e012716391fb651c2b769aa51add"],["/concurrency-principle/index.html","cf9d4d26bbc4c0ae6d0a295296cff7e1"],["/continuous/index.html","0787398193e0d436c497a2b5146e7106"],["/contract/index.html","0665c8ded62b5b0b63ba1295c7ad5d9d"],["/create/index.html","58ab94657aa26b469b8c9afb4d88fe99"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","7b57689c13710eada5a5a774b169e290"],["/data-structures-and-algorithms/index.html","d3d672625fde3840d9fa3d8091db981d"],["/deb/index.html","753844b3359947de197a88e97aacb0e6"],["/decorator-mode/index.html","13a15712ec124aff218a11b3f945ab30"],["/definite-integral/index.html","c80689cee0d453023e4de25ab3472507"],["/dependence-reversal-principle/index.html","00546789f09b6340d4d952e2c56f9b97"],["/derivative/index.html","0f8a004918a4ae02f9ce39aa2588133d"],["/design-patterns/index.html","3903738c12e4ac49e12006ef72ae973c"],["/dic-algorithm/index.html","126bea2e56754612686d26299d461d78"],["/differential-equation/index.html","0992512e6a6798c425869101123b8295"],["/differential/index.html","b8009126978a9ee6af38e36f63dcf6fa"],["/dimits-law/index.html","ad3bc6398c551b0d0277590a9b7c1b1d"],["/disjoint-set-union-find-technique-appreciation/img.png","3b180015f1019888938991178f4c1e06"],["/disjoint-set-union-find-technique-appreciation/img_1.png","e3611c71e7cb8a0cb4fa5e35c5f9bd36"],["/disjoint-set-union-find-technique-appreciation/img_2.png","d4bf7b42194d5378a43bd049b7b91da5"],["/disjoint-set-union-find-technique-appreciation/img_3.png","84469c7e0460e93e0590b56729ce340c"],["/disjoint-set-union-find-technique-appreciation/img_4.png","96308c2a7256c532ca38489ca81c1bac"],["/disjoint-set-union-find-technique-appreciation/index.html","aeb5aee5de291c95a0106dff6982cb7c"],["/distributed-lock/index.html","2b8bd365fbab3974e9f37019b12ea09f"],["/docker-virtualized-container/index.html","2e7d207e1457c95311ebcc9ed14550cd"],["/double-integral/index.html","21711e76e8f36a818da23f3852181c95"],["/dp-array/index.html","63d32b6b8bb8ae5a6037b81fb5017ba2"],["/dynamic-array/index.html","0dd2a78fc9eeea8bbf18ed25ba9a53b2"],["/dynamic-programming/index.html","47050f055f1ef9ccd665840e389c38ac"],["/edgeset-array/index.html","17652f511fa7533d0f3dde1fc90dba1a"],["/encoding-algorithm/index.html","2198be9551de55f80f2d0e5ddbd42daf"],["/eureka-service-registration-and-discovery/index.html","f57516bdf1f5945fb67c5ecc49274b4d"],["/extreme-value-and-maximum-value/index.html","43c6b03c379bf3757657748fbdba5a87"],["/factory-design-pattern/index.html","f3a4c76a9063781afc80edc30db3203a"],["/file-input-and-output/index.html","fa7c138644e8bda6b5c74956e02c41bb"],["/flyweight-model/index.html","4be9bf063d65bf6de7ac302e12c0dd51"],["/friends/index.html","a5f417709b1521a59a49253e11caa469"],["/function-graphing/index.html","8a1e3f8735c4196a581def7847845b7a"],["/gateway-service-current-limit/index.html","32a8e70569b0d06082f90ae804a9c33c"],["/gc/index.html","23a4ba7535aaa1930d8ef43f2c420e2c"],["/generalized-integral/index.html","e75437f4bbf150de96da27f2de537fcf"],["/google8102e2f35ce9e391.html","b57db829bb99ffa63b2dc293755d97db"],["/gulp-compresses-static-resources/index.html","ff670d014b0793127d20d1bf799bcd70"],["/hash-algorithm/index.html","09525091f0d38fe1e2712688f29f7c30"],["/head-first-JVM(1)/index.html","1d99a01959bca1f196af76f3b64fefe6"],["/head-first-JVM(2)/index.html","fd84f890a5eb6ae496e5ed8625e78158"],["/head-first-JVM(3)/index.html","a7c1cf8df6998eec5ab384bf50203724"],["/head-first-JVM(4)/index.html","208d61edb66fa4d57f7a30668fcecf69"],["/head-first-SpringSecurity/index.html","228b53cc2645b34975ef5fe4d346e8f1"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","952cf60d0961b83e68fcba6c92d2b387"],["/heap-sort/index.html","7587e6413fddaeb4f36c700cf1cbeb6b"],["/http/index.html","d3480a4b9443e8cb43c1dd9ab04ce0a1"],["/huisu-algorithm/index.html","d5e82cdaa22793d3679d4b5a8a730534"],["/indefinite-integral/index.html","a84cb79b36a44dd429fd789cee1428a0"],["/index.html","4be3321078e9e6c893ddba8c07f225a8"],["/infinitesimal-and-infinite/index.html","44664daf8dfb5f5483b35e0104996930"],["/interface-isolation-principle/index.html","c7e101f7d369eb8db969b6740e0d5f14"],["/interface-test/index.html","7861348a32636b3a74bd7f3056b9c5bd"],["/intermediary-model/index.html","2f0e2a7f77f417087b70ee16c2fdfa9e"],["/interpolation-search-algorithm/index.html","3fd8de213493bec0fc481871a711240b"],["/interpreter-mode/index.html","b881a1bc254877ded137ff030b4cf1d5"],["/introduction-to-computer-network/index.html","b2cd8bca008847628e440a325a6e456f"],["/introduction-to-operating-system/index.html","1012755f6642c964b9baccaf9b829111"],["/inversion-of-control/index.html","9d4ad063db34c6ffff179f9783d5a24d"],["/io/index.html","1fd38a68837e7406fc24cb98c4558ee4"],["/iterator-mode/index.html","6e098a0f660e7128d36983dbd767ecc5"],["/j2ee/index.html","152d975cd242a8c200fffb92a198a4d2"],["/j2se/index.html","1a4d1ed28af2e2b27c59a39ca19438ad"],["/java.lang.String/index.html","94e5364defddb9830a9c71ad16f11d09"],["/jdbc/index.html","3d5c32bde7cfd61325430d6f3110394b"],["/jdk/index.html","16231d214f47875ff8ac3a66551f6f89"],["/jmm-memory-model/index.html","dc37a6a2db08d29f9a373a4607159a96"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","631e78f705cd8d418a9cf1863ae400e2"],["/jvm-method-inline/index.html","a1edeb0d98cab5fc720f9ab3fc8eefb6"],["/jvm-tuning-practice/index.html","1da2fd3fa3ad0248d4ccaf40ba11a359"],["/jvm/index.html","469e5681b4c342dfe1be24ab68e56999"],["/law-of-robida/index.html","bfd31932f2f3e2bb67e53934060cac4c"],["/limit/index.html","8ee9ad31e459652e7f3f03222a682862"],["/linear-algebra/index.html","da2788b65b256b6910c2d2f7663b1bc9"],["/linear-search-algorithm/index.html","919c7f729dee362a1510de503cde136c"],["/linked-forward-star/index.html","0bac621abff236e34eb40faec4b2dc67"],["/linked-list/index.html","c2f5ffaac9a513e987ff91d3520d6bc6"],["/linux/index.html","7249e45018af3bac27408eaf5a671b4b"],["/liskov-substitution-principle/index.html","bc537022006255e9f6e53a7ff011a6c2"],["/lock/index.html","5b847b23eeadb8d48da8bfeef835c619"],["/lru-cache/index.html","86c2596715ee44dfe9090b1bcfb0c74f"],["/memo-mode/index.html","efa30d66c3729780cec044c00edb79ed"],["/monotonicity-and-convexity-of-functions/index.html","4aadebf90ac8db4778beea47019e30ec"],["/more/index.html","dc7c805e7761a4d90bc9babb11df4c60"],["/multi-function/index.html","1ae479628ed102e166d8564ea20b9fcb"],["/multithreading/index.html","8b52738fbafeae33e775e80022dc19ca"],["/mvc/index.html","32ce055f24ad94c39659f7df1eac6ea8"],["/mybatis-cache/index.html","27e86440a7b23659a9dae2aae8a32d7c"],["/mybatis/index.html","e179b2927ee74a3861b448aac9ba4d88"],["/mysql-index-wrong/index.html","e940b0ba2de7b0666bac9f1587a5fd83"],["/mysql-struct/index.html","2efd1fcbef2f8bc8499efad6b7066718"],["/mysql/index.html","5d452dcbed3ce72b57156f5d926ad55b"],["/nacos-service-registration-and-configuration-center/index.html","f14cbbe3890ef26e458b46827aa54a67"],["/notes/index.html","523169720f61bb69d2cf9b8a808e60a9"],["/null/index.html","117c567b1c80ab320673c60635f5062b"],["/objectoriented/index.html","e456502e9349a8641d6422d585186085"],["/observer-mode/index.html","c9982bd36708ec73ea163edfe85b69dc"],["/off-heap/index.html","8fec92ee3f4375a8e05de2af8010f410"],["/operating-system/index.html","9573f64473f31156aef37e476525ecde"],["/page/10/index.html","6dafa330c581c2f6fc91a5574f43cc9f"],["/page/11/index.html","e821c76af402273cf241ccf4d0bc6836"],["/page/12/index.html","37afd9d576ac40011d9e66444e0a2812"],["/page/13/index.html","e035e5dba7807dfbc0600ae4c923cebe"],["/page/14/index.html","e17f2ebe4baecefffd457f31d2ed1891"],["/page/15/index.html","307568c9ff84c339220ddcb434f932a4"],["/page/16/index.html","b214af543abf112bba413029d75a50e2"],["/page/17/index.html","4b75459975f211fba7e34204fa5118aa"],["/page/18/index.html","87ad2074aac522aa8c605fe6c55dfbbd"],["/page/19/index.html","29357a53abf9c1589fce7dc40aebe45e"],["/page/2/index.html","ae800caf95d2d60ee6d704079d6cfaaa"],["/page/20/index.html","52d69761426a60e6c9ad338f11141521"],["/page/21/index.html","2c96d0ee894d365bb559f260d565cd2d"],["/page/22/index.html","8efb09bc2379d13de53a72120ce2b697"],["/page/23/index.html","161c102a6de1dc82e8a473e842166194"],["/page/24/index.html","2be7442b748a47ba24b29c385603f02f"],["/page/25/index.html","3f3d7259b8c9feb522765910418b504e"],["/page/3/index.html","937d455e0386fa0c6ee18888a8c25217"],["/page/4/index.html","dbba33ec0bdd663fa83469d5c8539ab4"],["/page/5/index.html","65c34b02bbe1bbbe700f907556565c60"],["/page/6/index.html","781eea7dc4071de5bde33aef3f081299"],["/page/7/index.html","efbd474b6b369cc58edf715abb5d04e5"],["/page/8/index.html","dc80c72caa733c960c15e7582b21568e"],["/page/9/index.html","25f40a9cdd139ae962a16b6fc3ec2463"],["/palindrome/index.html","1f8455d41b1ad59156636ebac02e3435"],["/partial-derivative/index.html","b6f6687114ee5cfe719805890002962d"],["/pass-by-value/index.html","b124e40cfd6cac17c74e90faa2379bf0"],["/pictrue-bed/index.html","a7537faa3aa85278b93fa37cbf6e7cc4"],["/principle-of-opening-and-closing/index.html","65ecf61318f75ddb03408c5abfcf2c22"],["/principles-of-computer-organization/index.html","741b58c79ff88235369ab484758bfd1e"],["/program-test/index.html","7a68e9ea65e29e055345e91b6c844684"],["/prototype/index.html","7da48f731701fd8464cc07d7af8d7e45"],["/queue/index.html","4efa5a354073cac70cff8b1534e168bb"],["/random-weight-distribution/index.html","fc7659a7c360da0fef518fb33a0ceacb"],["/realize-modular-programming-with-functions/index.html","c95a0b1c89be51f97cd13bd82d3f0be9"],["/redis/index.html","0f5e2f6c5ad7d53bf9b091e1cb634a0f"],["/reflection/index.html","f1b78171fdf3f1156d2d12fe59605aa2"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","a4ca29b4a04a4d2e78f0ae57e16d400d"],["/ribbon-load-balancing-service-call-degradation/index.html","c5f02866fe21ea86987dc18689203ccd"],["/round-dp-algorithm/index.html","a5969b06b1def3468f617b4e6523b414"],["/seata-handles-distributed-transactions/index.html","c20900097c9f6634df5ade49f00fa0a9"],["/select-structure-programming/index.html","7a058bbe90a9ce238e91dac4110e8306"],["/sentinel-realizes-fusing-and-current-limiting/index.html","102a3f225cb1893227b3aa8f264fda58"],["/sequential-programming/index.html","f15c2d83be370f647671586fb294a324"],["/series/index.html","e3f8299e594389c6eb97a63d9a37c1ff"],["/service-worker.js","75b3c29029eee66cbdfe69cf7bd9c754"],["/shortest-path-algorithm-Bellman–Ford/index.html","d29edcdfb73860806f635bae2e95f902"],["/shortest-path-algorithm-Dijkstra/index.html","498c167239679a58d321362ff65d12ae"],["/shortest-path-algorithm-Floyd/index.html","fd58997cab2a0617fbb1e98f50f36c7e"],["/single-point-login/index.html","bbfcef4ab74a15c93a13245c98848b53"],["/single-responsibility-principle/index.html","fbf1f1d594fe6482939981ba6e34dbba"],["/singleton-mode/index.html","f6b67506a2a787d38f55f67960e6e676"],["/slidingWindow/index.html","1d5c852441757d78ce62e05bd88cf58a"],["/snowflake-distributed-id-algorithm/index.html","e01a8717c2df9c74e1dd0d048b919182"],["/sparsearray/index.html","cfbff78fa89b47f0d6f6140dcc8372ba"],["/spring-and-jwt/index.html","0bbde4c1e98119c6d635e47a5bdcc76f"],["/spring-architecture/index.html","d7eabc51958437f34d8574b9cfffd7d0"],["/spring-relate/index.html","684cdfb9f0a13bb46c4642fe9a886c65"],["/spring-springmvc-mybatis-integration/index.html","bb27b61ee2befeb04486c7e58cbfb9fc"],["/spring/index.html","8038aaaf76356ed8529ed2307749ca1f"],["/springcloud-alibaba/index.html","79a66a3aee9a19392d46bf808035a945"],["/springcloud-bus-message/index.html","3b891fbbd67de2ecb8962b13828613de"],["/springcloud-config-distributed-configuration-center/index.html","af0893f1cb27a70d23608cbe367da974"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","c10f4a4ccaf311d63375379c0e21ffdd"],["/springcloud-stream-message-driver/index.html","cd7819d6f5f7030b3f0f17b104d6b0fb"],["/springcloud/index.html","03b2a310e65f3668db9126f3fe6e8526"],["/springmvc-environment-construction/index.html","71803e32c90caaf13ba68f4d4d774c7a"],["/springmvc-work-stream/index.html","00acb1fa4bdde3da1de5c44305f81d7e"],["/sql-injection-attacks/index.html","a75dc21ab5792930dfdf10a06b951c53"],["/stack-simulation-iteration/index.html","b4d76a8ce715c5c06f5609fae94191a3"],["/stack/index.html","29693ae4747aae87e3910ab633579399"],["/state-mode/index.html","4995afbdf4def8081ba48482ad635e70"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","914e82503e7c0eabc8e828eb83644fa1"],["/strategy-mode/index.html","f4f726550965d0c9253c570f73b2db24"],["/sw-register.js","ba817be09aa24ea11b7cd21288962ffc"],["/synthetic-reuse-principle/index.html","6943630351cc6520cb57a811d5d5d288"],["/tags/C/index.html","21907c3b607e5fda8bc36b596df5270c"],["/tags/C/page/2/index.html","a47f8a70ea338723449cbe063168a3b6"],["/tags/Concurrency/index.html","301caafcc1e0f07f9e42f68b38dd7e7a"],["/tags/DesignPatterns/index.html","6a6e6939bde8e8139bca2c49ff9a83e7"],["/tags/DesignPatterns/page/2/index.html","ff521b715ad0041a6c10e613d53e9292"],["/tags/DesignPatterns/page/3/index.html","cf6a19f3d1f8ca6ac9046d3ca59642a1"],["/tags/DistributedMicroservices/index.html","8c56bab7ec22d18c07d432369fe9fd9c"],["/tags/DistributedMicroservices/page/2/index.html","3082f7a610003456c73fa49ae73f40d2"],["/tags/Interview/index.html","d9654dccbd7205d6c44619b4d34662ae"],["/tags/Interview/page/2/index.html","9c8e52d2b939e4cb549b63ddf5cea69b"],["/tags/JVM/index.html","84fad06079b92b5c81cff759f2c0f58e"],["/tags/Operating-Systems/index.html","ae9fb187034cce8d593ea71a6cbc22ac"],["/tags/about/index.html","76480c3bb31c13f496345667935928e9"],["/tags/ad/index.html","f972becb44ce75cd4a6afb69ab83527c"],["/tags/algorithm/index.html","2bff6cecf12e1746563e0278503f7f71"],["/tags/algorithm/page/2/index.html","c14d6c78ffcd06aaddbae71d35ab5c30"],["/tags/algorithm/page/3/index.html","a497628465bd028e30489580a58b7c45"],["/tags/algorithm/page/4/index.html","1c8d20bf44f14d41f455a3b0e76e7364"],["/tags/algorithm/page/5/index.html","d9cd404d36a88f515e13c28bfedbf557"],["/tags/bug/index.html","58f062910174dd94d82589e95b7d7257"],["/tags/computer/index.html","67872b09dbaa8d971b249760d06903ea"],["/tags/data-structure/index.html","e9ccc0b3a0b5b1a6ef7c89b74479d3e9"],["/tags/docker/index.html","484296b891ce520f8fd60ea1fdafa1cc"],["/tags/frame/index.html","48efb5cc6dc80fa0285a340a8eb14faa"],["/tags/frame/page/2/index.html","3ec1418313a253e5da7d79773afbab09"],["/tags/framework/index.html","1f08410277364a9312964d4efae18b3f"],["/tags/front/index.html","528e19f37f789242830631ee324bfe25"],["/tags/github/index.html","55e9242f5160efe5a54b4b7c9fc73ece"],["/tags/index.html","f8e525c57cedf531ef234aaffe63074f"],["/tags/interview/index.html","5f1cf9ece648daec1f2ce740022cb0be"],["/tags/io/index.html","732b9c0154a335b50e16ee6f11ec40ed"],["/tags/java/index.html","9e0e4105a6c32c438fb26ef432631039"],["/tags/jdk/index.html","413e45836375f738821b09344e4fe12b"],["/tags/jvm/index.html","60edd086f7a1a04b4761645fd36e9338"],["/tags/jvm/page/2/index.html","e4dd5d81fc9f67a8abdfbe331bff6bcc"],["/tags/linux/index.html","49b273ca2eb59f740156367fdcab5088"],["/tags/maintain/index.html","f4d497f59e7c2a5972ce3a650e859f7a"],["/tags/math/index.html","4f408a11550ba998909d389a1151bf36"],["/tags/math/page/2/index.html","bfc260e81f54e41b6584f45535f84913"],["/tags/middleware/index.html","0c246ff64ad8eee1573eda210c7736cd"],["/tags/network/index.html","2271fb9dc1f3b523bdfd21a253a76641"],["/tags/network/page/2/index.html","64ee625a0d01a7178e1c00c5cb216e59"],["/tags/project/index.html","39b36594296531afedb1932b90b148fe"],["/tags/project/page/2/index.html","6aab1a5376765b8e347941eb196df1d5"],["/tags/security/index.html","93b6a84b5ddbc63ca2ad1fa4bd1c4e7a"],["/tags/sql/index.html","606af73c8a1b7a70c4340c5df371bd76"],["/tags/test/index.html","56904600f0d1fb02657e14c529257dda"],["/tags/think/index.html","d421a43f3efe0726422367fbdf16c242"],["/tailscale-ssh-remote-connection/index.html","49db79e7bd96dfe815698b2e6483c6ef"],["/tcpip/index.html","2f1099f3525b15c382b8d33b36ad961d"],["/template-method/index.html","a677d8027b7058765c67be0c8504f557"],["/test-case/index.html","0226610d199034b57ec9ca2ecd2a7a17"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","3c7af9edcf76d6b3b550314e37d85178"],["/thread/index.html","78704b5a536b0fa9e2e135d95e9b4553"],["/tj-horse-racing/index.html","acd067452d319644de1d18d448aa76e6"],["/topoSorting/index.html","22a8e0f7c1f7ed81bbb1cff6ce39a0d4"],["/traffic-monetizationaccess-to-google-adsense/index.html","463bbb2aefc34ba550c954ae57cdfe7d"],["/txCharity/index.html","a59cd05ab7543f3414ae6a4d9de5cbdb"],["/ubuntu-set-ip/index.html","188df1572812638d09fe6f55c6d7325a"],["/undefined/index.html","435deab8741cd5ad4a2e4ebe10709207"],["/use-arrays-to-process-batch-data/index.html","871795071cf8e9f43bcfa453b7e5b14e"],["/use-of-springmvcmodelattribute/index.html","609b2c5045eadaf0492f2025c0cb5662"],["/users-create-data-types-themselves/index.html","e2e47c0c37877a6c63df34b549a2205b"],["/visitor-mode/index.html","14336e1935f89aad6fb2d2d5e52199ff"],["/what-is-milk-and-why-is-group-wise/index.html","5986902bb8513d9cdd87008265233a55"],["/wiki/index.html","dd81d78fa30fea8af78c4e8b07b059c8"],["/wiki/tags/知识库/index.html","ca293dd0e1dc5c2cd1e4221113752dcc"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","3d6bb0b5bcbdbd21dd5c9e21cd34ac24"],["/xss-crosssite-scripting-attack/index.html","266989c065c45bc39261714498d57a31"]];
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
