let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]

const buttons = document.querySelectorAll('.option')

const activateClickedButton = (button) => {
  buttons.forEach(b => b.classList.remove('active'))
  button.classList.add('active')
}

const clearTracker = () => {
  const tasks = document.querySelectorAll('.task')
  tasks.forEach(task => task.remove())
}

const renderCards = (clickedOption) => {
  clearTracker()
  const taskTracker = document.querySelector('.task-tracker')

  const calcTimeframe = (option) => {
    if (option === 'daily') {
      return "Yesterday"
    } else if (option === 'weekly') {
      return "Last Week"
    } else if  (option === 'monthly') {
      return "Last Month"
    }
  }

  data.forEach(activity => {
    const name = activity.title
    const activityClass = name.toLowerCase().replace(' ', '-')
    const timeframeData = activity.timeframes[clickedOption]
    const previousTimeframe = calcTimeframe(clickedOption)

    const section = document.createElement('section')
    section.classList.add('task', 'task--grid', activityClass)
    const stringToInject = `
        <img class="task__img" src="./images/icon-${activityClass}.svg" alt="${activityClass} icon">
        <div class="task__info">
          <header class="task__heading">
              <h2 class="task__title">${name}</h2>
              <button class="button ellipsis"><span class="visually-hidden">Ellipsis button</span>
                  <i class="fa-solid fa-ellipsis"></i>
              </button>
          </header>
          <div class="interval">
              <h3 class="interval__current">${timeframeData.current}hrs</h3>
              <p class="interval__prev">${previousTimeframe} - ${timeframeData.previous}hrs</p>
          </div>
        </div>
      `
      section.innerHTML = stringToInject
      taskTracker.append(section)   
  })
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    activateClickedButton(button)
    const clickedOption = button.dataset.type
    renderCards(clickedOption)
  })
});

buttons[1].click()

  
