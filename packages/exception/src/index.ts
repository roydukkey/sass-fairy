// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { CustomFunction } from 'sass';
import InstalledPackages from './core/installed-packages.cjs';


const functions: { [key: string]: CustomFunction<'sync'> } = {
	'fairy-internal_core_installed-packages()': InstalledPackages
};


export default functions;
