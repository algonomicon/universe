import React from "react"
import styled from "styled-components"
import moment from "moment"
import Minion from "./minion"
import { Link, graphql } from "gatsby"

const Container = styled.div`
  max-height: 100%;
  margin-right: -50px;
  padding-right: 42px;
  overflow: scroll;
  position: absolute;
`

const Post = styled(Link)`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
  display: block;
`

const Title = styled.h4`
  color: hsla(0, 0%, 0%, 0.8);
  margin: 0;
  line-height: 1.625;
`

const Description = styled.p`
  color: hsla(0, 0%, 0%, 0.8);
  margin-bottom: 0;
  font-weight: normal;
`

const Meta = styled.small`
  color: #aaa;
  font-weight: normal;
`

type FeedItemProps = {
  data: {
    excerpt: string
    frontmatter: {
      title: string
      slug: string
      date: string
    }
    fields: {
      collection: string
    }
  }
}

const Item = ({ data }: FeedItemProps) => (
  <Post to={`/${data.fields.collection}/${data.frontmatter.slug}`}>
    <Title>{data.frontmatter.title}</Title>
    <Description>{data.excerpt}</Description>
    <Meta>
      {data.fields.collection[0].toUpperCase() +
        data.fields.collection.slice(1, -1)}{" "}
      from {moment(data.frontmatter.date).fromNow()}
    </Meta>
  </Post>
)

type FeedProps = {
  data: {
    allMarkdownRemark: {
      nodes: {
        excerpt: string
        frontmatter: {
          title: string
          slug: string
          date: string
        }
        fields: {
          collection: string
        }
      }[]
    }
  }
}

export default ({ data }: FeedProps) => {
  const items = data.allMarkdownRemark.nodes.sort((a, b) => {
    return moment(b.frontmatter.date).diff(moment(a.frontmatter.date))
  })

  return (
    <div>
      <Minion>Feed</Minion>
      <Container>
        {items.map((node, i) => (
          <Item key={i} data={node} />
        ))}
      </Container>
    </div>
  )
}
