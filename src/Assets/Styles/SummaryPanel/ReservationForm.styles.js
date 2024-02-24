import styled from 'styled-components'
import theme from '../theme';

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const Section = styled.div`
  /* position: relative; */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    &:nth-of-type(1) {
        border-right: 2px solid ${theme.colors.primary};
    }
  }
`;

export const Title = styled.h2`
  color: ${theme.colors.primary};
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${theme.colors.lightGray};
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin-bottom: 15px;
  border: none;
  outline: transparent;
  border-bottom: 1px solid ${theme.colors.primary};

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;


export const FormBox = styled.div`
    position: relative;
    width: 100%;
    box-shadow: 0px 2px 15px #646464;
    padding: 20px;
    border-radius: 8px 8px 0 0;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`

export const ErrorMessage = styled.span`
    display: block;
    color: ${theme.colors.primary};
    background-color: #FFECEC;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 5px;
    border: 1px solid ${theme.colors.primary};
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
    font-size: 0.9em;
    animation: fadeIn 0.3s forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(-10px);
        }
    }
`;

export const CheckboxContainer = styled.label`
    display: flex;
    position: absolute;
    left: 5px;
    top: 5px;
    align-items: center;
    cursor: pointer;
    font-size: 16px;

    @media (min-width: 360px) {
      left: 16px;
      top: 16px;
    }

    @media (min-width: 992px) {
      left: 40px;
      top: 30px;
    }
`;

export const CompanyCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;

    & + span {
        position: relative;
        padding-left: 22px;
        cursor: pointer;

        @media (min-width: 992px) {
          padding-left: 26px;
        }

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 14px;
            height: 14px;
            border: 2px solid ${theme.colors.primary};
            border-radius: 3px;
            transition: background-color 0.3s;

            @media (min-width: 992px) {
              width: 16px;
              height: 16px;
            }
        }
    }

    &:checked + span::before {
        background-color: ${theme.colors.primary};
    }

    &:checked + span::after {
        content: '✓';
        position: absolute;
        left: 2px;
        top: 50%;
        transform: translateY(-52%);
        color: white;
        font-size: 20px;
    }
`;

export const CheckboxLabel = styled.span`
  font-size: 14px;

  @media (min-width: 992px) {
    font-size: 16px;
  }
`

export const LabelNipLink = styled.span`
  color: ${theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
`;

export const LabelNip = styled(Label)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`