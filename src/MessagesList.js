import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

export function MessagesList({messages, deleteMessage, update}) {    

    const messagesListItems = messages.map((index) =>
        <li className="card message-container " key={index}>
            <div className="message-container-head">
                <div className="card-link message-user">
                    {index.name}
                </div>
                <DropDownMenu id={index._id} deleteMessage={deleteMessage} update={update}/>
            </div>
            <div className="message-content">
                {index.message}
            </div>
        </li>
    );

    return messagesListItems;
}

function DropDownMenu({id, deleteMessage, update}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => setIsActive(!isActive);

    return (
        <div className="card-menu">
            <button className="menu-btn dropdown-btn" onClick={handleClick}> <FaEllipsisV /> </button>
            {
                isActive
                ?   <ul className="card-menu-list">
                        <li className="card-link card-menu-item">
                            <button className="menu-btn menu-item-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log({ start: id });
                                    deleteMessage(id);
                                    setTimeout(() => update(), 100);
                                }}
                            >delete</button>
                        </li>
                    </ul>
                :   <></>
            }
        </div>
    )
} 
