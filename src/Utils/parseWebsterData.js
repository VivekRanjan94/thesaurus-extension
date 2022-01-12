export const parseWebsterData = (data) => {
  let defs = []

  data.forEach((obj) => {
    // List of definition
    const shortDef = obj.shortdef

    // noun/verb
    const type = obj.fl

    // Quick
    const { stems, syns } = obj.meta

    // Stems is the word in different contexts
    // syns are the synonyms in those contexts

    // Detailed
    // Synonyms
    obj.def[0].sseq.forEach(([[, definitionObject]]) => {
      console.log(definitionObject)
      //t1 and t2 are the strings 'text' and 'vis'
      // text is a definition and vis is a list of example uses
      const [[, text], [, vis]] = definitionObject.dt

      const relList = definitionObject.rel_list
      const synList = definitionObject.syn_list

      console.log(relList)
    })

    // console.log(obj)
  })
}
