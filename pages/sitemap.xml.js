import React from 'react';

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
        const pagesList = JSON.parse(process.env.pagesList)

        res.setHeader('Content-Type', 'text/xml');
        res.write(createSitemap(pagesList));
        res.end();
    }
}

export default Sitemap;