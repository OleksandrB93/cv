import React from 'react';
import { SummaryContainer, MyName, CvText } from './Summary.styled';

export default function Summary() {
  return (
    <SummaryContainer>
      <CvText>Front-End Developer</CvText>
      <MyName>Oleksandr Barabash</MyName>
      <CvText>
        Hello, I am studying Front End technologies. I am glad that you have a
        Junior vacancy and I want to join your company as a young developer for
        further development in IT technologies. I have knowledge of HTML, CSS,
        JavaScript, React, React Redux. I will be glad if you consider my
        candidacy and we can discuss the details of the vacancy. Sincerely,
        Oleksandr!
      </CvText>
    </SummaryContainer>
  );
}
