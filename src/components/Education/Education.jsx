import React from 'react';
import {
  EducationContainer,
  EducationTitle,
  AcademyTitle,
  SpecialityTitle,
  EducationDate,
} from './Education.styled';

export default function Education() {
  return (
    <EducationContainer>
      <EducationTitle>Education</EducationTitle>
      <AcademyTitle>
        Odessa State Academy of Civil Engineering and Architecture
      </AcademyTitle>
      <SpecialityTitle>Heating and gas supply and ventilation</SpecialityTitle>
      <EducationDate>September 12 - June 2016 | Ukraine</EducationDate>
    </EducationContainer>
  );
}
