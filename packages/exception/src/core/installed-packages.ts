// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import { OrderedMap } from 'immutable';
import { version } from '../../package.json';
import { SassMap, SassString } from 'sass';


const packages = [
	['break', '@sass-fairy/break/package.json'],
	['color', '@sass-fairy/color/package.json'],
	['list', '@sass-fairy/list/package.json'],
	['map', '@sass-fairy/map/package.json'],
	['math', '@sass-fairy/math/package.json'],
	['meta', '@sass-fairy/meta/package.json'],
	['string', '@sass-fairy/string/package.json']
];


// Using `require()` to avoid the limitations of `CustomFunction<'async'>`
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const getPackageVersion = (packageName: string): string => require(packageName).version;


const addPackage = (name: string, version: string): [SassString, SassString] => [
	new SassString(name, { quotes: true }),
	new SassString(version, { quotes: true })
];


export default (): SassMap => {
	const map: Array<[SassString, SassString]> = [
		addPackage('exception', version)
	];

	for (const [name, path] of packages) {
		try {
			map.push(addPackage(name, getPackageVersion(path)));
		}
		catch (error: unknown) { }
	}

	// eslint-disable-next-line @typescript-eslint/require-array-sort-compare
	return new SassMap(OrderedMap(map.sort()));
};
