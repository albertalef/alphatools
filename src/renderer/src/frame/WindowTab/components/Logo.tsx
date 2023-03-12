import { styled } from "@renderer/config/stitches.config"
import logo from "../../../assets/logo.png"

interface LogoProps {
    version?: string,
}

export default function Logo({version}: LogoProps) {
    return (
        <LogoWrapper>
            <LogoImage src={logo} />
            <LogoTitle>AlphaTools</LogoTitle>
            <LogoVersion>{version}</LogoVersion>
        </LogoWrapper>
    )
}

const LogoWrapper = styled('div', {
    width: 100,
    height: '100%',

    paddingLeft: 25,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
})

const LogoTitle = styled('p', {
    fontFamily: 'DM Sans',
    fontSize: 15,
    fontWeight: 700,
    color: '#D6D7D7',
})

const LogoVersion = styled('p', {
    color: '#6E7376',
    fontFamily: 'DM Sans',
    fontSize: 13,
    fontWeight: 500,
    padding: '0 10px',
})

const LogoImage = styled('img', {
    width: 20,
    height: 19,
    paddingRight: 5,
})