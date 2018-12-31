import React, {useState} from "react"
import {List, Radio, Icon} from 'antd';
import cc from "classcat"


export default function ({title, description, image}) {
    const [selected, setSelected] = useState(false);
    const className = cc(['text-left rounded-lg relative overflow-hidden transition cursor-pointer text-bold shadow-lg',
        {
            'bg-white': !selected,
            'bg-green': selected
        }]);
    return <List.Item onClick={() => setSelected(true)}>
        <div className={className}>
            <div className={'w-12 absolute bg-white p-3 rounded-full border border-blue pin-b mb-5 ml-1 h-12'}>
            <img src={image} className={""}/>
        </div>

            <div className="pt-4 pr-4 pl-6 pb-6">
            <div className={"text-blue text-lg"}>{title} <Icon type="right-square" theme="twoTone" /></div>
            <div className={"mt-2"}>{description}</div>
            </div>
            <div className={"border-t border-blue text-blue bg-blue-lightest py-3 text-center"}>View <b>33</b> Components</div>
        </div>

    </List.Item>
}






