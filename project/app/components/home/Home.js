var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var homeService = require('./HomeService')

var $ = require('jquery');
require("style-loader!../../style/style.css")

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                Hello World
                <br />
                {homeService.dummyFunction()}
                <br />
                <Link to="/about-us">GoTo AboutUs</Link>
            </div>
        )
    }

    componentDidMount() {
        // this is really dummy way of use jquery. just an example
        setTimeout(function () {
            $('.container').css('background-color', 'red');
        }.bind(this), 3000);
    }
}

module.exports = Home;