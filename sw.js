/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","6b1c0728e0142c81f0b3a8c798e988d9"],["/404.html","ab43d88115a442492158f42c45b0fa3a"],["/404/index.html","4a9c18003830d91238b12bc7c49933ce"],["/7-sorting-algorithms/index.html","32c88015448c380bacfd3879dc44cfc5"],["/AIO-blocking-model/index.html","5f93e816256633b10f01e971642a6eca"],["/About-Snowflake-and-Consumption-Degradation/index.html","323d63e55317be0929c96c107d9b7b5a"],["/BIO-blocking-model/index.html","b59fcfc39476a9d6f0a7108f5530a7ef"],["/Bloom-Filter/index.html","2aac348503e758bbddbd392fd346271d"],["/Boyer–Moore-majority/index.html","3505ddf1bcbcd53bee5ba789f141ade9"],["/C-algorithm/index.html","63826af2b17b39faadc6f7f3bdfc88cf"],["/C-programming/index.html","7b2cbebef4937f45734855775a2380b9"],["/CAS-&-AQS/index.html","0ee4bde8ca3a57075686e0b16886bc1f"],["/Comparator/index.html","2d76374b9786041cb79f9f43885c683f"],["/Differential-array/index.html","7fb296dbea31fa09111271ece47de5a0"],["/Download/index.html","b6bfe6d7bbb2e9fd2fad0cbaaeaea2c2"],["/Front-end-security/index.html","fc842624c990e41e68a367a9a9db547c"],["/Good-use-of-pointers/index.html","509769926bd032b1c6b79bcfad0e2910"],["/Graph-degree/index.html","7d05e4dc94326ed945004ce99a4de7e3"],["/Greedy-Algorithm/index.html","aafd5c0cebdb7d0e01bb02dc08addced"],["/Head-First-Map/index.html","a53928400b1cf961842db34b832a778c"],["/Head-First-Netty/index.html","1d1ea9b50a4e3f2e5e28cea208e897a3"],["/Head-First-Nginx/index.html","d0653fd5ac7b4678c9281d7f6abbde92"],["/Head-first-Spring/index.html","07e38196aff4f36004d46950dcc6cafa"],["/IO-model/index.html","1a0a6df5ba17d1c4abe988f57826fc10"],["/IO/index.html","ee1c53154c73e908c2a9ded85bb6619c"],["/Implement-a-lock-based-on-ReentrantLock/index.html","2f83e6ce955b0d78ea6c61c8ed3bf9b7"],["/Improve-Robustness-(1)/index.html","ba0468ac50c3d9975bc104bb4dbf9275"],["/Improve-Robustness-(2)/index.html","ddc4005770fa1bb4df6091311a94bb77"],["/Integer/index.html","6ad706de46813406cb6d78e6327bbae3"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","82060e95c701c1e2054034918667a257"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","f841178148134137d7803441aad7b768"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","13d98b21c951ef5d53fac75391debe6b"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","ee81fd2274fdc76fbefd25fc41c026c1"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","3a8f426f1e0a4ef1f511e79456071e2a"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","b0250d807f5bb808dc8d7539a90bb256"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","83bd7e738e41f3b379af1f74e4e134a6"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","8c5b98c74bb0b933b44723649539e3a0"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","7acfb51de597fe7641677669375103d3"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","47fd41ba590c1c74f06bd743c91aebfb"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","0cf1e3489329435d698ea20d76825e87"],["/Java-network-programming/index.html","30614a0213f026cb2d1c2cc9f67370f7"],["/Large-number-operations/index.html","9ff23814a734eb7013c1a055f49f4908"],["/MYSQL-MVCC-&-LOCK/index.html","7ff0a55f76105ff081eab0cc44fcd13e"],["/MYSQL-uuid-and-page-splitting/index.html","b81144ffd77183671f0c95962eb29c82"],["/Minimum-Spanning-Tree/index.html","67f8c7c5a42cbc8501e0ea6ede5887e2"],["/NIO-blocking-model/index.html","269042cc2c51c34320019a423342b2b4"],["/Nacos：Configure-MySQL-data-source/index.html","59c6ff3093cf0a27e35147295873c271"],["/Native-method/index.html","dc6775c883e81410305f35578e30db7c"],["/PriorityQueue/index.html","1e85814c117f2107a1ca8dd76c51e0b1"],["/Proxy/index.html","85045a182443b68c8660484302b7b333"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","a217b9c75fdd25dcee2e32ae92467220"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","9471dbfdb5874d0a9323f002d477e0ef"],["/Reservoir-Sampling·/index.html","5c05734777b3b27f2ce5ce2c7d6ca7ff"],["/SQL-injection-vulnerability/index.html","ff85885f20c0a08f7e7bd7cb04454e94"],["/Sandbox-security-mechanism/index.html","3534633e972725c92a017f9bb00e3b05"],["/Spring-Cyclic-Ependencies/index.html","82d94447bb9300ca98324ea2ce29abce"],["/SpringBoot-startup-process/index.html","a6abde8f9e69ef6b7a2634d08b15b9eb"],["/SpringSecurity/index.html","74eaa35676826457ef21a3ecf0017040"],["/Thread_Pool/index.html","891f6e033c0e0248634737609fa0dd93"],["/Transaction-isolation-level/index.html","30db5ad1ed40cdb430c66c6a667bea24"],["/Unitest-framework/index.html","e617c08e7deba1e9eb302d0031d75bc9"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","44b4f36e3b166235ac7aad88e5d2ad02"],["/about/index.html","28eec3285e74f878943997ab4545fcd7"],["/adapter-mode/index.html","612a22cd1a3ec1b8033fe22711b87d4a"],["/adjacency-matrix/index.html","45b0b8d90bec94f57b8c4a2384552d9b"],["/adjacency-table/index.html","1c3b052e523f61383fe130722b5d729b"],["/agency-model/index.html","a853a2754566532a3d6fd167d856abca"],["/app-test/index.html","0367ee9e400926325e44406af97c3d7c"],["/appearance-mode/index.html","309a71ac46fdd896ce8b764e37e303fa"],["/archives/2019/01/index.html","1451c4ad6ca5fdfbbeca041fd96dc29c"],["/archives/2019/07/index.html","0899acca8af08fe5f47be7430e8b5e43"],["/archives/2019/10/index.html","c0e41f5d80c27a01c34d65074b23b052"],["/archives/2019/12/index.html","21f3fac494a86c49b8dcb1a9f9fc6e82"],["/archives/2019/index.html","febd475439c30307806a166e9eee2532"],["/archives/2020/04/index.html","4a1fa4d8d38d3ba03f041e2e0968675e"],["/archives/2020/05/index.html","6aa904563b31d256a15c0383d45d28dc"],["/archives/2020/05/page/2/index.html","3ea1fa9390a70ac10d32a9f3befdb88e"],["/archives/2020/06/index.html","d9b184aa24654961b698e7fb634d7d05"],["/archives/2020/06/page/2/index.html","ec5e2b795d0e2d9f120f8c5d7cfae4ce"],["/archives/2020/06/page/3/index.html","13ccce6cf9410b7ec1426a8b74463f9e"],["/archives/2020/06/page/4/index.html","b97957ec7377ac1953cc272434cc9a76"],["/archives/2020/07/index.html","dbc36d0b2f356b7c15598e4659189826"],["/archives/2020/07/page/2/index.html","cdaa6bded77dddde99e6873186457178"],["/archives/2020/07/page/3/index.html","f05a5669765a5fefcecf0be1e5921ee6"],["/archives/2020/08/index.html","42cf2cae1c2154c0d4b2e807bdd56b1d"],["/archives/2020/08/page/2/index.html","09e906db2d7f734da71f54f66f6dfd30"],["/archives/2020/09/index.html","0cefc90d7f83676eb0b4cc06af888173"],["/archives/2020/09/page/2/index.html","eb507601d0bd0c86b2b6c1cd19637e2d"],["/archives/2020/10/index.html","2903a932560e50ab04d8463cb431f00f"],["/archives/2020/10/page/2/index.html","07edd918eb5d9b58aa3fc70b37505047"],["/archives/2020/11/index.html","a40c89a9b2cbb0491b6f6c8263ca79d3"],["/archives/2020/11/page/2/index.html","4b5e3d485c29fca2318f1fc397ea3fc0"],["/archives/2020/12/index.html","e9d30d1acf5de06124c64b3275d8010e"],["/archives/2020/12/page/2/index.html","70e68ec04aaf4ba08d56319d84cbba46"],["/archives/2020/index.html","4d71e13e1a02f0006d3540cd74049a98"],["/archives/2020/page/10/index.html","d5a11524ba83d912cb67fdd1c25a7f5a"],["/archives/2020/page/11/index.html","bddb29b47da79a8a335377f4d9961cf3"],["/archives/2020/page/12/index.html","51e21943fd50afb2aa86f29d03d127ff"],["/archives/2020/page/13/index.html","df3a30d9a63e26e5311d3725d5fb881a"],["/archives/2020/page/14/index.html","c69aaa84f4d548b9a1d620cd69ec1c4a"],["/archives/2020/page/15/index.html","c67cc961b237e165aef9ff409bb2e066"],["/archives/2020/page/16/index.html","45ac1180c69ab16855e7b74c523c576d"],["/archives/2020/page/2/index.html","ff1599c1704fb7f29b5791e8a429af20"],["/archives/2020/page/3/index.html","8689b5b02947876231eb37e6d407688d"],["/archives/2020/page/4/index.html","78735e75bd18479a687500e6c1ac64b3"],["/archives/2020/page/5/index.html","9cca11977ff2945e4e7096e4ccab4593"],["/archives/2020/page/6/index.html","faffe5b5391db29bfe9a74cb811ebe59"],["/archives/2020/page/7/index.html","134beb400aa8bfc34deb3d416d50ad40"],["/archives/2020/page/8/index.html","413a039b37da8dacb8c98495c3acad6f"],["/archives/2020/page/9/index.html","11479ebda564e9d0e8356be017ad5fd0"],["/archives/2021/01/index.html","0dda88484ac47a6fa32ccd741c48b196"],["/archives/2021/02/index.html","5ba6e568c855ead819925adcf638d0a2"],["/archives/2021/03/index.html","2473aafb9f84e793d924cdd21a2a2954"],["/archives/2021/04/index.html","db241617b675da8e29d61510deffef8e"],["/archives/2021/04/page/2/index.html","116b72267ccec0e5d5975e972093a005"],["/archives/2021/05/index.html","f76c5757f862b50c6012cd1bd5402257"],["/archives/2021/06/index.html","4e97a3974f8e38f0e978c441e994d6fa"],["/archives/2021/07/index.html","3e48ff46e90491229acc2ba0a0b0134a"],["/archives/2021/08/index.html","ce50cd26fcad2421c6edfc2e4917d50c"],["/archives/2021/09/index.html","36a01626a29df0e8c5c87e5e9bb4e6d1"],["/archives/2021/10/index.html","f5c122189816487f0f38898c46d9b850"],["/archives/2021/11/index.html","e26d8879bb1d2e61c5e28c12e72ac187"],["/archives/2021/12/index.html","b60253865c484c70cfaeb718699f95d2"],["/archives/2021/index.html","ccdfe53e78da86cb39e3203584458a65"],["/archives/2021/page/2/index.html","dbd6d9e711db3de8ec98a98e454ba7ae"],["/archives/2021/page/3/index.html","97641c943664760fcbe73207cb4721e5"],["/archives/2021/page/4/index.html","68a36c2da952f57c495b11decfe2cb63"],["/archives/2021/page/5/index.html","4239f3be8380c3485a87ce46eee16ace"],["/archives/2021/page/6/index.html","351863c70e96cd5130b1a3985cf3c7c9"],["/archives/2022/01/index.html","50a9c21ffa8f77aae72f6c935a26852a"],["/archives/2022/02/index.html","8140ad04c59ab0632895844ec3e877f6"],["/archives/2022/03/index.html","931426168ab177d2b707395324d5b973"],["/archives/2022/04/index.html","7ebe33890adc7299b3db4e01596e5648"],["/archives/2022/05/index.html","b12258e242fe066f6c7ab9360adfaba4"],["/archives/2022/08/index.html","fa6ac8a7959ab0c01c8f94d3f450aff6"],["/archives/2022/10/index.html","ca67d769d81af46ab7bdf6b0d13a65ce"],["/archives/2022/11/index.html","8cc16eba8ed2462fd1d5c56621efda9f"],["/archives/2022/index.html","4953de592863acba50a57a04a1d16441"],["/archives/2022/page/2/index.html","0c0143175966d139305586976a4a0986"],["/archives/2023/04/index.html","d93aa65d7f3b55fc4fe29a058d01ca2a"],["/archives/2023/06/index.html","469778e77a7aada9bb270f0eba004d18"],["/archives/2023/index.html","10552cc5b3c0c0152f7285183903d7f5"],["/archives/index.html","3530b65992ab64ea9fb6e2273e0f2797"],["/archives/page/10/index.html","71c993939a1b9b1c7bee3d2b5a04e586"],["/archives/page/11/index.html","f3d8f49cad38b6342ccd7a7d401f0c56"],["/archives/page/12/index.html","37a31d6a70d85185e8604fb86cc1686d"],["/archives/page/13/index.html","b399d73d09196855b8d561ac2a7edf5d"],["/archives/page/14/index.html","164e5692735606fa6fa10db0754b8b73"],["/archives/page/15/index.html","76c8c987f553754b514a6c4598613a1e"],["/archives/page/16/index.html","b69b6fe9f9ca994238e9422b691f8757"],["/archives/page/17/index.html","f0e89c0d3abd01f05b6749306282e2d1"],["/archives/page/18/index.html","df4da09245e98048871e3bbfca825d7e"],["/archives/page/19/index.html","33e0c87ac81409d57727cde888cd5b73"],["/archives/page/2/index.html","d3f2c6106c3b0a3d4ad4134316bda4dd"],["/archives/page/20/index.html","b7072bf6843c606d50e37fb29bfdec99"],["/archives/page/21/index.html","79d3481560314aa6bce39bc356521142"],["/archives/page/22/index.html","3910ede5dccfda6b426ae42b157f4b30"],["/archives/page/23/index.html","ec0e1f248df68bc6d4acb5ff5c69f1ad"],["/archives/page/24/index.html","620d987b3186308971090d32881423ba"],["/archives/page/3/index.html","5e3b76238ee40c9b7aba28302f7fc185"],["/archives/page/4/index.html","b4ea4108fcaa9f2d081706ed14e04d95"],["/archives/page/5/index.html","d9ab2707b31481b717b4274d298dcfa1"],["/archives/page/6/index.html","eeceb1e349ee1d0b9701f210af87b753"],["/archives/page/7/index.html","8e515c08fcafdfae31f09901e9746dec"],["/archives/page/8/index.html","908317ecd16aa37161273f4bd1f5019f"],["/archives/page/9/index.html","fef1c221d205a86084c4f366fa08cb3d"],["/array/index.html","1c5c1f2ca795c19fa390b5cf9c98b38b"],["/automated-test-katalon/index.html","26fbf622455f60be6d3943ed6adeaef1"],["/automated-test-selenium/index.html","3a934bb770f132f8ebdc15bf2024d954"],["/back-to-table-query/index.html","038172b99f56c3cd70f93de0a61a354a"],["/binary-search-algorithm/index.html","bc56aaf67689da953e231080e929ad2e"],["/binary-sort-tree/index.html","91af6063db9b435f63094cb51b9bbff3"],["/bionioaio/index.html","f73bdf6c8a2c8c2a1637f9b65f2e703f"],["/bridge-mode/index.html","a1d26f9fafd5086b329540aeed92b6b7"],["/builder/index.html","732ea00c507c1f14bd440896d3ea7532"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","85538c2243336d7e48a066cdd0f119ad"],["/cache/index.html","91ce838229d270a763501580baa2c131"],["/categories/C/index.html","def730bde0001b9775e795d2d5cb8a08"],["/categories/SpringMVC/index.html","83c05e538d3dce56573e2ffe5d5fe8d1"],["/categories/categories.html","c3c3c294ecaf737875b8cc2a02c27f4a"],["/categories/index.html","14ae1cee26c4cfdb46cd4529ad1d4d7e"],["/categories/linux/index.html","c0dc32794fa54ceed4a0f325ae64073f"],["/categories/分布式/index.html","45dc241855e0cfa63dd92077025eb489"],["/categories/分布式/page/2/index.html","35ff9b6e4952b3157322313c0728781f"],["/categories/设计模式/index.html","93a2b91e72cfab73e9b2798fc7f6e8c9"],["/categories/设计模式/page/2/index.html","093675d56ce3663a77aaed7a0bcf95b0"],["/categories/高数/index.html","c816c5ae8fdf3680ccf1544ff1046ba1"],["/chain-of-responsibility-model/index.html","812b13c6dfbe63a17abbf426eb676f0b"],["/charity/index.html","9340ae9182e35c9a5acdae2c7c3765a3"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","50e62cde2bcb82756411074e9102acc4"],["/combination-mode/index.html","2763e073548963c9475db1c13b4e43b7"],["/command-mode/index.html","7fb54d63cbe8389c07f23ebe636f999d"],["/common-commands-of-unix/index.html","dd90c6840711f2cb5543e4c43a6b079d"],["/computer-network/index.html","1e5baf1ff1a871126afbea2ae1dafbf1"],["/concurrency-principle/index.html","f5167d2df5c660ad908ecc150240c141"],["/continuous/index.html","490efe7229164eb95ff6ae228a7ce6f5"],["/contract/index.html","c48e69972f35809442772058440cf864"],["/create/index.html","ae1226dfed5a2494a574ba3dfc24f743"],["/css/main.css","0ab02c81a8ead489278ab88be7700809"],["/cycle-structure-programming/index.html","e8f74ed735aa792defbe6fa73bf05f78"],["/data-structures-and-algorithms/index.html","7de755947a57c1e904fba3310c2a86bb"],["/deb/index.html","465958002c40ed7c6ee31b4b3e293453"],["/decorator-mode/index.html","650106a39da2c4defbfe63048d9524a5"],["/definite-integral/index.html","c759f4a6d8580f800d844ee53c5db655"],["/dependence-reversal-principle/index.html","c5d132872823113cff8c6096e07f97b4"],["/derivative/index.html","b7243f2ccbb8f4329078791ef1c62e60"],["/design-patterns/index.html","f7a9d5ea42e290992e0066bc647263fd"],["/dic-algorithm/index.html","a5c031a3632e6928d873f56b869d8900"],["/differential-equation/index.html","08d36e9d9a2f61caae96cd8e4b7cbe05"],["/differential/index.html","78e9d8f6d3a3df9610f796eaf21778a3"],["/dimits-law/index.html","8be5f129f843a27e152549d0bf519133"],["/distributed-lock/index.html","6fb696e1de69e0e7ee4d095fbbc9bcb2"],["/docker-virtualized-container/index.html","dff7fdca5e16f0b246d2d6405ff51eba"],["/double-integral/index.html","f9be0d440c36c5a6c9aa216cbb97d14d"],["/dp-array/index.html","f2081293e71d6828eb5a203aca78aa96"],["/dynamic-array/index.html","717be8e40cd22654f7492c4642e7f416"],["/dynamic-programming/index.html","2556e69c19ad11e7cc87c7c99826a308"],["/edgeset-array/index.html","d0f08d94545634e958957b256f923df4"],["/encoding-algorithm/index.html","1c4c0eb2e11dd22b4cd78af0cba456b4"],["/eureka-service-registration-and-discovery/index.html","551d3b31dbd866a30df0f6f52fd890c6"],["/extreme-value-and-maximum-value/index.html","189d9df623fbb4b0375f18658b7fa02f"],["/factory-design-pattern/index.html","2a2662a5cbfccd7d6e73ad80eb812582"],["/file-input-and-output/index.html","1da2088cc7b5674356ae6ba69eac58a2"],["/flyweight-model/index.html","40843d878f4cabb6cd590ff2c554f85f"],["/friends/index.html","a8db2819f472c1a3742d8598b27963bc"],["/function-graphing/index.html","50602f21d7d04aa855a3b26ce6acb7e4"],["/gateway-service-current-limit/index.html","30db7af9463960ea0cba074fe43a1051"],["/gc/index.html","f0cf33804d79f00aced4dc8ddd713bff"],["/generalized-integral/index.html","b37095c1241f0584bbbad918ef2436af"],["/google8102e2f35ce9e391.html","d367a8f71b7444c6ba1b348a11a41715"],["/gulp-compresses-static-resources/index.html","2cdca8ebb63677d056d7c46f390ff230"],["/hash-algorithm/index.html","d1d802b0a90001173c729e18478f38c0"],["/head-first-JVM(1)/index.html","6a910d8927ddcf79bedb438f3868d3a3"],["/head-first-JVM(2)/index.html","e9c2e4994039db0571ac76f16dc3976e"],["/head-first-JVM(3)/index.html","56c7c03c2cbdcb8abb5f1d5a345d607d"],["/head-first-JVM(4)/index.html","7c049b48ee51f436223da659f9de00c0"],["/head-first-SpringSecurity/index.html","4016d62d3e4812f9fe10da69a236b51a"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","6b128a8c4cb749a653b190bfc32c53f2"],["/heap-sort/index.html","e4851a8de1277881d63321fa1c013ed3"],["/http/index.html","9ece357368ef4352f7d32bd357e9a5c3"],["/huisu-algorithm/index.html","213900047c8e1fb52955ef0241cb63dd"],["/indefinite-integral/index.html","e30b9278cd0cfaf0ef95c853b6cee00d"],["/index.html","c30bbcce82444f0090373886000f6e5a"],["/infinitesimal-and-infinite/index.html","bc76d554435904c94654701b2b2009e6"],["/interface-isolation-principle/index.html","499118ff771435b400da0bba54d51180"],["/interface-test/index.html","2e93f0b45254c86a6345b20532b05511"],["/intermediary-model/index.html","db2a29e9e6f9f186a5892fdb59b74231"],["/interpolation-search-algorithm/index.html","9af03a7d638793cd2158882c6a34b0e6"],["/interpreter-mode/index.html","bcdaccec4db58d1f5ba5e25a7da7a7a6"],["/introduction-to-computer-network/index.html","4bdf1878c82608ba7449f5f04ecff4b6"],["/introduction-to-operating-system/index.html","bc70a7792e91e7642a15c079b29f2732"],["/inversion-of-control/index.html","891c5228f8d618aa95e3771b2c4f973a"],["/io/index.html","8bb0ead673f92baaf048a7c9598184bf"],["/iterator-mode/index.html","dad6f3f8264bca83c4ba5582f79d16a7"],["/j2ee/index.html","c452526498fbef9ba231993d715fb511"],["/j2se/index.html","413ba836cc0292d6d72da4e85a32103e"],["/java.lang.String/index.html","a577224f4d8a41826339e898c0460767"],["/jdbc/index.html","58c0e7d6890e683a397d54364790f126"],["/jdk/index.html","a4427eb7aa2bb177182b6d09a109ed0f"],["/jmm-memory-model/index.html","4c8195813f945312c4b669eb72caa5f6"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","d4f0a3def72e4124e9e4c46cba4a23db"],["/jvm-method-inline/index.html","a372b096c83665f4ea27b560ef65fab0"],["/jvm-tuning-practice/index.html","f7ca91a73cf2b18b5cf028c23d822ae8"],["/jvm/index.html","4f80c05ed8287e2b4288d27ae5f5a55f"],["/law-of-robida/index.html","33779b494461516b9b6faef322c45650"],["/limit/index.html","6a8a4bd02a9008ef8ec12803512f6ce6"],["/linear-search-algorithm/index.html","78646f7cf7f0d62428be74ab203bddcc"],["/linked-forward-star/index.html","9714fbc1499829d2fad38ec2d38cf28c"],["/linked-list/index.html","57bff676c868ad83591b2794cea0cb8c"],["/linux/index.html","7794e0865838e5d23796dfd1ba4663ed"],["/liskov-substitution-principle/index.html","a59caa17d3e440f1edcc2513ded6e9ab"],["/lock/index.html","783e740a66af70668cc82c867238aff8"],["/lru-cache/index.html","09578f0f9947f9cd7f319f665747a1d7"],["/maogai/index.html","8f46f5aedf9f6169f37699ed4b8874be"],["/memo-mode/index.html","be6ff79830c6b596a05588764857f0c9"],["/monotonicity-and-convexity-of-functions/index.html","4a592f6b68ec5039a4bf55f3beb911b6"],["/multi-function/index.html","0a886069326c8495131b2d4d9a30e14a"],["/multithreading/index.html","318f14c6af8315fec80bf8354d012391"],["/mvc/index.html","587a8eaf769cd60f9423e496b5e3767c"],["/mybatis-cache/index.html","b2be01a07f9c862ba17285032123a80c"],["/mybatis/index.html","a5ff3809336697a995945574d99f8219"],["/mysql-index-wrong/index.html","ab44e2f9dbed180d2f7a70cea3639c74"],["/mysql-struct/index.html","fa733e624e47859860841db14afb1c53"],["/mysql/index.html","70b358f90c8dfbc9e1be6a9acd197e46"],["/nacos-service-registration-and-configuration-center/index.html","bbd30618fe23febd20f50ba8b73f326b"],["/notes/index.html","df07d1d63ebcc5fb327a3c348038bfcd"],["/null/index.html","63568a13b6dfd55bc43631e6087b9aa4"],["/objectoriented/index.html","7dec26c7fa4ec6c2c88d59bfd68572a4"],["/observer-mode/index.html","fe7fe1c2963ed2646d38ea3688ee9993"],["/off-heap/index.html","a42925e9c967a9e5892ef70809db4680"],["/operating-system/index.html","cd8c64e730574c1d40cc21cb4265f5b9"],["/page/10/index.html","78f262d1790d220f21211b07e851e984"],["/page/11/index.html","280cdbe333cd8ad94bfd3f334ad7dae4"],["/page/12/index.html","155ac8e9d67b5bfbe7184f6d70335e78"],["/page/13/index.html","f2daf8ee272d252edb810bc00bf4e720"],["/page/14/index.html","e6fb940695cda690bf0f59454b43d482"],["/page/15/index.html","22d49d980b6413f6e3ab8c9b0d8dea21"],["/page/16/index.html","2109b9bce7414edade3f5fd91a70a771"],["/page/17/index.html","e61d6bea7063add7d0ed0fa42c765263"],["/page/18/index.html","b8288be41fad41e45fd78b988f82b9ed"],["/page/19/index.html","9890457069250d58a8f855545d1077e3"],["/page/2/index.html","3f609ea5719e2042b018c6cf56cfb4e2"],["/page/20/index.html","88c4e0c6bf11835856384df0fd3c3a93"],["/page/21/index.html","dbc3b08fc14f607e7450fe733b13e4a2"],["/page/22/index.html","cc11bb9a23facb36ea03598634542113"],["/page/23/index.html","5039fb763d8efbbf10f39db44694ec8b"],["/page/24/index.html","8242319fd3da4ff8d670e51b35ff37d5"],["/page/3/index.html","89ec49f3981969947e5f99c83d2a2799"],["/page/4/index.html","3023322f11f60fee7f7b0151843a69b8"],["/page/5/index.html","657df9baf51e5bc19d87155d17e1bd4d"],["/page/6/index.html","5b16fba1c4d6fd515fad480eb029313d"],["/page/7/index.html","798ab7da5bd203f9ed2395ca9af36f14"],["/page/8/index.html","a4039ab9f7165dbc20682ec50965f027"],["/page/9/index.html","c6866ac817b87eee0e05c50b2b44aa87"],["/palindrome/index.html","f08c6335cba592ef2eef9f5395455500"],["/partial-derivative/index.html","4baef0533fb423900680b52946531d56"],["/pass-by-value/index.html","8b7a7f6497c86c2f0e85ad2234582fe9"],["/pictrue-bed/index.html","9f174d2b04e16275cb354b53bf6fd170"],["/principle-of-opening-and-closing/index.html","a014f2516b2a5b13164b1e4ad4a48cdb"],["/principles-of-computer-organization/index.html","4f29dc09a6879d71feacdbbfe8a6006b"],["/program-test/index.html","fbaf022bd6ab0a86f73d1ae4b7970006"],["/prototype/index.html","343c7efb7ebf6f868efc23745b8596fb"],["/queue/index.html","7da46e731e3aff2db6589461440000fa"],["/random-weight-distribution/index.html","9ea2cd653bae5edaac0315f5e0b7501d"],["/realize-modular-programming-with-functions/index.html","35bf455aabc0910f73da59ade45e1b33"],["/redis/index.html","5a0e47b5714a8a1d130f1c57645fcb4c"],["/reflection/index.html","71b81ed0b469505f059529b0e93b0616"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","06e241d7f387cb6b11fe915639226e7b"],["/ribbon-load-balancing-service-call-degradation/index.html","44e2351ed7e072d42afa68cf7adb156d"],["/round-dp-algorithm/index.html","a7715059dc370bdb23269a95ba7b1ec2"],["/seata-handles-distributed-transactions/index.html","b8928736d2cc8fba3818d6ede7059099"],["/select-structure-programming/index.html","9453a6f5b4536f6b7d96f97d5f78fdb4"],["/sentinel-realizes-fusing-and-current-limiting/index.html","99e645d74e55d4851d0e79d01cdbbb55"],["/sequential-programming/index.html","2600b57b135efd6722a0ad336d5fd9e5"],["/series/index.html","1d9fce7241547c2ead51e23b499b05b8"],["/service-worker.js","90e8b5c3344a77b43d57c9458fa12cef"],["/single-point-login/index.html","139440f6d47039ea3b8a3eeec10302d0"],["/single-responsibility-principle/index.html","2ddf689a0116de540a41473575971231"],["/singleton-mode/index.html","beea78a2893a6bbc622a4c2a363f0812"],["/slidingWindow/index.html","a0a3465c74bb01c1b200f2cb19f189ac"],["/snowflake-distributed-id-algorithm/index.html","ddb689f0626c0fb9e1e3b23ad783c4ff"],["/sparsearray/index.html","d4f10a6c6d3a8bd2946c18633012436d"],["/spring-and-jwt/index.html","f3fdc8d5c984a2323e43434cf226e0bd"],["/spring-architecture/index.html","a2ebb0bc43a7294c30ec5483d635c3ea"],["/spring-relate/index.html","25751f4f93c0e47bfd6817060163ce66"],["/spring-springmvc-mybatis-integration/index.html","8f28859268943b41cdef9ad2d86e8a6d"],["/spring/index.html","d349b3c5df7b013f1fd3735a3020ec73"],["/springcloud-alibaba/index.html","32099e318ccaacc90ebb1759b9917aa5"],["/springcloud-bus-message/index.html","4c6a4d6bb37a2e9dea4d89d4dfa387ec"],["/springcloud-config-distributed-configuration-center/index.html","52195ec14bf372726001cdad5d21ff8d"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","661f4f1f2b27a246288cad1f2fac0981"],["/springcloud-stream-message-driver/index.html","0f878a771fe076816af521e246b2ced2"],["/springcloud/index.html","3a0f78ff0f45532f223671d5189dd015"],["/springmvc-environment-construction/index.html","bc6f4c6ed29985ac9585fe6850c6498e"],["/springmvc-work-stream/index.html","35a21bf5b89dc9b1559b0e27ffd0ffd8"],["/sql-injection-attacks/index.html","651dc00968d600009c3473e8f4d2cb60"],["/stack-simulation-iteration/index.html","086fc38d0436f9a8206dd2ab5723b555"],["/stack/index.html","4ea877fcbbfcf8239681d7a3f55eaac3"],["/state-mode/index.html","9db7c42aa6570bfae83ca894873f1e5e"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","d646a150aeb6553e389bfdc511cbdd92"],["/strategy-mode/index.html","36a40824b51f9fb2dbb5a867d26bc98c"],["/sw-register.js","7eb6e477d704f28502940b76bc286147"],["/synthetic-reuse-principle/index.html","bbdd0f5c1c6b384eb26b22f9a386f8e1"],["/tags/C/index.html","a5187702924942b2f04cccd45ff936bc"],["/tags/C/page/2/index.html","3e353e791e4ba6e30a4cd287910c7186"],["/tags/Concurrency/index.html","a5c146da3428b8d47a07da3ae8313cfd"],["/tags/DesignPatterns/index.html","7fd310f6145e0129fcc1f043981c279b"],["/tags/DesignPatterns/page/2/index.html","a103d31842139b04984cc80d27cf51b2"],["/tags/DesignPatterns/page/3/index.html","45e4351e5fb0b1f100385c3bedea629f"],["/tags/DistributedMicroservices/index.html","cee8f17e0f0728c9131eec830579ddf1"],["/tags/DistributedMicroservices/page/2/index.html","2cdfa0c3d53817bd71fd7d695560adb1"],["/tags/Interview/index.html","780ee7b4b2c34ed7bdc0367e766f06e0"],["/tags/Interview/page/2/index.html","d949c945329decd9bfe1a0bc36d5f7a7"],["/tags/JVM/index.html","8cd40367cc2f35bfe0f3587b626e332d"],["/tags/Operating-Systems/index.html","4362fdd592ebbc3d6a658a0fba44fc74"],["/tags/about/index.html","7091d1e8cadd3a4a6ee0727e44a65812"],["/tags/ad/index.html","2786e56ea78b3f585dc05bded7ea9fa5"],["/tags/algorithm/index.html","593ea80730ec6d72f31cb54fdeb4a697"],["/tags/algorithm/page/2/index.html","34b3ae405c85bbf46ccee98660afe84f"],["/tags/algorithm/page/3/index.html","7a76ea1bbd5e25874df49b166c167adb"],["/tags/algorithm/page/4/index.html","a2045e4a7823593bc6087c468f378195"],["/tags/bug/index.html","f83ded45a1fe3ba3cb50601552c768cd"],["/tags/computer/index.html","6ed9874b8474eb6165d93417a5543ada"],["/tags/data-structure/index.html","7192e463130b494baa3728a83be26407"],["/tags/docker/index.html","2cb88f8202fc9949897f13a85ea8ced5"],["/tags/famework/index.html","94cd1cc4c8ed38f7a9a49f1ce420c5f2"],["/tags/frame/index.html","94959e256b8d421541e37cdf8c91caf0"],["/tags/frame/page/2/index.html","7d82eefe7e85230a156b66ff3fa9e332"],["/tags/front/index.html","dfc5f5a03539a8af425ead3bff9a4d71"],["/tags/index.html","95ee74ba07015931be6797029929d8aa"],["/tags/interview/index.html","b7c9db8110f8cb171953b11dbf54b7ef"],["/tags/io/index.html","fed585f646f3c0c7d4bda9926f364820"],["/tags/java/index.html","0cf5d3dc3bc38238443eb345718e9fe6"],["/tags/jdk/index.html","79318a8f4f84aad21f05aa5a588b4427"],["/tags/jvm/index.html","74b76eee502ac9d90663c42003f47205"],["/tags/jvm/page/2/index.html","6e885cb38ff7d1358146f218ddaa9cf3"],["/tags/linux/index.html","66a0de72eb39d2b975ac311a5586ac05"],["/tags/maintain/index.html","77b8d65d104fc629316336ae1fc4f20b"],["/tags/maogai/index.html","370e2b38f41892ac9b445901a0f83582"],["/tags/math/index.html","3ada14f0d0e1464c06ab7d2e000f5ef0"],["/tags/math/page/2/index.html","8664eeb175f4736e03fb2332a2d3868f"],["/tags/middleware/index.html","d255850a71895dbf5aea134f378e4ca7"],["/tags/mysql/index.html","bd0792d336978d2d00b452dacbbf9f0a"],["/tags/network/index.html","8c9f8dc2fdc682c48b44001c4c7ba3e5"],["/tags/project/index.html","a30638ce7cb08b75709077a0e6415daa"],["/tags/security/index.html","9932812e3d8a71411670dbaebd8b99e6"],["/tags/sql/index.html","7d6fd3e3575b73ae40e29493978b6375"],["/tags/test/index.html","03bb1fc088999065f941d7e3841dad2d"],["/tags/think/index.html","af9063334049cd539c92c8c305f584ba"],["/tcpip/index.html","c4f5900677dac5f3ad6830aeefca83be"],["/template-method/index.html","21f7784ae320b934a34faa432681f622"],["/test-case/index.html","1caa26c66889aacd0eb9f1369f70f8a0"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","e3f2463f86dd50120ca4b385a0c36094"],["/thread/index.html","ce3b9ba85e136884f0314ccc719fd8cc"],["/tj-horse-racing/index.html","b292edd0f9e3148bb599c9e8799babd5"],["/topoSorting/index.html","95a7eb5e6753fcef05b326c9246de663"],["/traffic-monetizationaccess-to-google-adsense/index.html","1ef9798a59fde20294b608397e100ca9"],["/txCharity/index.html","7fdffaa0940a4599efd1bf1225759294"],["/ubuntu-set-ip/index.html","9eee569a8fbe1d5f8b97959905e74450"],["/undefined/index.html","01165c44e2bd4686c161bb06e4538bdd"],["/use-arrays-to-process-batch-data/index.html","045b9e0f6365a8a992503cb326493a9f"],["/use-of-springmvcmodelattribute/index.html","b8d7a00e4a9768798e53f4658b3e53fc"],["/users-create-data-types-themselves/index.html","129444a9192465deef7db071d13707d5"],["/visitor-mode/index.html","f45f55a2889039b579411832593fb13e"],["/what-is-milk-and-why-is-group-wise/index.html","a95c917f6a6bce07d46865c75f99fbfe"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","7e7006ab4e385a7ac1125749fc6a1c20"],["/xss-crosssite-scripting-attack/index.html","9d123bda2da34278c4e58d3d9625fb14"]];
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
