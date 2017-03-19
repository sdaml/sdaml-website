import moment from 'moment';

const meets = [
    {
        title: '⭐️ Introduction',
        author: null,
        location: 'MAC 123',
        dateStart: moment('2017-02-01 18:30:00'),
        dateEnd: moment('2017-02-01 19:00:00'),
        githubLink: 'https://github.com/sdaml/introduction',
        description: 'Meet and greet introduction. Come and find out what technologies we will be discussing and learning this semester.'
    }, {
        title: '🤖 Slack bot',
        author: 'Jake',
        location: 'SUB Upper Lounge',
        dateStart: moment('2017-02-22 18:30:00'),
        dateEnd: moment('2017-02-22 20:00:00'),
        githubLink: 'https://github.com/sdaml/slack-bot',
        description: 'The first thing we will be building together is a basic Slack bot, using NodeJS, ES6, and the Slack APIs. We will also learn how to host it on Heroku.'
    }, {
        title: '👩‍💻 Project week',
        author: null,
        location: 'SUB Upper Lounge',
        dateStart: moment('2017-03-01 18:30:00'),
        dateEnd: moment('2017-03-01 20:00:00'),
        githubLink: null,
        description: 'Come work on a side project in the company of the sd&ml team.'
    }, {
        title: '🤔 AI Gameplaying',
        author: 'Zev',
        location: 'MAC 123',
        dateStart: moment('2017-03-15 18:30:00'),
        dateEnd: moment('2017-03-15 20:00:00'),
        githubLink: 'https://github.com/sdaml/ai-gameplaying',
        description: 'Zev will be taking us through some AI techniques for 2 player optimization games.'
    }, {
        title: '🚀 Deployment Checklist',
        author: 'Tyson',
        location: 'SUB Upper Lounge',
        dateStart: moment('2017-03-29 18:30:00'),
        dateEnd: moment('2017-03-29 20:00:00'),
        githubLink: null,
        description: 'Learn what it takes to deploy your project to production. What is git flow, CI, Nginx, SSL.'
    }
    // {
    //     title: '⚡️ NLP + Slack',
    //     author: 'Jake',
    //     location: 'SUB Upper Lounge',
    //     dateStart: moment('2017-03-15 18:30:00'),
    //     dateEnd: moment('2017-03-15 20:00:00'),
    //     githubLink: null,
    //     description: 'Using our NLP knowledge from last week, we will add natural language processing to our Slack bot to make it even more awesome.'
    // }, {
    //     title: '🤔 Functional Paradigms',
    //     author: 'Jake',
    //     location: 'SUB Upper Lounge',
    //     dateStart: moment('2017-03-22 18:30:00'),
    //     dateEnd: moment('2017-03-22 20:00:00'),
    //     githubLink: null,
    //     description: 'What is functional programming and how does it compare to OOP? These are the questions that will be answered this week. We will be using Javascript and Python to apply functional paradigms to common problems.'
    // }, {
    //     title: '✨ Kickstart your Portfolio',
    //     author: 'Team',
    //     location: 'SUB Upper Lounge',
    //     dateStart: moment('2017-03-29 18:30:00'),
    //     dateEnd: moment('2017-03-29 20:00:00'),
    //     githubLink: null,
    //     description: 'Project week where you can work on your portfolio or a side project with the sd&ml members around to help.'
    // }
];

export default meets;
