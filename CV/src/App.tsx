import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import ResumeBody from "@/components/ResumeBody"



function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setTel] = useState('')

  return (
    <>
      <Header></Header>
      <div className='flex flex-row'>
      <Sidebar setName={setName} setEmail={setEmail} setTel={setTel}></Sidebar>
      <ResumeBody name={name} email={email} phone={phone}></ResumeBody>
      </div>
    </>
  )
}

export default App
