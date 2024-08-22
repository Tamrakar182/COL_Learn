import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FiClock } from "react-icons/fi";
import clsx from 'clsx';
import { ModuleType } from '@/types/module';
import { TiTick } from "react-icons/ti";

interface Props {
     item: ModuleType;
}

const ModuleItem = ({ item }: Props) => {
     const [isOpen, setIsOpen] = useState(false);

     const handleToggle = () => {
          setIsOpen(!isOpen);
     };

     return (
          <li className='border mb-2'>
               <button
                    className="relative hover:bg-[#d1d0d0] flex p-4 gap-2 items-center w-full text-base font-semibold text-left md:text-lg border-base-content/10"
                    aria-expanded={isOpen}
                    onClick={handleToggle}
               >
                    <div className='w-full  items-center'>
                         <div className="flex flex-row gap-2">
                              <p className='text-lg'>{item.name}</p>
                              {item.completed && <TiTick size={18} />}
                         </div>
                         <div className='flex flex-row items-center gap-2'>
                              <p className='text-[14px] text-[#484848] font-light'>{item.time}</p> •
                              <p className='text-[14px] text-[#484848] font-light'>Module</p> •
                              <p className='text-[14px] text-[#484848] font-light'>{item.units.length} units</p>
                         </div>
                    </div>
                    {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
               </button>
               <div className={clsx("transition-all duration-300 max-h-0 ease-in-out px-3 overflow-hidden",
                    { 'max-h-[1000px]': isOpen }
               )}>
                    <div className="flex flex-col gap-2">
                         {item.units.map(unit => (
                              <div key={unit.id} className="border-b px-4 py-4 flex flex-col gap-2">
                                   <p className="text-base font-medium w-fit underline-animation cursor-pointer">
                                        {unit.title}
                                   </p>
                                   <div className="flex flex-row items-center gap-2">
                                        <FiClock />
                                        <p className="text-sm text-[#484848]">{unit.time}</p>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </li>
     );
};

const CourseModules = ({ modules }: { modules: ModuleType[] }) => {
     return (
          <div>
               <h1 className='text-3xl font-bold pb-2'>Modules Available:</h1>
               <ul className="basis-1/2">
                    {modules.map((item, index) => (
                         <ModuleItem key={index} item={item} />
                    ))}
               </ul>
          </div>
     );
};

export default CourseModules;
