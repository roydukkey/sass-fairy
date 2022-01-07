// ================================================================= //
// Copyright (c) roydukkey. All rights reserved.                     //
// ================================================================= //

import DocPage from '@site/src/components/DocPage';
import React from 'react';
import Spec from './index';

export default (): ReturnType<typeof DocPage> => <DocPage spec={Spec} />;
