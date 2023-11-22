import ReviewStarFullIc from '@assets/icon/review/reviewStarFullIc.svg';
import ReviewLikeCommentIc from '@assets/icon/review/reviewLikeCommentIc.svg';
import ReviewLikeUnActiveIc from '@assets/icon/review/reviewLikeUnActiveIc.svg';

interface InCommentTypeProps {
  userName: string;
}

/** Comment */
export default function Comment(props: InCommentTypeProps) {
  const { userName } = props;

  return (
    <article>
      <div>
        <img src="" alt="user-profile" />
        <span>{userName}</span>
        <div>
          <img src={ReviewStarFullIc} />
          <img src={ReviewStarFullIc} />
          <img src={ReviewStarFullIc} />
          <img src={ReviewStarFullIc} />
          <img src={ReviewStarFullIc} />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora reprehenderit aperiam ut nesciunt
          perspiciatis, tenetur tempore unde ducimus dolore, cupiditate sapiente possimus libero placeat quibusdam saepe
          officiis iste ab perferendis. Fuga voluptatem aliquid nesciunt commodi accusamus numquam deserunt totam
          quaerat placeat qui, esse ullam quisquam eligendi molestias delectus perspiciatis eum veritatis dolorem
          perferendis culpa voluptatum? Ipsam alias aliquid cum eaque. Aliquid molestias praesentium consequuntur eaque
          pariatur exercitationem sequi numquam dicta ab, iure inventore quisquam, architecto, perferendis placeat quasi
          fugit corporis cupiditate ut? Rerum laborum aut dolorem iste tempore ad iusto corrupti? Veniam voluptatum
          accusantium, suscipit aut eligendi maiores reprehenderit?
        </p>
      </div>
      <div>
        <button>
          <img src={ReviewLikeUnActiveIc} />
          <span>755</span>
        </button>
        <button>
          <img src={ReviewLikeCommentIc} />
          <span>14</span>
        </button>
      </div>
    </article>
  );
}
