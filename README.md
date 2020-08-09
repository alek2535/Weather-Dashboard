# Weather-Dashboard

Week-6 HW

## Description

This application is a weather dashboard that will run in the browser and features dynamically updated HTML and CSS. This was accomplished using jQuery. The weather information was accessed using third-party API's. Using AJAX calls, the dashboard is able to show the current weather for the city that is being searched as well as a 5-Day forecast.
 

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

## Visuals

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Deployed Application

[Weather Dashboard Application](https://alek2535.github.io/Weather-Dashboard/)

## Installation

To access this project:

```
1. Go to https://github.com/alek2535/Weather-Dashboard

2. Fork the branch and then click on clone or download

3. Paste copied link after `git clone` into your bash console in your desired directory

4. You should now have access to the repository
```

## Usage

* jQuery
* JavaScript
* Bootstrap
* AJAX calls
* HTML
* DOM Manipulation

## Credits

Thank you to Carmen Obied(@carmenobied), CJ Pia(@cjpia612), and Zack Corpus(@zcorpuz) who helped get me through this. Bouncing ideas off of each other and providing useful resources helped make this project successful.

## Project Status

This project meets all requirements in the Acceptance Criteria. There are a couple things that need to be tweaked for better performance. There is a strange occurance with Local Storage. When you refresh the page and enter a new city, the local storage array gets reset. This needs to fixed so cities don't get lost. You can get the weather for previously searched cities, except for the ones that were just searched. When you refresh the page, you can get the weather from them. Figuring out how to make it work always is a next step to make this application better.



## License

MIT License

Copyright (c) [2020] [CALA Technologies]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.