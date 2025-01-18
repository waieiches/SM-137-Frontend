import apiClient from "./apiClient";

export const complaintAll = async (categoryOption: string | undefined) => {
    try {
      console.log(categoryOption);
      const response = await apiClient.post(
        `api/complaints/category`,
        categoryOption
      );
      console.log(response); // 백엔드에서 전달된 데이터 확인
      return response.data;
    } catch (error) {
      console.error("전체 조회 중 에러 발생 :", error);
      throw error;
    }
  };