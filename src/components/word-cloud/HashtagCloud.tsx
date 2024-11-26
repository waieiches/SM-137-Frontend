import styled from "@emotion/styled";
import WordCloud from "react-d3-cloud";

interface WordCloudProps {
  data: string[];
}
interface Word {
  text: string;
  value: number;
  fill: string;
  rotate: number;
}
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const HashtagCloud = ({ data }: WordCloudProps) => {
  const OFFSET = 40;
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
      value: (index + 1) * OFFSET,
      fill: colors[index],
      rotate: Math.round(Math.random()) * 90,
    };
  });

  return (
    <Container>
      <WordCloud
        width={300}
        height={200}
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
