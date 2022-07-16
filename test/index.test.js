// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

const { copySync, moveSync } = require('fs-extra');
const { sync: replaceSync } = require('replace-in-file');
const { runSass: sassTrue } = require('sass-true');


// Configuration
const sourcePath = './packages';
const entry = './test/index.sass';
const sassConfig = {
	loadPaths: [
		'node_modules'
	]
};
const backupSlug = '.testing-backup';


// Back up source and transform `@error`s to `true` error handling
copySync(sourcePath, `${sourcePath}${backupSlug}`);
replaceSync({
	files: `${sourcePath}/**/*.sass`,
	from: [/(.)/, /^(?<!^\s*\/\/\s*true:cannot-test\s*$\n)(\s*)@error\s(.*)$/gm],
	to: ["@use 'throw'\n$1", '$1@return throw.error($2)']
});


// Run tests
try {
	sassTrue({ describe, it }, entry, sassConfig);
}


// Restore source
finally {
	moveSync(`${sourcePath}${backupSlug}`, sourcePath, { overwrite: true });
}
