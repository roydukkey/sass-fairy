// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import type { Attributes } from '@site/src/components/DocPage';
import DocPage from '@site/src/components/DocPage';
import React from 'react';
import Spec from '@site/docs/api/math/spec';


export default ({ children }: Attributes): ReturnType<typeof DocPage> => <DocPage spec={Spec}>{children}</DocPage>;
