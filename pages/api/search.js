import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function handler(req, res) {
  let posts;

  if (process.env.NODE_ENV === "production") {
    posts = require('../../cache/data').posts
  } else {
    const postFiles = fs.readdirSync(path.join("posts"));
    const projectFiles = fs.readdirSync(path.join("projects"));

    const postFrontmatter = postFiles.map((filename) => {
      const slug = filename.replace(".md", "");
      const postsWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );
      const { data: frontmatter } = matter(postsWithMeta);

      return {
        slug,
        frontmatter,
      };
    });
    const projectFrontmatter = projectFiles.map((filename) => {
      const slug = filename.replace(".md", "");
      const projectsWithMeta = fs.readFileSync(
        path.join("projects", filename),
        "utf-8"
      );
      const { data: frontmatter } = matter(projectsWithMeta);

      return {
        slug,
        frontmatter,
      };
    });
    posts = postFrontmatter.concat(projectFrontmatter);
  }

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1
  );
  // console.log(results)
  res.status(200).json(results);
}
