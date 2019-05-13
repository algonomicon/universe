export default {
  title: "Article",
  name: "article",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    },
    {
      title: "Author",
      name: "author",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Outline",
      name: "outline",
      type: "array",
      of: [{type: "block"}]
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {type: "block"},
        {type: "code"},
        {type: "image"}
      ]
    }
  ]
}
