// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import { OrderedMap } from 'immutable';
import { version } from '../../package.json';
import { SassMap, SassString } from 'sass';


const insertExceptionPackageAfterIndex = 2;
const packages = [
	['break', '@sass-fairy/break/package.json'],
	['color', '@sass-fairy/color/package.json'],
	['list', '@sass-fairy/list/package.json'],
	['map', '@sass-fairy/map/package.json'],
	['math', '@sass-fairy/math/package.json'],
	['meta', '@sass-fairy/meta/package.json'],
	['string', '@sass-fairy/string/package.json']
];


const getPackageVersion = async (packageName: string): Promise<string> => {
	const json: { [key: string]: string } = await import(packageName);
	return json.version;
};


const addPackage = (name: string, version: string): [SassString, SassString] => [
	new SassString(name, { quotes: true }),
	new SassString(version, { quotes: true })
];


export default {
	'sass-fairy_core_installed-packages()': async (): Promise<SassMap> => {
		const map: Array<[SassString, SassString]> = [];

		for (const [name, path] of packages) {
			try {
				map.push(addPackage(name, await getPackageVersion(path)));
			}
			catch (error: unknown) { }
		}

		map.splice(insertExceptionPackageAfterIndex, 0, addPackage('exception', version));

		return new SassMap(OrderedMap(map));
	}
};
