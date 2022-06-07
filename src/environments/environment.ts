export const environment = {
  production: false,
  // Contentful API authentication credentials
  contentful: {
    space: "4419diyxun6e",
    accessToken: process.env["CONTENTFUL_READ_ACCESS_TOKEN"] ? process.env["CONTENTFUL_READ_ACCESS_TOKEN"] : "dummy"
  },
};