import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Usp from "../components/usp"
import Advantages from "../components/advantages"
import Users from "../components/users"

const IndexPage = () => (
  <Layout>
    <SEO title="Hudub Contract Management" keywords={[`contract`, `management`, `developers`]} />
      <div className="ui vertical center aligned segment">
        <Usp />
        <Link to="/contact/">
          <div class="ui massive info message">
            <p>Hudub will be launched soon.</p>
              <button class="ui massive primary button"  tabindex="0">
                Keep me updated!
              </button>
          </div>
        </Link>
        <div className="ui divider"/>
        <Users />
        <div className="ui divider"/>
        <Advantages />
      </div>
  </Layout>
)

export default IndexPage
