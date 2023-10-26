"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const addons_1 = require("@storybook/addons");
/* --- GraphQL Storybook Plugin ---------------------------------------------------------------- */
addons_1.addons.register('/graphql', () => {
    addons_1.addons.add('graphql-playground/tab', {
        type: addons_1.types.TAB,
        title: 'GraphQL',
        route: ({ storyId }) => `/graphql/${storyId}`,
        match: ({ viewMode }) => viewMode === 'graphql',
        render: () => {
            let graphqlUrl = 'http://localhost:3000/api/graphql';
            const isDev = process.env.NODE_ENV === 'development';
            if (!isDev)
                graphqlUrl = `${process.env.STORYBOOK_BACKEND_URL}/api/graphql`;
            return (0, react_1.createElement)('iframe', {
                style: { width: '100%', height: '100%' },
                src: graphqlUrl,
            });
        },
    });
});
