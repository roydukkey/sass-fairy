// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

const sass = require('sass');
const { copySync, moveSync } = require('fs-extra');
const { describe, it } = require('@jest/globals');
const { sync: replaceSync } = require('replace-in-file');
const { runSass: sassTrue } = require('sass-true');
const { buildNames } = require('../utils/build');


// Configuration
const source = './packages';
const sassConfig = {
	file: './test/index.sass',
	includePaths: [
		'node_modules'
	],
	functions: {
		...buildNames.reduce((accumulator, name) => ({
			...accumulator,
			...require(`../packages/${name}`)
		}), {})
	}
};
const backupSlug = '.testing-backup';


// Back up source and transform `@error`s to `true` error handling
copySync(source, `${source}${backupSlug}`);
replaceSync({
	files: `${source}/**/*.sass`,
	from: [/(.)/, /^(?<!^\s*\/\/\s*true:cannot-test\s*$\n)(\s*)@error\s(.*)$/gm],
	to: ['@use \'throw\'\n$1', '$1@return throw.error($2)']
});


// Run tests
try {
	sassTrue(sassConfig, { sass, describe, it });
}


// Restore source
finally {
	moveSync(`${source}${backupSlug}`, source, { overwrite: true });
}
