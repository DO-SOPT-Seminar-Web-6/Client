import { useQuery } from "react-query";
import { getMyPageComment} from "@api/getMyPageComment";
import { CommentDataTypes } from "types/commentDataTypes";

export default function useGetMyPageComment(){
  const result=useQuery<CommentDataTypes[], Error>
  (['getMyPageComment'], getMyPageComment, {
    onError: (error)=> {
      console.error('에러 발생', error);
    },
  });

  return result;
}