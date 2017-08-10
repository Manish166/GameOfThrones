/**
 * Created by Manish on 8/7/2017.
 */

import watchersaga from './watcher'
export default function* rootsaga() {
    yield[
        watchersaga(),
    ]
}