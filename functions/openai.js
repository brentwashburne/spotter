import OpenAI from "openai"

const openai = new OpenAI({
    organization: 'org-zsZ0I0aRghe5V7rFKFT6TbsA',
})

const key = "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"
//const org_id = "org-zsZ0I0aRghe5V7rFKFT6TbsA"
const url = 'https://api.openai.com/v1/models'

async function get() {
    console.log('url', url)
    const res = await fetch(url, {headers: {
        Authorization: 'Bearer '+key}})
    console.log('res', res)
}

get()
