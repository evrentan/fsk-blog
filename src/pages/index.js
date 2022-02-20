import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Container from "../components/container";

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  const nodeArray = data.allMdx.edges;

  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value

    const posts = data.allMdx.edges || []

    const filteredData = posts.filter(post => {
      const { title } = post.node.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  /**
   *       <div>
        <input
          className="searchInput"
          type="text"
          aria-label="Search"
          placeholder="Type to filter posts..."
          onChange={handleInputChange}
        />
      </div>
   */

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : nodeArray

  return (
    <Container>
      <SEO title={siteTitle} description={siteDescription} />
      <h1 className="home-title">{siteTitle}</h1>
      <div className="input-group container mb-5 mt-5">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search Post" 
          aria-label="Search" 
          aria-describedby="basic-addon1"
          onChange={handleInputChange} />
      </div>
      {posts.map((post, index) => {
        const title = post.node.frontmatter.title || post.node.fields.slug;

        return (
          <div className="container">
            <div className="card">
              <div className="card-title" key={post.node.fields.slug}>
                <Link className="card-link" to={post.node.fields.slug}>
                  <h1 className="card-title">{title}</h1>
                  <p className="card-date">{post.node.frontmatter.date}</p>
                  <p className="card-description">{post.node.frontmatter.description}</p>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default Home

export const pageQuery = graphql`
{
  site {
  siteMetadata {
    title
  }
}
allMdx(sort:{order:DESC, fields:frontmatter___date}) {
edges {
  node {
    excerpt
    id
    frontmatter {
      title 
      date(formatString: "Do MMMM YYYY ")
      description
    }
    timeToRead
    fields {
      slug
      
    }
  }
}
}
}
`;
