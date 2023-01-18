const collection = require("../config/collection");
const db = require("../config/connection");
const { ObjectId } = require("mongodb");

module.exports = {
  upladBlog: async (data) =>
    new Promise(async (resolve, reject) => {
      db.get()
        .collection(collection.BLOG_COLLECTION)
        .insertOne(data)
        .then(() => resolve())
        .catch(() => reject());
    }),
  viewAllBlog: async () =>
    new Promise(async (resolve, reject) => {
      try {
        console.log("here");
        let blog = await db
          .get()
          .collection(collection.BLOG_COLLECTION)
          .find({ delete: false })
          .sort({ _id: -1 })
          .toArray();
        resolve(blog);
      } catch (error) {
        reject(error);
      }
    }),
  delectBloge: async (id) =>
    new Promise(async (resolve, reject) => {
      let blog = await db
        .get()
        .collection(collection.BLOG_COLLECTION)
        .updateOne({ _id: ObjectId(id) }, { $set: { delete: true } })
        .then(async () => {
          let blog = await db
            .get()
            .collection(collection.BLOG_COLLECTION)
            .find({ delete: false })
            .sort({ _id: -1 })
            .toArray();
          resolve(blog);
        })
        .catch(() => reject());
    }),
  editBloge: async (id, data) =>
    new Promise(async (resolve, reject) => {
      let blog = await db
        .get()
        .collection(collection.BLOG_COLLECTION)
        .updateOne(
          { _id: ObjectId(id) },
          { $set: { subject: data.subject, details: data.details } }
        )
        .then(() => resolve())
        .catch(() => reject());
    }),
  blogById: async (id) =>
    new Promise(async (resolve, reject) => {
      db.get()
        .collection(collection.BLOG_COLLECTION)
        .findOne({ _id: ObjectId(id) })
        .then((blog) => resolve(blog))
        .catch((err) => reject());
    }),
};
