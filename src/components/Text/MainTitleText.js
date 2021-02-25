import React from 'react';
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components';

const StyledH1 = styled.h1 `
    && {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 58px;
        line-height: 68px;

        color: hsl(228, 39%, 23%);

    }
`;
const MainTitleText = ({text}) => {

    return (
        <StyledH1>
            {text}
        </StyledH1>
    )
}

export default MainTitleText;

MainTitleText.propTypes = {
    /* Text of the component */
    text: PropTypes.string,
}