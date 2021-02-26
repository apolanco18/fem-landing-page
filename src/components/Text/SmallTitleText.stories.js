import React from 'react';
import SmallTitleText from './SmallTitleText';

export default {
    component: SmallTitleText,
    title: "Small Title Text",
}

const defaultProps = {
    text: 'Track company-wide progress'
}

export const Default = args => {
    return (
        <SmallTitleText
            {...args}
        />
    )
}

Default.args = {
    ...defaultProps,
}