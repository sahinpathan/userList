/*
 * EditUser Messages
 *
 * This contains all the text for the EditUser component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.EditUser';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the EditUser component!',
  },
  nameLabel: {
    id: `${scope}.nameLabel.message`,
    defaultMessage: 'Name',
  },
});
