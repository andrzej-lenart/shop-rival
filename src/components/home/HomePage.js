import React, { Component } from 'react';
import { Link } from 'react-router';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

class HomePage extends Component {

    render() {

        let shopItem = {
            name: "Shop Item",
            imageUrl: "/images/shop/product-7.jpg",
            price: 9
        };

        let options = [
            { value: 1, text: 'option 1' },
            { value: 2, text: 'option 2' },
            { value: 3, text: 'option 3' }
        ];

        return (
            <div>
                <div className="jumbotron">
                    <h1>Home Page</h1>
                    <p>React, Redux and React Router in ES6</p>
                    <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
                </div>
                <div className="container">
                    <div className="row">
                        <TextInput name="FirstName" label="First Name" placeholder="First Name" />
                    </div>
                    
                    <form className="row">
                        <div className="col-sm-4 mb-sm-20">
                            <SelectInput options={options} defaultOption="Default sorting" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default HomePage;