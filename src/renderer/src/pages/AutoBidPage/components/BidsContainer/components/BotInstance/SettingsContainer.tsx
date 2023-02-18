import ButtonWrapper from "@renderer/components/buttons/ButtonWrapper"
import { styled } from "@renderer/config/stitches.config"
import { Task } from "@renderer/interfaces/AutoBidInterfaces"
import { deleteInstance, removeTaskFromInstance } from "@renderer/redux/autoBid/autoBidInstancesSlice"
import { IoCloseOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"


interface SettingsContainerProps {
    instanceId: string,
    tasks: Task[],
    isRunning?: boolean,
    hidden: boolean,
}
export default function SettingsContainer({ instanceId, tasks, isRunning, hidden }: SettingsContainerProps) {

    const dispatch = useDispatch();
    return (
        <Wrapper hidden={hidden}>

            <Table isRunning={isRunning}>
                <Header>
                    <HeaderRow>
                        <Cell style={{ width: '40%' }}>Slug</Cell>
                        <Cell style={{ width: '18%' }}>Start Bid</Cell>
                        <Cell style={{ width: '18%' }}>Price</Cell>
                        <Cell style={{ width: '15%' }}>Percent</Cell>
                        <Cell style={{ width: '8%' }}></Cell>
                    </HeaderRow>
                </Header>
                <BodyContainer>
                    <Body>
                        {
                            tasks.map((task, index) =>
                                <Row key={index}>
                                    <BodyCell style={{ width: '40%' }}>{task.slug}</BodyCell>
                                    <BodyCell style={{ width: '18%' }}>{task.startBid.toLocaleString(navigator.language, { maximumFractionDigits: 5 })}</BodyCell>
                                    <BodyCell style={{ width: '18%' }}>{task.priceLimit.toLocaleString(navigator.language, { maximumFractionDigits: 5 })}</BodyCell>
                                    <BodyCell style={{ width: '15%' }}>{task.percent.toLocaleString(navigator.language, { maximumFractionDigits: 5 })}</BodyCell>
                                    <BodyCell style={{ width: '8%' }}><RemoveButton isVisible={isRunning} onClick={() => dispatch(removeTaskFromInstance({ instanceId, index }))}><IoCloseOutline /></RemoveButton></BodyCell>
                                </Row>
                            )
                        }
                    </Body>
                </BodyContainer>
            </Table>
            <ButtonsContainer>
                <InstanceId>{"AlphaBot-" + instanceId}</InstanceId>
                <DeleteButton onClick={() => dispatch(deleteInstance(instanceId))}>Delete Instance</DeleteButton>
            </ButtonsContainer>
        </Wrapper>
    )
}

const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 11,
    padding: 11,
    variants: {
        hidden: {
            true: {
                display: 'none',
            }
        }
    }
})

const ButtonsContainer = styled('div', {
    height: 26,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 11,

})

const InstanceId = styled('p', {
    height: '100%',
    flexGrow: 1,
    background: '#3D454A',
    borderRadius: 5,
    boxSizing: 'border-box',
    padding: '0 11px ',
    paddingTop: 5,
    textAlign: 'center',
    fontFamily: "DM Sans",
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "0.2em",
    color: "#B4B9BC55",
    verticalAlign: 'middle',
})
const DeleteButton = styled(ButtonWrapper, {
    background: "#9B5050",
    borderRadius: 5,
    height: '100%',
    width: 125,
    fontFamily: "Work Sans",
    paddingBottom: 1,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.02em",
    color: "#B4B9BCFF",
})

const Table = styled('section', {
    background: '#2E3539',
    borderRadius: 5,
    overflow: 'hidden',

    variants: {
        isRunning: {
            true: {
                opacity: 0.5,
            }
        }
    }
})

const Header = styled('div', {
    display: "table",
    width: '100%',
    borderCollapse: 'collapse',
    borderStyle: "hidden",
})
const HeaderRow = styled('div', {
    display: 'table-row',
    width: '100%',
    background: '#646C70',
    height: 25,
})
const BodyContainer = styled('div', {
    width: '100%',
    maxHeight: 135,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
        display: 'none',
    },
})
const Body = styled('div', {
    display: 'table',
    maxHeight: 50,
    width: '100%',

    borderCollapse: 'collapse',
    borderStyle: "hidden",

})
const RemoveButton = styled(ButtonWrapper, {
    width: "40px",
    height: "25px",
    background: "#9B5050",
    borderRadius: "3px",
    margin: '0 auto',
    color: '#C9C9C9',
    fontSize: 15,

    variants: {
        isVisible: {
            true: {
                display: "none"
            }
        }
    }

})

const Row = styled('div', {
    display: 'table-row',
    width: '100%',
    height: 30,
})

const Cell = styled('div', {
    display: 'table-cell',
    textAlign: 'center',
    fontFamily: "DM Sans",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    color: "#B4B9BC",
    verticalAlign: 'middle',
    border: "1px solid #364043",

})
const BodyCell = styled(Cell, {
    fontWeight: 500,
    letterSpacing: "-0.015em",
    color: "#B4B9BCCC",
})