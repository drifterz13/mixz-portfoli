import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

const Container = styled.div`
    padding: 40px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 699px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Items = styled.ul`
    list-style: none;
    margin: 0;
`

const Block = styled.div`
    padding: 8px 8px 0;
    border-left: 4px solid #777;
    margin-bottom: 20px;
`

const Works = ({ works }) => {
    return (
        <Container>
            <Fade>
                <h2>Works</h2>
                <Items>
                    {works.map(work => {
                        const { project: { childMarkdownRemark: { html, id } } } = work
                        return (
                            <Block key={id}>
                                <li dangerouslySetInnerHTML={{ __html: html }} />
                            </Block>
                        )
                    })}
                </Items>
            </Fade>
        </Container>
    )
}

export default Works
