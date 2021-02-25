import React from 'react';
import GenericButton from './Button';

export default {
    component:GenericButton,
    title:"Generic Button",
}

// const Template = args => <GenericButton {...args} />;

// export const Default = Template.bind({});

const buttonProps = {
    buttonName: 'Hello',
}

export const Default = (args) => {
    return (
        <GenericButton 
            {...args}
        />
    )
}

Default.args = {
    ...buttonProps,
}