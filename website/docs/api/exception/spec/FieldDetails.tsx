// Copyright (c) roydukkey. All rights reserved.
// Licensed under the MIT. See LICENSE file in the project root for full license information.

import DocPage from '@site/src/components/DocPage';
import React from 'react';
import Spec from './index';


export default (): ReturnType<typeof DocPage> => <DocPage spec={Spec} />;
