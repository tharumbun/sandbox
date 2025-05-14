export const SITE = {
  website: "https://tharum.com", // replace this with your deployed domain
  author: "Bun Tharum",
  profile: "https://tharum.com",
  desc: "Blogging from the heart of Cambodia",
  title: "Tharum: Musings from Cambodia",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: false,
  },
  dynamicOgImage: true,
} as const;
