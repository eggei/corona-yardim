import React from "react"
import { Dot } from "./dot"

export const CovidStatus = () => {
  return (
    <>
      <h3 style={{ margin: "16px 0" }}>Dünyadaki COVID-19 güncel durumu:</h3>
      <p style={{ margin: 0 }}>Şu ana kadar bildirilmiş,</p>
      <div
        style={{
          margin: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Dot color="red">Vaka</Dot>
        <Dot color="lightgray">Ölüm</Dot>
        <Dot color="rgb(112, 168, 0)">İyileşen hasta</Dot>
      </div>
      <div>
        <div
          style={{
            overflow: "hidden",
            height: 64,
            width: "100%",
            borderRadius: 4,
          }}
        >
          <iframe
            style={{ transform: "translate(0, -8px)" }}
            title="Coronavirus COVID-19 Global Cases by Johns Hopkins CSSE"
            width="100%"
            height="112"
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
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          height: 300,
          borderRadius: 4,
          margin: "20px 0"
        }}
      >
        <iframe
          width="100%"
          height="100%"
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
        <a
          href="https://coronavirus.jhu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JHU
        </a>{" "}
        |<i>Data is fetched from Johns Hopkins University resources</i>
      </p>
    </>
  )
}
