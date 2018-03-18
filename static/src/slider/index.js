import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick';    
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; 

//CSS File 
import '../../public/css/style2.css'

//Link to the react-slider- https://github.com/akiran/react-slick

class SliderExample extends React.Component {
	render() {
		// These are the settings for the slider. 
		let settings = { 
            arrows: false,
            dots: true,
            infinite: true,
            speed: 2000,
         	autoplay:true,
         	autoplaySpeed:6000,
			className:"slider_image",
			swipeToShow:1,
			
				}
		return (
					<div>
		    
                        <Slider {...settings} className="container">
                
               
                            <div  className="item_slider" style={{background:'url(https://s17.postimg.org/5ys0cix73/70040234-geek-wallpapers.jpg)'}}>
                                    
                                <div className="pic1">WELCOME TO BOOT UP THE GEEK</div>
							</div>			
                                  
                            <div  className="item_slider" style={{background:'url(https://i.imgur.com/5SsLu7Y.jpg)'}}>
                                <div className="pic2"> A PLACE WHERE OPEN SOURCE PENGUINS RESIDE </div>
                                  
                            </div>
                                
                            <div  className="item_slider" style={{background:'url(https://s17.postimg.org/61l2r1xof/ddd.jpg)'}}>
                                <div className="pic3"> A PLACE TO SHARE YOUR CONTENT WITH THE COMMUNITY</div>   
                            </div>
                               
                        </Slider>
                  
		  			</div>
			)
	}
}

class App extends React.Component {
	render(){
		return (
			<div id='app'>
        
				<SliderExample />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react-root'))
