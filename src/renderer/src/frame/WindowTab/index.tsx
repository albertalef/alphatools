import WalletApiHandler from "@renderer/api/WalletApiHandler"
import { styled } from "@renderer/config/stitches.config"
import { useAppSelector } from "@renderer/redux/hooks"
import { useMemo } from "react"
import { useQuery } from "react-query"
import Web3 from "web3"
import AccountStatus from "./components/AccountStatus"
import ControlButtons from "./components/ControlButtons"
import Logo from "./components/Logo"



export default function WindowTab() {
    const accountAddress = useAppSelector(state => state.user.walletAddress);
    const isValidAddress = useMemo(() => Web3.utils.isAddress(accountAddress), [accountAddress]);

    const {data} = useQuery(['user', accountAddress, 'accountStatus'],() => WalletApiHandler.getAccountStatus(accountAddress), {
        initialData: 0,
        enabled: isValidAddress,
        refetchInterval: 20000,
    })

    return (
        <WindowTabWrapper>
            <Logo version={process.env.npm_package_version}/>
            <AccountStatus value={data}/>
            <ControlButtons />
        </WindowTabWrapper>
        )
}

const WindowTabWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',
    height: 32,
    background: '#30383C',
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'drag',

    borderBottom: '1px solid #FC9927',
    boxShadow: '0px 4px 6px rgba(252, 153, 39, 0.25)'
})


