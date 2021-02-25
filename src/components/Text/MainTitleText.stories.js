import React from 'react';
import MainTitleText from './MainTitleText';

export default {
    component: MainTitleText,
    title: "Main Title Text",
}

const defaultProps = {
    text: 'Bring everyone together to build better products'
}

export const Default = args => {
    return (
        <MainTitleText
            {...args}
        />
    )
}

Default.args = {
    ...defaultProps,
}