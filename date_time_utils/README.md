# Date and Time Utils

Install this system: [DateAndTime.origami-system-v1.0.0.zip](https://github.com/eromanc/origami-components/files/12114257/DateAndTime.origami-system-v1.0.0.zip)

Overall Origami uses a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) for the date & time patches it provides. 
One complication though is to compute this values (the number of seconds elapsed from Jan 1st 1970) out of the regular components that humans use like Day, Month and Year.

This system provides mostly a way of creating and converting between these components and the Unix timestamp; along with other handy utilities to work with dates and times.

It contains 7 components:

* **Create Date.** Provides an easy way to create a "Unix timestamp" out of simple values like day, month, hour, etc.
* **Date in Future.** Creates a new date by adding time & date values on an Intitial Date.  For example, this is helpful to get Tomorrow's date and time.
* **Date in Past.** Creates a new date by subtracting time & date values on an Intitial Date. For example, this is helpful to get Yesterday's time.
* **Elapsed Time.** Returns a human readable formatted text representation of the time difference between now and Start Time.
* **Now.** Returns the current date and time components from the current epoch.
* **Time Difference.** Computes the difference between two dates.
* **Unpack Date.** Takes a date & time as an epoch and returns the Day, Month, Year, Hour, Minutes and Seconds that represents.

### Examples:

Use the `Time Difference` Patch to compute the difference between two dates:

<img width="400" alt="Screenshot 2023-07-20 at 5 55 34 PM" src="https://github.com/eromanc/origami-components/assets/1731560/69337fb4-56e3-454f-8407-b417735f7c0e">

You can select the result to be expressed in Weeks, Days, Hours, etc.
The strict parameter works with with integer numbers only. So you don't have something like 51.1 Weeks, instead it's counted as 52 Weeks.

________
Here's an example of using `Date In Past` and `Elapsed Time` Patches:

<img width="411" alt="Screenshot 2023-07-20 at 5 51 17 PM" src="https://github.com/eromanc/origami-components/assets/1731560/8ad33540-2865-4ce9-8abb-3b61d17ecce7">

As you can see we are decreasing 7m from the current time, using `Date In Past`. Then we are showing how `Elapsed Time` will present this as "7 minutes ago".
This can be useful when prototyping a last updated time for example in a post.
