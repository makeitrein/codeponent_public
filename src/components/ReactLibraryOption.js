import React, {useState} from "react"
import {List, Radio, Icon} from 'antd';
import cc from "classcat"


export default function ({title, description}) {
    const [selected, setSelected] = useState(false);
    const className = cc(['text-left rounded-lg overflow-hidden transition cursor-pointer text-bold shadow-lg hover:mt-4',
        {
            'bg-white': !selected,
            'bg-green': selected
        }]);
    return <List.Item onClick={() => setSelected(true)}>
        <div className={className}>
            <div class="p-4">
            <div className={"text-blue text-lg"}>{title} <Icon type="right-square" theme="twoTone" /></div>
            <div className={"mt-2"}>{description}</div>
            </div>
            <div className={"bg-blue-lighter text-blue py-2 text-center"}>View <b>33</b> Components</div>
        </div>

    </List.Item>
}






