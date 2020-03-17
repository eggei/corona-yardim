import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Merhaba,</h3>
    <p>
      Bu siteyi Türkiye'deki COVID-19 salgınının önüne geçilebilmesi için gönüllü sivil
      yardımlaşma platformu olarak hazırlamaya çalışıyorum.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
