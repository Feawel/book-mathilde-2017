import {APPS_KEY, COMETE_KEY, CLASSE_KEY,
  ORNIKAR_KEY, GANESHA_KEY, TYPO_KEY, ADVERTISING_KEY} from '../src/utils/project'

export const data = {
    projects: [
        {
          title: "Typography project",
          key: TYPO_KEY,
          problematic: "Typographic work to<br/> increase brand visibility",
          description: "<span class='Global_first_letter Global_first_letter_typo'>L</span>elivrescolaire.fr is an edtech start-up specialized in the  creation of French textbooks for middle and high schools.  All books are created by a community of teachers.<br /> To increase their notoriety and <strong>reinforce the community of teachers</strong>, I created for them a series of <strong>ten typographical works based on famous quotes</strong>. They were used in facebook posts, upon bags distributed during shows, and posters offered to teachers for their classrooms. <br />Here is a selection of three of them.",
          behance: 'https://www.behance.net/gallery/58977035/Typography-for-a-communication-campaign',
          number: {
            index: 1,
            height: 60
          },
          tags: [
            {
              title: "Typography",
              icon: "picto-typo"
            },
            {
              title: "Digital com.",
              icon: "picto-com-web"
            },
            {
              title: "Print com.",
              icon: "picto-com-print"
            }
          ],
          colors : {
            gradient: 'linear-gradient(-220deg, #5541D9 0%, #59FCFF 100%)',
            darkGradient: '#5541D9',
            lightGradient: '#59FCFF',
            typo: '#0A284C',
            primary: '#579BEB',
            light: '#99FCFF'
          },
          customer: 'Lelivrescolaire.fr',
          role: 'Artistic director',
          year: 2017,
          stats: [
            {
              label: 'NUMBER OF TYPOS <br/>REALIZED',
              value: 10
            },
            {
              label: 'NUMBER OF POSTERS <br/>DISTRIBUTED',
              value: '1000'
            }
          ],
          linkedProjects: [1, 2, 3, 4, 5, 6]
        },
        {
          title: "Digital class",
          key: CLASSE_KEY,
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH A WEBINTERFACE?",
          description: "<span class='Global_first_letter Global_first_letter_classe'>L</span>elivrescolaire.fr is an ed-tech start-up specialized in the creation of French textbooks for middle and high schools. All books are available online for free. I realized for them the design of the digital class, a service to which colleges and high schools subscribe. It allows teachers to :<ul class='Global_ul_classenumerique'><li><strong>Create classes</strong> by registering their students,</li><li>Track their student's results <strong>using statistics</strong>,</li><li>Create and correct <strong>online assignments</strong>,</li><li><strong>Communicate </strong>with their students via messaging.</li></ul> The interface, which offers several complex features, had to be easy to handle by children and their teachers.",
          behance: 'https://www.behance.net/gallery/58260849/Digital-classes-Web-Interface',
          number: {
            index: 2,
            height: 60
          },
          tags: [
            {
              title: "User Interface",
              icon: "picto-UI"
            },
            {
              title: "User Experience",
              icon: "picto-UX"
            },
            {
              title: "Illustration",
              icon: "picto-illu"
            }
          ],
          colors : {
            gradient: 'linear-gradient(-220deg, #f04372 0%, #ffd69c 100%)',
            darkGradient: '#f04372',
            lightGradient: '#ffd69c',
            typo: '#1a2432',
            primary: '#fb5e80',
            light: '#ffcfae'
          },
          customer: 'Lelivrescolaire.fr',
          role: 'Artistic director',
          year: 2016,
          stats: [
            {
              label: 'NUMBER OF USERS OF THE<BR /> DIGITAL CLASS',
              value: '100k'
            },
            {
              label: 'NUMBER OF CLASSES CREATED DURING FIRST YEAR',
              value: 3500
            }
          ],
          linkedProjects: [0, 2, 3, 4, 5, 6]
        },
        {
          key: APPS_KEY,
          title: "Digital books",
          problematic: "How to turn textbooks <br />into applications?",
          description: "<span class='Global_first_letter Global_first_letter_apps'>L</span>elivrescolaire.fr is an ed-tech start-up specialized in the creation of French textbooks for middle and high schools. All manuals are available online for free.<br/>In 2016, I supervised the creation of new applications for tablets - all OS - from user experience to its completion.<br/>Those digital books offered a real challenge, since thousands of pages had to be adapted, including texts, documents and interactive exercises. We optimised their use so they would be easily used by teachers and students, both at home and in the classroom.",
          number: {
            index: 3,
            height: 70
          },
          behance: 'https://www.behance.net/gallery/56962495/Lelivrescolaire-Tablet-App-for-digital-books',
          callSummary: 'http://www.lelivrescolaire.fr/#!manuel/1174067/francais-4e-2016/chapitre/1175115/aux-frontieres-du-reel/page/1175118/l-amour-la-mort/lecon',
          callSummaryText: 'View the website',
          colors : {
            gradient: 'linear-gradient(-220deg, #008dB9 0%, #6ad7d9 100%)',
            darkGradient: '#008dB9',
            lightGradient: '#6ad7d9',
            typo: '#004459',
            primary: '#00B3DF',
            light: '#94ECED'
          },
          tags: [
            {
              title: "User Interface",
              icon: "picto-UI"
            },
            {
              title: "User Experience",
              icon: "picto-UX"
            }
          ],
          color: '#00b3df',
          customer: 'Lelivrescolaire.fr',
          role: 'Artistic director',
          year: 2015,
          stats: [
            {
              label: 'Application download',
              value: '100k'
            },
            {
              label: "Textbooks users",
              value: '400k'
            }
          ],
          linkedProjects: [0, 1, 3, 4, 5, 6]
        },
        {
          title: "Comete Exhibition",
          key: COMETE_KEY,
          callSummaryText: 'View the website',
          callSummary: 'http://www.expo-cometes.fr/',
          problematic: "How to encourage people to attend <br/>a scientific exhibition?",
          website: "http://www.expo-cometes.fr/",
          description: "<span class='Global_first_letter Global_first_letter_comete'>T</span>he European Space Agency (ESA) organized an exhibition about a major scientific breakthrough, the landing of space probe Rosetta  upon the Churyumov-Gerasimenko comet, to make it public.<br/>It took place in the Air and Space Museum of Paris. With my team, we created one website, two videos games, some illustrations for the exhibition and a communication campaign on the social networks.",
          behance: 'https://www.behance.net/gallery/58260273/Comet-Exhibition-Website-Video-games-Illustration',
          number: {
            index: 4,
            height: 67
          },
          colors : {
            gradient: 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)',
            darkGradient: '#5d1bb0',
            lightGradient: '#4dd0ff',
            typo: '#221061',
            primary: '#8061E7',
            light: '#79CAFF'
          },
          tags: [
            {
              title: "Visual identity",
              icon: "picto-ID"
            },
            {
              title: "User Interface",
              icon: "picto-UI"
            },
            {
              title: "Illustration",
              icon: "picto-illu"
            }
          ],
          customer: 'The Air and Space <br/>museum of Paris',
          role: 'Artistic director',
          year: 2015,
          stats: [
            {
              label: 'CHILDS WHO USE THE <br/>NUMERIQUE BOOK',
              value: 1200
            },
            {
              label: 'NUMBER OF DOWNLOAD <br/>OF THE APP',
              value: 589
            }
          ],
          linkedProjects: [0, 1, 2, 4, 5]
        },
        {
          title: "Ornikar's advertisings",
          key: ADVERTISING_KEY,
          problematic: "Install a new brand to the public",
          description: "<span class='Global_first_letter Global_first_letter_advertising'>O</span>rnikar is a start-up founded in 2013. It offers online driving license training, as well as an online platform used as an intermediary between independent teachers and candidates.<br/>Ornikar is today the first driving school in France and the most awarded start-up in France in 2014. I realized their communication during the year 2015. Here are some of the productions.",
          behance: 'https://www.behance.net/gallery/62488867/Print-and-Digital-communications-for-Ornikar',
          number: {
            index: 5,
            height: 60
          },
          tags: [
            {
              title: "Visual identity",
              icon: "picto-ID"
            },
            {
              title: "Print com.",
              icon: "picto-com-print"
            },
            {
              title: "Digital com.",
              icon: "picto-com-web"
            }
          ],
          colors : {
            gradient: 'linear-gradient(-220deg, #DA3C41 0%, #ffd678 100%)',
            darkGradient: '#DA3C41',
            lightGradient: '#ffd678',
            typo: '#0D2D40',
            primary: '#FFBB66',
            light: '#FFEEC7'
          },
          customer: 'Ornikar',
          role: 'Artistic director',
          year: 2015,
          stats: [
            {
              label: 'DRIVING LICENSES SOLD',
              value: '80k'
            },
            {
              label: 'TOTAL USERS',
              value: '211k'
            }
          ],
          linkedProjects: [0, 1, 2, 3, 5, 6]
        },
        {
          title: "Ornikar’s adds",
          key: ORNIKAR_KEY,
          problematic: "HOW TOUCH A CIBLE<br /> THAT YOU DON’T KNOW?",
          description: "<span class='Global_first_letter Global_first_letter_ornikar'>O</span>rnikar is a start-up that offers to handle driving licenses as an online service. To increase sales of online training, we used three facebook ads to each a different target: young boys 16-20 years old, young girls 16-20 years old and 20-26 years adults.",
          behance: 'https://www.behance.net/mathildese8e32',
          colors : {
            gradient: 'linear-gradient(-220deg, #d6181f 0%, #f5c253 100%)',
            darkGradient: '#d6181f',
            lightGradient: '#f5c253',
            typo: '#260608',
            primary: '#EE5B60',
            light: '#FFD98F'
          },
          customer: 'Ornikar',
          role: 'Artistic director',
          year: 2015,
          stats: [
            {
              label: 'NUMBER OF TRAINING IN THE HIGHAWAY CODE SELLS',
              value: 8000
            }
          ],
          number: {
            index: 6,
            height: 67
          },
          tags: [
            {
              title: "Digital communication",
              icon: "picto-com-web"
            },
            {
              title: "Illustration",
              icon: "picto-illu"
            }
          ],
          linkedProjects: [0, 1, 2, 3, 4, 6]
        },
        {
          title: "Ganesha Drawing",
          key: GANESHA_KEY,
          description: "<span class='Global_first_letter Global_first_letter_ganesha'>O</span>ne big drawing experiment, made in 2017 to decorate a client's apartment.<br />It is 6ft by 6ft (180 cm x 180 cm) only made with posca markers.",
          problematic: "EXPERIMENTAL DRAWING",
          behance: 'https://www.behance.net/gallery/59719467/Ganesha-drawing',
          number: {
            index: 7,
            height: 70
          },
          tags: [
            {
              title: "Illustration",
              icon: "picto-illu"
            }
          ],
          colors : {
            gradient: 'linear-gradient(-220deg, #11998E 0%, #38EF7D 100%)',
            darkGradient: '#11998E',
            lightGradient: '#38EF7D',
            typo: '#0F261B',
            primary: '#2CD582',
            light: '#CCFFE0'
          },
          year: 2017,
          linkedProjects: [0, 1, 2, 3, 4, 5]
        }
    ]
}

export const skills = [
  {
    title: 'Adobe Photoshop',
    icon: '/static/about/picto-photoshop.svg',
    level: '5 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Photoshop',
    lineLength: 180
  },
  {
    title: 'Adobe Illustrator',
    icon: '/static/about/picto-illustrator.svg',
    level: '10 years experienced',
    description: 'My best ally in spite of the crashes! From quick sketches to the most achieved illustration, nothing is impossible with the all-powerful vectorial drawing!',
    className: 'Illustrator',
    lineLength: 128
  },
  {
    title: 'Sketch',
    icon: '/static/about/picto-sketch2.svg',
    level: '2 years experienced',
    description: 'I had the occasion of testing The Challenger on two user interface projects: if I\'m far from knowing all the mysteries of the sketch\'s plug-ins, I can deliver a project with it without any concern.',
    className: 'Sketch',
    lineLength: 70
  },
  {
    title: 'Adobe AfterEffect',
    icon: '/static/about/picto-aftereffect.svg',
    level: 'Sometimes',
    description: 'From a little logo animation to a funky loader, I master this software enough for brighten up a digital interface.',
    className: 'Aftereffect',
    lineLength: 20
  },
  {
    title: 'Drawing',
    icon: '/static/about/picto-illu-skills.svg',
    level: 'Something like 23 years',
    description: 'My favorite way of thinking when it comes to design, my first skill in illustration and one my leaser, drawing is for me more than a representation mechanism, it\'s the base of my creative works.',
    className: 'Drawing',
    lineLength: 30
  }
]


export const ads = {
  boys: {
    title: 'boys between 16 anD 20',
    description: 'This advertisement targets boys between the ages of 16 and 20. Their main motivation for passing the code of the road with Ornikar is to use a service more entertaining and less restrictive than the traditional driving schools.',
    gradient: {light: '#d6181f', dark: '#f5c253'},
    firstPic: '/static/projects/ornikar/desktop/boys-first.png',
    secondPic: '/static/projects/ornikar/desktop/boys-second.jpg',
    thirdPic: '/static/projects/ornikar/desktop/boys-third.jpg'
  },
  girls: {
    title: 'girls between 16 anD 20',
    description: 'This advertisement targets girls between the ages of 16 and 20. Their main motivation for passing the code of the road with Ornikar is to strengthen their self-confidence by reviewing as much as they wish before passing the exam.',
    gradient: {light: '#81c7be', dark: '#f5f2b5'},
    firstPic: '/static/projects/ornikar/desktop/girls-first.png',
    secondPic: '/static/projects/ornikar/desktop/girls-second.jpg',
    thirdPic: '/static/projects/ornikar/desktop/girls-third.jpg'
  },
  youngs: {
    title: 'YOUNG between 20 anD 26',
    description: 'This advertisement targets young between the ages of 20 and 26. Their main motivation for passing the code of the road with Ornikar is to have a simple service and to interact with a company close to its cients.',
    gradient: {light: '#fa8633', dark: '#ffe05e'},
    firstPic: '/static/projects/ornikar/desktop/youngs-first.png',
    secondPic: '/static/projects/ornikar/desktop/youngs-second.jpg',
    thirdPic: '/static/projects/ornikar/desktop/youngs-third.jpg'
  }
}

export const SHARE_TWITTER = (url, content) =>
  `https://twitter.com/intent/tweet?url=${url}&text=${content}`

export const SHARE_LINKEDIN = (url) =>
  `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}&source=https://www.matserra.design.com`

export const RS_TWITTER = 'https://twitter.com/mathilde__serra'
export const RS_LINKEDIN = 'https://www.linkedin.com/in/mathilde-serra-37946aa9/'
export const RS_BEHANCE = 'https://www.behance.net/mathildese8e32'

export const JO_LINKEDIN = 'https://www.linkedin.com/in/jonathanbanon/'


export default data
