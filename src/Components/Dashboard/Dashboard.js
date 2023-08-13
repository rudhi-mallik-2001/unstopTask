import React from 'react'
import MobileDashboard from './MobileDashboard'
import SideNav from '../../Layouts/SideNav'
import MyAssessment from './MyAssessment'
import Header from '../../Layouts/Header'
import AssessmentView from './AssessmentView'

const Dashboard = () => {
  return (
    <>
      {/* mobile view */}
      <div className='w-full md:hidden'>
        <MobileDashboard />
      </div>
      {/* desktop View */}
      <div className='hidden md:flex w-full flex-row justify-start items-start  bg-[#e6dfdf]'>
        {/* desktop side bar */}
        <div>
          <SideNav />
        </div>
        <div className='h-[100vh] overflow-scroll flex gap-5 flex-col bg-[#fff] p-2 mx-2'>
          {/* desktop header */}
          <div className='w-full fixed top-0 z-[1000] bg-[#fff]'>
            <Header />
          </div>
          {/* this is for view the details */}
          <div className='mt-[80px]'>
            <p className='text-[18px] text-[#1C4980] my-3 ml-[25px] font-bold'>Assessments Overview</p>
            <AssessmentView />
          </div>
          {/* for adding new assessment */}
          <div>
            <p className='text-[18px] text-[#1C4980] my-3 ml-[25px] font-bold'>My Assessment</p>
            <MyAssessment />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard