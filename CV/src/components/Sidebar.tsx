interface SidebarProps {
    setName : React.Dispatch<React.SetStateAction<string>>
    setEmail : React.Dispatch<React.SetStateAction<string>>
    setTel : React.Dispatch<React.SetStateAction<string>>
}

export default function Sidebar( {setName, setEmail, setTel}: SidebarProps) {
    return (
        <>
            <aside className="mt-5 w-full md:w-80 h-screen p-6 tracking-tight">
                <h2 className="font-bold text-lg mb-20">Resume Details:</h2>


                <div className="mb-6">
                    <h3 className="font-medium mb-2">Personal Info:</h3>
                    <input type="text" placeholder="Full Name" className="w-full p-2 mb-2 bg-zinc-50 rounded border" onChange={(e) => setName(e.target.value)} required/>
                    <input type="text" placeholder="Email" className="w-full p-2 mb-2 bg-zinc-50 rounded border" onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="text" placeholder="Tel #" className="w-full p-2 mb-2 bg-zinc-50 rounded border" inputMode="numeric" onChange={(e) => setTel(e.target.value)} required/>
                </div>

            </aside>
        </>
    )
}