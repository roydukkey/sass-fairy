# Changelog

<!-- The order of list items should be: Critical/Fixes, New, Update, Remove, Underpinnings -->
<!-- ## UNRELEASED -->

## UNRELEASED

* Update deprecated example in README
* Restructure and improve development underpinnings

## 1.2.1

* Fix co-oping configuration from ArgLists for `.empty()`

## 1.2.0

* Validate `$side` parameter against allowed values for `.box-model()`

## 1.1.0

* Fix grammar in package description
* Add [`.box-model()`](https://sass-fairy.com/api/list/box-model)
* Add logo to README

## 1.0.0

* Port from [`sass-list`](https://www.npmjs.com/package/sass-list) to mono-repo
* Restart versioning
* Fix implementation of `.reduce()` and `.reduce-right()` to better align with ECMA specification
* List [modifier parameters](https://sass-fairy.com/docs/list-modifiers) have been made to explicitly named parameter for `.filter()` and `.map()`
* Use abstraction from `@sass-fairy/math` to [change units](https://sass-fairy.com/api/math/unit/change)
