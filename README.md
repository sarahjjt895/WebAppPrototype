# DOCUMENTATION

Link to GitHub: https://github.com/sarahjjt895/WebAppPrototype

## FEATURES
* Tracking website for runners, designed to track their daily excercise and display progress and target performance.
* Responsive design for both desktop and mobile use.
* Goals button displays the users targets for each day, reflected on the chart in percentages.
* Plus button at bottom right allows user to input their progress per day, via an overlay screen. 
* Pace is automtically calculated based on distance x duration. 
* Mood overlay allows user to select their feelings after a run using the drop down selectors. 
* Mood percentage (Top of mood overlay and within the performance breakdown section) is calculated based on pre-determmined percentages of each selection. 
* User input from the session is saved to local storage, this data can later be extracted and viewed as a line graph once the user selects a date within the performance overview section.
* History overlay allows users to view their previous input for each session (based on the goal percentages) and delete session data from the local storage. 
* Two main sections on the page, performance breakdown and performance overview. further details below:


### PERFORMANCE BREAKDOWN
* Displays the users progress for that day after input for each category (e.g. distance, mood percentage etc.)

### PERFORMANCE OVERVIEW
* Displays the users progress (based off their goals), in chart view, calculating their performance in percentages according to their targets.
* Chart is populated with the data entered from the session input. When user selects another date from the picker, data updates if user has previously entered data for the selected date, otherwise chart is blank. 

## LIMITATIONS
* Due to time contraints within this project, I have not developed the option to view the chart in weekly or monthly format. This would present the data based on the users goals (in percentages) and allow them to see their average trends throughout the week and month. 
* Within the 'Log a Session' overlay, I have not configured the 'import' function, where the user would simply download their fitness data from a fitness tracking device, as this was not a requirement within the brief and time limitations made it difficult to implement. 
* Due to time constraints and requirements outlined in the brief, I have not activated the other tabs within the nav bar (Training, Notifications etc.)

## DESIGN DEVELOPMENT 
Below are images of the low-fidelity mockup designed for this project. 
![alt text](<Development 1.png>)
![alt text](<Development 2.png>)
## REFERENCES 
CSS Properties - Complete List - Dofactory. (n.d.). Www.dofactory.com. https://www.dofactory.com/css/properties

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

History Icons, Logos, Symbols – Free Download PNG, SVG. (n.d.). Icons8. https://icons8.com/icons/set/history

ChatGPT OpenAI. (2023). ChatGPT (Feb 13 version) [Large language model]. https://chat.openai.com

### AI Usage Acknowldgements:
Prompts:
* How to Create a line graph chart using HTML, JS & CSS?
* I want to move the chart and date-selection up, how can I do this?
* How can I make the nav icon transparent (Nav-Icon.png)?
* The Nav Icon is appearing too large compared to the header even when I reduce the width and height, how can I fix this?
* How does the lcoal storage work within javascript, and where can I access it in the developer tools of my web browser? 
* How can I retrieve the data saved within local storage based on the key (date)?
