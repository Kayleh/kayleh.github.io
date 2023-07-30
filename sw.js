/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01Backpack/index.html","dec76fa44e0bf46a36844b1fb44aeebf"],["/404.html","10f28ace015b194704fc126fa9f0e0e5"],["/404/index.html","33025ceec034ae617e94ee175eb0ecca"],["/7-sorting-algorithms/index.html","e86ddc9f96dc59ec76298ecf6d91f73d"],["/AIO-blocking-model/index.html","1ef41466c54b593247921c27815b8562"],["/About-Snowflake-and-Consumption-Degradation/index.html","a7b60bea6d1b417460f9cddeadaa8cff"],["/BIO-blocking-model/index.html","bef03d83a8c63fc68dcd47ebe5437378"],["/Bloom-Filter/index.html","f7bf27e2869b93cc1c8e25e0840d89bc"],["/Boyer–Moore-majority/index.html","ae5decdd440cbe5c4333b0781311576a"],["/C-algorithm/index.html","55caa36a66bd185d9f485c85179d79f6"],["/C-programming/index.html","761ea067c34c068c98ab0aad73aad472"],["/CAS-&-AQS/index.html","98f2eaf85e9ac2ba6bd627eeac1d0e4b"],["/Comparator/index.html","f3206c62244d68abcde087945e4ff6c0"],["/Differential-array/index.html","ce26b941ee4d15258588d9ae491e5edc"],["/Download/index.html","04d195bee52aaff5a0b258512b294440"],["/Front-end-security/index.html","a42ca86fcedd6166528917829964a84a"],["/Good-use-of-pointers/index.html","52e0be14e922c607d50c124fa9793717"],["/Graph-degree/index.html","32d5f94465400b7f6900596c0dad510d"],["/Greedy-Algorithm/index.html","1fd0d27298d4261054fdcd5ff7d5f465"],["/Head-First-Map/index.html","3739bb66277a4812f89698b437a577c1"],["/Head-First-Netty/index.html","24c87c304875be38229b64d15d8eef69"],["/Head-First-Nginx/index.html","86eb3604d308173b72b866543cec204a"],["/Head-first-Spring/index.html","86d95e6d73d9aba1f00475962e0a3f68"],["/IO-model/index.html","7caffb6638fd5f54fa9594be5e34fc12"],["/IO/index.html","492d88e311c033e764f99f249a55f33f"],["/Implement-a-lock-based-on-ReentrantLock/index.html","e706f28c0429f72cf3b62d72bfe1ec52"],["/Improve-Robustness-(1)/index.html","6907c90b86c58ff2299895cacbba5a95"],["/Improve-Robustness-(2)/index.html","6cb333b5138bdf3a5dfac8d24af7d276"],["/Integer/index.html","6975f14f72e76302ffa2dd8bf5d31106"],["/JVM-classloader-and-parent-delegation-mechanism/index.html","e20f8c297cb6531603b1c7f55fd8d256"],["/Java-high-performance-and-high-concurrency-spike-system-10/index.html","327a8fce96183b7f8fc39b7e26648f34"],["/Java-high-performance-and-high-concurrency-spike-system-2/index.html","125c955c305335133d4efb7e7838866d"],["/Java-high-performance-and-high-concurrency-spike-system-3/index.html","0b8f7b4a028262661c7f4d9bf3fe1365"],["/Java-high-performance-and-high-concurrency-spike-system-4/index.html","415a0ddb02b99454386a9c0d2fda58a3"],["/Java-high-performance-and-high-concurrency-spike-system-5/index.html","b6a0b73511c327c6e38d1ce2e23c9c7f"],["/Java-high-performance-and-high-concurrency-spike-system-6/index.html","cc4fdf3ddf124cec3af438d7ef64f444"],["/Java-high-performance-and-high-concurrency-spike-system-7/index.html","5291490fe7443911853f83af7ea153e4"],["/Java-high-performance-and-high-concurrency-spike-system-8/index.html","ebedc53a664f5630a760f37b70f32874"],["/Java-high-performance-and-high-concurrency-spike-system-9/index.html","9f27cd49e8175b5c2e75fb4f73e1ed0a"],["/Java-high-performance-and-high-concurrency-spike-system/index.html","462ff2e06cbbae39b7abd8a0f86c6e0b"],["/Java-network-programming/index.html","35ecbfeca662c1ca0097fc72a719d93a"],["/Large-number-operations/index.html","f0d6aa1b64934f44f072e61350ea4599"],["/MYSQL-MVCC-&-LOCK/index.html","0d018fb39569a7a77c045f90e8ba5a99"],["/MYSQL-uuid-and-page-splitting/index.html","5e239af2606698d5f9c1f29eac531843"],["/Minimum-Spanning-Tree/index.html","40a25a25c94ecdbe1cac8d7638ecff0c"],["/NIO-blocking-model/index.html","772c988d1823838976fca460327dd2f6"],["/Nacos：Configure-MySQL-data-source/index.html","1b443983cace67fdff60a938b00b0235"],["/Native-method/index.html","62eea8273612033ae79d01bc81fc73e9"],["/PriorityQueue/index.html","48e0d8b00a93459012cf3519ab340dbb"],["/Proxy/index.html","e77190df32d123fcf4abd5b73a40d641"],["/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","dae79219e1544bae96902f3b4661070f"],["/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","c15973a047ae3dc584c09ed654857c90"],["/Reservoir-Sampling·/index.html","d01ca1cee195a08beadc3907a86e7bf6"],["/SQL-injection-vulnerability/index.html","0804af754214b262136cbba88187b55a"],["/Sandbox-security-mechanism/index.html","aa501e399133d476bdec894b14c22615"],["/Spring-Cyclic-Ependencies/index.html","5c37cc8d7f8881769ac4efd70b3c3060"],["/SpringBoot-startup-process/index.html","245dce82ff7f89e44a9c20570cd868e2"],["/SpringSecurity/index.html","393dbde25aaf509931988a1b560dad7e"],["/Thread_Pool/index.html","b2bd1502217e2bddfc8f059be5425ba4"],["/Transaction-isolation-level/index.html","fae9ee67568d470010fc87ec9e431c12"],["/Unitest-framework/index.html","c571606a065229e603ceeaeb8df0c8fc"],["/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","e68f0acf8ede514178960a3f8d1c3edc"],["/about/index.html","5eb8f5ed25cbdbf4434768dddf3cda3c"],["/adapter-mode/index.html","58097cdd0ed14fbdce5f6f6c660f1654"],["/adjacency-matrix/index.html","8d2146ef2ce0732567bcee244eb65ded"],["/adjacency-table/index.html","ea65f02059d39077d7ffca5fa5308238"],["/agency-model/index.html","5c73a9bdc4af85affe548dbebd58ec9b"],["/app-test/index.html","fa1650e9a0a0961702f10dd19b65f213"],["/appearance-mode/index.html","48b957a0dc2e425a123e2e5348fe4335"],["/archives/2019/01/index.html","9b6ac27658cb71ac85823c5584cf0d9f"],["/archives/2019/07/index.html","3546b30fc69f9bdbd83781b84b5751bd"],["/archives/2019/10/index.html","2a0018fe0b06868a83a50ffd42e2160f"],["/archives/2019/12/index.html","d85aa2bce42d7b15bf23ca600a571365"],["/archives/2019/index.html","92b5561cec771a6e4e542fedc2084d37"],["/archives/2020/04/index.html","7f0289f3b5740d4418de10117eee6212"],["/archives/2020/05/index.html","6bd174cab66079bf84a17a82632de44a"],["/archives/2020/05/page/2/index.html","90f17a67dbf4c002bad5fd1ee5d18cb3"],["/archives/2020/06/index.html","7f6a90306c1f1c552b4436d038b662d6"],["/archives/2020/06/page/2/index.html","e0a5934175744c1211ecfd88c2172254"],["/archives/2020/06/page/3/index.html","75cf876ab015225afd8655dec06f4f5f"],["/archives/2020/06/page/4/index.html","8bb08ca55d79a4b0671c3e2317dda035"],["/archives/2020/07/index.html","1969c6eb5fde4c09cd84cad81da476f4"],["/archives/2020/07/page/2/index.html","86c87fa553537caf5921d2e1b300c18d"],["/archives/2020/07/page/3/index.html","fdb5177092326dbc0dade60e3cfd8a5a"],["/archives/2020/08/index.html","0d9d4a4381cfc0b57fb261f21d13f195"],["/archives/2020/08/page/2/index.html","440e79cfa2313265f937890cf79c2a30"],["/archives/2020/09/index.html","47fe9ea4d4260233f801e7648b7e1928"],["/archives/2020/09/page/2/index.html","9dd30b4007d979428e61146960bace27"],["/archives/2020/10/index.html","75a47909f8c47c4136502b44e783d4be"],["/archives/2020/10/page/2/index.html","6492bdaa9033b09fdc3e365690445efa"],["/archives/2020/11/index.html","cc444d86bdbffad3f79ad84ceecc2efb"],["/archives/2020/11/page/2/index.html","c41780572faa445e36e20858e4acdd4b"],["/archives/2020/12/index.html","a9041a49e8b93a5c22242de70f153bd4"],["/archives/2020/12/page/2/index.html","462efffb098549d5d75356233adac878"],["/archives/2020/index.html","d8569e95acc598cfbc0eec67e8c6b51a"],["/archives/2020/page/10/index.html","c2d69f11e909b72130c01ba206166d90"],["/archives/2020/page/11/index.html","f5fc6d1f4cf7601203546621c2bff633"],["/archives/2020/page/12/index.html","97354a5663d42bd26647243dc7bf9a17"],["/archives/2020/page/13/index.html","6ee3fe9e4e818e17b44b001335561ca3"],["/archives/2020/page/14/index.html","5843ce6dec25972f4ed77b3ac98c2a1c"],["/archives/2020/page/15/index.html","7b1c65011c1d04243bd5cb7da8e62e0d"],["/archives/2020/page/16/index.html","5b39f47628aea9a095ce6e5de4a38e12"],["/archives/2020/page/2/index.html","7bbff1fa0a6c1f1e9cdd06393d28f658"],["/archives/2020/page/3/index.html","07e63fcf91eb684bcb8769bf28aae0ad"],["/archives/2020/page/4/index.html","2a4b3843945575a3c6e5dca6b30191f2"],["/archives/2020/page/5/index.html","6ba41a51d052b182bb09494cc9c3bc47"],["/archives/2020/page/6/index.html","02d733dab63d9f57a14ebdfbf61c8465"],["/archives/2020/page/7/index.html","ed77117126f750881d93aa5e0485ae51"],["/archives/2020/page/8/index.html","553353960c719b68a62d230aea3a3ca4"],["/archives/2020/page/9/index.html","312c8859d7aba1cb165c40930ee09b90"],["/archives/2021/01/index.html","c98f7b238b521c7749df181943210180"],["/archives/2021/02/index.html","b486308ed069c64a649aa3bde29f799e"],["/archives/2021/03/index.html","2d62986a489d758b73599769fb9bb935"],["/archives/2021/04/index.html","640d9e6ac6504049e86d42d7827bbd4f"],["/archives/2021/04/page/2/index.html","a5cccdcdc56650f5a3dd46383e33f24a"],["/archives/2021/05/index.html","0094e1bfac054335b3b164010dcf7b4c"],["/archives/2021/06/index.html","e30ba9865d834d0f22d9a92c349292a8"],["/archives/2021/07/index.html","b4899c615f3ea6c9d3a914b17d367190"],["/archives/2021/08/index.html","b9f9b63176bdfee0e1eadd8bfe33d540"],["/archives/2021/09/index.html","b1a1eb740ba0d5cda4090a26dd3f8e40"],["/archives/2021/10/index.html","b7a88d6bdab1d81c31c846287b6fe6a0"],["/archives/2021/11/index.html","29ff814c96cfc2f905a51c75cf96a047"],["/archives/2021/12/index.html","d0bbb64aaaae1c51902200770d3b942c"],["/archives/2021/index.html","7161e6187fb8fc76ab76968b982564f7"],["/archives/2021/page/2/index.html","6fb056f24aa012e4ffbbf6575f85e7cd"],["/archives/2021/page/3/index.html","8d2d10cbbd3318ce244eb088b667e74b"],["/archives/2021/page/4/index.html","040c7297a6200ef4da3e90a309118faf"],["/archives/2021/page/5/index.html","9775cda7e5e1ea8ef6d0aaf767ca3be4"],["/archives/2021/page/6/index.html","cb9b69848a5c6176507cfe2542550615"],["/archives/2022/01/index.html","9bf8e8b8c690d6db8bf52b6269e190bd"],["/archives/2022/02/index.html","4c3a10c26d652f8ac62c6ae255de781f"],["/archives/2022/03/index.html","109ff0471382af59a54a27345830b687"],["/archives/2022/04/index.html","1cb5dc9e7e4ad4264a5f1d6e8d30cfad"],["/archives/2022/05/index.html","f910d1c33521721b837986649aabf73b"],["/archives/2022/08/index.html","ae4feb2af91ffbb2697cffea51250ba2"],["/archives/2022/10/index.html","6f4845d3a36262dc79a9ad2401a6082a"],["/archives/2022/11/index.html","247733b9678b3ee349a319b400ac4796"],["/archives/2022/index.html","5b49708597780aa48a66edfb53602b13"],["/archives/2022/page/2/index.html","ff141e56c29966299aed14eee004731d"],["/archives/2023/04/index.html","2dd4f62405197392497863b3a7cc53cd"],["/archives/2023/06/index.html","f870f25f66d2c031fdf14d44d63026fe"],["/archives/2023/07/index.html","f889711de951f9187ff082f0992d1950"],["/archives/2023/index.html","74c8ced3672076e5d18d80feda9713ae"],["/archives/index.html","7efa0939225afb93c3b9db1b412ca592"],["/archives/page/10/index.html","c519da6dadb23bd6c970c216e017bdaa"],["/archives/page/11/index.html","5e910938309feea741c3285a115d8a81"],["/archives/page/12/index.html","0f72e627dd0210af109d974e3003237a"],["/archives/page/13/index.html","e3e4dba53b54c623299c90683a529729"],["/archives/page/14/index.html","bc613db485bd4ebfac1a7bb21ef8edd5"],["/archives/page/15/index.html","054a7f814cc9097cf2412202eb58cd3d"],["/archives/page/16/index.html","97bebb73c9ba2e5986dddb63295d4b0b"],["/archives/page/17/index.html","0395fe2f3688f89f2bd704c3ceec1d68"],["/archives/page/18/index.html","c6efeab96219d59125ece55aca5752ca"],["/archives/page/19/index.html","93794a8f8bbad4767627bc8fbc098673"],["/archives/page/2/index.html","2dc6626016de4533c08c60f29289a9b2"],["/archives/page/20/index.html","6d44dfc3e38e912a3dad7366985605fe"],["/archives/page/21/index.html","905df58a96dddd02d3744131619b6010"],["/archives/page/22/index.html","bdd2b8ee9bc92ff6b39c2f3a0fde414d"],["/archives/page/23/index.html","c4f4ae7cc76976c3d0051754430c3d4a"],["/archives/page/24/index.html","2621912229db1f49cbaf08dcd0cd5231"],["/archives/page/3/index.html","afcee18ac7c02599f94cba110f0a1348"],["/archives/page/4/index.html","38dc468b436912cbcec0e5a39f847bee"],["/archives/page/5/index.html","e78c61fe4f9acc0d763e254281ee00ab"],["/archives/page/6/index.html","873fcb269e12fcde54ac999364d87e51"],["/archives/page/7/index.html","a5bfa6343c862f4dff419939b72110d1"],["/archives/page/8/index.html","b2404ea820c9ab908432567308a6f426"],["/archives/page/9/index.html","cc73eaaa986ab3325c5f96520b7b4162"],["/array/index.html","0de256798607e43e51bc68dbae92f95f"],["/automated-test-katalon/index.html","98b67b41ba002a777b9f677064d513f5"],["/automated-test-selenium/index.html","0351e47a7b3bfc9f540234186168d0a6"],["/back-to-table-query/index.html","8486901fb49e8b132462da181b1bc50d"],["/binary-search-algorithm/index.html","eceb7ce13eeed341c556f4b2c6861f60"],["/binary-sort-tree/index.html","64b709b448d14a303103f105174c50cf"],["/bionioaio/index.html","6ae999344ff8f09422ccd6af61e17409"],["/bridge-mode/index.html","8476043377c6f3db728193a0870547be"],["/builder/index.html","37eb6838aeeea8cdb2f5971fa2d00dc1"],["/bundle.js","f645413e90ee44fe9bf1c5663348dc6b"],["/c-pointer/index.html","a722fbfafb9582a27b00be7c9c1bac85"],["/cache/index.html","cc6c52c1e27974f345507f13121db9a2"],["/categories/C/index.html","8de3daaa206a99ce2ff0d65e6036ca9e"],["/categories/SpringMVC/index.html","7f2427000c93c980323b77511cd73b26"],["/categories/categories.html","b9f8f7bd421e4ddee8179ed63b5c3109"],["/categories/index.html","9e02014e6437b28f961869779fe3ea86"],["/categories/linux/index.html","9ed2cb33fbbea2633eb43649f0e1b2b2"],["/categories/分布式/index.html","e74e3d775be698922c127f463d966664"],["/categories/分布式/page/2/index.html","7ff9aa084b35f5395c326cff8d5eb3c4"],["/categories/设计模式/index.html","ab6988bff8336801eb14896b4879fbcc"],["/categories/设计模式/page/2/index.html","458f8acbfb8c187c9a9597aaef072fb9"],["/categories/高数/index.html","b29133c6627d8845f5533b0636807784"],["/chain-of-responsibility-model/index.html","d36740c46c946cc526e8474de01cda12"],["/charity/index.html","5649dddfc2af731494974dd6de3b5c73"],["/charity/index/img.png","4fb4c49d8d25b082650f3920f858e13d"],["/chinese-and-english-switching/index.html","bfe8982bd41a0ffff4ec409148633f81"],["/ci-cd-continuous-delivery-continuous-integration-github-action-pages/index.html","689cccec629a99c930403ab2eb50c34d"],["/combination-mode/index.html","4d023c73b77e775862deb6a2d2c315bc"],["/command-mode/index.html","19360fc712bc5e86f4e75ecdfb8ea927"],["/common-commands-of-unix/index.html","ae6cb0a317ea59153a86c7c98e17f99a"],["/computer-network/index.html","2a4c1167f50598ba9b4ecbfab7fc1969"],["/concurrency-principle/index.html","01f911b228cdee114c9a9c11e0811f91"],["/continuous/index.html","53a3a346491065f4c481ef0082966838"],["/contract/index.html","37cacd8c5396452ace54a1b4ba9695c3"],["/create/index.html","3dc9887e5f54b6c3d93ada2721a520a0"],["/css/custom_font.css","1c7e5d9ef82b125813a6263cc8b68e1f"],["/css/main.css","0c99b7c2fc6c5ea7308a92acdd0a5e9c"],["/cycle-structure-programming/index.html","45a428922c9f22e7e3e1b0194f52c3ac"],["/data-structures-and-algorithms/index.html","13228c01aa9b6146b0932158458714b3"],["/deb/index.html","391956280d7ecd6e44f6926a9c211883"],["/decorator-mode/index.html","6180ac50aca5b7adc5abf629af325eff"],["/definite-integral/index.html","746761c2b9227f6c78bc3940ddf3148d"],["/dependence-reversal-principle/index.html","cdb9ebb1f53406e69b4c88164ccc7ddd"],["/derivative/index.html","5fb04a5a45929989a2c21f6beb32f94a"],["/design-patterns/index.html","3306ef310479a62e78a50eb74091796e"],["/dic-algorithm/index.html","27a5dfc0332dac86a2ad65dbaa7a0222"],["/differential-equation/index.html","ecee234d3157b5ca6aeefe927581f9cf"],["/differential/index.html","880369d03b15ab3a8e8f74e60c8d96e1"],["/dimits-law/index.html","561a6c64137a7338968826b7584888a1"],["/disjoint-set-union-find-technique-appreciation/img.png","3b180015f1019888938991178f4c1e06"],["/disjoint-set-union-find-technique-appreciation/img_1.png","e3611c71e7cb8a0cb4fa5e35c5f9bd36"],["/disjoint-set-union-find-technique-appreciation/img_2.png","d4bf7b42194d5378a43bd049b7b91da5"],["/disjoint-set-union-find-technique-appreciation/img_3.png","84469c7e0460e93e0590b56729ce340c"],["/disjoint-set-union-find-technique-appreciation/img_4.png","96308c2a7256c532ca38489ca81c1bac"],["/disjoint-set-union-find-technique-appreciation/index.html","1d586ce3b154191bb3f0403403e705e4"],["/distributed-lock/index.html","703093f618526193697460171ea476ec"],["/docker-virtualized-container/index.html","e2511d3e40647248242365bac5bc35dd"],["/double-integral/index.html","7bd1bc24e41f8810c2ce043353f2fcdf"],["/dp-array/index.html","f1feac8d0f2dfd2cf6e7adcf41d3ce90"],["/dynamic-array/index.html","81b33def57dd7825eb9b1452a278202e"],["/dynamic-programming/index.html","b8028a95a89372c6f0a12ae0e299a1e2"],["/edgeset-array/index.html","358c563a37b37c145d058c019b4c0b18"],["/encoding-algorithm/index.html","58f2c137c849098cc2952205f645cb40"],["/eureka-service-registration-and-discovery/index.html","7358c2e6bf7bec1838b26de089f33b1d"],["/extreme-value-and-maximum-value/index.html","8513c786eefd68a2761d91c7a482d0a6"],["/factory-design-pattern/index.html","703e18870525c39a498edf67cfaaf8fc"],["/file-input-and-output/index.html","afe9e460e872d3995c7a021d3c362c32"],["/flyweight-model/index.html","8735337817b14b63ea41834d8baa073e"],["/friends/index.html","677d60de95bbdebd230fc2b63d917d20"],["/function-graphing/index.html","9ed731082d0316179e1b24b4bd962354"],["/gateway-service-current-limit/index.html","483e6cdcb4cccbc2fc7c51c8ffe53ffa"],["/gc/index.html","cc7fd4ddf788810ea8b469d58ef4d4db"],["/generalized-integral/index.html","fe229b85d0a0b1c19e66e506687e33b8"],["/google8102e2f35ce9e391.html","22f019a071993f75a7f0197fc47f7713"],["/gulp-compresses-static-resources/index.html","1d7e5352407ddc2f2f2918869289518a"],["/hash-algorithm/index.html","52e1ab114856e2e4c7fd1032a7b41dd7"],["/head-first-JVM(1)/index.html","940373ffbf39c76b52babcfd66d3c5e8"],["/head-first-JVM(2)/index.html","45acee46bdbba20bddb6d0d0031c224a"],["/head-first-JVM(3)/index.html","798b8752553a242e8fe23efc7e7a6146"],["/head-first-JVM(4)/index.html","17a34f20fe7017110f21a6120ae9aad2"],["/head-first-SpringSecurity/index.html","9297c12278a5a34e2c10b352bd1a990a"],["/head-first-docker/image-20211101172701005.png","12a423c443eb31ff4c043407c01efdc2"],["/head-first-docker/index.html","5527faea7906f6c80d9832bdeeb200cf"],["/heap-sort/index.html","bb67642addfe2652cc8a186f181d5116"],["/http/index.html","6a552d3c836b3160c0bda5b944d9e9c7"],["/huisu-algorithm/index.html","1d30b0a8428cbe5903d6a57c64c26f17"],["/indefinite-integral/index.html","055af9085c04b2cb08f43b67dee5d44b"],["/index.html","02ac03df7ce60556f50036f838bb8a42"],["/infinitesimal-and-infinite/index.html","d7832dd3f279b62b0586dd7befbd1957"],["/interface-isolation-principle/index.html","badec9031a56e1c188f27403238f2396"],["/interface-test/index.html","a9a32ce39f0fd27529ae092280b725a8"],["/intermediary-model/index.html","33ac023cfd9b5d8be16c6cd675e2ac2e"],["/interpolation-search-algorithm/index.html","e41bdcf2c4a9604da5b6bca610702de9"],["/interpreter-mode/index.html","dcc3b2549a8a7114bbeb371beeb57476"],["/introduction-to-computer-network/index.html","cbcd7e2e9bcc9e55156310033b60279b"],["/introduction-to-operating-system/index.html","9c14ff655934fb078074c92263526825"],["/inversion-of-control/index.html","7548f0e41278ffefa2d35fca5ddcb41e"],["/io/index.html","5c8ad276d5a60af2119418f31326e3a6"],["/iterator-mode/index.html","95c5b917c5021306bf73f9ad8eda506c"],["/j2ee/index.html","b97f6311d837c344006be9185e9dd705"],["/j2se/index.html","7133486ecbaf1ce919a556d9dd8cd4c9"],["/java.lang.String/index.html","d14bc10eb50d36a5df958e541e741cf6"],["/jdbc/index.html","2771ade2cd8237b61257fd501a9edc8e"],["/jdk/index.html","689e2057be195f668c08520cef1101f1"],["/jmm-memory-model/index.html","d9488cc0d62245be0c889e4bbaa180ea"],["/js/main.js","f645413e90ee44fe9bf1c5663348dc6b"],["/js/plugins/copycode.js","03954c57e75e51319698c64b230ad0e8"],["/js/plugins/fcircle.js","9ab5a0eec381a424229dcd3874dfbc41"],["/js/plugins/friends.js","620aa6cdb1e049917b1c188e8c705daf"],["/js/plugins/ghinfo.js","e67c85020aec570e1a2d4f85ba7277d5"],["/js/plugins/linkcard.js","c83a5cf6596f9855c49757c7a4d794e6"],["/js/plugins/sites.js","6dcf6f24702997c87c5f387f0664fd8d"],["/js/plugins/timeline.js","b05b93553a1d68400f8901f8a3777cc3"],["/js/plugins/weibo.js","6b40735633b101a8be3522d8c1c628d9"],["/js/search/local-search.js","cd34d0be1f3367c8604076229e11ef12"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/jvm-gc/index.html","b48c31540918ffbfff5c367952dc1c0b"],["/jvm-method-inline/index.html","fbba0bc73d7b68e698f4d93db2e2056b"],["/jvm-tuning-practice/index.html","1749d4357433d16b1a6f5b36bd636c4c"],["/jvm/index.html","df11c4ca9ab70593b347a1b55b760df7"],["/law-of-robida/index.html","ae962a36a38375be199e5f820fb8be0f"],["/limit/index.html","2b2866a5f1b5b6cc0f736535c562857f"],["/linear-search-algorithm/index.html","5c5bd1c92369a42df63d7db824cd9bbc"],["/linked-forward-star/index.html","a4e8707340b1070d6598070f836ee017"],["/linked-list/index.html","459f80a804b5926fd19311effce9f65f"],["/linux/index.html","7d4f6d8cdddfda9a3ee0e5d88171f7f1"],["/liskov-substitution-principle/index.html","0c785807af613f37ba47731fdd4adf38"],["/lock/index.html","19e486c1f10e355b96db6a1b966dbc22"],["/lru-cache/index.html","05063c9c128b7018f6f59eee3d8bbca9"],["/maogai/index.html","4cdabeb3921147437c4331b3ab6af5b7"],["/memo-mode/index.html","ed4a82e950cbf679bfe8d7422457e43e"],["/monotonicity-and-convexity-of-functions/index.html","a00689ff593f04913364e3e6b026116f"],["/more/index.html","edb4bb7e80dd74ca938b3ad909eb3bb6"],["/multi-function/index.html","b09f59296b0624be8963e8baed862c47"],["/multithreading/index.html","9733717e6f34357e68152429f7cd7b6b"],["/mvc/index.html","cbc999373ab29377453ac18b0742e27a"],["/mybatis-cache/index.html","0b4dd65d3810016fc791ed716bb2956c"],["/mybatis/index.html","515351aa6701daf2d2aa23828537cbfc"],["/mysql-index-wrong/index.html","a1318cf062f9baf1f99b48987a08a7aa"],["/mysql-struct/index.html","b76f90f7bb599e930494a802772cf052"],["/mysql/index.html","2d56495defa7238af2ef295b763035a0"],["/nacos-service-registration-and-configuration-center/index.html","f8a6576b67b3af7c5ff33c67b957b0f6"],["/notes/index.html","869bd7a7fef8e5c2a4be03275dfa02b4"],["/null/index.html","ba324d2a2b97cefcc8d9651280088c0e"],["/objectoriented/index.html","fe28bf178f56d5348a88e6008053404c"],["/observer-mode/index.html","ed073dc0b6c51f9348ced550b0d82dd3"],["/off-heap/index.html","0a0748cdccc6beadf79188baeb203896"],["/operating-system/index.html","3670d479754bf339f6272924ffeebd60"],["/page/10/index.html","e67ea9a91d859475d0bd06e1ae21dac5"],["/page/11/index.html","020ba7d6f56b122ef21a9d4227eef5aa"],["/page/12/index.html","8220d82f37b99eea5e36a0aa5a33bef7"],["/page/13/index.html","c57c34a5290baa830960482f224e8e05"],["/page/14/index.html","ad2695489d327594acb1fc178c060fb5"],["/page/15/index.html","0cb8bd0fbd828d5f2dd4eeeb1e47a798"],["/page/16/index.html","3cdc681ad724c27bcb375009a473aa6d"],["/page/17/index.html","6e8ccadc3fba92ded4c67d4e3c4a8e84"],["/page/18/index.html","da4dae8cbbe38820cd728b9e6a2894f2"],["/page/19/index.html","337a924aeaa0a78edba1f15f1095f79d"],["/page/2/index.html","f3fbf3ae6cd504f062c9110aa294aa30"],["/page/20/index.html","c378ab15634967fed9842781ed7d7f45"],["/page/21/index.html","df025cac96b044cf749faff14ec92047"],["/page/22/index.html","97280ffd736f50635879c12945a2d2a4"],["/page/23/index.html","df8250d63de35173f496ca211b80e1a2"],["/page/24/index.html","b8f1919cb8902c56f59f4b68de3d163b"],["/page/3/index.html","137b6cebaf4418b1ce1fce696681dabf"],["/page/4/index.html","84e163181e468b991e315898eb893574"],["/page/5/index.html","18087112adf5d78438c8383cb5e6f525"],["/page/6/index.html","e0e53e1475727b2f51f38d696cdf0c2a"],["/page/7/index.html","1905de55565f4e922542e5aa7ff4a992"],["/page/8/index.html","25d7994b7e359b56eb00471a0c5a9718"],["/page/9/index.html","9fd1b5969f63662af4af2152a344bfe2"],["/palindrome/index.html","0d23ad6415e5f7c2343a59d845efcced"],["/partial-derivative/index.html","4afc10fbf9482ec9a7c6a59b93fbed0b"],["/pass-by-value/index.html","5ef2f9837e1db47ba0a774bc91f7f41e"],["/pictrue-bed/index.html","82eed154f9ad09aff46fad79787154e8"],["/principle-of-opening-and-closing/index.html","43020f5dc520011e5e6ffc2076d32767"],["/principles-of-computer-organization/index.html","3c7548987cb201235b07ebde286130be"],["/program-test/index.html","acd8bbeb31e8d5a4dab521aebb0fe6cc"],["/prototype/index.html","90f2322f206aec707168e3b14923f684"],["/queue/index.html","a5b2b969d684bfa35acc9581b8358007"],["/random-weight-distribution/index.html","1b40b2eaf68a3ed8667bc11b00b27783"],["/realize-modular-programming-with-functions/index.html","708f83a5202aa3968a7a18ef5815abfa"],["/redis/index.html","3dc6993cab018a402aaf1e7334b32975"],["/reflection/index.html","dc1736b66b758d97afc1c1e20d2a6d04"],["/reverse-proxy-jsdelivr-with-cf-workers/index.html","4544cd7a5bb4c3303dd20896e2cf3479"],["/ribbon-load-balancing-service-call-degradation/index.html","dd68a0c18ec9cc40e6082fa6b4e61cb8"],["/round-dp-algorithm/index.html","ddd04d5fd95673a24070ab839862c124"],["/seata-handles-distributed-transactions/index.html","8b015c623210630d438cb562ea939324"],["/select-structure-programming/index.html","c44f27513be7d4ba5f0634a061b65760"],["/sentinel-realizes-fusing-and-current-limiting/index.html","25ff17b8ca50e4c76c8b3d089a9e9b52"],["/sequential-programming/index.html","b32ba8315aec7ebb1733ccd6a60e3dcf"],["/series/index.html","312487b7db480615214553722dccad77"],["/service-worker.js","99af569113e9abd6633dcc974aef29b9"],["/single-point-login/index.html","25f59a0be618b87bf6b86cfa627f9794"],["/single-responsibility-principle/index.html","e7a80464960bbfb35c9ea8e013d53394"],["/singleton-mode/index.html","8f8bfa2ff438f70b71e64dfc75f936f1"],["/slidingWindow/index.html","47dd0cd353073355d041890771ec712e"],["/snowflake-distributed-id-algorithm/index.html","4ed56cdb85c28db158c26f479006b637"],["/sparsearray/index.html","2515671fd9863f8f44ae66d741fa6aef"],["/spring-and-jwt/index.html","8bc93c126f8df83e8b860202c4fd5042"],["/spring-architecture/index.html","0bfd99d2306d8a5369de7bf30c4af996"],["/spring-relate/index.html","1209a81e363fdb7e3a1574fb21bb4a0a"],["/spring-springmvc-mybatis-integration/index.html","47cc30d0865e55d1b1dc40f78808795c"],["/spring/index.html","0af37ccda24b3c48d537b19780c2e4b8"],["/springcloud-alibaba/index.html","00b56c082cd757330b3221bd07d65740"],["/springcloud-bus-message/index.html","468e620e15b1a95d2a20a6f9835005d2"],["/springcloud-config-distributed-configuration-center/index.html","26f1b64910f80b8c7b4a8ab3b8f74c8d"],["/springcloud-sleuth-distributed-request-link-tracking/index.html","5ab661d63863bfc92f756ff4351a3eea"],["/springcloud-stream-message-driver/index.html","4294d9b2da7d6f47d55998d93a0701c3"],["/springcloud/index.html","3ece6970b487e56c61e6a3facf37357b"],["/springmvc-environment-construction/index.html","23318d48ddd118b56b60dac76cdfc4e3"],["/springmvc-work-stream/index.html","fcf4892dcb0d3d405cfc6463ea870501"],["/sql-injection-attacks/index.html","33abc122bbcebe42c9a7369def994f45"],["/stack-simulation-iteration/index.html","52f9afbb2bdc5d323b8de4fad4683167"],["/stack/index.html","e8ed3665b9012997007f45e23f3cb00b"],["/state-mode/index.html","f4f2fcbab9264272af05e4897e5a00a2"],["/steal-focus/1.jpg","446b825d8cfd9b92b0e9cdeaf884fdb8"],["/steal-focus/10.png","34df9accb08a7c171f72367c101c545f"],["/steal-focus/11.png","6ad3c4ad008a5a8e9c9fa3f1a40fe369"],["/steal-focus/12.png","0c3fd4a2174fdcb6d90f5f403d9f93a7"],["/steal-focus/2.jpg","8ce5feca7b1d2f9de724438f0cb0b194"],["/steal-focus/2.png","6773f5806bf5b47856707d3b9e4b498d"],["/steal-focus/3.png","85bc1799b3c2c780326ec9e2e7f8929b"],["/steal-focus/4.png","3200115c8ddff14c7eaad02e133acc2f"],["/steal-focus/5.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/6.png","347f75279c43872425f0675d7b4ba0aa"],["/steal-focus/7.png","18e987097d7a7852dcf87b7eabf58ab9"],["/steal-focus/8.png","9ef9ff2ad8372740d31a44c7d7644c17"],["/steal-focus/9.png","6a5d0488f5f10acdb300e8fc2e550288"],["/steal-focus/index.html","b0e5aed0c63b5d3c4f4004881c5f7f43"],["/strategy-mode/index.html","d7641230a27e1306abc3c050ea1cbd07"],["/sw-register.js","b922929c511f2095cce803185d49098b"],["/synthetic-reuse-principle/index.html","ac348d597454014ea84c8b7d813fea30"],["/tags/C/index.html","6b853d7b0cdce544e03f91451a53cecb"],["/tags/C/page/2/index.html","9b01771fa812d93dd6cafe4d21ba667c"],["/tags/Concurrency/index.html","9297acf6d51bc6f1e9e013328796ca00"],["/tags/DesignPatterns/index.html","87ef30cb7e67bc0f9fff7087174389e2"],["/tags/DesignPatterns/page/2/index.html","a3a90cac9de2eaa551cbc80c0b778aea"],["/tags/DesignPatterns/page/3/index.html","47c36b618f5b79b2875c1ac64a87313b"],["/tags/DistributedMicroservices/index.html","587beea61b03bdf68acae95a81bb49f8"],["/tags/DistributedMicroservices/page/2/index.html","db97b1cc38a85799e9033206b2cd3970"],["/tags/Interview/index.html","fb09a25cc7a07d6f3d98e637a5e96101"],["/tags/Interview/page/2/index.html","f927b0ff1c15bb43368d7adfcf846a36"],["/tags/JVM/index.html","c290fd67848809a4dcc4667425cb4f36"],["/tags/Operating-Systems/index.html","1c916f9296d5a3aef4f0509d29570346"],["/tags/about/index.html","3c8ca052c6bb24633ce4615e9a44c9cd"],["/tags/ad/index.html","959a43cacd04cf5078babdeac0f7daa4"],["/tags/algorithm/index.html","f9bceb933ff3be1802d148e7a4cabe4a"],["/tags/algorithm/page/2/index.html","73a3014acb61131859c09348b2144623"],["/tags/algorithm/page/3/index.html","5a0e015963ebd2800c5e5faf9b49f39c"],["/tags/algorithm/page/4/index.html","a168eb34458422d1c317f140035889c5"],["/tags/algorithm/page/5/index.html","7e5557390a2064846da95c6de7cf9844"],["/tags/bug/index.html","851489cd26a67f449723fcf7c15e2000"],["/tags/computer/index.html","67f6e96e177417c343bc2e65038e5fac"],["/tags/data-structure/index.html","9ff79b5946001a6f9c58cd20b106cd66"],["/tags/docker/index.html","dedac586d6733a7aa1ea4cc42bda9182"],["/tags/famework/index.html","abb35a85f675c690a42cbdf78c103624"],["/tags/frame/index.html","86582d2aa349456a5ac3f3e089f0a0ec"],["/tags/frame/page/2/index.html","01b94a9a8be4dad2cc02a9ef4b4ce939"],["/tags/front/index.html","6bfc8accd4c6fbb0968f7c75a4c5aad1"],["/tags/github/index.html","bbeadc3d114af4b3d13ca3faaf82819e"],["/tags/index.html","089e53e41c0947883690716cac629255"],["/tags/interview/index.html","566d18fc4a3a037ee5c77cb6c41369ae"],["/tags/io/index.html","2a480d67a97e8767850a821afdeefe8e"],["/tags/java/index.html","64c84878a996d0aab5d484e461172b22"],["/tags/jdk/index.html","e3e4b0ee8e1c566ab1fcfed9357aaf94"],["/tags/jvm/index.html","e8b88c77d1b9b5528f8ab31de0fd6b85"],["/tags/jvm/page/2/index.html","e06ad333c0173350109506b2878f2b5b"],["/tags/linux/index.html","551c1cb7d53578f18520bb5045bd43a0"],["/tags/maintain/index.html","628a49b530a38034b417eab9d3a36d93"],["/tags/maogai/index.html","3463da8a08fdab7bb7d3dc5ee4541ef4"],["/tags/math/index.html","5d4eb21201a41ca46e459610147fea1e"],["/tags/math/page/2/index.html","7859f147317a6a8bb8047bb1b1922484"],["/tags/middleware/index.html","4b4d532157f1b8d4cdcd4fc66ae4f65f"],["/tags/mysql/index.html","20672b09d4d591084027f39c0df8b4c4"],["/tags/network/index.html","fd627a3e1b16dbfe51b55a9caea6cb63"],["/tags/project/index.html","b44b7a03728a7a6fa70b38024e88ea04"],["/tags/project/page/2/index.html","17661825874801aa404334076449c7cd"],["/tags/security/index.html","332308e605258b819cf5b6be247cee5a"],["/tags/sql/index.html","41282e5a1109db1b34d5804ea6017666"],["/tags/test/index.html","5e5eea4dba39cdccd98226c5f720a327"],["/tags/think/index.html","326d4e36bfed4c22a976bd92db01677e"],["/tcpip/index.html","613e76654dda855970eedee6430e071a"],["/template-method/index.html","af366f6a26756f16de2d3671ff0ae559"],["/test-case/index.html","4db698f63e9c98869c3c9a663ef79638"],["/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","ba78fd03f7eb15d9c85960926a22d44f"],["/thread/index.html","4f5a49a2f797de12e7c44059b57125c6"],["/tj-horse-racing/index.html","6f71f5725008f4fb481b6d67c01962f3"],["/topoSorting/index.html","114873613769a8347eed2ae5a0c5bc64"],["/traffic-monetizationaccess-to-google-adsense/index.html","ed5503b02a083157c36ad0aec8dd21d7"],["/txCharity/index.html","bea40d06197389b38d50e579e76a3a3a"],["/ubuntu-set-ip/index.html","05f90dd0149704524a7d96a0a42010cd"],["/undefined/index.html","4ed6e4bf7e9b2f92b8a962c07ed6b1f6"],["/use-arrays-to-process-batch-data/index.html","c7a6e31cbad2f21b80e2fed1605e75c4"],["/use-of-springmvcmodelattribute/index.html","d96b07379a3be0d498f20e138ecf39a2"],["/users-create-data-types-themselves/index.html","db08cee0f91ba5778e8afb256be808e4"],["/visitor-mode/index.html","4cd8bb41713fd08eed21b8e2cf67442c"],["/what-is-milk-and-why-is-group-wise/index.html","5586936f1c273a0334a1395e28812c53"],["/wiki/index.html","b2edf64f54cf67736349230a5875f7b0"],["/wiki/tags/知识库/index.html","be87ca6f759c03114cbf0389c3467363"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"],["/xml/index.html","e3745be039f97fb82600ae1d864e790c"],["/xss-crosssite-scripting-attack/index.html","fe8a0a9049cde23970bce9d60be0614e"]];
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
