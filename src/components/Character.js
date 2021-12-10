// Write your Character component here
import React from "react";
import styled, {keyframes} from "styled-components";

const kf = keyframes`
    50% {
        transform: scale(0.8)
    }
    100%{
        opacity: 1;
        transform: scale(1)
        }
    }
`

export default function Character({info}) {

return (
    <div>
        {info.name}
    </div>
)
 

}