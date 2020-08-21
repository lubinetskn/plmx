import React, {FunctionComponent} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core';
import {ReactComponent as Logo} from '../../../assets/logo.svg';
import {TypoWrapper} from './styled';
import {Link} from 'react-router-dom';

interface OwnProps {}

type Props = OwnProps;

const useStyles = makeStyles(() => ({
  logoText: {
    fontWeight: 'bold',
    lineHeight: '1.14',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const BlockLogoWide: FunctionComponent<Props> = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <Box display="flex" alignItems="center">
        <Logo />
        <TypoWrapper>
          <Typography component="span" className={classes.logoText}>
            Product Lifecycle Management
          </Typography>
        </TypoWrapper>
      </Box>
    </Link>
  );
};

export default BlockLogoWide;
