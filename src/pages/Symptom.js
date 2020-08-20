import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CleanHand from './../image/blue-2.png';
import Physical from './../image/Physicaldistancing-01.png';
import Cough from './../image/light_cough.gif';
import Fever from './../image/light_fever.gif';
import Tiredness from './../image/light_tiredness.gif';
import Engncov from '../image/engncov.png';
import Phone from '../image/phone.jpg';
import Health from '../image/health.jpg';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `wrapped-tab-${index}`,
		'aria-controls': `wrapped-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	}
}));

function Symptom(props) {
	const classes = useStyles();
	const [ value, setValue ] = React.useState('one');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar color='transparent'	 position='static'>
				<Tabs value={value} onChange={handleChange} aria-label='wrapped label tabs example'>
					<Tab value='one' label='Overview' wrapped {...a11yProps('one')} />
					<Tab value='two' label='Symptoms' {...a11yProps('two')} />
					<Tab value='three' label='Prevention' {...a11yProps('three')} />
					<Tab value='four' label='Treatments' {...a11yProps('three')} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index='one'>
				<h3>How is the virus that causes COVID-19 most commonly transmitted between people?</h3>
				<hr />
				<p>
					Current evidence suggests that COVID-19 spreads between people through direct, indirect (through
					contaminated objects or surfaces), or close contact with infected people via mouth and nose
					secretions. These include saliva, respiratory secretions or secretion droplets. These are released
					from the mouth or nose when an infected person coughs, sneezes, speaks or sings, for example. People
					who are in close contact (within 1 metre) with an infected person can catch COVID-19 when those
					infectious droplets get into their mouth, nose or eyes.
				</p>
				<p>
					To avoid contact with these droplets, it is important to stay at least 1 metre away from others,
					clean hands frequently, and cover the mouth with a tissue or bent elbow when sneezing or coughing.
					When physical distancing (standing one metre or more away) is not possible, wearing a fabric mask is
					an important measure to protect others. Cleaning hands frequently is also critical.
				</p>
				<p>
					Source:{' '}
					<a href='https://www.who.int/' target='_blank' style={{ color: 'blue' }}>
						who.int
					</a>
				</p>
			</TabPanel>
			<TabPanel value={value} index='two'>
				<p>The most common symptoms of COVID-19 are:</p>
				<p>
					<span>
						{' '}
						<img src={Cough} />{' '}
					</span>
					<span>
						{' '}
						<img src={Fever} />{' '}
					</span>
					<span>
						{' '}
						<img src={Tiredness} />{' '}
					</span>
				</p>
				<ul>
					<li>fever</li>
					<li>dry cough</li>
					<li>tiredness</li>
				</ul>
				<p>Other symptoms that are: </p>
				<ul>
					<li>less common and may affect some patients include aches and pains</li>
					<li>nasal congestion</li>
					<li>headache</li>
					<li>conjunctivitis</li>
					<li>sore throat</li>
					<li>diarrhea</li>
					<li>loss of taste or smell or a rash on skin or discoloration of fingers or toes</li>
				</ul>
				<p>
					These symptoms are usually mild and begin gradually. Some people become infected but only have very
					mild symptoms.
				</p>
				<iframe
					title='Five things to know about COVID-19 transmission'
					style={{ width: '853px', height: '480px' }}
					src='https://www.youtube.com/embed/677pSwGauqs'
				/>
				<p>
					Source:{' '}
					<a href='https://www.who.int/' target='_blank' style={{ color: 'blue' }}>
						who.int
					</a>
				</p>
			</TabPanel>
			<TabPanel style={{ paddingRight: '20px', paddingLeft: '12px' }} value={value} index='three'>
				<p>
					You can reduce your chances of being infected or spreading COVID-19 by taking some simple
					precautions:
				</p>
				<ul>
					<li>
						Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap
						and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills
						viruses that may be on your hands.
					</li>
					<li>
						Maintain at least 1 metre distance between yourself and others. Why? When someone coughs,
						sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain
						virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if
						the person has the disease.
					</li>
					<li>
						Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to
						come into close contact with someone that has COVID-19 and it is more difficult to maintain
						physical distance of 1 metre.
					</li>
					<li>
						Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses.
						Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the
						virus can enter your body and infect you.
					</li>
					<li />
					<li>
						Make sure you, and the people around you, follow good respiratory hygiene. This means covering
						your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the
						used tissue immediately and wash your hands. Why? Droplets spread virus. By following good
						respiratory hygiene, you protect the people around you from viruses such as cold, flu and
						COVID-19.
					</li>
					<li>
						Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until
						you recover.
						<img
							title='physicaldistancing'
							alt='physicaldistancing'
							style={{ height: '450px' }}
							src={Physical}
						/>
					</li>
					<li>
						Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting
						others.
						<img
							title='clear hand'
							alt='clear hand'
							style={{ height: '450px'}}
							src={CleanHand}
						/>
					</li>
					<li>
						Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.
					</li>{' '}
					<li>
						If you have a fever, cough and difficulty breathing, seek medical attention, but call by
						telephone in advance if possible and follow the directions of your local health authority.
					</li>
					<br />
					<li>Why?</li>
					<li>
						National and local authorities will have the most up to date information on the situation in
						your area.
					</li>{' '}
					<li>
						Calling in advance will allow your health care provider to quickly direct you to the right
						health facility.
					</li>{' '}
					<li>
						This will also protect you and help prevent spread of viruses and other infections. Keep up to
						date on the latest information from trusted sources, such as WHO or your local and national
						health authorities.
					</li>{' '}
					<li>
						Why? Local and national authorities are best placed to advise on what people in your area should
						be doing to protect themselves.
					</li>
				</ul>
				<p>
					Source:{' '}
					<a href='https://www.who.int/' target='_blank' style={{ color: 'blue' }}>
						who.int
					</a>
				</p>
			</TabPanel>
			<TabPanel value={value} index='four'>
				<p>
					To date, there are no specific vaccines or medicines for COVID-19. Treatments are under
					investigation, and will be tested through clinical trials. World Health Organization
				</p>
				<hr />
				<p>Self care</p>
				<p>
					If you feel sick you should rest, drink plenty of fluid, and eat nutritious food. Stay in a separate
					room from other family members, and use a dedicated bathroom if possible. Clean and disinfect
					frequently touched surfaces.
				</p>
				<p>
					It is normal to feel sad, stressed, or confused during a crisis. Talking to people you trust, such
					as friends and family, can help. If you feel overwhelmed, talk to a health worker or counsellor.
				</p>
				<hr />
				<p>Medical treatments</p>
				<img style={{ height: '263px', marginRight: '12px' }} src={Engncov} />
				<img style={{ height: '263px', marginRight: '12px' }} src={Phone} />
				<img style={{ height: '263px' }} src={Health} />
				<p>
					If you have mild symptoms and are otherwise healthy, self-isolate and contact your medical provider
					or a COVID-19 information line for advice.
				</p>
				<p>Seek medical care if you have a fever, a cough, and difficulty breathing. Call in advance.</p>
				<p>
					Source:{' '}
					<a href='https://www.who.int/' target='_blank' style={{ color: 'blue' }}>
						who.int
					</a>
				</p>
			</TabPanel>
		</div>
	);
}

export default Symptom;
