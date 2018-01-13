import {APPS_KEY, COMETE_KEY, CLASSE_KEY,
  ORNIKAR_KEY, GANESHA_KEY, TYPO_KEY} from '../src/utils/project'

const data = {
    projects: [
        {
          key: APPS_KEY,
          title: "Numeric books",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH A WEBINTERFACE ?",
          description: "After having collected the first information on the comet Churyumov-Gerasimenko using the Rosetta space probe , the European Space Agency decided to hold <strong>an exhibition to present these findings</strong> to the general public at the Air and Space Museum of Paris. <br />With my team, we create <strong>the website of the exhibition</strong>, web contennu, the communication campaign on social networks and some illustrations for the exhibition.",
          number: {
            index: 1,
            height: 60
          },
          colors : {
            gradient: 'linear-gradient(-27deg, #008d89 0%, #6ad7d9 100%)',
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
          gradient: {
            dark: '#008db9',
            light: '#6ad7d9',
            base: 'background-image: linear-gradient(-27deg, #008db9 0%, #6ad7d9 100%)'
          },
          customer: 'Lelivrescolaire.fr',
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
          title: "Comete Exhibition",
          key: COMETE_KEY,
          problematic: "HOW TO GET A LARGE AUDIENCE TO GO<br/> TO A SCIENTIFIC EXHIBITION ?",
          website: "http://www.expo-cometes.fr/",
          description: "After having collected the first information on the comet Churyumov-Gerasimenko using the Rosetta space probe , the European Space Agency decided to hold <strong>an exhibition to present these findings</strong> to the general public at the Air and Space Museum of Paris. <br />With my team, we create <strong>the website of the exhibition</strong>, web contennu, the communication campaign on social networks and some illustrations for the exhibition.",
          number: {
            index: 2,
            height: 60
          },
          colors : {
            gradient: 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)',
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
          color: '#8061e7',
          gradient: {
            dark: '#5d1bb0',
            light: '#4dd0ff',
            base: 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)'
          },
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
          description: "Ornikar is a start-up that offers to take the exam of driving licenses and road traffic on the basis of an online service. To increase sales of online training in the Highway Code, we conducted three facebook advertising to each a different target: the young boys of 16-20 years, girls of 16-20 years, and young adults 20-26 years.",
          header: {
            illustration: '/static/projects/ornikar/ornikar_header.png',
            gradient: 'linear-gradient(-27deg, #d6181f 0%, #f5c253 100%)'
          },
          colors : {
            gradient: 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)',
            typo: '#221061',
            primary: '#8061E7',
            light: '#79CAFF'
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
          color: '#ee5b60',
          gradient: {
            dark: '#d6181f',
            light: '#f5c253'
          },
          linkedProjects: [0, 1, 2, 3, 4]
        },
        {
          title: "Classe numérique",
          key: CLASSE_KEY,
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH A WEBINTERFACE ?",
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
          color: '#fb5e80',
          gradient: {
            dark: '#f04372',
            light: '#ffd69c',
            base: 'linear-gradient(to left, #f04372 0%, #ffd69c 100%)'
          },
          colors : {
            gradient: 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)',
            typo: '#221061',
            primary: '#8061E7',
            light: '#79CAFF'
          },
          customer: 'Lelivrescolaire.fr',
          role: 'Directrice artistique',
          year: 2016,
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
          title: "Ganesha Drawing",
          key: GANESHA_KEY,
          problematic: "EXPERIMENTAL DRAW",
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
          color: '#2cd582',
          gradient: {
            dark: '#11998e',
            light: '#38ef7d',
            base: 'linear-gradient(-27deg, #11998e 0%, #38ef7d 100%)'
          },
          colors : {
            gradient: 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)',
            typo: '#221061',
            primary: '#8061E7',
            light: '#79CAFF'
          },
          customer: 'Lelivrescolaire.fr',
          role: 'Directrice artistique',
          year: 2016,
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
          title: "Typography project",
          key: TYPO_KEY,
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH A WEBINTERFACE ?",
          description: "Lelivrescolaire.fr is an edtech start-up specialized in the  creation of french textbooks for middle and high schools.  All books are created by a community of teachers. To increase their notoriety and reinforce the community of teachers, I created for them a series of ten typographical works based on famous quotes. They were used in facebook posts, upon bags distributed during shows, and posters offered to teachers for their classrooms. Here is a selection of three of them",
          number: {
            index: 4,
            height: 67
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          color: '#579beb',
          gradient: {
            dark: '#5541d9',
            light: '#59fcff',
            base: 'linear-gradient(-27deg, #5541d9 0%, #59fcff 100%)'
          },
          colors : {
            gradient: 'linear-gradient(-220deg, #4dd0ff 0%, #5d1bb0 100%)',
            typo: '#221061',
            primary: '#8061E7',
            light: '#79CAFF'
          },
          customer: 'Lelivrescolaire.fr',
          role: 'Directrice artistique',
          year: 2016,
          stats: [
            {
              label: 'NUMBER OF TYPOS <br/>REALIZED',
              value: 10
            },
            {
              label: 'NUMBER OF POSTERS <br/>DISTRIBUTED',
              value: 600
            }
          ],
          linkedProjects: [0, 1, 2, 3, 4]
        }
    ],
    animations: {
      switchProjects: {
        frames: [1, '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '11%', '12%', '13%', '14%', '15%', '16%', '17%', '18%', '19%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '20%', '19%', '18%', '17%', '16%', '15%', '14%', '13%', '12%', '11%', '10%', '9%', '8%', '7%', '6%', '5%', '4%', '3%', '2%', 1, 1, 1, 1, 1, 1, 1, 1, 1],
        //frames: [1, '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '11%', '12%', '13%', '14%', '15%', '16%', '17%', '18%', '19%', '20%', '21%', '22%', '23%', '24%', '25%', '26%', '27%', '28%', '29%', '30%', '31%', '32%', '33%', '34%', '35%', '36%', '37%', '38%', '39%', '40%', '41%', '42%', '43%', '44%', '45%', '46%', '47%', '48%', '49%', '50%', '50%', '50%', '50%', '50%', '50%', '50%', '50%', '50%', '50%'],
        opacityFrames: [0.5, 0.525, 0.55, 0.575, 0.6, 0.625, 0.65, 0.675, 0.7, 0.725, 0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9, 0.925, 0.95, 0.975, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.975, 0.95, 0.925, 0.9, 0.875, 0.85, 0.825, 0.8, 0.775, 0.75, 0.725, 0.7, 0.675, 0.65, 0.625, 0.6, 0.575, 0.55, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        maskFrames: ['1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '11%', '12%', '13%', '14%', '15%', '16%', '17%', '18%', '19%', '20%'],
      }
    }
}

export const skills = [
  {
    title: 'Adobe Photoshop',
    icon: 'Ps',
    level: '5 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Photoshop',
    lineLength: 180
  },
  {
    title: 'Adobe Illustrator',
    icon: 'Ai',
    level: '8 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Illustrator',
    lineLength: 128
  },
  {
    title: 'Sketch',
    icon: 'Sk',
    level: '3 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Sketch',
    lineLength: 70
  },
  {
    title: 'Adobe AfterEffect',
    icon: 'Ae',
    level: '3 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Aftereffect',
    lineLength: 20
  },
  {
    title: 'Drawing',
    icon: 'Dr',
    level: '20 years experienced',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Drawing',
    lineLength: 30
  }
]


export const ads = {
  boys: {
    title: 'boys between 16 anD 20',
    description: 'his advertisement targets boys between the ages of 16 and 20. Their main motivation for passing the code of the road with Ornikar is to use a service more entertaining and less restrictive than the traditional driving schools.',
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



export default data
