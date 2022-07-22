// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';


export default function useActiveVersionPath (): string {
	const { activeVersion } = useActiveDocContext(undefined);
	return activeVersion && !activeVersion.isLast ? activeVersion.path : '';
}
