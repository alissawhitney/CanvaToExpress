import React, {createContext, useState} from 'react'
import {Home} from '../components/Home/Home.jsx'
import {Flex, lightTheme, Provider} from '@adobe/react-spectrum'
import './App.css'
export const AddOnSdkContext = createContext()
const App = ({addOnSdk, store}) => {
	return (
		<AddOnSdkContext.Provider value={addOnSdk}>
			<Provider
				theme={lightTheme}
				colorScheme='light'
				UNSAFE_className='neededOverflowSettings'
			>
				<Flex
					direction='column'
					gap='size-100'
					UNSAFE_className='neededOverflowSettings'
				>
					<Home store={store} />
				</Flex>
			</Provider>
		</AddOnSdkContext.Provider>
	)
}

export default App
