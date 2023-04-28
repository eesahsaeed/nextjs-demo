
import comments from "../comments.json";

const commentId = (req, res) => {
  console.log(req.cookies);
  res.status(200).json({post: req.query.id, comments});
}

export default commentId;
