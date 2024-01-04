import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 0.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: rgba(253, 204, 21, 0.8 );;

    &:hover {
      background-color: rgba(253, 204, 21, 0.8 );
    }
  `,
  secondary: css`
    color: #4b5563;
    background: #fff;
    border: 1px solid #e5e7eb;

    &:hover {
      background-color: #f9fafb;
    }
  `,
  danger: css`
    color: #fee2e2;
    background-color: #b91c1c;

    &:hover {
      background-color: #991b1b;
    }
  `,
};

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
  border: none;
  border-radius: 25px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
&:disabled {
  background-color: gray;
  cursor: not-allowed;
  &:hover {
      background-color: gray;
  }
}

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;



// const Button = styled.button`
//  outline: none;
//  color: white;
//  background-color: rgba(253, 204, 21, 0.8 );
//  padding: 8px 1.2rem;
//  border-radius: 20px;
//  letter-spacing: 4px;
//  border: solid 2.5px rgba(253, 204, 21, 0.8 );
//  transition: ease-in-out;
//  transition-duration: 400ms;
//  cursor: pointer;
//  &:hover {
//   /* background: rgba(234 179 8); */
//   /* color: white; */
//   background: rgba(234 179 8);
//   border: solid 2.5px rgba(253, 204, 21, 0.2 );
//  }
// `;

// export default Button;
