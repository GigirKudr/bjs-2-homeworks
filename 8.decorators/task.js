//Задача № 1

function cachingDecoratorNew(func) {
    let cashe = []
    function wrapper(...args){
        const hash = md5(JSON.stringify(args))
        let objectInCash = cashe.find(item => item.hash === hash)
        if (objectInCash){
            console.log("Из кеша: " + objectInCash.value, cashe)
            return "Из кеша: " + objectInCash.value
        }
        let result = func(...args)
        cashe.push({hash:hash, value:result})
        if (cashe.length > 5){
            cashe.shift()
        }
        console.log("Вычисляем: " + result, cashe)
        return "Вычисляем: " + result

    }
    return wrapper
  
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId
    wrapper.count = 0
    wrapper.allCount = 0

    function wrapper(...args){
        if(timeoutId){
            console.log("Уже есть таймаут", args)
            clearTimeout(timeoutId)
        }

        if(!timeoutId){
            console.log("Первый сигнал", args)
            func.call(this, ...args)
            wrapper.count++
        }
        timeoutId = setTimeout(() => {
            console.log("Задержка больше 2000млсек, сработал таймаут")
            console.log("args", args)
            func.apply(this, args)
            wrapper.count++
        }, delay)
        wrapper.allCount++
    }
    return wrapper
  
}
