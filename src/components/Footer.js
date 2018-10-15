import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  margin: 5px;
  border: 2px solid #333;
`

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 18px;
`

const Footer = ({ words, logos }) => (
    <FooterContainer>
        <p>{words}</p>
        <div>
            {logos.map((logo, index) => (
                <Logo src={logo.file.url} key={index} />
            ))}
        </div>
    </FooterContainer>
)

export default Footer