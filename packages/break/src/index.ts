// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import ColorFunctions from '@sass-fairy/color';
import type { CustomFunction } from 'sass';
import ExceptionFunctions from '@sass-fairy/exception';
import ListFunctions from '@sass-fairy/list';
import MapFunctions from '@sass-fairy/map';
import MathFunctions from '@sass-fairy/math';
import StringFunctions from '@sass-fairy/string';


const functions: { [key: string]: CustomFunction<'sync'> } = {
	...ExceptionFunctions,
	...ColorFunctions,
	...MathFunctions,
	...ListFunctions,
	...MapFunctions,
	...StringFunctions
};


export default functions;
