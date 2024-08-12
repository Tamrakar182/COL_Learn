import { Link } from 'react-router-dom';
import { useState } from 'react';
import Container from '@/components/common/container';
// import reviews from '../../../data/courseDetails/reviews';
// import features from '../../../data/courseDetails/features';
// import ratings from '../../../data/courseDetails/ratings';
import Mock from '@/assets/mock';

const LearninsideDetails = () => {
     const [showAll, setShowAll] = useState(false);

     const handleToggle = () => {
          setShowAll(!showAll);
     };

     // const reviewsToShow = showAll ? reviews : reviews.slice(0, 2);

     return (
          <Container>
               <div className="rounded-lg flex flex-col gap-10">
                    <header className="border-b pb-4 mb-8">
                         <div className="min-h-screen flex items-center justify-center">
                              <img src={Mock.mock1} className="rounded min-h-screen w-full object-cover" />
                         </div>

                         <div className="flex flex-col gap-2">
                              <h1 className="text-2xl font-bold">Introduction to Microsoft Excel</h1>
                              <p className='text-gray-600'>Taught in English</p>
                              <p className="mt-2">Instructor: <span className="font-semibold">Summer Scaggs</span></p>
                              <Link to={'/learn/id/course'} className='w-40 inline-flex rounded justify-center items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-white bg-blue-500 mb-5 shadow-md'>All Course</Link>
                         </div>
                    </header>
                    <main className="flex flex-col  lg:flex-row">
                         <div className="flex-1">
                              <section>
                                   <h2 className="text-xl font-semibold mb-4">What you&apos;ll learn</h2>
                                   <ul className="list-disc pl-5 mb-4">
                                        <li>Create an Excel spreadsheet and learn how to maneuver around the spreadsheet for data entry.</li>
                                        <li>Create simple formulas in an Excel spreadsheet to analyze data.</li>
                                   </ul>

                                   <h2 className="text-xl font-semibold mb-4">Skills you&apos;ll practice</h2>
                                   <ul className="flex flex-wrap space-x-2 mb-4">
                                        {['Formatting Excel Spreadsheets', 'Creating Basic Formulas in Excel Spreadsheets', 'Creating Excel Spreadsheets', 'Maneuvering around Excel Spreadsheets'].map((skill, index) => (
                                             <li key={index} className={`mt-4 border-gray-300 border bg-gray-200'} px-2 py-1 rounded`}>{skill}</li>
                                        ))}
                                   </ul>
                              </section>

                              <section className="mt-8">
                                   <h2 className="text-xl font-semibold mb-4">Details to know</h2>
                                   <p className="flex flex-wrap items-center space-x-2">
                                        <span className="text-blue-700">LinkedIn</span>
                                        <span>Shareable certificate</span>
                                   </p>
                              </section>
                         </div>

                         <aside className="w-full lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
                              <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
                                   <h2 className="text-lg font-semibold mb-2">Guided Project</h2>
                                   <p className='text-gray-600'>Learn, practice, and apply job-ready skills with expert guidance</p>
                                   <div className="mt-4">
                                        <p className="font-semibold">Intermediate level</p>
                                        <p className='text-gray-600'>Recommended experience</p>
                                   </div>
                                   <div className="mt-4">
                                        <p className="font-semibold">1.5 hours</p>
                                        <p className='text-gray-600'>Learn at your own pace</p>
                                   </div>
                                   <div className="mt-4">
                                        <p className="font-semibold">No downloads or installation required</p>
                                        <p className='text-gray-600'>Only available on desktop</p>
                                   </div>
                                   <div className="mt-4">
                                        <p className="font-semibold">Hands-on learning</p>
                                   </div>
                                   <button onClick={handleToggle} className='text-blue-600 font-bold underline'>
                                        {showAll ? 'Show less ' : 'View more'}
                                   </button>
                                   <div className="mt-4 flex items-center space-x-2">
                                        <span className="text-4xl font-bold">4.6</span>
                                        <span className='text-gray-600'>(7,203 reviews)</span>
                                   </div >
                                   <hr className="border-blue-500 mt-2 mb-2" />
                                   <a href={`/learn/all-course`} className="text-blue-600 hover:underline">View project details</a>
                              </div >
                         </aside >
                    </main >

                    <div className="p-10 rounded-lg border border-gray-300 flex items-center justify-between">
                         <div className='flex flex-col items-start'>
                              <h2 className="text-2xl font-bold mb-2">
                                   See how employees at top companies are mastering in-demand skills
                              </h2>
                              <Link to={``} className='text-blue-600 mb-4 font-bold'>Learn more about Coursera for Business</Link>
                         </div>
                         <div className="flex flex-wrap justify-center gap-4">
                              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/74c8747e8210831049cf88dd4eefe26c.png?auto=format%2Ccompress&dpr=1&w=320&h=70&q=40" alt="Petrobras" className="h-20" />
                         </div>
                    </div>

                    <div className="flex flex-col  lg:flex-row items-center p-6 rounded-lg mt-6">
                         <div className="lg:w-1/2">
                              <h2 className="text-2xl font-bold mb-2">
                                   Learn, practice, and apply job-ready skills in less than 2 hours
                              </h2>
                              <ul className="list-disc list-inside mb-4">
                                   {['Receive training from industry experts', 'Gain hands-on experience solving real-world job tasks', 'Build confidence using the latest tools and technologies'].map((item, index) => (
                                        <li key={index}>{item}</li>
                                   ))}
                              </ul>
                         </div>
                         <div className="lg:w-1/2 flex justify-center">
                              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/4db8408a269c2d6804a5ac33536af429.png?auto=format%2Ccompress&dpr=1&w=562&h=221&q=40&fit=crop" alt="Employee" className="rounded-lg" />
                         </div>
                    </div>

                    <div className="border border-gray-300 p-6 rounded-lg  mt-6 flex flex-col lg:flex-row lg:justify-between items-start">
                         <div className="lg:w-3/4">
                              <h2 className="text-2xl font-bold mb-4">How you&apos;ll learn</h2>
                              {/* <ul className="list-none">
                                   {features.map(({ icon, title, description }, index) => (
                                        <li key={index} className="mb-4 flex items-start gap-2 ">
                                             {icon}
                                             <div>
                                                  <h3 className="font-semibold">{title}</h3>
                                                  <p>{description}</p>
                                             </div>
                                        </li>
                                   ))}
                              </ul> */}
                         </div>
                         <div className="lg:w-1/4 flex justify-center lg:justify-end mt-6 lg:mt-0">
                              <img src="https://onlinecoursesgalore.com/wp-content/uploads/2024/02/coursera-guided-projects.jpg" alt="Learning" className="rounded-lg shadow-lg" />
                         </div>
                    </div>


               </div >
          </Container>
     );
}

export default LearninsideDetails;
