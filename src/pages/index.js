import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Anasayfa" />
    <br />
    <p>
      Türkiye'deki COVID-19 salgınının önüne geçilebilmesi için gönüllü, sivil
      yardımlaşma platformu.{" "}
      <a
        href="mailto:info@coronayardim.com"
        target="_top"
        rel="noopener noreferrer"
      >
        info@coronayardim.com
      </a>
    </p>
    <hr />
  </Layout>
)

export default IndexPage
