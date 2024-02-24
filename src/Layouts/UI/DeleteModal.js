import React from 'react';
import { PopupDeleteWrapper, PopupOverlay,CloseDelButton, CancelButton, ConfirmButton } from '../../Assets/Styles/AdministrationPanel/Popups/Popups.styles';
import axios from 'axios';

const DeleteModal = (props) => {

    const deleteObject=(endpoint,id)=>{
        try {
            axios.delete(`http://localhost:3001/${endpoint}/${id}`)
        } catch (error) {
            console.error('Błąd. Nie udało się usunąć elementu.')
        }
    }
    const closePopup=()=>{
        props.setTrashClicked(false)
        // window.location.reload();
    }
    return (
    <PopupOverlay>
        <PopupDeleteWrapper>
            <CloseDelButton><button onClick={()=>closePopup()}>X</button></CloseDelButton>
            <div>
                <p><strong>Czy chcesz usunąć wybrany element?</strong></p>
                <p>{props.delObjectInfo.objectName}</p>
            </div>
            <div>
                <CancelButton onClick={()=>closePopup()}>Cancel</CancelButton>
                <ConfirmButton onClick={()=>{deleteObject(props.delObjectInfo.endpoint,props.delObjectInfo.objectID);closePopup()}}>Ok</ConfirmButton>
            </div>
        </PopupDeleteWrapper>
    </PopupOverlay>
  );
};

export default DeleteModal;