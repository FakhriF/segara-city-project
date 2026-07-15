import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const newsCollection = defineCollection({
    loader: glob({ base: "./src/content/news", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        category: z.enum(['Ekonomi', 'Politik & Pemerintahan', 'Infrastruktur', 'Bencana', 'Lalu Lintas', 'Sosial', 'Transportasi', 'Lingkungan', 'Tata Kota']),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        isHeadline: z.boolean().default(false),
        summary: z.string().optional(),
    })
})

export const collections = {
    news: newsCollection
}