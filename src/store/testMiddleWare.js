const  testMiddleWare = store => next => action => {
    console.log("store")
    console.log(store)
    console.log("next")
    console.log(next)
    console.log("action")
    console.log(action)
    // const result = next({type:"some_thing",data:"this data was change"})
    // console.log(result)
    return next(action)
}

export default testMiddleWare