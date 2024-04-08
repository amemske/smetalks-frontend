'use client'
import React, { useState, useEffect } from 'react';

const FeaturedNews = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const drupalBaseUrl = 'http://smebusinessmagazine.test';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://smebusinessmagazine.test/jsonapi/node/article/?fields[node--article]=title,body,field_image&include=field_image,field_tags&filter[field_tags.meta.drupal_internal__target_id][condition][path]=field_tags.meta.drupal_internal__target_id&filter[field_tags.meta.drupal_internal__target_id][condition][operator]=IN&filter[field_tags.meta.drupal_internal__target_id][condition][value][]=3');
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    const title = data?.data?.[0]?.attributes?.title;
    const summary = data?.data?.[0]?.attributes?.body?.summary;
    const imageUrl = data?.included?.[0]?.attributes?.uri?.url;

    return (
        <div>
            {imageUrl ? <img src={drupalBaseUrl + imageUrl} alt="" /> : <p>Loading image...</p>}
            {title && <h1>{title}</h1>}
            {summary && <p>{summary}</p>}
        </div>
    );
};

export default FeaturedNews;
