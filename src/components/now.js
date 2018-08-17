import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import nowStyles from './now.module.scss'

const Now = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulNow {
          date
          whatIAmDoingAtWork {
            internal {
              content
            }
          }
          personalProjectsIAmWorkingOn {
            internal {
              content
            }
          }
          lifeThingsIWantToShare {
            internal {
              content
            }
          }
        }
      }
    `}
    render={data => (
      <article className={nowStyles.now}>
        <header>
          <h1>Now</h1>
          <p>
            Updated: {data.contentfulNow.date}
          </p>
        </header>
        <div>
          <section>
            <h2>Work Updates:</h2>
            <p>
              {data.contentfulNow.whatIAmDoingAtWork.internal.content}
            </p>
          </section>
          <section>
            <h2>Personal Projects Updates:</h2>
            <p>
              {data.contentfulNow.personalProjectsIAmWorkingOn.internal.content}
            </p>
          </section>
          <section>
            <h2>General Life Updates:</h2>
            <p>
              {data.contentfulNow.lifeThingsIWantToShare.internal.content}
            </p>
          </section>
        </div>
        <footer>
          <p>This section is for keeping a general update on what kinds of things I am up to. For more information on the /now movement, check out <a href="https://sivers.org/nowff" target="_blank" rel="noopener noreferrer">this page by Derek Sivers</a>.</p>
        </footer>
      </article>
    )}
  />
)

export default Now
