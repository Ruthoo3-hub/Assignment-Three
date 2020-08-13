import React, { Component } from 'react'

import image from './../img/venom-1.jpg'
import image1 from './../img/hulk-1.jpg'
import image2 from './../img/venom-2.jpg'

export class Header extends Component {
    render() {
        return (
            <div>
                {/* Introductory Content */}
                <header className="header">
                    <div className="container">
                        <h1 className="title">Mavel's Fearless</h1>
                        <p className="subtitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                            molestias earum eveniet.
                        </p>
                        <div className="search-bar">
                            <input type="search" placeholder="marvel" />
                        </div>
                        {/* Sample Wallpaper */}
                        <div className="sample-wallpaper">
                            {/* Wallpaper #1 */}
                            <article className="wallpaper">
                                <img src= {image} alt="Wallpaper #1" className="wallpaper" />
                            </article>
                            {/* Wallpaper #2 */}
                            <article className="wallpaper">
                                <img src= {image1} alt="Wallpaper #1" className="wallpaper" />
                            </article>
                            {/* Wallpaper #3 */}
                            <article className="wallpaper">
                                <img src= {image2} alt="Wallpaper #1" className="wallpaper" />
                            </article>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header
