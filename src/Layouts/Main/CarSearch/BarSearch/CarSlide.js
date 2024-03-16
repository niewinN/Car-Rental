// import photo from "../../../../Assets/Images/auto.png"

export function CarSlide({ text, photo }) {
	return (
		<div>
			<p>{text}</p>
			<img src={photo} alt={text} style={{ width: "50%", height: "auto" }} />
		</div>
	)
}
