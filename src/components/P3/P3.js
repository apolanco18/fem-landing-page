import React from 'react';

import CustomerTestimonial from "../CustomerTestimonial/CustomerTestimonial"
import MediumTitleText from "../Text/MediumTitleText";
import GenericButton from "../Button/Button"

import styled from 'styled-components'

const StyledDiv = styled.div`
    &.container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bdyTxt-container {
        margin: 80px 0 60px 0;
    }

`;

const P3 = () => {
    return(
        <StyledDiv className="container">
            <div>
                <MediumTitleText
                    text={"What they've said"}
                />
            </div>
            <div className="bdyTxt-container">
                <CustomerTestimonial/>
            </div>
            <div>
                <GenericButton
                    text={"Get Started"}
                />
            </div>
        </StyledDiv>
    )
}

export default P3;