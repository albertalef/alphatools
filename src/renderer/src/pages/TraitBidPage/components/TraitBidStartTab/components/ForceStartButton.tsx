import SwitchButton from "@renderer/components/buttons/SwitchButton"
import { styled } from "@renderer/config/stitches.config"
import { useState } from "react"

export default function ForceStartButton() {
    const [isActive, setIsActive] = useState(false);
    return (
        <Wrapper onClick={() => setIsActive(!isActive)}>
            <Label>Force Start</Label>
            <SwitchButton active={isActive}/>
        </Wrapper>
    )
}


const Wrapper = styled('div', {
    borderRadius: 5,
    background: '#444C50',

    cursor: 'pointer',

    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',

    gap: 10,
    
    WebkitUserSelect: 'none',
})

const Label = styled('p', {
    fontFamily: "Work Sans",
    fontSize: "13px",
    fontWeight: 500,
    color: "#D6D6D6CC",
    paddingBottom: 2,
})