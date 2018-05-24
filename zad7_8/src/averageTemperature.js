export default function averageTemperature(data) {
	let temperatureSum = 0;
	for (let temp of data.list)
		temperatureSum += temp.main.temp;
	return temperatureSum/40;
}
