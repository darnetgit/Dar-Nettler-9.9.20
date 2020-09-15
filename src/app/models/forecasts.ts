export class Forecasts {
    date: string
    day: string
    minTempI: number
    maxTempI: number
    minTempM: number
    maxTempM: number
    dayIcon: string
    dayText: string
    nightIcon: string
    nightText: string
    link: string
    constructor(dailyJSON) {
        let today = new Date(dailyJSON.Date);
        this.date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.day = today.toLocaleDateString('en-US', {weekday: 'long'})
        this.minTempI = dailyJSON.Temperature.Minimum.Value;
        this.maxTempI = dailyJSON.Temperature.Maximum.Value;
        this.minTempM = Math.round((this.minTempI - 32) / 1.8)
        this.maxTempM = Math.round((this.maxTempI - 32) / 1.8)
        this.dayIcon = dailyJSON.Day.Icon < 10 ? "0" + dailyJSON.Day.Icon + "-s.png" : dailyJSON.Day.Icon + "-s.png";
        this.nightIcon = dailyJSON.Night.Icon < 10 ? "0" + dailyJSON.Night.Icon + "-s.png" : dailyJSON.Night.Icon + "-s.png";
        this.dayText = dailyJSON.Day.IconPhrase;
        this.nightText = dailyJSON.Night.IconPhrase;
        this.link = dailyJSON.Link;
    }
}
