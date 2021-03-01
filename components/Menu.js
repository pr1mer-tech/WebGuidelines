import { Collapse, Description, Divider, Link, Row, Spacer, Text, useMediaQuery } from "@geist-ui/react";
import NextLink from "next/link"
export default function Menu({ categories }) {
    const menu = <>
    <NextLink href="/">
        <Text h4 style={{ cursor: "pointer" }}>Web Guidelines</Text>
    </NextLink>
    <Divider />
    { categories && 
        Object.values(categories).map(category => <Description key={category.name} title={ category.name } content={
            <>
            {
                category.pages.map(page => <Row>
                    <NextLink key={page.url} href={ page.url }>
                        <Link block href={ page.url }>{ page.name.split("-").join(" ") }</Link>
                    </NextLink>
                </Row>)
            }
            <Spacer y={.8}/>
            </>
        }/>)
    }
    </>
    
    return <div className="menu">
        <Collapse title="Menu" className="small-menu">
            { menu }
        </Collapse>
        <div className="big-menu">
            { menu }
        </div>
    </div>
}