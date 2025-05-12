import { useState } from "react";

interface SidebarProps {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setTel: (tel: string) => void;
  setSkill: (skill: string) => void;
  setExperience: (experience: string) => void;
  setEducation: (education: string) => void;
}

export default function Sidebar( {setName, setEmail, setTel, setSkill, setExperience, setEducation}: SidebarProps) {
    const [skillInput, setSkillInput] = useState<string[]>([""]);;
    const [expInput, setExpInput] = useState([
        {title: "", startDate: "", endDate: "", description: ""},
    ]);
    const [educationInput, setEducationInput] = useState([
        {degree: '', location: "", startDate: "", endDate: "",school: ""},
    ]);

    const handleSkillChange = (index: number, value: string) => {
        const newSkillInputs = [...skillInput];
        newSkillInputs[index] = value; 
        setSkillInput(newSkillInputs);
        setSkill(newSkillInputs.filter(skill => skill !== "").join(", "));
    };

    const addSkillField = () => {
        setSkillInput([...skillInput, ""]);
    };

    const handleExpChange = (index: number, field: "title" | "startDate" | "endDate" | "description", value: string) => {
        const newExpInputs = [...expInput];
        newExpInputs[index][field] = value;
        setExpInput(newExpInputs);

        const experienceText = newExpInputs.map((exp) => `${exp.title} (${exp.startDate} - ${exp.endDate}): ${exp.description}`).join(", ");
        setExperience(experienceText);
    };

    const addExpField = () => {
        setExpInput([
            ...expInput, {title: "", startDate: "", endDate: "", description: ""},
        ]);
    };

    const handleEducationChange = (index: number, field: string, value: string) => {
        const newEducationInputs = [...educationInput];
        newEducationInputs[index] = {...newEducationInputs[index], [field]: value};
        setEducationInput(newEducationInputs);

        const educationText = newEducationInputs.map((edu) => `${edu.degree} (${edu.startDate}-${edu.endDate}): ${edu.school} - ${edu.location}`).join(", ");
        setEducation(educationText);
    };

    const addEducationField = () => {
        setEducationInput([
            ...educationInput, {degree: "", location: "", startDate: "", endDate: "", school: ""},
        ]);
    }

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

                <div className="mb-6">
                    <h3 className="font-medium mb-2">Skills:</h3>
                    {skillInput.map((skill, index) => (
                        <input key={index} type="text" value={skill} placeholder="Skills" className="w-full p-2 mb-2 bg-zinc-50 rounded border" onChange={(e) => handleSkillChange(index, e.target.value)} required/>
                    ))}
                    <button type="button" onClick={addSkillField} className="text-sm text-blue-600 underline hover:text-blue-800">+ Add Another Skill</button>
                </div>


                <div className="mb-6">
                    <h3 className="font-medium mb-2">Experience:</h3>
                        {expInput.map((experience, index) => (
                            <div key={index} className="mb-4">
                                <input type="text" placeholder={`Job Title ${index + 1}`} className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={experience.title} onChange={(e) => handleExpChange(index, "title", e.target.value)} required/>
                                <input type="text" placeholder="Start Date (e.g., Jan 2020)" className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={experience.startDate} onChange={(e) => handleExpChange(index, "startDate", e.target.value)} required/>
                                <input type="text" placeholder="End Date (e.g., Dec 2020)" className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={experience.endDate} onChange={(e) => handleExpChange(index, "endDate", e.target.value)} required/>
                                <input type="text" placeholder="Description" className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={experience.description} onChange={(e) => handleExpChange(index, "description", e.target.value)} required/>
                            </div>
                        ))}
                    <button type="button" onClick={addExpField} className="text-sm text-blue-600 underline hover:text-blue-800">+ Add Another Experience</button>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-2">Education:</h3>
                        {educationInput.map((education, index) =>
                        <div key={index} className="mb-4">
                            <input type="text" placeholder={`Degree/Strand ${index + 1}`} className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={education.degree} onChange={(e) => handleEducationChange(index, "degree", e.target.value)} required/>
                            <input type="text" placeholder="Start Date (e.g., 2020)" className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={education.startDate} onChange={(e) => handleEducationChange(index, "startDate", e.target.value)} required/>
                            <input type="text" placeholder="End Date (e.g., 2024)" className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={education.endDate} onChange={(e) => handleEducationChange(index, "endDate", e.target.value)} required/>
                            <input type="text" placeholder="School" className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={education.school} onChange={(e) => handleEducationChange(index, "school", e.target.value)} required/>
                            <input type="text" placeholder="Location" className="w-full p-2 mb-2 bg-zinc-50 rounded border" value={education.location} onChange={(e) => handleEducationChange(index, "location", e.target.value)} required/>
                        </div>
                        )}
                        <button type="button" onClick={addEducationField} className="text-sm text-blue-600 underline hover:text-blue-800">+ Add Another Education</button>
                </div>
            </aside>
        </>
    )
}