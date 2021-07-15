import React, { useState, useEffect } from 'react';

import TreeBranch from './components/TreeBranch/TreeBranch';

import { IconButton, Divider, Paper } from '@material-ui/core';
import { ArrowDownwardRounded } from '@material-ui/icons';

import styles from './Styles';

/* 
    Composant qui permet de générer une branche entière
*/

const Tree = () => {
    
    const classes = styles();
    const [tree, setTree] = useState([]);

    useEffect(() => {
        fetch('/data').then(res => res.json()).then(data => {
            setTree(data.data)
        })
    }, [])

    const moveNode = (id) => {
        let tmp = tree;
        let length = tmp.length;
        let node;
        let extract;

        for (let i = 0; i < length; i++) {
            if (tmp[i].id === id) {
                node = tmp.slice(0, i).concat(tmp.slice(i + 1));    // Suppression du noeud à bouger puis stockage du reste
                extract = tmp.slice(i, i + 1)                       // Extraction et stockage du noeud à bouger depuis l'arbre d'origine
                node.splice(i + 1, 0, extract[0])                   // Insertion du noeud extrait dans le nouvel arbre
                setTree(node)
                break;
            }
        }
    }

    return (
        <div className={classes.root}>
            <Paper variant={'outlined'}>
                {tree && tree.map((item, iterator) => {

                    let isLast = iterator === tree.length -1 ? true : false;

                    return (
                        <div key={'mainContainer-' + item.id}>
                            <div key={'controlContainer-' + item.id} className={classes.contentContainer}>
                                <div key={'moveBtnContainer-' + item.id} className={classes.moveBtnContainer}>
                                    <IconButton key={'moveBtn-' + item.id} className={classes.moveBtn} onClick={!isLast ? () => moveNode(item.id) : null} disabled={isLast}>
                                        <ArrowDownwardRounded key={'moveBtnIcon-' + item.id}/>
                                    </IconButton>
                                    <Divider key={'moveBtnDivider-' + item.id} orientation={'vertical'}/>
                                </div>
                                <TreeBranch key={'branch-' + item.id} data={tree} node={item} setTree={setTree} isRoot={true} id={item.id} isLast={isLast}/>
                            </div>
                            <div>
                                {!isLast ? <Divider key={'branchDivider-' + item.id} className={classes.divider}/> : null}
                            </div>
                        </div>
                    )
                    })
                }
            </Paper>
        </div>
    );
}


export default Tree;