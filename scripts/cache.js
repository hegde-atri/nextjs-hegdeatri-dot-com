const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function postData() {
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
  const posts = postFrontmatter.concat(projectFrontmatter);

  return `export const posts = ${JSON.stringify(posts)}`;
}

try {
  fs.readdirSync("cache");
} catch {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", postData(), function (err) {
  if (err) return console.log(err);
  console.log("[X] Posts Cached");
});
