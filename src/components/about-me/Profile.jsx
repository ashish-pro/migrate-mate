
import { useLoaderData } from 'react-router-dom'

const Profile = () => {
    const data = useLoaderData();
  return (
    <div className='mt-4'>
    <div className='mt-4'>
    <div className="max-w-lg mx-auto my-10 bg-white p-5">
    <img className="w-32 h-32 rounded-full mx-auto" src={data.avatar_url} alt="Profile picture"/>
    <h2 className="text-center text-2xl font-semibold mt-3">{data.name}</h2>
    <p className="text-center text-gray-600 mt-1">{data.bio}</p>
    <div className="flex justify-center mt-5">
      <a href="https://twitter.com/AshishU35518542" className="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
      <a href="https://www.linkedin.com/in/ashu09/" className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
      <a href="https://github.com/ashish-pro" className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
    </div>
    <div className="mt-5">
      <h3 className="text-xl font-semibold">Bio</h3>
      <p className="text-gray-600 mt-2">I am a software engineer with over 2 years of experience in developing web and mobile applications. I am skilled in JavaScript, React, and Node.js.</p>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Profile;