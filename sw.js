/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","88e5fb22d852d606c747c83bdbf04aa2"],["/404.html","08b550857301c90e6eb4d1d6432ba055"],["/404/index.html","dfd80253cb40796cce47da829dbffdd5"],["/7-sorting-algorithms/index.html","75b4836fd9a30bd1accb792295e9e842"],["/AIO-blocking-model/index.html","8f08c51f2a8282f41d865399aa37f3de"],["/About-Snowflake-and-Consumption-Degradation/index.html","136a7f02c42ac4ff14cafdf61472c4f8"],["/BIO-blocking-model/index.html","c0acd69679b4dda9fe24b6a9867fd205"],["/Bloom-Filter/index.html","7b0c3406468fa486463a498a4cd42a44"],["/Boyer–Moore-majority/index.html","a24fb5084b35579880c6d345aca766fc"],["/C-algorithm/index.html","63ad85b0af9ade8ae08b814dc8d27257"],["/C-programming/index.html","974a8426426c69da1e3d2af4f2fda076"],["/CAS-&-AQS/index.html","34eabdb9acd2b78eb654bbaaba0680b7"],["/Comparator/index.html","bd58969e2cd5eb422a1801d92c206015"],["/Differential-array/index.html","e9bf42e7cc084f7cb916e3faadafdc76"],["/Download/index.html","3285f532dd997772dd4aadb45cd3eac0"],["/Front-end-security/index.html","5a40ee30c33c27973fef51e51ddce9c5"],["/Good-use-of-pointers/index.html","51a3efc8f3d3a5a326ab5aa92241d291"],["/Graph-degree/index.html","3e85e53e63b70bf8547bef17ef2cb6b7"],["/Greedy-Algorithm/index.html","0feb15a840568ac77bbd9506f6452fa6"],["/Head-First-Map/index.html","f9af7a8c5b55fbd08174cd8ac6cab4fd"],["/Head-First-Netty/index.html","741b5156055c3f51deef04bdb0d39aaa"],["/Head-First-Nginx/index.html","a384212f8b79a0b00513c8d0c325e35f"],["/Head-first-Spring/index.html","a42f7bfc6b32ed8c61d0035e5f0ccaa5"],["/IO-model/index.html","a6255977d7742e69d7078c75603540da"],["/IO/index.html","781788eaa365104856432df9e2c08d48"],["/Implement-a-lock-based-on-ReentrantLock/index.html","2d22fe8da943efcac233346a6c6d37f2"],["/Improve-Robustness-(1)/index.html","4c9810593ddd1fdd558d1fdc362450a2"],["/Improve-Robustness-(2)/index.html","a8fa823e416c5007dc510ac6b40fa17f"],["/Integer/index.html","2cbdebb079385d866db0a1196cb1e183"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","5dbfeea87b804610824966137d565f4d"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","04ccda8cfdb707c2956ab8f81765c23d"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","19864a8e0fb4dd02e1d0bdf121545c69"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","9a4adba6d82d50ee19cd114d8b86bd78"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","a9a9ef794c51e44710f24706da7b294b"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","c2c28725abe6e90d00a0563345940416"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","d117b06f0ebc1f7ea502c63fb6ced21c"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","11796f79e2a2f2dbf06c6fc493a3afc1"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","38033775e20eb77213092654cb57c7be"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","be57d69028333467f76b69a3cf6c7dd5"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","dbc8de7a9eb488d5ef539ae39d95e459"],["/Java-network-programming/index.html","5f8bc3dc6a92dd68092df02f91b929b9"],["/Large-number-operations/index.html","157e42ef81410f1cb921d836b808ec6c"],["/MYSQL-MVCC-&-LOCK/index.html","d48982957bd643a7d4857835e1f38263"],["/MYSQL-uuid-and-page-splitting/index.html","3d0f846fa1c46330728c6e75af1569bb"],["/Minimum-Spanning-Tree/index.html","ddb3c5e741d36f0767991c5407eac448"],["/NIO-blocking-model/index.html","8bdf5bedfca69891f80174b44650c246"],["/Nacos：Configure-MySQL-data-source/index.html","42f9c07737e69d4d9175afb95a9fe1a3"],["/Native-method/index.html","831b93838fc202b8d9bd380ada98205e"],["/PriorityQueue/index.html","b0532eb927dbbaad611e6500a42b6ac5"],["/Proxy/index.html","b39e8d7c54e2cb670b79ec67a0b50425"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","90a085401e4eb2d37e3b06ffb6ae919f"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","b9db22e28b2673e832d12cf63bdb9c49"],["/Reservoir-Sampling·/index.html","ceca3648ef74fb0185c08c62acd78794"],["/SQL-injection-vulnerability/index.html","a59b6a9725ed0fce22d57c8474caf767"],["/Sandbox-security-mechanism/index.html","1156beb8d0903330f837c4d94ecf3f6f"],["/Spring-Cyclic-Ependencies/index.html","712863952ef15fe6f63fe2923ad84d0a"],["/SpringBoot-startup-process/index.html","2142a198e8eed148f59d8508dc5d3d0a"],["/SpringSecurity/index.html","dc6616c8f80a35036c329ab4830cd984"],["/Thread_Pool/index.html","589a72adfcd8a12469a4c4553f2925c7"],["/Transaction-isolation-level/index.html","e1d4cf6a040f83acd8fec5a1ee0dcfe5"],["/Unitest-framework/index.html","2d4e89d90d4677785b399700101decd1"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","b3bd598718988e07bc55f3c96c3a65ba"],["/about/index.html","424bf72e2812e9d1b04012438ff1540a"],["/adapter-mode/index.html","68eda182b846856b298d9876c7ac2c58"],["/adjacency-matrix/index.html","18664ed43843fa1eaddc24ac7c396833"],["/adjacency-table/index.html","c9de534efde7b12209fcb1f583bad7a5"],["/agency-model/index.html","804dc05da5551f7c7b4432fe4555a275"],["/app-test/index.html","74fc9a34055d139fe189147d26bdd59c"],["/appearance-mode/index.html","8572c54527447a35db67c3f91d020c82"],["/archives/2019/01/index.html","eb0276c6328b97901082a2e91ec88860"],["/archives/2019/07/index.html","ba2af97cf4917a7ed784f304d923f9aa"],["/archives/2019/10/index.html","d74f3a9dff084aeaa7250e3af5c68781"],["/archives/2019/12/index.html","66f7569bb2554d71394b84d51acb82b4"],["/archives/2019/index.html","160ddfe6275b24c426ec3f25ef179c6b"],["/archives/2020/04/index.html","170e185060d2f3fc18b89f45df7efd9c"],["/archives/2020/05/index.html","b13bc6c5b40d10303876250833645100"],["/archives/2020/05/page/2/index.html","e4cac5544994c9a2b102a9f98128b7d3"],["/archives/2020/06/index.html","0057f7a8a519710d2cd0dfb5698eb0c2"],["/archives/2020/06/page/2/index.html","afe5e8272b05a58eef48187bdb23bf6a"],["/archives/2020/06/page/3/index.html","a32606d010c3bf9a99e8945658f089e0"],["/archives/2020/06/page/4/index.html","c2abfadb54d1a4788093cdacc34575e4"],["/archives/2020/07/index.html","1f1e56b9aa9304dc4294f8f5540c324c"],["/archives/2020/07/page/2/index.html","174ea3efb0c74c22aa2c337342409e3d"],["/archives/2020/07/page/3/index.html","7efc3d6b03648ddd0f1e743367348a85"],["/archives/2020/08/index.html","d391123221ec6102548516a225eab9ce"],["/archives/2020/08/page/2/index.html","353dce75469595eca7aa529a65dc54c8"],["/archives/2020/09/index.html","d2f535d3b89c60eecd65d0c3dfed10a2"],["/archives/2020/09/page/2/index.html","c7c7b18ff96689aafcaf973ddfe78144"],["/archives/2020/10/index.html","62985f21fc7ec0ab217b9a4dcaec738b"],["/archives/2020/10/page/2/index.html","55febcc4c67c83be7edeb84c8966ed4e"],["/archives/2020/11/index.html","5d0d8aab13895c4d40a37f2a6c5edbbf"],["/archives/2020/11/page/2/index.html","a895098f5467314500141c0b729c9f7f"],["/archives/2020/12/index.html","6f95ad0fd66a54e0c147164659a02485"],["/archives/2020/12/page/2/index.html","1da5cb7f1addbdeb36b5d5f19675f4a9"],["/archives/2020/index.html","a46be68d30c2aa9bfbc763b5b2ff8486"],["/archives/2020/page/10/index.html","8ac582b74386660df8747bc3a8cf4b53"],["/archives/2020/page/11/index.html","5a793a28df47f1dcdc6d5671fdcb2f45"],["/archives/2020/page/12/index.html","90c82f7ab7eaefd9ba332de59dd29606"],["/archives/2020/page/13/index.html","a7c447424270a13af0579ed5b802194e"],["/archives/2020/page/14/index.html","7db50f1b0ca21be78ebb47028e17d65e"],["/archives/2020/page/15/index.html","713d7e80934801f104ade18a1fbe07c9"],["/archives/2020/page/16/index.html","7088f7234b661f35029f2457f464e015"],["/archives/2020/page/2/index.html","0a399b1703d9136ba343f029c1023c9f"],["/archives/2020/page/3/index.html","31b1cabb82e16e8c602541ee93ae41e2"],["/archives/2020/page/4/index.html","a5fbefe367766e51cd6c9289a61a4627"],["/archives/2020/page/5/index.html","28ac0046bdd8e9ff13ecc9900c61002d"],["/archives/2020/page/6/index.html","d22c7bafea065a6065ba0c08def50cee"],["/archives/2020/page/7/index.html","2b57f98a8d29300a80a5bfa27da02bc5"],["/archives/2020/page/8/index.html","8475d5e5fc17c62df9a0abaf0c13aba2"],["/archives/2020/page/9/index.html","3ddc1cf847d186c6b66cc89364fabc87"],["/archives/2021/01/index.html","658d09a5962eb4931e8023c6fe9d46bf"],["/archives/2021/02/index.html","b0bb8dc46a458bb7220b684820f6dc3c"],["/archives/2021/03/index.html","edb86f3577540e97c3ec28f7d77d86e4"],["/archives/2021/04/index.html","6fdba9d75197fef386e67e6472eb223e"],["/archives/2021/04/page/2/index.html","7ff352d48063b57e33fa10f5b27a9592"],["/archives/2021/05/index.html","ea7d431affc40f5bdd055f7c3e6b53a8"],["/archives/2021/06/index.html","56d3b4e9bf6bc58859d674fdb48646f1"],["/archives/2021/07/index.html","e117c84ce1aea3dc3bf552e7d01fe619"],["/archives/2021/08/index.html","1d97223e95b886047be35d66b0037155"],["/archives/2021/09/index.html","fcbd5e76e6634ac7bafa843d809bfd0e"],["/archives/2021/10/index.html","b68fc42de4db440efc4755ed63c6850c"],["/archives/2021/11/index.html","4c57d8150412f5f2b707c1d2e9512bd7"],["/archives/2021/12/index.html","5a821e55501af746e5593b32bdd3edc6"],["/archives/2021/index.html","10ffb48121659bb23a0d6dd61d53f2de"],["/archives/2021/page/2/index.html","1cdf638cd91063e0b4eb0c73812e105b"],["/archives/2021/page/3/index.html","8159967e97d7e7058eb3dbbfeb6736bb"],["/archives/2021/page/4/index.html","a0438efcd8469240d5c4a4f4f0d9f402"],["/archives/2021/page/5/index.html","d83d0c76f3124752ab8186b195bdcf77"],["/archives/2021/page/6/index.html","c3074469150ef0370dcd3e21467b9967"],["/archives/2022/01/index.html","770db1301516996cadf2a916bc8d07c6"],["/archives/2022/02/index.html","81c2d77597ba253ec07aac9605c69572"],["/archives/2022/03/index.html","467ec4b197c28f768f2e2f6d75a70d16"],["/archives/2022/04/index.html","ea60512b614af506a9f8ca434d7e182a"],["/archives/2022/05/index.html","630b1d91af6ba0b68708bb884aec9b0e"],["/archives/2022/08/index.html","6f8ac5dd6ed2c169ccad056503268f0d"],["/archives/2022/10/index.html","551b5885d4867486d75e8e04e2bcd261"],["/archives/2022/11/index.html","f396d1e7bd1113c1fc0a9aab7899c844"],["/archives/2022/index.html","d0e84e1f22e1af5f21db03f8a7ce7a6c"],["/archives/2022/page/2/index.html","dab07399743e5e5a36c8036001c69d87"],["/archives/2023/04/index.html","54f538a50cc89fe0f37d54030d61b609"],["/archives/2023/06/index.html","1d9c94fc589ea14c3e5f72b490faac2d"],["/archives/2023/index.html","d01b9995b04cb98e4602f48c271e0a83"],["/archives/index.html","8834b92c1e827e48aef61bea455588b1"],["/archives/page/10/index.html","6b18723ca0669a1c4b81a960480dbdf8"],["/archives/page/11/index.html","70aaa2cb5a4de9b18aedc172d185a07b"],["/archives/page/12/index.html","498791179414098b7ac8a176ecb846cf"],["/archives/page/13/index.html","440b0dfdd289607e9d42fcf71d8272c3"],["/archives/page/14/index.html","ae5fe2dd3dfaf09de97ebcafa6b7b46f"],["/archives/page/15/index.html","20f5485323eb9ecefbd84dd9c8dd75b0"],["/archives/page/16/index.html","00193f20b2c1e57f6c45eb525de417bf"],["/archives/page/17/index.html","343c57266524ebfd10896faa718e6269"],["/archives/page/18/index.html","b55ad2631c1dea255ae82654c0fa6cd9"],["/archives/page/19/index.html","3073145232a1431176a9b436e54577c9"],["/archives/page/2/index.html","6a2a65272a0706e49574af9acea79491"],["/archives/page/20/index.html","f75f1ec2589a7f5368bede532f1be523"],["/archives/page/21/index.html","b6fe73687da5882c70c14746c8e776ca"],["/archives/page/22/index.html","02b3c30d9dcb564b8043fb32e3fb89d6"],["/archives/page/23/index.html","5f9d8bf06642c4ff96d8e57e766beff5"],["/archives/page/24/index.html","e9a420eddc3b2b51b74132d02e688d3b"],["/archives/page/3/index.html","7a80148f0f0db315e9f51e738af959e5"],["/archives/page/4/index.html","f35d113dab9eaca183dd4f474b97d114"],["/archives/page/5/index.html","2fde8912e38ef6818e61a66f64502dcf"],["/archives/page/6/index.html","4af56a6f242963789ce4393977f80085"],["/archives/page/7/index.html","693275d26c3861abefa8947d9cd03a0b"],["/archives/page/8/index.html","cfe3c2933fd8c92fd7880430f34b6da1"],["/archives/page/9/index.html","64c2846abb9140431f17ff34858f82f5"],["/array/index.html","d7f27a4f9eab86524252974f413690ae"],["/automated-test-katalon/index.html","a22c1860181d890cfc432fe0cda35b39"],["/automated-test-selenium/index.html","90e96ecc8f3a907d5de394c1b0a349dc"],["/back-to-table-query/index.html","bf5b417affce073e6c5876d83db51dbf"],["/binary-search-algorithm/index.html","26be76598d079f90ed4b9203fa46b675"],["/binary-sort-tree/index.html","50a0f8c7aa0fffd9b86e520e48e924e8"],["/bionioaio/index.html","56f6f09069f9655018c4ad9762e90c9a"],["/bridge-mode/index.html","0b2ead5fd089d97dc74f59d3922737b5"],["/builder/index.html","293121d3c663c510a7bccdaecdd31c69"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","28e23d89976a33c511e168a2eed5d860"],["/cache/index.html","b4243388e8d9219091bc19a64c4d1625"],["/categories/C/index.html","29103854d928495cf8553046eeba2ad1"],["/categories/SpringMVC/index.html","1ee7215a42f9c97f122695ef8558bfb2"],["/categories/categories.html","04de11ec79ce230b36f1b3f28306658f"],["/categories/index.html","5e9b8786eed4e493b54dfd6e4df7feae"],["/categories/linux/index.html","8c3610f4b4585a9b9c7816fc9564072b"],["/categories/分布式/index.html","5365bcde2e2a8f4a9c118237971f0930"],["/categories/分布式/page/2/index.html","ca2584c56deef34b17f8522c2e018b57"],["/categories/设计模式/index.html","5ca82bbdfbbe8908aa4c22bdf2f31f74"],["/categories/设计模式/page/2/index.html","68e73e9fabc0ac65c3ef6f6cc2337747"],["/categories/高数/index.html","42275e5b2fba86478783991f6fea8845"],["/chain-of-responsibility-model/index.html","0441d8e68a3e5083c4d70984da9d85e8"],["/charity/index.html","e6616610038fa96a3f12d1dcce3a0b8d"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","e803e9ad543e6ff23babbfa195c15f56"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","f1b08360029c717be49146b1c11f10d6"],["/combination-mode/index.html","2b972ee0f8e436adf3298e4ad04d85b0"],["/command-mode/index.html","b20702a3fad86ac26a86f849535b2696"],["/common-commands-of-unix/index.html","ecbdf65fb8697694ef27fa278cebd92f"],["/computer-network/index.html","6cbd738044cca824d7cd64bf391729b7"],["/concurrency-principle/index.html","5c586666ba44b632d25a8918285ac4a4"],["/continuous/index.html","00ebb9940881863365eb9ad3d5ee163d"],["/contract/index.html","c99272bccac7bef2f7cd57b791f216e8"],["/create/index.html","09f9c6ee7ff2509134831522acfa0c27"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","7cab3e1e1ba20edfb046a3c8a3568c9e"],["/data-structures-and-algorithms/index.html","388ceff1705e26a6295712caa27d3a90"],["/deb/index.html","b937b298109516bd347ad56ac5bbca0c"],["/decorator-mode/index.html","ac0fcdb6916cea2ce89230be8a9dffec"],["/definite-integral/index.html","f93df66cc03178b2b1e8852785ddb08a"],["/dependence-reversal-principle/index.html","77dc6b22567fa28ecd731479d3a06084"],["/derivative/index.html","aadbe920e01179e4f087bb2beb4c37f4"],["/design-patterns/index.html","7ec2ce56c1d6f4e5ea6d813a056ea052"],["/dic-algorithm/index.html","59284fb2b214327c77ab7e93c7d117c5"],["/differential-equation/index.html","8a928b9ea4179ca738c423dc88b87100"],["/differential/index.html","bb99b6fd702a359d9d3eff5ce6cc7836"],["/dimits-law/index.html","110303c6f25d84e8965aa8fd74e844f3"],["/distributed-lock/index.html","ee2e6a75c738f50ab9d6264d97db9365"],["/docker-virtualized-container/index.html","1f667fc533e8adf4fc592737c4b4c961"],["/double-integral/index.html","2c4ef016f09dae825eb895c9dc32e050"],["/dp-array/index.html","62ce7de2fb9232d1589da8dfbc9af618"],["/dynamic-array/index.html","cfe51f54de04772668bf22b8a551abea"],["/dynamic-programming/index.html","85db3be2c2e784b1307696330d3ba128"],["/edgeset-array/index.html","1d21aeb9cead0dbe3e20006d0ea6852b"],["/encoding-algorithm/index.html","1ba3e11120b90374101713d10f3f3284"],["/eureka-service-registration-and-discovery/index.html","11985677a65c821a1cf248199cd12ad6"],["/extreme-value-and-maximum-value/index.html","a692df50606a0f016e898226066c003c"],["/factory-design-pattern/index.html","5c51f3292a082d9a0b465d0972c3212b"],["/file-input-and-output/index.html","75466dc02950186cfb5dd9d730d01f46"],["/flyweight-model/index.html","77a8df230d13975a06bd0ef51ac7372e"],["/friends/index.html","caf8cbf1c30d2da6d2bf779c20deb99d"],["/function-graphing/index.html","bd1160b64a5ea6666c0681343f29c065"],["/gateway-service-current-limit/index.html","3921f84fcc3b8582574a1fe91367cc20"],["/gc/index.html","21f2a81f1fe14db89a4420b9589eb5e9"],["/generalized-integral/index.html","ce60ebf1e4f814ba843a05448c65c9c2"],["/google8102e2f35ce9e391.html","146cb590b2736f7b9a009331256b4e33"],["/gulp-compresses-static-resources/index.html","61fe42d3948e00abcb7e66e906d5f570"],["/hash-algorithm/index.html","446ab92cc590bc9f1956decfb8b6cac1"],["/head-first-JVM(1)/index.html","13bf8222c18b06fbdd0c0f08435b37b6"],["/head-first-JVM(2)/index.html","ec4141563c002711a9c68b3b00e855b5"],["/head-first-JVM(3)/index.html","bf547e651962a28f1c66b8cda5771ce4"],["/head-first-JVM(4)/index.html","8f2cb5a8857266bf4a03985972dfdc1f"],["/head-first-SpringSecurity/index.html","e45dcdfabf0522da7d5ca627a933a15c"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","0b3d51008574ede28ce6ad97313754d3"],["/heap-sort/index.html","97b8af7d703064e6215f733a78b323f4"],["/http/index.html","dec7c46bb5001c3d6146c7a034d16650"],["/huisu-algorithm/index.html","973c5065d767b1c50aedba293b339546"],["/indefinite-integral/index.html","72a4900f6cfb6a7a1626835ec243fe59"],["/index.html","37e716428999fb3f89ebaa31618b5cbe"],["/infinitesimal-and-infinite/index.html","81b8eed3cfacb85564d7e150b24e84a6"],["/interface-isolation-principle/index.html","c8f6b423bc2b7c9161affa43b37b2d11"],["/interface-test/index.html","69ec7be8e19b70fc0339a4a107c5cd2a"],["/intermediary-model/index.html","aff824085877ca5028d5c81d1f0350ac"],["/interpolation-search-algorithm/index.html","5fcc9f035ea0ca6d9d4083b8a31e1325"],["/interpreter-mode/index.html","a7c34c9084c23344fa93f1e516491c66"],["/introduction-to-computer-network/index.html","b94c9612145c9b6049376239249cd154"],["/introduction-to-operating-system/index.html","df03267ddea0f25071278c80364f59d3"],["/inversion-of-control/index.html","268af2695df2cd1691638d721402188a"],["/io/index.html","7124dc3d8f3b996daa90f9337d91eb6b"],["/iterator-mode/index.html","9e0705140a3d825bad6146fa9a493d1b"],["/j2ee/index.html","60bcb15f55a1e4e187e8eb8e7baa942d"],["/j2se/index.html","ac82185ae8408294e208481873f0f3ed"],["/java.lang.String/index.html","6e4efc00f3ec32e754463c928c60ce1b"],["/jdbc/index.html","c8b065dd78669ed22cd7795cc19818f1"],["/jdk/index.html","9d9c0ae23f42cb9de3da0d564b0f807f"],["/jmm-memory-model/index.html","2de55bfbec8b7db35ab95f1f610dc498"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","3b4289a006a5a7cf42203a1376d56074"],["/jvm-method-inline/index.html","d7037989da047f016313d20d91ffe991"],["/jvm-tuning-practice/index.html","efe540a7cabda75661903c996d795d22"],["/jvm/index.html","a19a32e68b2c2fd81003e1d7352342b3"],["/law-of-robida/index.html","904da2225904349c3ac3673773362899"],["/limit/index.html","7ac87545e5256b223c3f6917646c7f88"],["/linear-search-algorithm/index.html","743d5dd02d1011d0b0c1416785e0b724"],["/linked-forward-star/index.html","7dfb28dc413a68b9c4a894e72e131fe2"],["/linked-list/index.html","c6c984f44b4a9a741038ae10dd53db34"],["/linux/index.html","70c43fd5679c48152b3b7309a0425801"],["/liskov-substitution-principle/index.html","401ab30bbfe33283781665442c9cf3c1"],["/lock/index.html","c37a8fb767b6d49c82f651959bb0fd0e"],["/lru-cache/index.html","137e3bcb631b4033af9073f9b29ec92c"],["/maogai/index.html","9d1935daefcd54fc2fc1e118dfa1619a"],["/memo-mode/index.html","39d07b384e4ffe0b15c25d3e9642bf9d"],["/monotonicity-and-convexity-of-functions/index.html","c4cbb6f006505731a58d2e789903d220"],["/multi-function/index.html","f6d6e61fc16ad3b0642f4796b4355daa"],["/multithreading/index.html","85512cc02b0610966e91a7298e17dc02"],["/mvc/index.html","b7d87aa53fa4bb1f933183708b295348"],["/mybatis-cache/index.html","81caa91f79c1d10f1bec49988a9a8ca5"],["/mybatis/index.html","8da2c4da3d76250c7353c8c334c6bfef"],["/mysql-index-wrong/index.html","3e405d7ca1a660fcf44e25be010c70c9"],["/mysql-struct/index.html","50588a2941c0ac028f6b1725d40aabe0"],["/mysql/index.html","d2636a73d1a684ac840c8e4df41a845b"],["/nacos-service-registration-and-configuration-center/index.html","338e56ef2631a453c499a917991054a9"],["/notes/index.html","58613087f8adf24f5c9c465e461f2cd2"],["/null/index.html","cd2f6261880d776dd6fb1c5b02128014"],["/objectoriented/index.html","e57f8964591dd83e64118fe00ff2b56d"],["/observer-mode/index.html","25290f6d55020f06db0dc2950caa673f"],["/off-heap/index.html","4750af8c434c5d2985b511a3173d820a"],["/operating-system/index.html","9a64d06c75356731a51c2bdd6611c997"],["/page/10/index.html","080bb588444fb9c0517fb2392698721c"],["/page/11/index.html","8aacdf339daa42974a477dd32ac45d07"],["/page/12/index.html","152fa04ce344b6620807426b43a79864"],["/page/13/index.html","b54d25f2f782fcaed0b62d6ee136a4f2"],["/page/14/index.html","64c6d62ac8663c36b788d266983bfa29"],["/page/15/index.html","1fb5fd9c2698e24f84c6052f4b285919"],["/page/16/index.html","571e5e18e1892de302264d095ab741a9"],["/page/17/index.html","33c2f1941d87252fef176147b1398feb"],["/page/18/index.html","9e2fd1bd275e1c7c0f3a4646162e80f5"],["/page/19/index.html","462a976d16e6dd7b28c14dd5ea43db37"],["/page/2/index.html","1544de831797c75bfd343c002614b146"],["/page/20/index.html","2c9b64511efea774b1f5f7f682c8b090"],["/page/21/index.html","3ce533509f77e8cbb32db716387eb96c"],["/page/22/index.html","390ed2587d0cebd0280818813a9e9d1a"],["/page/23/index.html","bfd06989dc2fe3edf1b5528e3d43aa93"],["/page/24/index.html","abb372bdcf7ed3c52223260155c7652a"],["/page/3/index.html","f9636cefa4a53c64aaf57e3820da9339"],["/page/4/index.html","7cb3d8a9448a8d93d3479e7c7ab3ed94"],["/page/5/index.html","f9f7c230b4535958cfeea8e91b8bff56"],["/page/6/index.html","cc82f33f42b618da8804ce2a87dad8f2"],["/page/7/index.html","92e293491d18f16b20415e4d253ad8d2"],["/page/8/index.html","abac9579f212f67847cbea18d99187d6"],["/page/9/index.html","e43a2112bd13dabc6ed34e06c3465c7d"],["/palindrome/index.html","acf2cef0abf451d0b8e3c68444c1740b"],["/partial-derivative/index.html","ec2545aef7c798ef9e35025ff342f8a5"],["/pass-by-value/index.html","c4bcc0e8d9bd76c5da979f4065d535a3"],["/pictrue-bed/index.html","89960f24ce45acea04aba94ad178ba50"],["/principle-of-opening-and-closing/index.html","5a9de599565a02a5ed38da2e55bd0987"],["/principles-of-computer-organization/index.html","7f2170cb80c09fab808d3697b1dc4427"],["/program-test/index.html","15360992394ec83120e68a5a4063077e"],["/prototype/index.html","60c6215f1097e287b5ab759867dbe630"],["/queue/index.html","31007acbc5af8d9081314a6307f9d062"],["/random-weight-distribution/index.html","67cdcd2bd5f86c159c8e6fcb45fa1a7d"],["/realize-modular-programming-with-functions/index.html","7983e805d5f981cc13a026a1b6355f34"],["/redis/index.html","d30bc09787a4574bf655b101a98395b0"],["/reflection/index.html","70faafec6d83f9f3cb3eb832c140f651"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","d21cf9d95060f54362de3f8f73b2393e"],["/ribbon-load-balancing-service-call-degradation/index.html","6e7ed24706296c9a31fc3c726aed7017"],["/round-dp-algorithm/index.html","d783ecedbbebf6045027978c06a7004b"],["/seata-handles-distributed-transactions/index.html","384ae1f77ffd19914b0156b5dc211db7"],["/select-structure-programming/index.html","3aca7dca5f19f0005dcee78427a35249"],["/sentinel-realizes-fusing-and-current-limiting/index.html","ea716e3aeb576ff9acdb0e2592fcd67f"],["/sequential-programming/index.html","53c23425746a54f9c436c745895b7370"],["/series/index.html","945bc9c8bcfe85bc4a77981475c3a121"],["/service-worker.js","aff96b5c83d44f2c970a33125d3a16bd"],["/single-point-login/index.html","fab51d6cedd9a13a46f3c8906d5baa0c"],["/single-responsibility-principle/index.html","4fbe643704698b9c8b330e58cdc26596"],["/singleton-mode/index.html","9ea4fceeb50afb652909af8f1a3bb708"],["/slidingWindow/index.html","ca4647451b13d7b360b77f4743dde09b"],["/snowflake-distributed-id-algorithm/index.html","3fe053e1f0068647987d0fde2588fd7d"],["/sparsearray/index.html","18b0f8ebc6e7fa7beeed63a090f726a6"],["/spring-and-jwt/index.html","2e16492979ce3678587e11825264fc14"],["/spring-architecture/index.html","c715da580aee9341b06faa6f13875b3f"],["/spring-relate/index.html","9ba1bb09020a70e39cac7708e093d709"],["/spring-springmvc-mybatis-integration/index.html","6d1fb26ce0890c1127255c17b1d6c3dc"],["/spring/index.html","bdf52be8c9ad45ce4bf72d4fbe7f2375"],["/springcloud-alibaba/index.html","2d92ca1421f19630bcb42f38acb67312"],["/springcloud-bus-message/index.html","f908eca35dd8eec580438b56a9c1f280"],["/springcloud-config-distributed-configuration-center/index.html","60d1fb051c91fe22dd36beaa25af9899"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","6aa16748ac7d5d9be5b544dec9d950df"],["/springcloud-stream-message-driver/index.html","df25d30dc67750ca904f978cc31ffbea"],["/springcloud/index.html","babb6bdae340ee104f559e92e76f5cea"],["/springmvc-environment-construction/index.html","7b1c482e7502e56dda64c1c45acf5994"],["/springmvc-work-stream/index.html","4128d78d552372d30ecc11a8517273a2"],["/sql-injection-attacks/index.html","9b2d3c4ce0a9771544bb428e7d439110"],["/stack-simulation-iteration/index.html","9849922c204120ddcb1d6b8e0b749970"],["/stack/index.html","fa82b90ec7e0b4e936b2e6c15b505b27"],["/state-mode/index.html","811b22035aebeb98cdbd105383d8b2de"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","d3896dcbbe20b573262316ba10633dc4"],["/strategy-mode/index.html","a88d780888d4947ba0b099854f37df07"],["/sw-register.js","00b6e0c1775f633688aabf90a63b4151"],["/synthetic-reuse-principle/index.html","e96d8d978cf04dc8f0a6a00232c901ff"],["/tags/C/index.html","49894d33677a7cd6cb3a4d59e8c37f53"],["/tags/C/page/2/index.html","5fad59b4828d76af465aaea8c56bd0f1"],["/tags/Concurrency/index.html","e7a09d3e50ef6cf7453a3b94c9cc0e21"],["/tags/DesignPatterns/index.html","da55bcdc2d74aeba74571e3f587b48e6"],["/tags/DesignPatterns/page/2/index.html","8a3455dca8e6a25bd0ad82dc76b21488"],["/tags/DesignPatterns/page/3/index.html","7e517d330694efe3a66d6cb83f83a17c"],["/tags/DistributedMicroservices/index.html","1f062c2ba8caa73a6ee8dd24a680663a"],["/tags/DistributedMicroservices/page/2/index.html","b892805d2c6ffbcb7302c4c8bacf70f1"],["/tags/Interview/index.html","72c35b4ff52f9fda6a8214c3e13a7665"],["/tags/Interview/page/2/index.html","ee62dc00103e5199bb8ebd7aba0f004f"],["/tags/JVM/index.html","35ae4f7c22e48ad286d0bf64c04a2477"],["/tags/Operating-Systems/index.html","d2f60a10a5376dd62b167c999a612e30"],["/tags/about/index.html","3a4e808b53c7ebf3b6c8be86f371f43f"],["/tags/ad/index.html","899a64510419d2633291c9e62100a063"],["/tags/algorithm/index.html","062460a16b517c92faba52449c64d83f"],["/tags/algorithm/page/2/index.html","e49a67a4d4c9d78a995462b796d2703e"],["/tags/algorithm/page/3/index.html","739a95a2c8603f5642aa1fdb12f7de55"],["/tags/algorithm/page/4/index.html","b3359254a6691909972a32d4e4d2e50a"],["/tags/bug/index.html","17fd050b368195d39b4579a722e817a1"],["/tags/computer/index.html","215d5cdf19c52506aa5249336e2b6cdf"],["/tags/data-structure/index.html","6c5d266877b0b44906b34e8037c89abf"],["/tags/docker/index.html","ec62d2c56dade912acee7aec51a425ae"],["/tags/famework/index.html","adaa63f7ab6ee86ae28a2fbd1ef1a50d"],["/tags/frame/index.html","c30ee03f5bbb620a344a9e262739d42e"],["/tags/frame/page/2/index.html","17aa47ccd08becd6e76dbec84cd8ac75"],["/tags/front/index.html","50976370a2d5797aba9462768710a2ec"],["/tags/github/index.html","c2f709e20a99607b427ab11334fa210c"],["/tags/index.html","8c4e5b851de2f169542bb99950db80ef"],["/tags/interview/index.html","1197c4a511e44e80013dbf922ed23803"],["/tags/io/index.html","cb3f19d4da271598395036ac1d88cf7d"],["/tags/java/index.html","9b495e8e919a12083425838c6dd796bc"],["/tags/jdk/index.html","34328dec20129ce0611d43ff6a0e2466"],["/tags/jvm/index.html","30f394c42581055c608d02cc5921a006"],["/tags/jvm/page/2/index.html","5f9068fd6a768f7a39964a73bde23e78"],["/tags/linux/index.html","451eb220a17f46bb5824e1f16a4adc85"],["/tags/maintain/index.html","bc5102310befdcd80d06adfdd1657f1e"],["/tags/maogai/index.html","ba6deaa660512a567a1dcb642fb9e1e3"],["/tags/math/index.html","f3644ff0036ac8a310614289946e69cb"],["/tags/math/page/2/index.html","f00fde2451644924281d26bc7c0d40b3"],["/tags/middleware/index.html","abdc30e89e03c22d2a71fc4d5d1caa5c"],["/tags/mysql/index.html","6a2dda72785160b334bb8e4424c799d0"],["/tags/network/index.html","18de210e49150c66ada5ce0c2f424989"],["/tags/project/index.html","135ab4d8f3e752f36a282c9d7f4125c4"],["/tags/project/page/2/index.html","cbefd26d654dcff3b8ec92372fe025a3"],["/tags/security/index.html","63851bc3c52732a944c491e92615a4e8"],["/tags/sql/index.html","b282b69f4de8b2e98ad70c05bdd00b13"],["/tags/test/index.html","43332b1f4dd05df4e3365ae7e77b9b1f"],["/tags/think/index.html","dca63e72ddb230f3fc2c9f0b4a0ae4ea"],["/tcpip/index.html","bb46a653226a263e4e16a266dde24bf7"],["/template-method/index.html","44bcce1d21e1a04354806f6fdf89f5b5"],["/test-case/index.html","089b51776f630381137cceadb0fd1007"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","d1e2ec95bad55b0edd07c91b5c335502"],["/thread/index.html","2ac1b67ff570c36781e1c34fa188fd40"],["/tj-horse-racing/index.html","a553983b92fe50bc2fedfd0b33887c8c"],["/topoSorting/index.html","1bca623229f977819380154df9f236e7"],["/traffic-monetizationaccess-to-google-adsense/index.html","9c31c9aa9d0300b2779140bc6a7bd0b4"],["/txCharity/index.html","be835a48cd6a69dfab21dc53ccddcb8b"],["/ubuntu-set-ip/index.html","9676f80fc23b2ae98d0750fc579f47f2"],["/undefined/index.html","1988f8e7252fc7d9b6f3979104d0fc82"],["/use-arrays-to-process-batch-data/index.html","3fff055671a77775f7a1ee27a0b38918"],["/use-of-springmvcmodelattribute/index.html","b12fc6ad153f6edfbfba7864d53dad7a"],["/users-create-data-types-themselves/index.html","12aa76f8c8698a2f65f4d4a37ef8e607"],["/visitor-mode/index.html","586d674c7283745333cbf85718c77692"],["/what-is-milk-and-why-is-group-wise/index.html","a62cb395a3683b457cc6b2d4a5cf08e6"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","343a977c7ec30cda53ee2dba0480fbc5"],["/xss-crosssite-scripting-attack/index.html","a49bd5dd74da49648f514e51d79270ba"]];
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
