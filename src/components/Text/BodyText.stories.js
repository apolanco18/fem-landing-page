import React from 'react';
import BodyText from './BodyText';

export default {
    component: BodyText,
    title: "BodyText",
}

const defaultProps = {
    text: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals view'
}

export const Default = args => {
    return (
        <BodyText
            {...args}
        />
    )
}

Default.args = {
    ...defaultProps,
}