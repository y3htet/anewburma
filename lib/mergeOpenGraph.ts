// Search Media Optimisation

import { url } from "inspector";
import type { Metadata } from "next";
import { title } from "process";

// Default open graph
const defaultOpenGraph: Metadata ['openGraph'] = {

    title: "Next Js Tailwind CSS DESIGN UI",
    description: "Mastering your tailwind css skills",
    images: [
        {
            url: '${process.env.NEXT_PUBLIC.SERVER_URL}/logo/anb.png'
        }
    ],
    type:"website",
    url: '${process.env.NEXT_PUBLIC.SERVER_URL}'

}

// Dynamic open graph

export const mergeOpenGraph = (og?: Metadata['openGraph']) => {
    return {
        ... defaultOpenGraph,
        ...og,
        images: og?.images ? og.images : defaultOpenGraph.images,
        title: og?.title ? og.title : defaultOpenGraph.title,
        url: og?.url ? og.url : defaultOpenGraph.url,
    }
    
}