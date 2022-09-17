// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { CustomFunction } from 'sass';
import ExceptionFunctions from '@sass-fairy/exception';
import ListFunctions from '@sass-fairy/list';
import StringFunctions from '@sass-fairy/string';


const functions: { [key: string]: CustomFunction<'sync'> } = {
	...ExceptionFunctions,
	...ListFunctions,
	...StringFunctions
};


export default functions;
