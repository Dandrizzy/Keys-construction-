import styled from "styled-components";

const Button = styled.button`
 outline: none;
 color: white;
 background-color: rgba(253, 204, 21, 0.8 );
 padding: 8px 1.2rem;
 border-radius: 20px;
 letter-spacing: 4px;
 border: solid 2.5px rgba(253, 204, 21, 0.8 );
 transition: ease-in-out;
 transition-duration: 400ms;
 cursor: pointer;
 &:hover {
  /* background: rgba(234 179 8); */
  /* color: white; */
  background: rgba(234 179 8);
  border: solid 2.5px rgba(253, 204, 21, 0.2 );
 }
`;

export default Button;
