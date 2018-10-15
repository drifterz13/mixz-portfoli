import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'

const Picture = styled(Img)`
    width: 190px;
    height: 190px;
    border-radius: 10px;
    margin-bottom: 0
    cursor: pointer;
    @media (max-width: 699px) {
        width: 120px;
        height: 120px;
    }
`

const ProfilePicture = ({ profilePicture }) => {
    return (
        <Picture 
            alt='profile-picture' 
            fluid={profilePicture.fluid} 
        />
    )
}

export default ProfilePicture