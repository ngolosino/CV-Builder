interface ResumeBodyProps{
    name: string;
    email: string;
    phone: string;
}

export default function ResumeBody({name, email, phone}: ResumeBodyProps) {
    return (

        <div className="mt-5 w-[8.5in] h-[11in] bg-white shadow-md mx-auto outline-1 outline-black">

            <div className="flex h-full">
                <aside className="flex flex-col justify-start w-1/4 bg-sky-800 text-white p-4">
                    <p className="mb-2">{email || "Your Email"}</p>
                    <p className="mb-2">{phone || "Your Tel #"}</p>
                </aside>
                <h1 className="text-4xl font-bold ml-5 mt-5">{name || "Your Name"}</h1>
            </div>

        </div>
    )
}