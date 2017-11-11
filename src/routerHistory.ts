import { createBrowserHistory, BrowserHistoryBuildOptions } from 'history';

const historyOptions: BrowserHistoryBuildOptions = {
    basename: '/brackets/uiw-2017-bracket'
};

export default createBrowserHistory(historyOptions);