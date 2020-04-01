import React from "react"
import { CovidStatus } from "../components/covid-status"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GuncelDurum = () => {
  return (
    <Layout>
      <SEO title="Covid-19 Güncel Durum" />
      <CovidStatus />
    </Layout>
  )
}

export default GuncelDurum
