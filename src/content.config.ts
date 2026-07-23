import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

// Build log — chronological record of team progress. Subsystem doubles as a tag.
const logCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/log' }),
  schema: z.object({
    date: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    subsystem: z.string().optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

// Aircraft the team has built. Retired vehicles stay published as an archive.
const vehicleCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/vehicles' }),
  schema: z.object({
    name: z.string(),
    year: z.number(),
    status: z.enum(['active', 'retired']),
    specs: z
      .object({
        wingspan: z.string().optional(),
        MTOW: z.string().optional(),
        endurance: z.string().optional(),
        propulsion: z.string().optional(),
      })
      .optional(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    // Link to the vehicle's page on the (future) documentation site. Falls back to /docs when unset.
    docsUrl: z.string().optional(),
  }),
});

const sponsorCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/sponsors' }),
  schema: z.object({
    name: z.string(),
    tier: z.string(),
    logo: z.string(),
    url: z.string().optional(),
  }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    subsystem: z.string().optional(),
    photo: z.string().optional(),
  }),
});

export const collections = {
  log: logCollection,
  vehicles: vehicleCollection,
  sponsors: sponsorCollection,
  team: teamCollection,
};
