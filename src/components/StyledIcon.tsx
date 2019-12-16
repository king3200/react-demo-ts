import { Icon as AntIcon } from 'antd';
import { IconProps } from 'antd/lib/icon/';
import * as React from 'react';
import styledComponents from 'styled-components';


export const Icon = styledComponents((props: IconProps) => <AntIcon {...props} />)`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: #1890ff;
    }
`;