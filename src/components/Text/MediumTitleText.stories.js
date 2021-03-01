import React from 'react';

import MediumTitleText from './MediumTitleText'

export default {
    component: MediumTitleText,
    title:"Medium Title Text",
}

const defaultProps = {
    text:"What's different about Manage",
}

export const Default = args => {
    return (
        <MediumTitleText
        {...args}
        />
    )
}

Default.args = {
    ...defaultProps
}