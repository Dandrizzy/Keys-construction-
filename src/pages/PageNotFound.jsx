import styled from "styled-components";
import BigHeader from "../ui/BigHeader";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
const StyledPageNotFound = styled.main`
  height: 100vh;
  /* background-color: var(--color-grey-50); */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  /* background-color: var(--color-grey-0); */

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
 const navigate = useNavigate();

 return (
  <StyledPageNotFound>
   <Box>
    <BigHeader as="h1">
     The page you are looking for could not be found 😢
    </BigHeader>
    <Button onClick={() => navigate(-1)}>
     &larr; Go back
    </Button>
   </Box>
  </StyledPageNotFound>
 );
}

export default PageNotFound;
