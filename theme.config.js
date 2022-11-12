// theme.config.js
const config = {
    project: {
      link: 'https://github.com/pr1mer-tech/WebGuidelines', // GitHub link in the navbar
    },
    chat: {
      link: "http://discordapp.com/users/240036699734933504", // Discord link in the navbar
    },
    docsRepositoryBase: 'https://github.com/pr1mer-tech/WebGuidelines/pages', // base URL for the docs repository
    titleSuffix: ' – Web Guidelines',
    toc: true,
    navigation: {
      next: true,
      prev: true
    },
    unstable_flexsearch: true,
    darkMode: true,
    footer: {
      text: `MIT ${new Date().getFullYear()} © Pr1mer Tech.`
    },
    editLink: {
      text: "Edit this page on GitHub",
    },
    logo: <>
      <span className="mx-2 hidden md:inline" style={{ margin: "0 8px", whiteSpace: "nowrap", fontWeight: 800 }}>Web Guidelines</span>
      <span className="text-gray-600 font-normal hidden md:inline whitespace-no-wrap" style={{ whiteSpace: "nowrap" }}>by Pr1mer</span>
    </>,
    head: <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/site.webmanifest"/>
			<meta property="og:title" content="Web Guidelines"/>
			<meta property="og:site_name" content="Pr1mer Tech"/>
			<meta property="og:url" content="https://guidelines.pr1mer.tech/"/>
			<meta property="og:description" content="Guidelines for making the web a better place."/>
			<meta property="og:type" content="website"/>
			<meta property="og:image" content="https://guidelines.pr1mer.tech/banner.jpg"/>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          media="print"
          onLoad="this.media='all'"
        />
    </>
}
export default config