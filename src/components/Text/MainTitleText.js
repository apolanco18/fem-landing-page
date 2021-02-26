import React from 'react';
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components';

import useMediaQuery from '@material-ui/core/useMediaQuery';


const StyledH1 = styled.h1.attrs(props => ({
    fontSize: (props.isSmall) ? '40px' : '58px',
    lineHeight: (props.isSmall) ? '50px' : '68px',

    
})) `
    && {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: ${props => props.fontSize};
        line-height: ${props => props.lineHeight};

        color: hsl(228, 39%, 23%);

    }
`;
const MainTitleText = ({text}) => {
    const matches = useMediaQuery('(max-width:375px)');
    return (
        <StyledH1
            isSmall={matches}
        >
            {text}
        </StyledH1>
    )
}

export default MainTitleText;

MainTitleText.propTypes = {
    /* Text of the component */
    text: PropTypes.string,
}