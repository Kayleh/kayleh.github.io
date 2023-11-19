/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","531f8e038227051d40e368c3f82110d9"],["/404.html","33ceb806290dd7fb707367b47498d1ce"],["/404/index.html","f0929b86310026280c14222a3d336621"],["/7-sorting-algorithms/index.html","bfaa78323807c3f908d9ea54fe33e334"],["/AIO-blocking-model/index.html","6221bb49044885cee426117984ca791d"],["/About-Snowflake-and-Consumption-Degradation/index.html","c013f10bc644ab1c427d3ee3c6fae1b7"],["/BIO-blocking-model/index.html","4ec502516145f3d01edbd85f5b832763"],["/Bloom-Filter/index.html","ad13e09d3319ef7a0bb20e5b8e733373"],["/Boyer–Moore-majority/index.html","f22fb003eab2b53c5e51783eec2834dc"],["/C-algorithm/index.html","61ce0df12dc156971789694d36671cf3"],["/C-programming/index.html","6b9c2d824dfd5d8c201e51a17aa7a06e"],["/CAS-&-AQS/index.html","174469d4173aca25f983ad1adbf3eefb"],["/Comparator/index.html","531555cddfbc869a0f9535ffda6a3f14"],["/Differential-array/index.html","2bf5daf4064cbc6b35d0d324d14b41ba"],["/Download/index.html","22c9a95354e77dcb4e6635b7c8263dd0"],["/Front-end-security/index.html","f34aa5ddced68ef823e1b4282c4e0434"],["/Good-use-of-pointers/index.html","34ab81ba6c5ca91bd180afeb0437375b"],["/Graph-degree/index.html","ecc43204bf1a9c2cdd139056a2f00d35"],["/Greedy-Algorithm/index.html","9683eaa495c8c2a719f585be6ff6c882"],["/Head-First-Map/index.html","4487133f1198e476cb96480127ceb713"],["/Head-First-Netty/index.html","0ddf8bbc8985740dc4592e24be46ec52"],["/Head-First-Nginx/index.html","b679648b760422f42adb200cfaad6b9c"],["/Head-first-Spring/index.html","52bd79ee3f3500411c213321963665da"],["/IO-model/index.html","b53b6d838db562dad230748bd1716914"],["/IO/index.html","3f3407c9971802e5e686b4af04144031"],["/Implement-a-lock-based-on-ReentrantLock/index.html","8dfe570a5300535286b0c5e7805180b2"],["/Improve-Robustness-(1)/index.html","681be1d61bbc6947956e72dc045fe9d3"],["/Improve-Robustness-(2)/index.html","763c1d12eb377e9ac7c8a9aace05837f"],["/Integer/index.html","bbed67c99625b6b9227c58cdaa07366a"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","c31f9bbb58eee06aa2c15c2d9724d9b0"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","20ac055c5e6ab7cea1c0f94d8a7ee006"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","94740c5a4460dd79813a6ce074b3df27"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","0abbdeb5096cac6d73f77ac6a637bbd0"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","bd5f6b621c028840d115a071ba86f6cf"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","b97429a44608d72da078e57dc02fd5d5"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","162a47f964c9a2351d1f3eaeeb6e031c"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","5a2e54ced03ed0dc8682f193475e1c82"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","8eeb8c505aba68eabd3a5c17e0aebf64"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b363d212bb3cc0382cca2c5e3ee670ef"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","fd87dc14e37cf0909549f0760fd26f38"],["/Java-network-programming/index.html","fc5e5a84046b4698cbd974822133c856"],["/Large-number-operations/index.html","12cd2e8de9470a9b86f06f64836cabca"],["/MYSQL-MVCC-&-LOCK/index.html","921f779108e6c242abf43814fc7e42b2"],["/MYSQL-uuid-and-page-splitting/index.html","7b3ffd556348008513ad73a1470d52cf"],["/Minimum-Spanning-Tree/index.html","a04ae5be5bc60a3efb3ab479e571158d"],["/NIO-blocking-model/index.html","ed8e4c91406a325971f4b829a6cdf36e"],["/Nacos：Configure-MySQL-data-source/index.html","4f3696b78d9042a1bf0c874092ba1a86"],["/Native-method/index.html","8d420de2e647e650c7f394a1337e3cf5"],["/PriorityQueue/index.html","43ff7af326e1caca957f4aeeb31a9244"],["/Proxy/index.html","8a34e986a896d0f2b408b0929ed4f572"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","0bff08674ab425dc2b73716bc9fa9652"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","bb1b64d2ebf7f18961329b4d2246d99c"],["/Reservoir-Sampling·/index.html","361b634242572d85a5a1adb0679cb775"],["/SQL-injection-vulnerability/index.html","2b8bd7bf3e27995273a81128f6926bf4"],["/Sandbox-security-mechanism/index.html","c966f3a87ebfd4b267c037ab24e126e7"],["/Spring-Cyclic-Ependencies/index.html","73d512c1c5b8411becd0a45676e034bd"],["/SpringBoot-startup-process/index.html","b668bdd073de007aef52b128121928a0"],["/SpringSecurity/index.html","d93c6ebf48502728744294c9a33cedfc"],["/Thread_Pool/index.html","cf24e1f67fa20ddebf33786a6c036de9"],["/Transaction-isolation-level/index.html","a327c2187168f674cf22f3fcf89043b8"],["/Unitest-framework/index.html","ce841a203659dfd9c883d9bc1570c4e8"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","9cd1aa0042c7163ebccd375668f162d8"],["/about/index.html","ac4b9bdc03986a91787ab6eef0389ee7"],["/adapter-mode/index.html","359d6aeecfad0eafc2a2a49a6f8e563f"],["/adjacency-matrix/index.html","00b3db1717ccc5b04e7b958877760279"],["/adjacency-table/index.html","78fee7cf0678e5885f18e4866d1bbb55"],["/agency-model/index.html","efc469d6401ff3d69859a9fbb5feb010"],["/app-test/index.html","fe575ed6adb4f65de74995b02b2788f4"],["/appearance-mode/index.html","5c9071c0dbfbb9f4076ddffc063b0025"],["/archives/2019/01/index.html","e1d9c738005d9732a0402298160077be"],["/archives/2019/07/index.html","530ef0dd8d96a4dd47abb2734fd10e1b"],["/archives/2019/10/index.html","84ca23fdf617f8fb7d36fe6f444f5f5d"],["/archives/2019/12/index.html","56d017a4745f9d348aad5eaab08a518b"],["/archives/2019/index.html","52eb598256d4b82f89b6e5064ed45dc4"],["/archives/2020/04/index.html","97099770826a788e9450fbea7fdeffd1"],["/archives/2020/05/index.html","39858bf812e64e475a7f9c51d04b2d33"],["/archives/2020/05/page/2/index.html","19e8c25b05014aeb1fca836662f1a9f3"],["/archives/2020/06/index.html","2f97fc9bfe8e251304a77e3a9f04e495"],["/archives/2020/06/page/2/index.html","9b450bad8d72cd47d44942432aa69990"],["/archives/2020/06/page/3/index.html","766b22859bed8f0d8a5a3e850b976bb7"],["/archives/2020/06/page/4/index.html","442e122585d4511962384f55b7da0820"],["/archives/2020/07/index.html","2a242157b5e2df87abf41358c05d0e2a"],["/archives/2020/07/page/2/index.html","bb63e59ea83576e9b8437d01ef194897"],["/archives/2020/07/page/3/index.html","9011b785f682b351d73909f099cf1fb1"],["/archives/2020/08/index.html","36a77ffbde609560c487093887aca7be"],["/archives/2020/08/page/2/index.html","8c420bddab7b586113c8f02b59798931"],["/archives/2020/09/index.html","164a067b53b0a7063abaa6ce734db976"],["/archives/2020/09/page/2/index.html","766c1d22ac38657f7e0d1f32d70bcb94"],["/archives/2020/10/index.html","a0a1104799d29d14daf19ea3e90f5068"],["/archives/2020/10/page/2/index.html","53f90482c1db568b886a08f68d6a03c0"],["/archives/2020/11/index.html","28d42a03e71e30d70853d5446f65c691"],["/archives/2020/11/page/2/index.html","e2d0aadfad10aa057a74a1d452ea74a3"],["/archives/2020/12/index.html","4c73bdf591a496e305014c31392b56d9"],["/archives/2020/12/page/2/index.html","9d92fcc650a85305454285c71680e336"],["/archives/2020/index.html","f587c0fa9c3951f25b988b3ecc048f6b"],["/archives/2020/page/10/index.html","ae5ad1cfe24079711ca90b193775ae64"],["/archives/2020/page/11/index.html","40bcd1c1d137640700765b308374acd2"],["/archives/2020/page/12/index.html","f514cf644ae06bf78b1b3246c54eb23d"],["/archives/2020/page/13/index.html","b03650732aecde3a703952ae9e3a07be"],["/archives/2020/page/14/index.html","9974402b96df2207e652e8603c85a1a4"],["/archives/2020/page/15/index.html","1e315332a252cdfadfeacfc53a2c37f3"],["/archives/2020/page/16/index.html","14a4dd259cfb178680d2e699ae93e4e2"],["/archives/2020/page/2/index.html","674eef55e38102e5bae3418b30406095"],["/archives/2020/page/3/index.html","8c5e776323cc01e9393ba83e144192e4"],["/archives/2020/page/4/index.html","8d408d7277b2a84e4a70e7e04434b5ae"],["/archives/2020/page/5/index.html","f6f724e86f60db6b69be2fcd71a76294"],["/archives/2020/page/6/index.html","8078ab3115e1ea804edc76e9d9cacd02"],["/archives/2020/page/7/index.html","0903982b7c7d3ed5270087da042a8829"],["/archives/2020/page/8/index.html","7a232facc6947052cf7262271366c134"],["/archives/2020/page/9/index.html","1fe95b7938b1343f68a39de6e300de42"],["/archives/2021/01/index.html","f8be5c9345004aaf020e69e30b6f4abc"],["/archives/2021/02/index.html","894aec4bcbf94a21533b5d2311812ab6"],["/archives/2021/03/index.html","39e7ed9d047eed6674f2927efe923502"],["/archives/2021/04/index.html","617b2d7035d1de4700a964b4f5b9b9c4"],["/archives/2021/04/page/2/index.html","f41a94ed67802b690ba9bc450091b664"],["/archives/2021/05/index.html","40d32507143aeeb39cc29efa9a2f123e"],["/archives/2021/06/index.html","75c206c914dd584f360cef8b73c44879"],["/archives/2021/07/index.html","edbda4cc3bfecd37bc68d227701fc9cd"],["/archives/2021/08/index.html","39ed91a7f20d5f55a5e4beac550f2953"],["/archives/2021/09/index.html","f2ce32d4d9eec539eb620202869e528a"],["/archives/2021/10/index.html","2888d8728ec9b0a282c6b46d85c0890c"],["/archives/2021/11/index.html","faad5764406e59907c21abfaf57ad9c5"],["/archives/2021/12/index.html","628b02f13bec7b4a53ef220c04b6c39b"],["/archives/2021/index.html","22b3c91e53b9ec1af91a22fedeef1053"],["/archives/2021/page/2/index.html","034d3868f4739725ad313ab367c9f34f"],["/archives/2021/page/3/index.html","d90631003536f3522c526c657f478888"],["/archives/2021/page/4/index.html","e4b4ec3c1cce6533b1e241c4e9397167"],["/archives/2021/page/5/index.html","b8c433d215599d4c4b01c2e670866322"],["/archives/2021/page/6/index.html","331ed5007825bdddaf42d40918d61303"],["/archives/2022/01/index.html","48f90c4cb5b6193e9441aa507f0662ab"],["/archives/2022/02/index.html","85e4931b423bea2caea1edf8113a5995"],["/archives/2022/03/index.html","d9f4ddc990223760d4b2c774ccd86dfc"],["/archives/2022/04/index.html","0f802511ad28e25097b4e3c63b4b24da"],["/archives/2022/05/index.html","16a03a9b678f29cb98d537f137fac8db"],["/archives/2022/08/index.html","cb9189bef8779d54a1ae071ffff2d3bc"],["/archives/2022/10/index.html","e99160435eb60fff8aef3f05a13731c4"],["/archives/2022/11/index.html","2199661409c139b3efc63114aec3c908"],["/archives/2022/index.html","088c91876fc4beea15389a15ce13ca5a"],["/archives/2022/page/2/index.html","90db61abe3bdacbedc62d9381588de69"],["/archives/2023/04/index.html","8833ba74a629255a63de05bc0405b067"],["/archives/2023/06/index.html","da0a47f3a35aad0bd99c4da67e2dac8b"],["/archives/2023/07/index.html","31fd23e4d1a818cc496498eb7ae1ff4c"],["/archives/2023/09/index.html","51cb5f3a9eef316676d807e9bedc3825"],["/archives/2023/11/index.html","2c184b20ff916f285617f8e62b948144"],["/archives/2023/index.html","9d1ae4fa369fcf2fd85ef0c6c7bf1b08"],["/archives/index.html","1b4007f0a02e0db8997cb43089f24cc6"],["/archives/page/10/index.html","ff16b200f720fde1eac22d472175ce95"],["/archives/page/11/index.html","343d632f70e689d254eed99333877d78"],["/archives/page/12/index.html","70a449f2461c51f0cb707cd3381ae5f3"],["/archives/page/13/index.html","10d4b36c0ee8e6d6471ac8e748f3ca2c"],["/archives/page/14/index.html","ed8a129004f714e354b1c74b889791ef"],["/archives/page/15/index.html","0cbf5696fe404cade442f69d14c7888d"],["/archives/page/16/index.html","271d28c1c480bcf57101f21273061cb1"],["/archives/page/17/index.html","0a0ee472e12ca1af88571a2c08ce82e5"],["/archives/page/18/index.html","24986744f4315f595be824f340da0def"],["/archives/page/19/index.html","34017263a9acce18b78d3defbc05c1f9"],["/archives/page/2/index.html","aa122eed090b3400c85575ad84924867"],["/archives/page/20/index.html","ff82d1fd157d83ef18bede93cb119cd2"],["/archives/page/21/index.html","44e9dcaf8bdd3bee4a60af92b8a53bb6"],["/archives/page/22/index.html","2d9845da0168e14e37f78ab4c4a7691f"],["/archives/page/23/index.html","df97ed20def19eb21760fce5421a3c80"],["/archives/page/24/index.html","57c71ff24f5de455344a38990ab37337"],["/archives/page/25/index.html","577ba9608f4cc42d0f483c6c5ffbac24"],["/archives/page/3/index.html","1d031faf4170c4102f4ee6d2f4423f19"],["/archives/page/4/index.html","14040fffe0adb8b526badfb2fc78ba9e"],["/archives/page/5/index.html","c59f98c444162b81d9686b275155c614"],["/archives/page/6/index.html","df2e6c1b8c99289a368966843e95f187"],["/archives/page/7/index.html","eaadfb85c589cd885b73d075b2e0ddbe"],["/archives/page/8/index.html","188bef5b3b05c82cb6587e5cbe5494b6"],["/archives/page/9/index.html","96a59c344cd8d4e0eb0e7d33b9969de5"],["/array/index.html","618bdfa4c0794bffb2f1c4ae478ff6f2"],["/automated-test-katalon/index.html","9046e04c2f1746954d1bff725eb134f1"],["/automated-test-selenium/index.html","0abee16417cf5767f705690e7fea327b"],["/back-to-table-query/index.html","a549fc1a804445192ec7dd06847b552d"],["/binary-search-algorithm/index.html","e9dd43011c9af44f01251297ca953bf9"],["/binary-sort-tree/index.html","f82b36509e4db5dace20e341509cebe9"],["/bionioaio/index.html","7cb548ae1056fec550f81d43e0be1a8d"],["/bridge-mode/index.html","6a68db21a658cb21d962b0fa61de43a1"],["/builder/index.html","916aca129ba35f449f9a3442096259bd"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","b78e82a92d22c67a5a39554245220e61"],["/cache/index.html","b762f53111f3f76b24699e3ac0ce3bb4"],["/categories/C/index.html","ad939dc2efc7296ab9c11f22fac8915b"],["/categories/SpringMVC/index.html","a777b86b2a15d453a81817279575e7e5"],["/categories/categories.html","385a9dec90171bdb39c51058d9c9e3fe"],["/categories/index.html","ab6745b87be2e681db130c27d7a46f40"],["/categories/linux/index.html","610643a5688ccc0d334e67708a3a1009"],["/categories/分布式/index.html","d55b8c926c39794bc1b978214f84af2b"],["/categories/分布式/page/2/index.html","fb26f385d28ade0d486528a34af8e2dc"],["/categories/设计模式/index.html","64c300c2b6dd671c4e94bbacf379615c"],["/categories/设计模式/page/2/index.html","3eb58534eb33279c8a150773dce31f3a"],["/categories/高数/index.html","37ddbb1129da351557cb4b016a05cc3c"],["/chain-of-responsibility-model/index.html","8a508d97daaadb8de94f8100b71a1b51"],["/charity/index.html","2e42935de5ffbf734ebf8f9786f54363"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","9840f4160a2e21557f6e3b1e236208e4"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","4a0e89bf01f8d4213fa53f2194bfad76"],["/combination-mode/index.html","3daee0c8276eaa59effd0e45eaf17ecb"],["/command-mode/index.html","902791d3e4d9f595f4d4f095186b5abc"],["/common-commands-of-unix/index.html","80179c70fe32f23dc5656cb8b05e0dfc"],["/computer-network/index.html","3688e6187e02b2b03a1ce9e7f592dbe6"],["/concurrency-principle/index.html","ead1add7ef12748a882318339a34bba8"],["/continuous/index.html","6d1146bda30de8f9ba576911c285aa3d"],["/contract/index.html","606d0392ab2e52a7f4c1545a8cbb27f0"],["/create/index.html","83718301f436c94344bab16f1953caa2"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","2f07a8ec81a871d4f5f6dff3cc1f2c51"],["/data-structures-and-algorithms/index.html","0710bb2027054988a120c950cb1e9604"],["/deb/index.html","33fcdbf77ae27ad3ab617d450792f87f"],["/decorator-mode/index.html","0fb0cc6ed27ba948ab76b32d7bdcdf3e"],["/definite-integral/index.html","0688f7b09e6aa6e173121a033d298330"],["/dependence-reversal-principle/index.html","a1c13653a044014d3ed3a3916d758426"],["/derivative/index.html","30b3c9e4fd2a60e10666ba5d0c2523d2"],["/design-patterns/index.html","50c49438598bf19eb532919aefcc7142"],["/dic-algorithm/index.html","1fb05e75cf6a0e3810675ed7899f9c45"],["/differential-equation/index.html","06bc82d3175f773c7ff8779fff8c40e5"],["/differential/index.html","1c8df79c00979b5295774373d13ee75c"],["/dimits-law/index.html","f89f20619011988d37e58b67ff3cee76"],["/disjoint-set-union-find-technique-appreciation/index.html","d15e6c065cf5bfc3de8f62e1c9c69709"],["/distributed-lock/index.html","1ac202a757989e26097acdd76d360230"],["/docker-virtualized-container/index.html","cdf0361ca2a7493dc539cfe9579d1fd2"],["/double-integral/index.html","519299512ba6ae38db36681077afa17c"],["/dp-array/index.html","4658412b22aeca0f74a18f4fb197b7e5"],["/dynamic-array/index.html","670a8bea6cf5b0901a69c0a96c9e1aa3"],["/dynamic-programming/index.html","550a11f2ceeda85c1e72ab1073916b61"],["/edgeset-array/index.html","da90843e24de789cebb60e19f110f72e"],["/encoding-algorithm/index.html","8dbe3d2ed38db2cffc7f8e5be13dfee0"],["/eureka-service-registration-and-discovery/index.html","25b46cf24a3e54b0ba15b4b221de9965"],["/extreme-value-and-maximum-value/index.html","0d8bcd0344b858f444a03a3a72797179"],["/factory-design-pattern/index.html","0d593c71c80ff8e8c2f6bfffa06a52d1"],["/file-input-and-output/index.html","6a932fb81900436e12be642315b109be"],["/flyweight-model/index.html","80948027d7b0b23a5ec0fca3fbf06325"],["/friends/index.html","4f6d3d3113d154bba0e3c3ffd818cd11"],["/function-graphing/index.html","6b1a7d2a328ae76aab2cb40745dfe654"],["/gateway-service-current-limit/index.html","4a51b0cae9b8135b9fed8c433face867"],["/gc/index.html","b27a87957eb1cee00a6677c2b951513b"],["/generalized-integral/index.html","868d58979fa3b7d718e4af38a4f34e83"],["/google8102e2f35ce9e391.html","8d49f0ea905bb55d0ac0abc13c18813f"],["/gulp-compresses-static-resources/index.html","f892cba350fcf4ad42e7eba6be0ae6bf"],["/hash-algorithm/index.html","1654338f57ac7c34f1605fb4062f09f4"],["/head-first-JVM(1)/index.html","5220e3d94d2432d50fbca3223fc9b47b"],["/head-first-JVM(2)/index.html","a2e92c1c68b5fc3649d5bf1a1167a0a5"],["/head-first-JVM(3)/index.html","8dbdab69d96be056d020d2bc09b72287"],["/head-first-JVM(4)/index.html","ae8943093226e4d1f845842d5fcc0024"],["/head-first-SpringSecurity/index.html","76e1ed1cef0689a3fe4dab3d305a176a"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","29d453dbdc3793954de8a46bf1650fc5"],["/heap-sort/index.html","c192a9712bf5ec69e9f48847092a758a"],["/http/index.html","131f1af1f15d3b2167b046aabb40e2dd"],["/huisu-algorithm/index.html","37f83fff1ddc77b9065b46537850bce5"],["/indefinite-integral/index.html","40aacb2d3256e82b95fd9aa6169524ab"],["/index.html","e02729533455cdccf772568a28d2b416"],["/infinitesimal-and-infinite/index.html","b9171f3d30439fd52f6fbf33a2e63c48"],["/interface-isolation-principle/index.html","847275497475d06d59045874162105c2"],["/interface-test/index.html","641e511f00f5a7d4aef6d71f4c7a811b"],["/intermediary-model/index.html","62652d477e964d7460ba4d3bd97397c7"],["/interpolation-search-algorithm/index.html","423ee5ccab2e18909bdf9910f52227fe"],["/interpreter-mode/index.html","2460ac8914280ed43a6fb8013dcd6d48"],["/introduction-to-computer-network/index.html","5d013314a8b6c7545cfb9b85de7f5ab7"],["/introduction-to-operating-system/index.html","00ba4778513118db0d530ec90428a821"],["/inversion-of-control/index.html","1fb2749a405c45a03b25eb0864e77627"],["/io/index.html","9ec834714d36367a7278b02d1683c633"],["/iterator-mode/index.html","98aeed8cdc9aab2f120c6f36c21f7eba"],["/j2ee/index.html","b2d3dbf09d0617c7f668b65aa103e79a"],["/j2se/index.html","faedc036643dbb22c67528cd480b6e70"],["/java.lang.String/index.html","bd382a8f9704fda4299577f2357d3ca5"],["/jdbc/index.html","2aab2ffa78830d8b5cdeeff0ad8b4882"],["/jdk/index.html","7c24aaad47a1c547fbc03dadbd8c4c8e"],["/jmm-memory-model/index.html","d118781b9f22e90a04315f072186164c"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","f0044bb34d749ce3ef4c691dcbef2543"],["/jvm-method-inline/index.html","b5e4c0fca3539701b8cc42076543a41e"],["/jvm-tuning-practice/index.html","58d0a39f3b5a4fb66543377f527dea4b"],["/jvm/index.html","bae32308b611f5e9c9918d83ed8d71f4"],["/law-of-robida/index.html","f570ff551fa95544fc8845bbba43dd04"],["/limit/index.html","313aa595af45f9e4e060627fbb00e0cb"],["/linear-algebra/index.html","ca10a917ae35237f8833ec00c22131a5"],["/linear-search-algorithm/index.html","99b9bcd3648f62efea5416d40d734d64"],["/linked-forward-star/index.html","48b5735062b865281322f9e0d2b08c8e"],["/linked-list/index.html","e9ad25eb8df37d9db6c8078d57cd1bcd"],["/linux/index.html","9453fbc988ccf14556f933171ec33da9"],["/liskov-substitution-principle/index.html","f28a13a2adf1d9c4ef17a6dd19cd2ae5"],["/lock/index.html","0dee9767b5bbd02093e861b296721dae"],["/lru-cache/index.html","68a3b5e63267895c05444b8a90dfd70f"],["/memo-mode/index.html","ec4c1ef192346ef0bfb64169aeb52175"],["/monotonicity-and-convexity-of-functions/index.html","83e5849a3b602636454c538077088a71"],["/more/index.html","8463f9b6ce632cb7ef7539d0f167f5cc"],["/multi-function/index.html","fe7601fff0621ac6a52c9ebd14108535"],["/multithreading/index.html","1633080b4a4602c51f310f81d6e7ad39"],["/mvc/index.html","a9713f56d04b3c1fd3c63373bd20ff72"],["/mybatis-cache/index.html","a0cee8c026944c8a44c72153234f64c8"],["/mybatis/index.html","f66ed73e0a6321afa2b442e41fd369e4"],["/mysql-index-wrong/index.html","8df3b877fe9f8b218b519e7d4b8544c0"],["/mysql-struct/index.html","08c25825fda6c32ea46e64f3ed4e860d"],["/mysql/index.html","a49ce6fb193bf3b1dbfc6dea92643d40"],["/nacos-service-registration-and-configuration-center/index.html","5e085faa9a65f8dfa6b0e9d00638b87e"],["/notes/index.html","370d790ab9a7315f8b23c9f166ed8666"],["/null/index.html","665172aa284bb2954a4ff52d31767acd"],["/objectoriented/index.html","cd4ae7e0aa5f424a3d4d1a25748011fc"],["/observer-mode/index.html","430c39c17d17188ab41d9ac17c9f5820"],["/off-heap/index.html","3ce9f4231207f6c8a476a8a1258747bd"],["/operating-system/index.html","1f58917a3c938caaee6cdfe076ce999e"],["/page/10/index.html","bf93c654f1ffcac524c397630db1b52e"],["/page/11/index.html","b0f1d489f4b5ef1ff96992c5d5bb36d3"],["/page/12/index.html","083d89b0b2273c65d1bdb5980f74694f"],["/page/13/index.html","11bc7c56beed9b0a58a634ba3ce065d4"],["/page/14/index.html","6d20282b334b4c41b109bfd6bea36679"],["/page/15/index.html","4a7179796b061d2094760e155928a76b"],["/page/16/index.html","8c59f51cca17da066bd39e7fc9265ae7"],["/page/17/index.html","961440648e61f6aaf89afdf9c97f1997"],["/page/18/index.html","e9757437ccc1346539c8b25f2bb11859"],["/page/19/index.html","c46aee7f3d5e0864dec7d3ef3c697d97"],["/page/2/index.html","743738611f4452902d05447a7d6abda3"],["/page/20/index.html","52d66406a96e8efea9b475a9f2a6dde6"],["/page/21/index.html","5555ead43ecb615382cf104546756ce8"],["/page/22/index.html","597eaaa28d0132a26dc116bf6b13dba8"],["/page/23/index.html","03afe4efa9a2994ae4a17d0524ba7044"],["/page/24/index.html","98e14b15086edc5628cbd6c3e1c76e3a"],["/page/25/index.html","000908840ffbbc72fecbf70ce287403a"],["/page/3/index.html","68f6898e1c721254e0ac1eccbb83c5c2"],["/page/4/index.html","67149cc8922ac176fc0ef63bd885cb20"],["/page/5/index.html","a78b2629139af325824bf5e2e4ab6bab"],["/page/6/index.html","4f5e8faef42f171d8db19733a02fcbb6"],["/page/7/index.html","5402559c8e03b57dcc1e43bf2c01d02f"],["/page/8/index.html","e9520a0adc2a872e78f9829da8dd9926"],["/page/9/index.html","944cac9dcd7fd9f1a40e5d2a2df38d1e"],["/palindrome/index.html","cdd4532199d873885f92222e71c7770b"],["/partial-derivative/index.html","e0caef5fb7ffbfd7bdeba676286101cd"],["/pass-by-value/index.html","9c820dda3a0e97210be6bb38f3cbb6de"],["/pictrue-bed/index.html","4491b6456351d6058683e9c52b634ae5"],["/principle-of-opening-and-closing/index.html","250c9c6d77c8d38b34844ff5d27b68da"],["/principles-of-computer-organization/index.html","40ca096d188a64cda601626e463ebef7"],["/program-test/index.html","94e3aafcfcd339525a5d713132d4acdb"],["/prototype/index.html","20340aeacabd402218d0b3bd90f44bcb"],["/queue/index.html","d4abc2345063af0858dd2629fd881f14"],["/random-weight-distribution/index.html","d702a57fd0c42df89fb884b39a874d3b"],["/realize-modular-programming-with-functions/index.html","934e1401aeb4fd106771adbb3d5aa707"],["/redis/index.html","d5eebeda678817b0c260622d56137411"],["/reflection/index.html","454746ffda1755b20db81dfeb830cac5"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","b67a9d23ff44ab535fdcb4eac4ad2cc7"],["/ribbon-load-balancing-service-call-degradation/index.html","c21949f394355e55e8dc311e24e505a1"],["/round-dp-algorithm/index.html","4e905294ce9fcb7c2d7b8c5a9b3732a2"],["/seata-handles-distributed-transactions/index.html","f83e7fb8565e4a531a837121cb6f7f09"],["/select-structure-programming/index.html","d08e527ebe767633dc51fdd692ac29fc"],["/sentinel-realizes-fusing-and-current-limiting/index.html","f3efdf44cbc9b614967c2d1d5a562d1b"],["/sequential-programming/index.html","267dad3a51fb667db279e1d1ad55653d"],["/series/index.html","b29426952c5d17c4ae189832f3458eec"],["/service-worker.js","261e0470d0c631a17bb7f3db2b4b1bf0"],["/shortest-path-algorithm-Bellman–Ford/index.html","757fa59b76a1ddcac0f4720bef73f9e1"],["/shortest-path-algorithm-Dijkstra/index.html","b8c193667df4e50929293181602d6107"],["/shortest-path-algorithm-Floyd/index.html","e72b849024fa404489038ee9482e140b"],["/single-point-login/index.html","ccdc02085e0cd0ef1691ce4963ed2d9d"],["/single-responsibility-principle/index.html","43ba5a3da55fdd9ca069113c929aa8bb"],["/singleton-mode/index.html","d079abe4c6afdf1156d272bfb15584d7"],["/slidingWindow/index.html","53c88e86c774a61a6aa760de48a59f63"],["/snowflake-distributed-id-algorithm/index.html","1da9d9fcad6daf494756491686264f01"],["/sparsearray/index.html","02116c5e4712734ce7a46908542d4f79"],["/spring-and-jwt/index.html","2b417b0fe8e9bcfd21fa1fa5d4e09498"],["/spring-architecture/index.html","8df44733e49fab5af13f9071e0195d2d"],["/spring-relate/index.html","7d664c0476c3f290214515daabf0e106"],["/spring-springmvc-mybatis-integration/index.html","6d4ec046d837d3fc21b06aa8d4b3b121"],["/spring/index.html","8089df27ac145be46432cec46b088bc2"],["/springcloud-alibaba/index.html","545e1c1f2aca8e98423d3584ea520f68"],["/springcloud-bus-message/index.html","acf810907c56e59291064792b70998c1"],["/springcloud-config-distributed-configuration-center/index.html","7dc3829ceeabdb4da6ada6777a5353f9"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","2ab4a4fa763a2027229c46ec18fb4cef"],["/springcloud-stream-message-driver/index.html","b3b2ab41687363577061acf7b67107cd"],["/springcloud/index.html","62da887425766947db17e800691b0826"],["/springmvc-environment-construction/index.html","4f64007f3e6528b8796338d138787176"],["/springmvc-work-stream/index.html","48b3dc4f4df6ecef08248fa6a8b4b318"],["/sql-injection-attacks/index.html","ea38599d5843cad00d60d9137fa6d4fa"],["/stack-simulation-iteration/index.html","5c9ef2a1d8e079b56bac11a161bf480f"],["/stack/index.html","88df75c3c1f44887d42cce48f0756adb"],["/state-mode/index.html","af707c086c514d468ceba3b8544af35e"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","4e8db22154ff7748693638bbe6556064"],["/strategy-mode/index.html","d7c6fff50b3e4a1e7cfb5e68c66abf98"],["/sw-register.js","ead07451e208741cd7401e0a312d80fe"],["/synthetic-reuse-principle/index.html","4d65dc1f2e2c3548bb114a72ad8cdf8f"],["/tags/C/index.html","67cbc57127abf3e90403eefd74006bd4"],["/tags/C/page/2/index.html","0f742233efd5679e82487c68ad6a9014"],["/tags/Concurrency/index.html","b1f7e185523c9b060a1577ca2e8da9fc"],["/tags/DesignPatterns/index.html","91c0c9edd5a462d67d8796eb511b3328"],["/tags/DesignPatterns/page/2/index.html","8f6dc378b4a55de873f427d360b24526"],["/tags/DesignPatterns/page/3/index.html","12e66d7d5f7657e1489e7b93ba891804"],["/tags/DistributedMicroservices/index.html","1c2fe0dd7defc9591ffa71f85a31eda0"],["/tags/DistributedMicroservices/page/2/index.html","28e9a26db026c8588064025b74732394"],["/tags/Interview/index.html","34e7ffd9fc36d63e40fe7a007d53c8cb"],["/tags/Interview/page/2/index.html","89098ac1949fe1d3e91438ddedfdb389"],["/tags/JVM/index.html","a930d2795412803da9bacff48672bed7"],["/tags/Operating-Systems/index.html","4835a97c86a3bee66b02f9569d3464e7"],["/tags/about/index.html","a9f38bba8045a365275f36e87e12025d"],["/tags/ad/index.html","c3fcd0961481611127cdd6634951ba63"],["/tags/algorithm/index.html","d0be2dc86486ac1a38834dfef3c4be4b"],["/tags/algorithm/page/2/index.html","fbb14d72f98340f548bd0bbff6aff8c3"],["/tags/algorithm/page/3/index.html","7c4a11901a3bec38ac8337eba68de2a1"],["/tags/algorithm/page/4/index.html","954a90a1fe9a666d6c3ee3f64d1abdec"],["/tags/algorithm/page/5/index.html","3cfd17643427ebe8ff561cf996a7efb9"],["/tags/bug/index.html","a4f42c0c70c73e83276de81475ca3aca"],["/tags/computer/index.html","d36e49f362956f21b111d54810c57565"],["/tags/data-structure/index.html","bf7cdf6d0fdeedc1e9c5b1b92ca1c9f5"],["/tags/docker/index.html","89570403e990dd86c6d9fab349c9defa"],["/tags/frame/index.html","97348eef9b7891d5816d67fa9374cb28"],["/tags/frame/page/2/index.html","a484b65cae2bae90245d5ca910f1460e"],["/tags/framework/index.html","8275ef8da45e8a91cbd82e44baa0beb9"],["/tags/front/index.html","ae9dfbb98be80d85c4d7393e246e6bb0"],["/tags/github/index.html","e8ec81510cf6960cb656087d5a8758c6"],["/tags/index.html","930da547ad41ce71c257529b69aa7e0c"],["/tags/interview/index.html","93896976567e4c40505ab409514d5a3e"],["/tags/io/index.html","b8e356b8b5312c26c79cec02cee8f8db"],["/tags/java/index.html","f9282d9605540fde0b24b59beccd119c"],["/tags/jdk/index.html","7f3f51fb3b7dcac14f6f9c5deba9a900"],["/tags/jvm/index.html","4b1bfe9beb0b940b28faa224438746ba"],["/tags/jvm/page/2/index.html","50db80c51cfcfef53798f24248389217"],["/tags/linux/index.html","51e071a63c8a9135301ec10e15dd48c4"],["/tags/maintain/index.html","e1083368562ab3a8134539caf1aa8ab6"],["/tags/math/index.html","77d702c748f11a010562dbe8ade10354"],["/tags/math/page/2/index.html","ba7a1446d9e1ece569fc8d3b3e350d32"],["/tags/middleware/index.html","75ed15615e4e1685f0524856508ec7ca"],["/tags/network/index.html","9c6e574b9ae0425fd1ca246008884f7b"],["/tags/network/page/2/index.html","a436a2d5cb4a868ff0ba4a3681420500"],["/tags/project/index.html","41f6cdf6f656e87fa5dc600f120ddf68"],["/tags/project/page/2/index.html","a518a7fa9738051f70e32e037de6acb0"],["/tags/security/index.html","7dfe4ea68a6b3a05df090e19fddfbaa0"],["/tags/sql/index.html","4ce7615b5a30f8fb16183547bd42df1f"],["/tags/test/index.html","324639d6958545d19adb4143b07ac808"],["/tags/think/index.html","65cdffd31bd5eba03b428cc487ae5c4a"],["/tailscale-ssh-remote-connection/index.html","91519759c78f7d0638e283ebfa59268a"],["/tcpip/index.html","a4cbb3c91f965581e3bd7617e855d026"],["/template-method/index.html","ec663bab9895becf6ca6d8b74c3287c0"],["/test-case/index.html","28aa19364857309264077d4146fb783c"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","99c314126c9a873664963dd8d3a5339c"],["/thread/index.html","c1563f26680a6e276280e1561e1fc7a9"],["/tj-horse-racing/index.html","db80add24f120aaa31b32a5b13ac4e78"],["/topoSorting/index.html","7af2576ed9f17d0ad4ca548eaa6f4c9c"],["/traffic-monetizationaccess-to-google-adsense/index.html","1757ec6cf884eed55cfe26962a51df04"],["/txCharity/index.html","beb909f215e919c50f73df46bbb5079d"],["/ubuntu-set-ip/index.html","15d6228a31efb2b6f223d44d9c537c9e"],["/undefined/index.html","b45c7c9a4ac62a52b7c8955a2d5a8e15"],["/use-arrays-to-process-batch-data/index.html","63fa4eefba1a3aee6f72c0a2d2503388"],["/use-of-springmvcmodelattribute/index.html","d05cacb19de439fb5960dc5f8c5655c3"],["/users-create-data-types-themselves/index.html","9a38d5561a9bfbda01122fb1ec65fc9d"],["/visitor-mode/index.html","d5422cb3d677d768a0a98b2650549977"],["/what-is-milk-and-why-is-group-wise/index.html","6e2909860d0be5cadb1eb4b4e93baff8"],["/wiki/index.html","dd81d78fa30fea8af78c4e8b07b059c8"],["/wiki/tags/知识库/index.html","ca293dd0e1dc5c2cd1e4221113752dcc"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","a7f603b77570226c5cca70b1487e165e"],["/xss-crosssite-scripting-attack/index.html","66ed6bb30d67685b1899974e62020b88"]];
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
