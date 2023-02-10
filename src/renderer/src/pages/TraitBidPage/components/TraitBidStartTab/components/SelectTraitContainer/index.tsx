import { styled } from "@renderer/config/stitches.config";
import TraitsContainer from "./containers/TraitsContainer";
import ValuesContainer from "./containers/ValuesContainer";


export default function SelectTraitContainer() {

    return (
        <Wrapper>
            <TraitsContainer/>
            <ValuesContainer/>
        </Wrapper>
    )
}

const Wrapper = styled('section', {
    responsiveWidth: 597,
    height: 164,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 6,

    '@sm': {
        maxWidth: 'unset',
    }
})


