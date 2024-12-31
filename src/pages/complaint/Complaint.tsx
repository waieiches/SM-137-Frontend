import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";
import StatusButtonGroup from "../../components/status-button/StatusButtonGroup";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

const ComplaintIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--disabled-primary);
  width: 2rem;
  height: 2rem;
  margin-top: 7rem;
`;

const ComplaintTitle = styled.h2`
  margin: 1rem 0;
`;

const ComplaintLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--gray3-border);
  margin: 5% 0 1.5rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 4.5rem;
  background-color: var(--gray1-background);
  border-radius: 50rem;
  padding: 1rem 2rem;
  margin: 1rem auto 1.5rem;
  transform: translateY(-5rem);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PublicPrivateButton = styled.button<{ isSelected: boolean }>`
  padding: 0.8rem 2rem;
  border: 2px solid
    ${(props) => (props.isSelected ? "var(--primary)" : "var(--gray3-border)")};
  background-color: ${(props) =>
    props.isSelected ? "var(--white)" : "var(--gray1-background)"};
  color: ${(props) =>
    props.isSelected ? "var(--primary)" : "var(--gray5-text)"};
  border-radius: 20px;

  &:hover {
    border: 2px solid var(--primary);
  }
`;

const ComplaintGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Complaint = () => {
  const [isPublic, setIsPublic] = React.useState(true);

  return (
    <Container>
      <ComplaintIcon component={ContactPageRoundedIcon} />
      <ComplaintTitle>내 민원</ComplaintTitle>
      <ComplaintLine />

      <FilterContainer>
        <ButtonGroup>
          <PublicPrivateButton
            isSelected={isPublic}
            onClick={() => setIsPublic(true)}
          >
            공개 민원
          </PublicPrivateButton>
          <PublicPrivateButton
            isSelected={!isPublic}
            onClick={() => setIsPublic(false)}
          >
            개인 민원
          </PublicPrivateButton>
        </ButtonGroup>

        <StatusButtonGroup />
      </FilterContainer>

      <ComplaintGrid>
        {mockData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContentBox data={item} type="small" />
          </motion.div>
        ))}
      </ComplaintGrid>
    </Container>
  );
};

export default Complaint;
