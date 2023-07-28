import { useState } from "react";

const Tab = () => {

    const data = [
        { id: 1, title: "tab01", content: "아무말 01" },
        { id: 2, title: "tab02", content: "아무말 02" },
        { id: 3, title: "tab03", content: "아무말 03" }
    ];

    const [num, setNum] = useState(0);

    return (
        <div className="Tab">
            <ul className="tabMenu">
                {
                    data.map((it, idx) => <li onClick={() => setNum(idx)}>{it.title}</li>)
                }
            </ul>
            <div className="tabContent">
                {
                    data[num].content
                }
            </div>
        </div>
    )
}

export default Tab;