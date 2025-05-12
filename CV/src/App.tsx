import { useState } from 'react'
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import ResumeBody from "@/components/ResumeBody"


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setTel] = useState('')
  const [skill, setSkill] = useState('')
  const [experience, setExperience] = useState('')
  const [education, setEducation] = useState('')

  return (
    <>
      <Header></Header>
      <div className='flex flex-row'>
      <Sidebar setName={setName} setEmail={setEmail} setTel={setTel} setSkill={setSkill} setExperience={setExperience} setEducation={setEducation}></Sidebar>
      <ResumeBody name={name} email={email} phone={phone} skill={skill} experience={experience} education={education}>
      </ResumeBody>
      </div>
    </>
  )
}

export default App
