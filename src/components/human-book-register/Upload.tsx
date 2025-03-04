/* eslint-disable jsx-a11y/media-has-caption */
// components/FileUpload.tsx
import { UploadSimple } from '@phosphor-icons/react';
import { isFunction } from 'lodash';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { pushError } from '../CustomToastifyContainer';

interface Props {
  maxSize?: number;
  value?: File | null;
  onChange?: (file: File) => void;
}

const FileUpload = (props: Props) => {
  const { maxSize = 100 * 1024 * 1024, value, onChange } = props;
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const t = useTranslations('HumanBookRegister');

  const validateFile = (file: File) => {
    if (file.size > maxSize) {
      return true;
    }
    return false;
  };

  const onOpen = () => {
    const element = document.querySelector(`input[name=upload]`) as any;

    element?.click();
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        pushError(t('maxSize'));
        setSelectedVideo(null);
      } else {
        if (isFunction(onChange)) {
          onChange(file);
        }
        setSelectedVideo(URL.createObjectURL(file));
      }
    }
  };

  React.useEffect(() => {
    if (value) {
      setSelectedVideo(URL.createObjectURL(value));
    } else {
      setSelectedVideo(null);
    }
  }, [value]);

  return selectedVideo ? (
    <video className="h-full w-full object-cover" controls src={selectedVideo}>
      {t('error_browser_not_support_video')}
    </video>
  ) : (
    <div className="rounded-lg border-[1px] border-dashed border-neutral-90 py-20 text-center">
      <input
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleFileChange}
        name="upload"
      />
      <UploadSimple className="mx-auto mb-6 size-8" />
      <p className="text-sm font-medium leading-4">
        {t('drag_or_drop_files_here')}
      </p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-6 rounded-full bg-primary-90 px-7 py-2 text-sm font-medium text-primary-40"
      >
        {t('choose_file')}
      </button>
      <p className="mt-2 text-sm font-normal leading-3 text-[#585E77]">
        {t('maxSize')}
      </p>
    </div>
  );
};

export default FileUpload;
