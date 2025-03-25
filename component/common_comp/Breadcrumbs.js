import React from 'react'

const Breadcrumbs = ({ link, main, page, title }) => {
    return (
        <div class="breadcrumb-wrapper section-padding  bg-cover" style={{ backgroundImage: "url('/img/breadcrumb-bg.jpg')" }}>
            <div class="container-fluid">
                <div class="page-heading">
                    <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <a href={link}>
                                {main}
                            </a>
                        </li>
                        <li>
                            <i class="far fa-slash"></i>
                        </li>
                        <li>
                            {page}
                        </li>
                    </ul>
                    <h1 class="wow fadeInUp" data-wow-delay=".5s">{title}</h1>
                </div>
            </div>
          
        </div>
    )
}

export default Breadcrumbs
