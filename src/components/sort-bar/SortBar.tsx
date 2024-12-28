import styled from "@emotion/styled";
import DropDown from "../drop-down/DropDown";
import SortStandard from "./sort-standard/SortStandard";

const Container = styled.div`
  max-width: 1114px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--gray2-subbtn);
  padding-bottom: 1rem;
`;
const SortOptionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Divide = styled.pre`
  color: var(--gray4-placeholder-low);
`;

const SortBar = () => {
  const OPTION = ["1개월", "3개월", "6개월"];
  return (
    <Container>
      <SortOptionContainer>
        <SortStandard type="latest" />
        <Divide>|</Divide>
        <SortStandard type="scrap" />
        <Divide>|</Divide>
        <SortStandard type="likes" />
      </SortOptionContainer>
      <DropDown options={OPTION} />
    </Container>
  );
};

export default SortBar;
