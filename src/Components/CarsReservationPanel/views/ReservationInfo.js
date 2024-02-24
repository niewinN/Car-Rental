import { ReservedLabel, RemoveButton, AddButton } from "../../../Assets/Styles/CarsReservationPanel/CarReservationCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ReservationInfo = ({ isReserved, handleReserve, car }) => {
    const {t} = useTranslation()

    return (
            <>
            {isReserved && <ReservedLabel>{t('reserved')}</ReservedLabel>}
            {isReserved ? (
                <RemoveButton onClick={() => handleReserve(car)} $reserved={true}>
                <FontAwesomeIcon icon={faMinus} />
                </RemoveButton>
            ) : (
                <AddButton onClick={() => handleReserve(car)} $reserved={false}>
                <FontAwesomeIcon icon={faPlus} />
                </AddButton>
            )}
            </>
    )
};

export default ReservationInfo;