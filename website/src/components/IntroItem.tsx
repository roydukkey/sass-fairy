// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import BreakSpec from '@site/docs/api/break/spec';
import ColorSpec from '@site/docs/api/color/spec';
import ExceptionSpec from '@site/docs/api/exception/spec';
import Link from '@docusaurus/Link';
import ListSpec from '@site/docs/api/list/spec';
import MapSpec from '@site/docs/api/map/spec';
import MathSpec from '@site/docs/api/math/spec';
import MetaSpec from '@site/docs/api/meta/spec';
import NpmBadge from '@site/src/components/NpmBadge.mdx';
import StringSpec from '@site/docs/api/string/spec';
import useActiveVersionPath from '@site/src/hooks/useActiveVersionPath';
import React, { Fragment } from 'react';


export default function ({ name, npmTag, npmBadgeColor }: Attributes): JSX.Element {
	const versionPath = useActiveVersionPath();
  return (
		<Fragment>
      <dt><Link to={`${versionPath}/api/${name}`}>@sass-fairy/{name}</Link></dt>
      <dd><p>{{
        break: BreakSpec.description,
        color: ColorSpec.description,
        exception: ExceptionSpec.description,
        list: ListSpec.description,
        map: MapSpec.description,
        math: MathSpec.description,
        meta: MetaSpec.description,
        string: StringSpec.description
      }[name]}.</p></dd>
      <dd><NpmBadge module={name} tag={npmTag} color={npmBadgeColor} /></dd>
		</Fragment>
	);
}


interface Attributes {
	name: string;
	npmTag: string;
	npmBadgeColor: string;
}
