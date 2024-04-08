import React from 'react';

export default async function Magazines(props) {
    const res = await fetch('http://smebusinessmagazine.test/jsonapi/node/magazine_editions?fields[node--magazine_editions]=title,field_magazine_date,field_magazine_image&include=field_magazine_image&sort=-created');
    const data = await res.json();

    const magazines = data.data.slice(0,5).map(magazine => {
        const imageFile = data.included.find(item => item.id === magazine.relationships.field_magazine_image.data.id);

        return {
            title: magazine.attributes.title,
            date: magazine.attributes.field_magazine_date,
            imageUrl: imageFile ? imageFile.attributes.uri.url : null,
            drupalBaseUrl: 'http://smebusinessmagazine.test'
        };
    });


    return (
        <section>
            <div class="container-fluid p-0">
                <div class="row justify-content-center mb-2">
                    <div class="col-12 col-md-8 text-center">
                        <span class="ls-2px text-uppercase text-dark-gray fw-500 lh-22 mb-10px d-block">Browse the <span class="d-inline-block border-2 border-bottom border-color-transparent-base-color fw-800">Editions</span></span>
                        <h3 class="fw-600 text-dark-gray alt-font ls-minus-1px w-90 mx-auto sm-w-100">Find the perfect look</h3>
                    </div>
                </div>
                <div class="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center" >

                    {magazines.map((magazine) => (
                        <div class="col categories-style-03 lg-mb-30px" key={magazine.title}>
                            <div class="categories-box border-radius-6px overflow-hidden">
                                <div class="category-image">
                                    <a href="#" class="d-block">
                                        {magazine.imageUrl ? <img src={magazine.drupalBaseUrl+magazine.imageUrl} alt={magazine.title} /> : <p>Loading image...</p>}
                                        <div class="position-absolute left-0px top-0px w-100 h-100 bg-gradient-gray-light-dark-transparent"></div>
                                    </a>
                                </div>
                                <div class="category-title d-flex align-items-center">
                                    <a href="#" class="fs-20 fw-600 text-white">{magazine.title}</a>
                                   </div>
                            </div>
                        </div>

                    ))}



                </div>
            </div>
        </section>
    );
}
