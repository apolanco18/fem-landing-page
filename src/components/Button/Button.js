import React from 'react';
import PropTypes from 'prop-types';


import UButton from '@material-ui/core/Button';
import styled, {css} from 'styled-components';

const Button = styled(UButton).attrs(props => ({
    
}))`
    &&{
        width: 130px;
        height: 44px;
        box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        background-color: ${props => props.backgroundColor};
        font-size: 14px;
        font-family: Be Vietnam, sans-serif;
        font-style: normal;
        font-weight: bold;
        color: ${props => props.txtColor};
        text-transform: capitalize;
    }

    &&:hover {
        opacity: 0.5;
        background: ${props => props.backgroundColor};
    }
`;

const GenericButton = ({buttonName,backgroundColor,txtColor}) => {
    return (
        <Button variant="contained"
            backgroundColor={backgroundColor}
            txtColor={txtColor}
        >
            {buttonName}
        </Button>
    );
}

export default GenericButton;

GenericButton.propTypes = {
    /* Text of the Button */
    buttonName: PropTypes.string,
}

GenericButton.defaultProps = {
    buttonName: 'Get Started',
    backgroundColor:'hsl(12, 88%, 59%)',
    txtColor:'white'
}

