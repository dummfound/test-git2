
const arrayForContainer = [
    {
        id: 1655814912898,
        text : 'Apple'
    },
    {
        id: 1655814912899,
        text : 'Orange'
    },
    {
        id: 1655814912900,
        text : 'Banana'
    },
];

const arrayEdit = arrayForContainer.find((item) => {
    return item.id > 10000000
});

const addContainerOnMaster = (id, text) => {

        const mainContainer = document.createElement('div')
        mainContainer.classList.add('Main-Container')

        const itemContainer = document.createElement('div')
        itemContainer.dataset.add('data_item')


};