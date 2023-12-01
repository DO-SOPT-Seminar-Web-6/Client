import BoxOffice from '@components/boxOffice/BoxOffice';
import Cast from '@components/cast/Cast';
import Collection from '@components/collection/Collection';
import MainComment from '@components/mainComment/MainComment';
import Similar from '@components/similar/Similar';
import Thumbnail from '@components/thumbnail/Thumbnail';
import MyPage from './MyPage';

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
