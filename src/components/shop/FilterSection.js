import React, { PropTypes } from 'react';
import SelectInput from '../common/SelectInput';


const propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    filter: PropTypes.object.isRequired,
    onApply: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

const FilterSection = ({ categories, filter, onApply, onChange }) => {

    const sortingOptions = [
        { text: 'Popular', value: 'Popular' },
        { text: 'Latest', value: 'Latest' },
        { text: 'Average Price', value: 'Average Price' },
        { text: 'High Price', value: 'HIGH_PRICE' },
        { text: 'Low Price', value: 'LOW_PRICE' }];

    const categoryOptions = categories.map(category => {
        return {
            text: category,
            value: category
        };
    });

    return (
        <section className="module-small">
            <div className="container">

                <form className="row">
                    <div className="col-sm-4 mb-sm-20">
                        <SelectInput defaultOption="Default Sorting" 
                                     options={sortingOptions} 
                                     value={filter.sorting} 
                                     onChange={onChange}
                                     name="sorting" />
                    </div>

                    <div className="col-sm-3 mb-sm-20">
                        <SelectInput defaultOption='All' 
                                     options={categoryOptions} 
                                     value={filter.category} 
                                     onChange={onChange}
                                     name="category" />
                    </div>

                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-block btn-round btn-g" onClick={onApply} >Apply</button>
                    </div>

                </form>
            </div>
        </section>);

};

FilterSection.propTypes = propTypes;

export default FilterSection;
