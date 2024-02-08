import XMLParser from 'react-xml-parser';

function Uploader({loadNewCards}) {
	
	const onFileUpload = function() {
		const inputElement = document.getElementById("input2");
		const file = inputElement.files[0];
		const reader = new FileReader();
		reader.onload = handleFileLoad;
		reader.readAsText(file, "ISO-8859-1");
	}
	
	const handleFileLoad = function(event) {
		const content = event.target.result;
		const parsedXmlToJson = new XMLParser().parseFromString(content);
		const parsedCards = parsedXmlToJson.children[1].children;
		const cards = parsedCards.map(card => {
			const first = card.children[0];
			const second = card.children[1];
			
			let front = first.value;
			let back = second.value;
			
			// sometimes in XML the back of the card comes before the
			// card, so we have to swap their place
			if (first.attributes.name !== "Front") {
				front = second.value;
				back = first.value;
			}
			
			return { "front": front, "back":  back }
		});
		loadNewCards(cards);
	}
	
    return (
		<input type="file" id="input2" onChange={onFileUpload} multiple />
	);
}

export default Uploader;
