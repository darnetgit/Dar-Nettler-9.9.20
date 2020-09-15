export class Currentconditions {
    date: string
    name: string
    key: string
    tempM: number
    tempI: number
    icon: string
    text: string
    link: string
    constructor(cityJson, city) {
        let today = new Date(cityJson.LocalObservationDateTime);
        this.date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.name = city.cityName;
        this.key = city.cityKey;
        this.tempM = cityJson.Temperature.Metric.Value
        this.tempI = cityJson.Temperature.Imperial.Value
        this.icon = cityJson.WeatherIcon < 10 ? "0" + cityJson.WeatherIcon + "-s.png" : cityJson.WeatherIcon + "-s.png";
        this.text = cityJson.WeatherText;
        this.link = cityJson.Link;
    }
}
