import { useQuery } from "react-query";
import { getMyPageComment, InGetMyPageCommentTypes } from "@api/getMyPageComment";
import { CommentDataTypes } from "types/commentDataTypes";

export default function useGetMyPageComment(){
  const result=useQuery<CommentDataTypes[], Error>
  (['getMyPageComment'], getMyPageComment, {
    onError: (error)=> {
      console.error('에러 발생', error);
    },
  });

  if(result.data){
    console.log('데이터:', result.data);
  }
  return result;
}