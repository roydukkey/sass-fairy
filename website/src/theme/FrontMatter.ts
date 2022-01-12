// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { DocItemFrontMatter } from '@theme/useFrontMatter';


export default interface FrontMatter extends DocItemFrontMatter {
	readonly module?: string;
	readonly link_title?: boolean;
	/** Additionally, used to identify the field name for <DocPage /> */
	readonly sidebar_label?: string;
	/** Additionally, used to identify the field type for <DocPage /> */
	readonly sidebar_class_name?: string;
}
