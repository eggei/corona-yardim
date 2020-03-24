import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { CovidStatus } from "../components/covid-status"

// import Button from "@material-ui/core"

const IndexPage = ({ history }) => (
  <Layout>
    <SEO title="Anasayfa" />

    {/* <Button variant="contained" color="primary">
      Primary
    </Button> */}

    <h3>Merhaba,</h3>
    <h4>bu site henüz yapım aşamasındadır ve</h4>
    <p>
      Türkiye'deki COVID-19 salgınının önüne geçilebilmesi için gönüllü, sivil
      yardımlaşma platformu girişimidir.{" "}
      <a
        href="mailto:info@coronayardim.com"
        target="_top"
        rel="noopener noreferrer"
      >
        info@coronayardim.com
      </a>
    </p>

    {/* <br /> */}
    <hr />
    <CovidStatus />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
