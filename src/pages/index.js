import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroLogo from "../components/animations/hero-anim"

import AlbumCover from "../images/album-cover.png"
import RiftGlyphs from "../images/rift-glyphs.svg"

import Leo from "../images/leo.png"
import Will from "../images/will.png"
import Cory from "../images/cory.png"
import Jon from "../images/jon.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="hero--section"
      data-sal="fade-in"
      data-sal-duration="1200"
      data-sal-easing="ease"
    >
      <HeroLogo/>
    </section>
    <section className="section--dark">
      <div className="container">
        <img src={RiftGlyphs} alt="Rift glyphs" style={{maxWidth: "300px", margin: "0 auto", display: "block", position: "relative", top: "60px"}}
        data-sal="slide-up"
        data-sal-duration="1200"
        data-sal-easing="ease"
        />
        <p style={{ padding: "6em 2em", fontSize: "1.5rem" }}>
          {" "}
          The band known as Rift was formed in 2006 by the founding memebrs Leo
          Lopez, William dos Santos, Cory Green, & Jon Matheson. Self produced, the band created and promoted their music
          over the course of four years. This site is dedicated to the group, to
          their families, friends, and fans that supported them.
        </p>
      </div>
    </section>
    <section>
      <div className="container">
        <h1 className="main-title">Members</h1>
        <div
          className="col-container d-f"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease"
        >
          <div className="col">
            <img className="avatar avatar-tri" src={Leo} alt="picture of Leo" />
          </div>
          <div className="col">
            <h3>
              Leo Lopez <span>Bass, Guitar</span>
            </h3>
            <p>
              Leo was one of the first founding members of Rift. Although he
              first started as the lead guitarist, Leo found joy in the rhythm
              section kicking out some heavy bass guitar.
            </p>
          </div>
        </div>
        <div
          className="col-container d-f"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease"
        >
          <div className="col">
            <h3>
              William dos Santos <span>Lead Vocals, Keys</span>
            </h3>
            <p>
              Will started the band with Leo during their second year of high
              school. Will, stepped up for lead vocals and keys after a few
              years. He describes himself less as a singer and more of a "song
              and dance man."
            </p>
          </div>
          <div className="col">
            <img className="avatar avatar-circle" src={Will} alt="picture of Will" />
          </div>
        </div>
        <div
          className="col-container d-f"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease"
        >
          <div className="col">
            <img className="avatar avatar-hex" src={Cory} alt="picture of Cory" />
          </div>
          <div className="col">
            <h3>
              Cory Green <span>Drums, Vocals</span>
            </h3>
            <p>
              Cory, the passion of the group, played alongside his father Ronald
              Green for years before joining Rift in 2005 before the band was
              named. Cory helped write the bulk of the lyrics on the later
              albums and maintained a constant passion for the music.
            </p>
          </div>
        </div>
        <div
          className="col-container d-f"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-easing="ease"
        >
          <div className="col">
            <h3>
              Jonathan Matheson <span>Lead Guitar, Vocals</span>
            </h3>
            <p>
              Jon Matheson, a mutli-talented musician and song writer, has been
              playing and performing music for most of this life. He wrote and
              produced all of the Rift albums with studio quality sound, all
              while recording in the garage.
            </p>
          </div>
          <div className="col">
            <img className="avatar avatar-square" src={Jon} alt="picture of Jon" />
          </div>
        </div>
      </div>
    </section>
    <section className="section--dark section--album">
      <div className="container">
        <div className="col-container d-f">
          <div className="col"
          data-sal="slide-right"
          data-sal-duration="1200"
          data-sal-easing="ease"
          >
            <img
              src={AlbumCover}
              alt="Album Cover Design"
              className="album-cover"
            />
          </div>
          <div className="col ai-c jc-c" style={{ padding: "2em" }}
          data-sal="slide-left"
          data-sal-duration="1200"
          data-sal-easing="ease"
          >
            <h3>Listen to Rift: Revival</h3>
            <p>Fancy a walk down memory lane? Take a listen to the album on:</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
