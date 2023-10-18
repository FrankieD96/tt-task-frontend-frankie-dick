import { useEffect, useState } from "react"

function SchoolFilter(props) {
    const [memberSchools, setMemberSchools] = useState([]);
    const [selectedSchool, setSelectedSchool] = useState("");

    useEffect(() => {
        fetch('http://localhost:8000/api/schools')
            .then(res => res.json())
            .then ((schoolData) => {
                setMemberSchools(schoolData.data);
            });
    }, []);

    function handleSchool(event) {
        props.setSchoolId(event.target.value);
        setSelectedSchool(event.target.value);
    }


    return (
        <div>
            <label htmlFor="schoolId">Members by School</label>
            <select id="schoolId" onChange={handleSchool} value={selectedSchool}>
                <option value={0}>All Members</option>
                {memberSchools.map((school) => (
                    <option value={school.id} key={school.id}>{school.name}</option>
                ))}
            </select>
        </div>
    );
}

export default SchoolFilter