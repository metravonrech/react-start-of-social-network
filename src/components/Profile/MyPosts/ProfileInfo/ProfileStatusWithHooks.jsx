import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        console.log("useEffect")
       setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick = {activateEditMode}>{props.status || "you have no status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status || ""} autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode}/>
            </div>
            }

        </div>
    )
}

export default ProfileStatusWithHooks;
