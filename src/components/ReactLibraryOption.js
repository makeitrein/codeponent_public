import React, {useState} from "react"
import {Icon, List} from 'antd';
import cc from "classcat"


export default function ({title, description, image}) {
    const [selected, setSelected] = useState(false);
    const className = cc(['text-left border rounded-lg relative overflow-hidden px-3 py-4 transition-fast cursor-pointer text-bold shadow-md mb-12 hover:-translate-y-1 hover:shadow-lg',
        {
            'bg-white': !selected,
            'bg-green-lightest border-green-light -translate-y-1 shadow-lg': selected,
        }]);

    const iconClassName = cc(["text-2xl transition-fast absolute pin-r pin-t m-3", {
        'opacity-100': selected,
        'opacity-0': !selected
    }])
    return <List.Item onClick={() => setSelected(!selected)}>
        <div className={className}>
            <div className="flex items-top">
                <div className={'w-12 h-12'}>
                    <img src={image} className={""}/>
                </div>

                <div className="pl-4 flex-1">
                    <div className={" uppercase tracking-wide font-bold"}>{title}</div>
                    <div className={"mt-2"}>{description}</div>
                    <div className="mt-4 flex justify-between text-grey-darker">
                        <span className={"inline-flex items-center"}>
                            <Icon className={"text-lg pr-1"}
                                  type="star"
                                  theme="twoTone"
                                  twoToneColor=""/>
                            <span className="font-bold">5k</span>&nbsp;Stars
                        </span>
                        <span className={"inline-flex pr-3 items-center"}><Icon className={"text-lg pr-1"}
                                   type="code"
                                   theme="twoTone"
                                   twoToneColor=""/>
                            <span className="font-bold">33</span>&nbsp;Components</span>
                    </div>
                </div>

                <Icon className={iconClassName} type="check-circle" theme="twoTone" twoToneColor="#52c41a"/>
            </div>
            {/*<div*/}
                {/*className={" py-3 text-center"}>View <b>33</b> Components <Icon*/}
                {/*type="right-square" theme="twoTone"/></div>*/}
        </div>

    </List.Item>
}






