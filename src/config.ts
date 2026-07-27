export const SITE = {
  website: "https://tharum.com", // replace this with your deployed domain
  author: "Tharum Bun",
  profile: "https://tharum.com/",
  desc: "Musings from Cambodia",
  title: "ThaRum",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "",
    text: "Edit",
    appendFilePath: false,
  },
  dynamicOgImage: true,
} as const;
