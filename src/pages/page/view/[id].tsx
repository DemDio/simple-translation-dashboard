import {Page} from '@prisma/client';
import superjson from 'superjson';
import {Router} from "next/router";
const _ = require('lodash');

export default function PageView({page}: { page: Page }) {
    return (<>{page}</>);
}

const getServerSideProps = async ({query}: Router['query']) => {
    const pageId = query.id
    const page = await Prisma.prismaClient().page.findUnique({
        where: {
            id: parseInt(pageId)
        }
    });
    const results = superjson.stringify(page);
    return {
        props: {
            page: results
        }
    }
}