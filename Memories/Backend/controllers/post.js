// importing models
import PostMessage from "../models/postMessage.js";

/*
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
*/

// following method does the same as the above method
export const getPosts = async (req, res) => {
  const postMessage = await PostMessage.find()
    .then((postMessage) => res.status(200).json(postMessage))
    .catch((err) => res.status(404).json({ message: err.message }));
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  await newPost
    .save()
    .then(() => res.status(201), console.log("post saved successfully"))
    .catch((err) => res.status(409).json({ message: err.message }));
};
