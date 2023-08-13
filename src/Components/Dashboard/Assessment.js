import { Avatar, AvatarGroup } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Assessment = () => {
    return (
        <div className='w-full md:[45%] lg:w-[46%] xl:w-[30%] flex flex-col justify-center items-center border-2 p-3 rounded-md divide-y-2 divide-dashed'>
            <div className='relative w-full flex flex-row gap-x-2 mb-2'>
                <span className='flex border-2 rounded-[10px] px-[10px] py-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                        <path d="M19.1677 3.49563H15.0796C14.8592 1.49813 13.6597 0 12.142 0H8.91065C8.07833 0 7.29498 0.449438 6.73195 1.29838C6.31579 1.89763 6.04651 2.67166 5.97307 3.49563H1.88495C0.856793 3.49563 0 4.36954 0 5.46817V18.0275C0 19.1011 0.832314 20 1.88495 20H19.1677C20.1958 20 21.0526 19.1261 21.0526 18.0275V5.46817C21.0526 4.36954 20.2203 3.49563 19.1677 3.49563ZM12.1175 9.23845H8.93513C8.20073 9.23845 7.58874 9.88764 7.58874 10.6866V11.4107C3.42717 10.437 1.51775 9.56305 1.22399 9.16355V5.66792C1.22399 5.29338 1.56671 4.99376 1.98286 4.99376H19.0698C19.4859 4.99376 19.8286 5.29338 19.8286 5.66792V9.13858C19.5349 9.53808 17.6255 10.412 13.4639 11.4107V10.6866C13.4639 9.88764 12.8519 9.23845 12.1175 9.23845ZM7.73562 2.24719C7.93146 1.97253 8.34761 1.49813 8.91065 1.49813H12.142C12.9743 1.49813 13.6842 2.47191 13.8556 3.74532H7.19706C7.2705 3.17104 7.46634 2.64669 7.73562 2.24719ZM19.1922 18.7266H1.86047C1.51775 18.7266 1.22399 18.427 1.22399 18.0774V10.6117C2.27662 11.161 4.18605 11.8352 7.68666 12.6092C7.90698 14.0574 9.10649 15.1561 10.5753 15.1561C12.0196 15.1561 13.2191 14.0574 13.4149 12.6092C16.9155 11.8352 18.825 11.161 19.8531 10.6117V18.0774C19.8286 18.427 19.5349 18.7266 19.1922 18.7266Z" fill="#6548EE" />
                    </svg>
                </span>
                <div className='flex flex-col'>
                    <p className='text-[14px] md:text-[16px] text-[#1C4980] font-bold'>Math Assessment</p>
                    <div className='flex flex-row justify-center items-center divide-x gap-x-2'>
                        <div>
                            <p className='text-[#1C4980] text-[14px] md:text-[16px] font-bold'>
                                job
                            </p>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-x-2 px-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                    <path d="M7.99545 9.12313L8.85996 8.26594L6.60572 6.0117V2.84606H5.39428V6.52034L7.99545 9.12313ZM6 12.5C5.1708 12.5 4.39283 12.3438 3.66609 12.0315C2.93935 11.7192 2.30282 11.2899 1.75648 10.7435C1.21014 10.1972 0.780811 9.5599 0.468486 8.83167C0.156162 8.10344 0 7.32388 0 6.49299C0 5.6621 0.156162 4.88232 0.468486 4.15367C0.780811 3.42501 1.21014 2.79007 1.75648 2.24883C2.30282 1.70759 2.9401 1.28081 3.66833 0.968486C4.39656 0.656162 5.17612 0.5 6.00701 0.5C6.8379 0.5 7.61771 0.657386 8.34643 0.972158C9.07514 1.28693 9.70903 1.71412 10.2481 2.25373C10.7871 2.79333 11.2139 3.42787 11.5283 4.15734C11.8428 4.88681 12 5.6677 12 6.5C12 7.3292 11.8438 8.10717 11.5315 8.83391C11.2192 9.56065 10.7924 10.1972 10.2512 10.7435C9.70993 11.2899 9.07432 11.7192 8.34433 12.0315C7.61434 12.3438 6.8329 12.5 6 12.5ZM6.00727 11.23C7.31584 11.23 8.43011 10.7682 9.35006 9.8446C10.27 8.92099 10.73 7.80369 10.73 6.4927C10.73 5.18171 10.27 4.06684 9.35009 3.1481C8.43016 2.22937 7.3159 1.77 6.00733 1.77C4.69876 1.77 3.58206 2.22937 2.65723 3.1481C1.73241 4.06684 1.27 5.18171 1.27 6.4927C1.27 7.80369 1.7324 8.92099 2.6572 9.8446C3.582 10.7682 4.69869 11.23 6.00727 11.23Z" fill="#8DA4BF" />
                                </svg>
                            </span>
                            <p className='text-[#1C4980] text-[14px] md:text-[16px]'>12 Apr 2002</p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-[1] right-[8px]'>
                    <MoreVertIcon className='text-[#1C4980]'/>
                </div>
            </div>
            <div className='w-full flex flex-row mt-2 justify-start items-center gap-2'>
                <div className='w-[40%] flex flex-row justify-start items-start gap-x-2'>
                    <div className='flex flex-col'>
                        <p className='text-[12px] md:text-[14px] text-[#1C4980] font-bold'>
                            00
                        </p>
                        <p className='text-[12px] md:text-[14px] text-[#1C4980] font-bold'>
                            Duration
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[12px] md:text-[14px] text-[#1C4980] font-bold'>
                            00
                        </p>
                        <p className='text-[12px] md:text-[14px] text-[#1C4980] font-bold'>
                            Question
                        </p>
                    </div>
                </div>
                <div className='w-[58%] flex flex-row justify-end items-center gap-x-1 xsm:gap-x-2 py-3'>
                    <div className='flex flex-row justify-center items-center px-3 py-1 border-2 rounded-[30px] gap-x-2'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M6.00027 1.28492L4.11465 3.17054L5.05746 4.11335L6.94308 2.22773C7.72089 1.44991 8.99369 1.44991 9.7715 2.22773C10.5493 3.00555 10.5493 4.27834 9.7715 5.05616L7.88589 6.94177L8.82869 7.88458L10.7143 5.99897C12.0154 4.69789 12.0154 2.586 10.7143 1.28492C9.41324 -0.016157 7.30134 -0.0161567 6.00027 1.28492ZM6.94308 7.88458L5.05746 9.7702C4.27964 10.548 3.00685 10.548 2.22903 9.7702C1.45121 8.99238 1.45121 7.71959 2.22903 6.94177L4.11465 5.05616L3.17184 4.11335L1.28622 5.99896C-0.0148547 7.30004 -0.0148547 9.41193 1.28622 10.713C2.5873 12.0141 4.69919 12.0141 6.00027 10.713L7.88589 8.82739L6.94308 7.88458ZM3.64324 7.41318L7.41448 3.64194L8.35729 4.58475L4.58605 8.35599L3.64324 7.41318Z" fill="#1C4980" />
                            </svg>
                        </span>
                        <p className='text-[12px] md:text-[14px] text-[#1C4980] font-bold'>Share</p>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <AvatarGroup max={2}>
                            <Avatar sx={{width:'30px', height:'30px',fontSize:'12px',backgroundColor:'orangered'}} alt="Remy Sharp" />
                            <Avatar sx={{width:'30px', height:'30px',fontSize:'12px',backgroundColor:'green'}} alt="Bemy Sharp" />
                        </AvatarGroup>
                        <p className='text-[12px] md:text-[14px] text-[#1C4980] font-bold'>+333</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assessment