import { posts } from "./constants.mjs";

export const resolvePostsIndex = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const foundPost = posts.findIndex((p) => p.id === parsedId);
  if (foundPost === -1) return res.sendStatus(404);
  req.foundPost = foundPost;
  next();
};
