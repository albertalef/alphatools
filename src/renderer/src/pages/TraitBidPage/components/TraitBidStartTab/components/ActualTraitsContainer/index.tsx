import { styled } from "@renderer/config/stitches.config"
import TraitButton from "./TraitButton"

interface Props {
    style: React.CSSProperties
}



export default function ActualTraitsContainer({ style }: Props) {

    const traits = [
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' },
        { name: "Background", value: 'faced' }
    ]

    return (
        <Wrapper style={style}>
            <Label>Added Traits</Label>
            <ValuesContainer>
                {
                    traits.map((trait, index) => <TraitButton key={index} trait={trait} />)
                }
                <TraitButton invisible />
                <TraitButton invisible />

            </ValuesContainer>
        </Wrapper>

    )
}


const Wrapper = styled('section', {
    backgroundColor: '#414A4E',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxSizing: 'border-box',
    WebkitUserSelect: 'none',
    width: '100%',
    height: '100%',
    paddingBottom: 11,
})

const Label = styled('p', {
    width: '100%',
    height: 19,
    fontFamily: "Work Sans",
    fontSize: "11px",
    fontWeight: 500,
    color: '#D8D8D855',
    boxSizing: 'border-box',
    padding: 3,
    paddingLeft: 10,
})

const ValuesContainer = styled('div', {
    flexGrow: 1,

    boxSizing: 'border-box',
    padding: '1px 14px',
    paddingRight: 5,
    marginRight: 4,
    paddingBottom: 6,

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    gap: 5,

    overflowX: 'hidden',
    overflowY: 'scroll',

    "&::-webkit-scrollbar": { width: "4px" },
    "&::-webkit-scrollbar-thumb": { background: "#5D6265", borderRadius: 13 },
    "&::-webkit-scrollbar-thumb:hover": { background: "#1C2326" }
})