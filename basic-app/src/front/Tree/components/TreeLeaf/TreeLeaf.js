import React from 'react';

import { Button } from '@material-ui/core';

import TreeBranch from '../TreeBranch/TreeBranch';

import styles from './Styles';

/* 
    Composant qui permet au parent de générer ses enfants
*/

const TreeLeaf = ({nodeData, parentOpen}) => {

    const classes = styles();

    return (
        <div className={classes.root}>
            {nodeData.map((item, iterator) => {
            
                let isLast = iterator === nodeData.length - 1 ? true : false;

                // Si l'enfant est aussi un parent
                if (item.hasOwnProperty("children")) {

                    if (parentOpen) {

                        return (
                            <div key={'leafDiv-' + item.id}>
                                <TreeBranch key={'leaf-' + item.id} data={item} node={item} isRoot={false} isLast={isLast} id={item.id}/>
                            </div>
                        );
                    }

                } else {

                    if (parentOpen) {

                        return (
                            <div className={classes.childContainer} key={'leafDivChildless-' + item.employees}>
                                <Button key={'leafBtnChildless-' + item.employees} disabled={true}>{item.employees + ' employés'}</Button>
                            </div>
                        )
                    }
                }

                return(null)
            })}
        </div>
    );
}

export default TreeLeaf;