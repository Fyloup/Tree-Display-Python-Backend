import React from 'react';
import { useState } from 'react';

import { Button, Divider } from '@material-ui/core';

import TreeLeaf from '../TreeLeaf/TreeLeaf';

import styles from "./Styles";

/* 
    Composant qui permet de générer un parent
*/

const TreeBranch = ({node, isRoot, isLast}) => {

    const classes = styles();
    const [visibility, setVisibility] = useState(false);

    const showChild = () => {
        setVisibility(!visibility)
    }

    return (
        <div className={classes.root}>
            <div>
                <Button className={classes.parentBtn} onClick={showChild}>{node.id}</Button>
                {!isRoot && !isLast? <Divider className={classes.divider}/> : null}
            </div>
            <TreeLeaf nodeData={node.children} parentOpen={visibility}/>
        </div>
    );
}

export default TreeBranch;