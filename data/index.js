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
          }
        },
        {
          title: "Ornikar",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 3,
            height: 70
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
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
          }
        },
        {
          title: "Projet 5",
          problematic: "HOW TO MANAGE A CLASSROOM <br /> WITH AN WEBINTERFACE ?",
          number: {
            index: 5,
            height: 70
          },
          tags: ["User Interface", "User Experience", "Illustration"],
          picture: {
            alt: "Background picture for project #2 : comet exposition",
            src: "/static/home-projects/background/accueil-comete-3000x1600px.jpg"
          }
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
    level: 'Expert',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Photoshop'
  },
  {
    title: 'Adobe Illustrator',
    icon: 'Ai',
    level: 'Expert',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Illustrator'
  },
  {
    title: 'Sketch',
    icon: 'Sk',
    level: 'Expert',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Sketch'
  },
  {
    title: 'Adobe AfterEffect',
    icon: 'Ae',
    level: 'Expert',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Aftereffect'
  },
  {
    title: 'Drawing',
    icon: 'Dr',
    level: 'Expert',
    description: 'Software that I mastered for the web or mobile interface. I also have some skills in photo editing.',
    className: 'Drawing'
  }
]

export default data
