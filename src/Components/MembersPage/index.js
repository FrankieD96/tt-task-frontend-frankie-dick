import { useEffect, useState } from "react"
import "./members-page.css"
import SchoolFilter from "../SchoolFilter";

function MembersPage() {

    const [members, setMembers] = useState([]);
    const [schoolId, setSchoolId] = useState(0);

    useEffect(() => {

        let url = 'http://localhost:8000/api/members';

        if (schoolId > 0) {
            url += `?school=${schoolId}`;
          }

        fetch(url)
            .then(res => res.json())
            .then((memberData) => {
                setMembers(memberData.data);
            });
    }, [schoolId]);

    return (
        <div>
            <h2>Members</h2>
            <SchoolFilter schoolId={schoolId} setSchoolId={setSchoolId}/>
            <table className="member-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member => (
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MembersPage