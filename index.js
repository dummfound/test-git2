const str = 'My name is Andrey';
const newStr = str.toLocaleLowerCase().slice(0,1) + str.toLocaleUpperCase().slice(1, str.length);
console.log(newStr)
console.log(newStr)
console.log(newStr)

const arrayForContainer = [
    {
        id: Date.now(),
        text : 'none'
    },
    {
        id: Date.now(),
        text : 'none'
    },
    {
        id: Date.now(),
        text : 'none'
    },
];

const addContainerOnMaster = (id, text) => {

        const mainContainer = document.createElement('div')
        mainContainer.classList.add('Main-Container')

        const itemContainer = document.createElement('div')
        itemContainer.dataset.add('data_item')


};