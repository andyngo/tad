/* @flow */

import * as Immutable from 'immutable'
import ViewParams from './ViewParams'
import SimpleDataView from './SimpleDataView'

/**
 * Immutable representation of all state associated
 * with a single view.
 *
 * Consists of user-editable ViewParams plus any associated
 * query / network / render state
 */
export default class ViewState extends Immutable.Record({
  viewParams: new ViewParams(),
  loading: false,
  dataView: null
}) {
  viewParams: ViewParams
  loading: boolean
  dataView: ?SimpleDataView
}