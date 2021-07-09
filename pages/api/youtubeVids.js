const { Client } = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export default async (req, res) => {
    const database_id = process.env.NOTION_DATABASE_ID
    const { results } = await notion.databases.query({
        database_id: database_id,
        sorts: [
            {
                property: 'eventDate',
                direction: 'descending'
            }
        ],
        filter: {
            property: 'eventType',
            select: {
                equals: 'YouTube'
            }
        }
    })

    const events = results.map((page) => {
        const status = page.properties.ytStatus.rollup.array[0].select.name
        if (status === 'Published') {
            return {
                id: page.id,
                title: page.properties.ytTitle.rollup.array[0].title[0].text.content,
                date: page.properties.eventDate.date.start,
                img: page.properties.ytImg.rollup.array[0].url,
                link: page.properties.ytLink.rollup.array[0].url
            }
        }

    })

    res.status(200).json(events)
}