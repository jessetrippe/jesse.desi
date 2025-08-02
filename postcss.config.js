module.exports = {
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV == "production"
      ? [require('cssnano')({})]
      : [])
  ]
}
