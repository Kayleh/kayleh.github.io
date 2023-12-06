/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","6c8246719bd346b0b7eee20e3179edac"],["/404.html","e334dc6d50dfa1163d56a18b353e9e36"],["/404/index.html","37edfb9a4d0ca1302ecdf8f60f66e848"],["/7-sorting-algorithms/index.html","fd8f17e26cefee07548009e3bf64dc19"],["/AIO-blocking-model/index.html","994673b4f6ae891ffc7e9b769fffc503"],["/About-Snowflake-and-Consumption-Degradation/index.html","e1a153af2753467ef3496ef49533f793"],["/BIO-blocking-model/index.html","ac0ccf504f4f4bb4d34d2e44cb947bfc"],["/Bloom-Filter/index.html","88472006cfcb3a49527d43f50b019cdd"],["/Boyer–Moore-majority/index.html","05292d5630aec96cdbbe1ef809f1fae2"],["/C-algorithm/index.html","318218dabb2977043da551675e350877"],["/C-programming/index.html","1f863eb749acd91c2c818ea9b3cab6b8"],["/CAS-&-AQS/index.html","7b95be096bba7d59d491b357790e120d"],["/Comparator/index.html","fe6d13d5ba2335ba458078b3387fb435"],["/Differential-array/index.html","dccf14d148f4635d051ca3e4a9268849"],["/Download/index.html","d4cf5a5309d12ae943e40bd8de2eeffd"],["/Front-end-security/index.html","8776e19a50da6b6696d8be6ec2fba5d7"],["/Good-use-of-pointers/index.html","d217771ea0222c852e73ef3dd354bb9c"],["/Graph-degree/index.html","1e740f24fc9891bb9d87877eb104a698"],["/Greedy-Algorithm/index.html","652e8dba426abcef8537409c08241fd3"],["/Head-First-Map/index.html","226c89d30945cd15b1639a7769969a6a"],["/Head-First-Netty/index.html","6601a091d474cea13f14c478d6afb495"],["/Head-First-Nginx/index.html","f94dc24b8e3bf1f824c06845417e9c5e"],["/Head-first-Spring/index.html","32c3ed74b81bc1002fea13f46b9cd23b"],["/IO-model/index.html","7e0f2881d2be586c507babd538bb9364"],["/IO/index.html","4faafa9987820d9a8a58aff616a30d52"],["/Implement-a-lock-based-on-ReentrantLock/index.html","26569df3dd65a110bdb622cef412886b"],["/Improve-Robustness-(1)/index.html","6cd56adc0cfd9b25b46133a0f308ca45"],["/Improve-Robustness-(2)/index.html","49ef7df6fa670c581492505bd0949ca3"],["/Integer/index.html","c7f575e63a4d5d81c76b661f107b67ab"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","80aa2dd9d4f569071cff8a9b61d52aea"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","ed8050b654fe28c8606dd4307ebe8235"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","6b792d0b6388427ee4b397ef339e3e37"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","824359efdb8c3c1625e192cdfeadab00"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","bd9eee919a5d537d6fcf40134f4eb459"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","e4753361a61d9d3f16ee3e7db300d54b"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","d1b275e0cb5eb4d443544bf1f1385c72"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","f8602205fcb9d590fe4952f2134b5146"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","0c520d11c9db3e8b277bc479736c59f8"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","a13833c1165503d00361da418045d380"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","37beff2a99798715785c2bc3943c92e0"],["/Java-network-programming/index.html","ef37b507ad4faf3b6eb9407b1feb753d"],["/Large-number-operations/index.html","b015594b06b3639e2b1bf91628152d29"],["/MYSQL-MVCC-&-LOCK/index.html","9b7ef0e9bf488d3227a0a529fec7acd2"],["/MYSQL-uuid-and-page-splitting/index.html","05a3cf6a97a079bdbd8d17d812188e0f"],["/Minimum-Spanning-Tree/index.html","b70932ac23d78ea8312da00ba97db022"],["/NIO-blocking-model/index.html","5d0c92dc3a2fba078480c52ec2d88d23"],["/Nacos：Configure-MySQL-data-source/index.html","7250702718c85052f660c2d3d40f82a0"],["/Native-method/index.html","02ee787f33218ac4f232ede30905e178"],["/PriorityQueue/index.html","dc0be7822edd616c48b11d2de6d36fd1"],["/Proxy/index.html","17d8dd69c26f272e4faafa5a1320c740"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","3488716e024736d104b55dcff5f0b395"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","b2cdd0e087a61ada23904d8a8a68f9f1"],["/Reservoir-Sampling·/index.html","74fe4ec19c87fcd3689995f94d4caeb9"],["/SQL-injection-vulnerability/index.html","023e27262214cc74ef086e95b0209dcf"],["/Sandbox-security-mechanism/index.html","18886020020067496ee4a5f9363eb918"],["/Spring-Cyclic-Ependencies/index.html","85e5170e2d3f5d3b055fac2ce37c240e"],["/SpringBoot-startup-process/index.html","b84f5ea9f89dd7d60fefebec561bdaf6"],["/SpringSecurity/index.html","f3c9b9c589da47c20a6da696bd1bf366"],["/Thread_Pool/index.html","00e4a8a28ac6e43aa295d6fa9559de3c"],["/Transaction-isolation-level/index.html","0ad3311149711f36a65a3ff48ac1a589"],["/Unitest-framework/index.html","7428b9d4bc6e92260c169a1394054fb1"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","849a01dcacf8f4cb6d4745081360504e"],["/about/index.html","9c8f886dc6a6eaf29f66ab9800242dc6"],["/adapter-mode/index.html","510fb90367ad319c396ceefd135cdf4c"],["/adjacency-matrix/index.html","ba423d45a419c4e5a104d32fce01f5c6"],["/adjacency-table/index.html","f24e72f9c62c175450d0b64e58b4f4f2"],["/agency-model/index.html","4f4af3fc385a128ff2ca9822df78af8d"],["/app-test/index.html","20a223bb07618fc6dadd732a5b1e1bdd"],["/appearance-mode/index.html","9ffed4d083f6a502d1279a0408cd51f1"],["/archives/2019/01/index.html","19799a59a8b58a8836cc8b55c36fa3dc"],["/archives/2019/07/index.html","6cfbb3d2d2605c0dd8e69df400d22df5"],["/archives/2019/10/index.html","8d0af44e23bdfe77d08c778b00a37457"],["/archives/2019/12/index.html","3bb569b5a36c15c4d32478f17984ef5a"],["/archives/2019/index.html","16d03296a0299bd304fc60fc42f035e3"],["/archives/2020/04/index.html","3d465faab5684e1cf2647cba1016fa96"],["/archives/2020/05/index.html","d4525350eba9d689a001b6205b746942"],["/archives/2020/05/page/2/index.html","45578a6e473d47a555513b110161ff61"],["/archives/2020/06/index.html","34b1b267769760d6a7efac04b9a1774f"],["/archives/2020/06/page/2/index.html","86ca76de2a76c76a94d5ece2c9d201ac"],["/archives/2020/06/page/3/index.html","c6abd605ab6a8e3e8666864d64b3da0c"],["/archives/2020/06/page/4/index.html","83da57e429ffd7d13d32f9e03246d21c"],["/archives/2020/07/index.html","4284a08a0d73ebc14c49ea6d21a7bef1"],["/archives/2020/07/page/2/index.html","f52079283f9fdc58408788a703ad220e"],["/archives/2020/07/page/3/index.html","67203f6666a0b16396c618c5083a7458"],["/archives/2020/08/index.html","54b169958914ec4e2d7b971277fab403"],["/archives/2020/08/page/2/index.html","27f870cc38df6086abc902397ccbbc54"],["/archives/2020/09/index.html","0010b845de30090217d108941973d2ac"],["/archives/2020/09/page/2/index.html","bab4c01f30aca0081d595041c563aa01"],["/archives/2020/10/index.html","a4eb18718825696ee631a0cd3ebd61cf"],["/archives/2020/10/page/2/index.html","254f84332a51f9181b5b8401bc27fc00"],["/archives/2020/11/index.html","afa9520175ed189c5a5727aeca9c5a07"],["/archives/2020/11/page/2/index.html","070c43291320b9b11df0a91205c6ce2e"],["/archives/2020/12/index.html","d4577af3676e26ee2c57c175cea822a9"],["/archives/2020/12/page/2/index.html","ead7ff54979358da41c0ceffbef423f6"],["/archives/2020/index.html","d3571d3aa52f189e735c0d74e2e66d71"],["/archives/2020/page/10/index.html","1aae9e935c5fe97b15ac7ba114a41007"],["/archives/2020/page/11/index.html","14779fa68c397454090bf038c14620ac"],["/archives/2020/page/12/index.html","b085dfdd42f11918e3ca2efebb80ce49"],["/archives/2020/page/13/index.html","9cb5b6110cac76570fe72283ca7ac6be"],["/archives/2020/page/14/index.html","915e4411a6e414626a08468993706a7b"],["/archives/2020/page/15/index.html","2517a1bf0266a030afbeaa479a98330c"],["/archives/2020/page/16/index.html","64a1b94a1f212e51f320f43477532450"],["/archives/2020/page/2/index.html","aa25ac1955fd4d6812ae31a5262d61fd"],["/archives/2020/page/3/index.html","0572d979d6273498c5674ce8a18f421d"],["/archives/2020/page/4/index.html","d7c06134f649b3b5e7c8bbe65e47e807"],["/archives/2020/page/5/index.html","a8b11393c31c936b8bc5503533099d95"],["/archives/2020/page/6/index.html","3c105cdfe5f3dda6fa9b1bc352d37b4f"],["/archives/2020/page/7/index.html","5584897d85d6b4eb702262a34bbbe94a"],["/archives/2020/page/8/index.html","334214d6bb07a99711091e6e69d3115d"],["/archives/2020/page/9/index.html","16884e4125c69219660bb6ad06a01496"],["/archives/2021/01/index.html","037ee7bae4171ae43750fb8238322ca1"],["/archives/2021/02/index.html","536d91030437fa16bdcca6bf5667c8d9"],["/archives/2021/03/index.html","08a1daeccc08525b03a167727467ebcf"],["/archives/2021/04/index.html","b40ea4d655f9eb8d71479cb926ba7a21"],["/archives/2021/04/page/2/index.html","cd9911b472dc8ada330a4a21ec675a79"],["/archives/2021/05/index.html","b5ab9c39e61901a712cc7e90695799ee"],["/archives/2021/06/index.html","b4d21f2528099aed8e6f866818719c0e"],["/archives/2021/07/index.html","6ffa271b984198410eaa16ee3ec87b62"],["/archives/2021/08/index.html","c458b7c796703e187a4fa20e21f74fe6"],["/archives/2021/09/index.html","94b04be7554e80ad0d0324f3c36b2fe6"],["/archives/2021/10/index.html","c5f9786e9d5f1cf3d708fa8bca4ede68"],["/archives/2021/11/index.html","a57b25a84ff4268a9dbb65e88faaeff2"],["/archives/2021/12/index.html","e6a6cd7943f8fe7607877dfdfec7508f"],["/archives/2021/index.html","c4b3a729f87f59855e416767c07ca515"],["/archives/2021/page/2/index.html","0da031a0cd39068909bee401bb01cf46"],["/archives/2021/page/3/index.html","9401412da6deb3a21c294533f1af7d0e"],["/archives/2021/page/4/index.html","e440f5a2d86debbf792624caef0ede06"],["/archives/2021/page/5/index.html","a0e01077ac744b5f0fb5651ee881ae1f"],["/archives/2021/page/6/index.html","e9c7df2613a9d6da69d0d088d48e1005"],["/archives/2022/01/index.html","52005f0f68fdda52cfaedea35ea3c0d8"],["/archives/2022/02/index.html","4af9ecf86d511ecebf9f8873e99f02b5"],["/archives/2022/03/index.html","a27882cb36a2ca4051930ef2a34c8c9a"],["/archives/2022/04/index.html","506ee00ac3e2cfb9963b1d4cebf144c1"],["/archives/2022/05/index.html","3f6108f50da8ea0cd86a413ba4292831"],["/archives/2022/08/index.html","aa616147f8bc76f95b9994131d72cc0f"],["/archives/2022/10/index.html","12c54db3d0cd080c1547402b45a854fe"],["/archives/2022/11/index.html","4d4a20bdac94b7056c5e7fcacdaf23e6"],["/archives/2022/index.html","f9fae049d9670955a5935ead0d28a778"],["/archives/2022/page/2/index.html","ec8839ed0081eb88452629ce3c8b8599"],["/archives/2023/04/index.html","0a29fb6b3abb99a58acb2efdcb82c634"],["/archives/2023/06/index.html","6019aee2568541137e61777232f0409c"],["/archives/2023/07/index.html","b8dfc96c6c65a44a78eeb40752a76585"],["/archives/2023/09/index.html","f0bdb06ea000faaa52e999c47e116b7a"],["/archives/2023/10/index.html","277a9e934615442824e20ab479e58daa"],["/archives/2023/11/index.html","85a8416ace925f6d82c4d1a500223cda"],["/archives/2023/index.html","6022b5f886bbbdac4976402adb30a077"],["/archives/2023/page/2/index.html","08c00728b118ad0f1c625b17393b2b3d"],["/archives/index.html","b9b6b1310f4f722b195b49695507bcb0"],["/archives/page/10/index.html","74a56227631ec021b12c1fa8c7db4145"],["/archives/page/11/index.html","6a966943380832392e5d048a3e218c9d"],["/archives/page/12/index.html","66ce9b00f5bf2d71c701ef101c657bdc"],["/archives/page/13/index.html","5f71776b3beb46d1ec02525f26e91e80"],["/archives/page/14/index.html","5f0d43b46c6366d55b1fed70cf66a6fc"],["/archives/page/15/index.html","0fc4e3d98953527489866a93e279a873"],["/archives/page/16/index.html","3e59a62381a057f9b7488093ee854dbd"],["/archives/page/17/index.html","8aec1f7d95515ead283dac46d24c9c47"],["/archives/page/18/index.html","d5cd5f342b0fff7d58d1b23480adc4f0"],["/archives/page/19/index.html","5069493073a1d4196b2c8ca82534718d"],["/archives/page/2/index.html","73272adae98ae2d17120b77bd8855e18"],["/archives/page/20/index.html","1d9e3ba962cda9c37ee71b5dd46428c5"],["/archives/page/21/index.html","952429f60ad7d39a0e4dbbfdf302a472"],["/archives/page/22/index.html","af1a23d7fe9174f999ed6372f553040f"],["/archives/page/23/index.html","b5f3018e036a2e849acf3851e8e8c782"],["/archives/page/24/index.html","d68a14b5668cd3ca7604b8622b16ad9e"],["/archives/page/25/index.html","b44b1c623b773843d2fddecdd4664942"],["/archives/page/3/index.html","091754b4b6a5063e881bf220967a9a16"],["/archives/page/4/index.html","06752fca4ded4677202a80422561e930"],["/archives/page/5/index.html","a84883074f44b556e8a65c96a62e2b2a"],["/archives/page/6/index.html","62c9fcab8fa7626b2e983b8bc7b8747a"],["/archives/page/7/index.html","dd8be125c299aa3d2452c71cb52babf1"],["/archives/page/8/index.html","cb7a483a401d5c43d06f348d58943df2"],["/archives/page/9/index.html","074834b5c7b511d5753bd6067b7a27b5"],["/array/index.html","9f032166e49e40447581069eeff2f459"],["/automated-test-katalon/index.html","16bdf00f48da10c5717cb70f405e5ad8"],["/automated-test-selenium/index.html","21ae3a1c4133db74ca721fb3d2fcc0cf"],["/back-to-table-query/index.html","676d1a87d61103e2eb52826a87c02bc1"],["/binary-search-algorithm/index.html","2ec975d16bbac3de6c3409ec76db7664"],["/binary-sort-tree/index.html","de073ff10e3d61caac47c2d8da32e877"],["/bionioaio/index.html","95055476e57bb1a77f28e1e02f690514"],["/bridge-mode/index.html","d0f17d6e670838ac133944ce8c8c3db2"],["/builder/index.html","2bf976b357f9d93de62b7ba90002eb59"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","b832dcd78fdb73f593f6575a1a0e5455"],["/cache/index.html","c7282b9b29ab474f13f99484d92d4744"],["/calculus-01-function/index.html","f2120bcbd4e54a709b785903fd1beb8a"],["/calculus-02-differential-equations/index.html","e21a22e4dce96ed3981fc18911e85f41"],["/categories/C/index.html","3bf32a9a26602a9e3603858046a797f0"],["/categories/SpringMVC/index.html","66db515a19d08d8bb0548da47614df27"],["/categories/categories.html","757e66bfffcdc45bb4c989ae072b01b9"],["/categories/index.html","0e0226038afda03fbbfb42808beb4abe"],["/categories/linux/index.html","f4c7db96de2e5bb8d5be564919ed34b0"],["/categories/分布式/index.html","58a59ebe8d9e1bccdb783b8f06765a0c"],["/categories/分布式/page/2/index.html","21e6235cd27572eadd0c4e3ecc387a62"],["/categories/设计模式/index.html","3555efb2debdf0e547560c7bffec44db"],["/categories/设计模式/page/2/index.html","fc8545c3759734b0a94700446495b50a"],["/categories/高数/index.html","52ca7e69defd6d4b7920b68b8330c5bf"],["/chain-of-responsibility-model/index.html","6e70a1c87f29723c8d89f892c8a4ab68"],["/charity/index.html","bf02d220d727c4cad54c3047af43b5b9"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","108eab21c0deaf7cd2b202d71fcc7eb3"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","bd1aaceb445e2555465045427a0a78fc"],["/combination-mode/index.html","69051200a59e6cb2b27121032a23699e"],["/command-mode/index.html","26a308163ebab8ba99fee6bb83317ec8"],["/common-commands-of-unix/index.html","e6bc470b969c519cd429b34309678b6a"],["/computer-network/index.html","eb6b19dcea3d17c4ba093b953d2b903a"],["/concurrency-principle/index.html","39204f5bc31e8c1a9f7d2005a7a8f0bb"],["/continuous/index.html","f6374cc8e081ee212c7766114b823f34"],["/contract/index.html","06744fdf1f70036b8a3fcebc278dba61"],["/create/index.html","105c79fed7217fe8ba6c0cd96d310252"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","e5710d27f8c99cc4cbc2937f81868d7e"],["/data-structures-and-algorithms/index.html","6a7f6364fbfa651ca801f1d3c810ae9f"],["/deb/index.html","edc7c55cda67d32624435ad975acb3fc"],["/decorator-mode/index.html","eaf8dee6a6c179f02406f86ca931843e"],["/definite-integral/index.html","7a99e7447b3803d6fb37acc94e56cca0"],["/dependence-reversal-principle/index.html","2a0627b1f84a4370b052d28e310a572a"],["/derivative/index.html","156295d62bc80217b657972e32c0a82e"],["/design-patterns/index.html","02addcb43ade9346c2a1fcb4b68ba4cf"],["/dic-algorithm/index.html","7e815ed5c600191e36044a6a5e6e78d4"],["/differential-equation/index.html","ef447242d23294d249b397ba9519da68"],["/differential/index.html","96aeecd7fb731e19a5f14fc1e10c3d5e"],["/dimits-law/index.html","4abce3ac33a9143ade83a49a995b6584"],["/disjoint-set-union-find-technique-appreciation/img.png","3b180015f1019888938991178f4c1e06"],["/disjoint-set-union-find-technique-appreciation/img_1.png","e3611c71e7cb8a0cb4fa5e35c5f9bd36"],["/disjoint-set-union-find-technique-appreciation/img_2.png","d4bf7b42194d5378a43bd049b7b91da5"],["/disjoint-set-union-find-technique-appreciation/img_3.png","84469c7e0460e93e0590b56729ce340c"],["/disjoint-set-union-find-technique-appreciation/img_4.png","96308c2a7256c532ca38489ca81c1bac"],["/disjoint-set-union-find-technique-appreciation/index.html","4be6cf61e70f389e19283530aedae613"],["/distributed-lock/index.html","5baa97f5718a43c07f64cdf237c36a36"],["/docker-virtualized-container/index.html","8a7cb4dc0cee2515f007c2b65687ee93"],["/double-integral/index.html","0737edd86aef8fe94e2ebe0acdb5b8ec"],["/dp-array/index.html","842179aee47cad0fa44614b2de1c9007"],["/dynamic-array/index.html","caf4a509356a0764f37a54bd49c1cd03"],["/dynamic-programming/index.html","bb146799fbf6ecffe0d05d8ced7fbfcb"],["/edgeset-array/index.html","5784bc6ed7e2a045378254b35dbefe47"],["/encoding-algorithm/index.html","a8c5434429ae9c73b2b36ab6dccea963"],["/eureka-service-registration-and-discovery/index.html","616a9388ab9dbb86cfe0fe967fed5a81"],["/extreme-value-and-maximum-value/index.html","3334f15ae9fa34c25f541ffbb8a5e76c"],["/factory-design-pattern/index.html","ff7cb1f5ffa968ceb9d27c80da385bb4"],["/file-input-and-output/index.html","f4f732f9067007885a86ba24af300d65"],["/flyweight-model/index.html","4a6d70ab3c499e874645dcd023f25723"],["/friends/index.html","13a96f42bcd628efaab98f21f03822a6"],["/function-graphing/index.html","2d1464dd4644fed5fd436c1d8f965f3e"],["/gateway-service-current-limit/index.html","59a61aeeecc0016bc9b224c0c992cec3"],["/gc/index.html","b9975fbd2da0a7d99d77ca565ddd96d1"],["/generalized-integral/index.html","7923957c2c271dd80fa728bdf806ef8f"],["/google8102e2f35ce9e391.html","6682e27adcea83516b6517e389047357"],["/gulp-compresses-static-resources/index.html","3f483fea98715f2a098b0e01337116fa"],["/hash-algorithm/index.html","91b76ea2238f23568337e6e1a191f0a5"],["/head-first-JVM(1)/index.html","d3b45803358a53245056802f56050bc7"],["/head-first-JVM(2)/index.html","e91b6d7651e554dbd7ce2e5989c28acc"],["/head-first-JVM(3)/index.html","9f3a47c1004d2c32b9cb8ae71ce40162"],["/head-first-JVM(4)/index.html","b2be17324841563713baee42749bb995"],["/head-first-SpringSecurity/index.html","1b70a0f189e11c62fa41830c893db0ed"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","f2eb71ea61825380cef730a7900c1f75"],["/heap-sort/index.html","3e5b4b37d64ab17eccf73c508e8d99c5"],["/http/index.html","27301e53dfbd168d81c7d3f41354146e"],["/huisu-algorithm/index.html","358d5646e1949b43873c4f7d0dc4aafa"],["/indefinite-integral/index.html","61e52737da7eec94a91f5d07c16d7a99"],["/index.html","32c584976992d12fcb10524f38c3f897"],["/infinitesimal-and-infinite/index.html","b1ef1670244f9cd84d6a3eafb81be711"],["/interface-isolation-principle/index.html","3d0316558c34f6e8d44d323e107ab18e"],["/interface-test/index.html","189cd29fc98a1c7d0bba8e1e18d93289"],["/intermediary-model/index.html","ad5dab22623d7ab927d5b9e7a4fc2869"],["/interpolation-search-algorithm/index.html","43edbbbfaa2c59b02a610d318bc1e22c"],["/interpreter-mode/index.html","eff0bfec20569257432388722858d8b5"],["/introduction-to-computer-network/index.html","c470d73d546b64638d687f67ad3a45be"],["/introduction-to-operating-system/index.html","0af698567fc10bef949e4424677a78dc"],["/inversion-of-control/index.html","34cf1689df90765ed9fbb82535e7c9aa"],["/io/index.html","d43ebde5b5193d8cc7ee8c92bfb3f6fc"],["/iterator-mode/index.html","b0fe549abbab1494fe87b6f98c78d6f9"],["/j2ee/index.html","fb252277033c612d4c4fd96e8d7bdf9c"],["/j2se/index.html","7794b7ca87caecc7dcb4380f1a9dfb63"],["/java.lang.String/index.html","1ce5e6d65660006bc308fcc6c87b5e8c"],["/jdbc/index.html","708a2ea3e12d9ad004de90182c2b273a"],["/jdk/index.html","58637aaff69b11a13c9e27069925f881"],["/jmm-memory-model/index.html","52adc2b077ac6d4012d21ec4ed9d9b92"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","50716889c4797607ebe761e380360d68"],["/jvm-method-inline/index.html","9c9e295f7e5daa62b20c77b978e4ed85"],["/jvm-tuning-practice/index.html","041951586e9efabd7e050c95adc14ea7"],["/jvm/index.html","e95e5ba9d6bb8b33f7f59d045497c116"],["/law-of-robida/index.html","e02439f1470354f610d0c2b12ad6c06f"],["/limit/index.html","a7b5f6da0b5462e9b377b400c17c0938"],["/linear-algebra/index.html","d1dd9e77f348cb5d8d66a7738b2d6a8b"],["/linear-search-algorithm/index.html","ac031a8ebbb4b904af25d68144874c7f"],["/linked-forward-star/index.html","d0f9d65e19fd1a2f1b65e09571d06fbf"],["/linked-list/index.html","1ac5422ff1d659718e021ab4895964b5"],["/linux/index.html","fe6995dfaaff2969cc17089187c20c57"],["/liskov-substitution-principle/index.html","9db336802fe917270b6725d1b475d0d5"],["/lock/index.html","468299cb2aaa956d7df1c43ad485ec71"],["/lru-cache/index.html","eab33eea2ab5ada9db20afce2b5d6695"],["/memo-mode/index.html","14a6e2d660e8b7df4be44928f925aad0"],["/monotonicity-and-convexity-of-functions/index.html","0a8f95f9b9317b7643b3bc12704c7042"],["/more/index.html","d1f85a3f5317517b63863a3c391f40e4"],["/multi-function/index.html","e2303a0bbdd19f84237aed29f0e96d93"],["/multithreading/index.html","30de63a23d1aaec0f35963f519ff6ab8"],["/mvc/index.html","1851735cba259f29f22ea28aba670dfc"],["/mybatis-cache/index.html","0d6c8c5d8014b137944dade63381f803"],["/mybatis/index.html","87c53d91548d28ab956f75df7af68bca"],["/mysql-index-wrong/index.html","51cae80ab12c25addcd4b204e75c4956"],["/mysql-struct/index.html","2ba48aa1295f553688bab4b5ad5fea31"],["/mysql/index.html","52c122a7140c86a458751de8f26b97b9"],["/nacos-service-registration-and-configuration-center/index.html","044e98e43f83c533d1fe7005ae1e06b0"],["/notes/index.html","bf4dc6a1e843471f8b00cbd8d61e637b"],["/null/index.html","d3444350e67dd4d1d9f975cd6c14acc9"],["/objectoriented/index.html","357dada01102ffeaffefd3cff39d7458"],["/observer-mode/index.html","f1b3405357941982e48473d1567ae1c8"],["/off-heap/index.html","9bf87f65ffffee6e6cecc4d558c9e718"],["/operating-system/index.html","d6c5c6208ee768d96927f06addb01314"],["/page/10/index.html","9fc39fc0383c911d740fdbc52f4529be"],["/page/11/index.html","4febee7db92750f136f1de5d5c36b5c7"],["/page/12/index.html","0b831349a010b081190e3113beb725ba"],["/page/13/index.html","133a9c90fa954adbc8ae055444fccab9"],["/page/14/index.html","5ba79d60a0d4dfd2db7d56959e868e9a"],["/page/15/index.html","947da14b0c5bb6203af393413e73b028"],["/page/16/index.html","5a1727e656d0eb737f5342550711dbe7"],["/page/17/index.html","7712c2ce278a56358005c2bc318b269e"],["/page/18/index.html","51ca00d12841d696fbaa9623c73bf10a"],["/page/19/index.html","3c60c182addee20e7c20d6d5757fcbca"],["/page/2/index.html","5021722853226ec86b5546239a1078ea"],["/page/20/index.html","4cc07896dc6345af148e720c63385921"],["/page/21/index.html","9ab160317cf16662a2c3739d2857a897"],["/page/22/index.html","3b2fd7f296086eb4abc8dccc90db7858"],["/page/23/index.html","e0fa26ae9c902679787ce83d8b3009de"],["/page/24/index.html","2c60e6fe75e8d04971319864011b97d1"],["/page/25/index.html","9e6552b324e08ef9279c4c6ca0161db4"],["/page/3/index.html","b15c7baf321403ae2477af22e05d26b4"],["/page/4/index.html","3e82f6acee1776ae3bd26db9c5317349"],["/page/5/index.html","200fcac9dd7bf01a83cbfee71f630673"],["/page/6/index.html","057bc6f50e33013764385a0b9588f430"],["/page/7/index.html","f9079dfc8aeb09133a1219acdca287f3"],["/page/8/index.html","4a58689ce3ae89f6ce19aac8c025537e"],["/page/9/index.html","578290940fffb11db1daa1cf0aa34460"],["/palindrome/index.html","e59583050d27372205ae209156dbe7c5"],["/partial-derivative/index.html","61c2de360ef9ea5758d25d07033211ab"],["/pass-by-value/index.html","d8986df95ddcc2035419de75fb1f2e06"],["/pictrue-bed/index.html","7faff88955a2b552a4bf9f0033babc4e"],["/principle-of-opening-and-closing/index.html","ff49cda034a752018fa9c6e3bacb0154"],["/principles-of-computer-organization/index.html","e1887c5d3907f8f3302d416065bb07b4"],["/program-test/index.html","15fa846bba1587aaa4b4a8b5d085d1ea"],["/prototype/index.html","1d39cbe323328b7e1b48ba4ed514509f"],["/queue/index.html","45493ddf6ccd692b1370259cd685595b"],["/random-weight-distribution/index.html","fb0cc26931c5ea0cd912ea35342f64a5"],["/realize-modular-programming-with-functions/index.html","a04732ccf68bfee911a54fb91e01e77f"],["/redis/index.html","5b35af027c385b863d8ecc5672600364"],["/reflection/index.html","46982870999f11ab0b10a80de2d4272c"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","dda7a350046fcd63c3d109a9d59e6a32"],["/ribbon-load-balancing-service-call-degradation/index.html","7e43441ece7308784247d67b1b2017ba"],["/round-dp-algorithm/index.html","8ce50d0ccf35a18f032b93c803f4491e"],["/seata-handles-distributed-transactions/index.html","2e15228aa724c61af1dcfc09b6f6ddb5"],["/select-structure-programming/index.html","f2046dc950ea55b14497f2f49a3f2a2c"],["/sentinel-realizes-fusing-and-current-limiting/index.html","1f2bf825441cc2fc55f7646adf227282"],["/sequential-programming/index.html","ae62039a9615e313c73bf2df0a51cec9"],["/series/index.html","59df7e14722e58d95d8a7b7aef1bd75d"],["/service-worker.js","b894a9ff59b8b84571e5885bd2efa27f"],["/shortest-path-algorithm-Bellman–Ford/index.html","2ec4752005718f9b271c75b59e844086"],["/shortest-path-algorithm-Dijkstra/index.html","98e2e2eeed5d1a477d8577d3fe56052f"],["/shortest-path-algorithm-Floyd/index.html","d503c71b387ea67cfdc32e0f6251df2e"],["/single-point-login/index.html","446ededd0f19da7dfc316b3e35a4ee11"],["/single-responsibility-principle/index.html","600418841520979a7dea48542449794e"],["/singleton-mode/index.html","6b398a153c14a4b7e0e50cac3b810484"],["/slidingWindow/index.html","e6e763875720150809c4c226014fea5f"],["/snowflake-distributed-id-algorithm/index.html","67842255769b104019835a2856ea3acc"],["/sparsearray/index.html","2b4a67d03dacad64a41645d2247dbdab"],["/spring-and-jwt/index.html","c9544925df57942fc5dacf0950d0bf4f"],["/spring-architecture/index.html","d5aba88353528d22d0563bcfc1cf5a5a"],["/spring-relate/index.html","37228ee9aa38c3b4d4f7d84dd34e5ab5"],["/spring-springmvc-mybatis-integration/index.html","5f15e90200300b6406effdbf5d71c2c9"],["/spring/index.html","d335ccad85c7f23df27baf1ea15acbae"],["/springcloud-alibaba/index.html","656e9356a5f9765cff873a4f37510db8"],["/springcloud-bus-message/index.html","35a7cb712900c6198957fae6804ed533"],["/springcloud-config-distributed-configuration-center/index.html","fcb6949070711b7ea487dd5e1b10656d"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","85b1148d1e34e9ea3cdc17cf8f463a1c"],["/springcloud-stream-message-driver/index.html","fce07d647d7a85dc4117f69190b56dd2"],["/springcloud/index.html","e1b5c7516cc3f4e45378d65230dfdaa0"],["/springmvc-environment-construction/index.html","be44fa375bf42e084456d63acea5d824"],["/springmvc-work-stream/index.html","e4d62bd2b687f6f62299f1b45aa830e7"],["/sql-injection-attacks/index.html","30a8fe9ddbbcbfc6a65e7a7ca29a7a89"],["/stack-simulation-iteration/index.html","02dc946cfc80ff9b32dc72ab06a7320d"],["/stack/index.html","1d9a7b31d7dbb1f7e68cdb498740ecf3"],["/state-mode/index.html","76ec788bc91bcd9b567c88990ded0be6"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","eecc1b98485787e8e1b969e0ef226e84"],["/strategy-mode/index.html","1d4284fbf9c48cb7b4b7ef86f4576f79"],["/sw-register.js","bf5ef2c6942d466c0caa6f2b45366bc5"],["/synthetic-reuse-principle/index.html","7ce4ee5428f658a4ae6a44800ae8ed31"],["/tags/C/index.html","0ac48e691d7a58fa38cbd9d8cfa3aaa8"],["/tags/C/page/2/index.html","7b7d21731bc062704c77772b11c56d92"],["/tags/Concurrency/index.html","b94908c70f2d4a9fc3650b548fa4ae7b"],["/tags/DesignPatterns/index.html","8a91b2aa84c761d6bf921b12e2ea494a"],["/tags/DesignPatterns/page/2/index.html","a60054729708209410bcc5b865a980ee"],["/tags/DesignPatterns/page/3/index.html","6d0e91e81cc1cf01e1363fd70b0f4c2d"],["/tags/DistributedMicroservices/index.html","4e55d0a62ef81f321140dcc4c951c4da"],["/tags/DistributedMicroservices/page/2/index.html","d28f433c6efbe69cb51357f68a3e470e"],["/tags/Interview/index.html","44643400486643fcb6532e34636807c1"],["/tags/Interview/page/2/index.html","cf0039332c0e78e7b0f367076071f659"],["/tags/JVM/index.html","886038eec413d2311740d96dca0cee13"],["/tags/Operating-Systems/index.html","5f87fabaa990964e65fb70f189b0a5ed"],["/tags/about/index.html","3a01a38e671bd6257f04a471379692f6"],["/tags/ad/index.html","47f119c697a2968a3e43a9ebfa057290"],["/tags/algorithm/index.html","62a1b28720a1bc950d9e1f1c00e8b50e"],["/tags/algorithm/page/2/index.html","30211eedba94640cfcd48be7770605ba"],["/tags/algorithm/page/3/index.html","1b5d0db06b8a1b4be0ae94718c45de26"],["/tags/algorithm/page/4/index.html","fe13777a42be416d960aeabae57bde15"],["/tags/algorithm/page/5/index.html","c05d847784a0513de6c80bb847601f08"],["/tags/bug/index.html","237b010fc7b1b65a2e8b279a51e50052"],["/tags/computer/index.html","e65c4dcb0b70db2850ad47777ec58c5a"],["/tags/data-structure/index.html","396f764425909cf83f322110ae0aaf25"],["/tags/docker/index.html","e9beb1ec80ec2094d0fdf302bc457d71"],["/tags/frame/index.html","6a981c08202043c599e25b2b229886ae"],["/tags/frame/page/2/index.html","41b4f6e264c734515c47624a7ec86b88"],["/tags/framework/index.html","b70cd57b4883cc8d3ca9ff3d1823aa29"],["/tags/front/index.html","88807cf178b0d55a2508708d66fffb47"],["/tags/github/index.html","88ff314d02d7f186619a50f8e981c32c"],["/tags/index.html","b54586938b606b88b7c2a10a74811fcb"],["/tags/interview/index.html","2ee9288f3298b2557f5cdd6db8b357e6"],["/tags/io/index.html","aaad8d6ca60999e5e8503e3c5e22eb5b"],["/tags/java/index.html","ed600a3ecd54d79758bb02813d4cd95f"],["/tags/jdk/index.html","2e98ebbc05c75118a64e1ad5024ccc4b"],["/tags/jvm/index.html","001cbd67d2343fda622b8b2683d3c74e"],["/tags/jvm/page/2/index.html","0942b66339391452efcef398565f7039"],["/tags/linux/index.html","d345e50be50d1eb20c4a1faf809d8d71"],["/tags/maintain/index.html","f06dd4b26aa105dcc1f3109a154ff88d"],["/tags/math/index.html","82814eec6cbabe49573db8d9be8dc641"],["/tags/math/page/2/index.html","62dd6af552ccf0f28c7cf83ab5b031dd"],["/tags/middleware/index.html","ea22b89afc52722d6fef1220f19fca04"],["/tags/network/index.html","dbbb66fc0db61866112af1d215bfd207"],["/tags/network/page/2/index.html","8bf8728081835efa999906c9538841d7"],["/tags/project/index.html","a5b601c03044526ed73b1e70a28e4bd0"],["/tags/project/page/2/index.html","56031f90babcf13b29c18f27c79dee94"],["/tags/security/index.html","aa7bcbdb367e5eae815fc8dbe673b0b0"],["/tags/sql/index.html","dd91c3210dc1acdd7dea0a40fa217c56"],["/tags/test/index.html","57afbd51321bd89a4bc5a0b882cbe1e7"],["/tags/think/index.html","8f1d33ea4c013f488874656b577b71ae"],["/tailscale-ssh-remote-connection/index.html","d600f8d7fadb346050896324d0a5d83f"],["/tcpip/index.html","a7aa0e8cb375dacb39bfb0ba53969fdf"],["/template-method/index.html","546ccbdf2e2f0cde1e788b530f0ca4b4"],["/test-case/index.html","8cd3f83fbe15eeb34f3b120f88fc67f8"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","b5ef53451180661e4f9a5f712c7b841f"],["/thread/index.html","1803faa40d49a08ce244292c3ee0e38c"],["/tj-horse-racing/index.html","d1c361b2fc5a43b1e6d8a41ab0a9f201"],["/topoSorting/index.html","ea8b23651723f8dea17c4fefd8abb741"],["/traffic-monetizationaccess-to-google-adsense/index.html","5373207c8ffe2b4325478f19506071f3"],["/txCharity/index.html","2d0609b5ec66eb491f8f65c2c9d3d0ca"],["/ubuntu-set-ip/index.html","b3e8eae903b4ae83665b44b1e163e8c6"],["/undefined/index.html","955027076e75b6702a1577277312d39e"],["/use-arrays-to-process-batch-data/index.html","fc979a173b830ac9820cc77e3be54d18"],["/use-of-springmvcmodelattribute/index.html","7378d48d817a865583863718f678e0a0"],["/users-create-data-types-themselves/index.html","430a5760e14eeaca67c309be744414ed"],["/visitor-mode/index.html","e18f33e9d560399bb364250f335a13c4"],["/what-is-milk-and-why-is-group-wise/index.html","d295ecb5bc50a881a0e3aeaff0ea6fdb"],["/wiki/index.html","dd81d78fa30fea8af78c4e8b07b059c8"],["/wiki/tags/知识库/index.html","ca293dd0e1dc5c2cd1e4221113752dcc"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","decf2882cf300f1ea86d34cc4d035590"],["/xss-crosssite-scripting-attack/index.html","64c5952e1288d53a59c1d519706e3427"]];
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
