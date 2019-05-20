import React, { Component } from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import API from '../../utils/API';

const styles = theme => ({
    padding: {
        padding: theme.spacing.unit,
        width: '600px',
        height: '500px',
        margin: '100px auto',
        border: '2px solid grey'
    },
    form: {
        margin: '0 auto',
        width: '300px',
        fontFamily: 'Tahoma, Geneva, sans-serif',
    },
    h1: {
			textAlign: 'center',
			color: '#4d4d4d',
			fontSize: '24px',
			padding: '20px 0 20px 0',
	},
	input: {
		width: '100%',
		padding: '15px',
		border: '1px solid #dddddd',
		marginBottom: '15px',
		boxSizing: 'border-box',
	},
	login: {
		width: '100%',
		padding: '15px',
	},
});

class Login extends Component {
   constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
   }

  Change = e => {
    this.setState({ 
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    console.log(this.state);
    if(this.state.username.length === 0){
            return;
        }
        if(this.state.password.length === 0){
            return;
        }
        API.login(this.state.username, this.state.password).then(function(data){
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
	})
  };

  render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <form className={classes.form}>
                	<h1 className={classes.h1}>NOMAD MUSCLE</h1>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className={classes.input} onChange={e => this.Change(e) } value={this.state.username} name="username" id="username" label="Identifiant" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField className={classes.input} onChange={e => this.Change(e) } value={this.state.password} name="password" id="password" label="Mot de passe" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="flex-end">
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Mot de passe oublié ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button className={classes.login} variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={e => this.onSubmit(e)}>Se connecter</Button>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button className={classes.login} variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={e => this.onSubmit(e)}>S'inscrire !</Button>
                    </Grid>
                </form >
            </Paper>
        );
	}
}
export default withStyles(styles)(Login);