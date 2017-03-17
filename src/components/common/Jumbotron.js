import React, { PropTypes } from 'react';

const defaultProps = {
    defaultProps
};

const Jumbotron = props => (
    <section className="module bg-dark bg-dark-60" data-background="assets/images/section-4.jpg" 
    style={{backgroundImage: 'url(assets/images/section-4.jpg)'}}>
        <div className="container">

            <div className="row">

                <div className="col-sm-6 col-sm-offset-3">

                    <h1 className="module-title font-alt">Shop grid</h1>
                    <div className="module-subtitle font-serif mb-0">
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
						</div>
                </div>
            </div>{/*<!-- .row -->*/}
        </div>
    </section>
);

export default Jumbotron;
