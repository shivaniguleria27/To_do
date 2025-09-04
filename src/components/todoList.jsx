import Task from './task';
export default function TaskList(){

    return(
        <>
        <ul className='flex flex-wrap gap-4'>
            <Task description=" practicing yoga"/>
            <Task description=" Coding"/>
        </ul>
        </>
    )
}
