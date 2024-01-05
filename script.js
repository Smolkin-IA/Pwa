document.addEventListener('DOMContentLoaded',function(){
    const height_input = document.getElementById('height')
    const weight_input = document.getElementById('weight')
    const output_input = document.getElementById('output')
    const btn = document.getElementById('btn')

    btn.addEventListener('click',function(){
        let h = (+height_input.value)/100
        let w = +weight_input.value
        
        if (height_input.value === '' || weight_input.value === '') {
            alert('Пожалуйста, введите значения в оба поля')
            return
        }
        if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
            alert('Пожалуйста, введите корректные значения')
            return
        }
    
        let imt = w/(h**2)
        output_input.value = imt.toFixed(2)
    })
    
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registred',registration)
            })
            .catch(error => {
                console.log('SW failed',error)
            })
    }
})

