import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    margin: 2% 26%;
    border: 2px solid green;
    padding: 1% 5%;
    background-color: black;
    color: yellow;
`

export default function Details({details, close}){


    return (
        <StyledDetails>
        {
            details &&
            <>
            <p>Gender:{details.gender}`</p>
            <p>Height:{details.height}</p>
            <p>Mass:{details.mass}</p>
            <p>BirthYear:{details.birth_year}</p>
            <p>Eye Color:{details.eye_color}</p>
            <p>Hair Color:{details.hair_color}</p>
            <p>Skin Color:{details.skin_color}</p>
            </>
        }
        <button onClick={close}>Close</button>
        </StyledDetails>
    )
}