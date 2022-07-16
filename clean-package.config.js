// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

const { copySync, removeSync } = require('fs-extra');
const { buildName, buildRelativePath } = require('./utils/build');


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


repository.directory = `packages/${buildName}`;


const completePackage = require(buildRelativePath('package.json'));
const { name, description, version, keywords, dependencies, publishConfig, ...package } = completePackage;
delete package.scripts;
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
		copySync(file, buildRelativePath(file));
	}),

	onRestore: () => commonFiles.forEach((file) => {
		removeSync(buildRelativePath(file));
	})

};
