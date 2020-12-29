import Markdown from '../../../Markdown/Markdown';

const BedTime = ({ name }) => {
    const width = "w"
    const markdown = `
# ${name}
First things first. Let's get our sleep cycles. Create a function that returns an array of sleep cycles.  
For each sleep cycle insantiate a new \`Date\` object. We only need the hours and minutes so we can omit  
the first three arguments. On each subsequent cycle variable subtract one hour and thirty minutes.
~~~js
const getSleepCycles = (hour, minute) => {
    const firstCycle = new Date(null, null, null, hour - 9, minute);
    const secondCycle = new Date(null, null, null, hour - 7, minute - 30);
    const thirdCycle = new Date(null, null, null, hour - 6, minute);
    const fourthCycle = new Date(null, null, null, hour - 4, minute - 30);

    return [firstCycle, secondCycle, thirdCycle, fourthCycle];
};
~~~
`

    return (
        <div>
            <Markdown markdown={markdown} mdClassName={width} />
        </div>
    )
}

export default BedTime;