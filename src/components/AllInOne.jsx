import { CheckIcon } from '@heroicons/react/outline';
import { React } from 'react'

function AllInOne() {
    return (
        <div className='w-full my-32'>
            <div>
                <h2>All-In-One Platform</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores corporis dolore neque, excepturi ratione at non fugit maxime, placeat aperiam nihil sequi quisquam molestias quae. Eligendi sapiente ipsam soluta a.</p>
            </div>
            <div>
                <div>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                        
                    </div>
                    <div>
                        <h3>Notifications</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolore ullam a quasi! Ad, aut.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AllInOne;