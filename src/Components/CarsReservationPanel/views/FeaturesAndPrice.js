import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SecondContainer, Icon, Feature, FeaturesDiv, PriceDiv, ReserveButton } from "../../../Assets/Styles/CarsReservationPanel/CarReservationCard.styles";

const FeaturesAndPrice = ({handleReserve, isCarReserved, car}) => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    return (
        <SecondContainer>
                <FeaturesDiv>
                {car.features.map((feature, featureIndex) => (
                    <Feature key={featureIndex}>
                    <Icon src={feature.icon} alt={feature.name} />
                    {t(`carFeatures.${feature.name}`)}
                    </Feature>
                ))}
                </FeaturesDiv>
                <PriceDiv>{car.price} zł
                <ReserveButton onClick={() => { 
                    if (handleReserve(car)) {
                    navigate('/summary');
                }
                }} $reserved={isCarReserved(car.id)}>{t('reserve')}</ReserveButton>
                </PriceDiv>
            </SecondContainer>
          )
}

export default FeaturesAndPrice;