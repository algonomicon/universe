import React, { useState } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

export default ({ data }) => {
  const [chunk, setChunk] = useState(3)

  return (
    <Layout>
      <Helmet>
        <title>Datasets | Algonomicon</title>
      </Helmet>
      <Main>
        {data.datasets.nodes.slice(0, chunk).map((node, i) => (
          <Post key={i}>
            <Link to={`/datasets/${node.frontmatter.slug}`}>
              <div>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.excerpt}</p>
              </div>
            </Link>
          </Post>
        ))}
        {chunk < data.datasets.nodes.length && (
          <Button onClick={() => setChunk(chunk + 5)}>Load more...</Button>
        )}
      </Main>
      <Sidebar>
        <Search />
        <Sort />
        <Tags />
      </Sidebar>
    </Layout>
  )
}

const Button = styled.a`
  display: block;
  margin: 1rem 0;
  cursor: pointer;
`

export const query = graphql`
  {
    datasets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "datasets" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`