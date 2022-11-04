// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

const { buildName, buildRelativePath } = require('./utils/build');


const {
	author,
	bugs,
	devDependencies,
	homepage,
	keywords: parentKeywords,
	license,
	repository,
	files
} = require('./package.json');


repository.directory = `packages/${buildName}`;
const branch = repository.branch;
delete repository.branch;


const completePackage = require(buildRelativePath('package.json'));
const { name, description, version, keywords, dependencies, peerDependencies, peerDependenciesMeta, optionalDependencies, publishConfig, ...packageJson } = completePackage;
delete packageJson.scripts;
delete packageJson['//'];


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
		homepage: homepage.replace('#readme', `/tree/${branch}/${repository.directory}$&`),
		bugs,
		keywords: [...parentKeywords, ...keywords ?? []],
		...packageJson,
		dependencies,
		peerDependencies,
		peerDependenciesMeta,
		optionalDependencies,
		devDependencies,
		publishConfig,
		files
	}

};
