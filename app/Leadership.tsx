import React from 'react';

export default async function Leadership(props) {
    const res = await fetch('https://app.smetalks.co.ke/jsonapi/node/article/?filter[field_tags.meta.drupal_internal__target_id][condition][path]=field_tags.meta.drupal_internal__target_id&filter[field_tags.meta.drupal_internal__target_id][condition][operator]=IN&filter[field_tags.meta.drupal_internal__target_id][condition][value][]=3&fields[node--article]=title,body,field_image&include=field_image&sort=-created');
    const data = await res.json();

    const leadershipNews = data.data.slice(0,3).map(leadership => {
        const imageFile = data.included.find(item => item.id === leadership.relationships.field_image.data.id)


        return {
            title: leadership.attributes.title,
            summary: leadership.attributes?.body?.summary,
            imageUrl: imageFile?.attributes?.uri?.url ?? null,
            drupalBaseUrl: 'https://app.smetalks.co.ke'
        };
    });


    return (

        <section>
            <div class="container-fluid p-0">
                <div class="row justify-content-center mb-1">
                    <div class="col-12 col-md-5 text-center" >
                        <span class="ls-2px text-uppercase text-dark-gray fw-500 lh-22 mb-10px d-block">Empower, Equip, Inspire</span>
                        <h3 class="fw-600 text-dark-gray alt-font ls-minus-1px w-90 mx-auto sm-w-100 sm-mb-20px">SME 101:</h3>
                    </div>
                </div>

                <div class="row mb-4 blog-grid">
                    {leadershipNews.map((leadership) => (
                        <div class="col-sm" key={leadership.title}>
                            <div class="card border-radius-6px border-0 box-shadow-medium-bottom box-shadow-medium-bottom-hover">
                                <div class="blog-image home-leadership-image">
                                    <a href="demo-blogger-blog-single-classic.html" class="d-block">
                                        {leadership.imageUrl ? <img src={leadership.drupalBaseUrl+leadership.imageUrl} alt={leadership.title} /> : <p>Loading image...</p>}
                                    </a>
                                    <div class="blog-categories">
                                        <a href="#" class="categories-btn bg-dark-gray-transparent text-white text-uppercase fw-600">Leadership</a>
                                    </div>
                                </div>
                                <div class="card-body p-11">
                                    <a href="demo-blogger-blog-single-classic.html" class="card-title mb-15px fw-600 fs-18 lh-26 text-dark-gray d-inline-block">{leadership.title}</a>
                                    <p>{leadership.summary}</p>
                                    <div class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-15 text-uppercase">
                                        <div class="me-auto">
                                            <span class="text-dark-gray blog-date d-inline-block fw-600 text-transform-none">30 December 2023</span>
                                            <div class="text-dark-gray d-inline-block author-name text-transform-none">By <a href="#" class="text-dark-gray text-decoration-line-bottom fw-600">Andy glamer</a></div>
                                        </div>
                                        <div class="like-count fs-14">
                                            <a href="#"><i class="fa-regular fa-heart text-red d-inline-block"></i><span class="text-dark-gray align-middle fw-700">45</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </section>



    );
}