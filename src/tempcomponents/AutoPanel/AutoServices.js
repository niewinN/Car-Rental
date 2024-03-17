import React from "react"
import {
	AutoServiceWrapper,
	ServiceImg,
	ServiceDescription,
} from "../../assets/Styles/AutoPanel/AutoServices.styles"

function AutoServices(props) {
	return (
		<AutoServiceWrapper>
			<ServiceImg>
				<img src={props.servicesList.image} alt='' />
			</ServiceImg>
			<ServiceDescription>
				<p>{props.servicesList.description}</p>
			</ServiceDescription>
		</AutoServiceWrapper>
	)
}

export default AutoServices
