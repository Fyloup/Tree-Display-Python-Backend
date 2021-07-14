import React from 'react';
import { useState } from 'react';

import { Button, Icon, IconButton, Typography } from '@material-ui/core';
import { ArrowDownwardRounded } from '@material-ui/icons';

import TreeLeaf from '../TreeLeaf/TreeLeaf';

import styles from "./Styles";

const TreeBranch = ({data, node, setTree, isRoot, id, isLast}) => {

    const classes = styles();
    const [visi, setVisi] = useState(false);

    const showChild = () => {
        setVisi(!visi)
    }

    const moveNode = () => {
        let tmp = data;
        let length = tmp.length;
        let node;
        let node2;

        for (let i = 0; i < length; i++) {
            if (tmp[i].id === id) {
                node = tmp.slice(0, i).concat(tmp.slice(i + 1));
                node2 = tmp.slice(i, i + 1)
                node.splice(i + 1, 0, node2[0])
                console.log(node)
                setTree(node)
                break;
            }
        }
    }

    return (
        <div className={classes.root}>
            <div>
                {isRoot && !isLast ?
                <div>
                    <IconButton onClick={moveNode}>
                        <ArrowDownwardRounded/>
                    </IconButton>
                </div>
                :
                <div>
                    <IconButton disabled={true}/>
                </div>}
            </div>
            <Button onClick={showChild}>{node.id}</Button>
            <TreeLeaf id={data.id + '-'} nodeData={node.children} parentOpen={visi}/>
        </div>
    );
}

export default TreeBranch;