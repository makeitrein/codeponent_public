import React, {useState} from "react"
import {List, Radio} from 'antd';
import cc from "classcat"
import Antd from "./Antd"

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default function ({title}) {
    const [selected, setSelected] = useState(false);
    const className = cc(['p-4 rounded transition cursor-pointer uppercase tracking-wide font-lg text-white text-bold',
        {
            'bg-blue': !selected,
            'bg-green': selected
        }]);
    return <List.Item onClick={() => setSelected(true)}>
        <div className={className}>
            {title}
        </div>
        <Antd/>

    </List.Item>
}






