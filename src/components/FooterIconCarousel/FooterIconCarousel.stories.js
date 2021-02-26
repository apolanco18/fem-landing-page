import React from 'react';
import FooterIconCarousel from './FooterIconCarousel';

export default {
    component: FooterIconCarousel,
    title:"Footer Icon Carousel",
}

export const Default = (args) => {
    return (
        <FooterIconCarousel
            {...args}
        />
    )
}