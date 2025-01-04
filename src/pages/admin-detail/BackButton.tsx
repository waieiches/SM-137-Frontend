import styled from "@emotion/styled";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Container = styled.div`
  width: 1000px;
`;

const IconContainer = styled.div`
  display: flex;
  position: relative;
  border-radius: 100px;
  width: 25px;
  padding: 0.1rem;
  transition: 0.1s ease;
  &:hover {
    background-color: var(--disabled-primary);
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 3.4rem;
  right: -2.6rem;
  @media screen and (max-width: 768px) {
    top: 3.3rem;
    right: -2.5rem;
  }
  @media screen and (max-width: 480px) {
    position: fixed;
    right: 0;
  }
`;

const BackButton = () => {

  return (
    <Container>
    <IconContainer>
      <ArrowBackRoundedIcon sx={{ color: 'white' }} />
      <ButtonContainer>
      </ButtonContainer>
    </IconContainer>
    </Container>

  );
};

export default BackButton;
