import styled from 'styled-components'
import theme from '../theme'

export const FormCheckBox = styled.input.attrs({ type: 'checkbox' })`
    width: 20px;
    /* margin-right: 20px; */
`

export const PermissionBoxPanel = styled.div`
    width: 100%;
    padding: 0 20px;
    background-color: ${theme.colors.secondary};
    
`

export const PermissionBoxContainer = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: ${theme.colors.primary};
    padding: 20px;
    

    &:nth-of-type(2) {
        border-radius: 0 0 8px 8px;
        padding-top: 0;
    }
`

export const Permission = styled.div`
    font-size: 12px;
    color: ${theme.colors.secondary};
    padding-left: 10px;

    @media (min-width: 768px) {
        font-size: 14px;
    }

    
`