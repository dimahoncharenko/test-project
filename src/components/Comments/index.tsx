import { useContext } from "react";
import moment from "moment";

import { Comment } from "./Comment";
import { commentsContext } from "../../utils";

export const Comments = () => {
  const { comments } = useContext(commentsContext);

  return (
    <div className="flex flex-col gap-8 pt-8">
      {comments.map((cmt, key) => (
        <Comment
          key={key}
          username={cmt.username}
          timestamp={moment(cmt.timestamp).fromNow()}
          content={cmt.content}
          avatar={cmt.avatar}
          likes={cmt.likes}
          dislikes={cmt.dislikes}
        />
      ))}
    </div>
  );
};
