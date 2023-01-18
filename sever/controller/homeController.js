const util = require("../util/homeUtil");

const uploadBlog = async (req, res) => {
  let data = req.body;
  let d = new Date();
  date = [
    d.getFullYear(),
    ("0" + (d.getMonth() + 1)).slice(-2),
    ("0" + d.getDate()).slice(-2),
  ].join("-");
  data.date = date;
  data.delete = false;
  util
    .upladBlog(data)
    .then(() =>
      res.json({ status: true, Message: "Blog uploaded sucessfully..." })
    )
    .catch(() => res.json({ status: false, Message: "failed to upload...." }));
};
const getAllBlog = async (req, res) => {
  util
    .viewAllBlog()
    .then((blog) => res.json({ status: true, allBlog: blog }))
    .catch(() =>
      res.json({ status: false, Message: "failed to get all blog...." })
    );
};
const deleteBlog = async (req, res) => {
  console.log("on delete");
  let id = req.params.id;
  console.log(id);
  util
    .delectBloge(id)
    .then((blog) => res.json({ status: true, allBlog: blog }))
    .catch(() => res.json({ status: false, Message: "failed...." }));
};
const editBlog = async (req, res) => {
  let id = req.params.id;
  util
    .editBloge(id, req.body)
    .then(() => res.json({ status: true }))
    .catch(() => res.json({ status: false, Message: "failed...." }));
};
const blogById = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  util
    .blogById(id)
    .then((blog) => res.json({ status: true, allBlog: blog }))
    .catch(() => res.json({ status: false, Message: "failed...." }));
};

// exports
module.exports = {
  uploadBlog,
  getAllBlog,
  deleteBlog,
  editBlog,
  blogById,
};
