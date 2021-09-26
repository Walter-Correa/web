import * as z from "zod"

export const AuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  admin: z.boolean(),
  createdAt: z.string(),
})
export type Author = z.infer<typeof AuthorSchema>

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
})
export type Category = z.infer<typeof CategorySchema>

export const PostSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  slug: z.string().optional(),
  body: z.string(),
  short: z.string(),
  first: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().optional(),
  userId: z.string(),
  replyPostId: z.string().optional(),
  rootPostId: z.string().optional(),
  author: AuthorSchema,
  tags: z.string().array(),
  category: CategorySchema,
})
export type Post = z.infer<typeof PostSchema>

