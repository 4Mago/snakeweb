import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "qv47i2zl",
  dataset: "production",
  token: "",
  useCdn: true,
})
