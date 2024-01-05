import { MetadataRoute } from 'next'

interface sitemapInterface {
    url: string,
    lastModified: Date,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: number,
}

const baseURL:string = "http://localhost:3001"

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