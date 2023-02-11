import SquareFrame from "@renderer/components/frames/SquareFrame"
import { styled } from "@renderer/config/stitches.config"
import NavButton from "./components/NavButton"
import {AiFillGold} from 'react-icons/ai'
import { useSelector } from "react-redux"
import { selectAutoBidInstances } from "@renderer/redux/autoBid/autoBidInstancesSlice"

export default function SideScreen() {
    const autoBidInstancesCount = useSelector(selectAutoBidInstances).instances.length;

    return (
        <Wrapper>
            <NavButton to={"/"} name={"Auto Bid"} Icon={AiFillGold} instancesCount={autoBidInstancesCount}/>
        </Wrapper>
    )
}


const Wrapper = styled(SquareFrame, {
    width: '100%',
    height: '100%',

    boxSizing: 'border-box',

    padding: 10,
    display: "flex",
    flexDirection: 'column',
    gap: 10,
})

