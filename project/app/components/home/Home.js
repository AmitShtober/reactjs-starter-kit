var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var homeService = require('./HomeService')
require("style-loader!../../style/style.css")

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                Hello World
                <br/>
                {homeService.dummyFunction()}
                <br/>
                <Link to="/about-us">GoTo AboutUs</Link>
            </div>
        )
    }
}

module.exports = Home;