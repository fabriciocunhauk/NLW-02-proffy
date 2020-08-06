import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm = () => {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Awesome that you want to teach"
                description="First you need to fill-up this form."
            />

            <main>
                <fieldset>
                    <legend>Your info</legend>

                    <Input name="name" label="Full name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biography" />
                </fieldset>

                <fieldset>
                    <legend>About the class</legend>

                    <Select
                        name="subject"
                        label="Subject"
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
                    <Input name="cost" label="Cost per class" />
                </fieldset>

                <fieldset>
                    <legend>
                        Available times
                        
                    <button type="button">
                            + New times
                    </button>

                        </legend>
                    <div className="schedule-item">
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
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning" />
                        Warning! <br />
                        Enter your details
                    </p>

                    <button type="button">
                        Save
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;