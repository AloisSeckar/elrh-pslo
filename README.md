# elrh-pslo
Text-enhancement function to prevent single letter words and other special symbols and abbreviations being orphaned at the end of the wrapped line.

The **"pslo"** abbreviation stands for **P**revent **S**ingle **L**etter **O**rphans, which is also the name of the core function provided by this micro-library.

## how to use

`npm instal elrh-pslo` to include into your project.

Use `preventSingleLetterOrphans` to treat your text inputs. The function will include non-breaking spaces represented as `\xa0` unicode characters based on various rules. 

```ts
const input: string = "Text with single letter words like a or i or symbols like % and various others."
const output: string = preventSingleLetterOrphans(input)
```

## tech stack

- Developed with [TypeScript](https://www.typescriptlang.org/)
- Build with [Vite](https://vitejs.dev/)
- Tested with [Vitest](https://vitest.dev/)

## report bugs & contact

Use GitHub issues to report bugs / propose enhancements / give feedback:
https://github.com/AloisSeckar/elrh-pslo/issues
