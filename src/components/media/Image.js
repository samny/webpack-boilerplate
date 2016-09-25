import React, {Component, PropTypes} from 'react';
import imageLoader from './imageLoader';
import classNames from 'classnames';
import './Image.less';

export class Image extends Component {
    static propTypes = {
        alt: PropTypes.string,
        src: PropTypes.string,
        className: PropTypes.string,
        background: PropTypes.bool,
        children: PropTypes.node
    };

    constructor(props) {
        super(props);
        this.state = {
            imageSrc: null
        };
    }

    componentDidMount() {
        imageLoader.get(this.props.src).then((img) => {
            console.log(img, img.width, img.height);
            this.setState({img: img});
        });
    }

    render() {
        var img = this.state.img;
        if (img && ! this.props.background) {
            return (<figure className={classNames('Image', this.props.className)}><img src={img.src}/></figure>);
        } else if (img && this.props.background) {
            var imgStyle = {
                backgroundImage: `url(${img.src})`,
                paddingBottom: `${ img.height / img.width * 100 }%`
            };
            return (<figure className={classNames('Image', this.props.className)} style={imgStyle}/>);
        } else {
            return null;
        }
    }
}

export default Image;