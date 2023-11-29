import MainComment from "@components/mainComment/MainComment"
import Cast from "@components/cast/Cast"
import Similar from "@components/similar/Similar"
import Collection from "@components/collection/Collection"
import Thumbnail from '@components/thumbnail/Thumbnail'
import BoxOffice from "@components/boxOffice/BoxOffice"
import MyPage from "./MyPage"

export default function Main() {
  
  return (
    <>
      <Thumbnail />
      <MyPage />
      <Cast />
      <MainComment />
      <BoxOffice />
      <Collection />
      <Similar />
    </>
  );
}
