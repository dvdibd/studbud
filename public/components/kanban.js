// refrenced from https://codepen.io/flosing/pen/VwpLQXr

const items = [
    {
      "name": "To Do",
      "items": [
        "Weekly task 1",
        "DECO2017 Assignment",
        "Leetcode",
        "Hackerrank java",
        "Hackerrank stats"
      ]
    },
    {
      "name": "In Progress",
      "items": [
        "Assignment 1",
        "Assignment 2"
      ]
    },
    {
      "name": "Done",
      "items": [
        "Report",
        "Meeting notes"
      ]
    }
  ]
  
  const listTable = document.getElementById('list-table')
  
  const dragStart = (ev) => {
    ev.dataTransfer.setData("application/app", ev.target.id)
    ev.dataTransfer.effectAllowed = "move"
    ev.dataTransfer.setDragImage(new Image(), 0, 0)
  }
  
  const dragDrop = (ev) => {
    ev.preventDefault()
    const data = ev.dataTransfer.getData("application/app")
    const child = document.getElementById(data)
    child.style.position = 'static'
    child.style.maxWidth = '100%'
    ev.target.appendChild(document.getElementById(data))
  }
  
  const dragOver = (ev) => {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = "move"
    const data = ev.dataTransfer.getData("application/app")
    const child = document.getElementById(data)
    child.style.maxWidth = child.clientWidth + 'px'
    child.style.position = 'absolute'
    child.style.top = ev.clientY + 'px'
    child.style.left = ev.clientX + 'px'
  }
  
  const addEl = (item) => {
    var newListElement = document.createElement('div')
    var newHeadlineElement = document.createElement('h3')
    var newHeadlineTextNode = document.createTextNode(item.name)
    
    newHeadlineElement.appendChild(newHeadlineTextNode)
    newListElement.id = item.name.replace(" ", "")
    newListElement.classList.add('list')
    newListElement.appendChild(newHeadlineElement)
    newListElement.addEventListener('drop', (ev) => dragDrop(ev))
    newListElement.addEventListener('dragover', (ev) => dragOver(ev))
    
    listTable.appendChild(newListElement)
    
    item.items.forEach(iteme => {
      var entry = document.createElement('div')
      var entryContent = document.createTextNode(iteme)
      
      entry.id = iteme.replace(" ", "")
      entry.classList.add('list-entry')
      entry.appendChild(entryContent)
      entry.draggable = true
      entry.addEventListener('dragstart', (ev) => dragStart(ev))
      
      newListElement.appendChild(entry)
    })  
  }
  
  items.forEach(item => addEl(item))