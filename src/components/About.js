import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture';
import Fade from 'react-reveal'

const Container = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Paragraph = styled.span`
    max-width: 520px;
    margin-top: 45px;
`

const About = ({ about, profilePicture }) => {
    return (
        <Fade>
            <Container>
                <h2>About</h2>
                <ProfilePicture profilePicture={profilePicture} />
                <Paragraph dangerouslySetInnerHTML={{ __html: about.childMarkdownRemark.html }} />
            </Container>
        </Fade>
    )
}

export default About