import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import React from "react";
import FilterBar from "./ComplaintFilterBar";

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

      <FilterBar isPublic={isPublic} setIsPublic={setIsPublic} />

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
