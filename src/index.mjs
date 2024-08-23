import express from "express";
import { posts } from "./utils/constants.mjs";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(req.method, "-", req.originalUrl);

  res.status(200).send({ msg: "made by ALI RAZA @Ali1raz" });
});

app.get("/posts", (req, res) => {
  console.log(req.method, "-", req.originalUrl);
  res.status(200).send(posts);
});

app.get("posts/:id", (req, res) => {
  console.log(req.method, "-", req.originalUrl);
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId))
    return res.status(400).send({ msg: "invlid ID, bad request" });

  const findPostIndex = posts.find((post) => post.id === parsedId);

  if (findPostIndex) res.status(200).send(findPostIndex);
  else res.status(404).send({ msg: "not found" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
