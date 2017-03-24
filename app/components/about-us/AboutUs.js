var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class AboutUs extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                About us
            </div>
        )
    }
}

module.exports = AboutUs;