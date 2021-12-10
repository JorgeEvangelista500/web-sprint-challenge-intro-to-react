// Write your Character component here
import React from "react";
import styled from "styled-components";



const StyledCharacter = styled.div`

    color:yellow;
    margin: 2% 26%;
    border: 1px solid green;
    padding: 1% 5%;
    font-size: 20px;
    background-color: black;

`

export default function Character({info}) {

return (
    <StyledCharacter>
        {info.name} {info.date}
    </StyledCharacter>
)
 

}