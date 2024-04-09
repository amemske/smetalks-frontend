import React from 'react';

interface AdSectionFooterProps {

}

function AdSectionFooter(props: AdSectionFooterProps) {
    return (
        <section className={`pb-10px pt-10px ${props.className}`}>
            <div className="row advert mb-4">
                <div className="col-12 text-center">
                    <a href={props.adLink} className="border border-color-extra-medium-gray d-inline-block">
                        <img src={props.adImageSrc} alt=""/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AdSectionFooter;
