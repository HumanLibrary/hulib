'use client';

import { CaretLeft } from '@phosphor-icons/react';

import Button from '@/components/button/Button';
import Form from '@/components/form/Form';
import { Col, Row } from '@/layouts/Flex';

import React from 'react';
import FileUpload from './Upload';
import { useTranslations } from 'next-intl';

interface Props {
  onGoBackPress: () => void;
  onRegisterPress: (file: File | null) => void;
}

const MentorRegisterStep2 = (props: Props) => {
  const {
    onGoBackPress,
    onRegisterPress,
  } = props;
  const t = useTranslations('MentorRegister');
  const [file, setFile] = React.useState<File|null>(null);


  return (
    <Col gap={33}>
      <Col gap={10}>
        <Row alignItems='center' justifyContent='space-between'>
          <Form.Label required>{t('introduction_video')}</Form.Label>
          {file && <p className='underline text-red-50 cursor-pointer' onClick={() => setFile(null)}>{t('delete_selected_video')}</p>}
        </Row>
        <FileUpload onChange={file => setFile(file)} value={file}/>
      </Col>
      <p className="text-base font-normal leading-5 opacity-80">
        <u>{t('footer_description_underline')}</u> {t('footer_description')}
      </p>
      <Row alignItems="center" gap={12} marginTop={17}>
        <Button
          onClick={onGoBackPress}
          variant="outline"
          iconLeft={<CaretLeft />}
        >
          {t('Back')}
        </Button>
        <Button
          type="button"
          form="mentor-register-form"
          className="flex-[1px]"
          onClick={() => onRegisterPress(file)}
        >
          {t('Register')}
        </Button>
      </Row>
    </Col>
  );
};

export default MentorRegisterStep2;
