'use client';

import { Book, BookmarkSimple, Brain } from '@phosphor-icons/react';
import Image from 'next/image';
import React from 'react';

import type { Topic } from '@/libs/services/modules/topics/topicType';

import IconButton from '../iconButton/IconButton';

interface Props {
  humanBook: {
    fullName: string;
    topics: Topic[];
    rating: number;
    bio: string;
  };
  title: string;
  coverPath: string;
}

const HumanBookInfo = ({ humanBook, title, coverPath }: Props) => {
  return (
    <div className="h-full w-full overflow-hidden rounded bg-white shadow-lg">
      <div className="px-6 py-4">
        <div className="flex w-full flex-col items-center gap-2">
          <IconButton
            icon={<Book size={16} />}
            className="w-full px-4 text-base text-white"
          >
            Schedule a Meeting
          </IconButton>
          <IconButton
            icon={<BookmarkSimple size={16} />}
            className="bg-transparent text-base text-primary-50"
          >
            Save for later
          </IconButton>
        </div>
        <div className="flex flex-col items-start justify-between px-3 py-1">
          <h2 className="mb-2 text-xl font-bold">{title}</h2>
          <div className="flex items-center justify-between gap-2 text-sm">
            <Image
              alt="Avatr Human Book"
              src={coverPath || '/assets/images/Avatar.png'}
              width={24}
              height={24}
              className="size-6 rounded-full"
            />
            <div>
              <p>{humanBook?.fullName || ''}</p>
            </div>
            {humanBook?.topics && (
              <p>{`${humanBook?.topics?.length || 0} topics`}</p>
            )}
          </div>
          <div className="flex items-center gap-1 py-2 text-sm">
            <span>⭐️ {humanBook?.rating || 0}</span>
            <span className="ml-1 text-gray-500">(WIP)</span>
          </div>
          <div>
            {humanBook?.topics?.map((topic) => (
              <IconButton
                key={topic?.id}
                icon={<Brain size={12} />}
                className="w-full bg-neutral-98 px-4 text-xs text-gray-400"
              >
                {topic?.name}
              </IconButton>
            ))}
          </div>
          <p className="text-sm text-gray-700">{humanBook?.bio || ''}</p>
        </div>
      </div>
    </div>
  );
};

export default HumanBookInfo;
