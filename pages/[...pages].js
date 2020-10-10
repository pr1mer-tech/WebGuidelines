import { Grid, Page } from "@geist-ui/react";
import marked from "marked"
import Menu from "../components/Menu";

export default function Pages({ markdown, categories }) {
    return <Page>
        <Grid.Container gap={2} justify="center">
            <Grid xs={24} md={6}>
                <Menu categories={ categories }/>
                {/* {JSON.stringify(categories)} */}
            </Grid>
            <Grid xs={24} md={18}>
                <p dangerouslySetInnerHTML={{ __html: markdown }}/>
            </Grid>
        </Grid.Container>
    </Page>
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}
export async function getStaticProps({
    params
}) {
    const fs = require('fs');
    const util = require('util');
    const hljs   = require('highlight.js');
    // Convert fs.readFile into Promise version of same    
    const readFile = util.promisify(fs.readFile);

    marked.setOptions({
        highlight: function (code, lang) {
            return hljs.highlight(lang, code).value;
        }
    });

    const path = `${process.cwd()}/${params.pages[0]}/${params.pages[1]}.md`
    const markdown = await readFile(path, 'utf8')
    const html = marked(markdown)

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
            markdown: html,
            categories
        }
    }
}