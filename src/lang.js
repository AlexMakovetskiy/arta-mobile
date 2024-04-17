import enContent from "./i18n/en.json";
import deContent from "./i18n/de.json";
import esContent from "./i18n/es.json";
import frContent from "./i18n/fr.json";
import jaContent from "./i18n/ja.json";
import ptContent from "./i18n/pt.json";

const acceptedLanguages = {
	de: "de",
	en: "en",
	es: "es",
	fr: "fr",
	ja: "ja",
	pt: "pt",
};

let resultLang = "";

const url = new URL(window.location.href);
const queryLangValue = url.searchParams.get("lang");
const currentLangDomain = navigator.language.slice(0, 2);

resultLang = !Object.keys(acceptedLanguages).includes(currentLangDomain) ? acceptedLanguages.en : currentLangDomain;
resultLang = !Object.keys(acceptedLanguages).includes(queryLangValue ?? "")
	? acceptedLanguages.en
	: queryLangValue ?? acceptedLanguages.en;

const appHeaderTitle = document.querySelector("#appHeaderTitle");
const creationCardTitle = document.querySelector("#creationCardTitle");
const styleCardTitle = document.querySelector("#styleCardTitle");
const avatarCardTitle = document.querySelector("#avatarCardTitle");
const yearlyAccessTitle = document.querySelector("#yearlyAccessTitle");
const weeklyAccessTitle = document.querySelector("#weeklyAccessTitle");
const bestOfferTitle = document.querySelector("#bestOfferTitle");
const actionElementTitle = document.querySelector("#actionElementTitle");
const termUseTitle = document.querySelector("#termUseTitle");
const privacyPolicyTitle = document.querySelector("#privacyPolicyTitle");
const restoreTitle = document.querySelector("#restoreTitle");
const yearPriceTitle = document.querySelector("#yearPriceTitle");
const yearlyAccessWeekPriceTitle = document.querySelector("#yearlyAccessWeekPriceTitle");
const directWeekPriceTitle = document.querySelector("#directWeekPriceTitle");

if (resultLang === acceptedLanguages.de) {
	appHeaderTitle.innerHTML = deContent["Get Unlimited <br>Access"];
	creationCardTitle.innerHTML = deContent["Unlimited Art <br>Creation"];
	styleCardTitle.innerHTML = deContent["Exclusive <br>Styles"];
	avatarCardTitle.innerHTML = deContent["Magic Avatars <br>With 20% Off"];
	yearlyAccessTitle.innerHTML = deContent["YEARLY ACCESS"];
	weeklyAccessTitle.innerHTML = deContent["WEEKLY ACCESS"];
	bestOfferTitle.innerHTML = deContent["BEST OFFER"];
	actionElementTitle.innerHTML = deContent["Continue"];
	termUseTitle.innerHTML = deContent["Terms of Use"];
	privacyPolicyTitle.innerHTML = deContent["Privacy Policy"];
	restoreTitle.innerHTML = deContent["Restore"];
	yearPriceTitle.innerHTML = deContent["Just {{price}} per year"].replace("{{price}}", "$39.99");
	yearlyAccessWeekPriceTitle.innerHTML = deContent["{{price}} <br>per week"].replace("{{price}}", "$0.48");
	directWeekPriceTitle.innerHTML = deContent["{{price}} <br>per week"].replace("{{price}}", "$6.99");
}

if (resultLang === acceptedLanguages.en) {
	appHeaderTitle.innerHTML = enContent["Get Unlimited <br>Access"];
	creationCardTitle.innerHTML = enContent["Unlimited Art <br>Creation"];
	styleCardTitle.innerHTML = enContent["Exclusive <br>Styles"];
	avatarCardTitle.innerHTML = enContent["Magic Avatars <br>With 20% Off"];
	yearlyAccessTitle.innerHTML = enContent["YEARLY ACCESS"];
	weeklyAccessTitle.innerHTML = enContent["WEEKLY ACCESS"];
	bestOfferTitle.innerHTML = enContent["BEST OFFER"];
	actionElementTitle.innerHTML = enContent["Continue"];
	termUseTitle.innerHTML = enContent["Terms of Use"];
	privacyPolicyTitle.innerHTML = enContent["Privacy Policy"];
	restoreTitle.innerHTML = enContent["Restore"];
	yearPriceTitle.innerHTML = enContent["Just {{price}} per year"].replace("{{price}}", "$39.99");
	yearlyAccessWeekPriceTitle.innerHTML = enContent["{{price}} <br>per week"].replace("{{price}}", "$0.48");
	directWeekPriceTitle.innerHTML = enContent["{{price}} <br>per week"].replace("{{price}}", "$6.99");
}

if (resultLang === acceptedLanguages.es) {
	appHeaderTitle.innerHTML = esContent["Get Unlimited <br>Access"];
	creationCardTitle.innerHTML = esContent["Unlimited Art <br>Creation"];
	styleCardTitle.innerHTML = esContent["Exclusive <br>Styles"];
	avatarCardTitle.innerHTML = esContent["Magic Avatars <br>With 20% Off"];
	yearlyAccessTitle.innerHTML = esContent["YEARLY ACCESS"];
	weeklyAccessTitle.innerHTML = esContent["WEEKLY ACCESS"];
	bestOfferTitle.innerHTML = esContent["BEST OFFER"];
	actionElementTitle.innerHTML = esContent["Continue"];
	termUseTitle.innerHTML = esContent["Terms of Use"];
	privacyPolicyTitle.innerHTML = esContent["Privacy Policy"];
	restoreTitle.innerHTML = esContent["Restore"];
	yearPriceTitle.innerHTML = esContent["Just {{price}} per year"].replace("{{price}}", "$39.99");
	yearlyAccessWeekPriceTitle.innerHTML = esContent["{{price}} <br>per week"].replace("{{price}}", "$0.48");
	directWeekPriceTitle.innerHTML = esContent["{{price}} <br>per week"].replace("{{price}}", "$6.99");
}

if (resultLang === acceptedLanguages.fr) {
	appHeaderTitle.innerHTML = frContent["Get Unlimited <br>Access"];
	creationCardTitle.innerHTML = frContent["Unlimited Art <br>Creation"];
	styleCardTitle.innerHTML = frContent["Exclusive <br>Styles"];
	avatarCardTitle.innerHTML = frContent["Magic Avatars <br>With 20% Off"];
	yearlyAccessTitle.innerHTML = frContent["YEARLY ACCESS"];
	weeklyAccessTitle.innerHTML = frContent["WEEKLY ACCESS"];
	bestOfferTitle.innerHTML = frContent["BEST OFFER"];
	actionElementTitle.innerHTML = frContent["Continue"];
	termUseTitle.innerHTML = frContent["Terms of Use"];
	privacyPolicyTitle.innerHTML = frContent["Privacy Policy"];
	restoreTitle.innerHTML = frContent["Restore"];
	yearPriceTitle.innerHTML = frContent["Just {{price}} per year"].replace("{{price}}", "$39.99");
	yearlyAccessWeekPriceTitle.innerHTML = frContent["{{price}} <br>per week"].replace("{{price}}", "$0.48");
	directWeekPriceTitle.innerHTML = frContent["{{price}} <br>per week"].replace("{{price}}", "$6.99");
}

if (resultLang === acceptedLanguages.ja) {
	appHeaderTitle.innerHTML = jaContent["Get Unlimited <br>Access"];
	creationCardTitle.innerHTML = jaContent["Unlimited Art <br>Creation"];
	styleCardTitle.innerHTML = jaContent["Exclusive <br>Styles"];
	avatarCardTitle.innerHTML = jaContent["Magic Avatars <br>With 20% Off"];
	yearlyAccessTitle.innerHTML = jaContent["YEARLY ACCESS"];
	weeklyAccessTitle.innerHTML = jaContent["WEEKLY ACCESS"];
	bestOfferTitle.innerHTML = jaContent["BEST OFFER"];
	actionElementTitle.innerHTML = jaContent["Continue"];
	termUseTitle.innerHTML = jaContent["Terms of Use"];
	privacyPolicyTitle.innerHTML = jaContent["Privacy Policy"];
	restoreTitle.innerHTML = jaContent["Restore"];
	yearPriceTitle.innerHTML = jaContent["Just {{price}} per year"].replace("{{price}}", "$39.99");
	yearlyAccessWeekPriceTitle.innerHTML = jaContent["{{price}} <br>per week"].replace("{{price}}", "$0.48");
	directWeekPriceTitle.innerHTML = jaContent["{{price}} <br>per week"].replace("{{price}}", "$6.99");
}

if (resultLang === acceptedLanguages.pt) {
	appHeaderTitle.innerHTML = ptContent["Get Unlimited <br>Access"];
	creationCardTitle.innerHTML = ptContent["Unlimited Art <br>Creation"];
	styleCardTitle.innerHTML = ptContent["Exclusive <br>Styles"];
	avatarCardTitle.innerHTML = ptContent["Magic Avatars <br>With 20% Off"];
	yearlyAccessTitle.innerHTML = ptContent["YEARLY ACCESS"];
	weeklyAccessTitle.innerHTML = ptContent["WEEKLY ACCESS"];
	bestOfferTitle.innerHTML = ptContent["BEST OFFER"];
	actionElementTitle.innerHTML = ptContent["Continue"];
	termUseTitle.innerHTML = ptContent["Terms of Use"];
	privacyPolicyTitle.innerHTML = ptContent["Privacy Policy"];
	restoreTitle.innerHTML = ptContent["Restore"];
	yearPriceTitle.innerHTML = ptContent["Just {{price}} per year"].replace("{{price}}", "$39.99");
	yearlyAccessWeekPriceTitle.innerHTML = jaContent["{{price}} <br>per week"].replace("{{price}}", "$0.48");
	directWeekPriceTitle.innerHTML = ptContent["{{price}} <br>per week"].replace("{{price}}", "$6.99");
}
