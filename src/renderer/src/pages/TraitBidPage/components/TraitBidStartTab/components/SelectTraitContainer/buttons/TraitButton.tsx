import ButtonWrapper from "@renderer/components/buttons/ButtonWrapper"
import { styled } from "@renderer/config/stitches.config"
const randomInt = require('crypto').randomInt;


interface TraitButtonProps {
    selected?: boolean,
    hidden?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}
export default function TraitButton({ onClick, selected, hidden }: TraitButtonProps) {
    const value = randomInt(100);
    return (

        <Wrapper onClick={onClick} hidden={hidden} selected={selected}>
            <Count>({value})</Count>
            <Name>Test</Name>
        </Wrapper>
    )
}


const Wrapper = styled(ButtonWrapper, {
    background: "#242B2F",
    borderRadius: 6,
    height: '38px',
    flex: '1 1 120px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    justifyContent: 'center',


    variants: {
        hidden: {
            true: {
                visibility: 'hidden',
            }
        },
        selected: {
            true: {
                border: 0,
                background: '#1C2326',
            }
        }
    }
})

const Name = styled('p', {
    fontFamily: "Work Sans",
    fontSize: 12,
    fontWeight: 500,
    color: '#ACADAE',
    paddingBottom: 2,
})

const Count = styled('span', {
    fontFamily: "Work Sans",
    fontSize: "9px",
    fontWeight: 500,
    color: '#FFFFFF61',
    position: 'absolute',
    top: 2,
    right: 4,
})