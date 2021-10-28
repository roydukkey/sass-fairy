// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

const { copySync, moveSync } = require('fs-extra');
const { sync: replaceSync } = require('replace-in-file');
const sass = require('sass');
const { resolve } = require('path');
const { runSass: sassTrue } = require('sass-true');


// Configuration
const source = './packages';
const sassConfig = {
	file: './test/index.sass',
	includePaths: [
		'node_modules'
	]
};
const backupSlug = '.testing-backup';


// Back up source and transform `@error`s to `true` error handling
copySync(source, `${source}${backupSlug}`);
replaceSync({
	files: `${source}/**/*.sass`,
	from: [/(.)/, /^(?<!^\s*\/\/\s*true:cannot-test\s*$\n)(\s*)@error\s(.*)$/gm],
	to: ["@use 'throw'\n$1", '$1@return throw.error($2)']
});


// Run tests
try {
	sassTrue(sassConfig, { sass, describe, it });
}


// Restore source
finally {
	moveSync(`${source}${backupSlug}`, source, { overwrite: true })
}
