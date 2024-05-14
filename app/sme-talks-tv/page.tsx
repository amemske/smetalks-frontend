import React from 'react';
import AdSectionSingleFooter from '../AdSectionSingleFooter';

async function  Page() {

    const res = await fetch('https://backend.smetalks.co.ke/wp-json/wp/v2/tvtalk?_embed', { next: { revalidate: 30 }});
    const data = await res.json();

    const SMEVideos = data.slice(0,3).map(SMEVideo => {
        console.log(SMEVideo.acf.youtube_link)
        return {
            title: SMEVideo.title.rendered,
            imageUrl: SMEVideo._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url || null,
            youtubeLink: SMEVideo.acf.youtube_link // Extract from ACF
        };
    });

   


    return (
        <div>
            <section className="bg-very-light-gray position-relative overflow-hidden correct-fixed leadership-page mb-2 pb-0">
                <div className="container">
                    <div className="row justify-content-center mb-2 sm-mb-0">
                        <div className="col-lg-8 text-center">
                            <h2 className="alt-font text-dark-gray fw-700 ls-minus-1px ps-35px pe-35px xs-ps-0 xs-pe-0 d-inline-block position-relative text-highlight shadow-none"><span
                                className="h-2px position-absolute left-0px top-55 bg-base-color separator-animation d-sm-block d-none"></span>
                                SME Talks Tv</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="blog-clean blog-wrapper grid grid-3col xl-grid-3col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">

                                {SMEVideos.map((SMEVideo) => (
                                    <li className="grid-item">
                                        <div
                                            className="card bg-transparent border-0 border-bottom border-color-transparent-dark-very-light border-radius-0px h-100">
                                            <div className="blog-image position-relative overflow-hidden">
                                                <a href={SMEVideo.youtubeLink} target='_blank'>
                                                {SMEVideo.imageUrl ? 
                        <img src={SMEVideo.imageUrl} alt={SMEVideo.title} /> 
                    : <p>Loading image...</p> }</a>
                                            </div>
                                            <div className="card-body px-0 pt-35px pb-20px position-relative">
                                                <div className="blog-categories position-absolute left-0px">
                                                    <a href="#"
                                                       className="categories-btn text-white text-white-hover bg-base-color text-uppercase fw-600">Video</a>
                                                </div>
                                                <a href={SMEVideo.youtubeLink} target='_blank'
                                                   className="card-title mb-0 alt-font fs-19 fw-600 lh-26 text-dark-gray d-inline-block w-85 xl-w-100 lg-w-70 xs-w-100">
                                                    {SMEVideo.title}</a>
                                            </div>
                                        </div>
                                    </li>

                                ))}



                            </ul>
                        </div>
                    </div>
                </div>

            </section>

          

            <AdSectionSingleFooter />


        </div>
    );
}

export default Page;