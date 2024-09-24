// console.log("Hello Typescript")

// const nums: number[] = []

// const a = 10 + nums[0]

// const someString = "Typescript!"

// someString.endsWith("!")

// import { printName } from "./utill";

// printName("typescript")

let names: string;
names = ""
names = "Jon"

let nums: number;
nums = -10
nums = 10.456
nums = 39

const isOpened: boolean = true;
if(isOpened) {
  console.log(names, nums, `\n`)
}

let texts: null = null
if(texts === null) {
  console.log('texts는 null')
}

let someValue: any;
someValue = false;
someValue.toString();