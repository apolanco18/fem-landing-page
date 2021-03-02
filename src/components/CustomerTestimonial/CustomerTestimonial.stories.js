import React from 'react';
import CustomerTestimonial from './CustomerTestimonial';


export default {
    component:CustomerTestimonial,
    title:"Customer Testimonial"
}

export const Default = args => {
    return (
        <CustomerTestimonial
        {...args}
        />
    )
}