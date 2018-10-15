import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture';
import Fade from 'react-reveal'
import Describe from './Describe';

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
    font-weight: 700;
    @media (max-width: 699px) {
        max-width: 100%;
    }
`

const About = ({ about, profilePicture }) => {
    return (
        <Fade>
            <Container>
                <h2 style={{ borderBottom: '5px solid cornflowerblue' }}>About</h2>
                <ProfilePicture profilePicture={profilePicture} />
                <div style={{ marginTop: '45px', maxWidth: '520px' }}>
                    <Fade>
                        <Paragraph dangerouslySetInnerHTML={{ __html: about.childMarkdownRemark.html }} />
                    </Fade>
                </div>
                <Describe />
            </Container>
        </Fade>
    )
}

export default About