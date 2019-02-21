# SubTrakt
Link on DevPost: https://devpost.com/software/subtrakt

## Inspiration
In today's world, it is hard to keep track of all of your subscriptions and know how much you spend every month. Do you know how much you spend on Netflix, HBO, Amazon, Pandora, Spotify, etc? Have you ever paid for subscriptions you forgot to cancel?

Our team came up with this chrome extension to help users make budgeting easier, helping you save money.

## What it does
SubTrakt automatically scrapes billing data from services you subscribe to, reminds you when your payments are due and displays whether your subscriptions are free/paid. SubTrakt provides an innovative way to save money and be financially responsible.

## How we built it
Our team created a chrome extension using HTML, CSS, JS, and the Chrome-built in storage API.

Our team used JavaScript to:
  1. Fill in billing date and price when the user goes to the subscription page.
  2. Automatically alert user one day before the billing is due. 

Our team used HTML and CSS to: 
   1. Format the display of the extension
   2. Create a table to manually input subscription data 

## Challenges we ran into
1. Chrome Local Storage is restrictive in terms of what type of data structure you can store. 
2. It was difficult to parse the exact tags for important information (for example, recurring date and price) in the subscription webpage. Thus, we have to parse the whole HTML source code as a text, send it as a message and search for the relevant terms there.
3. We were not able to load many of the useful JS libraries into our browser extension.
4. No one in our team had much experience with JavaScript.

## Accomplishments that we're proud of
We shared ideas and helped each other solve problems whenever one of us was stuck. It was also the first time that many of us used GitHub to collaborate on a group project. The end result was that we now know how to create a browser extension, learned how to use the Chrome built-in storage API, and learned how to use GitHub efficiently.

## What we learned
We learned the chrome extension ecosystem and JavaScript.

## What's next for SubTrakt
1. Save subscription data on cloud storage (Google Cloud, AWS). 
2. Implement a budget limit and send an email alert if you go over your budget. 
3. Port the extension to other browsers such as Firefox, Safari and Edge.
