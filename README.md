<p align="center">
 <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" align="center" alt="Typescript Tutorial" />
 <h1 align="center"><b>Typescript Tutorial</b></h1>
</p>

# Cara menjalankan
```bash
yarn install
yarn dev
```
# Gunakan program di `src/index.ts`
```ts
import { Hewan3 } from './2-oop-typescript/3-property-method'

const kucing = new Hewan3()

kucing.kaki = '4'
kucing.bernafas()
kucing.mamalia = true

console.log(kucing)
```

# Content
#### [Typescript Dasar](./TypescriptDasar.md) <br/>
#### [Typescript OOP](./src/2-oop-typescript/)

### © M. Zulfikar Isnaen, License [MIT](LICENSE)