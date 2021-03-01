import React from 'react';
import PropTypes from 'prop-types'

import styled, {css} from 'styled-components';

const StyledP = styled.p `
    font-family: Be Vietnam, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: hsl(227,12%,61%);
`;

const BodyText = ({text}) => {
    return(
        <StyledP>
            {text}
        </StyledP>
    )
    
}

export default BodyText;

BodyText.propTypes = {
    /* Text of the component */
    text: PropTypes.string,
}

