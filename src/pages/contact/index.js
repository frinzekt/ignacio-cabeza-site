import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <a href="https://linkedin.com/in/ignaciocabeza">Linkedin</a>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
