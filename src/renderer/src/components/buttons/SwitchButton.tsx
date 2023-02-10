import { styled } from "@renderer/config/stitches.config"

interface SwitchButtonProps {
    active?: boolean
}

export default function SwitchButton({ active }: SwitchButtonProps) {

    return (

        <Wrapper active={active}>
            <TogglerContainer>
                <Toggler active={active}/>
            </TogglerContainer>
        </Wrapper>
    )
}


const Wrapper = styled('div', {
    width: 31,
    height: 16,

    borderRadius: 3,
    background: "#1C232654",

    boxSizing: 'border-box',

    padding: 1,
    transition: 'all 0.15s ease-in-out',



    variants: {
        active: {
            true: {
                background: '#1C2326A3',
            }
        }
    }
})

const TogglerContainer = styled('div', {
    height: '100%',
    width: '100%',
    position: 'relative',
})

const Toggler = styled('div', {
    height: '100%',
    width: '40%',
    background: "#D9D9D9BD",
    borderRadius: 2,
    position: "absolute",

    transition: 'all 0.15s ease-in-out',
    
    left: 0,

    variants: {
        active: {
            true: {
                left: '100%',
                transform: 'translateX(-100%)'
            }
        }
    }
})