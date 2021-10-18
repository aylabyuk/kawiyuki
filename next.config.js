/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'picsum.photos',
      'i.pravatar.cc',
      'kawiyuki.herokuapp.com',
      'kawiyuki.s3.ap-southeast-1.amazonaws.com'
    ]
  }
}
