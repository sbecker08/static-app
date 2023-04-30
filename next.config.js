module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mmimageservice.azurewebsites.net',
          port: '',
          pathname: '/api/image/property/**',
        },
        {
          protocol: 'https',
          hostname: 'www.marcusmillichap.com',
          port: '',
          pathname: '/**',
        }
      ]
    },    
    output:"standalone"
  }