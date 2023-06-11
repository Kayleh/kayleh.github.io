/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","3cadb5deed365107c4c784efe795cdfd"],["/404.html","b68097e16727b392e25ab13c51f5cde7"],["/404/index.html","45b5ac28fe22cba88fd43d60007be399"],["/7-sorting-algorithms/index.html","d81b90ce7a1dfe6c4fc79d19e2b37ac2"],["/AIO-blocking-model/index.html","6b28f86a84592d5dc5961e9cd43791de"],["/About-Snowflake-and-Consumption-Degradation/index.html","6d0e6433e76b5af4e2c6ecdb7d4cef85"],["/BIO-blocking-model/index.html","06a690848010965e5976d0f22ad0de45"],["/Bloom-Filter/index.html","ee5a3859583ffa7108d3c0cc3993d7d5"],["/Boyer–Moore-majority/index.html","c942cfb74a766df9cb5dcde1786e04d2"],["/C-algorithm/index.html","e3c8f2157815932f2335a248a0adff47"],["/C-programming/index.html","acbc9d71202370f74e7ed34308347031"],["/CAS-&-AQS/index.html","85be82f81a574668049828521aee2cad"],["/Comparator/index.html","6181ca2e37974533061aef7bfd7759d8"],["/Differential-array/index.html","4bc15054e8e3a89ccc296eee4026ce1d"],["/Download/index.html","e0731235595d2668fa1eb887d0ae432f"],["/Front-end-security/index.html","f07c07333650085b9d49f89f2e44b237"],["/Good-use-of-pointers/index.html","f5c170d14adab955876aab3f65cb1ffe"],["/Graph-degree/index.html","1e66e3e25409efdcc8f707133b349196"],["/Greedy-Algorithm/index.html","e7e926ae871f68634e10769b2fba6d17"],["/Head-First-Map/index.html","664c9ae429c53a4f1e8b8e9ed1004eb8"],["/Head-First-Netty/index.html","5ed6cf569b6909ae78a5cbf834b84bee"],["/Head-First-Nginx/index.html","3cbdc6a763abd096d2a7eb2cf5916d58"],["/Head-first-Spring/index.html","a7b4361b715b71a9b5ff48a109b96067"],["/IO-model/index.html","771509151e6c59c8f0c10b516d57e60a"],["/IO/index.html","6ad3a3202e0a43e000bb0663c96c2fd3"],["/Implement-a-lock-based-on-ReentrantLock/index.html","5da53f7e2976b409a4f08faaaef69741"],["/Improve-Robustness-(1)/index.html","f2c2a915960bd26cc228d418081989ac"],["/Improve-Robustness-(2)/index.html","0cb87ce6e38b4a6012dc33f934c614d6"],["/Integer/index.html","be94a2c56b254587e4470e7963f3b313"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","8d6e2168fcf27e2164aaf8e6be09ad5f"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","f8e460d0b1721264868b5e68c2e2b8ac"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","02a93d2a2903d1e265da1b5bfee3ac5a"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","c24189b4af80806d9909baf71628361d"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","a99cd1af4dcef6464550ac918e498f4e"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","f5f804bcb83d20c6ac9158bcbe66bda2"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","70ae61bae0736383c3dacad7380f83c1"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","c28f2d8ad781a50f63caa6e5972c0b84"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","c22d17b713071a51de0972d96f3dd548"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","e4dc3669e472c4220d193bac14958058"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","feb2c9bf2c426c7c74daf6541e155cf1"],["/Java-network-programming/index.html","245e6cb8c5e738b11a117331c74ee727"],["/Large-number-operations/index.html","bec8b6385eb55d9a5fa4d53ea5dc80b5"],["/MYSQL-MVCC-&-LOCK/index.html","42a3c15ec8fc99cdf7d22259c7618bb4"],["/MYSQL-uuid-and-page-splitting/index.html","51b2ffb6a2ae4cf75c6df71a9427495a"],["/Minimum-Spanning-Tree/index.html","c9fbbb6526004bd6a3a8267de2e5dbf8"],["/NIO-blocking-model/index.html","9f5dd366544b12439fc71ecde5711af3"],["/Nacos：Configure-MySQL-data-source/index.html","1337a7846a0875f0ef6d97e66b04316b"],["/Native-method/index.html","9ad7213b149980a464b0508c0ffd19a6"],["/PriorityQueue/index.html","3f056265eff57515573f86f425cd822e"],["/Proxy/index.html","9d6e2f6ce58ab1238d8ed148aeab2ec1"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","0dfdfb258368ba850f97868c628bbb39"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","c9844aa4091e6ba9b111993d2201fbb6"],["/Reservoir-Sampling·/index.html","d48b993f4da43f1a51368991810e88c3"],["/SQL-injection-vulnerability/index.html","b257757d381075b64eab73ad99b240e9"],["/Sandbox-security-mechanism/index.html","3e5d127985f0ab59ae0f385708604465"],["/Spring-Cyclic-Ependencies/index.html","8f9979a265aecfabe2779e7aa1d6707c"],["/SpringBoot-startup-process/index.html","147eb6abfa8c5995f4b30763e66de363"],["/SpringSecurity/index.html","031707bc6810982991eb5bf680c78195"],["/Thread_Pool/index.html","02dcdbf4f483391c4a5a691bdf898b9f"],["/Transaction-isolation-level/index.html","3b9ad8402d009754da53c8cac757e4fa"],["/Unitest-framework/index.html","a6fb1f612b53b76d3c53d12c1bd92efa"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","01b0bdce5ddc19b631fd3eec7a600a79"],["/about/index.html","93091c603e66d6d604267a9872792379"],["/adapter-mode/index.html","c9d427c80480ba9034d0dc60f1d0c30e"],["/adjacency-matrix/index.html","8e065b02bf7a3eee8b3793326e095e28"],["/adjacency-table/index.html","6a4b499e6fd7243fca3eda4e43436d3f"],["/agency-model/index.html","5847f8dcf296ab9df8be36db50028298"],["/app-test/index.html","ca6e76740156bdddc3459e8d484031f0"],["/appearance-mode/index.html","8d04f6e95ef07b405025e1b334f5ac87"],["/archives/2019/01/index.html","d74ad6e2ecbf541887425298f03566e6"],["/archives/2019/07/index.html","44b5edab12f229e8b2b69d0d083b191d"],["/archives/2019/10/index.html","a6fe2c241cbc3158b134299a51f4c6c5"],["/archives/2019/12/index.html","4d0e65b5612188c4c9a2a89cc4dcaad7"],["/archives/2019/index.html","7344d52601d1983608f23bd8fd47c9b8"],["/archives/2020/04/index.html","6665f4349a90ba882504076814a766ce"],["/archives/2020/05/index.html","1a82e765ac1876ed4bfbdc900b12d049"],["/archives/2020/05/page/2/index.html","1b5cc158622e149bdbffb6b827d3ef32"],["/archives/2020/06/index.html","f505b2ae5ce69426b5e50629e484b66a"],["/archives/2020/06/page/2/index.html","fc1e602c42a539aee18ca61f7c7d327b"],["/archives/2020/06/page/3/index.html","34096c01042e1486dccfbb81d6fa205a"],["/archives/2020/06/page/4/index.html","2e0feec838988386ee2dbf3b8da7e9df"],["/archives/2020/07/index.html","08cc3e73af15adf08ab158e494c6304a"],["/archives/2020/07/page/2/index.html","46b44d65e50837b4e12442d671e135b7"],["/archives/2020/07/page/3/index.html","bbe49e0ad54271a407a82cdcbd9859bb"],["/archives/2020/08/index.html","56ae61bc3405285920d33a4ed3f52caa"],["/archives/2020/08/page/2/index.html","6cd3205892bd4235165d54e248618180"],["/archives/2020/09/index.html","0ea961306ba726ac08304f009054fc62"],["/archives/2020/09/page/2/index.html","7694496de5cd22178d812ebc99f35773"],["/archives/2020/10/index.html","fbab417b30ea7089181321bb4e3144da"],["/archives/2020/10/page/2/index.html","115a3a912087b5957a370a1f674ca5a2"],["/archives/2020/11/index.html","da27000bf4ecfc903ad512534766977d"],["/archives/2020/11/page/2/index.html","94622eccae0cfb9c5a8d588b7580478f"],["/archives/2020/12/index.html","895ce16fa134c09bed98d773a631b661"],["/archives/2020/12/page/2/index.html","d56c8e5981bfe5438386cfa1928f57e8"],["/archives/2020/index.html","db88073b449a2ad45ff8130d87fe8e56"],["/archives/2020/page/10/index.html","3aa927d27e48833c6fdeaf40b3f52de9"],["/archives/2020/page/11/index.html","fbc3658c3c4100a302233fba8f3da3e1"],["/archives/2020/page/12/index.html","5d7da93dd630e11be1c3274b2a4d1e98"],["/archives/2020/page/13/index.html","6f208c111be10b8a03bf2a2dd4b752c4"],["/archives/2020/page/14/index.html","079acf5076ed97822e84ae040e832e1f"],["/archives/2020/page/15/index.html","996ae0fcc5c0f39eb5e9e49ca3f652b1"],["/archives/2020/page/16/index.html","88543078c0543aca75736bae8b4224a9"],["/archives/2020/page/2/index.html","5bbff65dcb7038b6fa8129825579ae43"],["/archives/2020/page/3/index.html","ceb3828855f8b6fc7607b89f5add849b"],["/archives/2020/page/4/index.html","438c7a6e8d1189a0824d5ac25ce4c6f8"],["/archives/2020/page/5/index.html","a95ee10aef2e48dee565127ed8ecc6aa"],["/archives/2020/page/6/index.html","78d1e1059f7502a026c9f5dfb374a9ea"],["/archives/2020/page/7/index.html","5520e340271fe04d27d93aeba4587600"],["/archives/2020/page/8/index.html","e1fda8785df80c29981a7a03583b9346"],["/archives/2020/page/9/index.html","86ff8096c7771346f305db67ce59670c"],["/archives/2021/01/index.html","7cbc58eae2cac64fbdedc35faf627ba8"],["/archives/2021/02/index.html","982d873feca68a996c9e47eabaca6778"],["/archives/2021/03/index.html","5a25760f77e8866817a26a3571cf882d"],["/archives/2021/04/index.html","e872681e2d6931a63dfc284d277c1682"],["/archives/2021/04/page/2/index.html","7ef5158b1124c68e92022bc13694cc28"],["/archives/2021/05/index.html","0564851be679e604997f47304a8755bd"],["/archives/2021/06/index.html","1045fcef418b9f5fa74a343c1bd4332e"],["/archives/2021/07/index.html","89dcf53571ea412e3f00f1379f0d2999"],["/archives/2021/08/index.html","87c6a15bcad07c909069e5061e625b32"],["/archives/2021/09/index.html","6e06f0b7ae897547fc120c0e553cbd84"],["/archives/2021/10/index.html","1090ba5c5c52fd5f2e91bbe45f3cbec1"],["/archives/2021/11/index.html","bf299b3974ca140d44530ba75fdfb41e"],["/archives/2021/12/index.html","bd7e5e6059809ec2f7419d955bf1889e"],["/archives/2021/index.html","838b068f2d2a17ce9e5cf9a7c2b45b9c"],["/archives/2021/page/2/index.html","22fb92a05596e4b0d8d4173ad9dbfbdf"],["/archives/2021/page/3/index.html","c808a8533b795d3eca765a59947bb0d1"],["/archives/2021/page/4/index.html","5df32253413cf1e9254776b167dd7cbc"],["/archives/2021/page/5/index.html","814d26e9e60ca3d5b545dfdab5458e49"],["/archives/2021/page/6/index.html","125ef023bbd984bc8e93f6a443ca6be6"],["/archives/2022/01/index.html","d4944381816183f26b93be6c1039f48e"],["/archives/2022/02/index.html","cea25f492a28d71bd7f946fed1c18875"],["/archives/2022/03/index.html","76b2b5c6c9ea8d9f9d92c7f59c52d596"],["/archives/2022/04/index.html","921d9aaad00446b31b325f3375d00a8b"],["/archives/2022/05/index.html","2978315e08614b60e75211e20052fbd5"],["/archives/2022/08/index.html","cb6ec7a06f96eea82544db5fe370ab2d"],["/archives/2022/10/index.html","9877a118fe68d6d98be3bdfd20eefdf9"],["/archives/2022/11/index.html","8ea65ae036c70fdf896223e15ad7f13d"],["/archives/2022/index.html","90195f8810b01fcc06c8f9d034d1165c"],["/archives/2022/page/2/index.html","57a45a790fe6a4a7b622961d92efecce"],["/archives/2023/04/index.html","a40dea3c79465ccca3555f5baf9fd4d7"],["/archives/2023/index.html","a9a04e3ed2010051346a50b746c61b01"],["/archives/index.html","ae273e9148b762afca0c277104005432"],["/archives/page/10/index.html","fed7e6c6468cf10144c09d1cca11f23e"],["/archives/page/11/index.html","dd6e51ba67cc2e43f642ef40963885bc"],["/archives/page/12/index.html","adc4f29ed8f25621ec486edc9a754842"],["/archives/page/13/index.html","650483590e42de74ac58621cbff07671"],["/archives/page/14/index.html","f14814a2469702f1ca394c59e6c4d581"],["/archives/page/15/index.html","ddc2e85c0f0d50a9d9c5b16a6b51b0c5"],["/archives/page/16/index.html","e4224cb4f116bb9e43430fa9387dadfd"],["/archives/page/17/index.html","d75d2b07feecb2aa323f854f8ec4669f"],["/archives/page/18/index.html","a4311a3e150469cd5cf0b652b25d2780"],["/archives/page/19/index.html","c1098a3723a7adc987559981c7273b04"],["/archives/page/2/index.html","0c475386c76805cc8252b44bc57051aa"],["/archives/page/20/index.html","5d73cd066aeea79807f40e2ab5dc935c"],["/archives/page/21/index.html","a2797f6cb6c41e31ff2b776977e4bad8"],["/archives/page/22/index.html","c12e045890c05d94ac66811ef8b44380"],["/archives/page/23/index.html","e48e8ed580324a538317860aaad3c291"],["/archives/page/24/index.html","2f4ec4b4f5d74996c1e86da016fe0bac"],["/archives/page/3/index.html","2fc4d4f84f1fc16417d2d402666e2961"],["/archives/page/4/index.html","35a91970e72a6953031c3be1711aa717"],["/archives/page/5/index.html","fafd96ec82a24f730a1991b1ac6d8a30"],["/archives/page/6/index.html","2cdbac2e9f3ff77fd837076e0d8805c4"],["/archives/page/7/index.html","bdb9e57b58ebf54ea6e9c4c1ec32a9ae"],["/archives/page/8/index.html","269e938fa5783f1bf279d9238982a9f4"],["/archives/page/9/index.html","4ba8d4e7882f94bc9b5fad5e8357ad28"],["/array/index.html","844b1b9cfbdb8cd7754bc4b1000f807d"],["/automated-test-katalon/index.html","9dfa6c678cbde9b64258d225c9081c77"],["/automated-test-selenium/index.html","f848e6b08105aff6041948beffbe6af4"],["/back-to-table-query/index.html","10d7076c5d8a74bf5f613521f69cb0e3"],["/binary-search-algorithm/index.html","2b5941bf22572470125db477c18da55f"],["/binary-sort-tree/index.html","ca4415b40457bcdf077f9f9b8c87f639"],["/bionioaio/index.html","6721ca42ae7853ebfbc23048dedde28b"],["/bridge-mode/index.html","df22fb05e18059318d8d8e8a447802e1"],["/builder/index.html","7f9fad9e3cdd3c7ac55879584f14c39e"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","7c764bf33fee928adb8d57401c0418f2"],["/cache/index.html","30bcd98ed39d3cc2d0ca45343c575d4a"],["/categories/C/index.html","6b2f69c0b2b3f552695ccef38381511b"],["/categories/SpringMVC/index.html","3edf62bbcf85525ec4db70df6ebae581"],["/categories/categories.html","92536b3ba042f5edabeab28a46d9b449"],["/categories/index.html","cdfdd2fee31178a464f13487ab772e82"],["/categories/linux/index.html","73f18d951350e25b931bea19bc635fd6"],["/categories/分布式/index.html","b4c2539f8d9002ebb8ae9a6ac1bed127"],["/categories/分布式/page/2/index.html","96b4fb3355f39e4808b4ed6d210b50b6"],["/categories/设计模式/index.html","d49e81647783d9776b97c0a20941a8d1"],["/categories/设计模式/page/2/index.html","5aaae9bff9ded1c64177fb93e26c8043"],["/categories/高数/index.html","64b6aa3da2788acfa3fa93d198f89c60"],["/chain-of-responsibility-model/index.html","077be12c870e8f08c3d30e4fff7d8507"],["/charity/index.html","4231cbfd1835d78aa53f19f860bb1877"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","aec1167cc37894fe6d256a3cf2cd367e"],["/combination-mode/index.html","a8fb4a87f0e15a06ff2ce1641c596da4"],["/command-mode/index.html","77a483d344641b4575347453acc32897"],["/common-commands-of-unix/index.html","68e4d3886be539494d2343bc60b0b607"],["/computer-network/index.html","be1b991d3dffe27b40c0bb7335c0227a"],["/concurrency-principle/index.html","456f548ff46567a14c37aa6745bd2af9"],["/continuous/index.html","9ff8bd13fb9cad2452b8482360490ec9"],["/contract/index.html","654b4e4a4b0e5740c3c1a48375845413"],["/create/index.html","c0a47cc1e15762b10649c8b7ba99f1ac"],["/css/main.css","0ab02c81a8ead489278ab88be7700809"],["/cycle-structure-programming/index.html","6e1214aa1cad2f7c576155284b5df28c"],["/data-structures-and-algorithms/index.html","231388b22b7b09819eb5fa4002b6212c"],["/deb/index.html","1b7b50008436eb9e076604526237cce0"],["/decorator-mode/index.html","d7a34c7dd839ba1f9dc5a2e66c3a3106"],["/definite-integral/index.html","822cdaeb7ddfddad2b09f5e0214b3739"],["/dependence-reversal-principle/index.html","044679f6a26100634e466ae451e0efd9"],["/derivative/index.html","69ea737c8c396905c081da3948e917be"],["/design-patterns/index.html","76ee328c367505487a5cbbcb542e1803"],["/dic-algorithm/index.html","c285a242a3c1f0100435dc54d5d0e55c"],["/differential-equation/index.html","f9d8c497b89019487b76edeee17fe33d"],["/differential/index.html","f71578c4a5d0a3971fc231f61cf9a17a"],["/dimits-law/index.html","de7f5e5247cfe82ffb848163a24820fb"],["/distributed-lock/index.html","11a55119b90731acf95a333c1a387cfd"],["/docker-virtualized-container/index.html","8055ec6890e098b70ff35017f0d3025a"],["/double-integral/index.html","a266f1c86f95ba9b04fc4944d87f6eb9"],["/dp-array/index.html","234594952603f89bed56a48d90ddf35d"],["/dynamic-array/index.html","ce42bf7db23c620d02c8f88602fa9d3a"],["/dynamic-programming/index.html","37559e182e5dfb84512570da34c713e6"],["/edgeset-array/index.html","0eddfe70feafb8207f50c04e8a1ef8ec"],["/encoding-algorithm/index.html","e1f8c5eff2dcbe568cae86938435b57a"],["/eureka-service-registration-and-discovery/index.html","52e835109792f30821d0877d03f15889"],["/extreme-value-and-maximum-value/index.html","e1b036d515ee7667150042af6cbe00e5"],["/factory-design-pattern/index.html","c06f934935b0196a356e86fd0caf38a1"],["/file-input-and-output/index.html","8a60564729ba067ba70d55f8f44f28c9"],["/flyweight-model/index.html","4d32b0ae7bffd492e4890ab6925424df"],["/friends/index.html","5e5079280b459966bbb9668578b17078"],["/function-graphing/index.html","2f43abae85c7d769ce14a1e840fd0d67"],["/gateway-service-current-limit/index.html","3668de116178b1f6a3370f4f1a0c0063"],["/gc/index.html","a5bf3834fffa2370731d61ec7217cfe7"],["/generalized-integral/index.html","5a5b12cb8f84168dd3e25a383e9ed69e"],["/google8102e2f35ce9e391.html","e9dde86bae892e994547d4446252fac7"],["/gulp-compresses-static-resources/index.html","6ab9e4b6c29230fa39524ac6b39507c1"],["/hash-algorithm/index.html","b05f8534799aea187c3bb254a47f0391"],["/head-first-JVM(1)/index.html","eee1fe15ac0e09d5e3fdff7fbe5c3d7a"],["/head-first-JVM(2)/index.html","6f9496604c24f280f538a24b07a025c7"],["/head-first-JVM(3)/index.html","828caad663c90b4a9804436caa8cbfd7"],["/head-first-JVM(4)/index.html","dfafea017fcf7403bc81bef6c494cad3"],["/head-first-SpringSecurity/index.html","5d761022d749844423a3553149606db5"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","74be357bebc57dd5df3262cd0628cfc2"],["/heap-sort/index.html","c1848adb4702ded8d99ca2dcb57dc147"],["/http/index.html","84391aabe3435f3b6ad435dcffe5b377"],["/huisu-algorithm/index.html","c54a0845c927f9e5d15a687e11fafc09"],["/indefinite-integral/index.html","671baa4d0bd4abfc472b7e0291634d32"],["/index.html","9781033cf87a203ca73627207b6a01f3"],["/infinitesimal-and-infinite/index.html","4befc47c685b68e79c1957e9a563b456"],["/interface-isolation-principle/index.html","0266d552a3b87ead3739f823357b9943"],["/interface-test/index.html","10ee9f6c73de33056f1a82cac4bfb89d"],["/intermediary-model/index.html","76528356424f07de8290dc2d27070257"],["/interpolation-search-algorithm/index.html","dd6b5d5f7a5200db2f89ff68a57a32be"],["/interpreter-mode/index.html","0bd6e204a5fb3e809f110bbfb9e30fa3"],["/introduction-to-computer-network/index.html","f93ac88b377804e174097c0c003cee89"],["/introduction-to-operating-system/index.html","0d74f0fe0c42ff83df9527076fc732ca"],["/inversion-of-control/index.html","544487352b85653071168bce8ee1259a"],["/io/index.html","83dc083b403760462c1f1aaf2a7a41ab"],["/iterator-mode/index.html","925b071800478a4a69c2e76101ead085"],["/j2ee/index.html","4c1cdb79caa5c2961caddaac53ae734f"],["/j2se/index.html","65c78da75a1385eda8f0b3fd3e48e343"],["/java.lang.String/index.html","c1910ad328b586fbe8a34ce69aeea51d"],["/jdbc/index.html","28aa048735a91cd148b2ebf58b612a14"],["/jdk/index.html","f97cbd276515ac33b255a5567fa665c9"],["/jmm-memory-model/index.html","456aec1722ac4cdfd4e67328449bdb6f"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","96a4a2bb95c55cc19305574746b25dde"],["/jvm-method-inline/index.html","023013bb515110bbf5eab30e575c21e8"],["/jvm/index.html","2b7f356bb50c3e3a0d52938160e2f29c"],["/law-of-robida/index.html","82eb81f953361d1fbd491174525fc940"],["/limit/index.html","7b7ef09603705fd517d58e044bf0f372"],["/linear-search-algorithm/index.html","86d316f6211e54e968ca6be1d12d25f6"],["/linked-forward-star/index.html","369eb6a105949f6d903c238d66711e3c"],["/linked-list/index.html","2d7cfa5f423fc503e30d0d36f6a63eae"],["/linux/index.html","b8f2596be0bdbce207b1b57af084dbd4"],["/liskov-substitution-principle/index.html","b362ec325cac08d6c21fcc069d9dc3b8"],["/lock/index.html","9ba1359eb538b2a3fcd8b25031636b57"],["/lru-cache/index.html","18cdb1ddc1b3757693a4c89f2a8e3355"],["/maogai/index.html","fb2c7c94dc17e5975393e3ee4a60b377"],["/memo-mode/index.html","a1e50a8f9c1408e93d62fb57926c9db5"],["/monotonicity-and-convexity-of-functions/index.html","0724e1308db7f3935b42334d4f453d2d"],["/multi-function/index.html","15162861d4278c1e4913a7849f780aa9"],["/multithreading/index.html","096486ea70f33eb221afa63759fe45e4"],["/mvc/index.html","88080ffb1fb874e1ee279a413525c6b4"],["/mybatis-cache/index.html","f9b7b500042159e3e330018cbd519985"],["/mybatis/index.html","862f945062aca3130f9b22bd59c45d1f"],["/mysql-index-wrong/index.html","570307a601ae545f8b5141dd6f943ecc"],["/mysql-struct/index.html","46ab60f24eface131dc123bce3d7b734"],["/mysql/index.html","3f178ea6c1b3545b8482b713ff108350"],["/nacos-service-registration-and-configuration-center/index.html","83d1014a8fc045bf212598a1206c913c"],["/notes/index.html","600936fef04030c1fa771e65e990805d"],["/null/index.html","22b611e482fd71daa17fed78b931eb28"],["/objectoriented/index.html","d994558c9f99b410390bacadbbf5b634"],["/observer-mode/index.html","993813d9ca2f0e639ec3e0d492f201a1"],["/off-heap/index.html","085786d7a5f86fd5dce9444acf5621e3"],["/operating-system/index.html","e598f7cd90c466f8dfba0a29b31c0e4c"],["/page/10/index.html","935e96c106f4d3c6a53508d033d43cfb"],["/page/11/index.html","9107fcff3b000f99002db26a1f89bba3"],["/page/12/index.html","4433a5c7ce31b3c6bde8d0e57ef31735"],["/page/13/index.html","456a60bf63d8c91aa6b7db9d9d271c1f"],["/page/14/index.html","044349c411ca347b90912cecf7b34371"],["/page/15/index.html","8aeaa3d81a89ab8362077620bf7301d2"],["/page/16/index.html","8bf81cbfe6af05ec417f052453b2c559"],["/page/17/index.html","c7ccc2c5e6d0ad1eca393636e7a341b3"],["/page/18/index.html","788c5b08bf52e8c17ae1bf0d221ec5b1"],["/page/19/index.html","74c721046660f4648fc9c0b6ae784365"],["/page/2/index.html","d652f810f746d66c36d27e98010ce0d4"],["/page/20/index.html","66f2a15b194dfa48ef42174cbbf2244b"],["/page/21/index.html","5b7e215c8122d7e235795591b836eae4"],["/page/22/index.html","bc7bb18579e52a9670cc961a85503d5e"],["/page/23/index.html","aadb5f322bea36c8e4f86394798545c7"],["/page/24/index.html","63a140f448368d244b51341653d1a6d4"],["/page/3/index.html","518ceb61c9145bcdcf757d5a48510672"],["/page/4/index.html","ec116eee1ff91cbcf1d0a2bce95efbd5"],["/page/5/index.html","e9be3597864cd2293abe177de90bd719"],["/page/6/index.html","c773f1adb9c7f902dc01af4bbbaa5d65"],["/page/7/index.html","46b2ee422c83a5cfa2dddab81a2a8d49"],["/page/8/index.html","660b070d2856d3cd906b8c5e76f12c99"],["/page/9/index.html","d441a1c610bfeb6fac5d105578ff6580"],["/palindrome/index.html","dd577ac1603d36a298153162c56324eb"],["/partial-derivative/index.html","5d296e82285839921f505d1aaf729cb6"],["/pass-by-value/index.html","d085a2dbaa9368c76eddbc32076a38d9"],["/pictrue-bed/index.html","e21a2581ad38330c427a1529e631a7c1"],["/principle-of-opening-and-closing/index.html","1dfd4c001549ec195fd60417c3697636"],["/principles-of-computer-organization/index.html","c77cac9e8ca54bfe264ba9b51b9241ae"],["/program-test/index.html","99ae268b846dbebce53bb6ecaf966750"],["/prototype/index.html","fc9bee0217b3a9909f88582acb1ae7fe"],["/queue/index.html","3d478db867ffb267ffdb77177da07942"],["/random-weight-distribution/index.html","8c633b2008573392b4db58b62139e277"],["/realize-modular-programming-with-functions/index.html","d4293e0cd10a587096fcaa983b6e9262"],["/redis/index.html","cf0efa5c534b78078ad72785a7bfb86b"],["/reflection/index.html","ae555c86ec179570a31222eb3b9832e3"],["/ribbon-load-balancing-service-call-degradation/index.html","eed0bd64a9ccc3b2c2e3394e359640aa"],["/round-dp-algorithm/index.html","9ec11e657570471f137a8e66423e0e8a"],["/seata-handles-distributed-transactions/index.html","09d6bbc7c2109d1063bccbbba085182a"],["/select-structure-programming/index.html","0d183391cc4aa318e19f7940bb3910b3"],["/sentinel-realizes-fusing-and-current-limiting/index.html","11075436aab42f4109402d1ead1e1cf0"],["/sequential-programming/index.html","a44cf44c05dc4bc2c55f0db765738e4e"],["/series/index.html","93a7341ca145bc9bd55c33f59eb288a7"],["/service-worker.js","33a19838f76d384eec7220e59f00b3d9"],["/single-point-login/index.html","74a47560430f5b46547f3b4e8bffdcaf"],["/single-responsibility-principle/index.html","9fa8e6b2e8aea5927a745d301e95fe01"],["/singleton-mode/index.html","96638ef3e5e6fcd01a01567c52436d50"],["/slidingWindow/index.html","f016d348ceadcfefb2cc96df8e4731c7"],["/snowflake-distributed-id-algorithm/index.html","d4b1b49a06a3b6edfa78b0233a519dbd"],["/sparsearray/index.html","396296a4cb1ba6be0ff97687057277eb"],["/spring-and-jwt/index.html","ef0175f520772fd7cf57bad9d26104ab"],["/spring-architecture/index.html","e4e91b918996fa7496838c65d4e30411"],["/spring-relate/index.html","cb747254383ef0759ab5a28c48b6d964"],["/spring-springmvc-mybatis-integration/index.html","2cdaf325401c019d94cc528598196e1e"],["/spring/index.html","fecc4c6a53828021124313c4682d94f9"],["/springcloud-alibaba/index.html","2240b20d0f92e473a534e66b5b2fed8e"],["/springcloud-bus-message/index.html","5f54068cc87fc584b3e9cc805cc083d6"],["/springcloud-config-distributed-configuration-center/index.html","edbcdd4bc32e95be0e0675e70b0c34da"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","c9d973c050f7528ba5751459bfdb6b04"],["/springcloud-stream-message-driver/index.html","9f16ef36c69f0eaa86d99b31c1cd2e60"],["/springcloud/index.html","e65068bd4b04503acd6fc997e0554721"],["/springmvc-environment-construction/index.html","33e961cec7cacd465f3923f2aa54dd64"],["/springmvc-work-stream/index.html","e455a8cf65b642c0589e08a1891b18cf"],["/sql-injection-attacks/index.html","58c175a30360be436dbff099207a6e2e"],["/stack-simulation-iteration/index.html","2669d8e1f40a14a6dac931ad51f100d5"],["/stack/index.html","f358ee9a79f26d5a70f728efa3534306"],["/state-mode/index.html","4cee5ab05942f2ef0946994608658945"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","aa09465ef0a88d3a898f1e738632b224"],["/strategy-mode/index.html","c651a43438d3fa06b55788f1a5884511"],["/sw-register.js","cc15068c8ffe48a6dcd8f5faa450269e"],["/synthetic-reuse-principle/index.html","f0a5c3bf8540e4f6f0c10c5b93a792e0"],["/tags/C/index.html","a1cc7a8b76682419d2be4397af5bab30"],["/tags/C/page/2/index.html","e1a6ddf7002f16afd37e9cda0dde5dce"],["/tags/Concurrency/index.html","000616137884c919aabc035460d42556"],["/tags/DesignPatterns/index.html","8bb58e6ecf0a62b21253aa3af5a4008c"],["/tags/DesignPatterns/page/2/index.html","35cab1b34845b0936e4bb6a8880f4e23"],["/tags/DesignPatterns/page/3/index.html","4a3cd2bf725c964475febcd0c3aa3f40"],["/tags/DistributedMicroservices/index.html","2af9a795ce3366be91670668d140bb1a"],["/tags/DistributedMicroservices/page/2/index.html","021e1e64ec789a02fcb2517c84c1fdbd"],["/tags/Interview/index.html","01c1ce89e4143424f8753381f2589120"],["/tags/Interview/page/2/index.html","69bfb6cdd04981736ec9661794fa262c"],["/tags/JVM/index.html","d7e66baece1ac4b9af777ef4c4935a09"],["/tags/Operating-Systems/index.html","d19851fefa794a9b73212cfffc24f3a1"],["/tags/about/index.html","f1a4571f39a495aa038ac6616ee365c1"],["/tags/ad/index.html","ccb7304d2e324806207c8a87c7366fc3"],["/tags/algorithm/index.html","d46131e34ed214acf1f0e941875acc8d"],["/tags/algorithm/page/2/index.html","e31d16bfd08c2ae6e56ef96124349663"],["/tags/algorithm/page/3/index.html","230892ff9c9d9cf7218dd34960a22f9c"],["/tags/algorithm/page/4/index.html","2e21ac0c23ce13dc06bd24425b6b1837"],["/tags/bug/index.html","f645ed66e698495a176a45e08cde0126"],["/tags/computer/index.html","44e46a004d65c6f21f176736fe76158a"],["/tags/data-structure/index.html","221f21206cacf67227af144c36f09f88"],["/tags/docker/index.html","db78f530968d5e6eaa2f0e6df42c457d"],["/tags/famework/index.html","0f18031b069431a3dff581c65c027dc6"],["/tags/frame/index.html","19502a4a8617534896aef765d18f2a68"],["/tags/frame/page/2/index.html","2be843c83db28289987255803340e660"],["/tags/front/index.html","b1af8fc167fd6b808721e2981ef75532"],["/tags/index.html","63182a278ad85a73b31277f22e16a19e"],["/tags/interview/index.html","9427da60efc558f6689242dad4f1e5ee"],["/tags/io/index.html","22ee9f14a3612e6fe9ab278089f2cf92"],["/tags/java/index.html","1d1bb2ee98b82e0714d2a86653336a03"],["/tags/jdk/index.html","bf988b657b5bc108f1cb4d6cc6e42168"],["/tags/jvm/index.html","548ee00c96e401211bb6db2ac981032d"],["/tags/linux/index.html","f35955de1e534a4664bfea8c76427090"],["/tags/maintain/index.html","1a988f7b43f2649b34b63ea5a30ee07f"],["/tags/maogai/index.html","d4fa462873c231d4c4f3d03e3bfd376e"],["/tags/math/index.html","f23b15c632bb856f3b844b298f76257d"],["/tags/math/page/2/index.html","b48b4d9daaea9b6b3006cd1f3e1028c5"],["/tags/middleware/index.html","0f95cbca1b07daec4056acf600a5a3b8"],["/tags/mysql/index.html","6b4be101d4c7f7892ef5aa5b40327256"],["/tags/network/index.html","01c36245fc31b7cb4a365d429195c60b"],["/tags/project/index.html","62343ed7e7df18e06e6db7d6a1b24ca9"],["/tags/security/index.html","827b7e2fa0d6bfb0431920c2ebabf14e"],["/tags/sql/index.html","b639a7f5f7c2b8ff8d9f065da3ef7a81"],["/tags/test/index.html","059b1b31a7afc7d80f54e0061217f484"],["/tags/think/index.html","fc1e50aa78d554f1d57ec34825925047"],["/tcpip/index.html","69bfa852c9f91da491a688ea3dbc95d0"],["/template-method/index.html","4859708f32f2545df3277a74bdf63bb2"],["/test-case/index.html","382a3f19f6fc2a341ec7ba0f735ced55"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","f4acc671eddd6928088419382e2fdda0"],["/thread/index.html","85d5357a7cafe3a724ecd102e608e789"],["/tj-horse-racing/index.html","a9dedc1e3977609dcc6929a9681ac96b"],["/topoSorting/index.html","6d03243df561a9f8daf18f1ebcd21641"],["/traffic-monetizationaccess-to-google-adsense/index.html","f87069f9e90324020f829421fe5b9d9e"],["/txCharity/index.html","057e8fb0c8236a961985796ee6930e40"],["/ubuntu-set-ip/index.html","bc586e416f8c15faaf302a00d6e14aad"],["/undefined/index.html","bbb4a7dd72d01f94a3d50ea68cde5c85"],["/use-arrays-to-process-batch-data/index.html","a1fa00dd94dad217c9ad110f6e04db02"],["/use-of-springmvcmodelattribute/index.html","721dced329e80293543536a340ca3a1c"],["/users-create-data-types-themselves/index.html","aa7ec3767ba3a8497d6d4b1c6f78ca7d"],["/visitor-mode/index.html","3d899387a383be7465d69f8fa64f693f"],["/what-is-milk-and-why-is-group-wise/index.html","04a93f5493548665fa27e58e43a898c1"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","c742c8ca265dce0d5d0c3bc30b765300"],["/xss-crosssite-scripting-attack/index.html","9df57042b8a31385580510b880484427"]];
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
