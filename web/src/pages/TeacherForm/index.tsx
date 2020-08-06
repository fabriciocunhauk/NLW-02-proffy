import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
       { week_day: 0, from: '', to: ''} 
    ]);

    const addNewScheduleItem = () => {
        setScheduleItems([
            ...scheduleItems, { week_day: 0, from: '', to: ''} 
        ])
    }

    function handleCreateClass(event: FormEvent) {
        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost
        });
        

        event.preventDefault();
    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Awesome that you want to teach"
                description="First you need to fill-up this form."
            />

            <main>
                <form onSubmit={handleCreateClass}>

                <fieldset>
                    <legend>Your info</legend>

                    <Input 
                        name="name" 
                        label="Full name" 
                        value={name}
                        onChange={event => setName(event.target.value)} 
                    />

                    <Input 
                        name="avatar" 
                        label="Avatar" 
                        value={avatar}
                        onChange={event => setAvatar(event.target.value)} 
                    />

                    <Input 
                        name="whatsapp" 
                        label="Whatsapp" 
                        value={whatsapp}
                        onChange={event => setWhatsapp  (event.target.value)} 
                    />

                    <Textarea 
                        name="bio" 
                        label="Biography" 
                        value={bio}
                        onChange={event => setBio(event.target.value)} 
                    />
                </fieldset>

                <fieldset>
                    <legend>About the class</legend>

                    <Select
                        name="subject"
                        label="Subject"
                        value={subject}
                        onChange={event => setSubject(event.target.value)} 
                        options={[
                            { value: 'Programing', label: 'Programing' },
                            { value: 'Art', label: 'Art' },
                            { value: 'English', label: 'English' },
                            { value: 'Economy', label: 'Economy' },
                            { value: 'Science', label: 'Science' },
                            { value: 'Bussines', label: 'Bussines' },
                            { value: 'Acounting', label: 'Acounting' },
                            { value: 'Math', label: 'Math' },
                        ]}
                    />
                    <Input 
                        name="cost" 
                        label="Cost per class" 
                        value={cost}
                        onChange={event => setCost(event.target.value)} 
                        />
                </fieldset>

                <fieldset>
                    <legend>
                        Available times
                        
                    <button type="button" onClick={addNewScheduleItem} >
                            + New times
                    </button>

                        </legend>
                   { scheduleItems.map(scheduleItem => {
                        return ( <div key={scheduleItem.week_day} className="schedule-item">
                    <Select
                        name="week_day"
                        label="Week day"
                        options={[
                            { value: '0', label: 'Sunday' },
                            { value: '1', label: 'Monday' },
                            { value: '2', label: 'Tuesday' },
                            { value: '3', label: 'Wednesday' },
                            { value: '4', label: 'Thursday' },
                            { value: '5', label: 'Friday' },
                            { value: '6', label: 'Saturday' },
                        ]}
                    />
                    <Input name="from" label="from" type="time" />
                    <Input name="to" label="to" type="time" />
                    </div>
                    );
                        })}

                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning" />
                        Warning! <br />
                        Enter your details
                    </p>

                    <button type="submit">
                        Save
                    </button>
                </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;