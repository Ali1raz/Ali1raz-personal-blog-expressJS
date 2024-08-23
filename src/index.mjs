import express from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { posts } from "./utils/constants.mjs";
import { validationSchemas } from "./utils/validationSchemas.mjs";
import { resolvePostsIndex } from "./utils/middleWares.mjs";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(req.method, "-", req.originalUrl);

  res.status(200).send({ msg: "made by ALI RAZA @Ali1raz" });
});

app.get("/posts", (req, res) => {
  console.log(req.method, "-", req.originalUrl);
  res.status(200).send(posts);
});

app.get("/posts/:id", (req, res) => {
  console.log(req.method, "-", req.originalUrl);
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId))
    return res.status(400).send({ msg: "invlid ID, bad request" });

  const findPostIndex = posts.find((post) => post.id === parsedId);

  if (findPostIndex) res.status(200).send(findPostIndex);
  else res.status(404).send({ msg: "not found" });
});

app.post("/posts", checkSchema(validationSchemas), (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty())
    return res.status(400).send({ errors: result.array() });

  const data = matchedData(req);
  console.log(data);

  const newPost = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    ...data,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };
  posts.push(newPost);
  res.status(201).send(newPost);
});

app.put("/posts/:id", resolvePostsIndex, (req, res) => {
  const { body, foundPost } = req;
  posts[foundPost] = {
    id: posts[foundPost].id,
    updatedAt: new Date().toString(),
    ...body,
  };
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
