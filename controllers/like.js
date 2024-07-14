//import model
const BlogPost = require("../model/BlogPost");

//define route handler
exports.like = async (req, res) => {
  try {
    const { id } = req.params;
    const { liker } = req.body;

    const post = await BlogPost.findById({ _id: id });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const alreadyLiked = post.likes.some((like) => like.liker === liker);
    if (alreadyLiked) {
      return res.status(400).json({
        success: false,
        message: "Post is already liked by the user",
      });
    }

    post.likes.push({ liker });
    await post.save();

    res.status(200).json({
      success: true,
      data: post,
      message: "Liker added to the post",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to add like to the post",
    });
  }
};
