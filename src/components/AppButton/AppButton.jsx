import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import './AppButton.scss'

const AppButton = ({ className, as, to, Icon, text, textClassName, Badge, onClick }) => {
		if(as === "Link") {
			return (
				<Button as={Link} to={to} className={`App-button ${className}`}>
						{Icon ? Icon : null}

						{
							text 
								? <span className={`${textClassName ? textClassName : null}`}>
										{text}
									</span> 
								: null
						}
						
						{Badge ? Badge : null}
				</Button>
			)
		} else {
			return (
				<button className={`App-button ${className}`} onClick={onClick}>
						{Icon ? Icon : null}

						{
							text 
								? <span className={`${textClassName ? textClassName : null}`}>
										{text}
									</span> 
								: null
						}
				</button>
			)
		}
}

export default AppButton;
