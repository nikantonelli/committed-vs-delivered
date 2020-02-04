Ext.define('Constants', {
    statics: {
        CHART_TITLE: 'Committed vs. Delivered',
        PLANNED: 'Planned',
        UNPLANNED: 'Unplanned',
        COMMITTED: 'Committed',
        DELIVERED: 'Delivered',
        EXCEPTION: 'Exception',
        IN_PROGRESS: ' (In-Progress)',
        Y_AXIS_TITLE_COUNT: 'Count',
        Y_AXIS_TITLE_POINT: 'Points',
        APP_RESERVED_HEIGHT: 60,
        ALWAYS_SELECTED_FIELDS: [
            'FormattedID',
            'Name'
        ],
        DERIVED_FIELDS: [
            'timeboxName',
            'timeboxStartDate',
            'timeboxEndDate',
            'timeboxAddedDate',
            'Planned',
            'Delivered'
        ],
        STORY_DEFAULT_FIELDS: [
            'FormattedID',
            'Name',
            'ScheduleState',
            'Iteration',
            'Release',
            'AcceptedDate',
            'PlanEstimate'
        ],
        PI_DEFAULT_FIELDS: [
            'FormattedID',
            'Name',
            'State',
            'Release',
            'ActualEndDate',
        ],
        TIMEBOX_TYPE_ITERATION: 'Iteration',
        TIMEBOX_TYPE_RELEASE: 'Release',
        TIMEBOX_TYPE_ITERATION_LABEL: 'Iteration',
        TIMEBOX_TYPE_RELEASE_LABEL: 'Release',
        UNPLANNED_DESCRIPTION: 'added to {timebox} more than {days} days after start',
        EXCEPTION_DESCRIPTION: 'accepted before start, or more than {days} after end of {timebox}'
    }
});
