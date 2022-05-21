// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type { Props } from '@theme/NavbarItem/DropdownNavbarItem';
import React from 'react';
import { useLocation } from '@docusaurus/router';


const dropdownLinkActiveClass = 'dropdown__link--active';


export default function versionDropdownNavbarItem ({ mobile, label, items: [nextVersion, currentVersion], ...props }: Props): JSX.Element {
	const { pathname } = useLocation();

	if (!mobile) {
		if (nextVersion.to && pathname.includes(nextVersion.to)) {
			label = nextVersion.label;
			currentVersion.activeClassName = '';
		}
		else {
			label = currentVersion.label;
			currentVersion.activeClassName = dropdownLinkActiveClass;
		}
	}

	return (
		<DropdownNavbarItem
			{...props}
			activeClassName={'active-active'}
			mobile={mobile}
			items={[nextVersion, currentVersion]}
			label={label}
			isActive={(): boolean => true}
		/>
	);
}
