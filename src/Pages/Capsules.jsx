import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'



const Capsules = () => {
     
    const [Capsules, setCapsules]= useState([]);

    useEffect(()=>{

        const fetchCapsules= async()=>{

            const res= await fetch("https://api.spacexdata.com/v3/capsules")
            const data= await res.json()
            setCapsules(data)
        }
            fetchCapsules();
    },[])



  return (
    <>
     <section>
        <h1 className='heading text-center mb-5 p-5'>Capsules</h1>

        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {Capsules.map(({capsule_id, type, status, capsule_serial, original_launch, landings, details, reuse_count})=> (
                <article key={capsule_id} className='articles'>

                    <h2>
                        {type}, <span>{capsule_serial}</span>
                    </h2>
                    <ul>
                        <li>{original_launch} launches</li>
                        <li> {landings} times successfull landings</li>
                        <li> Reuse {reuse_count} times</li>
                        <li><a className='hover:text-blue-500 transition' href={details}>more details</a> </li>
                       {status==="active"? <li className='text-emerald-500'>Active</li>: <li className='text-rose-500'>Retired</li>}
                    </ul>

                </article>
            ))}
        </div>
    </section>
    </>
  )
}

export default Capsules
