import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skkGozzmWeUkXkK8wxnThgOgFm6oVdD7uRZFVOr6FZfRfJjNnykqk3o7Bc5dBItx2n9IWVYzRGgnQjA6T9qOMtOTiUhccI8Dwx0MKyPgR2NqmovqrXiUWEyqcRU5TgNqGmBNglMBLmPsNvx3vfDcSCoTI0TgsMhjfyqqhb2anEcvAj4lWfvj",
})
