import React from 'react'
import { parseWebsterData } from './Utils/parseWebsterData'

const App = () => {
  const getData = async (key) => {
    const response = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${key}?key=${apiKey}`
    )

    const data = await response.json()

    const parsedData = parseWebsterData(data)

    let listData = ''
  }

  return <div>Hello World</div>
}

export default App
