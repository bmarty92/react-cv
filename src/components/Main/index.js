import React from 'react';
import './style.css';
import Section from './Section';
import SectionWithLists from './SectionWithList';

function Main() {
  return (
    <main className="Content">
      <Section
        title="Education"
        descriptionTitle="CodeAcademy, Vilnius, Lithuania"
        info={[
          { title: 'Major', text: 'Javascript' },
          { title: 'Minor', text: 'Vue.js' },
        ]}
      />

      <Section
        title="Skills"
        descriptionTitle="Technical Skills"
        info="HTML5, CSS3/SASS/LESS, JavaScript(ES6+), Vue.js, React.js, Node.js,
          Webpack, Redux.js"
      />
      <SectionWithLists
        title="Experience"
        dataList={[
          {
            title: 'Company',
            subtitle: 'Jr. Front-end developer',
            list: ['Coding', 'Googling', 'Debuging', 'Improving'],
          },
          {
            title: 'Company',
            subtitle: 'Jr. Front-end developer',
            list: ['Coding', 'Googling', 'Debuging', 'Improving'],
          },
        ]}
      />

      <Section title="Hobbies" info="Web development, IT" />
      <Section title="References" info="Available on request" />
    </main>
  );
}

export default Main;
