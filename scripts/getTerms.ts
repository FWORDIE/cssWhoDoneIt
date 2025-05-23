import * as cheerio from "npm:cheerio@^1.0.0";
import { logError } from "./basics.ts";

import { ignore } from "../getSpecInfo.ts";

export const getTerms = async($: cheerio.CheerioAPI, sheet: string) => {
	// Ignore if focus is called or is a known issue
	if (await ignore("terms", sheet)) {
		return undefined;
	}
	return undefined

	// try {
	// 	const props = [];
	// 	// Get Property index
	// 	// e.g. https://www.w3.org/TR/css-break-3/#index-defined-here
	// 	let propertyIndexList = $("#property-index")
	// 		.next()
	// 		.find('[data-link-type="property"]');

	// 	if (propertyIndexList) {
	// 		// Loops over all things in the indx and adds them to props array
	// 		for (const row of propertyIndexList) {
	// 			const prop = $(row).text().trim();
	// 			props.push(prop);
	// 		}
	// 		if(props.length > 0){
	// 			return props
	// 		}
	// 	}

	// 	// e.g. https://www.w3.org/TR/2013/WD-css3-cascade-20130103/
	// 	 propertyIndexList = $("#property-index")
	// 	.next()
	// 	.find('.property');

	// 	if (propertyIndexList) {
	// 		// Loops over all things in the indx and adds them to props array
	// 		for (const row of propertyIndexList) {
	// 			const prop = $(row).text().trim();
	// 			props.push(prop);
	// 		}
	// 		if(props.length > 0){
	// 			return props
	// 		}
	// 	}




	// 	logError("Terms", sheet);
	// 	return undefined;
	// } catch {
	// 	logError("Terms & ERROR", sheet);
	// 	return undefined;
	// }
};