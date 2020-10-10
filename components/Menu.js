import { Collapse, Description, Divider, Link, Row, Spacer, Text, useMediaQuery } from "@geist-ui/react";
import NextLink from "next/link"
export default function Menu({ categories }) {
    const isXS = useMediaQuery('sm', { match: 'down' })

    const menu = <>
    <NextLink href="/">
        <Text h4>Web Guidelines</Text>
    </NextLink>
    <Divider />
    { categories && 
        Object.values(categories).map(category => <Description key={category.name} title={ category.name } content={
            <>
            {
                category.pages.map(page => <Row>
                    <NextLink key={page.url} href={ page.url }>
                        <Link block href={ page.url }>{ page.name }</Link>
                    </NextLink>
                </Row>)
            }
            <Spacer y={.8}/>
            </>
        }/>)
    }
    </>

    const collapse = <Collapse title="Menu" style={{
        position: "relative",
        top: "calc(-16pt * 2.5)"
    }}>
        { menu }
    </Collapse>
    return isXS ? collapse : menu
}