
import comments from "./comments.json";

const commentsApi = (req, res) => {
  res.status(200).json(comments);
}

export default commentsApi;
