// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
     images: {
       domains: ['applegate-paul.mo.cloudinary.net', 'pbs.twimg.com'],
       formats: ['image/avif', 'image/webp']
     }
})
