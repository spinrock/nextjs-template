import {Todo} from '../interface' 
import reducer, {addTodo, toggleTodo} from '../reducer'

// Sample DataSet
const todo00: Todo = {
    id:"0",
    title: 'test',
    description: 'this is test description',
    completed: false,
    parentTaskId: null,
    childrenTaskIds: []
}

const todo01: Todo = {
    id:"1",
    title: 'test1',
    description: 'this is test description1',
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

})
