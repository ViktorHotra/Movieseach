import { useState } from 'react';

const tabs = {
    SIGN_IN: 'sign-in',
    SIGN_UP: 'sign-up'
};

export const useTabs = (defaultActiveTab = tabs.SIGN_IN) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const handleSwitchTab = nextTab => setActiveTab(nextTab);

    return { activeTab, tabs, onSwitchTab: handleSwitchTab };
};
