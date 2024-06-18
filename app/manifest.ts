import { Metadata, MetadataRoute } from 'next'

export default function manifest () : MetadataRoute.Manifest {
    return {
        name: "A New Burma",
        short_name: "a_new_burma",
        description: "A New Burma is a term that encapsulates the transformative journey of Myanmar, formerly known as Burma, as it navigates the complexities of modern statehood and development. Emerging from decades of military dictatorship, Myanmar has embarked on a challenging path toward democracy, economic revitalization, and social cohesion.",
        start_url: "/",
        display: "standalone",
        background_color: "#000",
        theme_color: "#000",
        icons: [
            {
                src:"/logo/anb.png",
                sizes: "240x240",
                type: "image/png"
            }
        ]
    }
}
