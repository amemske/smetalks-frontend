import React from 'react';
import AdSectionSingleFooter from '../AdSectionSingleFooter';

async function  Page() {

    const res = await fetch('https://backend.smetalks.co.ke/wp-json/wp/v2/posts?categories=15&_embed', { next: { revalidate: 30 }});
    const data = await res.json();

    const BusinessNews = data.slice(0,3).map(business => {
       
        return {
            title: business.title.rendered,
            content: business.content.rendered, 
            imageUrl: business._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
            link: business.link,
            slug: business.slug
        };
    });

    const BusinessNewsMore = data.slice(3,100).map(business => {
      
        return {
            title: business.title.rendered,
            content: business.content.rendered,
            imageUrl: business._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
            slug: business.slug
        };
    });

    return (
        <div>
            <section className="bg-very-light-gray position-relative overflow-hidden correct-fixed leadership-page mb-0">
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

                                {BusinessNews.map((business) => (
                                <li className="grid-item">
                                    <div
                                        className="card bg-transparent border-0 border-bottom border-color-transparent-dark-very-light border-radius-0px h-100">
                                        <div className="blog-image position-relative overflow-hidden">
                                            <a href={`/article/${business.slug}`}>
                                            {business.imageUrl ? 
    <img src={business.imageUrl} alt={business.title} /> 
: <p>Loading image...</p>}
                                            </a>
                                        </div>
                                        <div className="card-body px-0 pt-35px pb-20px position-relative">
                                            
                                            <a href={`/article/${business.slug}`}
                                               className="card-title mb-0 alt-font fs-19 fw-600 lh-26 text-dark-gray d-inline-block w-85 xl-w-100 lg-w-70 xs-w-100">
                                                {business.title}</a>
                                        </div>
                                    </div>
                                </li>

                                ))}



                            </ul>
                        </div>
                    </div>
                </div>

            </section>

            <div className='spacer mb-3'></div>

            <AdSectionSingleFooter/>

            <section className=" pt-40px overflow-hidden pt-0 bg-gradient-bottom-very-light-gray sm-pt-50px">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 blog-standard md-mb-50px sm-mb-40px">
                            <ul className="blog-side-image blog-wrapper post-sidebar grid grid-1col xxl-grid-1col xl-grid-1col lg-grid-1col md-grid-1col sm-grid-1col xs-grid-1col">
                                {BusinessNewsMore.map((businessMore) => (
                                <li className="grid-item">
                                    <div
                                        className="blog-box d-md-flex d-block flex-row h-100 overflow-hidden box-shadow-double-large">
                                        <div className="blog-image w-45 sm-w-100 cover-background sm-h-300px xs-h-200px">
                                        {businessMore.imageUrl ? 
    <img src={businessMore.imageUrl} alt={businessMore.title} /> 
: <p>Loading image...</p>} <a href={`/article/${businessMore.slug}`}
                                               className="blog-post-image-overlay"></a>
                                        </div>
                                        <div
                                            className="blog-content w-55 sm-w-100 p-50px lg-ps-30px lg-pe-30px bg-white d-flex flex-column justify-content-center align-items-start xs-p-25px last-paragraph-no-margin">
                                            
                                            <a href={`/article/${businessMore.slug}`}
                                               className="card-title text-dark-gray mb-15px fw-600 fs-22 xs-fs-20 alt-font w-95 xs-w-100">
                                                {businessMore.title}</a>
                                            <p>{businessMore.summary}</p>
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