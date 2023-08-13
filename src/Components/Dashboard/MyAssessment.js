import React from 'react'
import { Collapse } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import LanguageIcon from '@mui/icons-material/Language';
import NewAssessment from './NewAssessment';
import Assessment from './Assessment';


const MyAssessment = () => {
    // work for expanding filter 
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="relative w-[100%] flex flex-col mt-[130px] md:mt-0 ">
                {/* this division is not for desktop its for mobile view */}
                <div className='w-full flex flex-col bg-white md:hidden'>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <div className='w-[100%] xsm:w-[95%] flex-col border-2 rounded-[20px] p-0 divide-y m-auto'>
                            <div className='w-full flex flex-row justify-center items-center divide-x'>
                                <div className='w-[50%] flex flex-col gap-y-2 p-2'>
                                    <p className='text-[14px] text-[#6548EE]'>Total Purpose</p>
                                    <div className='w-full flex flex-row gap-x-2'>
                                        <span className='border-2 rounded-[10px] px-[12px] py-[10px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                <path d="M14.8333 2.16667V5.5H2.33329V2.16667H14.8333ZM14.8333 10.5V13.8333H2.33329V10.5H14.8333ZM15.6666 0.5H1.49996C1.04163 0.5 0.666626 0.875 0.666626 1.33333V6.33333C0.666626 6.79167 1.04163 7.16667 1.49996 7.16667H15.6666C16.125 7.16667 16.5 6.79167 16.5 6.33333V1.33333C16.5 0.875 16.125 0.5 15.6666 0.5ZM15.6666 8.83333H1.49996C1.04163 8.83333 0.666626 9.20833 0.666626 9.66667V14.6667C0.666626 15.125 1.04163 15.5 1.49996 15.5H15.6666C16.125 15.5 16.5 15.125 16.5 14.6667V9.66667C16.5 9.20833 16.125 8.83333 15.6666 8.83333Z" fill="#6548EE" />
                                            </svg>
                                        </span>
                                        <p className='text-[20px]'>34</p>
                                    </div>
                                </div>
                                <div className='w-[48%] flex flex-col gap-y-2 p-2'>
                                    <p className='text-[14px] text-[#6548EE]'>Total Assessment</p>
                                    <div className='w-full flex flex-row gap-x-2'>
                                        <span className='border-2 rounded-[10px] px-[10px] py-[12px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 19 10" fill="none">
                                                <path d="M8.5921 9.33619H5.3335C4.13386 9.33619 3.11128 8.91346 2.26575 8.068C1.42021 7.22254 0.997437 6.20005 0.997437 5.00052C0.997437 3.80098 1.42021 2.77835 2.26575 1.93265C3.11128 1.08692 4.13386 0.664062 5.3335 0.664062H8.5921V2.55992H5.33562C4.65719 2.55992 4.08053 2.79716 3.60565 3.27165C3.13074 3.74613 2.89329 4.32229 2.89329 5.00012C2.89329 5.67796 3.13074 6.25412 3.60565 6.7286C4.08053 7.20309 4.65719 7.44033 5.33562 7.44033H8.5921V9.33619ZM6.05225 5.87331V4.12694H12.9481V5.87331H6.05225ZM10.4082 9.33619V7.44033H13.6647C14.3431 7.44033 14.9198 7.20309 15.3947 6.7286C15.8696 6.25412 16.107 5.67796 16.107 5.00012C16.107 4.32229 15.8696 3.74613 15.3947 3.27165C14.9198 2.79716 14.3431 2.55992 13.6647 2.55992H10.4082V0.664062H13.6668C14.8665 0.664062 15.8891 1.08679 16.7346 1.93225C17.5801 2.77771 18.0029 3.8002 18.0029 4.99973C18.0029 6.19927 17.5801 7.2219 16.7346 8.0676C15.8891 8.91333 14.8665 9.33619 13.6668 9.33619H10.4082Z" fill="#0073E6" />
                                            </svg>
                                        </span>
                                        <p className='text-[20px]'>34</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center items-start p-2'>
                                <p className='text-[14px] text-[#6548EE]'>Candidates</p>
                                <div className='w-full flex flex-row gap-y-2 p-1 divide-x'>
                                    <div className='w-[50%] flex flex-row justify-start items-center gap-x-2 '>
                                        <span className='flex border-2 rounded-[10px] px-[12px] py-[12px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                                <path d="M0.678711 13.9196V11.4069C0.678711 10.9038 0.808864 10.4414 1.06917 10.0197C1.32949 9.59793 1.67533 9.27608 2.10669 9.05413C2.97777 8.62025 3.86433 8.29401 4.76636 8.07542C5.6684 7.85682 6.58453 7.74752 7.51475 7.74752C8.45135 7.74752 9.37074 7.85599 10.2729 8.07292C11.1751 8.28986 12.0584 8.61527 12.9228 9.04915C13.3542 9.27063 13.7 9.59178 13.9604 10.0126C14.2207 10.4334 14.3508 10.8981 14.3508 11.4067V13.9196H0.678711ZM16.0922 13.9196V11.2552C16.0922 10.6308 15.9237 10.0291 15.5868 9.44996C15.2498 8.87086 14.7639 8.35501 14.1289 7.90242C14.8007 7.99239 15.4358 8.13558 16.0342 8.33198C16.6327 8.52838 17.1961 8.76744 17.7245 9.04915C18.2377 9.32692 18.6321 9.65473 18.9076 10.0326C19.1832 10.4104 19.3209 10.8229 19.3209 11.2702V13.9196H16.0922ZM7.51475 6.91419C6.57152 6.91419 5.76604 6.58033 5.09832 5.9126C4.43059 5.24487 4.09673 4.43938 4.09673 3.49615C4.09673 2.55291 4.43059 1.74743 5.09832 1.07971C5.76604 0.411986 6.57152 0.078125 7.51475 0.078125C8.45799 0.078125 9.26348 0.411986 9.93121 1.07971C10.5989 1.74743 10.9328 2.55291 10.9328 3.49615C10.9328 4.43938 10.5989 5.24487 9.93121 5.9126C9.26348 6.58033 8.45799 6.91419 7.51475 6.91419ZM16.0922 3.4961C16.0922 4.43605 15.7576 5.24072 15.0884 5.9101C14.4192 6.57949 13.6147 6.91419 12.675 6.91419C12.5184 6.91419 12.3236 6.89599 12.0909 6.8596C11.8581 6.82323 11.6586 6.78088 11.4926 6.73256C11.8742 6.28148 12.1666 5.77871 12.3696 5.22425C12.5727 4.66979 12.6742 4.09401 12.6742 3.4969C12.6742 2.89979 12.5727 2.32375 12.3696 1.76879C12.1666 1.21385 11.8742 0.710826 11.4926 0.259729C11.6903 0.186965 11.8864 0.138507 12.0809 0.114354C12.2753 0.0902017 12.4723 0.078125 12.6718 0.078125C13.6124 0.078125 14.4176 0.412805 15.0875 1.08217C15.7573 1.75151 16.0922 2.55616 16.0922 3.4961ZM2.57454 12.0238H12.455V11.4319C12.455 11.2823 12.4168 11.1463 12.3404 11.024C12.264 10.9016 12.1633 10.8064 12.0383 10.7385C11.3082 10.3767 10.5662 10.1038 9.81232 9.91963C9.05838 9.73545 8.29253 9.64335 7.51475 9.64335C6.74363 9.64335 5.97778 9.73545 5.21721 9.91963C4.45664 10.1038 3.71464 10.3767 2.99121 10.7385C2.86621 10.8064 2.76552 10.9016 2.68913 11.024C2.61274 11.1463 2.57454 11.2823 2.57454 11.4319V12.0238ZM7.51396 5.09306C7.95291 5.09306 8.32893 4.93678 8.64202 4.62421C8.95514 4.31164 9.11169 3.93588 9.11169 3.49694C9.11169 3.05801 8.9554 2.68199 8.64282 2.3689C8.33025 2.05578 7.95449 1.89923 7.51554 1.89923C7.07661 1.89923 6.7006 2.05552 6.3875 2.3681C6.07439 2.68067 5.91784 3.05642 5.91784 3.49535C5.91784 3.9343 6.07413 4.31032 6.38671 4.62342C6.69928 4.93651 7.07503 5.09306 7.51396 5.09306Z" fill="#6548EE" />
                                            </svg>
                                        </span>
                                        <div className='flex flex-col'>
                                            <p className='text-[16px]'>11,145
                                                <span className='text-[12px] text-green-600'>+84</span>
                                            </p>
                                            <p className='text-[12px] text-[#a6a4a4]'>Total Candidates</p>
                                        </div>
                                    </div>
                                    <div className='w-[48%] flex flex-col gap-y-2 p-2'>
                                        <div className='w-full flex flex-col gap-x-2'>
                                            <p className='text-[16px]'>1,14 <span className='text-[12px] text-green-600'>+84</span></p>
                                            <p className='text-[12px] text-[#a6a4a4]'>who atteemped</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center items-start p-2'>
                                <p className='text-[14px] text-[#6548EE]'>Candidates</p>
                                <div className='w-full flex flex-row gap-y-2 p-[5px] divide-x'>
                                    <div className='w-full flex flex-row justify-start items-center gap-x-2 '>
                                        <span className='flex border-2 rounded-[10px] px-[5px] py-[5px]'>
                                            <LanguageIcon className='text-[#6548EE]' />
                                        </span>
                                        <div className='flex flex-col'>
                                            <p className='text-[16px]'>11,145
                                                <span className='text-[10px] text-green-600'>+84</span>
                                            </p>
                                            <p className='text-[12px] text-[#a6a4a4]'>E-mail</p>
                                        </div>
                                        <div className='flex flex-col pl-1 border-l-2'>
                                            <p className='text-[16px]'>11,145
                                                <span className='text-[10px] text-green-600'>+84</span>
                                            </p>
                                            <p className='text-[12px] text-[#a6a4a4]'>Social Share</p>
                                        </div>
                                        <div className='flex flex-col pl-1 border-l-2'>
                                            <p className='text-[16px]'>11,145
                                                <span className='text-[10px] text-green-600'>+84</span>
                                            </p>
                                            <p className='text-[12px] text-[#a6a4a4]'>Unique Link</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Collapse>
                    <div className='w-full flex flex-row justify-between items-center pl-2'>
                        <p className='text-[16px] text-[#1C4980]'>
                            Assessment
                        </p>
                        <div className='flex flex-row justify-center items-center gap-x-4'>
                            <SearchIcon className='text-[#1C4980] cursor-pointer' />
                            <FilterAltIcon className='text-[#1C4980] cursor-pointer' />
                            <div
                                expand={expanded.toString()}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <BarChartIcon className='text-[#1C4980] cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:flex-row flex-wrap gap-y-3 md:gap-3 xl:gap-5'>
                    {/* new assessment is for create a new assessment */}
                    <NewAssessment />
                    {/* it is for assessment division */}
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                    <Assessment />
                </div>

            </div>
        </>
    )
}

export default MyAssessment