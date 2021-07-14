import React from 'react';
import { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import TreeBranch from '../TreeBranch/TreeBranch';

import styles from './Styles';

const TreeLeaf = ({id, nodeData, parentOpen}) => {

    const classes = styles();
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className={classes.root}>
            {nodeData.map((item, id) => {
            
                if (item.hasOwnProperty("children")) {

                    if (parentOpen) {

                        return (
                            <div key={'leafDiv-' + id}>
                                <TreeBranch key={'leaf-' + id} data={item} node={item} isRoot={false} id={item.id}/>
                            </div>
                        );
                    }

                } else {

                    if (parentOpen) {

                        return (
                            <div key={'leafDivChildless-' + id}>
                                <Button key={'leafBtnChildless-' + id}>{item.employees}</Button>
                            </div>
                        )
                    }
                }
            })}
        </div>
    );
}

export default TreeLeaf;