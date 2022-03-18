import cheerio from "cheerio";

export default (html) => {

    const metaPageQueriesTag = {
      image: [
        {
          query: `meta[property='og:image']`,
          data: 'content'
        },
        {
          query: `meta[name='twitter:image']`,
          data: 'content'
        },
        {
          query: `meta[itemprop='image']`,
          data: 'content'
        },
      ],
      keywords: [
        {
          query: `meta[name="keywords"]`,
          data: `content`
        },
        {
          query: `meta[itemprop="keywords"]`,
          data: `content`
        },
      ],
      description: [
        {
          query: `meta[property="og:description"]`,
          data: `content`
        },
        {
          query: `meta[name="twitter:description"]`,
          data: `content`
        },
        {
          query: `meta[name="description"]`,
          data: `content`
        },
        {
          query: `meta[itemprop="description"]`,
          data: `content`
        },
      ]
    }
  
    const metaPage = {
      image: '',
      keywords: '',
      description: '',
    }
  
    if(!html) return metaPage
  
    const page = cheerio.load(html)
  
    for (const meta of Object.keys(metaPage)) {
      for (let i = 0; i < metaPageQueriesTag[meta].length; i++) {
        const data = page(metaPageQueriesTag[meta][i].query).attr(metaPageQueriesTag[meta][i].data)
        if(!data) continue
        metaPage[meta] = data
        break
      }
    }
  
    metaPage.title = page('title').text()
  
    return metaPage
  
  }