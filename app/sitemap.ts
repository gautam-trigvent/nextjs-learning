import { MetadataRoute } from 'next'

interface sitemapInterface {
    url: string,
    lastModified: Date,
    changeFrequency: 'daily' | 'weekly'| 'monthly' | 'yearly',
    priority: number,
}

const baseURL:string = "http://localhost:3000"

export default function sitemap(): MetadataRoute.Sitemap {
    const staticURLs = ["/", "/about", "/contact-us", "/terms-of-service"]
    const siteMapArray:sitemapInterface[] =  staticURLs.map((urls:string) => {
        return {
            url: `${baseURL}${urls}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        }
    })
    return siteMapArray;
}