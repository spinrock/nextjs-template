import {Todo} from '../interface' 
import reducer, {addTodo, toggleTodo, deleteTodo} from '../reducer'

// Sample DataSet
const todo00: Todo = {
    id:'0',
    title: 'test',
    description: 'this is test description',
    completed: false,
    parentTaskId: null,
    childrenTaskIds: []
}

const todo01: Todo = {
    id:'1',
    title: 'test1',
    description: 'this is test description1',
    completed: false,
    parentTaskId: null,
    childrenTaskIds: []
}


const todo02: Todo = {
    id:'2',
    title: 'test2',
    description: 'this is test description2',
    completed: false,
    parentTaskId: null,
    childrenTaskIds: []
}


describe('addTodo Test', () => {

    it('Add Todo in null Todos[]', () => {   
        const actual:Todo[] = []  
        const expected:Todo[] = [todo00]

        expect(reducer(actual, {
            type: addTodo.type,
            payload: {
                id: todo00.id,
                title: todo00.title,
                description: todo00.description
            }
        })).toEqual(expected)
    })

    it('Add Todo in one Todos[]',() => {
        const actual:Todo[] = [todo00]
        const expected:Todo[] = [todo00, todo01]

        expect(reducer(actual, {
            type: addTodo.type,
            payload: {
                id: todo01.id,
                title: todo01.title,
                description: todo01.description
            }
        })).toEqual(expected)

    })
})

describe('toggleTodo Test', () => {
    it ('Selected Todo is inCompleted', () => {
        const actual:Todo[] = [todo00, todo01]
        const expected:Todo[] = [todo00, {...todo01, completed:true}]

        expect(reducer(actual, {
            type: toggleTodo.type, 
            payload: {
                id: todo01.id
            }
        })).toEqual(expected)
    })

    it ('Selected Todo is Completed', () => {
        const actual:Todo[] = [{...todo00, completed:true}, todo01]
        const expected:Todo[] = [todo00, todo01]

        expect(reducer(actual, {
            type: toggleTodo.type, 
            payload: {
                id: todo00.id
            }
        })).toEqual(expected)
    })

    it ('Selected Todo is Not Found', () => {
        const actual:Todo[] = [todo00, todo01]
        const expected:Todo[] = [todo00, todo01]

        expect(reducer(actual, {
            type: toggleTodo.type, 
            payload: {
                id: todo02.id
            }
        })).toEqual(expected)
    })
})

describe('deleteTodo Test', () => {
    const threeTodos:Todo[] = [todo00, todo01, todo02]

    it('Delete First Todo in Theree Todos', () => {
        const actual: Todo[] = [...threeTodos]
        const expected: Todo[] = [todo01, todo02]

        expect(reducer(actual, {
            type: deleteTodo.type,
            payload: {
                id: todo00.id
            }
        })).toEqual(expected)
    })

    it('Delete Second Todo in Three Todos', () => {
        const actual: Todo[] = [...threeTodos]
        const expected: Todo[] = [todo00, todo02]

        expect(reducer(actual, {
            type: deleteTodo.type,
            payload: {
                id: todo01.id
            }
        })).toEqual(expected)
    })

    it('Delete Last Todo in Three Todos', () => {
        const actual: Todo[] = [...threeTodos]
        const expected: Todo[] = [todo00, todo01]

        expect(reducer(actual, {
            type: deleteTodo.type,
            payload: {
                id: todo02.id
            }
        })).toEqual(expected)
    })

    it('Delete Final Todo in Todos', () => {
        const actual: Todo[] = [todo00]
        const expected: Todo[] = []

        expect(reducer(actual, {
            type: deleteTodo.type,
            payload: {
                id: todo00.id
            }
        })).toEqual(expected)
    })

    it('Delete Todo is Not Founde', () => {
        const actual:Todo[] = [todo00, todo01]
        const expected:Todo[] = [todo00, todo01]

        expect(reducer(actual, {
            type: deleteTodo.type, 
            payload: {
                id: todo02.id
            }
        })).toEqual(expected)
    })
})