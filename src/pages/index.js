import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { CovidStatus } from "../components/covid-status"
// import CssBaseline from "@material-ui/core/CssBaseline"
// import Typography from "@material-ui/core/Typography"
// import Container from "@material-ui/core/Container"
// import Button from "@material-ui/core"

const IndexPage = ({ history }) => (
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
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div> */}
  </Layout>
)

export default IndexPage
