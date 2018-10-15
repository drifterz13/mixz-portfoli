import '../assets/css/index.css'

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal'
import Img from 'gatsby-image'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Works from '../components/Work';
import About from '../components/About';

const Title = styled.h1`
  position: absolute;
  top: 3em;
  width: 10em;
  right: 2em;
  color: #f1f1f1;
  @media (max-width: 699px) {
    font-size: 20px;
    right: 1em;
  }
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #efefef;
`
const Hero = styled(Img)`
  height: 100vh;
  @media (max-width: 699px) {
    height: 50%;
  }
`

const Seperator = styled.hr`
  width: 60%;
  @media (max-width: 699px) {
    width: 100%;
  }
`


const IndexPage = ({ data: { allContentfulPortfolio } }) => {
  const { edges} = allContentfulPortfolio
  const { node } = edges[0]
  const { title, background ,about, profilePricture, works, contact, footer, madeBy  } = node
  return (
    <div>
      <Hero fluid={background.fluid} />
      <Title>{title.title}</Title>
      <Container>
        <About about={about} profilePicture={profilePricture} />
        <Seperator />
        <Works works={works} />
      </Container>
      <Fade>
        <Contact contact={contact.contact} />
        <Footer words={footer} logos={madeBy} />
      </Fade>
      
    </div>
  )
}


export const query = graphql`
 query allContentfulPortfolio {
  allContentfulPortfolio {
    edges {
      node {
        background {
          fluid (maxWidth: 4000) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        title {
          title
        }
        about {
          childMarkdownRemark {
            html
          }
        }
        profilePricture {
          fluid (maxWidth: 250, maxHeight: 250) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        works {
          project {
            childMarkdownRemark {
              html
              id
            }
          }
        }
        contact {
          contact
        }
        madeBy {
          file {
            url
          }
        }
        footer
      }
    }
  }
}
`

export default IndexPage

