// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //


const { copySync, removeSync } = require('fs-extra');
const { resolve, basename } = require('path');
const packageName = basename(process.cwd());
const {
	author,
	bugs,
	devDependencies,
	homepage,
	keywords: parentKeywords,
	license,
	repository
} = require('./package.json');


// These files should be included from project root in every package.
const commonFiles = [
	'.npmignore',
	'./LICENSE'
];


repository.directory = `packages/${packageName}`;


const completePackage = require(`./${repository.directory}/package.json`);
const { name, description, version, keywords, dependencies, publishConfig, ...package } = completePackage;
delete package.scripts;
delete package['clean-package'];
delete package['//'];


module.exports = {
	indent: '\t',
	remove: Object.keys(completePackage),
	replace: {
		name,
		description,
		version,
		author,
		license,
		repository,
		homepage: homepage.replace('#readme', `/tree/master/${repository.directory}$&`),
		bugs,
		keywords: [...parentKeywords, ...keywords],
		...package,
		dependencies,
		devDependencies,
		publishConfig
	},

	onClean: () => commonFiles.forEach((file) => {
		copySync(resolve(__dirname, file), resolve(file));
	}),

	onRestore: () => commonFiles.forEach((file) => {
		removeSync(resolve(file));
	})

};
