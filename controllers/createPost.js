//import model
const BlogPost = require("../model/BlogPost");

//define route handler
exports.createPost = async (req, res) => {
  try {
    //extract data post from request body
    const { title, author, content } = req.body;

    const response = await BlogPost.create({ title, author, content });

    res.status(200).json({
      success: true,
      data: response,
      message: "Post created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "There was an error creating the post",
    });
  }
};
