import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
    pageNum: PropTypes.number.isRequired,
    root: PropTypes.string.isRequired
};

const Pager = ({pageNum, root}) => (
    <div className="row">
        <div className="col-sm-12">
            <div className="pagination font-alt mt-30">
                <a href="#"><i className="fa fa-angle-left"></i></a>
               {[...Array(pageNum).keys()].map(i => (
                    <Link key={i} to={`/${root}/${i}`} activeClassName="active" >{i}</Link>
               ))}
                <a href="#"><i className="fa fa-angle-right"></i></a>
            </div>
        </div>
    </div>
);

Pager.propTypes = propTypes;

export default Pager;
