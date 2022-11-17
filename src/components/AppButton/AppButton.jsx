import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import './AppButton.scss'

const AppButton = ({ className, as, to, Icon, text, textClassName, Badge, onClick, type, form, disabled }) => {
		if(as === "Link") {
			return (
				<Button as={Link} to={to} className={`App-button ${className ? className : ""}`} disabled={disabled}>
						{Icon ? Icon : null}

						{
							text 
								? <span className={`${textClassName ? textClassName : ""}`}>
										{text}
									</span> 
								: null
						}
						
						{Badge ? Badge : null}
				</Button>
			)
		} else {
			return (
				<button className={`App-button ${className ? className : ""}`} onClick={onClick} form={form} type={type} disabled={disabled}>
						{Icon ? Icon : null}

						{
							text 
								? <span className={`${textClassName ? textClassName : ""}`}>
										{text}
									</span> 
								: null
						}

						{Badge ? Badge : null}
				</button>
			)
		}
}

export default AppButton;
