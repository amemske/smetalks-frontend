import React from 'react';

interface StrategyProps {

}

export default async function Strategy(props: StrategyProps) {
    const res = await fetch('https://backend.smetalks.co.ke/wp-json/wp/v2/posts?categories=15&_embed');
    const data = await res.json();

    const strategyNews = data.slice(0,3).map(strategy => {
       
        return {
            title: strategy.title.rendered,
            content: strategy.content.rendered, 
            imageUrl: strategy._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
            link: strategy.link,
            slug: strategy.slug
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
                        
                        <h3 className="fw-600 text-dark-gray alt-font ls-minus-1px mb-30px sm-mb-20px">Business News</h3>
                        <a href="#" className="btn btn-medium btn-base-color btn-slide-right btn-rounded section-link">Explore more<span className="bg-very-light-gray"></span></a>
                    </div>
                    <div className="col-12 col-xxl-9">
                        <ul className="blog-grid blog-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" >

                            {strategyNews.map((strategy) => (
                                <li className="grid-item" key={strategy.title}>
                                    <div className="card border-0 border-radius-6px box-shadow-medium box-shadow-extra-large-hover">
                                        <div className="blog-image home-strategy-image">
                                            <a href={`/article/${strategy.slug}`} className="d-block">
                                            {strategy.imageUrl ? 
    <img src={strategy.imageUrl} alt={strategy.title} /> 
: <p>Loading image...</p>}</a>
                                          
                                        </div>
                                        <div className="card-body p-11">
                                            <a href={`/article/${strategy.slug}`} className="card-title mb-15px fw-600 fs-18 lh-26 text-dark-gray d-inline-block">
                                                {strategy.title}
                                            </a>
                                            <p>{strategy.summary}</p>
                                           
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