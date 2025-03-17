import AddOnSdk, {
	ClientStorage,
	// @ts-ignore Import module
} from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js'
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
let store = ClientStorage
AddOnSdk.ready.then(async () => {
	store = AddOnSdk.instance.clientStorage
	const root = createRoot(document.getElementById('root'))
	root.render(<App addOnSdk={AddOnSdk} store={store} />)
})
