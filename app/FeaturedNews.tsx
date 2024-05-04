import React from 'react';

interface FeaturedNewsProps {

}


export default  async function FeaturedNews(props : FeaturedNewsProps) {
    const res = await fetch('https://backend.smetalks.co.ke/wp-json/wp/v2/posts?categories=18&_embed&orderby=date');
    const data = await res.json();

    // Assuming you want to display the first post
    const latestPost = data[0]; 

    const title = latestPost.title.rendered;
    const summary = latestPost.excerpt.rendered;
    const shortSummary = summary.substring(0, 100) + '...';
    const imageUrl = latestPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
    const slug = latestPost.slug;
   

    return (
        <div>
            <section className="top-space-margin p-0 featured">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-12 blog-side-image">
                            <div className="blog-box d-md-flex d-block flex-row flex-wrap h-100 border-radius-6px overflow-hidden">
                                <div className="blog-image w-60 xl-w-50 md-w-100 cover-background" >
                            
{imageUrl ? <img src={imageUrl} alt="" /> : <p>Loading...</p>}
                                    <a href={`/article/${slug}`}></a>
                                </div>
                                <div className="blog-content w-40 xl-w-50 md-w-100 p-5 xxl-p-30px bg-very-light-gray d-flex flex-column justify-content-center align-items-start sm-ps-15px sm-pe-15px sm-pt-30px sm-pb-30px text-center text-md-start" >
                                    <div className="mb-20px sm-mx-auto">
                                        <a href="#" className="fw-600 text-dark-gray d-inline-block">Feature</a>
                                    </div>
                                    <h2 className="fw-600 alt-font">
                                        <a href={`/article/${slug}`} className="card-title text-dark-gray text-dark-gray-hover ls-minus-1px">{title ? <h1>{title}</h1> : <p>Loading...</p> }</a>
                                    </h2>
                                   

                                    <div dangerouslySetInnerHTML={{ __html: shortSummary }} /> 
  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}


