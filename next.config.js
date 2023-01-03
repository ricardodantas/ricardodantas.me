module.exports = {
  async redirects() {
    return [
      {
        source: '/newsletter',
        destination: 'https://ricardodantas.substack.com',
        permanent: false,
      },
    ]
  },
}
