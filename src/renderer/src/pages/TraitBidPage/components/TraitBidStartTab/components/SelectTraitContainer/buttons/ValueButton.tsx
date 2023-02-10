import ButtonWrapper from "@renderer/components/buttons/ButtonWrapper"
import { styled } from "@renderer/config/stitches.config"
import { useCallback } from "react";
import { HiPlusSm } from "react-icons/hi";
const randomInt = require('crypto').randomInt;


interface ValueButtonProps {
    selected?: boolean,
    hidden?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    onConfirm?: React.MouseEventHandler<HTMLButtonElement>,
}
export default function ValueButton({ onClick, onConfirm, selected, hidden }: ValueButtonProps) {
    const value = randomInt(100);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        if (selected) onConfirm?.(event);
        else onClick?.(event);
    }, [selected])

    return (

        <Wrapper onClick={handleClick} hidden={hidden} selected={selected}>
            <Count>({value})</Count>
            <Name>Test</Name>
            <AddIcon />
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
                justifyContent: 'flex-start',

                "& p": {
                    fontSize: 10,
                    height: 6,
                    paddingTop: 2,
                },
                "& svg": {
                    display: 'unset',
                },
                "& span": {
                    top: 'unset',
                    bottom: 3,
                    opacity: 0.5,
                }
            }
        }
    }
})

const AddIcon = styled(HiPlusSm, {
    display: "none",
    fontSize: 41,
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