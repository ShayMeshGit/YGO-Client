import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const Loading = () => {
    const antIcon = <LoadingOutlined spin />;
    return (
        <div className='loadingComponent'>
            <Spin indicator={antIcon} tip='Loading...' />
        </div>
    )
}

export default Loading
