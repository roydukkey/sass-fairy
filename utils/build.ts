// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import { sync as globbySync } from 'globby';
import { basename, join, resolve } from 'path';


const basePath = resolve('packages');


export const buildNames = globbySync(join(basePath, '*'), { onlyDirectories: true }).map((path) => basename(path));


export const buildName = process.env.BUILD;

if (buildName !== undefined && !buildNames.includes(buildName)) {
	throw new Error(`The environment variable \`BUILD\` has been set to '${buildName}', but only the following are acceptable values: ${listBuildNames()}.`);
}


export function buildRelativePath (...paths: string[]): string {
	return join(basePath, buildName ?? '', ...paths);
}


function listBuildNames (): string {
	const names = buildNames.map((name) => `'${name}'`);
	return `${names.slice(0, -1).join(', ')}, or ${names[names.length - 1]}`;
}
