import Markdown from '../../../Markdown/Markdown';

const BedTime = ({ name }) => {
    const width = "w"
    const mb = "my-mb"
    const markdown = `
# **${name}**
## *What you will learn*
- First-class functions: [Ex: Assigning functions in variables](https://en.wikipedia.org/wiki/First-class_function)
- Composability: [Writing modular and stateless functions](https://en.wikipedia.org/wiki/Composability#:~:text=Composability%20is%20a%20system%20design,to%20satisfy%20specific%20user%20requirements.)
- Manipulating the DOM: [Check out MDN's event reference and try others!](https://developer.mozilla.org/en-US/docs/Web/Events)
- The \`Date()\` object & constructor: [Details about the object and it's methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Pure functions and immutable data
- Common patterns that bridge the gap between plain JavaScript and React.
- Rendering HTML and CSS dynamically.
- Form's and validation.
##### Step One: Get our sleep cycles  
> - Create a first-class function called \`getSleepCycles(hour, minute)\` that we'll assign to a variable later.
> - Our function \`getSleepCycles(hour, minute)\` takes two parameters, hour and minute.
> - For each sleep parameters cycle, instantiate a new \`Date\` object and assign it to a variable.  
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
##### Step Two: Handle AM and PM
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
##### Step Three: Convert 24 hour to 12 hour
> - Our app works nicely until you try and calculate a time with the hour 12.
> - Our date objects are being instantiated as 24 hour time zones, but we need twelve.
> - Let's write a function \`setSleepCyclesTwelve(hours, sleepCyclesArray)\` whose parameters are the hours input and array of sleep cycles.
> - Just like before let's write another conditional. This time, to check if the hours input is 12.
> - If so, inside the \`map\` callback function create an hours variable to get the hours \`getHours()\`.
> - Call \`setHours()\` on each sleep cycle object and pass in hours variable as it's parameter.
> - Return the new array of sleep cycles. Again, using the pure \`map\` method to not mutate our data
~~~js
const setSleepCyclesTwelve = (hour, sleepCyclesArray) => {
    if (hour === '12') {
        const cycle = sleepCyclesArray.map(sleepCycleObject => {
            const hours = sleepCycleObject.getHours() + 12
            sleepCycleObject.setHours(hours);
        });
        return cycle;
    };
};
~~~
##### Step Four: Handle form validation.
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
##### Step Five: Set our date object to en-US 12-hour time with AM/PM
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