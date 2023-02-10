import ButtonWrapper from '@renderer/components/buttons/ButtonWrapper'
import { styled } from '@renderer/config/stitches.config'
import { BsFillPlayFill } from 'react-icons/bs'
import ActualTraitsContainer from './components/ActualTraitsContainer'
import ForceStartButtonWrapper from './components/ForceStartButton'
import InputWrapper from './components/InputWrapper'
import SelectTraitContainer from './components/SelectTraitContainer'

export default function TraitBidStartTab() {

    return (
        <Wrapper>
            <InputWrapper />
            <SelectTraitContainer />
            <Footer>
                <ActualTraitsContainer style={{ gridRow: "1/3" }} />
                <ForceStartButtonWrapper />
                <StartButton><BsFillPlayFill /></StartButton>
            </Footer>
        </Wrapper>
    )
}


const StartButton = styled(ButtonWrapper, {
	borderRadius: 5,

	background: '#60AF71',
	color: '#F3F3F3',
	fontSize: 35,

})

const Footer = styled('div', {
    responsiveWidth: 597,

    display: 'grid',

    gridTemplateColumns: '1fr minmax(133px, 10%)',
    gridTemplateRows: '55px 55px',

    gridGap: '13px',

    '@sm': {
        maxWidth: 'unset',

    }
})
const Wrapper = styled('section', {

    display: "flex",
    justifyContent: "flex-start",
    alignItems: 'center',
    background: '#363F43',
    borderBottom: '2px solid #3D464B',
    boxSizing: 'border-box',
    flexDirection: 'column',
    maxHeight: "75vh",
    gap: 12,

    padding: 12,

    "@sm": {
        width: '50%',
        borderBottom: 0,
        borderRight: '2px solid #3D464B',
        maxHeight: 'unset',
    }
})