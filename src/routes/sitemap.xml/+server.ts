import * as sitemap from 'super-sitemap';

export const GET = async (event) => {
    const { url } = event;

    return await sitemap.response({
        origin: url.origin,
        excludeRoutePatterns: [
            '.*\\(app\\).*',
        ]
    })
}