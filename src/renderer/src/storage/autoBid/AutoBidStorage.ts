import { BotInstanceInterface } from "@renderer/interfaces/AutoBidInterfaces";


export default class AutoBidStorage {
    // methods to get and set auto bid instances from storage
    static getInstances() {
        return window.api.store.get('autoBidInstances');
    }

    static setInstances(instances: BotInstanceInterface[]) {
        const newInstances = instances.map(instance => { return { ...instance, timerCountSeconds: 0, running: false } });
        window.api.store.set('autoBidInstances', newInstances);
    }
}
