import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <div>
            <article className="teacher-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/60474481?s=460&u=22fb64d149aedf17e5e6955e1954693e1d86edd2&v=4" alt="Fabricio Cunha" />
                    <div>
                        <strong>Fabricio Cunha</strong>
                        <span>Software Development</span>
                    </div>
                </header>
                <p>
                    In love with software development.
                        <br /><br />
                        Amazing Software skills, self driven and love technology.
                    </p>
                <footer>
                    <p>
                        Price per hour:
                            <strong>£50</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="whatsapp" />
                            Get in touch
                        </button>
                </footer>
            </article>

        </div>
    )
}

export default TeacherItem;

