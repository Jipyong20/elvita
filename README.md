# Happy Birthday, Pitahontas

A static birthday website personalized for Pitahontas, from najipOo. It includes an interactive birthday letter, a Toyota GR Supra surprise, and four personal photos that fade and drift through the background.

## Deploy to Vercel

1. Upload this folder to a GitHub repository, or add it to an existing repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. If this folder is inside a larger repository, set **Root Directory** to `ucapan-ulang-tahun`.
4. Choose **Other** as the framework preset. Leave the build command and output directory empty, then click **Deploy**.

This is a static site: `index.html` is the entry point, and it does not need a build step. The photos and Supra image are included in `images/` and load from the deployed site.

## Personalize it

- Edit the message and page copy in `index.html`.
- Replace the four `images/memory-*.jpg` files to change the floating background photos.
- Replace `images/supra.png` to use a different car image.
- The **Add photos** button lets a visitor temporarily change the background photos in their current browser session. The included photos are already bundled for every visitor.
- Adjust the burgundy and maroon color palette in `style.css`.
