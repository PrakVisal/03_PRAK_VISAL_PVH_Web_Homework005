import CardThumbnail from '@/components/cardThumbnail'
import DashboardSidebar from '@/components/dashboard-sidebar'
import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <>
    <div className="grid grid-cols-12 h-screen">
            {/* Sidebar */}
        <div className='col-span-2'>
        <DashboardSidebar/>
        </div>
            {/*Main Content*/}
            <div className="col-span-10">
                {children}
            </div>
    </div>
    </>
  )
}
