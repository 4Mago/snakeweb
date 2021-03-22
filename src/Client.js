import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "kpvsh5rt",
  dataset: "production",
  token: "",
  useCdn: true,
})
