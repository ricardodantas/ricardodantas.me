const API_BASE_URL = 'https://graphql.contentful.com/content/v1/spaces/'

async function fetchGraphQL(query, preview = false) {
    return fetch(
        `${API_BASE_URL}${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${preview
                        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                        : process.env.CONTENTFUL_ACCESS_TOKEN
                    }`,
            },
            body: JSON.stringify({ query }),
        }
    ).then((response) => response.json());
}

export async function getPerson(preview) {

    const entries = await fetchGraphQL(
        `query {
            personCollection(preview: ${preview ? 'true' : 'false'}, limit: 1) {
                items {
                    name
                    jobTitle
                    photo {
                        url
                    }
                    email
                    bio
                    keywords
                    socialMediaCollection {
                        items {
                            name
                            icon {
                                url
                            }
                            url
                        }
                    }
                }
            }
        }`,
        preview
    );
    return entries?.data?.personCollection?.items?.[0];
}
