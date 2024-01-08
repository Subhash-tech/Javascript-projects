fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {
    console.log({ totalTodos: json.length })

    // REFERENCE: structure of one object
    // {
    //   "userId": 1,
    //   "id": 1,
    //   "title": "delectus aut autem",
    //   "completed": false
    // }

    const orderedList = document.createElement('ol')

    json.forEach((element) => {
      const listItem = document.createElement('li')
      listItem.textContent = element.title
      orderedList.appendChild(listItem)
    })
    
    document.body.appendChild(orderedList)

    // To change the title of the webpage i.e tab title
    document.title = `Total todos: ${json.length}`
  })
