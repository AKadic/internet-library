export interface RssFeed {
  get(url: string): Promise<string>
  getMultiple(urls: string[]): Promise<string[]>
}

export class FetchRssFeed implements RssFeed {
  async get(url: string): Promise<string> {
    const response = await fetch(url)
    const text = response.text()

    if (!response.ok) {
      throw Error(await text)
    }

    return text
  }

  async getMultiple(urls: string[]): Promise<string[]> {
    const responses = await Promise.all(urls.map(i => fetch(i)))

    if (responses.some(i => !i.ok)) {
      const failedResponse = responses.find(i => !i.ok)!

      throw Error(await failedResponse.text())
    }

    return Promise.all(responses.map(i => i.text()))
  }
}
