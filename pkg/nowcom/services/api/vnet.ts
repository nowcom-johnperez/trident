import { INSTANCE_V2 } from "../../config/axios";

export const vNetService = {
    getNetworks: async () => {
        return await INSTANCE_V2.get(`/apis/packetlifter.dev/v1/vnets`)
    },

    getNetworkTranslations: async () => {
        return await INSTANCE_V2.get(`/apis/packetlifter.dev/v1/addresstranslations`)
    },

    createNetwork: async (data: any) => {
        return await INSTANCE_V2.post(`/apis/packetlifter.dev/v1/namespaces/default/vnets`, data);
    },

    deleteNetwork: async (networkName: string) => {
        return await INSTANCE_V2.delete(`/apis/packetlifter.dev/v1/namespaces/default/vnets/${networkName}`)
    },

    getSubnetByName: async (networkName: string) => {
        return await INSTANCE_V2.get(
            `apis/packetlifter.dev/v1/namespaces/default/vnets/${networkName}`
        )
    },
    
    patchSubnet: async (networkName: string, vNetData: any) => {
        return await INSTANCE_V2.patch(
            `apis/packetlifter.dev/v1/namespaces/default/vnets/${networkName}`,
            vNetData,
            { headers: { 'Content-Type': 'application/merge-patch+json' } }
        )
    },
}