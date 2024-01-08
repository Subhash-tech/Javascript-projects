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

    const table = document.createElement('table')
    const headingRow = document.createElement('tr')

    const column1 = document.createElement('th')
    column1.textContent = 'Id'
    headingRow.appendChild(column1)

    const column2 = document.createElement('th')
    column2.textContent = 'User Id'
    headingRow.appendChild(column2)

    const column3 = document.createElement('th')
    column3.textContent = 'Title'
    headingRow.appendChild(column3)

    const column4 = document.createElement('th')
    column4.textContent = 'Completed'
    headingRow.appendChild(column4)

    table.appendChild(headingRow)

    json.forEach((element) => {
      const dataRow = document.createElement('tr')

      const column1Value = document.createElement('td')
      column1Value.textContent = element.id
      dataRow.appendChild(column1Value)

      const column2Value = document.createElement('td')
      column2Value.textContent = element.userId
      dataRow.appendChild(column2Value)

      const column3Value = document.createElement('td')
      column3Value.textContent = element.title
      dataRow.appendChild(column3Value)

      const column4Value = document.createElement('td')
      column4Value.textContent = element.completed.toString()
      dataRow.appendChild(column4Value)

      table.appendChild(dataRow)
    })

    document.body.appendChild(table)
    document.title = `Total todos: ${json.length}`
  })
