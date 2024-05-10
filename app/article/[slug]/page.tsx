import { FaUser } from "react-icons/fa";

export default async function Page({ params }: { params: { slug: string } }) {

  const res = await fetch(`https://backend.smetalks.co.ke/wp-json/wp/v2/posts?slug=${params.slug}&_embed`, { next: { revalidate: 30 }});
  const data = await res.json();

  
  console.log(data);

const post = data[0]; 
const title = post.title.rendered; 
const summary = post.content.rendered;
const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
const category = post.category

// Filter out the current post from the response before fetching related posts
const filteredData = data.filter(item => item.id !== post.id); 

// Fetch related posts from the same category
const relatedRes = await fetch(`https://backend.smetalks.co.ke/wp-json/wp/v2/posts?categories=${post.categories[0]}&_embed&exclude=${post.id}`, { next: { revalidate: 40 }});
const relatedData = await relatedRes.json();



const relatedPosts = relatedData.slice(0, 3).map(relatedPost => {
  return {
    title: relatedPost.title.rendered,
    excerpt: relatedPost.excerpt.rendered, // You might want to display an excerpt instead
    imageUrl: relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    slug: relatedPost.slug
  };
});




  return <div>
    <section className="pb-0 pt-15">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h1 className="alt-font text-dark-gray fw-600 ls-minus-1px w-90 md-w-100">{title ? title : <p>Loading...</p> }</h1>
                </div>
               
                <div className="col-lg-10 mb-1 sm-mb-35px last-paragraph-no-margin text-center">
                {imageUrl ? <img src={imageUrl} alt="" /> : <p>Loading...</p>}
                  
                </div>
                <div className="col-lg-10 mb-1 sm-mb-35px last-paragraph-no-margin">
                    <div className="w-90 lg-w-100 content">
                    <div dangerouslySetInnerHTML={{ __html:  post.content.rendered}} />
                    </div>
                </div>
               
             
            </div>
        </div>
    </section>

    <section className="half-section">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-10">

<div className="row">
<div className="col-12 mb-1">
<div className="d-block d-md-flex w-100  align-items-center p-1 sm-p-35px">
<div className="w-140px text-center me-50px sm-mx-auto">
<img src="../images/default-avatar.png" className="rounded-circle w-80px" alt="" data-no-retina=""/>
<a href="demo-charity-causes.html" className="text-dark-gray fw-500 mt-20px d-inline-block lh-20">Peter Munyaka</a>
<span className="fs-15 lh-20 d-block sm-mb-15px">Author</span>
</div>

</div>
</div>
</div>

</div>
</div>
</div>
</section>
  


    <section className="bg-tranquil pt-2">
        <div className="container">
            <div className="row justify-content-center mb-1">
                <div className="col-lg-7 text-center">
                    <span className="alt-font text-dark-gray fs-19 fw-500 mb-5px d-inline-block ls-minus-05p">You may also like</span>
                    <h2 className="alt-font text-dark-gray fw-600 ls-minus-3px">Related posts</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 px-0 xs-ps-15px xs-pe-15px">
                    <ul className="blog-masonry blog-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-1col xs-grid-1col gutter-extra-large">
                    {relatedPosts.map((relatedPost) => (
                        <li className="grid-item" key={relatedPost.slug}>
                            <div className="card border-0 border-radius-4px overflow-hidden box-shadow-large box-shadow-extra-large-hover">
                               
                                <div className="blog-image position-relative overflow-hidden">
                                    <a href={`/article/${relatedPost.slug}`}><img src={relatedPost.imageUrl || 'placeholder-image.jpg' } alt={relatedPost.title}  /></a>
                                </div>
                                <div className="card-body p-0">
                                    <div className="post-content p-11 md-p-9">
                                        <a href={`/article/${relatedPost.slug}`} className="card-title mb-10px fw-600 fs-19 lh-28 text-dark-gray d-inline-block">
                                           {relatedPost.title}
                                            </a>
                                        <div dangerouslySetInnerHTML={{ __html:  relatedPost.excerpt}} />
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

  </div>
}