const fs = require("fs")
function pages(dir) {
  return fs.readdirSync(`${process.cwd()}/${dir}`).map(file => {
      return {
          name: file.split(".")[0],
          url: `/${dir}/${file.split(".")[0]}`
      }
  });
}

const pagesList = JSON.stringify([
  pages("01-Web"),
  pages("02-Architecture"),
  pages("03-UserInteraction"),
  pages("04-VisualDesign"),
  pages("05-IconsImages"),
  pages("06-PageAnatomy")
].flat().filter(entry => entry.name != ""))

module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    },
    env: {
      pagesList
    }
  }