import React from 'react';


import FeatureDescription from './FeatureDescription';

export default {
    component: FeatureDescription,
    title:"Feature Description",
}

export const Default = (args) => {
    return (
        <FeatureDescription
            {...args}
        />
    )
}