import apiClient from "./apiClient";

//path, post 데이터에 대해 타입 정의 필요
export const modify = async (data) => {
  try {
    const response = await apiClient.patch(`/v1/user/modify`, data);
    return response.data;
  } catch (error) {
    console.error("개인정보 수정 중 에러 발생 :", error);
    throw error;
  }
};
