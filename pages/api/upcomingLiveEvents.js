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
                direction: 'ascending'
            }
        ],
        filter: {
            property: 'eventType',
            select: {
                equals: 'Live Tutorial'
            }
        }
    })

    const events = results.map((page) => {
        const status = page.properties.eventStatus.rollup.array[0].select.name
        if (status === 'Live' || status === 'Published') {
            return {
                id: page.id,
                title: page.properties.eventName.rollup.array[0].title[0].text.content,
                date: page.properties.eventDate.date.start,
                time: page.properties.eventTime.rollup.array[0].text[0].text.content,
                live: (page.properties.eventStatus.rollup.array[0].select.name === 'Live') ? true : false,
                img: page.properties.eventImg.rollup.array[0].url,
                link: page.properties.eventLink.rollup.array[0].url
            }
        }

    })

    res.status(200).json(events)
}