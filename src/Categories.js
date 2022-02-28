import React from 'react';
import { CategoryItem } from './CategoryItem';


function Categories(props) {

    return (
            <div className='categories'>
                {props.categories.map((item) => (
                    <CategoryItem key={item.id} id={item.id} {...item}
                      showList={props.showList}/>
                ))}
            </div>
    );
}

export {Categories};

