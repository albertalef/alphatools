## [1.2.2](https://github.com/albertalef/alphatools/compare/v1.2.1...v1.2.2) (2023-03-07)


### Bug Fixes

* **BotInstance:** fix counter and "errors" bugs ([8f1259c](https://github.com/albertalef/alphatools/commit/8f1259c5dca890674d8682bd09f98d6f2371a15a))

## [1.2.1](https://github.com/albertalef/alphatools/compare/v1.2.0...v1.2.1) (2023-02-27)


### Bug Fixes

* **BotInstance:** fix error: '>' not supported between instance of 'dict' and 'float' ([1f3a42d](https://github.com/albertalef/alphatools/commit/1f3a42d10ec3f74bd59ae58655118e533ca0ce0e))
* **PrivateConfigService:** fix app using privates files from folders outside the app folder ([76c9cde](https://github.com/albertalef/alphatools/commit/76c9cdea1ff1a294196b8ecc737fcde19e9ef3a9))

# [1.2.0](https://github.com/albertalef/alphatools/compare/v1.1.0...v1.2.0) (2023-02-26)


### Bug Fixes

* **AutoBidPage:** change min value to price limit to 0 ([4d8bcd4](https://github.com/albertalef/alphatools/commit/4d8bcd407ed8ed452ed2afa47e8ab60160bbb7a3))
* **BotInstance:** fix offers error, 'press Enter to exit:' and bid collections with no bids ([5fb6c1c](https://github.com/albertalef/alphatools/commit/5fb6c1c426b586feb151227f4cbadc9d58b335cb))


### Features

* **InputField:** add wheel event without selected ([78eaa66](https://github.com/albertalef/alphatools/commit/78eaa66d59cb552c480bd5bd03fe86f78ecdda28))

# [1.1.0](https://github.com/albertalef/alphatools/compare/v1.0.1...v1.1.0) (2023-02-18)


### Bug Fixes

* **AutoBidPage:** change the maximum fractional digits to 5 instead 4 ([03dfc7c](https://github.com/albertalef/alphatools/commit/03dfc7c2899161d02b7c888d32b88a6195fe3416))
* **InputField.tsx:** disable user select label ([243b0fc](https://github.com/albertalef/alphatools/commit/243b0fc514ca79098842379ca057f1dfb4553687))


### Features

* add color when select text ([4de24c3](https://github.com/albertalef/alphatools/commit/4de24c37f406f3a1aa529b4cf11195f79814fef8))

## [1.0.1](https://github.com/albertalef/alphatools/compare/v1.0.0...v1.0.1) (2023-02-16)


### Bug Fixes

* remove needless dependency for secury ([14eaeb8](https://github.com/albertalef/alphatools/commit/14eaeb8f4aceb76b124b247841a761bfa0160918))

# 1.0.0 (2023-02-15)


### Bug Fixes

* **AutoBidInputForm:** Fix bad setError in slug ([73762ed](https://github.com/albertalef/alphatools/commit/73762ed1ef10ab77a4ae36c8eee3871a130b2f30))
* **AutoBidInputForm:** Fix not showing previous data ([93d9161](https://github.com/albertalef/alphatools/commit/93d9161d22c057a75320b9ee8fae9765e8f3a094))
* **AutoBidInputForm:** Fix wrong priceLimit min value ([ed5e1ff](https://github.com/albertalef/alphatools/commit/ed5e1ff1e17a1b2bf6eed134211b0990c5d65aa7))
* **AutoBidStore:** Fix not found autoBidSlices files ([a93abd6](https://github.com/albertalef/alphatools/commit/a93abd659f522aa5145db49f57d6152d46945694))
* **Bot:** add auto create private.py ([90d6313](https://github.com/albertalef/alphatools/commit/90d6313f60bd9b211d551bc1627c66d744851573))
* **BotFile:** Fix bad logs ([f137227](https://github.com/albertalef/alphatools/commit/f13722717a956664ed7c701256dd2abb063fc523))
* Fix publish.yml ([dce562c](https://github.com/albertalef/alphatools/commit/dce562c82768a9d7421dfdcfcbee65442d2bced4))
* force release ([7661199](https://github.com/albertalef/alphatools/commit/7661199308b47442cd461d75f20ccda5f97359a7))
* **publish.yml:** Add GH_TOKEN ([f409164](https://github.com/albertalef/alphatools/commit/f409164cb27bd996c650e584c0b2a39b6fe9d1a2))
* **publish.yml:** Change upload artifact version ([b50ae25](https://github.com/albertalef/alphatools/commit/b50ae2565662323163eb7929b41c387d85ed053d))
* **publish.yml:** Try fix error when upload to release ([1de8398](https://github.com/albertalef/alphatools/commit/1de8398bff403bb08f1bcbc186ece742b332fa75))
* **ReduxStore:** Fix slices functions importing after App ([2d8eef3](https://github.com/albertalef/alphatools/commit/2d8eef32ca29e79e427e786e8fa4a5e1e92a011a))
* **SideScreen:** Fixes not dynamic instances count ([#3](https://github.com/albertalef/alphatools/issues/3)) ([48055cb](https://github.com/albertalef/alphatools/commit/48055cba1ff5a4e3f019ce4c064b8eb49c5d6e39))
* **SideScreen:** Remove Trait Bid Button ([ad703c4](https://github.com/albertalef/alphatools/commit/ad703c48099cc75a3f850904965fe0974b586024))


### Features

* Add bot private file to gitignore ([66bcf77](https://github.com/albertalef/alphatools/commit/66bcf77aef2832cb912160ce0649d03f79df0f20))
* Add CI file to project ([#1](https://github.com/albertalef/alphatools/issues/1)) ([e8de933](https://github.com/albertalef/alphatools/commit/e8de933e6ded3e27f2e99fb6f4798987a4cbb5cb))
* Add new Bot resource ([#2](https://github.com/albertalef/alphatools/issues/2)) ([77c794d](https://github.com/albertalef/alphatools/commit/77c794d856af5c61a4ef2732716693349e5e2520))
* **AutoBid Page:** Create AutoBid Page ([3ff3211](https://github.com/albertalef/alphatools/commit/3ff3211b9005f5742fd54102c970e08574d6d610))
* **AutoBidInputForm:** Add animation when loading slug data ([bbe57fb](https://github.com/albertalef/alphatools/commit/bbe57fb06d167c9993992a0a13ce73008b9123a6))
* **OpenSeaApiHandler:** Add return types to methods ([e1f7203](https://github.com/albertalef/alphatools/commit/e1f72034eec6a75bde5f5e1aab1c99f87dbf0acc))
* **package.json:** Add publish script ([ec54794](https://github.com/albertalef/alphatools/commit/ec547942e6e475028b6c1732b71783e844b8dd8b))
* Remove private file for security ([a5ce246](https://github.com/albertalef/alphatools/commit/a5ce246aa7ede1aff7e49e2557ee92d131365a65))


### Performance Improvements

* **AutoBidInputForm:** Refactor code using React Hook Form API ([523e48c](https://github.com/albertalef/alphatools/commit/523e48c610da39e8b07f04b61f863d5a49438a84))

## [1.0.2](https://github.com/albertalef/alphatools/compare/v1.0.1...v1.0.2) (2023-02-15)


### Bug Fixes

* force release ([7661199](https://github.com/albertalef/alphatools/commit/7661199308b47442cd461d75f20ccda5f97359a7))

## [1.0.1](https://github.com/albertalef/alphatools/compare/v1.0.0...v1.0.1) (2023-02-15)


### Bug Fixes

* **Bot:** add auto create private.py ([90d6313](https://github.com/albertalef/alphatools/commit/90d6313f60bd9b211d551bc1627c66d744851573))
