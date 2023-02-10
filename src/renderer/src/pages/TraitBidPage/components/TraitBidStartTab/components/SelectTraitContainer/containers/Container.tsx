import { styled } from "@renderer/config/stitches.config"
import { ReactNode } from "react"

interface ContainerProps {
    label: string,
    children?: ReactNode, 
}

export default function Container({ label, children }: ContainerProps) {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <ValuesContainer>
                {children}
            </ValuesContainer>
        </Wrapper>
    )
}

const Wrapper = styled('div', {
    flexGrow: 1,
    flexShrink: 0,
    backgroundColor: '#2C3438',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxSizing: 'border-box',
    paddingBottom: 10,
})



const Label = styled('p', {
    width: '100%',
    height: 19,
    fontFamily: "Work Sans",
    fontSize: "11px",
    fontWeight: 500,
    color: '#D8D8D866',
    boxSizing: 'border-box',
    padding: 3,
    paddingLeft: 10,
})

const ValuesContainer = styled('div', {
    flexGrow: 1,
    padding: '1px 14px',
    paddingRight: 5,
    marginRight: 4,
    paddingBottom: 6,
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    gap: 5,
    overflowX: 'hidden',
    overflowY: 'scroll',
    "&::-webkit-scrollbar": { width: "4px" },
    "&::-webkit-scrollbar-thumb": { background: "#262D30", borderRadius: 13 },
    "&::-webkit-scrollbar-thumb:hover": { background: "#1C2326" }
})
