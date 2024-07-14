//import model
const BlogPost = require("../model/BlogPost");

//define route handler
exports.getComments = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await BlogPost.findById({ _id: id });

    const comments = post.comment;
    if (comments.length === 0) {
      return res.status(400).json({
        success: false,
        messege: "No comments found on this post",
      });
    }

    res.status(200).json({
      success: true,
      data: comments,
      messege: "commenst retrieved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      messege: "failed to get comments from the post",
    });
  }
};
