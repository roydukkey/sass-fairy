// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Context from '../FrontMatterContext';
import type { FrontMatterContext } from '../FrontMatterContext';
import { useContext } from 'react';


export default (): FrontMatterContext => {
	const context = useContext(Context);

	if (context === null) {
		throw new TypeError('`<FrontMatterContext.Provider />` must be used before `useFrontMatterContext()` can be called.');
	}

	return context;
};
