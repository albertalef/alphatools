import { keyframes, styled } from "@renderer/config/stitches.config"
import { BiLoader } from "react-icons/bi"



interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    divStyle?: React.CSSProperties,
    isError?: boolean,
    register?: any,
    isLoading?: boolean
}

export default function InputField({ label, divStyle, register, isError, isLoading, ...props}: InputProps) {

    return (
        <Wrapper style={divStyle}>
            <Label>{label}</Label>
            <Input isError={isError} {...register} readonly={props.readOnly} spellCheck={false} {...props}/>
            <LoadIcon isLoading={isLoading}/>
        </Wrapper>
    )
}


const Wrapper = styled('div', {
    position: "relative",
    borderRadius: 5,
    background: '#2C3438',
    height: 36,
    display: "flex",
    overflow: 'hidden',
    justifyContent: 'flex-start',
})

const Label = styled("p", {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",

    WebkitUserSelect: 'none',

    boxSizing: "border-box",
    padding: '0 12px',
    paddingBottom: 2,

    fontFamily: 'Work Sans',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '0.1em',

    color: '#B1B3B4',
    background: '#293034',

    whiteSpace: 'nowrap',
    borderRight: '2px solid #3B4145',
})

const Input = styled('input', {
    height: '100%',
    width: '100%',
    background: 'transparent',
    boxSizing: 'border-box',
    padding: "0 10px",
    paddingBottom: 2,

    fontFamily: 'DM Sans',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: "0.145em",

    color: "#909599AA",

    textAlign: 'center',
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button':{
        WebkitAppearance: 'none',
    },
    variants: {
        readonly: {
            true: {
                background: '#464E52',
            }
        },
        isError:{
            true: {
                background: '#342B2D'
            }
        }
    }
})
const rotateAnimation = keyframes({
	'from':{
		transform: 'rotate(0)'
	},
	'to': {
		transform: 'rotate(360deg)'
	}
})
const LoadIcon = styled(BiLoader, {
    position: "absolute",
    display: 'none',
    color: "#909599AA",
    fontSize: 11,
    top: 1,
    left: 1,
    animation: `${rotateAnimation} 2s linear infinite`,
    variants: {
        isLoading: {
            true: {
                display: 'initial'
            }
        }
    }
    
})