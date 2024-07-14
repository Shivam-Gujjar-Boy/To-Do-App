//import model
const BlogPost = require("../model/BlogPost");

//define route handler
exports.createComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { commenter, comment } = req.body;

    const post = await BlogPost.findById({ _id: id });

    if (!post) {
      return res.status(400).json({
        success: false,
        messege: "Post not found",
      });
    }

    post.comment.push({ commenter, comment });
    await post.save();

    res.status(200).json({
      success: true,
      data: post,
      messege: "Comment added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to add comment",
    });
  }
};
