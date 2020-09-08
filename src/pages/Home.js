import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const AntSwitch = withStyles((theme) => ({
	root: {
		width: 40,
		height: 20,
		padding: 0,
		display: 'flex'
	},
	switchBase: {
		padding: 2,
		color: theme.palette.grey[500],
		'&$checked': {
			transform: 'translateX(12px)',
			color: theme.palette.common.white,
			'& + $track': {
				opacity: 1,
				backgroundColor: theme.palette.primary.main,
				borderColor: theme.palette.primary.main
			}
		}
	},
	thumb: {
		width: 20,
		height: 20,
		boxShadow: 'none'
	},
	track: {
		border: `1px solid ${theme.palette.grey[500]}`,
		borderRadius: 20 / 2,
		opacity: 1,
		backgroundColor: theme.palette.common.white
	},
	checked: {}
}))(Switch);

function Home(props) {
	const [ darkTheme, setDarkTheme ] = useState(false);
	const [ loading, setLoading ] = useState('indeterminate');
	const [ searchCountries, setSearchCountries ] = useState('');
	const [ latest, setLatest ] = useState([]);
	const [ results, setResults ] = useState([]);

	useEffect(() => {
		axios.get('https://disease.sh/v3/covid-19/all')
			  .then(function (response) {
				setLatest(response.data);
				setLoading('determinate');
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
		
		axios.get('https://disease.sh/v3/covid-19/countries')
			.then(function (response) {
			setLatest(response.data);
			})
			.catch(function (error) {
				console.log(error);
			})

	}, []);

	const date = new Date(parseInt(latest.updated));
	const lastUpdated = date.toString();

	const filterCountries = results.filter((item) => {
		return searchCountries !== '' ? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
	});

	const countries = filterCountries.map((data, i) => {
		return (
			<Grid item key={i}>
				<Card
					style={{
						backgroundColor: darkTheme ? '#a6a6a6' : '#f2f2f2',
						color: darkTheme ? '#ffffff' : 'Black',
						textAlign: 'center',
						margin: '10px',
						minWidth: 368
					}}
				>
					<CardMedia variant='top' component='img' image={data.countryInfo.flag} />

					<CardContent>
						<Typography
							variant='body2'
							component='h2'
							style={{
								fontWeight: 600,
								fontSize: '2rem',
								marginBottom: '20px'
							}}
						>
							{data.country}
						</Typography>

						<Typography
							style={{
								marginBottom: '20px'
							}}
							variant='body2'
						>
							<strong>Cases {data.cases}</strong>
						</Typography>
						<Typography
							style={{
								marginBottom: '20px'
							}}
							variant='body2'
						>
							<strong>Deaths {data.deaths}</strong>
						</Typography>
						<Typography
							style={{
								marginBottom: '20px'
							}}
							variant='body2'
						>
							<strong>Recovered {data.recovered}</strong>
						</Typography>
						<Typography
							style={{
								marginBottom: '20px'
							}}
							variant='body2'
						>
							<strong>Today's cases {data.todayCases}</strong>
						</Typography>
						<Typography
							style={{
								marginBottom: '20px'
							}}
							variant='body2'
						>
							<strong>Today's deaths {data.todayDeaths}</strong>
						</Typography>
						<Typography
							style={{
								marginBottom: '20px'
							}}
							variant='body2'
						>
							<strong>Active {data.active}</strong>
						</Typography>
						<Typography
							style={{
								marginBottom: '20px'
							}}
							variant='body2'
						>
							<strong>Critical {data.critical}</strong>
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		);
	});

	const handleDarkThemeChange = () => {
		setDarkTheme(!darkTheme);
	};

	return (
		<div
			style={{
				backgroundColor: darkTheme ? 'black' : 'white',
				color: darkTheme ? 'white' : 'black'
			}}
		>
			<br />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<CircularProgress variant={loading} size={50} color='primary' />
			</div>
			<br />
			<Tooltip style={{ height: '20px' }} title='Last modified date: 19/08/2020 '>
				<h2 style={{ textAlign: 'center' }}>COVID-19 Live Now</h2>
			</Tooltip>
			<br />
			<div style={{ textAlign: 'center' }}>
				<FormControl component='fieldset'>
					<Typography component='div'>
						<Grid component='label' container alignItems='center' spacing={1}>
							<Grid item>🌜</Grid>
							<Grid item>
								<AntSwitch checked={darkTheme} onChange={handleDarkThemeChange} />
							</Grid>
							<Grid item>🌞</Grid>
						</Grid>
					</Typography>
				</FormControl>
			</div>
			<br />

			<Grid container sty spacing={2}>
				<Grid item xs={12}>
					<Grid container justify='center' spacing={2}>
						<Grid item>
							<Card style={{ minWidth: 275, backgroundColor: '#8c8c8c' }} variant='outlined'>
								<CardContent style={{ textAlign: 'center' }}>
									<Typography
										style={{
											marginBottom: '20px'
										}}
										variant='h5'
										component='h2'
									>
										Cases
									</Typography>
									<Typography style={{ marginBottom: 20 }} color='textSecondary'>
										{latest.cases}
									</Typography>
									<hr />
									<Typography
										style={{
											marginBottom: '20px'
										}}
										variant='body2'
										component='p'
									>
										<small>Last updated {lastUpdated}</small>
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item>
							<Card style={{ minWidth: 275, backgroundColor: 'red' }} variant='outlined'>
								<CardContent style={{ textAlign: 'center' }}>
									<Typography
										style={{
											marginBottom: '20px'
										}}
										variant='h5'
										component='h2'
									>
										Deaths
									</Typography>
									<Typography style={{ marginBottom: 20 }} color='textSecondary'>
										{latest.deaths}
									</Typography>
									<hr />
									<Typography
										style={{
											marginBottom: '20px'
										}}
										variant='body2'
										component='p'
									>
										<small>Last updated {lastUpdated}</small>
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item>
							<Card style={{ minWidth: 275, backgroundColor: '#00cc00' }} variant='outlined'>
								<CardContent style={{ textAlign: 'center' }}>
									<Typography
										style={{
											marginBottom: '20px'
										}}
										variant='h5'
										component='h2'
									>
										Recovered
									</Typography>
									<Typography style={{ marginBottom: 20 }} color='textSecondary'>
										{latest.recovered}
									</Typography>
									<hr />
									<Typography
										style={{
											marginBottom: '20px'
										}}
										variant='body2'
										component='p'
									>
										<small>Last updated {lastUpdated}</small>
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<br />
			<form style={{ marginLeft: '20px', marginRight: '20px' }} noValidate autoComplete='off'>
				<Input
					style={{ width: '100%' }}
					onChange={(e) => setSearchCountries(e.target.value)}
					placeholder='Placeholder'
					inputProps={{ 'aria-label': 'description' }}
				/>
			</form>

			<Grid container sty spacing={2}>
				<Grid item xs={12}>
					<Grid container justify='center' spacing={2}>
						{countries}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
