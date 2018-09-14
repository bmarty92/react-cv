import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import SectionWithLists from './SectionWithList';
import data from './data';
import './style.css';

function Main(props) {
  const { language } = props;
  const { education, skills, experience, hobbies, references  } = data[language];
  return (
    <main className="Content">
      <Section
        title={education.title}
        descriptionTitle={education.descriptionTitle}
        info={education.info}
      />

      <Section
        title={skills.title}
        descriptionTitle={skills.descriptionTitle}
        info={skills.info}
      />
      <SectionWithLists
        title={experience.title}
        dataList={experience.dataList}
      />

      <Section title={hobbies.title} info={hobbies.info} />
      <Section title={references.title} info={references.info} />
    </main>
  );
}
Main.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Main;
