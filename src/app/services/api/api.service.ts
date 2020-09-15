import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = "?apikey=cAlRYPG7ZKA5yX9eLLjg2eXghXWyMXK9";
  private autocomplete = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";
  private today = "https://dataservice.accuweather.com/currentconditions/v1/";
  private nextFiveDays = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  private location = "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search";
  constructor(private httpClient: HttpClient) { }

  geturl(url){
    return this.httpClient.get(url);
  }
  getAutocompleteRes(searchInput){
    return this.geturl(this.autocomplete+this.key+ "&q=" + searchInput)
  }
  getTodaysInfo(cityKey){
    return this.geturl(this.today + cityKey + this.key)
  }
  getNext5DaysInfo(cityKey){
    return this.geturl(this.nextFiveDays + cityKey + this.key)
  }
  getCurrentLocation(coords){
    return this.geturl(this.location + this.key + "&q=" + coords)
  }
  getAutocompleteResTEST(searchInput){
    return[
      {
        "Version": 1,
        "Key": "2333525",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "New Territories",
        "Country": {
          "ID": "HK",
          "LocalizedName": "Hong Kong"
        },
        "AdministrativeArea": {
          "ID": "TW",
          "LocalizedName": "Tsuen Wan"
        }
      },
      {
        "Version": 1,
        "Key": "349727",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "New York",
        "Country": {
          "ID": "US",
          "LocalizedName": "United States"
        },
        "AdministrativeArea": {
          "ID": "NY",
          "LocalizedName": "New York"
        }
      },
      {
        "Version": 1,
        "Key": "2515397",
        "Type": "City",
        "Rank": 21,
        "LocalizedName": "New Taipei City",
        "Country": {
          "ID": "TW",
          "LocalizedName": "Taiwan"
        },
        "AdministrativeArea": {
          "ID": "NWT",
          "LocalizedName": "New Taipei City"
        }
      },
      {
        "Version": 1,
        "Key": "187745",
        "Type": "City",
        "Rank": 30,
        "LocalizedName": "New Delhi",
        "Country": {
          "ID": "IN",
          "LocalizedName": "India"
        },
        "AdministrativeArea": {
          "ID": "DL",
          "LocalizedName": "Delhi"
        }
      },
      {
        "Version": 1,
        "Key": "298885",
        "Type": "City",
        "Rank": 32,
        "LocalizedName": "Newcastle",
        "Country": {
          "ID": "ZA",
          "LocalizedName": "South Africa"
        },
        "AdministrativeArea": {
          "ID": "NL",
          "LocalizedName": "Kwazulu-Natal"
        }
      },
      {
        "Version": 1,
        "Key": "12777",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Newcastle",
        "Country": {
          "ID": "AU",
          "LocalizedName": "Australia"
        },
        "AdministrativeArea": {
          "ID": "NSW",
          "LocalizedName": "New South Wales"
        }
      },
      {
        "Version": 1,
        "Key": "348585",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "New Orleans",
        "Country": {
          "ID": "US",
          "LocalizedName": "United States"
        },
        "AdministrativeArea": {
          "ID": "LA",
          "LocalizedName": "Louisiana"
        }
      },
      {
        "Version": 1,
        "Key": "349530",
        "Type": "City",
        "Rank": 35,
        "LocalizedName": "Newark",
        "Country": {
          "ID": "US",
          "LocalizedName": "United States"
        },
        "AdministrativeArea": {
          "ID": "NJ",
          "LocalizedName": "New Jersey"
        }
      },
      {
        "Version": 1,
        "Key": "329683",
        "Type": "City",
        "Rank": 41,
        "LocalizedName": "Newcastle upon Tyne",
        "Country": {
          "ID": "GB",
          "LocalizedName": "United Kingdom"
        },
        "AdministrativeArea": {
          "ID": "NET",
          "LocalizedName": "Newcastle upon Tyne"
        }
      },
      {
        "Version": 1,
        "Key": "2530492",
        "Type": "City",
        "Rank": 41,
        "LocalizedName": "Newport",
        "Country": {
          "ID": "GB",
          "LocalizedName": "United Kingdom"
        },
        "AdministrativeArea": {
          "ID": "NWP",
          "LocalizedName": "Newport"
        }
      }
    ]
  }
  getTodaysInfoTEST(cityName){
    return [
      {
        "LocalObservationDateTime": "2020-01-10T02:52:00-05:00",
        "EpochTime": 1578642720,
        "WeatherText": "Cloudy",
        "WeatherIcon": 7,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
          "Metric": {
            "Value": 1.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 34,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/current-weather/349727?lang=en-us",
        "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/current-weather/349727?lang=en-us"
      }
    ]
  }
  getNext5DaysInfoTEST(cityName){
    return {
      "Headline": {
        "EffectiveDate": "2020-01-11T07:00:00-05:00",
        "EffectiveEpochDate": 1578744000,
        "Severity": 4,
        "Text": "Record-breaking high temperatures tomorrow",
        "Category": "record heat",
        "EndDate": "2020-01-11T19:00:00-05:00",
        "EndEpochDate": 1578787200,
        "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/extended-weather-forecast/349727?lang=en-us",
        "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2020-01-10T07:00:00-05:00",
          "EpochDate": 1578657600,
          "Temperature": {
            "Minimum": {
              "Value": 48,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 51,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=1&lang=en-us",
          "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=1&lang=en-us"
        },
        {
          "Date": "2020-01-11T07:00:00-05:00",
          "EpochDate": 1578744000,
          "Temperature": {
            "Minimum": {
              "Value": 58,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 64,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 40,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=2&lang=en-us",
          "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=2&lang=en-us"
        },
        {
          "Date": "2020-01-12T07:00:00-05:00",
          "EpochDate": 1578830400,
          "Temperature": {
            "Minimum": {
              "Value": 44,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 68,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 13,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=3&lang=en-us",
          "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=3&lang=en-us"
        },
        {
          "Date": "2020-01-13T07:00:00-05:00",
          "EpochDate": 1578916800,
          "Temperature": {
            "Minimum": {
              "Value": 39,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 48,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=4&lang=en-us",
          "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=4&lang=en-us"
        },
        {
          "Date": "2020-01-14T07:00:00-05:00",
          "EpochDate": 1579003200,
          "Temperature": {
            "Minimum": {
              "Value": 40,
              "Unit": "F",
              "UnitType": 18
            },
            "Maximum": {
              "Value": 46,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=5&lang=en-us",
          "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=5&lang=en-us"
        }
      ]
    }
  }
}
