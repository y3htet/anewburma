import { MetadataRoute } from "next";
import React from "react";

export default function robots (): MetadataRoute.Robots {
    return {
        rules: {
            userAgent:'*',
            allow: '/',
            disallow: '/private'
        },
        sitemap: 'https://porsche-designui.netlify.app'
    }
}