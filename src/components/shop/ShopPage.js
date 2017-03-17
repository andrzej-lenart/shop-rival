import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import FilterSection from './FilterSection';

const propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    pageNo: PropTypes.number
};

const defaultProps = {
    pageNo: 0
};

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.pageSize = 9;

        this.state = {
            displayedProducts: this.getPage(this.props.products),
            filter: {
                category: 'All',
                sorting: undefined
            }
        };

        this.onApply = this.onApply.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getPage = this.getPage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            displayedProducts: this.getPage(nextProps.products)
        });
    }

    filterProducts() {
        const filter = this.state.filter;
        let displayedProducts = filter.category === 'All' ? this.props.products : this.props.products.filter(product => {
            return product.category === filter.category;
        });

        if (filter.sorting) {
            switch (filter.sorting) {
                case 'LOW_PRICE':
                    displayedProducts.sort((a, b) => (parseFloat(a.price - parseFloat(b.price))));
                    break;
                case 'HIGH_PRICE':
                    displayedProducts.sort((a, b) => (parseFloat(b.price - parseFloat(a.price))));
            }
        }

        return displayedProducts;
    }

    onApply(event) {
        event.preventDefault();
        let displayedProducts = this.getPage(this.filterProducts());

        this.setState({ displayedProducts: displayedProducts });
    }

    onChange(event) {
        event.preventDefault();
        const valueSet = event.target.value;
        let filter = this.state.filter;
        filter[event.target.name] = valueSet;
        this.setState({
            filter
        });
    }

    getPage(products) {
        let lastIndex = this.props.skip + this.pageSize;
        if (lastIndex > products.length) lastIndex = products.length;
        return products.slice(this.props.skip, lastIndex);
    }

    render() {
        return (
            <div className="container">
                <FilterSection categories={this.props.categories} filter={this.state.filter} onApply={this.onApply} onChange={this.onChange} />
                <div className="row">
                    <ProductList products={this.state.displayedProducts} />
                </div>
            </div>
        );
    }
}

ShopPage.propTypes = propTypes;
ShopPage.defaultProps = defaultProps;

function mapStateToProps(state, ownProps) {
    const pageNo = parseInt(ownProps.params.pageNo);
    const skip = pageNo > 0 ? ((pageNo - 1) * 9) : 0;
    return {
        pageNo,
        skip,
        products: state.products,
        categories: state.categories
    };
}

export default connect(mapStateToProps)(ShopPage);

