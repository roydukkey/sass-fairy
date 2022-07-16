// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

const { resolve } = require('path');


const buildName = process.env.BUILD;

if (buildName === undefined) {
	throw new Error('The environment variable `BUILD` has not been defined');
}


const buildRelativePath = (...paths) => resolve('packages', buildName, ...paths);


module.exports = {
	buildName,
	buildRelativePath
};
