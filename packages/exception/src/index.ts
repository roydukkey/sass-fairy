// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { CustomFunction } from 'sass';
import { customFunctions } from '@sass-fairy/core';


const functions: { [key: string]: CustomFunction<'sync'> } = customFunctions;


export default functions;
