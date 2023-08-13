import {  SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const NewAssessment = ({ drawewType = 'bottom' }) => {
    // work for showing that from where you wants to open your drawer
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    // work fro add new skils
    const [selectedSkills, SetValues] = useState([]);
    const handleinput = (e) => {
        let temp = {
            skill: e.target.value
        }
        if (temp.skill !== "" && selectedSkills.findIndex(x => x.skill === temp.skill) === -1) {
            SetValues(selectedSkills => ([...selectedSkills, temp]));
        }
    }
    // its for remove skils from selected skils while adding new assessments
    const RemoveSkill = (skill) => {
        const SkillsAfterDelete = selectedSkills.filter((x) => {
            return x.skill !== skill;
        })
        SetValues(SkillsAfterDelete)
    }
    // work for add new assessments
    const list = (anchor) => (
        <div
            sx={{ width: 'auto'  }}
            role="presentation"
        >
            <div className="w-full flex flex-col divide-y gap-y-3">
                <div className='w-full flex flex-row justify-between items-center p-3'>
                    <p className='text-[14px] text-[#1C4980]'>Sub-Section Details</p>
                    <span className='text-[10px] text-[red]'>please add skills to see skills</span>
                    <span className=' text-[14px] cursor-pointer py-[10px] px-[10px] bg-[#FBEBEA] rounded-[50%]'
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}>
                        <CloseIcon className='text-[#E9407A] h-1 w-1'/>
                    </span>
                </div>
                <div className='w-full flex flex-row justify-between p-3 max-h-[75vh] overflow-scroll'>
                    <form className='w-full flex flex-col gap-y-2'>
                        <div className='w-full flex flex-col gap-y-1'>
                            <span className='text-[14px] text-[#1C4980]'>Name of Assessment</span>
                            <input name='assessment' className='w-full border-2 px-2 py-2 outline-0 rounded-md text-[12px]  ' placeholder='Type here' />
                        </div>
                        <div className='w-full flex flex-col gap-y-1'>
                            <span className='text-[14px] text-[#1C4980]'>Purpose of Test is</span>
                            <select name='test' className='w-full border-2 px-2 py-2 outline-0 rounded-md text-[12px]'>
                                <option className='text-[12px] text-[#8DA4BF]' disabled defaultValue={"fale"}>Select </option>
                                <option value="" className='text-[12px]'>Job</option>
                            </select>
                        </div>
                        <div className='w-full flex flex-col gap-y-1'>
                            <span className='text-[14px] text-[#1C4980]'>Description</span>
                            <select name='description' className='w-full border-2 px-2 py-2 outline-0 rounded-md text-[12px] '>
                                <option value="" className='text-[12px] text-[#8DA4BF]' disabled defaultValue={"fale"}>Select </option>
                                <option value='job' className='text-[12px]'>Job</option>
                            </select>
                        </div>
                        <div className='w-full flex flex-col gap-y-1'>
                            <span className='text-[14px] text-[#1C4980]'>Skills</span>
                            <div className='w-full flex justify-center items-center flex-col border-2 divide-y-2 gap-1 rounded-md py-1'>
                                {selectedSkills.length !== 0 ? (
                                    <div className='w-full flex flex-row justify-start gap-2 flex-wrap p-1'>
                                        {
                                            selectedSkills.map((skill, id) => {
                                                return (
                                                    <div key={id} className='w-auto flex flex-row justify-center items-center gap-x-2 border-2 px-2 py-1 rounded-[20px] bg-[#DDEDFF]'>
                                                        <p className='text-[12px] px-2'>{skill.skill}</p>
                                                        <span className='text-[12px] p-[3px] rounded-[50%] bg-[#fff] text-[#1C4980]' onClick={() => { RemoveSkill(skill.skill) }}>
                                                        <CloseIcon size='small' className='w-[10px] h-[10px] text-[#E9407A]'/>
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>) : null
                                }
                                <input className='w-[100%] px-2 py-1 rounded-b-md outline-0 text-[12px]'
                                    onBlur={(e) => { handleinput(e); }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleinput(e);
                                        }
                                    }}
                                    placeholder='Type here' />
                            </div>

                        </div>
                        <div className='w-full flex flex-col gap-y-1'>
                            <span className='text-[14px] text-[#1C4980]'>Duration of assessment</span>
                            <input name='duration' className='w-full border-2 px-2 py-2 outline-0 rounded-md text-[12px]  ' placeholder='HH : MM : SS' />
                        </div>
                        <div className='w-full flex flex-col gap-y-1 mt-2'>
                            <button type='button' className='w-full bg-[#0073E6] border-2 px-2 py-2 outline-0 rounded-md text-[12px] text-[#fff]'>Next</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
    return (
        <>
            <div className='w-full xl:w-[30%] flex flex-col justify-center items-center my-3 md:my-0 bg-[#F6F8FA]'>
                <div className='w-full flex flex-col border-2 rounded-[10px] border-dashed p-5 xl:p-[1rem] justify-center items-center'>
                    <span className='p-2 bottom-1 bg-[#fff] rounded-[50%] cursor-pointer' onClick={toggleDrawer(drawewType, true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                            <g clip-path="url(#clip0_0_1337)">
                                <path d="M22.8333 16.1905H15.6904V23.3334H13.3095V16.1905H6.16663V13.8095H13.3095V6.66669H15.6904V13.8095H22.8333V16.1905Z" fill="#0073E6" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_1337">
                                    <rect width="28.5714" height="28.5714" fill="white" transform="translate(0.214233 0.714294)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <p className='w-full text-center text-[14px] md:text-[16px] text-[#1C4980]'>New Assessment</p>
                    <p className='text-[14px] md:text-[16px] text-[#1C4980] text-center'>
                        From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
                    </p>
                </div>
                {/* this is used for open drawer by swap from dowm */}
                <SwipeableDrawer
                    anchor={drawewType}
                    open={state[drawewType]}
                    onClose={toggleDrawer(drawewType, false)}
                    onOpen={toggleDrawer(drawewType, true)}
                >
                    {list(drawewType)}
                </SwipeableDrawer>
            </div>
        </>
    )
}

export default NewAssessment