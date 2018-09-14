import React from 'react';
import Section from './Section';
import SectionWithLists from './SectionWithList';
import data from './data';
import './style.css';

function Main() {
  const { education, skills, experience, hobbies, references  } = data;
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

export default Main;
