import {APPS_KEY, COMETE_KEY, CLASSE_KEY,
  ORNIKAR_KEY, GANESHA_KEY, TYPO_KEY} from '../src/utils/project'

export const data = {
    projects: [
        {
          key: APPS_KEY,
          title: "Digital books",
          problematic: "How to turn textbooks into applications ?",
          description: "<span class='Global_first_letter Global_first_letter_apps'>L</span>elivrescolaire.fr is an ed-tech start-up specialized in the creation of french textbooks for middle and high schools. All manuals are available online for free.<br/>In 2016, I supervised the creation of new applications for tablets - all OS - from user experience to finalization.<br/>Those digital books offered a real challenge, since thousands of pages had to be adapted, including texts, documents and interactive exercises. We had to build them to be easily used by teachers and students, both at home and in the classroom.",
          number: {
            index: 1,
            height: 60
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
            },
            {
              title: "Illustration",
              icon: "picto-illu"
            }
          ],
          color: '#00b3df',
          customer: 'Lelivrescolaire.fr',
          role: 'Directrice artistique',
          year: 2015,
          stats: [
            {
              label: 'Application download',
              value: '100k'
            },
            {
              label: "Textbooks' users",
              value: '400k'
            }
          ],
          linkedProjects: [0, 1, 2, 3, 4]
        },
        {
          title: "Comete Exhibition",
          key: COMETE_KEY,
          callSummaryText: 'View the website',
          callSummary: 'http://www.expo-cometes.fr/',
          problematic: "How to get maximum of people going to a scientific exhibition ?",
          website: "http://www.expo-cometes.fr/",
          description: "<span class='Global_first_letter Global_first_letter_comete'>T</span>o open to the public the breakthrough of the Rosetta space probe, which landed upon the Churyumov-Gerasimenko comet, the European Space Agency (ESA) decided to hold an exhibition.<br/>It took place at the Air and Space Museum of Paris. With my team, we created one website, two videos games, some illustrations for the exhibition and a communication campaign on the social networks.",
          behance: 'https://www.behance.net/gallery/58260273/Comet-Exhibition-Website-Video-games-Illustration',
          number: {
            index: 2,
            height: 60
          },
          colors : {
            gradient: 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)',
            darkGradient: '#4dd0ff',
            lightGradient: '#5d1bb0',
            typo: '#221061',
            primary: '#8061E7',
            light: '#79CAFF'
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
          customer: 'The Air and Space museum <br/>of Paris',
          role: 'Directrice artistique',
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
          linkedProjects: [0, 1, 2, 3, 4]
        },
        {
          title: "Ornikar’s advertisings",
          key: ORNIKAR_KEY,
          problematic: "HOW TOUCH A CIBLE THAT YOU DON’T KNOW",
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
          role: 'Directrice artistique',
          year: 2015,
          stats: [
            {
              label: 'NUMBER OF TRAINING IN THE HIGHAWAY CODE SELLS',
              value: 8000
            }
          ],
          number: {
            index: 3,
            height: 70
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
          linkedProjects: [0, 1, 2, 3, 4]
        },
        {
          title: "Digital class",
          key: CLASSE_KEY,
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH A WEBINTERFACE ?",
          description: "<span class='Global_first_letter Global_first_letter_classe'>L</span>elivrescolaire.fr is an ed-tech start-up specialized in the creation of french textbooks for middle and high schools. All books are available online for free. I realized for them the design of the digital class, a service to which colleges and high schools subscribe. It allows teachers to :<ul class='Global_ul_classenumerique'><li><strong>Create classes</strong> by registering their students,</li><li>Track their student's results <strong>using statistics</strong>,</li><li>Create and correct <strong>online assignments</strong></li><li><strong>Communicate </strong>with their students via messaging.</li></ul> The interface, which offers several complex features, had to be easy to handle by children and their teachers.",
          behance: 'https://www.behance.net/gallery/58260849/Digital-classes-Web-Interface',
          number: {
            index: 4,
            height: 67
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
          role: 'Directrice artistique',
          year: 2016,
          stats: [
            {
              label: 'NUMBER OF USERS OF THE<BR /> DIGITAL CLASS',
              value: '100K'
            },
            {
              label: 'NUMBER OF CLASSES CREATED DURING FIRST YEAR',
              value: 3500
            }
          ],
          linkedProjects: [0, 1, 2, 3, 4]
        },
        {
          title: "Ganesha Drawing",
          key: GANESHA_KEY,
          description: "<span class='Global_first_letter Global_first_letter_ganesha'>O</span>ne big draw experimentation, made in 2017 for decorate a client appartment.<br />It is 6ft by 6ft (180cmX180cm) only made with posca markers.",
          problematic: "EXPERIMENTAL DRAW",
          behance: 'https://www.behance.net/gallery/59719467/Ganesha-drawing',
          number: {
            index: 3,
            height: 70
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
            gradient: 'linear-gradient(-220deg, #11998E 0%, #38EF7D 100%)',
            darkGradient: '#11998E',
            lightGradient: '#38EF7D',
            typo: '#0F261B',
            primary: '#2CD582',
            light: '#CCFFE0'
          },
          year: 2016,
          linkedProjects: [0, 1, 2, 3, 4]
        },
        {
          title: "Typography project",
          key: TYPO_KEY,
          problematic: "Typographic work to<br/> increase brand visibility",
          description: "<span class='Global_first_letter Global_first_letter_typo'>L</span>elivrescolaire.fr is an edtech start-up specialized in the  creation of french textbooks for middle and high schools.  All books are created by a community of teachers.<br /> To increase their notoriety and <strong>reinforce the community of teachers</strong>, I created for them a series of <strong>ten typographical works based on famous quotes</strong>. They were used in facebook posts, upon bags distributed during shows, and posters offered to teachers for their classrooms. <br />Here is a selection of three of them",
          behance: 'https://www.behance.net/gallery/58977035/Typography-for-a-communication-campaign',
          number: {
            index: 4,
            height: 67
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          colors : {
            gradient: 'linear-gradient(-220deg, #5541D9 0%, #59FCFF 100%)',
            darkGradient: '#5541D9',
            lightGradient: '#59FCFF',
            typo: '#0A284C',
            primary: '#579BEB',
            light: '#99FCFF'
          },
          customer: 'Lelivrescolaire.fr',
          role: 'Directrice artistique',
          year: 2017,
          stats: [
            {
              label: 'NUMBER OF TYPOS <br/>REALIZED',
              value: 10
            },
            {
              label: 'NUMBER OF POSTERS <br/>DISTRIBUTED',
              value: '10,000'
            }
          ],
          linkedProjects: [0, 1, 2, 3, 4]
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
    level: '8 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Illustrator',
    lineLength: 128
  },
  {
    title: 'Sketch',
    icon: '/static/about/picto-sketch.svg',
    level: '3 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Sketch',
    lineLength: 70
  },
  {
    title: 'Adobe AfterEffect',
    icon: '/static/about/picto-aftereffect.svg',
    level: '3 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Aftereffect',
    lineLength: 20
  },
  {
    title: 'Drawing',
    icon: '/static/about/picto-illu-skills.svg',
    level: '20 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
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
