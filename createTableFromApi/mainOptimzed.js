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

    const columns = ['ID', 'User ID', 'Title', 'Completed']

    columns.forEach((columnName) => {
      const currentColumn = document.createElement('th')
      currentColumn.textContent = columnName
      headingRow.appendChild(currentColumn)
    })

    table.appendChild(headingRow)

    json.forEach((element) => {
      const dataRow = document.createElement('tr')

      Object.keys(element).map((key) => {
        const columnValue = document.createElement('td')
        columnValue.textContent = element[key]
        dataRow.appendChild(columnValue)
      })

      table.appendChild(dataRow)
    })

    document.body.appendChild(table)
    document.title = `Total todos: ${json.length}`
  })
