import React, { useState } from 'react';

import TreeBranch from './components/TreeBranch/TreeBranch';

import { Button, Icon, IconButton, Typography } from '@material-ui/core';
import { ArrowDownwardRounded } from '@material-ui/icons';

import './Tree.css';

const Tree = () => {

    const [tree, setTree] = useState([
        {
            id: "Paris",
            children: [
            {
                id: "Ikea",
                children: [
                    {
                        employees: 100
                    }
                ]
            },
            {
                id: "Castorama",
                children: [
                    {
                        employees: 200
                    }
                ]
            }
            ]
        },
        {
            id: "Londres",
            children: [
            {
                id: "Castorama",
                children: [
                    {
                        employees: 250
                    }
                ]
            },
            {
                id: "Ikea",
                children: [
                    {
                        employees: 10
                    }
                ]
            },
            {
                id: "Conforama",
                children: [
                    {
                        employees: 300
                    }
                ]
            }
            ]
        },
        {
            id: "Wahshington DC",
            children: [
            {
                id: "Castorama",
                children: [
                    {
                        employees: 20
                    }
                ]
            },
            {
                id: "Ikea",
                children: [
                    {
                        employees: 20
                    }
                ]
            },
            {
                id: "Conforama",
                children: [
                    {
                        employees: 360
                    }
                ]
            }
            ]
        }
    ]);

    return (
        <div className={'Node'}>
            {tree.map((item, i) => {
                console.log("iterator : " + i)

                if (i === tree.length - 1) {
                    return (
                        <TreeBranch key={item.id} data={tree} node={item} setTree={setTree} isRoot={true} id={item.id} isLast={true}/>
                    );
                } else {
                    return (
                        <TreeBranch key={item.id} data={tree} node={item} setTree={setTree} isRoot={true} id={item.id} isLast={false}/>
                    );
                }
            })}
        </div>
    );
}


export default Tree;