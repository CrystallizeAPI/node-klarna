# [4.9.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.8.1...v4.9.0) (2021-08-23)


### Features

* updated packages ([27c87ae](https://github.com/CrystallizeAPI/node-klarna/commit/27c87ae6ea8b127c18afc7797066963c3be8421b))

## [4.8.1](https://github.com/CrystallizeAPI/node-klarna/compare/v4.8.0...v4.8.1) (2021-08-23)


### Bug Fixes

* add merchant references to order types ([a38220a](https://github.com/CrystallizeAPI/node-klarna/commit/a38220a10b3272a36f253782caae1d5d25287e36))
* add selected shipping to get order type ([8abc0f0](https://github.com/CrystallizeAPI/node-klarna/commit/8abc0f03a53243ded37f466d52f16c5ce7296d6f))

# [4.8.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.7.1...v4.8.0) (2021-01-07)


### Features

* also consider *isSubscriptionOnly* prop when converting crystallizeLineItem to klarnaLineItem ([cc64243](https://github.com/CrystallizeAPI/node-klarna/commit/cc642432df4b4cc49b361a954072ee603424f5f6))

## [4.7.1](https://github.com/CrystallizeAPI/node-klarna/compare/v4.7.0...v4.7.1) (2021-01-07)


### Bug Fixes

* convert address interface types to optional (as per klarna docs) ([e987a0c](https://github.com/CrystallizeAPI/node-klarna/commit/e987a0c6c06a034663e1e6784830a1dd06a1b57d))
* revert unecessary property ([dcb88d4](https://github.com/CrystallizeAPI/node-klarna/commit/dcb88d492a2849cbf79032f1886116114b299ab4))

# [4.7.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.6.4...v4.7.0) (2020-12-04)


### Features

* add ordermanagementv1 get order function ([96b4e1e](https://github.com/CrystallizeAPI/node-klarna/commit/96b4e1efebcf52189352485f90d3b27eff495dd8))

## [4.6.4](https://github.com/CrystallizeAPI/node-klarna/compare/v4.6.3...v4.6.4) (2020-10-28)


### Bug Fixes

* add more types for crystallizeLineItem ([1168c8d](https://github.com/CrystallizeAPI/node-klarna/commit/1168c8d0d08fbe1d0c0b95887be397e25349e76e))

## [4.6.3](https://github.com/CrystallizeAPI/node-klarna/compare/v4.6.2...v4.6.3) (2020-10-23)


### Bug Fixes

* null check ([df07181](https://github.com/CrystallizeAPI/node-klarna/commit/df071812c0a10cb94438f8a6f5017474006b5ec2))

## [4.6.2](https://github.com/CrystallizeAPI/node-klarna/compare/v4.6.1...v4.6.2) (2020-10-01)


### Bug Fixes

* **crystallize-helpers:** add shipping option field & types when generating orderbody ([ef4c087](https://github.com/CrystallizeAPI/node-klarna/commit/ef4c08738c7efae7f91eeb3e123311f4672e2dc3))

## [4.6.1](https://github.com/CrystallizeAPI/node-klarna/compare/v4.6.0...v4.6.1) (2020-10-01)


### Bug Fixes

* use correct types for customerTokenV1 recurring order ([8fba733](https://github.com/CrystallizeAPI/node-klarna/commit/8fba733f9826475f704af9a54f652e08aa4de8c4))

# [4.6.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.5.0...v4.6.0) (2020-10-01)


### Features

* **crystallize-helpers:** indicate if product is a subscription in klarna merchant_data ([9ca7778](https://github.com/CrystallizeAPI/node-klarna/commit/9ca77780bdf201c3fbdfa26e457f650dafcdd29e))

# [4.5.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.4.0...v4.5.0) (2020-10-01)


### Bug Fixes

* added types must be optional ([7717b9c](https://github.com/CrystallizeAPI/node-klarna/commit/7717b9c428eedd8167612d1c8adc4758b4418d7b))


### Features

* add additional type fields for klarna order_line ([5edfa8c](https://github.com/CrystallizeAPI/node-klarna/commit/5edfa8c3c989027de28f1ce4b3f8f27642a91acd))

# [4.4.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.3.0...v4.4.0) (2020-10-01)


### Bug Fixes

* lint error ([6387417](https://github.com/CrystallizeAPI/node-klarna/commit/6387417b7c55a66a071c6b004edac1f8f525c58c))


### Features

* destructure interface, add shared address types, added additional types ([c1cc0b4](https://github.com/CrystallizeAPI/node-klarna/commit/c1cc0b45082bbae0f9b39a60750a689937e61251))

# [4.3.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.2.0...v4.3.0) (2020-10-01)


### Features

* add recurring token fields for orderResponse type ([8534e70](https://github.com/CrystallizeAPI/node-klarna/commit/8534e700b266d305e8bdc6b01182f83d7c647712))

# [4.2.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.1.1...v4.2.0) (2020-10-01)


### Features

* add billing_address type support for orderResponse + export crystallize helper types ([d71162a](https://github.com/CrystallizeAPI/node-klarna/commit/d71162a1e547cb85f678b54325937976192aaf94))

## [4.1.1](https://github.com/CrystallizeAPI/node-klarna/compare/v4.1.0...v4.1.1) (2020-10-01)


### Bug Fixes

* **lint:** trailing semicolon ([1175b4a](https://github.com/CrystallizeAPI/node-klarna/commit/1175b4ad3bdc9aeec0038f4be1ccd0e7d27e3830))

# [4.1.0](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.1...v4.1.0) (2020-09-30)


### Bug Fixes

* recurring property should be optional based on klarna api docs ([64da0d7](https://github.com/CrystallizeAPI/node-klarna/commit/64da0d742e95cae9d4cc6cba7e8e36ffd8ed7837))
* **lint:** prettier ([3aecc41](https://github.com/CrystallizeAPI/node-klarna/commit/3aecc413e7d59c8675b6f9c26afd73b48c534495))


### Features

* add recurring field for orders generated via crystallize helper functions ([4545421](https://github.com/CrystallizeAPI/node-klarna/commit/454542111e5d33d22679e77ce7d2b2028bad233f))

## [4.0.1](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0...v4.0.1) (2020-09-30)


### Bug Fixes

* crystallizeHelperFunction kebab_case to camelCase for lineItem ([1640801](https://github.com/CrystallizeAPI/node-klarna/commit/16408010b85d733ed95af07f62ee2072f40eba68))

# [4.0.0](https://github.com/CrystallizeAPI/node-klarna/compare/v3.3.2...v4.0.0) (2020-09-30)


### Bug Fixes

* add correct capture body interface ([50796cc](https://github.com/CrystallizeAPI/node-klarna/commit/50796ccfd7346606a951af448d62bdd85c787ecf))
* correct naming for checkout function ([ae7b065](https://github.com/CrystallizeAPI/node-klarna/commit/ae7b0659193df60c9e048fa273f98499663f0d5a))
* handle empty string response from klarna api ([4b2baa3](https://github.com/CrystallizeAPI/node-klarna/commit/4b2baa357b4917e6312ad9ef5d780eaedc476b55))
* prettier lint ([c8adfb8](https://github.com/CrystallizeAPI/node-klarna/commit/c8adfb871275b1abb8a202de4c97c277c21145a3))
* remove unused props, use correct prop name ([1c95676](https://github.com/CrystallizeAPI/node-klarna/commit/1c956764958733391d7b25cd281248e934e967f1))
* use correct host_uri variable ([f185a89](https://github.com/CrystallizeAPI/node-klarna/commit/f185a891f0a8bf1a5d148593acefae75c40fe270))
* **ci:** add commitlint step before fetching cached node_modules ([e63b705](https://github.com/CrystallizeAPI/node-klarna/commit/e63b70561b07fabc1a0181f91bc4c157c2c7580e))
* **ci:** npm_token spell fix ([86ea1a8](https://github.com/CrystallizeAPI/node-klarna/commit/86ea1a848db619e42488689fc9b7230ce5766bdd))
* **git-hooks:** make sure pre commit hook is working ([75d3523](https://github.com/CrystallizeAPI/node-klarna/commit/75d352366006fcf7b6ba89497bd6fc36c1fb1ef7))
* **lint:** prettier ([0c77e96](https://github.com/CrystallizeAPI/node-klarna/commit/0c77e96d31301007f1312903012d4d0049fc6f2c))


### Features

* add customer token v1 endpoint helper functions ([0b87176](https://github.com/CrystallizeAPI/node-klarna/commit/0b87176acabc3bf80b1f6c194033165b282ba7ac))
* add ordermanagement v1 endpoint helper functions ([67b824e](https://github.com/CrystallizeAPI/node-klarna/commit/67b824ebec35135719859360aaee42451dc8daa4))
* Added CrystallizeKlarnaHelper class to generate klarnaOrderBody ([4c31808](https://github.com/CrystallizeAPI/node-klarna/commit/4c31808bc78b686b0b414a66061d2f9f7afb71ed))
* ordermanagement v1 -> add additional helper functions for orders ([113506a](https://github.com/CrystallizeAPI/node-klarna/commit/113506abd06e119d3fa0cd0305c498e70aa4176a))
* ordermanagement v1 -> refunds helper functions added ([c458f8f](https://github.com/CrystallizeAPI/node-klarna/commit/c458f8f3cff99ade46f5ca59457c9fab0d39a201))
* orders -> cancel order function added ([bea9fd6](https://github.com/CrystallizeAPI/node-klarna/commit/bea9fd6f865e1c590ebca9f50c3b139232d7c4de))
* set npm publish irrespective of branches, add npm_token for ci env ([27ea9ae](https://github.com/CrystallizeAPI/node-klarna/commit/27ea9ae614c2fc9fde29e397ea637e44ac52851a))


### BREAKING CHANGES

* Move to typescript, improved structure for library,
bug fixes and added typings based on klarna api

# [4.0.0-beta.10](https://github.com/CrystallizeAPI/node-klarna/compare/v4.0.0-beta.9...v4.0.0-beta.10) (2020-09-24)


### Bug Fixes

* handle empty string response from klarna api ([4b2baa3](https://github.com/CrystallizeAPI/node-klarna/commit/4b2baa357b4917e6312ad9ef5d780eaedc476b55))

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
