// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //


const { copySync, removeSync } = require('fs-extra');
const { resolve, basename } = require('path');


// These files should be included from project root in every package.
const commonFiles = [
	'.npmignore',
	'./LICENSE'
];


module.exports = {
	indent: '\t',
	remove: [
		'config',
		'publishConfig',
		'scripts'
	],

	onClean: () => commonFiles.forEach((file) => {
		copySync(resolve(__dirname, file), resolve(file));
	}),

	onRestore: () => commonFiles.forEach((file) => {
		removeSync(resolve(file));
	})

};
