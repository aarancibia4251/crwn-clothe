import React from 'react';
import './collection-preview.component';
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';

interface CollectionProps {
    title: string,
    items: Array<any>
}

const CollectionPreview = ({ title, items}: CollectionProps) => {
    return (<div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item: any, idx: number) => idx < 4)
                    .map(({ id, ...otherProps }: any) => (<CollectionItem key={id} {...otherProps} />))
            }
        </div>
    </div>)
};
export  default CollectionPreview;
