import React from 'react'
import NewTask from './NewTask'

export default function Tasks({tasks,onAdd, onDelete}) {
  return (
    <section>
        <h2 className='text-xl font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTask onAdd={onAdd} />
        {
            tasks.length === 0 && (
                <p className='text-stone-800 my-4'>This project doesn't have any tasks yet.</p>
            )
        }
        {
            tasks.length > 0 && 
            <ul className='mt-8'>
                {
                    tasks.map((task) => 
                    <li key={task.id} className='flex items-center justify-between mb-4 p-4 rounded-md bg-stone-100'>
                        {task.text}
                        <button onClick={() => onDelete(task.id)} className='text-stone-700 hover:text-red-500'>Clear</button>
                    </li>)
                }
            </ul>
        }
        <ul>

        </ul>
    </section>
  )
}
