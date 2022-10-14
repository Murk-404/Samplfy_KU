<img src="/client/src/images/samplfy-logo-new.png" width="50%">

# Created By: Tyler Fullmer & Eli Chapman

## Website: https://samplfy.dev









## Problem Statement

Spotify has close to half a billion active users, and many of those users want to learn more about what they’re listening to. Teens especially often discuss what songs or artists they listen to most on Spotify. Samplfy aids those people in finding out more about what they’re listening to by creating and displaying easy to use lists of their most frequent songs and artists. Furthermore, Samplfy can create custom playlists for its users based on these sets of songs. In an age where information and access to it is impossibly abundant, the problem often becomes how one can process that information. Samplfy’s simple layout and ease of use allow it to be an incredible tool for learning more about your musical tastes.

## Data Structure Section

The function of the code snippet below is to map a JSON object containing user data to a table. This table displays data for each individual song on a user’s top songs chart. It maps the index of the song, its album art, song title, and artist, as well as the spotify link associated with each song or artist. We chose this JSON data structure for multiple reasons, firstly because of its simplicity in sending data to and from the server, client, and database, as JSON format is the most commonly used structure for those types of processes. It is also the only format returned by any of the various Spotify’s API endpoints. We also chose this structure because of its ability to be easily mapped out to a table, like what is shown below. This data structure was the only one considered for the project because it makes the most logical sense considering the processes that take place in reference to the data.

<img src="/img1.png">

## Algorithm Section

The algorithm below utilizes a useEffect hook that is called once on the first page render, and again every time the “user” state is updated. Because the useEffect hook is called first on page render, the body of the function needs to be run conditionally based on the value of “user” and more specifically, whether or not it is null. The solution to that being a simple if else statement. The actual function of the body is to retrieve the user’s top data from the Firebase database after it has been successfully updated with the data from the server. The process first creates a reference to the correct directory in the database using the user’s username as the root directory, then gets the correct folder containing the top-tracks (or top-artists on the top-artists page). Then a snapshot is returned of the specified directory, which is then iterated through and passed to the setSendData hooks to update the respective states with the users data for short term, medium term, and long term. The thought process behind creating a useEffect function for this task was to create a process that runs dynamically and is not dependent on any user interaction. It instead runs as a background side effect instead of being rendered with the rest of the code. It also has the added benefit of updating the “loading” state to change the conditional render state of the table, which displays a loading animation while to function is running, and displays the table when the function is completed.

<img src="/img2.png">

The code snippet below makes use of the useEffect function above by receiving the resulting data arrays and sending them as props down to the TracksTable component, which maps and displays the data.

<img src="/img3.png">

## Four Pillars of Object Oriented Programming:

### Encapsulation:

<img src="/img4.png">

### Abstraction:

<img src="/img5.png">

### Inheritance:

<img src="/img6.png">

### Polymorphism:

<img src="/img7.png">

How do these pillars aid us?
These 4 pillars are the basis of Object Oriented Programming. The idea of Polymorphism allows us to use the same function to render a Header that changes its appearance based on the size of the window. Inheritance allows for the styling of one element to be applied to sub-elements, such as a link inheriting all styling and changing some when hovered over. Abstraction is a very important concept when it comes to making a website. The information has to be displayed to the user in a very simple and easy to understand way. We wrote code to ensure that only the information we needed would be displayed, and in a table that is easy to read. Encapsulation was a huge part of this project, our website is built out of many small components, each being referenced by other components, forming a cohesive whole. Overall the use of these pillars severely strengthened the functionality of our code.
