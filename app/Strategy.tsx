import React from 'react';

interface StrategyProps {

}

export default async function Strategy(props: StrategyProps) {
    const res = await fetch('https://app.smetalks.co.ke/jsonapi/node/article/?filter[field_tags.meta.drupal_internal__target_id][condition][path]=field_tags.meta.drupal_internal__target_id&filter[field_tags.meta.drupal_internal__target_id][condition][operator]=IN&filter[field_tags.meta.drupal_internal__target_id][condition][value][]=5&fields[node--article]=title,body,field_image&include=field_image&sort=-created');
    const data = await res.json();

    const strategyNews = data.data.slice(0,3).map(strategy => {
        const imageFile = data.included.find(item => item.id === strategy.relationships.field_image.data.id)


        return {
            title: strategy.attributes.title,
            summary: strategy.attributes?.body?.summary,
            imageUrl: imageFile?.attributes?.uri?.url ?? null,
            drupalBaseUrl: 'https://app.smetalks.co.ke'
        };
    });


    return (

        <section className="p-5 xxl-p-2 xl-pt-30px xl-pb-30px bg-very-light-gray border-radius-6px position-relative overflow-hidden">
            <img src="images/demo-blogger-home-leaf-01.png" className="position-absolute top-minus-10px left-15px w-160px" alt="" />
            <img src="images/demo-blogger-home-leaf-02.png" className="position-absolute top-minus-30px right-minus-50px" alt="" />
            <img src="images/demo-blogger-home-leaf-03.png" className="position-absolute bottom-minus-30px left-150px" alt="" />
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-xxl-3 text-center text-xxl-start xl-mt-30px xl-mb-30px sm-mt-20px" >
                        <span className="ls-2px text-uppercase text-dark-gray fw-500 lh-22 mb-15px d-block">Trending <span className="d-inline-block border-2 border-bottom border-color-transparent-base-color fw-800"></span></span>
                        <h3 className="fw-600 text-dark-gray alt-font ls-minus-1px mb-30px sm-mb-20px">Business News.</h3>
                        <a href="#" className="btn btn-medium btn-base-color btn-slide-right btn-rounded section-link">Explore more<i className="fa-sharp fa-solid fa-arrow-right"></i><span className="bg-very-light-gray"></span></a>
                    </div>
                    <div className="col-12 col-xxl-9">
                        <ul className="blog-grid blog-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" >

                            {strategyNews.map((strategy) => (
                                <li className="grid-item" key={strategy.title}>
                                    <div className="card border-0 border-radius-6px box-shadow-medium box-shadow-extra-large-hover">
                                        <div className="blog-image home-strategy-image">
                                            <a href="demo-blogger-blog-single-classic.html" className="d-block">
                                                {strategy.imageUrl ? <img src={strategy.drupalBaseUrl+strategy.imageUrl} alt={strategy.title} /> : <p>Loading image...</p>}
                                            </a>
                                            <div className="blog-categories">
                                                <a href="#" className="categories-btn bg-dark-gray-transparent text-white text-uppercase fw-600">Strategy</a>
                                            </div>
                                        </div>
                                        <div className="card-body p-11">
                                            <a href="demo-blogger-blog-single-classic.html" className="card-title mb-15px fw-600 fs-18 lh-26 text-dark-gray d-inline-block">
                                                {strategy.title}
                                            </a>
                                            <p>{strategy.summary}</p>
                                            <div className="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-15 text-uppercase">
                                                <div className="me-auto">
                                                    <span className="text-dark-gray blog-date d-inline-block fw-600 text-transform-none">30 December 2023</span>
                                                    <div className="text-dark-gray text-dark-gray d-inline-block author-name text-transform-none">By <a href="#" className="text-dark-gray text-decoration-line-bottom fw-600">Jessica dover</a></div>
                                                </div>
                                                <div className="like-count fs-14">
                                                    <a href="#"><i className="fa-regular fa-heart text-red d-inline-block"></i><span className="text-dark-gray align-middle fw-700">45</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}


                        </ul>
                    </div>
                </div>
            </div>
        </section>


    );
}