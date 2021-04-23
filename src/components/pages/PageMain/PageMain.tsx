import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store/store';
import { PageHeader } from '../PageHeader/PageHeader';
import { PageContent } from '../PageContent/PageContent';
import { OutputDisplay } from '../../outputs/OutputDisplay/OutputDisplay';
import { KeyboardNumeric } from '../../keyboards/KeyboardNumeric/KeyboardNumeric';
import { KeyboardRoman } from '../../keyboards/KeyboardRoman/KeyboardRoman';
import { PageFooter } from '../PageFooter/PageFooter';
import { PageContainer } from '../PageContainer/PageContainer';
import { ButtonSwitch } from '../../buttons/ButtonSwitch/ButtonSwitch';
import { ErrorMessage } from '../../outputs/ErrorMessage/ErrorMessage';

export const PageMain = () => {
  const { viewMode, error } = useSelector((state: Store) => state.romanReducer);

  const Keyboard = (): JSX.Element => {
    return viewMode === 'numeric' ? <KeyboardNumeric/> : <KeyboardRoman/>
  }

  const ShowError = (): JSX.Element | null => Boolean(error) ? <ErrorMessage/> : null;

  return (
    <PageContainer>
      <PageHeader title="Roman numerals for kids" subTitle="This is a simple roman numerals converter. Enjoy!"/>
      <PageContent>
        <OutputDisplay/>
        <ShowError/>
        <Keyboard/>
        <ButtonSwitch/>
      </PageContent>
      <PageFooter madeBy="Alessandro Pinto" year={ 2021 } url="https://github.com/alemp"/>
    </PageContainer>
  );
};
