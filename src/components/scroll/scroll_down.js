import React,{Component} from 'react';

class ScrollDown extends Component {
    render(){
        return (
                <section id="section04" className="demo">
                    <h1>{this.props.heading}</h1>
                    <div><span></span>Scroll</div>
                </section>
        );
    }
};

export default ScrollDown;