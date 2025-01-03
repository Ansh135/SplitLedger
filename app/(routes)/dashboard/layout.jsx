"use client"

import React ,{useEffect} from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '@/utils/dbConfig'
import { budgets } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'


function DashboardLayout({children}) {

  // to check if user has created atleast one budget or not 

  const {user} = useUser();
  const router = useRouter()

  const checkUserBudget = async () => {
    const res = await db.select().
    from(budgets).
    where(eq(budgets.createdBy,user?.primaryEmailAddress.emailAddress))

    console.log("res:", res);

    if(res?.length==0) {
      router.replace('/dashboard/budgets')
    }
  }


  useEffect(()=> {
    user&&checkUserBudget();
  },[user])

 
  return (
    <div className='flex-col'>
        <div className='fixed md:w-64 hidden md:block'>
            <SideNav></SideNav>
        </div>
        <div className='md:ml-64 '>
            <DashboardHeader/>
            {children} 
        </div>
    </div>
  )
}

export default DashboardLayout
