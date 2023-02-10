import ContextHolder from "@renderer/components/frames/ContextHolder"
import { styled } from "@renderer/config/stitches.config"
import TraitBidInstancesContainer from "./components/TraitBidInstancesContainer"
import TraitBidStartTab from "./components/TraitBidStartTab"

export default function TraitBidPage() {

    return (
        <Wrapper>
            <TraitBidStartTab />
            <TraitBidInstancesContainer />
        </Wrapper>
    )
}


const Wrapper = styled(ContextHolder, {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',

    "@sm": {
        flexDirection: 'row',
    }
})