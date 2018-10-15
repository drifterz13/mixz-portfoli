import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

const Wrapper = styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
    @media (max-width: 699px) {
        width: 65%;
        flex-direction: column;
    }
`

const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Emoji = styled.span`
    font-size: 24px;
    margin-bottom: 8px;
`

const Text = styled.p`
    color: salmon;
    font-size: 20px;
    font-weight: 700;
`

const Describe = () => {
    return (
        <Wrapper>
            <Fade>
                <Group>
                    <Emoji role='img' aria-label='fire'>🔥</Emoji>
                    <Text>Hard working</Text>
                </Group>
                <Group>
                    <Emoji role='img' aria-label='thunder'>⚡</Emoji>
                    <Text>Team player</Text>
                </Group>
                <Group>
                    <Emoji role='img' aria-label='rocket'>🚀</Emoji>
                    <Text>Motivate</Text>
                </Group>
            </Fade>
        </Wrapper>
    )
}

export default Describe
