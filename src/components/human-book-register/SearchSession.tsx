'use client';

import { X } from '@phosphor-icons/react/dist/ssr';
import type { ReactNode } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
import { Controller, type UseFormReturn } from 'react-hook-form';

import Form from '@/components/form/Form';

import MenuItem from '../menuItem/MenuItem';
import Search, {
  searchFilterItems,
  searchGetItemIndex,
} from '../search/Search';

interface Item {
  children?: ReactNode;
  href?: string;
  id: string;
}

interface Items {
  items: Item[];
  heading?: string;
  id: string;
}

interface Props {
  methods: UseFormReturn<
    {
      about: string;
      section: string[];
      education: string;
      from: number;
      to: number;
    },
    any,
    undefined
  >;
  label: string;
}

const SearchSections = (props: Props) => {
  const { methods, label } = props;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleRemove = (value: string) => {
    const section = methods.getValues('section');
    const removedSection = section.filter((item) => item !== value);
    methods.setValue('section', removedSection);
  };

  const handleAdd = useCallback(
    (value: string) => {
      const section = methods.getValues('section');
      const isExisted = section.find((item) => item === value);

      if (!isExisted) {
        methods.setValue('section', [...section, value]);
      }
    },
    [methods],
  );

  const filteredItems = useMemo(
    () =>
      searchFilterItems(
        [
          {
            id: 'results',
            items: [
              {
                id: 'maketing',
                children: 'Maketing',
                onClick: () => handleAdd('Maketing'),
              },
              {
                id: 'maketingPlanner',
                children: 'Maketing Planner',
                onClick: () => handleAdd('Maketing Planner'),
              },
              {
                id: 'maketingStrategy',
                children: 'Maketing Strategy',
                onClick: () => handleAdd('Maketing Strategy'),
              },
            ],
          },
        ],
        search,
      ),
    [search, handleAdd],
  );

  return (
    <div className="flex flex-col gap-2">
      <Form.Label required>{label}</Form.Label>
      <Controller
        name="section"
        control={methods.control}
        render={({ field }) => (
          <div
            className={`flex flex-row flex-wrap gap-1 ${
              field.value.length === 0 && '-mt-2'
            }`}
          >
            {field.value.map((item: string) => (
              <div
                className="flex flex-row gap-1 rounded-full bg-primary-50 px-3 py-2"
                key={item}
              >
                <span className="text-sm font-medium leading-4 text-white">
                  {item}
                </span>
                <X
                  color="#fff"
                  onClick={() => handleRemove(item)}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
      />
      <Search
        onChangeSearch={setSearch}
        onChangeOpen={setOpen}
        search={search}
        isOpen={open}
      >
        <Search.Input>
          <Search.Input.Input
            placeholder="Search by keyword"
            className="h-10 text-sm text-neutral-40"
          />
        </Search.Input>

        <Search.Transition>
          <Search.Result>
            {filteredItems.length ? (
              filteredItems.map((list: Items) => (
                <ul className="space-y-1" key={list.id}>
                  <li>
                    {list.items.map(({ id, children, href, ...rest }: Item) => (
                      <Search.ResultItem
                        key={id}
                        index={searchGetItemIndex(filteredItems, id)}
                        closeOnSelect
                        {...rest}
                      >
                        {href ? (
                          <a href={href}>
                            <MenuItem>
                              <MenuItem.Title>{children}</MenuItem.Title>
                            </MenuItem>
                          </a>
                        ) : (
                          <MenuItem>
                            <MenuItem.Title>{children}</MenuItem.Title>
                          </MenuItem>
                        )}
                      </Search.ResultItem>
                    ))}
                  </li>
                </ul>
              ))
            ) : (
              <Search.NoResults />
            )}
          </Search.Result>
        </Search.Transition>
      </Search>
    </div>
  );
};

export default SearchSections;
