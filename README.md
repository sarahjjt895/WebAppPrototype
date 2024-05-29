# DOCUMENTATION

## RATIONALE
* Tracking website for runners, designed to track their daily excercise and display progress and target performance. 
* Goals button displays the users targets for each day, reflected on the chart in percentages.
* Plus button at bottom right allows user to input their progress per day, via an overlay screen. 
* Pace is automtically calculated based on distance x duration. 
* Mood overlay allows user to select their feelings after a run using the drop down selectors. 
* Mood percentage (Top of mood overlay and within the performance breakdown section) is calculated based on pre-determmined percentages of each selection. 
* Two main sections on the page, performance breakdown and performance overview. 
* User input from the session is saved to local storage, this data can later be extracted once the user selects a date within the performance overview section. 


### PERFORMANCE BREAKDOWN
* Displays the users progress for that day after input for each category (e.g. distance, mood percentage etc.)

### PERFORMANCE OVERVIEW
* Displays the users progress (based off their goals), in chart view, calculating their performance in percentages according to their targets.
* Chart is populated with the data entered from the session input. When user selects another date from the picker, data updates if user has previously entered data for the selected date, otherwise chart is blank. 


## REFERENCES 
kleamerkuri. (2023, March 22). How To Build A Killer Custom Time Input. The Helpful Tipper. https://thehelpfultipper.com/how-to-build-custom-time-input/

Date Picker (2020, April 3). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

Storage: getItem() method - Web APIs | MDN. (2023, April 8). Developer.mozilla.org. https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem

Storage.setItem() - Web APIs | MDN. (n.d.). Developer.mozilla.org. https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem

Node: textContent property - Web APIs | MDN. (2023, April 7). Developer.mozilla.org. https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

Using the Web Storage API - Web APIs | MDN. (n.d.). Developer.mozilla.org. https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API

Obaseki, N. (2020, December 29). localStorage in JavaScript: A complete guide. LogRocket Blog. https://blog.logrocket.com/localstorage-javascript-complete-guide/

Man Detailed Flat Circular Flat icon. (n.d.). Freepik. Retrieved May 26, 2024, from https://www.freepik.com/icon/man_4140037 

Slider Icons – Free Vector Download, PNG, SVG, GIF. (n.d.). Icons8.Ru. https://icons8.com/icons/set/slider

Nav Icons, Logos, Symbols – Free Download PNG, SVG. (n.d.). Icons8. Retrieved May 26, 2024, from https://icons8.com/icons/set/nav 

ChatGPT OpenAI. (2023). ChatGPT (Feb 13 version) [Large language model]. https://chat.openai.com
## Prompts:
* How to Create a line graph chart using HTML, JS & CSS.
* I want to move the chart and date-selection up, how can I do this?
* How can I make the nav icon transparent (Nav-Icon.png)?
* The Nav Icon is appearing too large compared to the header even when I reduce the width and height, how can I fix this?
