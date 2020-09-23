# [4.0.0-beta.9](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.8...v4.0.0-beta.9) (2020-09-23)


### Bug Fixes

* remove unused props, use correct prop name ([1c95676](https://github.com/CrystallizeAPI/node-klarna/commit/1c956764958733391d7b25cd281248e934e967f1))

# [4.0.0-beta.8](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.7...v4.0.0-beta.8) (2020-09-23)


### Bug Fixes

* use correct host_uri variable ([f185a89](https://github.com/CrystallizeAPI/node-klarna/commit/f185a891f0a8bf1a5d148593acefae75c40fe270))

# [4.0.0-beta.7](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.6...v4.0.0-beta.7) (2020-09-23)


### Bug Fixes

* prettier lint ([c8adfb8](https://github.com/CrystallizeAPI/node-klarna/commit/c8adfb871275b1abb8a202de4c97c277c21145a3))


### Features

* Added CrystallizeKlarnaHelper class to generate klarnaOrderBody ([4c31808](https://github.com/CrystallizeAPI/node-klarna/commit/4c31808bc78b686b0b414a66061d2f9f7afb71ed))

# [4.0.0-beta.6](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.5...v4.0.0-beta.6) (2020-09-22)


### Bug Fixes

* **ci:** add commitlint step before fetching cached node_modules ([e63b705](https://github.com/CrystallizeAPI/node-klarna/commit/e63b70561b07fabc1a0181f91bc4c157c2c7580e))

# [4.0.0-beta.5](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.4...v4.0.0-beta.5) (2020-09-22)


### Bug Fixes

* **lint:** prettier ([0c77e96](https://github.com/CrystallizeAPI/node-klarna/commit/0c77e96d31301007f1312903012d4d0049fc6f2c))
* add correct capture body interface ([50796cc](https://github.com/CrystallizeAPI/node-klarna/commit/50796ccfd7346606a951af448d62bdd85c787ecf))


### Features

* ordermanagement v1 -> add additional helper functions for orders ([113506a](https://github.com/CrystallizeAPI/node-klarna/commit/113506abd06e119d3fa0cd0305c498e70aa4176a))

# [4.0.0-beta.4](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.3...v4.0.0-beta.4) (2020-09-22)


### Bug Fixes

* **git-hooks:** make sure pre commit hook is working ([75d3523](https://github.com/CrystallizeAPI/node-klarna/commit/75d352366006fcf7b6ba89497bd6fc36c1fb1ef7))


### Features

* ordermanagement v1 -> refunds helper functions added ([c458f8f](https://github.com/CrystallizeAPI/node-klarna/commit/c458f8f3cff99ade46f5ca59457c9fab0d39a201))
* orders -> cancel order function added ([bea9fd6](https://github.com/CrystallizeAPI/node-klarna/commit/bea9fd6f865e1c590ebca9f50c3b139232d7c4de))

# [4.0.0-beta.3](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.2...v4.0.0-beta.3) (2020-09-22)


### Features

* add customer token v1 endpoint helper functions ([0b87176](https://github.com/CrystallizeAPI/node-klarna/commit/0b87176acabc3bf80b1f6c194033165b282ba7ac))
* add ordermanagement v1 endpoint helper functions ([67b824e](https://github.com/CrystallizeAPI/node-klarna/commit/67b824ebec35135719859360aaee42451dc8daa4))

# [4.0.0-beta.2](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2020-09-21)


### Bug Fixes

* correct naming for checkout function ([ae7b065](https://github.com/CrystallizeAPI/node-klarna/commit/ae7b0659193df60c9e048fa273f98499663f0d5a))

# [4.0.0-beta.1](https://github.com/CrystallizeAPI/klarna/compare/v3.3.2...v4.0.0-beta.1) (2020-09-16)


### Bug Fixes

* **ci:** npm_token spell fix ([86ea1a8](https://github.com/CrystallizeAPI/klarna/commit/86ea1a848db619e42488689fc9b7230ce5766bdd))


### Features

* set npm publish irrespective of branches, add npm_token for ci env ([27ea9ae](https://github.com/CrystallizeAPI/klarna/commit/27ea9ae614c2fc9fde29e397ea637e44ac52851a))


### BREAKING CHANGES

* Move to typescript, improved structure for library,
bug fixes and added typings based on klarna api
