import React from 'react';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import PageHeader from '../../components/PageHeader';

import './styles.css';

const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Available teachers" >
                <form id="search-teachers">
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
                    <Input type="time" name="time" label="Time" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>

    )
}

export default TeacherList;