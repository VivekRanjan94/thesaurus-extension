// import apiKey from './api'
const apiKey = ''

const parse = (json) => {
  var script = JSON.parse(json)
  alert(script.stems.toString())
}

const searchText = async (searchKey) => {
  const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchKey}?key=${apiKey}`

  const response = await fetch(url)
}

chrome.contextMenus.create({
  id: 'thesaurus',
  title: 'Search "%s" in Dictionary',
  contexts: ['selection'],
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == 'some-command') {
    searchText(info.selectionText)
  }
})
