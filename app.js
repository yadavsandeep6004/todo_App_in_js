
const form = document.getElementById('form')
const input = document.getElementById('input');
const date = document.getElementById('date');
const ul = document.getElementById('ul')

let list = []

// console.log(ul.getAttribute('dataId'),'+')

ul.addEventListener('click', (e) => {

    let index = e.target.getAttribute('dalId')
    console.log('===',index)
    if(index){
       list = list.filter((item, i) => i !== +index)
       console.log(list)
        showList()
    }
   

})


const showList = () => {
    let li = ''
    let arr = list.map((data, index) => `<li> ${data.item}
    <span>${data.date} </span>       
    <span class="material-symbols-outlined btn"  dalId=${index}>
    delete</span> </li>`)
    arr.forEach(element => {
        li += element
    });

    ul.innerHTML = li;
}





const getData = () => {

    const inputValue = input.value;
    const d = date.value;
   

    if (!inputValue) {
        alert('input feild is requred...')
        return;
    }
    if (!d) {
        alert('input feild is requred...')
        return;
    }

    list.push({item:inputValue,date:d})
    input.value = ''
    date.value=''
    showList()
}





form.addEventListener('submit', (e) => {

    e.preventDefault()
    getData()

})