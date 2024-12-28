import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CategorySelect from "../../components/category-select/CategorySelect";
import SearchFilterBar from "../../components/search-filter/SearchFilter";

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
const Background = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
  gap: 2rem;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;
const Title = styled.h2`
  color: var(--white);
`;
const Icon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--disabled-primary);
  width: 30px;
  height: 30px;
`;
const SerarchFilterContainer = styled.div`
  transform: translateY(-4vw);
`;

const View = () => {
  return (
    <Container>
      <Background>
        <TitleContainer>
          <Icon component={SearchRoundedIcon} />
          <Title>전체 민원 조회</Title>
        </TitleContainer>
        <CategorySelect />
      </Background>
      <SerarchFilterContainer>
        <SearchFilterBar />
      </SerarchFilterContainer>
    </Container>
  );
};

export default View;
