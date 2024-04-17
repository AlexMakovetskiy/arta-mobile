type TResultAccess = string | null;

const googleLink = "https://google.com";
const appleLink = "https://apple.com";

let resultAccess: TResultAccess = null;

function handleAccess(accessType: number) {
	const yearlyAccessWrapElement = document.querySelector<HTMLDivElement>("#yearlyAccessElement");
	const weeklyAccessWrapElement = document.querySelector<HTMLDivElement>("#weeklyAccessElement");

	if (accessType === 1) {
		if (yearlyAccessWrapElement && weeklyAccessWrapElement) {
			yearlyAccessWrapElement.setAttribute("style", "background: #504F51; border: 1px solid #fff");
			weeklyAccessWrapElement.setAttribute("style", "");
		}
	} else {
		if (yearlyAccessWrapElement && weeklyAccessWrapElement) {
			yearlyAccessWrapElement.setAttribute("style", "");
			weeklyAccessWrapElement.setAttribute("style", "background: #504F51; border: 1px solid #fff");
		}
	}
	return (resultAccess = accessType === 1 ? appleLink : googleLink);
}

function linkToCorrectHost() {
	return window.open((resultAccess as string) ?? appleLink);
}
