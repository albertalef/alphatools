import { styled } from "@renderer/config/stitches.config";
import { BotInstanceInterface } from "@renderer/interfaces/AutoBidInterfaces";
import { useAppSelector } from "@renderer/redux/hooks";
import BotInstance from "./components/BotInstance";

export default function BidsContainer(){
    const botInstances: BotInstanceInterface[] = useAppSelector(state => state.autoBidInstances.instances);
    return (
        <Wrapper>
            {
                botInstances.map(instance => {
                    return <BotInstance {...instance} key={instance.id} />
                })
            }
        </Wrapper>
    )
}


const Wrapper = styled('section', {
    display: "flex",
    flexGrow: 1,
    padding: '20px 12px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 14,
        
})


