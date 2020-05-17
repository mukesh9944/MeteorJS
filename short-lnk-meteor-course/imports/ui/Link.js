import React from 'react';
import history from './history';
import { Meteor } from 'meteor/meteor';

import {Links} from '../api/links';
import LinksList from './LinksList'
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default () => {
  return (
    <div>
        <PrivateHeader title="Your Links"/>
        <div className="page-content">
          <LinksListFilters/>
          <AddLink/>
          <LinksList/>
        </div>
    </div>
  );
};
