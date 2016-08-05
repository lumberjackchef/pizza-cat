# Dapper Framework

This is an attempt to create a rails-y framework with the MEAN stack.
Focus will be on creating a multi-theme, multi-site capable CMS.

## Usage

- `node dapper.js`  
- open `http://localhost:3000` in your browser

## Project layout planning

|-- models  
|   Database models  
|  
|-- routes  
|---- views  
|     View helper code  
|  
|---- api  
|     API controllers  
|  
|-- config  
|   baseline configuration files, db migration scripts, etc  
|  
|-- lib  
|   custom libraries, etc for use with the app core  
|  
|-- Public  
|---- Site Themes  
|  
|---- Admin Themes  
|  
|---- Default  
|     default admin theme & site theme  
|  
|---- Shared  
|     shared js, css, etc libraries for themes  
|  
|-- package.json  
|   Project configuration file for npm/Gulp/etc  
|  
|-- dapper.js  
|   Main script that runs the application/server  

## Project objectives && TODO

Project management is now being handled through [Trello](https://trello.com/).  
Shoot me a message if you wish to be added to the board.
