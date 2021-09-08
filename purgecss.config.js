module.exports = {
  content: ['frontend/javascript/*.js','./output/**/*.html'],
  output: "./output/_bridgetown/static/css",
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
}