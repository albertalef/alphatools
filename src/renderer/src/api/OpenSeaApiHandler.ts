import { SlugData } from "@renderer/interfaces/AutoBidInterfaces";
import { Trait, TraitValue } from "@renderer/interfaces/TraitBidInterfaces";
import axios, { AxiosResponse } from "axios";
import { camelizeKeys } from "humps";
import bigDecimal from "js-big-decimal";

const instance = axios.create({
    headers: { "Accept": "application/json", "X-API-KEY": "d0b6281e87d84702b020419fdf58ea81", },
    baseURL: "https://api.opensea.io",
});

instance.interceptors.response.use((response: AxiosResponse) => {
    if (
        response.data &&
        response.headers['content-type'] === 'application/json'
    ) {
        response.data = camelizeKeys(response.data);
    }
    return response;
});

const etherConstant = new bigDecimal(1e18);

// const camel2title = (camelCase) => camelCase
// 		.replace(/([A-Z])/g, (match) => `_${match}`)
// 		.replace(/^./, (match) => match.toUpperCase())
// 		.trim();

// 	console.log(camel2title('camelCase'));

export default class OpenSeaApiHandler {


    static async getFloorPrice(slug: string): Promise<number> {
        const url = `api/v1/collection/${slug}`;
        const { data } = await instance.get(url);
        return data.collection.stats.floorPrice;

    }

    static async getStartBid(slug: string): Promise<number> {
        const etherConstant = (10) ** -18;

        const url = `v2/offers/collection/${slug}?order_by=eth_price&order_direction=asc`;
        const { data } = await instance.get(url);
        
        const value = new bigDecimal(data.offers[0].protocol_data.parameters.offer[0].startAmount);
        return Number(value.divide(etherConstant, 5).add(new bigDecimal('0.00001')).getValue())
    }

    static async getSlugData(slug: string): Promise<SlugData> {
        const floorPrice = await this.getFloorPrice(slug);
        const startBid = await this.getStartBid(slug);
        return { floorPrice, startBid };
    }

    static async getCollectionTraits(slug: string): Promise<Trait[]>{

        const { data } = await instance.get(`api/v1/collection/${slug}`);

        const traits: Trait[] = Object.keys(data.collection.traits).map(key => {
            return {
                name: key,
                values: Object.entries(data.collection.traits[key]).map<TraitValue>(([name, count]) => {
                    return {
                        name,
                        count: count as number
                    }
                })
            }
        });
        return traits;
    }
}