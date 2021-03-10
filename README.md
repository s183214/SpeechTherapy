The application is part of a DTU course and created using the Ionic framework (Angular and TypeScript). The Cordova Camera Plugin was used, for allowing the application to access the smartphone's camera, so the users can see themselves while performing the different exercises. Moreover, with the Cordova Speech-Recognition plugin and setting up the danish language, the application detects which word has been pronounced. As the level of the exercise is "basic", the plugin makes an array with 5 words (similar words from what it had recognized) and if any of these 5 words matches the displayed word from the database, the application will record it as correctly pronounced. The application communicates with MongoDB, where there are 7 different b-words. Once the word is detected as correct, the application communicates with the database and changes the "correct" property to true. 

How to run the project: 

1. Connect your Android phone to your computer via USB. 
2. Turn on the Developer Options on your Android (and allow USB debugging). 
3. You will need Android Studio & Gradle for running the app. 
4. Inside the project directory, run 'npm install'. 
5. Run 'ionic cordova run android'. 

The application will start on your smartphone. 

6. Select 'Ord med B-lyde option. 
7. Select 'Basis'. 
8. Give permissions to the application to access your camera and voice recording. 
9. Try to pronounce the displayed word from the top. 

● When the application detects a correctly pronounced word, it will display a "Correct" message. 
● If the application doesn't detect that the word has been pronounced correctly, it will display a "Try again" motivational message.

10. You can also skip a certain word if you experience difficulties with it.
