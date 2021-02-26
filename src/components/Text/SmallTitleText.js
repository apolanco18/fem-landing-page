import React from 'react';

import styled from 'styled-components';


const StyledTitle = styled.h4`
    && {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: hsl(228, 39%, 23%);
    }
`;

const SmallTitleText = ({text}) => {

    return (
        <StyledTitle>
            {text}
        </StyledTitle>
    )
}

export default SmallTitleText;