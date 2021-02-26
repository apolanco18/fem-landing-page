import React from 'react';
import PropTypes from 'prop-types';


import UButton from '@material-ui/core/Button';
import styled, {css} from 'styled-components';

const Button = styled(UButton)`
    &&{
        width: 70px;
        height: 40px;
        border-radius: 20px;
        background-color: hsl(12, 88%, 59%);
        font-size: 14px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        color: white;
        text-transform: capitalize;
    }

`;

const SmallButton = ({buttonName}) => {
    return (
        <Button variant="contained">
            {buttonName}
        </Button>
    );
}

export default SmallButton;

SmallButton.propTypes = {
    /* Text of the Button */
    buttonName: PropTypes.string,
}

