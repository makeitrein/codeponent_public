import React, {useState} from "react"

import {Card, List} from 'antd';


export default function({title}){
    const [selected, setSelected] = useState(false);

    return <div onClick={() => setSelected(true)}>
        <List.Item>
            <Card title={title}>Card content</Card>
        </List.Item>
    </div>
}






