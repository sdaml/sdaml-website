import moment from 'moment';

const meets = [
    {
        title: '⭐️ Introduction',
        author: null,
        location: 'TBD',
        dateStart: moment('2017-02-01 18:00:00'),
        dateEnd: moment('2017-02-01 19:00:00'),
        githubLine: null,
        description: 'Meet and greet introduction. Come and find out what technologies we will be discussing and learning this semester.'
    }, {
        title: '🤖 Slack bot',
        author: 'Jake',
        location: 'TBD',
        dateStart: moment('2017-02-08 18:00:00'),
        dateEnd: moment('2017-02-08 19:00:00'),
        githubLink: null,
        description: 'The first thing we will be building together is a basic Slack bot, using NodeJS, ES6, and the Slack APIs. We will also learn how to host it on Heroku.'
    }, {
        title: '🎤 NLP Basics',
        author: 'Jair',
        location: 'TBD',
        dateStart: moment('2017-02-15 18:00:00'),
        dateEnd: moment('2017-02-15 19:00:00'),
        githubLink: null,
        description: 'This week we are taking our first steps into machine learning, starting with natural language processing!'
    }, {
        title: '⚡️ NLP + Slack',
        author: 'Jake',
        location: 'TBD',
        dateStart: moment('2017-02-22 18:00:00'),
        dateEnd: moment('2017-02-22 19:00:00'),
        githubLink: null,
        description: 'Using our NLP knowledge from last week, we will add natural language processing to our Slack bot to make it even more awesome.'
    }, {
        title: '🤔 Functional Paradigms',
        author: 'Jake',
        location: 'TBD',
        dateStart: moment('2017-03-01 18:00:00'),
        dateEnd: moment('2017-03-01 19:00:00'),
        githubLink: null,
        description: 'What is functional programming and how does it compare to OOP? These are the questions that will be answered this week. We will be using Javascript and Python to apply functional paradigms to common problems.'
    }, {
        title: '✨ Kickstart your Portfolio',
        author: 'Team',
        location: 'TBD',
        dateStart: moment('2017-03-08 18:00:00'),
        dateEnd: moment('2017-03-08 19:00:00'),
        githubLink: null,
        description: 'Project week where you can work on your portfolio or a side project with the sd&ml members around to help.'
    }, {
        title: '🚀 Deployment Checklist',
        author: 'Tyson',
        location: 'TBD',
        dateStart: moment('2017-03-15 18:00:00'),
        dateEnd: moment('2017-03-15 19:00:00'),
        githubLink: null,
        description: 'Learn what it takes to deploy your project to production. What is git flow, CI, Nginx, SSL.'
    }
];

export default meets;
