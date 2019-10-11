import { DO_SOME_THING } from './types'

export const doSomeThing = () =>({ type: DO_SOME_THING, data: "this is data" })

export const changeData = user => ({type: CHANGE_DATA, user})