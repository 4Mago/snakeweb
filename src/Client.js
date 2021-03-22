import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "zskr7175",
  dataset: "production",
  token: "",
  useCdn: true,
})
