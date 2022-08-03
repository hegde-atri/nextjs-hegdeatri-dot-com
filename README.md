# nextjs-hegdeatri-dot-com

My website redesigned using The Next.js framework. You can visit it at [https://next.hegdeatri.com](https://next.hegdeatri.com). It is still in development and is the successor to my old website - [https://hegdeatri.com](https://hegdeatri.com) which you check out [here](https://github.com/hegde-atri/hegdeatri-dot-com). It has a much better light/dark theme and I also have much more cotrol making it easier to add/remove features as needed as opposed to my old site, where I was using the [Zola](https://getzola.org) theme.

## Instructions

If you want to use this as a template for your website then follow the instructions below and make sure to give me credit in the website :smile:.

- First clone this repository.
```bash
git clone https://github.com/nextjs-hegdeatri-dot-com
```
- You will need to delete all the files in the posts and projects directory. You will need atleast on markdown file in each directory with the necessary frontmatter, or else it will not run.
- You will need to change the social links or comment them out in `./components/Socials.js`
- Change the landing page by modifying `./pages/index.js`
- Almost all pages inside the `./components/Layout.js`, so modify that if you want to change the layout css.
- To change the colour sheme, modify `./tailwind.config.js` and `./styles/globals.css`.
- All images, or any other files that you reference will need to placed in the `./public` directory. here you can also change the favicon.
- You can change how many posts appear on a single page by modifying the `./config/index.js` file.


### TODO

- Fix search results open wrong url for projects.
