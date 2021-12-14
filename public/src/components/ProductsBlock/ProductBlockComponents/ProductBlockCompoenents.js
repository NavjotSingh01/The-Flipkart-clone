import React,{Component} from 'react';
import 'antd/dist/antd.css';

// components of  the carousal separated in this file------

// left arrow of carousal
class CarouselLeftArrow extends Component {
 render() {
   return (
     <a
       href="#"
       className="carousel__arrow carousel__arrow--left"
       onClick={this.props.onClick}
     >
       <span className="fa fa-2x fa-angle-left" />
     </a>
   );
 }
}

// right arrow of carousal
class CarouselRightArrow extends Component {
 render() {
   return (
     <a
       href="#"
       className="carousel__arrow carousel__arrow--right"
       onClick={this.props.onClick}
     >
       <span className="fa fa-2x fa-angle-right" />
     </a>
   );
 }
}


// hte slides (li) in carousal
class CarouselSlide extends Component {
 render() {
   return (
     <li
       className={
         this.props.index == this.props.activeIndex
           ? "carousel__slide carousel__slide--active"
           : "carousel__slide"
       }
       
     >
       <img  className="carousal__image"  src={this.props.slide.imgLarge} ></img>
     </li>
   );
 }
}



// Carousel wrapper component
class Carousel extends Component {
 constructor(props) {
   super(props);

   this.goToSlide = this.goToSlide.bind(this);
   this.goToPrevSlide = this.goToPrevSlide.bind(this);
   this.goToNextSlide = this.goToNextSlide.bind(this);

   this.state = {
     activeIndex: 0
   };
 }

 goToSlide(index) {
   this.setState({
     activeIndex: index
   });
 }

 goToPrevSlide(e) {
   e.preventDefault();

   let index = this.state.activeIndex;
   let { slides } = this.props;
   let slidesLength = slides.length;

   if (index < 1) {
     index = slidesLength;
   }

   --index;

   this.setState({
     activeIndex: index
   });
 }

 goToNextSlide(e) {
   e.preventDefault();

   let index = this.state.activeIndex;
   let { slides } = this.props;
   let slidesLength = slides.length - 1;

   if (index === slidesLength) {
     index = -1;
   }

   ++index;

   this.setState({
     activeIndex: index
   });
 }

 render() {
   return (
     <div className="carousel">
       <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

       <ul className="carousel__slides">
         {this.props.slides.map((slide, index) =>
           <CarouselSlide
             key={index}
             index={index}
             activeIndex={this.state.activeIndex}
             slide={slide}
           />
         )}
       </ul>
   
       <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
     </div>
   );
 }
}

export {Carousel};