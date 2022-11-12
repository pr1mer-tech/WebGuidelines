import nextra from 'nextra'
const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    // unstable_stork: true,
    unstable_contentDump: true,
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

export default withNextra()