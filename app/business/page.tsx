import React from 'react';

async function  Page() {

    const res = await fetch('https://app.smetalks.co.ke/jsonapi/node/article/?filter[field_tags.meta.drupal_internal__target_id][condition][path]=field_tags.meta.drupal_internal__target_id&filter[field_tags.meta.drupal_internal__target_id][condition][operator]=IN&filter[field_tags.meta.drupal_internal__target_id][condition][value][]=5&fields[node--article]=title,body,field_image&include=field_image&sort=-created');
    const data = await res.json();

    const leadershipNews = data.data.slice(0,3).map(leadership => {
        const imageFile = data.included.find(item => item.id === leadership.relationships.field_image.data.id)

        return {
            title: leadership.attributes.title,
            imageUrl: imageFile?.attributes?.uri?.url ?? null,
            drupalBaseUrl: 'https://app.smetalks.co.ke'
        };
    });

    const leadershipNewsMore = data.data.slice(3,100).map(leadership => {
        const imageFile = data.included.find(item => item.id === leadership.relationships.field_image.data.id)

        return {
            title: leadership.attributes.title,
            summary: leadership.attributes?.body?.summary,
            imageUrl: imageFile?.attributes?.uri?.url ?? null,
            drupalBaseUrl: 'http://smebusinessmagazine.test'
        };
    });

    return (
        <div>
            <section className="bg-very-light-gray position-relative overflow-hidden correct-fixed leadership-page">
                <div className="container">
                    <div className="row justify-content-center mb-2 sm-mb-0">
                        <div className="col-lg-8 text-center">
                            <h2 className="alt-font text-dark-gray fw-700 ls-minus-1px ps-35px pe-35px xs-ps-0 xs-pe-0 d-inline-block position-relative text-highlight shadow-none"><span
                                className="h-2px position-absolute left-0px top-55 bg-base-color separator-animation d-sm-block d-none"></span>Featured
                                posts</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="blog-clean blog-wrapper grid grid-3col xl-grid-3col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">

                                {leadershipNews.map((leadership) => (
                                    <li className="grid-item">
                                        <div
                                            className="card bg-transparent border-0 border-bottom border-color-transparent-dark-very-light border-radius-0px h-100">
                                            <div className="blog-image position-relative overflow-hidden">
                                                <a href="demo-magazine-blog-single-creative.html">
                                                    {leadership.imageUrl ? <img src={leadership.drupalBaseUrl+leadership.imageUrl} alt={leadership.title} /> : <p>Loading image...</p>}
                                                </a>
                                            </div>
                                            <div className="card-body px-0 pt-35px pb-20px position-relative">
                                                <div className="blog-categories position-absolute left-0px">
                                                    <a href="demo-magazine-food.html"
                                                       className="categories-btn text-white text-white-hover bg-base-color text-uppercase fw-600">Business</a>
                                                </div>
                                                <a href="demo-magazine-blog-single-creative.html"
                                                   className="card-title mb-0 alt-font fs-19 fw-600 lh-26 text-dark-gray d-inline-block w-85 xl-w-100 lg-w-70 xs-w-100">
                                                    {leadership.title}</a>
                                            </div>
                                        </div>
                                    </li>

                                ))}



                            </ul>
                        </div>
                    </div>
                </div>

            </section>

            <section className="bg-very-light-gray pb-0">
                <div className="container overlap-section">
                    <div className="row justify-content-center pt-45px pb-45px g-0 cover-background" style={{ backgroundImage: `url('images/demo-magazine-home-13.jpg')`}}>

                        <div className="col-12 position-relative justify-content-center align-items-center text-center">
                            <div
                                className="text-white fs-32 alt-font fw-600 d-inline-block align-middle mb-0 me-30px md-me-0 md-mb-30px">Get
                                the latest updates mailed to you.
                            </div>
                            <a href="#subscribe"
                               className="btn btn-large btn-rounded btn-white inner-link fw-700 btn-box-shadow">Subscribe
                                now</a>
                        </div>

                    </div>
                </div>
            </section>

            <section className=" pt-40px overflow-hidden pt-0 bg-gradient-bottom-very-light-gray sm-pt-50px">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 blog-standard md-mb-50px sm-mb-40px">
                            <ul className="blog-side-image blog-wrapper post-sidebar grid grid-1col xxl-grid-1col xl-grid-1col lg-grid-1col md-grid-1col sm-grid-1col xs-grid-1col">
                                {leadershipNewsMore.map((leadershipMore) => (
                                    <li className="grid-item">
                                        <div
                                            className="blog-box d-md-flex d-block flex-row h-100 overflow-hidden box-shadow-double-large">
                                            <div className="blog-image w-45 sm-w-100 cover-background sm-h-300px xs-h-200px">
                                                {leadershipMore.imageUrl ? <img src={leadershipMore.drupalBaseUrl+leadershipMore.imageUrl} alt={leadershipMore.title} /> : <p>Loading image...</p>}
                                                <a href="demo-magazine-blog-single-creative.html"
                                                   className="blog-post-image-overlay"></a>
                                            </div>
                                            <div
                                                className="blog-content w-55 sm-w-100 p-50px lg-ps-30px lg-pe-30px bg-white d-flex flex-column justify-content-center align-items-start xs-p-25px last-paragraph-no-margin">
                                                <a href="demo-magazine-travel.html"
                                                   className="categories-btn bg-base-color text-white btn-box-shadow text-uppercase fw-600 mb-20px">Business</a>
                                                <a href="demo-magazine-blog-single-creative.html"
                                                   className="card-title text-dark-gray mb-15px fw-600 fs-22 xs-fs-20 alt-font w-95 xs-w-100">
                                                    {leadershipMore.title}</a>
                                                <p>{leadershipMore.summary}</p>
                                            </div>
                                        </div>
                                    </li>

                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
}

export default Page;