const data = {
    projects: [
        {
          title: "Numeric books",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 1,
            height: 60
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #1 : numeric books",
            src: "/static/home-projects/background/accueil-numerique-book-3000x1600px.jpg"
          },
          color: '#00b3df',
          gradient: {
            dark: '#008db9',
            light: '#6ad7d9'
          }
        },
        {
          title: "Rosetta exposition",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 2,
            height: 60
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
          },
          color: '#8061e7',
          gradient: {
            dark: '#5d1bb0',
            light: '#4dd0ff'
          }
        },
        {
          title: "Ornikar’s advertisings",
          problematic: "HOW TOUCH A CIBLE THAT YOU DON’T KNOW",
          description: "Ornikar is a start-up that offers to take the exam of driving licenses and road traffic on the basis of an online service. To increase sales of online training in the Highway Code, we conducted three facebook advertising to each a different target: the young boys of 16-20 years, girls of 16-20 years, and young adults 20-26 years.",
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
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
          },
          color: '#ee5b60',
          gradient: {
            dark: '#d6181f',
            light: '#f5c253'
          }
        },
        {
          title: "Classe numérique",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 4,
            height: 67
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
          },
          color: '#fb5e80',
          gradient: {
            dark: '#f04372',
            light: '#ffd69c'
          }
        },
        {
          title: "PROJET 5",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 3,
            height: 70
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
          },
          color: '#ee5b60',
          gradient: {
            dark: '#d6181f',
            light: '#f5c253'
          }
        },
        {
          title: "PROJET 6",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 4,
            height: 67
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
          },
          color: '#fb5e80',
          gradient: {
            dark: '#f04372',
            light: '#ffd69c'
          },
        },
        {
          title: "PROJET 7",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 3,
            height: 70
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
          },
          color: '#ee5b60',
          gradient: {
            dark: '#d6181f',
            light: '#f5c253'
          }
        },
        {
          title: "PROJET 8",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 4,
            height: 67
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
          },
          color: '#fb5e80',
          gradient: {
            dark: '#f04372',
            light: '#ffd69c'
          },
        },

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
    firstPic: '/static/projects/ornikar/boys-first.png',
    secondPic: '/static/projects/ornikar/boys-second.png',
    thirdPic: '/static/projects/ornikar/boys-third.png'
  },
  girls: {
    title: 'girls between 16 anD 20',
    description: 'This advertisement targets girls between the ages of 16 and 20. Their main motivation for passing the code of the road with Ornikar is to strengthen their self-confidence by reviewing as much as they wish before passing the exam.',
    gradient: {light: '#81c7be', dark: '#f5f2b5'},
    firstPic: '/static/projects/ornikar/girls-first.png',
    secondPic: '/static/projects/ornikar/girls-second.png',
    thirdPic: '/static/projects/ornikar/girls-third.png'
  },
  youngs: {
    title: 'YOUNG between 20 anD 26',
    description: 'This advertisement targets young between the ages of 20 and 26. Their main motivation for passing the code of the road with Ornikar is to have a simple service and to interact with a company close to its cients.',
    gradient: {light: '#fa8633', dark: '#ffe05e'},
    firstPic: '/static/projects/ornikar/youngs-first.png',
    secondPic: '/static/projects/ornikar/youngs-second.png',
    thirdPic: '/static/projects/ornikar/youngs-third.png'
  }
}

export default data
