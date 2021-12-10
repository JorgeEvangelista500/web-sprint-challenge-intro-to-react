// Write your Character component here
import React from "react";
import styled from "styled-components";



const StyledCharacter = styled.div`
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    color:yellow;
    margin: 2% 26%;
    border: 2px solid green;
    padding: 1% 5%;
    font-size: 20px;
    background-color: black;
    

    button {
        max-width: 20%;
        align-content:center;
    }

`

export default function Character({info, action}) {

return (
    <StyledCharacter>
        {info.name}
        <button onClick={() => action(info)}>
            See details
        </button>
    </StyledCharacter>
)
 

}