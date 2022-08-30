import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";

import { useStore } from "../../../app/stores/store";
import ActivityListItem from "./ActivityListItem";
import { Header } from "semantic-ui-react";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub colour='teal'>
            {group}
          </Header>
          {activities.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </Fragment>
      ))}
    </>
  );
});
