import React, { useState } from 'react';
import { StyledRefund } from './ReservationSearch.styles';
import { useTranslation } from 'react-i18next';
import { useRefundContext } from '../../../../../Contexts/RefundContext';
import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 10px;
    width: 17px;
    height: 17px;
`;

const StyledCheckboxBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
    /* margin: 1.4rem 10%; */

    @media (min-width: 768px) {
        /* margin: 1.4rem 12%; */
    }
`

const StyledLabel = styled.label`
    color: white;
    font-size: 14px;
`


const Refund = ({ useNumber }) => {
    const { t } = useTranslation();

    const { clickedOne, setClickedOne, clickedTwo, setClickedTwo } = useRefundContext();

    const clickRefundOne = () => {
        setClickedOne(!clickedOne);
    }

    const clickRefundTwo = () => {
        setClickedTwo(!clickedTwo);
    }

    // eslint-disable-next-line no-unused-vars

    const [currentNumber, setCurrentNumber] = useState(useNumber);

    const content = () => {
        if (currentNumber === 0) {
            return (
                <>  <StyledCheckboxBox>
                    <StyledCheckbox 
                        id="refundOne"
                        checked={clickedOne}
                        onChange={clickRefundOne}
                    />
                    <StyledLabel htmlFor="refundOne">{t('refund.ref')}</StyledLabel>
                    </StyledCheckboxBox>
                </>
            );
        } else if (currentNumber === 1) {
            return (
                <>  <StyledCheckboxBox>
                    <StyledCheckbox 
                        id="refundTwo"
                        checked={clickedTwo}
                        onChange={clickRefundTwo}
                    />
                    <StyledLabel htmlFor="refundTwo">{t('refund.age')}</StyledLabel>
                    </StyledCheckboxBox>
                </>
            );
        }
    };
    

    return (
        <>
            {content()}
        </>
    );
};

export default Refund;