import React from 'react';

import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const StyledH = styled.h2.attrs(props => ({
    fontSize: (props.isSmall) ? '30px' : '43px',
    
})) `
    &&{
        font-family: Be Vietnam, sans-serif;
        font-style: normal;
        font-size:${props => props.fontSize};
        font-weight: bold;
        line-height: 50px;
        color: ${props => props.color};

    }
`;
const MediumTitleText = ({text,color}) => {
    const matches = useMediaQuery('(max-width:375px)');

    return (
        <StyledH
            isSmall={matches}
            color={color}
        >
            {text}
        </StyledH>
    )
}

export default MediumTitleText;

MediumTitleText.defaultProps = {
    text: "What's different about Manage",
    color:"hsl(228,39%,23%)"
}