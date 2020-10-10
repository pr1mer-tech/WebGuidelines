import Menu from '../components/Menu'
import { Text, Note, Page, Grid } from "@geist-ui/react";

export default function Home({ categories }) {
  return (<Page>
    <Grid.Container gap={2} justify="center">
        <Grid xs={24} md={6}>
            <Menu categories={ categories }/>
            {/* {JSON.stringify(categories)} */}
        </Grid>
        <Grid xs={24} md={18}>
            <Text h1>Web Guidelines</Text>
            <Text p>
              As a web designer, you have the opportunity to deliver an extraordinary website that rises to the top of the search page. To do so, you’ll need to meet high expectations for quality and functionality. At Pr1mer, we created theses guidelines to help you meet those expectations. Although they follow our interpretation of the requirements of the modern web, we have been very meticulous in making sure that they are usable in most cases.
              <Text p>Three primary themes differentiate the web from other platforms:</Text>
              <ul>
                <li>
                  <p><strong>Versatility</strong>. The web is an extremely versatile platform: absolutely everything can
                    be a website. People go on the web to find information (newspapers, blogs, Wikipedia, ...), have fun
                    (YouTube, Netflix, ...), communicate (social networks), shop (e-commerce), or even work (Google
                    Docs, Excel, Keynote, ...).</p>
                </li>
                <li>
                  <p><strong>Punctuality</strong>. When using the web, people expect to find what they were looking for
                    in a matter of seconds. There is no time for disruptive elements or time-consuming processes. The
                    web pages must be clear and expressive so that the end user can determine for himself of the
                    interest he may have. It’s important to make all of your users’ most common tasks easily available.
                  </p>
                </li>
                <li>
                  <p><strong>Adaptability and flexibility</strong>. Regardless of your operating system, device, or
                    location, you expect every web page to fit your use perfectly. Recently we have seen a huge increase
                    in traffic on mobile devices, so it is important to support all screen formats. A flexible web app
                    facilitates learning through discoverability.</p>
                </li>
              </ul>
            </Text>
            <Note>
              Use these guidelines for your website. We have tried to be as broad as possible. To implement these guidelines, we have relied heavily on Apple's Human interface guidelines, Google's advice on <a href="https://web.dev">web.dev</a> and the WebKit blog. We are not affiliated with any of these resources and this resource is a simple adaptation, which should not be confused in any way.
            </Note>
        </Grid>
    </Grid.Container>
  </Page>)
}

import fs from "fs"
export async function getStaticProps() {
    function pages(dir) {
        return fs.readdirSync(`${process.cwd()}/${dir}`).map(file => {
            return {
                name: file.split(".")[0],
                url: `/${dir}/${file.split(".")[0]}`
            }
        });
    }

    const categories = {
        "01-Web": {
            name: "Web",
            pages: pages("01-Web")
        },
        "02-Architecture": {
            name: "Architecture",
            pages: pages("02-Architecture")
        },
        "03-UserInteraction": {
            name: "User Interaction",
            pages: pages("03-UserInteraction")
        },
        "04-VisualDesign": {
            name: "Visual Design",
            pages: pages("04-VisualDesign")
        },
        "05-IconsImages": {
            name: "Icons and Images",
            pages: pages("05-IconsImages")
        }
    }
    return {
        props: {
            categories
        }
    }
}