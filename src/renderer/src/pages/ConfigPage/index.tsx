import ContextHolder from "@renderer/components/frames/ContextHolder";
import { styled } from "@renderer/config/stitches.config";
import { useAppSelector } from "@renderer/redux/hooks";
import { changeAddress, changeWallet } from "@renderer/redux/userSlice";
import { HiIdentification } from 'react-icons/hi2';
import { RiKeyFill } from 'react-icons/ri';
import { useDispatch } from "react-redux";
import ConfigContainer from "./components/ConfigContainer";

export default function ConfigPage(){
    const walletKey = useAppSelector(state => state.user.walletKey);
    const walletAddress = useAppSelector(state => state.user.walletAddress);
    
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <ConfigContainer secure Icon={KeyIcon} initialValue={walletKey} saveHandler={(text) => dispatch(changeWallet(text))}>Wallet Private Key</ConfigContainer>
            <ConfigContainer Icon={HiIdentification} initialValue={walletAddress} saveHandler={(text) => dispatch(changeAddress(text))}>Address</ConfigContainer>
        </Wrapper>
    )
}

const KeyIcon = styled(RiKeyFill, {
    paddingBottom: 2,
})

const Wrapper = styled(ContextHolder, {
    display: "flex",


    boxSizing: 'border-box',
    padding: 13,

    justifyContent: 'center',
    alignContent: 'flex-start',

    flexWrap: 'wrap',
    gap: 20,
})
