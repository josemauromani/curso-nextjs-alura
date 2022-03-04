module.exports = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/questions",
        destination: "/faq",
        permanent: true,
      },
    ];
  },
};
