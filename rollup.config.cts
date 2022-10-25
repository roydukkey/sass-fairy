// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { PackageJson } from 'type-fest';
import type { RollupOptions } from 'rollup';
import json from '@rollup/plugin-json';
import license from 'rollup-plugin-license';
import typescript from 'rollup-plugin-ts';
import { author, name } from './package.json';
import { buildName, buildNames, buildRelativePath } from './utils/build.js';


const { version } = require(buildRelativePath('package.json')) as PackageJson;


const config: RollupOptions = {
	input: buildRelativePath('src', 'index.ts'),
	output: {
		file: buildRelativePath('dist', 'functions.js'),
		format: 'commonjs',
		exports: 'default'
	},
	external: [
		'sass',
		'immutable',
		...buildNames.map((buildName) => `@${name}/${buildName}`)
	],
	plugins: [
		json(),
		typescript({
			tsconfig: './tsconfig.json',
			hook: {
				outputPath: (path, kind) => kind === 'declaration'
					? buildRelativePath('dist', 'types.d.ts')
					: path
			}
		}),
		license({
			banner: {
				commentStyle: 'none',
				content: `/*! ${[
						`@${name}/${buildName} v${version}`,
						`(c) ${author.name}`,
						'https://sass-fairy.com/license'
					].join(' | ')
				} */`
			}
		})
	]
};


export default config;
