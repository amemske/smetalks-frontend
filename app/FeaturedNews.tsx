import React from 'react';

export default  async function FeaturedNews(props) {
    const res = await fetch(
        'http://smebusinessmagazine.test/jsonapi/node/article/?fields[node--article]=title,body,field_image&include=field_image,field_tags&filter[field_tags.meta.drupal_internal__target_id][condition][path]=field_tags.meta.drupal_internal__target_id&filter[field_tags.meta.drupal_internal__target_id][condition][operator]=IN&filter[field_tags.meta.drupal_internal__target_id][condition][value][]=3');

    const data =await res.json();
//const title = res.data[0].attributes.title;
    const title = data?.data?.[0]?.attributes?.title;
    const summary = data?.data?.[0]?.attributes?.body?.summary;
    const imageUrl = data?.included?.[0]?.attributes?.uri?.url;
    const drupalBaseUrl = 'http://smebusinessmagazine.test';

    return (
        <div>
            <section className="top-space-margin p-0 featured">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-12 blog-side-image">
                            <div className="blog-box d-md-flex d-block flex-row flex-wrap h-100 border-radius-6px overflow-hidden">
                                <div className="blog-image w-60 xl-w-50 md-w-100 cover-background" >
                                    {imageUrl ? <img src={drupalBaseUrl + imageUrl} alt="" /> : <p>Loading...</p>}
                                    <a href="demo-blogger-blog-single-classic.html" className="blog-post-image-overlay"></a>
                                </div>
                                <div className="blog-content w-40 xl-w-50 md-w-100 p-5 xxl-p-30px bg-very-light-gray d-flex flex-column justify-content-center align-items-start sm-ps-15px sm-pe-15px sm-pt-30px sm-pb-30px text-center text-md-start" >
                                    <div className="mb-20px sm-mx-auto">
                                        <a href="#" className="fw-600 text-dark-gray d-inline-block">Feature</a>
                                    </div>
                                    <h2 className="fw-600 alt-font">
                                        <a href="demo-blogger-blog-single-classic.html" className="card-title text-dark-gray text-dark-gray-hover ls-minus-1px">{title ? <h1>{title}</h1> : <p>Loading...</p> }</a>
                                    </h2>
                                    <p className="w-85 lg-w-100">{summary ? <span>{summary}</span> : <span>Loading...</span>}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}


