import React from 'react';

export default async function Page() {

    const res = await fetch('https://backend.smetalks.co.ke/wp-json/wp/v2/our-contacts?_embed');
    const data = await res.json();

    // Assuming you want to display the first post
    const allContent = data[0]; 

    

    const title = allContent.title.rendered;
    
    const left_column_subheading = allContent.acf.left_column_subheading;
    const left_column_heading = allContent.acf.left_column_heading;
    const left_column_section_1_title = allContent.acf.left_column_section_1_title;
    const left_column_section_1_description = allContent.acf.left_column_section_1_description;
    const left_column_section_2_title = allContent.acf.left_column_section_2_title;
    const left_column_section_2_description = allContent.acf.left_column_section_2_description;
    const left_column_section_3_title = allContent.acf.left_column_section_3_title;
    const left_column_section_3_description = allContent.acf.left_column_section_3_description;
    const right_column_title = allContent.acf.right_column_title;
    const right_column_description = allContent.acf.right_column_description;
    const featuredImage = allContent._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
    const backgroundImage = allContent.acf.background_image.url || null;
    //const backgroundImage = allContent._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
   
    // const summary = latestPost.excerpt.rendered;
    // const shortSummary = summary.substring(0, 100) + '...';
  
    // const slug = latestPost.slug;

    return (

        <div>

            <section className="top-space-margin page-title-big-typography border-radius-6px lg-border-radius-0px p-0 mb-4" style={{ backgroundImage: `url(https://backend.smetalks.co.ke/wp-content/uploads/2024/05/nairobi-bg-small.jpg)` }}>
                <div className="opacity-extra-medium bg-blue-whale"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center small-screen">
                        <div className="col-lg-8 position-relative text-center page-title-extra-large">
                        <h1 className="m-auto text-white text-shadow-double-large fw-600 ls-minus-2px">{title ? title : <p>Loading...</p> } </h1>
                    </div>
                    <div className="down-section text-center" >
                        <a href="down-section" className="section-link">
                        <div className="text-white">
                            <i className="feather icon-feather-chevron-down icon-very-medium"></i>
                        </div>
                    </a>
                </div>
        </div>
</div>
</section>




        <section className="position-relative pt-0 ">
            <div className="container">
                <div className="row align-items-center mb-11 lg-mb-15 justify-content-xl-start justify-content-center">

                    <div
                        className="col-xxl-4 col-lg-5 col-md-12 order-lg-1 order- sm-mb-30px appear anime-child anime-complete">
                        <span className="ls-2px text-uppercase text-dark-gray fw-500 lh-22 mb-20px d-block">{left_column_subheading ? left_column_subheading : <p>Loading...</p> }</span>
                        <h3 className="fw-600 text-dark-gray alt-font mb-35px" >
                        {left_column_heading ? left_column_heading : <p>Loading...</p> }</h3>

                        <div className="icon-with-text-style-01 mb-7 md-mb-30px" >
                            <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                                <div className="feature-box-icon me-25px">
                                    <img src="images/demo-lawyer-contact-icon-01.jpg" className="h-80px" alt=""/>
                                </div>
                                <div className="feature-box-content last-paragraph-no-margin">
                                    <span className="fs-18 d-block text-dark-gray fw-600 mb-5px">{left_column_section_1_title ? left_column_section_1_title : <p>Loading...</p> }</span>
                                    <p className="w-90">{left_column_section_1_description ? left_column_section_1_description : <p>Loading...</p> }</p>
                                </div>
                            </div>
                        </div>


                        <div className="icon-with-text-style-01 mb-7 md-mb-30px" >
                            <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                                <div className="feature-box-icon me-25px">
                                    <img src="images/demo-lawyer-contact-icon-02.jpg" className="h-80px" alt=""/>
                                </div>
                                <div className="feature-box-content">
                                    <span className="fs-18 d-block text-dark-gray fw-600 mb-5px">{left_column_section_2_title ? left_column_section_2_title : <p>Loading...</p> }</span>
                                    <div className="w-100 d-block">
                                    {left_column_section_2_description ? left_column_section_2_description : <p>Loading...</p> }
                                        {/* <span className="d-block">Phone: 1-800-222-000 </span>
                                        <span className="d-block">Fax: 1-800-222-002</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="icon-with-text-style-01" >
                            <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                                <div className="feature-box-icon me-25px">
                                    <img src="images/demo-lawyer-contact-icon-03.jpg" className="h-80px" alt=""
                                         data-no-retina=""/>
                                </div>
                                <div className="feature-box-content">
                                    <span className="fs-18 d-block text-dark-gray fw-600 mb-5px"> {left_column_section_3_title ? left_column_section_3_title : <p>Loading...</p> }</span>
                                    <div className="w-100 d-block">
                                    {left_column_section_3_description ? left_column_section_3_description : <p>Loading...</p> }
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div
                        className="col-xxl-7 col-xl-6 offset-xl-1 col-lg-7 col-md-12 position-relative order-lg-2 order-1 md-mb-15">
                        <div className="w-70 lg-w-90 sm-w-100 sm-mb-30px appear anime-child anime-complete">
                        <img src={featuredImage || 'placeholder-image.jpg' } alt={title} className="w-100" />
                            </div>
                        <div
                            className="contact-form-style-03 position-absolute sm-position-relative right-15px sm-right-0px bottom-minus-60px sm-bottom-0px bg-base-color box-shadow-double-large w-350px sm-w-100 appear anime-complete"

                            >
                            <div className="ps-60px pe-60px pt-45px pb-45px sm-p-35px last-paragraph-no-margin">
                                <h5 className="fw-700 alt-font text-white mb-20px"> {right_column_title ? right_column_title : <p>Loading...</p> }</h5>
                                <p className="text-white mb-10px"> {left_column_section_2_description ? left_column_section_2_description : <p>Loading...</p> }</p>
                                <div className="w-100">
                                <div dangerouslySetInnerHTML={{ __html:  right_column_description}} />
                                </div>
                                {/* <div className="w-100 last-paragraph-no-margin">
                                    <span className="text-white fw-600">Phone:</span>
                                    <span className="d-inline-block text-white">1-800-222-000</span>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

);
}
