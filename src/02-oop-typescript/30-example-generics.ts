/*************************************************************************************************************************************************************************************/
/*************************************************************************************************************************************************************************************/

function pickObjectKeys(obj: any, keys: any) {
  let result: any = {}
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}

const language = {
  name: 'Typescrript',
  age: 8,
  extensions: ['ts', 'tsx']
}

const ageAndExtentions = pickObjectKeys(language, ['age', 3]) //Kita bisa pick lainnya selain (name, age, extensions) yang artinya tidak safety
console.log(ageAndExtentions)

function pickObjectKeysGeneric<T, K extends keyof T>(obj: T, keys: K[]) {
  let result: any = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}


const ageAndExtentions2 = pickObjectKeysGeneric(language, ['age']) // Kita hanya bisa pick (name, age, extensions) selain itu tidak akan bisa 
console.log(ageAndExtentions2)

/*************************************************************************************************************************************************************************************/
/*************************************************************************************************************************************************************************************/

type ProgrammingLanguage = {
  name: string
}

function indentify<T>(value: T): T {
  return value
}

console.log(indentify<ProgrammingLanguage>({ name: 'Ruby' })) // Kita hanya bisa menggunakan name saja di object ini

/*************************************************************************************************************************************************************************************/
/*************************************************************************************************************************************************************************************/

function stringifyObjectKeyValues<T extends Record<string, any>>(obj: T) {
  return Object.keys(obj).reduce((acc, key) => ({
    ...acc,
    [key]: JSON.stringify(obj[key])
  }), {} as { [K in keyof T]: string })
}

const stringifiedValues = stringifyObjectKeyValues({ a: "1", b: {asd: 'a'}, c: true, d: [1, 2, 3]})

console.log(stringifiedValues)