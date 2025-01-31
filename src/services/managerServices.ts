import apiClient from "./apiClient";

export const getProcessedComplaints = async () => {
  try {
    const response = await apiClient.get("api/manager/list");
<<<<<<< HEAD
    console.log(response); // 백엔드에서 전달된 데이터 확인
=======
    console.log(response);
>>>>>>> d05d38b4a17dfdf0679ccea6af385315fbc1447a
    return response.data;
  } catch (error) {
    console.error("처리 민원 리스트 조회 중 에러 발생:", error);
    throw error;
  }
};

<<<<<<< HEAD
export const getComplaintDetail = async (complaintId: any)=> {
  try {
    const response = await apiClient.get(`api/manager/${complaintId}`);
    console.log(response); // 백엔드에서 전달된 데이터 확인
=======
export const getComplaintDetail = async (complaintId: any) => {
  try {
    const response = await apiClient.get(`api/manager/${complaintId}`);
    console.log(response);
>>>>>>> d05d38b4a17dfdf0679ccea6af385315fbc1447a
    return response.data;
  } catch (error) {
    console.error("민원 상세 조회 중 에러 발생:", error);
    throw error;
  }
};

export const registerComplaintAnswer = async (complaintId: any, data: any) => {
  try {
    const response = await apiClient.post(`api/manager/${complaintId}`, data);
<<<<<<< HEAD
    console.log(response); // 백엔드에서 전달된 데이터 확인
=======
    console.log(response);
>>>>>>> d05d38b4a17dfdf0679ccea6af385315fbc1447a
    return response.data;
  } catch (error) {
    console.error("민원 답변 등록 중 에러 발생:", error);
    throw error;
  }
};
