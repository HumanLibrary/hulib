'use client';

import WavesurferPlayer from '@wavesurfer/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React, { useCallback, useState } from 'react';
import type WaveSurfer from 'wavesurfer.js';

import Button from '@/components/button/Button';
import { HighlightContentBox } from '@/components/HighlightContentBox';
import { mergeClassnames } from '@/components/private/utils';
import { customMessage } from '@/utils/i18NRichTextUtils';
// eslint-disable-next-line import/no-cycle

const StarIcons = [
  { size: 16, yPosition: 'top-[6.1875rem]', xPosition: 'left-[17.6875rem]' },
  { size: 60, yPosition: 'bottom-[222px]', xPosition: 'right-[171px]' },
  { size: 30, yPosition: 'bottom-[115px]', xPosition: 'right-[123px]' },
];
const VectorIcons = [
  {
    width: 57,
    height: 75,
    yPosition: 'bottom-[141px]',
    xPosition: 'left-[13px]',
  },
  { width: 49, height: 65, yPosition: 'top-[67px]', xPosition: 'right-0' },
  {
    width: 36,
    height: 53,
    yPosition: 'top-[136px]',
    xPosition: 'left-[177px]',
  },
];

const Hero = () => {
  const t = useTranslations('Index');

  // @ts-ignore
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = useCallback(async () => {
    if (wavesurfer) {
      await wavesurfer.playPause();
    }
  }, [wavesurfer]);

  return (
    <section className="w-full flex-col items-center justify-center gap-32 sm:pt-8 md:px-[20.625rem] md:pb-[5.625rem]">
      <div className="pb-3 sm:w-1/2 sm:max-w-screen-md">
        <div className="mb-6 flex w-full flex-col items-center justify-start gap-3 px-4 text-center sm:gap-4 sm:px-0">
          <p className="text-xs font-medium uppercase text-primary sm:text-lg">
            {t('hero_title')}
          </p>
          <h1 className="px-4 text-[1.75rem] font-semibold capitalize text-slate-1000 sm:text-[5rem]">
            {t('hero_motto')}
          </h1>
          <p className="text-sm font-light text-slate-1000 opacity-50 sm:text-2xl">
            {t('hero_description')}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <Button
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="/assets/docs/project-proposal.pdf"
            className="rounded-full uppercase"
            iconRight={
              <Image
                width={24}
                height={24}
                src="/assets/images/icons/download-icon.svg"
                alt="Download icon"
                loading="lazy"
              />
            }
          >
            {t('hero_call_to_action')}
          </Button>
        </div>
      </div>
      <div className="relative mt-8 w-full">
        <p className="relative h-12 px-2 text-center text-base font-normal text-slate-1000 sm:hidden">
          {t.rich('hero_message_1', {
            important: customMessage('font-bold'),
          })}
        </p>
        <p className="relative h-12 text-center text-base font-normal text-slate-1000 sm:hidden">
          {t.rich('hero_message_2', {
            important: customMessage('font-bold'),
          })}
        </p>
        <div className="hidden justify-center sm:flex sm:flex-col">
          <Image
            alt="Hero artwork"
            src="/assets/images/hero-artwork.png"
            priority
            width={748}
            height={511}
          />
        </div>
        <div className="mb-3 flex w-full flex-col items-center justify-center sm:hidden">
          <Image
            alt="Hero artwork"
            src="/assets/images/fs-hero-artwork.png"
            priority
            width={276}
            height={188}
            className="object-scale-down object-center"
          />
        </div>
        {StarIcons.map((each, index) => (
          <Image
            key={index}
            width={each.size}
            height={each.size}
            alt={`Hero star ${index}`}
            src={`/assets/images/icons/stars/star-${index}.svg`}
            className={mergeClassnames(
              'absolute shrink-0',
              each.xPosition && each.xPosition,
              each.yPosition && each.yPosition,
            )}
          />
        ))}
        {VectorIcons.map((each, index) => (
          <Image
            key={index}
            width={each.width}
            height={each.height}
            alt={`Hero vector ${index}`}
            src={`/assets/images/icons/vectors/vector-${index}.svg`}
            className={mergeClassnames(
              'absolute shrink-0',
              each.xPosition && each.xPosition,
              each.yPosition && each.yPosition,
            )}
          />
        ))}
        <p className="right-0 hidden h-12 max-w-64 text-right text-base font-normal text-slate-1000 sm:absolute">
          {t.rich('hero_message_2', {
            important: customMessage('font-bold'),
          })}
        </p>
        <p className="left-0 hidden h-12 max-w-64 text-base font-normal text-slate-1000 sm:absolute">
          {t.rich('hero_message_1', {
            important: customMessage('font-bold'),
          })}
        </p>
        <div className="grid grid-cols-2 gap-x-2 sm:block">
          <div
            className={mergeClassnames(
              'relative sm:absolute sm:right-[97px] sm:top-[159px] rounded-2xl px-2 sm:px-5 py-3',
              'bg-[#eaeaea4d] shadow-[0_8px_24px_0_rgba(0,0,0,0.08)] backdrop-blur-[25px]',
            )}
          >
            <div className="hidden items-center gap-2 sm:flex">
              <Image
                onClick={onPlayPause}
                width={56}
                height={56}
                alt="Play icon"
                src={`/assets/images/icons/${
                  isPlaying ? 'pause' : 'play'
                }-circle.png`}
                className="cursor-pointer"
              />
              <WavesurferPlayer
                height={46}
                width={164}
                progressColor="#002254"
                waveColor="#8E98A8"
                url="/assets/media/healing-sound.mp3"
                onReady={onReady}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
            <div className="flex items-center gap-2 sm:hidden">
              <Image
                onClick={onPlayPause}
                width={32}
                height={32}
                alt="Play icon"
                src={`/assets/images/icons/${
                  isPlaying ? 'pause' : 'play'
                }-circle.png`}
                className="cursor-pointer"
              />
              <WavesurferPlayer
                height={32}
                width={124}
                progressColor="#002254"
                waveColor="#8E98A8"
                url="/assets/media/healing-sound.mp3"
                onReady={onReady}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </div>
          </div>
          <HighlightContentBox className="relative sm:absolute sm:left-6 sm:top-24">
            <div className="relative flex flex-col items-start gap-1">
              <div className="hidden sm:visible">
                <Image
                  width={72}
                  height={24}
                  src="/assets/images/mentors.svg"
                  alt="Mentor avatars"
                />
              </div>
              <div className="visible sm:hidden">
                <Image
                  width={64}
                  height={16}
                  src="/assets/images/mentors.svg"
                  alt="Mentor avatars"
                />
              </div>
              <p className="text-xs font-black text-slate-1000 sm:text-base">
                {t.rich('hero_mentor_quantity', {
                  normal: customMessage('font-normal'),
                })}
              </p>
            </div>
          </HighlightContentBox>
        </div>
      </div>
    </section>
  );
};

export default Hero;
