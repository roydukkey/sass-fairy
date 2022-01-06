// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import DocItem from '@theme-original/DocItem';
import FrontMatterContext from './FrontMatterContext';
import type { Props } from '@theme/DocItem';
import React from 'react';


export default (props: Props): JSX.Element => <FrontMatterContext.Provider value={props.content.frontMatter}>
	<DocItem {...props} />
</FrontMatterContext.Provider>;
