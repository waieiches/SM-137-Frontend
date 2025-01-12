import styled from "@emotion/styled";
import Button from "../../components/button/Button";
import { useState } from "react";

const Container = styled.div`
  width: 30rem;
  margin: 0 auto;
`
const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: var(--black);
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const TextBox = styled.div`
  width: 60px;
  margin-right: 10px;
  display: flex; 
  justify-content: flex-end;
`
const Text = styled.h3`
  color: var(--gray5-lowText);
  font-size: 1rem;
`
const Input = styled.input`
  width: 12rem;
  height: 3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--white);
  `
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
`
const FieldContainer = styled.div`
  height: 5rem;
  gap: 10px;
`

const FieldBox = styled.div`
  display: flex;  
  margin-bottom: 20px;
`

const Message = styled.p<{ success?: boolean }>`
  text-align: center;
  color: ${({ success }) => (success ? "green" : "red")};
  font-size: 1rem;
  margin-top: 1rem;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ text: string; success: boolean } | null>(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("/credentials.json");
      if (!response.ok) throw new Error("Failed to load credentials");

      const credentials = await response.json();
      if (username === credentials.username && password === credentials.password) {
        setMessage({ text: "로그인 성공!", success: true });
        window.location.href = "/admin/home";
      } else {
        setMessage({ text: "아이디 또는 비밀번호가 잘못되었습니다.", success: false }); // 객체 형식이 올바름
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage({ text: "로그인 중 오류가 발생했습니다.", success: false }); // 객체 형식이 올바름
    }
  };

    return (
      <Container>
      <Title>관리자 로그인</Title>
      <ButtonContainer>
      <FieldContainer>
        <FieldBox>
            <TextBox><Text>아이디</Text></TextBox>
            <Input 
            placeholder="아이디 입력" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </FieldBox>
        <FieldBox>
        <TextBox><Text>비밀번호</Text></TextBox>
        <Input 
        placeholder="비밀번호 입력"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        </FieldBox>
      </FieldContainer>
      <Button content="다음" type={"_100x123_Primary"} onClick={handleLogin} />
      </ButtonContainer>
      {message && <Message success={message.success}>{message.text}</Message>}
      </Container>
    );
  };
  
  export default Login;
  