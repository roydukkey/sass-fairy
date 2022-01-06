// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import Link from '@docusaurus/Link';
import type { MainHeading as MainHeadingType } from '@theme/Heading';
import useFrontMatterContext from './hooks/useFrontMatterContext';
import Heading, { MainHeading as OriginalMainHeading } from '@theme-original/Heading';
import React, { Fragment } from 'react';


export default Heading;


// eslint-disable-next-line @typescript-eslint/naming-convention
export const MainHeading: typeof MainHeadingType = ({ ...props }) => {
	const { module, link_title } = useFrontMatterContext();
	const moduleName = <code>@sass-fairy/{module}</code>;

	return (
		<Fragment>

			<p className="module-doc-tag">{
				link_title === false
					? moduleName
					: <Link to={`/api/${module}`}>{moduleName}</Link>
			}</p>

			<OriginalMainHeading {...props} />

		</Fragment>
	);
};
