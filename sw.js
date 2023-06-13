/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","a19a4b8ee828271e459edf1d9068f50d"],["/404.html","96a1fcb0f372eb17bd99df1cf33cb588"],["/404/index.html","107d64d135174db22d11aab75c180bd8"],["/7-sorting-algorithms/index.html","fe928837503e0301e3f5091ab5c9448a"],["/AIO-blocking-model/index.html","a57fa8db2b462a4ca0d8f944acd68a46"],["/About-Snowflake-and-Consumption-Degradation/index.html","09cd3a0f5ec19a8414aacc6f75f57e6e"],["/BIO-blocking-model/index.html","b116ab4a7b5649f45134ce23f4439bd0"],["/Bloom-Filter/index.html","4f8f65d1dc600617923f36841a619fb0"],["/Boyer–Moore-majority/index.html","77b521f56d218045f5e22b8cde4190e0"],["/C-algorithm/index.html","f223b430ff55fb3be711ddf1a0efa3e3"],["/C-programming/index.html","bac5cf778e525a89059fc359242b76cd"],["/CAS-&-AQS/index.html","f9c991c0de192297863821663c50e834"],["/Comparator/index.html","58cd1e8dc296dcd6c7b1c837609d0051"],["/Differential-array/index.html","5bfc2773ed1cc7ecd45d158ac1cd0d29"],["/Download/index.html","073532d123f0aeb1814a3aba730f9311"],["/Front-end-security/index.html","91f8af466943ed7d8fa4c6635a156254"],["/Good-use-of-pointers/index.html","fd453605b02ebff1252d12fe142a1e04"],["/Graph-degree/index.html","e94a5aba26b9e9d97f543975c5072cfb"],["/Greedy-Algorithm/index.html","c3bead53e0a06f985e37fcdeb0773cc4"],["/Head-First-Map/index.html","5682259d2c66066ec787dcc62fe32dd7"],["/Head-First-Netty/index.html","fa855ba490952a49f9b443f80bb0464e"],["/Head-First-Nginx/index.html","357485f65bd0248745767dbf58258c28"],["/Head-first-Spring/index.html","9c72595bc0e4b4c10253906e60d0fc3d"],["/IO-model/index.html","4d30a9bc29776df5678254b6e34262d5"],["/IO/index.html","ae73cea9e5193c2f890f0224b6caa8cd"],["/Implement-a-lock-based-on-ReentrantLock/index.html","5b5f33a738c50455bc835ce4a3a593ec"],["/Improve-Robustness-(1)/index.html","91748a7828e48c5846f5c326c441fa61"],["/Improve-Robustness-(2)/index.html","58930a5e2f9e3fc246cc59b9e6a6e951"],["/Integer/index.html","bf27b41a466fb2391e9d51bbea1e1015"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","764c8357a0a6700a494c86be1c0d80e9"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","18a001e10539d9e0b736f6ddcb6471d9"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","b51d0b6ec26964de3d33e407cc7d08ec"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","2eaaea2cf530726575b977471d6161b0"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","00c8495633300312c87f91dc625672e5"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","c873aa4685e2323f5248c573c16aff15"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","f1b5aa0bd0c26e4285295d92abd0a03b"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","3bf6297aebd6ed5b4ae2a80c3dbbc9da"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","7cd617921efff484d2625fd0307ba82f"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","ed5cdaef94f0a3e7b1ec6e66fe475e52"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","7102005bb33716506e0de39d056716e2"],["/Java-network-programming/index.html","739f68350e387b73f07b7c14ad0476e9"],["/Large-number-operations/index.html","ceae7492c28b94c56a276b64a46c8b14"],["/MYSQL-MVCC-&-LOCK/index.html","ab7f8662efe4fd77b2b96cbddff7b084"],["/MYSQL-uuid-and-page-splitting/index.html","aa077eb91fda120207f32380bf82e380"],["/Minimum-Spanning-Tree/index.html","fb031151a9e3ceb7194be5f11d418d6a"],["/NIO-blocking-model/index.html","c1474fb17fb7943406189e3047aade12"],["/Nacos：Configure-MySQL-data-source/index.html","e1d0e8a877977b40117fbe77cff52783"],["/Native-method/index.html","ec884f567f1f3eda314c970752651495"],["/PriorityQueue/index.html","7823fbc2987beff4e459ec9eeec7df9c"],["/Proxy/index.html","33b6a50b61ff25a5a8221cbaea79462f"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","200b172c37870d9008ac2fc5c93b4cf2"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","b0534ad132363cb7f4e2bcabc51627b8"],["/Reservoir-Sampling·/index.html","75dcbe514860b6245a860e9547bb14aa"],["/SQL-injection-vulnerability/index.html","b8fd6f71a4cc7bc21325b37737cc491f"],["/Sandbox-security-mechanism/index.html","ae8cd956c07a7492c6dc71caf9b92093"],["/Spring-Cyclic-Ependencies/index.html","b90669db8948fac592a0db802b8d2271"],["/SpringBoot-startup-process/index.html","156038209b10c2cabff654d49367baad"],["/SpringSecurity/index.html","878dcab995a9ca8ab5566438c47c3c4f"],["/Thread_Pool/index.html","6706ccce98971cca3869eacf1e48795f"],["/Transaction-isolation-level/index.html","1fb000f4aef332cc6d4e1ef93a0ae3b6"],["/Unitest-framework/index.html","c74b7b59fcc68301cda68e6262a761f9"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","b3d0541dbbe3393053b51a1f7481a316"],["/about/index.html","4abeae10f3fd4b2a3615be28d5a9b6d2"],["/adapter-mode/index.html","9f8e7a0109b1bf14fd2e62af021658bd"],["/adjacency-matrix/index.html","c19007529e026df043fa5a27a1cb7370"],["/adjacency-table/index.html","3d1d04e2c1b4a80adb29c46f31fab74c"],["/agency-model/index.html","5e874a7654c926de9e24d98ad75b0c2b"],["/app-test/index.html","392930a80e52207c7c8d3d92b222e69f"],["/appearance-mode/index.html","674b06d7f010b383e1bc0e220b742511"],["/archives/2019/01/index.html","912754befa4c647549788f007a28eab4"],["/archives/2019/07/index.html","0796a679818278fa1d7dcc0336b44a7c"],["/archives/2019/10/index.html","38e716aba188739f4e08ecac340c9521"],["/archives/2019/12/index.html","1d43c7c06474e82228a7ac3e4ff7dac6"],["/archives/2019/index.html","205b0f1af8f90648e106e0d830d6d6d9"],["/archives/2020/04/index.html","8ff724eb60e2697eba29502ed5b93bf9"],["/archives/2020/05/index.html","e7a114e36d93da6e73602f50faff8600"],["/archives/2020/05/page/2/index.html","320616fa3c73aa55b983645b76dc299b"],["/archives/2020/06/index.html","5fef97a3cd9f2d02347520bf2f823861"],["/archives/2020/06/page/2/index.html","32091dcd3232119ae4224c03ad3db1e8"],["/archives/2020/06/page/3/index.html","35bf7a0e6fa49cb43a204a18c90fb043"],["/archives/2020/06/page/4/index.html","cbcc5a41cf2eb9b998e000db393d294f"],["/archives/2020/07/index.html","a61037d473498a821fc990b31c8215a4"],["/archives/2020/07/page/2/index.html","801fa8a04f4ff18dd2242d825847df61"],["/archives/2020/07/page/3/index.html","bc149a6624a681d63f5774968f2b2b5c"],["/archives/2020/08/index.html","a59cd4a6de74653554a76b505cbe7979"],["/archives/2020/08/page/2/index.html","70e4efa0bbfcb1c8316915061a6c655f"],["/archives/2020/09/index.html","f120d16acc2d838da9efa5d7a96dbbd0"],["/archives/2020/09/page/2/index.html","29518209952ff83b3acb1b78d3bde66c"],["/archives/2020/10/index.html","7e5fb65282f54f7c829ecd44d224c476"],["/archives/2020/10/page/2/index.html","82dbec7b5a28df488c7eae1c2f1ff37c"],["/archives/2020/11/index.html","7ced80a4128a51bcf4e3e8601c99852b"],["/archives/2020/11/page/2/index.html","bc19724cabba52bb46671e3bd249cfbd"],["/archives/2020/12/index.html","fd1ecc98be412611c5f959491338f9a8"],["/archives/2020/12/page/2/index.html","26cbafca7dc2068fbff3778f24eb0c91"],["/archives/2020/index.html","3ae124985be26df6ba2e49fdbab223d2"],["/archives/2020/page/10/index.html","0064dd195d196374897f262ac93b8911"],["/archives/2020/page/11/index.html","42ef9def62c8c331b6a431007248cec1"],["/archives/2020/page/12/index.html","ccd1982ec2df888601add0fb026ef7b1"],["/archives/2020/page/13/index.html","5fcf4a163c8ce3e6344d0bbda97241e2"],["/archives/2020/page/14/index.html","c6cef74029d68e01187fe3fc95790b45"],["/archives/2020/page/15/index.html","cac4bbe2a1f7f3fccfaf9cd7e5295d19"],["/archives/2020/page/16/index.html","2cce085c89038071d9091b65c1ccc60d"],["/archives/2020/page/2/index.html","94c671e6602d107714228d396477d318"],["/archives/2020/page/3/index.html","888bbf2420e70003f08df521c0efb882"],["/archives/2020/page/4/index.html","13f7b6165e0c139c7a6ce66bfcb572b6"],["/archives/2020/page/5/index.html","598eb0150b8b2627c85b0b943edb35cf"],["/archives/2020/page/6/index.html","9a2f4a3f813e8e799f8246a158fd8b3e"],["/archives/2020/page/7/index.html","f8566cdf24cdbecba4eeac6a647b6454"],["/archives/2020/page/8/index.html","43c9159de326c85d382152f9bdd70f77"],["/archives/2020/page/9/index.html","268d2dfa5f280c30ea91b3416348ad0a"],["/archives/2021/01/index.html","2d895449b1dd407a66ac07c10cb4ee09"],["/archives/2021/02/index.html","86a7f326092cbf4a131e87a13695008d"],["/archives/2021/03/index.html","6ad74b0deb04e8aa9ed88b55ffb5bd8c"],["/archives/2021/04/index.html","32d798248d518af49a79f0034ae4a5cc"],["/archives/2021/04/page/2/index.html","d5a9223e737ba778c701b28bf45d85ea"],["/archives/2021/05/index.html","0f2876886c1cc7c19ee338000eb9c67a"],["/archives/2021/06/index.html","f4222ba949041b92f0d0207d687d7ae4"],["/archives/2021/07/index.html","469bfbce147e6484c35e79aeb6366de6"],["/archives/2021/08/index.html","ca195ececf99975d03816dc458a998d8"],["/archives/2021/09/index.html","3b0c9c9f8b7ec87f59a9c7643b0dcbfa"],["/archives/2021/10/index.html","8c98fc9d0c2a8526c0332d5be82e5ad2"],["/archives/2021/11/index.html","4daec13dc4afec9496630c727972a0ba"],["/archives/2021/12/index.html","4e86510b3d835245537be0e6fd87bf28"],["/archives/2021/index.html","0d0fc4f290800de2cdd6ff6a81c517b5"],["/archives/2021/page/2/index.html","3a2d6b197d2b9967448a2ae9d6e441ea"],["/archives/2021/page/3/index.html","38b310e56cac60f52ab900a31ae25bcf"],["/archives/2021/page/4/index.html","101674991e4c81a261d24966c2ee1f38"],["/archives/2021/page/5/index.html","ce2a483a7182a9eabc8f74f599e30791"],["/archives/2021/page/6/index.html","1b6b676b2cb8d97cbfa0a738da65bde7"],["/archives/2022/01/index.html","f7e603fa135be3e059a827ea7b04869d"],["/archives/2022/02/index.html","4818cf87fc19b2b439910555688f0dc0"],["/archives/2022/03/index.html","17bdeab2bab67d3fa81cb8301b86d1e4"],["/archives/2022/04/index.html","170f2d66bf39023792a3c720e1e13bf2"],["/archives/2022/05/index.html","87e6de6ae03ac1c45e450f400a0bbeb1"],["/archives/2022/08/index.html","ec59848a63371a01efeb8989249a674e"],["/archives/2022/10/index.html","b907dbc57a2aaba8a20e277b7b1bc3d4"],["/archives/2022/11/index.html","f2ce1368da95f52e40992f38fee48528"],["/archives/2022/index.html","45920b358d07c33162680371cb54a26b"],["/archives/2022/page/2/index.html","863cd667d93c4dc8be3bdb083cd60053"],["/archives/2023/04/index.html","f74b80f6cc1c6788015096e999a05dac"],["/archives/2023/06/index.html","e6a87272211d521a2ae0d0a9979bd3f1"],["/archives/2023/index.html","4fef4c65011303b8beb2255c2e232911"],["/archives/index.html","8fb7c88fb6ed91bc4a1eca1af1540efa"],["/archives/page/10/index.html","69305b26d4b74e503a51787656c19165"],["/archives/page/11/index.html","dca1ffc71c325f227922702aeb400e83"],["/archives/page/12/index.html","35bf3fab9039032126beaf77d2d106dc"],["/archives/page/13/index.html","d712562c5c00408d41d090c0ebe4e5a8"],["/archives/page/14/index.html","b67f3d43fde7a32f0c1b9c662ccc91b7"],["/archives/page/15/index.html","a3e823819ebb014c779f1e30b164f887"],["/archives/page/16/index.html","cf9ca2f84edd298f1c6484e17296b21f"],["/archives/page/17/index.html","7198febcc67d4fd906431b2ef8125247"],["/archives/page/18/index.html","534b0e4fadda4ed4f9295fea614cee6f"],["/archives/page/19/index.html","29c5208ecdb6f3d1be8a6816cd91b422"],["/archives/page/2/index.html","9e7b81feabd4e5a839dd9f5a2430d610"],["/archives/page/20/index.html","6cdf691b6ac4b47ba691430594a5227c"],["/archives/page/21/index.html","22c1d2e2b635afa92e2c84f59c6d3f2a"],["/archives/page/22/index.html","a4a6a73e32257b440f33b3bcefafcba5"],["/archives/page/23/index.html","ee6b54d8e02f35b5632b4eda65914f52"],["/archives/page/24/index.html","872b87c0719b063a377b480518b6ed38"],["/archives/page/3/index.html","0fa40afb0ca6109fa05bf4fa72c3a196"],["/archives/page/4/index.html","f3eddaf470197ae0ebfd9dc853c6f5f8"],["/archives/page/5/index.html","5170e8d6f6a4e71bacb708f12e0e2e55"],["/archives/page/6/index.html","62a5e6aa06bb9d5de0b7665645ffdbbd"],["/archives/page/7/index.html","b2546d87aeb9ffdb4d53d2f61af9c74a"],["/archives/page/8/index.html","91940a3f2ef1d5712ad38c3e6243b61e"],["/archives/page/9/index.html","deba53c3ea4378befdd45cb5c21aee82"],["/array/index.html","bd27e383bc3352a4a13f22203fab9ef6"],["/automated-test-katalon/index.html","05eb7a06cdb7ef49133b90b549a007e7"],["/automated-test-selenium/index.html","06c6211a3e6610419514deae20bc4742"],["/back-to-table-query/index.html","6cc92b9fcecc52cd5d4dd63243ff92da"],["/binary-search-algorithm/index.html","8a47b1c361d97e90dd60236c6d66e77b"],["/binary-sort-tree/index.html","6018ff145d59a98c7e600baa56949c78"],["/bionioaio/index.html","36415b6aec403d81aaff133157fef735"],["/bridge-mode/index.html","c5de05da00f91f0297a132ff71f839cb"],["/builder/index.html","3a5b45b6eab899bc84670ee30e4a637a"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","9d923826a4533f51f71bb5d7c5ad69ce"],["/cache/index.html","6e4df777a93ddf82720f2a054ad9bf19"],["/categories/C/index.html","712d1551cd51da44b704aca0b5cbecf8"],["/categories/SpringMVC/index.html","b2707c106d76ecf06b859183e9e70017"],["/categories/categories.html","d792a2c3cb1de86acfe3ed440b986d59"],["/categories/index.html","133e529dd03647fda4cc11a0d6b2665a"],["/categories/linux/index.html","844bc4c3406ce7a00359c6ddef775ad6"],["/categories/分布式/index.html","a2d5cf84d1f8a2fee0d1cc09ea081317"],["/categories/分布式/page/2/index.html","9ab54c9ded90c419ebf9a0b59188d96a"],["/categories/设计模式/index.html","d2a458e576c4e93189d74e920556e7c0"],["/categories/设计模式/page/2/index.html","3313d7a241fa45192d42a0d81e450dcc"],["/categories/高数/index.html","a1e6b95d7e0cf005a224ac28603ce8cf"],["/chain-of-responsibility-model/index.html","0f4e005a93f9c353c250f4974a519d4e"],["/charity/index.html","f6dd6f413bbd5992fc2db6b52fe91581"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","f4313ff0625c71a2801f5eb09c9531c0"],["/combination-mode/index.html","b1c3c19ec73a5fd5dd383833c186df6a"],["/command-mode/index.html","fd2d7e857fd5dbc48630096b3ceb3f79"],["/common-commands-of-unix/index.html","afac90c8229baa08fcae3645bbb45cd5"],["/computer-network/index.html","6c2df56b6fad5d4300c32a89ff0a0a79"],["/concurrency-principle/index.html","6fe6125dda753fcca44f1461f180fdf2"],["/continuous/index.html","f9b1f509afafded5eb7f2128f1bd2b3b"],["/contract/index.html","e94bada354a2c2987e3303b075b34d21"],["/create/index.html","8b8965fddab0b9afc9ba33a23a7ddd96"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","f17f86b9d482247a4b6166c5215496b3"],["/data-structures-and-algorithms/index.html","d2121f2d4c0ec4240c9ce222a4f6194a"],["/deb/index.html","81bf2ccc0d533b84e23635b8aac29ea6"],["/decorator-mode/index.html","9441e770670298d1ab181bdfffb836ae"],["/definite-integral/index.html","0ef5ed941ad76a254aebb93ff9c2911f"],["/dependence-reversal-principle/index.html","28afad2730078c1aaa4093b7f23605e6"],["/derivative/index.html","2af1753f86680e50585e3fe0e35cbfa1"],["/design-patterns/index.html","5af110e0af3b29c026ebada9b702d164"],["/dic-algorithm/index.html","7966c2931693118d7097d220c008f448"],["/differential-equation/index.html","8ac9cf87a92fc8d02cca7d0a2b4c78ee"],["/differential/index.html","a94c0dc9c027489722d06f2f691723dc"],["/dimits-law/index.html","c4a5a8edbe9186ae26fe6c3c339ddd92"],["/distributed-lock/index.html","1a3b48794dff30a37ffaa8877ae7bef7"],["/docker-virtualized-container/index.html","18ac022afd49f8a9ea44a7a921468ae0"],["/double-integral/index.html","5cb87a93afb86b433289fc7d1ea37a24"],["/dp-array/index.html","c3105c7069289df61e6db0c6c3f3d4e6"],["/dynamic-array/index.html","4209c541af76206152dbf139c2463bfb"],["/dynamic-programming/index.html","b84a474d3b1b1ba49657dd4510ebfcf7"],["/edgeset-array/index.html","3895936730409b04ca9f4f4c32cf3c7f"],["/encoding-algorithm/index.html","db61e2f78c14809eda2fefcc98832ff4"],["/eureka-service-registration-and-discovery/index.html","bcccd7f9341c320170d292e4c7ff00bd"],["/extreme-value-and-maximum-value/index.html","29a99fa32973ff55f2b0414a84e9e008"],["/factory-design-pattern/index.html","7d2fd9287c0cb0e8a98d6a160aca1660"],["/file-input-and-output/index.html","32f099714a7cde9b0d62bba8b6ca3336"],["/flyweight-model/index.html","ed98ef2c31f0ae976bbad2d8e1e791cc"],["/friends/index.html","10fccfb4d1d281d78b3bf6eae40538ef"],["/function-graphing/index.html","0e1d46f10c9085671881cb14f2d15846"],["/gateway-service-current-limit/index.html","4680392b5db41330df38a9b94324157e"],["/gc/index.html","fc5a4cafe39a6dcd3b17763f826af098"],["/generalized-integral/index.html","408641eda6d201e9e80ed1ada7e90fc3"],["/google8102e2f35ce9e391.html","dc2501ccf18bc4e97d0efd89009b2aab"],["/gulp-compresses-static-resources/index.html","85a10328205d461eebbed9e1d28ffc5f"],["/hash-algorithm/index.html","e56a4dc70c75c688f7f3757e1886eac2"],["/head-first-JVM(1)/index.html","8fd894b6d590642759a060deed9008ff"],["/head-first-JVM(2)/index.html","f02d05b6e57c2897f1b38e9f5a8464aa"],["/head-first-JVM(3)/index.html","657728d6eefc37b8bd9b6ed6483a3410"],["/head-first-JVM(4)/index.html","32005a1c6c89ced5acd80f93f6b4e67d"],["/head-first-SpringSecurity/index.html","26d5d03eb930eccb50771a2136429471"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","72fe95a6dec963d32779af3933084c2c"],["/heap-sort/index.html","535f8fd1b96519431457ea4cbcd4f0ba"],["/http/index.html","10ee09c001736468357f32852977e9bc"],["/huisu-algorithm/index.html","2b2bb81e2f8d89fed22e852d66faa01f"],["/indefinite-integral/index.html","49d04b3acf3cd07bcf11fc7c2789791f"],["/index.html","49ab86e72776208333a3d1048c8ca19b"],["/infinitesimal-and-infinite/index.html","98d855a17882a62d9780990f2bacf5f8"],["/interface-isolation-principle/index.html","fadfb287591b71bfb3ac3ba23b80acef"],["/interface-test/index.html","f171155a9e174e3653b6d2a1ae2716db"],["/intermediary-model/index.html","06df19acb8dd8410ff43b2cd2c7b5c1e"],["/interpolation-search-algorithm/index.html","9d7535ea98150a8179cafb9bf18a5305"],["/interpreter-mode/index.html","58853b52ecc5c23e78196ecb1122f556"],["/introduction-to-computer-network/index.html","0df0bce392f5555b89a94f3227e87cbd"],["/introduction-to-operating-system/index.html","25128e385b55fa4adeacd41e427c9596"],["/inversion-of-control/index.html","0186fa208e97b541ededd0ba2f7dafdd"],["/io/index.html","d51d8845e47f98225fe8136a97bfe028"],["/iterator-mode/index.html","92a011ee8bf40278cb1b512315a72ee2"],["/j2ee/index.html","7317592b3c21778db3dc3406f4151cc9"],["/j2se/index.html","c6ffaa5e20ffad15648df9ad4e78f35f"],["/java.lang.String/index.html","b5974accdc5c8f56134c4af7d91ce2b6"],["/jdbc/index.html","ae08fb3af7beeacff354bfbf7e8f13cd"],["/jdk/index.html","94405f655ca96613e2a8f4efcc9817bd"],["/jmm-memory-model/index.html","358a5e2054831e9ed596febab3449d32"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","adb77493d428fe3725061cd19a105622"],["/jvm-method-inline/index.html","ab10af1c6872a5a55e64a54d2387be26"],["/jvm-tuning-practice/index.html","c3d9f59a1a37c60a9c1056556e984c08"],["/jvm/index.html","f8e617ccdeb77806d306818d3e6ca977"],["/law-of-robida/index.html","0d4cc3bce49ec720c3e5da39b3586a60"],["/limit/index.html","0efbe63663aebc591abe0f4784a8fbe3"],["/linear-search-algorithm/index.html","544b6722974de59bc80e6f6a978d8c11"],["/linked-forward-star/index.html","33529ae4d336f0a8cb416479c234f226"],["/linked-list/index.html","9e625346fc276876fcc631d116d8ea96"],["/linux/index.html","672f6bfb29ef1613a0afeea6e8e70945"],["/liskov-substitution-principle/index.html","a631c94260910fdba1f3088415473ca3"],["/lock/index.html","f12c1e1236b351a3ca405fb6d08c266d"],["/lru-cache/index.html","6e09f431bdc27065a1afb0f70afb21a7"],["/maogai/index.html","b6d52b551f73552d83ca16a0a5d9a74d"],["/memo-mode/index.html","7310ae23f0b49c911a241d8c1f0fae11"],["/monotonicity-and-convexity-of-functions/index.html","06e1207d02539e73c44adbe0e4bfd5f3"],["/multi-function/index.html","438754acd8de99519283404adccbdbdf"],["/multithreading/index.html","82b13ac5bd19370621a1d516a15cbbe7"],["/mvc/index.html","be9b7516ebb007bff3c33ddb9d9f1a62"],["/mybatis-cache/index.html","d55364bf243c22ddf8e01948e43300cc"],["/mybatis/index.html","5b82fc9b3e058df1d0822b320439335e"],["/mysql-index-wrong/index.html","b776df4a5cb9dd1832e44315c6bfef1d"],["/mysql-struct/index.html","3ade5700c417b7f8b83b15fb2b5c968c"],["/mysql/index.html","2b0faaf2fa8a45ac0991e38ccb550db7"],["/nacos-service-registration-and-configuration-center/index.html","cbf8013471cc48da55cf92ed906a52f3"],["/notes/index.html","bf16ab91ce62ebc0a3eb57a2cde9f0c9"],["/null/index.html","62f813ec590243120c9926e6e0bf6071"],["/objectoriented/index.html","caa7169af8e8e4a01e048daa03e5761b"],["/observer-mode/index.html","f7e844cfc9787ccb87b7124e17686c71"],["/off-heap/index.html","c4be972c0009243163f973e8120543a5"],["/operating-system/index.html","9991e00b3d5d43e1be9d5e9e570048dd"],["/page/10/index.html","6eaea96d62bfd4d6ff5b553b43d92881"],["/page/11/index.html","67e0a8d577e96f5f347f9431ceeb920b"],["/page/12/index.html","350d467374e4862de298ab30e80b644d"],["/page/13/index.html","8e6d3752a991166e6090f66174513b21"],["/page/14/index.html","419f8e93fa92aade1596d1287cc8c1e6"],["/page/15/index.html","e64751996d91dbe732ae40de45769996"],["/page/16/index.html","f636934f5c83404ba9dec2599bbd5896"],["/page/17/index.html","1781e2f1ffe561d38a493aea7ae7f9bd"],["/page/18/index.html","1113b8bb75f85b7787d311072ce5b84d"],["/page/19/index.html","90755e69bb9150ab3b2724c404e29519"],["/page/2/index.html","16151fb0a4b1ec755c20073bca9d9bf7"],["/page/20/index.html","4eb57975f65944be8fe17246fd7c378b"],["/page/21/index.html","9116235bab9dffaca792feee3932bee3"],["/page/22/index.html","c7cc77b1fb812128520f8adf1e634565"],["/page/23/index.html","fadc93d55d2d2bc329b689c0f8b67005"],["/page/24/index.html","d3606073db31c5d2ebf75f8b22e9a0c3"],["/page/3/index.html","9429b0fdb27f7a0f27d371299564a357"],["/page/4/index.html","9bda02ee77b847db2e496bb6ba517dce"],["/page/5/index.html","075458c709b1caaa5a7779a5176b5343"],["/page/6/index.html","ec95864255bc674c728412b62091fd2e"],["/page/7/index.html","7872528f396ed247359c4c4cabbdd2b5"],["/page/8/index.html","6e1030b5428921a0da2e33ed42dd12bb"],["/page/9/index.html","ea8fa2a65f124483ff8e64dd1e0eef23"],["/palindrome/index.html","ef9a11d63514bf73abd9e182429b6af9"],["/partial-derivative/index.html","0baea6e6bd20105aa9f30b1981788c44"],["/pass-by-value/index.html","6c3b5dda2a61b13a653159be99588b8a"],["/pictrue-bed/index.html","37809f69eef42e08f2ec9650609f6c14"],["/principle-of-opening-and-closing/index.html","427eb482719b64f7810d6b7e84dd84dd"],["/principles-of-computer-organization/index.html","8920a9d93e0bd8fadbfffb9414bdb1ca"],["/program-test/index.html","0028691e0b84f7a3e203f14c8f8cafaa"],["/prototype/index.html","3f906f1056aa03e8174a2cb4dc3397e7"],["/queue/index.html","baefa908a48ac6a30e00a79805fcc02f"],["/random-weight-distribution/index.html","c862aefa7d3c6f5d4b603200fbc505c7"],["/realize-modular-programming-with-functions/index.html","6db95000615cde8b4acbb3bebf1aa46a"],["/redis/index.html","b54eb4c59b0a17d4d07274a641405b0d"],["/reflection/index.html","7dc416a50e7782a4318fd3253db4450b"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","d627408be3cb50a92f78735dec1302a7"],["/ribbon-load-balancing-service-call-degradation/index.html","80fca46ceb93b40b02ddf4ffe254bbf0"],["/round-dp-algorithm/index.html","27e15353cc87796217a6b1b3b1328c34"],["/seata-handles-distributed-transactions/index.html","f4110c05d1373ec4ff8e0d8419974a79"],["/select-structure-programming/index.html","99a620b375e0d8e5d8c1a9b0c0f8d7de"],["/sentinel-realizes-fusing-and-current-limiting/index.html","2d75093f42a499f6e40db1fdfa52aa11"],["/sequential-programming/index.html","611b7bb5790c7fbe57d3da4044065645"],["/series/index.html","9fc301b2f9b81455dfb68a4af30e3c3a"],["/service-worker.js","7a03d57a8cceb4f52e62a40dfee0d87e"],["/single-point-login/index.html","210e535b41a2c65dc3a1fb2e382ae711"],["/single-responsibility-principle/index.html","1165b4b02206f8100301a2c392b3e1cb"],["/singleton-mode/index.html","f9732b4b91f1319620d095b480a77665"],["/slidingWindow/index.html","cbe2670bf5acfb71864e7420a486d2fa"],["/snowflake-distributed-id-algorithm/index.html","072b0dfff0d9e1b6e24f8aee93431c32"],["/sparsearray/index.html","9d2d895b874aca9a1330a65d2c238f75"],["/spring-and-jwt/index.html","469c5786d8e4c9f0a3987437c64ba74c"],["/spring-architecture/index.html","4c9f6569ba5c9a0789ca8a9eaf2d7e75"],["/spring-relate/index.html","74ae13b867bca4cc593013ceb721baf6"],["/spring-springmvc-mybatis-integration/index.html","dcb48ee505802ccde6112bb75558d658"],["/spring/index.html","656fd0849cd2dc3075889821ab9ccc4c"],["/springcloud-alibaba/index.html","a2fb16d88673d8033a4e0870df4d8b8f"],["/springcloud-bus-message/index.html","6c533b58c384b70b28324cb5c062c0d7"],["/springcloud-config-distributed-configuration-center/index.html","e48a578e93ac6e1bb6b3a5fef48077de"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","19a38ce745ff8297b28e086975f3edf5"],["/springcloud-stream-message-driver/index.html","d41ffc6bc6968cf8113e89aff88c1e36"],["/springcloud/index.html","f6e64b4f12b66824341a31d18d6051cb"],["/springmvc-environment-construction/index.html","408beaca3b55a1fd44ab49566e8a7f9c"],["/springmvc-work-stream/index.html","55365b2da046718fbe05f5d2915de22f"],["/sql-injection-attacks/index.html","f511ffb02fd11004913469d587bd33df"],["/stack-simulation-iteration/index.html","4b199b62dbfc3bd21df066c54e5b5ae4"],["/stack/index.html","5fd10b0afd8e7943db9dbbd7c61fab6f"],["/state-mode/index.html","562b2fcc79a7d9d02684bf4ce506b828"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","703b6be15f814837262494971399b207"],["/strategy-mode/index.html","4ca35cc6d1660ca5b8d4637d0383c43f"],["/sw-register.js","ab23e8988ff08a791d161f24695bd626"],["/synthetic-reuse-principle/index.html","18ce8e6ea8176b607bcb71cca881fec1"],["/tags/C/index.html","643b390b356d7a8452a045d762c5d51c"],["/tags/C/page/2/index.html","bc33c955d5f6caa79fef5e70e5c147b5"],["/tags/Concurrency/index.html","16f7e06d5fa6ac93d66aa22426831d33"],["/tags/DesignPatterns/index.html","11f8eefa74b812252c23323b70376bd6"],["/tags/DesignPatterns/page/2/index.html","5cade2e50b0f63cd3fa9e04def1945c7"],["/tags/DesignPatterns/page/3/index.html","8b838bd2762b40e8b4d6a9dc41aab75f"],["/tags/DistributedMicroservices/index.html","4ba4ca061973ad7ff7ac2745bad48b44"],["/tags/DistributedMicroservices/page/2/index.html","7f8eb351fdbc8bdb83676c493f177b40"],["/tags/Interview/index.html","583bc6c4e2899835a1f8092377ff349f"],["/tags/Interview/page/2/index.html","0b09fce6f5d29a90394f7c578d6ef4f7"],["/tags/JVM/index.html","000bf9ec2e875665cc035a6fe035256e"],["/tags/Operating-Systems/index.html","bdac692b3378b833d18680e0be8566a7"],["/tags/about/index.html","097597eacf10a40ee822ef68b2eea3c9"],["/tags/ad/index.html","ce04f125c8ee3ff7e93493ad7cd1de6c"],["/tags/algorithm/index.html","ac3bcd84119dbc068108ccb84cfae2ee"],["/tags/algorithm/page/2/index.html","394e32ff28d8ac53bc00d3d963433814"],["/tags/algorithm/page/3/index.html","c325926d821a50020178ac4cc9de0926"],["/tags/algorithm/page/4/index.html","22e1093538b98fee71c8fdec38f246a6"],["/tags/bug/index.html","875ccd9d1067ce2e3af27884a1d4fdac"],["/tags/computer/index.html","1856a1fe5b56b76b8e18aca59c173f50"],["/tags/data-structure/index.html","6d7f948b5cf59fe1984a637c81608c24"],["/tags/docker/index.html","94577efa0f1765adbaf2b5ae686a76d1"],["/tags/famework/index.html","53bfd01249cfd8f1f8893062983a6377"],["/tags/frame/index.html","b115a4281537bc8ebba3d94c02b00c42"],["/tags/frame/page/2/index.html","fa56ee10b0140c8a8bb575bfe1dc479d"],["/tags/front/index.html","31782f003e96bc055b31f7f0dd6c67b2"],["/tags/index.html","1bd1b72e1b1a65b8f61cb69075a7ceb3"],["/tags/interview/index.html","17321ab4f9f2ffd9d28158b804a77b51"],["/tags/io/index.html","bd7babbdd6fe9e17417b57ea99d54a66"],["/tags/java/index.html","aec28a25d9c37ad16b902cf9507467e5"],["/tags/jdk/index.html","578abed0af8ea29a1008f7d8d092c07f"],["/tags/jvm/index.html","e1b4f0d9a2fd34d77084c86719d1b26a"],["/tags/jvm/page/2/index.html","c854ed244c672253844c312075709bf0"],["/tags/linux/index.html","fbe54e91a4781468efa7b0bf8adea5d3"],["/tags/maintain/index.html","78c61a3238bfe6e8fa88573dcf861027"],["/tags/maogai/index.html","88a31f773992466cbebd376ca776817b"],["/tags/math/index.html","1e10cb72f02bace90c64f474cba322b2"],["/tags/math/page/2/index.html","6b2cf49c644ec39207453b0be425eb30"],["/tags/middleware/index.html","ea5d13299f3798c09b5f148036743756"],["/tags/mysql/index.html","9b3b4f787cacb4a70b164d44e49b4378"],["/tags/network/index.html","fceede8cee0b13396a6401e579b286e1"],["/tags/project/index.html","5faeae8a08a3882941b72acd77a3ab74"],["/tags/security/index.html","11ba0f682bca73a1b2b014083ccc2248"],["/tags/sql/index.html","ce135f4d4e6942245b2c940e75bda5a1"],["/tags/test/index.html","96629a971ef94d893447e03f3b237160"],["/tags/think/index.html","408a28e695aa85f4d8d92379266d38f1"],["/tcpip/index.html","7d245d7d312bd588930f144c17f2440b"],["/template-method/index.html","7dc75b4c959ba2d3c5ac32fed0a8de51"],["/test-case/index.html","59ce97ab73b908af0ce983f714113fa1"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","0df0cd58a3579995fdca610aeafc431e"],["/thread/index.html","7689ee19f858cf8f358e93ad82f27d39"],["/tj-horse-racing/index.html","53b46d2aded28b7a5c805b2a30570e24"],["/topoSorting/index.html","03570b1943f8a97d5efe8a56bc7bcf50"],["/traffic-monetizationaccess-to-google-adsense/index.html","6b04a55c8068f49af32ed9fbfccd789c"],["/txCharity/index.html","fd4e62a56b50c1181a90473bf30f1118"],["/ubuntu-set-ip/index.html","a7c48d24675f2f9da21bb647d6b345e1"],["/undefined/index.html","16623a8a6d4273f8da45cec03c8fb0b6"],["/use-arrays-to-process-batch-data/index.html","1e29b214847e4e6bb3ced8cf1a5fa3ec"],["/use-of-springmvcmodelattribute/index.html","ee3a7dfedb6e80e6aac2148427d9dbaa"],["/users-create-data-types-themselves/index.html","6d12ad7051c7b4c19b746b59da6e0f7e"],["/visitor-mode/index.html","0cfe13d5bbeaca5154531489a6dc3258"],["/what-is-milk-and-why-is-group-wise/index.html","981c0e7f475d42b81371c6cbdf77eb4f"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","625a6a9ee74abd9826ee3be00f4a3bd6"],["/xss-crosssite-scripting-attack/index.html","a8473a5121a34a1fcda4a5a7becb294d"]];
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
