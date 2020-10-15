import React from 'react';
import fs from "fs";

const createSitemap = (pages) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://guidelines.pr1mer.tech/</loc>
        </url>
        ${pages
          .map((page) => {
            return `
                    <url>
                        <loc>https://guidelines.pr1mer.tech${page.url.split(" ").join("%20")}</loc>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
    static async getInitialProps({
        res
    }) {
        function pages(dir) {
            return fs.readdirSync(`${process.cwd()}/${dir}`).map(file => {
                return {
                    name: file.split(".")[0],
                    url: `/${dir}/${file.split(".")[0]}`
                }
            });
        }
    
        const pagesList = [
            pages("01-Web"),
            pages("02-Architecture"),
            pages("03-UserInteraction"),
            pages("04-VisualDesign"),
            pages("05-IconsImages"),
            pages("06-PageAnatomy")
        ].flat().filter(entry => entry.name != "")

        res.setHeader('Content-Type', 'text/xml');
        res.write(createSitemap(pagesList));
        res.end();
    }
}

export default Sitemap;