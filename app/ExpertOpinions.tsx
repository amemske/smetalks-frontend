import React from 'react';

interface LeadershipProps {

}

export default async function Leadership(props: LeadershipProps) {
    const res = await fetch('https://backend.smetalks.co.ke/wp-json/wp/v2/posts?categories=19&_embed');
    const data = await res.json();

    const LeadershipNews = data.slice(0,3).map(leadership => {
       
        return {
            title: leadership.title.rendered,
            content: leadership.content.rendered, 
            imageUrl: leadership._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
            link: leadership.link,
            slug: leadership.slug
        };
    });


    return (

        <section>
            <div className="container-fluid p-0">
                <div className="row justify-content-center mb-1">
                    <div className="col-12 col-md-5 text-center" >
                        <span className="ls-2px text-uppercase text-dark-gray fw-500 lh-22 mb-10px d-block">Empower, Equip, Inspire</span>
                        <h3 className="fw-600 text-dark-gray alt-font ls-minus-1px w-90 mx-auto sm-w-100 sm-mb-20px">SME 101:</h3>
                    </div>
                </div>

                <div className="row mb-4 blog-grid">
                    {LeadershipNews.map((leadership) => (
                        <div className="col-sm" key={leadership.title}>
                            <div className="card border-radius-6px border-0 box-shadow-medium-bottom box-shadow-medium-bottom-hover">
                                <div className="blog-image home-leadership-image">
                                    <a href={`/article/${leadership.slug}`} className="d-block">
                                    {leadership.imageUrl ? 
    <img src={leadership.imageUrl} alt={leadership.title} /> 
: <p>Loading image...</p>}</a>
                                    
                                </div>
                                <div className="card-body p-11">
                                    <a href={`/article/${leadership.slug}`} className="card-title mb-15px fw-600 fs-18 lh-26 text-dark-gray d-inline-block">{leadership.title}</a>
                                    <p>{leadership.summary}</p>
                                    
                                </div>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </section>



    );
}