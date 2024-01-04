// const coding = ["js", "java", "py", "ts", "c", "cpp"]

// const values = coding.forEach( (file) => {
//     console.log(file);
// })

// console.log(values); // undefined

// // foreach returns nothing

// filter
// returns the element

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const store = myNums.filter( (num) => { 
//     if(num > 4)
//         return num

// })

const store = myNums.filter( (num) => num > 4)  // explicit function
// console.log(store);


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

const aboutBook = books.filter( (book) => {
    return book.genre === 'Science' && book.publish > 2010
})

// console.log(aboutBook);

// reduce
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myTotal = myNums.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} , currVal: ${currVal}, myTotal: ${acc+currVal}`);
    
//     return acc + currVal
// }, 0 )

// in arrow function
const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mob dev course",
        price: 5999
    },
    {
        itemName: "java backend",
        price: 14999
    }
]
// accumulator stores the summed up value. We are getting objects from the array
const priceAdd = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(priceAdd);

