module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mmimageservice.azurewebsites.net',
          port: '',
          pathname: '/api/image/property/**',
        },
      ],
    },
  }