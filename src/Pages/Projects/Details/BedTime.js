import { useEffect } from 'react';
import Markdown from '../../../Markdown/Markdown';
const BedTime = ({ name }) => {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    const width = "w"
    const markdown = `
# ${name} 🌒
### [Live Demo](https://zaknicholsdev.github.io/bedtime-v2/)
### [Code](https://github.com/zaknicholsdev/bedtime-v2)
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
The goal of this tutorial is to get you familiar with writing composable software. At the same time, manage statefulness. Almost every application we write will have end users triggering all sorts of events sending us different inputs to process and output back.  

I/O [(input/output)](https://en.wikipedia.org/wiki/Input/output) is inherently impure. But, I/O can still be *pure*, if the passing of data is explicit as both an argument and a result and the I/O operations fail when the conditions we write aren't explicitly met.

In order for state to change things have to mutate. Mutations or state changes cause [side-effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)). What the functional paradigm will allow us to do is isolate our side-effects and easily note discrepencies in stateful code.

Here's an example of what I mean when I say composability and first-class functions. Notice how composable or *expressive* the code is inside the function body of \`getWakeUpTimes\`.  

~~~js
const getWakeUpTimes = (event) => {
    event.preventDefault();
    
    const elems = getDOMelements();

    const { hour, minute, period } = elems

    const errors = isEmpty(hour, minute, period);

    const sleepCycles = getSleepCycles(hour, minute);

    const sleepCyclesPM = subtractTwelveHoursIfPM(period, sleepCycles);

    const twelve = addTwelveHoursIfHourIsTwelve(hour, sleepCyclesPM);

    const cycles = toTwelveHourTimeString(twelve);

    render(errors, cycles);
};
~~~

It's comprised of smaller, more modular, functions. With a single responsibility. Assigning variables to functions to be passed as input.  

This code is impure, mind you. It changes the state of the document object model (DOM) and that's a side-effect. But, we can isolate our side-effects, test, and debug them much much easier than having one long function body with many stateful operations. 

#### Let's begin
Create a form with \`id="calculate\`. Inside the form create \`select\` elements for hours, minute, and period (AM and PM)
Give each select element give an \`id\` to identify the hour, minute, and period
At the end of the form create a \`button\` element of \`type="submit\` for when we submit our form.
Now let's add some JavaScript to make it dynamic.
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

#### Write a callback function to fire on submit event
Declare a variable \`getWakeUpTimes(e)\` and assign it to a function. Pass an \`event\` parameter 
and call \`event.preventDefault()\` to disable the default submission behavior.

~~~js
const getWakeUpTimes = (event) => {
    event.preventDefault();
};
~~~~

Next declare a variable \`form\` and assign it to our form. Then call \`addEventListener\` 
and on submit fire our callback function \`getWakeUpTimes\`.

~~~js
const form = document.querySelector('form#calculate');
form.addEventListener('submit', getWakeUpTimes);
~~~~

It wont do anything, yet. Let's create a function to get our values.

#### Write a function to grab DOM elements and return their values
Assign four variables \`results\`, \`selectHours\`, \`selectMinutes\`, \`selectPeriod\` with \`document.querySelector()\` to reference the DOM nodes we'll interact with.
Return an object containing the \`hour\`, \`minute\`, and \`period\` variables.  

~~~js
const getDOMelements = () => {
    const selectHours = document.querySelector('select#hour');
    const selectMinutes = document.querySelector('select#minute');
    const selectPeriod = document.querySelector('select#period');

    const hour = selectHours.value;
    const minute = selectMinutes.value;
    const period = selectPeriod.value;

    return { hour, minute, period };
};
~~~

Remember our \`getWakeUpTimes\` function we created? Let's declare a variable \`elems\` insdie the function body and set it to our function. 
Since our function returns an object we can destructure our values \`{ hours, minutes, period }\` and use them as their variable names. 
When we log the object out to the console we can omit the object's key name if it's the same name as the property.

~~~js
const getWakeUpTimes = (event) => {
    event.preventDefault();

    const elems = getDOMelements();

    const { hour, minute, period } = elems;

    console.log({ hour, minute, period });
}
~~~

Now our form will log out our values! Let's go furthur.

#### Get our sleep cycles  
So, let's think. What do we need to do when they submit the form? Whether it's pseudo-code or just some notes to think the logic through, it's always good to step back and think before coding.  

When the user submit's their time from the form, instantiate a \`Date\` with \`new Date()\` and set the time back 9 hours, 7 hours and 30 minutes, 6 hours, 4 hours and 30 minutes to account for the sleep cycles. Declare a variable \`getSleepCycles(hour, minute)\`. Our function takes two parameters, hour and minute.

Return an array so we can use \`Array\` methods later.
~~~js
const getSleepCycles = (hour, minute) => {
    const firstCycle = new Date(null, null, null, hour - 9, minute);
    const secondCycle = new Date(null, null, null, hour - 7, minute - 30);
    const thirdCycle = new Date(null, null, null, hour - 6, minute);
    const fourthCycle = new Date(null, null, null, hour - 4, minute - 30);

    return [firstCycle, secondCycle, thirdCycle, fourthCycle];
};
~~~

Now let's place this function after our \`hour\`, \`minute\`, and \`period\` variables. Try and submit the form now. 

~~~js
const getWakeUpTimes = (event) => {
    event.preventDefault();

    const elems = getDOMelements();

    const { hour, minute, period } = elems

    const sleepCycles = getSleepCycles(hour, minute);
    console.log(sleepCycles)
}
~~~

In the console you'll get back an array of \`Date\` instances with the sleep cycles!

Uh oh... We got a bug. Try submitting the same hour and minutes for AM and PM. The output is the same. How can we fix that? Take a minute to think about it logically. Try implementing a solution before you go on.
This will be a large part of your job as a developer. Problem solving, pseudo-code, and thinking through the problem before you write code.
#### Handle AM and PM
Hopefully you were able to find a solution. Let me explain my thought process and break it down. 
When we set the period to PM we're not accounting for our \`Date\` instance being 24 hour time. 
At the moment our form only submits 00:00 to 12:00 (12:00 AM to 12:00 PM). 
Add an \`if\` statement inside \`getTimesToWakeUp\` to check if our \`period\` variable is AM or PM. 

~~~js
const getWakeUpTimes = (event) => {
    event.preventDefault();

    const elems = getDOMelements();

    const { hour, minute, period } = elems;

    const sleepCycles = getSleepCycles(hour, minute);

    if (period === 'PM') {
        subtractTwelveHours(sleepCycles);
    };

    console.log(sleepCycles);
};
~~~

If the period is PM then subtract 12 hours from each \`Date\`.
Now we can submit from 12:00 to 24:00 (12:00 PM to 12:00 AM)!  

Let's assign a variable to a function \`subtractTwelveHours\` to handle the PM logic. 

~~~js
const subtractTwelveHours = (sleepCyclesArr) => {
    return sleepCyclesArr.map(sleepCycleObject => {
        return sleepCycleObject.setHours(sleepCycleObject.getHours() - 12);
    });
};
~~~

We can simply map over each object return the objects hours with \`setHours()\` passing our objects hours with \`getHours()\`.  

#### Adjust for AM to PM switch when hour is 12
Well... We have another bug to squash. That's the life of a programmer.
When you submit the hour with a value of 12 it's not accounting for the the switch of AM to PM. 
Add an \`if\` statement to check if the value was 12. 

~~~js
const getWakeUpTimes = (event) => {
    event.preventDefault();

    const elems = getDOMelements();

    const { hour, minute, period } = elems;

    const sleepCycles = getSleepCycles(hour, minute);

    if (period === 'PM') {
        subtractTwelveHours(sleepCycles);
    };

    if (hours === '12') {
        addTwelveHours(sleepCycles);
    };

    console.log(sleepCycles);
};
~~~

Now to create the function to handle the logic. Assign another variable \`addTwelveHours\` to a function. 
Again, use the \`map\` method to set the hours \`setHours()\` of our object by passing in the objects hours with \`getHours()\`. This time, adding 12 hours.

~~~js
const addTwelveHours = (sleepCyclesArr) => {
    return sleepCyclesArr.map(sleepCycleObject => {
        return sleepCycleObject.setHours(sleepCycleObject.getHours() + 12);
    });
};
~~~

#### Handle form validation.
We don't want the user submitting a form with an empty value. 
Assign a variable \`isEmpty()\` to a function with parameters hour, minute, and period. 
 an errors variable and set it to the element with the \`id\` of errors using \`querySelector\`. You can use \`getElementById\` as well. I only used \`querySelector\` to play with it.
Write an \`if\` statment to check the strict equality \`===\` of each argument value. 
In an application that handles sensitive data you'd typically have more rigid form validation.  

If the text fields are empty the \`textContent\` property of our elements errors variable is set to a string: 'You must enter the fields.'
On the errors element call \`setAttribute\`. The first argument is the attribute name. In our case, a class. The second argument the value we want to set it to. A css class \`.
Return true as our function expression's name is \`isEmpty\` because our form is in fact, empty.
If the parameters pass our conditional then we'll just set the errors DOM element \`textContent\` property to an empty string.
Return false because, well, \`isEmpty\` is false.
Since \`isEmpty\` is a first-class function and returns a \`Boolean\` we can use it later to determine whether or not to render errors or the sleep cycles.
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
#### Set our date object to en-US 12-hour time with AM/PM
Now let's create a function \`toTwelveHourTimeString()\` to set our array sleep cycles to en-US
It will take one parameter, our array of sleep cycles.
Now we're going to assign a variable \`twelveHourArr\` to a function \`map\`.
On each iteration we'll call the method \`toLocaleTimeString\` on each object and before pass in a string as the first paramater to specify our [locale](https://en.wikipedia.org/wiki/Locale_(computer_software)). The second parameter will be an object with properties describing how we'd like our \`Date\` object.
By now you already know this, but make sure to explicitly \`return\` each object in multi-line arrow functions. In contrast to a single line arrow function in which you can omit the return
The assigned variable will hold the new returned array of sleep cycles
~~~js
const toTwelveHourTimeString = (arr) => {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: 'true'
    }
    return arr.map(obj => {
        return obj.toLocaleTimeString('en-US', options);
    });
};
~~~
#### To be continued...
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    );
};

export default BedTime;