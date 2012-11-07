function getDifference(baseColor, color) {
	baseColor = hexToHsl(baseColor)
	color = hexToHsl(color)

	return [
		baseColor[0] - color[0],
		baseColor[1] - color[1],
		baseColor[2] - color[2],
	]
}

function getNewColor(baseColor, difference) {
	baseColor = hexToHsl(baseColor)
	
	color2 = [
		baseColor[0] + difference[0] < 0 ? 0 : baseColor[0] + difference[0],
		baseColor[1] + difference[1] < 0 ? 0 : baseColor[1] + difference[1],
		baseColor[2] + difference[2] < 0 ? 0 : baseColor[2] + difference[2]
	]
	color2 = [
		color2[0] > 1 ? 1 : color2[0],
		color2[1] > 1 ? 1 : color2[1],
		color2[2] > 1 ? 1 : color2[2]
	]
	return hslToHex(color2[0], color2[1], color2[2])
}