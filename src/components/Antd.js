import React, {useState} from "react"
import {List, Button} from 'antd';
import cc from "classcat"

export default function ({title}) {
    const [selected, setSelected] = useState(false);
    const className = cc(['p-12 rounded transition cursor-pointer uppercase tracking-wide font-lg text-white text-bold',
        {
            'bg-blue': selected,
            'bg-green': !selected
        }]);
    return <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
    </div>
}






