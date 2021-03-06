import React, { Component } from 'react';
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

interface Sections {
    id: number,
    title: string,
    imageUrl: string,
    linkUrl: string,
    size?: string
}

interface StateInterface {
    sections: Array<Sections>
}

class Directory  extends Component<{}, StateInterface> {

    constructor(props: any){
        super(props);
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(
                        ({ title, imageUrl, id, size}: any) => (
                            <MenuItem key={id} title={title} size={size} imageUrl={imageUrl}></MenuItem>
                        )
                    )
                }
            </div>
        );
    }
}
export default Directory;
