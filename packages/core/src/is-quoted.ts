// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { SassBoolean, Value } from 'sass';
import { sassFalse, sassTrue } from 'sass';


export default ([string]: Value[]): SassBoolean => {
	return string.assertString('string').hasQuotes ? sassTrue : sassFalse;
};
