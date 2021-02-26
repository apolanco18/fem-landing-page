import React from 'react';
import SmallButton from './SmallButton';

export default {
    component:SmallButton,
    title:"Small Button",
}


const buttonProps = {
    buttonName: '01',
}

export const Default = (args) => {
    return (
        <SmallButton 
            {...args}
        />
    )
}

Default.args = {
    ...buttonProps,
}