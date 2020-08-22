let inputArray = [118, 125, 51, 75, 149, 180, 140, 61, 43, 45, 39, 58, 200, 26, 54, 21, 18, 80, 41, 19]
let length = inputArray.length
let result = new Array()
let flag = false


window.onload = () => {
    createBar(inputArray)
    let bubbleBtn = document.getElementById('bubble_sort')
    let selectionBtn = document.getElementById('selection_sort')
    let mergeBtn = document.getElementById('merge_sort')
    let quickBtn = document.getElementById('quick_sort')
    bubbleBtn.addEventListener('click', () => {
        bubbleSort(inputArray)
    })
    selectionBtn.addEventListener('click', ()=>{
        selectionSort(inputArray)
    })
}


const createBar = (array) => {
    let barHolder = document.getElementById('show_bars')
    barHolder.innerHTML = ""
    for(let i = 0; i < array.length; i++){
        barHolder.innerHTML += `
            <div class="bar_color mb-2" style='height:${array[i]}px'>${array[i]}</div>
        `
    }
}



const bubbleSort = (array) => {
    let timeInput = document.getElementById('time_input')
    let delay = timeInput.value || 50
    let length = array.length
    for (let i = 0; i < length - 1; i++){
        for (let j = 0; j < length - i - 1; j++){
            result.push([...array])
            if (array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    endResult(result, 0, createBar, delay)
}



const selectionSort = (array) => {
    let length = array.length
    let timeInput = document.getElementById('time_input')
    let delay = timeInput.value || 50
    for (let i = 0; i < length-1; i++){
        let min = i
        for(let j = i + 1; j < length; j++){
            result.push([...array])
            if(array[j] < array[min]){
                min = j
            }
        }
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
    }
    endResult(result, 0, createBar, delay)
}



function endResult(arr, i, callback, delay){
    i++
    setTimeout(function(){
        if(i !== arr.length){
            callback(arr[i])
            endResult(arr, i, callback,delay);
        }
        else{
            return
        }
    }, delay)
}
