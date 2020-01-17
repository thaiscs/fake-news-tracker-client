# Fake News - Bullshit Detector App

# Project Intro

Fake News became a big problem over the past few years when it took massive proportions all over the world, resulting in an increase of MISINFORTATION among society.

In a world where information is such a valuable asset, I invite the user to re-evaluate the way they consume their news by taking a more skeptical approach.

# Tech stack

- Google Natural Language API: to analyze sentiment and detect different scales of emotion within text.
- Node.js
- Express
- React
- Redux

# Concept and Algorithm logic

After careful consideration of the best practices and principles of trustworthy journalism, I came up with a few solutions for a MVP - Minimal Viable Product to not only calculate *sentiment* but other variables that could indicate a weak narrative or, even worse, an inauthentic article, also known as the "fake news phenomenon". 
          

# Usage

1. Copy and paste article's plain text into the input field on main page and click on "check":
        
        https://fervent-carson-5438ca.netlify.com/
        
2. After the backend calculations are done you'll be redirected to the score page where the following information will be rendered:

        // PRINTSCREEN SCORE PAGE
        
# Installation

1. Backend

    - one must have a Google API Key saved on a json file in the root directory to set an environment variable as below
    - $ export google_application_credentials="/home/user/directory/file_name.json"
    - $ node index.js
    
2. Frontend

    - $ npm run install
    - $ npm run start
