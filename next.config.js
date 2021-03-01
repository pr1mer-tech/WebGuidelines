const fs = require("fs")
const path = require("path")
const { createSitemap } = require("esm")(module)("./pages/sitemap.xml");

function pages(dir) {
	return fsSync.readdirSync(`${process.cwd()}/${dir}`).map(file => {
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
	webpack: (config, {
		isServer
	}) => {
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
	},
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		delete defaultPathMap['/sitemap.xml'];
		fs.writeFileSync(path.join(outDir, '/sitemap.xml'), createSitemap(JSON.parse(pagesList)))

		return defaultPathMap
	}
}