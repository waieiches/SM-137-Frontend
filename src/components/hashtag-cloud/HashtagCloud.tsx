import styled from "@emotion/styled";
import WordCloud from "react-d3-cloud";

interface WordCloudProps {
  data: string[];
}
interface Word {
  text: string;
  value: number;
  fill: string;
  delay: number;
}
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const HashtagCloud = ({ data }: WordCloudProps) => {
  const SIZE_OFFSET = 40;
  const DELAY_OFFSET = 2;
  const colors = [
    "var(--gray5-lowText)",
    "var(--gray5-lowText)",
    "var(--disabled-primary)",
    "var(--disabled-primary)",
    "var(--disabled-primary)",
    "var(--white)",
    "var(--white)",
  ];
  //중요도가 적은 순으로 받음
  const words: Word[] = data.map((i: string, index: number) => {
    return {
      text: i,
      value: (index + 1) * SIZE_OFFSET,
      fill: colors[index],
      delay: (index + 1) * DELAY_OFFSET,
    };
  });

  return (
    <Container>
      <WordCloud
        width={350}
        height={250}
        data={words}
        fontSize={(words) => Math.log2(words.value) * 5}
        padding={5}
        font="pretendardB"
        fill={(word: Word) => word.fill}
        rotate={0}
      />
    </Container>
  );
};

export default HashtagCloud;
