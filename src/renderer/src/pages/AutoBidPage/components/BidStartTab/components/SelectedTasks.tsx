import ButtonWrapper from "@renderer/components/buttons/ButtonWrapper";
import { styled } from "@renderer/config/stitches.config";
import { removeTask } from "@renderer/redux/autoBid/autoBidCreationSlice";
import { useAppSelector } from "@renderer/redux/hooks";
import { CgTrash } from 'react-icons/cg';
import { useDispatch } from "react-redux";




export default function SelectedTasks() {
    const tasks = useAppSelector(state => state.autoBidCreation.addedTasks);

    const dispatch = useDispatch();


    return (
        <Wrapper visible={tasks.length > 0}>
            <THeader >
                <TRow>
                    <THeaderElement css={{ width: '35%' }} >Slug</THeaderElement>
                    <THeaderElement css={{ width: '16%' }}>Start Bid</THeaderElement>
                    <THeaderElement css={{ width: '16%' }}>Price Limit</THeaderElement>
                    <THeaderElement css={{ width: '16%' }}>Floor Price</THeaderElement>
                    <THeaderElement css={{ width: '10%' }}>Percent</THeaderElement>
                    <THeaderElement></THeaderElement>
                </TRow>
            </THeader>
            <DataContainer>
                <TBody>
                    {
                        tasks?.map((task, index) => {
                            return (
                                <TRow key={index}>
                                    <TData css={{ width: '35%' }}>{task.slug}</TData>
                                    <TData css={{ width: '16%' }}>{task.startBid.toLocaleString(navigator.language, { maximumFractionDigits: 4 })}</TData>
                                    <TData css={{ width: '16%' }}>{task.priceLimit.toLocaleString(navigator.language, { maximumFractionDigits: 4 })}</TData>
                                    <TData css={{ width: '16%' }}>{task.floorPrice.toLocaleString(navigator.language, { maximumFractionDigits: 4 })}</TData>
                                    <TData css={{ width: '10%' }}>{task.percent}</TData>
                                    <TData onClick={() => dispatch(removeTask(index))}><DeleteButton> <CgTrash /></DeleteButton></TData>
                                </TRow>
                            )
                        })
                    }
                </TBody>
            </DataContainer>
        </Wrapper>
    )
}


const Wrapper = styled('div', {
    responsiveWidth: 597,
    borderRadius: 5,
    borderCollapse: 'collapse',
    overflow: 'hidden',
    borderStyle: "hidden",
    display: 'none',
    tableLayout: 'fixed',

    background: '#282F33',
    '@sm': {
        maxWidth: "unset",
    },
    variants: {
        visible: {
            true: {
                display: "table",
            }
        }
    }
})


const DataContainer = styled('div', {
    maxHeight: 270,
    overflowY: 'scroll',
    "&::-webkit-scrollbar": {
        display: 'none',
    },
    '@sm': {
        maxHeight: '74vh',
    }
})
const THeader = styled('div', {
    display: 'table',
    background: '#232A2E',
    height: 30,
    width: '100%',
    borderCollapse: 'collapse',
    overflow: 'hidden',
    borderStyle: "hidden",
    tableLayout: 'fixed',
})

const TRow = styled('div', {
    display: 'table-row',
})
const THeaderElement = styled('div', {
    display: 'table-cell',
    border: "1px solid #1F272A",
    fontFamily: "'Work Sans'",
    fontWeight: 600,
    fontSize: 11,
    textAlign: "center",
    verticalAlign: 'middle',
    letterSpacing: "0.145em",
    color: '#FFFFFF9C'
})

const TBody = styled('div', {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    overflow: 'hidden',
    borderStyle: "hidden",
    tableLayout: 'fixed',
})

const TData = styled('div', {
    display: 'table-cell',
    border: "1px solid #2B3337",
    height: 35,
    overflow: 'hidden',

    fontFamily: "DM Sans",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.145em",
    textAlign: "center",
    color: '#C0C0C0B5',
    verticalAlign: 'middle'
})
const DeleteButton = styled(ButtonWrapper, {
    borderRadius: 0,
    background: '#AE5454',
    width: '100%',
    height: '100%',
    color: '#CEBFBF',
    fontSize: 16,
})