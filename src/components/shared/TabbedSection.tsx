'use client';

import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';
import FFPFFRChart from '@/components/charts/FFPFFRChart';
import ResourceDetails from '@/modules/dashboard/components/ResourceDetails';

const tabData = [
    { title: 'FFP / FFR', content: <FFPFFRChart /> },
    { title: 'Resource Details', content: <ResourceDetails /> },
];

const TabbedSection = () => {
    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className="flex space-x-2 border-b border-gray-200 mb-2 bg-white">
                    {tabData.map((tab, idx) => (
                        <Tab key={idx} as={Fragment}>
                            {({ selected }) => (
                                <button
                                    className={classNames(
                                        'px-4 py-2 text-sm font-medium rounded-t',
                                        selected
                                            ? 'bg-white border-l border-t border-r border-gray-300 text-blue-600'
                                            : 'text-gray-500 hover:text-blue-500'
                                    )}
                                >
                                    {tab.title}
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    {tabData.map((tab, idx) => (
                        <Tab.Panel key={idx}>
                            {tab.content}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default TabbedSection;
