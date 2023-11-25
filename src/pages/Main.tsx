import MainComment from "@components/mainComment/MainComment"
import Cast from "@components/cast/Cast"
import Similar from "@components/similar/Similar"
import Collection from "@components/collection/Collection"
import Thumbnail from '@components/thumbnail/Thumbnail'
import BoxOffice from "@components/boxOffice/BoxOffice"

export default function Main() {
  
  return (
<> 
  <Thumbnail/>
  <Cast/>
  <MainComment/>
  <BoxOffice/>
  <Collection/>
  <Similar/>
  </>
  )
}
