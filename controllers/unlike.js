//import model
const BlogPost = require("../model/BlogPost");

//define route handler
exports.unlike = async (req, res) => {
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

    const index = post.likes.findIndex((like) => like.liker === liker);
    if (index === -1) {
      return res.status(400).json({
        success: false,
        message: "This user have never liked this post before",
      });
    }

    post.likes.splice(index, 1);
    // const liked = post.likes.some((like) => like.liker === liker);
    // if (!liked) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "This user have never liked this post",
    //   });
    // }
    // post.likes.filter((like) => like.liker !== liker);
    await post.save();

    res.status(200).json({
      success: true,
      data: post,
      message: "liker removed successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to remove the liker from likes",
    });
  }
};
