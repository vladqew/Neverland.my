const PeopleOf8Class = [
    { name: "George Washington", born: 1732, died: 1799 },
    { name: "John Adams", born: 1735, died: 1826 },
    { name: "Thomas Jefferson", born: 1743, died: 1826 },
    { name: "James Madison", born: 1751, died: 1836 },
    { name: "James Monroe", born: 1758, died: 1831 },
    { name: "John Quincy Adams", born: 1767, died: 1848 },
    { name: "Andrew Jackson", born: 1767, died: 1845 },
    { name: "Martin Van Buren", born: 1782, died: 1862 },
    { name: "William Henry Harrison", born: 1773, died: 1841 },
    { name: "John Tyler", born: 1790, died: 1862 },
    { name: "James K. Polk", born: 1795, died: 1849 },
    { name: "Zachary Taylor", born: 1784, died: 1850 },
    { name: "Millard Fillmore", born: 1800, died: 1874 },
    { name: "Franklin Pierce", born: 1804, died: 1869 },
    { name: "James Buchanan", born: 1791, died: 1868 },
    { name: "Abraham Lincoln", born: 1809, died: 1865 },
    { name: "Andrew Johnson", born: 1808, died: 1875 },
    { name: "Ulysses S. Grant", born: 1822, died: 1885 },
    { name: "Rutherford B. Hayes", born: 1822, died: 1893 },
    { name: "James A. Garfield", born: 1831, died: 1881 },
  ];

const writers = [
    {"name": "William", "LastName": "Shakespeare"},
    {"name": "Jane", "LastName": "Austen"},
    {"name": "Mark", "LastName": "Twain"},
    {"name": "Virginia", "LastName": "Woolf"},
    {"name": "Leo", "LastName": "Tolstoy"},
    {"name": "Fyodor", "LastName": "Dostoevsky"},
    {"name": "Ernest", "LastName": "Hemingway"},
    {"name": "Gabriel", "LastName": "García Márquez"},
    {"name": "Toni", "LastName": "Morrison"},
    {"name": "J.K.", "LastName": "Rowling"}
]
const born = PeopleOf8Class.filter(People => {
    return (People.born >= 1999 && People.born <= 2010)
})

const NameAge = PeopleOf8Class.map(People =>{
    return `${People.name} , ${People.born}`
})

const YoungerToOlder = PeopleOf8Class.sort((a, b) => {
    if (a.born > b.born){
        return 1;
    } return -1;
})

const TotalLivedAge = PeopleOf8Class.reduce((total, People) => {
    return total + (People.died- People.born) ;
}, 0,)

const Blatu = PeopleOf8Class.sort((a,b) => {
    if (a.died - a.born > b.died - b.born) {
        return -1;
    } else return 1
})

//const table = document.querySelector('.plainrowheaders')
//const links = Array.from(table.querySelector('tbody').querySelectorAll('a'))

//const names = links.map(link => {
   //  return link.textContent
//}).filter(city => {
 //    return city.includes('San')
//})



const Alphabet = writers.sort((a,b) => {
    if (a.name > b.name) {
        return 1;
    } else return -1
})
console.table(Alphabet)





