import { styled } from "@renderer/config/stitches.config"

interface Trait {
    name: string,
    value: string,
}

interface TraitButtonProps {
    trait?: Trait,
    invisible?: boolean,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default function TraitButton({trait, invisible, onClick}: TraitButtonProps){

    return (
        <Wrapper onClick={onClick} invisible={invisible}>
            <TraitName>{trait?.name}</TraitName>
            <TraitValue>{trait?.value}</TraitValue>
            <RemoveText>Click to remove</RemoveText>
        </Wrapper>

    )
}


const Wrapper = styled('div', {
    
    flex: '1 1 203px',
    height: 25,
    borderRadius: 4,
    border: 0,
    overflow: 'hidden',

    cursor: 'pointer',
    background: '#2B3336',
    boxSizing: 'border-box',


    display: 'flex',

    hover: {
        '& p': {
            display: 'none'
        },
        '& h1': {
            display: 'flex',
        },
    },
    variants: {
        invisible: {
            true: {
                visibility: "hidden",
            }
        }
    }
})
const RemoveText = styled('h1', {

    display: 'none',
    height: '100%',
    width: '100%',
    
    boxSizing: 'border-box',
    paddingBottom: 1,
    justifyContent: 'center',
    alignItems: 'center',

    fontFamily: "Work Sans",
    fontSize: "11px", 
    fontWeight: 500,
    color: "#D9D9D999",
})
const TraitText = styled('p', {
    height: '100%',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',

    fontFamily: "Work Sans",
    fontSize: "11px", 
    fontWeight: 500,
    color: "#D9D9D999",

})

const TraitName = styled(TraitText, {
    width: '40%',
    background: '#53585C',
})

const TraitValue = styled(TraitText, {
    flexGrow: 1,
})