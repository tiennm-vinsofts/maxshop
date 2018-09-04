import React, { Component } from 'react';
import config from "../config";

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: []
        }
    }
    componentDidMount() {
        axios.get(config.urlapi+'slides')
            .then(response => {
                this.setState({ slides: response.data.data });
            })

    }
    render() {
        return (
         
      <div id="home-revslider" className="slider-section slider-section-1 container-fluid no-padding">
      
      <div className="rev_slider_wrapper">
        <div id="home-slider2" className="rev_slider" data-version={5.0}>
          <ul>
              {this.state.slides.map(slide => {
                  return (
                      <li key={slide.id} data-transition="zoomout" data-slotamount="default" data-easein="easeInOut"
                          data-easeout="easeInOut" data-masterspeed={2000} data-rotate={0} data-fstransition="fade"
                          data-fsmasterspeed={1500} data-fsslotamount={7}>
                          <img src={slide.img} alt="slider" data-bgposition="center center" data-bgfit="cover"
                               data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina/>
                          <div className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0" id="slide-layer-1"
                               data-x="['center','center','center','center']" data-hoffset="['120','30','-80','-70']"
                               data-y="['top','top','top','top']" data-voffset="['300','200','150','70']"
                               data-fontsize="['48','38','30','16']" data-lineheight="['30','30','30','30']"
                               data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;"
                               data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                               data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                               data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                               data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000}
                               data-splitin="chars" data-splitout="none" data-responsive_offset="on"
                               data-elementdelay="0.05" style={{
                              zIndex: 5,
                              whiteSpace: 'nowrap',
                              letterSpacing: '1.92px',
                              position: 'relative',
                              color: '#333',
                              fontWeight: 'normal',
                              fontFamily: '"Arizonia", cursive'
                          }}>{slide.title}
                          </div>
                          <div className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0" id="slide-layer-2"
                               data-x="['center','center','center','center']" data-hoffset="['250','130','-10','-30']"
                               data-y="['top','top','top','top']" data-voffset="['365','260','200','100']"
                               data-fontsize="['48','38','30','16']" data-lineheight="['30','30','30','30']"
                               data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;"
                               data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                               data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                               data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                               data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000}
                               data-splitin="chars" data-splitout="none" data-responsive_offset="on"
                               data-elementdelay="0.05" style={{
                              zIndex: 5,
                              whiteSpace: 'nowrap',
                              position: 'relative',
                              color: '#b6795f',
                              fontWeight: 'normal',
                              fontFamily: '"Montserrat", sans-serif',
                              textTransform: 'uppercase'
                          }}>{slide.title2}
                          </div>
                          <div className="tp-caption NotGeneric-Title tp-resizeme rs-parallaxlevel-0" id="slide-layer-3"
                               data-x="['center','center','center','center']" data-hoffset="['270','200','100','125']"
                               data-y="['top','top','top','top']" data-voffset="['425','315','245','135']"
                               data-fontsize="['18','18','18','16']" data-lineheight="['27','27','27','27']"
                               data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;"
                               data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                               data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                               data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                               data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={1000}
                               data-splitin="chars" data-splitout="none" data-responsive_offset="on"
                               data-elementdelay="0.05" style={{
                              zIndex: 5,
                              whiteSpace: 'nowrap',
                              letterSpacing: '0.72px',
                              position: 'relative',
                              color: '#333',
                              fontWeight: 'normal',
                              fontFamily: '"Lato", sans-serif'
                          }}><p>
                              {slide.des}
                          </p>
                          </div>
                          <div className="tp-caption NotGeneric-Button rev-btn  rs-parallaxlevel-0" id="slide-layer-4"
                               data-x="['middle','middle','center','center']" data-hoffset="['85','15','-90','-10']"
                               data-y="['top','top','top','top']" data-voffset="['515','410','335','220']"
                               data-fontsize="['14','14','13','12']" data-lineheight="['24','24','24','24']"
                               data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;"
                               data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:100;e:Power1.easeInOut;"
                               data-style_hover="c:rgb(255, 255, 255);bg:rgba(182, 121, 95);"
                               data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power4.easeInOut;"
                               data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                               data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                               data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start={2000}
                               data-splitin="none" data-splitout="none"
                               data-actions="[{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;scrollbelow&quot;,&quot;offset&quot;:&quot;0px&quot;}]"
                               data-responsive_offset="on" data-responsive="off" style={{
                              zIndex: 10,
                              padding: '8px 38px',
                              letterSpacing: '0.56px',
                              color: '#b6795f',
                              borderColor: '#b6795f',
                              fontFamily: '"Montserrat", sans-serif',
                              textTransform: 'uppercase',
                              backgroundColor: 'transparent',
                              whiteSpace: 'nowrap',
                              outline: 'none',
                              boxShadow: 'none',
                              boxSizing: 'border-box',
                              MozBoxSizing: 'border-box',
                              WebkitBoxSizing: 'border-box'
                          }}>Shop Now
                          </div>
                      </li>
                  )
              })
              }
          </ul>
        </div>
      </div>
      <div className="goto-next"><a href="#collection"><i className="icon icon-Mouse bounce" /></a></div>
    </div>
        );
    }
}

export default Slide;