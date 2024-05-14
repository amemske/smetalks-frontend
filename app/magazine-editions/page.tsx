import React from 'react';
import AdSectionFooter from '../AdSectionFooter';

export default  async  function Page() {
    const res = await fetch('https://backend.smetalks.co.ke/wp-json/wp/v2/magazine?_embed', { next: { revalidate: 30 }});
    const data = await res.json();

    const magazines = data.slice(0,5).map(magazine => {
 
        return {
            title: magazine.title.rendered,
            link: magazine.acf.magazine_link.url,
            date:  magazine.acf.magazine_date,
            imageUrl: magazine._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url || null,
            baseUrl: 'https://backend.smetalks.co.ke'
        };
    });

    return (

        <section className="correct-fixed">
            <div className="container-fluid p-0">
                <div className="row justify-content-center mb-2">
                    <div className="col-12 col-lg-5 text-center">
                        <span
                            className="ls-2px text-uppercase text-black fw-500 lh-22 mb-10px d-block">Browse the <span
                            className="d-inline-block border-2 text-black border-bottom border-color-transparent-base-color fw-800">latest</span></span>
                        <h3 className="fw-600 text-black alt-font ls-minus-1px w-90 mx-auto">Magazine Editions</h3>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <ul className="blog-grid blog-wrapper grid grid-4col xl-grid-4col lg-grid-4col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                            {magazines.map((magazine) => (
                            <li className="grid-item">
                                <div
                                    className="card border-radius-6px border-0 box-shadow-medium-bottom box-shadow-medium-bottom-hover">
                                    <div className="blog-image">
                                        <a href={magazine.link} className="d-block">
                                        {magazine.imageUrl ? 
                        <img src={magazine.imageUrl} alt={magazine.title} /> 
                    : <p>Loading image...</p> }
                                        </a>

                                    </div>
                                    <div className="card-body p-11">
                                        <a href={magazine.link} target='_blank'
                                           className="card-title mb-15px fw-600 fs-18 lh-26 text-dark-gray d-inline-block">{magazine.title}</a>
                                        <div
                                            className="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-15 text-uppercase">


                                        </div>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <AdSectionFooter/>
        </section>

        

    );
}

