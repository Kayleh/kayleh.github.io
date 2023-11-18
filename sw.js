/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","b2401165df09ff7a178edc2bc2e4da3c"],["/404.html","c8031a50cee2824ce5d6da1d145c8cd4"],["/404/index.html","c7f5efd899596f636cde7444491fbe3c"],["/7-sorting-algorithms/index.html","f20a39221cc2bb685cd552de20f2f239"],["/AIO-blocking-model/index.html","40245760b4d88e43e2df3c11b3552307"],["/About-Snowflake-and-Consumption-Degradation/index.html","9c058b5cf113e286045e6dff4cffc378"],["/BIO-blocking-model/index.html","3e2725292d77aeb61d2c1f8722dd5899"],["/Bloom-Filter/index.html","84290980871c9b391a3a0ba11346077b"],["/Boyer–Moore-majority/index.html","1dcf430388cbdf3337ab83a6faa2238f"],["/C-algorithm/index.html","df10c750b28fd06985a1b3f3788f73d5"],["/C-programming/index.html","33ad3339cb06e99e506a8e2d4fcea2ff"],["/CAS-&-AQS/index.html","c75857ee465f041af669c5190aeefe62"],["/Comparator/index.html","9f1b2eca5df255ddc36676d722e65f2f"],["/Differential-array/index.html","7de0f024e53048873a5ff7adf3706ba5"],["/Download/index.html","4465efbc02efd0eeca440abd5d84b247"],["/Front-end-security/index.html","e2ec7eddda04192332d2f842b38b014d"],["/Good-use-of-pointers/index.html","6253f85412d6b5c645399cb8848d3acb"],["/Graph-degree/index.html","4213354dcd0fde38e50cfbc4e4ee82b2"],["/Greedy-Algorithm/index.html","bd94277d9dfb56d3f1542ca894eda00c"],["/Head-First-Map/index.html","585cc4d178c6047b39b562d4240c1844"],["/Head-First-Netty/index.html","b732beb96d3347a4259487a742e366dc"],["/Head-First-Nginx/index.html","ce51e515072eb4eb79075f2ecc8d0abd"],["/Head-first-Spring/index.html","5f14554d17a818a946e8779a6cc45ced"],["/IO-model/index.html","2b25dc85c27a1fc37a20f0ee34ddab64"],["/IO/index.html","f88c5b9aeeaaf7907b8aac0d4e5594d5"],["/Implement-a-lock-based-on-ReentrantLock/index.html","34a25cf716b82aebcaa3bda0780d0425"],["/Improve-Robustness-(1)/index.html","aacf57dd769af70a61a4f966a4e4b205"],["/Improve-Robustness-(2)/index.html","275e511c0ceaa3603fcc7630162f8bf5"],["/Integer/index.html","75552e17a00fafaec86552073c776561"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","b58c162707c1e64e1808566b20e3f322"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","4fec27d2ae7ad93e376dca884f954a9b"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","24db0c8f4fcf8d8de6606d34f8e57d2a"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","4709dd74bf53369384dfe4ed00d506d6"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","9e45e688e3419ee21d2da721c5b0b383"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","534a551312a3a73a6f4c1f0783f6d8ee"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","903a53f5cf6617107a397744736a1031"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","67c54db4ff054de10ec63b29b876b2b8"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","c3b1764c926fa3381da109e4017c42b3"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b5744d2bb160466ec895d002c34eecdc"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","6efc7a26ef86bece646f2921fb000c0e"],["/Java-network-programming/index.html","6e56182257ef90cbc583eaac7c9a7a88"],["/Large-number-operations/index.html","fc6b0a1aa6c12d259c5e33f971610715"],["/MYSQL-MVCC-&-LOCK/index.html","25389849924c81a0a517f140598f50d7"],["/MYSQL-uuid-and-page-splitting/index.html","ae3ac4ff55216820c26b4edbc66339d1"],["/Minimum-Spanning-Tree/index.html","792d321a974be49f553fcd0c2baa4a99"],["/NIO-blocking-model/index.html","c1b42d6d6e0c12d535e3ca9bb7a48051"],["/Nacos：Configure-MySQL-data-source/index.html","42b9c216b02241df17cba573871494dd"],["/Native-method/index.html","5fa7594b4c43dcc12baa412bb8dd9500"],["/PriorityQueue/index.html","cc880520d084351da54a7107d7438304"],["/Proxy/index.html","890a69bc00cb351186eb187a62c9dfe0"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","ce1b865cece2abd64d9c87c2659ce150"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","727464fe0afe34979c08e584c0232d4f"],["/Reservoir-Sampling·/index.html","4eeb4b9a85c7c23181434da8afa9388c"],["/SQL-injection-vulnerability/index.html","ff0c6b1a5f80877ecb00b9be91d1ee73"],["/Sandbox-security-mechanism/index.html","81a4f81f8babd2403fa0c2a98e0bd5b6"],["/Spring-Cyclic-Ependencies/index.html","9174056d233ce0b6a9e35b9b3f6316d8"],["/SpringBoot-startup-process/index.html","65b20e06e9df71acbbe0eb236fdcb20b"],["/SpringSecurity/index.html","05173cc9bd974b614636215fe535e4c0"],["/Thread_Pool/index.html","bac631655788a9a4dca1e44ad9d991ba"],["/Transaction-isolation-level/index.html","c026414f5d6f47c6c10399b6c24b616f"],["/Unitest-framework/index.html","f57f7fc9ab6a31a4cb7c076d37deb3f4"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","73bee20c2948517d74c92cb2cedfa1e0"],["/about/index.html","6314911e1be68d8e45d15195b6d858c1"],["/adapter-mode/index.html","c94e5115855d808f8659c72553ce6be9"],["/adjacency-matrix/index.html","f5dd71a99af788b91cfd9ed77481d9a2"],["/adjacency-table/index.html","1d8b3039f1b3f7001dda8576b1f00f67"],["/agency-model/index.html","1ca63a5bf30d5043c71f98fb6c8d6de0"],["/app-test/index.html","d9625edbae8e6de76bfa67ad928b35fc"],["/appearance-mode/index.html","8dd22577bbdc376069f67c129f4bfc19"],["/archives/2019/01/index.html","682f14c1103ca5a0a4c52b0a12d6406c"],["/archives/2019/07/index.html","4dad75a88463c6b6f5109d3e3528a731"],["/archives/2019/10/index.html","ce66304ccc5254001dbbeb54a1a6b4fa"],["/archives/2019/12/index.html","32f2c6882766e9c0822a92475bcacbcd"],["/archives/2019/index.html","4a3860785ed1e9310a329535409cd16a"],["/archives/2020/04/index.html","446c6fca27305c063ac30a16ce8e8c6c"],["/archives/2020/05/index.html","b7f7c5fccbc7d11b4eed70b91de7a1b8"],["/archives/2020/05/page/2/index.html","08fd21bfe9bd3e6cda4a9c94bacf83b4"],["/archives/2020/06/index.html","cf1dfbad3bdae14c0ecbb2f98e877324"],["/archives/2020/06/page/2/index.html","8716642d4907335787435475f68f1d2e"],["/archives/2020/06/page/3/index.html","28b790938424ef24241e142d6b517453"],["/archives/2020/06/page/4/index.html","954e0d9b77c11605b0008c117690cea3"],["/archives/2020/07/index.html","f26419e13ef7453e26d562a306872b8a"],["/archives/2020/07/page/2/index.html","2c9d72259fa0ea8bbff117bbbf7bc3dd"],["/archives/2020/07/page/3/index.html","7e8c4e30ce4f732be2f926df55d6c859"],["/archives/2020/08/index.html","b6ed25c9f4da57744fc9e42d4d4e16f3"],["/archives/2020/08/page/2/index.html","9243f41b04b49d3fdba0fa9dd8e7e810"],["/archives/2020/09/index.html","7a5c73bce956506eee70a06dc62322fe"],["/archives/2020/09/page/2/index.html","0291230c748f9c90929c0aeec174548f"],["/archives/2020/10/index.html","4faccdbdaa1a2f3381a4e1fcb8bf296a"],["/archives/2020/10/page/2/index.html","b7740eb6fbcd4948bc9181c07513ba5b"],["/archives/2020/11/index.html","0f80a72da489ac6ba762c4c9ac0af333"],["/archives/2020/11/page/2/index.html","df2e394854025d2f368ee51e488185a0"],["/archives/2020/12/index.html","8198e2de763f7b1bb9a5460f3c124581"],["/archives/2020/12/page/2/index.html","a6cac4847cff781afce57f09f82d5e25"],["/archives/2020/index.html","7b1facd17e22907596d3f643ef243fc7"],["/archives/2020/page/10/index.html","2a003d4bbe08cff89a093aedb02d46b2"],["/archives/2020/page/11/index.html","b100de44d83f1bdf04022a9a7ddb33a1"],["/archives/2020/page/12/index.html","cb9a457cf9695c61b75491935670be6b"],["/archives/2020/page/13/index.html","266689ce6d2dada7468287d9eb3fa6d3"],["/archives/2020/page/14/index.html","23319bd261d99d25ab70484e4a479efc"],["/archives/2020/page/15/index.html","f7f9a1319466ec90e243b60cb3ef650a"],["/archives/2020/page/16/index.html","ae20806cb7b8439cb7077c34126dc679"],["/archives/2020/page/2/index.html","4419b59b6ba61a1362e1cfa9118a79af"],["/archives/2020/page/3/index.html","f12c2ec664d5e1304db5c0cd3229adb6"],["/archives/2020/page/4/index.html","2c58d8e14440bec7d0241ddcfe6c7f82"],["/archives/2020/page/5/index.html","1325484bc91d6c0122e9cf17e6eb824e"],["/archives/2020/page/6/index.html","90896c157648082a991594cdae8ca524"],["/archives/2020/page/7/index.html","99b332d84a72c5a94a12d70b2556e843"],["/archives/2020/page/8/index.html","0f91f6c7530ab9154885743b8f02c9d5"],["/archives/2020/page/9/index.html","50c109e54c93312983561762797888ac"],["/archives/2021/01/index.html","f91f7207d2a8f2c5fa670030aa6f6824"],["/archives/2021/02/index.html","001f97041e6bd0d4083eadc0102f693a"],["/archives/2021/03/index.html","9b37cdbd8f4329b635a12338cbb8cb94"],["/archives/2021/04/index.html","f926706d6f36a1163acec90ead748513"],["/archives/2021/04/page/2/index.html","c7427f7ed0a95116d7e8c00d2c7a61d0"],["/archives/2021/05/index.html","817007e82bcd083a4b6071dfa3303f3c"],["/archives/2021/06/index.html","2435814238e94bcb50d1c5a21563fbc3"],["/archives/2021/07/index.html","170b787926d5d5af5fe7d1f47f1347f3"],["/archives/2021/08/index.html","5125db525703059f0c58dc13f24a3cdc"],["/archives/2021/09/index.html","f34de72c64e14edc3451f9108706d617"],["/archives/2021/10/index.html","1436a25eaf232e0349c97309d16addc0"],["/archives/2021/11/index.html","f8d4067d17ccc78234c44796272611cd"],["/archives/2021/12/index.html","0ba2c60a7e9767ef4739fa15746891ed"],["/archives/2021/index.html","001d5a4ee3e6bf63181602933bdf1330"],["/archives/2021/page/2/index.html","5b51e4098f8be161f77bf7f85369b986"],["/archives/2021/page/3/index.html","ab4709365504d109f7282e188ba11626"],["/archives/2021/page/4/index.html","81f95fc944cb76900275b116c90ce597"],["/archives/2021/page/5/index.html","9e6e5aacbd33e8efc6798c4215dce7aa"],["/archives/2021/page/6/index.html","00a1dbdb61371a06d7f6b0aebc530ecf"],["/archives/2022/01/index.html","b502d66703cb8b0bb6cff0adcc0fe5f2"],["/archives/2022/02/index.html","f211df9742be863478edc3a1d72c3b59"],["/archives/2022/03/index.html","9dd7969312cb05e780ee3223c240e919"],["/archives/2022/04/index.html","f6b20657a1f130849c86b9b313856fdd"],["/archives/2022/05/index.html","0adb6f3ce43a2887e8a201fb2a2c59cc"],["/archives/2022/08/index.html","befcf52d595435e57c276d3d66b2002c"],["/archives/2022/10/index.html","f1c17b8b84d729aa2a376d62fe331a40"],["/archives/2022/11/index.html","a95e643de162d5e6953b06b45bad2e1d"],["/archives/2022/index.html","3ff565b7fa2dd513d0213964e806d70b"],["/archives/2022/page/2/index.html","70a1c0784ea43b3c0afcb8fb0b9d9c6a"],["/archives/2023/04/index.html","99f0441133aa70c42a6ab6bb17eee4b2"],["/archives/2023/06/index.html","76ae0a92437c7fa1994952eeb782a656"],["/archives/2023/07/index.html","b339ddd54f642b678505b301568ad67a"],["/archives/2023/09/index.html","793d085f1683d4ad23f3b4fce83edad1"],["/archives/2023/11/index.html","bfb11166db9eee6c3b89d309611a50b8"],["/archives/2023/index.html","935d32379549385c396dab08656a5768"],["/archives/index.html","cb9ef756d2bf5d2f9dd9c2e7f6d50b94"],["/archives/page/10/index.html","825908ccce87a9b507b35d695d4f8124"],["/archives/page/11/index.html","cf5887650e1734a0fa42b66a0cd14973"],["/archives/page/12/index.html","69deca0c29b6d655416649175e9da286"],["/archives/page/13/index.html","20de1d2da10a2f4ca24de6b945667448"],["/archives/page/14/index.html","7e3364a7a61f78c1c826c14c29082951"],["/archives/page/15/index.html","2424ecf676df6f3404c70d7da2a18a75"],["/archives/page/16/index.html","e04f2b192e60e34346005551e2f32958"],["/archives/page/17/index.html","a66c18a1262f9b4cce442ff8d050328c"],["/archives/page/18/index.html","28139dbb1a0be94768a26a72ab5c3c4c"],["/archives/page/19/index.html","27384d849c545920be0e484cfc6c3464"],["/archives/page/2/index.html","3a5bd0847a8627ee4356346933082ce7"],["/archives/page/20/index.html","96aaea20288dd9fd428e5e03eaca7250"],["/archives/page/21/index.html","ee4cad4a93a997189f217f101b9f10d2"],["/archives/page/22/index.html","eb78a9b5d48014a96a5d8db91697cf2e"],["/archives/page/23/index.html","127e3ec3c7229a580cb61889d301a66a"],["/archives/page/24/index.html","d426c9e415ccf56fa68aad60569960a3"],["/archives/page/25/index.html","37268dfa6b27f1e8d5bdc1b925fbbbac"],["/archives/page/3/index.html","3c9d301fee87d362489ff8d2d63d1d72"],["/archives/page/4/index.html","8420519292bd645dd03f8d90a7d319b5"],["/archives/page/5/index.html","7772d0714fa1dc369c32c8aee6dc5c72"],["/archives/page/6/index.html","068b629663c22337e89afd243e6add20"],["/archives/page/7/index.html","da0c2dbf7959333a4aa6060327985faf"],["/archives/page/8/index.html","8088feac58e708189057090255663a00"],["/archives/page/9/index.html","eebc0d698d7fb65b97654b9c3b90b762"],["/array/index.html","340c0e70052821c6cd239da620d194bc"],["/automated-test-katalon/index.html","f14d3608cdb0a47466f9bb4ee04054c2"],["/automated-test-selenium/index.html","6a9d962234286b06ff5074174c6e59cd"],["/back-to-table-query/index.html","168c19e4a15dc2be127040cea37db15b"],["/binary-search-algorithm/index.html","727d685dcd1747567951785a3bbe541d"],["/binary-sort-tree/index.html","44b5765f40007be1d53bec6cbbd39bf1"],["/bionioaio/index.html","8c666fe205bea0eccf2bf9ec548caf24"],["/bridge-mode/index.html","848d08c04a4f67d52332a0dbc9122f33"],["/builder/index.html","408d6d5a74a67360fcf1f0a92c79773a"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","69c47d3a6dee4093aa9dd1c5a45fe699"],["/cache/index.html","cf39c485ed8e85d476b2a135e53378b3"],["/categories/C/index.html","88f278cee9872bbae959e3fdcdb0c9e6"],["/categories/SpringMVC/index.html","e770f1b23dd4b7607d67afcc31160c15"],["/categories/categories.html","2eb185efea1e9d50aa7d302ccd95b3fc"],["/categories/index.html","ef584be110f90023a56e427bf11dc0f2"],["/categories/linux/index.html","4467c541def6305237861ec224c4d35a"],["/categories/分布式/index.html","6438601c73a32ffcb55ea348b031bc15"],["/categories/分布式/page/2/index.html","178c22a949cfb8a9434fd480dca089ba"],["/categories/设计模式/index.html","b2490532c632b126dcf5006ff0a4e942"],["/categories/设计模式/page/2/index.html","c2b0bc354336ac82ba1ece642546845c"],["/categories/高数/index.html","c841aeeeb265d4bf368206f364b6e699"],["/chain-of-responsibility-model/index.html","4505ff027f220a2f79662b4dc5354022"],["/charity/index.html","d0250c46071518936b9d714f8cb409bb"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","8a2bce20657d70ec63e61d1202f38b73"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","4f32a1d64890997052c570801f9be222"],["/combination-mode/index.html","82f2006b471ee8a2deb984d6fc923a3c"],["/command-mode/index.html","0326ca3dba60a8b6a75df8585c5632bd"],["/common-commands-of-unix/index.html","290f2d22fa8767ceeaf993e143aaf64a"],["/computer-network/index.html","56693857a0016d4d54bf82bc2d75ebe7"],["/concurrency-principle/index.html","7c3312591f13d2ca7890c3886816851b"],["/continuous/index.html","908d02e88d1b99ee24be610b9b63de2a"],["/contract/index.html","5d5dac4592cea5507f176bc3ca71129d"],["/create/index.html","e588d2415f856b0f8e723a245e866fb3"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","e3fb1b6a77e7a1368aaea1d1b5c03a04"],["/data-structures-and-algorithms/index.html","c513cdca116456632a56940665f3d6cc"],["/deb/index.html","e3d528799cdbe8f30747503d00df1a35"],["/decorator-mode/index.html","fdd3b87abd11e1daae3cdccdb3184859"],["/definite-integral/index.html","b656e732ff4678fcf6bda7827a95bded"],["/dependence-reversal-principle/index.html","28d7b11b32d32dcd2f5134c8d819573b"],["/derivative/index.html","5eb58f4d2c4a035f9e62d64743f748f3"],["/design-patterns/index.html","a276539cb10d5bb5b82f78bac3507f30"],["/dic-algorithm/index.html","c40d2c8ffd3615aa06416059f598d14f"],["/differential-equation/index.html","7cabca3f72a329a79e9ac3b3052a0a41"],["/differential/index.html","1e9238cd7400c7c3745ecb8c53f6597e"],["/dimits-law/index.html","560f022ba5ac7a8329c40c5d8b0c03be"],["/disjoint-set-union-find-technique-appreciation/img.png","3b180015f1019888938991178f4c1e06"],["/disjoint-set-union-find-technique-appreciation/img_1.png","e3611c71e7cb8a0cb4fa5e35c5f9bd36"],["/disjoint-set-union-find-technique-appreciation/img_2.png","d4bf7b42194d5378a43bd049b7b91da5"],["/disjoint-set-union-find-technique-appreciation/img_3.png","84469c7e0460e93e0590b56729ce340c"],["/disjoint-set-union-find-technique-appreciation/img_4.png","96308c2a7256c532ca38489ca81c1bac"],["/disjoint-set-union-find-technique-appreciation/index.html","e37799070d98e196ee32fc0855e30ed8"],["/distributed-lock/index.html","165d106732fd661ed2bc34a963ef7b5f"],["/docker-virtualized-container/index.html","ad2495131be42c15289db467c28466a9"],["/double-integral/index.html","b7262119459ff90f42f283e6e7876fad"],["/dp-array/index.html","1ee74d47afaad7181f69453df042e1ce"],["/dynamic-array/index.html","838a6ef36b604c5d49e6d2292ab5e62c"],["/dynamic-programming/index.html","dc90ef8f682093657bffdcf82eb923c1"],["/edgeset-array/index.html","e94170ece5f7dc5e8a8d1150a4f37d1a"],["/encoding-algorithm/index.html","458cef9a9f315799bc0e92d6a5b2319e"],["/eureka-service-registration-and-discovery/index.html","48713f95d87f0c50403237b9f807595c"],["/extreme-value-and-maximum-value/index.html","021bc134e916373db579abddb3da29c8"],["/factory-design-pattern/index.html","362eec516c1f0d6e57b09178cbfea7e2"],["/file-input-and-output/index.html","f63b86ae9da37809b3185345efbce069"],["/flyweight-model/index.html","ebcd81a1f96d8a66d13911132f531bcd"],["/friends/index.html","0f0fc908633b872ae3e814ef3e397d22"],["/function-graphing/index.html","2102dc61274f4fa8b2b9322fc4656a01"],["/gateway-service-current-limit/index.html","5b40319f6d78dc2d5c71681f14917b3a"],["/gc/index.html","2a119350320b4e5127864cf18c7ffc5c"],["/generalized-integral/index.html","20070cbf0ddd623859c3397d9b79c802"],["/google8102e2f35ce9e391.html","47623b0d9beab68e9778df833003dd8d"],["/gulp-compresses-static-resources/index.html","aae129b9be8b1a32672ffa07d256b588"],["/hash-algorithm/index.html","b923d0bf106c6e8230bca6ad452849c7"],["/head-first-JVM(1)/index.html","49d8af046eac2aabd74cc69c00c34962"],["/head-first-JVM(2)/index.html","61152d67f1e45a42da371d94dcdd02ce"],["/head-first-JVM(3)/index.html","444e119b2e4b4e7bbc3d9331132a4011"],["/head-first-JVM(4)/index.html","f0d866565a570087ae6e114876d20e4e"],["/head-first-SpringSecurity/index.html","7b3206a192d64b1a7a08da0aa7d9db02"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","0a309b67e08eb3b833bb06e9ff348536"],["/heap-sort/index.html","f1666a47ad4aaac8aa8722bd0e447b84"],["/http/index.html","b3257b8494746bba722a3250340447d9"],["/huisu-algorithm/index.html","d75c5023efb0754e89613000bc003058"],["/indefinite-integral/index.html","5544b4d2170596ba632953870cf526dc"],["/index.html","86c40007dbb6b8ecb1187e8ca880643b"],["/infinitesimal-and-infinite/index.html","d94ae1b48b974ae09845f89dcb88ae0f"],["/interface-isolation-principle/index.html","bbd3b0c7d10f263993367d1f28aea4b7"],["/interface-test/index.html","140a4b3d6ceb5b4aac10ce0dcf0589b4"],["/intermediary-model/index.html","b256b48df930c6d0240220cae991c8a1"],["/interpolation-search-algorithm/index.html","50270ea597eafcfb97c49ff7b4d1cd1e"],["/interpreter-mode/index.html","72a1a873c814a2f47beb3093b18cf2f8"],["/introduction-to-computer-network/index.html","9083226c257e39e601fef73f3ca917d4"],["/introduction-to-operating-system/index.html","8e8c138e9600dedb5252fd10777cf9c4"],["/inversion-of-control/index.html","cbd92231c173b64005b6bc6594d440e9"],["/io/index.html","6d7a2da7755f3a0c7a52b23dcefa4311"],["/iterator-mode/index.html","051fbc66d258420907192a983d07bee8"],["/j2ee/index.html","bef319bd5da73dc7e313d5ffae719300"],["/j2se/index.html","6612264043e8cf429fc8d73b2a52fdcb"],["/java.lang.String/index.html","fd48f7084460f9e10315e715eec6b1d0"],["/jdbc/index.html","600e305642289cc56ca6b4dfb5611636"],["/jdk/index.html","8f6675cf25b80b385b2a4c93b799bdac"],["/jmm-memory-model/index.html","675c31b5630db12ab344c09317803200"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","4d09a96f2ae310e89780a7a030282c55"],["/jvm-method-inline/index.html","0bf444787dc827e34b2c66ea288cd352"],["/jvm-tuning-practice/index.html","4b33c345fe1af5a647a4615a87bd9631"],["/jvm/index.html","835fa4ce4a04d625725f102c846825f0"],["/law-of-robida/index.html","a6ae1c590e0b119cb6652de01c449087"],["/limit/index.html","bb58953d402d10cf4813bbffc9967467"],["/linear-algebra/index.html","59e3c6a05f5cdbd53a6e42d0387be717"],["/linear-search-algorithm/index.html","18861753f5a607fe8909e545b418f72b"],["/linked-forward-star/index.html","276c344fb3ef95fb8c085aa5cfb05b3b"],["/linked-list/index.html","a2479c6adb51b02aca89acce19532ce6"],["/linux/index.html","63955af234aa00450e1da22070622e29"],["/liskov-substitution-principle/index.html","2faf4f99deb6ffabf1247d4efcf08851"],["/lock/index.html","6989c231babc373692d947d78150a391"],["/lru-cache/index.html","6fc42046eda47cc73fce6d87a8fe130e"],["/memo-mode/index.html","03acb5713edb4681ad520cc00b45fd59"],["/monotonicity-and-convexity-of-functions/index.html","c5e6d554b3e492d2a1b0e09e893f00ca"],["/more/index.html","709c5d23748d6aaf8e665625017848ca"],["/multi-function/index.html","fc362c35f45983466d5cb47eb0724d7a"],["/multithreading/index.html","173f78775c95b8657f72b27686d2e2df"],["/mvc/index.html","74a23ebd8961ae57c61e558b89b8d4db"],["/mybatis-cache/index.html","2d89b765f011fba7e40c24763c08a4ad"],["/mybatis/index.html","7169ab71d55d6a733c500e1c36a37ba4"],["/mysql-index-wrong/index.html","a3dc38c611fe8ca6ebdcd086ef61bf90"],["/mysql-struct/index.html","9ddd38d911ec4a93703f4e2a6eebab70"],["/mysql/index.html","8730b610d9c6ac40a37682f2feda114a"],["/nacos-service-registration-and-configuration-center/index.html","f42a2f298e928824f3d09194ebd4de65"],["/notes/index.html","f7804daadea5a64e7a94e8045730e308"],["/null/index.html","a2f6a8f1d5d39d3f1d5a3a229d98196a"],["/objectoriented/index.html","17d71363655013a52a293d0bc45ff266"],["/observer-mode/index.html","82f115120000fcf5a142ba05e3ed76a6"],["/off-heap/index.html","9ba6b292e70335012f277dd9cec9d051"],["/operating-system/index.html","0083f070bc89cb489cae597c2012f0cd"],["/page/10/index.html","1fe45f7cd188e54853a8fb7a02709577"],["/page/11/index.html","835820a6c36427f2730c18d8de830571"],["/page/12/index.html","66a23082aadb07be29fc001b382899b5"],["/page/13/index.html","816217097af7d0af207da0dd89d5fb06"],["/page/14/index.html","d736ab82b09dd9dee5382b87d1fd1c14"],["/page/15/index.html","4a44d173bc7a81f5732d4acb5285cc5f"],["/page/16/index.html","25c978cbed5709e2c4eb3edcc624c7a6"],["/page/17/index.html","9f7343ffc57ee231710b9c529151ea6f"],["/page/18/index.html","4c385b26b4fe048d9ccc596ed2876697"],["/page/19/index.html","8bf62d28cb63ff278886d0a20b8d853d"],["/page/2/index.html","fc8545c8c6da634178e4ac90335c1aff"],["/page/20/index.html","9ac4f6e66f7bdcf9c7e28d1d69fa2bb8"],["/page/21/index.html","260739e48f6bc7909da8e7b42ac11031"],["/page/22/index.html","8e95d268bed80eb710d6b926a3fb3762"],["/page/23/index.html","2e8f442bca5289ebe1f0debb339d879a"],["/page/24/index.html","a7855ee2e90eb1b61cc69ed4356ca491"],["/page/25/index.html","3c1a23c5b99271b09ffa385130ee7b08"],["/page/3/index.html","f896ae33660fab85b03b50f15e52d3de"],["/page/4/index.html","d5a8bc1accb2bbd45817a84bf5ff2395"],["/page/5/index.html","616eb332133fa0887a0b12afa406beef"],["/page/6/index.html","c175f9839d205c6e1fbe6948af981ba9"],["/page/7/index.html","2566efc159e4299a34fc0e0579271aac"],["/page/8/index.html","f2a61641cf35c1b9fcdf6f6d5dbca4ca"],["/page/9/index.html","88cc2a7107f137c477b4a36f1afe7fbb"],["/palindrome/index.html","1f00fa568ea29f883876a2ac2e04427c"],["/partial-derivative/index.html","baa5c100019b4b71e018d4dda31d153c"],["/pass-by-value/index.html","f967ebcf0fc3add038d9daf902f9c2cb"],["/pictrue-bed/index.html","8aec4ea3fc97a248447e8484fdbd01ed"],["/principle-of-opening-and-closing/index.html","c13170fd81ff35f838bfaced40704e84"],["/principles-of-computer-organization/index.html","1dca0cc59a0f307a21e952f8020fdd59"],["/program-test/index.html","c5720d71022c81db692a4ed33f8136a6"],["/prototype/index.html","6521e8df868fb9b4f95221d4a6decc00"],["/queue/index.html","3a316c1952633f6bae739a3f2184b8a1"],["/random-weight-distribution/index.html","1158999e6ff3cc16063d636025ffea3c"],["/realize-modular-programming-with-functions/index.html","c96ed2dcf6fb71add2d250f5bbdeee4a"],["/redis/index.html","665e8c70f67d1d3a0cb5b5e0ae946d4a"],["/reflection/index.html","bfce4eaa8455652d8ca8352790dd3875"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","37c824550f5fb7491ba695e24b59da11"],["/ribbon-load-balancing-service-call-degradation/index.html","00078d4fbde406dc567e0f11b4d03a17"],["/round-dp-algorithm/index.html","bef759b8f3da0813c7ffe9a64692aeb8"],["/seata-handles-distributed-transactions/index.html","158a0513411f4041e3a9e502be35b062"],["/select-structure-programming/index.html","0994e74df347731e63aa0aeb72d916a2"],["/sentinel-realizes-fusing-and-current-limiting/index.html","6d32ebd0bc43181709d612d604af30c3"],["/sequential-programming/index.html","e80fe76257f8da36576e0b3cffe17f63"],["/series/index.html","c491143c5ed1b8a73239fe0e4f6e6a28"],["/service-worker.js","2090e4c8a2842e27b06989bbde0bb205"],["/shortest-path-algorithm-Bellman–Ford/index.html","a9f78a02658bb6c0b2e7ebad8f1586ab"],["/shortest-path-algorithm-Floyd/index.html","a208e748b0d4f7e7d64d5e558205169d"],["/single-point-login/index.html","645746428b2641990779d63d9a6ee739"],["/single-responsibility-principle/index.html","9906a9e519b2be8dac7acf7ac60de6c7"],["/singleton-mode/index.html","055204e4adf0ce29ee1d5f6f687ac1c7"],["/slidingWindow/index.html","3869c3e89d61f1ac9f55c90e1cbb5b41"],["/snowflake-distributed-id-algorithm/index.html","6ad272fdbcb65d5d091ef3b53209d0be"],["/sparsearray/index.html","df8e0bac55c57b0deeb772718897e199"],["/spring-and-jwt/index.html","f818d2f75124cb1010627bdebb095e71"],["/spring-architecture/index.html","832d74bc3cf766f78370d877221e19c4"],["/spring-relate/index.html","91ce79eb53dfbce0637a8fe2e447335e"],["/spring-springmvc-mybatis-integration/index.html","a6093d51701813cacd1f6b52a621a10a"],["/spring/index.html","af2644cde39ebf9fae76caa3f31e1d60"],["/springcloud-alibaba/index.html","759c216af94299e610a68325817204fa"],["/springcloud-bus-message/index.html","ba63537d692eafc0eddcb8ebd4c56994"],["/springcloud-config-distributed-configuration-center/index.html","347fb30117456ddcbb7685ef0072cb48"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","2ac62ec41be2fe9e85cb61e4afaada63"],["/springcloud-stream-message-driver/index.html","095dff589a9da00c5904740f0ea3db42"],["/springcloud/index.html","5ee247f20bc0f54fbfa76400a1d4cc7b"],["/springmvc-environment-construction/index.html","26f8eee859bef56030ff57acbae387f5"],["/springmvc-work-stream/index.html","69ec7e61b24fca1a63a74cba90278d47"],["/sql-injection-attacks/index.html","c8b165118ee3c9f157e2ea28000540dc"],["/stack-simulation-iteration/index.html","c260a0d825a226652d0eaec52c645653"],["/stack/index.html","ac6c125925b3d6018fb4ef0ed4e8b5dd"],["/state-mode/index.html","8cbf095617d7980cf0f214a377398275"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","dba944db6c15e487b0d4573563c66469"],["/strategy-mode/index.html","880ed55f18455a16ca11abfd45808f81"],["/sw-register.js","46552e94d2805f16e11aa0bbdaad6c3c"],["/synthetic-reuse-principle/index.html","43e15fa1b670b278efa841ffc6b859b0"],["/tags/C/index.html","54bede657adc15d5bcdaaa24e13667a0"],["/tags/C/page/2/index.html","36b32fc7282afd8ff847b12fac73e238"],["/tags/Concurrency/index.html","8882f7fddd60afd1268a192ad9e0a079"],["/tags/DesignPatterns/index.html","25cfae1b7c73e5ba12dca6134e79ec1b"],["/tags/DesignPatterns/page/2/index.html","3f08d0471bdd5dd58e33cdb2d4f400f8"],["/tags/DesignPatterns/page/3/index.html","335ee6c21ecf97dda7d592a8f560d336"],["/tags/DistributedMicroservices/index.html","0712c6d055fb6a034534edc79aeb797a"],["/tags/DistributedMicroservices/page/2/index.html","a64a61e9fc75eac823de118792b2c481"],["/tags/Interview/index.html","6f1de6b2089d56ec8870d3ac2c11b5a2"],["/tags/Interview/page/2/index.html","566d78b8a75578435651e15fed708bea"],["/tags/JVM/index.html","4bdda020bffe575e9cab7c312fd1a64e"],["/tags/Operating-Systems/index.html","f487d6cac32d7e79652264c2ec8f286b"],["/tags/about/index.html","d96e0e85b5a478e8ebebb4af326318f9"],["/tags/ad/index.html","8b13dc4ff4a702c3a4cfb8b1f51a5d2d"],["/tags/algorithm/index.html","fe3f53e0beb8f4ba45a6bd19f7a9de77"],["/tags/algorithm/page/2/index.html","2020fb1638e5cfcdb1ca773c4a267b73"],["/tags/algorithm/page/3/index.html","e439fa9a5b4fbf0c437f9f40ab1aaaa6"],["/tags/algorithm/page/4/index.html","86a3a3d9e2ab87ebadafb5a9ff4fc8f4"],["/tags/algorithm/page/5/index.html","7a4e68a25a3fd8c8ab238ba7ead7b02d"],["/tags/bug/index.html","fc8ee0fee083efdd2d0b485ef8efa028"],["/tags/computer/index.html","18d164e942e036ae367edcaa15cd9730"],["/tags/data-structure/index.html","7990bffcae1a2759daf7a37433198462"],["/tags/docker/index.html","9bd57c1e7e3b2188280db8cb89fb3274"],["/tags/frame/index.html","709cad76147218e38be7753a9e57949c"],["/tags/frame/page/2/index.html","946ebda2dc8748b936f091a6972cdc19"],["/tags/framework/index.html","1bbab873f4dde37f94e8121299c8a075"],["/tags/front/index.html","57ba9d335dc95008fe6f5898ba8dd67a"],["/tags/github/index.html","bdc4085784263c64e9d6da84d351a7e4"],["/tags/index.html","9a38771c414e30c3ab378ff72a35d3e0"],["/tags/interview/index.html","1c5458d884945923353adda4e71cd42d"],["/tags/io/index.html","63fe1bb5110f8443b013bc6996e4b707"],["/tags/java/index.html","22cf79dfbb5c99b169514d9675733454"],["/tags/jdk/index.html","43fa9f9d3162259f7fb2cd9f9da0b6ce"],["/tags/jvm/index.html","e3075da63a1270e5993e58b297f886a5"],["/tags/jvm/page/2/index.html","933ab42e7c4d50c222a06f7f5660bbc0"],["/tags/linux/index.html","bf8ef4371d0d91e2b98f179d78767a1f"],["/tags/maintain/index.html","f3a28a9dbf8bbdc67e22e570cb734e97"],["/tags/math/index.html","404c22b583239926d90b7faa36602291"],["/tags/math/page/2/index.html","036f6cc91c23c15fd433f192f16b86af"],["/tags/middleware/index.html","0fe5db3244d7cdb5cf9599d2e1a09998"],["/tags/network/index.html","e2c8b127d8d4db23faf3f63bbf7b0150"],["/tags/network/page/2/index.html","bd6554662ef6adb8c364e92ef300f790"],["/tags/project/index.html","55001300ce1232fe8e0df40483ff6301"],["/tags/project/page/2/index.html","209d6d372cb0dac27710fa851fa7f6ad"],["/tags/security/index.html","effcc0b55eb430651f2f66e419f836ae"],["/tags/sql/index.html","255b5277e628cfbf67fb46e257722424"],["/tags/test/index.html","2c7b7b1029288345c4d5f794af963be8"],["/tags/think/index.html","38f450f6dd97a736fa9d8dd8264f00b3"],["/tailscale-ssh-remote-connection/index.html","4ecfebf6ddb99782b2971fceda5859a7"],["/tcpip/index.html","ca235900b4c21ad460bee6e780a84392"],["/template-method/index.html","01c9313cf0f9950657e2d9887ab543f7"],["/test-case/index.html","e9282030d682852e2b9407f1eabc2033"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","0a536e61a9ca0b89c8b1e08e7e6361cc"],["/thread/index.html","d937058fae8b12cb8684a72d500bf24a"],["/tj-horse-racing/index.html","8cebeb119ddc584af639820820d44619"],["/topoSorting/index.html","c79f7778792bd418eaacf11aa284f87b"],["/traffic-monetizationaccess-to-google-adsense/index.html","d4d58292f51de2055ece1f7b334af840"],["/txCharity/index.html","7df503c45ba6ef4328cddfa6f2044950"],["/ubuntu-set-ip/index.html","df476a8981ba2f39b23152e24e2f3267"],["/undefined/index.html","1405e0aecda13038aa1c75274990835d"],["/use-arrays-to-process-batch-data/index.html","8576777270ea33c7e419ab130e298167"],["/use-of-springmvcmodelattribute/index.html","b4a875bccf3f448a9f7fce84cc0b4d03"],["/users-create-data-types-themselves/index.html","650004a25a5edb01f8cc974a90a6f5f5"],["/visitor-mode/index.html","3d92f2415dfb89699cb51ec7be719c29"],["/what-is-milk-and-why-is-group-wise/index.html","d106c7763a4542a34e27f7db90d78462"],["/wiki/index.html","dd81d78fa30fea8af78c4e8b07b059c8"],["/wiki/tags/知识库/index.html","ca293dd0e1dc5c2cd1e4221113752dcc"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","d20b7c6c10ffcb8283599338bb76392c"],["/xss-crosssite-scripting-attack/index.html","7bb7717fc38da7c43b5ab65833f178c7"]];
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
