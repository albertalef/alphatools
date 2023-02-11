import SquareFrame from "@renderer/components/frames/SquareFrame";
import { styled } from "@renderer/config/stitches.config";
import { useAppSelector } from "@renderer/redux/hooks";
import SettingsButton from "./components/SettingsButton";
import WalletInfo from "./components/WalletInfo";


export default function Footer(){
	const walletAddress = useAppSelector(state => state.user.walletAddress);
	return (
		<Wrapper>
			<WalletInfo accountAddress={walletAddress}/>
			<SettingsButton/>
		</Wrapper>
	)
}


const Wrapper = styled(SquareFrame, {
	display: "flex",
	alignItems: 'center',
	padding: '0 10px',
	gap: 10,
})
