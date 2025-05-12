interface ResumeBodyProps{
    name: string;
    email: string;
    phone: string;
    skill: string;
    experience: string;
    education: string;
}

export default function ResumeBody({name, email, phone, skill, experience, education}: ResumeBodyProps) {

    return (

        <div className="mt-5 w-[8.5in] h-[11in] bg-white shadow-md mx-auto outline-1 outline-black">
            <h1 className="flex justify-center text-4xl font-bold ml-5 mt-5">{name || "Your Name"}</h1>
            <div className="flex flex-row justify-around mt-6">
                <p className="mb-2 text-2xl">{email || "Your Email"}</p>
                <p className="mb-2 text-2xl">{phone || "Your Tel #"}</p>
            </div>
            <hr className="border-t border-black-1000 my-4"/>

            <h2 className="text-4xl font-bold ml-5 mt-5">Skills:</h2>
            <div className="flex flex-row justify-start ml-11 mt-6">
                <ul className="list-disc ml-4">
                    <li className="mb-2 text-2xl">{skill}</li>
                </ul>
            </div>
            <hr className="border-t border-black-1000 my-4"/>

            <h2 className="text-4xl font-bold ml-5 mt-5">Experience:</h2>
                {experience.split(",").map((exp, idx) => {
                    const [titleAndDate, desc] = exp.split(":");
                    return (
                        <div className="flex flex-row justify-between mt-5 ml-10">
                            <div key={idx} className="mb-4">
                                <p className="font-semibold text-2xl">{titleAndDate?.trim()}</p>
                                <p className="text-sm text-gray-700 text-2xl ml-5 mt-3">{desc?.trim()}</p>
                            </div>
                        </div>  
                    );
                })};
            <hr className="border-t border-black-1000 mt-65 my-4"/>

            <h2 className="text-4xl font-bold ml-5 mt-5">Education:</h2>
                {education.split(",").map((edu, idx) => {
                    const [degreeAndYear, school] = edu.split(":");
                    return(
                        <div className="flex flex-row justify-between mt-3 ml-10 text-3xl">
                            <div key={idx} className="mb-4">
                                <p className="font-semibold ">{degreeAndYear?.trim()}</p>
                                <p className="text-base text-gray-1000 ml-1">{school?.trim()}</p>
                            </div>
                        </div>
                    )
                })}
            </div>      
    )
}