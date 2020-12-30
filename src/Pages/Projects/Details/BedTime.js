import Markdown from '../../../Markdown/Markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const BedTime = ({ name }) => {
    ;
    const width = "w"
    const mb = "my-mb"
    const markdown = `
# ${name} 🌒
### This tutorial should be finished here shortly! Thanks for the patience.
## *What you will learn*
- First-class functions: [Ex: Assigning functions in variables](https://en.wikipedia.org/wiki/First-class_function)
- Composability: [Writing modular and stateless functions](https://en.wikipedia.org/wiki/Composability#:~:text=Composability%20is%20a%20system%20design,to%20satisfy%20specific%20user%20requirements.)
- Manipulating the DOM: [Check out MDN's event reference and try others!](https://developer.mozilla.org/en-US/docs/Web/Events)
- The \`Date()\` object & constructor: [Details about the object and it's methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Pure functions and immutable data
- Common patterns that bridge the gap between plain JavaScript and React.
- Rendering HTML and CSS dynamically.
- Form's and validation.
## Before we dive in
>  The goal of this tutorial is to teach you how to write composable software. At the same time, manage statefulness.  
>  Almost every application we write will have end users triggering all sorts of events sending us different inputs to process and output back.  

> I/O [(input/output)](https://en.wikipedia.org/wiki/Input/output) is inherently impure. But, I/O can still be 'pure', if the passing of data  
is explicit as both an argument and a result and I/O operations will fail when the conditions we write aren't explicitly met.

> In order for state to change things have to *mutate*. Mutations or state changes cause [*side-effects*](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). What the functional paradigm will allow us to do is isolate our side-effects and easily note discrepencies in stateful code.

> Here's an example in this codebase how JavaScript allows *first-class* functions. We can cleanly compose effectful code.
~~~js
const getWakeUpTimes = (event) => {
    event.preventDefault();
    
    const elems = getDOMelements();

    const { hour, minute, period } = elems

    const errors = isEmpty(hour, minute, period);

    const sleepCycles = getSleepCycles(hour, minute);

    const sleepCyclesPM = setSleepCyclesPM(period, sleepCycles);

    const twelve = setSleepCyclesTwelve(hour, sleepCyclesPM);

    const cycles = toTwelveHourTimeString(twelve);

    render(errors, cycles);
};
~~~
##### Create a form for JavaScript to interact with
> - Create a form with \`id="calculate\`. Inside the form create \`select\` elements for hours, minute, and period (AM and PM)
> - Give each select element give an \`id\` to identify the hour, minute, and period
> - At the end of the form create a \`button\` element of \`type="submit\` for when we submit our form.
> - Now let's add some JavaScript to make it dynamic.
~~~html
<form id="calculate">
    <label for="hour">Hour:</label>
    <select id="hour">
        <option value="">Hour...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>

    <label for="minute">Minute:</label>
    <select id="minute">
        <option value="">Minute...</option>
        <option value="00">00</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
    </select>

    <label for="period">Period:</label>
    <select id="period">
        <option value="">AM or PM...</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
    </select>
    <button type="submit">Calculate</button>
</form>
~~~
##### Write a callback function to fire on submit event
> - Create a function \`getWakeUpTimes(e)\` that we'll pass as a callback to \`addEventListener\` later
> - Pass event as the only parameter and call \`event.preventDefault()\` to disable the default form submitting behavior so we can customize the submission
> - Assign four variables \`results\`, \`selectHours\`, \`selectMinutes\`, \`selectPeriod\` with \`document.querySelector()\` to reference the DOM nodes we'll interact with
~~~js
const getWakeUpTimes = (event) => {
    event.preventDefault();
    const results = document.querySelector('div#results');
    const selectHours = document.querySelector('select#hour');
    const selectMinutes = document.querySelector('select#minute');
    const selectPeriod = document.querySelector('select#period');
};
~~~
##### Listen for the form to submit.
> - Assign a variable to our dom node with \`querySelector()\`. Alternatively you can use \`getElementById()\`.
> - Attach an event listener \`addEventListener()\`. to the \`form\` variable. The first parameter being a string with the event name. In our case, \`'submit'\`. The second parameter is a callback function that we want to invoke when submitted.
~~~js
const form = document.querySelector('form#calculate');
form.addEventListener('submit', getWakeUpTimes);

// This is the same as above.
form.addEventListener('submit', (event) => {
    event.preventDefault();
    The rest of the function body...
});
~~~
##### Step: Get our sleep cycles  
> - Create a first-class function called \`getSleepCycles(hour, minute)\` that we'll assign to a variable later.
> - Our function \`getSleepCycles(hour, minute)\` takes two parameters, hour and minute.
> - For each sleep cycle, instantiate a new \`Date\` by calling the \`new Date()\` constructor and assign it to a variable.  
> - We only need the hours and minutes so we can omit the first three parameters of the \`Date\`. 
> - [Check out Mozilla's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Syntax) \`Date()\` constructor docs to see the other parameters like year, month, etc. or know more about the \`Date()\` constructor.
> - On each subsequent cycle variable subtract one hour and thirty minutes.
> - Return an array so we can use \`Array\` methods later.
~~~js
const getSleepCycles = (hour, minute) => {
    const firstCycle = new Date(null, null, null, hour - 9, minute);
    const secondCycle = new Date(null, null, null, hour - 7, minute - 30);
    const thirdCycle = new Date(null, null, null, hour - 6, minute);
    const fourthCycle = new Date(null, null, null, hour - 4, minute - 30);

    return [firstCycle, secondCycle, thirdCycle, fourthCycle];
};
~~~
##### Step: Handle AM and PM
> - Let's make a function \`setSleepCyclesPM(period, sleepCyclesArray)\` whose parameters are the period ('AM' or 'PM') and the array of sleep cycles we returned earlier.
> - Copy our \`Date\` by mapping through the dates and calling the \`new Date()\` constructor. You can't just use spread syntax \`[...]\` because inside the array are instances of \`Date\` data-type not \`Object\`.  
> - Inside our function body write an \`if\` statement to check the strict equality \`===\` of the period argument and the 'AM' or 'PM' string that comes from our form.
> - If our conditional is true, then create a cycles variable and set it to our sleepCyclesArray and call \`map\`.
> - Inside the \`map\` callback function create a variable to get the hours \`getHours() - 12\` of each sleep cycle we mapped.
> - Set every mapped sleepCycle object's hours \`setHours()\` to our hours variable.
> - The last thing we want to do is simple return our new array of sleep cycles!
> - Since \`map\` is an pure method it returns a copy of the array it mapped.
~~~js
const setSleepCyclesPM = (period, sleepCyclesArray) => {
    const copy = sleepCyclesArray.map(s => new Date(s.getTime()))
    if (period === 'PM') {
        return copy.map(sleepCycleObject => {
            const hours = sleepCycleObject.getHours() - 12;
            sleepCycleObject.setHours(hours);
            return sleepCycleObject;
        });
    };
    return copy;
};
~~~
##### Step: Convert 24 hour to 12 hour
> - Our app works nicely until you try and calculate a time with the hour 12.
> - Our date objects are being instantiated as 24 hour time zones, but we need twelve.
> - Let's write a function \`setSleepCyclesTwelve(hours, sleepCyclesArray)\` whose parameters are the hours input and array of sleep cycles.
> - Just like before let's write another conditional. This time, to check if the hours input is 12.
> - If so, inside the \`map\` callback function create an hours variable to get the hours \`getHours()\`.
> - Call \`setHours()\` on each sleep cycle object and pass in hours variable as it's parameter.
> - Return the new array of sleep cycles. Again, using the pure \`map\` method to not mutate our data
~~~js
const setSleepCyclesTwelve = (hour, sleepCyclesArray) => {
    const copy = sleepCyclesArray.map(s => new Date(s.getTime()))
    if (hour === '12') {
        return copy.map(sleepCycleObject => {
            const hours = sleepCycleObject.getHours() + 12
            sleepCycleObject.setHours(hours);
        });
    };
    return copy;
};
~~~
##### Step: Handle form validation.
> - We don't want the user submitting a form with an empty value. Let's fix that.
> - Write a function \`isEmpty()\` whose parameters are the hour, minute, and period.
> - Create an errors variable and set it to the DOM element with the \`id\` of errors using \`querySelector\`. You can use \`getElementById\` as well. I only used \`querySelector\` to play with it.
> - Write an \`if\` statment to check the strict equality \`===\` of each argument value.
> - If they're empty the \`textContent\` property of our DOM element errors variable to a string 'You must enter the fields.'
> - On the errors DOM element call \`setAttribute\`. The first argument is the attribute name. In our case, a class. The second argument the value we want to set it to. In our case, it's a css class in our \`styles.css\` file.
> - Return true as our function expression's name is \`isEmpty\` because our form is in fact, empty.
> - If the parameters pass our conditional then we'll just set the errors DOM element \`textContent\` property to an empty string.
> - Return false because, well, \`isEmpty\` is false.
> - Since \`isEmpty\` is a first-class function and returns a \`Boolean\` we can use it later to determine whether or not to render errors or the sleep cycles.
~~~js
const isEmpty = (hour, minute, period) => {
    const errors = document.querySelector('div#errors');
    if (hour === '' || minute === '' || period === '') {
        errors.textContent = 'You must fill in the fields.';
        errors.setAttribute('class', 'error');
        return true;
    };
    errors.textContent = '';
    return false;
};
~~~
##### Step: Set our date object to en-US 12-hour time with AM/PM
> - Now let's create a function \`toTwelveHourTimeString()\` to set our array sleep cycles to en-US
> - It will take one parameter, our array of sleep cycles.
> - Now we're going to assign a variable \`twelveHourArr\` to a function \`map\`.
> - On each iteration we'll call the method \`toLocaleTimeString\` on each object and before pass in a string as the first paramater to specify our [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)). The second parameter will be an object with properties describing how we'd like our \`Date\` object.
> - By now you already know this, but make sure to explicitly \`return\` each object in multi-line arrow functions. In contrast to a single line arrow function in which you can omit the return
> - The assigned variable will hold the new returned array of sleep cycles
~~~js
const toTwelveHourTimeString = (arr) => {
    const twelveHourArr = arr.map(obj => {
        return obj.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    });
};
~~~
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    );
};

export default BedTime;