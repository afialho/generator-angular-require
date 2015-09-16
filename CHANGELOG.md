<a name="0.4.1"></a>
### 0.4.1 (2014-11-23)

#### Features

* **deps:** updated dependencies ([a0a038ab](https://github.com/aaronallport/generator-angular-require/commit/a0a038abc3f28a46de04c9371b3b1979b1eaa737))

<a name="0.4.0"></a>
## 0.4.0 (2014-11-22)


#### Bug Fixes

* **build:**
  * allow to copy font files from subfolders ([3ebce73e](https://github.com/aaronallport/generator-angular-require/commit/3ebce73e371a23f64aa920461341e873bb3b0772))
  * do not clean git related subfolders of dist ([410563ad](https://github.com/aaronallport/generator-angular-require/commit/410563ad2fd963fb6b94483f63e5d53b6e11f229))
* **gen:** Fix bower.json in generated projects ([4fdec83c](https://github.com/aaronallport/generator-angular-require/commit/4fdec83c1a55929ac9683f3c45cba9240021b2c9))
* **view:** add forward slashes to menu items paths (href attribute) ([323bdaa7](https://github.com/aaronallport/generator-angular-require/commit/323bdaa73eb73c036e041ba48849c2ce83fa812a))


#### Features

* **app:** add ngAria and ngMessages ([371432ff](https://github.com/aaronallport/generator-angular-require/commit/371432fffe0fe7e15619861cce084e32cb73d1ce))


<a name="0.3.3"></a>
### 0.3.3 (2014-10-11)


#### Bug Fixes

* **gen:** replace named function with anonymous ([3eead373](https://github.com/aaronallport/generator-angular-require/commit/3eead37317c800b14335ee7428e1aabdb7c495a3))


<a name="0.3.2"></a>
### 0.3.2 (2014-09-23)


#### Features

* **deps:** updated dependencies ([e4ec7120](https://github.com/aaronallport/generator-angular-require/commit/e4ec7120153f868f924284cd298c373797f6393d))


<a name="0.3.1"></a>
### 0.3.1 (2014-09-18)


#### Bug Fixes

* **build:** no need to ngAnnotate oldieshim ([d9e5035f](https://github.com/aaronallport/generator-angular-require/commit/d9e5035f0e2377f4f2cc652a65c00ab448e4976e))
* **deps:** use latest 1.2.x ng ([58cb74d0](https://github.com/aaronallport/generator-angular-require/commit/58cb74d03c514e3af8f81803cb1b6afc5a51453d))
* **gen:**
  * avoid json3 being injected twice ([5f31d3c9](https://github.com/aaronallport/generator-angular-require/commit/5f31d3c9c65f7446dc8644f044cebf0cda6074f9))
  * wiredep - remove cwd property ([1fa366a4](https://github.com/aaronallport/generator-angular-require/commit/1fa366a4a7c5ae8200a1f0ebd54545c30adcb4d7))


<a name="0.3.0"></a>
## 0.3.0 (2014-09-17)


#### Bug Fixes

* **gen:**
  * Resolved requires and bower reps locations ([10b5a26f](https://github.com/aaronallport/generator-angular-require/commit/10b5a26fde2ef457002b0b815eb799ed219dd76b), closes [#38](https://github.com/aaronallport/generator-angular-require/issues/38))
  * wiredep is looking in the wrong directory for the bower.json file ([f74b8762](https://github.com/aaronallport/generator-angular-require/commit/f74b8762cb8f4de685ce8b8871029b2d3d99c4c8), closes [#42](https://github.com/aaronallport/generator-angular-require/issues/42))
* **test:** updated test directory ([c2b2b94a](https://github.com/aaronallport/generator-angular-require/commit/c2b2b94ad7e5c5195559ffa09e3e61b43341a38f))

#### Features

* **gen:** Generators should generate a .yo-rc.json file ([53cbe025](https://github.com/aaronallport/generator-angular-require/commit/53cbe0258a25eac9c8b31ae2cc9a2abed80ea3a8))

#### Re-factoring

* **gen:** Generator cleanup ([f5740466](https://github.com/aaronallport/generator-angular-require/commit/f57404662e3757ca7ac031285efd32d8287161ba))

<a name="0.2.7"></a>
### 0.2.7 (2014-07-31)


#### Bug Fixes

* **gen:** Run r.js on output from ngAnnotate ([dc379e5a](https://github.com/aaronallport/generator-angular-require/commit/dc379e5adc37321f7a86addb75501943521f413a))

#### Re-factoring

* **gen:** Replace ngmin with ngAnnotate ([080d48abbc](https://github.com/aaronallport/generator-angular-require/commit/080d48abbc0b2c672029817eb7a202209f70972a))

<a name="0.2.6"></a>
### 0.2.6 (2014-07-30)


#### Bug Fixes

* **gen:** remove unneeded dependencies from index.js ([479b7de9](https://github.com/aaronallport/generator-angular-require/commit/479b7de929d14779cad72e68a9f4484143973ed7))


<a name="0.2.5"></a>
### 0.2.5 (2014-07-30)


#### Bug Fixes

* **gen:**
  * simply bower-requirejs deps wiring ([7ae49f40](https://github.com/aaronallport/generator-angular-require/commit/7ae49f40c2190aae1874d06d6bb87c4b0b49973a))
  * Bower dependencies updated correctly on build run ([eaeeaebe](https://github.com/aaronallport/generator-angular-require/commit/eaeeaebe3ca7d214e5db20c9b48ac2b154189ecc))
  * Update bower baseUrl for requirejs options ([09a966ab](https://github.com/aaronallport/generator-angular-require/commit/09a966abc326d01da486ff23964085b27c150083))
  * RequireJS paths config from bower deps ([09ab677e](https://github.com/aaronallport/generator-angular-require/commit/09ab677e67f8fa43cbc109e393b83e33bcbf39d3), closes [#34](https://github.com/aaronallport/generator-angular-require/issues/34))
  * Include requirejs as bower dependency ([f0c5e17b](https://github.com/aaronallport/generator-angular-require/commit/f0c5e17b13b451c3790c0db463dc34daa1a8e4c3))


<a name="0.2.4"></a>
### 0.2.4 (2014-07-22)


#### Bug Fixes

* **app:** Adding in replace task for test-main.js ([445cd829](https://github.com/aaronallport/generator-angular-require/commit/445cd829b70ff6e8edbdea92eee7cc912deb9d71))
* **test:** typo in generated test-main.js ([7733b6ed](https://github.com/aaronallport/generator-angular-require/commit/7733b6ede4d14bee369c601fceb1ed836fae80b0))


<a name="0.2.3"></a>
### 0.2.3 (2014-07-21)


#### Bug Fixes

* **gen:**
  * Update dependencies of generated project ([01a9f5ce](https://github.com/aaronallport/generator-angular-require/commit/01a9f5ce9ab99302699ce8ff4a1f9db2598793ef))


<a name="0.2.2"></a>
### 0.2.2 (2014-07-21)


#### Bug Fixes

* **gen:**
  * bowerRequireJS command to wire up dependencies ([a2452f2d](https://github.com/aaronallport/generator-angular-require/commit/a2452f2dd0a52b93c70040660a2994ff567db0af))


<a name="0.2.1"></a>
### 0.2.1 (2014-07-21)


#### Bug Fixes

* **Gruntfile:** fix usemin bug when using images in css ([3fb6fbf9](https://github.com/aaronallport/generator-angular-require/commit/3fb6fbf9668206728d0b08425e521c0092eb9d0d))
* **app:**
  * update bootstrap-sass font path ([62ed7b98](https://github.com/aaronallport/generator-angular-require/commit/62ed7b98c8668ee9164bc3b7dbb2ecfd29001629))
  * wrap old IE files in a vendor shim ([42a8befc](https://github.com/aaronallport/generator-angular-require/commit/42a8befc3f672d51b45d1bb9badcab147ef83952))
  * fix regex to escape `..` ([29d99200](https://github.com/aaronallport/generator-angular-require/commit/29d99200213ecbefcb494f61ca44830738f0f36e))
  * fix bower path problem ([9076a55d](https://github.com/aaronallport/generator-angular-require/commit/9076a55daca925f6bdd79de647cbe00ef3874647))
  * correct cssmin/concat build-tag paths ([de0c039a](https://github.com/aaronallport/generator-angular-require/commit/de0c039a426abdfe1a10a744d36260de955bf2a8))
  * app is installed at appPath location ([6729db53](https://github.com/aaronallport/generator-angular-require/commit/6729db53beb17035b246071254c9d07c9bfae256))
  * app-suffix should populate to sub-generators ([d6dab9df](https://github.com/aaronallport/generator-angular-require/commit/d6dab9dfdbe0dd05f3fd87229dcb1b9898e4a219))
  * fix Bootstrap font issues ([ea64f28f](https://github.com/aaronallport/generator-angular-require/commit/ea64f28f2cec1fd969c51cc5f8c33bbf3b8d81e9))
  * prevent faulty bowerInstall ignorePath ([b641f417](https://github.com/aaronallport/generator-angular-require/commit/b641f4178bfa1738243518b249ea3219a980f789))
  * Remove redundant bootstrap-sass import ([1b685cf6](https://github.com/aaronallport/generator-angular-require/commit/1b685cf67505d3381d5f5f858fcfebcac9ca5b69))
  * correct adding scripts path to index.html ([da717dd9](https://github.com/aaronallport/generator-angular-require/commit/da717dd95a359d35a6084c10a08043422024f936))
  * change "Twitter Bootstrap" to "Bootstrap" ([d7ef5c29](https://github.com/aaronallport/generator-angular-require/commit/d7ef5c29caa4a4e0c9ad5eddd4ae8a4366a71480))
  * resolved quotes ([7ace1298](https://github.com/aaronallport/generator-angular-require/commit/7ace12988f5a1bd99d99822429ab9cef0a696ee7))
* **build:**
  * use conservativeCollapse for htmlmin ([70c743b8](https://github.com/aaronallport/generator-angular-require/commit/70c743b819a4e0d22b176ee35d757fd2fe8af405))
  * clean subfolders of dist as well ([2b64d0f9](https://github.com/aaronallport/generator-angular-require/commit/2b64d0f9ac23b8cef82a296572df47689c687670))
  * change livereload to use connect options ([11af4678](https://github.com/aaronallport/generator-angular-require/commit/11af4678cd7222b876ddcd7764d89f3865bee44e))
  * add src property to jshint task ([0e08396e](https://github.com/aaronallport/generator-angular-require/commit/0e08396eb490594983c59ab435d31a56590c44b6))
* **dep:** update and correct Bower dependencies ([3cf956fb](https://github.com/aaronallport/generator-angular-require/commit/3cf956fb6bbcbed3eca1155043349f36a5dec217))
* **deps:** Upgrade Bootstrap dependency ([4e6e95b4](https://github.com/aaronallport/generator-angular-require/commit/4e6e95b468297ed4aff87be637fbc7beae140488))
* **docs:** add info about route generator uri option ([e9a9512d](https://github.com/aaronallport/generator-angular-require/commit/e9a9512d6cac09865c200750f809dfc649c20396))
* **gen:**
  * bowerRequireJS command to wire up dependencies ([a2452f2d](https://github.com/aaronallport/generator-angular-require/commit/a2452f2dd0a52b93c70040660a2994ff567db0af))
  * Corrected options object name to bower-requirejs ([ba40517c](https://github.com/aaronallport/generator-angular-require/commit/ba40517c9c43384a97205d6de184f02ab9107c25))
  * Typo in min.'s in generated project ([954371f4](https://github.com/aaronallport/generator-angular-require/commit/954371f40829fe63d7a42277c1f793e8abd4147c))
  * typo in generated Gruntfile ([cd7702ab](https://github.com/aaronallport/generator-angular-require/commit/cd7702ab8cb310c5cc10df360ca0a4db757c48f4))
  * fix service using wrong name ([6287c363](https://github.com/aaronallport/generator-angular-require/commit/6287c3636c4610b6062ca367e5cee14c503b49fa))
  * update wiredep ignore path ([90c98e3e](https://github.com/aaronallport/generator-angular-require/commit/90c98e3ef4f0ee4896d0e0dfe9786eac4a50f1eb))
  * remove font files ([cd6d611a](https://github.com/aaronallport/generator-angular-require/commit/cd6d611a2afa76196abfbee65cc697459af9ef51))
  * skip adding route to app file ([d92218cf](https://github.com/aaronallport/generator-angular-require/commit/d92218cfe6746c0bff0771bafc59a90c3de63dee))
  * Fixing file names and more appPath ([d5a5ca5b](https://github.com/aaronallport/generator-angular-require/commit/d5a5ca5b4c966a5f3ffefc61add5966f958c93f0))
  * fix more appPath, other changes ([f024d326](https://github.com/aaronallport/generator-angular-require/commit/f024d3260d56423ea9ed482383745fda1e0b5459))
  * move test into root folder ([407b197b](https://github.com/aaronallport/generator-angular-require/commit/407b197b8235ad4c4f99898b0a88dcf28ed04d10))
  * update colour logging ([0fb733c1](https://github.com/aaronallport/generator-angular-require/commit/0fb733c1cb60761f8e23676eff311a05f2c65b09))
  * Corrected package.json ([7a4a8292](https://github.com/aaronallport/generator-angular-require/commit/7a4a829201b5810ff65d01173f1e9392189965cd))
  * move images to common generator ([54a86f11](https://github.com/aaronallport/generator-angular-require/commit/54a86f1116aff6221ce44416854c48de36e2fc20))
  * consolidate template files ([91f1ac70](https://github.com/aaronallport/generator-angular-require/commit/91f1ac70a6acc39a18c3cb8ac0d6f7611395012c))
  * do not use console to display messages ([b22f96d0](https://github.com/aaronallport/generator-angular-require/commit/b22f96d04814d3f00f62ff3cca4a3aefe7732cb4))
  * remove chalk references ([f60eb2f1](https://github.com/aaronallport/generator-angular-require/commit/f60eb2f161a3585f1b4a4bafc1b412ce507516c1))
  * correcting Gruntfile typo ([fc03db2f](https://github.com/aaronallport/generator-angular-require/commit/fc03db2f2af579cc940154fecff776f6033c9d29))
* **misc:** correct typo in readme ([bb0d2be4](https://github.com/aaronallport/generator-angular-require/commit/bb0d2be462951c024fa5d00c0e290746276926e5))
* **release:** get rid of circular loop ([04bcc6de](https://github.com/aaronallport/generator-angular-require/commit/04bcc6de0090750ff986edb1ad872a4b7592353a))
* **test:**
  * Fixing hard-coded application path reference ([31a24906](https://github.com/aaronallport/generator-angular-require/commit/31a249066fb0d3eb69376c064bc875667030641d))
  * Correcting spec file names ([fcb0cdfc](https://github.com/aaronallport/generator-angular-require/commit/fcb0cdfcc50a8bc9c6e7e2f1ac373d00b15c4147))
  * remove old Karma testrunner ([362d43ed](https://github.com/aaronallport/generator-angular-require/commit/362d43ed7d4024683760ad8c9171db54fedcc63d))
  * add test for testing loading ([9141cc3b](https://github.com/aaronallport/generator-angular-require/commit/9141cc3bdccc586e6ac999dd62aa822c90891012))
  * fixing incorrect gen call and route spec names ([43585ab4](https://github.com/aaronallport/generator-angular-require/commit/43585ab4d70923f007c437ab215a49c5f7c1ef36))
  * Correcting spec file names ([75be69b7](https://github.com/aaronallport/generator-angular-require/commit/75be69b73f7c0d083487c3c8fa8142919bf06b58))
  * add test for eventual appPath option ([2d3844e7](https://github.com/aaronallport/generator-angular-require/commit/2d3844e7ae74f2d7ff35afc227ed50755b0bd663))
* **tests:**
  * Update karma-require reference ([440e8e62](https://github.com/aaronallport/generator-angular-require/commit/440e8e620acc9d152c84f641ce334dc0e8f20427))
  * Update app name in beforeEach hook ([646b9868](https://github.com/aaronallport/generator-angular-require/commit/646b9868fec7480b53f0f8c756ee929274342606))
  * DRY up more code and update test folders ([f006b886](https://github.com/aaronallport/generator-angular-require/commit/f006b8864b0fb2320c62bc3fccf8a407ff3bd5a0))
  * style and generator updates ([c5f2d772](https://github.com/aaronallport/generator-angular-require/commit/c5f2d77247c176b0e23b986c84a6d2b3e55f190a))


#### Features

* **app:**
  * move bower_components to root folder ([bd36d673](https://github.com/aaronallport/generator-angular-require/commit/bd36d673aa59454c06a44d9046e3ec64ad61abc4))
  * add ngAnimate and ngTouch options ([1d73bee1](https://github.com/aaronallport/generator-angular-require/commit/1d73bee158f38dd59e862ec4e8862e056e24d542))
  * add a second route if ngRoute is chosen ([d2eb4347](https://github.com/aaronallport/generator-angular-require/commit/d2eb4347be1b02dfa341784f010da45a483ef96a))
  * specify uri while generating routes ([3f2a568b](https://github.com/aaronallport/generator-angular-require/commit/3f2a568bb2ef28647f9400144022a723c06182de))
  * add glyphicon to test bootstrap fonts ([d9e4150a](https://github.com/aaronallport/generator-angular-require/commit/d9e4150a6539ea5371fd918232ecc721d0b9742d))
* **build:**
  * replace grunt-bower-install with grunt-wiredep ([11e3215b](https://github.com/aaronallport/generator-angular-require/commit/11e3215b8a982b15e34ef92a7605df96bdb833c5))
  * replace grunt-rev with grunt-filerev ([46d97779](https://github.com/aaronallport/generator-angular-require/commit/46d9777981fef6f50726130bef9d8705952d5ab3))
  * open browser when runnning `serve:dist` ([3a309bb0](https://github.com/aaronallport/generator-angular-require/commit/3a309bb04867dea84733ea99561bc25a4e6f77bd))
  * use bowerInstall on `watch` task ([6b62fac6](https://github.com/aaronallport/generator-angular-require/commit/6b62fac61064223882a7755f757541eefd8422f0))
* **deps:**
  * upgrade AngularJS version ([5256fa09](https://github.com/aaronallport/generator-angular-require/commit/5256fa0963956c10e66c17f0c4823f6b8fe67c3d))
  * use official Sass version of Bootstrap ([1cec1ff9](https://github.com/aaronallport/generator-angular-require/commit/1cec1ff9230767d2ce5a4153d28b74d0d6c34e18), closes [#27](https://github.com/aaronallport/generator-angular-require/issues/27))
  * upgrade AngularJS + addons to 1.2.14 ([1e6f7fac](https://github.com/aaronallport/generator-angular-require/commit/1e6f7fac9b91e741296058d6976281b3a8235269))
  * upgrade to grunt-bower-install 1.0 ([01898f32](https://github.com/aaronallport/generator-angular-require/commit/01898f32ca87f0d2970b0b631b9cc81f0c6e42b3))
* **gen:**
  * allow --appPath option for all generators ([8752d05c](https://github.com/aaronallport/generator-angular-require/commit/8752d05ce04b6d27a2ce1c20063f3b5e7d8357da))
  * add grunt-ngdoc comments ([90f8033a](https://github.com/aaronallport/generator-angular-require/commit/90f8033ab4e5b76962b1fd1c5c20bb864c9b715c))


#### Breaking Changes

* See
https://github.com/yeoman/generator-angular/commit/396a2c04b3aeaaafddf9f
68287208cee7e9e74e9#diff-2018087f584c4398b5c3a23fc0e5f9dbR114
 ([bd36d673](https://github.com/aaronallport/generator-angular-require/commit/bd36d673aa59454c06a44d9046e3ec64ad61abc4))


<a name="0.2.1"></a>
### 0.2.1 (2014-07-21)


#### Bug Fixes

* **gen:**
  * Corrected options object name to bower-requirejs ([ba40517c](https://github.com/aaronallport/generator-angular-require/commit/ba40517c9c43384a97205d6de184f02ab9107c25))
  * Typo in main.js in generated project ([954371f4](https://github.com/aaronallport/generator-angular-require/commit/954371f40829fe63d7a42277c1f793e8abd4147c))
  * Typo in generated Gruntfile ([cd7702ab](https://github.com/aaronallport/generator-angular-require/commit/cd7702ab8cb310c5cc10df360ca0a4db757c48f4))

<a name="0.2.0"></a>
## 0.2.0 (2014-07-17)


#### Bug Fixes

* **Gruntfile:** fix usemin bug when using images in css ([3fb6fbf9](https://github.com/aaronallport/generator-angular-require/commit/3fb6fbf9668206728d0b08425e521c0092eb9d0d))
* **app:**
  * update bootstrap-sass font path ([62ed7b98](https://github.com/aaronallport/generator-angular-require/commit/62ed7b98c8668ee9164bc3b7dbb2ecfd29001629))
  * wrap old IE files in a vendor shim ([42a8befc](https://github.com/aaronallport/generator-angular-require/commit/42a8befc3f672d51b45d1bb9badcab147ef83952))
  * fix regex to escape `..` ([29d99200](https://github.com/aaronallport/generator-angular-require/commit/29d99200213ecbefcb494f61ca44830738f0f36e))
  * fix bower path problem ([9076a55d](https://github.com/aaronallport/generator-angular-require/commit/9076a55daca925f6bdd79de647cbe00ef3874647))
  * correct cssmin/concat build-tag paths ([de0c039a](https://github.com/aaronallport/generator-angular-require/commit/de0c039a426abdfe1a10a744d36260de955bf2a8))
  * app is installed at appPath location ([6729db53](https://github.com/aaronallport/generator-angular-require/commit/6729db53beb17035b246071254c9d07c9bfae256))
  * app-suffix should populate to sub-generators ([d6dab9df](https://github.com/aaronallport/generator-angular-require/commit/d6dab9dfdbe0dd05f3fd87229dcb1b9898e4a219))
  * fix Bootstrap font issues ([ea64f28f](https://github.com/aaronallport/generator-angular-require/commit/ea64f28f2cec1fd969c51cc5f8c33bbf3b8d81e9))
  * prevent faulty bowerInstall ignorePath ([b641f417](https://github.com/aaronallport/generator-angular-require/commit/b641f4178bfa1738243518b249ea3219a980f789))
  * Remove redundant bootstrap-sass import ([1b685cf6](https://github.com/aaronallport/generator-angular-require/commit/1b685cf67505d3381d5f5f858fcfebcac9ca5b69))
  * correct adding scripts path to index.html ([da717dd9](https://github.com/aaronallport/generator-angular-require/commit/da717dd95a359d35a6084c10a08043422024f936))
  * change "Twitter Bootstrap" to "Bootstrap" ([d7ef5c29](https://github.com/aaronallport/generator-angular-require/commit/d7ef5c29caa4a4e0c9ad5eddd4ae8a4366a71480))
  * resolved quotes ([7ace1298](https://github.com/aaronallport/generator-angular-require/commit/7ace12988f5a1bd99d99822429ab9cef0a696ee7))
* **build:**
  * use conservativeCollapse for htmlmin ([70c743b8](https://github.com/aaronallport/generator-angular-require/commit/70c743b819a4e0d22b176ee35d757fd2fe8af405))
  * clean subfolders of dist as well ([2b64d0f9](https://github.com/aaronallport/generator-angular-require/commit/2b64d0f9ac23b8cef82a296572df47689c687670))
  * change livereload to use connect options ([11af4678](https://github.com/aaronallport/generator-angular-require/commit/11af4678cd7222b876ddcd7764d89f3865bee44e))
  * add src property to jshint task ([0e08396e](https://github.com/aaronallport/generator-angular-require/commit/0e08396eb490594983c59ab435d31a56590c44b6))
* **dep:** update and correct Bower dependencies ([3cf956fb](https://github.com/aaronallport/generator-angular-require/commit/3cf956fb6bbcbed3eca1155043349f36a5dec217))
* **deps:** Upgrade Bootstrap dependency ([4e6e95b4](https://github.com/aaronallport/generator-angular-require/commit/4e6e95b468297ed4aff87be637fbc7beae140488))
* **docs:** add info about route generator uri option ([e9a9512d](https://github.com/aaronallport/generator-angular-require/commit/e9a9512d6cac09865c200750f809dfc649c20396))
* **gen:**
  * fix service using wrong name ([6287c363](https://github.com/aaronallport/generator-angular-require/commit/6287c3636c4610b6062ca367e5cee14c503b49fa))
  * update wiredep ignore path ([90c98e3e](https://github.com/aaronallport/generator-angular-require/commit/90c98e3ef4f0ee4896d0e0dfe9786eac4a50f1eb))
  * remove font files ([cd6d611a](https://github.com/aaronallport/generator-angular-require/commit/cd6d611a2afa76196abfbee65cc697459af9ef51))
  * skip adding route to app file ([d92218cf](https://github.com/aaronallport/generator-angular-require/commit/d92218cfe6746c0bff0771bafc59a90c3de63dee))
  * Fixing file names and more appPath ([d5a5ca5b](https://github.com/aaronallport/generator-angular-require/commit/d5a5ca5b4c966a5f3ffefc61add5966f958c93f0))
  * fix more appPath, other changes ([f024d326](https://github.com/aaronallport/generator-angular-require/commit/f024d3260d56423ea9ed482383745fda1e0b5459))
  * move test into root folder ([407b197b](https://github.com/aaronallport/generator-angular-require/commit/407b197b8235ad4c4f99898b0a88dcf28ed04d10))
  * update colour logging ([0fb733c1](https://github.com/aaronallport/generator-angular-require/commit/0fb733c1cb60761f8e23676eff311a05f2c65b09))
  * Corrected package.json ([7a4a8292](https://github.com/aaronallport/generator-angular-require/commit/7a4a829201b5810ff65d01173f1e9392189965cd))
  * move images to common generator ([54a86f11](https://github.com/aaronallport/generator-angular-require/commit/54a86f1116aff6221ce44416854c48de36e2fc20))
  * consolidate template files ([91f1ac70](https://github.com/aaronallport/generator-angular-require/commit/91f1ac70a6acc39a18c3cb8ac0d6f7611395012c))
  * do not use console to display messages ([b22f96d0](https://github.com/aaronallport/generator-angular-require/commit/b22f96d04814d3f00f62ff3cca4a3aefe7732cb4))
  * remove chalk references ([f60eb2f1](https://github.com/aaronallport/generator-angular-require/commit/f60eb2f161a3585f1b4a4bafc1b412ce507516c1))
  * correcting Gruntfile typo ([fc03db2f](https://github.com/aaronallport/generator-angular-require/commit/fc03db2f2af579cc940154fecff776f6033c9d29))
* **misc:** correct typo in readme ([bb0d2be4](https://github.com/aaronallport/generator-angular-require/commit/bb0d2be462951c024fa5d00c0e290746276926e5))
* **release:** get rid of circular loop ([04bcc6de](https://github.com/aaronallport/generator-angular-require/commit/04bcc6de0090750ff986edb1ad872a4b7592353a))
* **test:**
  * Fixing hard-coded application path reference ([31a24906](https://github.com/aaronallport/generator-angular-require/commit/31a249066fb0d3eb69376c064bc875667030641d))
  * Correcting spec file names ([fcb0cdfc](https://github.com/aaronallport/generator-angular-require/commit/fcb0cdfcc50a8bc9c6e7e2f1ac373d00b15c4147))
  * remove old Karma testrunner ([362d43ed](https://github.com/aaronallport/generator-angular-require/commit/362d43ed7d4024683760ad8c9171db54fedcc63d))
  * add test for testing loading ([9141cc3b](https://github.com/aaronallport/generator-angular-require/commit/9141cc3bdccc586e6ac999dd62aa822c90891012))
  * fixing incorrect gen call and route spec names ([43585ab4](https://github.com/aaronallport/generator-angular-require/commit/43585ab4d70923f007c437ab215a49c5f7c1ef36))
  * Correcting spec file names ([75be69b7](https://github.com/aaronallport/generator-angular-require/commit/75be69b73f7c0d083487c3c8fa8142919bf06b58))
  * add test for eventual appPath option ([2d3844e7](https://github.com/aaronallport/generator-angular-require/commit/2d3844e7ae74f2d7ff35afc227ed50755b0bd663))
* **tests:**
  * Update karma-require reference ([440e8e62](https://github.com/aaronallport/generator-angular-require/commit/440e8e620acc9d152c84f641ce334dc0e8f20427))
  * Update app name in beforeEach hook ([646b9868](https://github.com/aaronallport/generator-angular-require/commit/646b9868fec7480b53f0f8c756ee929274342606))
  * DRY up more code and update test folders ([f006b886](https://github.com/aaronallport/generator-angular-require/commit/f006b8864b0fb2320c62bc3fccf8a407ff3bd5a0))
  * style and generator updates ([c5f2d772](https://github.com/aaronallport/generator-angular-require/commit/c5f2d77247c176b0e23b986c84a6d2b3e55f190a))


#### Features

* **app:**
  * move bower_components to root folder ([bd36d673](https://github.com/aaronallport/generator-angular-require/commit/bd36d673aa59454c06a44d9046e3ec64ad61abc4))
  * add ngAnimate and ngTouch options ([1d73bee1](https://github.com/aaronallport/generator-angular-require/commit/1d73bee158f38dd59e862ec4e8862e056e24d542))
  * add a second route if ngRoute is chosen ([d2eb4347](https://github.com/aaronallport/generator-angular-require/commit/d2eb4347be1b02dfa341784f010da45a483ef96a))
  * specify uri while generating routes ([3f2a568b](https://github.com/aaronallport/generator-angular-require/commit/3f2a568bb2ef28647f9400144022a723c06182de))
  * add glyphicon to test bootstrap fonts ([d9e4150a](https://github.com/aaronallport/generator-angular-require/commit/d9e4150a6539ea5371fd918232ecc721d0b9742d))
* **build:**
  * replace grunt-bower-install with grunt-wiredep ([11e3215b](https://github.com/aaronallport/generator-angular-require/commit/11e3215b8a982b15e34ef92a7605df96bdb833c5))
  * replace grunt-rev with grunt-filerev ([46d97779](https://github.com/aaronallport/generator-angular-require/commit/46d9777981fef6f50726130bef9d8705952d5ab3))
  * open browser when runnning `serve:dist` ([3a309bb0](https://github.com/aaronallport/generator-angular-require/commit/3a309bb04867dea84733ea99561bc25a4e6f77bd))
  * use bowerInstall on `watch` task ([6b62fac6](https://github.com/aaronallport/generator-angular-require/commit/6b62fac61064223882a7755f757541eefd8422f0))
* **deps:**
  * upgrade AngularJS version ([5256fa09](https://github.com/aaronallport/generator-angular-require/commit/5256fa0963956c10e66c17f0c4823f6b8fe67c3d))
  * use official Sass version of Bootstrap ([1cec1ff9](https://github.com/aaronallport/generator-angular-require/commit/1cec1ff9230767d2ce5a4153d28b74d0d6c34e18), closes [#27](https://github.com/aaronallport/generator-angular-require/issues/27))
  * upgrade AngularJS + addons to 1.2.14 ([1e6f7fac](https://github.com/aaronallport/generator-angular-require/commit/1e6f7fac9b91e741296058d6976281b3a8235269))
  * upgrade to grunt-bower-install 1.0 ([01898f32](https://github.com/aaronallport/generator-angular-require/commit/01898f32ca87f0d2970b0b631b9cc81f0c6e42b3))
* **gen:**
  * allow --appPath option for all generators ([8752d05c](https://github.com/aaronallport/generator-angular-require/commit/8752d05ce04b6d27a2ce1c20063f3b5e7d8357da))
  * add grunt-ngdoc comments ([90f8033a](https://github.com/aaronallport/generator-angular-require/commit/90f8033ab4e5b76962b1fd1c5c20bb864c9b715c))


#### Breaking Changes

* See
https://github.com/yeoman/generator-angular/commit/396a2c04b3aeaaafddf9f
68287208cee7e9e74e9#diff-2018087f584c4398b5c3a23fc0e5f9dbR114
 ([bd36d673](https://github.com/aaronallport/generator-angular-require/commit/bd36d673aa59454c06a44d9046e3ec64ad61abc4))


<a name="v0.1.13"></a>
### v0.1.13 (2014-04-01)

#### Bug Fixes

* **generator:** r.js dist fix ([0756c4f4](https://github.com/aaronallport/generator-angular-require/commit/0756c4f4718c1374a799fad7420d46905bac7deb))

<a name="v0.1.12"></a>
### v0.1.12 (2014-04-01)

#### Bug Fixes

* **generator:** Update generator-karma-require version dependency ([d4a93743a3](https://github.com/aaronallport/generator-angular-require/commit/d4a93743a340c6f56d329baea45e33debc57d3c7))

<a name="v0.1.11"></a>
### v0.1.11 (2014-03-03)

#### Enhancements

* **app:**
  * Bower dependencies are automatically injected into the bootstrap.js and test-bootstrap.js files ([a652d50dc0](https://github.com/aaronallport/generator-angular-require/commit/a652d50dc0d8188c5b421336d7a46951ee1cc3af))

<a name="v0.1.10"></a>
### v0.1.10 (2014-02-12)

#### Features

* **app:**
  * moved requires compile step down in build order ([676e2bef](https://github.com/aaronallport/generator-angular-require/commit/676e2bef71ef86040ed18058ca3b6fae7f20c7b6))
  * r.js GruntFile configuration ([657f460b](https://github.com/aaronallport/generator-angular-require/commit/657f460bb20815da603441a99b519ab0c9f56e76))
* **deps:**
  * r.js compiler support ([ee7910d4](https://github.com/aaronallport/generator-angular-require/commit/ee7910d44b8e56d994ae266c5425c9109e4c1947))
  * chore(deps): remove grunt uglify ([c8d3b63da5](https://github.com/aaronallport/generator-angular-require/commit/c8d3b63da50601b39ad4f52e953d15022e54277b))

<a name="v0.1.9"></a>
### v0.1.9 (2014-02-06)

#### Enhancements

* **generator:** Automatic dependency injection ([14ea732b71](https://github.com/aaronallport/generator-angular-require/commit/14ea732b71f816ce66f714c0875d854a2f1c590d))

#### Features

* **generator:** removing console message on sub-generator run ([b36f007715](https://github.com/aaronallport/generator-angular-require/commit/b36f0077158f49678cbe5e1fd13c6bada46041ea))
* **generator:** Update devDependencies ([599792a5fc](https://github.com/aaronallport/generator-angular-require/commit/599792a5fcddd3f4aef31765088a99502013b7b1))
* **generator:** Delete npm-debug.log ([88a3a6f471](https://github.com/aaronallport/generator-angular-require/commit/88a3a6f471fd89f72eb423fa5258b77c9ca6a41c))

#### Bug Fixes

* **generator:** require compass only when enabled ([2d492880](https://github.com/aaronallport/generator-angular-require/commit/2d4928809d923debf9619ad19fe7578077c22766))
* **test:** update controller module name ([da66a1ed](https://github.com/aaronallport/generator-angular-require/commit/da66a1edf34712de0f72bde1bd8568bf60b6721e))

<a name="v0.1.8"></a>
### v0.1.8 (2014-02-04)


#### Enhancements

* **generator:**
  * Upgrade version of AngularJS ([b8395ced3d](https://github.com/aaronallport/generator-angular-require/commit/b8395ced3d9d3246eefcdc95a9ad9002567a4ce3))

<a name="v0.1.7"></a>
## v0.1.7 (2014-02-04)

#### Bug Fixes

* **test:**
  * Update test filenames ([d93d450b86](https://github.com/aaronallport/generator-angular-require/commit/d93d450b86f3403aeaef65495425bba19ff7d898))
  * Update generator tests ([2670ec41ee](https://github.com/aaronallport/generator-angular-require/commit/2670ec41eee6e1735771d2c5367ebae86b31e055))


<a name="v0.1.6"></a>
## v0.1.6 (2014-02-04)

Made generator-karma-require a dependency

<a name="v0.1.5"></a>
## v0.1.5 (2014-02-04)

#### Bug Fixes

* **test:**
  * Updated dependences to use generator-karma-require and tokenise test-bootstrap ([88d8ce1fb4](https://github.com/aaronallport/generator-angular-require/commit/88d8ce1fb4436a392dc627a95d0a9f83b2897531))
  * Update service templates for module dependency notation ([0e0f1299a4](https://github.com/aaronallport/generator-angular-require/commit/0e0f1299a47c85edf63f5020e092bc0f512f53ac))
  * RequireJS test bootstrapper ([f54ff62882](https://github.com/aaronallport/generator-angular-require/commit/f54ff62882b1cff361eee9efae77cfaafaf14f78))
  * Update spec templates ([177c93d052](https://github.com/aaronallport/generator-angular-require/commit/177c93d052fb237904ea530df6b135bf851c36f6))
  * Append 'Spec' to spec filenames ([f348079f1b](https://github.com/aaronallport/generator-angular-require/commit/f348079f1be8b939c1f8d692fadcd7a7b7cac2ed))
  * Update templates for module dependency notation ([24285a4dae](https://github.com/aaronallport/generator-angular-require/commit/24285a4dae877fdd290203fc21323ebd288532b3))

<a name="v0.1.4"></a>
## v0.1.4 (2014-01-28)

Bumped version

<a name="v0.1.3"></a>
## v0.1.3 (2014-01-28)

#### Bug Fixes

* **test:**
  * Add Travis-CI badge to readme ([fb023911a6](https://github.com/aaronallport/generator-angular-require/commit/fb023911a656490e282c2de9b613d792a4472754))
  * Fix generator CI tests ([f1ba667c59](https://github.com/aaronallport/generator-angular-require/commit/f1ba667c59a284ab0ce3494df0e1795d79adfdef))

<a name="v0.1.2"></a>
## v0.1.2 (2014-01-27)

#### Bug Fixes

* **app:**
  * Remove auto-addition of generated script files for directives/services/etc to index.html file ([f46637647d](https://github.com/aaronallport/generator-angular-require/commit/f46637647dde88e3428b43b95de6c70de30ee826))

<a name="v0.1.1"></a>
## v0.1.1 (2014-01-26)

Updated package.json contents

<a name="v0.1.0"></a>
## v0.1.0 (2014-01-26)

Initial release of generator-angular-require.
