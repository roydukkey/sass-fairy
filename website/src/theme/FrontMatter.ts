// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { DocItemFrontMatter } from '@theme/useFrontMatter';


export default interface FrontMatter extends DocItemFrontMatter {
	readonly module?: string;
	/** Additionally, used to identify the field name for <DocPage /> */
	readonly sidebar_label?: string;
	/** Additionally, used to identify the field type for <DocPage /> */
	readonly sidebar_class_name?: string;
}
