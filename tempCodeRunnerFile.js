const date1= new Date("2003-12-03T03:24:00") // Date is an object
const date2= new Date("December 17, 1995 03:24:00")

console.log(date1)

const currdate= new Date()
console.log(currdate);
console.log(currdate.toDateString())
console.log(currdate.toLocaleDateString())
console.log(currdate.toString())

const date3= new Date(2025,0,11) // MONTHS FROM 0 TO 11
const date4= new Date("2024-03-15")
const date5=new Date("05-14-2024")
console.log(date3.toString(),'\n', date4.toString(),'\n', date5.toString());
