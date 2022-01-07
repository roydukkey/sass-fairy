// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import type { FrontMatter } from '@theme/DocItem';
import { createContext } from 'react';


const context = createContext<FrontMatterContext | null>(null);
export default context;


export interface FrontMatterContext extends FrontMatter {
	readonly module?: string;
	readonly link_title?: boolean;
	/** Additionally, used to identify the field name for <DocPage /> */
	readonly sidebar_label?: string;
	/** Additionally, used to identify the field type for <DocPage /> */
	readonly sidebar_class_name?: string;
}
