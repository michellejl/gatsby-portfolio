import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import socialStyles from "./social.module.scss"

const Social = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulOnlineIdentity {
          edges {
            node {
              title
              url
              handle
              icon {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <aside className={socialStyles.social}>
        {data.allContentfulOnlineIdentity.edges.map(({node}) => (
          <div key={node.id} className={`${node.title}`}>
            <a href={node.url} target="_blank" rel="noopener noreferrer">
             <img src={node.icon.file.url} className={socialStyles.icon} alt={`${node.title} icon`} title={node.handle} />
            </a>
          </div>
        ))}
      </aside>
    )}
  />
)

export default Social