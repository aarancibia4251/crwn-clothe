import React from 'react';
import SHOP_DATA from './shop.data'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface ShopPageProps {
    collections: any[]
}

interface ShopPagestate {
    collections: any[]
}

class ShopPage extends React.Component<ShopPageProps, ShopPagestate> {
    constructor(props: any){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps} />))
                }
            </div>
        );
    }
}
export default ShopPage;
