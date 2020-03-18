import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
const Dot = ({ color }) => (
  <span
    style={{
      borderRadius: "100%",
      height: 20,
      width: 20,
      backgroundColor: color,
      display: "inline-block",
      margin: "0 16px 0 8px",
    }}
  />
)
const IndexPage = () => (
  <Layout>
    <SEO title="Anasayfa" />

    {/* <Button variant="contained" color="primary">
      Primary
    </Button> */}
    <h3>Merhaba,</h3>
    <h4>bu site henüz yapım aşamasındadır ve</h4>
    <p>
      Türkiye'deki COVID-19 salgınının önüne geçilebilmesi için gönüllü sivil
      yardımlaşma platformu girişimidir. Tamamen gönüllü olarak yardım amaçlı
      hazırlanmaktadır. Yardımda bulunmak isteyen yazılımcı arkadaşlar veya
      sorusu olanlar:
      <a href="mailto:info@coronayardim.com" target="_top">
        info@coronayardim.com
      </a>
    </p>
<hr />
    <h3 style={{ margin: "16px 0" }}>Dünyadaki COVID-19 güncel durumu:</h3>
    <p style={{ margin: 0 }}>Şu ana kadar bildirilmiş,</p>
    <div
      style={{
        margin: 0,
        width: 380,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Dot color="red" />
      Vaka
      <Dot color="lightgray" />
      Ölüm
      <Dot color="rgb(112, 168, 0)" />
      İyileşen hasta
    </div>
    <div>
      <div
        style={{
          overflow: "hidden",
          height: 110,
          padding: "0 16px",
          width: 404,
        }}
      >
        <iframe
          style={{ transform: "translate(-32px, -130px)" }}
          title="Coronavirus COVID-19 Global Cases by Johns Hopkins CSSE"
          width="440"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.arcgis.com/apps/opsdashboard/index.html#/5c7f096096ed482395f6a626150366e2"
        ></iframe>
      </div>
    </div>

    <h3 style={{ margin: "24px 0 16px 0" }}>
      Türkiye'deki COVID-19 güncel durumu:
    </h3>
    <p style={{ margin: 0 }}>Detaylar için kırmızı alanlara tıklayınız.</p>
    <div>
      <iframe
        width="650"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="2019-nCoV"
        src="https://gisanddata.maps.arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=39.3688651,31.6724762,37.181489,44.743051&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
      ></iframe>
    </div>
    <p>
      Kaynak:{" "}
      <a href="https://coronavirus.jhu.edu/" target="_blank">
        JHU
      </a>{" "}
      |<i>Data is fetched from Johns Hopkins University resources</i>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
