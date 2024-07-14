//import model
const BlogPost = require("../model/BlogPost");

//define route handler
exports.getPosts = async (req, res) => {
  try {
    //fetch all posts from database
    const posts = await BlogPost.find({});

    res.status(200).json({
      success: true,
      data: posts,
      message: "All posts retrieved",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve posts",
    });
  }
};
