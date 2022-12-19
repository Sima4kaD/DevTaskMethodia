import React, { Component } from 'react';
import logo1 from '../logo.svg';


class Layout extends Component {
    state = {
        itemL: []
    }

    componentDidMount() {
        fetch('https://63a09d1624d74f9fe83d4eb7.mockapi.io/api/data/item-news')
        .then((response) => response.json())
        .then(newsList => {
            this.setState({ itemL: newsList });
        });
    }

    render() {
        return (

            
            <div className='layout__inner container'>
            <div className='layout__content'>
            {this.state.itemL.map((item) => (
                <div className='news-item'>
                <div className='news__head image'>
                    <img src={item.image}/>
                </div>
                <div className='news__text'>
                    <p className='title'>{item.title}</p>
                    <p className='description'>{item.descripton}</p>
                    <div className='news_category'>
                        <p>{item.category}</p>
                    </div>
                </div>
            </div>
            ))}
                
                {/* <div className='news-item'>
                    <div className='news__head image'>
                        <img src={logo1}/>
                    </div>
                    <div className='news__text'>
                        <p className='title'>Lorem Ipsum is simply dummy text of the printing and typ</p>
                        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <div className='news_category'>
                            <p>science & environment</p>
                        </div>
                    </div>
                    
                </div>
                <div className='news-item'>
                    <div className='news__head image'>
                        <img src={logo1}/>
                    </div>
                    <div className='news__text'>
                        <p className='title'>Lorem Ipsum is simply dummy text of the printing and typ</p>
                        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <div className='news_category'>
                            <p>entertainment & arts</p>
                        </div>
                    </div>
                    
                </div> */}
            </div>
        </div>
        )
    }
}

export default Layout;