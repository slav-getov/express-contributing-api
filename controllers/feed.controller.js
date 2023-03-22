exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "First post",
        content: "This is just a description for the first post.",
      },
    ],
  });
};

exports.postSinglePost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //db
  res.status(201).json({
    message: `Post created successfully! Title is ${title}`,
  });
};
