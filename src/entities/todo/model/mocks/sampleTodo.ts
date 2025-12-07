import type { Todo } from '@/entities/todo/model'

export const sampleTodoList: Todo[] = [
  {
    id: '0',
    title: 'TechStack',
    description: 'describe below TechStack',
    completed: false,
    parentTodoId: null,
    childrenTodoIds: ['1', '2', '3'],
  },
  {
    id: '1',
    title: 'Next.js',
    description: 'React Framework',
    completed: false,
    parentTodoId: '0',
    childrenTodoIds: [],
  },
  {
    id: '2',
    title: 'Redux Toolkit',
    description: 'Statement Management',
    completed: false,
    parentTodoId: '0',
    childrenTodoIds: [],
  },
  {
    id: '3',
    title: 'Material-UI',
    description: 'UI Framework',
    completed: false,
    parentTodoId: '0',
    childrenTodoIds: [],
  },
]
