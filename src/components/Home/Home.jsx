import React, {useContext, useState, useEffect} from 'react'
import './Home.css'
import {
	Flex,
	TextField,
	Button,
	ProgressCircle,
	Text,
	Heading,
	Picker,
	Item,
	View,
	Section,
	Link,
	InlineAlert,
	Content,
	FileTrigger,
	ContextualHelp,
} from '@adobe/react-spectrum'
import {AddOnSdkContext} from '../App'
import AlertIcon from '@spectrum-icons/workflow/Alert'
import axios from 'axios'

export const Home = ({store}) => {
	const addOnSdk = useContext(AddOnSdkContext)
	const [disable, setDisable] = useState(false)

	const importPDF = async(e)=>{
		setDisable(true)
		// Array.from(e) converts the file list into an array
		let files = Array.from(e);
		let blob = files[0]; // Assuming single file selection

		if (blob) {
			try {
				const fileName = blob.name;
				const mediaAttributes = { title: fileName };
    			await addOnSdk.app.document.importPdf(blob, mediaAttributes);
				setDisable(false)
			} catch (error) {
				console.log("Failed to import the pdf.");
				setDisable(false)
			}
		}
	}
	return (
		<>
				<Flex
					direction='column'
					gap='size-100'
					alignContent='start'
					justifyContent='start'
					marginStart='size-300'
					marginEnd='size-300'
					marginTop='size-10'
					width='size-2600'
					className='uploadPanelOverrides'
				>
					<Flex direction='column' gap='size-100' marginTop='size-200'>
						<Flex
							direction='column'
							gap='size-100'
							alignContent='start'
							justifyContent='start'
							width='size-2600'
						>
							<Flex
								direction='column'
								gap='size-100'
								alignContent='start'
								justifyContent='start'
								width='size-2600'
								marginTop='size-200'
							>
								<FileTrigger onSelect={(e) => importPDF(e)}>
									<Button
										style='fill'
										width='size-3400'
										id='createBtn'
										treatment='fill'
										variant='accent'
										isDisabled={disable}
									>
										Import PDF
									</Button>
								</FileTrigger>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
		</>
	)
}
