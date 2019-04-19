import React from 'react'

export default ({ data }) => (
  <div>
    <p>{data.sanityArticle.title}</p>
    <p>{data.sanityArticle.description}</p>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    sanityArticle(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`