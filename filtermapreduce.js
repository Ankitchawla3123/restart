let mynumm= [1,2,3,4,5,6,7,8,9,10];

const newnum=mynumm.filter((val)=> (val>2)) // will work without (val>2 ) only val>2
const newnum2=mynumm.filter((val)=> {
    return val>2 // if we don't write return here it will not auto return cuz of { }

})
console.log(newnum);
console.log(newnum2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const bkfilter= books.filter((bk)=> bk.genre==='Fiction')
console.log(bkfilter);

const newnum1=mynumm.map((num)=> num+10)
console.log(newnum1);
const newnum3=mynumm.map((num)=> {return num-10})
console.log(newnum3);

const mytotal = mynumm.reduce((acc, curr)=> {
    console.log(acc, curr);
    
    return acc+curr},0)
console.log(mytotal);

const mytotal2 = mynumm.reduce((acc, curr)=> acc+curr,0)
console.log(`this is my total2 ${mytotal2}`);
