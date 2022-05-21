// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { RollupOptions } from 'rollup';
import { basename } from 'path';
import json from '@rollup/plugin-json';
import license from 'rollup-plugin-license';
import typescript from 'rollup-plugin-ts';
import { author, repository } from './package.json';


const packageName = basename(process.cwd());
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const { version } = require(`./packages/${packageName}/package.json`);


const config: RollupOptions = {
  input: './src/index.ts',
  output: {
    file: `dist/${packageName}-functions.js`,
    format: 'commonjs',
		exports: 'default'
  },
	external: [
		'sass',
		'immutable'
	],
  plugins: [
		json(),
		typescript({
			tsconfig: '../../tsconfig.json',
			hook: {
				outputPath: (path, kind) => kind === 'declaration' ? 'dist/types.d.ts' : path
			}
		}),
		license({
			banner: {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				commentStyle: 'none',
				content: `/*! ${
					[
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
