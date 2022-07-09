// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { RollupOptions } from 'rollup';
import { buildRelativePath } from './utils/build';
import json from '@rollup/plugin-json';
import license from 'rollup-plugin-license';
import typescript from 'rollup-plugin-ts';
import { author, repository } from './package.json';


// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const { version } = require(buildRelativePath('package.json'));


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
		'@sass-fairy/exception',
		'@sass-fairy/break'
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
						`Sass-Fairy v${version}`,
						`(c) ${author.name}`,
						repository.url.replace('.git', '/blob/LICENSE')
					].join(' | ')
				} */`
			}
		})
	]
};


export default config;
