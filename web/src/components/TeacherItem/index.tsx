import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string,
};

interface TeacherItemProps {
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return (
        <div>
            <article className="teacher-item">
                <header>
                    <img src={teacher.avatar} alt={teacher.name} />
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span>
                    </div>
                </header>
                <p>
                    {teacher.bio}
                    <br /><br />
                    Amazing Software skills, self driven and love technology.
                </p>

                <footer>
                    <p>
                        Price per hour:
                        <strong>£{teacher.cost}</strong>
                    </p>
                    <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank" rel="noreferrer" type="button">
                        <img src={whatsappIcon} alt="whatsapp" />
                        Get in touch
                    </a>
                </footer>
            </article>

        </div>
    )
}

export default TeacherItem;

