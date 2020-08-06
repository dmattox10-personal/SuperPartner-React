import { useState, useEffect } from 'react'
import PouchDB from 'pouchdb-browser'

export const useRemote = database => {

    const remotesDB = new PouchDB('remotes') // DO NOT EVER SYNC THIS
    const [remotesList, updateRemotesList] = useState(null)
    
    useEffect(() => {
        remotesDB.info().then( info => {
            if (info.doc_count > 0) {
                remotesDB.allDocs({
                    include_docs: true
                }).then(results => {
                    updateRemotesList(results.rows)
                })
            }
        })
    }, [])

    return [remotesList]
}